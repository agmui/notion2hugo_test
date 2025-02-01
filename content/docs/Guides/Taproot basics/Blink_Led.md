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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3XOSC3Z%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXpPHpq8Pe%2BPmwBvyrg64BmAIOBxUkgC5LGwErKT%2B3qgIhAKHUq%2BwxaWbY8aKWPM1uEnXxHkNgqHyBgySHFQf1vCuSKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8OBkqyCEA7%2BHxasMq3ANDMNe%2FLDJG39QidJG3w0Jo7NLaUbjo2bbtegtPQse6PSuggXhyE6H%2BhGz1c9DyeR2c81EReHpMW71kjt6cKQThFEOj2Yf%2Bo5y7MV9XzJ29uLp2VIaOF3D4F%2BIEXVzUKagWt8HYYB87kLibGZSD1qBCaI0RgFw3ZHnoCE9SIXpFTJLLpKzDCVw58D9sDAgoOeRqN1DJ6FrSQg7QVBDf4J6Zu%2FHxer7ovIgGAn%2B30iFJdannNfCLz1UudwIarm4MhS7EgITBseJ6vGI4of9Q3hgehvisWEN%2Fshm%2F%2ByfGeQZRbFB6o%2FCadl58VlhQdNJL1wURPlRBKRHxlj0wzVkUMq6lpJleQhVDSe54qa2POMLKtiQYuG6ZrDZ4%2FzHBgejNeh1Z37UwJ4zol4TMuZEW%2FGfdc8lqflqL7zOsvI3syX0KuXTV7fEq7fGzqUeEYwyXRA4M2CGJiQE%2B7jscqIS9V%2BXYO5DnYDFojYkycnW5S%2B7Zb%2BMcUDLC3rAwrsn2Bw8LYOXz00IbEwWISDF3VZLv8moIu9UydfDyb8SER%2Fg1NuS%2F%2Bv3cHz5YcSlPvNvSv3tZBCGGhW%2Bv%2F%2BK4HIpzn5oF38hXl8%2ByrVI0O7RYovv%2B6aZfBgBQjfvH3MyzUM3CQzDN%2Bva8BjqkAWCpikX%2F3W5lck33z6ofD9sQvtKy%2F6c1QOO3nk%2BRZD7jQ9uBqeHGvrxz844LRKvtCAfQZQeZ%2FMN6LMa01%2BM1oDL3sFDIlz%2F93sn4x5SebNrQHxqxg2llCVp4nX0ZSelSrU%2FHViLR8Mcz9ZnBUmcl2smSg%2FbYCoCjZHL%2Fm03FWXashHjovw5fWIA9EDGNh662jTPWShM%2BzuLc2PySEz102pqT3YnD&X-Amz-Signature=b0fcc394cbc4df6bec2f9f60efd53717b0e18a1a4fa0eae043f27b601c0484d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GJCIBX3%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvF8qi0AU%2BINRvBVggRg%2BS1ZTbRSqMFbVgO9pcx1EmpwIhAMDqTZVkdBoeBk9ZernrZZ9YyI2Bazb9g8Ghq%2FsJwOFeKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdyIMM%2BLrCZ9OGnTQq3AMkOzOqfQX0z1%2Ff8T9MLbwOqTvgW%2Box9LB665uQuhVaSBMJJOSHC87oLw5MSRYrE%2BNADP0Fj4iGs7CVOzGwl0Yd9pRycpTsP5EF%2Bsi6%2BTN18EKa9mlhPVEMxJf7QWbqUHsl4UToxyJEK7s5RJwPkLKplG437IKuX2dbiU4AxscWVslBLIdOsiDwy401hzCcByK11o4HnIzL0oAvico272j5VrexB312Hnx%2BB9rbh5T%2FLMZDk2Ojvz8dFG0ovjcRS%2BObrtzjCZo%2BR8uMtZ3EfW5AHijsReAx4KiURRd5CcTRyKDE87ZULbkDpFE55wT4ar4cLbTHN3l4MMbr7uJeNfXvXhZ6L6FXcnXLO%2BJIbbyMXB6BM5gzgRSZjKkD%2FlE6AtnDlJi3Goh5Mgf1fJOpDWfMyXJSEdFW99%2FAkCW%2BuALeTIkwsU6C%2B94VWKRECLli3wkG8gzcoq25Hlu5zjQ538k7mHkLLqHfgXekoLRFTNCD2HMda6qsFJOrhSrmSRX9X7xaMDdYEbYRBxdKO7vibIeQq4%2FYePN0Q1%2Fujvk0FYAe1%2FBAW4YhYvk4RRG40J3eUDCFef1Avb6MUvQhQi0jhT5Kxqofiq6HEwUEg0MABzjMWuFugEVV0NJdPiRw6TDD%2Bva8BjqkATKr5UpHWYpzS9oZp6ii08Ca1AlqPlZ58ZfkL4akNdYWGPB3W4g5NBosB44pl2y%2Fwcw0eoBddISvBdLMuc14jH3f8Lsd1i8AiV3XA7cz2ZMW7PIr9yBQnijodgW5wSjkFIi5MaSMLGOMK%2B3ppOfGMg%2FrJMSSkFwoHm7e0RQizwMBkbyawuNzJWq8HFeAzEqrOamIdNkUYNZzmXz%2B6uPt2jKts0iE&X-Amz-Signature=848ff94ae838ccb223350dd1a0eddb4b51f77e71b2f4aa0c94635accdc938ffe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
