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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UUBEOQM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHSSRIHIEN%2F31pBt53XnBbnLwPFN4G2SVGmE4UEUmcYMAiEA7%2BLqGbt6vuP4Y1LjiuGnENXr8d5053XF6SiJT5YCHhcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBcVPX9fnYmWderc%2FyrcAyKJLnN%2FE6IFFvwsl7NPfB6NYiK%2FZbcB1SyWPbwHuOEIiw8OyZAqiuUhWrFlqd944VrurkdMvjzOjhP67N4ZkG5PH44YN%2FDwButQ%2B%2BnewVZj4Ch%2F%2Bf38sCU2WJyGlvtPIT6Q48KLyVyKa%2BcRm%2B75leJdn7s5tSrNOodgk7hYulN39UKstKeEiA7SZOgJ42y8sJL7AoQI6G8%2BD9RgWadWbFxh20NJMqYx598TlLumVeoYJOc%2BppRfTQhi%2F%2FOBQfCLY51QkvrJsOpgfQUPxYBPxqSMG3BSCxKRbqUcfaCdvcZKYXTqjYS%2B8RdEWaCDwx36kne45htwgpC3j2jKS80LzE88QNpkyKIo4XrzMmH7ayizoijusRJCSwwpiRhle%2FluIM%2B5%2B%2F%2FtwAFnK2%2BEgJvQm10woPh0SkzUF41E%2B5%2BvhXagMWEX2ohwFSAAJ3ONu6lYLsYaN8E784NbEqtQ71SV8Q6Yfkh%2FSVWYh9SOznTL13mi8I3t0P5r4mvfwJpbDbafpWnHbrjNjRly2RG5k6O%2BW4EoYlsAsc0UR2l8uem81VuUCr648kUhjB%2FdGBSNTgUK4J2rey9wyfnL2uYyM9yCnxk1btf1pZdHzeU2OJe4LvvwcuOpfKV44HTRE3Q9MJrgl8QGOqUBKKxp6W6F6UlXcTykTQZIKqM9Ocyb6DaS51fYGIIZmXi2w%2B2iakkMudJowTCE7O12ou2ddPnka%2F70qUw6mMQxpnCtpDU0Ndl7bQ1%2FmWDsK%2Ben2C0kb2PgsJ4chaDI8Uy41Sbcetk4sjzxvd85%2Bt4Md4vSoCwjp73OFqdJMRhWVcRPZhZh%2BL5yN0WEmR5R1nWBkdubsUMqAM%2FEu47JZv1RvMlYIdAP&X-Amz-Signature=970396e2a15bb894299b075e8e125714d03a8e435d242c114807f8c24b243228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE6JBCXJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIF2W7Lq3iZjz3yowmJKnfQg5P%2BxO8UshsE%2Fz55ietaa1AiB9i5nPk5r9oa7vbwjr3JSUF2GNk9tPohDx9bsYevwWJir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMiEtPYJu5fEFJPJ9sKtwD9MADMOkw0JarAD1jzfbfSSPBbK9capmI0ZJbAuTNddQU3Rn9LiL4hvt%2FmxVrskXO3FC2cCyhLnLY6ULX%2BON8dLyvmUnfLKzoSIaXhRsDrZAwSA9lv1n0wMN6w%2BExcSORbz9x6PbxTQ2sXUO1vrklti5VpCqXplZViFa1TtdLz51DOY9AAU%2Fpat2z8X7EcFTax0lxFKbjO5FF1SbZS3uizMoqRhTBfmz%2F9s41RghgbQwIOFCvlW4wkJDMnV2TFASkzyjh%2Ba7vvE%2BVqIu5Oo1xOT04PEqs34qy8WJNiYy9T4tJlXKYTEvZM%2BI%2BJxfirLy8yFufoC2zuKm0kPugEroVI%2BWBbavBYYAjChB1Zw8eeGAW0QgGdIoemXbeg8nXcJeBZRfKaaDFGYsyn1Oesayf8N8sv6cyGCNYsCqjpYwm5aqLB5oTPZrfJ9giiPMK8rvtCieimAxU1Q%2B6PkrtHwPz9QgSY%2B80DkDnaQrevadV6K8Kfr6SaE89S4nrBGoWvMISVG5ApXqt64NrmCJM3PonTS71M7QKsAR6DX1Zv8rfF41HT3lRyFznodwKOKerRP5Q5AUviLveLTo6UC48BwEhTHgAvlM5Sx4SR1X54OsRMuzk5GgN3EALrYaQzg0wrN%2BXxAY6pgH0ADg1q0fN0i5CPdZ%2FztovLcuzPZzDHMnI44hSve%2BtDUfElkhBSsFn25UwKOSqC5gMzayrdcw60idrS9YtjyUKKOQB6sKeCT5ATQuplf3pxEFg%2FZs%2FSFwVgSr6xpxvc0481%2B1kaoOcCGFdfI%2FG1xkNVJwEybKfps3n2Fb2S2AhSd2dz2nleOVIuDkGvUnHOty6pXdO5DXWuit%2FAHPl2A1GSZPNNMK9&X-Amz-Signature=792d62f9a84c85c49ca2a7582c7ae16b81c3e2a97cc486ca50fde889b493d598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
