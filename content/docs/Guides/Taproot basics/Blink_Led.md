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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLNVIJB%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3ef429clNaTEGj5RX1ij3hoUZWca1l16cgRmeQ1BuUCIH%2FYf4%2BAqprpagtOA93LDcJqGTk%2B6MWZvymn%2FcQfRYGbKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHuEb6EuWSiWzrA%2B4q3APzcaE4ewLkES5ieD1ZZQOHwji4koXc2QkB4pXjpC004ig96%2BeamtnsA7aBoGnLK%2B6PQekNS2lv%2BvCN7D4LGSal4Gfd0Slc23EHWh2r62V2m8rmByR0I%2FnVJtp3JIQjvo3%2BBejfZH8aWPMQVeg14e%2FXj19pu6gvc9AHrEU9TaRUIM0TwcoaMUPauKZ4e55slT9QZu6BRqkmTrzrZkRm7h0wAUW9zYJFaOOWv74sl5OsXr2XGZ9Fz1tmZAop9dL1CXk7YrhZE2f0xApr4rUqe3rppPuAIFBpuoqUSiQKJ8DlW4bONyjNPGZxQJRd9NvEE5bC4EwqcyfPAwWuw94IxBzlkQMc9ox%2FnZZaIsD2JoBucGvcDcJhyd%2F%2BgAXiSET%2BFrd56nGY8oWNu4xS8u7EAfct%2FmTTT9qWzctDuvYCmPKpuVHoAHD8%2FnttbVfWGF1sDsA1DPH%2FbWHaj632RD4lMuxgZ8fWpQIGDPI61KeW5O3S6DqoKTfVnAyhW35%2B6g06V3jXWxoNZu7QtWVhAU2rZ3chFiy2pigFzjxXUBNP6Sbrqex34pMryQVRpLXzuz9runCEllDECOw1gK1EZfduVkYQHQMXIaeDhdAz63P9sh6wCT5OQuGQVKcNWL%2Fd0zDJ6N%2B9BjqnAc%2BaLiwEjh3fuUdd7ZvnDmHQu7pUpVrRcM08BQmfrA2LagYuy9LdURnf%2Fye91dJsTaWYoKrsHjbGJ7uSoFxpI9dS9a%2FJPVRLRhVnmi9oKkjbekp2Lyhgku7c0AFsXKZ0mCWYnnkOldaDSnZG%2FvBqdmxE7RnQOs6ou4HUu%2F%2Fs5xK0ze56P5fMq3xVFCYtrR1hljqnIAEZFKeBfBx2fYTxyRpt0dd8hNxH&X-Amz-Signature=00d9dfd2790b5a9415754234f9de95629fab214341d338c3b81a5253c76f5d76&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGP32IBY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T040957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOb2lSQwtzQHivMudrhHeQIwBPb84FcQpYy7agJWL8DAiEArNhQyGOrqwBIrel24%2BRaKnImaZRmOlkEnfDGrHXNa7gqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLwtMwZKAG5MxuCC4ircA4FxzqEWVLynm1VPl9QNwvG16LA8X8Ut1JRnY7NFGhKbCGxKfiwyib2dL89HTkMgnPWok0JgLOkzgnLvIvMAC6vKrvmPA9ynum0iKV9wnpS4%2BoSw%2Fmcp5oTu9asyD1KltpbHqz%2F38poE7wAMi3urbbykzPlZ4weyaYoHD6j0KaePTLkPTSFrIWCOXdn%2BPghdBQEsqpgTVJY7FmWeqjds0C4yMK%2B4U2ukzSem%2BkDe11raCrQAPoA0p9KsBZfqiaSFl65nIGXYcux%2BcGCRXC6%2BRc49MOqCnHsoZLpDrdHxErl0FZIbzDp1RQdsAwcon%2F08JeAXRF8mBBYaWQ9dftpj62nBK5YJeZxLuwzrvFc3XKfEOISKRGGU7esDqXAd5rVU1jGDuvhwhUxo7CWtj6oauojmsht3DVzfr%2Bo83RweS4eVDPnHqPN9BeIwDCiYg1dLvli%2BVGlZnAaBhlaE69jWjjEPJj3h1JEeR3KMxjxXl5T7xwEQaftmjTNla163ppWqwrFO8bwC4xqeNHLL7AmRNBD%2FqHnfAtZMLnOBqO1bz%2FTNEyFUCWgJaFzTQ3v9K2QpmXOo8UhkUlhrOOJ0vEiQglJ2MZydXsKnVhTdBojOvndrlFrhLwFpE1B%2BzDZAMNbn370GOqUBRHVC0z5S3SZ1TDcG4KJO5PXcXSM%2Fdxx0KYEfkPdAwHGnveVCExpLE16F0fqk4csjV6eqUIZ2pJvkqdrkEmYpb2Rbo2J0qKiHEBbv98ptkeJxeqkLnbRrXtvUSFN6aWiZhlQZfqtdR1rmvtZlvtWpHV%2BYC2xzQXGcNj4i47EFDlCo0KhtVLbloQeiOImKiNZ81CsEO09Tg0XikvbLbYW7faZNU07C&X-Amz-Signature=94012fa3b83aa1d9b78d2753211afd3464c4f56f4b002970771cdd9fe38a608e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
