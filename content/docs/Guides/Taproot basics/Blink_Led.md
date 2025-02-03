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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SPROZQP%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXN2cprIkh7CYRVUibDv9lQZXNa7COSQZtCJot85tJpAIgWwjRH8YW3ya0hAayFClR4uLNkVec%2BbeAPwSJcEpxz4sqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK0zq%2FFpF6TifH3GhircAzyXLB%2FxhYXeAHbNaDVqaVgGVJOBV3TgStKp3dYxosuvMyY60%2BUr2mmpZisrX34ukoPILDEBCTScF%2FzL7wEzlQ0B2VQAVBkMO1%2FNsAiT33ULIomRPA4Bpkt%2FCtbgIL9x4%2BhLR53ztdEeBCmZ3lsbOP1tKDloQyZYDEvt1XDb7qtYQqjkmCeiDziQbJO7RPq82PQuk1dvocclghv8V3cct64vk%2BbBYQW8WBVBf5xQzPIj2%2BJtU8UDQhQDvgBRVoqfqGqwQ9DEbwcVp5aSLDspFG3LlRoqVd9x6BtxTE6KgBwXHNXRe49AziL6rJ8hHuAsSliNL6YbzRTPiHdfTH6HRMqMno4ClCT%2BHiWklOZvI5Rp6Gml6aqZRUwOeRRp5cdEE%2B9GtPLLz21%2FdEtRLs1GUSMK2%2B6oNS%2BGCZMpCo8ZDisEG6KxyyNknsKGGx5s0D1HXPd%2Fa9KtLQk5yuczHJr0y9rmZPflw2GloTqGPjF8SbYxUkf21hvnied5PuGTgfjGWxS%2F4q0GaOYxSi%2F8CxcACTbYj807tMFvjRNP8eXa6HwOuLaxf7bMJDRkFfB6XJjXLNj8t8rISqHWywsMo%2BqYaorbs3BVbtH2V5trcPnnsMLkgHV1sRdim8dM9UUHML%2FBgL0GOqUBnJ%2FvNi5d88ZHprMW9o%2FPRaypnHq%2BRFAvTC9MuNu8a8KXFp1Gw54oueSFhNywTMy9yvyi65GN7clOz5KuoqfDJ2cJx6%2Br%2BWEzX%2B7hTLvQEOm5Mjm0Tw%2FBGnPhXAfXzrMW0iySw%2FSHrTbP2D%2FSm5ieTAZmEGlVpd8CwpY7RQdOg8WlaL6LAvK6S%2BW3tG%2BV6m6HFetE2tqdIh2PIVd6cYIkg%2Bzd%2B6T1&X-Amz-Signature=248c2f91af8747c705c81fb7d2d57bc0f8620e4ae57b93153074cde255f348ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQR7QNM6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T031207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDldpP5XfQc6n4SAf0TugXtzcPWcPBjqflgC5V8TfgbFgIgIhVgJ0K7FZBcb5M%2FKSBUV1Aaf3P1El%2FN3a4qicR6vRsqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDKfDSZsrM%2By4tW3SrcA9inWA6RyalSX%2FVp29ViUDOuQTfEB4M1JyjrpwfqA3CoOqzxfLRvFjCBmXTi3i5pi%2BkGQoYI5q6iGjECa9aUx99mtHNyeconUNmF5EBhi34o6W3WkYECbLZRaNJgd02QwJ%2BHpC7jvdVKToDrP3soZ8iKDHRNaLkYF%2BDRQ7GkcChB3IYGYr2pTH7q9FcZ7CqfPa%2FqPvgTlKOoPOTozywPZZ0sUzQLSQ61K9d3cIi478E%2Bcs%2FoeBeHUlvGo0EGF5Vf3OB%2FugYBXpc8tIHOMA6BDjhPW86MTW5iprVMzc%2BcFsRFpfE7se6VBvkQX7I37N2siID4ZKZqej8%2FddiCgKo%2Fho3cmjJOtYnA1B0u13j64CcW3Ly64oxr%2F5i54W0bpoH2spUyDYPli6MEkCdVKKt4zv1bBfWbLqyykII0sK2%2B5ObsV5hhNmZKmkPOOb4centwX82WwrBM3JKqKV0TTJQwFYVk7qXCP46QHaFio68BxNb8EL2XtNCuTN%2FM2W%2BnOSdvbnIJV2YcCZMKBprBLbUmIjm9yHWndFRloScVTIr%2BotZps4yc%2F25pQ3tpOnU2iLiit%2BIEV0b0ZmrH83BSjebmvuHNhbyetJRCafcsZGa%2FUS4YbvMhIbXlaMraGQalMNPBgL0GOqUBNiUORvTpijWUNdP5qNt4zjHdpfCi2ZdDgjkoEbstVTc7kVO9lLVj8m7K5a5ee2m%2FniiiY3R6R%2BGWvdc%2BJjhvTDG0KZQOOmYE%2B%2BfOew4PipzlsJYm1JRlfhXrS8VNfyQFZPytHHZnqfKPAGJ45aKJFzzYOJHQxNIigzEkOlGdFAV9ZY9XXn2ZAZyWnSVhaxXPb2QELoxZYfpXNYvdrWibriYUkqUB&X-Amz-Signature=430b117b84d9584e609f83647927d6c5caa65da49789de9fd87438453404fd8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
