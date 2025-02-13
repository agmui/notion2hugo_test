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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QTITN2I%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiQpd4DbK%2BBh7P%2FBQq4UIrcAWbbvXyKL72tkuVJGhOqAIhAOTlk2xhDLX6HJuNBDumUrnM0E8J3PbCEceFnoDIdhVjKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhnHQRjKQiqzCzsb8q3AMF4KY0emUbJdVRiZGA6TSXbgvM9zAAC5spDoFvVt%2BpnmiHs9GLchlEeHygLSaPc4%2BAUJx37ZwOaa7u4tC4TkyC6PS5wyJPbzdMpTYDFXT4hNfkmG6oPtiuDV5WeeCtmtmvS5MmStqGVOp9IEDdLbbPDf5bjBH7XWkUR2ryczAejMIu0IvBHI0SxMn0QDfqVKt1vRoo5b543PWfwWNd5yk1JGgipjTMmrbnNBtvMLu0ao2oMokDI8Y6TCWsb5Ln6EB%2Bi0efLuaukDx6LfI03hNNtJHg%2BOuF4qBo%2BsD4J7OVzBUKFzQLpCSyuJGqjTyFQapAqVfVNtnFNL%2BQpMtY2%2BAqNyzJGzC%2FG0YoMVOtk3i9dRNc4waLyohWktIqdcdNGMBRWxubc66tfAKNi%2BaPxOPG1NGfE2NXifNOOOccIJWLC1VFlxAeguPLNpypTtXX7O1u%2F%2FlAEAdcPQfbEQtW7wgQxVFzhj%2FPCjTgVi4NtTm5cfZ26ndxZTDwI9Dcq0%2Blxw3aZDvSq0ufA9Rm%2FCa0jUbOBbvJiq39CakzSCss%2BCUgvVfkJy0zvH1uVB3EYRckJVw3NaQs6TzjC8Zbi3Q6cjix3JJ8iuKGGvioLRsy8GBj1QlbSC0bewBgKdWWtDCnmLW9BjqkActL5vxfO%2F%2FcOvNa%2FVfKzIKnDrL%2FzFUfdPjfg1uTz8t7Hz2sgQD2etMPmIL%2F8I7Vpc1FTbWVemYl9qW%2Bu6V7rRIceMzQR3wj20R1NehMEdyHV6IEbL1yvh8ykeFXj3XIuuB2dC3C5KHsPYu4UTdvBcIqUg1djqCBwOntCBvPtk%2BVvbCdJ3iXvflxsExYtCOVijsjSew9LJGeGbJbP6B0jKqs8430&X-Amz-Signature=340dc841207c81be773529fe6e946130662400aab51696e11532b3e20df3e868&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZHJJER5%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T020910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHHfGExZEYK9imoWBXuje5ZM1ErxF1gJ78YX1uPO2piAiEAhUVg6TSL9HVRPSz3veXYdZM48G0xzjdsMQNJ6%2B7NN88qiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMZ2iiOdNo5PwaR2vyrcA%2BYXloKeOBMCKdQ2CTt8oAsPTJbY09iGUJJik6c8v1NA5QLW7%2F8gE9UyMJvnxvYcKvP1I2VaMj%2F5h0XgUzdjB8vnYAtYHrf6vbFXYSxirC7MXwIcC%2FkQi63dAOXkxMMhEH5jOAsCSwQmDXm3tYcu6kT5aWS33LsdymPpqfolkNHksIFo7IO%2FPDLti9dlMCsUI1bBkwva6LnwQ8aA1ybGIBOUyF4m6Tblvd6PqdaR5yz%2FYHAAvNfTmBWfhiR3HBMAt8W37WrN0XZBkXLpGlAQxFzMAP5SbiptWuELY4HO88VUSFelH2mQw2BtyhGuDQwqAakQb9ZHQku7xs8I2oC%2F%2B31YykjcYQ5FheZ00%2BlVJ8gtln9UnCqmjJlxZku3KaCyFMz%2BrtyaCWRr31Z44%2FJkPrZsP3sl9Th%2BIzzmgoQ7ptTNEiCwODP7U4jqqM1DFApMv7T883b3jz0UZPc427HpNkunYxVKusCwnVBv5mSEnuhyYLA9fY%2FEb2bUyEBaCyl9L1BHm2keh4mSkwRAsy9edABArFsoozR2kr6Cb%2FEQwKIAlZWt9HW8v%2BcKhccq27Sma72T0fee5FpNYqJW1VUcWzmokhyKq6mSlEAkYhau7ZAT2pHv8ULrqnUFecafMNuYtb0GOqUB0Xo056f7X2pxTvYQc0h44PmfQOL679IfkZfBIGZ913nwdYoZavnJTWxjMmIa1BN496scfYXIBY3lD3m8yQjasKIOMiGn9Mkw2KiMoIH%2BRoFEmVh6k8bRlC6gPMbXrzg8XUuCy7ZMHUpmvXWoeNe1PDSW%2FhJcZaiKQo0BxF9dAPdl8ZvUnNyiRcKaLZo%2FtvHFQVvkry2FZRzyfxWQ8jySvzscP7EX&X-Amz-Signature=66f04e2386499acc804f82de287b325b34195fa1affe29026ec0d16fa85b3221&X-Amz-SignedHeaders=host&x-id=GetObject)

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
