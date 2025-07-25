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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5L2VIYU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDA41mYAK1evJKKd5AjuKhqPA2LDwr8a3x%2F8oFQLDhGCAIgdiydB9tYHx%2BScrUG6ab2aPJ%2B%2B16xpKgX%2FCSDDxwCqIQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDIChC4HYcne%2FB33qDCrcA2wkZolh9fVBVuP5ukUK2eNfI%2BPH2oaN%2F6KUvutOuQZ4%2BTR3BO%2F%2F35ExRmY6vujNxMP00ENvOp6pfUSgSx4dlnVRajOpcUzooguuSlOWWmhucTiRabcUBVJ507%2FStLDAbM5fhdJayBsd2qMrd%2BxItP3BrTBPXmkfCk4XSJIAERhawA7zuhBGhCztrwrT%2BDOjP8ii3nPFJxz4yhjPMrQG6k97CLbS8ZHoEOOQQyfxcc4txi41XAdJ626PQZ93rv6RTNHHZx1K58ES82K6qKeyVfjoMVKugfReYabiPyUXDDPJ7ggyPoCTXnC9eVWqDGyIkwzThkYVH%2BMYLJY%2B4LLZ4BF3te0mAqpAbHPQFgIMaJzgjV%2BN08gYtR7gQi6VWIPAocpmAKVZ%2F%2BRBbN1VV%2BxeKt3Evo7t5sQJOxWyv1hbw%2FdopHUAr4%2BVYrgMZGAsD8UyghqZVQ2jSevQedMvZBxqRX1eszEeJEhKLfY3d8oXeVzg8AGZ9rU9xVSH9kHsSct6zGGXl7MGpDuEVGQIpSJj5jIZZc3ym4y4OnakBiMKrpBgTSXeWGrwl8BVSFylE3MVIYDcHUAdqhS7B8nA5FJe4sAr3U8PVCoPW0G7zsST4CI%2BS4WMfYuFgiCpaYibMMOGjsQGOqUBmJn5p89ePCkLL0aeiaNqwJbqT6o5xPz%2F3f1HZs4Lb0tXw7bi%2Fn4acdrCDVDtNB5TrHbO7wvaTuLkPXWFFkaCp4uDK10lkrZgULv%2B8nJdUvhkXy0bTCXb8%2BVTZxc7LiO%2BPjz%2BORjwo5Uczf0wnl0Td6dssCCnEpn4M4XVRbRBvNxk6Nw4vfhK9eZO7rPqszOYMayKUl9BYMGlVvA2HwR1Nc6txgWj&X-Amz-Signature=6025967558e571d0a21db3ccd6506429bf18da6740dace355bcfdf0a7fa7bbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466777PWHTP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIGYqB28q6%2BzBVJrpKAEiGjcdJuYXcgU%2Bq0%2BwI1wvLCTGAiAKvglQgM9JLKxKj0wjTKvi8oRYwHPLQn%2FKr86gnlY4tCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMq8iOIV1Ac4ATh6brKtwDBX5zLlJzQ5dPLG7rEhqdv0E%2Bgf9STX2xbS1YflRiMg33wBV31SqEAd0BwVTUwJBWe0rY3KP4F%2B1pWvVEGSUJNH0RUf2CgJiKh3I2oOvQeByAqrw8F1V0LqCKzz0bCjlSKdH7Q5qRyc1NxEENaywhFVep0xQ02XcsoA7YdzyW5zeI%2FQvsTUw3OANAx%2BkxlQvHWUPyjeir0YEUMgyMkOPbrEBGe2Q3EovLVQK%2BkNI9juDnhzFgRkGiKuKiz6JSC6useCAcN1RQqUkq4rI1GUOMCm%2BTNeePeFBXY%2BWgLgaLqzG4iY3N69L139asyVLJ4KyswQ4SBs7B4%2BW5f97PwaAauf%2Bkb1H45oLFAKFFcN7ODRHoVBomyJZykC75rdgxF%2BHlgqCkjUnpknzeVcI5O9YDLmXhYlrhvOrjzOzP3BWoKh0VHZQE8i006SZQthOvHcixRjUNtoK2gVxHF5pzUPwzJQNnVvMJ%2Bz3caJw6WZBYbnLk2KhhcnYhiRwgC6VF4bR0DDZZbFplmf9yrS4ObDglmmUnaX1rd2b%2BziFsKeQkB%2FVKMN%2F0eH7eWjbGn%2F47Ycxpjp4%2BZp8k5Ra9ZNRafkCuxDqh4UhxWLKs%2BhX3W4UmCNLo60kVvwGFQGNekHow0oaOxAY6pgGbAwU3MGwJJq8EUAamHPstoyTGgNXRx4uDbM3NpE6IdeCFY0wyOmKeAbi4yGyegyIGl9tN8HMTQEATlHns5JPnLWFY6qZ%2BxWyTOufmKZlXHyyvMXFDvUdJTpCoP6wi2jyd0oVzwEKwLOHI5MiwLQXuNulFjPawq5BzJ8xj5VoJL8JbnuU6%2BBC5Nvm%2FGOwrcVHuahyo0UlFsLK9iWJI9MsXSfemB20H&X-Amz-Signature=71fdaa2cdf373c8e9a2b3ce31e812e3a71a14a206155b296494b6fe4ac06f8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
