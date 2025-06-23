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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ODPK5FG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIEmFBrZ9GDzeKLWHIN%2B%2F1HdojkEwCEhOvKlPxmG9dkheAiBmZBZLen1eN863lwIwf4g9zFJOnnwbjQYKOw2JXcYp5Cr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIM5SsAOUeFgWXyOkObKtwDsH3mzYqxpofQ88taD%2Bk7FLjb7sKkzuoEmRpaRG7QLzEXt99biFIUJj2dKjAn7alVPVcrV41VeQ3RpKcQVa4oFf5zWLMjdraoqaW6x4Gaz8utwiEAz1vEUpWpIx3uYDoVAwJydBY726pgxE9YK5Vev5Xlw%2F3BKbBTK7wMin2hswevopIV2R1Xw9lsh5jsrPQPPgHuwIXp0dx3HCULeSKgyH3usb0tptI2YXGaMbIZOeIRM4%2F5q4ZqKxzk4R4dgA9MM7AdaYHRCWjYWbPSFMEOcDGXbgY62cluMGkWiXvumIeJpaYd5FBLZHPkN0AQrOOmgN1hBQnoj1V3PCAKC5iykQ2HSgCR7Tc1OfBk2ngDMbXhRx1Sd7LZMt%2B8KIlDlBaSLKdDhamiN4NT8H2LnU6NN3v4F1TVmgf7B%2F%2FIyK%2FcGd%2F6bjt8jiNGAhJAofyiKfkzI1uzbOVVnvrdyTikpP7Km5HwuR0S84SaDPzFtLN6uwm1oYN5uOsVc8%2FHjI0fSwC%2FWBu9OEbZaEO%2FyAmBfQUJRPgkMFa8xmEDjDIF22njUMLxS3OjZDRPpwrIiRUhVcQAbuTR6DfnkkFlp759Fj44k4gOqNOd67qh94Z1NQVDDiBKKUM8JRzfi314LCAwhp3kwgY6pgEA%2FXmI45OPndoiAfKQWZSgdIme1d7VQHONpTW4FiSARrKpYXzqL51oaYKBqi4w3MzMtoA6xjXP0vcdd%2F5fZ7Bo7M7%2For3N2f%2Fq6KTwUWTuiGNwpk6SYl2I8WyGQjlzuU%2B4jXOclGlluArlUPwPQ%2BSrQZzj9KiPxBkMCr8bQFhj5cdeqcJ5%2FVU3q%2BeUiJlJI%2BYRCyb0QmhhwQXVc7mvudtkiE6u6zYi&X-Amz-Signature=b29cb5eb3237e62f565aa2304319630934b19bcb59fcf699f46761bdf73766d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJYW7XTK%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T091228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQDoVxMztto42nty8nM6alJKH0QshTm6RkAU8Nu6GPaQlgIgbgXhGKTsjItscdxxRpqIbXzDIRL59Dn1%2Fq1265NN95Yq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDA9d6qLxfrU%2FFVt5sSrcA6YFMD0dCgZZWc%2BcUVxymBSgPoWWt92SQAn07jjH1QpILf5LX%2BKfjUGroB31WZbi5Yh0OSd6bcVRrn6ghxDwVaU2duK502Hl5jszZ9F5c5ghu8BTqMo30x7YZOMRJBSKtANcOTa4p5bwopDWe7zmBd25TtwE1s3avBrwwPwX4Z7wxxsJVJVEbAxHU6w452krdLxiURQnxHNWucVHFeOf2o21ozESQBGa0nxV%2BDZiVyDhPheMzudix3az0g9pZU4%2FldcV%2Ftx7Zqh0JJTGLJSpJxSi6HBznOyAVCfzPUjNVH6awwjZiDRplPP2wJ7XUnL6Y%2BdcAfnRaG9ckqDhCLJ3pty8wz7IENjZp3noIPDYeZ7yMfJlr2vUOvsXfNYDXkhosYtzkxWWQc1SNEgbWxUxt6DrmxCsV5ao6aDj8ZPJmkgI%2F9xcdAoW%2BR1RRbQAzoBeI1d%2F0BCGIWZ2GApGchEsQPFhm9cXdDV05qR%2BacKi3t3H6ZGdnO81kXsV1zmrHIJJMVv%2FkWuIwINowzErjR2xkKFf2g5hXMIP1oHGj6BftoDuGKbY%2F9ylTRyGHC5A5FcXtuS5GlAzc4HfzHQpNHGZxvKcwsV24qc18vL5nQuqVrDuFzryhDcgF6%2FVu2zvMO2B5MIGOqUBVKHRDADmxocQvxYqYzM8OQa2g18gzn8mdYx3JQCRWuFKh2ZuRa7v%2BSPEE4hFxcN5R8Xct4Sf0WmwncRG1421pJDztcYQFqyjO8odsbPwdPYhFcfjgZ%2BIIIY5bZvnEiHMv3d0rqoup2RQujnI6MUAl0Nm3rTTGyN%2FV5V1NIOYsGdZheytpvMzGNYgHQxfi%2FvXsbHPfZ7ils33vJG8IWottUbdA4JW&X-Amz-Signature=c7226237b84415f089fbb2120a2626f3d004fd0ce1f1738294dd18996b668221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
