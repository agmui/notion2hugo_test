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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCJ3UQB2%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIE9JoJBDasouAI7qmgrjEye%2Fo0ymuAMWAFcvSCZo7vj0AiAccoPU4heKkiR8xdS7qAOUVZisGSNKM1lhRS2ktvHETiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnrB1bkFg9zpR1o%2BsKtwDdlFcSkumG8z1VrTIUPrDlpY2tfbyn3stvjWfXIedP%2BvjD9RL8wBAq36JEOqsCqbjhrdg3TSsYf5o4I755vmXx%2F15j0saqy9OU%2FZU0MHea0IVple%2BX5uc81lIpDgdzuUla60g8kXtuoPwAbKv%2BoR1Yh4dMxmvAU5x1gAOa12Wsljk6yU3IeVyT%2BxY%2FVWNqtBbj7LJdxfiCPQEuDQ5N6iBHx51iGpgJCjQoSzLkaYZb3dySks1pUhu%2BTTtdL0HkTJhwun%2B7vr6%2FzvI5Wz89Yi6gYdRP%2F7d8%2BzpDz3UNXnPGWilihDmexc8EAUiahQYC4CJe0%2FvYJguQgsKj0b8AIQrCU0%2Fq08%2FYzj%2B6SB2RRiggMP9r1AfZL3Z%2BSE4o2QtHCVs0DsFG9s8Fb9DO0vFQYK6HSK89XcgKAU2L8fcvbnpEfhjlNoWOj%2Fz2spvNqAkx9YCxVE1eOfOCG48g2gE2H93PbJz3jNS2c0KTWvlFmSQ1w5zKLIo%2FwuxFwCGJvinvHLBdAvvnRfed0QESP9WuNrtVJBI96pV5NxDZFbFP8ix%2FfnKbAueq7vdFBhLE7uWMLxr97DUHSmZ08vrUoV0dT3BiNnZnIT9eg4zjRjqiKCbcbc%2FSRCb%2B7RXOW8ckUUwqfu0vwY6pgFXBrsA%2FmtqPUkR9oxx2fM8OBhQR9KmrjtzgbrVlyJmPALAa2nh6TAzgicxxlsfZFmve2HLMMFgNmvYVmOjwdUNkAy41vatib6w3aXMG2DcEKgN3xjxHvonTjUL3qF%2F5YT5YwUm0VtvXlRalZOwef0yMnP3cxE3l9mnxmHN7lW%2BfraSR2hcBPMRtt69Ewx3w3AxvDS53Bp6%2F8slXBPiyss45qpnqeaO&X-Amz-Signature=d7e46c8bba9d5291a196d04435fa6933b2656808e46c59cb59856e7ceca6ce60&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SNHXB3%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIF4sHgzNUBthXjzvb7ugT1uUgjRdzP8RUEILb7JUqzKJAiBcBUuUpV%2Fl1jyz225QxWrZrmJhM%2FdcCGIra6yvelfHkiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaEwEfdzTRXhBCJU%2BKtwDyrSZ9J0LIUlVnBbkSps%2Bjx%2Fze4QSic4B%2FBMoZChGTD%2FsH4aCBi6ytL08XI8muPj1rfoeem9nXO7%2FzywakOpyE5GfhQ%2F8IgbQUN2Ow76ydRylhfx%2Fa4OZAzRMhr2vEgGIH8Ay5jWWbKMT877PeJ9tAtEdbGqV98U%2FkI7reB%2Bs6DkUAlKDmCSUie6Yy4PkT%2Bmw0i%2FYj1FWDvvlojf8a9beAAfqhv1eTDLGheQa6DYjT1GY92FYbepwl3vUGdzOd5BcCms%2FnWnCYt%2FmhNrS0yPi0WjtSAc%2FULtqPMl0GkUQ7lrBvE9EWcLaWT16AGFg6RpPkwsyvRIBWUGa8DQhNXSW0XsoEJoQRWTvFcyw6NK7iix2Emf2zPi7EKX0oeQriiBEG9zRTXWP9oTDtsixu%2B6pAZNpLv4cLGpwbDxpz3GwnZHMCUWQuYBjnLRMThOpwtwsM3EN%2BOHi%2FN32s9ZedxJV4thFwLU00erRDy0RjEH%2BAeIHWFyi3hIRq7%2BVYAB2iqXmF6PhW9Dq%2BJ6i2yEcKaq0CZYN1PyjA3nBpdLabqCeLuyFiE6h5g3msxwyzDhollpFrgSn6Yn4c0rzQLqH0qrt6wO788F9zBbwE1uO%2FiHovbyv1SqsFRUQgD0DgXcwjfu0vwY6pgH72ac6FWASggRb9kFllGbjgZcORFqncO60DCLGeUofoY29z%2BgUS5IT5AjEvuT78KcuRwxVyrUyeAT2Bn%2FlKH3ZXvyG7PAxkO66c0fE02eu%2F3YwSHBbp0nEJYKGkHvdEODcT8hld2c98fh0WvTxpz58OAvb9hD5ViXbObRU9MZBC%2FO5PGFx%2FOLP5ozAadS34MCkjEFnsqpoe48VQKkJIoaj2GOUTEoV&X-Amz-Signature=6edb647a0d4789e46b7920fd2c05fccd19eba4cb648de95767a1bb4621cd0ef4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
