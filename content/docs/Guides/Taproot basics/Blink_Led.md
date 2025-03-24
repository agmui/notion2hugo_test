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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UXUII7%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCklgVVRpxRknJAaavPn9Lljs8QvJ%2BVdnCwCsZQU31l%2BAIhAMkyYB0InnLMI7RVtTb6PT8dLbyQFkx3Jd0kgLNzxFSBKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2B%2FJcsyDEhu5xf914q3AOg3DzR5k0brPITaZu%2Fk%2BOOOFD20ci99H0Hk637L0cHuvnrheO6%2FdmsN7x3x42LW1n9AhwYVmRQe5TpDdsGaymqEm1DdGbBMUhAPRgJdDyjccL5XycgnEBprtFR4bMCcOFY1EBA2OVt1hp8EnR5CBwXpqxniZJ9VN58DTqJ1jcakiqugThvwzEmpr9fhBOMELGL4FRU5G4e6IZ1eMubKxaJ6gQPp5aXzQGfnCyjsVFzs4fSGFQWM5nFOGNzXuT4KNkKLK69Q2UX%2Frm%2FvPHafORVCtwonkUq6x9wgm3kHMNgPzdEt%2FqPVZk0y%2BXcro%2FTvb3wHH0TDXR0LOS5BJC%2BULmr87ldeUtxPCRruOx%2Fb4UJRrubY5pG8RjhVWWsDDQOAKbrd2lZvUlWa5u6b8TZU%2FIfNXkFaWYefexzFqI6BwT8sG6jtia0L%2BjQaXanepVti2140cyQQJfjP60ByZuWNMYJz%2Blzhi4ArL32Y7hqp7bWD0g%2FqaTyL0pCH68mcBvg7V%2F1dKx2Zbm34FLHH8cWjKsCfvcYTRubw6DucuikBdgIuWrLEsMtUAMxnP0wB%2BEI3AwG648lUn6YRbGjF42cMbZaxa08nsKS%2FmjnmNcLH05JM%2B5kTkPAnpUwdgrgCDC1%2FYW%2FBjqkAesyWkDOpKJRAowQpaeP8P7%2FtX17MniMib9XzA%2FXsZwY7KSkArbJfIcMYcADxX0NM5ZVodUQdAa5t20AbEM8AB5E8FnM9in04USwzwPTBBNlY1uvlgdoXbGyYaXzrloaOtGdaP5XJZSS5NxWOsLXsLCE72ZUW8zvY32C%2Fg8icNbeg1vmEuXNGTbd7RFDhQhsD2R1ME2dLoOAycLHrwwAmuG6RmXG&X-Amz-Signature=b7425511cf4af27ecf246c9f45b8212dbc759c17e034a0bd6c3b094c3391c9ed&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGF6Y2J%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIGynSgz0xAA4QhjFfGoKA6Kj0HCnhH8xlfu7W4cu8uOPAh9OfL87fhrmLm%2FVsBAAabg%2FFiCpDzU3e41xI2XD%2Fz39KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwm4R9SGYKyxXHPFTYq3AOxlJHVlBBJxXrM2cV1QfcR5SfOb0w54N4N8dLx7IxgScqZXB6fCD1XscCHkkyz8tIuRcM1Y4evfGi2qwZL07hgeR4yBrvaPwZtrxdGuzPQyK9QQ9%2F5kdPZmPBAIA3%2Bmp%2BcKHFp1Rbq9ybQCt57XkzXO%2FqvaiphrrLqKUWz%2FLBNemWr4Iu9vrZUzCjTBa2OQNAeYdu1M1dEtMpHPzkTKmHLfbRL57TSOyPBq3ni22uTYsz8s1OyUGMeAx%2FQstH6ztOsza3wS%2FrrbhyOKc0b6uCnWYthHJs3erZrg7ZJK%2FiZ7rO627DoIxoZjZc%2Fp7swhZEx6z3lJJd0S6a4b5FP2Bo9FDkGRUhZA8iZFpwP3qE%2B4qdxHb8LvEhR%2BMf45VH1YOTEywjZmZOVeZ0WlTRgiiFZTXNE6oyD9orN%2BcLEyfN70RrlZtwbHFDHpmBLvs3vE48HwcwF3kM7FaPXksya%2BIyyeDDkVr51GKsn6RWiAyYTO83TnHNPL6AO8meTi0%2FiHX0mJqpvDkakGrmKzpaj8kuRz8J2aqqCJmBMbQ3FlF5FhKgO5xh2o7Vrc36DFPxlY0F8loq3scA6Ya30i85sxd94e1DnFOBHPljlAV6qV7FUlrwzhY65pwQX%2FhS%2BmDDe%2FYW%2FBjqnAeKh6SCSewDzt6tPXbT2s1k6gKWyqivRYuAEQ%2BaDtxH3Z%2Fjk0DGaItLcCX8bhv565RANl65cL8YmMczYrwN4ydxrZyKP99IOacq46foWSvyHrrrBWiZ8un6aeTlbjML7JOlzREMkx1J14kUSd331UvxgnY6%2BsmzDcYXUteMf5b1HV%2F7gdjHn1SncfgXZpCEO0jrD9BkAq8zBl1wcvnIDgTxqRo4uQFUW&X-Amz-Signature=054fd71b8d37ce5182ad0f2361c48f1de837931f80f2cd1eccca6be02ee7f6b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
