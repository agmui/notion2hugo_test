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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DRQOUJ7%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDDd54TjgIeDtAjjT5AOv4MoNn0PLeDGMpdBaGbeRI6AiAwuYd6SE5BmVFJBk5Pd2AOw2bgCtst3fGxep6ZuwNlUyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMMfRDwL9BoKrKtGLkKtwDpGUB75xjMtnYfjFscDEl3LT8riHBj%2BvP7jaGq%2B7VxJmDKY5AS7hB5XCrvQXk98zkbM%2BqHYG6MfD22TB7nKZvF%2Fu72KQqhlSGyTRdSulABNFjP2juNFjwiHyFzRf7H%2FWNBppT8Z8oPZsaKMvge8xS5YJ26jXldRSz1Otaf6XQfNV0DtCMxtFVnMOLE9adSaNTcoGz394hjsyp7Vic5cStBMHd6WXPctLjlD8bOaJf6gCd6jNEMFeEfd3h1IXqFa1FI1ATodAa5F5F9Hh%2BE5v80vQknQ0uKnMnquU%2BFVpabZ2shO7lToZ8BbMlV78OhnUiDBzP%2FORnPH%2B7zjyq%2FHj%2FMZD8bslz2orVmh9mLKEZfbsJQ%2BkPJNwTU%2BPUf7X200maQebisAF195c4sCyWMTmdhScQxMO%2F7AHmXXhvOxT%2F3B6u2Hq8IWZgWqYnCsZpb38ZMx3Voj4yJpVein0Vz8kPlNeO942TjSqIDRDAiUGTXoHgt8ijOiluLBya56cTN0ImRrXt%2FYbB9AFAVT3AKhjj%2BVKcJUGKEqQE0wxxyFWACmElZ79AJmTC6QczN7uXDudHntU4yZFVeuwYqMkAUm7AMZtO6G%2ByOLW4Me%2B7De2%2F9teHa9oLsesmlOICaIIwmJu%2FwAY6pgHGTYe5wbTpI9iMlR82Bkr5v3X6xmk%2F12rxY5BMlYLc7zxpDAAuVa8FTlhhGyWdjE%2FOU3Z9jaQJj1BdJpU6KkmhlnXUnZWeKb5zBTWQtMEUQW1snTrfdutOq9MZcjm6QilIdanwjw2x81NT%2FV7fDXnia7pirjfYn%2F8ZXw1rF1GPton%2BJOl6JszEyBf%2F6sMq7KUWUzjy%2BfbJry2mvkfUGYCLSjyuHd%2BU&X-Amz-Signature=82cc314f43fb97d9dcf5d9092172ec3ab03c8c85b62d85e4d57724d2b6e90ec1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ASMAGMV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw7J4tmGUJ6HdS%2F2q1SzZ6HCypS6fdN8qtz6RPyvVvCwIgTje5D%2FejcURyANpATZifXSmVJ52We%2F13ZYVrKeJ3TiIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJP6hwV5eboF7WyjtircA%2Fgqx3Iad7x%2FHVywkUD3zzugBdmZomXV8hJFHP6B4icpVSdaXQ%2F4ZFPAa1AsKi4g8aPzs7s%2BEXLzPaSxVE5IC1wl09Kc3zjb0%2BY7EPrMm7VAx4hI63ReEudo53gpnMpklA1tXgRodqbxgHRQvi%2B7qweXd%2BxGOezkyiWu65GsGmrhHj5V0%2BQLYCyinBPDsfimDV2rADsvxMBFS3vkW8lEibMxwBB7wqbWJrwEFh8gwQFA8G6I2eQcI6ist0EgR6SeO5FYIsr6FdjaAP6jnukUrvDIxB7hWmXbAT3BLP2e7VQNIMhQNnP%2B5uyx9KOw6uK0tWieLCIFprPu6%2B0djQi3SLSHtCSRAY1qKod75Hycwh5xWMwLSJF6%2BpkVECERN%2Fq8SL2cUpIqPAGfroJ%2BJefJAOPg044kDMtaQ79YB%2BgGodkXDf44kKEamKACsOA7e7LQ%2BVRlIEa9XCr4i2drkFwwYpYJBgmIBFOjv71HHI%2FcdaBtNlKf4ePnbKefTuZ%2BktcfmM6Khnphdn1lxLoFP0U62%2B9ZRQieGGYrDmMd6Q%2Fo%2BUGiF5YJYFzANAP6a2Tvkv6RehulrefPQAvag5E%2FU1JMKiLjw3kL3Qq4Vhsp9q1zOmb%2BUzuthtZ%2Bzva4xZylMICcv8AGOqUB3IAgfZBkhkxH5ykbkTGwUmkM4q%2Fyqy%2B6o%2BUBj6WIL%2F5Sctz5%2BeYzIDg4dW5sxO8X7lMZfdVFi1lKInVUQn%2FvsiKCPyh2y1eJTQb5TMDz1XiZhpkOJiiOkt2G27kIOLN%2Bf7LlnR76i%2FeYpkoqCTggtex5m0p%2FQxU1gkRqlYxMerJIdKhacWW4stc0lol7CCsO09GRhC%2F9%2FWaCTWKPIlNYOnzXn3RJ&X-Amz-Signature=a181fb858e4cc10929d5677f8831923d2ef3bafca5b88c9a5d480173cdf9e39c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
