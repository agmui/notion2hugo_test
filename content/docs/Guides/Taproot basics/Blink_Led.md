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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZH6QZQV%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZUyU%2F%2FlCdjzqdXZAq%2BE%2FC5gYzNVsevlGdfi%2BL5SfFAiEA6pHkU%2Bd8UCt9gpAusUmm9f8WVX3qnTu1VCO%2BShDmMBwq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCF2IKoUh0FfaA2IGyrcA%2F%2F8XhTKAnEgbLMeHipGpyylFLcose%2Bfeo8WIBSgrM8q%2B88wG8QguqJvHEqDk%2Bdtzg8lkMWDx%2Fu7szt1ioym5e34Atk%2BA5xgUEhKQ2d7xG8cX1yXf2fapWWT%2FS85RioQZeUycCsWVaQgr5dN%2BYYOR%2BntQLgpR%2FX0oz9TFLZ%2BvY46V9wNCc%2BTFwBgd0pgAK5lRELZHaLJSjm0q2%2BZfCc%2BYYvwelhHli%2BalszugfvI%2Bg6mg1mH3xqDlaVu4kf3vCxJUSjAR3%2FcK75NjxLm0Z3iUy3AYNz1v7giHrRaP13Q95meRptcLp14wdOd8IK0W8uene1GXMhsVNUxliYw2yYnGFZq8f9DQoDnZhRHLoN6HId78IZTDWRkfiHXGXt1edpwGXFT7mWjn8pvqvtsCBcmn4tLHjIF1P7RXV6x64Fc582I4I20BQKn0R6DYoVxVBQKTIbHI8ydYyo%2FyGf%2BO%2BmdkLKH6KVdl9UtJEasH0cY6N3oRKJmAi7nTPnFjW1KahEWsUbe8pu%2FY51C3pqt8Masro9g9DnvYHq5mTg9GFnHPBGEliXIASaB5eHPvj6Xj%2B688TvlcS7jw4bPZewz%2FtZsOcfhOv3vudwagRe%2B9yt8FNtoM94WLIzHZig4hdcgMI%2Fv1b4GOqUBYBiFvIsZHI7ROjJoClN4NIZ1magks4XmAA41lO%2B29qkWuoOf1CnVq3HNNiDnZzGPgx0tT5oKbKk7hYRodn5hpR9G2xFq%2B1%2BHanE2At2drTuqW6cYSy0c8QiYBc%2BztgY3DG191uITrSso1aP9jbm5rg4sPE5wujy0dKHIaA%2BTky8FtFTlJa9bJBAMoFYncQRmSmGKTXpWD0E73QkKfdHRLe669lWO&X-Amz-Signature=a31e33a5593b33af0abb50edf952b390a77c323adeff350736110eb5a8b61914&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFLBHZR3%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T131247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBV6YlbOBUAqmeeO8oG2WpZdGaAZHMw1FcwWH6rtCqHaAiA5ATT%2BfQMgPzSw%2FQl2nlQFCK4BU1Y8Uj8SQI8x7M6OnSr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMyz%2BMuLFL849XlonlKtwDkFZkMgFbeOACSY7pw%2FRHf6O6fm%2FXpFVnegdc6oCZ6gpyir%2BSze9Yj7oTQU4kbDVGq6GjAcUOJG%2Bkx04KoV0JrI%2FyclO5RC75aGweI%2BN7gAXXDjlF4B%2FpX0hfZtif841MuELZMWbRCUMZujaqVpudgFZBSyWthKA9A9yDMUvliL1WDmoaDHvoMscSHoTH10Wra31Iq7x9cjUWa0QydcclVTcMFFhJC%2FkAAnGVUFtyTg%2BBYhUYhqAr0Kh5pex8jltb9tFr%2Bsdn1L9c%2FrVVaYv6fHYkQtwzJyfci1GDb3nA%2BQje3h8GEtofD7U5PChUSRVV4CggW8BbpTLGLDLGfVIPCYLFdysFsdS980WTIgHZY1DHCMBjc0F0NYb%2BBEYdhRHMttvlpYhCKIZSRt%2BArfUxsbGPpdKBvDsYxt3%2F65U7bu70Ul8bY38GYaglRlgWTqQWuJcjbknJNwmQQk2hoZ0EU%2F%2FlmHAFKR30gAvci0VckQQu9JUKNhE5Q7oKLE20eC2mz%2BsS%2FwH0oSXFcs9o06Q%2FtMcJP0pY0zx3rrJxqmmwUvHiV3UuFOmn7axAHadV4y4Y7%2BzRQb6fORXV4GyDhB21dPtvmudUsTYGhg5rnHCjzoo4ckvmI6LM%2FZ4pBCswje%2FVvgY6pgGTI0VUn4KmfN%2FdPVZpD%2FIuDT%2FrTCLrlKRdgbTXJa8%2FufA%2Bfcs18Sne0a66UVJzBRA32X3JK7K3QrBJPQsWa9VJgQ1QY4zI%2B5Mb%2BURBTWpel5A9Md3OUqdJuM2kjySoNCPBLWUbNmGUBfNhUulIsQudKNctmFu3CMCuOdt9lZ%2F8OeqHMcZ81Z4Ccr%2B2XZZ2XFWG7V35RqOy%2BuWrywO1cTkpkBWYFeQs&X-Amz-Signature=7f6b380df7dfba8ca43fda72572a4e78bc0d626e7b638a5a1ee98b29a6f2c423&X-Amz-SignedHeaders=host&x-id=GetObject)

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
