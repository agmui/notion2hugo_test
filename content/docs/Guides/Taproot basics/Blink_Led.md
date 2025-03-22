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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP54AKLD%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQC4nciBQi9fhnDeu7GFWb1o6Qf9A%2Ban0%2Bennf8xmImUyQIgcQE%2BnOmJCNkbrfQKI1kLYCX1e3IrFsKeHmLBmx4NFfEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMGoVljWAFALwvUWCrcA3lSg%2BdBZWl8WRzl9wpcIEEPCvsxjJnkHxzEZ7G6dvDiBgCYKakuXPZ1wa7%2F299cDbhcmi01oUt%2BgWeeHcHvAes2kSXutkXAXYSSgbv1s6FaY8Mihx9nBXiJUaVecxEK676vSjgQCMcuMo1ZYf%2BmeRS9aoEdC9STnPE2%2FdM9XdLvV0OUt6yc7d7jnMA6aVUzpTHe5htUebsMNdG2OHgAi8TJGYHmHThkXQKZB%2FRt2qiB50fl7UzPkdfbqsyJwjWcvWh53UgoP1yTKP%2FvTYVe%2Bh9Rx7JTgboYLi2Kk3I7%2BEdmj6Acy891TRRvxq0m0anAgC3mxkBMHPN3mEAKh2JCIn5ChlNptRLO4%2BBDsvRs33urfqP1i%2Bi8AqIzgWYw36CLBSL%2FspI%2BnfaA9KxDRxKAJ6avzlWRJqqi4P0YaVNgnss%2BmMyp4WQ9QGtfQhcNG4wZekGeA1IqHyr5IqknKBcw6cJmiWTiHiMkTqEgsY8gl3t65zl9%2FxZ4i21ZYNGdDzjNfweEANKrl68wjSSfNpkMXDDonx46kUU%2F%2B%2BrVDMlppV4iW0%2FKbxGSNEJJKEgpRh7yIS%2F0m6gycZYKh%2BsnOCPun3na3SW8%2BNjLKNukFovEEGN8kn1L5VgSiTgXGFGVMMOt%2Br4GOqUBrb5TjwJ0B%2BjK2ic%2F0N3YEO32Gvc3Bz3GRH0r270u3e1b5SJlDajiU%2F4cCPL4B1uF%2FaGpJSd79ZiVvYyFXiAfzPsmKOawijgaHyXE%2FLiE65c8EPEl8iDfGr35Cvj8wGwral%2FR6iRXPxWNwnPq7x47Ue3fq4AXZ2cRZhQpcUnZ4qU5D52Ax%2BS2CBlRSWx4%2FPbmlOxxsAEkVhAffTQ7r1uuRyvQrK66&X-Amz-Signature=b3bf3891e777da217efac1bf39b0d062744f02b8a32c75ee93dec98f106f9307&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQMYX6R%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFsV0c75En%2FuxTOvwXP0uM26xOYUWGLoyHH5wQJ5GUWzAiEAmaVJN5Gr0NN4p4rnc0zC3%2Fea3qP%2FBbSpk4icVSmOUa0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOvF7T%2F7noKGR05dJSrcA8IBCLMkephKo34HgUC6pwWAcOsUyQ2y3g1fCj1p%2FsOrPVrSlpZDiXohei0P%2F7SF8hXxucphkis2z5xtFQ9KheQx1587nzwV5V%2FEE6OMnHSuWzh%2F4Zch4%2BtmIjZoKmj3ocgp37vx3QQ848MPtmfJ%2BJLIp5ZUs6Io%2FRGPLCrjJjCk8ZUYRSfsL6JW3scjaBezbSFQZS3cOh%2BWmMBSzXvNfpFuKwXUJLyhCTSBatft8QfFLn%2FJK%2BPilKj%2F%2BiC1KJci4ycepQgeotLNOdWYaJPGr7Bqoh4X3kTTgrQyQ90uxtHjXACKBWr2hwSBdJbq33%2FV2KCzz5vofXQFAd13LPtKh8k%2BKdzBSndY45w7VzhQnoMYgslbw6Z3gZXqs%2BYamTCzFJo4f41xFqNLxPMtm4RHrVaRmne9W64cUbpDi%2Bf6ztpvTjuV2WLgVRWKT0PvN34%2BJo%2BTOrsyqvUjEcSEGgGVbF0fj2YoaSkokjjPiCfsm%2FB2viz%2BQurRnZ35HzVKLe5lhTa5uqeuWzy6poaavIkNKQQKPZcTBfC2Nr8u2DuvIDsuS3FfbsaxH31cx3vWdfqqFvqNHiSss04RO97gqO8F1hYrIAt0wf3eMULxAfBRDtggBUa%2ByPDJYm%2Fpa%2FNHMITO%2Br4GOqUB%2BSpBTEqtBW4GtxB8nGnddwtKdLPUMEKecZYExMDoxUfSa4pa%2F6qJEhncvoMufrj5gXxrH2ZPRiXTRLkliO7SZ4XZ8yfrhGnKikJrY%2BJ664JwgPS7S6CH5f73nR3Gg3e7hWsO3nMsARXiO2mlQPVrZWT4jzRzqTNQktD3VGkx3Vk7EbMMMnVuQa6Ur5lZ1aVQaxlKXHciTXx3zMdydo%2BFRXZAvmrm&X-Amz-Signature=0e343cc5d089f66aee2bfa64356d1c4aac3e3029cc5321f8ff71985d43afcbbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
