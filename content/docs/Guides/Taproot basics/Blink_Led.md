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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SK7H36Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC7pmDnlhlo0FrSQT5ChPC1Al6HvvCKoz5kyMHTk6QeuAIhAKvTH8UpamHwyMJfuAO2tm1bhDzVkAS%2FaCO9AyRbmrYRKv8DCD0QABoMNjM3NDIzMTgzODA1Igz0vcMT7LQYJ%2BH9DjIq3ANYGTVyrv3mlAKcT9yV%2FzWJ%2BIDil7BXLiiuzoVLAhvJ0%2FvAZDi2JElIPygJlEbmdU0NW4UxFE1wwgHeXQn43PBf6aqlH%2F1m94SUPnuJz7Pvclro3893qkskopBxQOo7q7Ef8XhmE3Ysx5XHnzJCMUB7Liqw8fl3%2FrEozmPJH74v1AsueJtnhEyEe%2F1U5Yc5nhzvV%2FjKXEsIsRH7ngyj7mH%2FYkd%2F5RzDJChpU0nluXBFrFS0WiqHxvnsdg2%2FvnmcLkUJ8z2PkSNdMCeMjR4hdrGVPqiC49GjZ8YlbPm2N7%2BU9PuL7VIxrVrYv25xxmC6Xk6d2LDo5zA8mafkrRBegdeMZ0aI5sDsXEEaJY2CJimEMcRtfASFop7DPmr%2Br%2BsvMsGxrYC%2FHuG7M%2FeQXl%2BE3sCwM1D7tdB8HN0FUIZYHSMenA23uTJiu2P7v%2FG9dHm2SDRdssYlMjTzH7xvn2D6lQ4ihwg44Vj8%2Fn9TwWW51p5%2FtCCQKnTzK2XShdeurrFZCWjnaYvIVl7yLMkLXT7XwWzuPhvLj%2BuFEO9Q7L8JEtVbRB%2BODNC%2FAwmJVKt9VQQGTAI2MUgNFm%2FdY8zb4B8vWLM7UGw7rdmnEos4P3PBHq%2B0l5i3Z8HdL62uo%2FX7iTCGq9fDBjqkAfJpL7r0uDl7lKa4Mes%2BQsxwSWiwS8V6g9omHm05ugIVP0yhrsfvO%2Fin%2FRiXOlMZMy4tElnYWNjsOme83fW565sYQWbXOw5sgUxoS1QcQFj895RkXL12gsPNTxAGKwfzEqfIHi0f1St3mi6roOtItwt2AofHmcMJdFDznoSIpNAIc0siBl60RAUeQC6pY43XfmmB8CF2vrCujpazguTzhO2HSQ5s&X-Amz-Signature=77a5cb0b58cef7e01af0a5430b8ca3e16b200210ca5d27bec7d65bcabf908638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7Z2GHUO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T051524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIAfbj18LFIzTUd7pvPgfaOo79iZ0oJeTO8pCd2qPUDWUAiEA%2FTr8pvysvPYIKo1I7b7f773JZn0hKqwBri%2BRI7oiPFkq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDOb15QlkEstaS6K23SrcA%2BsG%2FbNpbobHCke2y2AgKE0pV7py1JRBWX43Xq1NUZPGHFdcc5g%2BTku4Z2GZaFo7zbWyPxMahrAIODy7RjJegtPsJ8xY%2BJDjPd1uUhUUDCtvqGo%2BBzTaNlbmlbZjzNYAtj%2Fmk7vksI9WztLTqlkwErwE6HN1u1k8i%2F6%2BXdxDIIj%2BSbgmr5o65dt1aAit8dDZ2JU7%2BHefOOmOYQUNSYMreQbQI21osP3awzG8Dm1DQWZ59Pg8P8yd342nY0JHCaIcK0tBnZklAzIOkBA0fPk7H6BDcQPff0oyCoqEY5iyjjr%2FScoau%2B%2BsX3XOAnU4bm6s2Smt6%2F5cXI7DyTjnypQ2dnbzB6jHNM1h%2Bixiy4xBmVvBxW0ivzn8VmFDhPu9xj3ShdjYDShvCdQ9SKbCSTWCC4LMqnYcmcJz7Lct7VdG5y954ivm%2BCRkOGsSG8YTbfxaftKhdJRB53DawNw3iE6AKXppGkN8xCxy6A87npchODH%2F01VXIZn%2FYUq9KiU2OuePG4Ed2ms3ODWKu%2BDJ8npX8l1ILnMsJzzVcyY4JeXWkm5kpFv%2BGXKY1t1H%2BtU6yrX3qp7p%2Bp3oKBs1glqnDIoADvrs4qBOJXdsBwE8NILKfmF3vc6tQluWGJNsZO7aMNqq18MGOqUBCh5NuDEG18D1Ccurx3SCKm2qg6rpLINvSuUrq2xPwbF9%2BFAADXTrLqN5klwvd7myHCorNfKbkp4KhpuUXMOYdniDNaE9ZYT61Q8TH5WG0giViEXymuSizFZU%2BvYmO6BOsb8%2FvrOC4O6QtnLsnOtUrku0p0MuH1W%2Bs6QxYe53Rp4Nh7ROb0fq47Vrs2jGX%2BVPER0uVtUXtDnFRqQ33PT0V2vYkG7H&X-Amz-Signature=da6382c3c4c6daab4f932cec8b4e240f29d2eed9046c1b869559835e09316707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
