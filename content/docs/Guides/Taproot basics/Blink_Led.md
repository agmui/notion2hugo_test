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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKXZUEK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDb4NjTn1RuW6ZmSpkqr8i2fZ5WPfAmKuEpFukv8KtfcAIgd914oPsAYCUeWyBlRjMyT9VWUgMR8XAeB2fF0LaJZt8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBVZv8obhJXyv4Q8cSrcA%2BgXInX%2BRoSe3IyQJVwjBeiGxkC7LRbq26rMxirIsRe%2B0HwHkGnU4FGBf5fJASHdydpJSEoLks4%2B8Qw8ogvm2rNWG7DovS6kJqAME02Z%2FxeWrycLz%2FPXCqXIInS6tkkkK9shzzuxj1bsM%2FQXit0M7QmrfLQ2SfNmDXiLMAZP9XksWjz%2FLzVEusjL6%2B9HIxYCntTRixS92jTlZhZkFvErTgubgUlURZnIcL3T%2FkP4rMxzV3dW0hw7790%2FXJT8GMxoBsGNDCgOhQZQGz1yvv46j0wUj5l8zv2IYJWcNyrLA2yRfxKVR0sJeAAVV%2ByST6z7rclbNtXg5x%2B3GqfytUZ7PfrEOgxB%2BkhYS6Ruv%2FpxkP8tLXAT%2FevoO5Ck0nWW9SKUzwHzigi5Krbh8%2FIwiFfDwSxel9Kem66lewnjKwQdmewIwj3H%2FWv%2BR08ERvn%2FQAn8qS09WlwIkHFprHckLzIYAZ96hMDui6U8RlMOuUA4oy1CFs5zPVCvcotsTZo7%2B06yJbZmGJtChGpbGE8iC8rZDaxDp7tuM0hiyTOlngs6fSLTHP5gL15vF0MMvHvoqWK3%2Bujbo4Oz%2BLGMKWTN8eQ9TIZv1p%2BK4tJFyqawitsjj%2F7QXaNy6Ze1nnEusFC3MMSy6cIGOqUB6L5zKt5kOOh3N3jYbyldrsDSn4skVF8VKfRE64%2FHKUaRBq8JmtvoVLfSh5543KvBMP4y16M2Nyxoo3Z92yimCt24bsdv2kdyTNir6qES14K1od%2BOeElZd1rMCU01LX4pnR2p%2BdmB1WF2pXR4Uo919J8POGifR%2Fmahx02Li9IsxeXyR1zJURwlyyjivpxFfPD3Cw7kfvZnSV%2Fbbl%2BeqVf%2FdfmFXqx&X-Amz-Signature=74d04c07e08440d8ed4be6ca717f586407dd421f6c36647ed0123b4086e7acf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAMYHGD3%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIB97Vwe2DFGc4pNQ4lWFa%2FQ%2Fy20bmuUnrLxu0NshTMZnAiEA6Cx7FsaohaP5aPBNj2LOOOk%2Fbc3FZ1v32MYlkvIXBKoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDBA%2F4n%2FuHU0cqOSYQyrcA0PMZsUDtHqxiBurHhftic7vBlDGGUWMXdRmbVnmHnQ%2FlM4dOP33v2dyZdlTYDYTLlbrcMyunn%2B6nLdRXhPI8Pyrs5sJpLyX0Dm%2FLZ8E3lGYRAXnART4oO6CeIEPnxONuf0XLWXAdlqy%2FyHglHdDq0JJk7JVCKkahKP9eUH0MxF0qtr8ajV11FZ1jFQRxHUnhoIcF8nN6ran7EXBsy4xla6kpEeyepyEC9I1kgasTVE1TvQ3E1NVqiCNNOxSQTNWTekw1LXyeUWQEVROGCv%2F2dCCk4NvRZcBdoED2vusgR4wRuSKm19xfhlaGyFncWaaEMvzgLGDPeVFwYIAJyoSUXY5JPfnSFET8irIJhlvFtClI6PNlEd2MX3SF9%2B26l%2FqFtZMtsQ5z6zs%2B3wlDSkEwk0VXKqTJNE%2B9yBka7n0hfwCpJTn0lqsN60reR%2BIZzyQdRUA1y7jXWfYonBpznDUBKxGSuPPqS020iz2pO6O53zC3NhyfH63fYq%2Bvd%2FODi5dDp3moySHpop0MMfFPgWb3ENMnxRtjabQtju6SDzr1FBZ4LlEM%2BFb3m%2B7mT%2BH8UR7ZRXjKDs9%2BAdJJjDi3ecxL77m%2F4cI7KuNqUyQPdogqRNxA0zUSJQwi3r99yJqMJSy6cIGOqUBBawx%2FHhLnNqQdIyhGPF4mQ6iOsT3KCi8EzakQGiPM7a4ROCCLavQUuLJylrj%2FEvcjrA7CxMtRnwv2uPWXaMWne%2B%2FcjZyaqz8AuIwclr75MVt3nG3M%2BEcajmJJI5rBIu76WVbU3Z3tPqeFZs0wFre5c0NESXw06CKAicH0BjwDP16rLaibsXI9u67iMCmNfh%2BlmhfwqyGPPmM3gI2SfJXP4pio78s&X-Amz-Signature=19db081031275c5e832f470da84cad3e4ba35ec51ec2675ee567feee1a557b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
