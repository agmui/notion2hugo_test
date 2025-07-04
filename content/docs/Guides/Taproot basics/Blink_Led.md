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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ISRC6D6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIFNS6J4RVPmhiVIoyw7htqpPH1U%2BXT9S6Giy%2FxIt2pu4AiAUXTvPlwJqR%2BYsSxUEoAUyeABP5%2Bb28wgqpMsOWmx4iir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM8QVTbAo%2BtQylWi%2FoKtwDF097sz5nrcRL4KL7oNx0iL5XiwyUff1cqcC4F5F6I9MOv48zLg8st%2FgWIsyCXn4pXiv3wO0THL5ryUpyQcWIaVyp6dWYdAQccOgSPaFntzCTza4SpvjF%2BTGpgOg5oqK4JppxMaOjlBAYV1hEz%2FuJf4UlNH%2B04k%2BBp80cXoR2%2FWLKBwwl2FCHAVrlEuAklx3hY86TG2W1C7LxbmgscggbYu4PhRbcg8zS35cePX4llZCvfv4pjyTVlkNS14p%2F20nBE73CDUQztGr8jt2JzqkR4lE6jPvBCA5r8esY9YlTRuuTGfYx1BMM2LDADC7mWYX40UII%2FTCivIMoExaY58QmZvMFwKMvKkQcm9v%2FL1CLKpwBPFIrNKdcfMURWTAm0Q6EOIcuyNQVFcPmurS6rIVaDbSdIWbQebBU6dBD4NhCZLcb0wiSKZHpIRl%2FuROfHr%2FD4qn9eEks0ckp1QtSNmkyAOZuU%2Fivre8N9o5dvAjYaIQt1tWmojObQ2Mbt%2F85FruEMLS9g0lniKb8haVPupErrgQbST%2FerAM%2Fu5K9JOdM%2B0SxPPvbGu01hsxZCueFQCbxYZwCnG3gILyzBRI9nSjw9tgyDjM14dVAh8pGMDpCl7s3MeGnZRWBIdu5ooowy%2BGdwwY6pgE5ZL7IT%2BySxyjHLVbtMSy2yFsMG%2F%2BypybrXwmZirEhT6X5kzcFZ0cwH8IwoRIKdVMEUKmrQM%2BvhSqmOVqK9j%2FqPHzqKnjDSlUyq2b73pWAKs9tkjWL7jc3v%2Flv%2BE9wMDjKCRKoiS1WNceCrVIMH2I3vZKBqQcGoXIzV26U0vIORe54C9lOvC32bZ0bFoeubvTkdaGw411vosHISnXOWaNkv2raZH6g&X-Amz-Signature=76ccbd3085940f196d0fef794a0f82b72505ac6a9f427b82fb0156588cea4384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZETWFZ6%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQC3Z7TSTBtJgv66vfNDtsdvRyEwR588Z8Mhj8yNw6%2Fh%2FQIhAPBeTfFUHDNjW0PDRXKL3YF0lCGu3kcyNAztITgcprspKv8DCCcQABoMNjM3NDIzMTgzODA1IgxkpaFxt11hpBNLCqMq3AODtZgDl%2Bx7iv%2B5m6O9nEO90lu74NGrX94m95TTWtYo5YQONql4cuwPVYBx58FV7Ezkjjy9C4MQzlyLH8IPS7fIPEhaftjLTujexBo2wo35%2B7kQuAaAdVgZqA7469MRUxwK5Dsl%2Bohm4zJEzCovGs7XnexOLUkPbJ3ScdxfEGfHqc5Qr6iOU6q6wkFqSV%2FYG5yMr8DqdIBjzfHbz%2B4%2FOox32O6gd49EhBnQbn0c8WCy4eodFWSZY7c8Ntb3%2FLPncIq43t9x5nIqi2lrfuqROXji%2BzfHMoR%2Bjo%2FL%2BvFO9osCYa8nzVrjuyJuc%2BD9u%2FfkbuG7pSwWRJKqwfVv96iEQvQcHCdDlyzJ%2BBQR5Vc9nvUgSEv2gKWFQvk%2B%2F4r2b96S4XtB%2FWoUtXeCuxB%2BrZDeGc0sKYyZVUtTRnB%2BiLF7LioQ9NEkPA8Lcobd6dMeYMAci7P3uw%2Bi00HfrqklapKxHQaz2TtRh%2B3JwNHxGNUfv4R4VKmIjd2eCqCCUSUAC70bd82XalTk0e7gOqkEkY9xZZj8RI3NRLGEaALz67qJlcX46GLh0I4OoW021E%2F5lEWA40HaZs4L4vhjXUvFdqqtiDegRA5LwieQJppFdMMttVAVOms9oHrU3GtbiXLyNDDo4J3DBjqkAecVFp6WlixNfFZHhP9alzDhQKYs5WCfZ4qpeGyMExQWzqoRfp2CdNw0wZGQgkAc%2FC6n%2FhqkGWWyibhY70m6dBYXkqS%2FLnrqvDHdCXSqKuqUyNqdx%2BydvRa%2Bz7Euced9xur1Q1vPpPlbmeEXTmUJotun0E9Y3sWJbuSnHRyeyCJquSQOi8L0cbR0BVuUUC8L03ulzjIznZbYXxOMYjTSvGwmuBJL&X-Amz-Signature=2e9997dba008a3f936b8428c3b95a43c18d75c40273c797f5005f51cbe44c194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
