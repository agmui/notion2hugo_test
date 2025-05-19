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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V76SNRU%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEBuwy%2BybtMhj4Yl1j7k5U5eLOQ1aUMLb2j4LFmXFaU1AiEA6%2F61D5sKJjwaMM9mz8irSqwBpm8%2BOIqZ3srayBBYvpsqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnWZjYP1%2BsrtEuwZSrcA1ApLTPL%2FS%2FOcq4rgx8jRlr0uMbA7NlzR%2B4q3Sv1uPYVWKAGi9coJrAoReU0aHburltQKGFiOQVZPyJhGUx80o%2BFyEoA8bP3Ga0onp9ALnuTts0ekjebWCyWLltJ%2FPTbE0qKMoHRhDd8gcHeYiiO2RzsfXlkjF6%2BZyen%2F7mgiijdN7kQWPkGb26A%2Fxux1%2F03SrNcSOWh8JJAt6LbDlVtEVqPkgltOxFQhztxZ51aMRzgXsoxNfZ%2FSPBuCT5koL1Su5TvfbkqZmPVLH1RkIMVpjlxT3u3AQYggV%2FgWwh%2Fav2bR8u7vKJvQKhygLRJF8iZqARYeBlluf4Vx%2Fok5rBtM%2BkeseFqzqV2gmzC1Y0A05MLfIsgC1Gp%2F%2FIGOcelhQuro4bWVec8hcXGh9mjX4SvJpuIC9145oXiM0Qu4QAjz8hE%2BiUZI3itX06URlFeAn2URZ4fKFbG1x%2FirgNAd3ipduBiQot0Sk9OTC3bLRhEW1A%2BxkO2WZjB1lG7ugzv%2BAgMjGe4mcq9bXxaX9l7xCeNuzrytCubIWBvCYU3W%2BHHGTjiMjKAIXmmTqlZMzSyiNn%2FNN8uZUYxqwkbbvZg%2Bgz%2Fof0%2Fu5GUpt%2F1QK%2BeZ6YqkRJlaRbXgwxsP1n20vFzMJWQrMEGOqUBR6OIM%2FaWAOSAjZuM10f3ns0Nz3v3a0j8RTVPNDkyHWDnXz6HTATIIaf6VIzr16l9DUks5NRNIioVblGvmLipk6H5%2FPR0tNaQ6FtIpHaV1INuChUUw1UV2L1ib9nI6UZ6M5NvUql%2BvWAnXJwbDW7MeAY19TH1gZHWZVyg6KkbO9uhDYgfT70c0lzusPu%2BtIKC5Qznv9F7GsbmwZrr4tpoDHAF77Dn&X-Amz-Signature=54c11e3d7f3324427fdf632e5ed072a9d45eb73d3a04adedf9e6d6a1abf97749&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA7GZDFD%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvnbkORBs58iopDMz8uy%2FOoQwafIb5kIyfn8to2NelQAIhAJYNJ%2Bf%2FKy44wg6DO7tSMeEWWVn3i4vmCALFFuELz%2B21KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwNYm%2FRGrg0wsOpZQq3AOk9M7cqhhJuJIvI%2FULfUUmg79rIi29%2BN1kMkkXiROwatRkX6GuxLCWK3AdO97GzXPJrSOygTQE4mvvP9WA5DGd7BxhdyM%2B55Q1RP7JO5o04fTZ1Et5XVswmADohZJR7tx8KZMqaM0cguFN4zLqvZ%2F1yTxlVq2JE2l86mWR2uM1o0usOThW1%2FkDHIzyR03Ecv74BWHGmYayqGFxQESLnIgl4KPpaL0Sm5CcGY0ZR%2BBm656C13QElP5novwcisOCVZVvGpcNHGFMZyNjV%2BwOzI1yrNtH6%2FXoq9xhc0iN%2BOHJkRnFeuwyvvwU5Ui%2Fn0Kqw28%2BfGb2GNDUh%2Bov2X03EyCremtVQY4HcT7FPoqSb9ny0KH%2BN%2FMGO%2FYb8BWJol0U3uW27C14LIwislTT5CjnlcJoskakA0IQqMWk%2BvVJXCZ%2BarwiJxJWR3jqSODFuKPRCznhZB73dnkY0HCu9F7qVSVu0EilvKrWRkclCtKKBaMUS8cRz0QY6xkSra0EuIj7%2BOB6qCIDXpa7krplpfRn6YUovFKt17XM9CdGhVs8cMgFUHlSpi2Lh0%2Fd1tlzAWMDtIL9ND7INh%2BtYAT4UGng6pNRLs9olcYXTBR7fjvnzoTDoG7Mw%2F4Kc6cT3k3vTTDxgazBBjqkAQ6qd1dUv7YbNRcBc%2Bh%2FLoek8612r2amzlSGFM8lkiOkT9zHAfNtBdNYrzR7ktts1kktwjAl%2FSp9UZInlK0E98cucdC37PnAFHr2QJYB8jKRZH2ES8jwTORBhNI4l3L9DUf3byDGec8qWlAqmP2bcmfJUnBFbbB2aBTgSKu7zhpZqR0xjbkGiBSFVtQY8znddxIznLFAOBHZ%2Fpq9Km1jSUP3npTK&X-Amz-Signature=96e100d8b48a2f8b7d3bef1029319e0478c3acc69eedd3c1f1b2c3c513cf152d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
