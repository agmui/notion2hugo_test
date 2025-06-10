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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYQG3S6B%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPSOfF2hFXg6WNbDg5K%2Bh9ns41MJussrQNF4G0fs3QRQIgWiG37nB%2BR8%2BF8J4F59F5%2BGUT%2F1q4rWVsFgi75jvNeV8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfTQEv1Jhj6YZQpBCrcA2%2BMnONOpX9rRixRTp%2FNiVJ%2F5JHowm4CBxJHN%2BwKfiHT%2BvLX2dH8tqwo21PWMYKW0pRgRutXqct%2FP6zdUIDiNmkhganwb8lk71HeG7gn4b%2FvTGae8mNoSpoPXenY8kxZzjPQLzvYQkhUEIYlxXUFT5soS6UEhy4Zc8Fh0dQKSXesDNa4ulJrrHH%2F%2FGLySdM0WV9eTflzqkvr6pUXawMIh5ZjbkIuQ14Dslbasr0fLiuZmWv2NOSY3FcHo8%2FX%2FrTF%2FU1YFaB2bxfXOWAoxssa6npS40ruE1Nt64K9TI3oBE%2Ft8DYYma090fP9oFc8YX0zOzExbaWA6Tq6nw7jfom5CnsudVQsOCLhN6c5Uu8fN3CgyKJc6tt7wrRQbhNpbzs9q3bQC4korBdLR6OMYA1AHGObDhICabXlzAdMAH%2FS1fS8ySpyCimM0UCOT5ijUFO7OffLQoGR5oKm3y1uVAuC8hDIDkZ44skRxQXgh80pVWPAEGJFFQpk0WDYEgJswBVloFkXd%2BwDvwbXT5jqQp9yR2uLkFAWUQQKW0vhdOuNGClyWpnH%2FJcJl%2B4SbVCd4bAGN2F1%2FC43xkhr%2FSiETxVThAnSH6VWIGQ%2FwvMQXieTRNeWiP4leosRXTKYsBC2MNm%2BoMIGOqUB0Nyueeyem%2FYJaEnXi0ewhYavbaNYIKqpAPSYYJWcPuBxJ4R9t2%2FRVsfEh9jUkxX323HXK26KH0LLeyeeDUQGWRMDD9EtRYM99zjbFBuNHIv70BjCSWxBf1SABN728tiKu8U%2FMLj0b%2BovZssBn9mB7gAHHNixTFXregyrhmHgoSnx4Mn6MYMl%2B%2BOmknDv5Ae3kT8wMYhIQrhFTJj7BsIBEYTVTREN&X-Amz-Signature=35d9861fcf1920c85fc00ffe7bc3a5133cd58cf5f9b96ba73d4f9738d689bfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV36FVVF%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFr4uJUTihtxINeYmGfpmgwpiBSqGqRgF6m7cKqtccMAIhAPApsKproXB09u3pEBIWdXeAzvLe6H7HS%2BN%2BxcdxuYQAKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxCCIOhoWmtu7BDEoq3AMUdYmtS5oxlnZcuvXkw9PhU7%2BkTGr%2BrkM5QolaH3dK6YFuuT4ighk2gcgqQDLktfJlMQdaNP4%2BRIKIqA0%2FklPmSJfdtdZD%2B4G3CN0iPm9glj407Cekyn6c1aK9lQABGSNEZyjvkanpPBJUbYaZswHtH5r56zWgwhFOb6SquT5afUWmYDLpnCoyWxyfCJ3pH0zMMq8qSpjqKAqcbetSPl%2FiGunZjhMs%2FP6f9o3WZFEaj%2BkQJLI5sqWT14fT00BX0mNWvlpwRzPKVqXJJKhqTxeJxtL5svxNGZuT5hEUgh6mxJzVUUhIwLEigoIq71ITCyVx3Jcd1RntBNST67NOh0lNeCwjRivtesf4s1DpSAmZOmH%2FnYGLSKokenfnHNPFWAl%2BoR5klC6i7YkMeZAVnaDNfd4bdgxTJ2Xs1UOGXhqgjJB9M8udtvHaFwKWdc8CWN7p59i%2BDqfZ%2BsBXVVFMm0ZFBmXS4AdMIcqkkJja374DhCysu1IZXBpwCKfegxmXEPQjup7uFITb%2FqKFKlxtM62mLt%2F9pT0mq4N0%2FxbkzwPGd1iGSQ9faUngPTB3lU9M0j2Wnaj4V4fKDI9u38fqxIscHT6Sr6pE5utFR%2Bt0EmY85GRnNlLhq0XBnWbsPTCHyaHCBjqkAZYL1aRtp3EdJghix%2Bb%2FcQCN59lb%2B3%2BXozhh67wAFW5Ngn7%2FLuNzbC%2BEooQJn0Oz5uRjHRj8CDY7zQGLpzuUELEU6Dmzbd8aima7i7kJs1gW8b5hbEt29FDctY8xkaQJqSGOx4g7FWh4p23BHBQhXeQ%2BLnH2SnrNNh0QI%2FjuolHGujav7ugvnf5e2LA4l9oCe1CylvGxq9UZUzbrbgxTFIAe%2FJAA&X-Amz-Signature=cb40511afdd3ec355aaedc08380501c1212b0b950841103aad0e5ee924e4b058&X-Amz-SignedHeaders=host&x-id=GetObject)

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
