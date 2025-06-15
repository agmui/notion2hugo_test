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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOEZ7ZPU%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIH%2B%2BuZF0qIpXUGNv5zG%2FKf0sKWyev6U0VJ23JMfoSO5mAiBPHmC6Y5E%2BYC4x%2FKmUXpmQpHXsmSst0Fj0i220qn95Lyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMuyXG7Yp0vdwUBFPFKtwDHUGXzM7VyuxtAl%2Bd7gSmReCO%2FGFw5kqF62mvjuhJXCF%2FDmkPpas6vzNRwBO4njFYqBtLTj1HCKaZNhGu%2F%2Fz9mU9wj%2FCa4N7kaNFV%2BuqxkrcQKFII4s3Nsg1d26OCi44%2FWfWIxGl7q86odLS7%2BxskHIJ4WTH27DGp0xMokNoqymd%2BJQmlOX4Y%2FDiVYubLwYOt3TTiBi5aMV8lMY4x%2BhENqHNqK99G78OdH39ScCBMk3Xr7OGVaSfVbe6B4RKQEr1D3lbmenfocJVxJnvIhMgUnpYR1SNMPL%2FZHu3f%2FvrVGOzXPdNV7gOJ%2B6yIvgPhbS7A4hQbEXElRq9UjknTtSdQolkqTu2lDiYQGZBKu%2FhNvtNNdmdFqWMRi%2B0mfxQhO0O%2FN5rRA9JK9SmHHq%2Bm%2FrO3bIZZJGdfCudQosa%2FsNTzVIMN3ICuPff6jtjWsMOv2rftDyI%2Fj2pT%2B5dvFTmVGyBYHEA%2Bh46cCcebznYyeeiJT8l3fNpnRkT6AqkckTSRHBNZHvWXRQWnyCsKlcHW6TolGnpDE%2Fn15FJF6%2FJVWyXGg9%2Begzl0j%2FEpYieSWk%2B6qRK0rbM7u5UJL3SJWI%2FeCsmFeWo5%2BqZooX%2FtnLfe14P5hzr78mXyVAmorwWNRZMwjP%2B4wgY6pgHqffOLSyFxnBAjVTskcPDor3iHcI3yEWGmcz9Q7p%2BlS%2B%2F0s4piAlj2yj7nbs%2FxSA4%2Fwbxc4%2FYNDMKTcaNSv%2F5HUFfSrFIsHX3zcIEAp4h696DqZNDJuithe2KoA%2BBTirv%2FD%2Bk9rvwx5P2lfKrqbn7D%2Bmn5p1RKqJFfWcD8P4v%2Fiqs%2B%2FzmDgLjtkGFYPoHRy73HLgE4aiwGD%2B98BooVvBm9t9BvKy5c&X-Amz-Signature=7b0cc31a71582205372c145c833186684e75ab49bfa81c97447fc14bedebcefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSRUVKNS%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCjcGDi9JwvVAdZrNsIW71peBk647tLnisBZMYw9qFqUAIhALbfjug0pNqdngehCjYQRR9dZF2IVwdvdEq5mR1xXU0dKv8DCD0QABoMNjM3NDIzMTgzODA1Igwqiy6CGFlFXEFA5pkq3AMDuPQq56%2BDewEvGtY5192vEUQVMZx0GnOvzdtX8tLBOiEhYUzuskBgwRs1Qxfhoh3hsc9oFXBq7Cg4Ot3jNsgjlvWCFR6jdjv7r%2FdgqcdNV%2FNJgSIA%2FmVLqmxImzI0o%2BjPrLw4N57UK%2FYTsUiAkWxfjXoZ9mKcEBUchh4nsZWoDR9O1nHu%2BxS79u1%2BhrE65Eb2MASi5WBV4qYCsncM%2B%2FzW5LivtZX9iCaHR9CTzN4Cak4vHSiu7jlAkdz%2BVdzhyidzoFLRbvZdLAtSlqVzJeiHPWlNbFOQYG%2By41z%2BbY7%2BvSD35l%2BNJG8H2mdbpDIb9hzAacdYOd4HvZBMdt8nX%2Btogp9HN7uCSEDYu0orCt9ONbdWIo7m8xeH1hXeyl3ZNCsR49vIzsGE0%2F3Eg%2F1LbLahFM9Qdxn7mygu82f%2BttDfdxfCjiuejacnaA7FnscrMHwNuHPqqaeN8injGp19HXM1dGcd1PLosW5Efkm2rq5Uawc%2BELboV7U%2BzWcZSB8p%2Bvw6HJDkjcaUqMRYdCh7GNPpNoUDa9q5xS%2FZ1t2mLuaYoyWo6m9bS7aYVX6bNhewroyNjuVlFTKm4wgzfWVI7azOenaIfr%2FA3SmDGB5S5H1qzj6sEsUIXDqsnm6nIjCM%2F7jCBjqkAXACFQhiuoIGNeqpiw%2BN7ZdBAfXSeWi9NpapIlpQewtrrlQxQhgY7%2Fba%2FjcGVgr8O1ST6k52j74RReaJuwWNQR824svtOBCXhLBd6yVX6isIUmAtgAnPoEbs%2FmiHTzcAPJKXokgXyvEOiBjpDIJMGnCH5wel056TTOWnbbDxrUQU%2FZWCSrlJQFLoZO67u%2F%2BZapuYhqBRRZPHqHae%2Fv85e72GRvI%2F&X-Amz-Signature=34966ef63b2e836e1444b409f94092733ab7df751c3b710b1674960503b2eb7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
