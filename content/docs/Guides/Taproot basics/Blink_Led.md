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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673VTSBY4%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCbVK9jIVgsEUtuXDYfHN%2FejaYbSGD1LXAMOsqJ6MSCxQIhAPQlKpvmwx3AE%2BvlAX7SLCs7yl%2B1YMcK01%2FU5j4djL8fKv8DCEsQABoMNjM3NDIzMTgzODA1Igwlb8H8lH%2BH5Bn5ni4q3APZgpNaCYqYvSLVm523QaeYioMvRa5mdotFTf7JljGGDdtX2meOZ4iD0aclNxWpUKeasRhXwiMK9%2FytYtrTnFKR8cQm6U3SoGL6oh%2FodcSnoXjJnqV9upygC8a9GYIjNetCRzLr%2Bvshz1lvbeWbS03I5qoPcYbcj2TSFqXl%2F7%2Fryv7GPiBHIdukDdwc5vo3fMAxLJrU7Sbr6V%2F%2BvGuF708hKUW234ryGRw4FO1Th%2FXXaeyEZ8A77BZ9JXzeCJVqzurVSYLHZbfSYoaJNxc0GiLB22%2FMqVVaGc7TsHcmUEAvZby2OYCLRVU%2BAWSm8mkpiYMeWkoY3DT9JkL%2FScrK8NtxawUMp1vaQcqGP0OH12XoWYDDI8BlRG0RoDUUUDJFcpxd3Oy00EM7TeDFb6Cio0DoEfPSK9VCZSPAiiK2HhTA2zzOMzPA8bcLjnugdYvfATKkLLZnBa6NrokWxYB4qcpQD7KwQTjIptXDbt4%2BrVRMYKTYabxdG0T8wJ8AFJQxCHlH0oAI7k6oLKfcqgSlRjP4%2ForKch5PURHC2VZsuW7UqQaQ3Ok5JAgGnm7LyuH9US3lAeFYA5QDgTcQwqDqhVDhyuJOT6TXWArdL6EHHoagmaz0YcZpan5G1xiAiTDfjPi9BjqkAdvfhPqYfvEI5LJ0Mrt4kdD%2FF8mTAJCMR%2F5aK7I1%2BFcAq4wp058h51yxVdIZa6Z1QGMGqHRSP1Ii6DZUwGK3Qh9B67cuEtToAWMGdIXuBh7OepmlswjVN2KSl6apUJHVBoGtiSZdCKIegSYJpjIybH4O7qS%2BPB%2BA%2FnXpLEjbD9Sg59SSPN9VSWS%2BJ2P575X7J3h1VzB43zk865zo67MSkwuexVXS&X-Amz-Signature=ad704e3eba7bd6698ac687ffc3b0f0767b83918793e2e282f01677eb9d00f6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCSQZMB%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIB9mDcRT4V2guKFxVwLxRzBnipV1OkI8OdSpfMLSUrC%2FAiEA5XPbDXdnjt7f2E5ldMgZ6TVdC2J4DwLO280gE1NMa40q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDI0GXYFAc3EitBTfmircA%2BWrgJTLYfnLibbgR16qJTxotHjpcL8GYC9lLQcNxODEk1NeLvXwJzs575QSphR%2BH67FWv35DFxQ1njJrSXlQn82%2FymV9mnR%2BgsqAE%2BFzCZq5z%2BTtTLapMAYKGxaeEtGBmDifk4p7RHddMvBlnHxe%2B7xr2I6%2Bx6eQrJGMUAdlxjDXW5pUG1IPQAGHCEUKJdREkj2%2FN2B7xHObpXBdOrdk7CF%2BkxYcla2MrAw15NttO8Z7y8915etE4HqezyFk5b9ITgJluxQbjL%2FUm7zT%2FOo5Y9XOvOOKxziBjaWIXgnvadNCy3DIxVKPSgQJ7CXBzthAUAijuwEx9PUwSdMMS2a19Y2DDxYRv6%2F%2BtIU1fg%2BvOw%2FWUTxWoQmKDBXJGhqSwp1tGuusOasjU1FGGBEKKjSr%2By3vPNlMCoORk%2BqdwSs8fCYHYbIi9sLSnUBcJW7fxanip0Jd857SqnD6l9z2YNOYyFIUH9cfJIm4YNcf05tM17IWj1NqJH%2FuFfJZrmjPzqXK3teRqQfrJsaS7V8Illhb1iuHyBW3jUt0hxPQ6bjgLL3RyAlUSEGZtXJBN0TM9N%2FskRAAdPebPOqFp31nDFHFsRQubbjKG3nuhM3dKWOxoo2U9EndrJf5x4MWUrjMJmN%2BL0GOqUBywNWzg0vrGBnB2DaWe73x39n3PsrSsScBULNc5dQRWQqayhcj7bUY89yIGqpfDfOT8mBzIJxgbTbPZEGtD4hR93J%2BhNcy%2BWZPHALA5qGhgv708mAkH2kI5CFXl%2F3LzWdTgx1nBAX%2FJQXhCTLXs%2BWtmsPxCosn0439EGSPuzbXPuKGKjOEwxZ5ZcS9IYIeOEJhKct1Yizrdx01B2v%2BZgajvXj2kq%2B&X-Amz-Signature=af68011eaf2a6cf5fce1139d706adecc1c7ef56640c4ddc616a0d13724382df7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
