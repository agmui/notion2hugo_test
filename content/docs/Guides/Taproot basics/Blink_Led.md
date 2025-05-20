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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644GHCLDS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqRb1N3xrbpz%2FGHxt8NwPc3SqUTVXF9CBc7MAude9hAAiAldBrofdwNR%2BxUKIZ2WMkJ0OGWC9GzJpjt1Zw8aMfKmiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2tF4iWaSZFPe2Ev%2BKtwDd80zAIApTZzR9C9Hilc3hjGclXbdfmuSOVw6eM2tZTZqEvJ3dCtXG8GAnLTDbmCwcNKpyDWAsIWUBo5Mb8IkzMZ%2FCDicBMqr20aPJIvqG0uxsFAo41d95ChRTp7%2Bd1n8ctYXMklcEzEcgYa094%2FpEJ9zvKGbLyzcyL1%2BMHyyWAG69iCIsidEbVw%2B7b7rh9QY40wcCg7rLBf2PpPXoM%2F%2BpQFE10pyMwCr7kkWx%2Bvsr7hdh%2FMhIxPeb%2B2HsVTwv%2F05RWYydh7180V8%2FMWJoUiZ%2FHJhnFhfS0%2BqMNPhgFKWmy8LHQtXN9uT1YZfddZmBEggZ0CtQlH4o%2BzgE8kAWQJ4HI4lEEkyfeOVtUOuj1vXuTF8lJ7Tcd6rXWtFcuENjuZEpI6orkX4nxa%2BMUEy0X%2FAyBFUqBTVDKdDWoz6u0FBjx9HG7jSGxRCv6oGNNdXVYhagy2v7TQQ8euI%2F4CRSujJ6Lev68XoHMACcOVuud%2FzHdP93XcEFdZ7%2Fime6mLpMlo5fvIQ8rXhYtA42QrhqEcA7cQRTxFOIdRBPjr06IBqRbtVAqyt3hFAFROUn6O6GMbGADKbwCTWiCw2Un0crTd17ky9IkBKgY75ud8vnco4AsZzLTNvIJwNYveq78owtJizwQY6pgH2Z8m19WbNhEIjpYz8HiN3l5Q%2FOYqQcFeLPtcEF3HJRHykJAO5xtlgG2t9GYxffQNg64dFOs836nJnQlIBmPmbp7aoc4bdGkCGxbZXRt5NhiDMnfeEzgW7Wi16k8nTtLOpfEaUGX4Vniz7bPCbXM3U29JKXS5XqF9QP8z5PCFWklFzhc%2ByLiHUsBqQEZAChAMGmCeItlOa%2B4qPpwguSkidgUEEcMKl&X-Amz-Signature=06ba2240f205f2af2a1618b60ed8d8bf875c4ef7b91f64bbf8b3357028f6f1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V23T7TWI%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T190424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYV8hvGvEu%2Fo0QhK3tzLHqURdPyS7i%2Fg%2BJVt5cwqfbuwIhALNjXE8Ic0WH2aB8l%2BQXhQr6N7jmJRnF5vUiQdvDJro2KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIWRIdfZZfMk2BZBMq3AMxEhcdDuv0CV95k1TYFeXHsLTdbtr7QK7sX8o4NJraHn0mdcrVEpkoEv%2BrzPyNnmHyMXj%2B6l8t5IKjyMf7WGR7B7Ykf50CnIdaHxzdAwQhIua9MEK81%2Bcs7S8PVIisWrGhrGxr6rpMPNWsMVvKPWXV3%2Fsfi6dRSjwFOIKoqxWhpr6lF8VgPdFZTan2NBS%2B36Sma6Gz2%2BNPuNwJ9QUkDiY4mtuYUuPi2ImwCj8RjOEdZStExAyAfHN1Ex%2FqvZ4uDrQGTpmzvDV%2FRT0inQekwN3XEQEpjrBNiAEqgRgxB%2Bq0uz7S0LLPzbMOHyQIs7xEJ4ZYp%2BGJWgJeSACnfBYR%2B1mFanMzfeEqA9qVHYQKJ7u26NHnPlgtqpsZ0fLl6CK7HD9JlRYp9pDvlsTQUKHyqR6llPq3DXOSX0gvDk7Nphc1GY3vyh0XXTz0eOeUuCPvCZAqYt9fOB0eQgG5w4YNK%2FuN9ybOOP%2BmONBXKBecL%2Bgj7ABZVLb2%2Fkr54d9flpl2eXs9mV%2BOaICpYFqIFbvSw1MlAIZVeARU6XkRy6gvIs20O%2B4%2F7pM5%2FHS2TlKXw84Qi6wCRnYA19TodYfAN84SWBdfRzQcm4d%2BSKghR4%2BAdAK83hIJ9E7oKJISTWagdDCymLPBBjqkAUZpbyn9zX1w6GSi3yrtDIlvErpuk5VcCPV%2Fr2r8WTFBPGTyjKLf3E6fMBhmdx5WwS5AnuSj7YEbjqCyIaCz%2FCzZeuU%2FBakvNSIxxDUjU6CGgzqjUAppu6VsEC618Q%2FeAW%2B83ZQv8Pet%2BYNIZ59TdqW0d71qvOPQlBqx6XiStKmjMzq7c1iJ6Q0WLPEMvUXP9Oa%2Bp7Th2aeOyPGpYTFFZZuyVqV7&X-Amz-Signature=b382d94140c193810f36901c4cff9829a61976cab3f6342e3e9a8d3b399498c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
