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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAM2ZRCM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqTUpWnJaDaf78PpBpw%2B%2FrNBneHTGmkVllOWUWe%2F0l4AIhAN5ELpBRBYSD2sSf%2BePeGSMRBjBIP9WmAAbAyjje%2FqsbKv8DCHMQABoMNjM3NDIzMTgzODA1Igz5EqhB2%2F9LNxGOaT8q3AMEpBV1qzJWDG00U5yPEcm0lbCTb5m1HCsOn6oxGhUb0WR9zmrGZfUiUg%2BY9EAmkwHbY0nwhkJ8bGtBQ77jZ8YS1Xmn0zoEqyMzAE%2FhthOoISCGy%2Beb%2FFmoupzQEkAK2QT%2FLR5FW8erq9SRFeS97yykw8BvtI0MnNXd1RuE4fFBCTJt1LCVc4orVp%2FaqFnEVUMhoSux3V%2BjIeirDqgCsT26VJ%2Fmo%2Bzjm6P7CMYnp%2FKEbZdfUQmj2Q93pmzj6CxbejIz1LYCkmpCzuuS4T%2B6y8LTwp3qeebs28J%2FWUxVopTQKdV8Y5M6sfkHqPyhfFy5%2FAnMk78fwec68MxPPyWZqTkF6RUtWndJUGQHata3uKXjY%2B8pn0Qo6RlHeV2DfNB1YmZynGK9DBuLJBAz9gsmlWoopboPx17coohg0uEHkM5ETTkn4jrxBWlm8Y3d6Ofi0ICKiHjkh1tDGBpeV%2BcqgVYuD8HOCyIDB06uF676UQfInZDBiBfAov8vHR5ot7rxHAnpsBr%2F2Vfb0Z%2FUfYI6EtO81HafaKQT0XZecIy91eN3RBgiC8KGXqzNxveEz%2FnR9ieglDuS0eMaKyPMwlyXIEpsbTZKg8PimNLCUADgEKIVTdx156WAgEev06DNKjDVqr3ABjqkAXoVngx9FLkoJHCIbLZhBf527ssH9HryqWFOtqPBDzkXoi6UqdcYO7I%2FmT7mmJn5uuIDDJEYRkjS0%2FwU2Ns3U3fkFbAkKY2VT%2FhkOi%2BJhEseVmHprGqELnOZHovsq5diGbAyWkobZXCorUQMNESX5qSjQOT9VuLxJZdCOrLYGk04f%2BgqPTTZ%2FqekLb2xYkvWz0M4V6VSNQGm%2BOmmI03UMI0w8zNq&X-Amz-Signature=e28431f6a4794ab72ee551db8d3c06c7c208575ec2fd103bc56d634ae4a17fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCBFKPQ%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T104246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfGf%2F1Hazdq3%2BfrXR%2BMmAIQSiVE0cwNuKsavogbT92hwIgPY3BFRBObcU6wmVRT7r84tuF3Udl2hkagKhtDTDZxBgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDG9U66ObHVJdZnmfxSrcA5N29E9lLzejnz6QJRU%2BQILSFRXrWIMfxX4dbIbYh%2FHLbId7oCCOttlVga5dqU3%2FyHG3Grqio7kFYu5FpaZbpl97BE7tiC3sjxD9%2FINVUs5AQl5mthPtHXSCyzLktb3iDzjjACQBIaQ%2FX45sbQ0arHUzos491suBTBSxASRzLYyzKDiowYsHMMpOmp1dqYmI77YTYIYp%2BhCgB3ApTAFhj1ssRyQ3lj5a517j0JzfSHN4h9z5hu18FwzjwEzgJF0XfvRE7qCHO53wO60cIorctVV2%2FmMcnrb%2FlfyVKCcZALWL71NZoXI7ic24VG9bW2Z0MD4%2BPXBVvj%2F2CiBpRa3pF0J8QTtEA08Z8DUBPOXkv6buglhjwH97UMWAzQblXGZ%2Bd0gkMDhKxl9eP9TbipyMxMWY%2BFgsjtEsuP7rMgnnHnN12S7LkR6ahFDw6yfwll1IYsGCYJrZQLWXALRJQNrQ%2BzRxgBShlfBRQcOzfp%2FyRXeDX2x85uWguM%2B7RbgaFyQjhgXtIPv0dQR4qMhjM8ZEF2NE4%2BgK3B4Kzn3I7zUtE5UAmVb7mrXhEHVw6K5W1x3Pn8%2FvwLH%2F2MR04jQDBtuTQMS37JFctZVBYvk7yiol1EFyIc3bf0wpy8dFCf3IML6qvcAGOqUBmrBM85lfVxcBHm3nVyQmJpSHvK6ApCcLJAMTFFuZY6X3PTUMU9xP5oOra8XKe1A%2BFAoGYkDefewLe09WJ%2FLfVFBk9jBNlXzsxoyth8LEVCKiHve9gx8HuZAHdta8xGeAl0UEiOwktE3LH1iMAXu9MhQj0kndyD2aGHfVCpOGJsWtKaDyVa2jg801Bl%2Bv8O%2BlL1bLwv3mt%2FHZxhaibo60hdFrc2s2&X-Amz-Signature=54170a35ebf52d62e2e023cd4774c2ec7391962c3cda28baf890883a6a4b8c78&X-Amz-SignedHeaders=host&x-id=GetObject)

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
