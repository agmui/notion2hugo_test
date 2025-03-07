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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CDDWZAK%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDD%2BSRahe8QNg5XJi9ciVkcG2MtxwJXtkr%2BUxVZb1EUSQIgVWIqwf8IBT6UCZHmh37I2bFCbddXvpT2wYJsgRzvOusq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDEvbMV5y6msLK14jeSrcA30glU5rWhE0xNbwx8BWcRu1Ju7r%2F0peNMeBe91K6Nh5A7tXZUFGkJM2LKuRfgYK3NddIegye8QVOYH6%2BDKojDxCrw47299NLGYzFDAdVg8ZyEKb7d93korAEMAxi5c3uwezcGJSGLEGZ4zCH5g75mxK%2FxdKXV8VJ6L5fDZfBazL0ry%2BPufSIGplCn405P3DNzdbQUdnpSsS64DdD1cjS2O5%2FjAxUULk0b3IIFrxqBfGq%2FyCXhM6nC4annXM9ECRepiGCXodtKAnJKDEUOLk5ikn%2B2kVirPjxRcEmQmSUzPbDKyArsDFpdwQzpoGPMz4Jv3Kibk0AWF0IMzWqqeCSOZvRBQ%2BgtpmYni%2FDb1GURLAQEnIUQ%2Bm4UeiZfpVEqjOgHmv3j4cUnG59wMnEoTDQf%2FRaTsyQgqNiq483Vn4tyaDHyVkEAjFyyr0VE2pibtlzSRrWCobD2zWJKMPgwJiQmT4AbS527R6U0Z7gPtO%2B3InU%2Bx%2FZMty7lxHfH0bBd2YCTDyY4e5wDRgzuUp1wOId8vzngyiHAV8Q7ptubH1cJHUb7FyhXEIeFEKYm%2Fw%2FWqQnG%2B%2BDBWgxzrG6kmsK2B2qCEVqrbAH%2BIDX0wH%2BxgJYftZltbY3Fl5uh3iJm4yMOa%2Brb4GOqUBJVN7Pq7k1zbF%2F3AJu0wKxbkVe5eJBwXj7Zq4qKMqsNeVsmfI8eaDK3IQ7TuO9%2BHLJt9%2FT8cuNeRIs6p9fkVeli4mP4a%2F%2Fx6NANeV2uMZ8WOoMGAsTd0%2FGxodvswG572KP3ZrekRYyGg4ritAmcOszk8eDQPwWSFXHyZcdH7fKNDjoU%2BxhMNORzchhMRkkzI%2FWg8PdJHFReQOdrz%2Fp9j8o0PmxsxO&X-Amz-Signature=777cdbae730b006bc89ce5ba4ace0fb708cb9fa32da729c2c3241a0a0f0a73e7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCT3K32V%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T220132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIDbQhPUtqK7EStsUL2ZmoHHOZq3P465qSW983jABa6D4AiAwWf2UXj1tX5M490%2BJyVZ0vorMAZ690eZckpv9ulClRyr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMUrSqEGM9E8YWGtHCKtwDkx6yW2YZZdKR9Q061zkQnq3iRkng9bhZQ%2BxDACAZQg0jM1TKdEJHBvJaR3abrW7vE6K9Ysq43OzeV3rQgNgdjQZ%2Fe6ue8YV6BTWu2YohppzbySeJ%2FvAggfwkO58QmdAKEeoNukWkDp6m6xswkp2PrWmgS7PRttN7%2BhAcF2srGB0YL2savvg7hb9uBWqKImMb9%2FBJ3IlCGNZlEN5iWO%2BsPUrEgrceHF9WQXXn%2BrIk59Oi698zgkyI3yZJrUkjYC%2BJ%2BGuIW12Z0FUCjKskQ%2FJ%2Fi9mQkjtF2fHgm29QWGRXyvqN7QcMcMU3aFD%2B%2BIlxHMPzJv8gV4d%2BBwcmjmqm%2BX2T2e64HvaDu0j1bbDQf22t%2BV74fgI2eYo2wWpatM6djn4bN1%2FMa3rmHtWJPKLXqbw13NQjyP6J9PfaaynweEowNAypt0aPiVbkX3zypxMEQ44bB8w1NccnUBsphon8RXe1GgrZaSk7oDDbIhhq8TPTuec58W85j7oTgKlgZ9mlf4s1PfB0A8Cc%2BY0BpnHhjGciCCPCSmBQWLrkrbbSf8DM22BXu5YzDV%2BI9%2FguKjda72ostkQ7E9kH8tHQ1BaHUWd5tLeI1nk6tJDDo21gQyUE%2ByciaG2zCeJGonsA8RUw%2FL6tvgY6pgF%2F%2FbUcNqHHTdakPcASToBKH9q440ZSrfI5FdyQ7v0Do4sxQVPPnH6pDqjNCavcKoAXWUZZE4nTD7WhSE%2B58a626vcZo%2F30BPVRbRjMn0kvkM8RrDAyEsTdEZkIBGq4ROtTE2QBQttxl3CVo1Yr8UTcyL4sGsaEFYzCvhzBYEQnED76tEltVEWjXmoEOChmcZo2dEsBJP2sZSgSneC4%2FJ3uml1g%2BSbY&X-Amz-Signature=769c6dc14c40293437b2e4f4b253f7d5a0e74096b968797d2c11aaf655aeed26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
