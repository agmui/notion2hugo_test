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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GXJMBQ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC02xX3czQ2CJgfxPCG%2FPK3FR%2BummtBIYxqrTsha%2BeyzAiEAwLHQkiLkhI0SFumXAGqX3MW5UZZv9Br1%2Bo17K46TI5QqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAt0kvDpldMhwsQAyyrcAyFiqSenAHlM%2Bka%2FV4nqXn6QV6GWH0Kx0yN%2B6ftNWMSiTu5RJmul%2BBYS0MgsJeZOxggh16DBsARSAamRpQOTELNWqN2GFI3KmLhOaQaKQGGZPlSQfx%2FZbx0hDsI0EfuzPrLaD4bBhtXulJ88xI030%2BCxsBJHXyYQ5HG9KjkBJYR2tAaiFwMM%2F%2FBVNpQYo%2BhQBNwXg6oqU%2FNEmf3BQwO%2FTIgghqrRF8GVitNzk790qFn1lEb0e1o3HJl1mS6B9ripduO%2BxZeqrzLrY5xaPcIfacAUoV28riM7RQJDT6xLBsLBCEVyl81SEwClx9FBXPEgp3KkHwkP7eZO9l4vFsb%2Fx%2B4CrddKMPNMiovyVAFXi2gZhuYYDEVBb2QIQe31uLoomDJpkbWgyFVJDZwNB8IWmoTHxefPc4M3sEO3IY7x%2BKbZaPJdR0WXKpVQITmWq2gQTBINBpPVxq%2FlAVqNA7Cqq%2BqebfNdPbQwad%2FnWCBCMz839v6Gk68Y%2FSgoPthiCTS8B%2FJ9i4V5wRqHtFaRHQamXcV8xIMefmpTCvxBX4zpWz4j3%2FS7U0zd1wV%2FtwOTEY%2B8dNcE9QVJy0dY8MAJUyybGbzpY6c6I5SI6WmnXmPYN%2FQLs0V8yj8sNqZlM73eMNqon74GOqUBLQzw4lbju7GodQR5Aj9dGpv0hOs%2B9sbd2Nrji8ZbpKN637bued5gdc%2BzewCWw5GPd0PjeUxMUakgJ9PzyHzhpoyvJa7BzGHICexARNcQ0c1C6jkdpdUmlp%2FwuatkZzGKKE5yESi7%2FJiSnA5lU2Rnd7onimCEB70PrOWzQz2nommLDg0TF77QkuGsLDiObkb6DSzF6pgGQ%2FeTtbWIh38k5lAzwhoZ&X-Amz-Signature=76125358c5ab15687db61b9a9c504eb7d1e00087e95fba4df388c8691b06fa2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2QO2QMX%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJUVyOgmnDxmGOPSoyPOeh8kwOMU2mztK2VarfIkZLwwIhAKDvXAegAr360arsDEmZcImliLt%2FMWukv2cNMVyI%2F1IuKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2FsHyXFspHYRMoAEq3AONDLb9Uhu32ist5d3tKb0Pfv8E2YWkX6MCjkEfI6dC8KmN%2FCyP%2BNXJgEbpZjtfYtoiS5NlJP1i9Du%2F6l6G2KneXTFfTeRZI%2FfFgKzTk6On0jY5rOg7%2FW5gVkkZmxZ4TUeYpuoK4%2BaoKi5ugikmH4uuwiNWll5wfR06PVNnVwhSDrMKlzLFEeelkj9sA%2Bf8GWZ1FAyI6Ac6iV%2FIdu%2F%2FzDndEnDs3yw66Udrk1NCu5e4BiIG%2FaiP7tUmsUW84MH6cIqQtmdsL743ZueiuD5WKWM7yb%2Bpoeku7ggV48rihKuO4DEN1c19mEqhk9%2BNw97Q03SU7aw%2Fckecq1QCS6OCfOioqWJHqaP%2BiJHSZTCCpH8YnEJbU1O%2FWCA8EEILp3FCd%2F1NK76xcKocE8ahLFywHmJWlp4AqoIWYf%2FLNMQljPyODPsnJJFFOilUK7xWtExl67HXmSvfw4pfGqCzBZUY2qykDhqzyPsJ6OEN%2B2fNjmqqa%2FDsGUdz9Q3k2J10F50lvZ45uCHyN5HO5PtVFcTNz5CqwsEcYHfZt%2B7zFklCRaRlElt6SAOJi9ENakt3cw7tCpy5Pdqp%2BeR%2FqhflsNcD45h1l4IP7xkVHunCyvcfMjWL00SR8AMY61mwGuoVdzDJqJ%2B%2BBjqkAS%2BTEG0SRXCR96rN%2Fo4uSHxL7jbWml7RBg1SgddQqs4YcBUD2VMNt%2FeD773p52wZsSF7MD4naWHphwdwEu5JDu9He3ngbQoGg0m5n6ovqHvQzoYB7GAV69BgRIz8uL1eI8gcEaNGIQIPS3FdaaTAcjiBbOPtByEu8mL1WYBtTSEJdApm9Zs8UepgPG9luuoyKIA6WKCeoAbE09nyjeKFpe7Wl8bg&X-Amz-Signature=be280a0c1023e65d10007febf93ade8d5aa58f1965e5a9771f5655d3347606b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
