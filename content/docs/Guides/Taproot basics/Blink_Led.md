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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOKLMU4C%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCICL9Jn1hGMKiSt9TWQVomJd9om6%2BjYRi6CWFuZ58tRJgAiEA%2F%2F6e6WSj68ga8yG4gDLMo3uUvhX4fNzcfHD2enfGHKQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWAlcZKnneRHzO2uyrcA%2F85N72NPm1zCROPNYeAtNzac1vjhlM2LhabEUYaz%2F1ARYm2OXttgU05YucT%2FcckiHFxqg9jhpcxrUyHKXtIVlGUv2Upb0peSTxpEqlCwlD5uKDpXflOJ1nDcBMimXYhmTQKxoAUHVM6BFitZIuzqiTZCsBeuXXKox0Il%2B6p1cOkTRy1vLQ2joH4WW6BoIKrOKni%2BUkD%2Fcdal0DtqkBj9pfx8XVU%2BDakm6rC%2FyMZQtdszHaiTVXJLfLh7fD5261ZU7JY8LUzaBhYan0jD7hyq3842FOp7zdNaHhqLV44yybKCT5%2FO9%2BtTiOCY1NlRe2mEGCP%2FFYim7W%2F383dO%2BP58iA%2FF00Lk6a2UeHxSea3jrKo9RXfPcBEB34GjQmKsbLR5%2F4%2F0fpnZgQbPaKuvSaR08zjIQM%2BfpBMovLGyuBrfVCMONGU4YucHgH1752jIs3JCOtC34X6z2ZAMPx%2FypSNMRyLKzOdpfd2cmTVh8tmvs8jPcdz%2FHUxP9NlNhpNM9CM%2B8fahd7VxPFN%2FHycGofGwD%2Fcsa9MXdEjFpB9%2B7DubTFWlzcPhk9GfnvOFLjZspvGCdHcSYERhAwLxZY6tMVcDwYZsB%2Fan5qdoBcM3xeVvbNXRfs1KNidtgAwZKoJMPXKu74GOqUBg5wg4MU3PzBUPc6PezUPH%2FWRM5c8X%2FGYFGIncd%2B8bu77hnwtBm6EsAixi8EgCH26FMZzswTgBt3H8cJuhaClrd5b4G8oV13kW0mUtxfzThHGr%2F3Z0l2AXwXr2X66sC22z6K4g62dgdz%2BNFJyamVPOqO7e%2FOe7kNGHKYC0EABJ2iz8ovoCG%2FyuoldpKECX6Gtqvs7TPnthucZh1Ae62KJ7Dvb0k5i&X-Amz-Signature=f9f4471984dc186bc4b5fed189c4b8ad016a8b2e609c525b40c8d622372a779a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CYNSQ47%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T131821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJHMEUCIQCZC5PQ88LybsSrsYu%2F1rWmCyGhuPp8FznUVE%2BrNKRKeQIgLNkk%2FtyrQeZ5CuiiNQ5fyLsH2l5DC%2F9oZsXeQfQmnHkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPDVR%2B333eBDuYoYNSrcA0RXXt1uGxvQR1f7Cidkf2bzgtaU23N44rSP50ZMdFYBoXinNLOPEXrRcSO5%2FIZy0MqX%2FWOn0w%2FGSnkdHj2ML3CudSM2hQvUOOzhIaTqOv%2FfvfrltGNZJqBhGNBw2LLo0FaNcL9N85OCtlOnBozDlKsoPMS4rnMPpBAMdYh4mVjPqhsohlyhR%2F8f4pFXZg5ErRCLqLKpw578lMjmlTVPrbMhZNfXyU65m1jUEt1DZHEdWNjQZlyPpdZlbypVrKAp7qx24OP3xu35J%2FxXWvL2cpFxgSbowVmb%2F3tAJ0b%2Fo8gShWMkU35GCq6L9j7i5goglPdT6ySsfvmMafkPDKkOPBMuDoFKmS0zB4g66JO%2FnuPyLz7mVAxGHjAYJoHNrNBF2Yg3Vq33Ol0awL%2BMivWmEfwZ6JnVo4sW0hyzEHx%2BXykV1wrb0m%2F07ctJ150dQ0Lpif%2FrZjSeKDpBbeSvxqSpj7HuYmSqf6rLjSvQNXnnSu6U%2F2DECSuoxcLgyoydXnLOXHI4RaBTh6YF0rSyVf9jdexk8FHEUKNieZmg3ZiIaucM5vwYwDd%2FZRvgxQb75fG1Uk2n25bbCPIWrh9VK%2FB0nr9BS2KAi0tqabUdhAMWKWbT%2Bn1qbsITyZg9OHDQMObJu74GOqUBB98bUvjmNJF3mEj9BaHB6oFR8yABFGUgwbUi%2FKf4pLXRbxmMdLHyKr9SItCGsHRSmFkBAymhU5Ze%2BqsqXk4U91x3shpG%2BKNougFi5KURQ5TUx9%2FY%2F%2BUwdhm1SAXu%2BgkbSANfPmJHuHX37gEUQP9Ml8MnaJmhq45FFKAON0z8jrzWPFhjfyXG8MzKGG6UFc89m5dww6JsO61MTBxhfLa92iVyjF2N&X-Amz-Signature=a4168bc8070d5627bbc6a7a4ac97f44ee9d8c3de1d125677a1901a6ccb932e63&X-Amz-SignedHeaders=host&x-id=GetObject)

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
