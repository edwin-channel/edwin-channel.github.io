/** 
 * 所有 unity 腳本的基類
 * extends UnityEngine.Behaviour
 */
UnityEngine.MonoBehaviour = class {

    /**
     * 編輯模式下執行腳本。
     * @example
     * // 請添加下面兩段程式碼，然後選擇 Example/runInEditMode，並在檢視面板開關 MonoBehaviour 的複選筐開關觀察
     * // 建立 Editor 腳本
     * using UnityEditor;
     * using UnityEngine;
     * public class Example
     * {
     *     // 請觀察視窗上方工具列會多了 Example 選項
     *     [MenuItem("Example/runInEditMode")]
     *     static void runInEditMode()
     *     {
     *         GameObject.Find("Main Camera").GetComponent<MonoBehaviour>().runInEditMode = true;
     *     }
     * 
     *     [MenuItem("Example/notRunInEditMode")]
     *     static void notRunInEditMode()
     *     {
     *         GameObject.Find("Main Camera").GetComponent<MonoBehaviour>().runInEditMode = false;
     *     }
     * }
     * 
     * // Main Camera 腳本
     * using System.Collections;
     * using System.Collections.Generic;
     * using UnityEngine;
     * public class Main : MonoBehaviour
     * {
     *     void Start()
     *     {
     *         print("Start!");
     *     }
     * 
     *     void Update()
     *     {
     *         print("Update!");
     *     }
     * 
     *     private void OnEnable()
     *     {
     *         print("OnEnable!");
     *     }
     * 
     *     private void OnDisable()
     *     {
     *         print("OnDisable!");
     *     }
     * }
     */
	runInEditMode;

    /**
     * 即时模式 GUI (IMGUI)是一個程式碼驅動的 GUI 系統，主要用作程式設計師的工具。創建遊戲內調試顯示和工具。IMGUI 系统通常不適合用于玩家可能使用和交互的普通遊戲内用户界面。
     * 使用更多控件時，UnityGUI 會消耗更多資源. 在您的遊戲運行時，最好將 UnityGUI 的使用限制為遊戲菜單或非常小的 GUI 控件. 重要的是要注意，每個带有包含 OnGUI() 調用的脚本的
     * 對象都將需要額外的處理器時間 - 即使它是一個空的 OnGUI() 塊. 如果未使用 GUI 控件，則最好禁用任何具有 OnGUI() 調用的脚本. 您可以通過将脚本標記為 enabled = false.
     * 另外盡量减少使用 GUILayout. 如果您根本没有從一個 OnGUI() 調用中使用 GUILayout，則可以禁用所有 GUILayout 渲染使用 MonoBehaviour.useGUILayout = false; 
     * 這使 GUI 渲染性能提高了一倍. 最後，在渲染 3D 場景時盡可能使用最少的 GUI 元素. 
     */
    useGUILayout;

    /**
     * MonoBehaviour 建構子
     */
    constructor() {}

    /**
     * 取消定時觸發器
     * @example
     * using UnityEngine;
     * public class MainScript : MonoBehaviour
     * {
     *     void Start()
     *     {
     *         InvokeRepeating("setIntervalFunc", 0, 1); // 0 秒開始每秒觸發一次
     *     }
     * 
     *     void setIntervalFunc() {
     *         print("setIntervalFunc call!");
     *     }
     * 
     *     void Update()
     *     {
     *         if (Input.GetKeyDown(KeyCode.Space)) CancelInvoke();
     *     }
     * }
     */
    CancelInvoke() {}

    /**
     * 單次定時觸發器
     * @param {string} methodName - 要觸發的函式名
     * @param {float} time - 多久後開始觸發
     * @example
     * using UnityEngine;
     * public class MainScript : MonoBehaviour
     * {
     *     void Start()
     *     {
     *         Invoke("setTimeoutFunc", 0);
     *     }
     * 
     *     void setTimeoutFunc() {
     *         print("setTimeoutFunc call!");
     *     }
     * }
     */
    Invoke(methodName, time) {}

    /**
     * 循環定時觸發器
     * @param {string} methodName - 要觸發的函式名
     * @param {float} time - 多久後開始觸發
     * @param {float} repeatRate - 多久觸發一次
     * @example
     * using UnityEngine;
     * public class MainScript : MonoBehaviour
     * {
     *     void Start()
     *     {
     *         InvokeRepeating("setIntervalFunc", 0, 1); // 0 秒開始每秒觸發一次
     *     }
     * 
     *     void setTimeoutFunc() {
     *         print("setIntervalFunc call!");
     *     }
     * }
     */
    InvokeRepeating(methodName, time, repeatRate) {}

    /**
     * 函式是否觸發中
     * @param {string} methodName - 觸發的函式名
     * @return {bool} 是否觸發中
     * @example
     * using UnityEngine;
     * public class MainScript : MonoBehaviour
     * {
     *     void Update()
     *     {
     *         if(Input.GetKeyDown(KeyCode.Space) && !IsInvoking("setTimeoutFunc")) Invoke("setTimeoutFunc", 0);
     *     }
     * 
     *     void setTimeoutFunc() {
     *         print("setTimeoutFunc call!");
     *     }
     * }
     */
    IsInvoking(methodName) {}


    
}