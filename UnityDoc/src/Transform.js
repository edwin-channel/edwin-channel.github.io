/** 
 * 所有附加到 GameObject 的組件基類
 * struct
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
     * 使用三個角度來保存方位 (Inspector 的 rotation 若為根物件就是世界歐拉角)。
     * x(Pitch), z(Roll) 沿自身坐標系旋轉，y(Yaw) 沿世界坐標系旋轉。
     * 歐拉角沒有方向大小的概念，借用 Vector3 儲存角度而不是向量，x,y,z 表示個軸向的旋轉角度。
     * 程式設置角度時 x 限制在 -90 ~ 90 度之間, y,z -180 ~ 180 之間。
     * 當物體旋轉 +90 或 -90度時，自身坐標系 z 軸與世界坐標系 y 軸會重合, 此時再沿 y 或 z 旋轉時, 將失去一個自由度，即萬向節死鎖。
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
     * 世界座標旋轉角度。
     * 無歐拉角角度限制與萬向節死鎖問題。
     * Quaternion 在 3D 圖形學中代表旋轉，由一個三維向量(x,y,z)和一個標量(w)組成。
     * 旋轉軸為 V, 旋轉弧度為 θ, 如果使用四元數表示, 則四個分量為:
     * x = sin(θ/2) * V.x。
     * y = sin(θ/2) * V.y。
     * z = sin(θ/2) * V.z。
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

    

}