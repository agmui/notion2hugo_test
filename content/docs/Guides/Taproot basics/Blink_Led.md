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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673CHKMIX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAhTHobcn0cVkOvpMz9WT%2FzxRcasO5dQhX1doMqoGG%2FNAiEApUELkEYcBx7XJ5%2BnCNyJ9J0ujLqk5rYSnplQHHaVWHIq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDMBgS7iadkCo%2BzeZoSrcA5W3jsSQNC4ChcIKH7PiqOHpvc%2FEnFZBmkyNeAxDHf3Vc9WyO%2FjgSzfISudEtrXrEfnYhX7yFXTuxwADIq39B5PlRA%2FuX%2Bgj%2BqnfTbc91LeG1RC3Zo9EwAox%2BgsjLBxcMYUH%2FaxcnlugBnHvRTcNU4HChJNQIhonFhGpVcPw4RCrIy2fyZ7XlC6JBzlQk00nrHdmQYi7OP9JtQviP2wUEJrMjP1xMUqZs1lNucH7pYazGJqcxWxLWt5QTxvOiMT1ysGAW2Ur3u6Q7oOdDSXShXL08yrHj3nFBLLw3vfJ3PjIP17EeY6xoa9LQfRQGTyYYtmFmnZleEDDZzZTLTim3m1A8%2BBAGWeqQe59LE7Xbo%2F0YQsUcwqz%2FN0RKClmMbk4ByUdxtEvs6I%2FzoJxicVH67wMOpjGH%2BA84dzwtBFOjPYVAo%2Bsn09FOuFJOtvedo8bdMRqCRTJOdzM75F1un1fT3%2Bd6%2F%2B%2F%2BMOyc1FfLmQyCxQjeEf0%2BGjYw9s6%2FeM6jqg5nCZLrV5B4FiL30kgkR5f0GCQus8PVqW%2B6bH9qkKuLsGjzEr1erQ2BZDui6kHIBgdLeq05Cqycfa%2BnK6d6eOHy1wHyRirJqE8QY8BFfiyFtBzGl6qCr8SkqpHZSmtMKee8cQGOqUBHg25VntJfWoufIgKvR5vqy91m1YD%2FNKZi%2Fz49pkcbf8p3bEU4R6o1xio8juLxC56WK5APqadH7aI4NwRR9ahVxjtVrJ3lrPlXKkqmiV3a0bAQtz1nKgX3kafbCSKpbCgWKG8NCr7fOdW%2BmveVUIcR0IZ3EwtuMFkZrjFHy4QOVULzpHd24xO4FTIvLiz%2FlBRJ4zs26T5%2BYW7%2BiczJNyhu3zv5iuW&X-Amz-Signature=b99084e141175e688fc6b8eeb53ea15ff0e8c304a5f6934d91c88fb5590204a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJP3XPS2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1H8iH70eKWHV59DxBM%2FskQIaB%2FrZvE1rOU0h5KzEHQAiAIQODqKPWKX%2ByMSy8IpHcayLnQ2KhkS1mtYhpaD2u%2B8ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMVClI87kuORb9xX%2B5KtwDLv4yWwMCRKCZ1dhW4X5fEhRxIZmLMM1EjyEehdlLMoY998aTAB3G%2BhtR5fhe7%2ByLFdg%2BYBwJGNM44UpJDWirmsqaEtaipwZRDu1jK4e%2FtIYdKfnP1ZIkbST1TKh%2FubArHajnsyAlEHQpdJL9EMR5YtQgnGCVsptr2TewyKNtofs7CS3CAI3V3ShjLhy59bdkApE%2FgetmALjgJ%2BiN8rDXGe%2Fos%2B5pJQMqsFgTJ%2FySAP3EZlQfpZBqGybpP%2FxRpEfH9FrJJIQLzR5b7RDipnQnvYRZ6ChA10U8BAc4vSKR8fWpJuYWgXTVIuKSMZrggnSwOrSAhvJVreluXblcLLa2ev%2BTONsD57pMvK1MsbeirONnYkkTWW9tXNe8%2BowmmWT2W4gUIWXl07u81UVCbTaNsrAoVEm3yIEIx9T1n%2FzCMii3Eo4CxdsQdaMAcJ06yq62gGuENZYVbUblIJMNtlck9FLhv8E6%2BnPEnhWJexhcRS%2B40UabwMpnZ%2BD7GkzX63S2r22FlTWxpy3PJHZeE6Vs1%2FwKiVEJ%2FubuT0Yn78uvZDOYYUUFuMWmqRS4ogLAKk%2BRJSAL0hKvwDrJ5vnc%2BG5hc8TjJ9qINfwqKq5oeask4lQPw4V8ftxyacehutkww57xxAY6pgFR2a0DvzKQU37r8dzmJejSYVEwfdTGorNOWD2ieHmL0dOzg5RosplLTVRVK1tBP81KPokU2NvnlOLQiE%2FDDkBK1CPpJUxI%2FjNGeOCx5tBVk0Nj3NViS%2Fut0d%2FwIeXPZQ0SLwurB2SqjtWlbjt9bOh24gfIQAtrhA220PynurU4d7KvwSX6yOSnekRAGRdrsHBAzcLZJ7rLsE%2FHgRiUcowl4UL%2BFLFX&X-Amz-Signature=6feeb65abd395c0c73e490a12a88b8e7ec46518d107a293799c4a94db9ba6d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
