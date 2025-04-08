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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677D2VCEJ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJFMEMCH0T%2BVLm98hmuuLr1oxwQQc3vZqPcknXoY3JWDrckrQoCIF1hj7dctzN89yT2EhAOWtH8psot5pRG%2FiIyIyIVkSh0Kv8DCH8QABoMNjM3NDIzMTgzODA1IgwxaIt9XKW%2BRhfT%2B%2Fcq3AOdeMT3AY%2Bc%2BEt4ONlILZsf6HBLp31lu8NfwC95RRJixj4nMLpwb6kP54rRhV5AB7oCTxEouxVpfNSug9Fc07AhesB8vgzsxxEWTTSk4ZDJLulpxi45sy4dDwm%2BMXtFaAdkYBod%2FtcKXG0PJyI6qhbN6CxHAPV66HDEywFOomqgwWRbz1kGs7gRg7oUowdqMIcO5hvg%2B%2Bf%2Ffnp1%2BPmW5Js2Jbx3BDx8edQmSKOywYOHkRMX4MBhsBlMPg4N8xQUAFoWr34dePpR0v7mw3n9rdc2vfDYex89Jf8a59RnEyuSGIxK2yQnRVYztbqJwX7n0nZiqvV7tuJdeUC9N3JJkDDa8sjWq1cr8HC7Co6%2FBu35HNy2iPBu%2BJfrKQMiSRNPCCYuB%2FZEQKavgL62%2FNIpbgxa04vbUOu%2BbBgHiOJh2o1%2B1R51dpvsH4X06gz5TWnlVsoYah2Ldbhdqw6C7BSjsueIvSNTr3sEJSMh%2BF%2F72ExdYtPaJokZ%2B3QaaPBWyrEhsLgvrJxjSg72uFrwXNfN%2FeRoJ5hy30AsZBbWZwq7MZlyBaFVDL8OfmTBkA9w6X2VTiSRitk1COJVL%2F9nmhIggogcMoalrI0%2BKda8cYo1nRK7SZpRBfovFT0y5XYy6zDJwNa%2FBjqnAd86nBGMs3%2BgeSh01r4i5wtor%2FPczzTFddVp%2BEj6uXBl%2FrNyseaTBVaRiFk5dGIKz0Fghi2OY7K6TYk63Nl%2BG4DNynmdsPy%2Bntuf%2F%2BEKCE9ovv%2BY36PojeDIjGqmUFz%2FLZZy04zOZ9v%2FSoL0s0BWLM2fZzMndVDMXfCdsp2bE41Th7l9fbnIqQACzJcISymmi7XYV%2BAozQ%2F4maVms4LiFz0NLPx6lb9r&X-Amz-Signature=fcce17885c3c57e6f34ac35ab4a39255555f8cd739f65c7d3cd3334f78f6ff01&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2MEOWAJ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHlYsu89dmiiKmRUO5Cj5QYedqzd5Lx8R7IrEMY01WDbAiAuctIzV5GY1t%2Fv7skThhZeSXUTjwX8MTTp3HUK2z1WPir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMWXvZUONGPnUz8wOlKtwDfhf3nnESTKdKF9%2FDYAUeyCcBiZDlKdp4hfJWpDQUL3rCcpnRbJSmEY09eBVsuI4Oc5Oez0OyYf3RZAxh3YDuQ7C1KYa3jDVaFeZbR4Ex7oISW4hNdkBj31hc91nY30tKLmQB0E00y2GBk%2F2EGSPEcddklSRfabb%2FnRFc%2B5MIvEZ83fA9TFVq0iH2K8FYqSVpfWDFofYkdEHkWEVKC14zJC%2BJqBTnYyuWd5zH%2FZkbflOPKD6KWuV8KiIsw7z6UrSAUXrzkYhru%2BiUb%2FLSTNfeVAYAVsynGdPFhYT07zrTePfBxmD1MqXpvAbGOoLWMzMX2kNWhtYC1HLAluR5asXb1WZkY7%2FNz0rUHahg%2FAjVvbAPB9dF8LA%2B%2F6DNpgnkV%2FfjlzYP6S8hEhRLfISq2PZmdUS40BTW6o7UIJuNOwRRRqA9Tq9QP3KdiaHOhSuWCktUBBZ%2BgamAR2SRllk%2BSsAtOhdD3zc2szdSDlw9HdrcAZrOMjVFO1tMZyaFxjZ1RALGZSrqQr3Q7zPMaLMx7ymiMkaABeMSvb3gG69oLW0QsNiZ6rpnq3XnbU%2BYx9rFEtXIdWo%2B9Sj8MiEvUUXKMf48WJcow748DQv1mk%2BdteodHZb0LYZtXwQPcT6ObHkwy8HWvwY6pgGz8cOvsGlaA8k1f7eejeOG4AMWOxDie6%2FoRDwIkDdAhr5EQUO411OdSIf5bD%2B8YyIDdGlmvVnpBW6wNyiHyLZ0dkbPNH9mN%2F%2Fr9ffp%2BflrCdgfDRFUwr%2FdbmnizpLi6pqKQHSfQ2o3AGHNqVd8o59C0JXOnt8IXkQ0zB4iGMLL2VuINNM6kViI885Dx4Ct1ZwWRMHY%2B9dBA6c1C%2FUh0nlVDXFVzy9b&X-Amz-Signature=fe47480ecaead8df50f7414e547a949165cfbbf372e667a1dd5704ef9519875a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
