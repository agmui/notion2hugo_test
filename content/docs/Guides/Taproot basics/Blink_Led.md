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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UOLSEZ5%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLPNyHb6lwefYMD4laLwBeOFfnkzkZjgMVx4ylj83TLwIhAJXreOAzuAjoGHnbp1OXLGmLydeG046kQ6mntdGbJ17gKv8DCGMQABoMNjM3NDIzMTgzODA1IgwKkvia3gVZr1Ls9yIq3ANolw0RxFitJ9rIn%2FMEcfBalFx%2F5NMPa9cT%2FbrcVAqbJa22XZVpqY%2B8t4eQEsI5YMREcLnXvBhfCRcR6XYf%2FRFJe%2FQsoSU5W5jAt%2BGzzMt1t85zqcDO9Ji50dgOtjDiNetSFKBV5Ju8tJ%2BPq5jv2%2BtjIHHFxxqEmoGIiLlhVqFBOy243Kt2PY6ApbOqF%2Fncj2lE5PuljAiHRplTV48rqPAJsgutFEzcB1iuBDaHZMPbNm1DtpkRxFT6cFbxtZK20y0jAy8VTOxYEiCUrdfhy1VSp%2FH0W8EpFRGQFaJq1wN48%2BkOofHOCvZJLJ3AEbYWjPZKWtLWbhBdayK2Mo1fkWkA9HsH%2BLCYaPj6tORmWCU29yIzn4zjpDsP0RVGAl%2FS0%2Bwjn9%2B%2BjnP3y4CeOv2LWAPUnLiPMIONL%2Bi7VzJz467R%2FIoS9Sn6GFsa3U%2FPJyzexelw9dO%2B4ndt7uwzfgan6ekg33uFdPWQk%2BcmvkBOu6VuJbn%2FDQ198iHIO22JeT08N3OZnhCsUzgulB9b26NXS3iaS404lX1okF0T1EJIuBy0iVHH5eoL5eoseDYP%2FKMoMyJxYfZnjRY%2F1UYNpdmr%2BrrcKrM1uGxfLm9DNXuUfAsEGhPygH%2BpvzX2IhWkWTC%2Bo9C%2FBjqkAZVr2u3nQjPmH7%2FuUzzVMGWfG4yTISWLoqIsk7ITUEKQuoWl%2FYrrk0SaDFAiE%2Fef3mMJQz9e26kWxmQsMPiqzbBEVYGwsiLm%2FgYdcrWxZVN4iHTEpGNPQmJuB9T%2Fv%2B1vEnMbM0xrR73pUg%2FFDZ9GFsxSR2q0xvNSmXvICbpgIJBCl19qX4HJhvBnqE9FlmFmiYxW435kJrlOmS7jwIwcnWDzrkyJ&X-Amz-Signature=ed3fb43d3f2dd56d95a72f598db075eb33fa1b04748e77a2c2235a04b942340c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6KJ77RI%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxi51WL%2BhsxYh2LFRpoMjmTEEp7%2F83RwNQso8M6OMWDQIhALqOtKHL8y4gNhqHAheXfiTW8D2Ty5M6giIIEvwwELFMKv8DCGMQABoMNjM3NDIzMTgzODA1IgyuW4unwpGlcCQPlr4q3AOLxVAkWSr4e9w%2BaMi4JBY%2BDEt85GMb5dFbZYm70ZUddChCzFzIvW%2FC0krDiPaqKeMOIFivcHvKXKc%2FnIeQ7QDB7jiOZH61%2Br8HuiTWHD53fF0PTFETVXCcUJ4kPDVOF8VCmpK2P16A4Oy3G68ZYhHubjY0pSekADAzS8FlfExy6bTdoZDxT7OUm68RF2%2FpYI9oqY4cczwKUgg%2Ff6kiPTADu0jFT5iWH3pY50TPm7wzFKEAoh2NqblmIgqXOp3DLTJh%2FNQkn1j83WWxjksPqH2W5GA92mlCivG829ScaGYJxrKe1esu72KK8%2FryeS1l1ZvxrqJxfYzJeqjoiK50vvX06aW6Zkfo4E9Z%2FvzN9iOxRE5yU7BlTgSWiKyNK9uRoJq0IUO8Ktz0yPhOPmuNcgqJ34FKFVRK5RCv8Lg%2BVUvBvL1v1STxm78nuKvLLDI2jSQNI0l%2BwUpkzjxDwHouKlrXQTyceaSEQCb33A84%2B8QnNqBwamhaIJKf8l%2BpJOmNcFgU6VxT%2Ft0i2hsrNN7IEs8U3awxpBPUkavq0XjIK1AqhLVhmbNg60AFn%2BdKBZgDmntHMT%2BD2Dk4ieEHRFwqKPAMxfLElVx%2FydfOHFj6iSjaHA8kmt0bfqLyf%2BtlAjDVo9C%2FBjqkAYD6Rb32w02i8gwouNInryiC35FJgZlTFpwwFlKekwDomCaN00LYtIeiU75fZn84qta4HRvaTBcZst8PuJjVE6%2Fpt5qbttet7SCDsb8Pxm4daXAPHFdRDIlRgLCeqkt2mMOU%2Fspm7O8qGmZXIzW8%2BXVLcQzUHU57oO3kjDoCdovABsQz2BqG6q%2BB4RSe4IJ2EUlR%2F9%2F7UD01yw8%2B1fgmj%2BVg7%2Bvz&X-Amz-Signature=ae5da5b6b030911d76e0a8faf2b8fa6ee59a30e1d4816a51d75adf8c197b8c56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
