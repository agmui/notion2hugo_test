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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IT43N7K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSeoCoyC9oFWRR4KppINyOGBTV9an2hYpBGcfkp0coFwIhAOYJYuBwvfsmE3yrA5avAC05KYjmg0UMiMinsvAxrBlaKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FEsMa6W6X0KIqvcq3AOnCLkJeu30NVZVb9SP%2BH4FQ%2F0U3BrLdi9e8ra2vt%2FZWoou0xvuIpZyRw1tMCQWoIF3aWM8MMg4O9HBfvyn47pqto2ek4nhL4Ju5NwHzWzf4rz8JOzqoW0QpRcg2Onap0Z9JF0CbuYBafQarV6q5ejoKKN%2FBgm0%2B2Khd4VLkNfKgEw5NtzlyEeO%2BufMNglTK%2FETub7E6kDNWGnnkLoTfhqoId56vlLmFAfm8kR1N0tuv4jrk27SqqtPgIhF3deNomw8wLYy0F8U%2BQAAvRdeejGUf6G4Dy%2B982%2Bk4XTsckQf1gNXztX1HyzNv%2F%2Brpy3XpoIhbg3FzonTDWijWqhZEps0X8NeskK%2FsAnOS1lrgq9Hdm0lYjrYXu7%2BFeB%2FI8rqnIyel0YFSohfGJLk3XuNxJ4FqctDWQCF8B4U0s%2FPRyDB3tl5sjgJQE2g752QcggaGc1QPQCScCQRykKir%2FLgoygFSkjtzf9s45nHgYdf6CVI%2FTuqFh0lW0iaHkxIgRQSCDUmUkbIeYVVmx%2BumXRllQAp6V4QambGXV7KtQ0V8f24ze0rWoJ2BJt27KeYYh26n9gQycrfS9kwoxh20Lg8oorElrSL8TClKUG8g9UvM1WZViJBds%2Ff0WBeFfECATC%2FocjCBjqkAXae8cniOKovdvvsTIEJAlnndCulPI04gVMLYumgmJXNidY1AtuNmdlTzjHuvcJkn9cgwe1GtVV5yzbJttkxyKIIOzlG%2Bir0hOjqLFJpkWyoE9c8cRb3oCOxftoYiV5WKk73Ihxyuj%2B315HDU6P1uj18DGNxrABcjk91lqbY%2F9x%2BSm4bnGOW%2FSw4iAbnx1B3eYRpufhr1GLHthvvt7cvWBopNprf&X-Amz-Signature=86d5b2dd922716748b0e90959c9808c812813393f8f6bc5cdac494a79905f6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCFGJ4A%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq2N2b7uoiOJbD4aQVd7UvsPpxUuoKQYW6D9jdy4fmmAIgJQtrCSLW%2FmDbXQcJ7u3RWDj0cmhQ1dDGOfowsE45QjoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAl7sM5hblpBhScT5ircAxfRQCPpgKPvdxMhbjIs3GZwJKfy1nGQ63zW9v0IulHeMhXpHoGg4WMa%2FZYjl6y%2FbYeqQpZVXyGw2PhmGXTuaQ7iwNRV7jgxNHDMcBjg7SBG6DIyukXVjyCBa4BdOKbRtFLQT7KBkA0xGxbDzuCOmhtq7u10wvSJdzwEPqqlvq7pXlUftHYPkIAQZ%2FLUsS3FnaDF%2BTsycVSHl%2FSdlin13pRPd0fLaxZFN0koFqmRrzBDuT3Wh%2B3UhZ9MGGNKMX9389GLtvwYQCnw59LalTDoML56ziTwulQKpGhBie0eZQT5KMnaMDufFrSryQorABlNxuhI%2FnkMUOQ9lH1zBMozPhSoQ0cDPLicMq1%2FmP%2BzGy%2BfptHW3xArQQbKG99ezLkhWcjhIBC3smae%2B5FH4Z7tbI5R4DdSjz5FyFjZ%2FRKYq%2FmSOnS2ARBUwdzxLx0Lv9Bm5xT5uPczJLeXcGdCtyNX3J%2BdIbThj2m9wpFS00gdlIUH4Oz%2BYWFz5bOlgR%2BqNzG%2FD9uovMz%2FwvwG3RhxsHVSG2SwZtvcLKlh8vh%2FuHF%2Fav8ASTF%2FMlZ6%2FcvVt3m%2Fj1%2BQ%2FpM4uTl4yy4B84va2bLf8GU3sV2lPbGAI7EfRhSRwmJ4BSbpVxZ4lUZaxXzAMM6gyMIGOqUBCeBpRVtvz3ECpCCVjSdsIjhOdOXPPqz8vqJhyUsYqFv4Z5uviwKX6NeH8Mmaoi42x0oTX3xMUzkM2j%2FNMVU6D0guUHFy3zRfGGOoLGIz2JMdaiCAK3VN3vo8gRUZm%2BfBVjSN5aT2%2BpD06fNAOQSwSb8tHjDMoJXnO4MJt63tLNt80pTVg5wEtBMt9CzmJI52dWBVhgvw6%2BJpmTJko6aTtv17gGzV&X-Amz-Signature=1dba241d02ba2141845a2dd41f86aff734cc11f651f1ae65bcb981682beb79d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
