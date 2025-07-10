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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZWZNPK6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3LOf%2F1evM1987kDiYeipjmXRa%2BuY74EePZkXm371ELAIgSdHeK%2FYKRNsvAWWCZwOMn80iG2AmosJajOK2nxDbzs0qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjjopnH3WQmoUG0HyrcA9tEtS7g1XVsvo%2F6FV5NKjEFa9fuMzT4l9v5k7OhxAREIipWMQ0Y2SrbuMN5dqvWU0SesdzUE5a2mTd%2BazVBbS5BpKjb1u7bx7WM%2B9yBZ6Swwzxxy9Ki5Kp731my5j9hWNQ5qCx6NLY2r1P09IE3%2FL5NbX8LkaRyHu9WUSCcL2T9lId81%2BW0Jldy44Kn5WG0CUr8d%2FrTaV4HHH%2B%2FHCoT0Vbge%2F497oC7A4tqMZlvTfdNp9Pz6mqnILqHyAuUUvboU7%2Fr7bH2RBk3%2FjwZgNf4%2FrQgxekSSkHbCYQj48FzQBXmHY86n%2FbkilolVXrt0nORLXe0yO6d%2BxTavrjYVGKGvL82GRfk3FG8hlU%2FDmCaxH7kFpNMMF1KbaPGHusMSmP4RkO3Ylwoeddip9S7svsSSCk9MR8HuXloBPs2%2BcvubaM4CDlY1j9V3JDo1qArNodiwofUVcbQdcwMCq5H%2BoRHNXt6RfpNlvITFPgOgFC1cIeMmY9Nr0B8hKCcC%2BIWyTy%2BqJrCN%2BOuINhQ6r8ouVOgfml32fhPRDjC3p92bmHlm6vcO2A4w19vhfQc%2BA7Bzvlksd%2BNllbHVFmc6FLVQbbOMrsa96TPiwqOaiQ5TGCGsT7xDuVBcPauhPmYJIhwMLWpvcMGOqUBKBgHGV5w3cHeXKTwODXfdqUCeGLypR04MpK7gt%2B6kACGnGYzPFiGqBc64s0KK1uXIt9JhnSWV2Fno3%2B5mgfSGlL6tEPDKX%2FTnwOJ0GspP7NhPnfWbLZuZuGr%2FpFE%2BDgxaxe8QkOiknYHe3ubFjpWz02Czl4WCEuFFa4IlOdMq1Pp0wFyphgVLRpSNb5lcz2WuVJahi0HmtovHCHlRgFSmHDYe2lC&X-Amz-Signature=245bfb22d5a2ee29139a48b869696a90790e3cd0f3a8ff7b2168c3a66041b72e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR2ORGWG%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj%2FOjLaXg5NIXLKz4gZ914um917GpJKwml14NQPPNyhwIgfSngFrJr9ebEvhik6Vo4axWuMPybOjffkxO%2FsYsiHKIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL2UAnGCUMsbVy%2BvCrcA4G17F0lkGXwDXNiKTmzv9lf%2BxJX4pU%2FaYoempgVOXDvXDLwhuW88CnY3fUI7PfMfMJvuuCvmlrmhFvX4NI2BNAjO7N3z4nWnf%2FjAgE%2BAdGcq5zRNJgHNKfW6rD3YJsu7rgXOqT0mlvP2bXQGPs6WrtYl%2FmFFZfcyMTJX6L3lZbr03HxlpZgySKMEAcUpdTqSmyEThl9W3k%2F6xS%2BsDPuIjCFIw3HBLODQqVt5gN2OxETMpj1DZ1RUNhZXvdEQ5%2B7T0ZbsOayfoBX%2B6U06orOLv4QHXCKFYF%2Bei0Wg3AeIjsQNEHSKZKoY7sCST9nCgaV%2FFhaCrvXjFNeGlkZaAlGPe3hCm4JsI9GgVbdpyvINGq4I9Iu702%2F0SQwipOSRxYBjAqTVqE6yhS%2FiLItZ1GMB4zN7A6ZI3B7r%2FdNKMS8u3t2CL6P5CmGcdmcdqyY%2B5H9wbk39yDJmmaC7rnf7xfdB4%2BTSB081d8qrr0%2B2UEXi%2BZmiQq61xmh%2Bga7cu2EHpNVhhh9klbt%2BCVwyHbtn1agU6A0KeC3F%2FLkDz%2FqLU5VNUhVdCknrJmRzGwj7hMiJfjR6Inm0fnsjJ69x4GXEs6Nbx270jcoDfdetDdkBU1%2BZmLGBjm78MQ37gBshizyMKapvcMGOqUBOcPQWuriaR6N0TCBOLIO5ABo3Viz0Eg6RR%2BgHJacUDC7tkkN4zMNOU3OMaTy9AE0xTiBiAj9ryUCSywB1orWg95VIYB6uGVkiZux3NjwRMbrwcf8l06Rc%2BQ7GLK3pQJSdF8rxfuka9JvwqEV7Tkey9EGSmRNWESDA55eWKh1FlODSopyD0T%2BdQ0dKWhaTsfmpFHqHN0xDRgkjmPaylMjf6eIEUZA&X-Amz-Signature=c2d9ffce5834583a11fd5ee464195d2b5249e83ffc455b0c8a91bb181ca19b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
