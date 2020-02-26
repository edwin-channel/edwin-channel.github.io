/** 
 * Unity所有物件的基類
 */
UnityEngine.Object = class {
    
	/**
     * 隱藏旗標
     * @example
     * // 不在 Hierarchy 面板顯示
     * this.gameObject.hideFlags = HideFlags.HideInHierarchy;
	 * // 不在 Inspector 面板顯示，所有附加在 gameObject 的 Component 都會隱藏(可以針對單一Component隱藏)
     * this.gameObject.hideFlags = HideFlags.HideInInspector;
     * // Inspector 裡 Component 的參數皆不能編輯(可以針對單一Component不能編輯)
     * this.gameObject.hideFlags = HideFlags.NotEditable;
     */
	hideFlags;

	/**
     * 物件名稱
     * @example
     * // 某個物件設置 name
     * this.gameObject.name = "enemy";
     * // 某個程式片段以 name 尋找該物件（消耗性能建議用tag尋找）
     * var enemy = GameObject.Find("enemy");
     */
	name;

    /**
     * Unity所有物件的基類
     */
    constructor() {}

    /**
     * 回傳物件唯一識別ID
     * @return {float} id
     */
    GetInstanceID() {}

    /**
     * 轉字串
     * @return {string} 回傳物件名稱
     */
    ToString() {}

    /**
     * 移除 GameObject, Component 或是 Asset
     * @param {Object} obj - 要被移除的物件
     * @param {float} [t=0.0f] - 移除的延遲時間（單位為秒）
     * @example
     * // 5秒後移除 Rigidbody 組件
     * Object.Destroy(GetComponent&lt;Rigidbody&gt;(),5);
     */
    static Destroy(obj, t) {}

    /**
     * 立即移除物件，強烈建議使用 Destroy, DestroyImmediate 是立即銷毀，立即釋放資源，做這個操作的時候，會消耗很多時間的，影響主線程運行。Destroy 是異步銷毀，一般在下一幀就銷毀了，不會影響主線程的運行。所以我們在運行時使用 Destroy 後，不能在當前幀中 Find 或 GetChild 已經刪除的物體，這樣還是會找到的。要達到 DestroyImmediate 的效果需要 Destroy 完後，添加 transform.DetachChildren();，或者刪除完後將刪除 transform 的 parent 設置為 null;
     * @param {Object} obj - 要被移除的物件
     * @param {bool} [allowDestroyingAssets=false] - Assets 資源一併刪除
     * @example
     * // 刪除 texture，texture(xxx.png) 在 Inspector 面板已經不能觀察其相關屬性
     * var s = GameObject.Find("Ball");
     * var mr = s.GetComponent&lt;MeshRenderer&gt;();
     * Object.DestroyImmediate(mr.material.mainTexture, true);
     */
    static DestroyImmediate(obj, allowDestroyingAssets) {}

    /**
     * 場景更換後不刪除物件。如果該物件為 GameObject，會保留其 Transform 子 GameObject。
     * @param {Object} target - 場景更換後不刪除的物件
     * @example
     * var s = GameObject.Find("Ball");
     * Object.DontDestroyOnLoad(s);
     * SceneManager.LoadScene("Scene2"); // SceneManager 需要 using UnityEngine.SceneManagement
     */
    static DontDestroyOnLoad(target) {}

    /**
     * 尋找第一個指定型態物件
     * @param {Type} type - 指定要尋找的物件類型
     * @return {Object} 回傳配對型態的物件，如果沒有回傳 null
     * @example
     * var script = Object.FindObjectOfType(typeof(MonoBehaviour)); // 找到第一個執行中腳本
     * Debug.Log(script);
     */
    static FindObjectOfType(type) {}

    /**
     * 尋找指定型態物件陣列
     * @param {Type} type - 指定要尋找的物件類型
     * @return {Object[]} 回傳配對型態的物件陣列
     * @example
     * var scripts = Object.FindObjectsOfType(typeof(MonoBehaviour)); // 找所有執行中腳本
     * foreach(var script in scripts) Debug.Log(script);
     */
    static FindObjectsOfType(type) {}

    /**
     * 拷貝物件
     * @param {Object} original - 你想要拷貝的物件
     * @param {Transform}[parent] - 配置物件的父變換組件
     * @param {bool}[instantiateInWorldSpace] - 如果為 true 則配置拷貝物件大小旋轉縮放為初始值如座標為 0,0,0。如果為 false 則配置拷貝物件大小旋轉縮放值為父變換組件的拷貝
     * @return {Object} 回傳拷貝的物件
     * @example
     * var cube = GameObject.Find("Cube");
     * Object.Instantiate(cube, cube.transform, true);
     */
    static Instantiate(original, parent, instantiateInWorldSpace) {}
}