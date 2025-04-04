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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPG2U3SV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS0933BqAtjxw8CF9yPSWXXi98k15CdCw5YsNcfWCF%2FgIgN7UOwbr25H%2BNStxGORtcc4XaM1byiPnBUvTxWBH%2FWawq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEg0ZorHrypdgvZVLircA6GpI2TRrq613FdCg%2B8cISvUquc72pCNjsfcIyGr%2BEJQioESb%2FDNWVvBYslGIka27%2BC%2BYFlL86GOpEaLla7mUcuC6y7hruce7t59U%2FD%2BfWFRYGnSTrKVQWuJ9bmDgskHib7ds8eXcuTialKV1u%2BvIl3GTVjivsVpUqPxAIgT2NRMl5Af0hMeasoHVHv86xF8IQRQTO3re3ep6%2FxtcawjfN4%2FITkF%2FZm1tnFtmv%2BcskhzMPQ10h23GhUnclxahzB8rTBMFoPlqsGPyDV1%2FZJioN4LsWD%2BAQ16ulRGTjnHfj8mn1cJGkJxeWluPykyUfhUkFAI8H6CQaVn5Kt3bI0zYXMw5JWtgOwlYlFiRCVnCyPkgEl7SDybdZmt3pTP9anwSgpR7294VXGfSvlu4T7BzrZFzgyYE%2FSYlfifBTw%2FY6MyugJM4r26v%2BEbd9SIl4ysvqgm68ClLwsw9HMKuruEyCIqk20FlCwrNaRHHZSDvW3Y6UmBUuF7dp3yKg2lqa9mUsBmhPZgW57xVXAN98lbLFnuyIyYQMsbl%2BAoI7nlKt4M%2BPKKDm9zHwKIiDKRHKEnj6qmxDfFmRQxHSj6WUHgJrFeGxndeeTf2aKjl8zsOwGxwDkcsCsD5McyuHeWMLCcwL8GOqUBx%2BjXlkDAR9Gs9aGK%2FPlLRHhx4%2FhfgOk9QPQuFL4q8f%2FTCwZEfAHGzhmcRwlDY1rxjaJKHqOwQmPhqhwSMlenw%2Fg9YkImKU0iIo7PQh8W6b7IxcHLL4Sp%2F712w7MLNbqCwr8rG9inPCL9oIXcairpYqQFGk9WzZgnh6LZJ9ssY1UZNzv%2B6DrWni1%2BWOq%2F2unjL6TGxtIKq7nY1rQW%2B6nfWCZ6NFa5&X-Amz-Signature=4bdd58c27890fadeafac0d0c706f3d860060ad5d182e716e7c96262d0f02b2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIUXWWHQ%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqScgcerZq2GwDGcSvpWlUYVZ5wcH5UwObzy4cJEUF1AiEAnsGhlSyRMbA3UdJzbAaInt89a%2FISmI7oIqOevIjdxPkq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDI7BAe4A%2F9Z2OxekxyrcA0qGaBpMmYH2mG6WlHpem%2Fza95p7Tftll%2BSOUhJmifcVJwQzJ7ZaNePQTaQa8uKHOe%2Fd4f7L%2Fb9M2m4M4azlqcApgFsgoRvFLzt108BHP3AMR9NzoVIH%2F8%2BdSAh26kwOtYXGstb1CskVRjE2DOSPlMghvrURYVqbrEn2Rk3H59hBaDuTQFAdzw8LM2UIk%2F66TJ7SsuKEAc2dlxLw1YTfN73FTJh%2FdTkSfhSoGKsDAaD3IHZqhmIajoW7Ap3YZ4aSud8Bp%2FrVYbKO1o6NTMj7kaHnKCwamwBS9YFugg4ibVSMHLW3R34SBTN0btVM5fPgXyUjCkXS8kke%2FfINDf%2F6qlzBuNAoMnD6elD3Ih9HnF4pdOMh2y05FjkMh%2FjkEqed2ZRK6jllZs96WA%2FZSHcTNhJ2w%2B6Ofd7autz7oeC%2F4HOPdoGkarg3OWrMzUlPwAQuOkUICWklPjqnKr9mgOLhFITDnIh434fCf2D45E9z9OErBtON4bVOSG6z%2Fde5N6BNiSQcO5%2FLZYLPy2c3vByLd6NBmJm2YVGAsGOtBiZ6zwaXnLl%2BVaJ7AU8MoAQwlNphfsCE0gzsJo7lM%2B4fyzm13p%2Fx2tZxGO2pG5sdcFTazCQu9l7TL9sC4ibP7Mx2MJmcwL8GOqUBV4ogc%2FJCOee9SP0yES5Q1WPcIvq878TK75TUI7I6%2BsjRYKj%2FHhlvJ5XM4VDX3MpWFqQect1A1NnrUllM2AHs9mg25QdM3qhpAOEmCRli%2BEURbeVjsCxa97%2FL63w%2BHWf94unEy5M74iRTJEm3hZ%2BwPj5dZP8V6cMuxA6mqJyhceRgVI5MqsjzrqxmAwZjelKQwDh9MWMxagx1qGQ1LJmFY0W2kKSO&X-Amz-Signature=5df0e05e8a0c9b25bee319cac5f63e042453e3b5c09b360b1c8bb65af7d05ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
