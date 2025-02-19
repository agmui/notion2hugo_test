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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652VMHQJL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDR3ziSVZrm%2BF3%2BO%2FfjCuHPhXtyMvk2G9QfVhtfdFipTgIhAKJF%2FXuIeXdby13SVBz3ozy5Ur8UKc4KIIbSzWDr%2F8LFKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT93VuA3x1sIpli78q3ANmweQSde8pkTQA6V6QrBNpAaTwK8sEdPiTYa5IDiFCHkdOaVDIVOYP1vnN66%2BaQfwXbrbOMuvsNuW9ILJKY5uY9lKAcNdt19jzCdq%2FV6k%2B7uGtvJl21ezFRUznsdfWRr5Rkr10TVZECGRKPaotVnHm8Y%2B1rfvY9Iif7lZdN3Fb5Lj2DbvcN0fEHVQoVv9osBdyCWP%2Bg26Bqsw7lf2aoLOztpNgs9doPeM8phiT518IMqelDXjYfmRnY8MNMHk2Y3g8MuG76c1fxWEM0ReqgjpvsVU%2BfXFVmE4uYsA82NkQctM%2B%2BeA%2BqjcxRfL3PPvodKd6Ms64e3%2FNdf5H73gh23bbW2h4s%2FM7l3Jy0iFgzSZ5mrbKnwizEhKgb%2FGmXz8yt4uCZNfCjbdfVvgYfILtri5S2BbiJCXUDbRj4kPcAjVpkEwHiCT4XUmchf1vSawpcfvFVo7%2FRIWrsdak9n07mgs0p6bM%2FmbXRD450bZPGd%2BUYDuMd8zB6bYopHpZWSTH0KhlIb56eVDk%2FDb%2B5l4hHjZTm2kITjMZ7cESdGJIW8zNGogNid8AzMFBqKHBF1ok3hs05KBjjsm9QMfCht85GkMkmp4gtn%2BlWeCQ5NijArlHH%2FTruwEtf%2FF58bK7zTCq%2B9a9BjqkARr6FZBPH2ef12OCjqh0ky8RC%2BmI%2FGX8uhYIIkVzFHDVzF%2Ffa2HCANZEiRG79ECh6x5BwUCthBAZ4D3Uq%2BWm40JxUyPHQ2BZ6f2esEdyN0oiWXde1aEjrEOUi9T6AuMj1fAMbtcFYYiJDyOh2v1tNQarnkCEFkSZTE7R3qqnUuSfBAHOZkxEEk1ooXCZRrmVRwzYjfnPEfyOuTb8MQ1F78Ob5N%2Fw&X-Amz-Signature=702b98b16303aa36792bf4319e15a42a2ebc26038725030ec8d1a0c9820857d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627SBB6O5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQD%2BLaXdZlAdB6q51UfVabgJhlDUqYbab8v4bukrSjB70AIgf%2F7L4zOZhOP7CWLaPbCdL0wET1E0WqnIpVaiXBCF2J4qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHAso0HVSCvLh8RICrcA85nCfY8PU56CZUj35%2FnHnL8G9jRp5%2F4jjO57DPwY97tBi9HQsWI%2B6NDp2WO0Eswqcds9LZzyRqG0y1Ryinf%2FPbDjfKFyJUrQ7kqL6frHdRkQH7eIrlHa7ddXGb45lzxC1%2BXLPVWeTqJjKTJ2noywYEHibZLOFLfRWXBngjKAfg8urswGfvlnG2kGd%2BD%2BuqBR5qXgE5Z%2FqxcMrhDw2ftI61E9XS383NBumo9iiIOJSqwdpRu10HQjZYbEaGtfQ1veDA%2B0MMxQtN7rn09lSRkPD3NWNZ4lHeD9eM3eLlsna2uYJA8N2sdyemjhLGDAZImBThh68G6E%2BIpuU600m3QQQbEDCya9oRleWQmZEeThvmpTSRpwN3Qr3e8QsodIwr1%2FYfd4TzfQGrcv8NPGTppnH9WCS6St6Dv%2FTEG3ShLg5YGM2BMame9K945oLzW6EDGipD%2FuR0X918iC18YtQclp2kKZaopxwltEfA0hN17QClmCtzB0SuvDiXlRQ5wB3TRCS1vqZjWGOtrRBqSzrGverYbZ2h1d6FVQ3%2Fi4%2BHIlGe3cgbn4N3EwAP72X3m39jiZillnV9lWTL1vAPcP1F%2BmkJZuMYSctAqE5Q%2F6EzUXPTrVa4L8dgvO2KLahSRMJv71r0GOqUB3jKKCB0k7Vyzoyy%2BHrKUlUclxnoKfYc1FRli4YiUu0xx0B1LPovkjNKQ3%2BPRAWNsptiqF%2BhXHt5uJWTuhf4t4DU3CaWdKoSwEOOgWIq1g%2B0Fzt8CRyxlNs8P1a%2FaLUMjxYJZ7uNz5W3Yljo7uCbgeMzgrzIgcHbn3mIi6%2BgN54cLh9hAFofF8ovg0%2FhhcXfKdCJpQY%2FYVijdQPpdBohF9CRlwuPq&X-Amz-Signature=2efa8e942ba290799069117ab49154affa9574c21134dac52f27f023092cc155&X-Amz-SignedHeaders=host&x-id=GetObject)

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
