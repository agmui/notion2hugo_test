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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6I5Z7OG%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBzvPWUetobYZZe6paafr2SyhqIHz2hLdxQQaO1XInNsAiA74M%2F%2Fka7yDLuIbvfsatrow%2FcJnyU718hjkUH49GEuZSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIME8vabMmLegnObkYPKtwD7xrnteKnZFIVmbwE%2FWKTUTqfQy%2Bo7frSTEpwIcuhK%2B75bV2TEWo%2F5gBNa0vYRsa1%2BnSpuThhDmUigur7eYck8f0PZhBSk0%2BHQMIDg21XGUmUc6GzIb3zZlFL9df%2ByTugXbQUsIKRCDICtg%2FLSFD%2FBRlYx%2BnjljuwJYs3YY8YjnYHiMMcQFybUD2Sj1nijxlmnjoYMlFGRKZrCprNvsvOkuI%2B%2B43xC0rKvhm6NaSX1juI5QRcwl%2FVquqrj3pDkHQFFaytZclpBjZH2%2FCiGFqjMRLqI38WWs02h4a9TUsfoPCpdePxCxjzQoRTG%2BIBejNC8YI4fX4xBZFsG2l06HX%2BwAckvoVTZQLY0fuWhbtY%2B5zNzZ05%2FsjXrarHwUSHgajs5h%2F65KBh5zrohl8OHQxXZQsxgSnwqOlm2Hblil5Cr3KpONWyNB56F7BG%2F7rQPYCmtUvU9RRSw%2B4%2FeEhOQ%2F%2BTTKyulxmP%2Bw48xJqyXCstDmcjy0URo%2FYtJnsh8vcWxCD%2F72%2B8gAMxKCZr%2FKRHC9sNdlZsNg9Y1%2FjQzg35T8l7i21emf%2B0Bzy06zHhEwSXU0X%2BOem8BbDzRxxeaXYvRGhzfL6vu8VjjM7Jjal%2F2xEcvxaErZ0eN%2BN%2Fdxr4na0wxeT4vQY6pgFAijEoA8cIHcEiMxNvzSCITvbJM5v%2BvR1UHzyg4lnRuhTrcqyebfHPGGMD6SKKiQ2f5AIQpbMWt1pjhz4aXQGwBcxzea%2Bi05jLd00Fmn5oAngAkzvRiVGvryzBXKucjj3Yi5HLuLNlrRCHfHeuQQj0jESSw9iS16AyeeKiS%2FV%2Fz1J4eTWoL5JU7iG11UZUG7aqBABvRvbMdrX%2BoB8jnBqhK1M7xfik&X-Amz-Signature=8a5b53166cc49603cfdb0ab3b28a76cb7ca538a53e4c480884d4fb7d32587ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWVFUYC5%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCdLfeIarjwRncew61p44XwCR4dvwwyt6vyeNA4Nhe67wIhAJLpYl6pImOc59WLDz7EZFmaOtvqPtMQPR7greE1qeASKv8DCE4QABoMNjM3NDIzMTgzODA1IgwESz8vaHu9qHpaWIwq3AOhpuHWolFnP%2FKn86qteaDdMyTPlMNVwkGHRvlQtGTUYHl5%2BgiZWZ74ov7FjPyO17WqBLhH1WnY9%2F2ibZNgylwW9NZNOx1p6FG%2BThHGX3hL7KYGx%2BfJpeAUszp%2FlTEdOcXSzZZaCrHj%2Bov01bFLWvP8hwbcJA%2Bj54jvPpEG3RHC5wNAIsywAEJNKI%2Fg20%2B99HqDlFIPq8w1cPKM14hzq2hnLog6aA9O4KDP9ul6d08uoIUTRuajU21m3jPW2yQJcSn4Ir%2BRK%2BB3cz8Jvl0AjM7PBbFYTFcIFs7Dhx5bFcn5GqjP0ZlykAKlruANu7OXSv9synPCjbKapmuxyqjD9PvhgDKmAQHnfkuCUvagJEmNZiIipkHAvK%2BIHYsjuZl6V8mAdCzMGDXskvfieZjrj4oDei70iwI7iv6P4zvMwqqWBQAXtcju3VO2qNBKnipq2fMYS08mi%2BqYRG0rNKS72kpUUSMznbR%2BC%2FqtT4K0BHSvwe8E13W%2F%2BIYt90IsyKYHGu6v%2FrIKOTTyucj48J%2B7xoNK9%2B18hqQSn%2BJrdx65nb0j8HEawcj9YHVE87zqG4wPBXBnktRWzjiUKQXdZ%2BUMBdxYz4n5L%2Ffy2q%2F%2BS0%2BbDH5h6Z6o1kakOgtqFWwmBTCN5Pi9BjqkAfLW45W28JCUY%2FOhKZSTn9VBm4boGlXAAspwJT0MRMZV%2Bizbr5fqFeRYOUMARgxldGhEzTa5tlLZCsrXfXxUKI6XAlxj5QaEstMdr9O9h2f6lKD4JlneKj%2FEMTPPwDv9IbrNeIydkZljcXV8JnSpRxE8vuZ8qthp%2FNaCgLDkZkHxgM9kl9bBwnzqEPn2XQ43Ffy6cMhyls21Q%2F1lBRvI9FeC6mp2&X-Amz-Signature=a368645da94febddcfa55b54251fcab2e061a28bc3be28456fef8a442a6605ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
