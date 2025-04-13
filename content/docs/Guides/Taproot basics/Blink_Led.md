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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XQRGFPU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T042002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIA4DHqfR8dySAQVpU0UiWyu5p%2F0vO7AMsXJLy%2BIlZoKxAiEAtSo327MPoqB18BBL1SwgSpzZtv4AUJMrO%2F3WtJ7buWYqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAKhSNW4a8YryRP3SrcAyimZnznu6qDBDrVTWvTvwbD3bJeGluSPKlU28aS3cz7NTdT9mgORtg9rYstMOIQJbtxHZ6AN7dplyku3rQlAv2uCkYF4wqNroBTxbLZD9Cf37KYb8sSDEQkZNLcQDxmHgxed6rXci%2BfTTB9FcEAusGAc3OJTF9BHHJVzhxgPZTNwU%2FQRz42njMkug%2BoqsZef07cVExoRaRNQ3nqp%2FB3tdp7xkBHuJoJxM50585WRna5p9aAYixGIjr5h8XfEE5VvCyVFKLRTfYDI5tJUpaxK9Q00PuPjkmBxxm9ftyPDdpZaq8O6%2FIDlJuwJnqptP4gw7EcpdcMsKiNWmf4O0P6ah2Y3d7BaQ7MBwgf%2FiEX4YDMBRBB6SuZMAMrCazy%2FUTt1XrMwyXAhX316GRE7JcaR8E7Gg%2Fq2Lz19G8beBPxIuu7sujtDvx9z4ind0CJJNq%2BhrLV%2FM8VEhtUtxz6Q3aV1vDOihmDlkSFIik1jUUmvndPtFJ6FeMBKpn8cIZqgOhDO2RsUqhbpzcbSmUaXhmFJYv%2FZK0dqJp%2BplQGrsIVMF%2B%2FTw32A2W85EcQMXgLU98QlClEHEJdL1Ec2ppgkU1688vb74Clcn1tVqsgByvLamfMekUowvZyYlD4nKkhMJXW7L8GOqUBdjOWqC7n7F7kECnXh7BdkMfQLmNFNtm3COqnX0z9xYr0G%2FBIjl3TojvQPRml%2BvcqsrGXSj7Dt775IbkF4Ki3yXgiZQkkZQ8u5%2Fv19qE114krwKUynPIqPZSZI5Civf9cNsiOTTSNtzVhgmMagk%2Fl4aM2xtUnFcW8r8SGsyb4dk1xibqlb%2B%2BShq%2BKYJOyuPpSJ11ahDKNPvwoSAPM%2FXLlzGPwN3pp&X-Amz-Signature=207134bf491a53c9b2e0055a65911de5e569775ecc4ecad006b0863a4c4c003c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JH3SQX%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T042002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIDgTNxOKkeroAdFVh3ZYg7GAY1OggGe%2F5d9Hfu68xT2yAiBVj6dQl1haF4tpN2ypwHMY2Pq7g2nSqg6IJa%2Bh0LplnSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Hw9G03aMvw8iLdvKtwDGoOeXFHTcTGP8LYsywmacyGEHoIuRsF8CFK2tQ%2F5%2FkqaOGdhDzDt5EichkQdqKmqpbXDm0U6udABG49YJUQMe6PZUjzPFxkyXCJSt4sJCXCcG%2FVBQSpqPQkPdw6UWhQyy%2FpyY%2FRoKYP9KBccvo%2FYf4o1wYlKA1%2FLLBwFppx01pIeQba1LFnlo%2F6nRkEWuJZYRKqWssVw8d7zbbSFBLO4xsuJVQXS10wkqorxD0KY5GDoofDUIVV%2FKmHWfon%2FS2Xq6%2FeBh1RuGhxHY3bFULEyVrfNUdsqU4gF7zrQBq09phnb5pvPJmGN5bGMxsZO2InLaRY%2Fw5zC7wVOR4iRzt%2BGhPEZ%2BOVOi6sRed%2F%2FHgJokXnZf8fF%2BSBN285aOktvOHRBx8DQqp7SJXvYrXvkABnQYF14y1r2XTXvhXphD3fC60DZv%2B6r0ln8toZn5qBrPdcmEGYvOwFjCIBlWqU27ZCJm%2BLeg1wLxaeDbuMeyb4IqlSuw2NY1PBLALr%2BwkORdGpEz3riY%2FRhwtOCpyP3noF57du9mtBONQVjgr82nbwvmk%2Bb3R0syUFIT0cQsX9Y24EuDjYGbKSDdzgezAbDXq665tYqSbE3rUpKScWhud0sa8atTIWlfDclEobvQOEw1NXsvwY6pgEGlVSLtNQ1xO02%2FQbuyn8EB0mr8MOeU%2BMYkhabggm6bsl2d7aD%2B0UxSsyaELAzZluumOZL5WxrhKxM2unqJ4k1B91%2BwLjvGJJ%2FzmnV8AniNCKPzqHG7AZlLDSTsPWzi9K0l%2FPhk5YeM%2Bs78o2XqIIzMWSfN0lSxztJrvi2sFBbMIMZbYkt%2BSwS3d4WqzidkQRItG5cy6f6VfUhbs39YfOfx49coTkD&X-Amz-Signature=34e5522999defb483c62ee3ed472b4a91a17d69fe2d813421a3a2ecfb723bb9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
