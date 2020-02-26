/** 
 * 所有附加到 GameObject 的組件基類
 * @extends UnityEngine.Object
 */
UnityEngine.Component = class {

	/**
     * 附加組件的 GameObject
     * @example
     * // 不在 Hierarchy 面板顯示
     * this.gameObject.hideFlags = HideFlags.HideInHierarchy;
     */
	gameObject;

	/**
     * 附加組件的 GameObject 的分類標籤
     * @example
     * Debug.Log(this.tag);
     * // 標籤需要在 Tags and Layers manager 宣告，某個程式片段以 tag 尋找該物件
     * var players = GameObject.FindGameObjectsWithTag("Player");
     */
	tag;

    /**
     * 附加組件的 GameObject 的變換組件
     * @example
     * Debug.Log(this.transform);
     */
	transform;

    /**
     * 附加到 GameObject 的組件基類
     */
    constructor() {}

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

}