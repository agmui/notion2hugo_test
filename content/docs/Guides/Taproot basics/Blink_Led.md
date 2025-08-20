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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677LGSW6D%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEom9jhpKbi57O8XXfw57kGEsSblrYBdrt7L1rzGOUurAiAgWgH%2FSsJBh0SrbugC%2BiUQDEy8L%2B7%2FNU1nmsb6RLP%2F8yqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsyACkX1MBb8i%2FRO8KtwDXfC8jS3meC%2FVqpZa901Mez7kdrFOep7h4V9tajq%2F3HFT%2Bp8uykvpR2hgHpF7IMGi5hJco8OXhD8QdmRf%2FFLwOrS3LK2XZ2evUvClUx%2Bf2xUzPDxuNld9POuqbPaAaT2%2F8Fjc7Pez7OIFWVir7DludQKW5v5O40VWbygeUrTa4DD9lVTx6Slma7zl8N0oL9eYqI4FQpINjIXi4Qt69lqOXbgWGhtTfh78mqmYkQPBNpGxgBj3qXvzQfZsvfHW2%2FhMC%2BEaAjqIX1%2BGL3JcPuDBk02cRLUMUmr6ST20aOcxKfQQKYa1HQ99hWzrskq7fPx1mWxC0WvXL3NhJ9DbaXUuDYyd4pNytRHEZP7K4NfqDTXQnIJcfSM19c3%2F2sT3fJrxGcSDQMy0ALmP86r945gwyXNubdQIBNd8CSpPgbnmxQWyQdn2tjATFQpXZ23lsyDltbGLUb3XKdcbT7pHGsiih%2FM7fnk9FVWlt8FZzLKZU3xTvAjckzKGUmhU66CxOF2XmDngmmM97nFft6blh4IPyfWiTGjX61TFKgovmB1U78pOD%2FLnw%2BF8vzxsLdyq4Dmim2SDd%2BhheT2FcfZLFUl54AyWp5RlslzmFZXFCCyZzbuItnsLdjF3ygKvHB4w6KaWxQY6pgFDXVHsLRXr5Of1FrXd6q14P%2B52DlX%2Fk7FPh6bhO8t8aA8sbzs4amkMSjV6%2Fak18u0ym92u6Z3T2F26YRQueSX3ltPtWgyDJmwTHfdCExEr4FGhos38DNATtYHMOvM5i5uLk0XW5%2F1Z4e86oUjrgvwpy9UeViy7W2lCqXckLN7f4egxFkEXMyHFvFYqP74Cww28dxIu0mdqn2gtoD9bj0HF8yWJDSDA&X-Amz-Signature=046c30e126f93265a7eea39a03610e5792598c284d2a5e35d11fbc770c1c34d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H6EH52N%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHosDdu8aBicBKvYcomRWu7HS9%2BWN4jdHTiw5cEEf2POAiBkPJ%2BMIKrQeN8bKlZ4OJJ3yZa9%2FWUp7gFcgi3vQFEpjSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuPXl8%2BvZMtJkTbAKtwDwLsIlNzgo9mbZ6hcJFsjdGPUgM1ZFXFr%2FgBvEl6qBdRNnW6Apb4p5L87nuWkFAj1yjDADC%2Bxdb%2FiYBWP3u%2FP4pa0ZNVN0d92lMNNyY60N24SBFbvi9EIXN%2BoCQ8%2F8647ClNutvWCgVc%2FK0slhDMQK4TCAlKqmaNsyXTeXltM%2FeeqygLuKmEhiG1I9iJhp94iwvUTLA6z%2FMc5GNxwVgT4V0XvAbwCVS%2FVZ1zGfeA80ckl3575UpJI1tsFHW7WzoFHXDtMw6omZ%2FMFgi3htNJJIgY4Z91TIPD9iD%2BsKVKyN4ZRP03yQTKnN5DTWvL%2F1jMNMeB7bBumrjlzm6WB9XzvWBA5LM1LdLbcMwZ5O2dMwsrJI5goQF5EbJWOkXeRgmsSFNOXHPrTlnObTy%2F2MoN8MmjNTzQbm2bj5v1PxSBvN3IwnxJxejgAO%2FL%2BJf3A%2F3mgJSuwyooDtswGIm4CueSyvpy8dBdvtKxRaW%2F6Qb30x5UMcxdron0ufSNQoxOZzMSxOso%2BFHQNJ%2FfSwHO0L0akb6200KrhFdID8Hjzltph8Nd5xv7vzLRKP7eoWcVTLt%2BcOP%2FfH0hmcAVgkkr%2BavdkzlhJowczJSMWRkYUA71o7QmlrlihWJGW2ZNaqYUw2aaWxQY6pgHdNAk1nT7nN1vTBXTATpLK%2F5uVJD0eAWHsyoIJGXznF6eKovBF6ZNc6elizg85dr1npIqwXHtv4p05rYtbNbOQxUaIBeLix5ZGvJM8Z7Fh%2FvsidtR1qyiVxP0vrHwJ3JP1idhY%2FSVBhH9%2BgeSloO2lAP9VjnkM40LjAFnj08wQHxYWQeUfoPzypD4KJrqtKe6sa2F0G7OrClPjWyF4v3kYBqFv0YSm&X-Amz-Signature=7ec002ec3128b66a88f3a52851d6f9148b767b20bab1aa6edc48069ada477f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
