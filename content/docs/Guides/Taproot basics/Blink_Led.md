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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U33CV6A3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTqWfsHvorYlwVsuBRQ4DIh6S0RU%2BjO%2BN4qWN%2Flcu4EAiAEvy0gcNh%2FtZUlpoAUXVYal3esZB%2BRG2a9Wp38BmkKsyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpzbEP4CKa81I1lHJKtwDm9bZd%2BaNFdHY6TxCQwWklFMsQwyJq3ktsLIyEaLS0hWS9vQ7oKEZXtqP009xyOPCSFZQaoZxvFBjoHUA5185x%2F3Pu89nv6f4OHq7yMkHECKuusWDsca9F%2BxDnLRHoW2phJPgjLIuSJivcIwQ%2BYDgL5jnxZOs5OKatPTy7KnjsaM8ZsqUdgDW4D0e%2FUafvBagkuBImtEqUCsru2R0hu28EW1QcdfckLWBajzthRU%2FSgDXsD84IiH4wRU7r6aeIJDYx7UgaNy8kiAk%2BHP%2FaYK0DKHhLBZvL8owLdY%2FGBc4mI3uTXOCYOZvJkKUdjAi2UEAt5j03Gue17FGJLH%2F4ZW2MggsVQtJCYAoPOO%2FTFuDkW7ADSXVQo3uumyQk%2Bd9QT2fWKkHrTNR4g5GQJCqpQK7g2vAbCRteyKxWdFizXqsyh1cnnpUCoYaMvY0R2C%2BKm4sOIL8awYFQtCSXnQP7J0vEZd5GEceh9FDyAluPMLpZedFUGK88lZWq5Ij9ISVllNGwI2fAku%2BFVBzWUjKNGLlXeOAjcWxKp%2F0WY3E42Tww9mjXbQxAYMLRAgJyTtnd5lBJqQU%2BquN05gqJl8W7putHvbdaK0YN4xFOnDPnguEvNLZqzhUa468K8AmSmsw4%2FOzvQY6pgGMz1t%2F%2FiksEqsdU2tbMYGRdRhhiuPJpOd2diVrFUbzh7OM6OUas%2BYR5ZPVXLwTAmVWb6Rf2kj1eF%2BxvPe5f2OjFZrWzZJljswuQLMpEI1HVNFkoVNeP%2Fe8oVV2XIwDJ8PcgatlOuyZRH69NLmE10Z9ew9YMyg3z4EcimpzmzU5jukTJzgxy%2FLzFwxeMfmD0y%2FP0SKimYlbh5s2CtqOMNYTJ7LH%2B5TQ&X-Amz-Signature=bb240ba40bae4449cf0ff9e2a80acc76344611f9338660c59f1d0514cd5f8611&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YI4K4AM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDn2wyjyBgVA%2BEFu7dQyZXDIvNPY0lwnoNWWENYFAO%2FAIhAN3G2njRyJBGuGVCz9eGwwiWeEXHNrupZwc0IJAVPWDUKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4aoH6%2Fdy%2F%2F%2Bit0Iwq3AM%2BLIKDcEDtnOQNjtuXhq7Pp8FlYUicWfop7tFM85J2FRF79Dj7pzCLPqSlngPBtETG3P%2B1rhoMEOdY8bFXY4yhAIhBt0P3mL%2Bc%2FlJ4nBP%2FAEQ8mCFlMOKR5UCkftAW28534P%2FftvNzOPuM5NaAoXHY15JSfssmYHVMrb5B%2FEZ0Ad7baPbhgj1MmQeJ8QYs1z7PGCAKsmgWVxgtKHV37nCOFSQxM6Vq56najbZWRawwmwftJBh1rCL2%2FuY2mqzLF1wu4cM57rIy7x3ydsYzz6GG%2BfsfYJqg2%2B9%2FMAs%2FPNFeH%2FI%2BKnmF%2BTWo%2BaG0jnojtdkBTAGGcZRTRNAPTxfJbbcL%2ByFutgtkLXMaDmbDI%2Bz%2Bn5fFpyVHYyHatXWJDYe2TVERtiXgiDic%2BVCzNdrDV9kSBsywFP8%2Bbum1WEmH6AB4IPg7%2FfOR8ihpdGQKVPjszQOz6bhQST7KQm3NbMAuki5AgSmXcnHqaYgQrlKyCYMnrRKnUI2rPVn1C0TLDQCYNlkQKJmXzUtJuzP%2BxN4HQyeXG0899Z7lU9gtoLtdRnQcLSl49OlzSuyMDAENkLz7%2BuXNfVzf1i6iE8EF4b1OHfCscMnOE%2BZ%2ByAN9dzv7UM3X5WP66nkqGaJMR2bauzD58rO9BjqkAXIrq0O0ItwbHEf7ov8X0RaDAAFz6sn6vuVe1ysWk4i1cjEEqXr8DRkADDBqD6brQzq7DBXrDO6vrvnWcQs1eLaxGyvtD5U4wSMDAJjncX%2FqaraIcwZ9FSOs7PsSb%2Fhuv4563mPMuL6eK8Yt%2FxwKQFpPy4WVGKleGdDrrHlqIAfSPBqJjSJSUxomJwceW5I%2FA4t19IfpidBs8QEQanskxEqMvjeD&X-Amz-Signature=834e7421115a51588f2332d28f6031e41f9d06cee4cdaf9adc97e0a84ba95261&X-Amz-SignedHeaders=host&x-id=GetObject)

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
