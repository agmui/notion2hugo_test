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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DM6TL4P%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFMi6%2BkpWNbcRPc%2BjNtNc11WzdEWLtVWe1BA6qJovycMAiEAyOxVjXpmMEp8ZlIAUtyUsNZUmvAHZc%2BN6gUSfP64XNUq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDJ31%2FgjdJkkm%2FWA5IircA%2B%2FnQsJVHhKTxrr%2BUB1YI9dEuP872Oh1z3RT9qICxygszyuCbGu9ngpcrRZOdPFG1v4XUB9L3G%2FFzVYVZoWVlTtTM%2FzeAMR8VWjb0fhcFiTPZ%2BZZHzypEa3zFD8WWGjfD3nKgT0kO3mu4QV8fPsAnY2p9%2FXKTFBeTY7Mgt6OWIh7rV1aJh%2B2jn6jqkgEJoCGd9s6ipEJQDU%2BpcSPh9IKaRHlBv6349%2F29WZYtycpaSxLv2KULXzp74EFjjmJUbcXKXFQk7RdF%2BFafOrNwKX66S3Jp8KLWBOu5Vkj8K0SyK%2BzFu4nNQITrFT7BD%2Fg9D3jBN%2F%2F2dEh4YfzQN6IlNJB7r2bQBFjwCfsS2yPIFd3VsePsbcZAZKwe9XLYhaPzgJGFLvWtuVe%2BILlt9Kg6YmkeNzFfxwdUKkJYkJgDYHgEnLKhNqiBlbSv3WSweOcbgkTeKccu6XpD0RSPAuy4lfZc6w7eYV2eXC8dHZfNEltRlEV%2Fm04aLMpyQv3Nuziwgz1OdywStvjgUpvaJAuGlylk5zYsnlqBiUru26xtb3DXcMaDkGauvP8IevehU4mMqroAsnqG9Lte3YODQkETBN%2BFa73bemJMoii5kX8URYS9o9nyG%2BH0Qy5Xm2uZC0XMOrI0MMGOqUBaiQVsU7Xbw7%2BCCfJvEXt%2FHXEDpWc2LUzMxO5JcZ76iPPpU4khSGODY%2FAQNfKEJh965KUuowp2gAEQ%2BN24fUYEp3J%2B43nxaAOaexWPvORml5vv73MD6VcNP7szreZuIBU%2FQWwVlzTR6yACIViYSIn%2BOH10h9HzzUDZWqBNn01%2FXeUF%2FNRowKAEmQkIMewCAePAsAyvaompRYvfP2%2BpM6rcn0YPnhT&X-Amz-Signature=24d1e1c6bb99cbd27dd7e29a9e17a612a8a090059ad0d38ec21eb43ddc286fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635IF6L3X%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDAXW2qXpVcR8QD%2F4uBv1tQVE9v2OptMz4eBo4CcQcQOAIhAOzrWSqBqDdgOz5dVSBCsFRxYl3cN3HnpRQSxfSCJD9xKv8DCB8QABoMNjM3NDIzMTgzODA1Igww9LW66vgvdpKtSyoq3AOXtRF5hFwYUtEtofqMHB8Y0c1k8hzXtdH8V1bGGtk%2B9v6OGouTwu%2B3oV0kpAoaocLBdKr5kB2ocfqiSlWKfqyRuaGxU06s0519sMtuddCZ5SXfrS6CYLnfxvVepFgs%2F6oC0DqkPzUGMiprTAUN07CDAeZ5rcU%2BbNWsbR99v4hkG0kz2SvzFiWWL69DvLkFyqdFlZLkGpAQA%2BxPyTvc%2B0JPiw3GJAenQ5DA%2FFd0xs2Bq9Gdhz5izI6ZqwpAsXr1KlR9Ja9JHdXRposxn7vmomnsA%2BBJHT3zTcVAzpkH%2B93bKL%2BhVVWlkDu4cjuLRdHzUyyt2tuvQQeCmvLczE4QtoaKrAJweQHp24EJOo8ezGsN7g%2FthXo64vNPyUNsXwUT9oAUEeeKIUKmBWl7lqJq%2F%2BBsJmqrCtUYoXG2j6%2FK7WpKmcXE1u18xSH8c2XEc02W9ZEa6KRT33ObnXtvwROF%2FUO%2FBAbrmZOs4aYlbozydBiWBXjU9O4m7JHkRbq75RDcgWDjWOI1p7sQLQ4Ttv6xLNsa%2BMz9xLawSTRN3KaFqD4IASiGwXaWr46a6vz%2F5i9tvvouYYG6KnZ%2Fp6XrTUotqeQ5owKFsLaSGPgJ5JcBII5LszP7KOccyiqc87WjGTCkyNDDBjqkAVI6UmKs04zvLBAmcI0Vmi995GLYgLqryrsSoI1sbLr5v8Zm2jDura4wWq4BeLbLOqS1t4v81I1B2zdz7TtO%2FP8j2kg6m8v5Bo84MlzM1qN7RmemwCRPdUYC8R3p3aURKT33S5j5Ih9ewJmOaRub2k%2FVT4gwQmSOKE%2F%2FMwOC3k9Ebi5b5gwRJwaTESSxme8nNzrrw8p3GCPJxe5PlCLlwU2u7Nzj&X-Amz-Signature=2a0245802c8a623a4098a442812605b9c95a03ebb6f91a58888b412e8c58e9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
