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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQMYL2U%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDrqASgRWMvTb%2F%2BepPFT4mz6FRaKCOmG0uC9xAVsogPLAiAlcrHto9fuLUKlO4WE577Orqe0Arun0wjZqUp9ovJ53CqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUaw9URdvg%2FVo3KwhKtwDvc0AxqCw2yw4%2FLu2u%2FpROeuDRdZECM2ApN%2BdSSRXFjIuVWjsdPezaXXNDGXKaY1eEKMfyyO3cLCJ74Y7voNuBtKFXaD5MJ7xV2F2R639USPyFI4iCtrcfirDLM06LRNoWrsGOXQ4i3VN2uod3Z7BGbDj1s%2FOqbeq6P289oR%2Fcw%2BF9Of05xoWBs6RMtvGY7lYKtxudp7GuA21XBAqD0ZEB%2FbwuWlfZsEzcKoahUAVrjhm6QozwSZX6epBUVjGi2XYbf7M4DcEgw2QHU1cpuXNeSnLlGOCqllWbPCT48p6YTibzW29iOSMqyCX5T26CJYkrgTuxquqGofrgGut%2FacuqVDywc9zuafwV%2B4zOwh2r37W%2FAJtNkIjEqcs7rcxPyE954kEY9ytOMNGOvQVHB7tt60EtpbJUd2k%2FJEhw6wtUlKtTYsPs66qZzUYmubtZPQLJlhtOnSXZRlyEkFu%2BbUq08qJjhtYCmMO0S3BPgH7MtnwaCjGdtgMayVm4BnyEEHRTlHEApFIy4BMkAVMcUZbVNb3JDxLGFwBqPyoWBLIyFslp8%2BZiWR04esb6NZiIJKSnxVLPOyVpObLP3i2LT21YEd8bDvmpOba3JwebwSFV7Jf9Ga5SnrTXFo0G8Iwrq%2FKwAY6pgGr65NpDCYygbwQZJJTRC9PE5HLFPJOkcTcgWqoex85o%2F48BY848%2F%2FeGBwZQF3zJTjIkDRHgpSWzJHFKy%2FamBFYIOo4ZtZoBUCBZA0EBdo2N25fq42srz75qNqK6LzHKoqsiD%2Ft7fIWoYEnMLYZJbaK8DY2sNbQgHIDGlgVHvqQ5DQggLIb%2BVHgyppo1ngmpl8sBx2ZPIlbiZ1t2wU5comMCVeUN023&X-Amz-Signature=5b6ac6e09b9c3d68146115ccd5dc40d7ee54b0d761b574da3f27f677cb6a3f6b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDAQQMN5%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDSnfeH3%2FkPOx1aaY2VupyXXLN1h%2BK0AENCeqmRto0WvgIhAMDPXSd0ET3htSkWt6UyDHzM%2Fffw7wtu0dbHS%2BmfrQQ1KogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbwMx%2BhBAwZ9VcvWQq3AOf85w5RX8xLtyoFxdSERMmFtQWyP0XKR3rkYcspexds0%2F3CKL4kb6H%2FlKzcw3Ye4CHpJLZsIQMmYPPcD40oIjCGP0aRXqeDvuAzQyReYQ8PD6jgT%2FwKNpIQs0ASkdIC0TgIX8LeMMzPdu4b%2BmKz0WOgnseWcIItQOUojV8bGwRV%2FU2pNcN%2Bm7n%2Bm0AHZ%2F9vKRmWN4VQ0U%2FcgdAgEFiqdDx4JqkCETjaFVnUoWH0q0Ncyv%2F%2F%2F8QVD9dJ882wl9UL5INsP1usnoLXfYeW96xyQx7YeLWdypeRtoTf%2BdK6YuIY1Tjoz5%2Boa7TFtZNBoahJWQZ3xBXtOvmb5C5%2Fxe1ajnaFygFvzwsXIfxOOYm8GZjq4xT49MJha0%2F2aVxe26d%2BbuUJu1hrmEFm6GTqEOc1ulNcWwfVVwB2lQIOMYsqGVrCRSlJNiLhexTA%2Fc6Gze3q8c0TU3QPMyYgQ%2F1QPMdDP18hnX5Gcq3%2FzCuRr0T3oC%2FyZgrvxm4bdoK7s3lk5hX5XWtk5w7u1X4YwHNj85Y0R4%2FupJQzTwE8HXW2aVkOTwPw7lzSzx%2Fhb6m3wO49bKijqeCG%2FpNQSiF1XMY4TaYdY2Lol%2Bsb%2Bc03IBBzbdP4795ugob0r4SvInyFq1rZjDqrsrABjqkASxVLE3yxVidJWk2Y3FEuFxvkHox9T5Afqo3H%2FYAJu56zKbRC8LIxUkKymNer8koBWElpbGblCuUF7Uacn70rUEkynJSwdg5pUfv8p9eDr8jOn3YaGnByqxYQ2QGCUf4tWZWHmZtKMaKp6es8HM0d0nTT54LFdg97kPraGH1POw8VyYIOXiBKmOKQSiFdvUoCBYreqI8o2KKFHlkG25Pc%2FfmXGQR&X-Amz-Signature=e82108809d770115b20b7083f3dc7b259ef225d20171d37ca636829c5d450e20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
