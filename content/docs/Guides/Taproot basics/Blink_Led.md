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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627MIGJO7%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIYpcckgLrNSyE8T3%2BqwpvXA4CX7d%2FKfQX3u4Fe0687wIhANV8W4bIdaOnLr6sdLblwf91kBJFGJREfwQaagkOnooQKv8DCFAQABoMNjM3NDIzMTgzODA1IgyGqf1g%2BnaweqHN0boq3AMkm6ZDfzJxSBhEHgoo%2BJ8eaW49fB1UOwDvsNhDifPD3kjyAjXW0E%2FWEgKAbyDosVOyNhJMO83qo4vrD6jL%2BHj0hJlQLmC6Pow7tCWm0ZsL8NdNduEQ7j0mJImrXAjo%2BCeg33oDNJV8nDvuFMI%2BaR8pxc0QaC%2BDc0J%2BCRQlvnY06sDEGyViJ0%2FbkydyH76XAGxQ6hxAnOCBBh762P0afAAXuqgR1CSz84yN4u06NPGQ5%2BMxJmKqcEQtX93aHxMiD1VxdGeSqbTLwBepU7vjMeGm%2BNQeKAxrjTWSyv8jlMkSPUG1suaKJa0y7peRl2ZVsVsI%2BPeymNj5qtauD5y41oHDlUqJrC%2BoeQGTVn8o4HYPDDHpuM3uiyj3pEuTVlvGheMM8skZlgBYGXFw10J1CBKbkj3d60zna4qSnwiLuM5t38fU0CfNMjVIU05wMKrI%2F8g1pZdaC5LoC6uwVCZEpN51ppxJ7ZMZftQiY%2FhvxfzuqZIPHeRfQocAggxin%2F6PN4llv8UY6I%2FPELAoM%2BtEzkapwYLkCXR465FjC2fZUDJpDNyuw%2BimifrRbVYQGbgv6UPMPDOqR3cxyl%2FHFF%2FIWSQluetC8xTQSNhDjv1Wq0j0q0FnHI6R15cPu9Zv5DDiv7XABjqkAcxWvYYxhzLVkX5%2BRoOAPFCY6Gs6%2F0POA5WuPPigsRWC0M3pG%2BzhH4Wgl6wxv74dDqeDDNUU83W7SB47nkGkCjp3JxvEFEi8SaTqJjvz8wQzr4FvL9wf%2FG1dh07%2B%2BzueKA4DTLmXumjPRLpDahiKBoSRzTACspNWJ%2FKdCRt4Umx83RWBs562N0w3mYdkMPNtq%2BqP7Qyv130g3KIP%2FOel%2F31m2mOV&X-Amz-Signature=17ff64eff00df307a3f235449555ec54c0091cacecab5bdc07b1ecf9fdf5ea93&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QLAUTDB%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T022654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYp4P5UakJi82UEXySpagTN%2BsSevN9uxWDqcxY1yp1%2FgIgNGRzLo%2B1z7uoBNrdSiMughauvMhjpZv8gqa9K2l%2BNN0q%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHhilRp5WR8Kex3enircA4xDVhcTUiWXYTxlWFO8Rd%2FtqcvBzcB8oVn5GSvyd1s2K39Qnf3%2FFRyxNwnCZxjA4%2By%2BPx7OpnYH%2FkZqmsYZ%2Bfk6RnjBWsTu8c9lBzhlbsgvxHhIZ3T3Z%2FaP%2BGqos9KPu5UgBSNJ%2FzziVLOY5CWgP58zQgP%2BVY7PV4yJAwuxQwdUxuhotag9XW32KbPnb9umQXBM52M%2FSXQNczjmEjQ02713AdgOmK3aXA9D3MDSJ1Bw5pFlsU4I6%2BMV9CGrmszb1kyd05NfSIkaLfVcuDf%2BabEaxZFu3WtRxOHnZcVTxHDETw0Xb%2F%2F5bILfkPY4opXyF111TEoMeXnrr8VfUH9cQYbYifwLUnHn7vm%2FLVZsolpyFubz%2Fn6rGzCFIoXNrC0ldp9MBcG8qYtBmGzWCtEvbdqHJWqBomq3J2hGovnHG785bVmFaY0lmwPXzpgW%2BZQq7vhVwlKJUo6Nuh%2FBLDq5rLb6ifzorUPIKmeh2ROBxcVKAVG58DNv8ZwYL%2FH0zkCtxikuBP5LPd3MhgO03x9BYm9%2BtlLvMCJCvK%2BhU6lY6OX%2Fcp03Q%2F6bnEoWYzBM%2FiLXgULyKF4kgWaHumFl4rQhG6XXxY4GK76oRqWJPHJxstICBnOCxQFBxW%2B%2FmiriMMq%2FtcAGOqUBpxDY65WaKOAsxuNUAAm3qSnleYyqMK3xk6reSUCkUqWvlgr4W3ZkIxZ04kjnUwDC95A%2B9sTbPC67iAls%2BrqDofrC8rwcQVj%2FZ3xRW7px0fOQWvyORmRVXkModcDfH2Ati4g3pU%2Bxc9gp%2BMaiHkUgy8wQjJEoHt4y8asm3aU5zFtt4D0g9OSJS%2BtNRUz6vfGiI7Xtu1P0f6g6e6riD3Ybuxc%2FpP28&X-Amz-Signature=7ef01b0581e2edacc9853c52bb5c8cbe9d8254b2c16fa507a1a89796cc8a8a47&X-Amz-SignedHeaders=host&x-id=GetObject)

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
