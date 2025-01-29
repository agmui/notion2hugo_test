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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QSJRYYR%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDGDu00QFrd2aFIuH%2FL2Owu2bfowu%2F%2F2v8zgI9M25qkIgIhAL8S2SXWbN3OiD94JUqskmkafaG9QHU%2Bvhy0lUHypF0iKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNpwgK%2FaCtO2XzMqEq3AMzBdQnLU%2FZmf31PzaYzYrfaDHMJwt1EzS4LlSnMMRp0p6zr5Z0i41UF8yXKgsqmmlpcpLoUPGiEKBNuMedxdHVAZWHhuOl%2F0g%2Bskx9mfShjB%2FrEGzuuCkKKLRrv6nE1jizsZtxFoZrga7fjSvyeI3LDbsKrFn%2BcIcQaLSJ1Y80fKjKIIRZ2qlilEWn4sy%2BeFmOsVvy2fmipHMXawV5YgWvNN6ohYIJIApLTw4SI9eHumVR71VpLf8ShA6ISTi8yTjlzn4R1HVYnOrMXvY5KxJzmHPFAyZtmR8Re1usUNBUpKUIhx%2BgBb4Gjar9gxXVgSLVdVnHgd4%2BQw2fkS7I0pFvaQ%2Bm757GQAUSKdIEYIGF7OEDO%2BopSepIOOA%2FitOqySQLSOUxVasdGGHOg2bvnUPXShEbPTSa1X4zHQ85ZPEY2hd4GXGh56nqtiXCyL7iVe3J313IU7PahN6epTswsEDsyMQ67PoPLLYFUIGdfqRXWqltiSOoF5OZg4rZH8ONjymaXAbJnnuU5g19uwofg42KHodLlSpcE18J%2BB5K3JOHP%2FWJ3mAd2zyzkIS%2BJ0B9BN6ih4OE01H2fNDJ9DKTRAXWvR5sEMLccm%2Fz2FZzKoSjKyHjG1m4tOXHKdE87jDzhea8BjqkAfLFREEtEXUOLZldgifafcOy0yGVGJkRhwqE%2BwleZt56AVReCzqLGSKK9gwjNLQ%2BaQ6H07aowKIRrcjXccXlODPX7JrAVd0GsnEgmmQvwz8YWSiy9tD1FzI9n5kgDwt5SNY9XpiStbF3kNAzzAY1HNnUyd07l7jbHp5oQDVKasOoa9zO%2FEPbRm5JUBGiSWPGFGHeG7ZwONwTDFE12G5JkYIlrDCe&X-Amz-Signature=08f0db31beec301c4e1576975a3720518771f3a95f5b0f6717ee7672de7cd37e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653AP3X3P%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T020546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIBQBZ%2FuCN8acBrMIbSCpvgu4cq8%2BjrwmbXNr34lJACS3AiA0PjjtUXMe8%2B4zM6Nw9%2FVhccKao9Jhemqw3AZZVwyVFiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGK%2F%2BhnFx0L83qtB5KtwDO6xmfgbJMy9wp0TAyHJv%2F46cHaISWcgr1fyCsWIDq%2FO%2BvWmyZAbKjPSbW%2FlmWfjSDD%2BKc9d1u%2B5pli0abwoAtriOdH6RbhBIJ7DBuPt2Lsn8CJSNDgfwZfJXjUbaXpcyP2PoudQ8gjd2FaqlhLcSisnLa6yBvJK57ST5lC%2BcwFJGS%2F88%2F5f4r6eQP5nJB%2B96PgEvGGZ9MWWhuw1Ce5oTrByze9yZowhqeuVKlVsxglKYNLFUhVS9biVRGqgE6HZM2SoigtYl3JiLiJTXaj3yQSrORpS2f7mHrAmabL2T6uiLIn6DkE5VWL8dqn2JXe9bngQzUHCRkuRvM65lgSdWxUunTpLXTm4LY%2BiD1X3k3jGIbC1QgiTgxlSI%2FEPvEvxcaZtYobrLQW9klF%2Bk5qNPoV04NRVxfXQ1tZ5L1GS3%2F1vKfKk6A1V9%2F29IaYFL4AY3JJjBBIG4wGqkQbiK7hCMlwb9aNkrH6FC%2B37SoxusP7g1I0%2FUHrT8iV0NUKxC3g52fHS9kG7NfmaotOF25iRK0VH0RF5fnlIE2kcwHsp8KIa6ZuFltm0sohFmFk9y80cnOvapPtaIe%2FttpuiIpa6WAzq9CDjAfMmRlY9B1tzrmKSEsARkcmmJGd2hGOMw9IXmvAY6pgG9eFJMYkrK%2BNnQ00dpylDXQTqzkYc4eFEPaWVwVYiG60qWj546NWeXcRtm3VUfZfr668pRirVFzVqbT7UxBRazOwhsQoy%2BNZVmZpv2cCIe6pJ2bfpv7NA8ez2ngZcTVhpTfbGJvoi4WQH0R5mEW396m1u3DEaV%2FqJ0UfP7ezX4yr9tat0xTp6G8L7IJ8YRve2lquI8sqaFQFtsUVfJhWZzhEme6lwT&X-Amz-Signature=cddbc344adbbc7247213f933667d3c63b806574471d990ce11e7fcaddc4108b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
