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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ERDLFUD%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrr4Wm9wCX7otHiBZd5DhHw%2B9cwukYI0Rc%2BvjofdCvPAiEAj%2F59xRXzhgke6vg3tRAWBsvCe2l9qFUOvcUIMZkUW%2B8q%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDJZzNIMN28NVvmdStCrcA784DpFS8tVdva34gETyskzz3S2y5t0Eh2ucNI0nJWMPxpTeesnF318QAgswiTxlqHriox6KHCuKdRXabENJjOCRU5lQM8AkByNdl8YlW%2BEZwOCOPj8m9LIfz2YH9yeTUNiv0Q7OV58H1Rz4%2BaDC3aU7QPIQGNw0doaGf4h02ED%2BUAOAyQopLE3k68Am3Qa2gBnJnwxVWj2tAfIxmqHPcit57p%2BfzezY%2FYiVZTHS5ps%2BiqbnfloLMbEo8td0o5%2F70jZ%2FBSjxnCiy%2FXGxRNBnbdIlVjLw4%2BqkMQtpatgYckv6qNK4YKncYz6eBWfw7Jjc96DguFG%2BY4An4WdnbPbYw1Zo176g5qEt%2BnGKqVnJLFzqJBUUzCXsLxPBqnpm7BRm89dBmk%2BNZ0VOOdq%2BpWxkK%2FB76s7CAxdVkMuTArqzgoFeDXglP%2FtPPpL9Ig%2BY%2B2GK748eyi%2FmJbOZucPzFnf8K4LuOeFCOqds9BX%2FLfAqEZEGhu1tStiBuPQeWeaNLiNAKF6Tj2PKGqrOv%2FgEDTbRAOHRJaOFJuDR896py0r2FG%2B7Jsdkvjvjem4mH05x3VIivIxHwoqSlN6X06MdE7VcVTDrmanWcPEKe3m7wXeWe4z77veCZZzb9TcN9GyiMIOYjL8GOqUB9C%2F8ZpAOE%2FP5hPyqGExPkA1wh%2B%2Fk%2BPVdIIEH7wMDg5FDPW1vMbKTw0e4txS1ym%2BWjBT3i7w0F3QAZkgw36kupY3L1%2FZtTolY3NA1dGeZzqsdKN5D%2B7RMnypVXraqc4RYMQ5DBkaFrTSz0Pui3HRqhQ%2FpiTa7ygsYr2dRf2ZAEb4i2HOQln%2F6H5L7R0%2Bqu9pu6ibaaGPQt1kZILr0n8VZYf1LvHYi&X-Amz-Signature=ea1deea055cc18ccef58cc10f7f117923bea00408f7944e6451442b7f2afc3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G45JED7%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTiQyIm8yp%2F%2FCj8Qr6IqGCZipM2pzCmskLdSLmd7JYNAIgSFY5H%2BVQYS0uDtjxDFWnXXLi3N7sDUANAM8BQVa78rsq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDBR4PLwzbRTwtTzsCSrcA8%2FYi2SkyTyEO4dttsj1eQi9rCusQkdgz2lCSCamcAtxAhVncV9fVNEXTIjA1kDO6pZeX%2BDkuk2I3hhCGltwHb3OouCFDBipzRqVpxPTh3xj%2BQfkfiHggLFPgwEVaTZG2vMUYJfRffC11LIkrzFV%2FsWIYZin5Udom5Ccfg3afA1ExvapIcL4fxTh7M1glf6ocD85FEkHDRu8XOeuC6C26OKaI308kopio9WT%2FUaJ71PuTgKt3xSxTHMGM0QF%2FeCgpvl7BNUxJ4aMgqUMpTORV5YvdwXQeEcmJca62DHOtS260ah6ysCB%2BhUqy3eRAF4DfymfcyH4%2FuSd7lfYGOw7MfKsYXb8als2znmgqmTrnleli6mgAiff7fyogVGs4%2BZtzXPHED7KQ5011UB8ph3F7K5FK3il50qXzc0FYdxBNJNH9vbpr0hbxAZ6DeA1ygwEeXfBkfit0vnzK%2BGW8R%2BqqkhPt%2BVelUcJjqefzsAABAYJcnNaNo%2BApGH8pLesIWQqROKcqjgokGIjSACMZGPlc4%2FStSR5oO%2BBIVMkclbBqUnDl8GyYwcefBv0PavspeGx0ExWZ%2FvnUTof0s2SCo9bfuXppXAP9fOBCScuZdkGoBVdtY5RtcdB%2Byfc7VQtMMSXjL8GOqUBKqQK60cD9iPo0k0BNtTvxHlj%2BRTPNOQ1puCRD25nPRPCRUM8mG0H9eR8V4iTYQYbOPorWPK%2Bc2gZLAeguaFn%2FaAwT%2FYY%2FVmNbALvadyepV1LpB%2BtELbtdq74cfPCw6ENd0%2FMwDN4R1DoE5HJkRKKIKendXWwL9cy%2FZumDZduk%2FluJTyZkYP17Twq8eR4CAWpGubT4BReKqbmoQQ4EIuH%2FRFcEH8%2B&X-Amz-Signature=45d5cc6cad09eb3c40107c94150ced5e8a491594b0b4c91d4d545a21c7f743af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
