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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677AUNEA%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDqcjrXAFBYdnguiwWrYg9hiQ%2FC4kIA8hm0lKWukiiKXAIhAM6iLKfGIqxu1LMVEn3izqxQfR4F2sh3zOvvsNOFf9abKv8DCFEQABoMNjM3NDIzMTgzODA1IgwM%2B%2BCjq%2BysLySefJsq3AMkXWLu5KGS9SqOQlYzWugvou7FkwZzniU%2FRaLvp2V%2BmC8oOiANTuvIoDO58f6V7FGc8YbkGmfD%2BY2vWs4gaxQXiZgk1UArt%2B78ZGYHwWnYbR%2BherWbUoZm6aRYSLq1BgcT0jSsgkOD%2FHVMuDY0JWQ5kI4OQ0HHq4x0iL4s%2Fop5g2yNTbyr7R0mfJ8WS%2F3sTVll5Q%2FfBKqUhj9wo7763oF9vgQCFkGmpI%2Bx1bkqjN5oUMrXiMZvAuCIQ%2FyyCvuKy9Sv1JkURgwZDIh0xUiwbsbRuOdUVqLU7Rj7g3ovdK7YA76wnOFgxPJX3w27VUVJ3zIWrthTEAkR3l4A%2F%2BkXsohgP39LcsMini82KKjn94TZqMIcVZR82Ekm6SjB10AI96qeO464WwDaXlUj%2FXdHL7ElxEA6A5E5Bcnmq%2BFnNgW3HPzG4gMM1ugmsGXY4kbPmfE5A5EjJxryivJeGS49VzrlrfclFt0ESU5TpR%2BQMxZV1cdmK6EQx2If6%2FpRcy52GlzYvyqzN6wBJMb3467z2hRSphZcDoDnx39JjlSrY8QMn6ahiH4urZKeyZ3%2BYABGrBwS683Ro8IW0rqUqSDubV58gSrbBaD6QOXsasFeT3OEt0s66Ci8LSWHH4Wj1jC1vfm9BjqkARW%2F2YduLBfu8pIw4X8COOnSP%2BCrqKSDG4DwzjLoL6KzEhaVUJ2zwhqEId9t4p%2BfjLW3kZdlPyvb5Rml23FRwpQiYmiyLbKrurpv7coQ0rTohYrTxn9eQ4LDg3ysehYeiIzyoKuaYHOFZKh3rhu1qgcLXKdfGzlAhoh2Hl7Cfg8k2j40AXnI4U7OKacJSq8hbX6rRmmmWs4s0P8DAOR6twaFwYXt&X-Amz-Signature=32cafec183bbc2d9707e8356a395fac678bc65e35c832d2cee4add19504b8f6c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QPWSOAH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIAhm8uaL0jsetLcGEORfCQ%2FsIfZpH7XYNydR6QEmFjshAiEAtuqRYk9q4gKdhUUnZimem%2BqW%2B2ZqnhivB6dWvr61A2cq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN%2FJTiS5hg8PkXfKMyrcA6%2BNGgw2QncWmT35%2FSb9ix%2F8gQZnnGppVtH2ctUpYHTt5wSxzCRz8SvME6HaY3VG1C52QhVONMN3S7rfsMQBxmIQSXHDtEUL70sEMQ2%2B%2Fv6rYU5A5HVs6vUzwI08qD%2Fui7B46VrE9SQW7XbfKZ8J7V8msNmhNFcnnIpH6enBvA9PZ%2FAgEyO4SV3xQOwBk5cezLTBU6sJnZ3U1sV2Smxb%2FfV24o8TLXu7BNj%2BAD1uN37JxPGqClYou1Y%2FD6VeGBbKvhB7U8oGXiMSW8zwVJt84JxPPixskpnexcLUDFM%2FKFhknLk1CLVqyWLJ1gOuuKUcUO%2BpqDvZ4K9S%2BAkVV1K9PoV5s7B7Hmq0JnTJNG5HFR13Uy%2BQ5ZUStRaHSLFW0dLEbsrK5ZVYPU2htn3s7K%2F9nhO9FMrpyfviAXYmj3Bv%2FGOVCNoGjsHzhuzmL1p9P7sFV2wDJ5W06Y6uFNdX%2BpQKI44k%2B5XbeljlylEEMBm1jySIh7Vofs3OtnF7lyX%2FjR1btDOTr5HrV4chzZpxM25TlY6uAffCO7YD%2F3k9QFy7Gd5FIi9j%2BvpUaaISA34LG5teCtse4qXpuYKWJnrR24xqf4rxwmswSadDpBwvsNJ3pSopsZVIahQalIp9J2iqMMu8%2Bb0GOqUB2tuDAAcJUBvUqtJaRYNo0lOUbbUG8YdFGyIgf8nXQn8o9omPx1mkHOuzwCRFn818%2BC1CH9Dtsls72tUJzGC8B%2Bv9cyQTb9RjC0LafGoEcFoOnJpVwSbBrfviynZTMhDz7ikHU%2FbY1VEayhckrRG5BuyFlrT67yN3taz1k9oi5%2BTO10OzxOS0AVZ3nHY1gK7CdXVQBoxA7cQWtqyjTNeO5KoUXhey&X-Amz-Signature=04b894e776a6a26f52dad7fa477f44cf9d3008a25ada160730dc4161b076c102&X-Amz-SignedHeaders=host&x-id=GetObject)

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
