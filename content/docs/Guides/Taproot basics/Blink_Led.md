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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDVS5ZAK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBfLEBuNsfrAyyti8qW1C%2FOewiJaQj5tgVz%2FnrCZiLRQAiAMSrkEi2Cl8VBUTr5rJPCAagxZX85Sbl3E1c0lHkjc7yr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMvC5WGAXHtNiE%2BCCNKtwDT7BcfClPdT9pLkmXbxhI5%2BPJCE4By2%2FFBbR01YkyVipqbSA6Fqwif6dToy5yHor4VSTwNICbr3%2B51cHWqovVBeVP8jFUN%2BySTD8zoovpUW9%2FJjVC7%2BXOFMKFtRkkBKfwaJaUoMYLzk4z5TkrDugHgHV%2FvPZcBQ2uyjGBi%2ByDndJuJqnpnE%2FbKVK9F17RZ2732W7eF28LCuyIA1gHaT3mLV0OPdct86%2FgBwxEvd%2BWsNCD5gdm1A5LqXssqP64suELpXBbZDIdI1r58GIiCITfOJZ31fLWdHi7WGizBxqL9V7rpSQGUO9z%2BUooN0arjnFr3ZkQ%2BztCLS%2FajLqJ3AW1jBDbSizvuYbaSJCrbxBve%2B23fB1ImytiSatEeWBNuNSBvilL%2BhdWf2LBC%2F37JVlFCBFKviR2m3yI6MRU8GV2iRPY9i5AQqQKhdDx5K51pW%2FTzJN6pJfdYYhUJXEk63mv0FfLbXi2qaI9FTueT6uqExdezK578c5qE8w4VWNDP7VSaNIVZZ%2FjkugDCIZ8UYcfOfVrtVWyyCZ%2FSbnGMtPNcZid8dCt3t5EazAPDiDV1gdfJmJ6uUxyFNllUuaBvwTJt%2BkKxtMM5lDrBpg6j5R7fqLL2GeTkil4BPr0VyYwh4v5vwY6pgEIEraN6MW4VUoYv6oWXhRlM%2BQjs4oFt8yu0Vv8zJYTcnED2FMg73bl847eAXKHM7bLLM%2B1sakAMfVKaK8qQk6r%2Bb0c2rZRji082O03LJRLyf7mc%2BVgcjJ6eUh0HTVPFRwALU6fxPuUK2fuJlQZqezRUC%2FrZ2kynVxGa8rDzVvj6XT9vMUNA7hB%2FEC6oLW%2FW90rQmncTCqVwp2X%2FVEw8%2F8UHym4DrDR&X-Amz-Signature=083070cc48c28484edcd9209cba322e3216d73a525453b3c537b0d80d036d390&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVGYGWHC%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSKV8rO0UtulXvzOVUDlr2w24NT18n3bbHzEe2VCjnsgIgSaffBlK7GY7yvL9jGvh2BajONfsmrTStgdnpnia%2BeZAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDLIH9uyZ0A6Jox6%2FQCrcA90eGkzZ3cLDfus%2BzqyZZxBjMPY88kVOD3MwT4KhkMjWOOCGiDpSB2%2BDFlHlwdWACXozPhRjiQhd0GquDeENX7p9Xpvh5laYM213rB49xs86fppxEEsMVY4FxwnLgDWeHqGiUVGNegBb%2BEf%2BmIv1%2FoH8gOjiRn2NRCzT3i4doQw5rqASVFFD9KUbBtq7nSSM5nB2Uh1vnP5bxpu5w74%2B22TvVQQNBQJMWRQI%2FSWqs3bh1sZcfw2bbj93YKZpXwERjDujJRuuQAoLSEGlcg5nx7aKAEfEM%2Fc%2B2SLBb3ElKhBDfd9pw%2Fbe0uWC4ESEuH6%2FoJSYl0CrUIiQC3MPNQj9P9JRG6PlOHkcVrxWh5jdovKEKPYw%2FRSjSDQp3I5VSYs38%2FVqNM2B9BNnj5tcLFY7sXI0u4be92SnOaWfaGGEwsnlr%2Fd6GJGFX4H3rE6ZTvQBIuuzGD3FD9B8bQxEjm08%2BTt5bu4%2FgJ4TCZ%2BtTMTUNqVjPIo1m1LOsovU2GsWOUVOvvUiCjwBkVeu9B2RImIdNko0BFqSZl9IHc8fRE%2F66ktv6jpdRF%2Bwlte%2Fyu5zkpOvXL%2B3JVYr6jJjfGNZXF8kfmLMqqYR5OfnQ1qEo4zjxHYb2iZugCSKld2X4KvoMI6L%2Bb8GOqUBVOJ1hFdphBBSiCQR%2Bnrg9FaEl1KSlB5bcaURAVMfkERzuyYjC7pOP23RRl%2FiuL1KZ2PNjZhG5%2Fxbn01WQg6mIQ%2BQ5b5A65rPH0Y77aKDOEYM5KIPstfd8ajiSeplBcKp00bLh%2BqLF5HzEO9IjTXkZAY%2Fcn4XfQk703zSuU5IU17wJ95%2F6HB1il5eQdP89XRTK8IZpwKasClklelu7LFcUNvbOe4F&X-Amz-Signature=440133e3236643b60bc628b210fb68d59e33dfbe2b18a929b4fe783e0812e008&X-Amz-SignedHeaders=host&x-id=GetObject)

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
