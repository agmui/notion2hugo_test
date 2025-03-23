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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQFY54N%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDZQj6bFIw6zQXGPTgsfyy9oXpv%2FInPksy0xW1aM4Ca5QIhAJPlk1e4wdqB65LNsHddW%2BMNszjTL%2BrEP2vGFxtSQw5DKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEdKtQ2IrK9GW1if4q3ANJ%2F7F9jMUBuVyIxvU74Fpyo1yARkFlpzn%2BZMUui%2FKVfsJnrFaRB84ULRE8S1vfMWfS4dHTvz%2Bj7tFMldqLZqRIwpzGPXThZW0dtK2SE8ViG7ocj2X866IfEDDU%2BkD26%2FCwtKciQZfigLCWtehbZChx%2BbjdCtd8hMgkyrkV2kYXyAGHJU1RXjbQ9FyIVY8lntMsn2LEOolYhMOeXmiTylh2aIjmH1VdCq6sd6SVTafLV2k6h29WoqW8aR9kor2yjjf5tW00nEGnOXoXMKgzILdDMYApoh6XK328wUChZfOL1U3sxp3i8dBJKZq0K3vilTe1cajuH7CHbQ3gDgDqWguCupERVp%2FZeBFpeSHZJGSCxzpqMmDhgigQGuCJtRlVy7OzXhm6nzB7yMi%2BUqEry%2F6ttHvy1BMmwf8cHXwM%2BhlGpVZfJwss4N0famkURsssEA7sV0qpfvAbYTlLNxAf7blxr7I0nMfetupHS2j8PzvPfPPPi9j1G8RuPI1TTFSVw1QDFDX%2FxYDhKSzNc9RnInqWxFDVf9bdASSUvyTfilZUOeHSLUmiSBllNG6ImJ5EcKb%2FT68FSpSYuqPIIu4udIurJFtUeGVIq1hA05%2Bx%2BB1auxFYiFBn6KYo9NUMBjCczf%2B%2BBjqkAXgYGNcj7prVwrDmugNSHDv521ReIaova%2B11LbZ%2BRO96y%2B86kT2H3cwBGdKxVh6XsWST7OV50QWktwnjGiSPnqJ1aL4WVji69hcRj22MlJoHz1iM6NQ%2FHY%2FH8ffPMA9Peq3Im7sT61WE0lPTbv%2Bpr6rlqlssDdAUO0IQOQEGz4KSWWcKkHbXNnisDxq8x4u5c6xaiobAdNdSwmuHetJHLJgT3k0b&X-Amz-Signature=6c595a1c2cca693a0ac313bdcc19450989d08330faa30fb996d9964e3dfaee46&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNHHNAE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD%2FB0dSfw%2B5uwz3Sq5uCswxrbvrymoqpmhB8Zx0DGegWAIhAJ5YTeoBDSu0UX3fJrPAaDkyRrmVeUHclVTjHwpQoWdzKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaBWnB7dOR2E77O4oq3AM7NXsBbvdmo88MLsfnFlwaq0L0FtsI%2Bct%2BNQWVYezXJA9GVIT1LVvKC0rJfzQQDs18VOq3mHmnX1%2FQIxylX75VcUEa8CBCqYB6ZIriMPiczbhzMyyO0Mb8iab%2FcrQ4Y4U3IsRNVhJVmvEuvEAUUeHRRX%2BjPPBV6ljxCOr%2BCYOhHP2oeSsNJ0aNYXJIuEObZzGy66rpQIM6FJ2uEOSbthUZv4AFd4FkITwshU9ovnXlCOF%2B31OnJuFWn63bNxWLhu3ygBKhQzblHt8mmSrrPYicayVQIOJ3GEldk2ptQIQKV0cXlP8n1L0J8TdUrl%2BA4dTGTSxrhzqpNYscJcy0JUK%2Fjo4ZvcL7803lQaZRdJ352fsc9oN3lca8FGXOnfdDVy1%2BuoJr2j7FBm2B6h1j20ALgF7arniB7BbMTCClYSIKoT52PTvvuesZ1tDuODeIMroN08rIxtGWXsp6iWGOC9%2Bm5ClwWVLp4ODkNN7jVelXmFv5wrGFcrEQ4IuiZpkrHaVvwyyURqAJ45Uh12FnLSTEEuZ4SMknbiBcBYdhu6CZyeGfjz34dieyDzyx1d3aEVBCW7j5pJSIN9YgbFCNr%2FfF8iJMuJff7QJ7%2FEhEsJKtUE5eCUX5mXUJqSwyFDCbzP%2B%2BBjqkAbrL01phPXB8Gk1OdDYNF3PADwJToEliDcw8iB10Y6KfT4eeMZ8n%2FfvGU9YwA5PTmHl9zgS18dlvTC8UOKmp9q1Jg4Lhu5TKB5%2Fr%2F9el3O30YevHET4NLJVN3qahjBNq%2BCJv6t0Bgmn3EVskhkwEVouImsbX3LGVn3ug54ZYXQAB8IKipF2%2BB9K37aQpe2sBiRnWczkoP9%2Byg6UKVpSS37VulxyF&X-Amz-Signature=161ba1188898cd22c71ff139f1b1a8fe24222eab51cff39456988f6980d6981f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
