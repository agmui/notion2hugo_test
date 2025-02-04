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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOGPNXL4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIGyhI%2Bx2LknWy3Sfp6wycXroRw21k0krnKxL2ggLwpAkAiEAqs1dVB2BYGKciKb8SahQBhbtd%2B2c7HwZEu0EzTSid4oq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAzRE4nydJUSq3QL3SrcA0HOWZXQvsz3DVIJizryhhe7C%2BApUu2YGBCF7bR8RScKwKkIz6erhfC8Q3O1b1lCzOxTLpzPpZf1q8ilKYY19XT7N2h7lKKYONJuZlD4HTynFEkq0bXF5dqXjMX2vuSrcACDb22lvW5M%2BMMZvg%2B4Bo4eSNw5uCnwJMY8IVamuifmHJEHGdIoH0dUw7FT8eSnZ1EWl7%2FnNMbWPgALwrpqBCAWkWiVXzRg6qbpsOFA5XIV8EZBhi5pfF68AQthmHoC0i9ycdGGCKdhrtxAWb0SKT4GjeFFurQNfAlju8pgBYC%2BhPL2h5Cs7yJb%2B87XnDpZCumj%2Bmumm0ONJhgwHegZKpyMnUMG%2B7QzGBFCuQH0KYOWU9upD6cq9oLeCFFro6Gah5K%2BrT0Kk%2FiEZoSW5Er2pxgkVYHFQmhVvObISZe7dwjrfXwEe4SyBtSMJVGaMFNMkrR%2BraJ6iU0hqrZ6iv%2F5HvShEqmcVn0u%2Fbn8c6CTmivH9f1QTZfD2ah9dCAmH%2BzqDdEoWMY%2FUJF%2FMK9P%2FcqpEOHeydikvUPqI8LETKOZRoo3MQ1BrIHhw3hGAG5lYBiIl%2BGgpeXzxeV9z20Sv5T6O7z%2FXvMNNQ1VMo7BG7P5uTRDCB8sg480SCoF34n0ML%2Biib0GOqUBcxU9AFBsaeahWg4VK4tg0ggFu1swjP9nhpj8lurE1uOYNzQoV5GLDZOnyV4MCc3cbnRu4xf9MQAgvG0VCRqcQg%2BaN4CEeSjg%2FhKhhXWvjqALc5ofhH3UzLPgGnRh9nLkVD3d1rBUjhD6l7fIUMAwPWYNcSxEldZ36a5aTgAy6J3yr5BlPPXKpsNlqdHwQUuOcvX8FhXyBdFtdVXlyhzmGeeMka1q&X-Amz-Signature=3e8895f580ecdad992e3cdc84db6e70e7e6ecd24230c2017d29dbf950db9eca2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T7XXVLW%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIFE3Mci9p7mcIC1SVZqkCvU7iOcl7TLaPmyeIsX5a393AiAFMvLvOnDd%2BPZulSYJfF%2BgWnXudBK8CoHsf4B27cl0ESr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMRKhRtx9uNVt5ahBIKtwDRG9pnjavV6yHGVnKDL0k5SThHQ7QVPIpHdeGlwv9rM7bQdGQIE12hTghJ3Qtyzg%2FezwQf%2FGciTo7NlyuMTAXRqGkCMEu6SV49FGXEnKDh%2FZ%2BnCwQFvVZICGlDONx5stj3Twa19XO%2FMXnVOiKxNaItdKIwS9s%2F%2BBCnpTXMFTQkJgFRcLcC%2BOW2Er0HD1flKy3n9vpnkV2514%2FL%2BVTxVAOj4k9hfOS7UTUJfXNX53SzTGYUSjgWUJ9SBZAZEgB8TLaA3%2BHKUSbq2SfEneZrJr16XIjRqinDDpyg5b5gbsTnjoZtZqITnCJjFtFP2VkllV8wDeZe3kq8qBEJmcMIfIeA%2Bi00rItcRKZxeT9nfdhFOEfS7r4H6fx4NwEopFanu5GkSGNK1LlT0YjKOqPS9mCZTR95L1qgF8I1MWykl1E2tcMpHSdh1PkCuQEpMoUAJio7IS4qWZTLZcAGRkIMNrBv%2BuS62UZpz7X2uQENES5KjB%2BfDZsJLiOp1JAOpi2VDwWIZD%2BwxSuL9nseODHR6mw32jEYyTstoKYA2Foa81sWb0LKWbfZLnSI%2FtC6Qz6yCZzP8yhnjgqA%2F8ta7sr2m8mHRaF1CjeizT1DXxxBVJ4islo4MOZ9X0qPP7HN1Qwk6KJvQY6pgEe3RvzJ06zq2JisfIleA8GRvBxCUlq3mHHnWshQyfjz%2BTbzCKZNIwr8GS4%2Fo3dxvF%2Bm34ZbkaYAni8UCVmpQ1s9D0leJz8blbmy8e4GZ2eOS3pXe6IybHdZEOoRFJb9BJS20bu%2B1Phh1bMRYtCiAmYSOtOxJ6VjZuezZjHp%2BcnsZCMPc0B5wYN1j4LoEgJD7i96jwkA0%2BKoA2TmIB84iajHOOqT5fs&X-Amz-Signature=955239d0863751268015ad3e6c8af912c83361dcbd7f9dc6f5698fa4de648ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
