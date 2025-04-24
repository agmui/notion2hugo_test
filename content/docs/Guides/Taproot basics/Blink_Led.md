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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF2HLRMK%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHE48UFpnxje9P6iLTQQWhh4h44IcWhyZsGkgQowILsjAiEA0tMMyqICxTPo0eg62N3ZzNuVkaBK%2FyCPEsFoYN9eoXIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPg1bvUhaejhXDpr%2BCrcA4EdvAA08pItarc8rVx2JKROVeMTZRUU%2FjauhIP5fCgstv7eLXX7XEUW1147ln0L4XoEhy6LWOLglaGzhIu%2BtPMhuJMZRYiMh1HMLzhZ%2BZOrCBmvX7Wdt8qrm8wensrVwU7YC5e%2B6UWwht22H0cCvhKV4lFvIHPHkZE4bGGIsnLAYNhvCj50SwP91pr%2FHnRHA%2FWU4tqjiz61iMQrd8KT7VySU8cdseEs2izj%2FKk3VeFcmUAO3nYuvUj71psOBoHULXYcFFTOfvlA7je0fvWC7V9oSEI66RTYk24UKZszJ8GNlt79N4%2Fq1EJ0LaQ2IHdkp490t%2BvuZbuwd5t2v2jdsBv6%2BzGAglYItPCBT2JcH7VRUMIoyQvvUKXGhJBPdyZhrONxSrlwHH6L5RIhV0ozNBxl0HC3X6grXrp%2Fh64bjdQ1alYSQ5KgymEmHIWnWv9%2FULXo116tKIZnMLpmrjKASfU%2FXb9Qhfp29fn8RRHTQumxDq4pE8YfB%2BKwQeBjTcVOgLLJCYXyXR5Lh6ye6%2F7XvnVvOK2NZsAEdPaxNys%2FZdKhoBuBZ2OqTITEE%2FcHNLqTmyZtSJT%2Blh4himlIL%2BejzBXnR3VL%2Bq5BwIcSWoHueC3gTNfKIVxKFZPmGjmcMKa0p8AGOqUBBFjTCKY47c16tz0nqKNN9SsgiUAe1OozIOCU72aEm3uzL7egOIWelEJ%2Fs4UzW0fpzDgtiY%2FnPxCfZPmug71Y2T5CamZxHNvV85Cht%2F22rW0btt9AD8Vykz%2BI8l1QOiLbTnvMEIgc5IH9dtXUiCEwy%2BB77zQP5hWbx3ALzROrVCLoCblk7ccKkfSc%2F1jQazIFZ8J8LChTmDpVfln6Yu78dSvm93dr&X-Amz-Signature=029f7e7edd0c1cb9b7c86d8b3555c9885126aa8fe7acd0f5d1f0e3e9c6a270c1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FMCS4SM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCXX8CVrrY9uA%2Fk9P5cm2i3i1ih17HDGtmDoTQAFcurywIgYC0d1a1K6SJpyZOxUdZxGyJm0Y%2FpupzfbKOB0srWdAUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHIxLosSuYpWdUktsircAzZ0%2FM8iVowuq5uIxhm%2BWrk6I1zD4m%2F6E0W6jZRnYtkUE5atvFKCAQKszyYFl%2BNvVnO5GnhNJ%2FLF80p51XpvbGw67xE93FT%2FhzB5XYRYnUcG0UpzsEK5%2FdCGrteCoQncWKP9nb82un3bXM%2FjbleEMjDilV8sXcVFnUnnn58M5kkFbGhl%2Fy1yYLW9SD4t2qLCk%2FWY1Ef72NJP67pNqDyenHaep3ffSoOssq3S0YgmOxRmNjrALL9vfej8pc0AlJl0RqaQULrUZ4Vqgofyge8LD9IX3LweApL66XFcOU3JXTVUapsthj0no4HJMpplsHwPeQ0Y3skyzwbTwr8ut7S9GHEM8VebAxjCXvn964CuVWyhUtxoQDhjz5AmM%2BnmA4mIfeN9CMldyE8shex8d5XBROv2um%2BylaKGaVdj4mKzXsqsXFzHOO8x7fa2sceaZ6HnvC536LnqQd164bgoJvsqukUClXi1UbJK6BJf7HRtXbThuvmtySnGb52QjXkz0XdtxdKotvWcxbgR5QNmN52BcQO%2BCobyhbF5cQ%2BVAg3Bly7TOmC51OPKNNSwECLtLdbngTwPqJqsckTwcR8Qa8tPlJS4%2BUL%2BkI3vn5p5HyHqJ1mwfEYoakAB28EkvS3tMIG0p8AGOqUBDb8QEqfvZdfFK8izFSGk3cfR0fcp2bSFWhV0O239cfGgQOQqAAQE5wOq4soqzHwA2kVjByZNdyr0Z%2BO8QiREmiokmVeTCvPaF5lCfGWDSUKW6umlQYWQFMoLpy4NnLfIctIAk5Xt7HGNxOi0eI58IfWvn42wncAhBVdUp9SOcsxnj14aPh%2B1GsJdpcRtuTNcrFcIeCPN62T24vRJAP27xsHq0qEC&X-Amz-Signature=e1204f1088863568a6db70d66693a380666a21a086e74f1749b3757471f2afbf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
