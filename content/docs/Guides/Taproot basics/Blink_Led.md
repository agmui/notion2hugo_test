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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2CJSEJE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDqango69NwY0Og62fxEuElr0jhxkIg%2B1ZyAfNUp8GGqAIhAJaMt1gjMjFAS6sDBNMA5H469WGjREmd%2BlwYhN6OhuarKv8DCDkQABoMNjM3NDIzMTgzODA1Igxt0VLBOFCYbTzyNm0q3APFOFzt6Tv2vbz7AyQ7mnVwYIelNz%2BVQqcoT4L6L3pgMzR6FUgCN7T%2BMy%2BSLBDGfgLZVYaDwgafAC0Bb9Th3tPuJ6IcyrzHrwHuUFnNglrzvYLRBCObNRsRzIlQGTdvjeN1r%2Be%2FUMCvArHbEUApw47UwpnvdrPn6sjOj5DIHs8stKwvZDyOIiSdDVeyt7%2FikiiRXZo9A%2F4YS9SvFz1hp59c%2FNu%2BZRIntoRCJBMWnRTvPXP2UJ83%2B7PakDV1TiU0fABIYt3jSWl%2BCOVDL3sBvN3Olh0LmNxS6USE42pvLG3WEyn3NVKSELCMlgLpzchQIPH3957bJiVfSL4ibludWAuJ%2FJaeVV6hjETQKRLbNRVpuSczLikV4LerYqF5CedAo6hcsd6JgnkbN6kOVd0G3WOkY9CcDEh9IJdVXLR9Toy%2B%2BZ8mmDvkQUAM5DrCyfjrD9G0VhSY2lRDS4GaFz4snJ71VmT%2FX1LajBmqRNOwOUQ%2FXnuHPmrisZrfGmqp0ssL%2FILu%2FyAimVs6QlPGQ5oqH8qNbtDhlMOaODdi%2FoJpfFUO%2F%2FnJBTq45zCND5WR4k3jtzBS9JUU43T1DpsYvth838KOaIw3B3PW8qYMZdF1VMh3fhkO4ztzBmT1mfKkTzCJtL%2B9BjqkAffvAkepsD%2F6ySLBjWXRC1Tbq600usdF4BK8VPNRml3kda52pUGM95ibMTBlTQZafk1266TcTT7MuviY%2BStJBzmfY3pNn1wVZV1IrSuOJkghzObDnsNUYjC93UA%2BAQsblPcs0bhngmutuRSO%2BQCnOLynxN7lCHTgecpCQWYzvDvXqe%2FrzDRd1xb7hzOALy9r0bVn53Kv0p7%2FVJjoEbSG7692txt1&X-Amz-Signature=7729cab7989649b7e22a8a8bef61ae0f568d4838503aee5588f92c31d638f22a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOANKRLN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T003519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIDWL5EFhfR4Xep7KrJnMNpfn6SyWyQHt0C2OVFGlFRfhAiEAmgY5Oq0fQVu0iNkzYdjB7VUsMJHeau5%2F4JrlckiuFwoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDINXNFHmdBPoTig%2BfCrcAyd7wXutqi1LAx%2FsgG6KDPUQnDUa%2BCWRoDvdfh8zM6waLItbKsyW8fjdeYbrxalaUEJqBGQgNE3Rt67pOg5YfxKg%2BdUzUPg8usgo%2BzMPzimUZ4csnhJHue9JCCn4eii5PQMN9DbYVPdrUTBJ8xoPypSCek8fgqR5sLckJU%2F3L3OdT9P3apwIqeNxjFHTQgHGg9wBnbDbqGVOxeCmq6cU%2BQo2ZuGj5B4l3c33VhoB4Tw2%2BxFXJASyjuZWXlErFYSorTQV5jekxjGkd0Q3ZX2YQv2p2iBNz3THxtNoH%2FmOzH7i9%2BrbUZFX8ivL1uxcoq65tH1v8rNIHXDXDFAZwsurdM9XhlZHcd%2ByUKPFdf8d1KP17vyugqT%2FMuptrb2rVOGeT9GKkH0y8lOnxoAnxg7IovmxRz1XlAMecaU35MsAxwbvk7RusFABuThF3azdGyTvxZYw3YNbAzd9KqDgW4RaK3e7y8JoqRMfuqD275olPB4%2F83I2SfuGFMnMcFw13pNma0sy193YkmovXXvYl7upOzVPEzcHaKf8i99rBe%2FKjWW9sVs6oyQkzP4wrklkqwpmlLuOIvtviJYNGNmGzIMTpQrb7k%2BNtj2WynTpFeIjGAs4K5eh8KCPfJPjNTCLMPOzv70GOqUBZismoQktERk93N7shxqCcp%2FcFb1NnT1dkj238U9BU40a5HqwaBAcZaqj8yLdW4kdAtu9bV3DoSI4QH8iHXv6EXbQQ3zicso3eDw1gMQvpWjgwS8WmWouqzdxSwmJkmFXQiuahALePfST9Bs%2FGHDtdldA6cDjV1iiKzCaUzPNQxzCZFcNJRRZaVHDNbPfqq5nno%2F6CGOUI1sXvqrAdze9KTDiSpdF&X-Amz-Signature=9a3081105b9200fbbc1180f1c4a9a8999f36ca0cf0cf30b6edd66e41c657898c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
