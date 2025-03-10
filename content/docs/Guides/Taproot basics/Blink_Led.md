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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PI3BE6E%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCcJfhFkS%2FPkwWmmTZEKqvx1u1jWDc0mYLUYH9O2%2F7i4AIgaC1Kj8PDMrR1FQEo5G6qw0QFBsGiDhM3Q18VXZa3EfAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFs%2Bk%2FGP6iUh1Qla9yrcA4yy%2Bex2N5bTSrZsYKbbntf7wA4I%2Bi7kTYW0055X2GWSTm5ZcOtGao3ZAq%2FYu1eS2LrokMQtCIrC8hPITdEf%2FY7m0eD9Hv5%2FzTj735cfC2ntdDIkJrghfrImhJfaudwBCC4v%2FkxLSWK%2FAxs9N7O5aj9tvUBTv310L7CUP3fhwd36gOWgkPXc2GQKORe0tu%2BfQKGKgq91u%2BgxRQ8W2uot8jwuoUGfo%2FJqtJlyXY2T8Rr%2Bj6A2UfRL0YFvQs0l8K4YP40TcaiF5oBhJlI1h0k54njpfAx2t3EWcHVxdIUl2iwj2FnvuBI56S0AjZZJ0ddpcF0sE6ReH40LZU357eB%2BZLhACIWyRraKDd%2BODsKsh3iI7HqL6jcOMWMJLp9ptaI%2Bq1Yxf8olxVSHO1cM0dtcwKBjgGTxF0inJ8SIImmjhOPPGYiokvVmd4IznJiDJ6KeKK0zUgk5F99qRC1KpxvI1NmGBzwtNghylKJzilsb9pV6EJZE9R%2BynwRaolg0mnFCwZls0yu1Mf18KFYz3B4O647gK%2FCmMdLFAhkHXy2bzc9ui223kj7F2aQDBnxAZbD%2FEAn2nUsFBbH6Y91y4UYox1AGxPVMzxZVBSvDJ4F51ZZSRUvQkD2DcbaT9v6mMKOJur4GOqUBHCouWhwEAaVx4RRUTt5pu4NptG58C2Welq19C%2B%2B8hiYmBNYLbnw59TQLaV%2B5ERxot65j%2BjFn7TTA7%2B6hGn2DqSV8c8ti%2FPfuVuZ%2BTkAYZjeTlPagdablUn8yeLeuxi40ikRQ6%2Fy4FspWWQBi86hnnkyc3RDfXzrsv7ITPxgFLo21kjIk9tdO7JX6uKy5OZoexBJaNE%2F617Rig18hB3K4sWHcw36N&X-Amz-Signature=1f1701b723d3f587771ecadbe8f932b9694cb9870d4da8bebff6d111b5eca63d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPBE6CAS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIAshtl3TkaqVGRSz3qZmmV4FopecEt49ZouJpiL1iFfAAiBBvCOZpXjHughkuGPbDp0VLGh%2B707bSRhGcktfCg7ZsiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2OUzPOuBAvzmwN8LKtwD%2F6a6MoDLDJdcGtkCDUvguIYhHu3fL66UTnhDcKwaOetkLe9oKznSXW2L%2BCrcBNhwyWUD%2BwAqLJBli83Y%2FHFwc1btsE0ne0HeElciyxcEUwjPu2qBsvheD4bYZAXHiDemCRLO7Gc49pKcP0i3cChHVy5pNA0uGMGsCx54g8XajQB3o%2FqQF%2FVo6NtWGiYX2wzBFgDIzt5bBpUqS6CxtX6QRK5fnhfsTwUOLt2E8bcEu540EFMtOl6dKGsIxvriMaXBdOSuEOkIOdwUaZilTNaeEbLHxA8OQi7BTTUjl2gtytaHgWjPOfMXxLIK9XauHoKiqDM%2Fe2Lt77zJG1m1fndRvXoMArj8rF1ZXeZTJOxsU7zrmhAMvQiHNGiE%2FSLtq2DePq234KxXTuPCBhXF%2FJBwEhZhxsMK8bPGjjizjsBMdSN%2FuKeYSr5Ab3CDX48e%2BaiLcseeTib%2FQJwrVkl92o%2FIuTc1hWB5kEamH43hBmzjOu6q2z%2BK%2FwhrkaWBUqRlWKwShfX3v6Pnm3YW8%2B4NVx14mpHln0H2nN752SMkgM6MhIJudSQfj1BCwaF8Zug%2BeVKuhsVyUq7SmByR%2Fv%2Fyo8jPlt7HlaMZ1o3MJAM4b0LqoAzNM4Pcmiy%2BJcyBbPwwlYq6vgY6pgF3PAcl4ebX8FAXx%2FtmoQF3NvpO5uM2RbLIG%2FqCnE5X%2BBkjoiexC%2BSLHwaAfDV6ooOHp7GmcqS5yiRRUR3IA2ka0QqaaSiUwBj%2FFs5VGClreDfsWctFwH5GP67ZZrSpVxAV58WR0ex%2B3EQig4IQFSuJBlv8QogFDcXMbgQbNukxpnP0WsqhUkhKFz9FpmNGs4dYVWc0zC5P3jTvAJutihmTBiugmhAV&X-Amz-Signature=d7dbbbc30ad8c27b33c894c9ddfcb92e4e9b90545afc2a8799e8cefcd2a6c2e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
