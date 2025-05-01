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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNVOF7N%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIEFJ9kEl8iHaxxBBWnk%2BqQPtmT6bWHMj%2FwrTC%2FF9oK9kAiA5YnExgcZXrKBCQKqKs9zvTjjuw4uyZ1cwU4q6cefQVCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnChlDu6NyAmnvn2eKtwDAXcnGLHkFmQ1zK3x0chhHLehYmyUV9avA57XVmp1p4SU%2F5pkOED8cMo130oVxZyWBP%2B2JKXB9yqP0v7yGcT9QUqsZ7le9M2ngT1JxGJoY7uG3G6S4RxF9iH39gfYwY1TXo48sZoFnE0lQxDzo10cdH9N2ewwJfsHwYGMdaHAEzexIGwS95uF5H%2B0yK5THCIKWgW9z6sE4eAH%2FSXFrgRipqe6jf%2FDgBNl9AHDWo822hp7l5PVjbU7sAHsHI%2FzLVFXl1S8Y1pw3UHeVq4zJc5YfCwlqPH5YdT2nN2bT30WigBgspJ6uCGVae%2FXPc3Il5pDMcycPkq3bWFCN8qjDN5WEBh4cWOycWIeJhSdjlIaFctrCwr8i51M%2FkUZ%2FeM3MFTeFIS0NqkdtUuP42V0UgLbX3a%2FYuGg7SjBaSK4Gz90rwzCPlHgoRVtHlBnxO9SSj5nug4TNQpNaJDA%2BfsTjSmc2DT9P6uqs%2B9SO9I8SW8uDSr566zA7hJ3ZgbV8Uqj0lmg4qVET6sV2Dsn1hIwrgqOIlxGsxN8oGLBXfTPqCoNlEMVswxCrco5k%2B2gWnrd3Joey%2FSa68WOisMYxGuBduivAIkVtxPtfbetwm5Z0wvG8Q%2ByHU5FIclesNnhQAQw8%2BnMwAY6pgFlDrTkzgLWvD8iRD857jrYWG7mm9BMQZ3gFyQwdFjkUcGH3SOEZ1Z%2BFQOaOEO8Cm21%2BVCiqf%2FbXVU4foPE%2Fm9HjEWlzs0qHzoyupAeI3j2ypD6OzPlwk8xYRIDGGei04hAfu5yv3NuXYpn%2BAcr9bKBKdiNn9p19MLcWhWzYb%2FyAMYo4dd26zqz5H%2BVKZdPE60yZKnq0an0EisBiyvcacaQtaMUjE3q&X-Amz-Signature=6928701ce629c8e5722083ffb78e42346a94d47da6f047b1825d9cf5c88ee92c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3AY5LLG%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIBa99UvSb%2BU%2Fj17tYQ9id3ucxgZPhIEa9YTdh0aXOBrdAiEAyss28mKuz9kuK6%2FSVhlxMQHTEYHQSXra%2BjrkhBrxZaMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOigzFb1j7Bk9O0QrircAxOnfUel6VzJUw4T7BymkRregZHfKceMLOjfZt%2FJ4iZ7IVpZVISi1SAZ5k9pUdm5fl2MGBpn3%2BXjWlET0gvaPnStR6sGMtEWTiYFTonMzTuTEUe29pb9hLQXJXZbcLvtDJerVZ5E%2FPrnyY1L8q2VvVKryreYF9RzMwTLtjoap9XeWGnuoHfRoHP8PG5PmcgY8KUxQupfyb5qZ2kPDmxOVg5%2F9ZRqbXH%2FdTJwUII4tzjxlFuzNfDSkWtU7OQTqS2VgJUiHSGKus2EYb4%2Fqrqe8ZHQuaL2aHC7kEfM16ZACYitT0kor3SQhyPw6m%2FarvI7sqhy1R5SKnmwACTjC%2FLQqzH4QXi1FOXvEDhQ3QsvrnRUOJUD3H25yw%2FkNtl9rnWFVnWBxDgrD4Gm4Hs6IAeeJ56xVIk%2Fn2EUTcKjH4oCteOZnFsb9qFmEL%2FkNAFXXkSe7rAl2%2FpGcutY8tch8jQUkdyXbya5UtHTij0b10D57ION9OK8QXf%2BLkA%2FyQ7SEmjKGi2nHoQg%2FLfUhwoaP873z%2FubKlsoTXx6od9Rn7bHDx0oG5ACi2nPyPkG0sul5jTc7tQsd6zya0zBuVsctQh10ibTjnnqdS%2BbTA1vb7eWEQ5Xbg02clv6ymTwqkMlMK7pzMAGOqUBpHyGHF7LxH5Uugigi3PsPeApmTXKnzQSIsFvEYs2QQNdKSHP89EZQuvfRo7E7nU00uj5VMZ26DV5q2tb0lVy1up0DKr0NxJkv%2B7BmIwb%2BGoSqwIfmJW7gy6Pi1ddZGwmmg98JyIqmmAPnrwQ8hsoS74LszhZ0sr7g43KO29NzY%2Fh9S%2FSwoGn%2FvkSIPeM36iw4hXkf9p1ta1IqaD%2Bp1nDCobFT53u&X-Amz-Signature=7ce7bd68d0d968ef50564144e46076a97e8ffa52c2151436180e68af0b387349&X-Amz-SignedHeaders=host&x-id=GetObject)

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
