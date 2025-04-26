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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3B5JFBC%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIChu03DBFTX6AY9hEvKc2nHRrELGtdRBxOEenRFxKJq7AiEA%2FpMoTYnKI1ViK7W9%2BzWI7kel74ZHNjB3B%2FVh6OpTBvEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOnXCXp5%2FIkiBg%2F1VircA13YL6tVre%2BFBrvWl9bfgC%2Fv5%2FqxL%2FHpyEEKdah7sQcwfJ5nYzJ9LQP113E0ORwfjIu5sTMpBRVj1gTpHlTXnfrtQSQxYsTPpexpGHZp8a80M6IEKQ%2BhznUIKZtzggxXCnpVx3eyznUpnjHsAD3rENKtsc9L0LlRV9zaDwYJJwozKO6bEhpm4OGYLMO2hLZlCgXQTWQPeeq7GqyaYD2b%2BHOt8V%2BGDTHOAPNXu8G%2BPloDTfXvi%2FKNHML01IXpukIHUdpHayDOtUs2u6o4Cewh5G8c1g2aPmrJM7TfKnMuZWCMrwyXRfGGEhvsa5szV3zmAseSzooG%2FaivEw319V3NNwOA8%2FOEgwqNhD0p%2FHHXctJ%2FZB9NE%2Bn6OLJ5pLN%2FMh45%2BDkdsVtee%2FbMhhiMjcMwrpDgKSBstSZ7fyrLXLGzhkKfFEd17muFEX0Il6G5%2F6Vm5YjFhpgW5vwSBkr7qFj6X4aTSS2cdsN6xirYl6V8toaiYIOtPfm%2B1QyKCWt9IXYRb2cJCxNoT6kQBQdpj0MBrR%2BnpmzlNbkJpOdKoyGPv1eXjHw9r8o86wGMAFXZBnuf%2FA1pKaz432cs6Ti5EFF3EIyymIi1pTSrTsTBEtmG1Wfi13xRnG93Za5nzP6EMPGDssAGOqUBs%2BAu33neGeG2YLYwsDqqjyfiiNZR1XawuUxzBy6aEJlaP8ZHFFOUAZnqK1yj%2FcSSh6mugHpW977oLR15fvQsfRE21k2TqMwblTgwH%2FN7k3Ei7nSLb4%2BC9Hvvi%2FHxbs5FYRL4IickIXcwgxOYn3GZauKaqIPf5czmLUGtSPVl4eEmXQXBnRNGwggZtHMEdAYATfJ7JLmj%2FYExWIxXy2OkjmXh9RMl&X-Amz-Signature=30593479519662eeb5f5159af58b203b6bb762f8e919472b9ea271d0a039b662&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZOFNLAW%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDbUp5f5qHY8N4fi%2FkLCSf%2B%2BtLw2d49Am0KAiPttLXy6AiBPvbTrOEX%2BffhexbBrmp4Z11l3jYO1RBEWgb2IRSTelCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM6%2BnOpMMZ%2BlWyvVqAKtwDpd707S%2FH14j9Zo1kdKKn3iumbsCFWJmOi%2FA0yBLrT%2FwbdKe89E0YnYMoaGFtaaSq8N5d0xSdcalXv8nj4BCDV3msa9nXtGbZYeWOvWdedlbxJJjg1vAWbyaoOJcZNh6HPBFh5KmX02vLCMPKkZh4SEnBd8Kxaiu6h0QZSZ6yequbmIvHikpPl2JEP1m7gITT2HmbSGAbKvp7Q76819oGhti053pnsgRPyK8I7epGoLY82v5fAmUqWMRkQRd6teDU1tEErHKHLKsiPorjPIr5%2BBUetUuKG7xmTZrfGM%2FhXxielmmekwxgoW%2FnWm3hQpPGseoQzuo1G9Z1OEhSXi007%2Fmu5isyoAufi9dx1Aiaeo%2FglnAqNix1R3SRo6EKl50bmvL8PGO7KulI4ktbZPs%2B%2BkWmDi2xzWwTXWTRr6ViBxo%2Frt5zpYzvQQIU5N4pAhUHS%2F4aYFUpBb7ZmKlOMWMrILkL%2F3fd8kBW6xJzZMnr%2BrJvoR2b00fMIrikcWsVGJ42OdG4T%2Bx1Ucr6UZVPs90yD8IkzHHcWICiYtDo%2FG6uvr3kEIcKpQh9QRVbxea4q7QTT555XKrDtLS%2B1k4gWouzODPVD6rye7eUm%2F9duRHdAlFQLWE05LnllvZ6RhwwlISywAY6pgHVahY%2BEqNo6IGlDyf14KZ1dZquPwnWuSgVriZEFR8IiGpLHuyNTM4MOX8hSPrTeHojUAEuPyygGa2nfb3ZtEtBwuo0CQLOukJYBsPmxzP1g4YMRQWRsShvRYCvXi8rp3tPRGSJ2gdZctlyItE%2FH2Qslt%2BKlbAccq0U2LMEE%2FJ0A04m8f%2F6xpsl9nGJWhWkXZGYau0Hcc2GzVOtfyMbKscgoZaZzNB5&X-Amz-Signature=017aa1371067f6eda641d99939cda295ac32640098d04d73005cb49db84a6123&X-Amz-SignedHeaders=host&x-id=GetObject)

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
