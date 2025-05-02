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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJQECHS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQCMLVKCnbfQ5zEzuA757cTMdzPDs7wYkEepkyAvG%2FEh7QIgDMqhvRyYVZXfWDKoN0i47CPXIm%2FzqtGYvkSQdAbtZzQqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCg7T3qUB1NvBMVUircA%2BdEnsxYEPX3dOyGXOXbzFHvBfECGsNEYnzWQLizyag9qx%2BzZEWS49n%2FoKAe0QpjgpIfHf3riuUVmd8fr06B0vKCdw2g1Q9dR%2BzWYGGUZ69oM1o1casqzw7F7bAmslmxnpbfrpatpXcUcxLCy5vcxlEjGlpDvzymYvIOZz7340cXPOwv4Yu4htckx%2FQUFGJf9fWuYfK3UKj99h11%2BKc%2B7LEEko5vjjNFKWl4ph8OS8gNsLxovX3GbCwyR%2B%2BNBCEohzvpWacxRluYeUlm8YutzRxYpaeem9BSXYj2VonSDVyAJIs4nC5iiKzDkAbsEHhFJ6gUfbMIigplb2I8%2BsAf2teLLNQETzHM2EqkpM%2BwN2Sp5BHb3NnyCswb6sR1bpg3cy%2BUlTEKfF4ePTjTR3vsyj3qcLih7J6HC3rOjhCwQZtielVCiPye6wzdAk5ITP4TpOh9nPV4zeqSkMHRXyVQtH1%2Ffl%2Bh827QG6BoMv4QDUs5MhrbaHVxjSLb09O5JeIPIsXN%2BKnCsIkSFiW5TraoSrQtjDot24Pcj5BDTWMO%2Fke15Um1BB6Lh6SyjuUrS3asjx6DuMH3mtsbjPWDHoVuRc2UR0bokcZJ4PAOaec%2FOESZh7PiPcp2iaPSUhrbMIfs0MAGOqUB%2FX7wvgu1Ddrfy9FprEXJw%2FZPc%2FLeTcHIUXo3uhD2vffCyGsr79PqAo4CLodNNodnSKAoYkKqeOvxkjgnaxDbt%2FsoZZgtbhiC6pPsh63US%2FveQzvNvpuG0OC4bbQ6Xs6%2FV8MoPsf9jCtVAle1OVGeno3WhAhgUxc1jXoh4ARhWXK%2BUnl6GTZ6MhsG4HdYZVoXC0uw0XXRqaZLwtG8eKfYPtrXYHSk&X-Amz-Signature=823081aaae4042d684f77724b18fb2e4d31fe32f72640ab34ece5d0b791f7db3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHCLG7D%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T033314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDkpBjf%2FASt%2BsB%2Bs7kcTze%2F3mENJUR01attGzpziFeaywIhAOdR6%2BB9NWkRF%2FKDpm59aTZgpHlC6vI4%2BSiOkbEOasmHKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAhszVrkCqzHAtWxkq3APxwEJ%2Fvmb8Nsv1UDaRZK%2FKOf8CQThPriQ8AWTQrKzYrMzlpaPvym2owWQlSXxjriJ0zR64og8KaggReaDRKKhNx6JEXA8HfJwxYz3GiFWb9IcmokLxhnogjkZBa9oE592mk5MLp%2FXBNmey00NNvvYVu%2BXljGEu78ivm3cBl6u4X%2BwPW%2B7pJpe2lwux%2F0z0ctS7xlt%2FejyA6HRQkvs2UcHCRMJw6eJsY3sLtV0YOPLgbgr8L19%2B8ZZpNHfBLRTX6qfq5dS4PaDdf6sntJOVuvC2MKNrdf%2B5uUV6ifJr5og1ftvJG6a8GXB2XV5FSiFATjEGvyfnrfH%2FqduVIkJFd0WoKNZuX3CvVTS5hKmWZcFRJqrLXqPjAHXcam0SnnwiVuux9TFBLV5MUo%2BnveD0V8cdZmr5gFEgwkqcacX4fn8kfM8E3ygNGuEk1Z8oZhV9lY4kFm5MP%2FUQClljsXa2AetojnDwEVYpmIvJOKud3cUQ3tyYDtDsw6F4ItHq0vPwMUWdWKGALO4BXWBJ9A4e2OFOcCUOfFfzG2iEOIArEgzwfw4J4ZEWLDqekb%2FdobTMiyCeapXX6jvD9mhPAvC1HRy4rmkZsMdXWCy0r5uXDonrB8VazTcsciPcOy%2FZzjDs7NDABjqkAfdhiZGvVphViaNflWC1f77EWPlW7EnwDQ1gm1HaTJIMJeKCINOcKCSDsQT8KsFnQ9ahotOdCj%2F%2FVrsbS4KGUat67P%2B%2F5OuxrwKm%2BKlAR4PKE1mr7BuKiLSInknXlHbwnIF7iDCAxDBBMAUWJ%2FBNkDnQ8g%2FbrOpEvXR0xYbuX%2FfRVsrzE7FQGyMz2aLxdM3F95TP1he1Vwx1%2Bdr26Ba6zrnTFDvS&X-Amz-Signature=3d03b75bb6ddab9e21203f2c4a8ddea6d0cbaccd37564c73adca2428efe7c173&X-Amz-SignedHeaders=host&x-id=GetObject)

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
