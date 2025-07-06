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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FZLR5OI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDLgjzPVQWR9eB0kRE6vV%2Fz1cG2inrOumFuzYNvNTWbcQIhALKoFyFVn1tjs1JDd%2BFgUEXH1Etsf4P5VPtE%2BSKXCtfhKv8DCFgQABoMNjM3NDIzMTgzODA1Igy5UrKUsyNZQmsFbc4q3AOMhIjQ3ghWD5zrYhO3znxHnae7B9KHXlJpVf3JjEwjTgzZ9A5RZ%2FrRCn4ZgVvjZE6B%2Fy9pA7C841YCXoJ1tlJnJsEsP8Nhg2WnzuUkZXtLhbO%2BDooaCPFltuGROiZ1lKjYy6cBeYOr%2FXBanzWCvIzmeWLy1QfI3drna6UUnWPynMQEGsP0oABc%2FbWZ8xabjP%2Bkgm88EJ5nB6uibLtQhJBVNnKrVVDsDd5%2FVMcu0PNuo7IEN5O3YBCQuftRYeoSps%2Bwy%2FjmvDE0XxKUjVwQ8aH%2FNeLseYwMJwH74HEhkl2fUqk1f64yVNN6K7S%2FvM7evtv1LrGdvD9Vp8tPbfYAJ1CoE638FgQWMJsm1uC9GPJJV3N0sntXzzvCsvNWxcAULfIfgxjZRVgG5GHqZvR0BVlnW4ObtitltWO0q7MGN%2Bcl1axlNjr%2FIBURUkwDjMxjc9oKfZh%2Bg0PqF%2Bl0EQECVTHp3TBvcVobn15zf7ZxszgolUkwPSoLl70%2Bjza6ODw7dSDjxQY%2Flm6iJ5o9oG5sPrnhAMUj2KuXE0%2FzGvmtjigQN3qolovKwW5MX9jPLNNytbLKmyALM0NWV2EyOggH6N1iIxzQl3nRe9CeU4yMM%2F%2BrzVQEhNNecLQUiGXMxTCDtajDBjqkAXedsafkQnoHphuJYX%2BKj2EbvWP15qXQr6DCTL%2FH9YN6JRgJBJjO8ZeuupDVaTj%2BMQdHlTSG98SNSHfU8EYZuzZEZa%2FG7azADvnnZeb%2FF4TIW8HzpOoWZKx%2FlY7DxirkxnndEm3SmF8O2DKHk%2B0%2BCaFEwBeHZ58W%2BTEc6RzWTqbpXx%2FXX4ilwivHzLrasTvnqH8iGpSbBnx8%2B6gxC6H8zENLROF%2F&X-Amz-Signature=9a39223bf2a3beff440942a329ca29b0a99fff7664b4ca76a823b9255e6a3a34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z74N45Q%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDcnU13wztYqn%2BEmNKrV2qGaBF3U8TFVjDwMRnu8pH%2FrAiEA4alO%2BKZvt1Nolrz4m1zv6QpuMVvvVCsottG1DW2g3PQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNdlAdJcAM3To5G0gyrcAzFPH6pAAiTPbqq5Ovv7O3XC%2BwE4DE9oOp%2Be4IVCfHN2CDPhNpz8vwnGl645W9H71lG3qgS7KbWk7ycuNupBm4tQhTtT766KS09k75I8C%2BBKN6yJdARjKAQq9mDxvWctIm72nJX%2Bb8vYL4V5U3xlo7tiaP7etvHRoe2tXxEggcHFQh8lmRvi3vEkcVtiLtUQjHNKmJZhTzYt9yV3314kzbgJZYs%2BvY2RIvTzMUiC%2FcUrcN6CJ8DcGNzarvmBwfIWW9Vh7FLPlkblY8IztJ2PGuCcoWjLmrhQeNUGVLgXYKElKWTzuf%2BSStJpGfIbLywlGKqll0qBSIWhP4WFrZWwy8%2Bvn4q13AdS8MLU4Ggx7ANPnf7woAfGLh10qwou4Ko8Hibv8WJZh3S%2FEMGCN2Wk6aU%2BYzb5TpkWMvSf%2F0EaptWThYhYtxyf8BNO7rPUzVX1mlDTUBqwLY7iPfXHbHYyURrWUG3E6ZuEbpNvLrykqriQoqH%2FcK0VDkndEYluFTOtos7IQmL7SYDF3uZ1GCG0%2BEHbm0HfW40bVRiVsAxdttDX22n492%2FzVtuEfxwZsDQ6utBKGZIDJY%2BMtPXLEUGMtf3NZxthS46TQq5z9kUI2iiD8ImNFDU5u2sARmnbMOWxqMMGOqUBLCIRE3%2BHuuVHioP4vxNbeVCNrpPSFukYsuGiyDB68MX0m5fivVxfHLODx6gKYc7FPWFtq9xJPzR7Jtu0I1zo9LOZcbeg6z9t6RT6G31MEG5d6qOzhRLQ948Bcz2evR7ZwRVK9gBOzmSHDRQpdzCvXcBHKg36BRS17YIfyQq5NSpLK7NsL8VRDQVt%2FFUDqq2BVVuvMrQLMRSHEv3lnjjlnf9akNML&X-Amz-Signature=500d2733495950d630c809e1e1d7338ebe119166e9dd5f4f57222173d080f65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
