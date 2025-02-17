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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZ6NQFB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCqhOZskyXY38G4YWkkk3ZS7YhJ4M4JXE5JCFBtl5R9GwIgJrw4Ftb3%2FBq9MRZ5AbwiHtZ5uNqBM6wkNYTBDcp2ifwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNOp7I4BHRqknoodYCrcA%2Bbz5EM4ra7fXlv%2BJaoz1Ftzk%2BbufkIpfrXgPx4GhH4lTSe9ruQnAColDy0%2FgqXPFk9jOiNbQQlX%2FbUKc%2Fp03LoVDE4AiuR4Y9gRcgvI2HwXWCNJpNDQEC2kV9oFuxIi7nSq%2Fz0vTxvk11cpL9nHfN5FkEc%2FfQvCmm17Da%2FAzS42Ru4ZwSrc8OnJ0OpNA4OI%2BIKDAnG9sUwt3CVfA9fSymlxFtbws5hNftmplp%2FBK7t7YnWS4bdoIlosWZ2oh5E4Taep0WbL90ytVXj42zQlPaTjdct1ohEUfgPMEdIy7Yn9vOsRxuagnqwRSI4%2BWsQUsNIbh6xCfi0NhatR2HLIbNA%2FMGNXmGErM4VTM9wDtRNWk%2FHOH79oYEfLiu%2FSqpeGuf%2FClYHL82f6N67hzteHVNyE1HkyCfDQK%2BWxsxz1h5bBDOsmCAvVTZNHMV9cXmOI25GkxaEjjLbCZKUXMQX6vpYC9swCRQByf6hpFeB6yvrHkVX0MN%2BYRCkaiQQMHQ%2Fo7KvhzHE7DpQUwEPzDpUKNS6TBxV2UkWV2OaYJ7iaARUlpv5vkjLxO4De0JrwUv0RJNRYUav0K9CW0TSn9CVmMB7hDojgXgm939ztdhYFusjgcVaV8kHQGy01PciHMIH%2By70GOqUBQNjd3Wh5BalnOC3O6gLZein8M34uQlpGqNsrKV%2FqcxhwK1lj2XA2pcl8xVuQnKb9DgBbJEeqlS9ofHuLVuBnw9TtmzLkL6B7j7dfUb6Z66MuzamMZP2nXb5nQM9p69nxHAse%2F3emckm7NlnbhWNszxVvfCHQqrOSvpSvnkH3b5AwM3s%2Bm6fjUOUkfrfkT3OQXx8gb3g9SbYSxl5YV1iuKCJQ7xh8&X-Amz-Signature=7ba06c880d794b409298139843878cc9166ed6d4561158f4223c3c1ebb4e3dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV2VMQ7C%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCxWAUFQWOzLGMvtwdr2IgpS%2F4%2Bvel82fPEbyB7BuLxwAIhAOJOyGDCDMxsS87Vd5g6OP6twaYiyxEJbHNOKcGjQqfZKv8DCHIQABoMNjM3NDIzMTgzODA1Igyh8akrSa65%2Fn0rA8Uq3APa7R8gyqldcsSvnkzqA7ahr%2FSu56sNoIv5EsvH%2B3FSjxAGUZ9KFlnzvzzPrxxEojn6cbFL%2BylHBtUfThT1Ie%2FMydD9i9M4ceNoGCuOv8vnyZOvLzq578CUNaoZ%2FIxsib2hLE8qY4O%2BefDizwbDLqzBufUMeyR5N5wxxwD6VFo1UR9bqBzpfaM4jX9X7So2GpLteZeq2OVRtU2Xf1cm4ptQ%2FbPZXBtu51Gd7TsZ0338oSi%2F%2Bt%2FDfVtNPIv%2FkGywcgiz8ZNsTAU%2F%2BoulxnEJMUXMsrz0Ew%2FlMLKvbace9sniInHoLOdypCRs%2B8nwv%2F7djMh6ws5qwj4GGQeEDvAG1nAfN%2FGGz6wlQSyykT4mE2W8mOn%2BNVuqqhOQIjsJ788CpYa12S5dcp6IjntF5%2BeueJGtlE9VQfLivHCtGigIJxbwZ5WbW3igaBWtX60Un9%2BWSOVaR%2BVLZdBcCaPmeC%2ByGBHVbNpenfvXIac3TtG1eV6LisXG5KKU%2Fnh3LkQnZALUbHNQq1nBRlBfzJNZwr4wFTgRR8wI4JArmMdvD0V7McaFHWhWY0Exna2FR8CsSQ3%2BejUXFiY4eCB%2FdfXfEnjHalowsHBZl1c9MINJ1IAquYulcLFFmMaP6oVMoWJRrTCP6su9BjqkARYQVRORoFvF%2FP03Mx2612xX0S2%2Bt3xJbQnerTTyOuoAH0wJinXAW75yGlwZeCgTcPOZqKmpRBAiAYCSvaeXWnbP9E%2BAPe7rZmLYmp6wUo780Lq%2FCzdQoG%2FFj2wX0lrb5TNFwOGyDDS%2B%2BTmU41VtLgGStKZuDkuQl73EAmnPd4tLMYkt3Y8dQvLw9DvwrzX89Jd9RwWkfYgj34jQRI8W5Vcq8Auo&X-Amz-Signature=d302efbc9ce16639b8695f7e9cf827076afba098bd45ea19c5322668b735540c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
