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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWQBWMVP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIGcMuEiT5gT5qKY1LQxGugSOacHQ9PqkVDu9le01gfHHAiEA0ua7TgR8fDST6Ufq69DGISgc9eCwM7sF%2B55c6z%2Fm8REqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILVqoxstxekY5pRTSrcA6%2BmoNMZf3H8kNJJiI%2FPPCB%2FkiCDNehLPbve7LAp8IcroFs16NWnAO%2Bxk8fDNmofLAMNX29ndscLpWUogrs%2FEFcwmE8vgRniwk1a%2B4O6blGIShkzK97rD3TVxR1nlxtZkKN6lOu91h2OzbAwoEQv6z8ziF922wePHgs1KZ143EzIXEXEkbp31Pai331iauMoOq4SXkTrKarO08BzHGehqgAt9XSvNxEodc9TWRl%2BEdf6KPQ8fxKs2tvY0D%2Fikpl7D2MrcAiboQVqG0b19JNfbpqQ0GPpHhBdycPXPXIx0EX3JFW88CU144YLdzM5oedEHz5tzeO%2BwW%2B1KNgoIrawVmxqQc1qV2DHwgr%2Bh9XOAFQQXshe9k9O3%2FrK%2FgDQmJC3nRv0F%2FVEOBk5wZerbtpOddfaL3pphhxTyyv4b6s7GtSrXU5aKGtXBwKmVdUWfWwIIWUY5vW4MCyTUsubyxwOn8f0pyOAat27%2BBtX5vx8VQvZKPIEblh8%2BUC3p0uhiuWpKd8kDjyNiWw%2BqEccGNGVc1TxXeTcdXi8jI39bbr%2Fx6YXbZVPFvXHrqNyAr%2BcR02P%2BmU1uWuPhb0NAGyC7IFJlI1H5796Hfe7%2BX0GuetGHM1xK42EWq3ToXj%2FeaCdMKX61cQGOqUBD%2FdLr1g8Bxl%2FvGNjF%2B5WSalcpITf1CCgZL3JD9W%2Fq%2FYtyMD0chzwjTth7pQllazSwNkq7naWTx%2F9raVnnSlNsD0%2Fo6c2fvxTZY5mCuKkz1UXU9XIsrNCIgGciLYDJsDcEpvaREFwm9Te9NEpBtKc3YSPAeHE62eWLIOf26yOojUtfHWpUVHYwAKBKURhuwPFhwkP%2F2rqI3Ded2LJUnAdxBawOl91&X-Amz-Signature=5d38d0c814e17278305d66edee531d033b16bb3f60991c9438d2d9f6b59766fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDUJLFQP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T051950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDjUDxUJXsXEOmUuGnrrzkV%2Bwf2OZkOUpCSF4SYhlotEwIhAJ5hVQwIj454%2BjeLSpIZs3Vg%2BSyML0aygLBkIu6H7FK5KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxluWr67QkaAWnZBJIq3ANZyPY8fZPXYx67k4W%2B6y%2BnRnfeVa4jtL0GMrTW3Eq03CoA2we0Mx22qvspio4sc6OofRTRXi%2BgGbvflRUlzufpk2wS82IB%2Bqwq0A0Ng9Jv6Yn5RuYAko0LEQObNv%2FmhQx5WlORXWOtglo9btBlDzm2KUIw59sDLJ8W8zDcprPMRCfk73gfAQNS74wiHWLLi9NsUW9x8Sh485DHt4WLfTRGCxgS58Q%2B5fwYv1jHL9oWspca3%2FCe%2BYPrcCDNkPvH1jiTs9VzKRZQdC1YxaIEhDh6Er7aLr%2FPKkYjz1vQTgYzj5oDHJi9UhPs0JuBdRXndhTvcRjh%2FgY9Ugc5qAOmPz0rRBQlvLSlESN3BFI0BRoO9kKrGubfuYQfCmRNTWJh%2BKXfCuJnFXAuMlBu9ylffq%2F71%2FigY99sw9ZuB67A1jkOmMZbmBMwRqq8owhRaOoAI0qrxJAkV8B87Rxy7FOIi1ROFfG7%2F%2F%2FfTSlOeBopK7hYkFrKpSeH54KuvtEiuJ2XAucyixKvU%2BA21bs7O540XcVkFWAWi771lu%2BmVJQ3DcCI3v2I23eQ3zFE6jvGkF8YxhYJPupuH%2B4Vx6GcA%2F0RJD2ffhGExmkSzQnkJ%2BGiMTGuE4kt63hKDr20XH6lDjCw%2B9XEBjqkAaDeDVtWlCLBlb0LygmtmAnhwzSZrCm3cm4ftBu19JNujbeJM7pj%2FwvUP2J%2FdTCJqhi45KW7NAm7fyMoW1TcbiCNsrYKU72bY076yhD58ugCPtLFBS2o25Fm4dtGeh3YaIMxROZ5SMxjGbcBsiGfuzRc9%2FSeKZ%2BuruaHnxDgTPLxnDcJDOOeK1%2BV3UlYQkH8uP43TPwP0ok4357gdYqxY2VA86ox&X-Amz-Signature=2539e3f607fcb4c5e7f0a9a52b4b6552205dc5d7162ed8eba6d23b37116d2aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
