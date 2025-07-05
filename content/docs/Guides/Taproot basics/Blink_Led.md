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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMK3KABO%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQDRcN0iOEaV92nctpacyO1AV6AjwygvKL62D9CKJZ44pgIhAObrlAR%2BYNwy%2F5%2Beta%2F8XC88eRRpiYUuMDgdAZ55cm9sKv8DCEYQABoMNjM3NDIzMTgzODA1IgyldglpDa0QZ9T9mZMq3ANoGtiDLW%2BqHsQ1p4ZQmHVCTbT8aKeg%2B%2BjwM4k0R5zwmsCxSfjTFUt2OqMnXgfBVW9zAtK8ESJAJrmaTJ44qKKsSeYHR0ifaYCCutoJyYHf0y4Evk1WJuJp5o%2BRUmRrY7zGVocUPfRzE8xzoXS1yGYSPnyNBF1GtNpBqCH%2FO%2BgC8B%2Fi8chWk1FeAaRxLJKYBAczEcwsLQ7VapqwKjVFc5%2Fet%2FjhBlVxlhq%2Fw7QhSqpaVPsN9FBj6jgc8L72Jg6sQz5EF6RuI28SSzzkq9PND2P3WtLyhK5MGViesg9x410BwhjlK3OHJgFQ%2FbqUbJ3Wke88LtebfhNdBAaCEoJQifJArRCwHCLxmtWRfH8Bt2xfLTd4B9nPbn8QkHCyAGc1JWLKpZbqy7Fhj7sbjAhMVZiJobqv0T61WDxRGVV0%2F2CClhU0LRuRUI4OX8qE8ZZ3NSh8KslkwM%2FvwKPX4qo%2FWnSdgrKYSTSrUPgYZbcQGjZU7DEXQBocN0S2DwoIy%2Bo%2F1kiBHTfRjfpCHtLDKeXmshEra5ZlLxIUp37uxTLOIW79nezLmOoxJuqj0WgNk27zf35Sq7rkU%2FcS4vE0aTwZ%2FN9fn2lGZwP0aXKYPqhyuFhOvJ35aSesfXkGDOnDYjCtyqTDBjqkAX%2B%2BQwVAgqX6We5iakJXHJgy%2BEoYohj4aP9PskUqqwdOJO60%2BMicTYVE%2FdNicEtFSAV5eE80L3c4HErQhUFqDlAc7uJAfDHtXhi0Tm9%2Bb03iOAZ87HfdtskyqqciwU6rAlyWJv7%2BXcP5XvFB%2Be7IgkBsbK6ivQz0hwUDhYmFYOiduK2e8WhYrdJi4hRjY7qHUBFQbn0n093F5tvEbQSGeBsjk%2Fe6&X-Amz-Signature=da2e3c7989efacfccf1333da64bd4b2c6d9634f7d37cdb53da726219a49ca7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEBSTZS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDUoj1jZ5C89VVuTpBeiNvKm6nUcsl8lbqhG848cRHLzgIhAKfzuzknMdsjQ3IZL3nNiMAIxYi1Ft5OU3kriqNytcfQKv8DCEcQABoMNjM3NDIzMTgzODA1IgzI2hIzMppus0S5A%2BAq3ANj4otmeUH1gEWqijxK%2BgHhfU%2ByhNCj930edI6%2BMbDERKOuB7Ry8wRn9owlV22jD9SchbVp5xOwCTTwZY5FERmzkfK3%2Bu20L6qsnXStdI3m1F5aYcdkbOp3FUHfwa2sCIJSooeXNrQKmgYlrOK4rqnAoNa9X4Gcurtcc5r199Bj4dhw8U5lBl60F7pMvzXcNBC%2FshQDhVGkq3ZiF1VYyaKVbdpY8jk8RQsY7b53GRx6OIgNw4R2da1RIsadFDH4QEKMHa804ijV4HWbImfbQMyp5EbgEoQPpBqYIOr72t42x3%2BGobiikuLigPf%2FG6%2FPNsqpGoxt%2BIM4nkBp01AtintTeTUNtXVpEHJe%2FRdoKP3FpAUrH%2BgEjerJzcYPeDom5el3UdlBtguRQwl%2BEdJf1nY52F3fLPGIMjgF8TLcKarMiy3NEsUQp7Wj3Cx0ceEXhsVskawI8cWcOk4VPU8uaYeMupam0dMuJmrgDVEcs6B9JoTqlHR7ENabSmm%2BMdr9Z6XWhnQzlWODmJgTHU82VnZ78f%2FmipzHtWz7fYCV72EhZI1rB6Hdkranzk572wacFs6yHnp9AIiN6RQ00EV3Ku2iWJMr4GjzKCh8xsPXbw3qZS9P1ckyfHNfq50axzDI1KTDBjqkAZg8FuN%2B5zcJ8LhZGgX%2BA%2FZz6RNku8alNzBVqbeMhoL49gtQV5SyW1l%2F5CrPZQCxYXSNX4gQ%2B8uuxK3zNLvLmjyEAd%2BjP1i2v8PO%2BYrP9NhqEzi46Rc2XIsG6FPicF%2BMwf5F1QDDiOJmaXdeRJsMewUI7BUTjtEVkiD2WZRmlhkkRKeRgrsviH9TVlpdQETeKT5j6eJ79R0%2Bdh31dShz7i91wwFo&X-Amz-Signature=7f31ef69826a299a401d849190679337692a70d0d7360541090cb66407080433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
