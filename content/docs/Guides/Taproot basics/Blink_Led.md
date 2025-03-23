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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBFP3L3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDsY%2FYZGMePmvo5MuSXc2tYJ5FLoPZfKvRud9hSJqS2pwIhAJHGPfqq2HPwr0NmZl%2FIZ%2FPZ%2FOH2snB6ensOjL2OiZL4KogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkxgI%2F8UQ3czJPROUq3AM8Ze9EAqj7g96sbudkRapvH7POlRhxT2CDh5MZcmEKKDUg0cceqfuOw3sWQZprvw1%2FO%2BF8hC3KJLqjyqQa5FLPo8WPdvX%2Fu78FDu6GwXaC4Ohzm07t1J2rRS6%2BUX0rjnwjP6fsAHwvuJoG6wH9UuuHUVR2V5k6IaQuZv4KdQZCtWZrx10F6hgWkEaPPW3CJDmF32OUY72hreBpl0AaHPoEynf1HpJ1Tggo3UY8SeCr1gx36xuRcE9ch5KCFF1AdHpXgh%2BiymmTzWuI1UvJuRdXpkucat%2Fg282MBvG0OCcK%2BSW%2BvYL4lkO86ZaMf3nbHd12ViES1HNoQzUeoNorgFsvF7hcmpSEWItpuSkEkIeqPfQCafUHyPs0%2FmkPOD98fqME62Kk%2BPcgFrpGLIR%2FIH49MUF4k8uM5%2F9vh0RMivBLs07j%2BLywXGyHpfaxzMgTL1FLJ2UHLdeJp1DqQF9ff5urXaRNe90%2Fq37avFKRsTaoJxQaOy%2B%2BLgZ6dkZKpder2sf0%2FOxqEDfkP51h%2BG7fzC%2F9j1XnBPy9WjmHzgfFyqfMqOSSaAe0PKDSJL%2FOvmBbFtJrlWXH8UubEk3n01KqsIrnTldb8Nvbis9E1QKGOgnwYD2r2pJDKFNwgv366jCszP%2B%2BBjqkAWAlGCR682VusU3tUX5DJAMUJ3qFNsihom5e0D14pgRSM5G2jHQiz9BqWlK0tHd%2BKTe8rNPgSJMAWXwhC6Hv1InKaWU8s0tsdVnW9u6FY8%2BMSNoEOaU1DOayG4cQd22J3v8EwKMU8ZokNiF813UwlxQzILM7o0ACeuyTF7lBgkV5ljJ8jYs4X3yB2bLgZvteDaJ4AXTQBzePkG8BfnoPV74U6dmk&X-Amz-Signature=4b49115dff4edd159d9471dd1ed635496355fa1e90e616b87c07ee2f14a4f6ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STDNZ7FA%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCtDQcHoxRCedh5dCI2btQeFBSUQN0EQe4IRmF5GXfY9wIhAIFNfaet%2F0Vz19zRKyLjSGxLVzwPLwzGY8Qqo45ODznJKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjJgCWtObSLtvCA1Eq3ANjFiDaDExOWOlYqKYurXUV30q6Uzz1c2gpdkp8Egb3GVMPWv1OQSU5xvg9qc4xFFFKiTvC663o7mZgYmzBSQDA4GGlyU9jk2uQtBZBYNQd4zRw9Wg%2FBn0lTkUFLhW%2BaagJgVeiPB8G%2F9npa5Y6KgJQsW72STCLHIJ74ggBQg5yQb6H7c4IlkDaJB5lNU82EjFHfjIsJGCHiaQv%2FP6banmcQAIhjnNYKMdm4vzbC39P2RjsmK4fv0b9whBre2RubuMb7lTy1r05FltwGblDkREtslqpnMzp2QL5dJyNpiuDrPTWboMCmbhAz3hjwZULFjyi1NEBZ53LzQZWzS8uYjKKo2cPQ56vqlI7QDDr21fF1V8GARzvCHYKsLUfV09HsDgdzvbUU7E1F4web%2BPMHR8KsTK8R52AoPM8S%2FUki0d1%2FuDZEQpZ5Ga97mwfiTiWxAv0oZwlApLp2RDRZnvvaay3OY4RqZLvGOvW6KCmESJ6LR9j%2B4t3OnENDpvwZi8SEq7gt0VmSPLS2OMQRWwPPWYKRrvGyOoMVHTqnQKM6fU69R4Ul09rEIZnJu1dNS%2BHT3vAfQ9J3PJ5rtBq%2BvMSMo434FNV7%2B22%2FcJemwqSDI3F8zw3tD%2FEHkUZjLua6TC5zP%2B%2BBjqkAc8yMQZiGQWTpwR7kf3d%2Fyn5WSmbn%2F1pfArr%2F%2FafT3SbpfjiksBsz8k4nRA4gL7ciS2nDh0gsVt%2B5kNWTYYBs0%2F2nVdhWgZ8iOmVDu%2BgjITL0rWzYg6i7k%2Fr8Y%2B6UlHUj2WJeOAsQ0G4nMVa7N3r0DJg3dAl8fYHgpQgmx62etA4KEheaGhjHSnavJn68SVTFtC3hPbDJb%2BmWumAQ0Xczpu7OpVG&X-Amz-Signature=00a649edc7b02444cc9acb5c3a0812e2091521cc30ab650ad1d54168c6450d75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
