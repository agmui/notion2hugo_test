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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJ4YWIB%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC9dGkBzhUc%2FV3nb4dxH9akUXZaK%2Fy29ny2gV9R9VZRagIgBTVU3Uz0Y0W3a%2FxKqsvdsXIq8iUE5rZxVT9VsTO%2Bll8qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbLHX29ujR6EC4FkCrcA060nDjPBRNwQ%2Bt%2BQ5GBxuCcBGF93mZ5w9igRL%2FKQe4KnYG8xAnrEqUEUxJR%2FL%2BnJ5M4gYxFvH0uX1AJoFLCOp6wd%2FpN6IS5XxSHce0mX4b5eEpeZ6%2FXzhvyIV4RCsC9vmZbhn8z84Pe2H5OiZFPJUn3nc0701hdWb0345ohadS7COjIl4%2BhGQhzJHnZ1ye9FU96%2BBR0lLpwp8pNMKwd9GU9S5zNdI5xGpJFAE6z8PSzP1HMuth%2FrrXaLmv%2BR%2BCOqS4USe9%2FjFZRMwxq6tbT3gixDy0xcRngDP3C2SLcYWYViaH5hnAV9sZz%2FljZOeZj7dZRBBU%2BiTFdBJpMbmtCAnLJXMagJGRFA%2FfUe25F3SgU2LYRHYWkq71jqmmEFlnEQL3bRgCAMGEINejTwz2nqZC9Rb1tWXcNRAVaAS1dANr%2F6qQgVJp086C66jXMJxnrdDiTpdvkcVemNt6cU2OiSgPM8591Ha5ubYuA6t7Gdm9QEfS0tA4Qmw9%2BEyoOBRYmWfmFu6G8%2FkzzkvqECDl7m9nKgh5kmsXS7F3As6PKESS%2FWNEux6vs8C6Wbi0M7hvFTx6AfW4tO4XSeB7zprSSy3irL0vF96ZFMayd42Jc5mnhloEOYrOMiBp1sbe5MMy%2B7sEGOqUBUm51LEFztADY73ZOGNyUjjFo9EzDYN2CZo7KzkIPNaYgY5%2ByJi6dwYitHADuZn5ODww677yLKZ1Ng5xHjK4Nfjcy9hmGIwpTZv%2F0ujvhstpw5puASK1eukSkJJfkbDGLiecxygN%2BbKLd7wwNQ6CyBPsCkgedyM5BdIHqEcvkKTd6iJUDOpT9dEbymRzGqKnOeu8m%2F61d3Zs8Iq7NwsLdKc4M3JUN&X-Amz-Signature=cf5fa6c6e0e5cf6ce18c92b70cd6edf91aa3516d0b7ec8b21582679f13a35aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR2LSQNN%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDZMUqMUS53Fijva%2FDIIuR0Z1b8dSIE6vupRKaMSDwY%2BgIhAIleKLJtEsj7JS8dfySmT5BipDvAZhqMw8dGj23aw%2FVnKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS%2F%2BvPnjimwZ0Xx5Aq3AOLvu6HnFoUeR6NaU8NjaWP4Nb7gl4%2BqfWqve9ENUuF8GuO0EM9J9w9xV%2B%2FmwpO9ra7cRhKIynqcHLEVFtrxlB%2Bgh%2B8LYADWD3l8X6N6p3EFspDe6j7Tq1b4wOPcnRGkO16dBogNBd3WG9TnoTYobEvEwnWU2Z%2BJ5hysc3a8iwxeo8QipJgBYYIAqENRzWr3L%2BLW89dG1qf%2FJg2dcyync%2BGZmxQT6Obh1FYuXiqMyvP0tkB%2BnYdJsOqzr%2FqHYaql%2B%2Bi8yK8jORT9qPdct7EU2FENtdbCpKKnwpCshKjBqrwxuLs4j3kUKGu%2FIADp1NY2o3kii12QuaSCxBeejgHU5FHNrFmHDRiLlDb0aLF0bMTr5s6tukrbycFvMEN%2Fs3FGMU%2FI%2BJjJW84ZeMOywFw7HjQOkkNB3e6EqpIyUKtOpaXhrUK7QP4XSPMIJO9NaSjmYlEskqTRFEPDybE97f7fpCA390oOH%2Fuxa35X%2Bi1uEfcYt1lVHi4fHG55O%2F82h75h498H82G7jclUXJFAKK4JGlbkgV7%2B4ZdDj5rJdAcJq3F1xMXfiEnMU6w7kTDZQJUqxk9DqcOmnioOascpd7RLZfhJHW9Aar0lkocmNPcxFESy4SGiDkjrASaP5IFhTCa0O7BBjqkARb3miOvZ0dE%2BvzXAusD0dfLWGm4lw6j6PKAFTQ%2FGgMmXg4AKc5oltN90CsB2y%2BfeVog9u0WR5kd0jZsAuUtF%2FlSZKnRtnw38Yuj0kv9oAkKRJr2GzGRspwK%2FdAnmE4Vl9Mpfd4gBRjtlOMtZnMqSvqXFUGc1nSEB3rMaHe4jQveVd06oEbVBVJAONB%2F27LcdvT8QhDds6kF9o9i6NOwCsFPPFpy&X-Amz-Signature=a0e7e15670228bfc30b53722509f4c1942f1a731d3bc6d552cf6f066b0778a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
