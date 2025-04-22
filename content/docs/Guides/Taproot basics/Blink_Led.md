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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYKUWD2L%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCOBCvG%2FUFmVRy4SWFKgVDM03km6DXu389ZDw0O%2BqmSNQIhAMSdPyxpaaiUtXUPFac%2B8yCxZ814lmBrUZSDzwXu6qtaKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BlExl9AQ6xE4U1Pwq3APEqNjYyL44MUB0ef5xi6BL6XUlWHG%2BPcZVw39uhTWF9RPcKnbtcwEdszw3LIEQ%2Fcvo7lHfeewbwKTmkydByKB4geslNIs5NplV4muhOoYa2KBrDSpabi%2BWzxjHJJpSPn5Kn3N0YRWQ8Xzn%2Bk7MP6RBCzhPBekDbptBXlktzNbYVKfyz%2Fk5mQrbsq8%2F7b7YhXH0hxgK5q6qz7rIwRSX8zX2KuAMIcUsSRSagjakJ5qj7Zj52Bv%2FldQ6A3WwRGuGid43%2BtuYXjMi4PsmgRDR85LZ6Bq9WjyKKCaPQiGwXd1CxJ1r9vDCRpazWjP7Xx9OJrgQx40rJWpkJy5k6ISq%2BcsBdWQbZlyD7DT7H3zwysGO9u8nhXsSI5ypmtZzEvD4o5xubkVLHdy8ZoXMbAdxG%2FZYMvS9NOhEsX97%2FKhxJRwtd7Jq0txJOksymdhWE0mNT8JFg6j3uduEpn1q4BUQg1FXS6uw%2F519PKzKfJFcDqFfj0e%2FZqW0KjyItgVFxgHi3Rz3tJ3BaKNb6jxALoYIkf8Hb0NaJ6LdCZ96bZsT2xYm%2Fn6RSl4OinhDgp0BX70Q1FkEbYOTvt%2B2UO%2Fe9auxaIl5%2F7NhNDamtYO5DcX4FTqAE6J%2FMVAQrShRA6TU2zDF75%2FABjqkAf8eBXqVRnuzVXSAn9vayHPuJzHIVzGv01mekO0CTdPxuj%2FYP0T%2BPtFTiY%2FXptPfm9oPUypLZgoQs%2B%2Fg5dmu9mN0XtdZnFfGJD%2BAGYIezNXlVvKAE1WhQRJn1Mih4%2F9mJZnQjJFkuR%2BCZvWmUhXA2Ovfxto1OisZjLykgrCHOKRLAsDHgobfKgDCSOSqrRl1f5lOYvQ2ghu5L%2B4msnFyAAN0uDiE&X-Amz-Signature=3c70f4678e7e5334902780e5ea0efc9c93805150fce4aad8fb524503ad589066&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTLDX4S%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG4A5NZM%2BfXxK6P4YEIRtvRfLuJlRKmqRcQ8EaJXHmZmAiBLni54wC2tTfPAd5GrCyPYNYPE%2B63PaoSDNrfRHTGPYSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeHosmqaZ4AMdXeFcKtwDUpiQsSDLxmwxZRBPDi2QslmJ02NlUE5fwurwm2yYSQVCbK%2BGWSFWVwfQWYJnefprb1JSByYvSjJR1hStwGd9uQho2ZGYpzt5h%2FBZXGwtjQ5ivWd5JN5%2Bxc%2FPXP9pmQ%2FhX8x54jfj0X65IHUUgymk%2FzQZE3r1MKWdhfASiH%2FyqkdXPEAk1wMxqBwRN8Z5%2F38B45%2FFGqOd1kMMZ6YiwXHdQN6sBrLYp%2BpnPlJD6Ne3dTSMm6tS18Ysu69pPwTDB%2BLdmC1Giqor3YBP%2FMse3hEujopfo%2F9xslLfFmi2X6DysyWzakOCfFTWmIUnqOucOflXQNMOvSDQbubqaTKtOghaC4PbXBMJQN9gHGazrSWIvjNZjAGmfviljiZjxMnCh%2BeLaGEEYyoMUUyVCM9Rjcy%2FqxHFn%2ButG69jwuLkUqvijcaG45Bf6A4fwkL1hzfFuROkl1inFd6jsGLClcN52A%2FX7rYGgnjsUNAVqMOA8BWWekbkUNfH%2FwH4Z5PDA80%2BYwti4GLFFLjhDDktlw3R8ylKIUb8Y%2FqhrNmm33Rsid%2FFS6l9P18AmyEkczv2RrIUkjTMFnxNQStaYh7%2FyCtNT4brxBc1rqJMfDNcgtx1Rr1RdHYm%2B1INbnOfj9t%2BgJ0wu4mgwAY6pgElzMpW3F2GU1g9rjPBSSPsz9AyJz2SoooFLMhX08nQA0gRgNaU5F65EScZcHma2ij2V9i%2FY16JU5bzzR4ML9ySF7tw3HoeAmwOBPAKGKwDHr0%2FVjAOFKRMYjybxxOMx4HSSVcOjAz4t7xjLF8kpewtt265nVz%2Ft49r5mI1NDTIyTQa2%2FQxkEct3yUHunbcQ1juXZWks3e3lVQ3aXK%2FdE873CQ%2FZXzo&X-Amz-Signature=50597063543be4aa50698d0d6454ee09e350dda18b35e9f87ab4ab503f97a65e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
