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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCS5FNUI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaSBJsc%2F4LUGfWnsSw7B0o0sZdlIxmSktQ%2F%2FaR9Bcf%2BAiEA11Ij2y8Q2wDbtGWWAWzur06U6W8weXveyWQNAxIPaXUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDP9%2F%2BsCkuBgpnbY5myrcA3ESY18ucaWlwzOgWOin8Y8Vx%2FQKk6G%2BzzAPALNie2rH1Z%2FwRmYEzGjh%2F52mPhcazfhQIbL8nCRM5pXm4O7mDnBQnR48laI6G%2BO0NxYRk2LMcX8fDsNf7vc8FTmuoEHBALGlbn48LVYpkjUgILJh2O7jdikHLsBAwSGO3d4IPTJaMIcw6Cz65KlR9p3QFBpD3EhE7Li5Svp538vU8eKxurhdiKr17C6f0dm0xYHP%2BtlBWf47vbktEoWL4P%2BASue4Fqxj9LDYVE1nDARYUQX%2F2gfFKTN5IGrUlMJpj%2F0k8DDDTke56aeVhSZ1pdTRL5%2Bpyr3TGBUVkeqT4l%2B7I8u%2B2YD0%2F1VhiEq3GbugP7XMW2P3j%2BXB9fIHvIycTPOsaMcZTvR31HJSNMgLPvHmM%2BhbpBLzs3mhgwu5mzWbVz%2Bc3WUTFOBgE%2FMPfPC9zLeJhuDlJQj7%2Fvn6E0YxxN7X33IAlUqmmZS34u%2BxW0pI%2F5OjWFqke98ZVLGbzhXPMs6xYMxbjclmMdIhkPFE5a0%2Fl1UmY%2BaXBO%2BKI%2FLAh59S2vOlZk0LlGTuI%2BSwJhi7NVWd1S7BEBes53VLasnjN2BTrOxpupvxXST7iJJmMwA%2BK79EbmcuvjP2Gke1lqOGl841MPa7pcEGOqUBxX58OGzv20RwDuGozamwQGxpvWkQDXDx2Y39mdesbcWvD20K4aXBbfCvm1ZEDQP%2F96ZDf5lHNrEohnnfGqmlL1%2FlWSRJaWigeW8II8ogsY6A12aqTzGHBYmzpZ3iv6Lg5EnRL5M6XZWytbPJWOma4gOQ3A4N0iEZ0DooMXJO%2B12vuPPT3MfF3uwxGY9CB3vEiYUoBTWLfeC%2FEtqluOtoBC5ghdRn&X-Amz-Signature=5512962d73089d226404bc646de4947f2b92a10498bf788baf2b4e8e07b96c89&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEDLDVO4%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFBmqaoNwDsKmCRl23Uga9BCLv1oabQYgsTZbAADVxcAiAHiCGajKfXivM6lQO9xOjZ%2BZYY46fccM%2B9IfJrZwB2rir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMhsemMYl5edwmScbjKtwD2gug7m9B2w3KdYtNR3jrCwsdlVCxYjgq3dLsqiURr4IXv9l2So4rnmtdjQZFQhVxk4%2B2a7sRYcNXnbe5JPW%2B%2FlgMBBJE3vmYG118sK1nQ5%2FmMGc3NyATvM63vWMDJBsm4X11GSYIdte%2BzZuU%2FuSg%2Fz5i5YsGayLICaQHxPuy9HH9NPxtW3L%2Bn3LunJ1a%2BwqVmHDVY1ukElvBEVaW0JM3Dns05l%2B5yDJAdWCS2w7Uxr%2FqAXPsB%2FHZPZU09Ijs6yszRMSlbaepyyqMkbXfPFhSzLzzGk0h2obR6SR5inyV3lQFhM2rvVcr6mMcWTxGYZR4TKnM0wWlDSipX6X58YAgMvJ363ahXEdfAuadfzby%2B%2FJcT2jY1xb6YBN4OEHR5cbSsCkKiYNteYI5HfOGDgliRkdXfiWLdBSZ%2Bge5UIee3R7E%2B2X3lkki9q%2Bf8qWwnLYbv0QmvBj5qhjBVXd1RoMuJd247kC5sxY4OLl3uGllNRQFZMxUsWi8TLRwU76Dj2HM535fDr2TkrfQ6d1VF8y%2BY4SHCQbzuMFit93XLREToDkvLRTfajERYtxLrBSg6Pv3ZVN0jCERRgHw7cLSBMne691mNc4052XbChg28UB3J5X6GxlFLxJguUWAc%2Bwwuf2lwQY6pgGQh%2F4za%2FqUYBRqn3KFnX4y9i8gUTjoLq8nvPmkrxxH%2BUazA64RKgd3DJvS8rB5xi1kD%2FQWsYFOyzosQ3c0JJsDeXWI4VFq5PD0Ljz2qJRZN4vaVNJheXXohppDupp13ItlMGxsUkojpgACk8n%2BgD%2BCGeeV5aLci%2F32%2FtAecfAvioH16grRa48YfVpEf%2B7oLYZLaYybvNfG%2BWKP3iAzSkE1iYL1XB8h&X-Amz-Signature=bc2227f2e4df89fac8365001cf21b56ea9783f7855db46703ea9f0a6e8e76e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
