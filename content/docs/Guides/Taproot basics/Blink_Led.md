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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ON2AVJK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIDJc21ztFA7%2B%2Bpe5hp8V6nYKnZf0r2r1Ux4nktoltTyAAiEAsPXJYoRcRhganPNVhRqRrfz4%2FpBAc%2FYMohRRiOSBdckqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbazKeDvpUg3y7xUircA7di4P34aBMKyvq6YeCDVNbYNYJUlb6YWiBIOns90yCg1uK8OcRfbyFMjw8N%2BAe3116uKu%2Fi6AVVmlBQPLpiG6zARBaOAO9rw2pWK60YE4C0jwuPPrthx%2BfrWdUzttca7zUV0e1yG%2B6aqM7LCGOV%2BVohKfsnmTcIohx0iknbQE5DeIKJ49YrGXlN9%2BhbXlHvMBPIanl8xxA5kY4ewCtUP7MW%2BptAAMFxr74IRaKYRbfBw%2Fq38WY40uiSQ8f8MFPlCQxc%2Fa6lexQH72BgV2RBeKsbBZ0Om4VLZySYDr9QDza9PtGrM0%2B87kY8za5WWyU2qReltoiK3GhoSPirLM1B1DmK8JTNQHvIi%2FKgD%2BxDhaywgcggNAjEeGsHyf3F0tQm24c1BJz%2B6BIZNQtDVxJOiuO3vAlWmW6MLaSimowRP0JfXhCANhEdj%2FVXqn%2BWNufOcY8PvBPQ5Vt9cqN7VmVO7nYu%2BU26E8pSdpA88oOgtammpX%2Fjou2xcEI7ZYeQ817b2vpve3viyeSRBBMmLx7Lx1Mpgn3Ehg5ET7m6IWIX%2B%2Bgr%2FGdERfgbDHUGqdM9o20WtK2GfQxX7g7VllnhnVqpI8TRs%2FtG5rXcpaq8OwRNx1Zs%2FG43LveSEK%2BbEe8KMJfF28QGOqUB5O7DCasCFg%2BI1D9LRHQ7ZeVleYoVHxAlduRl3NSmhLalTNGFrzhwQMtxZjJiFwMWkQGfSiynlqRU%2FnFPSmOJafOzGVXefAJjxAN5hiNK%2FeHRTOh3fx1ekrb0nljHPYgt%2FoZ0gMzSeSlhw5MCliFea46SjiVWFrvtWdiVDPaUjQKr4vOlrLU69Liw4%2FzB2Tdg0pEd%2BlUfd1JOB4aXgqWqxGCBAZ23&X-Amz-Signature=8c4a7d6ab8fc4ba60098fa085ed96028afcc71577f2cb7c34d7c886c9d77e230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466625SIEMZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCUnShig8D13JPMC9TK085fFBikgO5L6YF2N9BFbm40QgIgHbQBFBcuJFNL%2F9qBP%2F7i0qV2WFdorVMsqhGDGPxr6VQqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJXsrHkLM6d4t2R%2BCrcA7lSYPFf0NklfE5cGUDtXp6Kk5xfKTOwPNMIOLgPW7kkCexkkG75nw5dR72VcFACN1GJE1tjPCCO%2Ba4g4ndVUveR%2Bo30xZ1R24NFyFSbNFyiljp2ieSbwiid5O%2BcetDs8JB6d%2B6bWigrFtKpREVZ9eZF%2BVrYZQQTsAhXb1SxGmOqS%2FoD8mMjLmE1fJop4aJC6f%2FGzi5jb0ky7e3NZEWxuSv45g8gGrjlk8fQh89Mx2zA0cQxIQHXYrHeqlNhKIcXs%2BXaDXCvulyD6BczKJcjOPqijg%2FPXuG%2BiuWhkYpu3EF5TAMed0jEq6dKEIa1X6wJPlMc3s3t8nXjfst08l3%2B4HaD6rlyhjwgRtIAcpxup6sBR2FTTuOn7EGpp4JpG8jSg0%2FQCl7yah8jzRjn7kyavGnzIpE7R0EJviFVQPci8WodW%2FHLc1u%2FCmnNLuv8zlcdKvF5ds0IxI0tJo1NXyzWvksPyQduNJ62oGUOBHw8zhlayKQYAPMcaoQOlJMZG1r9X%2Fjwhp3GnkH%2FgCHk26ogNBvZH6yvxs7v2RTRsCjmqzkKqrgUsedboRSxep25xEGAwVH59%2FGOiNQPN3%2BDGGtsDTMz0mQ24sGbvs98V346f0sKFZY6GDP3Efgc14tWMKTE28QGOqUBsmSADRizy%2Bs5SlbVM1YFkK%2BMDYXQMy%2FIENbdaDSbMVcoX9D0guuyBE3MPpGhJRpHieBRtySAHXQkUkwJWSl38X46KbW2m2AJGLI7efhwfVVA99UGtOopBg7IhVrPh5PUBmFMPOyJiC83WceaDiE7XVd2KURAk2HBhRiXGB0oAwlPhZtlZeqzkBcdhKaYeptuCzkAVbt0NoEDASTkOqww2t1QMcTd&X-Amz-Signature=3d83ff0a1b6969b02eee05ac59070381a19039d32f07dea16374654d2ab2eb84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
