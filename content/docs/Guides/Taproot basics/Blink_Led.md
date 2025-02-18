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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6IDVSDB%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIBtCtd07EB5lLJjh5CPLJIZpa7oR%2FFn687kXqr%2FLl0XhAiEAje5zz3rCVWdmlkxC2KPNzW%2BHBKWJgxXPwK3BeNvEpqUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyOYBw55AaeOy4b3SrcA4GnXpUkmdSsZSM6O%2BKfQd%2Bndc2vLaY49fsF5LlfusaBqZs5ZF1MEXsZxRm8dw%2FwJ30jIk19bziGyM0r2I%2FQK6xGHSuMEIcCb%2B157O6m57R9j4OeJxpDKyX5%2FCHE3DGH7qhmCcYcMX8%2B%2BeKU5qWaiVN8EZruObmiwD73bK3X5gKreE19UprbZPkCJkVkZzeczjjYGMchTU11e13tXztD7YVC1UZ2bfIhIB%2F4378kdcBz05D2K%2BDzy5f4AR7y4%2FO2DHGxMW2QQ0cyq4DiIiYupp2XiuOzsuZWNxzCjut0dnpI2GbvMAalIMzc0Ks3ROmGcVMT9vjy1yDvO7xxrMB1bDG470u0ilAzdUxDC38T5JJ34b4F%2BGUJvI05bzHPZOKB%2BI7ktoZbwMLPlIcgFZF8i2taKMfnx8erFD%2F2ZDTd5cGYVbgdaLXVQFT%2FUY32VaVp5HzB1EXN93pnGAOfNF7zGAsreLuWOqeO4bcXOvVEUczChaIlOKmyijLim2yIZ9TAAgpYHwqGLAyEZPH894qogJDD6lGK03Q92zqFm3HZB6cMLTmQOUTz7OTL7KO%2BlK2gw%2BZC7J%2FkuHl6oW7UjLSKO40y1z57aXc%2FXFUQXE%2Fdaon8HHWnHggIX9DLK9rPMOqa070GOqUB13HRYv7jIuuDifvYgQp1PLTpJfAmfL3uJx60Ds0VLlmMrpaGrgs9061IJ9KJyLy%2FwcTNiZPGvbM7xbmkiVE2n24FOW5KA8ewUvrYHYk%2Bol%2BjbWWtBgnnurAwbLu7o8yelgXyo7ZVg0vu93OFoIGdlgaRSvCCXAEFYaNexQaZEMx3KVbw1t9bwa6jty5N0pl9HGyzzyLtXXAVnTcivhzUdPUmTN1g&X-Amz-Signature=8b259615017a6f3aedfb35fde3032fabd0d7b87c19e13997521ee4ce4278b5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGMEVCA%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDkCZLN4Z4luZDvIKW%2FpgmOiYjvaInQYrdNt2hMwW0JzAIgLJkHjuuYZuPuDBSzL%2Fav2AZfSWxDLS%2BeVLyFsZ1MTQgqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLEvc%2F4Lm0BJGoXbvircAxqQVtMozmpbuz44GS0T8CEuRINFTz2vRBaOB59cL9CzGh7HsFyGxGkE6K4xr%2FWRuhpcK8xqRx1x0tR8uXht%2FNt1DeKMusUFSJN4omRiqEHhZY6CoyD3psXxLAswXUgA4WDTCWMEuHi6lqLgO1Zh4Z%2F7pW%2BE62oUMdzZNR%2FbfKSajcLKaz%2B1zDj297G7alwrAx7O3zlaMisS5%2BAdG%2FbdLx8gWDfajnFT%2FWiumKTPV4QHhonVuj%2BM7vLBA1pAR6OZil6mJWVYG0YsqE5SmOXmwJKRJtWfZwV9tTCY6hM2Vt0dNbnk4OQAGxRKnnR2lccN8TW958JQknM8TBGkJanZ39STSysWcA9MeJhPhl%2FyRzD64DSofhfq%2BxUEm%2FtbhkaFYuXYqjbspUNNhVskA%2B1%2FFv9yZ5yiB4oymFWlHyFKt5ZMqdieWLxmiC04Ja8f1UAChIhFFApp%2Bk5R5dG1HLflzq2RyT16vQuuXDWtZ%2FQWgzNhe4uVfeZEbRqntD4EOK0pZ3Oq00I0HCsjjxhd0tgQ0fDJSNlSpXgkTco0yV%2F7XTYFq8SH4Zbzz2cN1fKXfVUaipRaHkAP5I1grzBcugxEerfdKHUmKV5FrlR%2BAYXQROTDRXTxazw%2FJhzgeQAQMNWa070GOqUBSqI0jgOrcFFMq%2Bjq8WZK8Adk8Mi0etfe%2BFLQnhPS0uNNPhcr%2BNaAZ4be%2Bfjw%2FiNBgvQAK%2F4BgrJZA2LhCy%2Bci7Acn3%2FQlDgk%2FZGJ4voidA3CtL%2FOweN6SOwkP4yCzRf01938sTAdYUjmrnPHsOEbMOgqvKcy1RVEhcNtbXPlyuwzEiSjFTaIAKz4Yeb8XAVMIWHaSDK5JtIOJxsTBTsbXhbWrd0u&X-Amz-Signature=40d2b4d42808cdb9fe3eb5dea638194ced753e228f8aa087c0ffd85fa2277479&X-Amz-SignedHeaders=host&x-id=GetObject)

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
