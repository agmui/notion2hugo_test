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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU7BCJMO%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDakU7Ya24HljGwxrXfEQkkPUBkfmw4BgiQgWKBPRJCWwIgG6ku%2FPHASIYhsV74et%2BjmpsTIDriI9N8B%2FnHg%2BZJIg4q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDTpqRxN3uAgdv1IXSrcAyadGOLa5E9IiwVpcoT1GxL9ulIYp%2Fii2yKmbanu7TUMRiaRf6HeIBTcvtRkEJSyYeRwozR151wjq%2B0E3TDY%2FDfHHWqFWTzQPeeGLYXCRFo0JwkcjR%2FL1Sz8wzfT2PkwiWJZtC5r%2BMAiHAswQhgjpZZgPLrk6RyK%2Fc2C%2FQpp85JAA%2FsedTpg69Ke2EVb2jkDtdqM06wEF9FTj3XsDSjjl7qHRd3WM1nMuqzIQnX1lk5%2B6I4X%2Fa%2BjeMT5nA8MQyKooZlpBEU5zZg9gLYMmueRzyZQnfRFpI28CLoxT6mWiUudQxWV4e3XsnX2Z6832Owb7Xmsi4x2sodkUX25ofRFaFdj%2FE1JD71z2I7375BFE9YSuuOG8cXJ88fVfjlq81ro00OjUXhq25KDMJm2EyhqbB3HmDwWhaFsH6ujyHO63sFfXBqaAwuXdKLM0hESZcaxSEvOBSU0KMSRNRfVYBRq57R%2F17V4HIiJL1vUPdaKJtETElu6sZ2ZzwHxMeYtAnuagfIqLni%2B0tXbxMahkWhWw5V4mY%2BsD67D%2BiiuEbIyaJHwKb4o0xXijwHjpWnYVkr0%2FCFBkHA5uTuj7vQDKlVXb5z1jjMuVbr42oRzR2Eg86bWQKLheEm%2FbKXN4JogMKGfgMIGOqUBoXW7bIVabwWbyE8lL1QBAAxtYhq5yS82YJrDCDVUrIUe8pbJftycS20cS%2B9%2BVw%2Fn6huSkrnzFY82pSsfhzG8YFP%2F%2FDhYzWDAAjCcqiLfE0BFDoSnbte7RbCzlc0WLV7f8PBmeVHA9jNqiJGz2l0rDQAjpw3P%2F34V%2FGJEIqkZijjcp1qJuP%2B%2BWu45fxTH%2F7ZaR2lN5jwvLEPfjKdGZW5A1c7kQwBt&X-Amz-Signature=5a6390b3eb205f125cf8c8080c492c652c854bafbbe798395bab42a48c70c930&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LDMQKU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIHMOvf%2B0FFqJy5riWrdHQodCR4GW%2FpMDakE0O0U0qR6YAiEA0bFq%2F5LJ177T%2FNnlUCd2yXTTESvMoE82ZqMRykK5Fx0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGfGg9XQzaoGMM3phircAzE%2FlCqYbmRBXENmGwOGOJoyKlkM8%2FBOGzslAK8ewA5EJiwagQexnGK%2F1fK%2FRL16s5A%2FLfrHkpB7fhx0xKMZmrWOBQBLen8vA%2Fbo%2BHgbSpMuQVJ8a69Ae1ts7VKUAe4z%2F%2B4cJaApS6bv7JRJDktFgKviSQxxOmK2QWl02Sem1Erq2vdT4PGtFnTZkC%2FXDoUHI2LcxvLfdfLDqHiJDU27fmc03ExSJOEY8Vix4qoJ97%2B8fAYwqKiEIqmpR50IbyDm5n%2BRhqwA0jxGbvzAPR32y8Xk6dzmzSTj7HSZy0a1hgpgsw6ZeZA63CG%2BajvYeCUheutxfwjqq8aNmXrw2gfhXLa%2FWEqACboq6KhlYcwKfOzM70w%2FguwnadoGMEB%2BKYJTytWT9XmL6DqIExdV1e57YlWdw4rXmSLNxrWnIzGBX01qoVDxDCSYnaYOwdVO8nXNxU2QZGdMhmoePqEJSG%2F%2BV%2BsAntxP31J9ANLlBYKrmk%2FAAqji8PnXzbplNGB0vIkeBv%2Fu8HptVz6QzInjl046Z61ygjR8KHL590hH3JD5J2Zp7Zv2jA47HJPQb7JoMRTloTZjQcFru99e3Q38Cq%2FLEnZuy%2B11SWZVuhdRI9bgs6KNxOzlqn2ods3FEDIKMLeegMIGOqUBcM1FVhiskZ6nJ%2FX2cxg9UT80gSnj%2B1%2BX6NctGO24R%2FrhovxJiL4qUCFCesnDLNFkQPms07ba%2FJ2mVjn7RTNmQuJCdkVwaQ8aUlY8C91HxEtKC9wNOLbfsQRQT8Y%2F4JqP1mum59Ew1FyahlmhuEw13TP2IA%2BzyS26Z5Kdsm5Z3%2Bh72Vj93viodWexxGxA1tfx53C2%2B4ub%2Bsn0Dwy8I5lHLnfb9RN5&X-Amz-Signature=a5c0a9f8738ba4b1efb15da2246b43c82e1272f78d1073992113be0fc3b17bf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
