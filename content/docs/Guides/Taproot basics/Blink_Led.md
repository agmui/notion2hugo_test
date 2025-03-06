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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVFCQRVV%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJDceri5JY39BzVNyBmJPYjT6CTtci7He8ckcJFp4HvgIhAPwlrVec7jPb0Yc7q8hhXipILYMTKFfCuuWhSmbUaUjuKv8DCCcQABoMNjM3NDIzMTgzODA1IgxqQVuEMX7OhsOmFpUq3ANYLRS%2FBE%2FH8clDlwSxVzTTPSzvrcqZNSXIF8i2bwjDAzregHKibvBjNvGDhkdxUoXW3O31Jghqm31hbiS8ffTfD0AAWXmP8B9ff03tY547Wozi7T7xoVZrH3yrQ7jhdvXn%2FvUkcbRqTYqhlCgsomSL2wJsNnvfnEtHzgGxb3DGKEQNK2%2BHNOs2wbJKlzehDnalbzPk8vlKCE4ZH0yccJiTWC7EjBcfohCOZhtTPze%2FFBHQZTmfOT81yqLUnCXF26U8mTzc8uLyxNxHjLZnWpwoJC%2FZjtVGUg5G6mh2Tx4qvTC8EA%2FgMRefymgznWUZl1bItHBDnvswmFYKM0FbdmKq5l76cASKlv0dhWAvWxFzOSveNX1fkIgLk%2BlpJp5ufUzkHuhq%2B77EuHfNqxDvCK4v%2FcygIxwOqmuQCA3eMWijSHOK8%2F9mfhSS7QvtAFNrLZsRhHVUSt2qtKXzTJOKVqXffMdo2dkVFtDyjPZ887tYX2gVM6eTaMkjtWrCXSKSjjIo0mTnnEQW1Od1r4Pnx6GGZKYl2urCzzR5rRyQ27flfpGll2oOsPYLU4YFd21fF9jHiDW8BSb%2BqiCKfV4SnGWiE5fQdoSi0RRWMle7wdQy9gZfnx1MiD5x7ywZjjDH9qS%2BBjqkAeOereUirTFNfuN1l7cKaYdKXziA9mzWGMQxbBK%2FnD%2BAo7682QMFNZ7GhcbZha1KHfR%2BI6dA0eVOjAuRa6M%2BkkoVt0yzLz1xRPsmqWxb9oGYqAEwe0exhFYpfAMmb2x1af%2BFvZIik0I0dTGI2dn4nAOwHsnCnnfVORCRvzQEoiG2Beuz7q%2FFmYVfw1O472gVqsVCW6cUxDlfqccNyk1jkhcBCfpA&X-Amz-Signature=20576eec3dae0c9c408d8d178529264e2aec5f37f490a9d3bbc81d0d301634b1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKU5EP4E%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT6pgsHcDdE%2FVg6Cd2A5qXPfSpvvYtx8BqNMQTQQYTIAIgdrIIJBdrOc7rOFGBZHKHW%2BIshV%2FTv9guaPY0HhehpsMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDLuQcRh9%2B88%2F3lr4JircA4VTI69m8OdPaiSqFNi0f3OT1FSpF6V%2FOW3E1DIsCQtlIi%2FNPVQZaICH%2FcnmC1Yv6BjWNARyg50nl0zIQoUbGOzr9gmzdkxcak8NhTt%2Fbjg9Q4sNB7CqNjWGR3YmnFIcPS8IUbcIfdNirLm5kFhENJ%2F%2BItoO29X%2FRYgQ4m9%2BG283vWo7uOSCRxBKDgH8tb%2FPWkOxLb8VJ53Sfp%2FY%2FuG8KW1lgIyBGCAEiZfrLFhb3VE7E3gZfCV%2Fsjky1jHZWmiEK8J4Xm%2F1HxGA6Pqf55qZJBmYdFvY7OLtJbo2JMXrpy1vIGh4PN8efU15sz1pRolHY2GrcAF43RQFH%2BNIpe18eFauQlXVfCwx594zh9ZjfZvjDfWy0HCcwZi0gOMhBIoVzQ%2BxSYO3XGgy8GnbpNfOJa68Cz4bXeDz%2Fc7nCnY45XYzqP%2B0hIG556CpoV2FUBtlV7SXlUfKpGqSjaFhnsEtxuAD89dDE5ejvxYUQU4%2BfJFIFYrlNFfJyokHR8QUX7aX%2B4VnTLbRRVAaj3b7ArfryW8DpdjCldvE0HRXYzNsKwqhP3%2ByuNzgodmEahharmcEtvPQNu7T6OnxFmv7NaNG1xv6oOgpj0%2FQyPJLhFlIwFdfi3mTr4gsVdbEw2C6MLX2pL4GOqUBEooSjjdBfXiQ85iLymudfG8TonRt%2BSeIIXP%2FLAhb3fZO7YVaWiqZz8O788jJ3DW8fVZnsrId62dlZCsbqsPrzb%2BQcNjrXMvVkfShm%2BR4mAzTmFft32Qm4UhwtoPderuWr1LKo%2FjlQ3tQ3gBEchJI%2FRoySrmRJO%2F2DJDz36eQzgd6nDnpYXjxMfK4gOU7Sfn5DXUGiSTYlbkg6YPjh3HNNT3l4CJH&X-Amz-Signature=5e78025c2e38262e9749b632a9bf43d1c8672502d3668196ce72543473bafea5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
