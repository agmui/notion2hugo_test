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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ63CDAU%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCGpD2LJF7LxZzv1oqaIjFmgjqf3F8o6XpTgjU1rlVeCwIgSyjiWeZQGvGngcaRdW3DMECuQFEeZ%2FMI%2F7o0zPubio8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDEETqYtdwi3cI%2FiFFircAxx%2BmzeI07UJsqB28Mi1SQuOXQBV52LIqAL1oDpBds65OGqtH5JbbgJz5Uo9AqW5QkgGMiormyahpdDCpHTZD3NCQZd2tF%2Bo5Tmchl8IAXGC5hFTdxhEmmvTh1qj195g4wsZps0mKPVAk8dN9Q0yM38kKeoOiAcqcxu6Hzo5S0plIUYavsXrp0WwMxI17551QyNtxUwb%2FBPx6MQAtXF0rVZ4iV1x96yXpjHU0TFeg0%2BJxRzXNHbLO1VH%2FquUEQOLpixQ9KHrInL2hw2CZd6Paa0hgziDDCWMqZ%2FHEXb%2BGwYUpUbsUCyNUMUVzrNDJmnKq5YpGMGLFovH0GH6OrfNCOAToTN07yP8FIX%2BzJKVzvdkc8zdYasu9ZJm1lf1yfd6z%2FMvStCKcAvuzhsAuldstsPYu6iNbHrAEgM8T5yxavgq2gfGMr1c6C89%2Fd8PbqTZkNg%2BfIilkF%2FTbiunN9H0JE81N29eznafaUQIB1k9D4KrldlSls2PPWx9GWcdJfqriwJ2eEYnxNbn5Jwp02azAO76Fl9UBQ9Kge1j7V5D7ITHUUnZDL3JBBp%2F2frPXjBmvJG8lme46hCJvsgJcu%2Fb2SIfGVLjDyGrpwYC%2BJ5nfg3nbjpsaZVVFPezpr37MI%2FJyb0GOqUBmtDt2SVmQCyhrTWAz65PhjgfH4KZSrCASh%2BxwCPF6nS38EfOtIEbP4Cmnj1y78Q%2FR4Casqn7at7s6OyCulKYPhVIkV%2B2rhi2O452HFuPCltYO7h7qPNj%2FOsUjwSsLjtgnlXOhxpQqEIInISJM67XFP8fS3LN8%2F9JHRNdD%2Byz%2FYHhPOG3JZDwgFXI8bAB6UwpszpF9nJHXpwm6HXUAsJPGCOZjxaX&X-Amz-Signature=43bc035bedbd37150be8cbb02ab94664e940bd874a2c8a345741aada11004fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ARLC52A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDfN%2BoHDWLHviYcCAcvS4GAr2h12DfoZbYPhqb4wJbCgQIgJdB%2F7GycJAlN6ThPObAMwyJm0oS9bDyy367oZzP1qMcq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDHF4dDyoPgadzBNdnircAxPrVYrZIHOnPv1zrXjeyu0JqkXwPV%2FR8d3rWfe3Vcp90tAu2g40jqZRxMBtCp3ImoDoAZ9lju8o7pM%2B1PncXN6E1HMyoz8VOavCft0U9d0iJdLFHyHeYqNnFjf6n7IEeGOWnij3EbUx832suajD1lxfCkE3x8GRrklSdFdSW8WQyZ7Iei5lNbn8kg2LKwkblVHV5l7ziePkn93ojnz7yyW%2BQmXXkVrzSAeaxqJqD%2FkTsncdzgiKSp2mmXuqoXBQBjdHp3UmK1jhfdjm59eRprOw8lXokfVnMfPmwcy9nPKTHDznMWJQWZVH%2BbopRqT3gARmgKbftkFpWtvXB3YRmv1kymfImcMSngjbLARyr98HUa1tzpuftJ6VkbpMaWw18PUwyU%2FMbmRuyMjM9EstC6jPIGGSpik52jUsPIAR7rTKkogqdOFouOCa7n9VDEzQNjoYPYvLtlZ9owbl3HKzwZtM6QROB8c1of930D%2Fr%2BzAb%2FejVQoT88Ih2ykwo6ij%2BGIVFB8A9RsdKETYpdVlPJP3%2FNP%2B86UKQjeXJI%2By7gKeppNE6higmSEamjO%2BvSaiD40g3%2FxH5bg6U0isoGXOyrF%2Bi8WmBCNrSDpRZbQqOMVy5Dmm%2FKQnE7E6HXUyVMLzIyb0GOqUB7cod2lFBnosp0fabOu1vxFOWKER%2BLKWnxIpSA9TN3YQ7Q%2FosPQJIX7YNFkWkbvoS4QbeyCwvr8lWXuHSG%2Fuv7pQU8C9%2B0H4jjyV19FFZfhOseI36n%2FV3Jr7plSuiW05g9S2mm7FF3UXLnfSOukKFJSEDQr6O%2BPPpV5xAubHZNC7LoBLFcK3r3XNnNZ02b1oGlX7%2BoWrV7Vl6P2F2ve8Wl1LgYhwg&X-Amz-Signature=7599c182cbebf58ae2a0d5a68fe2bab45e3a3c0676bcbc244749bf8f56c7500e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
