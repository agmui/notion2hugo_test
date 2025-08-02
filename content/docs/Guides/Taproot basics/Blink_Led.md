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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466262STE6G%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDa91llhd5nWnDKR8tPwzV5qfU6qjUmmGv5dDe%2F03%2BkBwIhAOkjiO1gEH0VAjdpkitlocFDeZ8h24svrT0vBk8h9HhHKv8DCBYQABoMNjM3NDIzMTgzODA1Igzx3lGvfn0XzSFL1a8q3AP5obm32vdLEs9Wh4Q3Nrh5mNzhKe0VWdAcOyGRvRHnQpbgoUGLqqRcITLkgTldXYvgZ1DkNeVa9C%2Ft0zDPQ8SgcoI0A2y7exPjRfVl7X1V1LO5BaLP6HVc80712cwZ%2BTA29kNmcEOlDnwtiVe05GHln6%2BUlDlzjYy5zEETwWYVI%2Fsb8IPARnwyTKOFmkVSakL1oGL%2Fgy0TwbOoNb%2BK1QUW8yrmCuUIezRDrhEZUu9I7b6eNvcJKOaOR0agN9nplKnY7UxfmOnZLMVV4PDQTM%2BbCAZoc%2FcqZz14R0hXVvIQBqy%2BwZEU1aNjT%2BAwKSYRCWPInnGUldhcmIK9cEtMD2wXpmgfWi87N5iqaRgOJMFExcntS787jvKPZLKKyXipxrOlXHFq7W1yDdpGKcWvM2av2abHQLtJCj0LOBKamaAC7NSH8u5A1DBh4EfbSnJNkjgrRxLzK73K%2BVsT0vR3gB679%2B2mhfA4B%2B5v8DQUpjNNpRG%2Bbl%2FYHFjLIPq4chpVUhLvp8Ng0NaKqOVAhu1iR7%2B0oBt2exasKeGzOnQts52VVDhdq4fe7WCPKwgaQpJ0j3xCT6BA%2F1%2Btw8stF%2BYK7bTfoFzhXB9b2va89b91gGygdxIfGN9%2BzVOPRqVIkjCHkbjEBjqkAVZHwpqnqhpBPd7YGTuhxYSj5azSo%2BPT7lEgfBcK48LNZK8nZbrqq7AoGtNyi%2BIKuxP69dvbJ3KkYYkIzaSTMmFcxgfjIaMBC%2F2zS%2FAF5laXd3m5M91rG%2FitKlLEymPh8il5E%2F%2BGyHOvKRy1KgXd4nC0X%2BWs6iVW3lYzo04fcKfRbNMq4f0GE%2FzMU7gP35mdwkKpZGbn2SlnIc3J4bkLItVaiuVo&X-Amz-Signature=a7cdab1ca4f6d234a4747fd8d140f48ca95c47636c5b84bc554b5441cf834e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3DVK2CV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZOK5G5XHIl%2FWSDfRcSJr2FPJpZMqLgZABr93%2BTai3PAiEA73txipbfSrOHtxowBv9dU3SZpW4GO2EfGKC8VMXxyiIq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDAw%2B3B0xk7ZyRuQxqSrcA861M73VHQEHp4fsZH4Rg4AruV8cyz%2ByQndub3C2V3HCwlqe%2FNInYzwhTFjGd%2BaXB9UYG5yY3XPkhfCBfmgwUjmdzEHs%2Fo8xSiXCEHvk8GI543JjBOFMbW2%2BcUf5%2FtElZZq9U8TYGspg6qRRiWbHr2wAAFH74jp%2FGWexrnO1o6ALGW2qr7D7xv21bw%2Bpsfy%2Bjb1DAzR14JvtT9FwMqrm5tlM8KI83oMk8H89Ojn2NzTdyk2SRnKJIbGSLIYQoPh7eUEvU%2FzMFvxDcgY4IAeEV1HoPejFn4LP4yEIzC94wMLPX48Sh8ODY3HWDFxb4rh8NTnUDmVOFKEQKVCc3e%2FW7jraW7hBC4ORXHVV6ccsd5TLhFnX2FASUoRvBYJeYJvbvEXeuahndpQE%2BGShYe%2FaQG%2BB%2Fe%2Ff%2BOLn0PqKGecbmSHg10uv90F%2BBT4gG7iUZjosjkh185FC7q4STf7aF0AFRyAooRtHLBHDaZL1jyPUXukct8BsRufRfsCFvLGuVVVvB%2FnV%2FQL%2FTFPxhVpuND9pHhV0bAmLC6wAzVpm8eOl4k2zXJTlJZ122KM1KgcEWn604JKJ8YXWw7OsPMKXQT0qG6LrDqsGVwrf12tDotuf0HdeCl%2BPUN1SmR2Iq4U4MLeWuMQGOqUBOSOTMR7Q8QWyTursyq7BJPKFUUx41qKQ%2FYHUTeGVN7qmAk1rFKNh7ODxx2wYCWAgjDEMEsyaWYZ26iUeIR2%2BtbPiwRb%2BuSsH2MGOow0PDIvB0fPblrnQWrrnkTuu5tCc6NIJ4dHS085HowmGjHapLK9Ke%2Baj2JxTBDqjtinzAkHOm45CqukmTTstLJ7vlKq2LU1ycLFooXDAYuG6gpy%2B8nUBOrGn&X-Amz-Signature=370a60fc983c9489b32c9e82121d25bb20a56dcde6b8750b0219db166ff43690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
