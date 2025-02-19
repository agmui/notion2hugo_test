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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AWBSOZP%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb9RWUa49Hw3twuoAlI%2FT1LzhjB75W8d0Nt2XBJ%2BXKgAIgcX1Ga2IemUsqkH2MsZsIe3UkZn%2FEil0n%2F4DbgCVzGi8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC5sXKM41yzJBjqa6SrcA27LmJ31OuRuLoVqERlWnZrwcIZ5HnxO8U7SvIWhzx6uWZJp8dDpzPNkdaStPWknyq%2BSRJEr9HDMgdqazsxLrRrrTAjBW9cz6MPVbOC6GGGHt0KnvMYpMwg2mIj3wV7F2gvMgO%2FoTl0H7Ohtg6jjFvDHesLe%2Ftukfx1yj1WU%2BQD9SZLN%2BS3CC2M0YhCX8wNuU5%2Bj80%2BQ7kUcScwUy9CUG9StC6XVkr9E%2B0pRfcKkkVwBYycnb%2Fe3%2FIOjZbKMVRtt1GVHrqb72pcdcwaVeGi0VD2DZ3CCro1n89h%2FbGV2nX1Rx0avF8fKb%2FfuIBgn%2FCF0gtfWT8dgs8r%2B3at0Z8KRCGeoUnoUIwOmWKJ%2F%2F8e5I5S6JwByyyZQkqWK%2BIUEErVa7y5y4vVLaz%2FopEusaQaz%2Fw53IB3BS3sQOgxKiuoauMMITLnFKPV9vfg4TPfsy7XUY3Cm3HaHuBNvIk0mdyyVaVUrhrDPATN0%2FjpodvWYGp6kwJnJwWP2emY%2BAL5esuQ5h1MWGiZiVJobAH5aD4g%2Fz4FIn59ulbr0Xtquj%2BX6ho5foXOlGFY8ho15ts26urT8mwIn1xqF9PAH4fc%2BrrGxlVxtIyoSggS3BKx1R43xesvhiMlXG5puJEJiMFy8MObu2L0GOqUBbVT9kQ5iRNTaqQYNUeAYt3bwfdFdZhWuCJm5VxoFvPQF30n0jF%2FdwwqCKggDhVq%2FwSNYssP0maVf%2FfJ59leEV459Nm81syGnmbi6mmzn%2Fl%2BBAGN0Zgwnw43s218BZjNK3RUjhuJocuSqxVYIEvUaoU5dM2%2FFgf%2FEu5chMTSCrmlrQd7VvLqUVaCAO1TSjy8Epzt%2F0dFFB1d6jS%2Bqx84UfTWQLbil&X-Amz-Signature=8a7b3265170fc48ec5cdf2425d21bf7dd2570e551c851bc9ae6c6207cf190a7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5EFB3JJ%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T210650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4oBcm5mgMcfc%2Fs%2BZrS2UhY7WE0Rs79FPYmt81HGd1QAiAxQ1%2BMtIFs2GIvVi9xaH0hv%2FDmOSVAYZWYN0j7DhxdoyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6QWbs2RDShM0EjhpKtwD%2BP12WVzl90K68mqVqs81ZR2ME%2BrI9YTX%2FNUPB8qlGHCCruV4UPmlFdhAIqnA8qFSOfHim0GcNGhTa1%2FeDb7lJA2HAzkeK5DhjEoZbzynibrA4kb9ohQr0w5RMAbOebQnj0iFwIaJsRdZNFeRF6KlW7uTkfL%2FjB4V71wYxRskaPZ%2BF0WjRQFdFfgJVS0MPqFbHcieAVgH6WqqLN5QPa5TmEl7spGj9DB9P84Ywg4F9%2Bq%2FPC0e1UBKTWMXnkOVtb8GxcaZlaRQH%2FaIAtHDLCleRIWbIvpL6FoN9S2imPNWF99H0XF7ld%2FTV3wO%2B31B433tEkOEwlmXLsCo77wiCbZldhzovcyhZX%2B4oe6OHSwkc7DXhWJhe925Tq1mji42nBwfPMrjKklmJN63rfiS7H5WN95f%2FPYB2ZDe2Xu95nhxsYxjsiXCny9A3X3LwMHk%2FI8SNnKivnl2fBskzvn6lLojeAbCvxFUGRiZobGyK%2FgQVhSkcHq6zACEaTBqpwT3dT9oe3H235iKfl8unbq2GkUXABnx8dHfMLEM1RfdSMwkb41EUwMkaICtYwRCctW%2BGOQfjU%2B3L9DjJX%2FSpJgl5K6%2BgAluaUcGRcsIjqqRo6SpY8W1HnwflCaAfSSpKrUw2u7YvQY6pgE2M1XGXsYhH%2FGP8BZlq%2Bv1jj3%2F1sGjACBErOR5iKt3oKZElEGpreZMsorg1SR6DKBDVGak3%2B3kxzRgtAHq%2BAScoXsGccxGRuzcJoNf18YAhGGpsIjWj0XlExXWJSYjjuY65BThgJdC%2Bb%2FgiGLfoORfc1RBP7JUmvaiFwJu05NsoSHCdQe4VduectpMjOHQRzMusG7tvgVPQR4Ad1svR8TCliJCFLAv&X-Amz-Signature=a7a3a9d910dab2fd4255f66ebcc1d6b43ae7650fb7c3ce414e76b4d4c5cda853&X-Amz-SignedHeaders=host&x-id=GetObject)

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
