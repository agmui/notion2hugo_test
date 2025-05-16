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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNEXDNN3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtSmXW%2F9Ix20opyWOqeBGrlZANWthPHixPQmOMxghlDAIhAKGYsThH%2Bz52rpH3UMler8XD9Ht57RAc5EpD7Ore3fHGKv8DCEwQABoMNjM3NDIzMTgzODA1Igxk9vvcZYK9RZqI3eYq3APxxlzBGe3vZ%2Bn2tzf5NjW7AQV8dK6wWCLXSpx4JITSX8f9pbii7%2BRmQUGACGtAThNgP0iSa34yvR8kTNEv7JNJRZVkm8ytnkiH6StHUuEiutT66dmbDxIUhbT1KMQpONheSV%2FcZFFk%2BUvNd2gNpRAr4%2FmWgKJdcxyR%2BUdMNkY88kQdbg6lLUt3d53ukENCb0fqrISv9ABlTYEN05WWd%2FEqsv0XP5YpdqnjHHNMSCu3SHTo3PmOyGWPPIfoQAAwaXHdV0Q5xEBCvYLijmKEp89aSyZYrVjiqNroaLMH2zw6yYLvzIkMB6JXRVajpP%2ByfvTAlYDFgI00gEq2K3bsruTJqM8XE3fSY0k7DB%2Feb4HO7wJ4rbvv%2BNKvaKGPmiKKlQYYqKGB9D%2FqL%2F8E7%2B4z3Lnc8KnseK2cwjmhskvccqnHci%2B5X1jFZQj3u8K%2BC1U6gU23wmuJqfEMc7H88FpFH2qnIY7%2FfEbzUKKBtmvOwxdgsVW3gmqgZKVdjxhCWmg2Gs5qOn%2FaCXNTCx2UbmBrO5FsPK%2FPPU%2BFMMfaYfypnqwNZtvTfVF0%2FCDHX4hW7kb%2FxcBu97XKe1VzOn0%2FIb43cLv9R1Ty5j2y1hF8mluVniyupj5tAh2G5qYXnIj5hDCIkJ7BBjqkAdR0eqSC5LBsoFV6PjnyzHpjPXjnYsicAmQwikBKpjiVTMT7Ae5ocnXSANcQ8OwhromkSJtu8qkJv7GC7fizUXt948ixGMeGannV9Cdx3zP%2BWerDD3XBnAR1J8NTb4Buhi73j5OkSBlcyFuHiuUXG9AaXJx4Q7ySv9yW9gsvCYIUJ01M90KjTl9%2BCHDHt4Ml0eblIx0LKkedsx%2Ba4v13GXt9Lg0N&X-Amz-Signature=02d7c949b5dbb9f4f0d03308c7ae0cfb50af3227be134674bf5165824beec48b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645C6QW3Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T190114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7yF6vgeh8cMpI%2FlYgJGUhAti2JPueREXdQPfOkrZpcAIgNUJawhTTMV4z%2F2dP8OsGUePHxb4ARgBL3wz4T25zrf8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIO1br%2FPBDroX3zGXCrcA9k%2FjsPZ%2FRnc80Sb8guLcQLjIp2bcehZfdBtQbsq8ox%2BqH%2B0szPh%2FEw%2B06Xjl3kU5oy%2FIvFFP9973Mau%2BU2xtvwSWbVutnCCYAKvWj1Fo%2B0Jn13KJfy0TN4fhINEhbsdu0rtG55Fv73iEjYLg3BaUPkn%2BKqUkP69l%2Fx93hB1EMA0wDAhB2BMzdecUZWiXW8PgsV%2BaFTwBgkWgqOpM5S6rMlVRJZRJ20agW5an6NaNT3YOllWFjQCLsa%2F1184EfhxOZ%2FkdbmqBZf134YA4v4pnPBgTeaHzkrLGVuSk6wCMutiJyD0RAgdSTga3QvzEWxRfw3qu2KKQX%2BO0nXvrE2PORaNqbp9XoBxVtn%2FexL8NuF%2B5ZBmXYZVeA8qljf2F6v5fqv493JpASvb9cHbDae70x4cjyBoMJb%2FPNqIMXwi7vcuuR%2BFes3qn9X9zijEKAiH1Bi%2Fb2TyEFLza%2FwPJhB7q4YLlc2ZLrF0vWeVUtkAZoJdOOyfPT6RaPm5%2FF0Ld2P9UxkM8P37%2BJhObcmPZ8evzKGlggTtoOZVL85%2BOsHAG%2F5SZw0XYFhflLGqT4Uy8i7QEwThrV0HxHMNKy8UruC3GBmfG4z%2Fjosoj6eMgn8lc3%2B0UCEIWQMjXy%2B5wHEsMKuQnsEGOqUBvD8PGMnuG1%2FXczq%2FFWUpsNqizYnZoakApBLcqfuJjWIKWhSSXlo5CWcd0mf968I1%2BAtkak9rnCMg5HH0uLV050VONAhg22Hxu%2BtsC9CjVOSY6%2B5G2W1F40LPtWjo2NsKLdXAfgvO4FkR5hbBOPJWxPA89Ba1XFiQhAzY4X11r%2Bow12DyAU%2BKhDwzwE%2FwVAFA25xOq4SNbKXyuPSGavX0EWlBJ7hq&X-Amz-Signature=735697d1f23fe102a0999770b6ab99c513bfaed9a9a0a2504c47f1b43d1d6888&X-Amz-SignedHeaders=host&x-id=GetObject)

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
