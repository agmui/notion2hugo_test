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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWEEXAKM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK0nq2vO01fTzBV%2Bo%2FpoZ66YoZOHZ9YY%2F6NCTqbLFjVAiEAyx9BJkx7jKJPQuSAjR8K5GokkW%2ByvSLP3khaRPpax%2BMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAwzsg4105g7VL4%2BzircA6ZO528nWgvG0I9qszHfDe0jHSImcJ0Rj7U8WM%2Bf8Mofibf60n%2FHU7lgRPy9PvJTZMGWPnnvkJI3IOt2%2B6GRS4x8kdWmnmS0LA9GkqEOKjLQtHMjZG%2Bou4Ff3fesVUrnmWhFCY9zPGlNEIvKQLcIMK7r5zU69fSmg%2B5fVb2gh9PD%2FWa9%2BEwqd4jIN8cpET5y40q92qm%2BDO2g43idprCd6DeEY8VMU7ipf2kbivNjloVOc2bIjsjQJe3ErBXyY3LknqWb2p4aBHdQRHRq6SnS4oe7jDoXEd9LoLDG23bpA4Q1st%2FyKK2EWw%2FJ9Sr8TSF%2FamuY14WiBxzuD%2BafC9uAoitogLyL%2BRX4FAvoQ55Y6Wz0kJf5zLZlGzd0VpmxWEbp7FSnU8J72WGCM8JV%2BLIc3GC3r6TiaJk0ghUC%2F5L8LNqzmB80AXjcjBnlZL59NNXaVvoRlQ6sGQjdDTi2tjRfwUVXFwZ7k0pmsQNaI%2F83PA6o2l6wUSUCbdG%2BVrG%2F5sQQiIpYiWu3VbJuDI%2FvF9Shha%2FuMCMdchhRkRiZ6xYrEt2%2B9%2FuqEDT9njfm1EEtQ3fCh2jeaMgA2qqIVNJdPPIkTI%2BR%2FfUxeDiPdZtdmZ9wcpF5DWcvnkQaplMQHOHMMPGA1sEGOqUBZ3u%2BGTsXC3l2EWUeP4q%2B%2FlSWb8G4t1JfK5I6GNx1aE3Pr0PQr01wA6erGIm6S2DUw6g4B%2Fn5FMeuDZEqbFoZa7JyPKING7npjYG8qkHc4J2AlrOlzU%2BhahtzFRwVN1lSNxBiMKchcc9PRh%2FVmKDa5x7%2BJd7eJJyge1qNMDIE8nQtcwjAPXdOMM2pf1A5b%2FZcQGFYpqITB8arDVybt9ZqXQVNkyrV&X-Amz-Signature=b8e2ad5b102e3c5639dd471f4b6594d7761d0ffda90cb0251852cfbede00dfd5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWEEXAKM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK0nq2vO01fTzBV%2Bo%2FpoZ66YoZOHZ9YY%2F6NCTqbLFjVAiEAyx9BJkx7jKJPQuSAjR8K5GokkW%2ByvSLP3khaRPpax%2BMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDAwzsg4105g7VL4%2BzircA6ZO528nWgvG0I9qszHfDe0jHSImcJ0Rj7U8WM%2Bf8Mofibf60n%2FHU7lgRPy9PvJTZMGWPnnvkJI3IOt2%2B6GRS4x8kdWmnmS0LA9GkqEOKjLQtHMjZG%2Bou4Ff3fesVUrnmWhFCY9zPGlNEIvKQLcIMK7r5zU69fSmg%2B5fVb2gh9PD%2FWa9%2BEwqd4jIN8cpET5y40q92qm%2BDO2g43idprCd6DeEY8VMU7ipf2kbivNjloVOc2bIjsjQJe3ErBXyY3LknqWb2p4aBHdQRHRq6SnS4oe7jDoXEd9LoLDG23bpA4Q1st%2FyKK2EWw%2FJ9Sr8TSF%2FamuY14WiBxzuD%2BafC9uAoitogLyL%2BRX4FAvoQ55Y6Wz0kJf5zLZlGzd0VpmxWEbp7FSnU8J72WGCM8JV%2BLIc3GC3r6TiaJk0ghUC%2F5L8LNqzmB80AXjcjBnlZL59NNXaVvoRlQ6sGQjdDTi2tjRfwUVXFwZ7k0pmsQNaI%2F83PA6o2l6wUSUCbdG%2BVrG%2F5sQQiIpYiWu3VbJuDI%2FvF9Shha%2FuMCMdchhRkRiZ6xYrEt2%2B9%2FuqEDT9njfm1EEtQ3fCh2jeaMgA2qqIVNJdPPIkTI%2BR%2FfUxeDiPdZtdmZ9wcpF5DWcvnkQaplMQHOHMMPGA1sEGOqUBZ3u%2BGTsXC3l2EWUeP4q%2B%2FlSWb8G4t1JfK5I6GNx1aE3Pr0PQr01wA6erGIm6S2DUw6g4B%2Fn5FMeuDZEqbFoZa7JyPKING7npjYG8qkHc4J2AlrOlzU%2BhahtzFRwVN1lSNxBiMKchcc9PRh%2FVmKDa5x7%2BJd7eJJyge1qNMDIE8nQtcwjAPXdOMM2pf1A5b%2FZcQGFYpqITB8arDVybt9ZqXQVNkyrV&X-Amz-Signature=b6d0012168cb0acea72223db29df6bc43ef11a37252fcc4929bd40657968e682&X-Amz-SignedHeaders=host&x-id=GetObject)

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
