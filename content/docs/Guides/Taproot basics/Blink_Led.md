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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QT23DXR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAumTeaGq9vLwEtAzQw3kJna2OiUggGNh0aAEgdVGVKdAiEA8k%2BttODd0jK3SkK803NJ06XKBriHCvGhKbBiXn7VNoUq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHgTpqzdGG2RAbVksircA9q99RScDekS2JsfgELDGa9nmEtVOKIe2mAU9n2nL%2FUASClwjuuw4TZAUR4Btt0zOZAMupnjlf5vsstzbhq1p3NUsCoXZvJmSAkxAi6hC749K6JNsaMtMUHv%2FKNl9luPz1VTZ6sFwO4od3O0O91uabSoroWvp59k%2FW7xJ7KCCxAbrhu9hOvjB58liQTVx86dhalLGWMMM7r1nmpVai762aKeWA7FNAKRufIjnPQ0p4NhAKTz%2Bz9JFjc%2BIH5zouVOxW2sx4Wi%2F3pczJxZt%2BmaalpbeberGh43fH425ixriS9Lt43P5FID17J0tdfYQ%2FaQALeZtWLpUXXXETL1Zi8UjlUOPjMb2tuU%2Bf95Of643opwv%2BneeGaympkA%2B0iCBSZbs644lRt5xpuXvhTnVfIk0P5tGI%2F%2FxAzUK5eIitIyd5kMmhhe7KJtrvTt61u0rLfime43O33SrbiXyMY3zIdV7Yo2J8qTKqrdn8cY1IOJIcmKOCigYOmNOFDs3QBsyw5Dr8ymmOlpFtTqafVKkLGGjZyFhpPZ94tAL85OHxbNWEbYxLU5qCF6T4EUoRpI6vOIUqD07qg4IkQKLE8IUgvjaa0Swxx6JDv5JlVxtvnKFa5dU45S3vdDDyy2WkikMLOR68AGOqUBpgFSJwXjFjdJYp63cLW%2FjRUVuSw23uV9Og%2B3NcubLobWVV2OdFrpXwGek6ecEZRxHA9N%2BqzwWDxDKLCptvWjfMJ0fV08g8azgZ%2FcG6hfqPh7E4Z%2F7cIZyMps1EQCAzFl%2BTdCCEgo2hPL5ZdVhRsN172A3JCW63R7uOx9fRYg2aGhfwI32i89oaoStnvbYL927%2BCTqlgCeX3oCcdn7HeQqb4qUR4e&X-Amz-Signature=500ba29ee5d2a35f7aad115ac2aa0c4eceba69caa524fbb3024cc2e7c7882b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ZOYOCW%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T033405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUVXdBilwZO5GQ5oHbRAv0kbMBXqVak44HOWaNDo8ujAiBYhsOHmN4l13Qa8Sd2qgZQj1oMn0c9axrwt8mMDAVWiyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMuYRQO5X4ydmM9r%2B7KtwD42zljvNkAihGNWHHG7Fi564r4O7qdDPAnnmhnzybyO6c2kka32AseE8QujcmA9CskbrH6nyFAMdTuts9Qi0agtvtNJ0Z9lSRtbQ5tNEv1frJgwLg%2B6HNxFZp5AyCgDyx8LZ4aAnR30PO3WBKiiyisJAMsTZ0RudmFOJYMGPevGynKJXlPRpBoJ39lL3o2kqMRynMA5XoD4qIpndG325mChovH0b7nz7UBHt6nM4cMMx0waPmr2vHW8uMOOoMQ2lr4vZRv%2BAZcprOK1n5XigIuhx1gKHEOzWickr9Ww1hWOMFG1YK1JsdgRu9skEqUl5a7awyWl6bnfEF1pC30yQgrhjBO62yNgnBVxNb%2BTrJTmzTGwUjAgOLVSTpAw8HF6Kd3l2ZRmaPQ%2BRymfSuhzYIxVq4DSFQ0isT2dV0D0JtjqyJCueEJjHmkd%2BR7atTDEFDyQEhdEWQ5de%2BwHncTp4Cy6SpXefP13O9PhR9XcUEx%2FOa1lpdrOcTB3Q7Rt1O492Ff9CLEve%2FU22h1smY6vUJjo2diwB4gVE7eHyd6y32uItVTSP5iVcbPtarYVI7FjYy%2BxTBcl7Aq4fqgvY7VnVV727ZXPemNgCgjRgxTgTnsV92YhGriCSWF8Tnn8Aw15HrwAY6pgEKCc9CrYqiVZ6z8meZ2UR4xbviJy1kj6sxjxoU1CInLl2B4lKecSyqNcpYsmIRG4F1XHIp%2B4EMRmclZRvqZJuM8%2BgDEYKI02Vh5%2FkkvpH%2B5dQ02rRvhEcQJDTNnQXmUaMlkINGW1BU7eGMm%2FytI90RQO7%2FdOk7caylc9JvEo5p1fAHhheSNBQM8wppm7Zkmh%2FaRxlZ3ngvSDdp%2FQBFnlPBHgn4vwd8&X-Amz-Signature=89fbae37196ed05de69af4616e1b3503476848b40f82b94f656f813513336fea&X-Amz-SignedHeaders=host&x-id=GetObject)

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
