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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7NZHY2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHosDVaiTnlwQVRTFOSxepJMCuWrZRxz%2BEVScQMndxq0AiA904f9MRzwOf4ABSxebWPWy%2Fs%2F4lL%2BNngEVfegJHZPfSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc2p%2B0C%2BNXnLu93uuKtwDycMnZXXY2Dx9VqPrnkxAq6bH3GEGXpyPHPkazIbVvimFEKiDStuST543lU%2F%2Bo17ESK6JVuxc%2BHBtmRNqIsSTCTOUxEV4oKO8w3NqpZ4DvH2TQWCDr1llKMcIu8ZI77vbXucSLAFKe3xygioyVC3PxXJSmgQXFf5MZILuhTgF034ieUKxES1d8fvQ8TTgzJI%2BUh92hAZl1ci8852fE6DeTyWZ2DZsv7UYfzuJZxrutTRhA%2BeomhSw%2FVykQT39dZVP4i3%2Bzqsq4eBqYxp%2FXXzphonEcKkqPfFQdax9Ry0aJezOH9ngo8YSZiy%2FdenlxRotkNDQGUdBLROXaGasyy9lhvap1BKZjSety%2BoMsSlEcWRypXd9xOSdI5nUKyobxDmsJI3GKjnQKVOkeAKzMfh5TkazkWivtWA%2Fe%2BiD7VQDfvIHxd1kcMU9Ph7oV0DMmKKu1TfChPCYXwpHshBnCpLG9KFrxVmDLpjA8IvYwlw0A9%2Btr0AxiAoarD1BlUpfsNyk8slxr%2FGgEqPd66QcfRNjDsXRHKoYVeE4Mt%2Bwz%2BfmnRrh7796wlg8oqmOxgAwrMa29VFNkRqw3dD2c4YUgIae4Wli6c1WwU2d5cI1kPyJlpdT3tCnSbmfUD%2BaPEow97DtwQY6pgGOiZujJYhp6CB7%2B5o4%2Fn1KOVqBH9%2BqH6NrcukulStPDvcJST0SRxbulY9Jd1L8T%2FD57kOeDMTqAmGIPSeqbbjKgAxPpbUevEdPpDZnAemqGQQx9TbpdhRCSggwg2A4YwIPWZO8Le%2B5pIiBQXNRkwDOdxG8Ztjn4R7K4JAXpaTy1jviRC2ZL3pBZcRIQoW8vCrW0OZdRdsrCGZ5vASnIeeb1%2FOP0xrL&X-Amz-Signature=dfe5050f4c771605e14ca4da9b036b9d8fc26dbbd1e00bf402e0b81052024085&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBQP27M2%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T210712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHn%2BFNT8BH75XznWcBJ%2BBkmspGI1hFhh7AOIX1Fw9i8cAiB4ukP%2BWaCTq3qXcpEpiRMQSDTg3X8TYOFFGpQXP%2BpG9yqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iMT%2FP%2BpVJ42%2FQhGKtwDHiiZHIhPxx5JRwjoid8eLeYUFeXJffSx9xyiGlyeF3HzmVWDoEKIumh74rhhkOl004YB1wJY4K9jztd%2BDnOukeE%2BapA%2FXDq4FC3x91Ye0LAH%2Bd0DF202n1j4htPf%2BOb0P9HST2v6lDp4gTMtqFNS0%2B1KDQJOgu2D0XdTBz0cXRuPtBfxMRzugqC5H%2FizKIqU3FGpjb4zDLq2sdlUCF4cTUIrh0Y6CssXmjHFJ0A4ZLGtkRM1WEp%2FLw3NvdHTWXewMC0PrdRyxrAS8DPcovSM0VmaV9bGRFS219U6k0FRKfP6sVPBo1r6nBfGq25x22I1%2BJZAxpeOR6gs6y%2F9EhSiAHS0ZHV81J5rFTnfZSbSpRPgd23mnRMYi4bMuMTOMjyCc6UmERP%2FUlZ7VQvU5dHqYgRU%2BZ7j6VbmGvCaiNE8slE%2F5qX9Z0q0ExIIRarQEbrxWZTx2Jr%2FwFZYUfs6Rlx%2B2DzpN%2FnkkvU3BQXo2yrjDq5HRHYh2A%2F895NBHJMyOMXveuTpkodD3BTLvjbIJPmuy3kzjyQAUCQgzZOC76vL3D98Sfysm7O1szBRnnEeCK1TeRvc1Sump9nOXxx6q9XR%2FoEsmr9v40bObPyJBRGLFJ8nidP%2FQYeAq%2Bq4eaYw6MTtwQY6pgGogTz4A7wquKWBt4zETXUoV8iys%2FnIW%2BL6dsIV8ymUeAlsdXlJ8WyzjA9AEFcMgvLR0%2BLV77SPYm8InkUiBTH6bl2JfIbV6cJVLj%2FAUqh23fGfPP3ZGLi7b29%2BhOzVtbMRXn2B6IUjOuynGPmHvliyQGgE6gn0CYkCoTKqmcxlM9DKzpMXAAUxHge5kO5nSgEFBN%2BDH3rz0ch39xwKkIiXtFfCI%2B%2FR&X-Amz-Signature=ac0100ac4f912f32d3aa5900145ebf3b63bb693c99f6bb2c97625bd3fd3ac713&X-Amz-SignedHeaders=host&x-id=GetObject)

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
