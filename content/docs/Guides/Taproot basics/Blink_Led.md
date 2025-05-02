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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFCW5YMD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIFqy3FNBRV5H0CA1gyMVWgiQBtzZZPCNKXqAjtE0Po%2FiAiBCwwNtRm%2FPBGOTVMQ8UewDhiwZJh8W9Cej%2BG0U2nx0CCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ6f%2B6sPA2dK%2FrJVzKtwDPj13KDYj95vfcpqdcs98yJKGU3tAZtOm6mrl006%2BdwquaRPmdY5B1hZUACq1vfbJzlufFkuRJ6ibFLmUFo%2Bvq4EkxQLK0BpzkszFJvLOX6bzN91vsbHbsXNtcd0lab67ZVeXH8%2FFQG3mfzM4NEEu7tM8ZG0Kocwnohmj9bVs5tcPpEPzh6spht8BRvFyg4GW5Bjllocu2L7rRBDnUi%2BnDpGU3TZA1%2BYazarr4hNbbU3sBj3Zn5KSaY6jNirccaJBW2NeF99ilTsKTJzBhFsCfeEC%2FxEUfes%2BSbhU2OIV5rbQrviH54SfoAcQE2EP5ePwKhMoVhLB9xpu%2FuL0wQLefoDnr79sXNA%2Fds92L6rab6%2BakGKOHrBcxD%2F1UcMWSZF1VgcHtUmmqzezqxOhhfmRHlLtbKW9MnDMvfUJHhNulRto3FsvdavEhSMr1DAWYiBv7%2FgltxHIUE%2BNlyuhhTDShu5LtDXuJ0PF4Alb2JwJ11SFcvKlZfF4LS5JcJD7u8zYemeUlAOTFoFm8UkpWpdsTbVvs21Nk5IXKI4w0bwOBPRSK66ar8ZY%2BE%2FaZsG1N8RRBhB%2FZZ9wm1ChDQV%2FUhMwXahpO6oxfctSW5QawlN2tzGu506bc4gc4PhS2AMw5r3RwAY6pgG75j%2BYNSvL3wiuXjeZS8PdJU9h%2BKHQGNZf1jndsay8H9gETM2Hkeg57PLba5V0GXEf3X2nUKWZUtjQRVhQBkqEF2%2FYzwpPUcWFmgRSFIWOhY3PeOnA1jJTPU65O14oOPGMXkgPg%2FyBkW8LldSK5H5gPVjazRJ3ocKb%2BJjaxf1jb%2B2xd2YvnhBQL6uN0AHAX4%2BiXMThhN0L9XKh2r4sMOWLjzOtZfkt&X-Amz-Signature=96167c9ee07ad57df93ebd1a43a7e99eea4624a43877c253ab24e5b9e96801fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V252LLSN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCRS7ZlE087LUTz1elYoSuzqtECHTMPwxedmspeGc2cgAIhAKGpBqAuO9g8iS7mZbWortrzUXt0keqOmnmYhSnQ0FCDKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDAHUbePEUmJLTHNAq3AN%2Bxzgfl9KLPB8gynTkGxNt6Er1Wy5p5xe2RMYpEDJ24yxJLIc4WvhXeXap3%2FM%2B9WMadBVwoepK9aJjMlc%2B6%2BYLsmDCQa3mmj5rH68hg8f7b%2B24qIGmmqoivYFmFuHtHeI55zFyaMAyf0UhBrcribbokeUImd2ninD2dOYbXV7gRGAsK6u%2FjfMTIgdPriX%2F5NZBPFP8rcC3ss3jYG%2B9BMOfFUQCFV%2BGQmR7x%2B6icKedJbJyxPdpO7%2FvXuwvMiMd1QUVa%2Bh7synG69eLuTGBMb0GNg%2FN6Q9iU2cI9yqWwcYm%2BmQiwIDbIHdoAQebJe1J4N5ko5VhQhjpe%2F0APbWpJGPlzFps4OZbKRekHWDjFn2gYQmACGSvkHPJUjoZBMg0muCVu9siP4qARfTn3ZvLqo3Q%2B8K0Pvq50yYZGv6U8s2YJ74Qswj2vMoHbhkUKD6povDcMFeTLarMrzA4STq2LCVP482rjH9rbJ4uDM%2F7UN5uiCkXLo6M%2FPXb%2Bmo4m2r2h1e7g5dyMLV85%2FhOOP80ITvS7EP4EgBQ0Pgdp6rqgHLLitBdDY4yi3KzwMhqaTluLNn9SL9S8nxVYw4NS4lnmJB0iknpgfCXjqYy%2BwWhKm5mwcw7UajtfrEob5V03zCNvdHABjqkATiOTz1zVgQsIu0ZYclfQgzzPCal7eUht4bzaWMWEGY1fMMnckKBSry2kMu1JgshDwCe1Za%2BU1TZrQZPxvAmpaSQU9lq8ZDv6gjwIlg3eVYGvI95RkM9aRwrKdgWIGcJZBVs7LgTCzg%2FyEXrx5vpxHih9bHe2fGgwPvupBLdS6k%2BfPxXnicRQB%2Bgbj2ucr%2FvLxikAmi3hsweSKden4Mk4hTsD0wl&X-Amz-Signature=9ca15aa9357f998985a113444b5beca88511f3afd95f0c6cbddb908059af72ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
