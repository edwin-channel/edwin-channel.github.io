/** 
 * Unity 場景上所有有形實體的基類
 * @extends UnityEngine.Object
 */
UnityEngine.GameObject = class {
    
	/**
     * 是否在階層啟用 (get only)
     * @example
     * // Ball 為 Cube 的子 GameObject
     * var parentGO = GameObject.Find("Cube");
     * var childGO = GameObject.Find("Ball");
     * parentGO.SetActive(false); // 設定父物件不啟用
     * Debug.Log(parentGO.activeSelf); // False, 父物件不啟用
     * Debug.Log(childGO.activeSelf); // True, 子物件為啟用
     * Debug.Log(childGO.activeInHierarchy); // False, 子物件雖啟用但因父物件不啟用而連帶不顯示
     */
	activeInHierarchy;

    /**
     * 自身是否啟用 (get only)
     * @example
     * var GO = GameObject.Find("Cube");
     * GO.SetActive(false); // 設定物件不啟用
     * Debug.Log(GO.activeSelf); // False, 物件不啟用
     */
	activeSelf;

    /**
     * 是否為靜態物件, 靜態物件與是否場景烘培有關 (Editor only API)
     * @example
     * var GO = GameObject.Find("Cube");
     * Debug.Log(GO.isStatic);
     */
	isStatic;

    /**
     * 取得 layer 索引
     * @example
     * var GO = GameObject.Find("Cube");
     * // 取得 layer name
     * Debug.Log(LayerMask.LayerToName(GO.layer)); // Default
     */
	layer;

    /**
     * 取得物件所在 scene
     * @example
     * var GO = GameObject.Find("Cube");
     * Debug.Log(GO.scene.name);
     */
	scene;

    /**
     * 取得物件標籤
     * @example
     * var GO = GameObject.Find("Cube");
     * Debug.Log(GO.tag);
     */
	tag;

    /**
     * 取得變換組件
     * @example
     * var GO = GameObject.Find("Cube");
     * Debug.Log(GO.transform);
     */
	transform;

    /**
     * GameObject 建構子
     * @param {string} [name] - 物件名
     * @param {Type[]} [components] - components 列表
     * @example
     * var player = new GameObject("test", typeof(Rigidbody), typeof(BoxCollider));
     */
    constructor(name, component) {}

    /**
     * 新增 component 組件至 gameObject
     * @param {Type} className - 要新增組件的類名
     * @example
     * var player = new GameObject("test");
     * player.AddComponent(typeof(Rigidbody));
     * player.AddComponent&lt;SphereCollider&gt;();
     */
    AddComponent(className) {}

    /**
     * 啟用物件與否
     * @param {bool} value - 啟用物件與否
     * @example
     * var player = new GameObject("test");
     * player.SetActive(false);
     */
    SetActive(value) {}

    /**
     * 針對指定的 GameObject 內部、以及該 GameObject Child 所掛載的 Component 有用到的函式執行。
     * @param {string} methodName - 要被呼叫的函式字串名
     * @param {object} [parameter=null] - 傳遞的參數
     * @param {SendMessageOptions} [options=SendMessageOptions.RequireReceiver] - 要是找不到函示是否報錯
     * @example
     * // 父 GameObject MonoBehaviour 裡面加上 void Test() { Debug.Log(this.name + " : " + "Test"); }
     * // 子 GameObject MonoBehaviour 裡面加上 void Test() { Debug.Log(this.name + " : " + "Test"); }
     * // 父 GameObject MonoBehaviour Start 函式裡面加上
     * BroadcastMessage("Test"); // 父子 Test 函式都會呼叫
     */
    BroadcastMessage(methodName, parameter, SendMessageOptions) {}

    /**
     * 針對指定的 GameObject 內部所掛載的 Component 有用到的函式執行。
     * @param {string} methodName - 要被呼叫的函式字串名
     * @param {object} [parameter=null] - 傳遞的參數
     * @param {SendMessageOptions} [options=SendMessageOptions.RequireReceiver] - 要是找不到函示是否報錯
     * @example
     * // 父 GameObject MonoBehaviour 裡面加上 void Test() { Debug.Log(this.name + " : " + "Test"); }
     * // 子 GameObject MonoBehaviour 裡面加上 void Test() { Debug.Log(this.name + " : " + "Test"); }
     * // 父 GameObject MonoBehaviour Start 函式裡面加上
     * SendMessage("Test"); // 父 Test 函式會呼叫，子 Test 函式不會呼叫
     */
    SendMessage(methodName, parameter, SendMessageOptions) {}

    /**
     * 針對指定的 GameObject 內部、以及該 GameObject Parent 所掛載的 Component 有用到的函式執行。
     * @param {string} methodName - 要被呼叫的函式字串名
     * @param {object} [parameter=null] - 傳遞的參數
     * @param {SendMessageOptions} [options=SendMessageOptions.RequireReceiver] - 要是找不到函示是否報錯
     * @example
     * // 父 GameObject MonoBehaviour 裡面加上 void Test() { Debug.Log(this.name + " : " + "Test"); }
     * // 子 GameObject MonoBehaviour 裡面加上 void Test() { Debug.Log(this.name + " : " + "Test"); }
     * // 子 GameObject MonoBehaviour Start 函式裡面加上
     * SendMessageUpwards("Test"); // 父子 Test 函式都會呼叫
     */
    SendMessageUpwards(methodName, parameter, SendMessageOptions) {}

    /**
     * 是否 tag 比對成功
     * @param {string} tag - 要被呼叫的函式字串名
     * @return {bool} 是否比對成功
     * @example
     * // 判斷觸發器觸發且 tag 為 Player 時刪除 GameObject
     * void OnTriggerEnter(Collider other)
     * {
     *     if (other.gameObject.CompareTag("Player"))
     *     {
     *         Destroy(other.gameObject);
     *     }
     * }
     */
    CompareTag(tag) {}

    /**
     * 尋找本物件組件
     * @param {Type} type - 指定要尋找的組件類型
     * @return {Component} 回傳配對型態的組件，如果沒有回傳 null
     * @example
     * var script = this.GetComponent(typeof(MonoBehaviour)); // 找到腳本
     * Debug.Log(script);
     */
    GetComponent(type) {}

    /**
     * 尋找本物件組件包含子物件組件，第一個找到的回傳
     * @param {Type} type - 指定要尋找的組件類型
     * @return {Component} 回傳配對型態的組件，如果沒有回傳 null
     * @example
     * var script = this.GetComponentInChildren(typeof(MonoBehaviour)); // 找到腳本
     * Debug.Log(script);
     */
    GetComponentInChildren(type) {}

    /**
     * 尋找本物件組件包含父物件組件，第一個找到的回傳
     * @param {Type} type - 指定要尋找的組件類型
     * @return {Component} 回傳配對型態的組件，如果沒有回傳 null
     * @example
     * var script = this.GetComponentInParent(typeof(MonoBehaviour)); // 找到腳本
     * Debug.Log(script);
     */
    GetComponentInParent(type) {}

    /**
     * 尋找本物件組件並回傳陣列
     * @param {Type} type - 指定要尋找的組件類型
     * @return {Component[]} 回傳配對型態的組件陣列
     * @example
     * var scripts = this.GetComponents(typeof(MonoBehaviour)); // 找到腳本
     * foreach(var script in scripts) Debug.Log(script);
     */
    GetComponents(type) {}

    /**
     * 尋找本物件組件包含子物件組件並回傳陣列
     * @param {Type} type - 指定要尋找的組件類型
     * @return {Component[]} 回傳配對型態的組件陣列
     * @example
     * var scripts = this.GetComponentsInChildren(typeof(MonoBehaviour)); // 找到腳本
     * foreach(var script in scripts) Debug.Log(script);
     */
    GetComponentsInChildren(type) {}

    /**
     * 尋找本物件組件包含父物件組件並回傳陣列
     * @param {Type} type - 指定要尋找的組件類型
     * @return {Component[]} 回傳配對型態的組件陣列
     * @example
     * var scripts = this.GetComponentsInParent(typeof(MonoBehaviour)); // 找到腳本
     * foreach(var script in scripts) Debug.Log(script);
     */
    GetComponentsInParent(type) {}

    /**
     * 嘗試獲取組件
     * @param {Type} type - 指定要尋找的組件類型
     * @param {out_Component} component - 輸出的組件
     * @return {bool} 是否找到組件
     * @example
     * Component script;
     * if (this.TryGetComponent(typeof(MonoBehaviour),out script)) Debug.Log(script);
     */
    TryGetComponent(type) {}

    /**
     * 建立基本物件
     * @param {PrimitiveType} type - 基本物件類型
     * @example
     * // 建立方塊
     * GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
     * cube.transform.position = new Vector3(0, 0.5f, 0);
     */
    static CreatePrimitive(type) {}

    /**
     * 用 name 找尋物件
     * @param {string} name - 物件名稱
     * @example
     * hand = GameObject.Find("Hand");
     * // 父子階層找尋方法用 /
     * hand = GameObject.Find("Monster/Arm/Hand");
     */
    static Find(name) {}

    /**
     * 用 tag 找尋物件陣列
     * @param {string} tag - 標籤名
     * @return {GameObject[]} 回傳物件陣列
     * @example
     * var respawns = GameObject.FindGameObjectsWithTag("Respawn");
     * foreach (var respawn in respawns) Debug.Log(respawn);
     */
    static FindGameObjectsWithTag(tag) {}

    /**
     * 用 tag 找尋物件，返回第一個找到的物件
     * @param {string} tag - 標籤名
     * @return {GameObject} 回傳物件
     * @example
     * var player = GameObject.FindWithTag("Player");
     * Debug.Log(player);
     */
    static FindWithTag(tag) {}

}