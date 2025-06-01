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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTA7BXJH%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDaMpjRRPPiR3oc8gZ8cVdEDQHftmoF96s%2BCtG9freucwIgJGD%2FumQvB9FTjs3yazaoRQH208qMeHSCZuOVSaE%2FpF8qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHd3nLdPUQ5QjegWCrcA%2Fr90eSg38AtMOlyjUc3np4lHBNCC7L5EW4GxiHECo6GMBlHs3Gdzzbl4GlsQl9CboyExhl7CHM2TdAnkbyP%2F%2BCqkotYpw1zpgONroMnjJuWCTxtCHMwuFQ9%2BVX4y3q5aazbaXlJHDya6A7ZIdAvRb3zTAewdbsiFMrvKh5RS1Uwqst6XdQCiBERFQY%2FxA3Rk3lXb5TDvvpKdcjgM7Dm%2BepJ4%2BLxp5e2ITgAn3ymOTnL8MD3mdoBajfn7YsnxRMkEfkrx9D5atc6OboS9u8HkhJu4zDS10mT9SfJ61vwbGDmnlY5vyIb9eli%2BJ1CCMpp82%2FbPXBlhtaEeyoFmW1Uz4umV6FUHPa9HfAyXP1VJsBLvAOcY0%2F%2F7JXT9Fu6xW%2Fd9jPByfue4ho3fWJNTx%2FjYOPp6azqYChMe1rRPrKRlNw5Lg8Tc8AmX4rMXsP1XVMfl3FmdTGI7odknCGlwYOgWvgWA5w1WQzQNH3MnBGaQIszS9tKDQ2dQt61LIbiKHCfwpji7v9n7x%2Fh7PoRxIlvECuicivWxbuE0haIELzaX43mcD%2BHNnOuSMUFRk3kE3Xouf2Z%2FgLJwlC6Gx%2Fb2LITck%2BbfdRJycTtzNcDP8zDzhy625k0j3TyU6o5I1k4MMSs8MEGOqUB8va1S4m4%2FrczQZG3Qkw9PmG1Lr95U%2F9aA7pCWwUJwLQnPhFLYOIT9KhN8wOCHJpr9Hi2LYLen%2Fi52XXVg%2F%2F4IAeN%2Bb%2F2Gr%2FWxm%2B5L%2BQVhkSC1W8Lyzh%2F4CzU5moLSTTBZc6FLsfWk3sqAWBiPgV%2F7%2FBpz5ACzdWKVOcgBHnhgowne%2FHpIXQgn%2BzuRy99QAF7ktefWFY0p3g7zfmb8TS%2Bx3Dsbz%2BV&X-Amz-Signature=95c70396d54d347b467e56b49038d6933a6adc4ac4c7e7499e3280408e17368c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KEYSVT%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDDgLEXAcV%2BXOnrYbq8DRnJnpszhl2V20CeK%2FZHlf1jYQIhAJUhyBKigvV%2FSH97RnLwRJqCZu2LMxPFpHqsUfw53rDZKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKCY1yZD90KdvuE0Eq3ANe6cR%2FgMyv7zYeS%2Fm23Iwpp6s9pF2vS2GJ8qv3VQXmo%2BWRfhcWRzFzkLbG9VUcLIgoJLscu1eT5AUK5O5X5SWAzOjGskJjapUgo2v0H3o8Cd5jHJC%2FoE9z9%2BEd1jfliJNaVttg7RqimwmJ2xfRV7iDKriu2TajIZTAzFReLS0VZVFdWKRWc%2B47EGsmenLliiFg%2BTXLtkMWaaCBw1eqXC2c9qZFnSdXyYOuI9VlsOlDNQEnBLPDMUq9jd2BwnZNEzPB4mk25kr8PCoZ0xDShBJp0RpFugczA2SuVZTLhyrsgOqfj6cOf6X4MWYZn2WFv1ZSFSE5wLHzeiPkTtTJskx8qBhyNyEPFavLi4wTxZj3mpzs%2BwzJwnKSkWSp0OzrplqN6z0yooPge6gGHWCtbWuD7O4b6ejZ6wgC7v%2Bw6C7kSt0grPSAdSVtt%2BTVC64QlfXKXSzv0jY9JE%2FCQQAV1jtw2fzT%2FpjX2%2F1h%2FgmddSqRtRUPB%2BRO5xZRtbe86YACGsIRNXgWleubhnDgL8QvkFmnVJ5TIdqr5pA%2F6Gp7pbt4XxdNmVVqwGR0woJ806eCYZHVkKo01kW8AVA0eboBm3uEUWl7l9jMZvZVDaWTQ%2BlUuA7a0RyEnJMmPMS1tDCq5O%2FBBjqkAacl%2B2tMjUueHG%2FS8phDFK9CuiwxqoEoQ%2F8FQqORYh2CWCHnVKjjl4oEa77NSzzmJLksrTeV7ZTdTvgdkIOa9cTeNjUDdwkrifkh4r6Cf33sMTWpYOM5H56%2B%2FO79rJa%2FJGcBClOvaGCPMAuoqUWeNTPmuC2yPSGH3sb5fJrkELZqwKDMxB26ibmuiTikOQBf%2F1lbhWOT24fqezL4rDLvKHavmerT&X-Amz-Signature=61a2492bf20facd6276de0a532378d713ff5b717294b41f5fb7c371c4e8e125a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
