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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YEJHYPZ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIDXuFs%2BkU0JHF6IcbK17Z2Pu2M7VN%2BWQIynx2XUZIjY1AiAVYY9vDyP5Q83XT4%2Fv1WmGPgpiva0Q%2BHqfI%2BMM%2BUuPRCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMHgjg58GQBs8ahzn7KtwDsG82RWqtjcw0tXj9a%2FaImB9M%2FAYbHBCH5ay9kByjAp4byFoCOgHuLuMFty1S%2FgYiCmTrVkworeF6kjHxpgPmtnUvmGXIAc%2FL%2BrbtYOm7WgMJcjZ4JKXbiMAAjPMECpzv4g4Ab17ldmyixunNGa6%2FW6vH4PJcsvJQurhJ%2Fqu1dSA8kFM3sFafrBXVvntJhB1UYwH8ineUFX7U2T%2BxW6arYXKiN9htlDD46dBplkijCuIPlV6UDj8xaFZ8wF7WFF9quUY5P9us0P%2BJSg%2Ff8GL%2BExEF6ZfbyyRV3oRTWwFZx2oO9I34v146wCW4MDpO3pvYuBu%2BcsiB%2BbOcraawIherr%2BEa%2BXogXoc0Rj5YmUpAYwEoINTvSB2kIsK%2FDpj%2B5wers4w2Ol4j8dUeG2Dk4dQLPlxmMaTNGzHqbcGP4SNHBcAk2Xt3jranE8KL%2FPlti0WKqGUyKUJb0LcvElGCMPfpzKXmuWD6R2FcC7I9ngUYy1KtkxO0y7fUEVm9k%2BkLPMQyZ9Q%2FC7Qv3VIsvNBhtUbkqVC3I8XUbi9UQ60enOXbO9Y0W%2BIg%2BCOgi0CrGZydrs5vJzutNBSauZlSW7ycQWNPGmcCYdp%2BvcErheUxN3YXa%2BSuV6XKf26%2Fy6SAfLIwj8X6wQY6pgHwL09w3CFHkuylqO6qf8V44bSwsTlcBmirhvLfOBvffLY1MaploEqtjsb1tUPc2dTiRzIwKUE5DZhHxWBo7qizndcb%2FGa10OP9ejvMVI8EXe1HQNjqw%2Fs22ZsAOclEMMP9PknPGRyEpdUvBFTMVZa3tqUA%2FvkIC4YPycWmrY5fTc76iI4GYgtvIOY3zc9qxWotIIUCEvOODx2NJnxh8u0YuLTpaOq8&X-Amz-Signature=fe6ce9165f8a8a65079d8c20e299f07170cc2b1fcb64bb1ebd940a7af3be4621&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIHHTWGV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T081322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQC9Gfv5hPWyyy5JuIW37Kvg0N50NCWtI%2FUo4G47Op4S5wIhALcxc0WN1Y3NQBD1MbutKTDdnnVUvQqqFOjXrxr0ikbrKv8DCBAQABoMNjM3NDIzMTgzODA1IgytusNwisDos2bJ2K0q3AOI4vbnkxt%2BcnJ%2BBV8qV0U9cZuQr00JWwdpPfY84Wt7DIIOBHJ7pJ5Y%2Fk2PzUfnKMvuI8DZNH70YCJLqsSMqS53HC6DrYGoqUbPk1hfSPH3bFySyzKtenKZOIvkEPpN6gY%2Bh3oQRZEk9MjNylJbBf2%2B4AVScfgj%2Fy6xmWQks6X9m%2FXQG2yKdms5TTyjXNB74ODI6Mav86CwrS7LTZad7ZmCfEkyAjJeqCi%2FrnBzMiy8Tsg8duZErnnqPP5lWBWj5zcjUwmX5VsoZrn4x2kcFBx31DDrnAvhT1pAV80o47EqbswoWsta3xa%2BbxNhCAFVrV3lladeqD3RvaoIG3yqpsqTn%2B3PJ3KMXltgLmhvrKdPMlz%2FSyn5VRA0fyr9k%2FKsSEZpY6QQkJ8%2B7l0gXhYFwzDMVvneH3BOX69sHjy%2BY3IyumT%2FifmC8jAksw5bsf38ogEeMevbRX3YySgWnyb9ijh%2F6QoHAAFFMjtuWj%2FGNaAx%2BuYWK%2B7qB6l2GjoawHdGBL2Uhyonm53JnAIGyrPuppcFq%2Be%2FCdCZLzr%2F3dywkIcgSm9SV%2FkUtoKIi7Km9ahxxE1SEOJhsQ%2FStEgYD1xAhR32%2B43CtOLdsFILnC3yiDWpaTCwEjXQdUbj%2FSREnzCCxfrBBjqkAXTGsBqFkrpcbs6vFVW9IUuK8Op7NXycXAm8AFRs%2BxD5g9h%2B%2FIFMkLkof24z7seeTwnvleQrhRLbiZ9S5M6eeyvbJT1yPiqYhaAkS9iHiZd3O6NuGBtiVWh0yI26uvVB3J5d%2FJ0MOrQZ%2BLu34El%2Fyo28bdth7RqkWp8XBPOy%2FjNSDByufm3vWyckbok59ZxA0zxaTr1M0F%2FromSeexsbZ2E7pfs3&X-Amz-Signature=dd7683b2d5c241d80534cf130a55fff24f2b2281ce3afd6cb43eb8072548e6e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
