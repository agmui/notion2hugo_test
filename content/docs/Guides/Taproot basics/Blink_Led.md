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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCWT3MGO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHrd87bhPPvZlHNGxCkSpXGvGDdCsT8zTsIOk153weXAiBQ3puR2y0PxScyqCIZb9Xoq0gTkMzCbzb8hkvAomMTdir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMZs21FzHaZf8ACvHmKtwD7IucUOXpDHlyz0cUQXZPg3OugEbpbDCYCy6l%2BVUhhZTe8lNRVnxqqU0ntxuJ8cjzOQFGZt6T%2BjguCh%2BvnmQC9akJH8IxWn%2BB940pQoFaQl28YdbjnHbn9vC4piZMotk%2B%2F4PF1stGe6z8Gz%2BwGpm%2BdXwdmmx8kwYbxT83GacyGwdW7V35MOrym5wKJulGSNLBOR997bLqXiqQUlGl%2BDQGEpFabQ7ffuDJdVs3QYrc%2BOYLfuRjso3DuMRaNe21v%2FIgX8JLEpwyEeOiLFsZwt1CNcKznoZ2Vz7%2FTbY3GoBH01PCwbFkwBXojBRSZ8%2FAQdAoEB%2F%2BrwLGxboLLt84LEh4d6hBT2zuKiwieYBXs511KEBKEwotMsTkbx%2BOE4mGkcZKZ9mPb1DWVEvimxHqlV2vxNrJnklOSt9%2Bpu1MRQm7d9w3YL7c9agD3YqWeuuD6YKDib3V8BquMp%2BkRWCD6nGBp8KhJkIb%2FoKTe1sUbHIEeJMCHARb7DNZHcy0sj5nzFvguOnhpqxEGgu4OOxdJmpGWpFIJq3YPR8QFXHEC%2FEk2xJMEwjseTMoWVSWS%2FIxWegqHnTZ0pfyDCO4w8CGnCz5mZ0%2F0nD5gtoUFj5VyYda%2F%2BsCcY21y3Fe3SBAHogwxMWKvwY6pgFTuQZc9k7nOfpzJqkHD03XE23GsYa30PteEwFtG5tDowhxmvoaaarNp%2BxraIGpHL2Z9A6Pd%2Fo0M8QNp%2F%2FGppT94RXcAAcklB8yFJjeb417sVLHwOHvTMGzIJCF6urab%2FbhizuFGHI0lslSOC2B%2BS7bnbOV2hy41oOJXgCZn%2Fsh%2FxqeaT201lozxuCprYdOXJzc39w%2B22sN9Xxth7GuRSB%2F8GzpuyzM&X-Amz-Signature=d93a33361c26fd0fd581f9646acb442c8a7b8dc9260bd85b7c33c5a9284e25fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDGVU23%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T131915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6%2BHk5Dzdq%2BrRwDGaPPKFycNEzAdRr3ZckYIHWOMIiYAiEA0n02x146iBV8b5OKZ2mZ4adj9hHws%2Bajstf9fTU%2Fy7cq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKv01oTeWAZaICAFjCrcA55xjk7Dj8wgidnFJvAIWrhfDEkq%2FJyBCdAhyJOsqGN0n0GBkgum3DAzbguC9u4b8dem1beo%2FZOklvglOOryLLi0VdqI%2B%2Fuzp8lsVtKbxFVHAAv5V40SXCtU4rVN2E92mz%2F5xZhJhFTzBnGMfDzYXPaam0v75vvAanZEscG28EMwBfI42DH%2BO0TLkRfzYFhYrUkj3I%2F%2FPyLYsukYjrn80i%2FqdGyCwbH6rcj9iK14lO6TWdKKJxWkPnxbboZGRKDwXOoNeleHqgaurZ%2B%2FXl2enMTwuRGEfeuQdTqSxV%2Fp3HieviL4kcpNbKNwK%2BX4l4hZZFmUsDpSAE9INye7YfWEgxIKqKvUe5%2FihbkJAWFAM6eeZ%2FLTW7TVqCGSWoefM15Gxicm%2BCrtxRExGUmjOebI7GVFcmH8TvBR%2B2VdgEP6TtNVhZJgnRpCmH2CcouxDH4C4iaUcECKnO0BhIn1ET0GCTt7GeW2%2BWENAItaPex99o3JDuzr2K25PxrtNNelrItgmzDRP2rfa1llJYXhYNn59G9cRKZ60ikBoBQNad%2BwOlqr%2FQB0CzrkggFUZKEUUkOpSP5JXoPhh1xuLZuLvEzn9IUljsLudKo5OVesCpHv6JAyLE3xlQ3uWiNFrWTzMNLGir8GOqUBTN2yQxZUv7%2B0EVwvr7oHP9OUvugbCB7CxBrDE3c4keVSJOFSTzXE9Z8%2FFjIbpSf0R41V7cyduKsIIyHZchrL5888mmnSnlhalqYepPufwjj5fyEmdT5fpQVEKeRW3LE65vub3Z3MzTYLtS1Y8gIFSDB9la5ZklK7basnN2MBL5bUdLlSOctdrfEyG8QEJl840%2BsIj%2BIX2xGWAU4zYA8r%2FRZQrdta&X-Amz-Signature=bb49b31b84c5f7fc0fca15e9319fc7ec6246f503c55c558ee6c9d509312e8943&X-Amz-SignedHeaders=host&x-id=GetObject)

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
