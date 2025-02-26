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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WMDIL3W%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDvHKomfa2ksofBk7%2BjLnwqam7H7jrbYqVdHL3vO%2BgaUgIgSJXMpO6rKHKuiTTlKlZqMreGwLM9GY3cNebVwHQjLacq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIpEGwE56PBVFIh7uircAz1QmZ1K9niYcOtscA5rtqt2R5Mr7bdkiWZpG4RwGd2FNA0ho%2FEjqQ%2F%2FDuAyHOcLOIDKpa4%2BRtlljagkNXpCijkxI%2Bi1AjEX%2FCWCCQw4MrhpdYxO7Whjmp5fzy0qv4NR6b%2FyNPfm6SQ0BAiviId5TfePjn4whweWC042c4NNr3jqKkahMV6n%2Fd2hp63W5jWjc9PYv26eYVQmmcYoi09R61NTZva%2Bj%2B3CXzWZvCqSVUPjN2vnv6seq0tB7x9FA8MHYtIBLJC7oZ578pApOVfXMFOXFXzKjpMFdqjzBGi46fV%2B8sdc5BBORfAUDK0%2FaNjmvAk4Aex49ShIN3hZ5ovbKYuN7W7cr7Kfo4KKgOVldBw7q30UIgd6126%2FuzXxRGKJZnSLraH1m%2FpK9%2B7wosFQqnatHjnyp481tXpSoPbuu%2F%2B%2BpUgHc05mmv7TNlaYTqxLcF8TghEPc2dxKbi8U2v8Mx%2FcqFAMwKX%2BkLPFT6Oaag4DJckY%2FMwRm44%2B9zKVDe6Oa0Q3W2DPDjof52desSfkxQ7SCkxYGTA15IlAV3NsdZ%2BM2y2TrAWTCycljIx0zo3f0RdJllMBL0Dsi8%2F87dWg5H%2BI82FeytUMt9SPI8slmGRWSOF6MmL4WOIfvsOUMMS7%2Fr0GOqUBTZCnqvEcnB9QoGqqEIofF2LYzmAV4qKYW6V7yz9CCzQc%2BgaV6B2yRpSatzpmx5fPJ1e9X%2B4qZltd0M6zuB%2FxtLrbziaDqyGGp4pgTPQ0eAAWQ1GNSeAr9xKawsAqXoPsBBx3L6okfsxLx0mglLC44T%2F497SLaCXikSsnVzRqkaZVlrLA%2FGsAf5lFAwUUYNJdCfL6iikqSWsyMpw6mWPDbxmcTXtp&X-Amz-Signature=c44192c52f81e4054ce6cabfc8771786baf3d730092ee45494f6a6f7a0f39a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLK5WYP4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEP4eKOB04j%2Bsbwv5J7iM5BxuBx0iQWo0C61uXn87lX3AiEAm%2BblgeQu3AhlBQ%2BShmt71HivU%2BZZgsxRswTy%2BKbYcQAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPXu2WFUdXoa3kCR2CrcAweQ2llspoiQQMZG3kvwGdYFyjgvHi7pg2RdFBJD8Bpq3n%2FmTICZ13mFzE2nyVOQHD5iCgSLUD2%2FqruZ0B9YkaXxlIgru5Jqd9YgWTSuzC1eEBKrRfGMOEuRTHS4kH8ZR9gGM4lxDF%2FM0JjCFZrpyDJ1hDXNtY3uejwfj6pPLsMRiDvEYjrhqJzu9AYcsNK%2BYNzndet67jfaWT8ulILA6Sfki7f34oUChJ7j2bOPYyARGhLXzPKQ8qK%2F3oU7HlqxC7MdBbP8jNNJ5UVzbYUiBGJ%2BjAIBjD9RaM8FRsZhLdIIBHtNmdjsWUmM6olU3qB36cj7uJH5U4r%2FKRWAyAbldAFymAzTTIEHsKu2zJNyHLtyz8Nq8ERAm475JDv3yZ%2FjTtX39DUWJKXc7ztnl3Kja3%2BlNLQX%2B5ql2pBccEof2FNzwaQnzEYVcyWABZxpQzjy4Ixd8hBl%2F1c2gTNavb2CzIvPJkiVayfXmt%2BQV0bwXXRLmMxYwVR%2BOZY2dMnSiIW2ofvZGJpuUIW%2BxVSmgvOygFNgmk5Ij2jqzLuvPLHC5D7GPve6Xl2FN64bdhvUL9LSjGL%2Fem3C05qoRVHiSUm8pN6Y2NDXTYCVikIlEWDd14kfmg19PgIbv2m1eObcMJq7%2Fr0GOqUByTAocJDV1sIxccqdecFeS8IEeOkQzsAWJNLD2RU0JIJJ7JUHzFCiPUaP0UXe8TVViizRZZiO4XEDAlL6lOeVXvLD5gJ%2BHqWXIdTuQbV0tPhBiJCLM2ihx4XkvTxd1pclZfOMLVP3NFVBmI4q2Alv62EasL5YZZXJ5%2BHOi5IRf7HiV0pb%2BWHBxra3jpGOwNSVt42xKiMv3%2F%2BEV2drERrnqnnolXss&X-Amz-Signature=98dc2bf51201df2d7ebaeae60f15530da5be14ffc885b37d9e318e00fecfadbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
