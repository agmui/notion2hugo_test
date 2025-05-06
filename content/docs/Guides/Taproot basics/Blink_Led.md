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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L72XLGJ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BivmXcDi%2BK42ecEldhV83YjhoraMIIA%2Fuh%2Fub75mNQAiEAvA52ZPK1MJW6ELMd2t1JCDVsNPgcwQ28vZx1bWJsYh4q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOmSzz0KOqvDTI85uyrcA9fZ%2BojEghHcucjeu%2BvJMsOL72Fa6rkctlMVJpbr3rarkiWA5AA0d8wFz3cNaAbTP25wAJiqfjnny5wlCzKDvI8CDnj1yjsm68UD8lB6z4c6kWlh26Z9MNDztEIC%2BjfRI%2BKKIVPpO1Ab57DRLemETyBudnuz8d4sEErbJKndwdZmKx8wL0i56Xuf2%2BOXES2%2BeIqnYdz8Rujur7wzEXueIFuhhW%2BqXMeh9q0HY%2BbR4hxVV3eEvFe%2FrUr2MCQkK6GM5%2BA6AF%2FnaHUiae0CUq%2BjemmsQ5%2FTjl4IHq6qeKqpGg71cscIc35eTTkyCcCLXvboBcqVfYFkDnXcy2xnyacKoVmoRVKf%2FST5euiDuz8SukqBUfoXExLlk%2FkVnxYx0BBla7iS2Dc70ITmh1JnEtz0CIZIdZHcLdIInvn9Axlmn6BHL61cEfqkj%2B5agDgG5M5GKw206Ow%2FyiqPpcx%2FY9I1OLFWSaOQ5p4rT2psMWKSOZ9iII2fvrtnIFaysCu1o%2Fpyf4wENMZKhidDHjbBBp39OssplpaWc3TGWjhW%2FZIpjLlPufK5rEzYDfibrWKd8sDRHj0y5nZe7esAvw6cWog3CzkkhCKyP%2BrFE6UB%2BHgtOUpVwiIMZ%2BrjD9%2BTSEKoMJb358AGOqUBOTjRx5TvheIEtRNrv%2FRFp4erel7CiG2%2FNLYnwGKy1csA%2F5UV0pFl4Gw4x5Eum%2Bi8enpEfuglvWL37mossik%2FjnWPrQpYaz1i3dtkiAolM%2BvnxAR1YRpvPVtUV7JJgd6kpjXpHBG6EKUfjNEH8oYiX%2Bh9%2FfxUPhaHAt28SqHaNve4UVpuymFlPOtmfMyaVvjEmAGKzt18TrRQ6ghAOGt5ePskkfMW&X-Amz-Signature=ee6d695a18156d060cec63293a9a6c46cc499d52b17a703f9b35990346a7f19e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV4EBMWU%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZfuru409UHgkkjXxRBqUGaR%2FwjmXJt%2BnTYSMpEppN1gIgN5ztBWGaXkqdBLsTpfWs1EDOQ3tkTlor3ACNjXJNkCkq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOfrUhZfqKqjpCaKGCrcA9QTVTZZJXDVpuVs3yYwqToxSquvTZUJnw%2BB42vCYp9gGzkxXMLtD4CKj0xXZImHqJmJvmVkqVDbKHAF9FoimTyYSEkvg2w6rsu%2FkgB7HXadI6s23wGGSABQRXcNvz1CTrpbN5PRgizGfrXWhBJ1xuUA9rHWQlP6JvacN2p2DpEIBcn8hwGHVNXGH84HOVDJsSt0Kl%2FmhRzn7R86KQTDu%2BwuguQK1LdVz%2F0n0Ch4Wmzby2i1ErgMm8HToCvXnheuUzXnwEIvH3xwEe7rH6lGc7%2FWSGZnU4MVsgpKaiNA04wGZWyAu0f0mOCOSUqI%2BZXUosHP9%2B3pIu7woKprnZ0E%2FJwohOqEE0497cis52IcSBrpDkXT93q2HDM6ZT5ejjvF66GlYkYny%2F2JxoEuZfIgOaqx9u781qolCJlcDInbBv4NHVn0HLyTqUppvEceOWGJtw3SdB3GkYlxWw6sS5cWjAPP7MMgCVK9i90L1Pf9G%2F%2B4L4q%2FfipRfC6XgqqcHIQkBApJKv7kBHKXxTl4uscBfVry16LbBp2zgfoqW6OZD4aQYnzeweJN2Xj%2Fxk9MPi%2F5jq3K3M%2FAfOLBRZFkoNimatzLMV7eXwwpUgDP9mXimbL77%2B%2BLYy5aOylMX4xhMOD258AGOqUBmngPG6etkWqK3Aqu3rrP2OW4U9vwI%2FVzM7vDIUu%2Fr%2B7R%2FEKfdUc4hx8FdEVqF%2BzX1m4iNcc%2FUuqfBy0%2B3kdKCjjYh82n8BBgQtzHwwX3mYZRXv%2B9%2FOJHKBLTxqFCQ%2B69r1084o7flLzHt%2BQgfBIg1yniJG7Oz89vG5MLy3ZmuOWMqPWYn3Q0OvzDcEJh66DPjP2VsWTEIH%2BO4zaHn4pUvTjqvK38&X-Amz-Signature=fda7b26d56c7bea8442eb6b066cfc403ef4395743421d37481febb039ea485a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
