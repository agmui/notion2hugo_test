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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMZR3NTG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHV11RU81AliejDLEa51%2Bj2VdURRjsMbXhNyScJ41wfsAiEA6vFpnrDFGKeZHqLPaxNTGnzotYSHk3Aj3EKsdSIkVPMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDIiU%2BY4JMp2gpFeu%2ByrcA6nRfFmKQSSBdxpvIWpTcZw2tcrWPGSLbB9pdXy4o%2Frb6WPtYlOJBV8yToAAI1egttFIReog7cXyPndUi9A0xYixQiATAjzQqIEsXUEpo9rqc8bVTuxtbi%2FlotmXXs6CkPvmsWj2rv%2F3tdaZBeOAZOorGVPrJBLiwfZ%2BHD4MGk%2FkaDp7xGYmg5z3iHG%2Fve0QE0R%2Fy5PrEW5Ij3qtESx614C%2BVEMPqtkimHnpn6Caqb5AFnzK4V68HPaoyiacdu70iW7EpJLspGIC%2FJYfQocy1Qp4l6NgDB0qXYiusM0JTBMo21kyU%2FdOvUi5mW0387FOi6XBHz4cPWES9xsrsl2qxVQnFCtq1cQNX6KyxHFoEVguxoIaw6DhoennSneYY5APmMyIMSl%2FGEuks6ZBInlaX%2F6v%2BScV1U9K%2B7fBbjO%2F1Lesa90d14Rbr%2BFri4%2F8FRutXsDLR2JGh5BfS3%2BmdVxqHZotOR251BfMztM%2BoFiFDe%2Fo%2F9J%2FJpV%2BSqR14DUXcho64cQpMvtFPkR53coLl823m8yXfP7BOJMHPsb9hCi%2FX5v6qL%2BuGpphajXcZO2qSVxInHKQYiGBaZf5L2ltfVa5iJiTnwYtHAnRZMRiTg6gT6b46s8RAo1NrXbzdmrUMPyjxb8GOqUB%2F3e9iD0a3PNf56EGwnrethnkLa50vrqR6Rs7uL0AvAfiMQf5rY7W%2FySieUwcujmh5UFfqBDOGSmBoW73zBehzo834OfpOAcdbHEeY28apAq3A3397y%2BL4RvEUBIiifzvBdWAPH8iAXH9mb99Scgf43ApdAGLisd86Z3%2F8HNj1iePwGp2PbxNPL4LpiEr3WKh0s8BF8PnBsJNwELb9%2B%2Fzhkvm1qYr&X-Amz-Signature=4bd5f9bb50e0e330ac54e3d2bd4250062bb4a9de02a9fbb12468fc61bcbe4d31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MYGNOQD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHG8103yJdUHxylGWpMY%2BRX7c6lAAkqjXsJUTQ3wYeJrAiB2lWD43G364UP1HX%2F0a15QGSbbvElSj6H%2BAqH8nSEb7ir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMSElR3w96%2Fw6QNOfjKtwDp4ygBb3LSurqefv%2BB06G%2BXJhYyH91IEEqGRe92ZYt5qa6QaNX%2FcpwZmlKUOUB6OfmMce8dq%2Be%2FNqihFD5bzSegfdyc0BRcuYmuhbi5zg728zpC%2F2B3z8IGPx9Q0W6rc%2B7Q0RV3N09RSKot2tVW2Z%2FDNSpBzkf2bAEJdLzK%2FPbLIuBc3e5GBKlL68IcuXrcrvf0nZR8hjb9SekZHr4WVWsUDxKvetOe9SsK%2FzbJha%2BqJN5cgopsX8CIc1MbesjpHOnQwy57ldmpm1xxO6fnebfcyWcrwP8PqJBiol8H2Ehgl%2FdRdWWYmCr9KzyHzPF%2BvsBW8MxTE7H%2F2n80tSyPyKB%2BFpMwn3L3T2Et6mB1mQMoXjk5B0bWEN1iukwaFBVXL8ARjVTXgmoVBK48fcuykC0%2FtbVswie12SqghUldYIaR%2FKyqzxa6AAkTJDIdHNSDyNmqzyAy6GT7ngCrr6HIV1AaZ06i4nXxz%2FAKlg6ZZf3VcFkKRrOcwveO3i%2BOgBzJSZJ9WYL5Z1WpsysRSasTZpPjNqNawPgfhynTGNbA5ly3UQ34TN3xMghHcxLP9RzqD9bR7XfNdD8EZ51HCSJuH7sG4AvIbxmctnRP%2FLOV9pJ4Hwx14%2BfI3eg9zWU8Uwp6XFvwY6pgFnbDnIlFQQJ3S8XpEc8YS4gSaBcTZ8YsX4c798aXi%2FBgZlpnaIISrBj4gxSBbxNh%2BiMv8bPN1khoqIZdf1WkQ4zHaErrbH%2Bpn2HAixflJxvE1qo3SjZmGxw7fBHVRbBkpPHu47DPtdSUIoUKVlLI0lJINS%2B6W7CJtx1gPBbgg5cALJyPWZaTZjmCAG9q961Vtj1dYxzHY065KfOTCu0pl328IcRPzX&X-Amz-Signature=1ce37e63980376f47a04c52a3b8338b298d47c04751abcd6ff08433ea8d24dce&X-Amz-SignedHeaders=host&x-id=GetObject)

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
