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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJD26BXZ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIAeRoY4vd81jlwh6IuzaZitgbMShzLPKbtWBmRX2oY9yAiEAhfXhTihfdds94aKsrC3OtyZZN0QxbfUuLY9isqoVt8Aq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEOUszn5ilbcBDHs0ircA9ck3DSuJKnBSr%2FeZGCFssn%2Fr%2BEzoqbvVFpE1hyaFe8C3DhWhoKRHDW1wHPUBf88r5BLs5lcnL3gBjxaZCV625BZAEDrk0RHhK7Cs%2Bl3zWu5lIzOOWrqFIgEp2K7dakV5zsd9smetC70aGfUvz7xB7TgvuIrfTLC0Ysz%2FNVEd05R6whnt3Mg9e%2B18OVDzxLqtOLrU2tKvHPjonryocS%2FOVq0LyMWBWPrPcqzk0SvH1NcJvKIbxeofg2yVrODght%2Bbj8jENE55RqMsu2rL%2FBgx215Znj7jBDbzyqY8vRkJpWrXWyPETt02JYyEyPAAjm3FHT7xm9dqUFJa03yfRkX3FzP3yjoxI%2FAYpAwXW8NVlbE9NrECjUD2SXN2U1Sk0HcIh4Db66pt0HvwNNgS9GLXFMAjoehmEzilRgpHM8SB6W9MtaW2arS5bvWiyaTCQqF2Ommcf5gSdAPzzwZTvim6y%2F%2FI1Hmh44hmQ6I21eSPSnhpWKDrI1fljeBaSrHDq38PrsvG7s%2BNcST8xSAdhYBa2FYDGERbvAYpETOBvAcdoET7CtHVjFJwU2mU4Ewm1%2FyY5BhmzCUclIFCRh0JL6SfwnyDiaeVdx%2F9KVOsWzKSSi7enuLLRqtVqKN%2FhnuMLrTkb0GOqUBP8gmOZbk5pRWTIs1DVhVo8aj5mZ%2FPrbJcUE2wKZXcGsWuKU2eCa9DlS6Ee4hGxZys9SlpfWwLSmrsNz20im9zD7B4scKLu6RdPhAepH%2Bj8c3IhMRikUVYR8SlQVBWkNqKUEo6jQY5Bz8M1vHMoYrZvlhgBX1cr8iQphoKALPcrzTlzIzDqcNs2JFKHwLsINY9WvYKCx5y24icqb9N%2Fq6L5q2qY74&X-Amz-Signature=d03a5545a8f3c79663a60ce65820e2f24ac0c328210ca20f3884683401ced2e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSLPPUED%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQCI1IuFaI00T5rf14OYNuD6%2FpaVnoIGbyVv4%2BGqxIpUJwIgHaR5cLkAK2%2F7LDTRIsxNd%2F4f3XQFVJYPfnZ2Q5K8xNcq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDEjArMSl2CUG7HXTRCrcAyQnMCXjK%2F7SfvE1Yx9%2BkUNDYslORChqshKcn%2B1oXg%2F9i8jiBKT6%2B0NEZk1lrmhJ%2BWECeNObLP30xakRq9oHQNh9MyBZdyFLzJcvDQb92v6yWUbpaxRUdsJScXOo6w259wGSqjhxVmt%2BxX5vw7NKBCVDl7AWA5YdhyQgjC6YD9BvfoeDoFjynzNeWioYBTGKdz42j5Db%2FKytCWcG6omkAfUvRrspl4Rl%2Fd8ceJ8v6hIYW9oxE8Cz3kkte0HGX4bYJ0zK%2Btxi4RyRDJ8xAiy%2BhmomYEPqqFM2aUE876fejJSOaRoB%2FvYExpQpzPstBiaCCfs0LKbcDSy18rt7XE1WeyQ7zzyb%2B%2FSdaDMog63P%2BSgAaFi%2BSrQGEOBu7X%2BtWqRf3BGlq7W%2BtjYDnGdYdrxiN%2F%2FKgjhjRRv8vFJW%2F8riMCZb1%2Fy0buKhuCE0odUd%2BviNVHVJcK%2FG%2FteEh6pJ1aDH6b4Mc4s63PqjD2FXC1LriIVmyyjc%2BDWKjOEUxeoAc%2BcZlbkgswqP57nBQB%2FAWheONbLu9jdIxUZkobxdG3N72WBvgV4nxYXxGvGOvzbGl2sMUnk0s2TCvSCdJ3sEDyuiS72b%2BSsdBnN7v0CzD0JGftK0qOSGlmP79mDY1BaJML%2FUkb0GOqUB0J3OAcU780S8%2Bh8a8vTq%2BoG1XN4v91yI%2BL04UCGlFt3NO7ki2AyGuBOluvx9q%2B5s8YAHZKr5G%2FwRGe0IL%2FrfwEhR05mnNrxNOwU222s3eBEJBeHJVgs4lEL82Y1%2BxN6I2dbRCLQhAYa6A9osoFGa03efLw5VkzvnzsebQnAyJ6VdW3qMZDukVpdE7uTijJhtoiFcwdAb3zdedemDpmYWitxm9gJN&X-Amz-Signature=2226893fa15be6e9c8228debde86bcb27069d1ad5f2f43ff9294a41e8daeca0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
