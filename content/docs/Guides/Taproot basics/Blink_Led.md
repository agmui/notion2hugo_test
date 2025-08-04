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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX3GSYHA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIDysax3y8fzqnkd7h%2BiXQePGje8pLoGeouYpcPbyvYczAiEA7mqYoMeBHsUcIMumksTiej6IsKmfDGt1HzrN1p7Rt14q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEgA51RcR5S8YNBCxyrcA4b%2F5AF3NPa8pwPn6ymyWSmFQQfG0aI2DQbYCFj8Y5XfsaRnM0wakGGZRKsT7Jn15%2FNEa3KxdBx1osDmi0Z5nH8UoTjG8MD%2BzzWEa7OgcNWIl9dGTnE5bR2aauHtXHA2hDniL7o59YwJdadCi9XhXSpDWL0KcXGNa6jOkdQAfZ8ZTPVQHCBPPq%2BLVpZ92mNLRZv4Y%2Fpc0%2FzMWEeRrZJg1f2JXm9V6m6SWY3geBwjrNpCY9WTTHHKVbAWdauLEl030Dpy4yfXXrfPILvw67MSKKu7KjOG4%2Bwk%2Bbwc%2BXt9iGEfaBFBDBKvXW82bkYMMytMkLeBAT0HnrBusiYO9suWOiplGFF53KIu5WTeGQAbV1FDHsFPZsjGUwbdr7%2BD6K%2BIqLwiqsIQLOzgkZv3F6mrIJRrs2v2Xjj2GBNJNDJCRnqKN%2F01tDqY07bsi2Pxl3ZhMlXcswHqvfB8%2BrALOANgJvWi74%2FEvWh40CBXPyf3j8xVlMgoDlJfLDVMfW0c6gVwJ0OdeU48CSmDusRIBgP3I3ep%2F5qVsG0Vx7rHq37P7XK2rnuw4%2BLDbSP%2FKbarj5jHUBNHGnMHNTKhzLYLKmbinxjVS6svmRhMGjX4GTofU5zNvxZc6Vg%2Fu%2Btlz1JGMLbpwMQGOqUB9n9cEf3Wjl821Hk5mq1CcvpMVcBeBp1qe9GV4KHPsFndkBjCdFmCQJq25n05va96N75RzWWgzMGnrsvg%2BK69xTDqAYV0CHAf3Q8MZAZSt%2FATTMUbYVComfmAtbbcfRy%2FibWXcs8VmD1hS7ngc%2FvDe5c2GEHW3k3G5o%2BnWbIi8bTUEU26n7TqnfW06AhqIWaY%2BQq3wubH3xzeT2eukhKxZH3m7jpK&X-Amz-Signature=a4ef14d011affdb1d9a7296400e4c6af5a3cc7648f708c648b615dfbf9ccb743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VF722V%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCfKgKDs95vTzrK%2F%2FIsh2xNYJo3rqHdvVHMAvpiaYi2ugIhALM2uLO0mj69xiPI8uUP1M6gwy0sOxWvh6dQ0hREwN%2BfKv8DCD0QABoMNjM3NDIzMTgzODA1Igx%2FcYwrHpFbPA9hbwwq3AN0tDwyKDFqDtzf89xlJvN%2F4PfOm3grJyOY8cZb1gnkIgcp6gc11PDk%2B8ZJM3S%2BB%2FaQpJXe%2Byu4ruXmYW0oaM9zvUWiJoWnUf9rUNgArKH6xegH%2FOKNtSSpoLTEGPN60jile3Ehe8rwBqsMfaX%2BUHAQskWq0%2BDhsiD0GrE7w5qE3o3wt43kvvrhaK2eo9Pfig0kVp9m0f9AqqEwgaIQEcpH8%2FbKWPTRurHzcui05vLyAlFP62D6voA8%2B06UDU7XA1no7gm%2BfAH8wSmWKZOPWAv2yq2vwlVIYfGADhVdoTkIm%2BruKjNUbZCbaExSBuZAt%2FsGeD2YSvVKaYZlvIRekNKyySCDtJBXtogNzEwUw9foeyoX680D9l6QTd8fCcMgyXnXSoKEvdvKe8G7g9zEEJsC4W1o60mGqqOR4gBCafzpYVtY7zLrmOubZ%2FOodgaAWfvicpvimF51N6Mi3ZUga%2BugNKvKXCdtiOW8ibRXj6vvSh%2BoYkLSQyrr9tLVcwx87DcMJX1JhaKJ%2B7GnbT9KN7SPqcJM2b7VUVGOmy0Bm1DcdMjup%2FH9MbIkyJho8UmXkc0sK88xsFeIIalITU2HjekiKXxRRD0ERpUEQLGDFCgju91aZfcRKDGxlJ8wnDCC6sDEBjqkAR6sFCI1gIWgoR4IQNdsP1H85p0o%2BQ239ErBmOQvEV7DG3nRdUM3jJkmVCqefZ804MmOkxA%2FsaVHLGd0dcr%2FnrEACesibJUi%2F6QfBfzfHKtSSB4jqDpNboh9vvcdmwxV6enbS%2BQ%2BEXPY87fgGhXSqjPx9wbOyUzEtZzQyxfknRrV6ROh6dlgwVndpbRTxcX4wiTh230wjKtCDgAw7D65rIOPvD5m&X-Amz-Signature=66962876c8ba2adb123b6623c89957a1d431fa90d6a3a5050e3a085f4ebf378c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
