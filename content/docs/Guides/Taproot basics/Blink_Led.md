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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBH7K6BD%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDXQXYsmB73vA3GcSfu4r12xHTiRTfXNj1hsUogH4s1%2FAIhANy1%2BvQaHGxaOF3AdZq%2BHUULKa6i6xACr9MqlV1fU99PKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7khimTX3Wlt9YOokq3AO0SayGlus7rOEAa24%2FzMFX7dV3ws0N6ACmkPflI3Us0%2FcEqItM9AUsD5D4oB6csuIcrg17UwldARG9BI7k7jdwTme7IxEYrzrcV6inCuwZhOxZ12smyokjmgovOp7og%2FgBa9fQCAFOxY3sEuX9d388%2BTcLOesqYQWLhhvwfFmdviFYEp2uCoRAbkV2cEyyIE8I5e869NnisviBx8EIunF659OuWQWSvzYeMsWUWIeKuvYrNTnNPlkp%2BWFwiXY%2BpXPTU1J6TTpnwOXNnXbI%2FWYBq9vMEdEBFgfkNdtHujQeP8cZ8SeFJwNc4ey3eSERRHKeRNBRmWUld7ejlJYethrV8N1S0AAoImqQloX3vb4iJNk%2FoJhY1IjQ8idO6lHZCZ2x3hsb5raJzaYxE1DvaNd8EGE7Nr3njEm%2Bj1F1txm6Te5HdxLAzUGfPO8Yw3QkDo59cIU6qJZm28XwW8jjYj%2Fa9nIrrg0KwT8RLCOekKoZhYFs3OmvNnO4PHo0yxrnhZVwoN99QQ7kFPfbCO6rmiYmSC80VC3WzKbcSx30aVdqTL3Ymxn6ilVOQ5J7kk1jwgwp1zI3kE1yq%2FWksn1oupoSowfGRz6biTd9YT12qgeWJd8xmxz9YzycaPpCjDCrvqDABjqkAWHELy0qcqK3QFJK7ocjGNcyiWnqekVm06UvI4ErqhHjRTmUoPU3XnBZ9%2BvTYwol3BoZ34ihqck%2Fz8WGFAx7TJWBbCgkBTyYbktIsxyyDHaiEDcSxRLzq%2FYoy%2FRYbsSktmhqwZANS2Ara5X9g7fIFzB%2ByHq8sQ7kBCu3RZjw%2FInqqldMJaGkUgiHOJ00Z0oJxtHAFtUNqDFmI7JwExiHyLuVaYf7&X-Amz-Signature=79648802ed3fed11d045f5e124ab82fd1b4e4d8ee3c94a3f73aef0b3c6aa02c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXH47N56%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQC6Zn6VkR8oZZ5AIkmiuJdG9geqgE9Z9fLNSPLARZm8sAIhAOQgNo5ORE72e8b%2Fid4YJnQus5d%2BnwKgX7mbU4V0i2vyKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgqCZekkLKWUvLhIgq3ANGHqYJ5efOw%2FlftPL%2FtwSHl5yv2dRvItl7d8vF0oMdD9pdywuaz5yaQE3PryzYNkxTgiRia7aJChzYjEmdGgIgHhDSd3L4cHvqpPQIBR7zMfaHhaAZi0V0Iy588sDTQpy7JLfWoPP0Td2zIwOjcCpRztCbWV%2FviDwKxrferRNZNsB06w8O4nD%2FGMQnQiPazKudLyI1%2FMiKpPIYPLOs5DGv5Bz1nOLdBEk3ieY8qiXcS3kxuizYwhmdHwd4Pdyj5HzgYt1nWAENLD35qH0rjnSebVOfDLHFji0HXzsFqRybaBxPvzTKmAk3yDk0hduhFaK3sPggnHUS%2FAmtxSLQxAgLGwlbvEtB1UV06tg8QJyXb%2B9lBqMhiSoDLwJQFx4BBLcyvQwWVh%2BxC2%2BgaS5CrFdGjrH1qbT%2FYiPogvqILqtP8PwkwWtl%2BEY6Nx5EEtIBkgXpd9419W9hgJt85UOf1rkeYlu7zPUXHV62dU4CMK%2Bpj2r6EMALQ0UQB1e9qhOGrhvEItN7Qs%2BHe1aI4zEzJUpzVUeqZx8Vm%2BL24KfQrpDQaz4b8bZjDJH9ajQsN04HIfAt4kR7GZGLI6S0aDM4qwALwMNmvrQQuvpVhfY8n7rfirh%2BB1%2FGVH7FITEbMDCpvqDABjqkARrqGl%2FiFiAH4wluvao5INqdpBeWm0JcBDL%2Bf4KpvW4om5pqLToAxBkDmm%2BnY%2Brf%2B0Wk3nvRG2MeLMzYPgq1cjjlxGNfWYrZ%2FbzL7GxngqSXMa3VzYYeD9VSjKiIelD8gbQoNNXytcA08vjHsK6hjTEGmZLQ8iHljDhek8iG8oWnhozlmZADDzRzQhwu9mkYQMdtC6bemoey2LuszgHn%2BlH4hS7%2F&X-Amz-Signature=0cf8d9f1027d6af9c7a67541e49e487cf2306254fc7c1e6c76275d291a938022&X-Amz-SignedHeaders=host&x-id=GetObject)

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
