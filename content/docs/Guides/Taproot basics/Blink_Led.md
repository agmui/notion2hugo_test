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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AYAE6H7%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVOeqbR91RYZH%2F7nIGepsPKKyDz1xno3%2BICAW%2FwcJHPAiBeat4%2F4rUtZSzyLgMVyrVCw1MSeMOBFJXCpDEJ9UGHTiqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8XyQT5MyynHFAzZ1KtwD2Ap%2BlDl8Dv4y7JCwmHO47EWuIgKTAfcksFFxpwFS01yvGf%2F7OVKYwtgOMHwNouAVC43%2B1%2F%2FJSo8Olmq69IFx3S19B6AHiqDFu2YXbS6Ny58Nf1WqpWIHVEU7Z1hCuoVW1gbbu%2BNkgTdEneVwYa4dz7xJtJPowBKIg%2FKB%2Fq%2FGaaAM3mDWuz8SYErw39iihcje90dXahCDF8ouaIObKJCLCcMZ2Oa2puwWv3oe14IgXi%2FVMflot9s37w6NybxZFneWutgRjKIyCTjMju%2Ft0mx3PF2uXRseugNru6R%2BvGDJpkvktLErbUKXWSUdgUK0td32owb0EuM1ExpWZN9dVY3eEdWDbIVo8FZq9zajXEL5zjom%2BGU4mZJdNx%2FU4BdsD5fItQqd%2BeNJoEKC5ss%2BGHDkUJEk42G5YFtbc9LyEgW2B72yKNYmQkhXWek90mxcioPQjvBFyui8aCXVbrH%2Bl3lxQibdV5R1gyk0X%2FtcOiCdCvjaUDM3bdDGHDUYnG3%2FCiFk%2FOLo%2BsCbPDlyGjTlUDJStWaOhQapUJYyucCEZRwJGDU0PcD%2FfyTLuylSpZVkJAcyIfJ42QvF%2FHnnbW2BU7MJnPqj9UDxhUFyabBiG2orhyVaW1Rzu2wz8c6D0ugwmJDyvwY6pgFVuw9UT6LSYjlEGTdPUPlc8x3wiqBlnUOZ%2FzJ0LNuHbn0FiJ36I4R49%2FsUzqZDGUE03qo15OUOkKUs5ctEqMg7HQjoKmR6NFF332UzYgnlcYW4JMZPUCyDx61nUda1nd3vbnZVQP74YAkFbZfJ%2FSDfaXDJdzA6lHoKkq%2F3u552spNVj%2FBov7DTSTOizBwQhL6d7ByhHTpoEw5sifBgAN85PhKWJ2NF&X-Amz-Signature=745a93a49053d0373d053d68c3c49e26cf33032cd3aebe58555a5d72965759d8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BIGDNYF%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSDBx2ntfqNhRIphvnTyH%2FxUGyyD2FVjxB9Irhy1BWGAiEAq1JkA6o6Kuphtm1I7XUnqij7w4kxWuzDcouXdECiGREqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv03ZY5VXi60s3P7CrcA9p6D%2FJWdCQFCV4te3yIkHeS7%2BtYeuyk3b2h0ii3QEgWxdOnPQhwTeSEK8LLi76yqifQE03CZJUdn9Yw097TlFHV3WUJiHCbPzTVklW5ijMIEOrkEpul58aZlFPoLfc0y1X1Rhe97lUYwi30wkI4Z1b0tYVAvWO2EF9yQ7E5EUsv0Yr%2BuXdC3XX1ngfnC8ab%2Bh8pIjJfikYbtwUxUvuPaBFJGjl0BHwB41D%2B9ffMHPtJbqPE%2FIU7Wfhvd2ydZ90iZACvLscYtqXsTP33kbexRxFG%2BOPgFuj%2BHQwwk0Is9MFoy6ZPKkGnDmTdAl%2BGU7Ru3hTbOWX%2BHt9QKd2C38Q%2BC3eZTVXhcMbEOmCEi%2FNMLrkIJkF08TM3ex7uzjcv%2BSx7qaZehtnR7O3QfEBLXypk89lRLwZF%2FUnUS59rclNXra1E3xBfem9h3tC8SsrPu75fL447XY8G9srsBU0YNxwlqkdLv4I4apP1p6LTGyyU4UXDkQQ3M900Q%2F7HI%2FzyvmUMdp8OK6eJ%2BeFTs5FWgLophOt6hWFOiJ%2Bzp8pHqVPj9R3AkaURetZ6krjX8NZE73j7WuHzjUC3i1tvLlZ03n8C0mqt5N%2BRgGezT1dO25Fo3J8y5%2BnPPW25bnaUWkC%2FMLaQ8r8GOqUBNpZ5HTzm7NL2LE8bUTD3O6KbOv6KkM8CjoPDfjG%2BP6qn6l%2B7ZHeR%2Frw9dtDL1WzxJJ5WvWrDGHovpB%2F3K7XY4aqhO7ZibCb%2FwUA7CnAPiA%2FlvVfDyuKlr5EWXKC6WN8mL6AsbHNdYW6bqrBAdhqYgsZCbSE73OLLBwK3BQHYeJLC0dFl1CXjJBYX7sn9m0346atsvmiY%2Bj5nuAbDlDBNFsnrrJ9v&X-Amz-Signature=695ae5a7659b15ea4b06ccd6715d7fef7d18a355508e5385bcd08195cab45a45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
