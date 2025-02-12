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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUXX34KN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWiP0BGtQNqu%2BG1%2B3hSLn7bQRWyqRoGsYvBecnaLx6pQIgcyBfzx7l0RESRxolVv9bQ2SrUwFpUIfoe%2FCE5wZkqIcqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCNBURRIiUQitwmhircA4UMbruEFPkWZwNg5ig5HJfVPHfPmc%2BzkwD1rsv13IpWCXg%2BjHFWUd%2BngSlTGRDfcMzLfkg6vkhZTBDymFpI1rqIngaI9JTLEl3pjbZy0uRnt3ifolqRMvyg6xmLdplQbWX0aXA8UrTFY2fT0Snsvaq%2BlnNNccrtC9Z3C03DqgMbxg5zY9hFoGOe6WT0VVuqS9vK9t3hu3rist9ryut4S6LdKVCAtxyUC%2BTh7K%2BDb37bF0EBBUFTWgo4z%2FE6rF4hWJlnq8Q1iCGhgfWIiBwBsiNvcEEFGtREeFncL%2F2ym9z21k9HlMQP9K5%2BWas06bJJgCbIzreVbUxPGIaXWU146LKwH9U8z3cAYshNJrlRRJjY6cMC2USdx2gEaO8dinM6Rn9skWBmeiQul9argAWBHBXZeLvWWEBiqoJmh42mITQFNaNAgBjIC6Am3OR0x%2B5xtW5d%2FYcrdLlJ4VyAta8fJ%2B5uMjrWnm1P4JFtk9IY%2FuMnVGUTeesspSStpOaoKDRlbgl8JQZbwfdSKh6hlMc51%2B4CVdSsvScvu6WBlNXUwQq8vZe%2FF1S4xace3jY3f2PcyFgim7C8q2A7VrfksTn1BzTdolABvKVHkZ4aULmp7gTJYm57wTrTCZwOmqk5MIOosr0GOqUBzKSA1iezdCqOku9ruunlb3YsXSat3KKWwA%2FEbOqinN17QI2GklfFqlH5sI%2BnHGTH%2BvijyTjXgwvIyW26zJT4L9HD5kHgc5y1NYR1Bh5xLlEYN6zNNkuUho00lCWiiA1ha6Q6ES4YmOY9Gn3kXzvk2A9Rkm%2F5i7c0gLQZbjHpsX7TaBAfQdIf5Pw4Z%2BgikUxpWL52GgviaXRiKcgclTmhvO5NP60l&X-Amz-Signature=548a6301a0939501b4f4c1f928db8a517f2acc65eb3cba9da14b95de3981c2ce&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRM5FJ76%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPuub%2Frh2Mkxlk2ViuyT4EPdyCMHdpxk1q%2FPfsmxSqdAiEAk2j8ZtXdDr2wuCppBBKGmqP024lDMvHCeSvGwFREW1sqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA97QLMuuC22s5tShircA5Jovf%2FrX48vmFoD%2FO8bRs7%2FiD2Jm8C0%2B%2FdiOcgqgFuKVw73sTTFne%2BIC1B1bCZq0f%2B%2FdvLmsP6jYngQSyypylQTokU5PIGtEc%2FLiKaOkjznLgIg6jBNYwz%2FI%2BguVn15ljvV8bkGd5xz8%2BrcKUaImassgYzYQvrjBHmgiEOGGR%2BQX2KGoTJK%2Bzca18uJnNNjfB%2BvkKeSnaxwHZZstp7ouldHLJoYPfwA%2ByqXiWOtuQWhQL%2FOK4kp4W211Tfas8um2%2FA5EbSgQ%2Ftgcllavhde4s5k%2FEa7HBg6ZnzITslb1WwpOcXxOve9fQcQKniSw7vdG7X92yJngiQk8xSFxEN%2F3b%2BIu5%2BRFaq5v9Hmy1fhaQp%2BzBXwRAwBTy5hxkph6WGEQ34Cjl4i861Cqf9oKICCX4hm%2Bw%2BB23xCR5ZMlGiOO4G3f5dt4zFIC3GbPj6BGC3G8Dfay1mWZU3u1AJ630lc0a7Xar948nQYAMeKDZInwdhLXcZM6urOVUT17X5ef5FDQh8NKcRdPGmLMeoHt%2F%2F3jiMxSudPZOHri6pjZkd5sYKJC9LeA898me35GcMSdLjYgQlagsv%2BP6A659bnbHfKOeCjauFczprvBBvsLvTAwA8y9FD7Fn1lkGefQKv7MOiusr0GOqUB8gb%2Bto9EMFV5WjJZOiR1EcqWMShTh2PDXL6b9YtMTheiTqVHZJLDmJvozdJQGuW2VO9YyYdTdAwenY6PNGwSizSk5DTzL7N9Vhb%2B%2Fhn5%2FTnBs9jHN2kLlQn1wtdCeKrbG4OlmFFogxlJaYs3JrqaTZDvqYqoTQDD0XbvYdy4qqrlNsWvS72%2BmzZOG6yy%2B8IfmjubZacoxlLaQECgVZIxEaWjznEC&X-Amz-Signature=7559e7b8c662a42743c2d570977d9e838344cd9e12248b06a7f0b9f0d9736993&X-Amz-SignedHeaders=host&x-id=GetObject)

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
