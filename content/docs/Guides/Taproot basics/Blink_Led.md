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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNE373OV%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUt%2BWA8y7D0Ht28K03ovZwnlIljypsnJ6fUrCa6ReN%2FAIgdmAp9or04D3O2S4SjQ%2FeIgWdTjGgcvozGxHo6c1tuiAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDFzwEwtz4PBvm2IRaSrcA5SFeyp76yMKMnr8IIvOidyLvoGJShmpyRE2%2BojgkcoNhqXykJ%2FUPy3%2BjgCv8U4WozSUJFnRdKFMRIjrLTZVqiAQCuwbAndtucBI%2BKCkTEY1w7fpQEm5wuLLhMy7wzXXN6e0UOgWUHVMp8cqvSaBgV1CdfWB5VwzLXh6OYggPLM%2BWaY%2BQs0gEE3OhBNX0LBVe5S%2FTq4qLo%2B%2FZZRpCx1zjF12IDz2aK7IpIRC3jXBaBSEr2rlvvfHziUaCI5FflUVXHFP0iOaJdZX4D0nXdMX9TZJ2m0%2Fjk2Clhhy0SgTObOymSKEE1SsV%2BcWddfjOEH%2Bdve8leW4s%2FEw6vy1a%2FidnHd%2FLD5KEFrP7xR3n213jQ7vk5Dw58PaoVeoYOdSVXhMhWPf%2FkdjuHs5CaJUvjE33A4vbUNgrKLYiVCxSUkxn9lHzDz3PSqZ5GoR9hSvg5pSNpUX4%2BZrKtrsiLmfsg7flrrcYZHgDzy6h%2Bn6y%2BFOcEunNxCjgedaWLsJJHhApjz80Att5YardVu1yD%2F4iVeBx3T5Im%2Bx4TtXJILZg1YTd%2F6gFSp0drW%2Be7B9SwhWpXbyF%2BY168NRCeTC9tNZiNtS2fIs8elBf9vyF2dlKKysmjOojxy8Gyz4r1x1N1PbMJnv1b4GOqUBVLz57PwpXBXqlLOIR7QeP9D0GehvYMZk24F%2FhADKRapPmoWLt0NRgzu5nbp%2Beh5KAnXXDxwf15S8PdiOOzEsX579xgP4kSCtUrzNmGPuHbgI81dNZ4Tt1qe3NTzeDO15bWxQCifRxRXNvE4ebCWlsOss79TH4RtvKEIthKW8xx0lZSltqQcEWhMyk5IyKaf8cL%2BkMbpqc4rTEUZEcsZ7LXRnkuOQ&X-Amz-Signature=aece4a53a289b186b185868bd7a1c4423df6236dbd988c896f051d83d6832cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LZL66ZH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T170150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAQ1Wt2%2F5zUE6aSBZgUCPhRahALRhiM3qtnPNkk6%2F4PQIgJJiGbxaYQ7FdGRTn3u4FL21hDBbKxsYbioRN8Eo%2Fs28q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAIAPHA1VscMG9nSsircA6vwccJAIxhG9dM7wY1RGTZ7XZLWCKdSg5e5gFCGvCZNgxwvL26XgTuT9XShaJ4sAK721CnxruRvNr%2FVOdLHhsOV8ugHGJMhaZzzOV%2FX24o8YHOHpXGQoUVDsK%2B2y%2BPKQT4qwgVR6T1IgdlpaoIoNhL%2Fr3xoexztutuFXYvb7RQR%2FKSN2EAokU7hjPdSJQo%2BlyH0uii6s1SBmOpkk7uozDZL3%2FBKCjxhmdBrgwBiz%2BDRVk%2BJ1wQ971dlEZnruJAcjJv9DIbYVrtV2jrKkdIjZ3LOtugNVqDjmyqnwSzVpgABOvFyCtP%2B0NL913IYD2gYDvfF0sJeFYA8KU6TcH6zLH2l7uCBXGS7vh5QI88%2F1h5RriyFcCknuPjXKxcT1LlOI8j9%2BmrBevVw%2FT1VbMICbV11okkr3dtk9DJiDbhKEnKTUDGhdu12ztS3TVgdIb0wf7M3rbQSF%2BjhHrW6MaTNSjU18MGqAiSRNDQcK1KRnVxofuqflYBCwFNy2OEGmlb7O6pX8ReWaH%2Bw5N41PAKS59ch%2Fm8Aq4c2V7c1vLFtSyqrg%2FgIVTAHu3TlCxFj8fxQv4601eiO9UfWiZeK7uFjgz77T%2B5ic4zF1FnnnSSq7B0LbfodLvFSCR0gLGpcMPLu1b4GOqUB6H5JVYp7ZXfRD3wBy1G2CPf3I1aflwLUFDeCG2iTK5Fm5J7Z65dXdcqIUswlP8xbtbnhrK4%2BuTLPUDccpvwCgk%2FPrk%2BXP%2FgHP%2F2eL3rImel3Glj%2B6OUxgE9OC0094u4heP05T9fgYQDAq4lqhmB9jcAk5sNnQ33SfE1y%2BvVlPP6Zhfs6J%2BCSJuurE4KKGAZFYEnorKXkYPl0wSjTXe96DDBVleYn&X-Amz-Signature=c77ca8519ff2555962a77edf5a47a1f8912412fac937041a320c29b05bf01413&X-Amz-SignedHeaders=host&x-id=GetObject)

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
