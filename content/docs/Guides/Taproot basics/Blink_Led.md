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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AR6OPWC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCOSAW3GH2nX17jdPc0rd07OhNBtz2jDBnRya6P4NK6UwIgS2mEe8e%2F60yHrh2ECWkZp1G9ARmIP%2BEZ1bgjE%2Fc0jVQqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcuxZxpI4lQJ3grBCrcA9oH7a8AsNooesBnZ1FHfSCk1RgnMd904fr1RVnEoRO7NN%2Fo2IfmcVRVwFDalbhUF53JdOiGExQjIo4gqSiC6%2FuImRbbp%2FfM0SuVILI0%2B0eHWvuvScPtnMCqngIhWeuV5K0QuECRy6eQhJ76gYQDB2hfV5DJct3awUDl2f10rek65NL2YSKAOusL4CweXaRZogITXSpT%2Fy1ovzTHqDilalxARBB1bfS4oCPMI4YE4c1B9pPwtlNXTojaMeVZ4zMsaoVwFr7fzaSyyCpVnSHEPVZ0vvNPllwVisyV6maSPSf%2Fx0mpHkqNhTJ6lLrQnpLT4fX6wsOb%2FiryIFGGoVDTYP7FZ0Z4GGHaKRDobN06bOSujZCO2qZK9mTk2osFwkm4EDHKGvf%2FOSGr8YuEaqIusIsltFZ2VjKUujAXflX3oogFxeBFVYvbnhIWVRZq37vu2UlSo45YUi3RIg0HGyxIGuaq9hUOXVe5m5%2BWwupJaHYB%2B4iuSzgnADcc30vfz5ApjOBgXtBYL76AanZH%2BlRftgaw%2FvFQcf6%2BX%2FRKdgnzofym9ytcZbdOjPFW6xn0DGmGAdAIkIADhjvi%2BluD2uSA3KeYhRcARkz7mlbQqSosDa1z8rENCzjlfdXp9FIjMISQnsAGOqUB%2FekbKlVtORqONBlb0bk84edVFqUTEXHke8iyIkgJPrSW2kRVsLC3BNzaGr%2FqGFO7wRXOifNASPTv9GJV3KRS4R0Har1AJrjhZJrcZnj5g2gdwYUkIUj6vaqcmQCC8SD%2BLD8iUA6KaFHFENA20fssF3xDzhtoCI2vogPOJXZcqn4RpJA7O1LjLHy0S08CTgHcnQgQTICg3VEVO7zg775196StDnpP&X-Amz-Signature=0798fb88fd82995260d3c84af1fb77c485ae3b082ddb40899a19821a7be0b706&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3H4IYPV%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T121447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIESgjb8%2FogScEFBfxNaa5G6z9355Amv9TOYGyttRUHXeAiB751pQ6AsRqDOSY8csFnIufzvxApViFkxvycqfyoXTrCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYjud2ZRsumdhHkwFKtwDuS0uCDGQkfYQj7kkWpPvE4L3YtL%2FO6bJ0ELFsDIt%2BhqL67lCVyUpploWDSCARQ3sqyHfx3pb7Vk5Hfpu8SMogOU%2BiMIHcjZm%2FFHGLfoA%2FvtZOya1MHhxswDCdF1llo96X4XKoOp1QKgjsy9jBxR8MpnUEB97i4ch5q75e0uBbkvhi08%2Bj8TRaGh0buhxU6qJ4sD3GaiocKP7IxtXWY9WuuAo8HGPzzNBkgJr9ySyZfaMLvUrL%2FK2HpOVhta5t%2FAtkd0NIIrvA7hs6ik%2FA7%2Fy%2B65zPpcGWZuyIxpiBf%2BVcuRy9zWJs3q9%2Bffk%2BcPjU%2Bw5b%2BAPhmBcM%2FU9oxLThx7LuQoGPuB7pA4lA13urWP92bWc1JdFQooqyNNVNOWb0ZthtwB%2B42nnjbj1HEExpBG74ARmdk1o74h6EzTaDIs%2F3PWCjAVhk2oNCQZqQPNb71iR8Cf8WDh1s7vWUTXdDhNEcJA163xdNcx3vrjmQQHFFNzCmXvE6plxGWUr9Zb2%2BIw3AgZeTWcdvmP3nxger0fPLHj6yMX%2BPAUTKuFBgrw9Hzlv%2B%2BGh%2FjiJBD4JaFPhwfvsxRxmQLID%2FvNJ38qh9MsrxTo1L1kXa7VYykelq5HI92BM%2Bth6mkyo5jp8LmIw7I%2BewAY6pgGIxcUxJf2LlrYigM0jkWf%2BRnB%2Fg6CJcF5%2FUuBiIJNlrPczpugIxunwdmFJunPf1ssFqOPMn6Qznz0CC11XpnI8hd%2FFLMJ6706bQAxO4eE4rDfTvIn1f7xAg%2FNiGC6ckNAZdetAsvHERB0f8x%2B66PkOEADF77uraOQwqCfPrB6UVKJOaJlLHj2Ynd4Dk6J2c3yM4Q16q2in7iqsRteS%2FNxuozON07Ay&X-Amz-Signature=ed42c5fe6c39d7e9cae8134672bfb2ff3dfbf1d52f95809be65adde900dc627e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
