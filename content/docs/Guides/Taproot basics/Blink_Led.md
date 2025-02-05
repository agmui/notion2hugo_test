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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FMU2ZQA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIH4gtftKWw%2FB2pv7IcFegj8JdPB1TKBiZhXm2QJBt5C9AiAj8CYBZoJXIGCP3PETmkB7IslkbAid2PCJR7gDmsoZ%2Fir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMnFeZ2H2F3dijNEF9KtwDSA216XzckISr0ULOJuCEHKEruvvX6gD9AMK9M37HL9nykge73ghdv5SjBgb5K6LakzNnZeYB4T8XkwjAJiP1Hz9fNQ7EZrDv9UUc%2FygmVHSTHr10wY1VN2RVNsHsAZTPE1%2BqrUr7VLXZXqm5Q6V0OHA5wAPe0feW%2F07M1nz5OHc38%2FBAoJspkhUe8LiEaq2V5zniCIi8ukYLBl5ulf6EQ8vtX2CljDlU35UtZBJx0%2BaGSYeQVKZyRkQb3evum7Yr0n6kdpuVzr2pWGGyUeJeENegOKtzUUsU%2BxWv0zV2FD07qtlSrqyeHtdfi9v7JZrorRVH1I9j5RKSZoPU6a85KR9eJafhE4qEyVTHCAEClI%2BaAQE%2FPSM0SKGdOVXSxAs%2FbfIbie3gln6f0WSyGfv9nS79YRIWsrGN48M4NEbTcDLg6SMwix5Rs0wmo7Dr%2FKYMm1WQggSX6GD8zpQre09%2Fae7oparO5p0xt%2BfL2Tnapl%2BWGuh7QXp9Ul3I4D5M4wM6AWGGH4YjZliWVV4M7yC3QdqP02B%2F6RHzfNN54xOH76rglma98KAXxpXEFlqoqzi85WvXbpWv5HOzB%2Fdwh%2BXprLBapghgneJuew%2BIte3wdUzDgC9WFcK9LWbyTGkwwtCMvQY6pgHV19kmkr9r4tX%2BKomxgU4glx0yzqLahc8%2BiN0lqedmNiVlQbN8ra8mGFlGxxKmMzHdnzSB9XsxCYrj2dKXKiTvfHdOig1PMnS4tBzmKetnRViwMtET581FIa7y5RIwvpjAi4tD%2F1OxSYR5JcqR4F6PzCvrNIdlOWKhOMKtIP0V8VczqsLBo4oMmXAv%2BidecffNnIbW4YHwm7OR6MolM9W0%2Br%2FMGla0&X-Amz-Signature=621bfda676f34d3524cd3f747a31b35c58264e816e4ad773dca4ecaae96fc3e4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLEFTXM5%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDaz7Nj%2BHB%2BTkLAGYiJ9d6kJ2apJXN6DCNizyYcQWlX%2BAiB4jotp5Dywep2K5ibgd6qouEJrPvu0pTV6oeAeyH7dkCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMSGW1T8N0q3SDY31qKtwDFItSOMVnoZdqrPPhe0IYyNGjPY9klew1rlg2XPir9qWFfTyIJ9Ry1zAGvSHwlH3JqLAG6lJsvHWYxKLHGpEuzec4U66n0FRIOaFinMvKR%2Fomtespetoa5B1GZ7pDx5uzGhGp2%2Fbxnl7K5JOdHcFv%2Bot5vDMATpmz7bp2OEBh5NNEO0GwIBxKCivKS2JR%2FkoWO7CP74dxvHhFJ3hpvCaJPTPspcarSq1M5oeQlA3OF%2Fns1AHgcAVP2huaS2ADRIccpBFgIdkHfOoTp0IWllg5pQZLxIyEegAIUL1g60yTn8Na88s6NABGxoaO3yMDOuuJWs59yqdNEwTBySOSCZvhNLNtA8cjfwxBc8vTDtPMmH9S339RqZzXH%2FY9GITMaW96EeKzvjsOccUF9%2F8JidhVFfuzPaqMfMvvWf9SF6eTOooAUYimvDxdNIOdo3XJvFnj4T%2Ftkj%2BaVo27tED%2FWPJa2z%2Fp%2BAcHIDAKkTFER8uLrKxLwW8tY9yPPWYTf1%2BOt%2FiHRvTUEZYni0%2BANICR7J3IBiUlpMCMlc2Jthnes4pswcZIbyNuVC0ZI%2FSke%2FxKPB1p9yRBqeWs97ppRJBAPuCnQ6PsdZB2zsBBe5CycgfJiJqngnfFLKsSQwerT6MwtdCMvQY6pgHuAQI9wtmVn5rXyekbqFQTK0npmj7lMV5Uq9e9HGvJLhkUbXMNXmsDzCdDZPw2uTN2HT0L%2BVP6AJ%2BLt4E%2BKOYWIHf42KzasDu%2Fo%2FyUbOveCV6EzDgp%2F50EGrUWrCvsayzQG6P65zwNxN069Wfe6OLa46GOVaFBSVAjR0fs3E7QtFzgbkAD5Iy3yn8x9uDPExS1A%2BX4Y9ottA3laywMdXYIq44wSZQu&X-Amz-Signature=45b437bef3dbc3b8ce497ea88c6302659b8dcdc75f83a09a08b65a63c9e123cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
