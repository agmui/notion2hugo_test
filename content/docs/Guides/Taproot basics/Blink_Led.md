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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOOURL6%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgbOWXPGGVt3XInXGhcg24XbtE1LzjPQ0YsjBh9T8mZAIgFrIc6QnAanQeRH4NZ4J642NJurgVgY%2BpPpT4b86k5ZQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbfrMwiiH%2B5ww8q%2FircA5FGoDxPbJLqGtenlzL%2FgKi9Xul1KiX5nS22h5DdKwQUNVRHFB0CP5FirB%2BVMu%2FyUHR6j15J0pmE91m69y4UCz6RtlPjHQX0f4yIt%2BLzDz1mw8pYBB86jqI5gwmEDTwSv8O9QXLzLLoJaa7CqHniJ1awnN%2B%2BTRJJfPlnUunX%2F93HpyFGHbXomGLVHrLin3fcGtMPvpiH%2BHFnGtR5X8BJeFsEqVQ%2By1HLk3QfXDPRMIZtlJXt6T0KxfSVNVtT3dEBGNslf1mmKCgRgo6a6Vm3AE8EpCm0K0OzGSbny1BV6dz2NiCShiA%2BEowgL8cYDLeFxI2y1vytnmoPzSReIsD7pxkONmLof3Tl5izdYuzgOSXN%2BEgC6S8xojGCpHjhm5kNgQQjs5Ots0y0tA8n0wVPXH8WWsW3kjfNbo99X2zjVTfrVOJAVqKrtAiQC%2FL41TCKrZ9PkplB7mIG7pt%2Fk0jnZbkZlOFSUSCNGupuURVTBe4Y5Bg1d0loNSBefn3RqxSm%2FM0Bz7cCdbmGbXqhNEeactRKQrm2N1KDmBep6aRROGDDLFFiKrj6pLLQH5Gz0Xq5DIGY7zyBJAhxgOYYQJ16%2BRaZJcMTQdPgsH0Vnnpd41C45RS5ua2dbX%2Bf5tIxMPqiycIGOqUBgfjeuoXu67Nv9AA9IuIsrTNbdNIfJnzdgaZ%2BMTB6vXACYtazkGvrWZGGhcmdu1Gx%2BZFivvRoNFLAS7f6PnxC06%2Bojwo28QFM6k3pI%2F28ydDgJsEuWGEF5xXU0DBaVxwNh6Kk5riPp3FPeBhyRnNuhc8qMQZzfPHNgnWqIm6yN4KscTUdTOpzKV0aI8al5aiAD64Gq0h9mKhoMRe%2FouzQx5cQ0FpF&X-Amz-Signature=0a4b8e09f36a0a01f49171e6accfc9549ded100372bd171b7827b64f06e2b1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75JIKAB%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vn%2BJGbsZelzsujOMfHndte1JCk%2Bdg1w7ZUIWwr0T%2FgIgPKnNel1mjcOj%2F4BrLkD3lPWUMSGA0Uui8DoSXalTPQkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ0Rd3sSv6QH%2F7taSrcA0YSoheJdSilC2eWOULCGed5W0zkOj9PVWR0rCHzf5%2FBOqRuDek97%2Bmp5dUMm8Metq4PeDkwTcoZsH%2BKduRMKiFcQ29CqyZfgxXUTVFgV2%2F%2FZUXh%2BOl3VIu93tgLpUNvU17x7BgBuOuSe3X7bHFzFyI29ooUyCZOzy4%2BYnQrF%2B7fezZbJ0H1XTjFe3zHqoL6yNtNRNE1mLG8RRbm0fOaHTtN266KoFZ9t1NEkABCe2Mt%2BdPEqgUC7NfGSDncIshtXl4Yk07IzcEbmEkrQmCS1GmpH9aVvJ6EIwHUqiePoxmh%2BiBNsc5KaNmYv76kWERWtYtrjZkCdxeHdMHB%2FReZfaPcYUHRHQbsmpr28zP2rzsFHathrBESFC60oUbrkgLE%2ByT%2FP1ZO1au3p1TKMaQIBiErXqCxjUaJk7NweuWf12mvzxV%2F6%2FNOZN5btYiogwONgjxGE5nrTHpYxz3oo61SnQnFdyygFtmMZ6VZAi%2FAQ%2Bqimig4Fk1AteCn91J9CWiZqD%2FHhAaE4iYGj0f94mPx3iUw2JhcVMo8WHBs23C%2F7wYuH2Bu240oB4GTzXsJIuzm23fYNqCpZP29LFWNSSUVX6OPpkx1S7%2FbbGW%2BtVG6CXcZ6RzV85UaqtHPmy%2FRMJejycIGOqUBW44qYGvRX6e0GNwPjSJX5DDNcEp3Om4c%2BGl8y7LdQqo6eI43bJMM%2F3OPR3DVL6GPVahzrvV%2BBNCkPbIVbw9d%2FwqfcxLNwVmh%2B9AYoeod0qQ27U%2F8jBr0v2h00TWAzdnulyZ39LoPJyoat0TJ5lOGHWXlMBG%2BUduXNPmoww5Lb8KBocsR5JEfG4WUmji5hI4DsDU6UvVvDi6DpSan7Cgnsd47xCmv&X-Amz-Signature=40eae30af4fe185cefafc9159b41a518e460bedd99776912b0ac8243d62e8e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
