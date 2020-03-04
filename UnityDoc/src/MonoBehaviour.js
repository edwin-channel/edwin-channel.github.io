/** 
 * 所有 unity 腳本的基類
 * @extends UnityEngine.Behaviour
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

    /**
     * XX
     */
    $$_OnAnimatorIK() {}

    /**
     * XX
     */
    $$_OnAnimatorMove() {}

    /**
     * 當玩家獲得或失去焦點時，發送給所有GameObject。OnApplicationFocus在應用程序丟失或獲得焦點時調用。使用Alt + Tab或Cmd + Tab可以將焦點從Unity應用程序轉移到另一個桌面應用程序。
     * 這會導致該GameObject收到參數設置為false的OnApplicationFocus調用。當用戶切換回Unity應用程序時， GameObject會收到參數設置為true的OnApplicationFocus。
     * OnApplicationFocus可以作為協同程序使用-在函數中使用yield語句即可。以這種方式實現時，將在初始幀期間對其計算兩次：第一次是早期通知，第二次在正常的協同程序更新步驟期間進行。
     * 在Android上，當啟用屏幕鍵盤時，它會導致OnApplicationFocus ( false )事件。此外，如果在啟用鍵盤時按Home，則不會調用OnApplicationFocus ()事件，而改為調用OnApplicationPause ()。
     * @example
     * void OnApplicationFocus(bool hasFocus)
     * {
     *     print(hasFocus);
     * } 
     */
    $_OnApplicationFocus() {}

    /**
     * 當應用程序暫停時，發送給所有GameObject。預設 Editor 下執行不會有 pauseStatus = True 的狀況發生, 若要看效果, 請在 Project Settings > Player > Resolution and Presentation 下將 Run in Background 取消勾選即可.
     * 在Android上，當啟用屏幕鍵盤時，它會導致OnApplicationFocus ( false )事件。此外，如果在啟用鍵盤時按Home，則不會調用OnApplicationFocus ()事件，而改為調用OnApplicationPause ()。
     * @example
     * void OnApplicationPause(bool pauseStatus)
     * {
     *     print(pauseStatus);
     * } 
     */
    $_OnApplicationPause() {}

    /**
     * 在應用程序退出前，發送給所有遊戲對象。在 Editor 中，當用戶停止播放模式時，將調用該函數。
     * 注意：iOS 應用程序通常會被暫停而不退出。您應該在 iOS 構建的“Player Settings”中勾選“Exit on Suspend”，以使遊戲退出而不是暫停， 否則您可能收不到該調用。如果未勾選“Exit on Suspend”， 您會收到 OnApplicationPause 調用。
     * @example
     * void OnApplicationQuit()
     * {
     *     print("app quit!");
     * } 
     */
    $_OnApplicationQuit() {}

    /**
     * XX
     */
    $$_OnAudioFilterRead() {}

    /**
     * 該方法在物體從被渲染到不被渲染時調用，包括Game視圖和Scene視圖，只有在所有視圖中都不渲染時才會調用
     */
    $_OnBecameInvisible() {}

    /**
     * 方法在物體被渲染時調用，包括Game視圖和Scene視圖，物體Game視圖或者Scene視圖只要有一個進行渲染，方法就會被調用。
     */
    $_OnBecameVisible() {}

    /**
     * 當該碰撞體/剛體已開始接觸另一個剛體/碰撞體時，調用 OnCollisionEnter。至少一個是剛體
     */
    $_OnCollisionEnter() {}

    /**
     * 當該碰撞體/剛體已開始接觸另一個剛體/碰撞體時，調用 OnCollisionEnter2D（僅限2D 物理）。至少一個是剛體
     */
    $_OnCollisionEnter2D() {}

    /**
     * 當該碰撞體/剛體已停止接觸另一個剛體/碰撞體時，調用OnCollisionExit。至少一個是剛體
     */
    $_OnCollisionExit() {}

    /**
     * 當該碰撞體/剛體已停止接觸另一個剛體/碰撞體時，調用OnCollisionExit2D（僅限2D 物理）。至少一個是剛體
     */
    $_OnCollisionExit2D() {}

    /**
     * 對應正在接觸剛體/碰撞體的每一個碰撞體/剛體，每幀調用一次 OnCollisionStay。至少一個是剛體
     */
    $_OnCollisionStay() {}

    /**
     * 對應正在接觸剛體/碰撞體的每一個碰撞體/剛體，每幀調用一次 OnCollisionStay2D（僅限2D 物理）。至少一個是剛體
     */
    $_OnCollisionStay2D() {}

    /**
     * 
     */
    //$_Obsolete_OnConnectedToServer() {}

    /**
     * 傳統末日風格的第一人稱控制在現實中並不真實。該角色每小時能跑90英里，可以立即停止並急轉彎。因為該角色非常不真實，所以使用剛體和物理組件來創造這種行為有點不切實際，
     * 並會讓玩家產生錯覺。解決方案是使用專門的角色控制器。角色控制器只是一個膠囊形狀的__碰撞體__，可以通過腳本來命令這個碰撞體向某個方向移動。然後，控制器將執行運動，
     * 但會受到碰撞的約束。如果要通過角色控制器來推動剛體或對象，可以編寫腳本通過OnControllerColliderHit()函數對與控制器碰撞的任何對象施力。
     * 用 Move 控制碰撞才會生效 controller.Move(mMoveDir);
     * @example
     * using System.Collections;
     * using System.Collections.Generic;
     * using UnityEngine;
     * 
     * public class FPSScript : MonoBehaviour
     * {
     *     public KeyCode mKeyLeft = KeyCode.LeftArrow;
     *     public KeyCode mKeyRight = KeyCode.RightArrow;
     *     public KeyCode mKeyForward = KeyCode.UpArrow;
     *     public KeyCode mKeyBackward = KeyCode.DownArrow;
     *     public float mKeyStrokeMoveStep = 0.07f;    //metre
     *     private CharacterController controller;
     *     private Vector3 mMoveDir;
     * 
     *     void Start()
     *     {
     *         controller = GetComponent<CharacterController>();
     *     }
     * 
     *     void Update()
     *     {
     *         Vector3 vDir = Vector3.zero;
     *         if (Input.GetKey(mKeyLeft))
     *         {
     *             vDir.x -= mKeyStrokeMoveStep;
     *         }
     *         if (Input.GetKey(mKeyRight))
     *         {
     *             vDir.x += mKeyStrokeMoveStep;
     *         }
     *         if (Input.GetKey(mKeyForward))
     *         {
     *             vDir.z += mKeyStrokeMoveStep;
     *         }
     *         if (Input.GetKey(mKeyBackward))
     *         {
     *             vDir.z -= mKeyStrokeMoveStep;
     *         }
     *         mMoveDir = transform.rotation * vDir;
     *         controller.Move(mMoveDir); // 用 Move 控制碰撞才會生效
     *     }
     * 
     *     private void OnControllerColliderHit(ControllerColliderHit hit)
     *     {
     *         Debug.Log(hit);
     *     }
     * }
     */
    $_OnControllerColliderHit() {}

    /**
     * 遊戲執行中刪除腳本時觸發
     */
    $_OnDestroy() {}

    /**
     * 腳本複選框取消勾選或是程式設置 enabled = false 時觸發
     */
    $_OnDisable() {}

    /**
     * 
     */
    //$_Obsolete_OnDisconnectedFromServer() {}

    /**
     * 有時候，我們會想要在場景中繪製一些符號、圖案或區塊，來標記一些特殊的區域。例如：重生點、死亡區或生怪區等。這些區塊我們只想要在編輯時看到，執行遊戲時是不能讓玩家看到的。
     * 這種情形很適合利用 Gizmos 來繪製物件。不論有沒有選中這個物件，一定會被畫出來
     * @example
     * void OnDrawGizmos()
     * {
     *     // 在Scene面版看到黃色的球
     *     Gizmos.color = Color.yellow;
     *     Gizmos.DrawSphere(transform.position, 1);
     * }
     */
    $_OnDrawGizmos() {}

    /**
     * 只有被選中這個物件，才會被畫出來，請參考 OnDrawGizmos
     */
    $_OnDrawGizmosSelected() {}

    /**
     * 腳本複選框勾選或是程式設置 enabled = true 時觸發
     */
    $_OnEnable() {}

    /**
     * 
     */
    //$_Obsolete_OnFailedToConnect() {}

    /**
     * 
     */
    //$_Obsolete_OnFailedToConnectToMasterServer() {}
    
    /**
     * 系統調用 OnGUI 來渲染和處理 GUI 事件。enabled 屬性設置為 false，則不會調用 OnGUI()
     */
    $_OnGUI() {}

    /**
     * XX
     */
    $$_OnJointBreak() {}

    /**
     * XX
     */
    $$_OnJointBreak2D() {}

    /**
     * 
     */
    //$_Obsolete_OnMasterServerEvent() {}

    /**
     * 當用戶在GUIElement或Collider上按下鼠標按鈕時，將調用OnMouseDown。
     */
    $_OnMouseDown() {}

    /**
     * 當用戶單擊GUIElement 或Collider 並仍然按住鼠標時，將調用OnMouseDrag。
     */
    $_OnMouseDrag() {}

    /**
     * 當鼠標進入GUIElement 或Collider 時調用。
     */
    $_OnMouseEnter() {}

    /**
     * 當鼠標不再處於GUIElement 或Collider 上方時調用。
     */
    $_OnMouseExit() {}

    /**
     * 當鼠標懸停在GUIElement 或Collider 上時，每幀調用一次。
     */
    $_OnMouseOver() {}

    /**
     * 當用戶鬆開鼠標按鈕時，將調用OnMouseUp。
     */
    $_OnMouseUp() {}

    /**
     * 鬆開鼠標時，僅當鼠標在按下時所在的GUIElement 或Collider 上時，才調用OnMouseUpAsButton。
     */
    $_OnMouseUpAsButton() {}

    /**
     * 
     */
    //$_Obsolete_OnNetworkInstantiate() {}

     /**
     * 建立一個 particle system 並加入下方腳本, 在 Particle System 面板 > Collision > Type 選 World, 在 Particle System 面板 > Collision > send Collision Message 打勾。
     * 再建立一個方塊置於 particle system 上方即可測試
     * @example
     * private void OnParticleCollision(GameObject other)
     * {
     *     Debug.Log(other);
     * }
     */
    $_OnParticleCollision() {}

    /**
     * XX
     */
    $$_OnParticleSystemStopped() {}

     /**
     * 建立一個 particle system 並加入下方腳本, 在 Particle System 面板 > Trigger > Enter 選 Callback, Exit 選 Callback
     * 再建立一個方塊置於 particle system 上方即可測試
     * @example
     * using System.Collections;
     * using System.Collections.Generic;
     * using UnityEngine;
     * 
     * public class ParticleScript : MonoBehaviour
     * {
     *     ParticleSystem ps;
     * 
     *     // 這些列表用於包含與每幀的觸發條件匹配的粒子。
     *     List&lt;ParticleSystem.Particle&gt; enter = new List&lt;ParticleSystem.Particle&gt;();
     *     List&lt;ParticleSystem.Particle&gt; exit = new List&lt;ParticleSystem.Particle&gt;();
     * 
     *     void Start()
     *     {
     *         ps = GetComponent&lt;ParticleSystem&gt;();
     *     }
     * 
     *     private void OnParticleTrigger()
     *     {
     *         // 獲取與此幀的觸發條件匹配的粒子
     *         int numEnter = ps.GetTriggerParticles(ParticleSystemTriggerEventType.Enter, enter);
     *         int numExit = ps.GetTriggerParticles(ParticleSystemTriggerEventType.Exit, exit);
     * 
     *         // iterate through the particles which entered the trigger and make them red
     *         for (int i = 0; i < numEnter; i++)
     *         {
     *             ParticleSystem.Particle p = enter[i];
     *             p.startColor = new Color32(255, 0, 0, 255);
     *             enter[i] = p;
     *         }
     * 
     *         // 迭代離開觸發器的粒子並使它們變綠
     *         for (int i = 0; i < numExit; i++)
     *         {
     *             ParticleSystem.Particle p = exit[i];
     *             p.startColor = new Color32(0, 255, 0, 255);
     *             exit[i] = p;
     *         }
     * 
     *         // 將修改後的粒子重新分配回粒子系統
     *         ps.SetTriggerParticles(ParticleSystemTriggerEventType.Enter, enter);
     *         ps.SetTriggerParticles(ParticleSystemTriggerEventType.Exit, exit);
     *     }
     * }
     */
    $_OnParticleTrigger() {}

    /**
     * XX
     */
    $$_OnParticleUpdateJobScheduled() {}

    /**
     * 
     */
    //$_Obsolete_OnPlayerConnected() {}

    /**
     * 
     */
    //$_Obsolete_OnPlayerDisconnected() {}

    /**
     * 這個方法會在攝像機渲染完整個場景之後調用。所謂的渲染完場景，並不是指的已經顯示在屏幕上面，而是在場景裡面、攝像機可視範圍內的物體在正常的渲染流程應該看到的樣子計算完畢了。
     */
    $$_OnPostRender() {}

    /**
     * OnPreCull 在攝像機剔除場景前調用。這個方法會在攝像機進行計算那些物體在場景內之前調用。懂得3D渲染原理的朋友應該都知道，那些東西是攝像機能看到的範圍內的，
     * 是靠攝像機的透視矩陣（透視、正交）來決定的，OnPreCull會在調用透視矩陣之前調用。在這個時候，你可以改變攝像機的透視矩陣，讓它的可視範圍發生變化。
     */
    $$_OnPreCull() {}

    /**
     * 這個方法會在OnPreCull之後，開始正式渲染場景之前調用。在這個方法調用時，你可以設置一些渲染相關的參數（除了透視矩陣），比如你可以設置一些天空盒顏色啊、霧的顏色啊，之類。
     */
    $$_OnPreRender() {}

    /**
     * 這個方法是在所有的渲染都已經完成了，準備輸出到屏幕的時候調用的。這個方法其實就是所謂的後期合成特效的核心了。之前在OnPostRender（或者OnRenderObject）執行完畢之後，
     * 會生成了一張RenderTexture，這張RenderTexture正常來說就是我們將會在屏幕上面看到的畫面了。這時候在OnRenderImage方法調用時，我們還可以對這張RenderTexture進行一些
     * 特殊的處理，比如用一些特定的shader對RenderTexture進行扭曲、改變亮度顏色等的操作。最後這個方法再會輸出一張RenderTexture，作為最終在屏幕顯示的畫面。
     */
    $$_OnRenderImage() {}

    /**
     * OnRenderObject和OnPostRender很類似，也是在攝像機渲染完整個場景之後調用。區別在與，上面的三個方法OnPreCull、OnPreRender和OnPostRender
     * 都必須是掛在攝像機上面才能生效的，而OnRenderObject是不需要掛在攝像機上面就能生效的。
     */
    $$_OnRenderObject() {}

    /**
     * 
     */
    //$_Obsolete_OnSerializeNetworkView() {}

    /**
     * 
     */
    //$_Obsolete_OnServerInitialized() {}

    /**
     * 當 GameObject 的變換的子項列表發生更改時，將調用該函數。
     * @example
     * void Start()
     * {
     *     var cube = GameObject.Find("CubeSprite");
     *     var s = GameObject.Find("Sphere");
     *     s.transform.SetAsFirstSibling(); // 列表更動觸發
     * }
     * 
     * private void OnTransformChildrenChanged()
     * {
     *     Debug.Log("OnTransformChildrenChanged");
     * }
     */
    $_OnTransformChildrenChanged() {}

    /**
     * 當GameObject 的變換的父屬性發生更改時，將調用該函數。
     * @example
     * void Start()
     * {
     *     var s = GameObject.Find("Sphere");
     *     transform.parent = s.transform; // parent更動觸發
     * }
     * 
     * private void OnTransformParentChanged()
     * {
     *     Debug.Log("OnTransformParentChanged");
     * }
     */
    $_OnTransformParentChanged() {}

    /**
     * Tigger 沒有碰撞效果，可以做遊戲角色的警戒範圍。當Collider other 事件進入該觸發器時調用OnTriggerEnter。至少一個是剛體且至少一個 Collider 參數 Is Trigger 要勾選
     */
    $_OnTriggerEnter() {}

    /**
     * 當Collider other 事件進入該觸發器時調用OnTriggerEnter（僅限2D 物理）。至少一個是剛體且至少一個 Collider 參數 Is Trigger 要勾選
     */
    $_OnTriggerEnter2D() {}

    /**
     * 當Collider other 已停止接觸該觸發器時調用OnTriggerExit。至少一個是剛體且至少一個 Collider 參數 Is Trigger 要勾選
     */
    $_OnTriggerExit() {}

    /**
     * 當Collider other 已停止接觸該觸發器時調用OnTriggerExit（僅限2D 物理）。至少一個是剛體且至少一個 Collider 參數 Is Trigger 要勾選
     */
    $_OnTriggerExit2D() {}

    /**
     * 對於接觸觸發器的每一個Collider other，每次物理更新調用一次 OnTriggerStay。至少一個是剛體且至少一個 Collider 參數 Is Trigger 要勾選
     */
    $_OnTriggerStay() {}

    /**
     * 對於接觸觸發器的每一個Collider other，每次物理更新調用一次 OnTriggerStay（僅限2D 物理）。至少一個是剛體且至少一個 Collider 參數 Is Trigger 要勾選
     */
    $_OnTriggerStay2D() {}

    /**
     * 加載腳本後或Inspector 中的值發生更改時，將調用該函數（只能在Editor 中調用）。可以使用該函數驗證MonoBehaviour 的數據。這可用於確保在Editor 中修改數據時，數據保持在特定範圍內。<br>
     * 網路文章:{@link https://www.jianshu.com/p/f564ba98ed7e|Unity3D 编辑器扩展 强大的OnValidate}
     */
    $_OnValidate() {}

    /**
     * 如果對象可見並且不是 UI 元素，則為每個攝像機調用 OnWillRenderObject。該函數在剔除處理期間（即將渲染每個剔除的對象時）調用。
     */
    $$_OnWillRenderObject() {}

    /**
     * 重置為默認值。當用戶點擊 Inspector 上下文菜單中的“Reset”按鈕或第一次添加組件時，將調用 Reset。該函數只能在 Editor 模式下調用。 Reset 最常用於在 Inspector 中提供良好的默認值。
     * @example
     * using UnityEngine;
     * public class Example : MonoBehaviour
     * {
     *     public GameObject target;
     * 
     *     void Reset()
     *     {
     *         Debug.Log("Reset");
     *         if (!target)
     *             target = GameObject.FindWithTag("Player");
     *     }
     * }
     */
    $_Reset() {}

    /**
     * 在首次調用任何 Update 方法之前啟用腳本時，在幀上調用 Start。類似於 Awake 函數，Start 在腳本生命週期內僅調用一次。但是，不管是否啟用腳本，初始化腳本對象時都會調用 Awake。如果在初始化時未啟用腳本，則可以在與 Awake 不同的幀上調用 Start。
     */
    $_Start() {}

    /**
     * 如果啟用了MonoBehaviour，則每幀調用Update。
     */
    $_Update() {}


}