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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIDL6FE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCBjMWosqaSEuEtgRSsdZy%2FGxqLyYnLhrxwg92%2B22yI8QIgF1lZ3YGu8FIBPmPRfBGoZATb%2BpZ%2FJiJYoTQia3eUL3UqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2o5XElgiP73cVY8ircA15%2FIwRPnVR1hBRjyaZu8NnLIX%2FIWVCS8Yi1SHEbyS2QIUOGL3%2FlEq%2B%2BAfOEMkUPtM2dzRNMEYi8oJuVFk1R7woveY91A32TbHrL1kXdXhfK5JiVtUOkJWXxztANdl1%2F27vOjwtVSnawIWVaYNNJCm1w3lFJfWtGn36t87r1hR16KUBLXeoQHa3D4HQeMPRLZCWpd3%2BjGuMEjs%2FIrRNUuBpvYjeItfjnqp%2BOOGrPf4qvtES%2BN9BoRxdMHiluEbW%2FOWSIGx9a0f1yqNnylfeNM8diYpwHNL%2FR7q4hGhT4E2oAHxzd4LMKNk2olxeO9TaSYTWCo8SpaaBHTI4tGQG2oq1S32Bo7jJNTLgOaIB5YzWaiSfiP1x%2FkUdmmBwiz7V6%2B2llMXlrENN%2Bq%2FPGoFLYnmGW2KOu1ui9JODWibrKaEv4SicLT6SyD4AJOAQWDMxjCxaIgbjkNMZl4TwLlS6%2FWOp8i0p0vzCqxNohZ0%2BX0pHP6uS%2BsFzD9rlbYyjyaFlPMxL6T6nU%2BfRP0iI4nB7rpqgueghGpqOwyc6OMapuuR%2F3Z3ZCIq59Y71U3bTQc1hzxIALXDNIjZXLkF6YramRP%2BewrNUpwFBwNnihEjleGlUlNI3InmoR2Ztplj9hMKyJ778GOqUB4XC6IVSBzNyR3eyt86q%2FzX1cfpCw2t042Hrhxe0Xf5D0ACQAHVKb3S3Aeiju033jVwuRIYbFEGZOZwKiLC1Zgzvt9YVYWBpPpDt8fMA9Yk%2Bf7RjzciIcwcvbOdb0hz%2B4kIwYXRkeMWEQIwS99I5h2BRlINKecEEyo8Yx5nT0GtUKuD0QbZ9nF8C3UOnx1rJ6cI9EQ0KITofAN3y%2FUbvf4Gr6Ihox&X-Amz-Signature=ddcd2321d7313d87369f158c0655102bba11db35694c6a9998e00eabaea65501&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSWR272S%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD6FvjNHVORy61SoPvpMSZJzIqUkCsPk9yVG34u9JyAfwIhAMYOmQO%2BVlMjxeBwy%2F%2F0fuLB5rifq4UMlOUFxVaQ%2FI9LKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzf61UB%2FAtHfhYXTjwq3AMgqEaveRoSvqc46y2KeTvwPYOO5RvsYzHYB3StMQutK7ZFTMtC2VDQM8Ucot1DSnxEc6cDLKUkb7jFn7EWowtwpTB0FMON4e40LJFW68AcKwLQH5CUI1OGwwmtreH%2FCrJiIZhY3%2Bq7krErh%2FRcvNJl%2BWYBHjIJAIFKYttQNsxgAam59ukHR%2FJ%2FY8BwV9aLl22r5Vkd3FFpFHo2wJN6EsRbRdDmHGXJMimkaji63%2FA7QSGnAfWVrRr0AFJDr%2F99%2FLKQtgWO4z3eRyUwjv1q2MKScsLjHHkAaZTKWv%2B3r8uvAK0IUTcb9Y7AToD2MIgJIJwV9V9sYStMU%2Bo7O0SqwizEQRkyLUR57ljKkl6qWEYzOKgFim6NunezXssKlgr6FqFP%2BgOxgygtTNWlqZWVyZRAuk5DiHGseu7%2FMmFQPiT%2FEGELkozhH6%2Fi1jY8S2Aw%2FOw1dmMxTp%2FPVtVJztCU%2FgdW5hLQwrvU59vmyfZ3IMm0zBvOxDLDDfjyKkvrK1AtD5SIU9%2B333n0eAdcuOFYFVoQhr4Rj4YA95Fl728Lj%2F5xPmPSQDr0G7aicU5yGeR1cxMwAkJczlfINxkydimGZFp6LmwO8v1UaEo6qVJtrGOfUBIfVL2Ii7Kkeu6hUjCg3%2B%2B%2FBjqkAe%2BPOzW2X6qmK1jVvx0bPHjLDOF6TMqkCF%2BtSn8V2WJjwXJcGZ8Wxu%2F7tP58raaMR9uwMHK74mquqeVdqq%2BQn1rtVG8BP6ZSFsz%2BK6IzwMF22Vo8ULd%2FDC9fwNtfAxAdIliL6IFGIb2x%2F10nxNv16faFZttuPD2BPvicWBYEKa5%2BgXvFsG41nmJdpwiLK18gs%2FEpsAwbM50xYe04MGtY8jeDYtsC&X-Amz-Signature=b1e5bbc6c3f1b12acf0780cffb99f26890623b06df01be69e7f1c225132ed0cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
