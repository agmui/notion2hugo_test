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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOPOL6GE%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHh%2FJ%2FrekwCF8IZj8Wx00CbBHNMw0vNaLf9NYRHL0J0yAiEAj1p6f5M%2BwX%2BkJBBAeueCRwD4m%2F33%2BOcS%2FRjPGgmvbZ4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9DSE5WOH5GX6vNXSrcA%2BJ0mhQvfBdLqXzwfT%2FJ5%2F8c2vQSLBPgoNH9hz7Fmfgg2Ln3wuVz3tDdoHiApbnS%2BqODDMeJE1AUu8EaDBXf94K1O0K8LB3JG6OSChg4bdriEPfAdkZH8QznKElBohiY7siEv7eUqmYWMZ%2F0B%2Fr2F%2FwXGwmrOtGMN%2Bs9I18Z%2FHa4HhEi5GKF3FKqNc0VOTeaTcjNDN%2FPQVgo4bXGkDdZJzdsq%2BNnoUh73j%2B9dP%2FJwu5tue7cQ%2BlwAa6NWF%2BoY5dGlFarUeE%2B87ZI1gLofJj1RdZIzq9AZN4TpXrKxIugWxsQruCNd9Foh9LD8%2FDcVBnnCs0xEs1d6gA6dR2E%2FPw3mLLa5IPgOs%2BBpaLZD5WWqwmwpcWclBKpPpYjZZtEg64UBzVoQYeDN2Vj%2FGInX8EVSS2MH7QVKt7lkpAr6arWzeEdQH%2F07jpP0F8bN5jn5XAs3qQHCLNDZ2L6UJNF33FXmgZDT3TL33v8nO2SzdGGduX6tQ6qa56%2BdVXrqmzTNA0ER32kUAgqR4gz8R%2FouGtrY3kZbis5GhQZOV%2FY4t5Eo2B9BbLcXpuDccqCHb0FRJjwrIohHAAyarySDz7AAMB8HnczXMIQZ1OhAOf0wOzk%2F6O1JXK5OqzNxZH8AmmCMKjblcAGOqUBnUXmS%2FFCo7IRZiahOQ3XPbNL%2B6s%2Fq7bfM7bJQAMxExObSvmQGvr0IsJ%2F3bJRQYsv5TPugbkuJcpkAFwi6Wj0CdFpcryKFCuMBVuwSIsEAe5dhp%2BC9a5cDPcVh63r%2FXNoeCPDi92LKcCxtW0U1fKdqX8g7oVGJ8lxFNIy8Gkfh%2F1zAmS2wwamBJYV7PRZl%2BoiJaxOd4SDgfQ9%2Fafhq54t2uD9KBmO&X-Amz-Signature=efb22a39470d6f5b8b085a574b67e0366ed78db779b9f174b404e63475cca7d4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OOJKWZV%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQDKhi7VNKeGzX%2BYBQaOEzipnjkjXLKT2NpxGCU5o1IbqAIgK6LCFg%2BN8hJojA7d6qxZhywI9HyegvyhE4T4pxjl4oUqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMULV3Zl5V%2BIhqMZtyrcA8wKm4qgx7XWntHHpwmuz%2B%2FdSXefs0a9a%2BajKeMfl06WrcRkI%2FCRMAP7QicPEOAwagGLYsp5aXrPwDrRy7F10GhsxnW%2BQge5qsefaQHEj1P89xttMf%2BfHG3gULglyEkYgM26Ejs232Ypl20VGwwyuG3RTcv%2FstNlCsSBzmOOSo7Pb%2F6ZsSTHpWd5WW7LQmQy3QYkM7XjqTNvnwlROixrJgMV93CbFZ2f%2Bh0iAv5djbjHkcPyLHxQAUHBDryJYThLQK3ErHcOWWh1JxL9BpJoD%2BkDUxBl019aCzkYQxYkuJh5w%2BfOCSA9y3Yk%2BWE8icBEg%2FnSCffvLUxWlP7MqKK6Rr6wyOY%2BLy7BbmBonCqB8SLHi%2BD5quIytxoLA0gIPiwA1hk8PSj6yjINhxXuPOO%2By%2BEKJjKtDYBC8tVAVbTW%2Bqx%2FjlWhno3u3njpgo3AQVfH61ZWzzPgDiC4gcFPedehFZq0SG90bNIE7%2BF1nV2iT6TDil9oK9P7ajz3KD32xULphkHYMrvurA2qt1O%2FVOnWUwBZzqMc2rehDNta8b9jYwhU5%2FNEfuc9NAfKV71TWtMqGrcGgcWEZmohsh1Sv%2B5b70P1cvzLiFHIAXlW9tznWIA0gOjSS2SsW7%2FCtLnBMLTalcAGOqUBS0BDH%2FR6eBb521vjJ7yWN4H1lOBalDHTuAdzcOGxh%2FzecfcdSZh1Arjkz1N4oG1n8sUPNGp%2BPzkGnArnH1ouf0pRlJUQ9ukZ3leXiL879ESNUu1qwilpHNXeLhAf8GjtmZy5hwA%2Bs9fTPsNjZ6pg%2BoYgzAlZiLonIUaudcruS1w6%2Fawdn1ANSRKFn3wFb%2FTxqoLAaCDhyZ5ihq4xbu2ZiQH2959v&X-Amz-Signature=520e1f829d6881b0608b45474763518ab4f951fbe3989e1972cf5abc3c002ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
