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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665MMPZAO%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCICW2gKEjBHKO8HFX%2Bol232CDnqHkfyaDsxNZfBpkIqSYAiEAvvx5eikpOKyGZVZVBeqs2XAg%2BlvA5piGvIbwpPaT%2BvMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMKaRcMa2AGOhMbQsCrcAybT%2FK2Sxq%2BElHn6uFV%2FTT4wOquJ0JeaKZ6FaaBSwQOcaVnzrluaTiwNpFvB%2BpgdGVZBF1sjBeGiE70ecFkZVdSz3dz7hq9zA26qVcyEHXMK3GM0BdK0vWF1%2BR9dxlCyoppCPWf%2B0RukGZcvsydsJQS68GQmICK1pC4lozydpfNa22xvL6je5WhAdZWZLCbZjBuugQgg52r2dNWYHNUrRo5Ig%2Btq3T4GZZ3WE9hK2IZ2B3dR%2BVFlnDbu2mOGbGj%2BgCzKKpuMoyz8pmAQf4pmj2g%2F5XqEixhdTi3ALoBbbkKXI4aurowx2ho%2BEwQxLwZolQhoemTABEjxWERV9U4S8SvndthC9Oq4h%2FIY6S7rkYkm32X%2FIepvGnjXLVWQibUR25X9%2Fsi7qefEzEytaprXizNSfxyoBUnru2otmRe8wgJTkGgZ9pZ2oisZz%2F%2Fadw5zp7BFOU1OD4EcClsve76%2FMs6fq6qMkVJ%2FMK15eR7rfERVLbiuBCQE2q54dklW457raBrwirTPDEW2YngUmKzco9jIXKiXBZCbD5taCxP%2Be2%2F0XzHOT987ypL%2FWNpmkOibw2Ac%2F29%2BmRncFcS4x2LxRvwgRXJffVLGy1KTv61o8sVgbFFrAfgJhCfj%2BeTrMOe71b8GOqUBClluPZAxW%2B7s%2FscvHDdGTEnMAPfqJ8LcDxWYKsdj4HzYzBwpUyDIQz63ZsjbYBl2qtqTUbgouCTHhBLUwxPdYTgZYRjbHUuPQbwb%2ByGU43RLlSxceyk%2FBJlgHsyO3AWWI%2F8gTA98tSFb8rl4sh4uES43xrJuOqf41Bcfm%2Fu2kkaoIkpM9eX%2F2f0T9uFZQkunNbxxazbdCqBEo3vx5GDIR0R%2B1Qqe&X-Amz-Signature=dcddc274aa68466c12aef1b86b5366fdbe49ad3944dc733df2c49e92836a4d32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJMQRGLQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIHHrenqXrZ7YoPbtI7tIupEHJujk8LDEO83CCzKc0aBiAiEA1i69tr6TxVaU3KIJq1MH4NTtE22qftAgwvV41XV0Rfcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDAY8UWLBBeHQoGLxdSrcA1SYcjq46JOG32nT7a47MYdVntQEacWMWrSkCgzxcZSdvnuwNsVf%2BlPGx%2FtRvgKDQ5EUcabTwoQmk4M%2FdF%2BgYTwWopEjut80rDUujtSl1%2FwpXu9jGF6i2MwaEBy%2BOK9z2Eh%2BqLx2fnAz2zAdRQcWhQBFZC08X71DQf9bbmBN%2BgFOAGHJCdHLUYQNAJjtIJ%2FHno64Y2jVF00QLmcSJFu1i0V49sJDyby61C%2BU2auIl7nnG9FYpySn9NNDlaMSt%2Fue%2F%2F3k62nBMjgdEjKVvukFyOUoFIVWA4MBlLNm8kirEcDnkPPh%2BSwqNWUY0akEgQrnT91qii1JkMNeVeSGgi9%2FH37HJ4WUkeXnxz%2FjGFne5KgHEiSUbhRJXgx0Upbxx6fVLPXQ3p0BLXj6MFcGbBKQl%2FhltNqgAa7FuFHX1YF3x%2FH3zZvFRpIodVpD0In3w019u2Ws%2FIqwRc3V4KPF4lmBdcylYdEyBuGyDDG9rEB0qzo%2FfM%2BJuzfA9TtVHY06sC7LT%2BgZFRhf5Xkgp2dlrjm2H8jIy8ppAu0bJMKPvhB3ZP2KU4as54f4RuZkxQmY%2F8pM3Q3m9J%2F90MCz4Xj8VFV2l9%2BTyKAfp2OH9NCzP4RAVYWjh2j6UQglR1KqW%2FEtMOS71b8GOqUBnk0gXBxNsNIrcQ9tJrZJsqHrtWJbGhNCP8StX6Ulnje0divU0%2F%2Fxv2HU3D6IkewX4Y9h%2F%2BFRgyGrBLmwvlesLzdctXjjRfPbp0JCrxakN6ZblaEmGBmAzMqPRvpoa3ZYxlTffF8ckKgoUZeEeRnSNU0w8OpYoj3%2FrpC8ehp70Nfz21DIJq7MH1yIQlfpR2xs9a7M%2FjvHat8jb%2F6vpn%2By4M%2Bc%2F8wY&X-Amz-Signature=03e4203043f6afde392935629536599fbf8448115e5705ee5172f18573d38edb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
