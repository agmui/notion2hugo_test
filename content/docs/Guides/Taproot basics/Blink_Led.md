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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2DGNFW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIA7JUjZuCx%2FZ6IkwdkMZhdhFRba%2BDE2UkOVEOrAlpjXQAiATw6lLTPU34PAeldK2Vevs2V996EH%2BY3pfNGK2W1G0Fyr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMiTKyo1HHYuvZ66eGKtwD39pWDxQSf8lUwDNsGh7YddpEZ8LZ1MYgR14cKr7eOmG7HaI8L8C9zGHEUaqncCLNKLdj0Y3NGzmrkf%2FAHE4FD7txu8DTKs4obvYZkQZJTW2NrfTjCMV0Bssqm4fJyuxFSKb5KbjI22c0rAca8u1RiK58dr5zHd7dQSH%2FmNYWDXJ8gmO%2BsyRwuc8cA%2FEHwKL2gHH%2BwJRaIVXa8A5kFInxLrJIbuHjfrSHYfjfup1LwbnQEmYHgKJ72dUbY1fXHRC75ua3mM5U07XivEyCmLd%2B7S5l9PSsYAOeD%2FsOwqTcKkLbqdlFgIfIxgWTqAYTEcR1h2jzvs%2FHhqAFpDGc4FeBd0MxLuxWXWVHzITZEKg6weHS%2FNNy2vHn6hpzVjTkOkPQ2owH5p1meAkUdAphMQsq9fMoFBfRZF0eVvZ2WLK4aIOlraxchRjIMjRn%2FqqfW4IgX0D2ZQdirjyiTMNoP5ExYO17dGteyrQQWZlTeBzsnYkjjV%2BZJ4cJK%2FDLVvijj4t6jDmTF0lQyGzZjyQz%2BMl3w%2Fu3bSCFqRW1WILDWRX0Bh3B5lFevmGDlK%2FJtePH%2B1NnQlY%2FSDsuyRt1%2BQYrmzfM4r7vFqzb55JL2jzE7vo%2BeQhvOVSsnwctxuMsw20w742swwY6pgFOPWhPNNtnY2jmhse8ssI6p6IObReZUqXKPHizzu4sOhMWYz52nFt8mF8mNdUB45sIxW6BZFE1iWQ015hO69ZH5dY0dHhurYMOBtpW1dK9nRlEguzmHTM2%2Bha%2BTkBlMMZWMfRZvFK9yTS267Hu9XFnhdvK4RrB0S%2Bmp7p9FhEXzbNwFlHwRXEB5tIDTCG9ZcCLPrxIg%2F3us4620hP7Fv%2BLxFPM%2BTCW&X-Amz-Signature=1ca12713f970311d3cfdf8b0a052ab398fc1b0a9c65409ff95088cda110e9645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA332ICI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCVrmjAleDQxD%2B6U%2BG5SvNKxt0p1jPAOADMEOUCvdT7XAIgEWbsH%2Fv7QCduzXgVHHq%2FkK%2FSC6t576WREZu9yKLJDo8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDK8yX7gIu2PCUNnYCircA3PHPhynA1hQH5gKqpMAekBuuf1x2IkWD6IlUYT5xTt%2B8v5E%2BmILQxe3jWyjIfeJ4Bx3OT1TMo9X4OkfrBFMrQpoLLNENVNFSih9awKNbslyuoE7a2JZwsgj3VD0itzTK0p%2FzCdrWoZ1skmau4eZbnyAHZrxhheoGAXoL4n7AmRUjnPnD36ODsgRycnJDC%2FhM3mtJhGgQWG2ClQX9MQnAvbUal8pW9cSjkI7d60pLGlnblIL9HUaB5vqIQg0Vabz9AVIH3SrtG%2BUBBH9jkfiiWXCoXn15F350Cqo91sB5n3EF%2FFbu5CvnNezRjHymRIGKCE%2Bh4q%2Bd2gO%2FyBAED96anEQf0C5xCu43ekaStdpQCPoazwMZRGbd5Kkq5N5JHYriita8eKmeexo1JCneUM3D7qs3fXPHaafKGiTkXzvR0WPWS0bkt4%2FL%2BHvN16VHS9I4qaRWeRNehXF3S2EuTMzmKKolC9rk9VHRom55%2Bj0Sjz4AhYDJLarCGhKBuQkc1OM0eC7YBsdmMysKoiwUjkKh0splRqo7ng796bKeoVJGSSkbpnZafr1yjYBryQXyOweWcScZrKNzWX%2BsYfSCo9ZAdPHn7%2BotIRwe73CVp1fwEzuRzFwUtKU4J4%2FNhcgMPClrMMGOqUBWjwbwmWA%2FGDOt4WgHFwlFdddfY7pFiWZ1ivQuiuzkvd4ljuO8CtBsIBOXklaOpKFNt9%2BP7RXb1yyedNSk3NGnQnccFGRSF3xx2dUFrOJR1kgRmasxL8rZ6QmWNEDXOwWfAX9VqANgIwiWg0MiNUtc2W8aXz5NwhqlOO9jGBVtb%2BckhE91T2pUHeJD05amSQFCFRHDEWQGrWbaX1uHGKifarCFXzY&X-Amz-Signature=dfa2b9d899bae1b1168f812df8275af387f652f169070c2dddaad6e877ce9b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
