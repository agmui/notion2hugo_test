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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466754O3FEI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0BpFlhgzBDlXndkXrnFAZ1g6l1elQNwVMTOSqOkFwhwIhAO8SNuNkhWmpnsSLRyFJA8hXZYXNuSS3F%2BVrUgT9q4ryKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuceZKaR2gEcwFIp4q3AMbiS0CG%2FGeieHipGoG48CmA%2BqlZIjoZHkA1sAVjWQKCWNlYnkrDR%2Bba8LfG2yyqNHdyXGaTpDuNEP6xNO0v5kHKshdykXj%2BChsZZ%2BpYXecNwOgOpYvxZ%2FOyW%2BB5paBsNRyD94h7K%2Bto9dIG8UXglTwa%2FN0FGAFUgpwI94%2BCKPTP8cvFYAxAC09gazeTrnC5mbO%2BYKBvv6OaweL95bJoxmkKq824B4iSVFYo%2FKGwnujXs7FFTH%2BMunQXEg54OBE%2Bl2Cqr%2Bj04HajXmo0L3G6o3gpL4miDnS6stlQrWkGt2dc0BnQUqS1Q2qbQqH4Up%2BqzUupjyvvi5SFtUPbj1OhL0MpJpYMHTCfSFUJklQ6RWqCQmikn%2BkaIF4ej5LXVXypBaL%2BgRg4rTgNI0S5NVJu0HTrVCNAi0wQTyo%2BVQpNIoxUcmB4SwVllCL1m%2B97beBUS3t51ZWo%2FdUk4XFDi2GvP4vFC5sea958iPbylQ9vzKqvySnbiI3PsWeqbjiuzEgyLXDOJWonOH5qEaD3VOH7sYQVc9XOuHOkya5p1HeGiL1SXH%2FeiBXczktsl4zpLzvq6pIUUIbpoJHE9mGvxPnYKccM7VlTxSheGvrkFLlmNetBxOQ%2BXKI7sYxg%2BVCfDDz6Zu%2BBjqkAU09Y7CWGULWQ7%2Fl7nkeCsI30HOQq4N%2FKfG5UDkRbJdfWZZg3nKPnqrFdHVVbjtKiLa%2FJDorbUes91xkTRY70Wxa3jz8vtCO%2FcIcZ9uzSXWnp2sqRybv8%2BE9Ahx4CwS0Pj0eyPg%2Fez4zJy52kD%2BEC0Ca4zMnwqPIHvk7gogHPYJGxEfrTa3P5ffgslqP1hqF%2ByJMKeY59an4sHd4nyAAX7LGIUJN&X-Amz-Signature=78792eb47920d38e0c4cfc8954bf3b0d6f8c6f44587ad44ae640a5c3d01cf30a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3GRXQX4%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1gcOTI%2BN9VPyuoG6UiLxJP3QUjWCtGf%2BPMR9a7Ga3SgIhAPUP1AHn1fH8PzLpdQxyZ0Ufw93nxbESgGuCPY2KqmAaKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlaFA8DYQtxrciyK8q3ANkDI66CsHzVTdBIqAidZDxFH3wgvkHlvlCvYcD3htEcmZ%2Biaj2K2Y1w5OeZWmV36QOOdGqKt%2B3KDcPCETbMpyNTObEtKy4YMmx7M6QwS9X%2BBQOHBu6IlzDQf8LFBq28BVX77c2G7Ym8g0Y%2BODax%2BOr3rNREM1ZtLaXYUfNZRcxvBWPOoUSPj2lpXMrOFNvi4KOt4Ae334jssoUur2xtDzKjxj3DNq0hdXhXCG48mXf0kuHOX00RTn%2Fkch9pLbGNgbjTrXkHyAhXwIItA9HUiDXhgbLyYDDhH48copGogSToAIPuiJCOB%2Blxf7FcX8sSRRJaf1yDG1h3xhFAdhQxgEWiLnWMVEWydoTWlZKzcwenKAAgBXsyDby7XfZGw8debQgO9%2BnRozu2FmVm%2FcKRki%2BX67hMUzkz4Gq0VTK%2FnbwXR%2F8sbfn7FSn2egPI2tlQTOTy1AAXyPpPm1Hs8NNJNoGKbQext8SDgjPbU5J6BWpBZafueAZmSVMMmOglJHjBZaBIkTnjA5uZ1yUPsq6ojqNUSxXXxTebg2KykFCGEnizvp7lkNB1hqyXdtnLFeQGh9TvD2iL3kUmWJgtHEbUtzqanZj%2FiL8eZqWTdzzvQBb3Fj%2BGUMJiye6HWZpwTDU6pu%2BBjqkAcdJUky7OpWAKqfrAxl15Ino06LZN%2FEpaPL8wgZGOmXzlLLsqCZ%2FT4FpwKM44FwzeSuVquF0puXc3aJxjC8JWteoi%2F6z3gzd51LuU28WzP94f31g8Yt7Ij6juoovQ9NXaErMvsaur3KZ%2FHqR5uz%2BEDmjqr1zpzwI%2FvmkyuYw02l0oCx%2B9d8ozlnqMxnoH%2B3pIVZQAXHWBDGF3vic2KLIf0CYDgAM&X-Amz-Signature=9b0189e7b637bab0d1f3e08da1751fa4be4acfc353cfc197c574b425288af241&X-Amz-SignedHeaders=host&x-id=GetObject)

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
