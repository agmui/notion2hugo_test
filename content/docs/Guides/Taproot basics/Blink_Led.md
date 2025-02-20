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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYZNJIDN%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVNR1x%2FZsqArzNAzADg3XSc4s7uxxPh2GDClj%2FnyHJAAiAgzjEgmATizMpKOJlUHpKWPElJ6LraXWtCVM8U8UCD1iqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs14PgicsQy7pUN2yKtwDa8P9%2F7joIkrkyQ8LGR3uYY%2FaVhOeqILUf%2FRGcC1BRnYJfyyFEomAFbnFdzTIyFujckl7h2DawKO0lxqhEtAmEPV461enmbXvI17TnEvXx45Xf67z7dTDi1%2BPOBHVCgWypg5lKdPOr60hYP%2FoCnrgqYSReX4DSl1cHmSivwuNFm%2Bptb6IkZnNNJThR5cIJE5za7Ife6UDQRUlL%2F61w%2FOlqNXRz5qVrZvVZQA442IzvpiuHYBsI0qznRwLGFcKtianAMcMwJdFEF2PwyRsIGU%2BiyTCROeM6hG4EuiRK6o0c5O%2Frj0KNE0%2FFxE8tECYvxTetOKgL1ucFLt4Q2ZNVcrf8%2BBOibYqSYmScbXobLVGr%2BeekkH6GeLcX%2FGv%2BuoJSVCHLcXy6UQ%2FEOz0BqDlmB9Kr4nwEkE8m%2Bs7HCV4hX6Ruzt3trVnwZamEkyELx5KHzE6I4JfacBVE1u8br5T3XK8zPAtD2Nv0sHejexrOO42LBwYC75%2FlPx5gJfdsaKCx0TrxyJ%2B8K94zvw%2FQ6Ax7c6ZqGI9M5PyK%2B%2B1xi%2Bkr4hWjqow4r4YVM09oeVS7pntSK%2FzB9WZN6sSenxJ0nxZC8WJj%2FjtEXG7gc6qm3aDYO4ZKzmikeYl4JffsArKTiYwkJXdvQY6pgFkFOkZrRgOBM5Jc6vO8SjWnfUfKEzy3gBeiGMz1o3z9obyML1kG3MTIw2CxY2NZZejiTVNqGNTxPsEtuIaNCz7iqE6ajLj0DyKwHq%2B3L4OE1j%2BPjuhrvHNO26dlJUPAocLjb4xlx9JY1oHiamGwuA5xGURb3lizjxfyuhY5Sm7jusDAS3vywoirRA8b2ExOStDvh59E3ZhfXzXD1NXxxEM4Si56NPO&X-Amz-Signature=8522ec5a0677becab79d886a6a31a6e552ba384f80014cc6a447eea0a4a59218&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWR4COE%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu4B913UnTqyz9YIMU4XnsKINB6eY%2FocdSKsWvO94AbQIhAOuXXfZd4UxQMCOJTqdMn5SM3jZ6zQXEl8OMhHXTcjclKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBgD18HvVTst%2F7jZoq3AMDF3D4CyTHvDZ6LIp9rEVHa8nyqsrooSnehaeUO3Q8dcw290FKd8Zml7dqjDjGHs4Zcg%2Fc7BeIAbP7Ny8MrmvDnh7Yk7%2BMdYNRiGv7NyZ%2BlxIHa6SALXJYrKKXhn30%2F7NGjhh8hSYu98SNt5riKlyKQl8SRmuLVqyMhq56DqL8BZFWBfn3Rj5QZZUOgDBnUpBQSZcVQZYR6ma1Tiw9mkug4XjYxBBRFAv8XmTF%2FVz5ImQWuM7pHpIx5z2cL8%2Fp6n0f0mYtHIJyOdForfi%2FXBHYbPHSX7TJmu6QxKMbCBCur1fCcKmdkoqY3sdH5j4wlQIMw8Fr9xhI45zNceTd1aKk8vWGg0tOk63WEnpqx3K6%2B2pC41ImKSisRzDh9gcFy%2BogrcyN2Q9437PsH%2BAMCRpP6ryK7%2B8vifBPzYFsLn%2FFnAgM8p73Xvrqwr5O7hAfEu0OPV5xJd%2F2JrW7pyJWjK0N05Yv7HAPVHt5nibDizKW7qa5t3r32P2EN2gzJlw4mSRu%2FGW%2FSqC4NkTugrQKrvBzGTueGPLOdnEhDdGyPXFy8v5cchJEibutDTFMmgJSzslqB8q4uspkM2AeMKepqIP3lelYrzZRL2bzm27JW%2BEea0nhLUQdvxaXEQ%2BlRzCsld29BjqkAc1MN8OvD1T%2BU7FXjozvOsLruvmG%2BASmW9ZFD27c2BIdqXeMdbE3cLPqEHo%2B%2Fx%2B7NdueQoKo7ZwZz%2BF3BMuaEfCW21Z0%2FL9Eoj2lFR32ECjbZq%2Be6eauKuc7HmIvzRZqFBPP6wSpRDUkPY7XT77qPW2On6h8n%2FzmUCBtkfEPQ5ro8jH%2BfdfDOgpn7fBW96T%2BUKSdsLF65TSxUc0FaNCLVECw3nC1&X-Amz-Signature=24d08e0da574ec051a266c28986ac9a0d56393206d17a0d5ac93b4a9c18ccae4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
