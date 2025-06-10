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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRZOBI4R%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDV95OHaWaL%2BH30acgVTv%2BHq0DRgxjJAUgRIUeWqBlugIgM6lxvHc7bBHPjVKegX1AUH%2BP9XxnbSeaVujtiz9m9NcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8sW69rwoHypGeLySrcA8zOlFGMVfuQxHl%2F1pcBpm%2BOGR8XvyLEu1sWrdVaMEWZ7UUEI7%2B7yXLpOvHJCs06buD%2B7NGV3yxjptGSShqx1GNk8IJBMrYiF5gg1jC7yJq%2Fa56dxz1Dz7%2FbPslmrl6%2BJoFTL1EZG5XQQaTteTqHKrduNADRqF2NJwmkN3w4gWL7O1Nyovx2aIX2BZp%2FDTjP%2BZy%2Bm5F9F2toKgNNuBxft%2ByP0GMe0VPBVEpbBKWVoH3PU1qqP2Ba0BxQkvBOiV9s52vUz9PqIUYSHoZLaBDEJt3Vx2ye%2FN4DmMM2yCSwcVkplb8Of8QIvszQx62%2FgKeyBVPbW2B8ZoMHlNo97z6PP2OqhCu8ni%2B1c52MdK3PxsTFxJ5iFbqM%2FS6iR9WZP59RCAKeypnUUqRVQtl%2FjtGWaDzFwFoAj7Kr1A4VeOaxQLPnoF%2BI2%2Ffi9R9tZYdBVYuXvphwg8dX3VRiizdhEzTFhJev8baCT3qAertqnWQS%2BtXslWz%2FxW5aUf22Kha49yxYUT%2BECiQkSdRZmpn%2BByb%2F0AhkMiu79zeEaVu6EGM2FldffF%2BBEWxlDhgvAgjc%2FWHleMoJD5%2B1H26Txt3u3npI5z9AuYdACJQNrUUkfPtj4M23JwE1Yz%2BqDhnq%2Fk6TMP%2Fen8IGOqUBztbHjgPfskyLlUrTM7ZDXAGebBSNFwQ3qmdxW7MvSfG00%2FNI%2FEe4p2irou5C%2BclkJcw%2Be%2FhlJHotDvO8Pofu%2FreeZxHda00cHUZnflAyVk6PuMOhL%2BjjWaRakT6ATXlg4ZQpn6M5fpzHbttFYsdboFtBALkYvXyEm8lT6xuvWKexB1c4No6Pv43OTNMwnr7h73Wuo2TzyxQ%2Bot2ZfxeqYYmeo6kF&X-Amz-Signature=75f9fbc2fb0ef64d22cb7ac097c31c2a9a803a2b2fc506342c64e03ac7a18bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674KPBEWP%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T091033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGhwr6XfqfrAWXAlyNsqJJ5Xubcao9%2FTa2d%2FSBv%2B77FwIhAIDKFBRX5Q8SoTQDVzwBc3vKdkuWOvwlmTRYQXleO4%2B5KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTBE55Pi8tNb7FyOUq3AOAP6CjI6ntFvemNA8kw95%2BLwWig7oQXQgUw4dM%2FLD3LYTwagAMZTX5hkCcxfCQ09bbWyBDD%2BNEePFMw2L525EAbnQX1WSH1TPsWHVXhR8ZysBvyBnq40JsaC8XaBKc07k5Un0rAipeBRSzdx7k8qyD1D0V0HLN2LATKkf70p260FGJFu%2FOXzYkjhWIRV3gmF3waAx4k5d3Uw8Tf%2Fm60RA70xM1Cl51ygg8tuSnA10ENuhAeHKxQAHxdNZ8os5%2Fbmx2sEPcJg3qx%2FD4%2FKjG3ZahhCq9gfbxnzWePeEqrDx9raU44xS1d4yXMqhjTS1U4r2PNUqfOD4OZxMUGjKK%2FXeUwHbBelM1vhNHzZtwJiJbC8Is0sSFzeQXKwzdKs97AeKH%2FYU%2Fm7%2FqMt8nUSenqzI%2B%2B0EPV1X7oQcWSjHzDalftKa3gughnbnh9pagT5RdlHngqgKlq9CrXOkP03Jlp939oX72MAWEBcudPuo7BbsGZhfIM0ArgI4yF%2BIpGPus%2BI6sqkyLfo0ZO61xf692rioMm8tgJIYxyKRo4O8Sh1ENEOepq8RlmFylPQs%2FgeimCg3GZy5eYhTwUqj9fL%2B0Ewql3%2BFb3pnBX6qtlirHyLE4gjnt1yX%2Fjf65m7mdEzDZ35%2FCBjqkAfLyck7fSHs1q0o7VDkD23l6%2FxYdjGr3x7w8Hsomf5bpbHkTD1wEKnWqsSUMlPYTR3X7JmPyFmU2Whf3Ll8tITOjLISU9eNyGrsJ%2FBNLssi1jCBI1FNAfpV0%2BahfmBgaTDh58QY1Lm29kyq0hz3zq6mOvWfZ%2FNHQDe2g%2Fh9QTlyWaXlINY6eAS8yBC%2F7ZtvINxboCQw69xNWXi5iWXDHIIdxu%2B55&X-Amz-Signature=0bd329e52b99465f8be3d754949a072565694b96bbd167babbf60bc5a07a1e41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
