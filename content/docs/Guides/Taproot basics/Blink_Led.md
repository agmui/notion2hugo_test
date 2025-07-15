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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667CMBDLI%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDXloekzXQHEt%2F6lCZ5%2BkHiG3Jonh9VQaggA7CVDc%2BSYAiEAmJXQA1Nfws65FQh0A12L%2FRmLXQFWa6vLStV6cB2a324q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAKmG3Yuf2BGXoWYGCrcAwJyzLxkYmCTcL9yUXeHCm2HSvdbjpesuYxUmV%2BAf9vgQY%2FqtmwYYi5B83kdReEgF2xuG%2FZczxuRcKOUp6dcUhxIrH2EytKAYYT715gd848EylWa7E65ztsm%2FmooigsQbSbNEhE6wlBEuAn6ukDiXddLjfUAX6TvFUg%2F0dB8cEsnM6tg0ZYNz%2FlDaviZ5o2OGy0zkBWuy0z7Njn6z01zwCJXGfNrD0tmQyTQsvXAUR%2BcKhnf6eMHAMZhasvfj8v7SlQosaK9dnnVL8nTnZGQqHkR8j3KJCBUFb7rGoQGRkBAm8p6%2B3IyPWg7ODfk2HQdXsxFrCm9aK%2B0SC%2BK1Wp%2B2PMkjVa2AlrGBVnCT%2FxFzRRH6YfB99WeP3sMckDTnYzzpJLHyWGU9nHLSL36DjYDy4YNDJBW4LpWhniCjW8e%2BORFG01OwjyJSfah5%2Fi%2FJfwPC8lmGoH2gEDPlDCDKOOos3HrbXUhZI9fFPfzX%2Fch05oeENpoam2YMeUGbJFRffD0witvZGVxsjeQay7r4b%2FKFwLcFx1gt2dVLPuzcslkuZEs2Jl1w0MKln7TLqqNuagn5caZB1KImEtEAYlPU%2FkHbo%2BlIwnli%2BGq9jOdMN9%2BlwL%2BjQn8fYMT8l0DvDpcMPuG2sMGOqUBjrs0ql8M5QOssHo%2BkZ5nIxS3KPkSimJv1gSwh9aUMrdnlNTnGWNVrT9rDlqMs1BuNamLxZ9hM7ezVF1nI7Xw4lAIoQCPBuGI4SQteZrB2UGsAPE%2Fa9ah%2FxDgA2kpDAE%2FOFFaiXr%2FgV3MvCuRrhHbDmNDmwdQdjWRpBs4EmSelKN43CbDK0U73P4QJX524xVhNhHTAgp%2BeBMVQwSy%2F4CwhNoCX%2Bjs&X-Amz-Signature=345a82340ed0f1928644f0dfc274120e1362190740958c3ecbef6449551ed456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXY6W4HX%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T190935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCICbJnZknF1xVDD2XtUxn4lfxHyjHD425Ts05Oy842aosAiBzZCy%2F6TO9HUH74x8V4YoUAEW%2BhH5S83uKv0b2sGbeVSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMPOv9GXhzmZpiMs2tKtwD4yLc1TvtES1t%2FGeKN7utZ7f9oBxWedBen9SIQihNnM0VpKmxxtr9A6K0FiZYUZitV7tihpseUat1ztsvGgJ%2Fw8Aszv4JS2WZcv%2FMmaBkYFY8naWn6vmOuOxkR3wM7VoX8MF%2BjyR15nk2%2Br4H1YfmKf%2B7QtrYTVFkcOa7MKSkR7pK7VWmd4RptYMzfHbIF1L%2BLlUWP0UWSYK%2FPFrwyRUSCO5X2vnAkcNDvSmoDG1%2Fn77pRQfMlLmMBANsieoKU6TWDdKGDEeuO6kB%2FYlswb3r224AtFnYcWRGAEroeOu7k0GgyajpHg7wzl9RBiPPW62UtCwIR%2By%2FpfOHEx3vdAzkWemVkkXuCxbVtBh%2FlP432jf6JjJ18r51dz2IaZ3%2FNxaQPzi2XKCyDDUBB79ZflzKRoDENr4UnqIrP4zXgUAmT16PNnqwHq4SyiEg01guh%2BBz70gnTCCBrRhiBBbP4%2BqnFAjflDIO%2Fj74Xp6zU5cGONRqLpn9A67QGcVZi0vd303mmJI2w6sHgf%2F5r3uNlDKZ80HVBaZMldLz47cXPa64VAluQ%2FCsSfYQQ4bqTcjEcDrI2HDl8b9yHjUSj%2BSsmF2%2BdYqJv7a%2Bk3%2Fnv0zYHkgWgi9jF7nNi4oPX%2FwnDNkwkYbawwY6pgEP%2BO0KT56c9peLFzWJfivBQasBHpaJkCYepgKZ7i0WiNyFfnXWFT80HIrbT9oFG%2FpkSeDNSyZDOZpZbuJYWSEKbjcl3iGmCjaVHPlhg7xGRCukerKneAJnZpxJr5wtVrTQJTbOlyzBDqn468IS5nllRhCByw072yMkgvNDtV3qZMaMzrnE5B3KTl%2B9d7rAdyGoi%2FsFuhzcV%2Bv26bPOudk3nOoyXegt&X-Amz-Signature=9fdb673c5b43d6e50d2a662a235ac479403234b235a2262915dede37ef6644de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
