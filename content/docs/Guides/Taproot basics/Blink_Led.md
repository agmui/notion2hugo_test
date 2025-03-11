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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTDG2W3D%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD0JXPIxgUYvm7EqEFDLESnZu2Vpvc%2FwUebiofgeSS2ZwIhAJ8iIhPKl1YLAHdngJlMT8mDQ7q9E4UpRrPuHuoBzpadKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FNlk3cX9ENAOGn%2FUq3AP7hZ1ikFtb9Ur8XFTEM2uoPEOzgz13WIRuEhFCjwkY01NSwpw8RzM5xnCAchpKKvTH48w7eZSheAw5QBy%2FQiSKEoE9Ylkur4aaGQlQKHPtoxd3pfWTTNJyxbjDQOrrbb6pG4O2ARTJxcTQPRg6atAiM4zMT7XwxE0CNYjRwA39TvoNLaZYo25rwmoe2eFy1N3e3POzHxp4dggiDnRo9TuQoG8zEfSfWpIMVxGaQLD5TOD5V7NjpAeTXoWwdvbBrHbsioHH%2FoTsMy7pRH7B535k7zG68UhrdHUmnB0HEWA9z%2B04RQBa6zKuX0gKAUZk3AZCUykD2Kar1pN%2F84qWPffWTgFgEnBHpW3J%2BdQ2MP9qCsR1fGYCLLBKsIDOpNCdJ%2FO5J68ctE9w9LhA%2B8yvcw9hh9ZDQV2wtucMrUPNxuda5UNzX1bXUvNvzp0a3VtLozTQGL3ZV4J8s2YfdqTo55OtLOjeIZDLpKq31h8qiFLjGlFXq7euGWT6Npy5TTbIn%2BBDiLAX5hw0fF%2BSeMK8Gf24r0SftqqwPxPjEwQrEEPR1OPYQndkoltfbHKzVfmj402KtXg79zbfETwZYXUFBee1lKN1evAKXWZymY3yCEFf8GCABiEMYV3ep9KmhjD38cK%2BBjqkAWOdpGd6TnVZ8NI2mdhSCOxt62S6ATSnGCUMThin1ZnAPwAMMLPbuX3UO7Ik%2F4fGTqc8TGPdjaxWitIJXgfTOQS1SkliBPsSaipsb7fYdPhwQBD4iMpjPgO8TyBnblPTnMQgOumfdaEmA6efJEQfwpqABkP1ZCEYlei69IVHhDw5qDEZ9fvRO7i6q7sUdciOtKWLaaawz1LMU5MMXtFjVvJN4fVz&X-Amz-Signature=d65a7e990704cee54cee8dbe27d2d0a64612193a4b8071ed8d3eeea142b70cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ3WFO27%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQC42uDe3VZiV3AaiSwE391isjXkZ4zq2YuxWYqM4Bh54wIgG374DGwPDcbpTaIReSqSq2HTaiqrY031q2fGajwPIuAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKIrd5OTe8%2FLy6zKCrcAwUJsP5VFzzzlPzUS2qItMSgW9q59XCSM0r2HxD8WaVscZuLsTWOwrHhAEfVGA%2FFBObbJ1R3hKlYpSNz%2F6y5UE6nVqrabp%2F63EjU3FrJoedkDfxKsHlWIGhvsYf1QtF8yB%2FQltebQsYvLmRCxeSj7Ru5YWez3iW7iQWwUEa1cehAXGRY5LjkMkbO8o81YVWy2J20PZqZ8eltqiwOoysSd8pBosxnIZFMcNFg4DUZ4x1wQMaGKEgZSbQb%2BGOXKcO%2BPiq6FnN1S9L5%2Fd%2BC9qsC5QammqRuy6JBsb8At4vpSbq21u0gYsFFxxh3VYx2GRZQcpck8QbxareyiUuDNqg2Yfy84PhD9UdYdBEwmu8jiOZV31WPXQWo4g6CrdywtmpIekBQli5ftdfp%2FCOr2Vs9Dp%2B6P%2FP0YRo6JMn9rglAoIRMatWzdtjObC%2F19FrxeJiZ2sdscJQhu01A9wN5j47TOXRXcU76U%2FtSh%2FwJIsuNiDIhAzWA23EL9GDlQFqq38%2FR%2Bva55SI7%2FDH8ryi9buraOGzlVYMS7ny0XJwrc%2FvTgsZ%2F88uXy8ewkgtxkpUYK5E43IlS0wY%2Fiu9VVrsRu7BJw%2BpEIDN4tVnC3PJdwxPzIj4YRaVXZKLhm1qXK0bPMP%2Fxwr4GOqUB4oZ96IG98tAGk3VjG3Nmly3o5%2BxPyzi58GjICulzorHMtSpLdaU0zTgZhzDkvhhsBEkzOQ5Il4T%2BHcB8OE71xAZhctxjiQl42HT5Cu1bdtz9RUOfy0930dzOLtT97TGqbiRKDwRI5EbWRRaVK5Zcc8bg666tdRGjf1tRzrR55XUYL%2F2IbOhGSxIqzMgtQgdcrGwNN%2F%2BBI7TjI5KnisuXpUxwWgel&X-Amz-Signature=76b09bed4c5dab24f2e9877063c7d2638effa54de335437c4b484bc0458aaed7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
