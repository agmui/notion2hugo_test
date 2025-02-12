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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAXQDXB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjuWS86dtsXfrNK6%2BFg1Ww%2BwhjRO%2F26%2FTrpBL%2BSigKGwIgBItp0U%2Fd8OqChP1h7pZjSme6MiytwpmdIUtGfYpAk5cqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGj8iOXpRLoper8FgyrcA6tJ%2FIrDpiCiYR2eUsZtk9n0eIBV3VuMOvOqsEUti09y2cYYSp3ZyYYXPJt9gRUTvI6ykuirosm8fTvoDpzamaUq6DHgR1wnYmKQrGAaXXjyb7BtQ83%2B9Fd6YXhZ%2FEBfgrWVYT8%2B6FyDC0%2BYyb4e9qNq8YhFZx6OVn%2F%2FRqfnn0c9AIctkLpSfhRFYTOtf5pTTcMU2sb27n7wDt0qjSxebFrgGy%2FOJWLO7zDzhWP80Si4Ml2CFKaEkMIys70XcBhHR9SrdsFSQd7%2B7SR1aQAVrvdgZICkOGl5wLblvT2yLNX0UpGG8omd8r6UTd31TyihuXYvZdpro2NfzAuS7vzNr%2FTg%2BsUt43EOnSynxvA5dFlK8EaGpwEXONMd%2F%2BIE3%2Fe3pKFhw6HwJ7MXOGfqYKOX%2FR7DNV6ivn%2ByXfSU2bd2Kz2MzZMEzLqIsxvVqzIRnpKmPoL4XUetp0NJhdCYRKLO2Ss9lpLEnOL47ozhN%2Bo7fTty6jmbiNvP5rfTQDPwrKyv4IQEbzk%2BuBoGeZmOCCwlOGRHrXaqQ4untojZJPuNbtlSiow%2BxRBLqrwxHDkyY23Qp32A9iK18JmPbFT03Nf%2FI5iKg1EPvjA6Id2HFHXO2UTk10%2B%2F5UbUJGz53bcRMMbMs70GOqUBJtgEOzJFTUuqFXaKBiVY%2BDHH%2BUTc5rX1yKRpNOP00Kz8quxgmoMeh9dLxzGmr8RtZJ4et%2FfRm6IBjnXcfRZco1FH%2BnHussOAH9zy9MBNGvCKTacffY30JAcBSGrJZ%2FeqIglrFonYJrEOWcYq00JJbfceNAYz8CMTEfjlY6xp%2F5I68%2BbM9vbCWgQl1eZxxY9J0JX83P1HrGq2TdexBQr9bWVVD6zI&X-Amz-Signature=55fbd38a48833822b7b9e88210460faa2e689dc5f03282ade3170af4ea09dbdb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFNY4HTP%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSv9Mwn7u02zdPtVgN%2FmcUSgl8vItsXVzeKDeDaMZwYgIgLq3ba3AA65FrwHUADXrzGj6%2FoISmaNW1Jhmt5u2HoMMqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAG4p6XnJyB5UMFC1ircA0rItP%2F6phyGxfJJ86pTBwbiKRoIfGK6nk7mEanF3iCWQhwV64KUZtI8Qy93INdO1cpt%2Fj%2Fl6LWkxckfEEMLYl3Q%2FDhotnoCuZYr%2FBvAHcQhPK2c7a7r%2Fba%2B0KzG8i7hmRDPrw5MlAarTk36VUUmVFF1vFyvnyUi2PQW6woOyt4Xa3DYF1mRq9QMcanFBi%2FKI5Kkwm803QJaHrr24zf0nl5Oeuq0AuMy%2FfDTNg9OOv5AJjMSA8%2FJm4IzbIQ1oa49PLtQnChUXs8CSXx4DEGCEwSAvEkJryTUrBMe34xodFkNcjmIOuabxdOsjKfId5yIL%2BmyQQlO14%2FYpP1ObXnNEhGNia6CCqoeNcx4Dyq3wH%2BWR8fRarluzK9wOd2f8yL32wsAXOv%2BJsTiIS6iYqXete97wnYOu9kwpBvtj%2BwC%2FUs1SXGIzLzT7SBWlgTMpr9LgvcKdHAZCptjp9R3P7vddyHqtWC%2BZrTJ6OekxQJ6jC7Ct%2FKNOg8AuR%2BH%2FWjZ%2FRghBODiYQRDU62vBpoJF0pIpeN9SkRPP8QWlm470%2B7hdd2rAYwDCqSbZ5cgJ%2BcD6TB0HQyZQo8vfL6TxLEvwfV8LSYF%2Bd3J1Dmqbsm%2BRR14mtcxoS5v2bTFDu6voaNXMMDGs70GOqUBhiUpIrZPvLR6GR2JnP8LZ4N0YAjm%2BKlsdQqchfwEqLLOLs5yCYI0JtBZMUGPbjsHu0UweLJ3a9nU1jZPaC9YHpQBYZIp9X6SYuXqooaV8vhjJXcoD8aTlDlVW8syI4zTfUZKUEYy3q8jpjuQJny2ssSGX1gC5DEOpyb9bY6F5hF9JzG0DbhdNC6cYi13QW1HYO6n%2BpPM0fr5czaH0iCZsSDrABQ8&X-Amz-Signature=9f4b31a342d54ce762861648c9da5b90a37a122350f68e70edb3455e59e525da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
