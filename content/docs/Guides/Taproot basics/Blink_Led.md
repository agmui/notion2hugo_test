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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBNEXBNL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD2D8xOT2obbFu%2FvP31lyPSHzrHMyuuaLQiuey47%2B9LZAIgHtcW%2BSawlRBe2EeNcxFEpDwAnoKVdKm1Vkf4MzCHmYkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxm3upmdVpI%2BYiV4ircA7iVrn0hPG8i5mrYVCecu8Wycs%2FMjp7WOW3NEgd1asjCEHxoM28i96LWRlsm%2F3oyHNTvqdNBkFozKYuhfrgJqWi30rUyEEDeduBq6kJjtKZoE1lYU8ToV9bScIfOyGZO2yp8G25XLQWBY26UNrMBjz0O%2Bu0gTAgqeXJXWczEtxk2wrYQKKhl7OZiF%2FjaqUwhHZMtBhRkDZxgR8YT1b0GbYhSLqTkSKJszGb8dVSgqtqdR0l78shroUvYN77%2FuBb%2FpC8WqJpbO%2B9w8c%2FQgb8jid3huIH4tpni%2BJpQ2pPu4PRppyctdLg3vs9sDOumvmiT%2FgyL2N8jo79RQDIFkR7Sg1%2FYWt6SZfae5OGR7CEweD2DeSVB0%2BJEjTIi2sgfitMWqrDZPh7YAc43kPAz%2Bn9IR3R1mT3E6A8MpNAI2BV%2BhNZeXMN7x8MwH%2BWDYwuIhoTlLey7n2I5DLL3qTMOMKUwkhgOoDeaQ7YRu%2FXvdgMeswf9SdI0BKzIftQEooGeQQg32PCXZWuwK1L3s2RtsseDiucke1ndHa7fFc3YCTyIfzHBUebFM38Wo9%2BRYSPTZqEMgSFB%2FjWth9%2FfdUweveaO%2FQ7OdP4GTC1Sz%2Bw6WSjUrWKQ7JMbr4Ffwx90FxY%2FMMfIzcAGOqUBkB7UuxHEHz5amD19KkjpKgrAmLf3Y3tCq7Sn6M2wXzGvlY460iDe71RJOQLZD6ko72jULdPwgWF8LpeL%2FsNLqu9RGwZ%2FM4zhukuKl%2BgcfiGZmgohWhleKzJ0pZ2PWe9DKaAf2T3zQKSONGY9GNYyhbYVg2yeLmqKDvwI8CQtderVmLv1R5aQfAoPH9wBjx5jLo8yd1s%2BNmplh5eYP2cgQn0%2Fjben&X-Amz-Signature=413a3bbaa605e3bcce67f09982299a63f160ded4ebf092556feb82aecdb89e09&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TP2EZ3B%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQC7gJVxsFuxRnIfgGuCvmjriHfa5EOIajvoNHFxjXpYhwIgcNABKScD7H8XYtCWgLOvHi4vRBHM8CpbiNIjZk5cUuIqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLArnSJ0a1349Nm0qyrcA0sUc9JDEdvcXIKEvbgxGPHkJE%2Bn7RhCOJ7EGCXk8kLGw2%2BCLNSs0VY%2BrE0Vtvh%2FRKjx828DXBLqFr3tSUa%2FZjl7ukx5DH9LltMoosB37U%2BuHTlmvWa8z5D7DTnoL6xrAlOqvzHVBSW8lreTODzJIkug4haFkDUy7oFOdLVjpWrbcxd5jmliygsrB89eb4h5tNrSW2%2FSOQTNrhj952F7Dx6TkTvUo2xLf%2BQh0JSw71g%2Fq7p09cmWQvvvSIA7bJCy%2Bo6rXrAFIy6wAS9MGGlUSRIcTqjqLOQr8hsdsJuQtks9Ll6AfPIriKONcQNLT2o2QU0qsituq5fSy5CUsCDFkHoJ2v7sdyYR7TKNGmkyNX6%2F2ktigdUbiooIuHvHtbaqNJ2bZhldB0i5GDzCrZqVyt70kUWhUBOsNbMQ5dducyeJ%2B2pfQ4mH4JVoRkCP3Ebhu6EarJi6%2BzdNfH9iTuNc7IA6Nd2oy0N3VcFpRF3dxVLJjCH3%2BEixOpt8g%2F2t4yh8xn3saQKpqcDft4Xj%2FCfo%2FpHFnxtu0qqnC%2ByNi9fqd9Wo6IavgwC%2FwmuBsEQ6ga2%2Fg4D1uomSrQHZ62mG3mrA7CbJYtXjPbd2Mrlnkni0j0a0Rr6FLHFcwTzTKQOvMI%2FJzcAGOqUBztXHimPQH%2BJP07yn5Fb6ybDIjKF%2F6d1UIheWoAvoH1MDpQdLnwWwtwu5Ec4GoCPWn7XPiAQDSUNexJNMLkXYcNqzWCQWdTuaCc%2FiN4VW8vuuqpb9SmU4rFw00g4tBf8mv3mVVRL8JsCWi0k4fpl%2BULse%2BY3oAlUSZgEeRJpz1ALyYP9ro56KCMvdojp506rnZUXO07xbjLZ7WoM5MsGh3TOpYjEq&X-Amz-Signature=fce1c9d173ec557df59f2e03406f14c9f0bbfdeff100b82e640eb9ecef1528c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
