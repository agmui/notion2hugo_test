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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO2LJMFC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIERQ6F%2B31SWm011gLSLeHtRMHz9Tul0MUNtPmHj5BAMQAiEAgz%2FwzIWN1JLTqqUD1d%2BTWBr6jo7YjBEhSsvItZupI6wq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDMDG%2BTEl6FWuiBz7IircA86X1TmTln%2B8XC51hqCi4m0Vg5izXAiZWT2WZujMSlM%2FRDv73Srp9VPKx%2FvSTesvB4SBT3qfHCzBHfDl0zkwbbz2dyYXQ0DBDrWvTIvmDlI7b59ijPbxU6Na4fG0oVPZsKAqHl9qjlHgU653uGbVJXx%2B%2BX8mHcXKuos95E6Uhc5hIpZNH8mharH9z8KBOwvRiOD1cS0pc16nrBDaH6cukmk6Iq5b9ZYkjsUnc0Xo90js94cU6%2FWjUelU9TjZ3D5r601xVoMgC7wVorm2JSMuHjzGbhyeMvnSRlrtO8h%2FyAkzsGXFvrG%2FeB%2BmIRqesOOy%2BtIjPX1FH2p%2BG22cBKrLd2Yy%2B1AZSnOiORk0hO5rHsbeDhYf8GWsxMPTuglgQ7kI2By%2F9jANtwi3tyiQIpS4QWZfU0T2lacy4Rc14zHGIWcpyKvNKgaQ3oTWD89Cin%2B%2FSM2AiD6FiBeOGF3LjWccTYvmZqdFs0rs4fEwgHhQot1dS7n7Cjjm3%2FtSSgjIYeRbfRk2u%2F0hy9IRgGg9zBOUKaCWReQ867ixRPasNZCHNxei6ZwZdCYDisHY7KViRiTGaqrK2IxbKl%2FHIg7y9w3NmgCKw2XyBMB92l%2FpesIhhzGYQ4MyxzYuP1%2Bf7MdrMOnxusIGOqUBjBgG%2FNngglbC%2BlGXWZJlwQqZoqsNyS7HrKjvZ%2FGgL0vZzbPh6epd8%2FtDIVqbN95Wx3VSr1SxpVz2w7Wug97X33Na6t7427nHMCOA0ZnYji5tAcy9vkgrl4c%2BEN5%2FdfUozFnmhAqpk151eYu98aASYDbpQeIujYer6%2B2XTjcm6uwojY%2FcGQqOqMhebWXrfXNy9JaqsHzo1BcWMVnVrarCJv%2FnbpIV&X-Amz-Signature=7119f648c0921d99fe92daf7a1bab1e5bf5438e74a4c6bbbb43b15126a056734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2MYIOJE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDfj5Ve%2FdFC2iX7f2rV6nfSH84CiKa8cm8IiFib0FRdugIhAK3dOoDxJFUqP5DkuKFgfZ0YTlVoK6b0Qcnzba9HfUXeKv8DCEcQABoMNjM3NDIzMTgzODA1IgwLpoQHPeMOV%2BZqGcQq3AOhVKYVQow0%2B3eBVLxcpbueP4TqxeXSBIo9rsbwvNfbf%2FuvrV98z8EysdOnXw0hHz9hJKIYh8tljRJZHusbfgO0VM5V4fw2x54zqr%2FzVitD2nG3iPSKTIaADp6Dj6dkK2WXQ7gfk4bfWaetYpLIQK4i4XP7rh6bvnxTMj7BJ%2BCwf%2FXzIuXQqUAUYXykf9eIT0LTM3j0DCkMSrlZKhAYX3CBRrGk6mKIroMWHnfMHfrv%2B7vvnZ4VMFIRxa4OHhFndJN%2B8NcDh9BRTqYyEBmwEF1aYjxm0%2F9K8FryjSMyE%2BX%2Fy4pDM%2BBzTAf3BPGnVJ00Nro%2FUrfY2%2BS9Fi2h8y8mRYyINSMc1i%2F7%2Bed4oqHngJojHoFM2%2FARuKrb9H68Asjw5byKpTZAfR%2FSURW9JtuD4KXuiyWZwnK9q4VQDx8m9SlT4JV7XyC5qTQNHPBt7nnmzZWkd8Vsw2Tb9wEr3rMiYxN9lgzFl1GkhRkQEKv88zwSVSKhIqTH%2FKMHKumah1i4vnk7R3s327Zcnnmk85vQG3WHPYUFM2kYx%2BHmTlk4TVimLtpy24xHLYoezRQDPGlMmHOM1%2Fdg63globLHhSjdkv1sJvowPmyqDfAcIXA1mIICV0QabdKGjQz3zs6KuTDiprvCBjqkAXfFDvl24DnOoygQK%2B%2BvI0osrsTk17ULw3FIiggEFjgwP1K1uOBbMW9bi2YRiPKZAe2jR2NTsWodU%2FgG2R4A5LlJrhvUugRhaMn4kipw8lnlzaB2uE28i8d7YNTLoCwGXXr3MShPb8r%2BKG849X0ZCeCvne6GQW6kNlRozAJpWdBTPJ0BWPMFtEh0nX8duwbg2Eftx%2BNeao6J4hgvILeGMf1IMHFi&X-Amz-Signature=35a22576832cef5b9b158724f73852c111a7808149927130ceba8d45e3cdc1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
