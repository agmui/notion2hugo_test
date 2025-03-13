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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNUJGMY%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9f5GtorODXtLNHDIrPhvRcNoYoyG28Ozrvzm%2FINW0%2BAiEAremVFd6hKG%2FetSbz%2FsODWMLrFQbVMK4JhnuVBqAlfEkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxf7NDcnogwefzfiyrcAyx4uaaaWSuMpPDTz4DlneM1HiRWuu0WzXPqaskfvKGbSOFqaegrhONdlm78e3jArRlyEMSDqcLIjbhNubPTcDobDM0hbLaVq6NprKqfdkCNmyhcbVjMcXo8wnyeYeQguq9Ilrr5dkjET3gIU3ccl9C1EabkvR2EsxF2dPLNmIqjvz7BxZ7NOU8PEqZag44Ui6TkI5sULRK3gbpzJq0BnjC0NKKTAoBQc8fGSt1xU5DF0eftVLEeE13OYBKRO8wbZbdwxI%2FFDSJFVmMiOBmoTC6v%2B7lE9%2BXJ964wkDF25SJ4FCxNbk7EUDJ8tKexSkoavy2RUFFJRBsJ%2Fm12m1rGYAe802%2BBKKkm0OU97zDtEauKwb8KZeisMBUjSvGYtoC8YVrb57bqXjkuRVdAAv0y5Higg%2BAKe1LQx5BYtCbtJHhXcmSN7iwmfz8nB7jk8TRcwuRNNktf8Ac3XwAHHRQVarVd57xdHtw4P0YzSEfD1wA6P86Bklye%2FD7J1zJ37XvHWXIG6nDXdfQzYb%2FVVeWFoGj9%2Fh%2F10SfvCJBVN2S4zYNiYuP1nUsi7vBfgYQPOX7fuol5GrWrWOIjWS9fXAWZdxQbepd6Qhf2l60%2FO7tFFRFOnpS%2BsWrd%2FlzSfpyrMIucy74GOqUB%2FYwwBIpeNCtEZSHQQ8%2BbMsgvUbLhepKgvGQj2%2FhbVx1ZoEiCNH1py0l6p2cXZaPx0aijug9NUk68qjgt4yZ%2FLvM%2FjBXfB5wKxWS8RvZdfDXAiO01LQ%2FlBA%2FWoZOe%2FZmaprNnlPqgywhT9DAPX88eD0eU5yuzn8NwcZX8TJKKNK1TSVpIBOEKhAVsI0GI%2BwAR0UHtTmN4z91QyM9uXyTf%2FsXqPyyN&X-Amz-Signature=4477d82154a07454f03c3e2806449997379ab91f07e95120455fceccbfccf912&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SDOGTIA%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFZEWX%2BUyo72XuY4eRpBdxJqMe1Cq2bXgGbQt69vYaWAiA1rdFhdDSg0qslkX5pFFCqpf21iCQOqI4VV66Sdnj1PiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9s%2BNXctDXL7QN%2B4mKtwDtOQtx929lTcVmEuRSJa1kEbgzzFqnx1Xm7j4DlX%2BfbikjiS0ouPQBUsfs2iU9EGYUnzLRzivfx3Hn7M3vjOb%2BlutkJ8ghwc5gKj60XiGf3hfXjQv0X7St1jemolVZ2iN4gQIL2Y%2F%2FzaxtD3RFX7QQcaezKetxKnihWXMF1Ok2u6UqjYvqDt3YCk69iG9prOcahhDfGpC4h7s0Mm2Yqzqt1Qqe6P97GmewDDHuKUR5xshGuCG0ejk%2FxMCvsNMzkQotYvLJCej82IfzYQWkR9HDyDNBrnqLxCYrNNodZUcsZ88uwt0J5l8cKeYKYV0pNerf81dVVWINFrJrUsdgOj8bqf5JW4tnHMJfUIFv0Gzsxx8mZUIc%2FfnnvQ4HCIdigBORZWp6BqVSCn87HDRjE4rzSqZ6aYERBlx2QtsHSt%2F1fCoHm%2BpFeMdgq1xAIOCd2uaN5%2FedyWQLyzmdv30JQFx%2FYv8bhg02%2B9Od3lNVzIrDG5Fqn8HN1AilSENAhd3jlxQqiKt050Ivvu2p608qs4jhtmxdJrvzOS%2FjHm6cnrnwpdaJ1rHaxAKD5wGucS495nFopcwPfCWH0RtWia%2FIzRN8GKuipXP0%2FDFPMqwqy2ldzUkZJy%2BJFtTsNHnPfEwzpzLvgY6pgFNmM8ttlQWDU74TcZ%2BzxqIFR%2Bff48iMPBYdE24puKXsfZhOMcC7%2FgkSvtufX4kXtG%2BWfmY6HzcxW3Xb8ZNRvz95agOR1DFy5YEQkJKmP63HclLMr859UZ5LL6ohZ7MEI6KjNnVYPDBOfmXhK3HRjvilxE6elB4zNjyJkwpJpRmFMBpr9d80MiICFeI4rN%2BthHfEixTMLUyZiL5vSPuAYNaRqS7MuNy&X-Amz-Signature=a6d10976c0573fb40ae278628e01b2a2737d9eedb8c95bb47fcafe87cbf5913d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
