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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQ24ZT7%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEnZ2dacSOuPlNiNSRmGnwKKWF%2FxnjWFxQXCLViNv0OwIhAOizJrwIAKqYh9y0vrJ8xTzbykCkreiyU0OvCdYsnZ4CKv8DCFsQABoMNjM3NDIzMTgzODA1Igz8elHDtZpE%2BmTcoboq3AOMEJfk4Mg6EDxSSW05GKfy6E%2Fwm5nlWf30iAy2FyoCq57Pd3z6OlXQeWPMLna6LKBICPht3k04qAG9YKPcQdTjDHlesL2389C8N7DPxAAgm%2Bs67tZP3JzAXrh%2FcKgIqFyBP1%2FKkltrrgNN5D051B310ML4mp68%2BifZldusDzgm2Auxndh9AI1c5vqUNsXKCzAp0%2Fn%2BgBq%2Bop4AuqWw2pEELA5Cou%2BLPCTtGaXRYQbbyVA7Tu1WLH0GKWQ6iPiTiHNEP4vIvczMP%2BuBzspZ0OlwwKJSjSWzBoL43BBo6GMh2GuAXVWVxSPknWBej%2FB16j8%2BgaDVjYOto2mhlPeP2%2FEWmbnfRyv6oORio5D98jFQ3Ks1tsNaccdTmT2UZdBr9N1WNalC%2FhfvyKahl%2BioYezqtLgDjln7vJuQhhvloTwp25EHpZhGG2SF%2FPXXf1mAeiJoazvUtui%2B3WYF%2BoK2KMC07q0AP8cbaSkqIS%2BxnoywgxOC7TT1YV%2BRxJ%2BpmmX%2B9vaCcAHCNAiEWmmNpug10vrljJugfvp3nFMixE3IN8vCre3HXp8w2KVfxCForNajzQNJYzk0ExQQWQwUwJW%2BZljwS3CPejciRYY2IEo%2BBmDEKEZyK8MdpfQ%2BUe25czDJvaHBBjqkAe%2BYmksYkLJMCsj6HMg5x1C6sG2S56enX6I0xJPNawfBZFTICvhYsUsy2lud0AoMdXX4V8JSun3go4ru8pcOoGlX%2Bz9S37raIZqCU0RuZIyhI9k2n1u8nSiKqZFGYpLgolWf1oV%2FVMJ24WEDrsPDCBi5UCG6p3GKx7f9Hv%2BCeOLydk%2BsXqssg%2Bup2raQ9wNPPhOimHqCYgfQZ4FtmzA9nL3L8I5R&X-Amz-Signature=ea66c3401f3f11ee400bb229b8195021c073091d124f12e88d1cefa31bb4a357&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635D4GHPL%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T121337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmUM3f9jaz4MjVWR4IlJ6kTJpPa9gySnZKIcr7NnwmqAiAUsjWUGqCCMtv4ctJDalwM1U%2BXrWFAi8ubIWuaKbJBair%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMGn3oPWNnYMZdPUgCKtwD0ws9uuyGEs0v9pttu3yp7lcuG7LbYaC%2ByXDjoOVEZ8%2Bj8l3CtDHWORcJznMeWsIK033oaIgXns9BhrE%2B%2BYL6A%2FUpxLEDgTAIj9ac2d00cYPeXDit1fcU9oUAXZCxPMzltp94To07KuKGezuJGE%2B5bzk4fqdw%2BsO1Z%2Bb1vbCh4RBTDO53OcK9lf6nllcwUwXzET2NtSCnq33tmUVWtM6RwM9t3jZ2luwlcNdyVGnp%2B9Y%2FW7hrZCMZWBFNKh3zRIIy5g6CcAW31vkBGSRJI5xVmCNgJCJB9kwzc8i300HdHUGHFJUjrSqBaVVrVsyV5nRYIJmYThcvcheZ7HGa%2BejdLMZdzg3TitA0g%2FNvwdwcgMM6hEhC%2F7vS0JjTlakANz6Ugji%2F6dbQ0LyUmI8t4BGzPxhri%2BXJp1sji2IZ2PZjy7ZPD2lC5pu7QQYzZgQCKtzSk%2BNNbWGIcbA6tVdf8E%2Fl6lYq1Z3MrqMYdhfas1ETrja4V8ROmrjzLksMhJJA4GNuYkb1rUIT%2B4%2BIo32Tdo%2Fi0n6MPxC%2BIxRGiYe%2B56%2F4rWDgMD8Y792PXxJCHdjCDjLQ2twzZt8t9Wua1%2FR4P2ZuB9fV%2FfCxv%2FlWGH6K9qRbX%2B0YnzFNdlXGnPxj%2FigwuLyhwQY6pgEi7fDL%2BZ4LV1liqTqrHh2J5w3OtN8fbIGhBZYUnntMilUmlxfGYYM8gUUohKc5fbWoxKOKCWFv5vknXVjGkFS0dp1cxGBY0tiM2k7cUgaBp%2FcMP0bn6WmMVgp6W3Db6cIqtLnvBjedcDrMvB5vI3lDFAPD%2FagtrHvtNi5htQ6RceQIb0pBt11Z%2BlegmfXIZLCf5nnLDi058AkmUk4jNAy%2F%2FTV95LFt&X-Amz-Signature=011b07045de06bc1ec0e5f9c1abbe023d304825948026c808ae388aa635c2a53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
