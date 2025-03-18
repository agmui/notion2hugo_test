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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VOIARYC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwogyu9W5Bye8XsrFPkzoyJoSuX6EsGByYE%2BHL3TDS3QIgQQXkYgMlasriQOoUNiIKNeB95EMlf2l0x9UpgEs1NXIq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIcY2%2BNuo848pnEGvyrcA9crHQKgdHtYhzj7Wx1VaTGtZ0K04bCNRMTrWqw5%2FkHSG57TCnFbBYPEl9HITZigPmiHOStp3OozoQL5LyhxgNhmCUzDSiccctGl6wKDfepEBLXFg4CeA3qEAIlVbH9IdXFEXBQ9C73g9B%2FznGXRdwPnprOi82xik2p4ZEwa%2BRmNTocM%2FK9MbFUPp2eD5NU53C7hsDiHlDisvWQzPHeOv0NKxn738zMV36R3rEtRECaV6F33f6edjuV7hbL7YLtG7p%2B6dzXWa1icOEXA%2F%2Bs1GI0FWrK65iYmfUeeni1Warnv5yuTWGTmS3nees3FG5ykcQ1vQQgPB0iPLjLDZHkDF1AAEjUV1se%2BXRrFtPMtEN%2BJoqNJT9GiVft2TgLT2GHJW0UapSGvH%2BUpjL61sNRWThAzCSlrw3P9GfFnSiN1gXuEVhzshpv7TUodKpnKEdSvgRgYmBVitdp6izYlT5EXr49XBcC%2FaNm2hltDicOwHSWNeDKByqmVOKUixkG1SICMinS4rrz2eDhQJqP8XtZfLM720Nx352II0rw5ZP5rY3X%2FSrfxaoRdsL6DLxYwfkRQPIZYRa0F0VCpWQJO5bU9Qdb%2FrI9bQxmCtChPXgopg0TtTNT6IQ3R%2Bd%2BxvVXVMImI5L4GOqUBkPHuAb2gBinAgd4gmgs8Ri28p9aje9TnAOt%2BbP8mPIVHg2nRISsq0odOmhCoheVezQ2GYcPjmc27%2FcbH35og2W1Whm%2Fi7Ma%2FVr1v%2FmbsxV5Zbrd7pDeUfVNdSXNu4%2FDlUo4Nek1%2FI2w5lnzlo358n1%2BKLZsM8ZmgHpA33UBUXHhDnkQX36a1hWekRxPL6n39kbQWCL%2Fy2UkDDmPO7UFy3UwpEQkt&X-Amz-Signature=551e37cbeff87c516f245bacc0f11233cff9763b3d8243541645ecccd7936a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITROVCB%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T061130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6r6u03T7Lc4d65EXqQxOsG0TSI9kwh1lCpTgyCJAxNgIgeYlV04hvRPgZeeT6OQgWfTAbX9vdNE6Y7EDACKVifCoq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLSMIuuZoRRXVUQv5ircA%2BWKDGwKHmgkm%2Fa2TDD%2BaEMQUnHsg01Ev1uF1kLEOTwZKKMGaXdk2Q5IgkgO7LqBUgwQ74ryGY86pyzXDKp%2F38mywGR1SX3A0e6Q%2BfVTZweAVwkrTePbst70jA%2F1zx2TmIRZ%2Fm2XQsDW4OSZlR1ahHcL1bkQeNtMgZ%2FUYsr%2B9Tqg0GRh2kL0A0ZM2f9IHn%2FKWWT7Iv9mQ7C2YUMN8sext6ViPe6sRIQ4xy2aDvg%2BbCd2bSo%2BruEF2vjQ%2FeKdm8DuplNAiMbomTo8UwlcA4RrbM5afJcdGjCicdGGWwtWa0LacreSZB6H5Gx2gTzfDOSy5yqXD3OmmpPXHSMPFnYmcHKO4ygTeZn0dfr9E%2FMEBJCsZkgQFGDa9r3c0cfQkT3ocT%2Fj3wbT6ZTSMuQX7Nld2xwDmmIdt0LtY%2FYCIgnWSZ138HBJlmmmVF6Sd%2FvcwmaTJx9lQyYT4Ea77tgrGSyBcwJTcyqnCBwwhW4WLkAmqCFfIlnD6ERY2Es3ovn1kK6e0OWApZqrqSVAU6g4RjBwqFIzPytsAFOQ1qdDp6zSEbME6K3eG90MmXEFhb9mPoD6%2BntUinYz15S1wJkk3OT0JbsBI48TTQqq49QhL%2BUEOm4MQu1OfosJZqPHxfHWMK%2BH5L4GOqUBnI4yIIJcYJHQTxuaq%2FP68jBKi2ZX9GfxlPZZmHTkwxFX%2BAQ%2BNVDPSqC6zNP7QYuG0wKfpePmntTLVJEA3kG9bRwUyaQ3X5dsIO85VMQK%2F%2B2gTAMwWIAzKYhIGjVsNxVqxCWjlE526dRKY8jxTtiyCpDDiYrJxBQ1rer4MVodDN1QnHXPqkmWq%2BKJjS7hTTwxOAsd%2B6%2FXLSNka7ycWlKSC5QzKi37&X-Amz-Signature=30eef872469724c9672a9c27174d5bbc0fa3bbe9a5154c8cb2d6d97a5069ef85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
