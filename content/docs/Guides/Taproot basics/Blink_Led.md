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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S237OZW2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHxcAP5ANs3eftiOyJZqVvBc2PJUocFWqz93seokrquWAiA8Xc3ani2iYyVqM%2BF5Hc044W66ceQwlA1SZhtZ7pWLGyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMk%2B2EeNhRS5kdKa6AKtwDbh87HBCONX2COnzhYCs8TvAt7vgGL%2Fv%2Fcn%2F0Y3Jv2JSGc5A96NTIojdW4xy%2FnKSB3DgxcycND5Y%2F9w1NI4%2BrmJ7qnTqBI%2Bw5te8xbXwQ9ahHWAim34iqSO25vn0ASXA%2FNfR7hM7AA9xNWF0lhv3nUfmS2aefGgI0cjzrNT3%2BANP2%2BjLZ1BFB4ZeMN7LTddWEFbP9VRyZvq7wBkR0xuD3fJjOskjRrJAU%2FzSPyNAvXXj1X1jGOOuTjMWHGMGNuQAb1MFfGKy42Bu8yCmyjBLs05RnR7rEUIUtkD3vKXRzZ7dO7unfngyBM9cbT8Ug6yZ6LcsqP9Cr97LGuk2%2BeMigI5V3vzTQb49bKGrEa0SBzR4xwKbAfNqL%2BJkJ7u2vTtY09XWU0VmllTjyojSX%2FC12h9o%2BiFlWTu8ZymlR6rxhtpSW%2FuBgc%2Fys%2F49C3M7Ee24XRur%2BCOiYo0tdnECTngQYFrKI05lchaR6J2hl%2Fnunmv2U%2F%2ByLVpPLKLEYaxUF3yZu%2BuVIq4ae45NMeyLhu%2ByGjVq0kyjqcJJ9FAlxwW9ibTNTpuHWa6AO1ZARrLPeg1dZKGVTrP5%2Bwb2EKauh3i%2BtVhW%2BU8mEufrI34k8fkITkPanfRmiMI7duEagdEkw6P2twAY6pgHRCq%2BhCCwgZl8ZdNkMzsYeRYJ8iyvISRmZ4GGBZD96XuIv91PVPCWBZ6mWWL%2BvQODzu50TFCUV%2BMwvZLTWYiTTJbZjWC7K6rMkxbyahsVmA8cGC%2Bh2KM%2FtSsXzipLYaMMI1%2BcvhPKgCyGO8zt4yg20fN6aWdeGYqfgyNqD58ROsqNGmNvUnR%2BnZyj%2Fu4vQi80iaN19m3sn9HiHEQNE2cALb9opuEqo&X-Amz-Signature=af6ccc5b19800e83835867c23dde81329fe741a7dd8c120e0571fcdaac7ac7af&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VKZKKFT%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T131945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwWn2X60VnzR5urv5Sg%2BQu0hBkGXtOtV5EvPArXYTVaAiAtKfCnRheHuygcQi3kEx8eZVX8mxkyz%2FtE7gZybxqcyir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMS4p3wWsqs2vtYj76KtwDUDJvvoKofLtu8xrHtD26cDOAN73rk3qFKnGuxPEomXhDf%2Bf3rJdZ%2BjnLB%2BQPfLbCZjgs%2BvzqTjOEQ8hl9zKMtCLTQ6tDWRfETnqwr6YAuvEEJu9rNyTKJp8WNOlV5%2Bpl6Lyeg8IQw4Az2QK%2F%2B4WDXuV9WmlgP%2FhcbY9HoPnI1rH5Zt1PM6bszYxmFzoHyqKNZLIGgjceAn%2FJJWutmPtkIIFBifYNG1mLbPOz7%2FwSpl2sdCzB2aARwA%2Fw52%2F854Nj0sGrl1gZRhRRTT5Dtp9DWZDO09ig9mc5zcShRFTdUsJLpejmzlMf7yVcehPbPWa9z4rqfa1WWP7gvyG3vrMNwUBzqEY6%2FaCUBWukWble%2BBPcXCG8ZOoqHLiKSsqvgLYkT%2FFzLZ%2B4hSeUxY3Rm5KWzombAqe6V9j3k0zeA%2B5Tf5mVUMWeIAnFsQ98BeCOXp6I2BO5s6py1KAd4SjjWDHYOUg4WnU5xW1vgvri6rKOF9CmQu2ZYKUp%2BPeV5m6TorVJ05MbxHonv%2BFT%2B4DR7oI6C1kY3zyFpqdacDQRQiDOTjgGqVBDmUcEdZuh5sn3TXgom%2Buhc%2FcJHkFO8UZrdIzbZzBH5ysjX3xLXgS0FSSH1iSirlXUFIqXb4utg2gwkP6twAY6pgH0sTXMRDkwmDWWszk%2BwbGtU2upQ3q1KkHfHqCNF1oWVAkWAuSbVyETkWhTkS3ixLR8nqtnSP2Ztk7RNd4oDENxt%2BDSKR9dn%2BhQIglasmRqv8gyp9pQuZ9xODprQNeM%2B2WG3utEWxxBc26tJ%2FcYdd720hJTfJDzKqYMhcefYL3How%2BYHUemwJSEyxjWafZMHPeiezXjbgK%2FXPoV6ybWylisFHXt0g4X&X-Amz-Signature=32be710c0b2ac54460d3f7c55532861834692213d379aa4f70b8e231124fb620&X-Amz-SignedHeaders=host&x-id=GetObject)

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
