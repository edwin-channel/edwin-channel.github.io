/** 
 * 數學運算
 */
UnityEngine.Mathf = class {
    
	/**
     * 角度轉弳度
     * @example
     * 60 * Mathf.Deg2Rad;
     */
	static Deg2Rad;

    /**
     * 厄普西隆，極小的浮點數
     * @example
     * Debug.Log(Mathf.Epsilon); // 1.401298E-45
     * // 浮點數比較（解決誤差問題）
     * bool isEqual(float a, float b)
     * {
     *     if (a >= b - Mathf.Epsilon && a <= b + Mathf.Epsilon)
     *     {
     *         return true;
     *     }
     *     else
     *     {
     *         return false;
     *     }
     * }
     */
	static Epsilon;

    /**
     * 無窮
     * @example
     * Debug.Log(Mathf.Infinity); // Infinity
     * // 射線探測
     * void Update()
     * {
     *     // 畫出射線
     *     Debug.DrawLine(Vector3.zero, Vector3.forward * 100);
     *     // 讓射線無窮遠
     *     if (Physics.Raycast(Vector3.zero, Vector3.forward, Mathf.Infinity))
     *     {
     *         print("物件前方有東西!");
     *     }
     * }
     */
    static Infinity;

    /**
     * 負無窮
     * @example
     * Debug.Log(Mathf.NegativeInfinity); // -Infinity
     */
    static NegativeInfinity;

    /**
     * 圓周率
     * @example
     * Debug.Log(Mathf.PI); // 3.14159....
     */
    static PI;

    /**
     * 弳度轉角度
     * @example
     * 1 * Mathf.Rad2Deg;
     */
    static Rad2Deg;

    /**
     * Mathf 為 struct
     */
    constructor() {}

    /**
     * 取絕對值
     * @param {float} value - 任意數字
     * @return {float} 絕對值
     * @example
     * Debug.Log(Mathf.Abs(-10.5f)); // 10.5
     */
    static Abs(value) {}

    /**
     * 知道兩個邊邊長但是想知道兩個邊夾角時用
     * @param {float} f - 兩邊比值
     * @return {float} 弳度
     * @example
     * // 斜邊 2, 鄰邊 1, 求夾角幾度？
     * Debug.Log(Mathf.Acos(1.0f / 2.0f) * Mathf.Rad2Deg); // 60
     */
    static Acos(f) {}

    /**
     * 約略比較，請參考 Mathf.Epsilon
     * @param {float} a - 任意數字
     * @param {float} b - 任意數字
     * @example
     * if(Mathf.Approximately(1.0f, 10.0f / 10.0f)) print("兩者大約相同");
     */
    static Approximately(a, b) {}

    /**
     * 知道斜邊與對邊求夾角
     * @param {float} f - 兩邊比值
     * @return {float} 弳度
     */
    static Asin(f) {}

    /**
     * 知道鄰邊與對邊求夾角
     * @param {float} f - 兩邊比值
     * @return {float} 弳度
     */
    static Atan(f) {}

    /**
     * 知道鄰邊與對邊求夾角，<br>
     * atan2(a,b)是4象限反正切，它的取值不僅取決於正切值a/b，還取決於點 (b, a) 落入哪個象限：<br>
     * 當點(b, a) 落入第一象限时，atan2(a,b)的範圍是 0～pi/2;<br>
     * 當點(b, a) 落入第二象限时，atan2(a,b)的範圍是 pi/2～pi;<br>
     * 當點(b, a) 落入第三象限时，atan2(a,b)的範圍是 －pi～－pi/2;<br>
     * 當點(b, a) 落入第四象限时，atan2(a,b)的範圍是 -pi/2～0;<br>
     * 而 atan(a/b) 僅僅根據正切值为a/b求出對應的角度 （可以看作僅僅是2象限反正切）：<br>
     * 當 a/b > 0 时，atan(a/b)取值範圍是 0～pi/2;<br>
     * 當 a/b < 0 时，atan(a/b)取值範圍是 -pi/2～0;<br>
     * 與 atan 相異範例：a = 1, b = -1，則 atan(a/b) = atan(-1) = -pi/4(-45度), 而 atan2(a,b) = 3 * pi/4(135度)
     * @param {float} y - 座標
     * @param {float} x - 座標
     * @return {float} 弳度
     */
    static Atan2(y, x) {}

    /**
     * 比 f 大的最小整數
     * @param {float} f - 浮點數
     * @return {float} 比 f 大的最小浮點整數
     */
    static Ceil(f) {}

    /**
     * 比 f 大的最小整數
     * @param {float} f - 浮點數
     * @return {int} 比 f 大的最小整數
     */
    static CeilToInt(f) {}

    /**
     * 讓數值夾在最小跟最大值範圍內
     * @param {float} value - 任意浮點數
     * @param {float} min - 最小值
     * @param {float} max - 最大值
     * @return {float} 範圍內之值
     * @example
     * Debug.Log(Mathf.Clamp(1.1f,0.0f,1.0f)); // 1
     */
    static Clamp(value, min, max) {}

    /**
     * 讓數值夾在 0 跟 1 範圍內
     * @param {float} value - 任意浮點數
     * @return {float} 範圍內之值
     * @example
     * Debug.Log(Mathf.Clamp01(1.1f)); // 1
     */
    static Clamp01(value) {}

    /**
     * 2 的 Ｎ 次方最接近值
     * @param {int} value - 任意整數
     * @return {int} 2 的 Ｎ 次方
     * @example
     * Debug.Log(Mathf.ClosestPowerOfTwo(2)); // 2
     * Debug.Log(Mathf.ClosestPowerOfTwo(3)); // 4
     * Debug.Log(Mathf.ClosestPowerOfTwo(4)); // 4
     * Debug.Log(Mathf.ClosestPowerOfTwo(5)); // 4
     * Debug.Log(Mathf.ClosestPowerOfTwo(6)); // 8
     */
    static ClosestPowerOfTwo(value) {}

    /**
     * 色溫轉 RGBA 顏色。
     * 色溫，以絕對溫度K來表示，即把標準黑體加熱，溫度升高到一定程度時該黑體顏色開始深紅-淺紅-橙黃-白-藍，逐漸改變，某光源與黑體的顏色相同時，我們把黑體當的絕對溫度稱為該光源的色溫。
     * 測量單位是Kelvin (°K)度。數值越低紅色越強，數值越高藍色越強。
     * @param {float} kelvin - 範圍從 1000 到 40000 Kelvin
     * @return {Color} 色溫轉顏色
     * @example
     * Debug.Log(Mathf.CorrelatedColorTemperatureToRGB(1000.0f)); // RGBA(1.000, 0.042, 0.003, 1.000)
     */
    static CorrelatedColorTemperatureToRGB(kelvin) {}

    /**
     * 取餘弦值
     * @param {float} f - 弳度
     * @return {float} 兩邊比值
     * @example
     * Debug.Log(Mathf.Cos(60 * Mathf.Deg2Rad)); // 0.5
     */
    static Cos(f) {}

    /**
     * 取角度變換值
     * @param {float} current - 目前角度
     * @param {float} target - 目標角度
     * @return {float} 角度變換值
     * @example
     * Debug.Log(Mathf.DeltaAngle(100, 90)); // -10
     */
    static DeltaAngle(current, target) {}

    /**
     * 指數函數
     * @param {float} power - 次方
     * @return {float} 歐拉數
     * @example
     * Debug.Log(Mathf.Exp(1)); // 2.718282
     */
    static Exp(power) {}

    /**
     * 比 f 小的最大整數
     * @param {float} f - 浮點數
     * @return {float} 比 f 小的最大浮點整數
     */
    static Floor(f) {}

    /**
     * 比 f 小的最大整數
     * @param {float} f - 浮點數
     * @return {int} 比 f 小的最大整數
     */
    static FloorToInt(f) {}
    
    
    
}