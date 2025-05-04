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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHLKHXJG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEugUaA%2B7%2B%2BDHiYX9LoIVLXIvkZ7rUYoi%2B5gCPgMapQGAiEA8f54TsSTE42X%2BpIX8q1c3OXJKzudZIutLeCtCGEnkNAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOQtptbnq22HVQEB%2ByrcA9t9HZHQGbWWFgE%2BzQO0x%2BDsQSuC%2F5hkK3MtfqC9Zk%2BsJLnRXTFglLyF20TyT2gRpQw2YcIsAFEFoMB4uR1sIfR5mmidF8ff%2BxZFJ7Pb5qYH78X%2FLzMEq7giIA1z9Q9dDo737gnKJ9Shw5ErYioQCtrgwpwgENAGktMZGOpz7%2Bibl1rJbemoih7Ot3lh5%2FQo4sRJzj4OwUPoqyCQQLGz4ULxQruLablLd1QbJCmllmc%2FWyzaCBVdEeNHNY7aRJk9OjIrf%2B5igvxYtVPoscQtPAvVUnQ%2FfFUNga0dDERC2%2F1umLVQvRXIK%2B37QuEO2iB4X0Qsfpl%2BT5RVFF%2Fds0%2FvgJpZGSq0MJQep7PpF0y0N1EHdpjEeP%2BcLs0JgQxT8se90fOsEwJAnLww3X20A2Sx%2FhxxYjED%2FNRcbgq5oTLhUamj4TymWxDeNYKjelTJdXnu0sjAGlZC2aeB39uLDs9VdXWMniWRwvN10kacBHQf353tBu60yoF1cheILuvl1tisanEzzoRLc2h5BILGRtPqXyAEMAKtgqNz9WZUtH4rl5VtZ4EWCafQCO%2FoSTZF%2FbJuonzGAV9WBH1N1iEHwO%2BouZbFWTvAthQPZnosXiGy1cnYgh813gtERIii%2FrQPMIuQ3cAGOqUBKBL79RNjHHPHeohYkY%2BH7fKx6pDpdmhqk5P88cWw6eCDQPgiVXJRuxMjPLvjjqlev1Gm%2BX3bmBba9B9NSP6IC0umtP1GkvRoLsRn8Wer240xDulQ7Eyeo03gJmqqs2laYTI7UffumhsPyWFTApw7X5raMzdMx%2BE74swQdRxsGgRmZHwy%2BOTBL8twK0NtTvy4XdHkBg1iqM%2FePB0GlUc1Oi0cTo66&X-Amz-Signature=a9349975b508ca5d16b18b12521a23fbd08631a426948cbed9fed85bee98b3cf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSOYTE5X%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIAdgbD9A7pt6q4WUlGl0WSMY2mLxVPLr4xEwb7O1lX3cAiEA%2Fk29Gs8pqyPZPdxLBX9l8ENb73EaXBMB166uJR07C2sq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDHqGhOtdQjIeJ1GqxyrcA%2FNI4QfOB4k%2FUOZkLymxV4d6VF%2BbSCKzDZA7eHEyMwIWxTkRLyPQkHPnG0XlzptB3eMp8OU7f%2BR%2Fw8wzFg0%2BWphC9u4S1lK5qdCINdleB4H8Pt3ribgpwofawA7AsOiUl6KG2G95YncDpIu%2F8Mqfg%2Fpc%2F6rvtVxCvWmJukc%2FptiExRMPLoE%2FOI40JVl%2B%2B7PO5TsB7MBb0e%2B3m46yF9J7nwoIMVjhzNp%2F71y2UhtPlNsIdb%2FkQR0lkRcHhKt2qhIDxQ55YEP7pjp0JLyytZmY9EazNcf4MkafJSir635jVlaSNlsiGkDdiRHBTBJfJnr65sTFjddD8zHzg%2F6nSo03rnqe1SegrHis%2FoibWC0lBuVCo4%2Fw%2BK3GlHhPDLHELtDeRGJJehszzeXq6P0Jus1c4wNn620PYJ5UAgYjWGbKb%2BTwCuCfWlmZEUtrhrxsvsfg%2FqDXyPk8qBXMISQ4MoJ58%2BV76P%2FGFW7r7pHhfGrMc8%2FFJlaZLBSgHD37XPgKSK0UbVxrwEwlBX730vW07qd%2Bza0J%2F2xXWRmazIYRVFdl5qjIw5lQRB0UajEqtaIAHGqtCTJ8pQmY70vDqvd9kSzt3SiBDwbzTSfCOCICba6fkNyqrMRrCNTys5xgrFyxMOuD3cAGOqUB2YXeOvfGxkE94FAfiB%2BbGW4w3Q7CkEAJ3z0ZqFvzo%2FLomD1n%2BczeigtximVQXCPpMMvCCq13t31GAQJMF7YyMbzTaoU8BZFRV5jZRXv6b4vT8qtzjwTCXSaWbJoQa%2BCDjZUHiptLTS49nsHfMeOCf1Skf4uf7wJbv2%2Fh9R%2B8bZImF3E%2BNoVktlMcmD8%2BpWz7jlVBeq5OOnNHajP6fwuRQ7IJE6zI&X-Amz-Signature=90f0a82f4121aef6f9cfb486d1b0ac45b0429f53ef1f7eeb2b10c3712f7bc8a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
