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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBP5NV7H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCMzZyG3ZI8IZND%2FOXZtGEvydrjpODUUOBX5bB4WX60sQIhAOZYu9p8scQ0QltmpRMSZ%2BGhzSvsC%2BMiNZXt844cL7IKKv8DCBIQABoMNjM3NDIzMTgzODA1IgxjvOtxCWlCA2wJQ%2BAq3AM92lvJLs8ZJrWrt3bY3gmJSMwKYoSqJ8vFGWkULLy0aYEdDnZxBy5Evz%2FXVu7rzRzBdoI3i7QjQjpzjiqJLgZlw426NypgJ2SOdeicCD0zTdustYJ%2BLGl%2F29CCq3AtySGfssuapRDOzs2WJMj%2FThyVdzSC0ynT81Id1HtkLjWDd2tTa7M3iooefSSXgGaUhi%2FlwnC89cQkZzTkL2nulsBhgPYXVhOlTpVlGXrcmo6JEn8ICU%2BQ8IKK1DvNzRE%2F%2Befx3D2J5EkS%2BRh2Ge%2BG%2B3Qtpy%2BnhMz0QsAXK6fe0fA1jl0HjAOo7hCuqIx4e98E7%2Fw3Vz6yNM572lq9P0TpV5OexEvvE9gykvhHekHDqU7ZRU8qSUVFXL2q%2F2FqiSyX7ZdyMi1LyDmsQCywbUMjC6cm9nwepHpesfcRQnxD56PgbQ13yhmCCxrxVOge2FQD1Gdjw0T4ienM7kGX%2FYoqpFcbZWQVXTxaCx9dcjyNJj1nf%2Fr33mb0ohTYjiql2xgpefSDcbCmOSUBfzwLcxACAzKoLuBSXDqhhfs8aMlDPoWGEp4TP5itW5xLuCX%2BMYPPHB5DyOPsq65voTf%2BOvdqw5ULbWGoN%2Bs%2FKqZZPPBf8tQuCKLfq5pb5U8w1IxBlzDquJHBBjqkAWNxuUE9aEpfi8X9iOrkup1H7DBfjrtceaMNAX93kcFZimesK8u3q2iCglSFySacdoikj0v7DYEnhWiOJPx8EWB8fS%2BX4vG1aH5MCAExwOD3JL0NAnsx5GCK8qzl7MrulfJGOJtQ7zyaFCpQzewW8MyZpdPmWoxz%2BlMZ0Y4wYq1LyEYdfau6U3l1KCCpN1h2BxAqLbf1SfjMBp9c3JHK1Mbb8hTl&X-Amz-Signature=59c83549d69516ec331440d89d945b484887dff9448fd75114fccf32addd840b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMR2H3R%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T090932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQD%2FFvRCqmqyRJxyhC3mmbjcDPXLCDimOuPmV%2FpfKi6%2B9AIhALJzotP9yXP4F12b9R5cW6VwE7ySeUN81tL5Fl2GCZ5TKv8DCBIQABoMNjM3NDIzMTgzODA1IgwdgEbpz5A5rym%2FO0kq3AOEUej2wSs9OuYNafMYqo4pyFxtyQl1t0NblS0sbRN%2BMhT2qG5v8tugEw4J1a74Jzt4XHpwhoN8jG0v8jGOBR4H5BMa%2Fe%2FaoLF%2FP%2FbI6MiX6NCVA8MBb8Zudld61nMFGnq9iP7ueqGK5e9%2B63EDuYRtk8sD4FWoGkJmMvU4oIW5%2FF2QZTsdF5Fz9AcpdRihZbJ%2B8i6Nc%2BhauwNEzIxaWoZOHTW3oif9w7bIMlVg5x0FeOoCZU6vlh5kJMRkKKjG8pLK8XbfsqaC%2FY0Ah6FEFK6MEuI3npqtwjZQYIlOV0mUztXxQxN5bKbT5t7lBEkx1D5jMkO3TW1TIvY1AZ52lwBjppEcC%2FWfAmvIfWheHEanClivLSAGXwQfOKyGzdj6y5Lpm%2FKIgmqaEu35ND430MMbVn%2BXM68ax8aNmydDAUBeleXixp2rDFT5a9mReRoiBgHgxNkuC6fKplXApsG0KhzEMkKPA6iDF4BdO1MfhA7sf2jjhoyAsZjZJq%2B3YpHfJa%2FlcNeg%2BM92ub%2FMwWIGk4vl3as2AvJOFjCu3DJermqisP9x9TDs7eDsaHwBHKBVl%2BxBYnh8RoSRe%2BAQOKBN0ZDQjNGaMGnW1byyKNyuNJA8juke5sZ5KHWPrtSjSzCsuJHBBjqkATVCfPLaxI41ibMn9So9K1%2F9O3b5CWkz74HVF%2Bk23%2BIK7DjjLo5KEYaih0VLOe4I1LnTSv4xdg2xn0DEmGR61Z6j9R0Ge%2FbnMXbE71SGQgMGTJ6ecMKx07mypg4TU%2BQtF8e4h5g2ydWIAsRWe%2BTVxq9i1S9KyinAzlVmJjvVv2aoTJdtHxGsnCM3imMpRR0SOo%2BkqHWRKKK8ynfFG6YTsmJPl5KD&X-Amz-Signature=b211aa398383158142a70a0d16d73c897dabf253444eb01de3bf9063d3451d81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
