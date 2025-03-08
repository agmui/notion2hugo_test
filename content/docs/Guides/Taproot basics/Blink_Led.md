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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6PQWVER%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIFRIJz1T4B%2FOLq8MnY75LAiv2WqtU6OqpltUKcZabsXrAiEAseJoNzx3S9uUg9YO6QIIM1glmXb3EwZjNB5ksJNB97Eq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDC6fgKcDsg%2F%2BwydhsSrcA%2BHhvffISsK4PCVk7I1PJlyv9uG42t1E5yBX4nutU3%2BuofDG9aQHwsYaz80IAQ2y7HTvjWoBFcAvnPW994RbfAqS3RtDDM8LWeSM34miiXQTR2m4TBaBLkGbKgqv8%2BY%2F8cX9pm0VPuT6FZHamVM6OznzfwQ2XdxPrwAFZnhLU1RZYZ%2FQEG2ebIjFfurzCvwK116PAGfz8oQt1M%2BrHQo0STZo%2BfyRSBZSrhg7cMUwtfvZCmMkb52B3x%2Bv2BAu%2FCfww9y4w3FxVTpM5KfFQ%2B5SCNkEqKhAa7pbaRDcknxW9wJd59JzOkJwSpPz%2B024JU5WLYA17Pkh7T47y4EsxM0kSJqJjNbrIk7FeUluwq4PZ5z1RrW%2Bc1P9AuKnkueRguXQpb%2Fnjsa6A8SXsRT5d%2FBj3FW9B1a%2FYPNTBxj0Rfjb7OQvtLkx1wSUO0ZinONYg01WvIPs%2BWbqFEiCH%2F6tgOJP6Ad4M3MIwAD3qFmBZ%2BGJCRbeYgqeUVZPHWvu%2FHSeaPnRmHmRa%2B7v%2Bt8BZLoeBCPGt6EDDnsVclzyVMR08a56FCDZe4m3oeTcVJKk3apUY2PPaCtBW81xPxQEpM2xUnOus66uFHeaiWtNdP1OT5TPKSUcsKjymxbrSsIxIQQSMI3drr4GOqUBPbaAe2XdU0EsYoteOgv4zHx1sl1cTIOGWu9bhhVJpN9H2lnLL8GEDXIx82%2F7uG9a2fc%2FIp3zzKm46YXzf7FqovmP9a0whPBfL30A8WbzLfaC2dhhqoaayvHQW9HIjFVVuKa%2BT0XXogyWEnnun5IgjnsfJGn6mF2rWIMxmwrkO%2FiDYAkdow5l7TaPnhgmEsTGAeqGTmiyzCri%2BGi2ZKPpRflJNwga&X-Amz-Signature=11c647cba124e60afc233218926acac584ee8f82500893aa91b592fb4d8408c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O3HZ7BP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T030113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIG6CnyXmT3wm7J1EbAWH49NvTmBgjQeK7rVN44eobDYhAiBTYjo7oXBjJWwwgxLFIQeMYdTUUAE7I%2B%2FceFXproXhiyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMFKBgxhbHjTkuyUrOKtwDGhvmYD6Iclv95fAjbcSAMWTuncR47CbmPK4arBt6ht4aE%2Fc0AbGThHTbu%2BEwN3UoQuVeCPJEuxqhpLW93Fy4iGJAEFxVf9gFEkFosAKd4BcUH1dmhXJlATp76rOEId7DMrhMMo%2FBR%2BLmy70EST9ysAqkDrcLMb%2BPXJY8%2BeWx8C7sjfnpBYuzphEuEZElVB1V%2FwJSsbmUUE2aubEhXDAOp%2FPXodFetcikqnOCweI3gUsoez1JuasVIk6BLTECxxf7FPZRR9U3kITHaM19yByg8DXh2vzf7P7%2FNwC1yun2ivNwrPdsvczah6rLrwfFRyFEyYyK5jHqkcnFUZKQqnxHQyGHRrsjCN5641arsKEKoKbdmk6u0Ei4Okj2fnlCAJ2ixsaJwnTQqvYNYbVRXNDU7Go1TL4Ms3ZcDPo6sMXnzsu5HEVHlyVCt5ceNsC%2BB6%2FV2OGaSliQ5RL6tR2lQUdeKnk9HhjLQLyR%2FxpAuiHubMhqFUvsqDH0ilZkfAWb9znsLYhh16F6Xxdleigp5tXcbWijgh5bbJ7%2BOT4T%2F6XRHMMfgOWUpRIAIKxPMOqOADsgewUYczTXvyY5z29jAPYnBjLqMexJ8SvkGWA8xzn2tT0howPSzda%2FGjO%2FB14wmN2uvgY6pgHCddWOfp%2Foat9Iy0TFEakD9ralVNbBBJE%2Br87YDzbemUWuDKOkPaKy2RQ74ZgWQtFL0xOLW3sR83VfW3z0xJ2O2befPPa4xnd4UQTgRIXLfKaq1Nx7qJ%2FgiSrYRFJrDQUAOO2su3ufxf8Mw0Xpg1ZO93YZ8zA4r5RGdBpTlFKfo2nZBmivMYfvE5F%2FKWGYtQ1G3oYQarvGvp8tygEMD9Pw3NyIPU5B&X-Amz-Signature=2809a93888711b9c9b366472e7f6d383fcb6ea65c100d6ed167db1959b46c47d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
