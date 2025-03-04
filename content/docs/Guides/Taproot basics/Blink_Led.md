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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2Y6VWB%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBHiDpA%2FjvPijKz%2FY9lS7vizMHjrCDX%2BalC339vQeAKwIhAO5zN29DKkpbTn0jrolihjZOdOPp9NdnAcCMkK4V04jrKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuLYJyaMfBsUllLQ8q3AOWpVP2fLF663XU0LjDC9ltJjmGm8XcwB6eQUzuCjpIhiRTIYnrlSNZCtXXapx%2BnX9GEWfzGoD4%2B071Ae45sFYZhxesClXecTMjXpe%2Bvz961UPZjgkU4f7ONXgf1nvCf1GdOoamUFPete3fIZ%2BZs6X6i3TK52IoqiVrEBG2ViYn%2FWkdUJTXbGMivSh1qdHdWdFj6dP0eS6voQYw9EoDG1NmewFSznTOpphXJ9xIDWmyedXZocpY3y3VjSls3GlnCqXNppL37DSZ2yhFA%2BbUP8uQ6SaCdNknasK1%2F0XfycRSvIETfQTQ1l5J0i9EFPl01Pjm5pLiVMA2UAx%2FYKqZ%2FzDe7LWY92eMWxNNJP7gUA1gCYhQenZ5JGFSo9Sh8EOQFOCx7MDCY2i6sYSgs%2FBrwRWqme877Za0onB4HXKc0uuzeBKpHl6Gxa%2BqgR4QI1B0KGdKhAtMBJwyh48iqrZ817RcUNXeTqL2ze%2FqnZy8vmi87fxX4ZmT%2FSIOzlhcUF9yo5oRDtYU157dUDTJVzVq2MAonD6MKeDI8LtvCcu82cbCNC%2FaJinp7Scc%2F9FBouqTVG9Vutk8gIiq3KQBBH2ZygNAY1rn%2FnTlqTNJfJpqXlHM%2BXnMA8SYXbibZzdItjD14Zq%2BBjqkAUqXg2sO4tmSHzU2ajvZ777WJoX6I81TeanVYLME2S5uWdIZ7jAy2%2BsZRILRubiTybkPP%2FYae3FfRaVpeA2mL27a8kFw3O58a4EMu6%2FAlpcMrnL7xwDa%2FPIyQ7ZoUdIZ3Qcmr1Oeexd5KZOWRJc37sMKBmCNiDvH2XUCDeGsVpO98NBbYXB89wzAdsyLl%2B7kgy%2FErAe6U94hdzST0LhGnKcdeT%2Bk&X-Amz-Signature=0abc4ba9cc76a02bcccaa795258553889e5f8dc9c3045e0dbcbd0f4ed841131b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5TS2GJR%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHzm1eZ9muVR0D2y9XbEGHgZSpaPvHudIJnER%2FysRyR0CIGV41GSY5kC%2FX10Sh7Y%2FPvVWQoy1U9CjYyxy93vSrkqDKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxERtHQakLAbihpAhUq3APcXOJDeTRSwl2IJEAlFvfvD14WM92iv0xXQ7CpHJrFOJ%2BNNWyEnc3a3xyQYE%2F%2FK9wLjPDt5dIhd9WNvi0RAmQNNltsHUBwhqcAGMYcOWvzy1CfTFzJ6GEdw7gMNhd%2BAjrMQqMSD0Z5DJWZZy269O0S6CIPe5dQmHivVRxqLWd%2FaH1zeqigLkuyGsULX3Uy6qRfIyGxrhwdSGEgPIRPIvJLMbieBqMp8XlnpnAE%2FxWFxGR4bIZo2jmLXcAB7wka1PosG6Lvn1Aa48%2BZTYn21QE07ZNx%2FpDy15lOGViyrHZ4eR5Vkq4D4MO%2F8KzTcl6oS5W%2BMoaY08kHcGC3QsuNmaSRkvVJvSDRKxlk7wVsvW86R%2Blmi2yJUhsMD0TWPwpEJP2cenn%2B5Cyv11i2vGUxwnYoITpnNxFXkuJqFSvKa0USgzR9fpgpLhybYSXtUt8rs7PWNjcEYHy6z3bFKNcVPHPKQWOUo7iZG%2Fb58YnVYBoB%2FmTXQMObpAhVcno2cdn2RNNEy7Br0ZD1s8vXy7awDms8opYf3IrEVwKXjBnVSaNYrnJtkaI1UYiN4zUM8LvkYuGNpuEbM%2Fwr5VaUsFJu4CZUhYbEImtqYNBp9vbg3CAjLeI1iIlHitv%2BhymkVTC84pq%2BBjqnAVLvE%2BEhxklV9u8NBxpkLfBUAplydEgmbwZ4FfcSTOB316hXm8SrP4j7iITt9t4KGUOS%2FvQ8ZtKAThw92umYGTW11sBaesBLuoOAeiv14eddUz0zx4XdKCAEmmsNu%2FhgwvDmGjvyUuLFppL%2BL8SZHBwlClhof%2Fu1MH2D4gp0H%2B%2FPJ5Biy2OTfmCimdMtoSGwFb6dSkVungoG5LhqsP7ptzMT72ShWYec&X-Amz-Signature=6bef28f8e3dee232b794de484c2e929cf8a85a84488b8961189fff3ef236c629&X-Amz-SignedHeaders=host&x-id=GetObject)

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
