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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SWC7TLS%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCTwQcqjjyfjJA0IktQQuZsYWhe6anUmt3%2B%2FBY%2FvOEuNgIgdnNO8AUY9wzDn7wVJI9MEb%2F0Ul2ZxdaI%2BZr9J2aXZZkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDGcTq5KGyMP6l6uz0ircAwlHdH8qDevwn4pG6srniLy9jBhYTivQAvVQho2bzxneO83WzaOh4xQHoQENvMszQuHZRj6WgY%2B7P3uBqL6nxNtTGdKRMWN2ksuzVi9p1thkk7fvSHkryBfbdUAhu6MSGOGiobATdwI49CVOavukQPy%2B6OAulMajnkX%2Fa7ptQfBoYLK%2Bm2GAvFEPCCD5yzQxIfQoV8dWX9ULGum4NAQf3SJlVtcvr7ifE9AytLQHa4HctRqtj3%2B%2FfWWHsOBqiQWgE8KsGdey9eAmKN%2F3n0EPe4QRs%2FHbvENyROXmJ1ZOIudgYIJA%2BNGjuYI1yDDa5NQAG4d3%2BMUr1CBIxohyTfClkDtQbHPD1WU76pffVIeT0MV5dzgUYntW9VbDBAwaRLRQKCr649eQN%2BA1dBIeAA%2FibexUpNKKoLUFyA5qIYPiMLmcZaB%2FOOVXGTbII0qhUg58X89Ko7GNm6SOa869qrVetilgo5iNFGWrnBEs3yYEkwIWTPU2zEUpU28dnYtxvyuLTdt1GRJFzL5DhL5IJbNudN7BZY7534GW5C1Pd6v8ExXntYIuvVGZVQxUc2ldNTIOWrhoDKaZEtm4s282Qok9vVjw9cacRE4e7ZPTs1%2BXxASnUqqdOZ%2FEHP4nNMhjMPKEqMAGOqUBESkciNJ%2FOlSoNyW5S%2FgYTxWSficlDCGf02eQj6UWVQphy5T%2F5rD4%2FuQXGKrtscjflXLCPbAWe6XgvSzIC%2FPQD6O001yrYqUDTkOBZbF6BuCDMGiN9EQ4gZoQbI7Vlx2BFGzu70TFJ%2Bs0mGPGTLRLSBfle%2F%2FVWWkXVohjJR8mc3k5qtSDp9ilg%2BS9Wi%2BocLaGERvPZJbmjlAhfnyxnImXag7XRetl&X-Amz-Signature=4a31e7701f4c70c239753b9e1ee9ac68626753d579fe357e693bf3bdcac37604&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TCNBY4Y%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDCRKgrbeuIzzRmfYBSZaMuo1qTsE19Y1wfnh80bdQujQIgWJtw8jClzWuEbnVSrd42fuFPqtQ1aECLsGHOhshxnVEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDPAejssqNT%2BUEvj4ASrcA6LrzxbL%2BEM7DwsSX%2BJHONloFBhMw6dopkjaxy36xPvZCwrHgrvAd5qEi%2BpifpnnzWN6zRFDVFw04dHHcCROxlg3ySLkOJuTKe6%2FNz71TstmwN25Hu4yfn978NITABHo2lHZ04G9EyrOIqbSwwQ9XdkWxYi1uKa1ZF2f90hQUZfwHOrmq7gAcYjn2J4oL%2BmsgodykzFXY6m5OnzMp98UlaOevqYJ7MCsKojlxFBdJuqGHjWwW53LhklKmJPkfi%2BikfPXkC%2F5bvAFU%2BHlscsAaJmDQCHnl6OWVop46RIy8WPMViQhjBaUQ%2BOlM%2FeKDyAWuJBbLrZRMsTAqmDzF%2BLRiguV7vpJUZQjkRR20K9KfK3qq%2B%2BL9tImjh%2FKib%2BO2trluYcc31xKgSkGZ8EHY%2FffytgjRU%2BZWqvi87snNPpPBVa10DMbl5FsJUwNje7bAXbicvI34byEc8qOuARLlBwEk8BKsZs3nSqcJc55RdXc2bpBYwiLLUHNnzkONzmIaxd%2FmXJcjyh1zCfRkg8PS%2BmCFjvpIOPxCmlve3G0Oeze8H%2B4lkCGS%2BUg1dDldO%2BRIKQB%2B1hOednp%2FHIduGyJDkD2mapE9WiZL1ZSg%2FWKNIpPIYwetXhzluNuW8TeJoz4MPWEqMAGOqUB8Z5%2F%2BtxzsnYuvVME3YqR4TDBwOPSSJB2xWS2GI6r2KTB3kxVLkXulJQzXvCFIUOALwyTisSiU%2F7OVZnbemDTfp4B266Z%2Bv%2BJuBsKNrOSHrLWZModvB6bXpgc9Vasuj0PtbgAgWLaJ8aGw1tgMfPsl5kEEbjMZA0xYyWtxlrCvSVEC%2B3S%2BkuELc6hmZ5mz4Be%2Blof1od4DUO5QKcbVqiSB2Bw%2BGiw&X-Amz-Signature=1e057d7ff0a73fdc40070a31e059a092ed31b7e680fecffb5180abe023295161&X-Amz-SignedHeaders=host&x-id=GetObject)

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
