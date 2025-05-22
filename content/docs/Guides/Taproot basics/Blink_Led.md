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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY7HBJRD%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCQdX7KNGkUYUWrrJvmcehv%2FyxrHLMCXCcH1E8Fi0937wIgCphcR12c2ZEmThgNSnYUsyCpvZl4MjduMf1rVSFGUQoqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0q1jYhP1Uih0BdQircAxSKmHh%2B3aVSi84cxdx7eStIW2wbGYzm4W6wc7MkudTj0uxnMbuntLzBNE%2FEtB7Wr5N%2BN%2Fz18fRpgMbnpUWxgSyUQy3kJ6O2IuOMXT4CCDK7%2FuEXPgrZie6XhTwj3Z7Sgnnqfj8gSuMPtP%2B4Pk%2Fi1XYd1qw8Y0hdeRVJh3S2wbVBWfn2XHVuRnqKlrKeZt4VIlkSBgageRMuGSuCDJFnP0ARBiRmo575Vg1HbF16xAM%2BGnBsOZ2mvYyMD77pwZqizXGGjkI6a12f7KTF4tb7PxupcXcy819jZYlYOrJKjTisNOHq8dIv7EH%2BOA78pW3SCRHE9tT3Gi9eT1vJdKTf1RzuizSETWkQlCQluDYw6kPvllvscDiOIwi%2Fy9i%2BmwuHDHIRtAlsePXUiehJBo1Yqy1Rz99bhUWvY2F176U5SKoyQcUvCqvLzk%2Fsa1L1S8aV5X%2Bwc13xDgsHfbXqm%2FDkQq7MesKpOJ%2F9TbfnDqEP14BlxxQcpa6i2KLtKnirsh1G3l4kyIt8Ev9Za7bDlZmbGuISs5FwsJb8lhnExv8nhyB3gsAbWlsyIh8ANEWxrl2TC7w5%2FHkS%2FkHuAlizasGNGdARvkMI%2FYNw5K5RQjOYPxXAvYPfcXU6QbBgcG47MMvKvsEGOqUBb9diO55R2CrDMCjkmWMYufDjC6fi8F1NBjr5FYnlDR20EzFfLKwzQqLRd1HGKVEm42s%2BmSnrRszMOvYbm4po8%2FW4zmL4Sf0C%2FepNQp4b7Dns4oYA%2F5M5JHUeSW0mKaMqv5Nf51zwla9U6jADO6s92g0kbcrj8KF%2BmsKhPnBeDn6kXwA25ljAffbYNMkS8uhTlgmi7p4yXNsioAldwLkqy8WKO%2FNt&X-Amz-Signature=aadce443ff5b2636400efcc118243287d836c6600caff6cb4a6b379d6d0b5cae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MQZZFKJ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIG%2ByYy%2FaVwOugvr556PoPceyS5Mgeiv73sG212vlcPWMAiBtMOg%2FMbVD%2Fq%2B77OkzJzivBbEeNZ0dM5EKU0enoSVAJCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBDN5xYdvcC10F%2FfOKtwDbXflFkXKDIo1VPCsolcthgv0eUISkDu5Oq3V325FfIkqcjutapKk9527k9%2BGC%2Fg71pTjgGDRIlaLVyqzHAogW3u2ZZJf0f%2BgTM%2Bxs2puvlUzJZ%2FVx61i88uHE5pgfUS7i%2BS8683Bsx18PZko95IA0ZHJLT4K%2BDQP0pZqCeGK92oi%2BqRmqE4JWgQ3ir9YyoB1pA3mTRQKPozlrgSyvCNHaIolD%2FRx6je8u6ORPxapt%2Fb1iV4UZLnibE%2Fupy7f1SZG%2FZTNVKnfMRagoMjTqtymzzz9a8yfnsxdDRs3oy1VU5o4kxXCa%2Bb3KZXKEbJ%2BY2IZCx8x5ZpxBTZGLYydhOoF6hi8Wgijkznkz4WyPK87S39u1roxyzt3z3Q5zRhEBOBNphJyjjOkvVkka7cNhlpPf49yOPHX%2ButUzYxKGmmO8FKSdYx64xERbk3SdUqjxeaUjdrScqdlRmDVQSH6j8Fb1RjO3ID5ADcBc7S5qjF6nOMKTxXM9flThK3VZq7Au57auxg8XD5jJ5EBhuPFqVwfQ2lw8dgesPXXSa6UNe3YQMtOyg4hJopcjvKpn0Q7D9vcthwlhMiCQBiXKfya4hJSPNtjaGAsY3zZFfDO6tAd2T9ruH%2FyWxWyoQXhAm8wy8m%2BwQY6pgE2hzybbqbIh5oKOplaM25nCg%2FrHMjXTmnrlL7b0R51gdboF9YbTDHJ%2FebQ2moik4XJM8pJ9%2Fus2c7IfSwku6yYH6aP1BDpQvfrr1PY38SLQ3Tj6jHm%2FwM%2FpBz11ZHR9crU5RTSyhLcNhTOA6s32eoAyk6jLzLVI7c%2BN8UzY0KCk1oDythinHpMuQTVT4bYW7JSVqvoLJQB8yAplBO6uQcBj9EsjBjw&X-Amz-Signature=1bcbd452e1a704c1abc9ba99d58d60d826ab9a6c31c81850c3b70ad8b89932ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
