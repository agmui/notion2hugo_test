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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZRLKHAM%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7AXThxWbI8EyXeqwYCkCUf0hm%2F7mAm0GGHKFd3lVp8wIhAJBs3EIpWhCCsA4UmJ5oiTSQOret%2FVjTw2nG6SGbgh%2FcKv8DCBEQABoMNjM3NDIzMTgzODA1IgyH4SqwgzF89vaRoh0q3ANfY7emeT9GIn7OgMtUCUMxBPINpr2bBhSRYY3hOYCch6tJE%2F5%2BFE9FqpKDg8hBOZJh7tmd5ui4OfrVK%2B5PGO1UN2WpIYp5J%2F%2BESljJ9LAdLCQDyWbbsjS2V5vFYnQtgRFw15TQVtF7%2B7rJ4%2BVJYvC9%2BEG9RPFnEepi64Cqh2VllTlATBJSWf9GSmIfAuWLWmuqELwKVt7BuGyAKyoXzoadmwaWowlv9Aaivs%2BpXE8VLswoQ%2FSBgH0DeGE19arCZrcCGr2MjkPuEJ20nkupWwmVjd6IPDUMu204P2B4n8cRJPc5%2BKopgGH%2Bc3qChtrS55PX2Uj4ircl9S5H321kz1NXOQyc1eo%2ByOew%2BrjJqo5ScbVoZcJGpPdBaSPnKvKO3cP%2FGAm6l7%2FcQOX566kAUR59id1GwdiZJFhztcMKFkjffw1DpmM8XjSNvbWQqlk%2FEKdvyeUak5zMnIBlGBSTr7FMjimMO37gC3aNfBIFBJU%2F%2BBatdqLk%2FPx3%2Fljq03e9cvpsnAP4ilDgesBdwIDTFzB%2BeVEzWyPLB7Nt9n%2F3RUB8Td6nFepuvsFnfDthrxkb6%2BuR1zLKbBG0r1TP7meiKEncCoEKeJI9ytyp3AlATQXSuBKIk2iY8PHLinX1eTCC4tS%2BBjqkATN282q%2B%2BDU0rUaxrkfJvzB1iOLXbyDwYoGBiAdWzBGP4KM9cw3I6B6ZmA9OPiCElK7IIiH1QKwhKvId8SJVfB3J6FznPR6LsXcU3IyRIUgStQabJk00MRCx8BqUv%2B7OHFu4q9ARzBCA9C8eJn2DddkAY0z94qTdAoeQvvspHHlfRaXZH%2BsLg6YWCMHUg%2FC3e0lqQJtoMjzKmHyKrfUoOt48wNUs&X-Amz-Signature=2e5bc8eeb25b14cbb454decc64fc277d767224c4a0b9f6d80b6a3fd461cd82f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAFJTSME%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWas4%2Fk2gmYufh8o%2BDWXSRk6NOzaaiKB5pt6Ie%2F7XTeAiEAw9D8cRUrZ%2FDSm%2Bf16Lbl0TDaGceD5OgvJjwQzS5PnGoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDD7XzgaZwf5YKCeJWSrcA9xnRdCujnBtwBiHH9G50zBqgUXEwKV2bhQ41qz3y6FN28jEJTbtfS%2FitugC5upTkiFNrgDsxXMFx1usUAf1cxnuOFgInGqkToXQeaSCHxvqN5S%2Fe5lYYDjxTiEDDun6Wqt9vXYeCj7QgMcVpiZely9mcIozIEVfU%2FSXjbpcYuHxL30vx3RMacEjz%2BNN0S5CEcK8PTPz%2FkRNJgKw5t7zMhl%2Bi4Ut829B1pWnAX8MICm9mptFv6b19DYkNyHPMUPiJ2p2jiOyYYedHEvKrwM7muLp1NoabUX63WngVlML%2FqS8PJfbn6fCeQebg8%2B2BeIlk%2BAdmywvnenjrUGisc4vCkooqQk8eXnZ2jT4vh0KOYICLMMH4u%2BMS6Ugt%2Fn4maDgRn%2FInRUm9d29wAfijCIFXIwQ5g8zXAoDkE%2BjIKR3WNLhUnUQTRzcXhaM%2Fu2vIxGcjV9xor47hMrjoXjV116JS%2F5VyVaYHYDAx4X70T0fDYkLuvjux48kQQ31EbAyoUCYOZMDeuX8T3k9bkEnvJ7p%2BPh03PA1bb4%2B6uU4rU%2BPCJaG5Bz0vYACTwi8Kqr9CdOZq8%2Bej9q%2FBNvTwqOj94jUeVc8JrCnyWrPvomeLCpdbDML%2BRkQXLa8PBeScuhvMKzh1L4GOqUBlq0FStz%2BvciWYiKz%2BF3qG3f1Z%2FB7CVxfdP%2FufNLxcwdC8wnNJe7tHbEmu0J9TGfZ4LU9zRGpiPhyi2dY%2FbeViiz5NZLEfFFE%2BqUcCJJf3HgQiAr8u9XPpVZ17o9sGG3OsFmyHjhGK2Z%2BAu0VFF5xQtvxgDx27D5bEhitWi5Av3z1vKpzDGvnTh29ly3rb2arx9hhxPoDZy4yZIDDSIxFfWHlV0J9&X-Amz-Signature=b9fe2ddc9ac7eab211d9a090afb3cc59e76d811213e9cc86f547b7ea844c89b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
