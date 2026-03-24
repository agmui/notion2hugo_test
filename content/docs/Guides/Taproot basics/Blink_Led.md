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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BT5V7Q%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkBXxV16p%2BZZxXHsUJaSuv8jP0MaHqH2CLS3wYn5122QIgDijeR7XQyFZugi1WTApR2hxvqhqdW%2Bt4WY6ZPVU%2FaAMqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAncCZ8EXbUW9KT4HyrcA0os7V5dr0KmrMwfNMCFhj3NM3%2FreQBVoNjzFgjE%2BfY4853sEaEzDLKiGrEskkP2mcioMTHg%2FqGWVxHxZiwhDbizuEtIKfhVhr%2B3AQ%2F4E0HEIbPuQLTOWJWREy4H%2BQVGURbQYMSfNV3hVOztT0UUNSfuV6hWeZnbLOibwb4qxetLjdGyKTm8ysZyz81KOOLH9VCRPFn78BPX4z9TpdkvbUMw8Ce5uRqyt0zB9uoMobQMe9IQsfrSdy3cAK5mSSGta5B3LZj%2FKDLt%2FulJYDWcag0v%2Bp9mZ9hHpt0hrk1Un7aggXWVPSquPx43BPWYGC0QwWLg6%2FM8p633FUrW%2FEDCWaM6GVL4skoSDSh92Zu40nOw18jVKY%2FxRINYXsFV%2F9y0jtXnbCyqXOYcsA7pwSfIPDyldye3LeioBAvBHIHCVqXOAzqHEIbTc4iIB9zNU8pCTyQtkoQuhLt5C1ktiboVUjmJUOaMSS56S2s46WprNsLMewCq4A4KYAL%2FEbTNyDpRQxEiV3U7iYLFqNo91HxsEeJ2tV2ZPbmaLRvKsq6m%2BDh3HSl3dci1JTnHR5ccjaEDJ0uJsBnvv2LissHAlehm2Ze8jR0ZRyF2eZh2GrOwPIvsv%2FcaOHXBTnIeA8y%2FMK3Kh84GOqUBNSLy5RW2FwhU2FBrTqX%2F0LCFX8eOPO%2FPJ9pkQ71ye%2BIaMWPcnQzTNThjZhn9QZ0LKqqBtrT%2BP3DrkHpuDaYhHFl%2FCteQiEu0O3i7OFcQ8HgTOsz%2B5oiKjlVtJzEJe6aOVBU9iVxl8pvBBHFwtFDj3huxMzGhxnO6Aa%2FedJYvb%2FlSKEb9jkjEo2kdvjfLtLIKrGKVgyroZzXFaX0gQqcsn80nJILX&X-Amz-Signature=8c51ff659bf47451442f959bf28386c49638c426f170435f66700e408ce1afcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVU7OJMI%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVuWH7I9gNL80ch%2Bq5rNFaZeNUEt5WcwnJCBwUHjTfXAIhALm%2Bepf6CipXTt0%2BXoAgxrclbaDUMdWYEvQp4TFklcd6KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2ByhfgzmPHmBnGDcIq3APCKIDI6bHBTvjLmTKOm01HxfDyILQ%2Bg2XMfi5McnizRzHtXKcWNV0K2OiipFYFl7nngmtgQWwEtoE69mdc1E26C9Q8NESmo2nL50ua64J3iEENWKJeEIuMdKB6KSp4aiWKoFY%2FfZ0JnX0zboNORv76%2F5BMJc6li%2BuoLccVWHgwKaC5Uz4YFIROgXwAYGT34OAHZq6cneMzas079D4tt1zh049%2FJt0%2FYNc4GstU69Lwo4FukbYlE%2FzqdaIaaW2TtHXHl6qO6oLlDQmc28lCTCMZDJLkEpQtdANHHLfltMys3hAsQ496IalyEXup1raSqcZu0bLKT38sQIVKXF9F%2FImCVhVs7%2BgWalw2dVPQE0ZqoFEAAew8685Kc48z00rv8BRabPMlzLbqC335Q%2FATd4LqFfTOw9XPbWl7gDbAWZJs9KYLSzT%2FlIT3UzBe1oag6q%2BNdl2vOaQklXnvUp26CLKWjCvUKHrF7CW3q5zKAmfAfn%2Be3UVje0ls4k4MzhPhrpE%2B4wjXUYaCyJP94fSJtYkBEsEPp3a2xklGfKGGIEZFzFu6hEXKQxe9Xq67iy8CPjKJg6USVDZMfBf5YQj4LL0mmHKlyB%2B%2BhL0RuDarAX1j1Lo1E1oCcY8fNCEZfTCLyYfOBjqkAcBerRwp27BgADQbh0oX%2F%2B50BBDM%2F9QEyZ4G68Pf9cKJxvwUbtO0zBB4u6lwCTTQ%2FFeDmkGiJwIDZLI34mXPtkLcE%2FHZ0g%2FE2tUt%2B7DIx5vhXEzvBDfH7MNaoTKtHqBvgxMQFeW4HDpPR0Vhw5vRQTITbZ2KJNJ88GI3oFlna1fKVLo6BvvCAjUja%2BNbSK4Xd9jQjEIbXfPeMeNJVeG%2BKms%2FK6aB&X-Amz-Signature=20510dc1ce7c573f8a805df079a72e733aefac1f00cae0430065f5caa22b100a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
