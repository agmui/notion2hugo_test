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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GQTI2X%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8HHNIqi3nS7L3hoTFPMYgLd%2BFxEzHMf8MZKarMmJbEAiEAnqxjvkWVIYQuycFTX1Qu4y7YTbzxDdPjFWdYnKl%2BciMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMkD0ecDnu3oWdtAQSrcA2%2FatdYHikup58SWXPX1RAqSvd699Px90Ri2rRiwUxZAQ5T42ERWxoFhmJGGhpudv2NOyeMEq9ul86doAp26bC%2F4FWNoNV%2F5aC8uMCogSHWNxv6o7RNQfJFWny6T1DHZF8kkM63W2y%2F4yGHhU10Op%2FQ4GMx%2BdZZ0WAbVvUu0HXYUs8%2F1vI3ZuyzDMPF1VgZ2taReuq4jsFiIWEojZWyi8LfkPjD0vFe%2Ft%2Fid6e3nokyhNmeqa32z7f2o8%2FS1VrCO9qlETm%2BschCYDYZFPEfsjrXh6VOcNFxfojX%2BqZldE06%2Bk3jEhmEK1MKKhv7WlGH7UGKiAm2A5DGxd4Ik36iwzJq9nrxgJXneIX79oHP2LS%2BVvOJ9RyYn5jaih20ua94QwL82SmqIxNHnpfs1oeI9yD5ucqpunxqSMl7ha15nBte08R7PMe%2B2hrXqLFYbEknwRCAxcYl4Ga1xacylcqqdbqlzDw4STZIx2HCyM6VifM9wNi%2BXJoZ4F4pIm2MOwEMdZXYXq1Ws0KmdX0w7TLP51Diywh%2BrwFXCB4L6kf%2FA1s5%2FDNcsu2jv7HEGKpZkghM84D7N%2BI9FmXwGhincHEVwFoi2q08JYA0Cr7qZAbdXuEk1C788NkIRJJRG%2F0zOMJrjssQGOqUBZcuTkbQ5qQjjoY4K2fcl%2F78JylL2X7fhtoX81qhWPvDKKJ%2FMUKAoWdl%2Fxg9lmWiCmVUA4eKQ4JsDasCKFaq66Nx6mCr7crBm5QqlwgyMowmjA%2BdWCEKWs7raI9A8h8GN4sz5%2BaXynSDJ0srZIZ8uD9E2d13Ba6fTRk3vJsnWbd%2BT0vewrKf3hPMl0AV%2F4M8JToHIi%2FdV0IfIMPpuzs7DoHIFPEWt&X-Amz-Signature=77c6f15fe485eaeb3893423b9a39869ecbd1c14343d05e8dfa8af43aa4ef4f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHOWUNSG%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4f%2B7yiUlC9TfG15vvtmP18m5GY0eWSfFd%2BkIg%2BOy2RQIgaTpQdm%2FwJjBjyHWEsEILuOywB3AqrLKUpOFoK1aOW7wqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdxDS5Se6A8kipMPyrcA5DuhX6iGjo8q6hItTDKDy6QvV6p93prEfBZUfgpcMiw9Bx%2FOf4Jnfoy2Ry08E3PerpKqYPxdkNHCfn8T%2Ftm8Ly2%2B9wCWqpEcrUbtb%2B%2BgVkHYjfiFTN%2FUR6mVfSHqZjt4jS%2BA2eScZlOI%2FVzw5yqBGWlXGCuFU5BF2kFAjwgEBjU%2FW5JLYMiBJfAxh%2FlqAx18qPZJQam8PYsqzWLZnDnjfA25QBP%2FaehXjgtaBzQ2RPMIQGgP9Xy%2F3bE3p4b3WIQFHtOSnzqA6HrE5Vov7FGGoEx4Y85HOSy7kPLRuhhRTfVgxutDcs8u68qCRm8KBpmwcIgGGpUSoQ6JB8vfs091ai1mTMcuZfnFyKTDMNpquzbYJ%2BwDmf4LmVkVj31hfHC8fkFMwHB470vfOlz5yR1hmzUs2fKNUUGeF9yqP%2BBY1rvv5Notganpiq0HXWROVAx3t9C5OXaip4H3EjPJqg8vRP71DhFY7PLJwp7%2FHKmA22%2F4AvozqRRs7FBFinq2uC%2FQTca5rkms9N5WEZxDd1Hbs8%2FzD5bgu6rFTgs74rcWPDfCS8p242GEded7SXLSGZwHr0NxrdR1Zg5r%2BTeW1N3DmRNhtxq736jnS1A0EcFKbQ3LkVdrPSJmBGV5Iy6MP3issQGOqUB2WlGVSAs80Vec1jG0EP6ytaPCvBU%2BsKIzyCQ5jcXDe%2FAZycgkUVnF3HPrqVlBSPMlUB1rwOy5cr6L2AUZh3ZdACWguTFRGe6Xwpdw0prUCtZeSim%2F0m4htOYBE2jXKcIt7sMZwwt4ssLzFttzcjxkrLQ2xw22M2xQMdqktbSznMcuHMkRksNu2DM2O7koTQapAZlegYvGwVjtq37fu%2BnGPVrDuHe&X-Amz-Signature=b9e6b33b67086a7fd09d7140f29dfaef4de59be462776aab1cb24a43d14098c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
