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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q5LN6XM%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCCIE0TX4ZdRSZoobfDv%2BhZj4bDMLUCtlmX%2F4H8dKF5awIhAJzvcywRgIL30KUhRnRMPWgumGfIFSNvC7NJ5amGUU3NKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbT7qfdG7lCTZ4LIsq3AN2QJF3%2F%2BNO2g%2FWnkir7wmOEXAAm%2F4FJaSJPx%2F9ADe1ibR2imVwUG%2FTwHJgu7l0BKSAkxJaBn3hbGYH2orXTuB7PYKz8RZt832HXJD0jOPjS4WW4k76lFjG4WC%2BLmZEpG0WaEv6klBl6O8o1SldTosUU5McgLIEnZP2YKoLvbqZYZdoI9G0wSmOWe5oJhL1KDmRySNa%2BEvT3dKhmRA8X2qiu86%2BvfJQ8Z%2Fbs%2BxshqDyeoR2BnH63WmUwSfaJr%2FuVECT8aVsotkXeWUconl1gJUoysw2v1Qx%2BI%2Ff6R11%2BwElWdxSAgxN4tMFtJbRITxN2%2FNPFLvwHlk%2BDZ46X%2BnSHYzyqmtSm88tpN%2FuPWnoD8xYGo5Bat9dDAvYbzYTvzhgL3UrKMb32Rk%2F%2FdWFd4SMqM7nCP3ew%2F%2FChaCgUpgbkualdvi2taH9g4PfhkfKxEAp1ZX0Kglaey74gPMn8aeqVT7DgdA8Tx6VPqBPWdYoMICt8FuSUrEBgjmuNylAqdDl5rzUXa8RUBlqkHfWaYoPmyVaoPcxG0tMiq0hCr38tCM1QgZYidng18UreawAox%2BUO3c%2FSeQx7kja6d7Lf8TyB9dw4FZgTVRUFzeH2lDfi4ajsAfrVaA1ptGhR7hJszCS7ZzOBjqkAcSyqAtJAr4aBFHVGxaN57dgA6Xe5sx1j368wdo%2Fb2mMaZTzb14WtZX8ACLf0e0%2B2og1NH9aQxiX8lciAnIZ999aPIMQUyxMH37A3tXICVY00RKMFJnMhgMD86as3upDYJqMniJipr5MIzJsnAc1xWh%2BxMn8zsZQnBODuI%2BRMvYp%2FgCRJh8q09jl%2BVHOsEAg03hOYbi8m84ppzLU4gD5RYBX6vqt&X-Amz-Signature=0866e67f33e59a5dfdbed7ae15f32c7f58ad6058f7bfb73d2d1a158bee65b3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QMXNL2L%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEK%2FyBUFa2C61s%2B5NmeK4Wc9ATXO4ghdIpWMVwATlC7QAiAmOSkIhh6FXTAduCu9PbP5JW6wyDmt%2BKGMckPB0DmVjiqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMplyGEPVX26SsZ4kUKtwDxXusZgtrYBurcOTh37p9VSQLyMNVSXvIYWMYYhGqZnGEojYl7dutLLCwb8eXheA9dIf1CvevfRJSofiw80q8jkGoGYlP2YnxJ1SjI9l47gutJ9Dpb7I%2FPbqhDKZUiJSGaQPhkgP1IIWUT7GfOBW%2BMOXsfreP8t24YrTC079WidJ6zc3h4a1DUnExZnX52Y2qbjr8wKfbQ3rD%2Fm1SdxPJHXfGizIVViXm3AgGzpR6KLLs2wOMNaz%2FH8r%2BpeWGw6jmDd4XqMMQT%2BS0LdbQA6DMn4lVw2lcBU04v3bJxBs0k%2BKyZwcFpzyy%2F8OISH12sY7NLUlr0KGqLqqVuBY22IOY4iV0EPpmQetAJwcyWETSjo4OR%2BB0b4tm7DXnoFrufBlcKAQRDmUJYI5KAp6OrGmMGsPoX3oRMe85yuu5YFJ9gG%2FypHnXHdQMQfd%2F5n0sN%2Buwjs4%2Fx95siDbW%2Fn7A6p08FOdzkZgial1LMtk5gxVwRM64sAfC6rQlJK4ml9LK57x9Rp8AMGOE%2ByON6kPqBswPmPDRuBT1DHqUTtegq7uN%2B7Q5EXzP6XXsXZON3%2BNtzetWJLLJJ2euKcBv6S3OpGOJV42RPiKTJ%2BPY0B1Vv70UAwYMKhPo95lTS1bziLYw2%2B2czgY6pgHej1x5WJ%2BtN4%2BZUOjZfIuJNfOt70wV4OT6s9UXQwgmL8aVWdCggvdg3HgiAVRaOFSDudlS4Bl%2BqNcCH%2BK1QZ%2BRF95CJdJHfd4dDR4MuwRDgEoHiDJBC%2Fl%2B5a4uZR8Mdkngx2M0EnA80ZQB%2FrQdWdvDL5rGAGgiZu8KTw5JKM%2FZ3fOXuOlg5rSjg7P%2BkqZJPvxH7Zg5tfNI1Rp9yDjZ92Ia0XpIjuC%2F&X-Amz-Signature=324920fbb472d84914a365200d1e4381d5b04be94b73aa2b470dbcfbb02e1511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
