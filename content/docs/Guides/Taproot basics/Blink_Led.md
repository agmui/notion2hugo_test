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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AP4INPM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCwFO4atprUllJC2jxuQj3lEtkBFiPxL29cCR80i2N0%2BgIgUKI%2BxnyPuiltGlumLi62OPJoHGzhB8Cm9EhdGji8K2Aq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDCWcIrcTvJFnNmBzBCrcAzd0MVGzya6cd1QrrF1PP90DTgJmqPOGOgCO55CGOtXuszCbeHvrMVe%2BLk0FSog4biljS7TBIsv3us%2BNZZHfnVf6%2FXenWD%2FKcVUaq26QjTW73DUdiRrNkPP96e435nCLeiiq6dJ4o0JQw4sthJoYejTrtYufwRWbcEPG37jy9ML%2BNCMSqDZW1cR%2Bj3cz76bHkz9XoWAXtPbdzo7n7fy7aD4oggQfnXDcZLNqpvkUFRlGqFwyYG0dObo6m1QmLVIhORtHY%2FtzMnn1Ei6n8zGc0E351FncpGS4ZthTsm%2BDbzJaN2%2BO0UxAL%2Bt6cCw9pEMB%2FntC%2BDPR6hU5KRXyqaduzq%2FyD7MfrKGkE0tW8v1cZeqm%2BVIX9JCIpVoLucHGn4yN%2FdF2DLdshUkDK5kAEb2JwUsxk6cS3YJVGNVH96Q7VdDp5%2FtWnIPszUKljMik8Uw0Onll%2FvrSzioJj35OWXlRYOvLUWemTCiPoC27QdyC2Q2EoHIaLwGeFYcpgMbwtuLuH4B2cLlJrLs49pglzM5qPHoLZeGIdOYKHke%2BZirKXzPUtNc%2BGH%2FbratKkZ%2BqFNQBFNiGoONu5uQPdIn%2BUc51RioQdnB4jCq2E%2BFMGNLEPXfGOlRk4Avo1Isr1yWEMOfa%2FcQGOqUBbCr1C%2BhZ%2BOZkaAezIEo5vEy0nRxpuBEseF8KAnCLySUWr2XoRcNsh60xEEXf0%2Bby8aterrBOOdn29GjBJIlFvRRU6DA20DxG%2BCdAQyDk9TPSW%2FzQ13gRkiVDrTTfa8PsADbIxBdIx5mhOqaaVgl%2BxwGcZFARdoISlHF6Z5Q02YbOw0oLEWymsI1ZIOxYwU7U%2Fw47eHA1ym3xTwe85OUfw9uV3X%2BZ&X-Amz-Signature=9c9b7647d7bb7361bf2aeb05758b92f2937bade09c4127478bb80f3a241166e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3JLQSLL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDdjfZ4Tkyzt9j5nNgKtZ5jW6WVO5ZiameyuUEmsq6kJwIgTDStmRliPAl5sMq%2BHZLAaFPCpKYYFjEay4tI%2FBUQqBMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOq3WAu2R95xwcSR%2FircAztiwFqyRTghtyr%2FhV6LK%2FaAR46Odl%2BaQy21nOdLiy87%2BLY1TKQChvxMbPnP3RXQvm55k7Droe54DLrbc0V3h8cbR7jxZnSaGzLH%2F%2FngnGCqWwCVH8nOHwh0wIHzjyIj0hKgXCWZl%2FTJRFTMbCpvOsRZaB8REb0%2BSN7ffmf%2Fu9pZGqEZ0IUW60gUXsMm1bbbb1AHYD1e0TegIDRnOjWfySc7RFlVfuQMbSeU5vf%2F76kY8m5v75mq1jOyDV9KgRhPQxdFxK60rx0LbFYtCgAl5lG0Baqgy9Xvb26N%2BD7OYiB7UZ1fEDywE6pTN5icVMG61rd4Pi1gmHMxDWbaN%2B7XPIQvWW%2FEFa%2FddeABEr%2BtQdrlnSjo5FGl2P3eTxnD5nlN5VQc5Yc7vWp6GHM8HaHq12PKuE7fhnrC%2Fk5AfY3wtxdAB8hGxr4P9r4zONRDexEoapplRYR7B69qWD6BmjlCVC8qwD70igwfq9c39xGPOzV6z7PRBRPYOqDK5LBPK3Rdysx4qvKIktpwfVtYIA%2BUKaKzTc3zN0oY9RDDLf%2FmHa9p9paqMMtovSKKBE%2FpwLqYG%2BjGXyNNv1kMOp1K2LWzjewq9N9sMCZ61jkKvA6KPH1gcf9s5EBE%2FHuDuQxUMOra%2FcQGOqUBZlENS5xTEauFKrE%2FPHXazHPjMbntOxqohKsTS%2BWuPTVh%2F5XiTDgc%2Bgk%2FzjqaSO8MTHyPFzx%2Bx6eqvKvh7KfEx8AE6BFTvOQByLUPBDvvAetxQAmdSwHgPb5Sh36fxwOCewnDQtjnjqtAgfb3wDuaCvOpHwZKowFxJZWY3fZhqoyix2kNdOccPuwpDqdlC6CVjVP%2B7A2TZHho7TltW0KXXltNNu3I&X-Amz-Signature=3292fd423530ca04a77687456c8e5d7772003421a7d318ad88d7deb217ca45aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
