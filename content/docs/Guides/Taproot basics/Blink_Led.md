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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUM77EE3%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFHi6iQRW9bpvSp4lzXDg0LiOwHcNu9UJOpOeISEuD1%2FAiBd5jPCnA5vDre%2BvjyTCt7%2B16nWweOl6H4liNn9wprK7yqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBQ8NNvvG2EO19RBKKtwDVh%2Bd2HHlqnmJKmd99nhLqGjdQs0hTEUHt7G2fcrsbEyfjzVv51fHU7%2F57kd35FyK2j6a0J47B42ilTqIl5uO4o8JUCYJVlLreKU4reSkGz5jkCWhyn1bQodK3CrAqCcPHsVG9X3V1jE6ArttiqZoUtLsGZyshskIEG6I%2BknG866M%2Fy4RAXiIeIaB3xNRqNNrjaZhPq73AfS%2FYgR1oeB3QJCqF4RRYg%2BDOAgh6nqjssT8vIgQUOCzdIQ5LA4NFsAVK2WJ7pwvtP68%2BaShsqWOmhR16M7hxkkoijMaJIWgxAI0CYd7OOdkPe8hK%2BDg7iY1jX2UG9J0EpkKIwkxgWjXc5UgJ0hImgn9s4t%2FbXtNrvMVAsuwxwC%2BgrXRBd4xjXmeyg9FtW%2Bm%2B429suTm4QvyhZOCQDdcvtgktI%2BtZxFWOJRtgAumlOCpKWAdcKM%2Ffhhc1gTMXrnDmAk5bDe%2F9fWQfQi6JHSk855EcVuxbmBiSFK7qO8ORDqfI8DCbqzWzXGqGQyLei212hpGDAr5U27cDmXz6VJaZ%2B7GjTwyqih6oY3sRmmQtXBVISz1pSoeXkMaS6gijR%2F5crpmiYDdfDFnnU8yBcO61gh55oKmskhXEMImeNxBt8f6%2FxEiXIAwvfSWzgY6pgH2ofO8rtOXd6P675Kr1O0Z0AKu5qnbSxbq3HQqyV2V9kM6Iuo2kUJnFUvG0wYWpcpvvCkBWpbTZcPN9NBk3NBRrYSAm5UvqDItObx88O0jqU1siIam9w3I5U%2Bv0Lhb4hj7pyKMVTIebQoemyHnKJCfup4PwSlv4HYbsCQMt64aaGKFVr7ez55RHSA11nLpnZzb7tdhPV%2F53I8%2BKS3XgWaRMrkMl80J&X-Amz-Signature=d93f1371f0a08322c23841c14683db1a7ea5a40b805bfb37562eb57cfed95d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQXEWQR7%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCh2BWn8QsmO3YDsl9J2fHguB%2BVFDjlq2zwKReqvf%2Bd4wIhAM0iUn7QJ4X6K0gjUTxdn1Tl7nBBAIrtztwT6lgA9dv8KogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfVeGr6A0HY9SlOQoq3APIwHhrwkgxi6iVT9gdg21Y%2FpMXhFjfsWGXpTo7KfECSiDP9CA6Cz%2FJREra6yLIFx5xY9qDn4kCu2gN4byvN6J2JiSCAyZw7HwavKNNz7bP3wmp6iBWZFU5Woofm0RufTFQA%2BLqrtmk9ynG4BgF2CTOasI0H41jHiaXBlwBtMsL%2F2%2BIWt3mSgmyHEOIRhbjHrk0a7jVxLmXCO%2Bumc69NwUvWPh3fPIynsV%2FJM%2BBvaRNLl034MmvGxCIqQkUemQiQH7cywpzU4Gomf8D9%2B64DbXZoXMRwUqZEq%2BZ8rSkXq3h3lUVbEQG2t3j95RrqdSYjKjKTR0US7dZZdEBavYtAezb3xS%2FmYNwA9OFvDWCNf9vod4%2Fo8ssRkSmDk%2BAomr%2F8F8Ow02Au2vgv8j2PCo5MMiZ3%2BwGy4WRrNwGynalXCQt3uWipZrn5rC%2BQPg20khGOY0ra0EgyJCgRWHmsEGBzkhRwqF28lOddbAq78pDbe7lwwTWyQvTMJ6%2F5XnTGr%2FnAs8%2Fq7bB6U%2FAzXILDBZ8XugSaD3n3rYgbvR8I49h%2FBtutqZ%2BSoS%2Fp%2F4euQnNTGhOwhhr6PXLuNsH3KOFPdTQXpqU4BrmHd%2Frn3QAFgoyl9algV8W%2FbhyRP4rt6o3FTCC7pbOBjqkAT%2B9%2BIMujPIoEO5ntYDzKWnqzia2jGAWKeCTzjg3FxM9TKjGVu3Vc9pYrky5btyFDwxGFUl0B7SS8FEaM1WQmmk6FeBUL1fQXQeVruj4qbYWCRoHjg4ZcMTZsnhFgsWDPcu6Au6LytckC1bjoKTmFBD5OeqESIso50u8c7Qbv2MGXIcoUvZOahTboLhA9H4rubgV7hC%2BQ%2FF4Irz8rtgfspwsVmXu&X-Amz-Signature=e6a1cbed8c87dddf5c6359fc967df142822f90f05ca006cdb9c07e9a6b5c6e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
