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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHSVP3ZK%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9zOVPGC4v5Zp8Ac3ehXwyCvKtuD9vnwqFYYDepzyypAiEAv275WA5mYzyVRb0grK9Pio9iDQxhnNGC6x3Fo%2FGbRFEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBC%2F%2FERRYKFy5Gf8KSrcA%2BgG3AynymnSMeR8cEmXaVSAmz25gG0oQ4G%2FHGvkbJSivhqcD1rW%2Bh8XyhrCQQiJulMbCxwY94kRQThbqF51MSBGqaTtXlgsZzVYkKSMYzo32ObBR%2F4W6sC3GPfvMEGr2zs6bcKuB%2Bt9LfqjTaj3pxOCQzBwS3EXQ%2FTlBsyYYGN4pxAI%2FqiIDHwi6dYWz55J6tDOFo7PbS2dGt%2BaNX5rPNJ259Y4rGFNHLB9Yq2PsjRu0%2FZGJliO22dzxyfVyWy4L3jdtHuMkch8KoBIG%2FSn1joCFTmnTAmov7fVePBIubtpjpH4noyKLmeWygRSfdUfYVdH10BAJ5yzb2ySwFu7gc5U%2BLKi1D6QwCB%2F96qTZmuznchHistYCbl8ZT7vkystu8R34PnI%2B7VtxQ%2FcFkMO%2FdTS06pJMQfi8gvPAr921zSadgfRH%2F%2Fxi0MTm2fSs%2FyjTyecHRx0yidqotc%2BxlxzAjbfh1ViMPRkXC670VYDFlIInUZcDUBT6Fo5U5mVeLGZUww4BCJyzbrTM4cQBobbGg5Yhj5skKkVtCw1Ik7GQulaaGILTNvaArfH4OB3GQJy9qJ7141vFqPNplOTrlV32SNYFl%2FNmCU4wcr6GMYBgDKrGe7iCeYMYUqFEIYIMJy348UGOqUBRnySmZj1ERMRzKwVFs4JWYddfGgthRb3rIOBJ9mGdlx1gllLpXMwLaMMG%2Bk0MduTnw5SPm3Bu7n6AZq6DvgDr1igLoDxBD1TfkjiNJwIpGs9m8%2F8BC7CFHhB14UwkOeN5UN1feootxXLKEU0KK%2BK4p7%2BJVIRCEDR%2FUjnLPT53m%2FFOX65dvPgeImCsYNGrMz%2B0zMOut4jF4txkPvyjY7UQmDxC3ks&X-Amz-Signature=4d78af07c52f6abc5a65678e1589fb34480674bbd513fb5bd7e38abdfdd78664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVLMBJZY%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpYrMUGlHPaIMcTTlCfPlo5U2R%2BhVjPgo30PdaZr1LjAiEAuC%2Fp1gTTFCrmY14%2FXerJJcPVvrIHz030q6PHMwj3uMYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG%2F1%2FshJ%2Fuyrge07FCrcA2wM8reVa5agrxlBucnby7JAyjubTSG1gswdqL6NxGMUtM7CH1tLJTgv3dYfbHClh3iO53It2A78BgCnl7rARB7bwokXLYm2VzI1T0ebUrumyKO06sKfeWxtH%2F9MDuGIPsN3ngAtkGYsDgBUs4QLk6Y6IDqMKCtOiOQzuEoDCIxIpjbb%2BxnYo64p67e9gOUFO00BnMDQQ4JOrJfkCnHYBF1jpIrvAh8%2Fl6vgy05%2FZqBCLys64WxUwzSJdd1m1fu%2BWPru3KwepaBGWmVbyzAhWKqE50qM4y%2FnanbJ7VjiJ8p8%2BWWMWZfzXUigUJbOx%2F22J6IYA1wJbD85AREoR2yKmd86rkxwtc0BFAgarAbr3tNRT0p74llVx2Q%2B60crKa55iqWTlFTibCN%2BS7xSWCUNgGNWU52RlbrdoKHrPFZCbWyT5rKiw%2FfNeXrw34q9ZiKeIokXWnHW80oXDm6grFAJ1YQo3cVug207%2FOSzdHSbvGQg2Mp1ySodltuzYbXZqoOFn4giovYObaCo7tVmZA7jaOjTd2xmUd7xR8y7I0B%2FHQn2ve1QZFb3QbUb53vdaUwlLMpu%2F%2FCwLMM%2FBjmcmX0Ypduch6vSgNHuCD4gp2i7XH6JuZNXa1FUE1ApBIJTMIe348UGOqUBxWjrRp1LF%2BNwBfMddTWsD0e5Q5Y%2BQ9dJ9uzXuwiBp3ADXM4OrA2RFtu6Exflr3CtwmiGttZfUwsALZ7CHNFCnpK57asFcO3z4lt47Tpym%2F%2FYWlyCkXl6ZaPZo8JfTCFn9dTMMBbPM2mW4NYENGsEZ2UUxiRMSf%2FS9x0EAMq6umQFOwpDjU01d4gKvvko%2Bvr9xYJItJxGXwdFBEfzfq3pIzcO5Trn&X-Amz-Signature=f7df7b7e991a7b8d3466cc6d4aae80d01ba2523ab38fc44a78572830b5e20613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
