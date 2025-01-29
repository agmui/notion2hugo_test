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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDODTJA2%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCcdWISQsQIkLUaXnquiGSJfGv448r8VKE1uqPX668%2BYAIgNhG%2BgNpZN%2FyMiGeEcpflfVzh%2FevmPcsqKuk%2BQ4snqA4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI41yTGrWgpIH4lDoircA8YCj8WsBSvVGHjBPQ7T0cNbibKcgQ1R%2B5Hb5tzE%2BguCzme%2F8RPUVrXosNNRtfErTrJTMxHGNROEi64o0rGXn8vPgaAnHmsNnVjQ7y35hIdysBi5KYPEDf1li%2B3Y47ALtrLt7D3sM%2F6XaTh6TT1QkM2uMGgwAHjEfGnZyX67irOscoWaOf7SDfhp%2BmidUgasGWhTdfTiRb2RMC5okL0b4%2B%2FWlLyigr9QT3hNPq05C%2BPnBpldZ93JzMTae8g2gL%2FHBJIHNZ6b3vuETDtMMpC0fqxTW%2BW%2F%2B9UfFiAxbnpGoxbYJMm7xximwzSH9mwjeAnXFkPVR%2BR2A9ZLRlP8KHWjFBs7XyGEPpcLz2E4xcwFP3VWEYLTcGpga82LDxl7KHawOaqXp1mbYeHdbtn7RuOkYKH9q1Qz3eGFN5P4N5oCzYAC8uM2DYac6gdFd7EagML5qTCerFtZp0%2BTk84UY6MGLxBj8zvtvOvIKw%2FwGf1ImR1WT6Mm6spMBhd2oaKFQfBlli%2FhII%2BmLcJG4i9%2FwZ02eXL7zATGjQ%2BHAHBt%2B8bmutQqPcPgeXZnESv6C107U9o6EO7HD9OkcOCwa5nPm0PIzaVNQBTQylrbbS9ss1GabouV%2BppnbO0yE2iio4CqMOe75rwGOqUBhPXY%2FeIQ6L3cQN6yt6rS6dY1A7wpJiDciPODa1FRvQWb2sC5VPwUheRq0IBYPxpjTCo42FXNsH9TL9GQlFRMkAZyw%2FGWsYP7wk%2BKcNHIBUM5REKD%2B5GlrYIkD%2FFVXUS22kr31KhTMlkcqjzltkU04gTuEbvHhS7b5OqPHeJqdJ1onw5N%2FjXDSQ%2FmhaiMZHzv8oBp4yWGn%2Bl3qIfq6d9t725iZ8Wl&X-Amz-Signature=60dfae48d2686b23e04494de17c4fa75e7659056f52ce43fc672b6f8f791ed47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E3XUXQY%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCv8YtZIWXym0Ef0M0XCWEW946Caleev6lfNh3es%2FJ1rQIhAPEHYx%2FqNpuVnAEsOTnR8zZ5IrW9N9KfZZCHacJQ5zu1KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdM2Bbu4TPMUKgIyAq3AOK7%2BO2Gc%2FzksOX5nNaeFwEQG65GEaQncoqIWl4vRnbZkZgKzXZ98B7aqc%2FfOjJZwnbIbpwrRzCxU9OMjMBzbcWVsZvbJP4RAVJh%2By2z%2FPJN0c3aMQ0zCwRlbiQuPOXeuzXhKWqqDgCiJ%2BNNoP%2FUTD0O%2F81L9Rj6MDnDl7WyZMEAe7ss6rRuxU0SXn1rDUTziroCzW01sroiYwvTo7VjSdDOPuftitepNcOei%2BogVxXZ2HrBdlLj45aLYH9hx7EIJ4jnQmGIFyUoTSw8GCDG%2FNhDa3rgpNM1JwceLcITRWpcSS7WUHpPwODlZGflXQg4Z6n0Vc7IBuDJZguw3jjbN7MrVoeCgvEuylnE5Eb3I2qi8C8gfF9OzAfkoNuD4qyFEq1kJ5IX%2B7ExI2HsTgw3gYobz8Nu0FAHiWWHjjr%2FmxfSI53FyFe%2F1FVpFGBec0WRywTsGCTTLv6e90GPrqjfphXYGqsOmfJgdWPJWjXxv9x%2Fg8%2Bj4OlWDEZ13u8QtA5fzBGD13RgnGYoZxHnyzhUSmcSMEhq0uZVMb37Ym4D3SVB2lnhtZTaecrvkhrWifRb3b2D%2B1HyNOkoYxAQoEfM7QJ5k218V0JH%2BPqkqCLgJ8MveocxJkxChIMFR1wLjCXvOa8BjqkAS6RMoteBbFgayPYVv%2BM6NLOVdMYMN8BudI2P0uG%2F5wo52ZTCjZkTFHpdpjE1fUNpeA%2Fe5JdBztWNBxIeS193HK3b53jeYkLD7UqEOLPR3%2Bl5FIeAI0tyceecqCWgQocyW474rHUlQ%2F7wOfM4NkmXnWoGfGnYO7X1Cqi2vozpOBG%2Fwb5Ef2%2FoVpTLwwLEkPpDNYTnUuFKJRpuuCbfjFOn27H9Pdp&X-Amz-Signature=8851d4382769d5666270e8f9b853e4737459d939517e04c80876d1e883c21e59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
