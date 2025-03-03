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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUWJTDK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZiUzNduBujgpmQTfwDM4iEqcddkDy4vt7yrua7NrxsAiEAvnpO3Zvw6QrsdQwbxnTdRIO0YAJBs84QSb4pRq4vz94qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw6JbfDZicJq%2FEsfyrcA7M3DtI%2FNAflHgBwxjLkVz%2BTgF30b75rulm5RmoH4YW6UraHY4k7DKvtBFYjWidaMdZeL5gVol7j70wYmF8S8UoW4mdAKU0QCEiSsFO05c4MmVuEKxalZlI3hlPlMAbOvOph%2BD6FlZwaUVt9ohRjXVF%2BwgXK7HjrOI%2BQobv1pdi07Rf%2F7EzU2wuD8Zmo8sevZwiNUtclZBh77ilOccr20oZnQpT%2BWb85JcrXAGvuPCphNxLYkszEnqgnXfvWX50HxxTftTn1%2F%2FXOn3srLQNyH4%2BZ%2FWztoH0BZ6xk3N60AXO7kHCpmrFQ4WAaIGXRmYxj%2F0Bj1z3%2FmicHhDng3Pvfs6B10VqislpG6kOpqOtBTRgN1OrdeFJYdL0SDtxvi%2BetaNShCeuKCCsb74RL2AqAfg7YG2AiccPcrJzyaOOvMTgdydAQq%2B9q99jZ85Uc7NqHrXZsI1Zh2Gh5JoJGn081U7bfmG0EYh08C3iV0YR5uTgEHD5GPy8JlG2aqBwX4BxW9mfld5wzlBrCTE4sNgIs7tCAL0UqjVoCCXlH8PVc08CRXQ55iBz32xV%2BxoyyPStZGTBM9a6dtbMNmOeBghHdcZAXMuSA0QyiPXRtzTBEcCNNzj%2F9sF6ILeOPjv%2B9MLWglL4GOqUBRNY5x8Y9PAeECecj5XevKe2iiITLeBNvsA%2BP04iAZyGnPMr4X6PfimXSck8eP7hEyAoQQq%2FY47q1nB9t0CwhPQcf7xOgcJSc4IO5COoEuyWGt32K8oLfS7nP0PS8qeUtc%2FhGTRPGNgJ5Xnc%2BlYR%2Bnc8IyGgRsbo1Y73dRNZ8lcsATyXWVGO%2FqPSf9w0YKVm0Wn2qhFPvotr0wzOWjwzt2Gkka6ME&X-Amz-Signature=bb5c3a661a1c6fd4cb29d1a2ae6092c0e739d51359b3ab173528f4ce05e8f6ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQ67R6VR%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T021515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMTdcBtZ0PMIZ%2B3HSZJFqTby4QkyvDkNLc3EqYV5Of1gIgSOE%2FnjXEdQVGSZOIafY%2FF4Ao%2BObmgpfezjkLRVZ5mkgqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpfjrPf45vJ8wo3OircA2mpN6F%2Fvw%2Bt2dWtuBr5cTecGrcO8oysgnZm%2B0snZtRzxg3F2MOgUgtD%2F6K8C9TRqBVC4RtYnNYpsYYEDTnMkRVsEC4CsHKNi84NtydQMGJBn1%2BqVzFF%2BEj4loGa0t70LFnKhivOk9p7BHXkKM9btf4mal5NzaPj4oZoc%2Bu7pdettiFbuc6KdwtZyVvj%2F3Y2I4hbaIsK4%2BYW2gioT6lFMPsTmMgvzCLvtUny3AXHjbCNJUUirp4HgZ%2FbNXESABaNdHGHlrHvF6rkgswoI7C2aiQ2TYriU8V3oDjzI2EgF7fugugQNIj7obrhYO1MMbxOodkg1kjIe6HFhe1u5WDy61Y7KUQG9mwh8Cbl0Tw%2FZwBK8J8vip34QTNHCP6IIG6XWmyPKXUF7ID5BOyS4Q4Wo7M6KFJpckibpwPW9fFVe6Ybf5E%2FgIdfS%2Fq8mF77I6RC4ojiba%2BxHJHZdv8W0uG3AJHNdwX8ASJ3JtsLd9SVCu8%2B2CZX9Vi80OeCj8oajKW7uw%2FJ%2Bg3vMJvJyBxXEejEWqx6bM8%2F8FPObBgDRvdtdA15Kg%2F9dokX2M0Kv0sM%2Bk6jyJqdS5z1d2AqDmXKjSEPMWIihxt7ZZIrfVdvQsgeHpTbgkMFB3OhdbVaBuIqMMaflL4GOqUB1ZZtM2FIKNuZv8Mwhamd9JYURuB14KB%2BGLN692BK0JBSoyOWo2%2F9Lxhfq4THKzb6OkQoHQ75rSKB6llbVymA%2Fi%2BixZ1lq5xFCcVly3xo1l%2B7Jg1S1zEQA%2FE4RIbwhv2KpI1pNgAuM0%2BatDXnotQS2awwAt1VybCwEKVuZzvPavL%2Bar3v6fpY5CtW82MfpSIrYY1ad4N8E18AP9kNQ6cr5ETfsIfo&X-Amz-Signature=c32bbee6381064610da4c02302548e0f505258d9d8adb53a955754033da81f20&X-Amz-SignedHeaders=host&x-id=GetObject)

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
