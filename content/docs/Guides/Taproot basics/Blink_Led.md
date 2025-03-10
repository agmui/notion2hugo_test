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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466335XXCCC%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBfz4jJUV%2FK9%2FybZSPhs%2BOxufDE1I2Ms1qJA%2FKu%2Fq6mcAiEArlMj6QBk46ST8f1xWQ5OBlf0brgdJ1QM9X0%2BphrSSs4qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRfRy0iSPQ5e8L2%2FircA6xTR8mNd08q%2Bl7mdVNzG9PdiJ0721T2neOZuzrj9Xz2o8Tc3nGazjA91oZfJVw96xBt2AhRDh0MBovyzoECQk1bNfSGUXtvp4JnfdJTA0xjb%2Fi%2FoUvg5udgIK8xdlJ1cSkJMxOkENygto1Dq2Cj8QSQCa2D82GgwFuN4iQgFcfDkPsRa0Sud8CafHahXeZOcyhvWklS9uoquhg1VUL2lTe07PMesaBwAyadCd804OKzjw3VNC4q%2FsPTp4BHgUDyGVGTvqFhCqepzUozaqANLtIA%2ByvyMFNtZMigiL8cb77Bv6E9Nc%2FyuvNZRyxZzAX5CFd3S6zGiNSkd6Kn7U3dhIsUz1UboWsCIHOkDhwknQTp4dalUNgcf5gUt9Df6c6Y0G%2FzDunxHsKhE0u1h71WH%2BURbt1tEHQC%2FxK4tv%2F1rmXFIuqDyEATkd%2BzxxL2HOdYyaovQ3hDFvT%2FTVuUdigvyQjbipuUOiTFFksoDSOli7wmg%2Baw2n79C0B2GIqwd4lNlnCPdy%2F1NMjjxppMz0p7U8Dp1qpghbBZvYEISaDCpHe%2BHZRm1ooEIYS7S9aZ4SU4iN3RqpIFSWHXwvMtwgrkAXCAwLbUzWTEGuuJg77719PHFS3AjEUdNfvnwnBJMOCiub4GOqUB28IuAPB5FDXq2UEgStdzgMoC9eom7CFPpBAB5JUyTbKJ37ZTn2PitNE%2BDL%2BtVG9T5jeEur7O4H1N0w1YgdwoWRVBaf4TveiCbkcxDOLiyD%2BbXwYClcJ7InQ%2Fdpy4pPXo9UIWvSCtEOtKfQAjY9BytoLzf1h%2FHvp7oGVKDQy9TFnuZv%2FA9m71UGyxes9HL9y8FLU9Q9r48Lm2bFTeFbaLR3Ht6SFM&X-Amz-Signature=5d4866ee39f1e19e72b69e3a3d692a243e57fad6fd1df59cf43ed080eac58dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNEYDMIK%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T030759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCdfK9eNncK008HpTHAcQ8vDxWr30gL%2BEJSpSydqLf8vQIhAKi%2BcSfBCvm1XzSkAWAPfnzn1okjGlFfj9Ow3QCUsH8bKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3OX47UsXd2LnLrOkq3APY%2Fe80ItdtMXPKZnpLQvFYGkARyiyC8HfPImab5%2F78pfq3GKBG%2Bd5Wu2fNJ%2FU463odXCT3z11t34kGMuAqYBCHahaQ%2BWp6plvM9gIyjDNl%2BBQ50Zdt1NY201BgCJRp6U5st9ppOkBU6fLdRH70v2t4k3aCzvPu7sv%2BFN%2FLlNff7%2ByWgUr%2BBeEZkwSYxeyEo73nIdnJRhHRLLpOKT4Oni2lJwaRQxgjPmFjgryhs2D9pqNa3FawGdH8wAsrr0C5c7qaPSGVVHAdNSdEBCS2ieKfm8KUBYmfnArPOmBZP97GkiZqpyEb1iEpuHZh2VBfySbMsQQbiNPe7XsF6RoFx%2FQhJu%2BNywlzBYuWZyAQrJy79KrdMRAhgQhhrhM2vttkvgWUqcoGp5aVT8BRrSHdUxM6vg3mqlPmRmI3eHiuS2i3wo6FqfRm8ZyvUyOaYkManaBkFZX4VY%2BsjMxI1CnNIU0wOn6uxgWVhutDfXgTMXI7s%2FddiPriBc0fxHgtR5JIXm0BqNowa6VGiek6bmHpCacLvf7t8VwXU3uz7WiJVsRLz6QFAsfSUNWfoquIYwaXjH1P4dZkS4u07YsuPVqPt72dya6CSUO3h3WQ96ZN1Fbu6HFjNBpxs6SeXtuPsTDI%2Bri%2BBjqkAeNS5CICOjLnMdDp8LWHHbmXyg29yGc7uMAHW8BnZX%2Fv9cjkGsyGIUkMUlNq8jHKURGAgvzh%2BtVOdKzPCnjM0alTFMlm3dCm5dpa5ICeuWbsbg6u678S5A8UzpEQR4fBie0VYpmEFS36ywFduJCxTACQRQbEM105AkhHYz50bsrp8AiZJaPfwlCJPQrIa0eeZxjogy1jouKqEUMiDRYyc62r%2FGuk&X-Amz-Signature=c244dd907ed493e98f4f1aa154f2d8ddae6e78e0121f28d9599f0456ac9daf13&X-Amz-SignedHeaders=host&x-id=GetObject)

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
