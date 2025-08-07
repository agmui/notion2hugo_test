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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPZ4J6V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCyW7XXkew85oxbKadI2SjQlHUwrTKl2VIsGuEe3rvTkAIhAM61%2B%2FkAIQQOAT6aZTZeL25B%2B2v3fZuuacKr%2B9osMj9OKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlrygdXgfgaaqxDiYq3ANcyCBDjkqCSm4yWl1%2BvnOboUR2erHvze30xiSaEmmg8ZcdbKaUF%2FnbsMZsf0BwjOhVg3iywC%2B83Z5NdIYdLs2I9faXthzje9BthOrpKBxughAoh%2BAgxl45lnIFmxzxFvyTB1EG6mV0b1d8q3J2VkHOU%2BUvdOOvjK6IsZg1VSF47XkxNx%2FfNBpbET2ZDVYGiExQydxU5q62v9Inw42lkP6P4T8PiFfsnklVhxkHALv5noBKf5UWkiCwRSoiTDECphG1yW7jez012iTydw0ZGsWMEsXllmyqRFVYoGt%2B6WGxedN8VonfXoQwhgNk4805mg6x0gJbBW%2BEdLBNzNr0dUM%2BVGIoTOMXFp0nhzzeIaMtlWQgERVD6ejzOCtniGB%2FsRvmi5yPG3YxX0G0rwz70IrPoyaitgBSBbkVbOa%2B51kJjcGbHwIMNZREJ%2F%2FuM43IkyCI%2BwujBdss9wh6DEjiE1lKFUdXlwkz4ZqowBpG3%2Fe%2FHUxdYua%2BX1vhoO%2BYWehvWF1WGyZrkEok6gE8KfaZYMkR6IIjPbc9e63nsw8RFNx1V5XlmQHp6%2Bh%2FIC8RGqKR2w39%2FKzc4U6Mzn7JRb21fIkQpyoW0HmrLFg2oGtK5vXLEUt1rLFwRtqkfVelBjD6j9HEBjqkAe8pTv3plVfyCWXby3yWn%2B7W8JndQCZH4RrPj9BIcAaDed%2BX3Djq2dTRQpdqvHIFGoh28SIqs0nzh4ecqDIZGDKARg5sAcPI5MAJgtaOrTV8Udgmc4EpvXZuoEbr3MT%2F8opkiqKuV5s%2BTul4NWYyzpOAgUCy7b2AyL26zcnOYW0E2wHSYX95SrVDA4d8N1bVBXY4vSrqeZTNXAVirHby5%2FsFgh0e&X-Amz-Signature=cd0574e46b5729e6e826d2612655c31c3fea875be2c27de00269fee720cdd5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z72SWDK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T071548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD4MDcxUDiY663Glr8U39GMvvvuh6ECyiBD4ocGkdQlvQIgJGqj%2Bc%2BNLGZp5UZD%2FA4THJmm0QFyWgzU75bog0ud4D0qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbvpDBK4b8dz69qMCrcAzoVExwhUdZt7Y8D%2FFsTR%2BZpEvXi1SzBQagNUIKxhi6jbDVUkjaDLAXhW9X0%2F9H75gP%2FbmOGQ2iAlwauLhm8H02ubbMVZte01b2kBSjUCZL24mmhjGmdXkGT%2BlP5AVxqgDwQRjThxe%2F8uQ77Hyt00GC6Wo7Z6caXFfWM9iAaMwTHKIsQUKu5ZR%2B5EvdKRXN8L7VhseDwb875bEGD50%2FUd37LI9cIrOK2KuopPkdz4V2Oq3WXTYyptxRfWTFAGCgvybcvWnO%2F2n%2Fc0daQRodOSheAkY0wTOLMW1p51V3zou44AW5Nm%2FfG70BfB%2B%2BcJCV2uEKIhuc29VaqmgabgLd6Ehia3BF7BjG9YI2vvCa642cSwn3nxoM1cRw7ndRTIY1Fers9X1K%2BASxP4nUvy2HoJZs4RDTQmbSn6vV9elvx%2FA8E2ssIPFCxv3lt64rDmcCLRAa7n1Odl8u6L8OSQJN5UCC%2BdSLu%2FLdJESuLhc7CpxpICb4oQdtxbK4uuaqoVNSXBnc2LNOisbabIXr7l7OHnN6q4ZDowYin2%2BbubDFgq%2B2l%2FPOZRsgpd%2FWqzfeRiRQ2nai5ipZu8Ye%2BX7rtJWRaN%2B73k0I3J3V4xra09k%2FzAAisTzKiTFO%2BXB4xd7lvMO2Q0cQGOqUBqKnKRH1qzivXe0DETRAnkfd16dOMIQmelSKsZUL0pt6ow2yvZq3bfLLJpiZ74mY1sIYGUC8PGluwP9PlWF5eAUEDpGxNqHR%2BUy78mLfOnBG79%2F5Xa6h6Fuk7xnuj7A2mPUx702vfIIVX962p40ZZxOOXE5NZCYaVOGkdFrejnvq7ueNelVEu%2FYKqmaClMAn2HidIOk%2B9qG8MIkj0Wqvj%2BXAxfIEp&X-Amz-Signature=ac71fc0f9d0b869cab8129cf98c764ad789d824fa1f2d7ad635006cd6b22c0ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
