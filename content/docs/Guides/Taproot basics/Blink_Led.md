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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466534DTQKE%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBPYrtAodyDzDs4hS6o0m8vtAVj8t7MHiDKiYhJhUVnsAiBg2kBs86xslZLOIPbbup5lrS3PQeNwTriOxNhV11ffmCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSiLKM%2B51sXEn6ztrKtwD3Scw2XL7gqx1wBblDHLtzrkMl%2FIayyuOR9aGDLV4uAKZQzD8pv8UZGR%2Fpjx7z2D6CzfBok6N3jF%2FtlgbelAK%2B8K0JfbeVeJkw1HUlXQXw3jQ3GOAIxrXHCp4TTG%2FZM%2B4nn%2B3vTLL3WUiIOgdG0lFtG%2BFCazZnJ48c8CVetEJtLxEz9kYGFwhQ2mzcRbT4gZtysivqk%2FWEAInCik5IeVnJRbBjvK1RLMt65izsZTXMEyY0MqlB81t2VCvCjDk1QzrWINUVWYaPdoOm0uCbgHGkf8d%2BJ2v2C8OCv9N4R7SjheXysdzjZpKEM6q7wsYuBjoXoIez%2BhKC8viuInbPCKqbya9vMVYlBuq%2B93l4OLZXCZd%2Bizs7mjclOIe5L7607nCIwu11xI0vra0iWWvOMmXOkkZDvJZFxGEWErz8pzZ%2B1f6dloKQ%2FzLWP1QByInEFh8kFSS2Fw%2BKea0rmXmlb4JmKlkHdRCHwzhBAO5XHURhxovE4i3VQuVINTVFTG63ocYClfq%2BmBMJVClCF%2FB6oiFe803XQkNbFf1kOSLaE%2FUbTGYolh9TpBulP7GR4CVUo7JTVstatXFzo3mjFpj3WWqgPAW1oND1IKbcdiUTSrIOd6sXFXdm0KJt6ddmxowpbazvwY6pgEojrcGpGouvdpCc%2FAXDlwmT4bBW31bFsEGrpIVdqQeWDIdSR4geH94lzVcVLpLpoR3j5muuJL96q5lYUcVCMGKt6WT69E2GT9nTEoyli2REfNPuwzXGFOYiAMA%2F4OScKVFvp3E32RhRLhpWkoaw3e7sJ4b2tv8pqIGr61DD7RzgrgiFkBUP%2Fwmtmutj8UUz8dRMMnaRvhsmvzozg59o0Lhr4fDrLKr&X-Amz-Signature=0eb9a7416d449d20ec0cceb6a64db67a8bca87008bc972e35b397801d3b2e86e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CE444JL%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T070859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDAdmlxXXSZP%2BUymcWcWS%2F6Y0%2BMjqqw%2FWl8W%2B1K1u0kEgIhANinY8mmB35yq1pfTNqww8wz9Nu1Ed3V718UCGkTXLVyKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FziZwVpQ%2BAA3u5SMq3APabrUrN8soWI%2B%2BzwpxrS%2FKEQREe%2BMrNhF1DyXeJp1rC0aZXERXCS%2BD%2FdldAEAcWcukaPNciHcRRcc%2FxzfDb9Ml%2FQAEVGMR4PXpTFPvDrMIZO0iXTtxxbfarZQYv6zg%2FWjgouyoNeSYzji7dY8Z43M2gFtJ6cl9ZtIIBKzZWWh1Maay2aQMga7vfPhHvm7Bjxm8xbG3rxATYdl0vknje1eejPZZOvf%2F%2F13PSSy5viMXPMsAe8mXRC6vFKwaRsqNz9C3fzYnVKcPChy5xjU2fznQafG1ShOgsamxkx1d3vsfjHCjgMWVvnr5tEjdOmcxa0b%2FjxxQsFrR1nbbwniGMsBcb2JqAxvTs9PfHTw5RkfzV3JzIY3QkeVOgbjx0pQ%2B5lWeN7%2FnlOhorYCQeL2DObvh40YnCY4eMjCa9QKCUSzRzh4Olt03%2FLr8afMNPqZ6pqEzLOj%2FsRbYZBwv3Pvj0GtdKsxi%2B7ffmGGmPBEzHAv2EWSXQURize4S6MEAGnz0yY%2BUDvPdmcFMND7MzQ8IVeeh8nO43JF46tQJvqhZAOqAPryDyd50zzJ3KbQlZSGTMpSExBBWBQVeYE9j04v%2B9rwaJXpgRqnR4y3eFQ7LwoJWb3PLwnUQmNYATcd4HzDJtbO%2FBjqkAS4sTrq1BDK%2BMbc82Pw%2Flk6%2F7BqyUiFPrmii7f%2Bzlyz3uOAMh01KPxurN0oFcMudrsDpoQ8DcfBVl%2FzX0j7RW%2BYycecJBlvvZaRcJY6sXEnh%2Fr32Ls3U0iTuW8TmJPYnnvhbwU2Dpiy8%2FSA2hOXbyPEFBAj5HzNLKf6oS%2Fl6N94rL12%2FCOVPkQK1VRURXPia3zxytmuMs8kzqQWR8U4QkTpGaWwE&X-Amz-Signature=6c8c74f541a1c146990085ee4c38e6a5d706ac2613d12bb73030685646eb307b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
