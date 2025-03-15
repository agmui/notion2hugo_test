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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GHJYP5P%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWX%2BeVmii%2FM292w17sZmz%2BVIibRDj6Fei1Tsq5e93c1gIgYDpNf7T14P64Dffw4BHvf300fHHvROGYAIXmTA0TqTsq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDBnBzZnNlGQHExM%2B%2BCrcA2yu77aP48vXaLDCrUk%2BNp57rX4s%2FZr5szODq8T%2BJGvWZNNVSkr5mTDuHRS1ncnIP%2F0fi1zhWVJy0WuIcRrLTYKj9SKUfvLSuvrhzB0WWuEKIXXS6iSgXUDPnfHMqdmBIfd2CkCK9hT%2B2POScfkB0JxS4hXkfvFz%2B9%2Bw3QNBwytjsDwsrtGjJVRRDcbDVkrUeCUf8rWc7W259lJJna1l8mjEQQqn4i9xnp3nAnSnd3rcZM9jBBxQBSKP6A3hSfEDvd6vPJXELulBx98XlUGCMWyfFesXrDQE544%2Fhp9DDASKdmEQmExi3jmBA%2FmK%2B%2BJMY8jbzi%2B7cuVlmgSRW6IKeKleJdA%2BE%2BMWHLzT64RG6yOioXsSmBtBtFZ3Zy0Lib81nxmkq7qbDKxa5cHQgzU4ilV3gw4wujbYueiISsRl641DQE4fLJnWFatDf1ps6GN6%2FCEAFeZ6g1Az26JxKkP%2FvxD9cC7p%2BNQ2bf8nMp4jFB1lkjTD3T4SZIF07%2FYmTS2GjudmhkkZe97BQ7uuYvUGe7DeZHXQ9aDf0NOYME0hZEC7gLgLIHZFE4aCIrFMo40Hy0sxSM2f7x9xcOOLW0xABs6hDwKfnTlK5BU21UyltO9UcmXKcr6%2FbEoXFoB0MPzr1r4GOqUBzYgyWFiDtsP0AOiMOpac%2FfbvduiEBlGjLAEWXy2IUc4dXfwl1YCN41qS5gqnkXC6p5xOesqNooEjVT4z672dZrqGIES%2FHQqb%2BAgCSvz045KOPJ1vPIOtaczcJ7%2BnbxVREbTWwlEehKUpk85ep6fi%2FdMXjjHCQl2H5I0WONZ9ZsCSVJnc0HfPUEdS7YEwMm2uJzf8zgks7Fv%2Bioq%2FoQuJbsbgakS7&X-Amz-Signature=a60f7bcb88a4f74f9950196af4264aff89506ebbcf543f16c73076fb6af72116&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCBLDOCE%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T180929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7umzKHUc4ionm%2Fpp%2FCL5HOiiqZuf7s3l4mvEgkcoW8gIhAMUeH0T8GKS896LcrXFoDzqmBZl8DWdkTAyc1E5SgpvkKv8DCBsQABoMNjM3NDIzMTgzODA1IgzgRjMNWmXcVgxeWewq3AOEVirNqIcWeZEyNLbJ8N1CdsE%2BMaBDCN9O9x3C%2BXayKkVDyT9rxATvGc3UDOHV%2FroG16LLKiaf3YN%2FmaV5kUMNGBw1486Sk5%2F2ZClFXz65YysxI9sG%2BbEGrc687e1hLzHjA1Q82RzfBq6L7cxDP3UhduMnrzqIkeAqnxaTnuhFhccuABUwSEFlfRehMt1lPZiuYlGW2N9Wcm4VivYICDPWMVGTRrgN0y8uycYncCJUNQYhYW48V%2FjjnLLM5gxXyNHfuslkT%2F%2FeUAUyb%2FmjHC03GE8zyXOhelLW02XccbCvSs5hwTxn8S6d7Liq8l8hILCa617mUxU1JJk2fo53jp08yGXc2lNK7d744NKzWW7%2FSaIEGjlYkFg8i1fH3pH73EYElIeIyD7hTCIhgEfWIx82XUSaiuddO7FD88lbVnrm5ffIAAHLDKn5hBZLi%2Bu2wQjR9K0SQZeHH8h7o4NwAykKChTF3kMBdbofLaMUrrFhzuEmj5G7fCmP5S8eTTKpO6uThvIZeW5GtTmK4Yxikn9VWK9%2B5%2BRx0Rknvk5j1%2BxThwoUFxn6bWm4B4aVFem3Du5oFk8kKb4D0ClfMhccukjUUsib%2FwhroJHhPhUSKdqi50ZZVpOVZGYzVfPJUzDm9da%2BBjqkAbwaeJugm%2BBrLvuduVK5hG51j4lxPQYWgLb%2FdXZLAY17WpN%2FZE0%2BubX5ys4A3fWttpdWXdXELRxQBYMuTyTtBl9no1etirvGKs204u9pY416zS0rKd608kNdjok7KcdVRLOgKoEh0bTuJvHIPxLPQZiZXVs4eHX%2FudOhYuAxpv46K0t%2FVY5Nl%2F6dajEE92SHYGCdL3p8vpNpoR6MrL8cc97ilCDd&X-Amz-Signature=2c0b36bdf3fe9f53fccb38ccd2d75f39cf3b3a495deafc5433fa19cf8983cf73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
