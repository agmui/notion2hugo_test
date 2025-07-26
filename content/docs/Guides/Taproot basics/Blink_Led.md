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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU3X4FV2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCsSRND5eOvxMIhPpf7smHEP%2FLaGcr24u2miPAoKxoCRQIgK48yzqix0qdVIzdw0NHVzPKaQyljwgW1M6Zf88hawSAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDEaG96GYKsiDBSyMlSrcA%2BJemL%2Fyse7BKqQgFiRGG7m497UR1QfczWFW%2FK8J7P3FA0t7AtAcRgpjebbaolvhpBQwM61iPpauqQG6fzezG81pCkLc2w7fnyBijMcXEh%2BFvylvK9ERbgiIfL5QftirFutgs5Kkb%2BEVMC272b7aabluB%2BalhwQJd9mCVnP7Xys%2FZYokAb7aczr6CgN89eDStxtoLnFNlJfRNOtgte4Skjl9yaTL2UuPbhvN8Exy%2FkFm8BiHLStincvzJVPvzgofhQEdOYQDtje7gjwOhGsG2bGG3wul4wTnYe3Z9LhB6GJQvnz32IxlO3bhZBBD3SP4%2B%2B6RFL9ACch2Fp7ZHGlreNl6LmqSefwuLGxQus1BX6R7irwTBJ%2F89DzbjgfhH0v0L%2BdHG0HmUjDxwxw2uchmqS7fJCdzczfz82Z%2BWcK5%2FefwrAUDIWNTkk4XgaAxQJXhvuewTZ1E3rvNw3k9SAxs2tjWMXbxAfj%2Bm6n8dIK%2FqJqqJ%2FVBiRtE7ZCu4wRKUjkio4TO%2FxlfP6HgrERATwnuAM6b%2FG8zRGlWUHSm4YmQOSDYjjN1YUBMeUCXq0qcSfbTXK442fymf4Nv%2BCE0nUGPYR9TKMMCusYlDi4Kepogz0FhW75bEfAjUu33Am7zMObikcQGOqUBYS4212GyVsR9O9ZTacB7hoEM0jpZWT6msCHRJUVKDIVJ3eaxhpaUw7m8Toox9E55qRfftNCX1LDIS%2BaVUSBE8OvG1er3LTQtCGGPihUsMPUBcQzvn%2Bioy7qvUv4kUnJsOfGI2tRaw06eyP70QEAeEDtCadM6OvXKQZfySZ5RdqjP7%2BC7pNnlrsBDNLQDN9Hq%2FQAgb5mFoEuvUyvpVA2%2BC1ZnF1oT&X-Amz-Signature=949a97c4e971675d9ca551c9419de4de3737f2a4195154235ccaa9c6c7c00bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHBK5KQT%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T061226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIA0XQ9Pwftf8m2D%2FNFTPGEK6vbby%2BvBbJasYddcSbtWtAiBS3c1sSUYM7ICiauFK06hinO5QZ3kcV8iWEp%2FkRneliSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMAse7n73KK%2BQIfHb4KtwDsfxD6w1BDBrXlemYMCwUg0w4IZpAvyncbFtq%2B4QfGMLI3MvgjS5toGO7efnvSWRpHvKYRVurFNzUmDp3wBsJ0apA06H7Wr%2FaKZWtd7ucsF%2BRQvipGUADNbhyMfIJEV7npLAm8WXiLFY880tSpilqahsT4vpgvOe%2FINvUXat%2BbGmBwO9%2BZGU%2BKRULFevHudpziI3xeao76AiBqGGICPt9G5sv8LXF1eRfCDBGz6qlkjqRGgU5K5wIicJCwxaOmQSVJ1hDtJgIZ0VHBjUsKISNEhnvJvKYnHrsiCz%2Frm9asz3OyQOpiijiVzVjmNGkFu4g9uy641pUns2TL7eZbVO%2B9ykUeV0aMYC7Y%2FaczKHjATkEw3Pyo4c5UfvX8Lj8ZyTAYPKO5NICDLtuZXN7eSAFCE%2BBLkBk1Uw7D8jVFw1NjfryVuQZQDOZqxP8Vq4BdnWssGaRrYQ%2FWjhUkXZfzjRArBlUjuQEmrAURgLLqz%2F%2Fw%2Fj%2B9aLJDZH3qrU3CV4PcRcBcPtbiQcIK7IQFKxVD6Ig4E8HbaOZSozd12phZQOv2d8qBwEtrrsX3Dkqw5HqfKRrAe03ijbqkB0d7Znu8JWiir62KoXU9PeiPvWVqinZxjmvyLRHTliIzZymfHAwpOKRxAY6pgFnS4pamwAvdn0Fyoj%2FINSkqdE8v%2FtgoeeRoLGMq9dTy8LJl1C6UvlgBZxdqy3NfVhm7ep2boMvlYy5Qyv%2BIvT5R5kGONdKTFWxP38Pq1KAISquc0%2BBiLloav5FLD636g2%2FdXQI2dfJ2t95qr%2FZ8jR%2F7dZ4EGVT3P0UT5oOnxRLRTn10KfU%2Bjjm0GoDx%2FiYv0CIt7%2BF001Kg96809Uxu1GGC1V3%2Buu4&X-Amz-Signature=c02ae45f4c8bdcf8c59e28fd41373a853db55a7d8d313ae310f9a9acc10221ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
