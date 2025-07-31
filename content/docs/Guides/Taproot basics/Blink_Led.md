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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LRBOXAF%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ikBUDpr9dyuPMgZQ8Du5lHKS6lBbzixJBnou7mXFnwIgYLqxW0G2zN%2BgBb61GalJvQAsZGSZabGzvax19ETxFPwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM34ZmYtsFYFKmxnvCrcA%2BDl5oOnqaOi5LriZRVTsHPUa2hYy%2FYn%2FB1tatdEYdY3Dyk8sABqEb9v%2BDfLseTmzlr8LHAx0BEHgBk%2F0BndimfV6tXejaXnJBH46YDFDt2hwDHK5IbF%2FRykp0D7502s0QGpGl1C%2B4HJxrMupsRgHseQ4o8OMVpXYdutEg1VzsLseHkumwjCXLEYZsVpHrMJMvoiAHSAy0t7E6soE5ofCdOh797okC2ZdaHky9kzBhvy0HG5OY6D0PPP4d8Qt0fESmuLv1mN6bsmoHzA8GZYJBesm2gtsFnMfgc0mhiob%2F23bjpRqQwpl6BrsLZfeLrAdO5qL0bFSmWAoPLbBLEWgRtJIEmupj9QLRID9GoPWiOjfu7sP2GHuIDj45XftIdiF%2FJcW14rNpN3YHFlz3PuoKZWGky7BQDnN2jAzozz2m%2BvF%2BnlRkZdmSA6eyio5toxQ5TXsZONb6IKRVPxYCMg4HLkwaprgA61zPPRGlSLwbewveaVOZ%2FOuEDJBBkkRbuxVREOBvHf8GvF49BpgREkdZzbcM%2B3Pu5P8jsnMlMK86pjRTnjzYWw2WEWqlPceLwZ36cvWTcTkCGuR8pzbIqmj%2B9tYiZwZsqoksapIyR%2Fb%2B2Z07kF2ezwMV0WRq5qMO6drcQGOqUBYu5aagUIecTAHbFDJ93seAyQnDDY%2BZrWEsUVzyOSEOFJmCJAyrgldhsXX18ZzRDDp%2FUyYTe7YT674b3abmjOkeOuudcDza96s5jTENA1toTe1s2uvFczcOLJhd2wAFdkl8GTaBKPLGf31S%2FU5Njen7WXwY17hlSCtzVb%2FY4pxcjB4IyHLltVNL1%2FvB7KSLOY7FUEhuu3iQLScPI3dvtlnwD4ZE3N&X-Amz-Signature=70352a9ba66e6f7043cd60136abdbf19937edd3f53a891bc91433a8930f1f8f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HYPPCPQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAoVqHHFf21Rx7HGhajNI9NaCCfmyd0%2F%2FNtd%2B1Mg7QpjAiEAjuAdpgiIa8iFhw5%2BXfyXFwtJ3Zo1971BdQjAE3R8M8MqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPFDf1%2BSgsJftFniyrcA79yg2fTnlnR9BTYV3F0Wi2r4cJBWsg6TH%2FewdP%2Bz24wiUiTZNXaPmrzkCbRJawozvzPj97cBw3GmOUM407DtW%2BN29Yo4G4OJLuK163YDxrWvmLyvZuAGF5Lu4FHoyV76uGCrC5y3Kknd2Y4RAGpWq6VA%2FZlgsRHfUs6tb1DclKXi1Y0XOXvPA6qG9ricWq2tm%2FQOiQkejh93%2BCtUbjqzZyGaX8TOpVB1cxb201tNfGivrYzlowL7N5TIXUcyh8oa9dMUyehc0akH21SRC5fUSHPWbNYppSZPsDVfeaWTKKOhyfRlMQMWzaqawP42X%2FTqD9OZuciZ2XYvejxZG51dsZBEKw21uh%2BylMtFtRoh2WKwKYxS%2FMrbUeC8pqx%2FnbY298c8ii8g%2FMOhRnYeHt7pJTqFm6oCoCJDhO6qzbewfiI5FycyI0dYlctyLvDjxNuzSKJU%2FTu10VEJf%2F3guTyvZMfNMBLXEB6ABhq5SAcxaBnticI5rFDH96Lnh6fAvIg5P6LoPb%2FNCGGQOb1V1vKsMlRXYHvoAhRP%2F4QI3TpsqJ45gBROzLW6%2FTqYqZnFbzFUfPt3xKDL%2BsOOGwsxckDF6XFCkGkj0Jbgisxm1gtAoWZ4jTPQPScCVKTV%2FPGMNOcrcQGOqUBH3tXbeor5RxPVy6L898cWLS6RlqNnVBaXFfIa%2BXUnzlh%2FEHRHf5Dk8NO%2B7mNTlukfNIP%2FslDCGlITZZ0FaYQrG0REhVYZcCJVpkL0klf9Ddy1QGahUgH%2FWJHx5%2BG%2BWYFSLgpH9vXOAh7mztTz%2BH5JC4ADNkW2Gytxh0NoT%2Fbh92sOAvcwEpRpaEApkIdrvD6k5i3eKxN8avKwDtQmRDEBWB2m317&X-Amz-Signature=c0645c32c66adbfbdbca449eac7af269c40de7ba57c4ebf4e69daffb2ce70684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
