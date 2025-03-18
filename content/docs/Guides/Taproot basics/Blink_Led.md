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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643DZNMR3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6W%2FD9l8bn8dGBjlA3k2zUqdg1Yu0YGxLDimLKoA%2BiRAIhAOtBjoj6XDZY1RLyUfnk%2BhVPAEWaaJxSO7R7i4eXUvX6Kv8DCFYQABoMNjM3NDIzMTgzODA1Igw%2Blkr86WWlYHc33JMq3AOqn7B5OV3znZPl%2FakAhm36Yo2KeXnikI%2F2QFZO6QlMUHe8Aspc2qkY8qRec28YdX7VbbjSs%2B1yRxIowINx7bhfYpJBDy6UZ1QVZH8JPzeQdCEqNNZRicEXDqGs50Ih5Ox6MekGVv%2F07M%2BWOH1WnpVYfWgbyN32DUCApF8kcjrJHdRf2xlevHW%2BY9gca3ey5QRQDtTflMwAkpbca%2BcBci1HsPBpF1DwlkulhFYWTKCBJM4zHHziPhI7Os2Ry3OBagpNUAR6km%2Bw07ik3iC7dBQmcHUnCXUb4fW%2BDEvkCHsuvrthjHCRHhFpNqM866TyUtOvSO6BxJA%2FHk9LI6wZwLjaUJdH%2BArg6%2B7ZUIzjYCjO%2BWuzTpfLP3FrLA2o%2BRkURuGuKtuxYTNO6J%2Fw2724jNNpxqDuqL31VpCkjmcYt6bV2SxuF9UfIiR%2FJqmW37xohFIq3TbQeP61PcRi6Zxsk5slbaEfR5Rd%2Bq7nbhr7NTc2mmhDziTEn3qO%2Bn79QFxwRjaBte4rE8lbfQqoy1p0JircH%2BtCQ0R2Grsn%2FjudbYleupLBtdrHBemYiDXejsujO%2Fkl%2FUjIvAHP%2FWqds2n4zjqzO1RwD575uqaab3yPxebw1sfSdT4Os1HlE%2FkynDD2huS%2BBjqkAQ9ekFA05dgiNQWqRG4fMthobKt6bx5mP%2BV2XkiG1%2By1r3qLByWoLn%2Fa6ub4cmPKQfwHzNZ1jEbFC3a2%2BcZdJCjAvIgj3IPlpEHpKT%2FXlYfHVrnTIt70ZfrGDA%2FLSlFSUiaZ8rlg2gD%2BlqBWvoCfUQmqdiZFIa2u3R2y2UKyJzhay7ZmDagA3QscVqXlRGD9PcnECoSK%2FZqAQ4SrZGn4IDwJWNG6&X-Amz-Signature=4f6e4629335f1665ac1eecee74d10fa09ffd41133b43e66349c25eb6a975b974&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNYFX424%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICz4hA6G0gN5vSfiq0ZuW5ZMNgwm5iQjpC5Czg8r4OsJAiEA8n0daQtMNwx0pg4EIePL%2B8ksCPLXlylsgjfI0%2BoSnj4q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDOsbFpAb2UF7Q3p7QSrcAy9zZM6BByqOG9wVEBfwrPz8xgrxGf0wl6JXCobQitLjEY7hePb9fjLGSJaBR%2BQC1%2B9EGcl%2Fe0Z7t6EzS8TiWoSGA4RU64Go7h0ZEdZbATkzhSiWVbPDH52xTysv73xt0uX%2FAIgw0DlMAe%2FxESYZEghcgmyGyr4aHIcLrKBm2mIGtdNcL1h585%2BF4WT0Urb6LVppcrGcK7%2FVlkWunR96JRygQrd8EX4dwAabiH60nw7UgO%2FfX5yjSsgRHU6G5N61L5U5QBkhcB9g%2BwIOwtzgvIehVsuJuCgyuYl88PAyj%2BhGc%2FO9kWKsKdgWR6HFBSz5soSUBjU8x5QYae9RB95wh%2FwnFkI6EcmlfEfSSnBfkQvrF0mRzymkKW3wmFOeI9FgLwanZfEXs5hO%2FOOHjOfklW2aRaZwC0KvefeK9gpy9CofqqsFqEWfZ1Ug30pQ%2FEnMiRpLEtuvL7D1gEhKTA7RHi782fbxDFwgA8x0wavdpr2HD%2B3nPFTKWeP2GZZoolRdX7KqEAxlf5cVK0s1QUlhwKKs%2BQU5LCT1on4fcDBdDgJ4kNljueuJFli2wO%2F02h88Ha0UN22jBhEX3%2BbcQYnen5%2FSWvV7w9mA6J8grXrEI4mqu1s6xFHqww50KNszMP6H5L4GOqUBbT2qK%2FLcNQ8CQ3buB8AgUjXjyul6I9xh%2Bcr19vqttsbAKBOm%2BiYAigOVQuoI4CXQPSJRP5wvdG9FBjFk3B%2FZBqFQpJVnGxOnamWe3fj55EkBDe2nQ%2BxGeeNIqRSiPZ7bYNDzlTPrQf3f9rfX7fmetuuF8fKE%2Bagljgd8OgbrJILw22BBlMgV%2ByS0R0u7KqgfDwoLD6s4%2FhVCxlFvX%2B5pSa%2FYGSqh&X-Amz-Signature=fd2596514337d2463679e672a0687252c02f0492fec1ad6e6a9729386687eb85&X-Amz-SignedHeaders=host&x-id=GetObject)

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
