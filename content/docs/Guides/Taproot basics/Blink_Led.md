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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PA6N7IO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIJBevgb3rphBH2NzwzmA1UxdXs47QFMWd8DjA3tE5QAIgDacLjw6Ub3xnBAmjr5NP14jcYz3TGGMZfswgjoyMkXwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMtMFcHUPW6wOHiyryrcA3gQ%2FnacXAiFVyghMrs5gLslOwn5ek54KRRazSqHTnnXesfRbN53Cmbm4BE5t7sbWcTVroz1%2BoBEC5bJhhRRD97AYuUYjmUgnORdyG5iKFFxVgM9ktoEmLgEbdrFOOuIv%2FEMW4eFLQmQcVzKR958hl%2FqMCQ5AAP8JL4A01VtI2SRBlYCHt%2FOuC1iEVg85nB%2B53QoeYTUovl0nrxmYkXFYKg%2FCa1WVo3%2FOJCz4QTg5%2BftrAOyuZ2iLoa%2F5RBCLxO0HcwV7aySECOjJanLEl3ShCKdYrZEOsAjOgxYrOWeiCoSBj1DOGDpidOuF8HX5owOqGs%2Fh1LEp0IdVRR5uRHZRDUA%2B05wMA8Xx%2FZvg%2FehAgJuCNoJeUrv6uyD1TmW8t7LR22ZPv3H4AMQHveYH2mzHn%2Bkb7zjqhVoVFST2cpRL11DpYuVeiHDlWY3hkSTUHh3QVO1i2anQrL2d6UL9azkZpuDSHFVXImHd7L7Cyc0kL0%2Fq9UNteJnH4xLU9RvUE8bVSIq2mvTqbpVA14wBAyHfndrpahBB1XX3AJjtD2%2Fk0YZYaPcRxtr2hThdnIPjwe6NPKyCpHcG8RAS%2FrpNrV4UEDoXFLOfdWK9Uf90b2RqNOB8hepmaRBENKEwv%2B9MMLbmb8GOqUB2VLsFzot8yzp7Tah1kbuu3%2BhrMAmZzudq2jne32RAxyoPpFi8CyJxotCs8inNyERZOOoT0CryoB1S4Rk0ERi5SXTmjuhg%2BZcvndDILY014FnVSIEIrPYlDSkYly6VSLQen%2FhGtAXvpLsUTs3UN91kPzhGLHK%2B2wwWNVw0jggsYbHQi8RjWP2u7%2BMYZ8aaGnabGzoNz4STOSCH%2FELFySfW%2BxRP2RI&X-Amz-Signature=d1277dfe0749d90d40465fefca87f11b8998c65752687d1c26823865b9cc7acc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGZFH5DE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFsnniYVVR52BWOD7xKNT94mhali6NSPKAWmXc%2F4yJQWAiAWETwRVDqGADBQxjFp%2FcvfF0ds3n%2Fk2TlapQRHbTbFdCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMG92L1XDDusyoewADKtwDqz%2FcuKvhAOmjTStFv%2BzG9moAlFF4%2F1xiVWx%2B2stpWaCAZH33BJI8hdO11F%2FPNoL%2FfEQC0OyUOtdRUjievFg77xZu2e12tjU70QZ9P6LVLAwB37fivR1YjyPCP1lkDDVXrXjLXw4IjNom99FNX73w2XLgKewCKI0MZctaGGys%2B4KnjOfjzJkPM2UXvj7RE%2FqvtZOwWhXyRegIFNNE0YCXGLS5aC5K2O8TmDOGxpJTJZ7OSVVnts1OWoWcYlOQuAGOC01Oocy5aXINB%2FT31mUkJ%2FcZHqDbLEhiWmW06Rb9%2F%2Bp9F5%2FwXCxNX0xXNTvc0Ote8gZYeQANuDKa3oboIHeAZI1U5j%2F3S6u06r2Dw5%2B5JMnmSbog5IwQq9C4Az2TH3NeM9dQmMrJZ%2FautqoAbi9UhQs1OHdHlkBlJUU6gbbC%2BTSlYJbM5HigP0h0ctyxZMrBNtp60rpJaPAKZvtuYO3GMoLNSZ9PqRpmqpasYob%2FH4bm3m%2F4WenETzsN5qlcOwEybnGliLJD7g76%2F%2BwNfFaIBSYm5YHXPw4Yj5UA%2BJdVoO2xclbviosg%2FQMyhNcV4DJrpiw23wmLy2NvU%2FCLLVnFxZYt7GAkAqX2ndZatoM%2FYWrh5qpHGAxsbC%2FuLeYwmduZvwY6pgH22EhbcmGlp4%2FSHksq8txuvsW5OIk7VPDUFOxJmN4nuw0wefOxjrPzj%2BEjCA82shX2LwbyCs7c0c4ifYeYbnaFfpRgIKKFCQSdE6JJNZUZDZwmPw9Z94kAvw30EI4shejaToCIL5AXNyxyOVzviQ9LVQGQe%2BUlf%2BPsMOsd1%2B6wmbWwNyPiFq4RCtOTD6ryfK%2FDvT2TJDLgtEfifE7oB4yndhWr6cd3&X-Amz-Signature=e6de1f5a9b2aef6d127ecc5963b5404420e59c54d6adae8ceb5335e46afd7106&X-Amz-SignedHeaders=host&x-id=GetObject)

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
