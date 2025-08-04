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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6JAHWX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDMy4nZ64aH4srZPwmOSBC5qNWMyv7xiMFJ2CEaRgDkfwIhAISMnvh4nGwgZ3b7ZmyD7B1YlRCA1kuWcGR7dkjkAuGuKv8DCD8QABoMNjM3NDIzMTgzODA1IgyRjtkKnWhOgy2eOWMq3APvHwTdX7awGFLJVdaohS7pLAkdy98L5SscPzOb2vuTMBXOAxVZ3qWd%2FjCb7gWoIOIQIBX1kv2Sbu6Qxy%2BPo%2BdJp1FraM6nJ80%2FkN91ADslkR5V%2BaWfUd0jCXgoChSRtG5UC7g6gLvxHP%2F2AGJYVJTOEoZGj7ZwsCA5Ktqr4JN4sRCTp2xgXurHrFHJX488qsbvvAsapYFlHvtwyZt6AXsRxdFJ6VnbYMMU5kzwpN0TqhFcnUrwvj93%2Bv8komzNmx82EEu2QcqnBUCGqreNFxtWPE%2BtzSmthDpzpIVU9XIXmCmUOPKbKf%2B0zZZCLZZkOogA4hCK3wBeEHVR%2BbHN6MAiccCKNpVqxSCmgL4h8rxs8XHdC1tnrCsVbl7S2fzOn7ZOYegrJdUhlt8471HNTtsBdQcyRhHVsZfyVtD03RI3xW%2BKiAOlxefRAphaZQCzqK9wvNQ5uVQa1BnkIRHaY2h5yi9gcK8WO8L2rLx66LHF%2FX8Ko9efWnd62cc%2FvQOIy%2FJB9zgimbcWqExb57DCp3X20zNd5Yz18WBQRPkDHcJo7sLRkbPahJg5LRp0%2BXremasiPOwtgICxxRdGptabqcWtRmLukn1AGTsF1EhEG4%2B41Gt4EJRTvLS%2FnmV6CDDzjcHEBjqkAcxG89%2F2XWKuemdlYQzozWjBjmFI6ybx8bC6MNTeJaYMfD07YvQ2H30wU71Mw2KSITLs3fniQflhu3Kctvv8aUBySmL6MpQlKerJeOik00Z7mnWkuqAIcxP0IfM%2BDQ7%2Bktnnm85kdN3iUNZIWbsABth18dwIpgWSVyzjs0sP3TZeRn%2BR6mQnB8QGsKC%2BVOKvn4AcP3jbAAjunzfgj8pD0K8GxcCD&X-Amz-Signature=aba54f55f3f31bdc91f27280d7785232136a1d84f67db7fa240bca573421b9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WBSXAZ2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDlMO0QJlQ9oMUD5NMuP0T2kMelVpx%2BVmcBr%2FJdtCpfFQIgFLcSyu%2F8qmSz11gryX5Ab%2B3CRK33cmLXCAYHvzLLj%2FQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDEvUaO0%2BWrBiAFp4iircAwNWLQ5YPYD%2BKdf6TZKusbm6iertmk6%2BgZaZLQ97GyIRUyCHAWCrUFxzHvMgORtnrNClc4uw8e%2FsQGil1bQ2cszWc%2FzAT6UdR3xTOBuHaMp%2FjjgqvTIZ%2BinCepPqtLA%2FBjR2H1P5Wgkg0sXSTCu2cPWlbQHnE33GoUNtDQaOPpkWauUz%2FzoXNSFTdDa5XKq3Lq5btXFcifvat4JU0gwjFVFBB8Y7WAZG9%2Fj6ctYkHSTNkcJWcalkLdyVbYyh56zG6Z7HWGxedjV%2BOdmqNHBCSU%2FGRsgSctGECOhJEpPxnoUhqZqpmz%2F4NW4MuGfY2u6ObuDXx18%2FjuE%2F3PnGOMjlYX7jx3ngKEtrkNJw4wnYctthqK0xhcnoMnRuA58gBRSK8HNyhR7Nc%2BjWBRvasay4rmET%2BP3FjT1aH4%2FoYI5oQlqnuDYrUIX65zZLl0WO2ynIeC3Wyvt3vp1ca7OD%2FCLnypfIYAards2lZoxJwi8HFLrE0EEbAXJa%2BSmG2knGcxQYCLFR2CXWntS5jU1Vo3HKTCTxN02zsdMQdtX5qJgab8seQnEadMSkXruEwJH%2FgEvI2ZgY7xVughud3Y5p6zlPgMGnGnPbqA8i8LLqpJqVbWGJe2AiCuiIrw6MgDqiMIaNwcQGOqUB7gBaGjIweZmkDjzBCSeSu2ElPN0ovt2rMG%2Bq22T%2BTZdbzOiJF4yxlf8mXaam2%2FmlLb1acz0Y6rKapDGSbQ3XBwYC79HzAxxPawcAg02DFmOphqo1DayuEGUiPfQEH4QGH4FcMxhyE7DOxc2Ta9b2hvE1kmJ9tPIGTmLsxTsVgEAwde2Yk9UEzJXDmS%2BK3vJ6VBneUPQEeUBVVSZ%2BMVJ0AHOKPiWV&X-Amz-Signature=1c4e1e0976902b5097ea8acde769a50dc8ced5436beced4676933565f5b76a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
