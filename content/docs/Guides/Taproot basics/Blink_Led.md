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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWOHZR7F%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICeSbtOCSB3V3KPP3jroR442g6DlVJEYAJeUXnVJvX3HAiEAgCzvulbSJynATttlAdhXDI8c1%2Fqh8r%2FSvaly9%2FGt%2BPsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDIe8Ho7EZ9BxBHR1MCrcAydu7tMPfhry1rytHUtQN0ym%2BNxK%2FO0OSwxpss8j0TvWP6T6YpPjiwKkiPHSHQGAP2INSxQPEBbW0bX5sIFXQcuLrlFjwZ1C2oKZ2TfJizXW6p%2FAiMumbBIJvizxlf%2Fap398g%2BdWCTZ9OSs6lquwvXGFl1H5j%2F8ycGqGPtovJLjeyI%2FtovwIVh8SlZyU%2FfYOQTLZKCwH9NIroqAMbExD%2BnRx3fTtcYkd40l7nmMGBsu%2FAdvj5qmWvB3Oq9Q5LD89Q0zHeO0WbaLJW04s%2Bo7EHm4SMDfGQs8RwUu0D98cgbJ2RJte2Y%2B2T05ohgyJyae5uVYN6jt2gCawXQWeOt2wuvGOhsPEK6AUiFwJ6vvG9lC1hD8SlVu4fK%2B8XJ4pr7E2L35vJXlE6AV87VI1YAtAz6KIysFheJwNMhm4S1g31ygZutlsnWzebWyvLEkScfzGCwAuZg94g5f7OtBmuJ0%2BMoOUkZ0dvSNTAUdWuAVWGu9jMFbR8Fd2y0v%2Fh%2FzTS%2Fz%2Bzh2EzG%2FiXIft%2FJCikH3Jqutrd02mCkNnLEajKpczMqhRcMge7UE71%2Barp1FrX29AyW8%2FM2opXlUU89unLE58H3hbG4M4NLlCT9bjVk%2BJYkR05z05k21ejm5pqVRhMMDQ1b4GOqUBtYYCPGzAjFySE4DB7dzAr5uc8PuHR9Rd%2BBzFsUsvOi82GT5zEZmikhmGGc2Vw65oxov8s2vKZ6CNiiVBFAJgXIrp57Tf2WplMoZIIRmS%2F9BGOuGr%2BiJbW%2FxgyW79YULUUJNa7q61xrVYNWXnH5481usp71N51M82%2FGyA0o7fQvuukZd9g3l33C7IYlBuUMJJJerHuxtOrb9QNOrzWhpPTcnvdYIH&X-Amz-Signature=60280c4b716709fefd015445ef1ecfb1e7d7b8b94a8e3635b124c1660d1f56c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEDMFRRN%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T121215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWM90XbfE6SDa3cBPSy8hV0zwU8KpCb%2BIqOkOJadu5OgIgVg7NV0Jm1Uo%2FwRQqJxMtJduGkeDEojTnkL%2FuBkpztnoq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDLDxKrov6a4JOi6lKSrcAxm%2BriiW2DMb6Y1BoIYNOtEPMIL2Amchla5UWaEVR%2Bute1FdQlN3r2Zeye3y5YQeDZy5sE%2BySZELFndIg1Uci8e0qf0YO2TmL1aLcO4Kfemz9qz4GXaau7ynUGQYrMfsD%2FZxTUmn30UPczOFOfJVvMLaEVa%2BwAG0zALWtu6lJfP7nFzWYsg69Wiu8ngn9nZTwXPUe6IXlyGi08Zx%2Baq8s3tcgHkEu9FLcF8bVoH2biIflQYsFWmRgv7rfVInLszT2RuOAWtksiPec9AjmOhPC6v267Vxl4ntnniiImf7MYBsIm%2BqPlhJtlLVgCMIdouD%2BPjMWPKKxT%2BKwjLStL0h28M1%2FFCWP783JD5jzmk6Jw06cyn8W%2FDnZupoKioQkfopRLblxiRe7JUnRNjpWRUK0Hh8KFXoqdXrhSKjZYdh6pDDBpkpCbpuiJ6LfmDwdarM5KVkvzdBcHHodFJHxQdFLnOgk9BU3h0NkrHvPpngJMKfyKHgt6IM99%2Bo0mmh02hbWSsCnCllmTxNaQNZkCQrDtWet9EdwyAZPdrLoyA4AkfY3guny%2BleY1yCO50KIMxzZQ%2BU23E7SwQ2td9UPp6rkdhuiXZWeCPr%2BXXwkP6Z7hIrg%2BsiRJmOk3pAk%2FqaMP3Q1b4GOqUBwCDgl5lF9AbPpuvUWfRFZO5B9tA%2Bocc4AiA8lnfGWVoTGV4C6xfjlfSNNKCrEfUi6nyvypyEf7lj3qy1TEzE12iAyT9w0c5rhpnZdmZd%2BR1dZUwCszRH7yawTgvYp3Rofk5JPmnwYM9A0TVnBjEmZQPpTxY2dWGEimrOpSTIFY74EmheQBGSaqQEN%2FnS0lIfHPCG8Pc1B%2FaVTlbMy%2BT0ct9rLdHj&X-Amz-Signature=5f90be06689881586364319b530e8c0a0525f89c6399cea8194d4d58f5b46a57&X-Amz-SignedHeaders=host&x-id=GetObject)

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
