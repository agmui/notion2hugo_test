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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVIZI46X%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCfTFQ2yVyukk15YzvbKL3CMAPseywco38aANwlqy6vwAIhANN4eh8iPVKS2sgjBvK%2FgQPVhbHsx%2B5P%2B%2FSTUC50QDtqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQzjyCLL%2BrZoD7zYsq3AMvfihi8AIpj68aQgHVWUFQi9CnWvxlBl40JoHLppc462dY6iJU0rA8RYsGFgwovKP8n3Z%2F28nRePkgT9wfFN5OQHjhOa%2FMNZd2eHZUvJ%2ByBplqtS1hs9ogOzH5%2Bavb072zDdeuhM9VIoq3YWDOU4WOt0UElf9oqFNsxLlszlH0XvtJXWYxe8bmQWrLwTwp9EQf8ZIkBCYWYLWZQl2RKzUeE94ba%2Bmb4k8z7KFlv4VGItplougDUhbzN4zpyzkny3mzLIfK6%2BFlod42I1eYXGXiUZECYMSWcz2DK2xDY12mGv0Jm2l002DU%2FRnZe0ij%2BacjLxzSGWWl1yW%2F%2B5qTzCFgDWQZUxnd3RAQpItNDbw5h86H7uHHyuxLguz3%2BLrPZquoDZxmAc2GhQHPqOyk0FfDBtleVLQicpAWgNV3Qd5TRF0lGchyuQ3feD0VeCLSlJXxag7NSVzgqiaovyAJBLilFtR6O1Pr%2FKICHpTaTyswtTR5e3JF%2FyzUV%2FJqpS7%2BiPLjZGJvTFK8A5WNxLStLv5K%2F%2BirnPL7W1eL0SeRt7hVF8uznjijImQcAqSfTACT3UYoDJK4VrAz2eDjbVhZZgJXFTyAzJL7lWW7iMYfQsWg8ao6QU939JcKWUM2ezC%2B3Li%2BBjqkAaDMUAJM7sbXFuvWWRYu0ZU5uin8z%2Fg6L08pLjULG40w1VuCMelQ3PfOCT9uJDsG9KSxP5m7ItkJU8f0hjuIeyKw7t0ZAuKPxCcCcfxkjUwIlXFr1RPayRB5ipp6eXPfQWiIHj0EzMtZAkHQ2o4IldTiW0gJpddA9Np%2BWI16ZmYJecefloiAtUkqv3YsLxDpAGr0eLPY80kYCNISaf9kDO9H4Gfh&X-Amz-Signature=2a1530d791264ed18a33b80d254aa72a832368bfeceb307e05e73d091e201c92&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH2TVXX%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T003226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCnqj2bmgj%2BaGAlXCC0RNI%2F6G5A0HTgRdjKUWp80ISTvAIhAI8Xaq7WqR9aL8MEnuN1xFhGZOeuIkLlhzlTy6e0gTOEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG2XT8%2BmtkTeHUswEq3AMbkPyMuJUne2ISx1QrLOO06ma3dvb5NPXWeas5ZOf1YCY33KTl9GEhb5cCNqf%2BhgOFxESA2mTtv6CUNf7BE33Z3Hm2T%2BmTktN6ZvrS8FnTo75RvbymEHRDTsVhv6rl%2FftWJVk0UTNQvPfSxn6y4DYwKQ7oEbWytxhjnnhvaPKRhEXopolVn6Fa6W%2B6GQbaU7txZ807G6NSZ88KYgZA42TaLcf8DrgDgE2I9ubikGEJwzoNRPE7PP5NfX91B8w6onxBq4EaxO2nEEeD6TmcIqlhIjVSSKus%2BbsHlKEKhiB13L4cNidnv7QVe94pbbio7zbktgsS0rLYQbr3HXBocfC9UjgU%2FtqfN78nUCOwjrr%2FFYoHRWcE5Z%2FSxkwGt3XIh4bsGBKqSqe51hUVj%2FYPJz7sVuc%2B7EHxU3lyGbzibHnoaxUwKaE8EaOKiMTZRn2drytVNlwedh3qnUjkiOEn0Bw%2B4QMbe2hpgXoDjeFDKiXAwBdw62wTGfLP%2Bn15AJr0MRtKG0TCViWnpiq5DadbwuE5RBvEO%2BjWUdVCfTurWh1DTii1i6IV102IynkNCjJnJNNEnoDmsyvKOkj68cLmt29HY4P0aIZa5Vtj4iDqLsMgp4Q5ebx8nQ5F431FgDCR3bi%2BBjqkARCc0OwNuy2a0oQFO2It3gNZMK0X5bACZGeZ8vKucakv1vHlkWpbqPHnAIJAM03%2BjW%2FrppWclBz2gYth3oFW1Wk9lMalYM%2ByXAVK77l4CRq1%2BwfXkwNndmCgcfX2eP9agZiTaoYLV13yGFFySAvKlpa2HrKUSIXJcB0hmv1ZJkxL5YDPX1F81ynqBVrsSWVhkDpBxiHjPy2N4gb1HthCES8HLLrY&X-Amz-Signature=2fbcc6a86f7fc1c17446b838a7d127fcc47d49821e89a1ff1ca12dae94ec10d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
