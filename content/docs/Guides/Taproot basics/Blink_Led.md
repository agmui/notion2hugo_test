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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSYH5X65%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQD%2FPFKy8fQN9pXRQWWBuVopSj4MpGvYwPfee%2FBt9Z1wHQIhAOyIfawm8JPs9YSt2hhxyWc4uK2pGw1WOZv8GcMru%2BRCKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKtF6P2yU7Lm2aUVUq3AO%2FlrYIhn0HoP61aqvzq40NpCdRC%2BCeCDPByDUkGIi3h%2BTXx%2B5opBCdjW%2FWrLyV1quL2BbiL5MYXpz41iLP5lV9FVR%2Bg1Mr82vhHElAapUXFNkmrqeAnoO5IhZeJYfIoceIY4BPDWF833Yj8Bh1VRr1h4uL9R2IXOGuOI8zUz%2B9Ca6JK2WonNtEsKvdk8okednYW5p2m3jhjMNd0gywABUZ3ZmgPh9CA0DIzySkA90QjDn7NPDKdIJO24O4VUESJvoq16ZXl90%2BF3NO7jyl8qWygrgBw3wYQByiA5vYcuNf2CfOgy8p3bt0EJfQqoW3Rhog4EYoOPNcD7xbjjMSOW4HyG0kHYbDXoHCcInKT7ah6uAV19pMSp6ij%2FXRUm0IF%2F%2B9n7wzyM55vhNv%2BymKuWyVBr1OR0ljgycyVxU%2FgUyW0qpAP6h9nR0nN4xcaQLWmxWJ9FFYUwibDK2WcnWmSnG2SPZwf2WrVX9jWP5R%2Bl9%2FUQO7KyCEaauqdOO0AJLU%2FmJenN2dvk%2FUGhnEeiRogHQIYPyJlIH7H9WlB7oclF0sso%2FLVQffVN9KJjSjWSMQKdeFSjlV0LTsYkxfxewKC6IHae89ECyWMhIxNdhOKcRTJ8hqAIzxyfYszbsOKzCXtf3EBjqkAZWnmp2%2FUlfSfox6YbvoBE6ilNaTyUNVc04qguXbUS7Ofnbvx5F%2FZaK7zq3gVTjfEiq9tV%2BXtOHo8x5wqX8YYO3pra5uoGdBRzZPXOsx2CZtV8qheasm6nLO26yKItRbQ0FVFSU8TdsJXrGzzXvMpp07XfPSZYs8RS4QDLphaKGWRH%2BdmQ14CgvE7DBIrgYR9L6BUZAFmnrKcd5CR8cmsiouluA%2B&X-Amz-Signature=9bcd9c5294e3ebed9ce8549fb8c9ce393e9ad848dbcad92e59bef27d5d7f6e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AXQGDQH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDa4I2AdyGVvVBzAGFXeX%2FHTFmv27H80llz1oSvVtBuuAIhAMXnTVSj8mj%2FRIn59%2FbUb1wyBcdhANStoZOPh9x2XGpCKv8DCGEQABoMNjM3NDIzMTgzODA1IgwUSGStw%2BwOMUodZ3Yq3APTiE0%2Bb6%2Fj3pQGseWs1A2fH8bFhCk8NvMYKYEOkmKxsEBuuZbtLRiiDXaS8WLnCUMdKs90nc1VAzVwtaOgZSAgkLo1U%2FIjMdNvzYUNoIxkkyZFlBIWuW6aEb6taMH35RnmATuf9CgyfRPfiIy%2FyrSyKyJlWOVRhclJcTOd0Hxgh8v9rG2gqslm0wRfBaqOCRt7HE3LwxiO2JVlDXYvyakuLzmwruSImhG7YkZE09oXf%2BSpZ4Bsjz%2FsPd2o0eywO6qFkQ%2BxKBExYM21k5j0qLDQFY23NcE3nkoRXfwc4HHSajSKt4MLWmfHCHUVP1Q%2Fp9r%2BMmNH8JN3Pdxei2OsIhcO9MCM%2FiW21yRxLhrUs%2Fnu%2BpsP2lOyCDrFpvHoXszt%2Bmhrj6R3C8lw3lCCVkKfOUqpMRzupUy47m0vKHphFMABj5qp7%2F9BVwBdbB111TkaWvCdRCB4%2BOCr9Jgf6gWhRADDFXjaQxOlGOTpq48Op1%2B1ymS004nJN8cT6y06Dqc8ueoYB0uF33cPOUmpFnNJaRqHmh5U3UWsepscvUJ%2F0DdfIaaqw5S9zFRdLpheYMs88KCfdTq6wkswjFENiGum2NHWmnweWg55WmhbNiO3K4CA%2BUVwlY0QDagcJMd81jCutP3EBjqkATGJLExo2rEP%2FnULZmcMI%2Bvu4vfyO5eH8Ajttn196a8aE2ZHRwXegGfBV%2FUifJXumVjrJhf252TVr69TYDKLobbXqbOAv2sqQwZH7hwflGUr%2BxKByg4bJwq7EjxAkcshDRLLZ7HiCVU30jzPV7vH%2BPxKXAFoNakiujmFfPicpLVvmoQ1V8ZCWwGSQDZPKaLrF3A4b9t4tMlnHq%2BnWID6Ylhz6Wtu&X-Amz-Signature=14ee536c4e124786ba727adff3b68149e000eb7206e2cbbe15be75ef1f3798bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
