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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REN3IGEE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmD%2BdFdEsbytx%2FB8fB9fcv%2FMi%2BepDGpOUTOAJrl44ZAAiBc47%2Bsn6y8DHQibBZThEe67oWsHi8ExZk0WnXjfD%2FKQyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMFFX24SwC9RODudtNKtwDTnAbK2Fm3uUyiOyYlqcAAjVyhETjRA0Dddq4Onx3RbF5DYG3%2FpH4Wo2crw3JHADA0MClgPh8zDhePYAZwWxPyh4o4RPK9Q2daY4nVCP11a68uA06W1YwmgmxlpqGorwtdeK46vJ5DyJvUdOR%2BVsar9Pss5f%2BkbiF8%2FQLDaIYyMKgDvCMsCXZMfgoxA3UsYFXPDiTvBMsElzoiwCeSLPOXFMz8EIKjUuomQg9qe2%2B305rLlaFv7pUvASdkqmg%2F9iCj9E5VSc2tF2Ch5iQx4wFH2tVh%2FyjqqIRK1lwDGnYR00NPZTEsq2PoetaK4y0T3VVIuxxpSA8fbr7oezWZZPUq%2FfwQxsJmCaXjLTyMNWYYJsYHkN6PAHI9R%2Bhse79O4Yyi0Nl55au24ca5azaqc1ulx8irQwWBRnYmFesiy4mtbg3dtbC%2FEJy3bMeU5OcqowiDmZPsNhxTtxTS9ojQGVHAqm2MLrbpsdWTqclca4OkjlDQSZVK5HMK1DXbUB8QDk%2F2WXRdUXBjtMe9TOqFfKwOXh%2BJhCSWJYD%2FT3ThbtB08ElOw%2Bw%2Bxu90s8uyzAAo4akYiLmBAkfeg5zmUqAErb4iqkrYkQYyvfYZH66%2BVTszBUzYFNLiv81m16D4PcwnMOcwQY6pgFRAupfasqBKmQhnKtGPN2hiykysle%2Bg8xgG%2FU8nOfIktbqMmO6jJP9iF83r9i8DeBptjZSoL8JCgCqbhowm9Td0rPHklJsjBef6sYbmHxTM7mWxDY7flV5sKUrc1mXF3ucKDxoWTMqYDuclitZ0PeWTIGhCj%2Bbm7LRT%2BVIXVeJg6zgncWVwYU2BiGlSdSW0FkMAbnRoObUt1MnmRzmvRM9WBILhrc4&X-Amz-Signature=f33be65c1f39071d084e6b8ae4cc5e65ec0124f8dd38cad2330b53221cc92015&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DWID6DU%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHahW6NHjdlWZt5H5UZ2rETLcT2%2BHx5HnTjptpgKySSXAiAVvW8vcDhPdZ9dzwgDz%2FrVrQf1AzyM9c04qOpsD6Ak2Cr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMg03jLXWWd41IhDgOKtwDlhWe4g5LXEyft4CDNmL8ephe7UjTC31YMzScNr8P1jPoLS5UGNHi2vyyEBZ7EoZXimkKv%2BRCcsCOXOwPbfQiDYRrD4rvKO5qtK1hh8626cI4Wn9tTVNsIyNxL0YcfWia6oTLqI%2FkMAUOhd%2F9nSo1xj4UaTVgrfNRXyjYDVNIfvAapdxhh0C%2B8pij5o6k8imSQNwEoEOFntWtr%2Fv37ANl9eKXWvB0bys21gjG0OI1HTkDKwQ4VkDXt7rfsReG4aydCqvc02O4V7%2BTq2kAzGVwhu6wY9n6EYMMqwRwRNOKvrLAMRgqcKr9wwdruorUaO7MedoQDVPwzMCVwhLQtnB89d8lSc2dhev2xP21dp6DLG3DOOzHdI9ljqb5x6IwD0LbYbPyTIDWVgieZ4o%2B%2BMTJH7qh7VpSZfRdhjtunXRjr%2BUJKJRhypHuW8l%2FtcKozGNco6aDpRF3%2FHR7%2FC1YwpryF8fVKL8Pm4REmudVC6PVXyMT2d4uVFjzYQ9dSTykXY4rOnchnZt1WOlYSUk2vVYfuNsz5eliRn%2Bo61yZ8%2FaXZzSBmvZWvjgjaodGtEQKTYuSyGvHnPG6a5dcCXt6ZQ247zoDkRmF0HmwyvvVJn4I1zN59qw%2FJTXwM7ssbcYw%2B8KcwQY6pgEau9LGHcsFkatYW593zJSfvvw854o66nUm6yFE2sRq9pFpN1HaconpMfDOs6d4z6G4%2FTeLKzQ%2BGwBJASinIWCG0T5%2Fd8rT02VFLnUDEVS58ocS9osjny9Ua5PplZkQ3nKZFHEyOam%2BgBl3N4K9d7XRsDalzRjJbqCzXejTFiuufDiO5iEavGKg7G9X0WTV20eBdCEWSA%2B5px1qMmLk8mTVbGQ0fur7&X-Amz-Signature=4a2d18ba6bc8788ede9cd1f555c70cde035c669628c84841239d29713f1d2805&X-Amz-SignedHeaders=host&x-id=GetObject)

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
