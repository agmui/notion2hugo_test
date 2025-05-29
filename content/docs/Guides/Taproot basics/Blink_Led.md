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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YATMRMN%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjA3dhMoiHNFGIdOatGWGw%2Bo8VqbFL7h1GBc8xsQ6UBAiBIM5Y2xYzfu9EPQHT6%2BLEqCcebqkhwONYM6W1pVFQTQCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYejyazWf8ZqGWIFVKtwDQWb90E%2BJrcpFEpwGASDmR2ztL2cT16vxElg5p3ydDYvgj6OD56NraV1YctnflCw%2Bp7xVhlK8JfUsg0cjmH5yuRJIl51JhguORy%2FE0uRGD4sAYsjr3CpPDmvatmm%2BfGsbUC8XWV1c1zcQXuv8Z2Y0K6tO5%2FPz34HnJpN79fUU%2Bvlg8D%2F6fHFwm5jq0dwHXyrSeo0ZKZV041g2tQ8QoYOhChGuncUWMEN5Kil%2BcojJX3Ha8Qs7x7K%2Fp%2ByjSQIhzbpJg%2FUx6Z%2Fr8u5j20seaUBujHxpFAKX2ya%2Fkon65unlU3cna5oJ9iNwOQOcXgs5x75O6YipC%2FcpveCTy34dz1FGdB9vtGRyguxLcdT4bR%2FqYx7ZeYD8RhHyNNxpUZ84eRGJXuzY8pdgGnSPhAYeXgdU3UGUlIRrSzofqg4%2BSn2AJDq7uPMTw8SXNMO2Ot96PG9755zxQv1Rn09snVf%2BbjHr2oX4c7L45ct1B5m4zpkh7RAcDC8a0CwSy7pDrSwQ5XYSb1C9Q0V8OY0550ISyw2fq6OJ1iuk%2Fm3xz%2F%2BnrrEgKPlZ7YvZyjpqQbDHvoFJ%2BhrTwp%2F527qHTz11lLYUs8d2ZO7b8MH4Bl7zxsuXHOjAgG6YudSGL5U5rq2gogEw%2F4ffwQY6pgGdU06lu48npZlR%2B34FnjCspRFMjnLeDsFxsOWS1EeiPV90%2BZe1e2UcqlProvFzSPSs%2BfYQcFYFRbPEcXD%2FU0ZQqo%2FsZNfLCE9eGcp8GcXDRKcSP7AiIh7Jqh6saJlXZ1tfkAUGb1ox9bWkRxEmDT3wyBtbytFb6Y%2FUd621IJEgIp87sSdPzIjsuK6uAK%2B%2FrphXAmm9Tmi9Enh34o8AnBgdyF56ignl&X-Amz-Signature=10d4befe6e1f4da440a1430820ca2bd088f0cf3fd55724af021a7a22518be9f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJPXHBI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T022815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA311phTSWA177Fp4J%2BSSvI%2F93H%2BZTfMYFzC8yER4qbMAiEAktqadO7ZMYA2KlvFOto4ex1aXFJNAPMVGlL4MMREYYUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyC6rr6sClQs8xXzCrcA0ljBiZMoL%2F6kWWgOF5MA1iTrqd3qkLoUnrUn9jnmzEqScFn%2F6xy2cdSlueQxMXMjSIov7oavqdsmicncK8XM71uDXFeX2LXRdw02dcwcg3v9gE5k4GEu%2BAK7pBgHBlSnxHEnSdfIPhiqVch23ZKADHf7EOX4m9fRPK3M1KroOeYAUafGLr9M19lkfGGpz7S2CdHAY33NFAZwyyK9STM62qjrd37dNH%2BtFds4GccrNSqmxlZXWrOCF8zQ7dPtBoHUc2PEPPKGYv4vW5viGUZ0qF4sX0zBt515nVX2L4cU96LSeqW%2BD70YTjASMJCQFtza79T6E5R%2F9P4BxTBfCr4XW9lYoNhtz7GMXKSlLAiRqrcNcfw0QRWbv6%2FC7vTwaQZygZnMUjniv2zUb2G3bYgD%2BfPCPLtJyzjSLiktKz6l15xQAerizl9PNVyLMi%2BHACY%2BIPbm4BVjUHFzrwqpcfhjn80qVW%2BqYDg2xnIdUjTkp64hF3graSNjIPPh4sTPRRwe4Xyc0M3vbFgK0%2FzBwuG2UJChx3kI30ORQKvcG123tTPz1K151470%2Fv7GkkAA0QyvqZmcIl%2F6DSP4rn94a8yCOy9BXKyc8V7FsublW3OrvCLpuY0Py8N2f6lgyszMLyI38EGOqUBuXOVGszPJNZ%2Bxa0QI30QX2Qnxfjkug2koXf38czU4vQx6wIGJDO37oaBC1gte1WBgmmYd5BUR%2Bd0cV52quRtO8atQRnm7%2F6RdK4Ww6RZNhkZ3yn59iIHL53fdQjehdc8X4mxCg%2F5sDTf8jZIxRxYFt6ZEWsiUMwT0WqlGwey2PiebjRe0%2B0S1XyvlwyoqzPGRa%2FQ1jZ9SW8AJKI6nDNflA0%2B%2FTBy&X-Amz-Signature=a8a87c609fd1575bcab4bf87b56736258695158cbc6d0249942624e03ed1dc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
