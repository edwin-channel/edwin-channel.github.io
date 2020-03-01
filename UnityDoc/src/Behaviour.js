/** 
 * 指可啟用或禁用的組件
 * @extends UnityEngine.Component
 */
UnityEngine.Behaviour = class {

    /**
     * 啟用的 Behaviour 可更新，禁用的 Behaviour 不可更新。複選框開關。<br>
     * GameObject = Active AND Script = Enabled 然后 Behaviour.enabled = true.<br>
     * GameObject = Active AND Script = Disabled 然后 Behaviour.enabled = false.<br>
     * GameObject = Inactive AND Script = Enabled 然后 Behaviour.enabled = true.<br>
     * GameObject = Inactive AND Script = Disabled 然后 Behaviour.enabled = false.
     * @example
     * // 複選框取消
     * this.enabled = false;
     */
	enabled;

    /**
     * 檢查是否為激活且啟用。<br>
     * GameObject = Active AND Script = Enabled 然后 isActiveAndEnabled = true.<br>
     * GameObject = Active AND Script = Disabled 然后 isActiveAndEnabled = false.<br>
     * GameObject = Inactive AND Script = Enabled 然后 isActiveAndEnabled = false.<br>
     * GameObject = Inactive AND Script = Disabled 然后 isActiveAndEnabled = false.
     */
    isActiveAndEnabled;

    /**
     * Behaviour 建構子
     */
    constructor() {}
    
}