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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIIKTEJU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIFUgD8rI%2F680mrrIDUhHVtqWlEHBzwfdPJYmhibCeEQeAiEAh7wW5BbOJdd2jHQJcom9C%2BvL%2BNXOAEqMJNi423ToNOMq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDGkq%2Fo5vuZaoHryf7yrcA7b2OPwehmJTibgBEewai5voSyWBEjjt%2F0TmulSKz6lUf8UtMsyjvrQgmgZyMdYDeWnn1lfOolo4pe6e1pSXB6097W0s5c6pLbgaq4jQPvZqjz3H04t7W5UcUC7L3Xet7tlUeVHOP9wowUj%2FNOMEGMV2tFv386KuLaB14sybGD8zxmVZMDhKEJmVKL7f2IkMOrPjPqXZctZAdFik7s9b7RvnvLPnQsOG%2FYtppqyQosCKOldzG5K2Fnir10EM2L0Mcfpu4O9F4lmd58UfA8F8LhULmUNZWpRWAKgcObUQD0WDcVGH8dbJJOuCbdrahaGMXScvHqE8StytI8DJ%2BROs5nqmAiSbHPS1WdLzBeu%2FDRX99MBFlPCGiN%2B5X9h2kljnQ%2B9cfNmZbDq5RAgT4v8PwU4YKLk42ad8ldPUsDc1zcELA4enpuy7mq5V8gE4k3UubmEmMMEohTAOIqxF2ZOgsfr121EyT9CIPX%2FDbugl1xhSZ%2Bv6yRBgRuwZRt4q6POikaD3XBs7JaHShV89X4QT2pUvZ0HCPQYzYEBawRAL5P6KOu0ILuAQrNugAlRSOoMsw%2B5qq59tMvBP%2Ft%2BtemsZaTjrPG3Pa2NxDVmynSdDtnrc2s8zLHn2H9aJhfnMMPHb0sMGOqUBXt%2B22eK2DAWR0gXb8Fwlce4x8iFLnFxmGlK3FLV%2BxTr%2BJ2XH%2Fevmqn74BLt2y8YFORqhbw9dhc61DrtVQfNm1wMf6%2FTyJo42WQ1Hfk%2FGyvntaUkLgCo2SHFPkMRweLVhbEAn6n3%2BbxSZ6KzSU4h%2BKQSlHd4Y6bsBz03lAR1Zzaz4hzzNVn%2FX%2FXyWjXckoWkDUu6aV2YGQo%2FPiZNbLf%2BJcDGdJuxr&X-Amz-Signature=9c02f839500c18cc8b39e3a1124a20b535b9fe945fb260ec3ed612bfae9ef3ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYX7GZ2X%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQClFIQR%2BZGsorKQO1wEMgvxXUOHp75KokWrlIb6vtDPtwIhAM4BzxDNU2MeIvWM5TWjAudUnZRAQbOl6Do4p9d%2B4li2Kv8DCCgQABoMNjM3NDIzMTgzODA1Igw%2FroXN5M%2BL%2F9t98qwq3AM2G8I%2FPtznll9jRiZR%2BQ1Iew9S6CVdUFZ43Bj8VqgHc59zHQv%2FQ1dywImY7T3J2pFj%2Fn0do%2F%2BcM5CKcy6X8I%2BpIRm6ZDvn6hjHLODtXFw%2Bw5SJ60JbFjWPg8EVEZ8fEYzit%2FFKp%2FBhLQa98AhpVt4f41dvkskJTYjsmX%2FJw78ecxcrRThqWB85xvTD5sTJ7rzN14oDCAfJrbFWggL83nkpm1S1KF%2F9MhpyaDjiLHwzUJmvLS2W%2FwAIRpicDqOKRj%2BY229tRRGQFbFf0OuQ%2BCN4yt9i7B7CQOAzXm9Xj6cKePsJtKz%2B%2FeGUhWXtpql0uwMwcG8pWjLibKq4o2G0dXLIFv5s0zRrruguzwvo0lFUtIg1MMumKez5pat9fWNuQWRjS%2Fp0kyp99piSA%2B6hVuoxw4E208EJJwjw65vYQn8N%2BfyxV%2BA6gu2tiH5FfeWL5s1EJmODR6I3JFCAJvxNwkbNT23IrWY1F2eS7ORbJSfj%2FubjS1WDu53LbLPOhgO0rIM2VsXB7unacUyjClGPU35Hj31rBWVd74sC8ha0%2B63TbvKHVsXn8xtBeDVs3%2FKkGEcOmo2WweVDoN548ft3dAb3mbiGQTyiNmZhh%2B1lZaH48I7gP8hplHrBHLhLgjC83NLDBjqkARFc%2FHqLz7SrFVR1DGGuobRnV5o%2BK%2F6szXasAuUQ5TqX8ntjZP6sLj1Vl7S1DbtRPKho%2FlGnYcDG8G2k6ZUf6BdiqkWoz%2BOzyDEDmUZ3EzhSH5WAXIMo%2FxlmQ4Y%2FJjWCuoA0Ssskj5cWZcxq9GIYbXbVlB%2FyayvYrSTULY%2Bqs2cgo5jHvKe9%2FFAn45nnkcAUKArT9Wl8yYhCIsuVaio3BKYUWeqS&X-Amz-Signature=e83b2b74b1d121f76933513cb4dfcdefc86eda08a703e99d77d710d9f9cd3f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
