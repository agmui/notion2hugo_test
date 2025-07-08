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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ76YEWI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDbbosIef%2BijEulVavHBMG76rc9cB%2BEh0g75HwHwqJ9bAIgNaoNdVcwqaqWN2ujRGZDyKb2U4t3FZALtSL%2F1SSw6aQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooW3Sl9FNX2BRB1yrcA4pDCspolkAVGXCIHE3v6VUlRX74L8JfxDoOzW6CpQZKAbzVai5Vq0SwhHc9v8QSsbMfJavDFpnqQ3qGyVLyYoCNZlapJ84p6IVjnTWRbvY2zR8Jgtc9QmxSs3HJjUrpDd%2FS7%2BCRHKFXmnnQRY3z9K2hTBsLEq%2B4wvFbv1auuP%2Fw2P9EK0a%2FrRVwVu0JFmhsGnVT2qv9Uv7rzM1hp6N3i1NuNkI%2Bb9uMsBQKrCod1X%2Bnx%2BBkax9vOwQE8rDK%2FiPVvBCLvK2z%2BSPBdF1IhJ7JhAmlWFczrAsfIJhHk1TCVCqEzOYiWJYV5SZuXMjhJ%2B9jBFvFhhhc5q%2B5uMkAauo1hosXhQxjOrnaEgf6ZsEbfHv71eJlep0R5ZHzoT9DhLMSlO7benkIFzZ9zkE4482%2BJaX8jr7N5xkTQjWY6kvAajLbwEz%2FPUAHDqi%2BEXQWkMWLgb5qL8sBXct4LIoK6PZX%2FwxNkQ1C3s5LK5UJN%2FGom8ZfGWEj3Xfe1mSev%2BxYU%2F5pc4rGf321ctkdJlKhkTrx%2Bc4pWBQAVvQlxN1L1FVxM6p90SgZA9oxfsQoPOdUM2RhycXs3Rewsm91kuf2ooc9nnseahtbtk74Z4ScTpIIiK93WTpu%2BU5AKfkZ6hQgMJGEssMGOqUBA5%2FAb0LlM3zTEjXHI6JwU4wvVomEj3lJoIvBtJG0ivLqmIj%2BxYUeNvOkGJ%2FvZOjRdX0LBrC4xMo979HnRKgVF%2FDXFxSqw2jHUy6AzfvbCexlgbo1P78qhYr0WYT4MDfds%2BCjSPr5cnHDcbQb115PSowlu1LYNrVF0mYV8ZSJxaZHKjBJgEl9%2Br2W4dn0gAfsjDtPV6y0Z5aqXUe3yEE8onwfFItx&X-Amz-Signature=81c11e8beb16e56ce64c56dafa95f3eae3b44ee2283dddcb747b0ac5e6dd2f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIDFLCX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDkEucwRph2rzHTGrfbnstDYydfWXSfXfLgUQ41EDPrUwIhAK1v4MPeGAQlXyV0jio%2FQsRClKK9W%2B4UGdLTrOLhVOtZKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhZYMAQyIAD36FVqMq3AOdgPMhLz%2F33Hr6bbr%2BYAeiezXKSZ9uLh3S72a5blhIv7km4jJxsRKU4aS4JRYDrjsee5ivXnmB%2FPLEZdICZtu7nhjk4O4eDCOmwt994xq%2F7tuZtgFP0vp%2FESodEE6l8wGAE90t1aqWHqiavhFTiIxP3%2F2sHg%2BDWom46Cs4CgpWuXhpeTr2DGz6d5VIwEXSab6yP1NYobRwLsTefB93X8DIYfKAO745ivvmdAnlPmFnPZmZEoG7cCaEzrQNJaZAbYyk6dMQNE2DeXSmRctPwkjm%2FsV18TuFL23EzEsSijAcIMvE2LzsE8t3MUvmmOeHso2UiJ4XA5lEGM%2FLoYB7UVSCvgCZMYOBratS92SS4%2B3sMdPIhQzLbRfzTmdycMhTTO2Ma%2Ba%2FBsB3XTmvDjWZIkjK%2Bn8YwQPHPq%2Frp7vYbWUH03dyTT1arHOYOcehjAEyU6h7aJ0m9LQkxcgvx2nHX0erxpd3cD%2B4uwLvWar%2FtbSyWtMNIGFZMLs%2BYJyfepvGDM79jBmslb%2BIbGs2jG%2BaWcBpEUK6H68G%2Ba9ZRDtdI%2FA%2Fwnax8OfgCTQuUJR9Fi8SveR80LEEaPO0wzn%2FSeMtsihRbGKN7SVALXTVAMLUExFosmuhku8hscNbVACB8jDMhLLDBjqkAXrI6TIqY5eWzX3SJVoWsQ5aUTKAy1DzWFn2VcG5P9vjuLWG3AsGU%2FiNiL0VmGFgpdWyYM1kV8NBq2uti94702NbRJXTsyr6T9oRYAO5ZgOUF3i2v9Wx3n65jR3sj27Vf5jOzBo9ZcZPw4I33TVy%2FfAWqMwRf09G7xFEYlxeOhZ6EgKf0COGXcAlxEv3XBMZrO%2B2nyBv%2BZo9gzUSBJoolPEhcBYN&X-Amz-Signature=1cb68adb81aa456303b6644251b2015d6ab1cf798988a08e2c7038a2692161bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
