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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO4K5HTC%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCgUDHduxEf3TsNWXBM0l%2BmG1WEzhT3Px8krmlUdsCjUAIhAPkx4563rFpTaHBOCfFs1alFjcjCygDbKwhycH%2FHAYzdKv8DCFMQABoMNjM3NDIzMTgzODA1Igymk%2Bg%2FUXAVFadFMKsq3ANmBzEn4ovRctfdccTjaVtHVEzm3JWptKWhJIg4CKiDkUhMombPsh9fv8%2B3xGYTphQYACIPYVbAM7WOb95FWmKC2K45VzRLgHSYUab4tOeT%2FjrrZCQKgV4JD6nDPHAjDCqneOWXZWUmzxZOllaredvudWKyADzpDlEzoKJ%2Ffz%2F9%2FOdeNnjYx3AObYuBvUSDR3IgXdscu2EZPWTd9npIRKZKANDdqo9EmtJkz1Q9IsCOvFJAet28MpNJxCGGA4rNJLSMKwfb%2FKWEyKqYytMSQBkKyQMq5YQlgRWMGIq2cGCeXsP%2BzvOcYPj6DfOEE6gmv74LzYcWEt1vHqoXCSAqUfM8Rai02q%2Fr%2Bj%2B4vsYscDZ44rW0HynHDKwvHC6Ki%2Fl%2BlJaZSk%2Fjp%2BxY1MnzgBms1O59pM%2F73LJpZ3DhtV7CDvnT%2FjyKxZ6rucZZVlURyyBEbAPT6Bji0oiMLYqTYeqIrTbHjHcrswLGGegzpy3bVAKE4%2BWhzMOyXMTSRbxunIq%2FvbG2gAr1iY5NgNwh2Rfoye%2FXt2Rfa0sGhJUFk2zMt1Vjj42YEudfCbmRsupLr%2FyuiUbqTKfSr4roNAaH76nHcWAfE54oNCn7Pov%2FU2oAw7OwIx4sZItyBwr1mXstTTCg%2Fr3CBjqkAbgpOw%2FJY0tTK3oViXY09FaeQV7f%2Ff%2BWstJqtwJWf15hycoeb6J%2F24SbaJGXxVbWVE60Xo2Y1Awp%2FysMxFIXDWEwCvbwgGRmHztpLF46SCnaPp624v4ZS%2Bw6nU3B0FDRVWQEEo5taDFXudmej8S2RqkG1YDHRSSG7HyaMfsGZghrW9DpUVrnzQcct86yLfPPLwfEzOi7D76ViSXCYQR3kZgExi3R&X-Amz-Signature=08b2258e3f7aba9f0a4297a4caba7bce3581b43e18a43ec7a19bed3f770db100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJOI3D7P%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCMoRBglVoKYYfYiLIASV8beu7hAP%2BM4rAqi%2F8uK2V%2BdAIgEU8szF2YxO3riyDfWWskZlFjcb4BHs49ovUvPfW9rzsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDOfwgSzVKXn7s3uHtyrcA3%2FrwAiawvUYaALK70RgGsq%2BGIYFxqY4qChNOBTINJl4S8txYxtmY7GS4yApMgMMRD2xdvtwleY96tInYxlgCrhF5aHN8R2EUFJ8eAcJw1mXxOAx5pSmuQ80pKExClH0BiiKo%2F1CmD8dQfakX1OVKvgqA%2BFQ7q%2FogTiVQp7FuHAHMlUaGnasHjHL%2FSSUXNkrVLD9eoxeRsEiXWydckIxNb8KoDs5fsiEGSzkBXtWXK75dEBo%2FJGzvcEUcWAJ0g9vCsvlaM1aEmjsZD7tL7Pew9TwVkxsqwptUQvR8uHROgLDGOUEICbJLCeHOWxK6okxZPYW1mLaFHj5cgwzg3VEXhGUkmWgb4uMGSSdQGgYzpX%2Bn92H4jI01L3fXGTJgpfqMfSGo7mJol6D0CLzbb64nfngnZnHXN2nF6cCJJZVh2Fw033S%2BLxcIjukPGuVxD%2Ff8Vm67heOCf8SLC97pTWYd86aoCPBC4LNRsg%2FWp4YvAiBI4L3u0bmWe%2FnA8suUi%2BqwiBlnZB0kdVDIWan2kGOd7rBHcWf3TEkOI86uKqQCXeq0ITbgiHTcNC91ubrnRaC7%2FoDYPXrdySnEf59R2GJauQlrSIMaFlxzLzAzWW5rG8%2BXmiDvJ9jrpOQ%2BaMwMLr%2BvcIGOqUB9aP5d1EPLSFk4QYUY9ZcFZiSUXbTwPfWUbqxI0bpecgdeNcqJYRA905JdIInpmAYtmyXS0AIlj6YmoisdGqPls4Eqw0JRGQR%2B4Ro6nCYRh01Mk6OymZIVSgH0fULyhIxwn5ZzQmswA70DfxMDqi4%2B7jqPs4YfKKDhtAqupxSEpXoceN%2Bp6yF6e1PWRy%2BLVtAYZq5aXdSF%2ByMT4mBnml1ti5gNDkF&X-Amz-Signature=1e75e07ecf1ddec85411ee97e918debf5dfed9357dcd6efaa6567d8262e3f551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
