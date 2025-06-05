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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663R5P6TBO%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGPtjn0CPvD6TxiJzN3PMZMxeQcMinMNH9pP91Qs082jAiBlnIYojGP2F5LuI4E%2FjaMijLWZIwXzuv5E%2F41BfpHhhSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMK6JSNjWERpF46QVFKtwDWs1VmEuj5Mhm0zP3SWoSFI2%2BaAmWa0cPKyU2i2HZ3zJrmtebxolACjdBadER93DZu6qp1r4AzpSBYRmUhJWCc38bBiEJ2ifLo6o3knWvnfVTgd4HlA1BYJ%2FZ2uvDpuQ%2B8gkfZshV2SXR39eB2eddf0jgDq%2Bep3%2F7n2QQT5oIZzfZPVp0k0wMUkGVgW4zM6irnSe9Yf3QhczrkrKP7uoSVWG46i3%2FTI35xQPYjO12jubI4%2F0F6u%2Fj%2BJsepMCXMi2u9Xp6ZKhIQo3W8OWe7Ea4ZfsqiS6qTGSyl%2FZ%2B9HjHwkrwbzPphb6MD1nhehba4OerU31LMya2YKS7cXdOsMl7ofjikAqd3R0xr7iiWObGGB72h1jTYm49FY3PP%2FkerVs6mfl6XQKHorswSTfC3%2FjLUue2ZgVXomz2elQLGJ2K8Sk6xwbMi5hjMwRc4ocVmbUzSlly8i5IQ0cO5lq3N%2BFwuE%2Fep6CcLok8IeOJ2Ai5Z%2BbYvuPlBNUM2FcmQSfa9p2gEziUnhw%2BPQ4iVfYHvQrjRw2KrwYyoVXqy2%2BWVZ280r2Hl2z29wL0sfyteaV8VbXt5Gq8icOrkJjdPe%2B1pvJE3tFTEsGvJMIbXK9qzw%2BCDUr03u%2BsDVIPqnOKozUwltiHwgY6pgEEOu6WSKTHhJ4E%2BAZc3iHtUnsJLCI%2BDkiFbavKkntwXsm8xbDs0uZre0TFN5RGvLEg%2F4YXeRaoo2Oky14j8F2NwtHd7x%2F3%2B2g%2BeXwNlnxRp2wLmQBKRowZVD7JJgKervxxz8EEFW9IR11uEioCe5VoJZE1pwqy6dLzuPRvnxn4vmtg5YWq4xyThETc5%2BVADTpjr9l%2BjToeIzmn%2FxJRuOUlg1Aiziwb&X-Amz-Signature=73f627b7721da630e9f8952b82409b87a46a088b7a93d9f746fa29f4eb00c7ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AGOHXMP%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T220340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIHycMbYbCXYzmsqUqLazDnOFIVELWyx3Oeo2WRXz1usaAiEAw3kd0k5XcM5XjJljk1SKv92D3a7qJ3mbMCFNI43dk4cq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCFNdbagvS4vebENeircAxOGb0hVad34%2FAf7psfnAKMxKiIoqmCcJE7NrKU8g8joCTrSmH6v21pWzAi9OqXZGHYj4a39LfYBsjsvkeET4FIIk%2FXsGSNvMhKK8Up2kb5LyziLTwmXFIeyporp3WLT5wnr41ptZ%2FKY0Si25sjQqqK7vZsUQnM19TGVIJCyDDITIPPuUK4FBQp2gKfKSpqF5QBjJOt1mRJQ5JtEJqBkcnUDV2mcDAENMHcvsWnZNcfWseNoYPPYKWD8EUhpuTIPtp0Gpx2c6AjYBt9f9%2BwMJ%2FJ0NuAkIJjIno9bLxwSxNu%2B4mR%2BOfIaxJk5GrHdsEes8VUYclIf9uCZeUJojcOgfeZe4xefNIMvN%2FAo6iURJpkePSHOcBaeq%2FdFGtVQl%2F0rX%2BcsHFLj4aCzPOzIgMomHTRyNCLL8T1g9uJ169jKRlIpB8tJQc%2FN5CFTOXp1XKM%2FXP2EQTkhknw5ueNxXPX4zGFM88ae%2BZIGpQ1xoS8hrCoNy9EE3rqRipbBxfzPAgWwpDnpR6Rr0N%2BOuhuXVQLh4YF%2BzEQi7UHQ1TAFWVBDuQDRX8A49UV4tWIUVcxAdQXGRuwp%2Fi8vKFq4QxaisInyfjl9wTmEzOeJGko6sIJnc9HTFl%2FpxGDOmVBBcaLDMPjXh8IGOqUBSWRr7Z9WgWdP3LH%2B5WbfX4V%2FB5S7hSj2%2F1iWzjicFBZT75hvH7iTAd8xkKtvSP1yqUB%2BPq9DZ%2FaxcrQHL8KjEP7pgIN8huEtDOjtPGrG3Yq%2Frkg9vqvyC4la%2Bg3W2cbB2TW1HZUphdLVZ5%2BVefwYiTagpLnhZ3KK3pXGP4gxp0lkiecoTYfHTxsUC9Q1gHTWZ6Gd4BBotDIFhXL5fmWfgpjKTC2h&X-Amz-Signature=214892786bd60eb53e29186ac5ca576b06f7ea2d74414e8c2a3c930e3c5c7f23&X-Amz-SignedHeaders=host&x-id=GetObject)

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
