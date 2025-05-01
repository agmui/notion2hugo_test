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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQBJL3A%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC6VdPHZqTOQR0mv1c0Dp9joW0SU65hHLSPRYitHsDG4QIgJRy6%2FXrHSqPnAwJl4CPEb1gbmhGHxB2dq2zgzTIp4lUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLk4IN7hqo4ZxG0CZCrcA56FvHkPY6P6KvQq1LENQn0MAh%2Bwdc1jsDuXwZ8NcWBUtXhPbIJqp64ziO%2BfSlZ7XiuVf3x6vILvj2VadbIvjtdsRBLaMPIEKFGjDKCfnHJV80xYw65xk%2FwTTxqRuUVUCWna9WIIz3vwG%2BsKIYcwZ91eDE8zvNT7rbiNBqt%2B2IqjgN5vOnKxsksom8NZXYeWPQkxlZghBmAeq9tjxCCCL8snqs5sUlBq93gf2awhyy6qPZQSu2jsk0SDN%2BP%2F9wFSWtDY37uqhcJebudgaL9tzfpIpN6ykLgpVG7xjyp%2BykFV6NZvJVVuAomk56g0s8kZ6Xxid94FbI%2FTFDFu8gB%2Blrc5ji0DblaM1jDlhrG0YyECU4DEYy0ENazyQ3smk%2BLYxhVYlIagG%2BlXpuxPVCEPLF1z%2BC13Uh9BKhwES3w6STPKnGEA5OUhy5hxNkKR6z%2F7fWgu9bPEqjLXgeZUzF8VudQCAp5V%2B3ARnoMAGxgMs4j5C%2BUBH6zMROMyFsP5G7WVzguFxcxyh7teyG3lcCiW9QZwDIzC4winyBnPk0LsmBglUCY44UvvretV6okhtTh96zygfivJa9xhANd1%2BQ2HbHKxALPJxcJHZrPoqFtzZe%2FkMENTv5QXuEPh1yokMLSDy8AGOqUB9R7NmrD3N7Nr%2FqROk1jrVFCQK7wO2BaY1sOZDLYYS5hy5QGWx6mSTpVgCjhwws7rthRdxvFgzXF36%2Be6ZqA8xHt3RQhpWsyWrIjiyLe7cT%2Br%2FVdjX%2BNSyC630kE8AHSXjVDkmvj5hSH2jOXcSTzTsTD5tXk7idbmrL8CfOqKaBsj01vn3sk8KY07DPqligXmx00OEsoNIyDjV3%2Fn06m8gVP01c%2BF&X-Amz-Signature=5de68f75d94337e9d8b9064416b4f55e899166419440c42e27a7413e5cf9e6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQWL5XV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDKkIdbMTc8GUu%2BzkSKEvJ0JI5jejyjHoL19PyhJzB8IAIgFRStA0K5mjbTog6yA5wyGZNDc9D%2Fg6P%2Bzd9Y1HOkiNkqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIE7P1cyaE68F%2FhL9ircA6sazUpVGO7LzNc6EbTiycP8y6mvrb9LOF%2FutrQA58g6eB51kMqbDBwQ4FUXR2gOkcjVQe3CjtH4SgfjOQEOicOQfqJQVkYTwNNYJebXC3mzfRi3eflEIgm04gAEV9V1jWO9LueopCPCUZTgbVQxBlhw8fJ9TB3nBFy85zbPVN%2FnfR%2BvzqN3uWq1NL%2FgjAwRTIre%2Bg%2FlLy5bW%2Bdp6a6TLshIHRf6CAsNJdoMRWR0OUrDqpkJhVKbQp3nakzGLaR%2FZzmcEORQm50VrqEQIcWZOYkxWzSHPGWXvTc1zpG%2Bleb5lo8uHZhV9LvFcDFbUqw1xBBhbRBSpZixb3PiEvDsfAQgxzavJtkm1xOCqcC1BDu%2BRyF3liAZX6zIKLNui0zXSdZgtqFrt2FDDdut4pNzyWACvsSm9CD%2FR7HL%2B8hMA0UQoVlYqZ%2B%2FuR%2FtuLh89w0M2un1sH6qWNJmQ6PIzXh547%2BmkZeGXEL6cd2jYwaOrJwYi4tZiDv9KPmy8Kxj9RWulZmUEy2LJqDSGcH30NHK2YLRynQ8xzVSD4xZ6Ojbwf3bBN3XuT6jOjP3Km7%2B%2BoymuEz%2FRrFDBJA0WKKsRp1MZ7IYWsC2v1DVyZvAvZdZ3aZNdlVPj2TLuHa%2B5x7aMOKDy8AGOqUBkpcOKr%2BHPVogU2m19XnwCAcuImhOj%2FOstIITSXq0HZesLZqDNghvokDkDrkX%2BqOzjewyUElFlYsZg8mSgzFPjljRT3TX74AUbLugkV47NPkLNlxiCMKeZIpy6jJZq0igqWX%2B9fOmGdgm0nAmTbZAmAkGSzI6zrpO%2F%2B0YI11dPZU%2FfNq8OqE9X9jtAiy2yK7aaJjWUNplprwTfnJgHxgPkX0i%2FfbE&X-Amz-Signature=dbe5692bf77a8731daac459f477d6819ef993f622e928ef6194d094e044f94a1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
