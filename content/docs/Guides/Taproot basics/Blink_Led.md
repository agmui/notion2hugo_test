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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJCIG5IZ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDao4DVj8zpfG6bLAwlil3jsP2foy4BgLDjJ3bx11fFKAIgQgA%2BVELtVe7NB7wFzQCMwK5%2B8wIOzmoloWHbgwIpeeUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDIlPt%2Bc2KopaqvpxaSrcA6%2BkC5oFyvsi4G%2FmfHHtYcMmqRq98ImG7zXmZjUJLQjjKq1zCmgNzDi4D7Qob%2BMxLFPA40wFFIN6%2BACFHdDjh3Q8mYv%2F2DLN2%2BD0Dzbf8CLui6vP3lRO%2FM5AVJmpr0NoZa3hy5IJuQGc0h%2BlWOYdM7zFOPgIXSj3KcKmU6Umz%2B%2BYRpAkx0fxfaRuOTuCbv7UlNY8g4SYGr9m%2BS0w24z0EHsa%2BvVQu7CS0eZy%2FUdm68uFU0FzVfC0wkWjgqLnEOOAIJJ1Z3Y2nDV5VNYek%2FJ9QDhxs2nJJ3RPr%2Bqk6I%2BadiXsOkkkPA60FpOqhfzzZThb67hRrWmOPO%2F%2F6VfKyOuOCRI2BK0ekV3QBnj03uL9vn0%2BhJEWo6BYKUlcqHvY5UADThcVBtivdzi6eTL5%2FWgTMQgImP4qWUz6FcllS6pHiA8hc6Q5ytKn5yGjnZezggEgnX3oVluy9LBTtgZ7oW6zEa8kI1ZtEZWXQehq6d1%2BYI75I1YnFYADgdZ3JZcQlKwhikQWE%2FXbw15gUHTZ2apfYZN2dbCX6%2Ff1OEJPxgIegWbfSvf2VPKALwAm%2FoqLexXKryQFvsJ40fQtxlkbwzGfKTOVl6%2BpuMvkJEgRd%2FdMaWLi5qgLj4%2FwLsB0QlaQMKvaiMQGOqUBf2py7%2FvSjn4GX4TNjoPXu2NkyOh3luXg4Al6wliPApOsc05L8LDLLwqHAgd4Z5LE73Uu%2B4pJc0xcyWqKl%2BFUfWnACpG3p8F72hZ2wTu4Bk51B4I%2F5%2B%2F4URIV9hpffzhjABGe8N%2BwRDBu24T3e95H8CMydl%2FYcmKPyyDY6rRvff%2B121GihtdvdZlu6PZJo15wybroKQ9d2JpvR%2BWhn0P7ZAU9Xg5n&X-Amz-Signature=aaecd8c10d3359102d1055b3f1126ffbbeac2fb20bf582dc7c92a0c22c3191e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674M3IFEI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFCV7vtS3x4fV01gBA2clqGgdigxr%2FVC2oT2jALfCbvcAiEA%2Fo0IKekh%2B5LUy2jGvkXH%2BV0R1l9uajTnzsjnN9NnmHEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJNZiw%2FmcsuPMZurvSrcA5HKYtst%2BzFzSMECgTYFjKEpPBvKCDdsXvX2zGTtjm5tgU23iuuc0wiwpw9ugi7pIct%2BsK%2Fxtueu8dbAUkn8cIWeRhIoYMQXfzRlqJ91XQUbjoWkTz%2BgRoYPJosqzwy4bmEkEkntmqzfLhcw7BC3Ts%2BthGI0p4T9mwg2s%2BFIUu%2BHv1VENMZVLvaHnUsT9Z%2FJO%2BaJQz01RakCX8DipWQs9HrS3OCCRK7yigy8O2pY8wlopja1j7LK%2BlZOkv1pnL6QeIbGx9F1BZ%2Fu1K7CZB1X2rNYd%2FCfftdev1JO8bX7IHq8rD01JAY5RSnY4FUBojrJdtr9d%2BG90WOXT07AQc4vWD8b9aKty8rRASdRjIiFYBVmRhb64FlgMUpq1SDV0v1o2zDtLOxx3kSUdfH1AYvOQ9S2%2BclclcEEa%2Fn31xZbcsgZzhTlP4K%2Bn3ItnQFmIRhp2DQMtPRFFqUpZrcrAU80khl67crrD4GjN2ihIbTUPaVEVirdt1eYw313KHbLfqQlZ5Lg453WKAQ0xj%2FG0hxeFTj9dp5av%2BsPCAjZ2bJYBjShkQFoQgwGmLEC3f88HpgMc3JJqc7GMtgvrGHelAtgvzYv%2BMAWtPWQ3bkZTn%2FiTklEJX9tVY5HvtYRcaQeMJzaiMQGOqUBKr5rcEoJZt78rGMsa8syJCJ0M%2BgenKlQKZ0eFy9zXrYkCIkYykNQQuNXow10jnhTEkTiORKXEaUO8v1CdiQ%2BygLPSdpRv7rxchqHI6pZIKxpvZcDE9ICNHmqe%2Br3F2zNqrPzN7%2FxWKWM3dxJCmYsIJFF72s1gPfpAgTZcgIf%2Fh2IiIycQOVVPLaLvNH74WVwR34Mi6%2FJuMHgiOAt5NWErpqx38Mu&X-Amz-Signature=9b1b0aa342298c2268a02674a8553526e12a4059d8a3bc410d1dc68185e7dae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
