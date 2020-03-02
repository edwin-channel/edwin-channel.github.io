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

    /**
     * 啟用協同程序<br>
     * 1.{@link https://medium.com/feis-studio/%E5%9C%A8-unity-%E8%A9%B2%E7%94%A8-coroutine-%E9%82%84%E6%98%AF-update-654cce35737e|在 Unity 該用 Coroutine 還是 Update()?}<br>
     * 2.{@link https://medium.com/feis-studio/%E6%B7%BA%E8%AB%87-unity-coroutine-%E7%9A%84%E9%81%8B%E8%A1%8C%E6%96%B9%E5%BC%8F-c3d5b52e1a0d|淺談 Unity Coroutine 的運行方式}<br>
     * 3.{@link https://medium.com/feis-studio/unity-coroutine-yieldinstruction-8e08fa8b3c9f|Coroutine 在等什麼？了解 Unity 的 YieldInstruction 和 Coroutine 類別}
     * @param {string} methodName - 啟用的函式名
     * @param {object} [value=null] - 任意參數
     * @return {Coroutine} 協同程序
     * @example
     * using System.Collections;
     * using UnityEngine;
     * public class MainScript : MonoBehaviour
     * {
     *     IEnumerator Start()
     *     {
     *         StartCoroutine("DoSomething", 2.0F);
     *         yield return new WaitForSeconds(1);
     *         StopCoroutine("DoSomething");
     *     }
     * 
     *     IEnumerator DoSomething(float someParameter)
     *     {
     *         Debug.Log("someParameter:"+someParameter); // someParameter:2
     *         while (true)
     *         {
     *             print("DoSomething Loop");
     *             yield return null; // 回傳 null 會在每一影格執行一次
     *         }
     *     }
     * }
     */
    StartCoroutine(methodName, value) {}

    /**
     * 關閉所有協同程序 (以 StartCoroutine 開啟多個協同程序時)
     */
    StopAllCoroutines() {}

    /**
     * 關閉指定協同程序
     * @param {string} methodName - 函式名
     */
    StopCoroutine(methodName) {}

    /**
     * 將消息記錄到 Unity 控制台（與 Debug.Log 相同）。
     * @param {object} message - 消息
     */
    static print(message) {}

    /**
     * Awake 在加載腳本實例時調用。Awake用於在遊戲啟動前初始化任何變量或遊戲狀態。在腳本實例的生命週期中，將只調用Awake一次。 Awake在初始化所有對像後調用，以便您能夠安全地與其他對象通信或使用GameObject.FindWithTag等查詢其他對象。
     * 每個GameObject的Awake在對象之間以隨機順序調用。因此，您應該使用Awake在腳本之間設置引用，並使用Start來回傳遞任何信息。 Awake始終在任何Start函數前調用。這讓您能夠安排腳本的初始化順序。 Awake不能作為協同程序使用。
     * 注意：對於C#，請使用Awake代替構造函數進行初始化，因為組件的序列化狀態在構造時是未定義的。與構造函數一樣，Awake僅調用一次。
     */
    $_Awake() {}

    /**
     * 如果啟用了MonoBehaviour，則每個固定幀率幀調用該函數。處理Rigidbody時，應該使用FixedUpdate而不是Update。例如，向剛體添加力時，必須在FixedUpdate中的每個固定幀（而不是在Update中的每個幀）施加力。
     * @example
     * void FixedUpdate ()
     * {
     *     rb = GetComponent&lt;Rigidbody&gt;(); // 請放在 Start
     *     rb.AddForce(10.0f * Vector3.up);
     * }
     */
    $_FixedUpdate() {}

    /**
     * 如果啟用了Behaviour，則每幀調用LateUpdate。LateUpdate 在調用所有Update 函數後調用。這對於安排腳本的執行順序很有用。例如，跟隨攝像機應始終在LateUpdate 中實現， 因為它跟踪的對象可能已在Update 中發生移動。
     * 要獲取自上次調用LateUpdate以來所經過的時間，請使用Time.deltaTime。
     * @example
     * void LateUpdate()
     * {
     *     transform.Translate(0, Time.deltaTime , 0);
     * }
     */
    $_LateUpdate() {}
    
}