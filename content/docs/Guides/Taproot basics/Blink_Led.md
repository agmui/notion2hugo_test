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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQJI7K6%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDr9MQoTr3msKNELQYhZcfA4Ww6FPgHSGTNH6u%2FjkG%2FawIgZREL99A5KbYAzf%2Bvjl1uhr1fPB7fot5cF7XDIzYwwqgqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmSYWDSxNwaf64bKCrcA1KGpZvfxDxuf%2FCrvwJ2YWWTnhARWu6y%2FimE%2F%2FGo7zyaoJ3gNmbxSO3XnWMz5HgAmOTlXIv8fgPzDNvcRpWnw8dAs3LWFjOkGjb4x9YPMj7YFxiODHw7t1y0BMDvsrkhyxzU8V1acjLpsOyD5u9jNFxP%2FP4F7R2rYI%2BYNSGFkkDR83zHeKvw2p5CL5PJFLwGAEKVZwXmJdRBDvUqo6WmhnPhxTvgSUgy5FhD5AcJ8%2BcE2ZLPrWL8Q4VfA6VS%2FW59hNDAB3ZI4DGG29MmKcKOEYwhMELp2pjOyxGu4TcqjNuYOqtS4BkhHRV0ccha%2FkJMi5XRChnxUj3fHG7XI4YBOYp8jP6NKzdUDiLmxq9vbT2uNoaAu7OO56Hv16Ey6suXUkTmqV3xTUyWKURYvSSyR4xjp29%2FqKm3sc2cUAErcspl4Vp8ntZEbr6YGrVIpfz%2Bpr41%2BGPtx4Bi0B5lVY981%2Bg4S7Ldjl6ac86sqn6dx5n8zFnhxM0ABDCb2gatLYsGQ%2Fe%2BlGgY0mB2%2B7HfbgolL1DNPiq1w0sLzZj1ubqxjFsUBm%2Bw9lyWH3VA%2FpjooG6XGg1MqFb%2FhAWIjCbonz9VzQZN%2BIb5Hy%2BK3gyrdgiUIswuQXFIRqdg8c4RrSajMO%2Bx0r0GOqUB3w3R59FEqmww1FbEiD1fqQzuAHMvIdPkFaVJ8n%2BhTrEIxQji10JmJHsznN7LhINVsNSWESLaAYey7rG2y3TExhc6Zu%2B4wPoPbBuI99XTEB1s1EXFZ4vB9bsW5YI7SO7ZNKAIXOaZfEWW1PvOcMOlxsxBDjs4P6rTOOE96bD3cknoNHVHP47Ie1MkB2fnbZ4GzuqDY4%2FW1KxnM%2Fx2fv0wi4hnaQKR&X-Amz-Signature=11496f5815dcbecfb3f5f4ab028f5c9ba03084e8caf75fd9a4e2c8871ef93aae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SNRBBPQ%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCMqNKxTfJXYWBuG9ezD5Mmgiwaze%2BjKHPK8iYJn2cp9AIgaoByttYFiPjWXFBt%2BgboHAWJhn0DAgEeflyo%2FOqMPqoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2Bxp%2BQ%2BXDd5wKKdHSrcA%2FQf8eYOrJDWyh2tWhoUwNkjqBgPc%2B81O%2Fc0LuZx34WuAmRQxHEWlH3TLKsnWllfaVdJ4aorsY3jp4dpPEg7Kzt9mBdf0eqj3wsdGpT1T3NMyicQFpGsSABI%2BF7xVeHtIMhCVvdQZT65PblojwtxGZg9NW6ALXLmydl%2BEbHUmqcSB1QYTQG8wsLhGG24YYEaOSD54gPAUOU%2FXcsKF%2BtrdKsqW6um%2FqnAktntgOWf%2B6se%2FNPPDFiGjr3ljV%2Bsiw3kccs61RHaTaZQJ%2FhPMU51WQHB%2BWmUgrTxLQRa%2BhN%2BCnqWQT6u%2B4%2F8AuqTq28Oclw9L294lpSLsrsdTCgXub8WIO6THwcPCa8inTDVs1GbJ%2FiECS%2Be2PdqZseuZdTG6BMg4aRwc96O21Two9L37V%2FrL0VvOSyFXjbklG00x2ghxlHWDv2c8f45yNglaKumekm59xh0sz47qHqSJbDXW8uoi1%2Bh5KuYaxvT5uPEK3CKNy1q565nihdsEi7vyMCbkRtN16YD57aF42fkYiBngQWawlQftEhkbr1aH2NLQPdCJjIa%2FXG60Ay5gNEoy3S%2ByIidFdInzunsUBQ26C3SIwsQ1dWx7q6IVp6uINguvcATjXVvVuAUORqQ1w5YFyeWMOSx0r0GOqUBUkXKRIHkzHJrKgl4nxuNEz9sU8tXp%2FD2wBXCHJKbdCdYYxsugORdqA3uq9kQLDuK8vqaZ0w1SfgEg%2B%2F6oZ03tW69uwUcZZOP%2B62%2BFbl%2BsZMH7ouhdR5xqrTx0mi0ZMGD2TW2EM2ntPEWkCKgufd7vPL7qAZTVB15qoaPyzCzjaw9psbi4z%2B98MXDAasGk9lobLMMTikRARXvnrn27MgZJFkc0p%2F1&X-Amz-Signature=88f3edb50882054d77014d6a00d4998d23304d8f0ad2f6fd37d100ae11906802&X-Amz-SignedHeaders=host&x-id=GetObject)

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
