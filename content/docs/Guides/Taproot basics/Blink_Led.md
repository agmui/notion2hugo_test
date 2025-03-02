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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWDANIG%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCICztWqlRBQ0OcmBMNtdpha3BXpP68ykOr%2B87y8HA2Km%2BAh8NNjeWs%2FheHxM%2Be5slSSGlf%2FBkii0ZX9hS7YLjTTn0KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPvh5Fwhe0MBfDY0Mq3APduBC5%2Fbh6vGwngnx4fd3sNsh%2FosdpyeVK4DbkKXf3YQQw03H%2FurSVfjhkZxDULL%2FQkxLDGluz3K6Z4CkaPgondcD9v76en4GUl5dkr54errydPytUMnSLdvwlbUGOU5y7AV5EIa6EK4RKf4htNIaCD2HIjL96jUg%2FhsaTukkl51RaHbjTKvYKFzpvlrmyC7MAA6S9oJcwH744U%2BqHIr8pDrpKIZoH4IEcdHOtxSC051fxp%2BES372KGGBmOLdB4u0%2F4c2%2Bjv6PMWvjH5LovEslNM8fw9ZtS26JbEeJYMrWrKbn0lv575vxAVaeTDs9r8a6V3TPI%2Bev6lmeU7B9hQcK0CObdQueWRy5%2Fj6thUfecNh2aAuK2XuM94vfwcO4a8hVhjNZ8GdfIEGYXvojQMpVaHrt4iuep31c3bRQ%2FUGK%2Fkq2NZAfcIXEsdhDmGgQQOemNuO6V6JAp3GoMrojVW4BJQUUIUaxf797E%2FGdQAMb%2BCVaY9DfwMKfDuT8ieHsQu%2B%2Fy8Y4gOc27z8NBbQ%2FQqtRYUYUINHhooD0PQePFdIQ%2By231BH%2FU5Ych1EXAsftHhE21R0AlCb1c7H5oSyzX1gXR7vCHoR74V9tMMv2t%2FzVvjlRA8xZKBADfbMhsTCf9pC%2BBjqnAdY7OshOucIYWRfcNDTm9k3UPY3YYWf1q%2BmZh1U2uxN31oOh0dRvyPZ%2BmlXzVvnpNvHR2Sl6Bg%2BEid%2FVpvyutqOrI38DqEN7WxjMlG75NTLq1G4%2BzRnL09MuFTTYex%2FU6KsD%2FLliR3hTF%2BClUaCASbbNyFpCmQrLcnfh8IOH0XiQQGvPYrb7cEg7KqRYc6bSl33I0CPL%2FPldAh8kZD3iiIX7OV0aFjzt&X-Amz-Signature=07e506aa033931ab2ed015fa3fe16df55e2fb9fc341f9802536b88cba19fc709&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIN5JXOL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHaf62ytYymdTjNQN3Zb0Qa1UJ594FyDtus5MNWemfvAiAFaGMWrzStLpeaBKIE4NKj1mxP1k%2BeuIa5GCnOjVYQWiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpwokkK%2F4yIH%2B3MpVKtwDr0kpPUz%2FKog92aREGC0daPUU%2FhVNtUCbCsMIZ3FgHVV5UFZiS8xcGO%2FSSApVfm3apjUVW9Ie81bSidq7NwYfQLW3bZNVFyiJxOu%2FaXvDMKwHhKT3xTodT3sgqr6az4YjSdTpk%2BH%2Ff1Q6AEXzDxM6Pzu8UwZBHplKlh9iFzSAq0Mrh0XHPjSLIaaIn4TnwBcux4mD2injW1KZ0dQN9ENulpC6OQ0GenYtyDeU4sPEMO5GpRlt%2BrlSZjp8WxheIYET4YEiOfAUF5iU%2Fh0ATkoRY3Nf20D%2F%2Fmfh7UdlYvYN7Ry1AHu715jpvRH2%2F9tDm2nDrDNmlbw5PUQXcoPXXJHOkhA71BJdtlu5nkrQPdqIx%2BCZVPbsOxc7l%2FBti%2BwYYeu7GeMpbY42F4A4f5Piw361k5kfPMdKoTtJf4b2lcw9lKSP1YA7DNTqUVdxnw414KY3C0LzQcMwf9eS3C43QgVe61tAdZEA7eBqAzM%2BehRm7XwEKQL79BUEalf%2F1LhYN7an9ujeLBRiK6kRBEfxE9soLOIqsLl9p2SChEC7ASVaIHO419L8b0mql7yj983HQ4q%2FuGkaSvhWSihLikh2H7uF0e4ut%2FsLpbCUyZ%2BsaN%2F2w5o80PHef0b8u4yr1cow8f2QvgY6pgFol76T56bBX8l4MtzvgNBmt5Bn%2BAhDx9ws3t5b8vxbDKAXLoGVpxv7%2F8LwWjrlr6e4NFVnOxR9yos%2BDUKpLwE66e%2FHPWp%2B6detCxMnbeIvKD%2BXN1RwwkUEQkIQpGPOQ88Hba1vP4CBLE5OqClQyTM7vPkvzx5BPS5URto%2FlBfxPrh1iAHAOgc7SLWs7jmWgebH4eD7rnVsHb%2Bn%2FL9KtmXVW6x6m%2FxC&X-Amz-Signature=760aad9eac7cf20704057431d2891694a62615b5629d26e2460a9a96e42d78dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
