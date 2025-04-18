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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP7SWIEW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhOa%2F8WUO%2BiFcPqsCMi63PJ7TdJJp7t6%2FICUuiSdMSgIgIki6eoEBDbIrUC3J%2BtyVv8Jv5tHmmlzj4rZrtKIyy9Mq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPdDCJW9IDPAdYrglircA3vL4sOImtxZlxwAH29MjPOxuvofd12KxU0o09fZzuJVe%2F9HLe17Il3CpojBB6DtEnuBgSaaDvhQqrixDZ%2FoF1ZJ7YQlBAo%2BMx32ylGeL%2FOuMSse%2BZnqEU9KQgL0gObLO%2BmmbK6YMrKt0kXkgLDyiVhOuihNq%2Fe8PLPE8Y4zk%2FKNI6hGhW0rNerljT9Lp3OXk62V1IJG%2BbthgTPQpUf3WT2t6Ue%2BNAFnXoIAkJYZGo4EekBJfrmzoO1gIY2WUsS2AziwtMz5GE532gJ8e0wjvtYK3%2FHIfckqP%2F%2BAGnBvYAzQuXOz5Z6FjNb%2F5q3zwZsCXXOXcYm6qTYW80KVjjgVEPAQHbQgJIQympSpR83yv4qvZ9VwxB2LfiCsH0t4qznGpap6wN%2BvzsSHdBRIfKB89l09VYDL4oVOEfIuwH7IJW8P1kA%2Fec%2BdUpO%2BJlmqTwILv3syRX6ABRPiNyd%2Fb%2BI%2BNvbRabABvqmYH50pfSmT078RzcOM%2Bneu0BjxWzA8ZhJldit18cHgwxZrLwN%2FWNwLY1T1WC%2ByX9R4EhWvpb6luZ7hd7v7BJf4bP3eI6FgOki0EvfiaTj2iRowSJgwmA%2FGhW3qgJdfutye0iVy4aNg4EN418ThRoy3rzE%2F6WnJMJCOicAGOqUB9ls%2F1uyJT9t8VCYCW3pTfwWmz3YDZ%2FB4YJfkO2papwbbYxBafUGfjUJPIOzo0t9EhwtbttQn6ty%2FFvtVzkLUmC1HgZuWRMSjjXhAvebPfzwUMT0LpCzC1XFQKyjSN7pG6ooCb5c0M9Utbuv9NJGKX9pq9rVucDznKl5dYwqgNjzzigD7uUT2j9EEIm5%2BbpYDZbQHq%2Fve223XY%2FqQcokbmP4FLn9d&X-Amz-Signature=e737111c8dfc5029c65f7b34a447e69e0dd0aba81b98929b0b75e8e6e5e795c8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSNXDCZ7%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T131724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1y7v7F0Py2IXn5U9CfXDfUGyro57QB2oAe1HacW55BAiApzgPrdSLePwc8bg32O%2F7HHn1vlfCyKn1g6iakkd8x4Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMyg2lj4bzjAV7ujpUKtwDAfkfIAg2lcYOiGZUoAS96Kd3NaYgdYimkjBRbUCZ6%2BBy3h%2BdN1fOW7gwDve0OwTgBCOsCwT9mIFmM09YHkIzZ800%2BBQBFZMootB4iheuAWVQv3GXB8XezsEtbQR8wM1W0HSvLOv8v0MWSKDcAaQK%2FuewODGFbdPzY0hg%2FAPtqFbjqHJ9WyKpG2qIFmVUKza9fa8HdiZhC0kvTlWFZLQDpbgJGw%2BV2nNj7kojFcs%2FSqPziwpp8Y0y6kHZ8p8xZ9MybOs3zf76a9RDM0QVO2xgwNnzYhJhjB3ZUFqYLMcRCkoc%2FpzALi2BKb0iHO6%2FSMWsbnrARMW%2BS8tzFfFvO%2F6wPk3MeBklTDjFnotXiTQNxWWZMRvy2Zn2IV5EBMYI3D3X0%2FLPDjNt69n2hqWRnID4Fdzx0O7aRP74Q7AvAKAezC6ZJWDbJ4FVmmMkqk7P%2BNYzGQshMiuKf%2FM5LKjuAX%2BzJJ4yIkk3O0JSOQTP9lnE301HAz1%2FcEsPBUegupcUIE%2FuqCY4aWdAgrT%2Fjc6p31OrVfpogblbstVSXPBJkhcBbubNx2Urt8IsOaV%2FfW9A6UIXKcN%2FMiLXEc2OcM%2FV5g4zAh6rgTWeqPNGJJkweEBRT6w4KoSRLrocXyt9srMwoo6JwAY6pgFKVquMXl2y0NcW2lP368vyf96PKWDgPrHCGkKVBSZFYpKwtNMPfeIjojIgC3T4rC4LLactgTL2u%2FqEgALKkK7cKJ1BwJ1WUmv%2BN2LA%2BFPjgmGr4ZLhiLNpYrEDN%2BCZRMAyfmLY8M%2B2f37uQaGHDndhJ1Z7Ni5GB3ncr5pskV8lhxQdf0icQbUzmwjdgs0WIL0zVrleCxhtQWugbji5nMHwcaIszOc6&X-Amz-Signature=0d14475926938743ec78f3dda7cfe2f7c1b68cf67f078191228432e59c52d242&X-Amz-SignedHeaders=host&x-id=GetObject)

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
