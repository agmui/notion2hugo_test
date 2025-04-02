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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXZ5PIK%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDCU17odzn9aWIkwWtldtSpkjMwAoMn9V4YBVpz813RUwIhAK7KaQT9T6ODbsVW44vXwYTSrMtkdU%2FuxL1wj7oEOfO%2FKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaBdEPQ4iyJjAqPo8q3AN5ULc7XZLlklVrKNnX9lnpdUOdw3SFLJ6X5zer5phJJdTG5rogrn2WAABZnzCfG5QgJ4DFLTzfzAs4Y3U45CMjAtdL1hiqWfyhrqyYsLcPh38BOAi4mgDRVHeK9JMSYBYuvqxSVF%2Fzc%2Fv9TuN9U7s6NeHRdzocnlaoFRJiWl0%2Bt%2Fd1IVL2gbVgvz78h%2B8GB%2Bk5IGGAVpgXYnMHkU34QVTa9%2BIJNsp2nsaP92O9FeHoyzd7chpfQWhP1d%2BWhlJ3A13XpM%2BqAZJG3pmcw9QMLemQLoESNknwfUDG%2F%2BF8jBScREet5qiCZzpXg6ashWZ1APzfob%2FbgiSd4xCqiZ%2FXjErvXr3Sg2lDKQgKJ7RF5vfjFSy3eTyRJF%2FDGXXIXggpoDv8%2BcYmjP7q%2FZB2J6Xsb7R%2BGY5mzr0f0rJcNBzSGUjSFmzNEmXh%2FY5yD8aOW9A4pHuo%2F7NOogJVCAlLhWS9J6HU%2B1Ja1yAlXacvdFpffIjGgwCtqGIl7ZhLe0q7rUJe51spC%2F9WUsiChUv9BhstYwas6qCWD6bnif3m5b%2BXTXIku2rUlK%2BlcTv6TTaSeQFJBZ6RCvrvRu%2FiCLfLilfGvSd9KQD%2FvmfwM7iAOHe0qmNfJnQ1tZQq%2Fjeit5ZQxTDW%2BrS%2FBjqkAd%2BrAYC9%2FTGEqi5jONPHA3zrBGaKlIyMXR9D8KWg9geOKm3h9DoTZRj9UWL86yXNVUHpR1iR%2BBxoN4o4RkS%2By1iZJZCdmgiQvR07OqBw%2BCzC7IjGf7xM5HEaNBtjeEDmpEhegTz8o3UvzaGQtAS4%2BrZl17tnZvSNXd%2FWByZlkzW2o5aUdsibfU2ZGlbd5jnIvcSYNscBpRFM83i9gsUSifMS%2BOA8&X-Amz-Signature=8371c8d24e8497779a1ac011645283d9c62ece45cc9958c8b7de54a1cc88163a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWCUMW3E%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIEqHb1uCPi5U8FyxDEMFJo79WhrAwdYBdhe2MNnFqCiSAiBeh9dX4EtHrgN4Fdhsn5fqaZUyDvuxmz5%2Bjd3ECy%2BgSyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2F%2F6dW2fFRNxTpAlnKtwDMYdb6OshrxUXQrkdUm4TuxMwI9aPGDN1WnkQdWzW9GxVniNj2VZcjaBacMaB9p2aE1hIDHCBvYeAm8YeH7v0gqclQJGePw4YWzRPYK9YstZSuDpB2Fa%2B7sU9EP5yN99ivUiFX1cJu5EHLcJww3bpCJ7dZBmhBum2Hl3C7L9N5v%2F1q0N3ppIdV8lP5SBuIiVMpQnsTNS%2Be7lGRcM%2B3tXLKlbi5nvD4zVQUAbcDt6PgtCRH%2BUXtSGSabzNK3Um4qSFxVceQH7DdgIuUdezJF0lTUHRklUfZtkjyCZGxpLoIx46vAnc5dc3QV%2BoeUUuXysGvvSScnK3KRkNZ3j0y3FYQoIMzdhmsW4j%2BDHFomD0lVI1llZxf7XxhMecvpA4PxFmZpSEnjPlHXMldhZXh1AbcCYWojn7x00Wy8cRaemJ%2F5AUAgsBDgJActQJsSJrjAcCGtnPScx4mASoYgidiGlfDJ9q%2F7hOaOEXzHPRrc3R2u4rmd1fSHZ4MEBNyAWAtN7Evpm28oT9%2BT5pxQnYnjqMDhGYb9Xh%2FAvVKnQIbsbCft8XBVNJzlds7Yr%2FMpCw3KKwoGMAo7fwCDHP26%2BCKYb1PeQUXkjxAHWbTr%2BXjByNs4NRlULuSgXdTrjGZ1Ywwfq0vwY6pgGyAn%2FVprAWMD5rBMseOll3n94yuiwiyvGdEcYjWso8jHSa78UvI%2BGh61ItOWWx0iBnZ73XybJuYjgF8NGMxtKziObBJ%2BnLadUUduMtMAYVEI9rS5p%2FUIsdPEyUwWOxHpHw7%2FtMXI3L6uw5CWVpQFHE3GtEykf4w%2BIImVWdo4D%2BhU%2BM%2FxhzqtjCqs%2BfrNieujO82Hbz7lzu6A2vU2vvfgs8BtSekdf1&X-Amz-Signature=f41e0cca177f3fd8765529a72c081522f1f4263f7a9ab3f9bb4581361673d3c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
