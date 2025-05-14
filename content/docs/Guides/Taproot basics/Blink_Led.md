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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5IGIKXS%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQD8St%2BV05FK22vDFZ3hwdA1d46ckqGitX4dkE4z8BQqEAIgevd2rwOo3wGNItR2k92rVLwgU52v%2BwKN2qkJDc9UTKUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FO3evGpkWeeelnyCrcA1UTdAHykOHlzOrwIBo5GMkAfELpAHpIZRp81reCq7SuGnH1mOtu8g8xqFcrMcEWC6R3ROn0OYZCn4Op%2By%2BbwBRCkTOLQERIQzrFgQVdg85FT9e5z1ReVYHzHoYuQnjbrApYJn8ZAPFkFgmNpzCKhWAlSBb%2BY%2BEW8WPGXUAToKtXFuB8foNQgeJl4MU1KzCoYec8OQPZK5mEDOIotNJHASddst9AHWuMVpwNEccR9PbFe0Adoi6tKUgp8MwbFsKwmdxByarOEzkZz3spag%2BSiDSaxwn5QR9rNbzs5w%2F3tOMbAqiQ6Be9XNYx7isEYzEgbm02xNrr2g%2F99tUHZGPl04P7PE4FFFrB%2Fxe9UUKJPt9jLg46aj4OPsUGAMdpMRCJqeHQeeR1amePTpPLQjv3mT5i3NvZLan4zJ0MJXfodcKVoB4x%2FpeFD3zKLArROuPG5xiuE064x2DXRSYE%2F2OSywGgAAhFe2omMOUSS3TkdPYJ1cMtPbo1GHotFFVg4C%2BAPa0x9mcNpQib%2FvfUMulljF0l9q%2BkO%2Fr1azLQmWau0z99ocueY3fpsWhSZEl51lFnsSsb8vKVsWqMXz8G0Fy6%2BKF4WngKGraVoaBmtM3fuPFE0G4aTTHePhY6kAFhMJDvj8EGOqUBrKa7tvUelS4I3AHQyhWWDswmwlrViPcA3NP7p%2Fvafw9QLQGPcvsnmCdAAbJxzYQzrzfI03jyQyYl1zPd7TVwwTEMS0HKqHZJeUE3%2BF2zm2HvVUjUfm%2FOLfqJ5lCg7Y%2FMfnI5WunTuj48wfT1%2Brvagscf84lCOmh1t%2Btp%2FqYX%2BZneo4yapC%2FGxI4RpELcRQWVjCUf%2Bt0nCgikrJB5lI6aCbw6%2F54U&X-Amz-Signature=34443dc83f331077df4a68ddc487b45192d59739763d710df5996be8ef56c290&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VAP5KOH%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T022606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBDYBRcp7IRpF1xLMtbUj5nVMAND%2BKcH2vWb%2FW35zoNSAiBkFKfsLxPT6J5vZW8SXA6KAsynxnpz65SopS7DfI0DECqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5cUA3ziYQVpVK2ezKtwD%2BNIoe1SwNExwQXzbOs622xdxgBjKldmY78eCrV9Wpow7OdCkg7pvfS%2FP8g4wT03yqE9XMRA3B7k%2FLVD7yhhG95minyGjzMyBomfZMSBbIJU1%2BQMjtyT%2B%2BHtfWdbMJr%2BVaaVtSDstrlnkzl50tHHBAjpGH8aOxoF9XFmTwiD%2ByljEbKTWiG0YafjqhvIdjjv%2FkDSjBitSRwSFo1x%2BVn9dWK%2F4HMy2kpSOPIdNu%2FiIy4EX6IFYTg5FBmhSRHShr8vC%2BLUO71GochsR7iyg9RNfBIsRLvNApCfbbn6FpMhC6wOq32qa22c3yb%2B2Pcxtz9rku5MI8h1w9YZmFSsbIPUSgR8H2x%2FQ2znoeU3%2FvHKIhPSxU9OzvbRjxpgdIukHNyJa0j66XfGMH7z2w0mqF3W1GV7GSO51QtbX5iE8r9zx%2BdIbsJJNSVSZgORcT%2BXEjfEXzXHSiEvK8MoENA7aRA%2FaCdYgIO2SkT4pHHDJda2tPGaZPc1mzuk8UnQ933iWyQCqGiFDEy7WruyFIB8HMVHwcLXKotGEJLCvPd4%2BzkqeinlwiauQ%2Bc%2BS1Iuq0LmeJ5LjGADm74c1rKsag5rerXksQhiGWD747iNJdM3rBqz%2FSLgvNGzzSzJ8ZuwJZ6kw9%2B%2BPwQY6pgGyvbts52MA6eYRCkB%2FJ2eeaF9FVGh1PSWLywiPXohD%2FixDrGFkDlzC6%2BG8qH5gfyZ8cym%2F9myokBAmbgy1SBX5D%2FOJ8NS0HC3J0QFOOfadje6JrifpdBnuGpWfS8u3FH9JU3kqVxYnvi1OqMS6Sf3hRIMh%2Ft6y%2BUTm7Bx7xNt1zuTi4VSbqUq%2BDC%2B2notguUqigfV6ReSaGwlSBfo85ZsH0B9nHPC6&X-Amz-Signature=983bfdf748ab492ee8108b064b786b667d6d849f984e6855f0a1c1a6302cdc70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
