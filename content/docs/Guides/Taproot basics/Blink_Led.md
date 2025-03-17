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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPFWQBFA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Jm%2FgDIb3ulMuIZ%2FkyvlR40Rfc8WfnF6OE%2FU6%2BqHHKwIgGjET2Sd%2F7%2Fic38Ez7CtKB%2BrALCtWdxjOJ60uVJVN2jIq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJGqarRgbs772rkijCrcAzHiJiEvDAycWgSj1tbhHb6OjQQdUA4KnJZhPbupVRudm6jW7s%2F9jYehd1JRXhz23QORlvjNdj88Cl37o6tCFqAH9Mi1X1HHBiluDO1mwhQZS4EP2QrGZhjej1Jm60PzjO8uqxFGaeVQ%2FHLXc7spW4K3e703XA%2BEbfw63dBQMzmmCaM1KcEgrcH5S5JFu9lhkoJoMFFNhNQzK6DWZgydMTTfR9A8K7llLoVv4TJB3K2TL%2BAkUlCHvvSWFj6HoQSLyXye8LGLp0kx%2BN2r87C1xMj4lvgW3JG4CxCnyiYdJrh50V%2Bz2EsG94nyVrmU4%2BMamebm9Y0qcB65mMr7zDQqgjlH0CPhkP0wHGZBVoslm3HWCdmUCCmgH16dKyRhzA2V28%2FNEXXilNJ3FIA5fOs6wkcMgPeQX02CGEeGCti7dL7%2BUrL%2BJ13q5l9%2FKo%2Fk4iu%2FG6%2BgHxa024f%2F5orMHjXA5tg%2FCr8s4mFI4j2iRsxvcC6prD23O0ez%2B3FHeL217kmqxvPXx4Rwnho5ZkO2ATfQg5LNveEGg9rjW8aSfVyaVWC8wZhU241p%2FW8Bny8QcP%2Fc5%2FwmWnCP3Pm%2B9X5d57m2jy%2FsTqkCczxpXEoASeIOYq7RFnjiCKJEA5McWjl0MPSr4L4GOqUBfA3Ech9TE5maOZBnkwZnwY6QkiiL1CjJp382ub5O9kVDcKWxLSb0%2BZK4ytNCXMzdAZgvm%2Bu7tR8sZ23UFGcBKpoNgHXkb3TZTkZmKAqovakRVMqxT2f2d0xZhBE3KJIdtz8Yf8aCdT9OYNHx7QbH9vqCC4RMAAwGcWD%2BT7R7vAvTpZaFwNwia1CabdQYA8WXniHAULKdklh4vE8JfVt9IpQgYOzu&X-Amz-Signature=35ca07800e6649015036e06b7e0c320b73165ad16c86e24c94b56fad255b24bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJBMSJWI%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBw5eiih74IOWuctG%2FamJTFNL6XCC%2BiWHvaYEqIEQ34LAiBkE5GQS7ETDzqmjtQEKu4Q1LVSmWr%2BTH%2Bjab1q2pKk2ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMlRuDtHMZaz0%2BqUHvKtwD9FY9DMqikaKo6Vy7K1lGtS1zCLFouuGMCWrFlOUvwSPM8DA51y1fOHnXYs3Xa%2F6crO4w8efAa%2Brvqm2%2FKd4wJQZUUhD2y9Mg2Qi3sQUBK7Hcy2niCQRGshqR7inuBYKA3vabDg%2FhQEBUC%2BGz9NaJczBKzWFNTmQSVPBfJXrckLIF8GatoQLUaYsqbOCYhOKQE%2F%2BnX3%2BNPi9UyxDT9gXU3doAI%2ByOeP43t%2BUozOSgqF19r2hH4ibfLkDT62t1SGdcZ%2FUq4K8I%2BS8JO3k1X5MSuDmBk3F1SX%2BpJBx1Wrb7MA4pwRwlFBWvwYVeIljDQRNAJmA5lP3SIbLAna7%2FT6fi2h8%2FmtjTZCGJKTKSsYqxy5bq4w0iNdBFz6YOqzUY2auAW%2FOEnDyCM7fJ8Novv4LMV1nSMZTPrV7jA8iApJTbeYl4WS4ZJTgvqV9UCDQw0Wkb7YA6JfhoBcu1vE%2FKfPb3%2BFRee5v9GtTidfmkW3rJEiaztJd0E3O7alH6PAcMowvbjCa2FSUVCcSCGPvyCtfHvEepEzjBVnHBMdkNpekx3SbzetrSkprA6ZslMO2ZtdhjGoCIPz2Gt41Ih6EPGl9E%2BOmoJFU9rK%2FmTt0Qjq1F5Rwv0jJ1XBswQGVq7iswzavgvgY6pgHFn111oshosIutJaBZUok1oiCRHaBm1rK%2BgiByHHRbqnw08aZ64umDRqCvlB1rIlasoxy8J3cIG6tl8XypaaWw7IHsNeDWK1aSSpcyRU22ZHX%2BfpRfQOgelQtFzfjzvZc%2F6i4Aezx4oanL%2B2wNHATHSwHt0oVZuZTeUp6F1cMNqkbW2LsqloqCywIW0wXTubGSJDGagL8cBkcoAJ%2Bq9UXAL0g%2F4EAx&X-Amz-Signature=3f3a589379f8db47ee7fd1afc8337c3380d18e3bcd5b4211bc90b93de14054f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
