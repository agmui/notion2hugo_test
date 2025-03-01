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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNE6B4BG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQD5P%2F9vfFkpExyRg%2BKgqP22MN%2FIXTDx65BGypAyS13K5gIgDrUAC4qsE19y5F73gh%2FoAkXcUgGKOBSOD%2BnECfkMgUYqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPG8HKXptBg1iASIWyrcA9oBvBWj8rFOroja0AdDz9iwyk7dAvEKrExfE8%2BS%2BMOY0sg2rJHHHKbxmgMCWe96koNzzgXjm3n48kCBH0V0pdEwjZav3UnIMrdEp%2FblP%2BIx778BzBEWKDwgEaaZpWDxSCVYzgNmXMEbvs2OXJjWqH47S8m3Cx3Eql8WBDLogB9juDuUS%2Fv4h6dXiz6xTkbhSojDGkkSCnuYQX9mjTizoPjr4wVshAoZ2hFyuvrDMem91bWcKErNoXiXlU3UD2LwaQf%2Fh5kBw7SZGdaoJA4vD6a5pUD%2FEy35I2EG88Xz6bxrgInMnE1OKvxbxd0Cxp5kjBcYebsTAfyqmHbVjiPnt6%2Ba2aLijNuzcd64U3zPV1LS8N68XZvYikGPTFVKeMBAoinmO1BAXwy9noTRJcDV3AWxz4ZUHvcsvuYVlK3WOrTPYwajYD%2B4tcwBIMvspHpQcyPyQZ81LxIot8TOns%2F8i0OaQ01EDnbRs%2FRsgy4eeFB064LbNEqZ8D9LX6GphA5btmnWxpKeAnnR%2FM56ft%2BIE4uSzY%2BzOAERx3t%2FPwgWXxfx7wiUHwffmI%2FynfuoN3lbg5joWIFnsFCqoo2PXZ7lJ9knyUZLvgZTssQAX%2F73Od1UNUM0ECg83u%2FiCvLRMOKQir4GOqUBaTaR97Zo9PLa%2FEkljs9u9FOvpB%2BFBNr0PJg7ZCik6wd5mEdByCIIuzBMRiA13UGOCj1MSuNbjiSFzQ09OpniqT%2BdLk3x95VwCCrzW%2BNJVRQqsGFMDt9kHn%2FnlKV3UQFv6SQxZ745cpfSxtXJI2D8V6HtaXw95YCOFs%2B5j5KbiNMhdm5FBpD1WEHJf3WradkpLqDXroam5Jz%2Bf07x5jufBk1S1MPF&X-Amz-Signature=139f3be6feb0f1bbcb3c99d752e732836c80bb25b0ba73ea6aab40f0c18046b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3RNUNPC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIAPdLgjSVqlG%2BIy8K0vjvFfRwgeivV%2Bejg%2BJjtrjilahAiAo8OgdkIWsRU9He0ZuDx8%2Bk2GHLdtnsz4n12w1y1%2BtWCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvF9WMSPu83kLROrFKtwDv3wqArHbM95K925kZDG%2Fal9crrofanhZDOuGzQpqm7ylyQeR7Rt0Fc7bW1g%2FU%2B3yR0cVGzuohGJMUOTKZ0jNdWqLKQIrf0Sqirm69JAF4HrhwyKo5EXtybGwumPzJO05DjCPiq5hhuf3iYExmp7IuiiLRVs%2BV6ZbbYqyHAgvBPE68wy%2Bqquibwy1JuBtM2DZNiFoj3frHywIKWYxnfQt8QG2QF9Q6ixH8aSwMEo%2FeRQLylteTSaJK%2FkT9hAeXWBZF%2BnDG5AfhoU48X9XnyOX%2BlrHkjJcCVQE%2BRt6%2FYT%2BN7qeOVjnIn2lLh6Izkz%2BXs2Jphl8FLBeXHIgkfTpM4IdyB%2BJ63t%2BapqaDdf6EPpLVDaAhr14kMpMlNZUkP6JAXmu3k552mWQqkzDcnzecTCjdIKU%2BJFN%2Fy8JcTr4lzi%2BtxAFiJjwUiy5%2FW5ToiHIe04LlORk9AIo%2FQtRSWiwJXwPdtNwvLDW04l0%2Bvk%2B4kh0DLlHxvi9lKho7VzlETVDlRBX5TBJ1dTtY6esFxDp1zkMB1Hp8sz8RA2ccsUXWN6V%2FWHwy%2Bu06amqF1Ok5lU8I%2FRhsZG9RTbz%2Bvc5KO%2FNzoRxXx0TVpEqh%2BkIbSjEPJUXs%2BdSKbfwxKSi00DFx8swwJCKvgY6pgGp5J4BjyLM0xmV3QXGdH6zINWbgIZ%2Bke50NRJnnjh%2FS9PpMa54fri4oP1tpqX2zT3aX%2F8pfaTyAFuL5Ugq5lq89VaVzLuJNTbd8%2FTO%2BcxunwfkIahKgcN3MYjl%2BMAKO3XNeNPAOIOLmo13P4hrq4hixz47dc0Qi3LK1TsRN%2FNGrWbTy99pPt6HXCQkXwSfKpUrFKuMq6b6N%2FSCUIvpVlnlCeAqqvDM&X-Amz-Signature=4c0865eb7dbf0d2737091843f08945e763186368eaf16a5dbd4657c6f02321d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
