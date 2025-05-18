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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KMUPL2O%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDub2mbi5cl5sbI9Fl30pqg2jDKR2JawCEkl9T0b8LkTAIgKj0dgFUJSwADoOek10POUF8iDM4Del2unz%2FkwajUdzAq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDGP%2B8V3KzV3kmjg%2FMircA7om%2Bwk93JTiU9lb0UOYhayTQIOiUPQPjqoMA19b7YdxWbwpwu1iRLHHnFdKpIZealHef6SMesbi26PAmcz8M6GDj68KuIGt4EstC8OH0cuHLH2zUiN%2BRL%2F7Fm5OyMu90c%2FdfNWMfEpOYgKoZGIAxf0Fy6Wh6gPZOz07Dt%2Fr8FUkK%2FJypPeEnIRAxBJoZjMlYLdWApJA2FcRu1Ujc%2B8VHu2HVHGxZZCYcREh4Uvpag1Hm9zgJK3ibWEnRVKMcd2TGevHzaqlM0YqXBcIQsWy8Yrf%2FvD%2Fl%2BU%2F9RVdC11SObGfmEM2yxknENt8kJ29dc7RYvlwcKDcfrZvNwAaU9bvl1BREZ918ve1qUDRIVOMj7%2Fq552HYoFnYhHNkQNIZfN8Xb%2Bsy3iF1lgyOPVXaYFQ83Nr%2BVQFuz7w6LYYDSUt3kneYFuqALC%2BcuGmgnyojIpA6NebOcRnzepyHvSJLLcRcQrgMh3yA%2BUXfFBtlZEewygEYObHUofWH3c2wa8imwSmVz6Z8GQjBYqRs8fXpH3NWH%2BMNLZnOIG871Rg1k5ot8SUrp7aDGTWOGXKHdgHIUPeg5yjN4F2ha3n5ZdMLRC7EeKyr%2BycEfK8YIIeXOpoLiC%2F6jRfq7Y%2BBqVWCOe7MM7xpcEGOqUBf3TZTXvVasCU6I4C%2FEqsTDn2HLTJDu1v0EY9OttgDts81r7Y6RbeZMHiBQ0MUVgZQsa2vSedLS%2BrTxKmv7puSNuRPcEXeMK9D0K6GUC60o3RG%2Bz%2BNX7jsOrh%2BpYvBywQ%2BTAzxfIGofE9KV9U%2Boe4pjMcnbKmI70rLUwQodfVr8%2BY6tZqAu632FHTKj6hcSigFu%2B120mS0SXWzYZWrkArF%2FuHzJz6&X-Amz-Signature=a495611d1f6f4d2b97011e9853217efabe623a13ad1acff469087438b64cde12&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDRSSHRO%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDn5ZKhE0DPLH1wN84%2BIxRz7haMGJUSeDW5VSZ3Tf9gAiEA5uE0auScbnZR4q%2BGN%2FEkX%2FEa5IT%2Bn3U7a4AfGNSJZLkq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDE%2BX4kc6RxZIe41XMSrcA6OErnd0oTDHz9TJOVxgamq%2FlD2lN7AS554moHp3pNraRhftjCbEDJcsQuvR7V2RsSeG9DLPkpAKqA5vvEMOCmbi%2FxUZ8rHUp3OqTJ9zfI%2FvzW0t7cNjiFUYWfvqACfx8PN9ePyey0fmbK%2FrhiZc%2BpbaAjYiGy1fjn5ms3oAQzpX1ZefcuJ6V45Jq6CzUxOTVJH6ubOyYloYgFLXDBPS%2F7Dlmx6RLsY9OI5Q5Tz3P0%2BrSF4FkM9N9LzHBOFZPQEtlumkAXE6X8hONKE9H83MbaoDQ8D3vYrjJ1lwtalhlYLNN8GGyJzwGH8IwsXGfh%2FiSoNt5avvyu88OstKx%2BTMVqo4uHDfqnYo8XgJSQbZALLH%2BUvlw09c8%2BJc5bR9Jton6stfdL%2FMPPLAFM8ar%2FkbBpMv5rJ1AdAgSmYOHovD3tkMdvdQnU4%2BGWqDaNW%2FWJX039qxsaPwEnqppWContb%2BwGCGjD0T6AxIhMdnAcC7AXXUxFg5EtUkkSTDYiJQGEPWZ%2FDGzrV4JmJqj9bKCubHanYrtlHMEbLtQq0hLPmAMG6QYKWrny%2BHFaMUnJz8dtH9E%2Bmhv84tpGDo4Lw5zNJS4Kx8l3T6yzwAH2qbt1PZXB%2BfVrjWXXYrMM44I6YoMKL1pcEGOqUBUasXEz0f2Kh5hkBpj3EPDjTD5ZexRRmEmphm7XnZnntYLEIx%2F88PTedy7KxnuGTmaJGY4Ah72xtFQD%2B2Hu2sGBjomKEVVtmUAk8EvESmkx6OkEybq6XgkPgvWOgLYiP7VAH2zs8SxYIC5PAd3T0q0pGOZh1D5Skym1Egf8A808J0w%2FjXe%2BHB6c9fginqowbbEIX6OmDJ0XuSc3D0jId3AEh19RgD&X-Amz-Signature=0a376668a1ba5d5849752cfc613d72335c9947f7fb1144a1011adecdc9b41410&X-Amz-SignedHeaders=host&x-id=GetObject)

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
