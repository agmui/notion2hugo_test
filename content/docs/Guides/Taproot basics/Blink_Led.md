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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMKN2FE2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICibtuzuG1yyVtC2zlzhsFZWTLGlEXzj68O%2BS3%2Bs3A9jAiEAj6VqJIHqGjse6kbhY3u9LoW90wzhjKWnVJ%2B%2F%2F8MnsOMqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJMdfIHhOEtfgDKLyrcA7ig5wE3390iKBNhAd57vH6bbY5KT%2FlZsG6hicNBkd5%2FCq9DTnh%2Fd4W9YGGHbh6VHWH5DgQSyOQEH2Gf6o0jODc778MzPJ%2BP%2BGAEjTgPV1alflQvZG0DYXWS9M9flc9zSuKdVOhxEYaRfIbpR5qCGr0Z76q15XNCgNR71GGF8MIFLfbbjxSn9Ab0OjQ%2BWfB4ZTaabsjvrDsiRuduampxVfeYuerkGUgx17afJ%2Fw%2FS4EM5pOM83vXm6j2%2FKeWgXp3Bq%2BW7%2FO3HNDNGf2WvIq1uBJMv%2FRpmIQVpRhB1qEDxq4yFNx8dm10SkWz3w2xF%2BW8%2BLQPxXOrsI5%2B%2FeCgM7vrReNHjScMPjZN%2FrKitNeiRMfNMOBAT4DnRw5qUadA9RPe80HoMONs1wF6IKDfUQsUGttkdTs3il7Qx0VsHYULevl82TGEt60GCgmiaY29iPztgWjLWqqO%2Bh8AwS65gMZcklwdUBzZpNTM8Fj7Y93ho3L9sKlyc1jYbzFi8ZPLAV6OhINePFYzxD%2BoSMW5y7AEtbvhR2uYqxZLeBJJSxgy37XocJjB5SlkEdsa4Q64gzOgielwXbpU1D2HgpLl1gbRZdHi4La8ue8XWw%2F3oZSCOFfut9QV%2BlwcNrvyi5mfMM%2BGvsEGOqUBYsKdBAV%2FEtCWF1gUKgPhF50wuTUzG2AaWw9QYJU9s2mlPFGfRORXRXG8oc5f2MRz346eYNwTIKKMWfpH%2Bh2DU3aJ2LEFNcYairuYjY8QjyiveIsNS59DvrBUi56lO%2Fwqq%2BxJAXUBVhisZuEHCa46qlBScQpzjHt9yZMbc%2F5s7y5mu7Q5ZffyVuUjj%2BwILmbWyVlZnhADiWqjDw%2Fhig5hcrtANHgs&X-Amz-Signature=0cc45bfef94782707728ad7738330a1c409a9cf1eb97241f8acc4134e34d5443&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQLVHY6%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T210759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIGey%2BEtDEMfdA0fzXDXwdFMj%2Fv%2FJOLmI34ufa1YNLhIBAiB4kshgN1cwx7Ns3y61YMaAQcE08YW761ms3lYKuqbdzSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCiblL0AcbcepFM5OKtwDMPMzl%2Fcq%2Fyig5BxcF%2B7F8m8F89tbwIQPr3M7E3DyxthbhQc%2B557bIaK0ipN7S1oZlI0FpbkxozM1WRRZ8os0hj4yQ7lq0qsy84vvBNt0Eoof7yPaBTQJIvPDXgdcozi0uU5rnCnXnn8pmxFRzlg6h%2BbrUYG2gVNUcN1C5P6vIrPWEG9rjM7ZB2yfU5e1ucb7M88MQjATN8Bw7Tr5TZ9YzainZF%2BC%2BWozTGTcBqTmsjJgWkx8EerFa8Yzvc%2BP%2B2gshxOdeWxTZNcfDsyZCj1zBysMuck6XhoQltrgIYNDJINs5MJePmWkBBJ6xv%2BzGaNKK5OQ%2FX5C%2BAFtuaOjKn8h0Om%2FgueTAgQ1LUnpI%2FtEP8MRXEPHAA%2FFgb9ttqS%2B0ejYQ2ZX9BOHTfyNyVesMgwX9Rzy9hdJbQw0XME5A3Lu4tAOH99vLxfloQlrisi%2BzzDW8SJkViFDrdKcU0Kw98P7kvW12X51w8SpaKMyV3TXC6dxz%2BKQsHKZEZKJB5TjrjybicR2gVcGr5X%2B2MlOHY5Var1Kr7orQSI3JPz96SllGpXE%2BDNvJ2JNTH4UfM8IySdUrOb%2FcTG3cllKxiK4M%2FVHwO%2BVXWQuTbJk0KchMbNcAHPBHzivaxtnZs457XIw7YS%2BwQY6pgE84KHdW3Sk3dVYnL35FARIRKYSgh5K%2BSpo9RfVZyp2MlrhXMUGLHUlF9aOz4RVzgcX%2FXcF4%2BHhNTxsvveJgy0kFBFC75v0eKqTpg87oFiMVW4d61%2F6xBdLkjo9dc1S5fAezr6PbZqJaYA9iQhZLNgmS%2BwhBMk%2FkK3nltjTnw2wu6ckji3RSE0Dqj1WDABlgNvfmdAom3htCaDDNeCppgfN3PI2V6dk&X-Amz-Signature=cedcd75e98449a8236217d8209f115593cc2d1d54d05d020e41cb01dc04bb67a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
