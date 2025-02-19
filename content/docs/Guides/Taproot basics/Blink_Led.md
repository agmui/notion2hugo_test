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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWOP6AI4%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQC2RfIl0fSO5%2Bniw7EV12zxlPqY5M9m66U0CkKtmxOc7wIgOKuBenm1J3UlGHQpbCed%2BDPx%2Bcp0OPkS2OidWzZskzkqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEV%2B%2BhEdmaYG1Z4h1ircA3y4JlZJLRI3IJ0X2hhlxwYFNpNZLox0gqMc1cyBn%2FEcrvbgUptibg21HVsbBJapRT81Ctqb%2F%2BXxn72Ph%2BEdger6GaNMAZDwBpjo3YNaiDpO9%2FllCTbowNC9qQorRLexu4O6ga2iE3ePI5cMdgrTlk%2Bbm6O9t64DayRW9ViBrXQaAlO0nGJrPhITFOimTL6fAV6nfOx0bnKI0TzaH7eMaPYLHMvQUk4Day6%2BRAjHzKMyVGk%2FLm98MonPRoQ7NKHLAV0JyZUaW6jn%2BmtLoj2cbGAM9S3lbVl66tpBlcQZLbU89bRZ%2FOFipi2ijvZGjuW99Y5LpaJQTJRnHoFyWARsKP9sytsZS%2FYHlXGazGjDlQADAgjZdOMhkFOBh1XTHD0k435VV3T8huMuZBMizEOg%2Bvfc2zuPijiw3xwDMp4C%2FZLlhIb9epDA93W0ugK%2BkTKpWSBUBk%2Bny74rn3sTSiymUFRFk2dMCG1l4ZMszxJ%2B%2FPh6g3u2dmgG0rx60Jxh%2FVp4BxWD13phUXvUkffEfd5UbfK%2F%2Bx1%2FSloP4rRC70ec6RXa%2FkxyRQR3ddDSBcVhwHjOeIZS0CVgQILvjHrgP9JbWwtxONwlqREMVRj%2FHoXC3QQewgb1jFKYiCQlTOZNMMnM1L0GOqUBQgfxHdvOOlFwSbDMXkC52ML79nl5YKrUBtiFv%2By%2FaHUwT4aZMZg18FsMJYH7i9Hz%2B2i%2BLnCKkm0p1TMIntrhKKkwIRixf2LkobmjBZC3Idli5vwvcFfcmQFCdAlKmskCIV47guaZqCdbfIqwmJA9%2BWIYIFa8Uq%2FQLjO8hkc2cUUpC0SBFaloh0jjgQxWjyjJRU4XdnJtsG%2FR%2FB1zAFvbeK4ebiHj&X-Amz-Signature=394a9ad06b0027c2a4d4a9010297abdf15b2f3bb85f882c950b148ae3d6b9275&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQOFIXR3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T003609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAQqUYuVGjf6rRVlffd1oGIJbRIncFc%2BbPyE4nh3zkVnAiEAuCKHQBLzloAjXn5yuINSGXPpUbg7iiGzpD%2BlxO3Z5AwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPI%2FB9A0QF7x37IpircA%2FokQGf1Rmo%2Bel9gOqtR7%2FUF%2FhSR33fshmLARWBV%2FNWT%2Be8w39Q2BS9Dji89lJ0tizXnbw3p0x4kWDp3GaS0QJByli4M0hrAAwCAkuK1jDco%2F1lBXy8hKSiJnzfV4%2Fq89TF4axrKKJ5RDhEl0uzNRbyaV9za0N9YztfLGmrl8bM8Fk6Qo5kOpMR6Xs1WMK0Ms0TYZ5qdfJN75lqst8%2BDcnKu33MBgocPy0MCserED8WCC0vH4LvoKynXShZgLJ22CY2iw3JP113gmjRUjRXlcqe4avkELdgu%2BqjhTEl%2FIxs57cujHqJIlZeC1ilrA1ae%2FFa6DhuhbDWN%2BBC3%2F2vdpb043ufjAx6LmTAJr4AbM3eku52Tf8w3C85WxcQEHO%2F4w577X9SryC87siNtFrXBh6ZRQKK22b0X5i6i2iuzT2tZung5jw9nfo1i2X2re2qmWax0SCP%2BO1DTGwmZuQsMdywWdVpAfDCNFR7SOy6upK7h0dSeyFPtoYYDxqrJSsu8KoWt2ck%2FnD6sX7Zt1NKk1uVfuawvT%2BQ0m14stope%2Bef5uNs%2FoHsYoeYnsfrcUXrbBsVc%2BM5yp%2F6%2B9HzdKYYFrcC1DQ9MuYAUL2qIniB1PnEEC7wHKzfRRrutygrbMIfN1L0GOqUBM%2Fp8de0iOfEt28PFI3wtFdkzgr2AKuDjqPRd3Wb2rYgooZfkMBbGvq3Pa5Iyp1DLu7fBLm6jpna%2BpCZSqzRqyGZDnPJWshQBjbrQK1EjZuO32nWT4KJE14D2PHHXYrQbj2o9c0rwydjdxuPGpZ4xXhgXzmFQ48OPL7jAfP%2B1xwIz1bnQJPF0LHQG96B261fxjwsF1bCDrTPw8oIBs53a%2Bock03At&X-Amz-Signature=a702f9b745c1aaf89e24ab411aabe283a835c065fff61e0f79cb147e9703620f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
