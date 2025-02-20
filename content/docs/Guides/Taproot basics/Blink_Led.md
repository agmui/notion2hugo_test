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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKQS7NA%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYfDXJWqfI%2BbFK4JHHFReuaZQVJMct5HVejkhDG4gPCAiEAwTsWEEA9gSRNv6%2FAy%2FahjKiZrW%2Frxa2PTrkIvmSx%2BrMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMiDn5IsknmwK6x23ircAyVC5RzeY7SWo%2FVZMD60mNU50wXSyiFPgFZ7ZcwPy1EFQFWwmSzAgpgRjg2dsEZ0w1hzaMIU6v8IqA4EklvTUOs9LGqC3ScOoyPmAyAS84y8Sux1GDwzDYeBWImtPDnX3Kvwfk5uLc7Wg5%2Bj%2FKIzHffNiShM8%2FrdWIbSEdlx3uiMlDMb2OOizc739OWuuQaM1YRA9bfwuCBMes%2BLylzqM3EcUCKz1OyTb4dIdOGHx%2FrWjj0FjHqIq%2F0R1vwQSJCL89ciUr9ROH%2FsjtPwSRKjP8OYp91KEKYRQoYork%2FD0s4glZXxKoKHD2xvagpJjE4%2BVZJ2VHrkqaWuH5yQWrqb5PTEnVvC3XV3suKW0OSp18rmFfDprQagRKDMZtRUeuKmwMav5lvmvBq5yBAu3MEES00HKsAvlArlURKennDfyrL8KWlzPEfsw6aSxgR8D5b9%2FLqS%2FD%2FuAMd1kxOpUUEZLNHIM81Zk3jqY3lyUJpd2dAWXIDuWrv%2FFLXSYm12aXofozGbjws4wqQk%2BvmnFhyF1JCUpIvLlA9Uwtj2RvAe0c8Zv%2FbnACHxLPb33V0Ol5zLo7up85n%2Fwd0a3R6EPFMMv7Gn7mNSN1el1V71nCo49PmPfuSWESXTQZ%2B4XVTKMO7K3L0GOqUBnwD01x%2BtSptc79cxTqwbHzTLAvp%2F8ZXJruHO%2BhlLuVie6aq1S9xRFaIN5V1QHxZl4cDdC5zOR0xuLx3HzcL1F4d%2BMtgvxrJ63XgUwLSmh1wwk%2FfzwA2U1i%2B0TimH7Uzg4bal9MmZLMdd%2FxefMUkDSBD%2FR3FOJgobzrvbdmwJy%2FJZbn706QjWBkwPmnzhLhZIxpXkWD6DhrNCYvQnCa2aexmOgYnq&X-Amz-Signature=cbe897107e420d21e7c7f0f683a8d6d225778be0fe10126c85d136fc4c432d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M3DEMI5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVIzVY1BMaUAT5U%2FHoOv4hiFh2z5R34cHUYeW7O4b2MAiB1HM71rugwXoJsRgI8Jg4Y%2FvUQZRyCg3%2B0Lgwe4Yn8GSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtVXx5nlIP0P%2BfnoVKtwDosbvikwXe0PQvHH0t%2FJZSFma3W1EyQh%2Be5StA9MAZCxJvBLTUC4yQjOhox1z1w6VthKOSnpWT6OeWZyOQizMIIIpQ2%2BfrPLB7a5eL9m2ZAT%2FVYSKbtRiekcD5RIl4R2UGMyjEuS%2FTCrmShqH0iQhfNcqZvYOCTL4ZZm%2FGjTwDv0larXx68hWDsv1Mz%2B8zdjaeauKbSy9c%2BZifw%2Fp5z6sMIONLA6%2FiOcGOcWfzflCJR7CePx%2BeRZZv18IcbFkkrBoty7lGbzQp4v3FoMNwCY2jjazhDco6MBcmbwH8ljl0OFyR6Q%2FOVR127%2FzQfp2Awaa5ME3jsiyH3W48JYo1CZN8Y2ig6njtwKqh6hWNFvT4MMTn2VT5RXIDV2VHFshgQ1beYADDApWnlyytHUjbpbTQ8hAxqbXHA7ZRG7iQH3d%2BviIe7Iqfbuo1bvp%2F0IZ8287RJNcx5nT7zmJ2ukm3z11U1%2FUVUz3KHrDSAcBtTcJ3nR80Tv0rO2%2F0QaJPT13yD6t2jyYUoyZzb7OHHh29E6OedN596ugc%2FmOuBrGevL2v27un%2FwrCXP5fqC6k6R%2FLrtPkzm%2F01TS6SwDsTftIeifT04%2B25y95woiDHOISVSUA5rIca73e%2Bi%2F2EWaUywwx8rcvQY6pgHa4%2Bk6osXr8bL6sPvRxdsfOYqP7Oh%2Fzd6CkkhTBXEMAYYJCP%2FNNOj6tPJEyyqCv5o4XOsXSIY0nvGmfGvfKF5RYYpvF%2F9et9LQVKUsJL3tXt4%2Bg88u5tcWoOV7PNUC9bVA6rxFpjIwy2Qo7QMHXjhbYulo1wq0GVUpyzeSYJ6jRrHByz63PuH3rpuJnGR7ubDGZNl4ahjJ4QWPbHS9nK2fou4fJMO7&X-Amz-Signature=cfb1bcf7834d2e21e3a500b2c4738ea240793f0a562be4a45c6d8428532d571f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
