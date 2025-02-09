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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2EPV4O4%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAiHyVTG8nhm%2BYkf5KpoaRIaFRfGnu7XlqAu%2BbnoC%2BoEAiEA1chBhmkrZhEEbJPDlYrUBtKUyp97zGdNXJc2qP0cKucqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO0jiye3J2yt1u1KyrcA29ciZr37cIZqljGkax7zIddfaPDDkWlnqOdy6W%2Ba2Ffhx5e6vEOFiU7QbMona%2F4yZv3a5lPncw3sRAN4ylKtZrJdtBLaLhhN9xspAaSjcWVVMZI0%2BLhW0m8r8%2BD9T9pggQUBTcF4mT%2B0LpQhq7Oc1g9pRHKdI00k6bw%2Bf9JkwmLeRTb8EpjZ90BmRKEETcngveUVStSjDnUIlWVkVI4U9QXhPLRtx20cpiYKfThkRByRUn3DHFqFAhCerw2LjhSIwKpacS%2B%2Fj6GuHtoQfkzycjPBoj4sxpMOSPC%2BoL%2BUEa1%2ByMJouAVf5Q5bFTs%2FVciE6RUA2rqzhtbFu3iwPpNy3vcJ%2Bciz6nrXm9fL026Uki4BH7AR%2FipWBkAjLYVq%2FpRNBC4K3nFcH%2F5gTjSiinmWqY114iHC8iGMJN%2FlG6CYIHNr%2Ff635HAwv53d1jpq172OdGXQpYQiaMAn80EgNbLmU%2Bv9Pw7IP922y1uJGD62svqyIpktQGwHsBxDwV2J8nLMdMTf7VoOWg4CtpMUcK5QbVf5%2FgPuoby7fRb%2FfvdHaJPteghei6feiKvqvP5DJ9ar8tSCZiUiYxflR7c2qxe3QOCMwF8oFFU6P8G1pluGYy03pcImIphuMaUNM98MJu%2FoL0GOqUBrpz7fay80c3ljoqMYRZ3XaJSxeez0i9OErAW07TnlD%2FIPflns2eEXZxRQxW3OU9nZ7icYoncFy0gdOmUHUKKKiYdwfbOlLIY3F%2FcYR0gJKwN6aL%2BiNOk6z5cSQQO8ePT3R0akFD%2F4qlZ0MIhW7PyJAKuBeTlwxK45cf%2FSn7uNEFO2f%2B8pOHc6YYHZQbtGskG%2BF6oc%2BTFmeUdbOq%2BAYWzlooCacrI&X-Amz-Signature=0fcf74faf181d294bd732101242de1c8fffecb030b490edb9c9d843ae971f594&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW7BIGNT%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF4EoN8VwJSoxZNBUH2fwJYFvBceFyqR8WDVH82hz6sAiEAua8xgOBv3dZb5QdFwO%2FlCGPuGcTWfbShnOS2MX2OAz0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2FZK6lUF7Yl0tJmzCrcA58mjPalvXYxvy725CfvEw%2FNjGrWeIyeVjTadtk%2FfGuBCCbd8%2FYqwmq4xZfBUYOGFbZYnLyL%2F3X3p8hgDeLGsreHk7cBAMaDDwr9vQEMdb5RwgijuY50miPhNF3SkOZY5Mbh6c3vsYSdWHhiyxxU3JoF2fSuUg%2BcmiLmbUGqCrYIsurTDrWd7M%2BGZHH0oRiJjzYj%2FZ%2BPtLkSbcupxIhozqKf6fstgweRwLPlkmAT3bAoOvA2Q0wzbVhHXr2ftGlovR9mfeWnFFJhxk4dkkQS%2FAWIQVng2qpvf0Ns9hmOPaYwCpvD9HGPmsio7er2tdaAcLWyPKdWBJqYPpeMdEz1alVFUa7KcX8OHsAtgDeKXhwq9%2BMyDbnjTBWaa39ijbl2VXKtqWdHIQE1Laal3CiTeOZNeyVv56uRZ6zd8ZvpFvGGs7gH48nRLPnRhzy4GukQEW73E0QB6p6xEp%2BHyKmIjk6Q%2FSCT4%2BTwTpeUJBAICv6A8rqzAgaTUp1ZghzNMhEvE2aU1%2Bd6GIrffSW3IFGSLDTrK565aRC2nuefWxzVAqYpr49gu2BQ1IWGcaW6ucEagVJ38FAjxFh5YpxojGyoNz8W57aGVm2QkQb3ha3yCjFyq9XzUiNctx6WsbFlMMK%2FoL0GOqUB67liJKToO4bEfcUlmP8ird8rEnBzONWOuvwBcO6YB2cH28prexDKDl4oKuCHH7yrb2QbFcUiIrq%2FfyOfpEMiwaEWDjzN6fzV94wE3Yr1bxKpdKCw9TWW7fy1mYUkFMlezP%2BO3%2FaZ2tKuZ3D97VVbARUum9yqVKlO%2BcjSpQpd7KLx11QvUuB54IDRQbqDxyPkDAEIllxQTEpiS%2BRyt76PivRdu7%2F2&X-Amz-Signature=6c3b27998c7106cbba43e5154a1642c9c9fe5b792bb2d020188a455dba1db40e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
