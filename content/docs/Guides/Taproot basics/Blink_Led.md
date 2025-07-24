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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOMWUM5E%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICQ3N1Slr4kSM2u0C5tlESpmR%2BVfc%2BtJS5%2FQ%2Fnn6EGCfAiBxxs7N3pv97RMcXhg%2FvP5KKWthIyifxNUqr8M3%2FULJnyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM3are2%2BU8QtmxywNKtwDeCpOVi0jN6DTwCycVFekIbhlCjLPFSg1q5tlCaVR51mUJDcWO4RLMdyBS1TPqdZDXVFFNBFqpA8O0bFlIexWeCvnQ9H%2Fu2oLbMqprhRiUFyWqvVdP3v5vgUhCJMHaGLYOwoY%2BUF6UMg00jzc1Dwecgftn6u0WuEYZZ04YZx%2Be9ro6MP2wTiB6zP5IUrHjcCMF8Xp1OhYWFlb4AJknp%2Fuy4S5IK8mzDid3%2BqXxf8A7dUjrGkeKirfJmsDit3qN8dAkCcfEZXzXHh7LKtnqFhiAxNUjQhdfY7OheLoaEBzluGByUf9RjNnnHxXSLy4z3g6YHNu6PiyEYxytcjHz2zI3Kk6eAbCBh5WUqN%2F3AnqmVwaS%2BkZ5Y9cKSV%2BNSz6pCADDReumNI8lXOsj2Hbs9bzU6HxCucct2dMYiq7zD804o%2Fo%2BfIpogo%2FipNj8JhWIgs6HPSm5AsV7jKq1pvoTJPkRmlj41SbEhkGHKt%2FL0lqpTqoyNx%2FPt160dc%2FvagdWaiFoyUE%2BFxGINuT5IxjusnjIDkCNMrX569g0Kg5vmiRSbwqafdXXQv8mzkWKtZRCS%2FY7U9cDohaoKR3WVzyqBXV4AFLqZVKSyA%2Fj46FPlBFoLv5fHkuyQqdssBAE5Qw6NeKxAY6pgFtC%2BDjb4i46P85T7xrEjGQGW6LO4ocDEw2TEnbITIR70C1hiB52n81riLxW6x9915BP6eE7N9enLhRLGNK0tqjjvmpPfhnKC%2F2WQiHuGLJVHHNz01zE%2FvAbwHOI%2BMjT%2BX7ZdUS4PMI7AsaNSpNl59Qw0Nd9yXyzLWiaKHSX1bROenRC%2Ft8T2w4njrM68Myc0CeCRRGrqU%2FkPVENFUcEbrHlZrLpGgb&X-Amz-Signature=9dd33899b2ab1fd98028d663761b81ce46e35c14bdc328a6c9c28c749d5e03fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVD7MP6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQDR8MkYlMJS86LI2txV0YnbcisAL%2FrnTmU9sXpbIs0ZVQIgKHqsdJD23Q4uMELHAO9QLY8wLuLO1FCOIc%2BRT6BTUBMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPRnFHC537r4CYebbircA87RxaXz2e3TBt208yVwrsLg3qZoOuhWT%2FsOkZ9g4DCQtbqU7qpr8BlGdOoxPTD5PP%2BtMr4pTdTOYj5i2yN%2F%2Faez3%2BrLqdGioIvdCzdEzpQ5zX94nwOffd8h5Xsnhja0sLeMWnTovLBfziym4ZZbaUYiGgMO8pPRo%2FnFYbYTsX9u0JBhzBDZJgZkXaup1CjXbpZZF7XyPK6LLfCPjb%2BMWGNDzLCh8af27Nvkv%2FroOt7hXrJ22kAZryKkEAF5pjpXxSmCf6t9tDJnu6HbWe19Us72b5e0r%2BdMSdJAKVZLoDsXAqXrHo3hCqE5wADwdvSQv4zZXClVWgONOsgR2DWxiBvweT3hF831useYu%2BPEr2LD%2BhGS6h%2F3FiFMfVI81o30UxY0LET2KyozBqCK0t8N8PcpHWLT5jqmp9yPKvPxbTqb7vWTw%2F0DOXnou9aq791n49ocK68oLyK%2FxrTqwpO7Jug91EUZmye8BUd3PFEi5GerqJ31XfsF9rYAFvng%2B1nVnN0WnMufmzRYvdqb7MG7QtxpuDl8wyB7TE7MlH7NhX406NDKd4bzChjmT5oewDB4q6XGCioC2lHD9NvUY%2F7MaTJly%2BfZrxkVVFF9j8KNZh4OeRAE%2BHKhmdkUi3fTMNzXisQGOqUBYce%2F1RcoDTEkNeNc1NYWfoX8iWaQF8pOCP9R8WweqM%2F0qdS5MNiqWLBQwKKjaz7tKc3H6IaWvduBapLlkJhQ0f12TQXlBPm6IWXDsvBRryyiMP5iglhGBMb9nVQcgtgkqHf6sVcMVqciw%2F4iyqGNIoKz3ViYD8shpzTuBpxnaBUW9Ji0lEukJcmCRKQZb4MpbhiZC4QEJXPk1Rm4OhMLCtuEyvh1&X-Amz-Signature=d01f6f2b5d3b76047694e357546c558e5098410f360326a8ffaf7c4c99c77f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
