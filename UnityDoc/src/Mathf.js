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
     * 知道座標求夾角，<br>
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
    
    /**
     * Gamma 轉 Linear 空間亮度值
     * {@link https://zhuanlan.zhihu.com/p/66558476|Gamma、Linear、sRGB 和 Unity Color Space，你真懂了吗？}
     * @param {float} value - Gamma值
     * @return {float} 線性空間亮度值
     */
    static GammaToLinearSpace(value) {}

    /**
     * 反轉線性插值
     * @param {float} a - 開始值
     * @param {float} b - 結束值
     * @param {float} value - a,b 之間的值
     * @return {float} 回傳 0 ~ 1 之間的補插值
     * @example
     * Debug.Log(Mathf.InverseLerp(0, 10, -1)); // 0，-1 小於 0 則回傳 0
     * Debug.Log(Mathf.InverseLerp(0, 10, 0)); // 0
     * Debug.Log(Mathf.InverseLerp(0, 10, 5)); // 0.5
     * Debug.Log(Mathf.InverseLerp(0, 10, 10)); // 1
     * Debug.Log(Mathf.InverseLerp(0, 10, 11)); // 1，-11 大於 10 則回傳 1
     */
    static InverseLerp(a, b, value) {}

    /**
     * 是否為 2 的 Ｎ 次方
     * @param {int} value - 任意整數
     * @return {bool} 是否為 2 的 Ｎ 次方
     */
    static IsPowerOfTwo(value) {}

    /**
     * 線性插值
     * @param {float} a - 開始值
     * @param {float} b - 結束值
     * @param {float} t - 0 ~ 1 之間的補插值
     * @return {float} 回傳 a ~ b 之間的值
     * 
     */
    static Lerp(a, b, t) {}

    /**
     * 角度線性插值
     * @param {float} a - 角度開始值
     * @param {float} b - 角度結束值
     * @param {float} t - 0 ~ 1 之間的補插值
     * @return {float} 回傳 a ~ b 之間的值
     */
    static LerpAngle(a, b, t) {}

    /**
     * 未限制線性插值
     * @param {float} a - 開始值
     * @param {float} b - 結束值
     * @param {float} t - 不限制 0 ~ 1 之間的補插值
     * @return {float} 回傳不限制 a ~ b 之間的值
     * @example
     * Debug.Log(Mathf.LerpUnclamped(0, 10, -1)); // -10
     */
    static LerpUnclamped(a, b, t) {}

    /**
     * Linear 轉 Gamma 空間亮度值
     * {@link https://zhuanlan.zhihu.com/p/66558476|Gamma、Linear、sRGB 和 Unity Color Space，你真懂了吗？}
     * @param {float} value - 線性空間亮度值
     * @return {float} Gamma值
     */
    static LinearToGammaSpace(value) {}

    /**
     * 對數函數
     * @param {float} f - 任意數
     * @param {float} p - 底數
     * @return {float} 次方值
     * @example
     * print(Mathf.Log(4,2)); // 2
     */
    static Log(f, p) {}

    /**
     * 底數10的對數函數
     * @param {float} f - 任意數
     * @return {float} 次方值
     * @example
     * print(Mathf.Log10(100)); // 10
     */
    static Log10(f) {}

    /**
     * 取最大值
     * @param {float} a - 任意數
     * @param {float} b - 任意數
     * @return {float} 最大值
     * @example
     * print(Mathf.Max(1,2)); // 2
     * print(Mathf.Max(1,2,3)); // 3
     */
    static Max(a, b) {}

    /**
     * 取最小值
     * @param {float} a - 任意數
     * @param {float} b - 任意數
     * @return {float} 最小值
     * @example
     * print(Mathf.Min(1,2)); // 1
     * print(Mathf.Min(1,2,3)); // 1
     */
    static Min(a, b) {}

    /**
     * 等值變化
     * @param {float} current - 目前數值
     * @param {float} target - 目標數值
     * @param {float} maxDelta - 變化數值
     * @return {float} 變化後數值
     * @example
     * float cur = 0;
     * void Update()
     * {
     *     print(cur); // 0 1 2 3 4 5 6 7 8 9 10 10 10 10 ...
     *     cur = Mathf.MoveTowards(cur, 10, 1);
     * }
     */
    static MoveTowards(current, target, maxDelta) {}

    /**
     * 角度等值變化
     * @param {float} current - 目前數值
     * @param {float} target - 目標數值
     * @param {float} maxDelta - 變化數值
     * @return {float} 變化後數值
     * @example
     * float cur = 0;
     * float cur2 = 0;
     * void Update()
     * {
     *     print(cur); // 0 -10 350 350 350 350 ...
     *     cur = Mathf.MoveTowardsAngle(cur, 350, 10);
     *     print(cur2); // 0 10 20 30 40 400 400 400 ...
     *     cur2 = Mathf.MoveTowardsAngle(cur2, 400, 10);
     * }
     */
    static MoveTowardsAngle(current, target, maxDelta) {}

    /**
     * 大於等於 value 的 2 的 Ｎ 次方最接近值
     * @param {int} value - 任意整數
     * @return {int} 2 的 Ｎ 次方
     * @example
     * Debug.Log(Mathf.NextPowerOfTwo(7)); // 8
     * Debug.Log(Mathf.NextPowerOfTwo(139)); // 256
     * Debug.Log(Mathf.NextPowerOfTwo(256)); // 256
     */
    static NextPowerOfTwo(value) {}

    /**
     * Perlin Noise 的特點是：返回值隨着 x,y 座標的移動，是連續且平緩的變化的隨機值，這點和 Random 是完全不同的，而且這個特點非常重要，應用範圍很廣。可以想象，把 x 或者 y 的值隨着時間去改變，會得到動態變化的一系列數值。
就好像隨機地形山脈一樣，連綿起伏。{@link https://docs.unity3d.com/ScriptReference/Mathf.PerlinNoise.html|請參考官方範例}
     * @param {float} x - x 座標
     * @param {float} y - y 座標
     * @return {float} 0 ~ 1 的值
     */
    static PerlinNoise(x, y) {}

    /**
     * 來回
     * @param {float} t - 變換值
     * @param {float} length - 限制範圍
     * @return {float} 0 ~ length 的數
     * @example
     * Debug.Log(Mathf.PingPong(0, 3)); // 0
     * Debug.Log(Mathf.PingPong(1, 3)); // 1
     * Debug.Log(Mathf.PingPong(2, 3)); // 2
     * Debug.Log(Mathf.PingPong(3, 3)); // 3
     * Debug.Log(Mathf.PingPong(4, 3)); // 2
     * Debug.Log(Mathf.PingPong(5, 3)); // 1
     * Debug.Log(Mathf.PingPong(6, 3)); // 0
     * Debug.Log(Mathf.PingPong(7, 3)); // 1
     */
    static PingPong(t, length) {}
    
    /**
     * f 的 p 次方
     * @param {float} f - 底數
     * @param {float} p - 指數
     * @return {float} f 的 p 次方
     * @example
     * Debug.Log(Mathf.Pow(2, 3)); // 8
     */
    static Pow(f, p) {}

    /**
     * 反覆
     * @param {float} t - 變換值
     * @param {float} length - 限制範圍
     * @return {float} 0 ~ length-1 的數
     * @example
     * Debug.Log(Mathf.Repeat(0, 3)); // 0
     * Debug.Log(Mathf.Repeat(1, 3)); // 1
     * Debug.Log(Mathf.Repeat(2, 3)); // 2
     * Debug.Log(Mathf.Repeat(3, 3)); // 0
     * Debug.Log(Mathf.Repeat(4, 3)); // 1
     * Debug.Log(Mathf.Repeat(5, 3)); // 2
     * Debug.Log(Mathf.Repeat(6, 3)); // 0
     * Debug.Log(Mathf.Repeat(7, 3)); // 1
     */
    static Repeat(t, length) {}

    /**
     * 四捨五入取最接近 f 的整數
     * @param {float} f - 浮點數
     * @return {float} 最接近 f 的浮點整數
     */
    static Round(f) {}

    /**
     * 四捨五入取最接近 f 的整數
     * @param {float} f - 浮點數
     * @return {int} 最接近 f 的整數
     */
    static RoundToInt(f) {}

    /**
     * 取得正負
     * @param {float} f - 浮點數
     * @return {int} 1 或 -1
     */
    static Sign(f) {}

    /**
     * 取正弦值
     * @param {float} f - 弳度
     * @return {float} 兩邊比值
     * @example
     * Debug.Log(Mathf.Sin(30 * Mathf.Deg2Rad)); // 0.5
     */
    static Sin(f) {}

    /**
     * 滑順移動，開始加速結束減速
     * @param {float} current - 目前值
     * @param {float} target - 目標值
     * @param {ref_float} currentVelocity - 變化速度
     * @param {float} smoothTime - 約略花費時間
     * @param {float} [maxSpeed=Mathf.Infinity] - 速度上限
     * @param {float} [deltaTime=Time.deltaTime] - 從最後一次呼叫此函式的時間
     * @return {float} 新值
     * @example
     * float smoothTime = .3f;
     * float velocity = 0.0f;
     * void Update()
     * {
     *     var cube = GameObject.Find("Cube"); // 建議在 Start 函式使用以節省效能
     *     float newPosition = Mathf.SmoothDamp(cube.transform.position.x, 10, ref velocity, smoothTime);
     *     cube.transform.position = new Vector3(newPosition, cube.transform.position.y, cube.transform.position.z);
     * }
     */
    static SmoothDamp(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {}

    /**
     * 角度滑順變化，開始加速結束減速
     * @param {float} current - 目前值
     * @param {float} target - 目標值
     * @param {ref_float} currentVelocity - 變化速度
     * @param {float} smoothTime - 約略花費時間
     * @param {float} [maxSpeed=Mathf.Infinity] - 速度上限
     * @param {float} [deltaTime=Time.deltaTime] - 從最後一次呼叫此函式的時間
     * @return {float} 新值
     */
    static SmoothDampAngle(current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) {}

    /**
     * 開始加速結束減速，可做自然的動畫補間     
     * @param {float} a - 開始值
     * @param {float} b - 結束值
     * @param {float} t - 0 ~ 1 之間的插值
     * @return {float} 回傳 a ~ b 之間的值
     * 
     */
    static SmoothStep(a, b, t) {}

    // SmoothDamp
    // SmoothDampAngle
    // SmoothStep

    /**
     * 開方
     * @param {float} f - 任意值
     * @return {float} 開方值
     * @example
     * // 取距離
     * Debug.Log(Mathf.Sqrt(A*A+B*B));
     */
    static Sqrt(f) {}

    /**
     * 取正切值
     * @param {float} f - 弳度
     * @return {float} 兩邊比值
     */
    static Tan(f) {}
    
}