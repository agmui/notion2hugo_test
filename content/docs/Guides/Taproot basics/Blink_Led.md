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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCDNIEW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCICUr3zTZa1xVpSclTdrhHtco6nMSN4dIuELKoYsonuASAiEAi6FSOIMsaDLkB8VKmgsr7QmPjb58jtH%2BNL%2Fk09jEnKgqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeLo0X5ovWy7k8ynSrcA5sKMufjU9vmqAWZMfq7wuw5aC0YhvCGJDGchJzxMnTu6kDYV7zqsvWPOi%2BWylPl4oXNSAT14cjjxonW1LlJVqP7Bq0qclp0PxJ1dS2%2BtyG%2BGKURaNKIFJJa4UFxYnW5zB23DiCUx3UDWZ5YVksR%2B64AnAyRt4Dfk0CATSVMQJmWhstldH%2BGiJcVrt1AjJiaYmlRIQJHirHZg5Q8bSTu05jPdjHD0%2BsPuqxvD10aY7v3Hx5%2B%2FCSFKfDYP3vo4AV7rmai34j332Gvwj0EhC96HVrlEW2JTL5jGs1XKj0oqEyDjLaXK3D83P5DhuZwpJqWERPxprZk5NGAi2we3BeURjt9DaztxE2Kbl51cFuJxcFuBPW6NkTghLFRkbBbAqKWsmmwQonpXG6TTN75F9Qv2RT%2FJZ79gGm2%2BTUjFmEhOclNbFOBCnYjL1d1c8zExccsXfg19uzFeoAuz2onr7OW%2ByV61DPB7zkOGwCz%2BwS8oJBmWkwopoo0kkPNleAHhCdkRZ5OCi9nMzCcDmuiiqQLX6pjK1dXYfLIYa5LQlM2ChfYn%2BCzLDJoAgBpFdsMa3nUOtCQnVgsfP4xGsVgZRRcbiBr2F6tvGbhuazZPg73xjrGYcvc1p%2FyAKf0pnItMLvxn8QGOqUBDLYHjWx0G2xcf6L2nnSOcejhOlMSC2e0NSXUNLJiIsNqu%2FXWGjueCpPAiXO0f6uuFr%2FR3QaiyrKZ%2BaX1PFFZAHx4dTjbKp5d0CbDVTIAtEMpJlBfUVn9zkDS32CMOOjzm4bp41NHFBwWoKQimejLWyBX6rs5wUcBYymXyiO3wmjfZn3NkqPMvNEcArLLLfFCsMg6al97CcDhrauB4LvD3jYCTdd3&X-Amz-Signature=954295629645d2c16d8ea0115265e5f2ec38aa18dae861663546c983954aa1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNTJUBXK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T230944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDooG89D4IekRclQpQ31%2BA5AlDentswGqiHnwBhe7dkIAiEAhEwaCz1BrOOe9AC4fHoh17MLY1hWEjAIFAIcdMhl5TYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLGkHlm%2BSo31vlOeircAyd1ozCeIR4Iw%2BgQWuy8abp6xvk7ktkwecJ1L39zomjYrl%2BeA1U1UZScOE0MDNoYlNWpgbfNdLQ4VI7u6NX81nm2lgKY5y7ZY5d26f5ARhUWQxNGasmxXPezsZ2UxFMdZG2pUeFjU4r2KFAGi2i66%2Bs1bRAMnIoBPQh8lPBDFa9NUw78%2FIT%2BlycmzfHRbpBNGzIoGin4trKQu5Ay%2BSBl2jX8w1cbYSa6Mq9EOkbqgITQ8UDwWtiil2TecRRA2MgxoJqi3fZ7%2Bjqk8QcN2uIunWbapGKdofm9aYaWQsF31PfAUn1uamqlfzquNSCdccJpML5sj%2F7zSvaQygeoqMOFPqiGYr0q30GNQJ19EbXCjY3L56QVv26E%2B4wbQ9%2F37SFvc%2FzyYDEukA5PNmfhMvGbRCcKwCeK9ibT%2BaqypLkjzNii3Ev5Aj4ydIp19ZDjN1BoXqMS3cDezX4KPUNFYQpjgzlo30V8KXZdKQ3PiHvPAJFOQ%2Bmtzec4d%2Fb0p%2BN8%2F3K51DpTC%2BjqeCSOVNbC84Xmvj%2FnDO3H10sGrVmpSgntHJUuVBzdD%2F1NFnANk35zV63sxNvwnCa1K9U9bg7yZoBfuRO3ijKqgFJF50umvvYT%2F0o4zNoCEkAOF%2FeqrAIkMNrxn8QGOqUBwbXbng%2FzJp8%2B6f6Znu8JmUZdi%2BLZQmr5A%2Fhj3TYIWymmhtfbB%2FCIAIEYM0BvgXvFifCzxJCpQBUtUr0nADELWRpS5B0dDlinK9hKCxpnTXVR7z0VAE%2FbSGWnqPMPovm9AiTzKw6D5H56q6MIvbTSjI4RsrL2wrByQrjrEC5hC1qZaAVREU5WCTUirEqtYCR8LSP%2BhiSZ%2FjWo%2BBYdShpzs6GDFjXJ&X-Amz-Signature=d1816aeb5d0e1c8b40451c63510ed4770e5599dea22ee7737b39aa3f9de2252c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
