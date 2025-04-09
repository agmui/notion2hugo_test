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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MA5XR6X%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDVr2HQUgY4ofX7Nttx2c29PR1POuh1JeCbGay4XHOTPgIhAJWIq0DyGXGDgC4F%2BYAlhlhjP09ADleKoni04zVSZFTwKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4JXCn1%2FQBGVAFYVkq3ANG8mO4DeUIm7oURz3iUGvT1EaVbx7w%2FT6YQCeP1SY7%2FypgcPSZnZlojkxipiDYoJNTKdqmnUlR9hHIjiUBZ21h1k%2B4%2BugHs0sMH4pCjAGy0ltoDeem%2B%2BJk5gVoY0JdHWubxfLxwqtUxSiKrw5TBtcfI8ZPfVbQbmSiCUrUXatgG2HvEDlXojESVw8VrdlvRK%2FVm%2BdY5TMQxi9sDvGUjph8NHttDrmDdWCK0vlUwV9dcnH%2F7ZdboLRjIrKsLx0Zky4G4JyQwiK330TuCI64ERfR0j8Zn4x4vVbd7WAJl0xqe%2BZReDiZWUG7drN3sKaCJX3rNIvKrEPB7Pdh35lr11IZ1ZGQP%2BjYZpfnfAGKVHk%2Fh9zSGQNsZWnFwp2SAynuV58671vA3RpmhNjBIKhlQVgo3SksFfWC7UKc6p5xQVQm55yBx58a2Q5BMuEWPoyTVre4Jk9kXZP3jHz3fax0ZFQDD4ubxnGWWeGyNL0s6LT1VhbQVWRdV4RVbOaBj7ilyUcYR9N1%2FbAFCXZEEA6ZH8DJnI8asILeh%2FCvTqHCZOYewVudIJltXcbR7jzNd%2Fk50yd1q4CP7EDDNjeQupRFwrhmWAiyt%2Fyewncp8RqJxiHS2nbF5nNeQQF8TzW96zCx%2Fdm%2FBjqkAdu611owKyWo7fJbHATnM7okee%2B6bFpJf2HrKQGaVclLMjyxO220Yx%2FsgdgoJkjghMuAeHpPHqqSIfxnSI0%2FEYGQrJ37CRsb08Fbnp55N6E4WBbLwrJRxe2X9hhBhmfUtVLM3VuFpuC8ikO1acBnWzWZakP6dW9gwe3Bx4ikCicGHboAi8lLWmjROL3%2Ft3GdB7hwLZ%2BpC%2Fl%2B3RQ0JOGvS%2FJ%2BO%2BRP&X-Amz-Signature=57a0db467c9b6cdaa5e68f822d5b165bb937707588625c8e4321ae5a4d6aa9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N2AXWBW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDvr3%2BE3IuBfFOhOL%2BT4qoJPxXIighV4eiyrT0sY6Dl%2BAiAw1MhLZ6r9j6iKU3TE2wj1fV3hkpZxMVPZ%2FkZ%2BLXbxuyqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhIkJ8VmqGWZBJ5llKtwD3Kxn6oT0CqMDUj7%2B0mQWnO4WSESN1YjCPJNvmNNHSJto8aI2qAY%2FweQzgiXacTwyu9rBWeGvFvCW8A7JTSHeCLO3UVpwX1hNgVRSnvvAyqme31aayq8bc0wicWH99KNnvk1s7b2UD9q8j90GD8SUvJlvq%2BZG41lURtqze1FbOdvjTyaiE5w6wJ9rkTafkoe0bbADvvsgoKlmWZUW5vGJtRMMjv8t64IJ8e2m0SaYY2SHDcQ0LUhgceBfZMH%2FW2espWSDHfhirJ1ll1nfvTXKMYr3I%2FjklLCdC7IyCu84yr9ApmGUwkkw%2FxoUhwXaIBXIgVNjqqeBnsTDBzxLw2QkrxwDWl0fvNw%2BHvkW%2FXCg67YnbRjMmg%2Befr9aGNwHeALTwvH7ZPg7wtAml%2B5WlJ7jT7H955bWYsCwC2xwbp1t1m8S9XZEUGKFtxfvLPBHGqK0URE%2BFxjoJEfG71B2YzJH7tZH6lh2skC5PhlYX%2FH7ZbpdaiDTT7unvkaCohxrDQb928szP1zOSQJ5xeuExlCm2duVERPpECN4A3cq1bD3eI8zO74vwrn2ik1OFgYb38uCbqs0C3kuebNOl2t%2BkTkeXW1XmHU%2FY4eOqBzHVSFz40BLNooRQ3ZF3IMgLr8wmv3ZvwY6pgF8kUkTnb5vzTYVLxXMUQPZK4k%2Fm4cwc2oXj4mYKVfs%2BVEnj6ZgvycD5h37pU%2FnUfIIyv0AI3fw1ybNd9YU329itLDg3s8p0LKXibZUAC%2Fgh%2FCVUx2LvJjxu%2BPcyhBQrCoIohwX%2BMakC0GTG08SEhRBeQxeOCe0QewMg6pyhoSxyJoxD28ijGDUkwcs7C75IQs4ChQy%2FIuWljdtqpw3DBe2M%2BP6PQuo&X-Amz-Signature=49ab594f7edce0e9f8c3f631c97acb7d740202bbc4071f3cc61a76ba542ffaa8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
