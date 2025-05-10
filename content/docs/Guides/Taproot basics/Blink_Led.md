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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKCKRGZF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGaNEPcIOr5V2IptU2Xzx4fRd%2FfY5kC0BkWGG6eLFrKgIhAO43IJH0tbw%2BqM0Bg5LIS1wdiVHhtg%2FfTzpa514if8c%2BKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdIE%2FbxUu%2F7Rw9VqYq3AMdi%2BbOhSyUeQ3gwK2OH2ILQSQWE2aQQ3adrMVboIBfYQQ1t2OTny%2Fj0nDkRhN62ONw21zl2fp1DXeVQnUgJHcQDyOc5SBLzaVumFIYeVu04cfqz%2FfAcGbeB19jmqNzgmZYFr76WhLrlS6ml1DvHy8cGeYtdn9ASq9e6kYOQnsl7QCg5EeRrikLGsQoYNi9CzzQhySzeDXLgnI%2FNuWtMYKVt4g5igOz1LtEEZp717nwePaszRWmVoSso5JvT4Y8bFJWy0HYFujaf%2BArEF8w7Jz8nGdgryoHyyF%2BYqc8ovumHZr1xS3nsxsg%2Fjl8CjkQeCBDh9OfRnZWC9S5sFS3iA7cPb%2FdlSGbchdhMCP6IyQr5lbc0FkDuin9byCjOL07Ahee4TG8jdseTFO%2F6RcTGlIQlLsjR5Jh%2FLEg0NS4OAZ2cA1SMgG2qoO3Kj4uMlhB4%2BjkawWhNFcLpp94ON2F3d35v4WeqLidLBkAnd968dtJ5GsuOo7rRs9PKMYLDWWna4RlW%2BskyMl9iw%2BZJE0q868K%2FybYJ%2BR%2FLkWwyB9LlnDA854fr%2B2hJbxL9sPHdNul2uufpG8z0acmYotyJrw9Lclpsxmxb8UX54jLZNk7fYqHQp3N%2F87f9ULbdXp4uTDmoPvABjqkAeHe3uRFAlqhE67MWBhzUuGMTEESmjh9DkCG%2Fvb6h6BQLodjU3ZZ%2FvYRU9H6d2QTGUIkucXSm7ZI96vQKwJdux6nh%2FXMfgZTaS9gahfqXfkBO1MFkojO9Mt0fo09Cq1Vcwic9thv90YP0uKqjahZGx1OtSZ1JgIV0kZrfloKJyNPc4qHy9f6dyNkjPFEwZsEUYDn%2Fa86e5Rlh%2FDhPY1T5BQ67GvJ&X-Amz-Signature=84c003be080ab87d1f8bcfb554929612fd9cd2713e385fbffe3867d2c91637e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JAX22S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T040935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqv8VuPFDr%2BxidWUqLa7l5dLgwETHxavE9a53NEgsZtAiEA13MMDi%2FlFbR9JOuqhF5KmpnD7sIHcLfK36LhlXuvug4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIm5nyTuwmBZZ6znJCrcAxrNT9NLeekM85Uf8e3wyxYuw17DIJEq5U2yfBuob9DuhxIxqOkjfidXg0H11867%2FTWiNkRHUO55J2cz18FbO7Ohs2BL61FjDi5ImlXa51LaEmNgCB3Y8WcZsGC%2F5Zi8DF%2Bv7Vlfhk8rHEZ%2BH2RXwpdWDr1aIq8IQ8JgNzQTYsaFhybGmDHPvCSCff6x9yxYkGpR216SlHYRYyMlXQOlxDOn4NQWoBYHPoS%2FmNXT9KJRjP5ph0LenDLX6u16xeEc7CT2fdMh6Hzjc2%2BAEuoWMqD%2BipmFtdPmBagqJ0yV9h8NIQG2WNrJfdgBKd5ScpIjs09Gt%2BRq68JbUu7BoQmiKNhe7swvppHZcUae7PwRcz7cnh4ADQZfzsg3b3jsgHxBKY5NkPx576538bJTJp54G12fADEW2gFaNHw%2Fv4k5h0dUjsMKt%2BU99b2TL0ixR9nUq9B%2FRM44iWrTycA7vVHtaEn%2Buqinoae5XTRriuONpvyUutVUff461%2FojHVPuYnMe3krsbnnEmjIK9WqGIR%2B1gB9WQFgXOyLGRCnVvP0JhHkVhzD68zLzqknA71IbediOXQo4fPcJsSLxuLw%2Fy1Knm%2BG84lppjHQ46dw1NARujVGV%2F2tfKxdNyetMuqP9MI%2Bh%2B8AGOqUBamucttVsCPJgxtxk7bCrImw8xZ8tdAFFHURhpZNK6ZLf45P%2Bb8SXLvKYXKEmnu6NshNDqd9DU%2BPuuwFr88oAU2mtQus0dybyFkIV%2FZMHxKWwwE9X2W5BhEXGpgtuVcfjwpDncq7Uv9jt6CWDWyA%2BDBWirV1RbNr67qa6Vfth2Pt%2Ba3VcAWfG%2BAOdZUAEEYGsRiiZpSHrSO%2BydHBG3WPcCeyHwnvs&X-Amz-Signature=cdea9a9c866dc8bbeb0b6be1542ea49f7638c788eb996b96bba53c01704660a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
