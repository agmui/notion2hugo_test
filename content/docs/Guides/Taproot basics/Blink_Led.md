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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGSTZNP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGsWvDDP1MNtKX1fEzritZ3t9su8dNc5J8Eqo9uy4OTNAiEA2eC0NwY5APW7BhQ5Mt88XJEKQA8h1Kk2AoL7bjBvN6gqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaix0%2BVdbpga7BjRCrcA%2BLjJWP4hZY9w2WJ%2BprxuV9SyjlaPVKVI%2BiQpHcbusxHwxr868zFokwDwiqgNBiAz9PFXGMwOxVXOrIappYyUav6059lPfl6AcZi5tqSa1f5t2LYKrewItapRmPoISa0F3nDyZvN8%2FJ7jhIy6EfsAkYEjiY686RQyQf0AY3SVEKj9EQLzY8NMhWrKl9%2Bc3wXTc3IhYTuUC1dbp7C9zAIkZ98GJ9Pm0HTFe%2B%2Fza0qS%2Bu9EdNIc%2BWf7hhJ6ZmCu9597OjwI3bTy33973FAJLe7CJEbNQLFLrWfhy626F0tzh0cmsYQXPRdDu8ASKAAiefo8xE5UekizQhFJ6mm%2BxXT29ssYevsGSo716QARaEMb6KImTSR1v%2BHoz3vm7vmaFtQgiRa9h6Rk%2B%2FA5zDb7mfS6heoj1s9vGlBRDgloYtggfdgsIpwRiCHABLhUpP8iza58qtM2QEJ%2FXBqT5YpA5XckhjH34qLUyyZ0oD7ijpmeTtrHk3LnJqfuh4eMjxRIjGYX0ZgLM%2FCZ09sPf%2B402W%2FwPJhfQCe0yDTxk4eXUXF2vLQ32J8GoUJ3QMTVT62G%2BCzhJc62HvhZdTeJHudGLofyU1fG6XkTBQBIHE7mLmQlo%2BWd8D5qYiym5I1lwzmMI6egMEGOqUBXkRlPL%2FG%2BXTmWDUT6XVtkhtZWeKlHXkxOQGRP6svgdWx3e11e7pkJGSsAZM6Q6OqybkldOzD8l0m6koTJXV8fjpCPCOkadCJfKOzdd18evJo%2BzvcJKanUMyKWI6o0k0peAg%2FcSgcVDScUn3HDwPWTJVmDTvP3DwwGiznzyiM9m0OB69arS43g%2F6PNagFjFNFGXHizKpjCQCEedycXBx9QvnExO1S&X-Amz-Signature=3c9f167d5a02936ac756b5657ae01f96365ca1df57a482ff7746e46a20ada19c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D7LC3R3%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T033550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAaFsHZyd2yc62ICVwRHwQMse1W2X2neSVI5QZ4zCQweAiBt2EeaBUEJgz3zwEn0ifaF6WMgoUISLospwfrQjqX6cSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyHAqDVMIcOByiotIKtwDdbmuUffOifI3ty3HwWk9IoPIN%2F5ivPr7QCGu%2Bo0YzgjUtwF3RQOUWTBeP8xvU67a4h2k2HYJ1bks5IE0dbLudyXOzA48eL6QBJJp%2BCU28txcgR307N5L0RYUrvVTiTN3%2BcKK6Cc7TuwBVRAaM3itjwxLep7f0jyu30O6BC4H94y3DEeWzlNDrVRSYO2EDghKcWkW4tgQpoai2K6Zifg3L96nKc7qzUsEcbBAmMtsMdifrRY6jUojHlZSRlfFSt5TmY9m5t5wM3h%2B%2FmFnvrxig9kFbVbrv49zp8Z09J4WrsH2K%2FrBUzuo1yozva0PMsaNoACv8Q1LPjP8aZ67cL6zugLxi4iJP902%2Buh93%2B0fZoVo3ZrSjVeDQyyQih8fTQrkYEZY6vXdJQzsnblClweONAYM%2FB9gnHS6ZB%2B23s6Awm51safwxJpiA%2BbAzxp2JpG8HBy6%2BdfB5ZHMx7KYEaRlI926iuzntUMTQGdsO2RIBusjNyJVdQyd9RG7ulCsemqsRnM0d7Iyl%2BlMb1G0C64oDfw30Gc6Jka1IcBqEg4n5%2BJv%2F0yyWEYc8I%2FtKFE3KXreEA6YcQ6pNfrzrugjvS%2BJLFZ0j5Z3WExClKaAFYK6dzBx2jTBL9TsQ1JCHvswzJ6AwQY6pgH0CMqYAkfXmIvN1islRNDShPN80QXDuU4blMS1k0DaT%2FrR4qv8AJTZxqDwnfjX3fi7iwbW%2FMKETFIdaqQs1NNtlH35WnxKAjnKnlnIlVdzUg3AhAnxpnx%2Bf6MFwBdEKrWXgCYIX81FfgVnNM5OiwZr%2Fa1MaSeYVlfs4%2FgDICMYmbQkl5oHuYY7d749itl2TmCOB%2F%2FyW%2Bonyhd2sgRvfCsF6ram5Xki&X-Amz-Signature=ee8d5f02350843a42319f4e9df6d6e1655558a06cf26ebb86bd84ad7afe2e242&X-Amz-SignedHeaders=host&x-id=GetObject)

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
