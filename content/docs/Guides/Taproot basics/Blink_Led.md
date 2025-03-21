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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJHX6PP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIAGc98gJcwlzw8%2FqPOcjk%2B4xU%2BKYMCTSZjhNHgZs60vOAiBmrMXb%2FDt80eiZvbxgNUwqPVVNh7baBnl0iSMhf9o8GyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlqwzvF2gxImGKu9sKtwDjxlpsbmiPkaxekHIFilzVZgo21lwVM3ztS7eHFsGf2UCWfaqhaKR4cjFVt2t4GUCgnmNizs7KiSX6fzYW0dx1lB6ox%2B%2BbOTUzeGrGKsJVbtEBGZZfKgqiYMb9Ccf8vhuYRuSiI9PW1GLy7ekv9CgH3jpGS3aAAT0Nubk6Oq0%2FzYUno2JCTOtAm6XCu1z5joLjd0kl8fzVsBbMzjag9OrWJWSgFivNjl0hVJDU%2Fevqu2X6tK4yIsz3%2FVEN65fhbabcUujdejFonG%2FR9g6aZ5EjCnGrcj3fLkDwfay4Qblc%2B3801UN%2BarT7QrL%2FtqgBbY2FCUY7ZSK4qzxK%2BzwODTBIOIJbV%2B23DAKH09udxumWcW2Kl3zzmlLo2dsAfzbUQwUY35Dp0hH1C%2Fm7lWEyThBpnK6ekhCzwPp8FU04UlS24Ke05HyqrMmhbt2KZ%2BZqGf%2FowFhkNLIc8kDk6XxQulZOPVIxhbFiltlck%2B7UqJ8wYmBx3uhMZLQ5ccTbHPmT267Pr63bb4Ik8IMNEaTIdpZ8SVpHpjF%2F3yca0EQLEAMYa6zBrOVY8J1KNKc8OX3Vs3hyiWhOYTj7nP179HncyUmFEcwTLIyzDN3SY4oG4GdCY2hp2NLr%2Bx8SFfPUfUwkLnzvgY6pgF7G521Tu8tjoaHguvAXVvLsju1%2BmbtNiEqat5RO0SSwMrbNAu8%2FXPW7%2FpO6TfO6zp0BQHE%2BzYjBuK86bI2pH55PTbKPRR0eN4szSMsz5%2BLwTFr3Ta7lDMUJq2zcZ9NTr3voufxuPoaPSagoC9%2FsQEw3z4ISQZx7Ux0wOYHC5wv%2FGTNs5aWSHI18QxuH%2B0FJPpH9Tq%2FWYvBoCh71BNi3VagUwRKNi%2F6&X-Amz-Signature=3a093acd745d5bbc2a29bf1e5e495ccc4be5bd6f5991b474f475043d38a9fd44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24EUDEJ%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T041002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDOTzKetCjwz%2BY8lbUcmEVaSqUudOFWU%2BPi%2FxJLWE4YEwIhANu0DvGJJ55cL6M6X7u5RXrtjK6neVlJ0Vs2zOlH%2FGzAKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwN%2BbRYCizJ1pUHwlgq3ANLwCw6zTS55VUQT1ErE7CM5yTQwZLARHa8euMLKx8N9LTl%2F8lyZdYWQVZag5Sjm6i%2B%2F6RN81%2BNUwxsh8uHi5oA8QI2xKnu2G9V%2Bsu9MR0vg3zl2ENyCMYR5RKRpvMlK1VoQKt7Eq%2BFLBGBoUaumNxxqTrkpJSL9E0Hojnly7VeZ%2Bug5dfcLn%2BltFOcXDOnSCJCtBPLCv%2Bq62jh0ZjiwcHYSILbA2YRcAA0fAMBimt6qyqLuetx%2BIPIY6v17CGrAE0Rw3Er%2FhA%2Bch%2B4y8EvieyBoy6EUzr1Bx1UOM0%2FFdFijeuKBBLoBv%2F59JxkV5EN5iE3ozuAaya5ifJvfpxxQH45%2BU8hqXFq5TkTxSZ0e4jjoF32ATQfUwWQkboypB0L%2Bkppt%2BXr%2F6W67REaQnYDYjY8KAwqbbmQRQkgakxgXscxTR9rdAL2u5tmqdeaQny7TFR%2Fv5EQC2H6KTLUYjBsUApDzJZfnxgMBDqqImx89uFfCSezQxMqr4YnLhwqDRkQqOrFDKqA6czo%2FJshpYods%2F4wSvkeBIMUjVp1V%2FPqd91pMZhQU6LmWCovaSGaFlwDUaqy%2FkvjdCVqJvGTHVzhOM9et9C9AlVrZMvZkLedVgFWiCHl5W%2B%2BjIzGxz2fwDCduvO%2BBjqkAUzPyfuYHXKPwVmjpbegAcgRyoHq0PAz3YuO14gjPnOXaJootK4zZO5Jt9osLzXzSJdskEVJuens%2BJ8YdY7qh8JGoDzbPVMKRdrVBs9ynr6snIX1N5nI9FxPsQ0GzBDxkMFH8IZWKkcgxUvLMMLld%2FUm5TTcSX8ZZSEYi%2BJZ%2FXuqYM2Wj%2BhTtK7pLh8oVGwhhpCogkZjMbBQ7rDg6XlWFnXNeuj2&X-Amz-Signature=15336812e485266f5c09d026fc9bd8867c938d698153fd07bc4372b196fbb354&X-Amz-SignedHeaders=host&x-id=GetObject)

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
