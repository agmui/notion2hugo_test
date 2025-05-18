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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TFGKTLX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDeLzsfTYzjAFAKdmBuD5N2fCng56IGBtTK0Ey5d2o4AiEA17oKYTmdpgYTniaUUHblMa1ZFekSgcN5gy9FpQ7yArYq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDKNfIlltwSj8NPAWfyrcA%2FrNPXdGN%2F%2FmozTwNE4xQGCUHUNeWap5url2rjVYhUaxfcn%2F227Ae3%2BvuBk2QhIm3%2FMfOi6z%2Fb19J%2Fj0Ochq3UQcZYVE7t7%2FYtov6yNkPJTowP1Xm8PhcuXruZUZHyBIGhbtb%2Fm2WOs38WKQrF5NZNUHHVvzdJ9ZpemWF6Re0yguaKeS3PAJqlIzORW0aG6b%2BBGMow8jR%2Fjl5VzxeHDbGse8RSxq%2F7NTjH3JylH66PU5SGswpQ1h77hTFgSg3HBQJai3vnv40R2GzRpL8q4rMxbxeWh7szHJokPJI6IbgmIzLDL80XwmBiAgtIrU%2FLu9lAxdtMBxJNCBad25jArhI%2Fi2ZmBOpg%2FUzwq9HhSH4YEEvwcbrPVLZOmFmr7qSu0Bn9lml4FpoI7%2FRWYqVkRtc30wffAtCbJaZ1b3gCG%2BbsfVteJlUP5K8lM7YeMGs2OWhdejZt7Tp29o7WbBJrYYSsBIyh9FRoGf2FeG1ZXxn0bpFx3i7S9ZrTVi5staQFB5WfcmWxIEL1Agfx0xkzYEIMjbAgoYH0xaqbDfqwMxG3LxVC4uh41O8FHmmXJunJ2o6DSbPQJRQkujHnCs805eQ4zJcfsORuDZxx4c4v5aqNAKQWIjtKqPb9MXHp0TMMbXpMEGOqUBGTjXrVIqVvtErOVzW1q6pdTAQv2LzFXJLuRNoI7qfsSDU6%2FbLHbBH25Ac%2FBMULDzPNbLm3zGj1hvI0%2F6fY57fIsHdK6cfKr7oyUYi9v%2BBoa0ASwAR8LmtrikSkygTkyLgalngWwSWVemd%2F6Na5%2B8LDomGyUx03iKWkwcaz09fN03gyPt%2FFDe3r9g3pVD%2FSFX3vaAc48n0dLFdi4edlXd9zYEvL9K&X-Amz-Signature=c68087656ad99d622690681c13f996e7621b9a75322975eee6ce157ca49289c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q264UIPW%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf5RHnOwh99bRgMbyDcb48I4ToAhyc7Iy4hq7Li4NPbAiBJY%2FmxYLFWbX6cA3dGmmJfYKt%2FyX6PNgNGjMPlJ9k8Jyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMcdAMLlnnG8SZWRGOKtwDTLEUf1T7aePVw1znzrxI329qwLr7MJjUuHB5dL51DeyDC%2Fqnb%2FE3je7wk5jx5irVRxdu9em1Wml6NiS880CHzyQz5sfh6JY283wHh%2FaJWSmpS9js8LNC29G6SYQS2MoBYhaELvPrtQVip3QfPs8GtFMG%2BAIIvVCHh7eglzWXb9oOCqQy7f2qXOXvRUY2Auyb%2FVSGbNr7Vkn%2Bo6UIaSRGZ9TiX1tlNC7HCeoSYinb7NEKcEcSw4798unhG4wRODz8PspBiaDNG0OXVdH%2BBzhGGm%2Fft49dkIm2V0M%2BxPc0JvOTeyHuErPsglaa7WFwvJVdOpCglUS2rocuY9bvGmmGDW7a3kLlaKPLPw%2FztDpSyLbq1p4DP3zjKyQA63jTxtdx1Od6kLBF2oe%2BiGinNSOgkBwcdMWReYb1zIHatWjrT9Is42OYr1%2Broewyh1sRFkqbNGzTTm%2BvjZoRRT%2B6qeEt%2F8lVAyKk52DIv2DfYiTrQsMng%2FLUuGwnkpXXOvfVZQ4XZLEyRUR1O9MJxaWcQ8lgILA5odb4Gn%2BWbw8ErPuNSKBsPg08Gy8zPGQ4I%2BkaM8Tanc7LRdHYL%2FY5NOS%2FMCYT%2Fkg7lSwu8OgK2s9g2LtysNEpfLJXCUACGwq2Di4wo9ekwQY6pgGoCf6mPKg8MFFpTxfjuvUG%2Fts918ky26qqvwD1M9ZRvzFFV6gP%2F9aFkqRXBLMaWNKEWZ8c4%2BDXThlzl3T7rLug3LPQrMcyKEsshZh2oE4gmKW0QN8CjjnFprnQWPNuUpbbYBHI1q6ljS71AegLm79tJJYPOzbWjZeUyQPlt3lzpfHLMdpi7x2A1HnfmkBHxzTcIiiykfMmTz5Qr2cs8KQkWNCgRFXo&X-Amz-Signature=e9722f6fcd5afb71b3aa21be4bd2c0db5bf4df4225c2feab7186a122c28ba665&X-Amz-SignedHeaders=host&x-id=GetObject)

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
