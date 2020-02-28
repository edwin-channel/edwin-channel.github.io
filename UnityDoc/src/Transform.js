/** 
 * 旋轉位移縮放物件的變換組件，在場景中每一個物件都有變換組件
 * @extends UnityEngine.Component
 */
UnityEngine.Transform = class {

	/**
     * 子物件數量 (get only)
     * @example
     * // Ball 為 Cube 的子 GameObject
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Ball");
     * Debug.Log(parentGO.transform.childCount); // 1
     */
	childCount;

    /**
     * 使用三個角度來保存方位 (Inspector 的 rotation 若為根物件就是世界歐拉角)。<br>
     * x(Pitch), z(Roll) 沿自身坐標系旋轉，y(Yaw) 沿世界坐標系旋轉。<br>
     * 歐拉角沒有方向大小的概念，借用 Vector3 儲存角度而不是向量，x,y,z 表示個軸向的旋轉角度。<br>
     * 程式設置角度時 x 限制在 -90 ~ 90 度之間, y,z -180 ~ 180 之間。<br>
     * 當物體旋轉 +90 或 -90度時，自身坐標系 z 軸與世界坐標系 y 軸會重合, 此時再沿 y 或 z 旋轉時, 將失去一個自由度，即萬向節死鎖。<br>
     * 萬向節死鎖狀態下沿 y 或 z 旋轉時，歸 z 軸旋轉。因為萬向節死鎖可改用四元數 this.transform.rotation。
     * @example
     * // 歐拉角的 x 增加 1 度
     * this.transform.eulerAngles += new Vector3(1, 0, 0);
     */
	eulerAngles;

    /**
     * 物件 Z 軸往前方的單位向量
     * @example
     * // 沿 Z 軸前方畫出單位長度 5 的紅線 (請在 Update 函式內畫線)
     * Debug.DrawLine(cube.transform.position, cube.transform.position + cube.transform.forward * 5, Color.red);
     */
	forward;

    /**
     * 自從最後一次的 hasChanged 設成 false 後 transform 是否有設定過
     * @example
     * if (cube.transform.hasChanged) {
     *     Debug.Log("cube.transform.hasChanged");
     *     cube.transform.hasChanged = false;
     * }
     */
	hasChanged;

    /**
     * 變換組件 hierarchy 結構可以存儲的容量, 會根據子物件增加而自動配置容量空間, 或可手動設置容量大小
     * @example
     * Debug.Log(cube.transform.hierarchyCapacity);
     */
    hierarchyCapacity;

    /**
     * 變換組件 hierarchy 結構中有變換組件的數量 
     * @example
     * Debug.Log(cube.transform.hierarchyCount);
     */
    hierarchyCount;

    /**
     * 相對於父物件的旋轉角度，使用三個角度來保存方位 (Inspector 的 rotation 若為子物件就是本地歐拉角)。
     * @example
     * // 歐拉角的 x 增加 1 度
     * this.transform.localEulerAngles += new Vector3(1, 0, 0);
     */
	localEulerAngles;

    /**
     * 相對於父物件的位移。
     * @example
     * // 父物件軸 x 增加 1
     * this.transform.localPosition += new Vector3(1, 0, 0);
     */
	localPosition;

    /**
     * 相對於父物件的旋轉。
     * @example
     * // 用四元數讓 x 增加 1 度
     * this.transform.localRotation *= Quaternion.Euler(1, 0, 0);
     */
	localRotation;

    /**
     * 相對於父物件的縮放。
     * @example
     * // 子物件放大兩倍
     * this.transform.localScale *= 2;
     */
	localScale;

    /**
     * 轉換一個點從本地座標到世界座標，可使用 Transform.TransformPoint
     */
    localToWorldMatrix;

    /**
     * 物件的整體縮放 (get only)
     * @example
     * // 父子物件放大兩倍
     * parentGO.transform.localScale *= 2;
     * childGO.transform.localScale *= 2;
     * Debug.Log(childGO.transform.lossyScale); // (4.0, 4.0, 4.0) 整體放大4倍
     */
	lossyScale;

    /**
     * 設置父物件
     * @example
     * var parentGO = GameObject.Find("CubeSprite");
     * var childGO = GameObject.Find("CubeSpriteSub");
     * childGO.transform.parent = parentGO.transform;
     */
	parent;

    /**
     * 世界座標位置。
     * @example
     * // 軸 x 增加 1
     * this.transform.position += new Vector3(1, 0, 0);
     */
	position;

    /**
     * 物件 X 軸往右方的單位向量
     * @example
     * // 沿 X 軸右方畫出單位長度 5 的紅線 (請在 Update 函式內畫線)
     * Debug.DrawLine(cube.transform.position, cube.transform.position + cube.transform.right * 5, Color.red);
     */
	right;

    /**
     * 取得最父層級變換組件 (get only)
     * @example
     * // parentGO 與 childGO 都在 Hierarchy 面板根節點
     * var parentGO = GameObject.Find("CubeSprite");
     * var childGO = GameObject.Find("CubeSpriteSub");
     * hildGO.transform.parent = parentGO.transform;
     * Debug.Log(childGO.transform.root == parentGO.transform); // True
     */
	root;

    /**
     * 世界座標旋轉角度。<br>
     * 無歐拉角角度限制與萬向節死鎖問題。<br>
     * Quaternion 在 3D 圖形學中代表旋轉，由一個三維向量(x,y,z)和一個標量(w)組成。<br>
     * 旋轉軸為 V, 旋轉弧度為 θ, 如果使用四元數表示, 則四個分量為:<br>
     * x = sin(θ/2) * V.x。<br>
     * y = sin(θ/2) * V.y。<br>
     * z = sin(θ/2) * V.z。<br>
     * w = cos(θ/2)。
     * @example
     * // 物體沿 y 軸旋轉 50 度
     * var cube = GameObject.Find("CubeB");
     * Quaternion qt = new Quaternion();
     * Vector3 v = Vector3.up;
     * float rad = 50 * Mathf.Deg2Rad;
     * qt.x = Mathf.Sin(rad / 2) * v.x;
     * qt.y = Mathf.Sin(rad / 2) * v.y;
     * qt.z = Mathf.Sin(rad / 2) * v.z;
     * qt.w = Mathf.Cos(rad / 2);
     * cube.transform.rotation = qt;
     * // 簡易寫法 (歐拉角轉四元數)
     * cube.transform.rotation = Quaternion.Euler(0, 50, 0);
     * // 用四元數讓 x 增加 1 度 (乘法表是組合旋轉，即旋轉角度疊加)
     * cube.transform.rotation *= Quaternion.Euler(1, 0, 0);
     * // Rotate 方法也是用四元數旋轉無死鎖現象
     * cube.transform.Rotate(1,0,0);
     */
	rotation;

    /**
     * 物件 Y 軸往上方的單位向量
     * @example
     * // 沿 Y 軸上方畫出單位長度 5 的紅線 (請在 Update 函式內畫線)
     * Debug.DrawLine(cube.transform.position, cube.transform.position + cube.transform.up * 5, Color.red);
     */
	up;

    /**
     * 轉換一個點從世界座標到本地座標，可使用 Transform.InverseTransformPoint
     */
    worldToLocalMatrix;

    /**
     * Transform 建構子
     */
    constructor() {}

    /**
     * 讓子物件脫離本物件變成場景根物件
     * @example
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Sphere");
     * // Sphere 元件會脫離 Cube 變成場景根物件
     * parentGO.transform.DetachChildren();
     */
    DetachChildren() {}
    
    /**
     * 尋找子變換組件
     * @param {string} name - 指定要尋找的 GameObject name
     * @return {Transform} 回傳子變換組件
     * @example
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Sphere");
     * // 找到子變換組件的 gameObject
     * Debug.Log(parentGO.transform.Find("Sphere").gameObject);
     */
    Find(name) {}

    /**
     * 以索引尋找子變換組件
     * @param {int} index - 索引
     * @return {Transform} 回傳子變換組件
     * @example
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Sphere");
     * // 找子變換組件
     * Debug.Log(parentGO.transform.GetChild(0)); // Sphere (UnityEngine.Transform)
     */
    GetChild(index) {}

    /**
     * 取得自身索引
     * @return {int} 回傳子變換組件
     * @example
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Sphere");
     * var childGO2 = GameObject.Find("Capsule");
     * Debug.Log(childGO.transform.GetSiblingIndex()); // 0
     */
    GetSiblingIndex() {}

    /**
     * 世界方向轉本地方向，不受scale影響
     * @param {Vector3} direction - 世界方向
     * @return {Vector3} 本地方向
     * @example
     * var cube = GameObject.Find("Cube");
     * cube.transform.Rotate(0, 45, 0);
     * Debug.Log(cube.transform.InverseTransformDirection(new Vector3(1,0,0))); // (0.7, 0.0, 0.7)
     * cube.transform.localScale *= 2;
     * Debug.Log(cube.transform.InverseTransformDirection(new Vector3(1,0,0))); // (0.7, 0.0, 0.7)
     */
    InverseTransformDirection(direction) {}

    /**
     * 世界座標轉本地座標，受scale影響
     * @param {Vector3} position - 世界座標
     * @return {Vector3} 本地座標
     * @example
     * var cube = GameObject.Find("Cube");
     * cube.transform.Rotate(0, 45, 0);
     * Debug.Log(cube.transform.InverseTransformPoint(new Vector3(2,0,0))); // (1.4, 0.0, 1.4)
     */
    InverseTransformPoint(position) {}
    
    /**
     * 世界向量轉本地向量，受scale影響
     * @param {Vector3} vector - 世界向量
     * @return {Vector3} 本地向量
     * @example
     * var cube = GameObject.Find("Cube");
     * cube.transform.Rotate(0, 45, 0);
     * Debug.Log(cube.transform.InverseTransformVector(new Vector3(1,0,0))); // (0.7, 0.0, 0.7)
     * cube.transform.localScale *= 2;
     * Debug.Log(cube.transform.InverseTransformVector(new Vector3(1,0,0))); // (0.4, 0.0, 0.4)
     */
    InverseTransformVector(vector) {}

    /**
     * 是否為指定組件之子變換組件
     * @param {Transform} parent - 父變換組件
     * @return {bool} 回傳是否為指定組件之子變換組件
     * @example
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Sphere");
     * Debug.Log(childGO.transform.IsChildOf(parentGO.transform)); // True
     */
    IsChildOf(parent) {}

    /**
     * 讓物件前方注視指定目標變換組件
     * @param {Transform} target - 目標變換組件
     * @param {Vector3} [worldUp=Vector3.up] - 上方的方向
     * @example
     * var cam = GameObject.Find("Main Camera");
     * var sphere = GameObject.Find("Sphere");
     * Debug.Log(cam.transform.LookAt(sphere.transform, Vector3.left)); // 相機側放，意即相機左方朝上
     */
    LookAt(target) {}

    /**
     * 旋轉物件
     * @param {float} xAngle - x軸旋轉角度
     * @param {float} yAngle - y軸旋轉角度
     * @param {float} zAngle - z軸旋轉角度
     * @param {Space} [relativeTo=Space.Self] - Space.Self 或是 Space.World，以自身或世界座標旋轉
     * @example
     * // Rotate 方法讓 x 增加 1 度
     * cube.transform.Rotate(1,0,0);
     */
	Rotate(xAngle, yAngle, zAngle, relativeTo) {}

    /**
     * 繞點旋轉
     * @param {Vector3} point - 旋轉點
     * @param {Vector3} axis - Vector3.up 表示以 y 軸旋轉
     * @param {float} angle - 旋轉角度
     * @example
     * // Cube 的 position 為 0,0,0; Sphere 的 position 為 1,0,0
     * void Update()
     * {
     *     var A_GO = GameObject.Find("Cube"); // Find 方法建議用在 start 函示內，這裡是簡單演示
     *     var B_GO = GameObject.Find("Sphere");
     *     B_GO.transform.RotateAround(A_GO.transform.position, Vector3.up, 1); // 球繞方塊轉，每次 update 轉 1 度
     * }
     */
    RotateAround(point, axis, angle) {}

    /**
     * 設置子變換組件為第一個節點
     * @example
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Sphere");
     * var childGO2 = GameObject.Find("Capsule");
     * childGO2.transform.SetAsFirstSibling();
     */
    SetAsFirstSibling() {}

    /**
     * 設置子變換組件為最後一個節點
     * @example
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Sphere");
     * var childGO2 = GameObject.Find("Capsule");
     * childGO.transform.SetAsLastSibling();
     */
    SetAsLastSibling() {}

    /**
     * 設置父組件
     * @param {Transform} parent - 父變換組件
     * @param {bool} worldPositionStays - 是否保留在原位, 如果為否則子物件的相對位移會轉至對新父變換組件的相對位移
     * @example
     * // Cube 與 Sphere 在根節點，Capsule 為 Cube 子物件
     * var parentGO = GameObject.Find("Cube");
     * var parentGO2 = GameObject.Find("Sphere");
     * var childGO = GameObject.Find("Capsule");
     * childGO.transform.SetParent(parentGO2.transform, false);
     */
    SetParent(parent, worldPositionStays) {}

    /**
     * 設置物件世界座標與旋轉
     * @param {Vector3} position - 座標
     * @param {Quaternion} rotation - 旋轉
     * @example
     * // x 方向移 5 單位並旋轉 y 軸 45 度
     * var cube = GameObject.Find("Cube");
     * cube.transform.SetPositionAndRotation(new Vector3(5, 0, 0), Quaternion.Euler(0, 45, 0));
     */
    SetPositionAndRotation(position, rotation) {}

    /**
     * 設置子變換組件索引
     * @param {int} index - 索引
     * @example
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Sphere");
     * var childGO2 = GameObject.Find("Capsule");
     * childGO2.transform.SetSiblingIndex(0);
     */
    SetSiblingIndex(index) {}

    /**
     * 本地方向轉世界方向，不受scale影響，請參考 InverseTransformDirection
     * @param {Vector3} direction - 本地方向
     * @return {Vector3} 世界方向
     */
    TransformDirection(direction) {}

    /**
     * 本地座標轉世界座標，受scale影響，請參考 InverseTransformPoint
     * @param {Vector3} position - 本地座標
     * @return {Vector3} 世界座標
     */
    TransformPoint(position) {}
    
    /**
     * 本地向量轉世界向量，受scale影響，請參考 InverseTransformVector
     * @param {Vector3} vector - 本地向量
     * @return {Vector3} 世界向量
     */
    TransformVector(vector) {}

    /**
     * 移動物件
     * @param {float} x - x軸位移
     * @param {float} y - y軸位移
     * @param {float} z - z軸位移
     * @param {Space} [relativeTo=Space.Self] - Space.Self 或是 Space.World，以自身或世界座標位移
     * @example
     * // Translate 方法讓 x 增加 1 單位
     * cube.transform.Translate(1,0,0);
     */
    Translate(x, y, z, relativeTo) {}

}