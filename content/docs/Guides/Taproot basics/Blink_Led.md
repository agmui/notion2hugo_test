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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNPYEUSU%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDihmq3S4CSl8Pkm9TPSgQgGIkmBMZiFcPc1TfK509tAAIhAJhe5q4lg4ujeOLVJvUDlI4OBygTXxGDhR0piUxdUmFnKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcCzUIig3BTMnQDb8q3AOA9oXOxQzNjDsmuOgHWUc%2Fgema6GrjGTJTUG94sX6016Tyxo2k4GgBzff1wyu0OAEnG3nuTzGXfh6v9dEoulHh5vghBxkyOIEHVoWq8DWCJ5FLogr8HzAefkotL73Fkff1grgLtVSYB8706hbmnZgvOhyt2LWYyBwHHWhy3SjBRpKMibzdKIaCQBuacfcteMOIl1A2xF8tUSpMsNcNwaaa09W4Ij5rIP9LiVmzEYzwP4sUKHFJmMGk6rKFR%2FgFSt57zMA0qWswdL2gcuaIoK4AA0ZapJgpCFxnO2SjSW4szuYJfpE63bh41qDiVQwqMML%2FHlubse0bvChNtTZF%2BGy5QXYhS2drxU%2BcxvDZYpK%2FEJdn2USVMXRxLqR%2BI7E%2FpsUXKB1E3%2FZkEW4iIqOn1U4BDuaUtbfYjDE98%2FyIkVYBwZauZT6OE7IY145mp4ZCiuEXV%2B4kga%2BoynDdawVTWReHKDcE0DYTNUzsbxiqeYnkaA7LL3YWCZxVloMTIvM%2BWYfiCWP1PKA1LNwT7xUWn8xcgOw%2BtCa%2B8Qjz3CmZLlbRqb%2BRSXwl835%2FZlSNgb2%2BoqCgusslTPheKaA8E5c4a5bC%2FWl%2B7BLJx3TSer0WR0Mn3Q%2FJbeeA1zeUpeNI%2FjD6pZO%2BBjqkATxuXlJsN5t6isC22WEVj7MTiXHlViaotBTwLjdrt8v3pRTmWcHmjgo36EMidmeMWAx5j0VWThAugGfN81bbCV8%2BjIVR8jBbVZ34jqV%2ButIaXgMPXUsCBcY2AKU3N2Oyitirj5Pv0IeamIko8DNI9rjZdBKeQieHOfRmFGluouX2IikUNWJy5idCNNPMolxS2ZD8IqoyEDMh8GXTRUCNAzak6zR7&X-Amz-Signature=31633e4dba1e408fda5728adff56128418a65e854c22119660d3fc61f3110b41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DDS3TIQ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T220147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGbapmVy4MOaO1dMquv9faSeMON%2BgJd3eJFGsGkmEgk6AiAE0iULI7X84FDTkjiSTvmsY9t48TlmouK0l3E%2F3qlMxCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM44RpkkNoyeYQhUhUKtwDSrJenROFpK7Cb6KNihPkqvpJh%2BOO0p3GPwSUv%2B7pNzNO2ZIpU%2BWgYRSP99z5pRaS45o0iYSspwAj%2FW7POu7Pjr9qiQ16WtdoSQIgf180VA2sv51a56anssGLrza6yI%2BasM%2FCIGMpaJvW3p41MxZ1H1stdQTXPZpi6%2BjaK7QEg9uPygmQSaZH%2Ft1Vdd2E6ysIrZ3LGy%2BcD%2BJPeRIKrl%2B3wOZD5M9L4Xe7koEjfTx5yJkHdVadROZPOEW0Xs%2BxtTbu5a%2Bb%2BFjFW4Da9l5Su2QbpsMJqAIzrRWrmmbOOMtC7ST6WyiAZ11vKM4UgU%2F0tAa%2F3kG2S7LVprBqwRGRBZB8SLzfeT6DVGhrwOQdzpXCsCLlO4T22hPW3fH39Q0rrRS5s4X%2FPJiz4n11nrIBF%2BqigBhr3tlBSQ3VCoxtmqsZGTFcL1m6yoHOdK%2BajP6n9CfrvrUYr5Hci5N2xhQXyr%2BL3S6F0B0GabR108o6yOKYGt18vvio8QuO%2F%2B%2Bj9XyEDyDxUyGYX%2Bre6i2KDsIIWq3BCocdQjQKHwLJNdcJUUmJ89iKICEMyTl58G2xCsFlu4lx25O1I7tVLSHuKvefbSdHuWfsxzdD0J5Sbax%2B5q5imyCNeTufqlJUhkC3KvAw2KWTvgY6pgFHy8BpAEjLr%2B1YVKqhdVInb60u7A%2BxuW%2FnAFzRApgpEH8%2BQvW76cwVrgqxCvnZQvScHRWlUShTQ9v1bQNSSi91joqNhWX2pOkBlG6vC1XyYy9WXybUeyeJREYe%2Bqu1%2BopUzEHi1X0CjX2gJsVpEM46x5mDsZAvq93liNFdIUlKQZTjFEamnd%2BrTjkLC6%2FiejEfZygjOQTrq%2FHUvWPodQyCfD6T4UPH&X-Amz-Signature=88110a4b9cb84008a608bee71c88fdcdb6350073fc36adfa2fbaf4d9fb92ce02&X-Amz-SignedHeaders=host&x-id=GetObject)

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
