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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOPC3NS5%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGK%2FnNSeECIk62EF8R1Tg6A6ZFtaphMr7Hmx06%2FjCUlKAiEA0NH8WvZhp7UWsh5sPraEMUrTTzNKFbzp0OGyK56TkKYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJwSeW8dYp9xC5O4rCrcA2bb8kfaYZa8X4UoirDUQRb610cw2%2Fe6vM%2FO%2BduhTYguf6xtOWbxlqVaky6DREQPsIUzVFzW0eCLed5OiZml0kIhtmdlJU2YO5A0Ph1CVvTVHyW3IEoFB12I9xNLc0ChuZJpcE3I9AFkcSUY880mu58%2BLydtbgv7%2F52CgTpa3DQzaTDw9H57RjLYDP1wlXoPyIMjakYel8b682U5nmZsCI4QFHSddPXJNmd6h%2FHNGkIKHuSLPfH1lmVTA%2FVtR6%2FNIXk4z9%2By2Vl%2F1LsmZfs08R0FXHJwE9vhJM817etu6Nti77GnYqYN6bRr98UTkQGl04pd2zaimHO1JAGa7MBVvi1qZ3ZynEFoM3mjxcnuBCi4%2F1MVeKpsour8b%2FksH17%2F5p5R%2BRt6m1N9M3PfdnRKGQkQ4ICyDT1PAirCWrhEiOVG9Y%2BrTK5QWJTeTqTNMIKDUO1kmTPYdrtpdLRChtp0EaoPd0Aq0I5OjBkAmym71HTANJD%2FPviHEvSJgNwQGhjGO8cfP4HqGGGafp2iO5iKp18GJfg%2B8uN8Twj%2BHw%2B80ZKTOg5JsYdEK9fNsAIJvsceCdES96RVFeI%2FeKTM0Lt1JWfmyR2SmqaZMb4%2F8K3kNXC4xMNGUPIFjgXtTL03MMG9nsMGOqUBjoR%2FLlYLTSBYI%2BqHfxhHqE076hC5T%2FBGvcC2H6oLk3Yp%2FwFba8taXwsYoWT7RlCxAQZSQSY1xom%2FKuy03dUHR18K98bN%2BuPaev1Cy2I3oPk07AKbcMlFX8ywL13Xqkvdgvh97skiwrDknc12AMVVLwO31DmX1RWH3GCrmsXaSKiC7yvrsjwiSWeJ6zvVIHZvwYO8QX3reE6gmq6kLouJL%2F2JWWsX&X-Amz-Signature=d8cfe0454e4ebedf38ce7a407f2c4cf5d633244a1606a741fb885c17724c9d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7UBTINX%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIGv4seBrv8LhOwZmvunm2ZhtXFCm12eHcNMLq0pNK0X6AiEA%2FjxyBkOWkF%2FtSV%2BsZIt9N1Bivvh99nWyT67yR0FU57Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDBE30XCi528sk5n3VCrcA3JiGhjqBFCEgF7yu2FlpObg8OwBTmFyHb2K0%2Fz80InUGdhuQKY1wFGgrv2XhybVLzKx1P1f%2BSuZaFu9pfGy%2FjleLpJJcAW83S4MqGwAIM7duF%2FtXPN1aqEGhbJGeX%2BczXrh61Pkm5i0YakyQ1XwKhsnu9JlEEuMcOGkCTU9iMznGZgYq6CKfmYCj%2FGySWEuUaGYd1Il2PRP6Dc%2B9xrap%2FTYLvi2AOMVqTIsyDjO%2BVEBhbJizhMlj0uQ6CB9vlZw1f8T5IosFAg6hCnqwjuZWrRjGwolH3sAWSaSOoDqCPhTz1FC9R0dXgFPjgaruglyV5yzwDIjhWl4es4zigUUTRQbFhGIjNuPPXm%2Bg2TKhSBFnOwfh6DZdlPO9Zc%2FZb8LNuvZG360xRlFRDt1bmqiBCO3CmaIMa3XkLwlL3HY67o%2FILC3HYu4INQjsdYlLtFKomUDM%2FgNM3r32GCo09n5HwVCF47T0C1OqkUevwF9k%2FffMJEA0Mw%2FJLckLVWWqIOHacI0kKhdWbUSBezZO7tOn8dqulpu20RBrbS9BVGbTc9aZZ7DVjRX84QiNQH3EkSxB8Lzd65f8zSQta3n0mqE8UedJQ%2B%2BLoHJnYUQRzDZ9x9VTyn2UjPJf7RBXF1pMM68nsMGOqUBtYlBH%2FbfVVxuBotBkqc6qwC%2BnB2H4owSJBsR9imqd%2FBRrfFesqpqIE%2FJxiyjAoPsN3FIJY%2FDNh8KvCCRhcAXqDSOC5bhrrwruiEDxMjbs%2FTyrtg1MaO9ehLuDZ9FE27ad%2FTNTRE%2BoApL1kQ1taRM2aRhxiwUI64YGdPkQkeuNqD%2Fwhz72Xg0k6vApMmGpXcTT79P5%2FNCbiF%2BwfWNHgbfIpRyXQ6f&X-Amz-Signature=35b28f7831ed292b6fe52d3bf9d044ae2840afef69f1fdee770f8da545a2650c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
