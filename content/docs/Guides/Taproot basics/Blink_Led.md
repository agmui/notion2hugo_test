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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C23Q6NC%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBYQiYRJQm21HjYap34zdKhx25VrH8epaSk8cQ9PrcEEAiEAncX%2FNXhgf6KVRin9pFj6vz6AIwyagOPB3gmdo0pN7jMq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDCERYIq75pmx68Z7xyrcA19NaOj0NRabo3p8FxGBAQehO6cxdyNmqEoOaqD1NHS%2BxtF9NI0kEvTsAwj5TMXQ3CNEICiQwm2DzwsQIhNEQKaEpQfOfaELWSAR9aGdcgqrlnhJlmR%2B9bcvKqTEiNyt8OS5WO4UmL6UWrDGjk2XpodIEtCOwPK7l5cOTSWu%2BL5dKFcaf6sf%2BkAUbRMD8pxA5gYlIdHIJKPCMjx3vw24%2FZhmncY5FUmAWUAICi27G0%2FmW2kz1AxbyYkriyl4%2FZtuyxEc98Es7Yis9byY8Yz%2Bu0Fw3sZVG7nWGlz7rTZrUGXj9mAmSMqxFGmLrjZdO%2FuYj1PjBzfPoUSVPW9hGWjkxuGCuThQzZ2C4BxctRcE2rZXmT03Ipfj%2BQg2JQ%2BiRwUKvM70xZhLeLWwB%2BC8bMMRm%2FNFC6N%2B8CxWJJlRRN%2B%2BvLdI1mBovDtrwi8gqvdqQW%2BRGmpZRrum6Tpb9fqm1PAD%2BFPl0q%2BKTzpuSek2c%2BfUqbT0yprZ3sQ4DsP1ASTHpv3y16Ir3UJPXcQVdNbRIf8NMdDiELVflm7Lc1RmTzIJ1SAU%2BgOjD7yO3Albd8zRyBiAuWjxr9vYPR79VhVi503ImbY%2BXrJ22%2F6nBlkXJNDSXAmAaNT%2Fnb0cVjFhdzdlMNPps74GOqUBek%2B1K8ThsnCCzS3Pt%2Bx6Y4LnEEzrv1REnOzCEAQd74py3oxGME6MZsxWfs77WHrUA9R8YXb67hcQHputQKWnRxhIsLlN0M20%2BSTn0x6hsiM%2FEQaV4vr0p7nJ2wixq1nhzi%2ByxXf6VEH0raCYNXwSvOdQU074ERMwo1t37FWTj%2Bwf4zkT5rbyWUVVt7tG5BjbEWhcKKd6jCRr9U3B%2FyEua1IbEcx7&X-Amz-Signature=ec993ee8295fb66344dc6919aa6cd732fbb90a9e75156b96f5204f0bab441078&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHBSONK%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCG8%2Fu3JFMRklmLUoqTJ12RgkoBjDiNXuwtMFEFh6z8%2BAIhAOvsTal2T0WhmotESQ0WT7ySgQ%2F16ncUmc9%2FtompO%2FMHKv8DCGsQABoMNjM3NDIzMTgzODA1IgwmGbmwdotfMrlnQY8q3APAu8v2%2BiKDxPddUSOwnKJXI3gpHk4ax%2BZUfg6nEKBnSuQoKVMmRQc58tEEs7Om0Bwrm%2Bl4azRe2ddgENqhYy8SQ7YJH0reywIoSVosHba1PLkGqMmHCs1kyuQ%2F%2Fzi5nIgtKSsTUiJyECctC7AN368MioEoA5TAawAuj5ByHmedZXdfvcBcblbWobp%2BcFslit9%2Fro3te7Uyi3W%2FpGhEB2tgrVKiIk91vwWlME5deSn%2Fw2i%2Fi1ukIiiVkvS1GYTjr1%2FJyprXh7DQlpPX8LDAAjrHVfmBKvQ78nnOJanfweRkQiDruwUtGd860Ywh5Ufd1V7S%2B7uNCgNZsGf%2FnJE7CdHLfvZVPQN6Q401YZGAyVhUHl2Lg1R5iLS7VygWFUg21A6mc8uZmdFddgNBM1OU7VNotLMQUeamBXz6KSf9S2WFtsc4oYqRfKTIx2JDUK71T0V0WX%2BchQiy%2FBlEHocGDYK6ZfTvOp4Mz%2F57DebxqJiN3%2FJd0nfV04rs51KvFPBOi5PiyOoYj3xSk8MQawPdBPR5R%2BRX1aQac%2B4vwsF2nqut8CpvhgYMfJikSK7zsgnfykoZbJSVnym7Ryv0xbUb0W2ZAO%2BLvsmusjQvrbKgnTH75jLRLKabbqvC2n%2B70DDf6bO%2BBjqkAXNCRhON%2FOLQOpsmRP%2BFBi%2FW3a%2F6pUB%2Fhuad51ffMcutLGCFW0IlDujfcZI3dCMwWbqa6rhaSkSgeZcAzIDdCyl34xLSB1jiXp0%2Bx%2Fd481LPLZyMHBdUZKY82H5YmVnYiMeVNpD%2FTn9p8qQ0ecPMpg978q%2BfnobLHrQ34de1QVLfyxuWccwgBoh1bRG3%2FaUB3tJXqnV6GMVaqZWO7Yq0L1lTmdDh&X-Amz-Signature=9d54f0145835b654d595a605d6b078becd309a2bf8a06b1d2baa7db0e199b588&X-Amz-SignedHeaders=host&x-id=GetObject)

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
