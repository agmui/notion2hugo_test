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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHKPN7SK%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDZmyaW4fInel%2BCBojgjEnczEUUA9zLvGtznJeFCJ2JPQIhAMEDZ1H03h4fpaIdoFBKjxCm3vq%2FyJiFkpqWf3h%2FxxLjKv8DCB8QABoMNjM3NDIzMTgzODA1IgwKUBgllRwjUq2Cpakq3AMNGCE5pm4K0hV5%2BFS8bc65n4LxDNVO6Fnj2jVivmE%2B2J59EP%2FFBqtInAtPVgE%2BhC2%2BmoYpfNVkhTTSLDuCiNtv95Ar3Guq1npOY9ABxQ7P%2B%2B1JJpd1Gh3%2FZj%2FkaPHm%2BQ5xiReE41BuAxHhmDq6nYEMQiy%2FQDvDkwlAfxGOgYRWzblmQUk58QC5OCKSFhPlF5rxdptI9vnSyFs%2Frc0%2Fdm2nizFbEPojbiXOqQRinxlb2ZUNatlcLkq%2FundHAHwIyk5xEx9pnjfjOh0B1aoZvtHTZBbOl%2BM0eDQOdDwnbW94BUiELhAgXN98d392M6uI%2BdOZ1jQ2bG47QhE%2BI0E0wC%2FiwR3C44T7h9t0quleA0lM%2BB3WlB0uRBg5IuIkILOyYDmhO5Mp4g4C%2FGwCqt22VGVjs85aBa1r7QsT30feGf%2BlFUMyFiJ18gAyd3Csdk4jCJCy%2BS1pjPM42JnrTTQ2P70RYaTD0cQlp6sRs5x0Cp%2FuFz%2FuzNMNNkPxtwvpEY6FjVKeWk9c3bmr7XgdKVSLi0tPhacQSSnyfjLUMDLzM%2F19LIoiNG7t5PhCnBiioky%2FzMU90NQsPr7l2qCXMAGfr0%2FcltUdiK%2FM1o1TVcxYIARkRS5RQYwIcvDF8poNSzCJyNDDBjqkATqaIrxeaFQ0y6Ud55XkKc4VGtdALF%2FxN%2Bd2sMlFQk8np244yMlBuUuZEo4VSI4LOrUVEsdkMnid%2F5tE1IljCm%2B5saXXtUSmuWuazyjrGZ%2B2E7DzzzLaw3ohW9xjP81ccdfpJvButSARuR078r89GcNW%2FinSjV%2FvNTkdT9r8xw9ERAokSjTPWGB05FSZ5hSKbsJ4kbsZXCmlbgVAFQ7evgeblgox&X-Amz-Signature=29541013b42cdd2fcbd429445327ea79010b4727a3461ad4840bb1d86b91038d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O3NFDHM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCSKKveV%2BRtZbwSKsrgdayHQY0TusbBuHQL7wR9zDGiDQIgZW9Hj4Sa92GWES%2BKn0%2Fe8oww1%2FcdmGSIWFvGTUJAZukq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDHP433pRHFamWdDqByrcA0JrVccSR5RkZbG74UTgiBFGWK5%2F5V5TjEUgygPrBUPvTt7oPOyWFtswOHFJp6rmDUg4c7ijKYSPjUo0Qym9TjFgfhKirinbIJ9qeZUdHBHOr8cmIwRByYjiC7siXqwL6hEFgUPWiHMplLOy9tKT050pEEBIDYWnMRO4TGFC3x6gGXkKqF2e%2FqIyVa8QCjjpdlN%2BhMVenVqLVRknNqebFu75qnXMaP4dIEvxOUXj5FZI1T0EJGYjFTsbvCC7ZG0ZY%2FDzFiluUPQUGnOge1wjAnjAS6BcLqYFcxiAxnSQbxmrBmXFuJ8ZimSEpMozSqS0PIkddiNXB1PxKffZSUCX62CzLrJ5CfSHCIFUAsuysOid0h8Dx%2B2yhhhmts1UuIoGYHbs6FKANbD26NENUWAUGPyGpllfb%2BfQtvz7e3ZcA8mIwcyC6IJaO%2Be11v1Bo4T2AEibz9vnW%2BK2Htq9DN7J5LzEJm4doHQDFG4vbFe3b%2FyjfgVGL2Xio6LJ0F15V88FPDwxpepYV1duTNtNRWC9S9PaVT1ezgOQs9V1d1rfB7WGtNPOLHfqEW4BwHsJSJ1P25LUqEfkLS%2FqG6IEHBY89ZVzR9kvx6lh3oqkm6c0WOVOvOypmp7FCeSwkHdrMIrI0MMGOqUBfGu0OaxsXEXpqvCPwGK2IIX4SNcQvPzu3y9FTKqjuve7KbrKoLygPkwur%2F8LgwenHtB5iLnCL3cT0SuW6BxNlK1nfy8k%2BAM%2FpULUPWDnsnWHlLHmnpZHZPBT5oRRBCFdxVuKsjMDDSnUT72NkN9r9%2BcJh7NOOyD4JTawa1t8ac3VS28NA%2BELF99EhOXrWnCCDL0Mx72KzPpIhd%2FPIgQ0l3q7T04t&X-Amz-Signature=e119ef9876e9e6c6f81425e03c0a862d6bd328c445a5c0989d96abddce8a1a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
