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
     * 使用更多控件时，UnityGUI会消耗更多资源. 在您的游戏运行时，最好将UnityGUI的使用限制为游戏菜单或非常小的GUI控件. 重要的是要注意，每个带有包含OnGUI()调用的脚本的对象都将需要额外的处理器时间-即使它是一个空的OnGUI()块. 如果未使用GUI控件，则最好禁用任何具有OnGUI()调用的脚本. 您可以通过将脚本标记为enabled = false .
     * 尽量减少使用GUILayout. 如果您根本没有从一个OnGUI()调用中使用GUILayout，则可以禁用所有GUILayout 渲染使用MonoBehaviour.useGUILayout = false; 这使GUI渲染性能提高了一倍. 最后，在渲染3D 场景时使用最少的GUI元素尽可能 .
     * 这个变量控制继承的胶板代码能否跳过GUI的layout阶段。如果这个变量为true，那么我们写在OnGUI函数中的代码都不会被执行。有时候我们喜欢用OnGUI来进行一些调试信息的输出，但是，OnGUI函数是很消耗系统资源的，使用该变量可以方便的控制调试信息的打开与关闭
     */
    useGUILayout;

    /**
     * MonoBehaviour 建構子
     */
    constructor() {}
    
}