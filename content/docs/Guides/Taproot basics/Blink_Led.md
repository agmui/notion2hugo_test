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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JZ4V7G%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3zI%2BreCoIVYcTDfiQkg4llSujfEZe42JTBNlUjdaq5AIhAMDWfNQCaOzzJwUY1o7XDyRuDixadiRKHL%2Fnwyf%2FF40zKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzeoQlvMkfe%2FHRCnKAq3ANJwL3uqDAL8OwBJr9K6pQe%2F3%2FBusvHkzR69RqO1xGlvD70jtuOFFQaTsLpffvsCtkFefMbuPOYN6W5YZtDukRYBZQ9uHf5SkqmIS6MhbUvTEbJbWqCvpvJf3g1yGl44jjgKFy5Omw6BXIsbNO5cqX%2F7notiiFxhz9ZyRNL4fWk6COfdFtCNNRDciGczyhcQZ4MR0T7ijf9BdOEyGtM3XrziOxNLZdnlaYR4wFN1oiV%2FFQp%2BiP32W%2FEvkS%2Bobg0sNefjQDpjkw3EZyFErjn0%2FdRC6qeQKadu%2Bzw4IY7xkZs7yXww%2F9u1pxfeEP6Gg7IYwbDEthjKj51qpyR6JMsu1gdarRP0kFkNf4QrukXnILS6V9eDYJmTaylWOJ19fZXHlprBV71OQS6zyMBjC4THVScpAf%2F2KjtZr5vj97TvYnA8i1p6AfUagqCuSldK53nbQDwSF%2FRCQ3bRege2UBEb6yFZySjX4FULyGwC6qpUc9zTWU2TO0z%2F4WMjxiB%2BalTzxT5DJCw6%2F7uDWLX6aVAGNNT%2Bexa9icPha0TxWrlawD9s70c2NlDr5P1E0DJacSykioWDWt4Fkv%2Bqpm6TMhaO0sokRmdA%2BOEI1spFzyLKLMXSz1o1dAT2U8Cn3DZWDC47ZjCBjqkAWjvcVfyPjNfJ7xTcwojjzq6mS40vv0yhkZHCJrKWlYDMkngM80IKFZ9eXBp98PWbOjutH1SEJ7ORJ%2FhZjnjF8P8F9kVW4mHY2pc%2BxNdhqcsM0FiaPFuGpZdOrvz07VMYsLamqnCdwHlt6NzKEulEFaJ3hxlsuPgbnfaKWaT7VeSh96YRmCXP03ObTEUWQQ06Dp36ECgyZTHwM5N77iKNwXzakTT&X-Amz-Signature=4b2c3d7f25ab36d87338cce3e5ad1429675646998c0d56bf6cc5a5cfd19feeb6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJI52NV%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T034441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqGG6FcR1I63QrgJBwHu5amabSO0tlp6kRh9kgOQfU5QIgKxoJTvgb3J%2FvSoKtGMVJBFlOi4RNTIaN8APdO5QUwjMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmJcKSExhIqemBmfyrcA2%2Fxp45t%2FFhG0Tp2HjOmxEH72K4AscdYrHN%2B8bBabUEbc06qVHsDSO6x8PZ6v4W0TccJAn8Z1nDNnj3YTZxSiBmvR3AHvBzu4otIad9ZzATA7brdP63Sed%2FFtmaMv0eTfz7KWhZa5649RThwrrI0xLuF5d8%2FDiorqx6d5HR%2BzY7FEPvOeTdCBbOfJBvtKXrLUVCDZXY%2Bkc8idxQXSSlpB0cy2oGJGcdHRyvVXrNR%2FZJyLAUvUuEbyy2py6BdLcTegU6K2QlmwsrV8Ux3bkivOHcaaOR2kbwHeuBf1DFcUy%2FP525F%2BiVGfBetT%2BZ0Km06NVXdiSEY32hNc%2Fl%2FBKFICQIHlJUcVS0sjE2J7CzhQFkgHoGHMKdoifhrUnB1HdhTh77SYj9Hd0YIbvgpdVNY%2FPYpLhZ1Grl8%2F6kCoAlP5kVpLO9iv%2FZl7t0Dx8yyvLvEuPmFs30sOd%2F%2F9bzOvj0sKiNqoJZ7Ns2rtcWZQZR08nOdGNNdAIDpC6DZ3DkAx%2FERweP%2FCtc8sLnrEIlFhvOnJQY1ROT6vi2u8OI5zhsrJ7gvNK6KHcQLOB4j7rTiJfEd6WligwN7kOpKadO2pJ2pIRBsWCM84ocW0kbaAPvDmRqBh50OiAewOE7ghEhbMJ7umMIGOqUBjwg5Dl53r74ClI%2BpfizWQuYdx8G8S%2BL5sgb4Yg1DwRRHE45D0Qt1AHObkpYpYo442NNjY6wOmRjwhT8DXDLYGv0O5X9jcy87c8nhxWLJrSmiIyzZ1v2W8kepIWD3sygWzhoTWv21xtJhbAHu4txgBzBk8%2BRhod2RZ7J81KwwmcJV0BiH1seohT24lxjPR9AvkHikSy6%2BElDI4LB%2FWUNjDo2xBLyO&X-Amz-Signature=4b164863dc218ea908cb0e9b60acdf0a311e63eb3f6931f1330ee93588db14fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
