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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FI4YIQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChV74nonVHlQHxDBtUxbCFreYWi6mSABlUi%2FjrmMsLPQIgIR2V402kEw%2F4ODnVUpDk4hrcLs7tfBiH%2FFWh%2Bp7lkKIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJa48XIJCjPHo7u9dSrcA4Pg6I0vXiL2qjP2fJirZF4m7xbVLP1P5%2F%2BhsrQ6U5QT5llMx%2BToRl6%2Fwj82YyqtKG6j%2FXbgFl7k4jSAdxUMWjMAx5V%2B580NfaYASuXWOuC556m4a%2BAbMxhX8wKpbrZUV0QW7RtRztW9%2BicyKjV79ugLAMZVb1C0fj7%2B3G6vOyzsfjBSruxxJA1n4xVMe0jwwzQ3eUVbViP3GKpQ2dl8nGaGoRij%2F5zptp1l2E7Us0zsTqfW9Hy5Mr9mfcy5fjTnGmBJ%2BLNruofKf2w1Efh4DNGhV%2Bq73e0VMjdd5gfvSOZYqBf76E4zgSGtxx6RCTI5Je8IgGTl78ZiTTR%2BLe7zMr71o1IsaUVuK9qGtkEMD4aQWGQd1nY6ZafgpiHmP7s0Q1q%2FBeiIhtKvmd7u8pHG%2BdHCpSTMSUO1qKY9SC%2F%2F%2BHacC%2FT4UMlL3ZHOdBksUvcoiNVcJQT7liURSynJO419CjK8uCHUSwzvYxuJZboW5vRPMjlBC%2FzQqw%2B3NQAUyiYPnb5mi1lSVjvqJRmi3dNwrpOVs7M0SIZKBOZCyJHinVXxciDU7WL8X3%2FiufrYq%2FEsHZ8yyzX4aftfG0yTAbQZdru%2FdNO3JC%2FkeWeao9pvNY2fUnMiUCv8iAkCEGVqMO3ypb4GOqUBGujD7g1s0HvzISwEAjdhkEyzokDRGifUemtFMDkM3voVDtQvxymXLd4tdAEC%2BchNNrNpPq2rcosmxQxgYfEF9J5Uy0sp59IVYhyJJpPXKGrlW5QYa56sbkLVR%2BAVzIbEp5j85fQBxPLyB3SHpWXRVAlTUsLjvnSfaXZQ8VVs0LnKdYouB3DspHdy%2FQzyTOM6JRbHMM%2F1wv3pwvilzgA6I%2FsQ%2BtZY&X-Amz-Signature=bb320ba9d1c35d354be959ba1f9b597468f77d696e00e4b6afae702c2eb94b31&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTPHL7G%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEj9KI6IoFmPFKLZYATzxvPkqEEgfW9UOIvQ9JW0y97AiEA5XoIa8fu3S06ygG7u1HPRvAntXCXbHIjkIsmMcyi%2BfIq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBP41rR5Jgfo%2FTR0pircA5al3NO9M18B2rSdGb%2FK%2BnbOmOBpzuJSJooXXlrH51Dz3eufAcVx2OK5PEZDAnZHtu7B9qkPZZ2XhZoTwsH7itVsaJBBWW6si0ystFPRn07XthYQsqDBBeF4DCRdNg0wPA7fvMoBqgoG6i9vhx9J%2BQGA5%2Fyu%2B9e0i69MNfUXaaKBYNhLU16hUKDXMTbsiWmlYQ6it1BkPuN4ynnXUQebX8KMY1SwtWE%2B5mwSX%2FsXDD7HGC5A5sIo5q7%2B5xHP61FAexxbrB2ncDKSUehWxrHW7ftg3mSlqfQjfCtKD3aH3gBDD2ypPlvB4CmXUDbNoznqjpGQaNNCANQl9DSi3Atq35PxgtI9OotkUJYebG%2BXlBHVmfrdpHz%2Fn3J16KaLzLqGAdMWh9pAA%2FqqwNcXl%2B8w0T3Poq5FZLSkajOk68xZkaYxuADFAwHcjbfLf0iHJ%2B9xerhAa%2BScz7fevWubWAKxWl7JGsNvKZbL5isZWDF%2BDKk36pEYOl4cNa1P5UNo9PKsiExZsa9KC%2BE%2BtsZlL94eMlpSZmNhqP60jw5TQB7EsfakZjpq3%2BSJ%2FdED%2BOV%2Fo1NbX1rrenqq9uWcCfcLZV1vwFf5t9L9pH52KQ8gvO%2FcZ0fhfbIokHQm%2FqA8iqmMMJfzpb4GOqUBxng%2BKuMv%2FF145AW8t7GQvKQMfi3yOMD13sYX9OX0Zo9VGLv7rIMNNhN7ANu1t4%2FybqvP%2FYTDPuPpoaWGbzVHVcrRBrM888B4DuyElgDg9%2BuDB5Kmc3lbBy1Vbih36SZ9sKmI4T3p7kGa9gu%2BHTpHCVnmsxZ0p80xaM8KXiXHhC4K0bivVj3YBLKIzqwXxM14ZN6Qk4Y3FddV%2FN2S7gvy6kqUWgF9&X-Amz-Signature=9f8d517b290ab92ea787c9d74cd50bf2ccaaee63cbc09a6b0b7f99321c4b877a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
