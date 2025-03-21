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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666E55FGCX%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIA53RtxbwBExfXPsX4wGbtLZP%2FtuHc0z5ralzRh7VzBUAiAd2pCQvCoZSD9Vn0u2A5fTEvkUgjUH%2BJwJchouK2ruZyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqs5QD1TP58HRpaBqKtwDzlYVaptB4QNZDq4QhK8XlAQeswTMV8eAoOzGDK%2FhT%2FyeJTTBS848MtHUWC5ddPzVFm8JE03KHhLXkgPuag9OllJtYCnwOwk3lswP3zOsM%2BIsWf29%2BHdi2UF%2Bx48axzC7AA76Afnyi6xepkk35Sfj6kXVjlh1LRv6TO4mHryR%2BCMNAcoAM1jV5ceEbbknLqwNSU1bk7a5075c342JYBNMmVzoHOK71BdjeR6Ak%2Bc7EU1pAjd8cTpO9WeEG%2Bh98iv%2BIUOqsY%2FCIuAb6Ys6pSTYqDnwqruoawsdBs7V%2FRXV0hbRAtjf2DwRkbvxblS5vKh%2BaHJO0XWDET8mA2wzkdHpKgXEAKET9Ui%2B8aYzzan1XJNYUayHySP3UH%2B7kl5wBG%2BqLIyUhHNezNWbXoc%2BK%2Fy0krJd98qPTL5TPp%2BYnzTtH1H9NMMrABMGBICS%2B%2BwhAGWCrmUrSSMZqO8adB8JavwdqLfcdHUuWJdxtsNkYJB%2FeHzCxqcVVHiDT15Exe7n6kY7xfjtk%2F2I7ubKEYyYNCPYK5jaS4YCYAbtyX4lh6cWiPxbb4NBe0X0dioQPy9JL1qPgE9dhFuCubmX6CtwuP4Id0kKtoMUVv6Uwvp9vMWBB%2BK4CxqI5Lkn7Zkyp5YwxLr1vgY6pgFmFUl1r7XldxrxJDKp4fmiaokrNRN6K4iWgpyo8HMyEUCD%2FamwNzdSwkbMuwcIArIlLI96gzWHLT8CWmKeG4q3dwdxlzzA2WjnM0d6KUciixSN4%2F7YbrA8vDyZI6BtAduIjZjKaqDwrhBMtFUBfPpU4q23li%2F0RORaz4RRvhrqzSa9Pl3HdJmswn0YChjPLZehOmsBwde0Hl%2B9tUzL0G4CvQGHg9UF&X-Amz-Signature=29452328b5e624effdf79304f3f966e4bd3c848b9fa310ddb40e872907573d9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ALNTR4%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDXEVlbf5gKlCyKZmDtzg0wBaBIxM2nLkGwZfszje3YTwIhAMg9jANwPHGozJmvj4Amfbev8B8hUT1Ed6bLkeA53iNwKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzruHHRKTainfUZ54Qq3AMQbGcTxNpr63%2Bz2fAW5vRnU8WU7SoTS%2BOW1cWLwdCWoAKI4gt8oyCvP7OrrEgr6UkGQuUjWoRgu3MR0Ahk8B4QXXMzNdxrgWnh12jYP%2BGPDcNydjkxrJa%2FV5VqQa1lqXa0uPL3mNATTMxOZkQIvSGpZEeRoa6TURrfWV28QVyiEgTtpsvMQakRnLMrGs0qDKTSOKVyqaKliQnHrZ3jn5h5g0M3dWwUP16T%2F3gDlPkU5TvqrjIaZWGAHXXZLY5rMWkngubBa1PSBqo7mFCN0i8As7h84lA%2Bky588bjCmnuMV0nw6AshPnoY4K0DqIJidPKqFQDhfpT2XZovIAx1ohAzYFbT40WLy7S53eViWSH2E4hBN%2FB1%2FcWOeg9RRxvgLGBdf82zbRDYbZhlPuVvnS%2Fbp1VKo%2BjnI5gXmedyfS30uSjzm1F78Yzl%2FfhyJx%2FBTxGufZwq5AZitFBULJ3FU18mrlQjj7%2BUpsNQWer0gG%2FhZdJy7fni0ZK2X6j8laS9%2BYKErufNuEn0Rrg6IUHodSeBcUii5REwJOgua3zTqS4lyGkfAeIWC%2FihPSL4KLzcUU2c261YJmK5bkScW3Qlbco8Da25%2BQtqFzv6gudifJG7MuUIJWPeuKspmE70qjDFuvW%2BBjqkAToppHyFL66DyzzP7PKseGC6A%2BcdR%2FBLWGb5I%2BLWa6L4rlv4GlsJ%2BCpKowPNJl%2FG%2BofZiiUNMVGNBkTRTJC6Y1niL1x4Ud27O5N1cKySuOU9XyDrRerZr%2BeQLPrhiR42DHp4zOUS5Wp9laVArIw65Rmngtip2LwWWQlawOMPqaMsI2Rwsd5G5THreEDUvmuB5u71utduFIWbF8ZR1bAaHeBQ5910&X-Amz-Signature=33940f3656fad8947de475ebbc1c396c7f47c5f1b5077b9d1852d44d3a139d98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
