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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIIFFJWZ%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGHOKKBW2S1pPHuXJNq1sijHkijrRt7ZyS4V8LWjnSmbAiBS3IUwUfkmVsrUeTecVkBXiPQTKcXxdS9RXCzB9TVmzCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0XZGbvqcf0V1d2I6KtwDU4Kajp2ezj%2BfJyeWOm9AwnwAsouRiojlzYB%2BE8fZjivhbcCzVJEjWW7uRCTU2slQC4MxkzFd80fFjzzAwCDW5hgXbXT3EW4dwhT9Nwdx83UJENJJKiRmdTYU4JcMX5PLEM%2BWwJFj47PYzSeeZiGLoPttHVMPzB8cGiy3qquhlOCB24M50hqhoXRSLHMfoxcV2OKNqbzlX2DFq2cKrx3K3blWJ9pgVmZxCtM7eiNvW0aIRJnzPFroz9Xr34wYx7pyqZCsGlZqwKTSCiADOHnEmCFi0M1n%2Fb3KJBfPPtY2Ffb2ErrF%2FsgkmJRLNY0iWIVLFuJ3ckTN8YafziDHix7lTz4u0JkB2NFW6MLYHmzvK2Vy5eZ%2Bdqvi%2B7oTN2%2BBz7C78HtaUm4jtUscF8GQUQvjnjFPezAFgsVpQNYiEy0tdyhZAfyYo5LZqt6LoUquNQclpQApwr7Lmg3uWtGNbZAUvAOfW%2B1iLxqiRYM0ceS5UxjeZlGyU%2Fp1w6b%2B%2BcuQ%2Fcyrhp93JIWqIsHpbqiBsQIFQTjY4oLodYEvnIsvzJrVJ9KWwD0mQdRYDAEL1n6dIej6b%2FxASq36azD6XolFOPac3A4jojVcYbG7tvjZDVlinAGvEBkJX9gqAJJ%2FPicwusfPwAY6pgEjwmZXydjmXS5P1y%2BTH6qES4uMNaYKHI4owaiH4tlv9RF4yffC0IuJbGUvG4H9xO7klpeFj5mT%2FPZoGVDN2fikqVpaZTTqCkIo4uqUzv0kRFCWMiaIhe9xIm2jm6hsNIkgoGSi2fdr6%2FBSi5MbRh8YcMJ%2FFlwdabnA7hSbjCHBX49%2B6YiBunmYQwED33yhiSDjsMBlXMotYzW9jdxF%2FWohSXzs9%2FKN&X-Amz-Signature=aee968bcc6fd0b7941cc8f95c4cdc9a64b5a39b58041b0b47c00ef56a2125e32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUO6YH7Q%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIH31D2edR%2FmitAP6KaTNMHV52uoi2YB9KLFdHJViTbTaAiEAi%2Bnu%2FTatvZNU8w3bKQyYhwm8WLlAKcJHQId3ljIrr28qiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcQA7YcScEKZg5k6CrcAxujk7bg%2BBLU3hURtIa0tnTLVMLB%2FYKDefmBQKe23QIOtIvZms2NepCcPZaLkZ2m%2BycHUQmly2wMgE34lFUG3FarLihgtGYD%2B2MNd4phOG4%2FRVQMwGn9dRpFGzAgfbvaPsXtOzQK%2BrkpJ2v4Hbb0s7Q83DoMi3ML06dLfqEJZQwhZEXPIL%2B6gm%2BlNs2tAH%2F%2Bt00ZU8mznHDAfeaHIYPMYrqR2%2FgyTmk33%2FYOG%2ByUotDNoXAmSjSv2ElQgBCJmjNq8KUuHNxcplY0zHC3k1ZgArYuu0AQaxhPFZDMf6Tl7jeBMf12bjlB4p87HFkdrCox736WmF8UMU3EkHZAQctS3AcH05grlf2NvYICKwBZ6VBDvLI9cVUi%2FYi%2BjbWnW79ke%2FxQOIDDHpV7N70tZKlThOp6taPGAzGt0dxPiq5%2Fk0D6ZTi7KlKSw9oXaAXtQTExQEts0UH8zyHgq3WIeflcpx2VO93JajqUFDAJC31gm9qjcziVAfFORwuCBV8zzkvZMern5pe5eLdBhWV9o6lcJSjcS%2BrqCem9ViQGZlIG439ElHNztK%2FvfkMh3fPCzY9n4MMGiy02%2BH6xXYMqOr5exzRL9%2BhW%2FojogFqUdeRMEKKhXP2OHAtL5M493jhbMKbHz8AGOqUBnRR0Qh3RS%2Fmyh%2BFmFdzIFSWzp3Smj8A0p7FR3ShFKCvCBnN0TcuJJD24XSwUSLPjL2SnWjJb4fruxitVaQOaYzfnALU9NYjgcg6uYQSt6PZQzHMeMDBWXg1YLPPmKJ9WqbKEcIDGcQxfgO3g%2BFkTgVPt0x3xPSvP3Hw9S5d8Aq1ZyiIpbSEeugfCYKZ5IxVOle1KpR3Ju6EvbftIkI5DQfnKwTgb&X-Amz-Signature=7b929340fc1a73b2e8160e3d648767d97a6b9ed9c28a42d8493b14e53a9196c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
