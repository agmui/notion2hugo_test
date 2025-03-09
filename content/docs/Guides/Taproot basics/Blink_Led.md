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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644JQMGIZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDZkA8haz5pkCMKCt5v%2FNSnPiNaWOW3m2mAJyghLhrp0wIgexAnBJNSIuXeMRrgVTh9icHyZdV7KfwMpHXE13DdWpoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNJK2dFdpRj36ilTJSrcA3Bp5vVYXcMPqDTJI7ELsFZzdJXFrKIjlmXPIa%2BT50%2F%2Fzp%2FABwDYS2rNK9WaNNV78G%2Ff%2FJK2M1hj9SWHjJ0Wzk9im%2B4KgrcLIybAPLVa22uAN7XzIPWwMF49cxjpMABWoXAs0ik0Kth350qVt6cs8YuBN0rZT59W0YgqlrMAFcFgID%2BLKAM1dHXIqwmbv51zhJ0GrZSVXb7t%2Fq5gLBuX6L6kv4%2FM%2BeTA4C3R8BxWbDd%2Fz4zIcJo9Scvbg7ukOOyp80TZUPE%2BzEklxg9L38IJ9ceP7GuG%2B2RpFjdWs%2BzR%2BXdjUC0IJSWA%2Fg8KYza%2FVdmpFOhe8dc2xtqEUMdZ8tsagsm8KTdhJOyAcq6zSwvVUjED8lVne5V9frHHM8uStIkItJVXTRtz7Hq9k%2Bxv%2FNN8n%2FT1nMol2mrB3ARAOyKb154xRZ%2FY%2FcyQBU%2BiX7vib%2FTeXS6rNTsDoNEYXfB2%2FH4fLiuFbJ1uwBkYj95ctSdq18Bd3pn3fQA7VZCJWgpbq5FCYp3r3iX%2B4y6naP95QWVJpSK6FHOgtC3w6%2BfeR5sO0ilgnYjWppH%2FAv16ekDJtfyTpNTsnTtuxhGjyUIugbMkRBm567r43UiX5UUrF27tMytYASvAkCHuRDZ7ZNtnMN2ktr4GOqUBt%2Feijy47lHb3D49cvRY1r8U6Y7IUOYcWZxFzUm63lFd4w7W71BwdNn5vQRKPqqos4pI6%2FBNmXMAc6F15UE%2Bq0M8V9zFvkxlQ73WRmPM1WNt7o%2BMMQ54QFhPFJ2XuGA0n%2Bk%2Ft85l4N5dPeuEYsgE0NBAE3yYI33Fu1jhVKXQF%2BcRmtlj9VJBxso7xaMkS2F2Nmq9AxxswvfT51PePqRur0%2F%2F2xtWV&X-Amz-Signature=cdda58c027473ef7825595e7d60f4e0e410f23e6c68a5b75d5e3a78bb307e9c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URLFAWC6%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDNvQT8hnTYpl7R2wImUVnwiaSqPC9CVFHBms1eHlfczwIhAM3h54XHfN%2B23iNoLCRipU6RBRQwLy9QdTnrDulR1v4cKv8DCHUQABoMNjM3NDIzMTgzODA1IgxaYxyKqJL%2FJmnIR2Iq3AMqx7cGM526ec8XKqz7JP4Ri8FDDSPjd87noN7LVlsEnD7j3tp9KTspIIL7nfN7%2B%2BNofKl65J1kVWxWkuDoyV6nrCK6vnCYGksl%2BDID4YBHm4AN7pz%2FzaHmQ4X3jRZIa7WBxdfVTkneBdjAz%2FxNC8aYdDrZAdBQaadxIjaSW7RZx2sqLGWmY9mhMLlLCsJKkmz1IuTPvRpUtiTvA4QuhPQlylhsqFk%2BJmgndZx2cpoDDGSk9I9cmTZRs%2FVqxvijOSMoe0Pkqtn6GAaMgRr1eNw85HqpIUzycJt2PutHw7DjdC87UfKB35IR%2BNshUcLSOTp%2BQ02M0GBY%2BEEWeLdzFRWC7EM04geYighg6Jrq58%2BkiNy5p6g%2FHzNiaYOiI%2BoRA8zirD0Qy6alZVHiqETx51RwuLf%2Bb0N8zfP1nYKWNYNUO5qgXRpQBZhhFVVPWjmJzt79cI%2FEJrwvlbJ8Xm7r%2BeCjW2iiGOG8K%2BKkWFl7g36oZEfqAV31SXZkqbIyrXcxZgXfMo0XxwUYVAnLJgsNcL2NC57a%2B1TBIy5tQNnpTejECmSoUBdVraBr0c0riXhoOR0s09nk6psVrdnLD%2FuDHJ0wyPG7nWRnXbcKvZ0m2IB20Mfvo3cuRnRJ8En%2BUTDhira%2BBjqkAVtUhS6gqT0FUv2CPhyM7kGGgR%2B0sB5kouOB7QTW5jSxszZdeqlcnfpy6pCQvIAddsAQ1A9YN4Lqye41F9i2PpDqIemlW8Gxxat6IuHFz9vwq5BbM0KLog64SwqFXW5XCLDVGV67d9pP4olgSlO%2BKDBvtI%2Fu%2Fk9ByJTiG6P7T%2B1OKrlcebgOsmwtkr1iM8Z4UzoTnyvsqG14eURceo7DLGlelzhv&X-Amz-Signature=81a5aaf47781bb635b0f3bd091ebcee09b6b47a411c3a86ad0584d9f3e3162b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
