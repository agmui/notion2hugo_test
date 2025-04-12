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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EYGAEXA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCwjEbRyUqkLOQxUpJs7ZEytx6CQU4SsGXExCuOtBiRfgIhAKjrKGDjBxsHE9yXt2S56sQudEkS%2FSFIaAtkBipNkGuQKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFwo%2F3AKD%2BZu4sL3Qq3AMTWFRimivcETzZx4OJQVH56QiXSXrg7Nc4q72PjqnLztP2c%2BzSdB04FJQjzA97H0%2BOoVk5D8F3gpRiuOLshWM%2BEBBaCmmk58O0UZH8deE96THPLQIlg6SzMJ3AlyL%2Bghml%2F9e0OPm3mqhQ3B0tUlkB%2FNgYmdlVojyfrqGeiRY9H8mjB5gHSLsL4vmF0cIWcVd7Xs%2Bju2aQSu2X5g%2FCJCygNh4%2Fk0PmlQh0LcTCmj5h1wDxBK2CwJbEhygT9iG19kNlrUQ7T4ZBNADQ2hbjLQ24gou%2FYaKE9AbsCsFtfqSeGqwOKHp8nrzh40bu0qzp1bHso9O0navUMh1I%2BJQ3MSpB0%2Fgd6TBEMiiElbPO1A2rZSGIdsC7kllLBt0UjF65CwSUZylNbQbtL4ZHEEml%2BPbBH1RL4bI2q0dwriADtXgmLT4X%2FJqwytkz%2B3%2BbuCXoEl1OfnAyZbiltik%2BNa1BaeyWVBkPJqZ%2BTNkqcS2C2MB2nYOHQFJ%2FH2m3xzZoPj%2FTTD1mLkSYxX9uT7P8nQJbYvkKAHecsp4JbA27q%2FtU8F3YAl2wxrgkNjKwkutBFD9W5CeEo%2BHDQjk2g9eAiu2razuKr8W3%2FGL%2FqOAtKi3yDVYDa6i%2FiAmQvS9EZLxpwDCJjei%2FBjqkAT7rsW71H78oTHn8cbnVq217HGTZ17uKKlr%2FfE2aD3VCR76fQbQ2tb4yNVS7Tg%2BfnRdg4dkz1ne93jDdKgWBpXs8TT5BGU3el8Y%2Fx%2BkdoDSk0iklUqfm8wfkvqV5UIW4X4SiCMMnd5vUzze%2Fs2VdP6OurHMD6Z0%2FEiEqUTVzQTxYRX7vCOBWM5gGmqqVmMEuzHmlbv7dnJnF6%2BLKlWeJkVj3YXm4&X-Amz-Signature=39f6145143d10a48d9615e4efa8c690dc04228e24db224da5cc8f659d95f3e04&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5SSZUM%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCqR0G1xV5x7mgctit1uxyrkZZLl7JYCH5lI3AtCEIZ2gIhAJ4O2kVGYpjkD098spNeqqZkX8bykfx2%2BegRXt%2FIj89mKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9A97X3zAPgMPGvuQq3APHSLaW8jezMTncJTGxBrfIz3Z17xaS7JSUiPwDPuhAKJXoyXD5%2BNZFihAPLrcHoPMsfVxDAYuTI7sfyFVm5YpPSKjSZMp6QszvDK31bQHU2%2B7ik4FcaaxC7WofLszbUOSD%2BCF50iqU93FoqOlPp5JzTFG0ZJz5IhIcJXg9GrBsAv8QAG05v5RIBmxRuK6d09KDKacI9CM4cG2wGb21tlwIRaX5rhHt4ddTeYUK1ryhGVxGKBOg776QpO6LQm5qjb%2BrOJPwtCAPiO%2FGmMjctIZJpn%2FniKf677KDEBrUA5e7ElBZmdfTs4HI7vR7bi3TcqkEDowfki%2BKKmEotpONwbAQbvKIVYGDsKLpmajRfJ%2BNKIMUtEXmvrgKvWNyRvtnkv9eS%2FN3iVJfRfnYAscB1Zkji%2BIZK3I5IP39vhmYEzHKXeSelM4kgF1SC82UKHZzSOsIubqkq0nBt%2FGU1%2FS0sVWQ%2FAsS3IyGFTfNurO9NQaE0Y4PyeDZt1l4ViUvt4oL0xYTymFOKxF1dh%2FtNIAi%2BqTpTC6mMxd%2F4i8yt0fMD%2BG7tR0KvYxh0nF4sIg6pcGY6SE1%2BT7wAQkuX5%2Fhh6%2BvffI7%2B1k2fxoE8XpsB0blf4Ww1Ir7%2FK5R1UuEWhKrNzDtjOi%2FBjqkAVi%2BfF8y76i7qB%2FmMUtv764h5uySIjSGvRpI1CFrtXYyHkEg6sl071JVICD1RzIUHGjgdTV6ik5WxzniXuL7tGlQqOQZnLDTTJW3VqOkVM2Kfqn9yQTW8JgPF79FDrBPldbnsuT2uDO2D%2Bi%2Fwxu8psip2gETCFcI2VOUh8OXKGr7vDSJJS%2Buayq16QAaUXf3byemZMD%2FkwenrkhhcbV7AyWWiLyz&X-Amz-Signature=8d2d1df4e01d92694ba8d0547aac4447024e302bfa2a8ffd2f0baf4f2cf52920&X-Amz-SignedHeaders=host&x-id=GetObject)

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
