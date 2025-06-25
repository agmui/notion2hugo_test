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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ5XBVSH%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIQDzId7FHTS8%2FnSr0rBwjvcE5xuUXsSGK1GW5eAw0n4aAAIgHIvmhzT7OwSH1ZjtQmqp5y0ab%2Bx4NFmpY9dSVs53a9kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOU64aw7t9qPaEa1cSrcA7QeoN0y9V%2FIiEPYbxPZwqZz9W8vrr3IWQ5Yj1tVRMa2uTinuUWBQILlHLbVPmD6jRx2Hxb%2FNOhuTB7JvVE8pjKJDCITaZEPsoA9qfmOK7NtILpUFE5i%2BV1U6i1gctHWLDSmwO8SIG4kcMSrETFh%2FbvUi8UQwg2vX82xJsEE9o1s3zEqLrCmYFYV2Mb%2FyvY2ynpd88DrnEYTt8tymgk1sdf0HPtJwZhWaZUjRrKhWEXyKfcR0pnx%2BsaPpThDV%2FCuxL8RKU8k%2FJ4SZGAcMUl7%2BhYiFCasnns7dR%2BIm6Al3jBf0wGYSzZf94lgK0seu69PWFN%2B4cmTuWQik3bnxc%2B4wTbwpCnijAByobJXIVrORPqZen1RfQLnzAQqGkv9I7KRkZkSYriYmjoVr%2F7ZOpCZ6%2B5WekF4PHspzlP9DqxkBJCRa4RshQVQhY5rTGtCk7tB4ylz9FXG7wpuFkUpRlrzcDd9vMdG8QfNHdI6fWTr5QJkXuoGFrtBQQcZp6YG9wW%2Bd1vQYRp8bjJXILhG6f1Eif3uN%2FWgdDDI9m0zUJtk9LbPB03oSD8jYd5WgepzSWYrjGgN6lDaLzhw7bJoZcxI5eSiEpSSXmhYSfz19Tm1r6LZyJOzuVcCdgcpOJ5EMOWm7sIGOqUBBb1SgcDqqkIrZ8PUUyPA57gShUolP3C5PPywqxXVR72eA2ac2QWsZ1evjXPZ%2F6u8TQmj9mAMi%2FjURb%2FHqh1G6aRKbZCkMwooFopJgjGRCDn%2FEL93S8XQW1sqAoL%2B8otUaK4lh0qDebDuph%2BIlAtm0vhzRhZGUAdW%2BUTPrbgbFNGGtd1SlZoh16qgsRlsfLaA21RhJluZyIX5Id3UzW8jDQyd1Aut&X-Amz-Signature=bc5a8d3125f94d7d89b075a8d2f0048805f101bc180e6d53e3870fd7d3316d17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXY2OUD%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T071059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDFEQhRQUQv7NUkM8jN4B%2Fbf6lsU2I0dy5BOlzlPjKbHwIhALdcsGnMttWSzD9i5Sb47axpnbvGFCs3TCGUczBmsipKKv8DCD8QABoMNjM3NDIzMTgzODA1IgxpNc%2BVIONbwpiDOW0q3AOuYEUSnCacMOzQA2b4POT%2FNmPuWVoFeHUkYxEhtgsVdX1AJPBS%2B6bDbx7o9fTPG1tYxciZndkmx9C8QKil3da0l4vj3kqcBGWiMRabG8s5XFMADQSqylc294ABRGdFLu0aeNNoieQ36wcaR4r4qeUuEX7KCnJx7KZ5i7lBQNRseOC3Qkry9o%2FmHZ21s%2FtKlsmpx52Khr23SEBiH%2FqYyaWbq8ppT%2BtG%2Fiun03StXo5XZOqqVj20GGRgwmP36KnO2H%2Fv8YzpJVrzziMH5Hc5i3PbxDzQgs018gyvoaw4FIqXygxE5aP7k90Nd7mKcK43kJFdkUXV2JbOYFm%2FvXxIeSj0p0JSuWPzCuaJh4unwPqlWm5ceEWFmJtUMzhBWTD64mx4sZh%2FxIR6nsaXyV%2BC95WOpBDRSyci7gRNAICRbPPsQh%2Flz%2F%2BQKkB9L3TZjYG8uOtJNWupIQem6pTlr8cXhyd6u0zDPLICw5gJk3YFxQ0T9sjFuUBu0uYOvhXMYKX4%2BGCYm0r00Z%2BIVJa3d%2FwpVENUxOxjxFmrP8SRKLDB3e9ELm56Z64BWb1Hwvp6a2c8d%2Bd7%2BsqTmTketTdM8v8LQ%2BTHq%2F%2B8vSQ%2Fs7ut%2F%2Fx8U7OGo19rb9Ke9fp9tib5EDDFpe7CBjqkARPKq78bdpH5K19pYy8G81%2Ffy1jTkbteNRu7Q%2F%2FyC0ThL6oA2St%2BDgDpJC3bXDTm8xqJZ5UrMu%2F8ebIPOg4xx2%2FVdviWRFj9DvNF9I2A1f1T9cpkAWMc1YNJFEPcbvXRuOfTxRvaOLLDqyLEfuG8aiGnJ2EmlzoPWuGqg55zFChkvANTbZRvcnv7eeESrPqFKC96AWkp9DxQBHnyqQ0j50e%2Fboyb&X-Amz-Signature=c9aa164b7869f1f3ad1ae158f32bb20f13a335b88d98418675ea3ee90d0c5910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
