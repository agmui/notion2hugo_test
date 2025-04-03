---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KHEQDNI%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYclBtHUcS%2F7wv0nrseNw81U8D8PcibSe2XQl4G83O3AiEA5vKdFtbP9oJAFa7rGdc6B7GgmgbbhsnUMWMWX1Oc8kUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtGpIN2aL2vn6tgkCrcA%2BCh%2FGJjtuqbua2ZFZkKIHX9zg4NhROdCn%2FapIinCAOgFKrOrjgGg9tJ%2FPbnCCIwLvnY9EIz5dAE9RYzpOnWezkvcmTnlFZ2TzI5VUHBZ23%2Bi%2BOksl7oWsjs5GOKvC%2BWWKz8gXmItc064r5uzWSHf93DEVFF6GT8LGoa1fQf4fM8YRkyUkG1IEeGZ0i%2BtK5KJyHJXJA9TRMmfR4Hr99WgcbRGg14Vi9f2F2GUdP5HaqJnICtcHNpGi8IrpSnCLXF8f6qC0ZLLukF9Jtt%2BZuXJmCB09omLbcbhhOf1jzD5JMiGaA%2Fupmd6bU%2Bf1qENSSKsSVCBkMb%2BK8W1oFSy%2FivOgvIEr70zTWxpdVVN7kgiFyXZYpFbpKyOCyByQ1%2F9gOAYyW822V5F2W8yYoBlLkZ1LT3agMwf5%2BFMTI1ih0raxZBkzXA2Ekqq7IJpKrF1bBJ8g6OgVkHzfoSBLw2he7uDX5oCnc8wGieY3nKV4NPwQCAKX2weMUW%2BmmPzx%2B%2FVTiPN%2BfYjCFOnNIxE7r%2BVn2gr6pkcT9Qn2vePY6FcUE5XNwhw5g0fEzgi0p%2Bod5P1%2F%2FnixGdlKxkotVihJE5dV1%2B74bIgEFqEnXgXudIX63snq%2FmWzDL8Pbwt4rle%2BUQMJ3Su78GOqUBl%2B6y4gioh6VASUt9zUQ1cM5CEfN8RcZtsOLeEIPldTCe84vu8cbvmCuR%2BsDGIvP%2FLfIqf9s%2BnUXW2sQFWODCN2WqjaaKBjFrL98Z7iuQKKTcasF7kBvYcBiXKkPR4AjfoLViplXOduMKZ0VlDxK6FCJ1v685y%2FMF1aUuAq6Qh%2Fb%2BVL0sKuWq3bmH0dkw0R6N4gq3a4MSdvu7J33ePBxei3RQKjbB&X-Amz-Signature=7c41df1aee39ea6929c36efe3c6e12bdc9680daa1dcdaaa5ddb3bfebcc8aae38&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5BKFWII%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLa8mfjEoES6uZnGXBJbSaY2v42EsxwlBWJU2HBLYTpQIhAKT2exMQcsYkyZQ9qeR03h1uuXU3GIm0dEnPgrdIqCCHKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8JI3ea0frAThCQjIq3ANaaNJi2ndyQrDoVuWlNHi1jxB5FhoANSd1bR0LDvuXOu%2FJMW%2BWfwq0dGfQE1EaD%2FFcSVP1t%2FP8uxRD5AmavkVY0FU22YBt2LzHZ%2Fzo3PBgYEnMOsejmYgMBX8lYJBwTktowHPbCqO%2BvfQfX%2B0OfYWQyHRr4Q8wvbT0%2B61btyDA%2B0zZCxiBrTvHl6nHeuhaYNlwkVMGiUJ2gysiTLrsaw3nNyNjX3w9yEO9mgwW7nfz%2FzP0ECBXhXLsiKKXzxRZ0%2FoXJ5EBYaridi81SV2OlFHtlIFTLwSTsl4Fg%2F%2FxaP7OoNel4VUJQof2mykSUoQw7EdxbNBiNulKTMIWcWKp1XCU7MsnudiOgFo08NnJM%2Baw8pXUi4OvaAT90UbCzK9vtvnNdQOl631vwgddnPIW0Shq9Vv32yB9a554zSV7jUN1mCppMG2zxRp0Si6iuYCYd2rqWGNu7ZCIPEuf1dr94Eat31tyQQDDeCpRQr0qSFLb25sD3PN5r4xQMQxxLP4VUr66R3XHfgbs%2BojkyIjijBLVZSoBMPHoMPZhHprkoFVdMqbqK%2FEurG12IR73zAJS04Jf2FYBKtBdqLM%2BS53bwT7CK7myQIA8GOfurNVK%2FDTrkm5HTdaRUc1oPqqKcjCq0ru%2FBjqkAYTjuuxb07W1dRfIUCVx9mzk7lnZnQksSyK02WfxkhCj%2BVSNeP2jHyq%2Bjem6x%2BP%2F6VREA148TZcl35xw0WMp1dKIdkV3gRmgMjHXiJu2%2FHgmuzXO%2FDOZrK%2FBMtsEFRK5F7d%2BjScQ8WIYM3EBqdi7uVtQpRpZNkhcFnle8wrbfAjk9nHPgRqA5RYr3YiCBnUkTXDtN0aLTuNsVyjYOwSJty3LUzvX&X-Amz-Signature=bd38f7925d210ff96428f07d4a32b76ab74a1e31c70f82a7891072c61d94d440&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
