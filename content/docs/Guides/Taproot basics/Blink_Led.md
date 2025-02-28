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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZELBAO65%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDTB86I8KOZPZjr%2Fe7P2Z4J%2BLIumfyOOzeJ9lGXhIkBewIhAMYxkeYStMZyW7UnM7enGuGormM8E5fun6F6XIuUlhnIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOJyqgjtrACfknIKcq3AP8CG7NyrJELhvot3575tdRwTtty%2F8rIAeKiR78tpicUKOFZ7msEmHZooWwUnLJPpxz2vHrQQXgbh8JT4m79VSuxVO1uZ8VrpeXxq7ZTkGgQh1thay1bzQUyUz%2F4yvDj%2B%2FuyFG4OCfWmyOqVYsEyS5moRmVF58NLFmkEdrSt%2F%2FsntL3Ya1yibxYHqNRkH4K2u6FvigbeEWPL6w5JtLdOJ4kSVefs8%2BLZlmA7I8UWp%2Ffe9%2Bcl9RcTQ2QEQ0QHGcoKBkcrIWtc62VlubHfKFlofjHRjePNLBL26Ft5t0s1cf4IfYZyKXm4b610TXJys3phW%2FBNHAVwlQhaaCns%2FXwtfNKustDM9ytR1c3rqS%2FKWo9coWAQXD4ffUw9Ew852eGA9PpQqP0JVfo%2Bu77H6P2vmBYPMTFFTud4bOjaydD0mzWRiARAQVaKCW8TjQJGFAmSxaCsZQluuNlKeX4yZsVGszuXxoWjXeU5JdO6awkYdw5FSQhqdiUIUS2WGeca9P9%2FeGZDIU8IZyq5OJ8PEw%2Bk8XL8BA5H5OYQ%2FCS%2Fa87FYc4ogeej0CNcS7k5cb59LNDqJkuIdVa3PJ%2FRdjDIRREhEUrljJUJ%2BAo3zffEWeJlLY%2FzeCSylNMfZTHCXV%2F%2FjCT7Ie%2BBjqkAUQpS%2FnLgpUZ1wfkkg8YDlMmfGelmjs2piLWVOrqzcTukveC7VYwpv6d%2BNpcVjyu8hQo9m4CETn9vPw%2B22XOvGCXUtpdIQiQXm5EN4920akfe0TEngGgpLAt6nZe%2FCMDuGj3d3skibrtU%2BeF0dOhc0yUdqtwtp01LIdjkdQwZWmY0piR%2BFLus87RDKkBgXvmp94XgZ%2FJggTcMKIsxg0lEW2OjW7O&X-Amz-Signature=547394840af43650cd95b1cec53ce24a617383573ed1f95195fd471b8846d0a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ76HGO6%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCaqq6xRidUrDSdQrszXFCOUjVla7Kxu1aL3s0jCRJWXgIhAMRJse98h0qXCZEoAFDGi%2F9ChvHlWGl5tmu9RJmwpjb9KogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJQfq05M1QbfxYoDoq3ANshYrkZljtZY%2BORfjr8sjcsLR6Msz3nZ7QHh%2FPYzsLlTfFzZaUKBnAxlmNyDclEOrMiJd34eExoE987aJ%2BT709y740h8wVZaudjHsm9riTJxkFcCJdF5YaGPvjij7q0Jxw1Ud97jTJjmHN%2Fsi6fMDUlHM%2FsBtXQvmEA9s8ZQSu1ewfFU6pWhgr4fCP%2BXpDETLlXcVosM8ZmbXMfoBa%2FBBkjue2fwAPSwTWVZx1tzzaUdEx49h8AfsgsYE6O1TsdTkbMIH9ClN1ZYTIME4bnIIVE3KwnY26DhzOPc%2FCa%2B6%2Fk9oKXngx5CvpvBryAz0DSZUw27XtNQ2SplZBAXa6XhpsiLo3LPnVwd5C%2BGaUmjYTY1p%2F4GTVWYCg1WfUGvJ7WG%2BH0U2434Htn7qRQonhVQiCq9hkKLr44R%2BFNU%2FH3FaDf87mmZzPgqFzAp6cF1uRGN4Uy7MrfcCbiWQr9nvcpVROAtGXL6AHpOwmOOVp%2F85ZAfj0PeaAnN9UqMRRBTHSx6Ol9cYXOd7BHTX%2BsJJH9YNJm0%2BUnO9HEN86rDtIweHwqDJT6WlWwoL7ydlgeb%2BgJSWotvGr02SBov0NCdsbi4f0tM5Rs0NtBDUjhql%2FQvbN3TV9ahPTwIyOGffXhzDF7Ie%2BBjqkAZ0EF%2F9sPUm%2Fsg0SK7DnzwZoh%2Fkhn5J%2FpxcJ7kyRRdv3DZiA7n8gS04k88bdsaPsy0j%2FeQIxNavfVx4%2FBag%2B8W%2B2NA1tuTnqsSKVBCofRvVg8U4kqVfD95yVPJr75fn10Hzt63JhJGHSiCVVXCCIp%2BIIaiAOdFjNNkwjRW7jqudLNy4zwYvj%2FHACbSlusSF4yoWxsu1ZFHqdRGxbaz9VkycCe9cg&X-Amz-Signature=d75e59939d8bd1d30a5f15e5dffcb41ecb6dbd60aa268da8496324e7ed2d557d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
