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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VZPWA5C%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM4A7tPOuNh2cHZ6f3T5v5tGWrZj%2FMSWfXo4aDCy8a%2FAiEA4MtXrxSD0NsXjLsDS9MoHm8WqO%2BntVYWdCMY2Q3lUW8qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuZ2JdEd7KNjzxSoCrcA%2FWvRL334uH1W3Xorf%2Fp5rzLTwbtwKyUz59lwT7G9iG4ATMaDjKi4y1gq2A%2BrnCu7%2BcS%2FJgYuDDipJOKEpoDoucsSRLm8bCKa1lrXoEugxcb0JLHE6pHBWg0JWDw%2BZU6FcqPNnzENRF9CqpE%2FRNBLY42YAnuVrfi%2BAsZmI3qY39nq5P1oy9Hba%2FOotL%2Fg9wAh5lhRi%2BxkAdG1ChTnZtzVFLa5o9qmRn0MHKx1VNWET8VA9XY5q1oxhqT%2FKjsa72Z9c6oiA5%2BJGPjBkYJxDTbphAUPwv%2BhcqmCBxGVXg2D38VttZ0DTw%2BWLaoRXKJWM8kjdwXiD2%2BH0%2FLKxZENsaYsowa6MsW0AQB86seXOuCApxwLefBOqQVR1uYToVIag6ltyWHfIk39EcRLThP6p%2Fq4%2BuL7m3C2Ue8jAOep6bBvYToLKGR9kD7qFjp4o2fu5%2Bohv3g1lf1pJxwXtRKls4jEaKhxT8QGv0orePxNEdje4fPPsWcQJCi9lNciy%2BggJqt%2FJwWL3yvyrxtD0MJq%2BUduRjy5WKQ%2BBM8NuMoSG1%2BXSbbuUcA2tVAwgGn6%2Fvk%2FahZ%2Fwo6Zno%2FYzSKxL2Y1GoAlio97BFXpNRRxDA8UvtmYuIfcKw00o90mmw%2FnoxkMNL%2Bo8QGOqUBlR0PV88wgIKlOf0bEhW9SbFc79jq1hmgnA7FsEzCN%2B8vztLoJk2XOa8gTRRmxxPrmgrXKOSfJb0dkfn4uTSSkqsdWwfD4cgN43syk38JaVRbtD19hkLRolkyvc6D8XZBfuKY7%2F1Id%2BrIYyqY9DpwJBLDPJcai7DINw9tgzs7Q3kaZITtf89NsrzzEyGd9cjlXkA1IlnAQ%2FXB38FZdK4k7KFY4oSV&X-Amz-Signature=97056f1b710cba8fe32d612b3215b7f63d9f42e01cfba133b6dad77e3aa40de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V75W2FMO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt5gHiv9vlFN2tXr4YJgy805T5Z38O1T1sNJjLtC3TFwIhAMOzrwfML2v2YGWrihW7tk6onh1QpjY8j%2BdiCb8CJgudKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FZ5PfuvgLXzyORowq3AMQFkn0WOecgxbVlVVPAAzvlZRNk1XzMnWKi%2Fteazvyd2ZKkeq8Xd68Tm1Kyb9Ej%2BYioBWyQopmqUlLdLPDruPUHAU9I838Rn8aApuafIXfPVDbPHCAbTGPu93gG4ZQGa1a%2BhcMt7gQzW2ahDEWaRl6%2BXFB5%2BE4kndE5XKSwLs5ZKsDyNhBWTyFwSW69hypJnrPmJD26sg0B3BZAkn4Jtt80mihxgIF5NTEi60nNdKZLDTpgIBLTSOBCbrppkzsisVnA1iMk2FIhErttIbAeoGl7KxsDqdL6bli6BknspK2oWf6B5k1%2FXmZ2TSeXprLw%2BB%2FJjZrXfEIobgYswDokdlu4PLYBACuvgtvD8O2M9DOm6WQIm1D4rVUKRD6Y%2BbIR4d1Oeuw%2B%2FYlraj7gHy6G3HbItNn%2FgpV3hstPuMtvVE4Nu4f5SHANWBejlIr0cTCMgWpv4uxltKZrNpXfTC6N1RVxaOkhRhJdLkbhJhmrO7j64TMqUiAX1nHk8aQqNSU6OryOy01QaH6due%2Bk5dtJ77YC%2F%2Brrni6JSoBMbOxN1KujNLr4ToPtE97fJXHfHSuBx3O31sdPyXszdAysAiFNb0KpNqMvcmZSmOp%2Fz5NL%2BySjiMCtyY4IORNENIMOjCh%2FqPEBjqkAQaxrBWwsUW5tl%2F33nlexyw7W3hzXAtjYTuFx9VlyqfYGHNRGTEVchzGDIxX%2Fa7ICDeP7yd8evaAWtIUrOUlvkSVzVObLm88g%2FHAivpe2Z%2FiGpVblIZJ2CoSynPKRPV4hAaVSVclJdm1ccH9ndNOgbcJaDKmj%2BF6f5Q2hKPuicMn6RyypVSNTBDCh2BcDTtyF%2BdjKjIulCiXgfHaciIpdzMVXC%2FE&X-Amz-Signature=2c50e5eb43991def47ccad0ac26f8cd70a47cd74608a1ea21ee28fd44d72b994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
