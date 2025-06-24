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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EUWL4KP%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDY7FJHO%2Bf0h%2BOMqxiC2aZ52zdIDS8y%2FwcUt4Nhw3UkpwIgZgY42JOUDa2O36wikwbHn0EZBz6NetCdShnIzkdOf7Qq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIv%2Fvpbbe1gJ7j58zircAxDEVbyojEa1arb0uNpen8iGAxO46pwW4Zgg7bvmHJgSWkVx%2FBGwvAkvZT9nVBAW8w4zMDGvajfxBxkvvf66g0X4AoYja2Wg93sLyjMCXz1%2BemGUa1W0q06ekL1U1WW72ua9VfijIzhCQEIR0DhWzRD5GJpgS%2Bbgj3HIv3Gw2UxBPFNXa6Epe42ddYbuuGZC%2BNdWz254ACvzcBRZUacBDrMa0HfBJZXNvaYBOhnCE9kttW0Rln%2FIEbryiR9TnY9XgzXDIHEfizLvyfLtA1zJxyT2wamLCC%2F9kT57PFzKhMzN%2FZYBgs2Yk7SETi5oPx7ugZtbBQ%2B4oikZ9ukjSyFESLsdSx3XITFvG6o4pLdyhmIt6zd1XkB6OXPJf88byfEir0UePPSAqkberkNI1jMi7aIsaG0YvTYxUxdI4srB3R6MKlKIO05WV6nw3s87tIFEvjZnvrdgudLeymO%2BO39E1vutOb9cjol5T3yiRWH6SkdazkyAa3FYsYFMFUeq85ZwqRMjQC5DbJX%2FXWHbVzTXXgzK0882yKxG1M0V8u%2Fy3NneMpGkwVaudWXtqmrljhNuTpPcLwilO%2Bx%2BeYZ7ioh2F%2FUYKle3ZuqjEc46C3Nmg4ZOU8BLOcR%2Fp55lZQAPMO%2Bi6sIGOqUBjhCD6VlDdtp5DJlLaVVqmSLLLceYsvEjysVPoz5Us4u1kRKYjRg8NGy6eXjAAZ8r4%2FEg0D5lSI3qpH%2BRNjNY6MLJtRKR3KzgBtNpmkpPMzSwvFDrohKnenA6HXYYyPpmfGLNN550F%2FvdDzB76en3Tp04h18voTzIgqKyBeI48wBqwIfsu16UX6WF2TdqEF3A45UTzyH8BNBGN%2BGnblmkrf4dJBYL&X-Amz-Signature=27d420afb9807284d5fe44499ccf185e232190acadcd9e2b7a6deb769750f285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654PRMZVB%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAsj7JDrvzlQberIUeYeJ7x%2BrKSvXOUJn5JqTcB7G5IbAiBj4avIQiDPWXaw5bPqDT32JlyEUhhj4nFpm19TcZCtrCr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMHd93ODlu7cr4W8oZKtwDBAA90EScYMm4QKJ0xXfajQQFP7xWs0z0jScbh713%2FTbQek1zUyDjHMjFQqeeuLoj98ey8ZjoSq7usd2EjdbFWv459doGzpzBxamFcZwQ1Bit8tzOeQZL2On7qBum6b2tz8RigWQigvUfHd8toW3k9Zxlqn07RHxeAyLq8n0jzcLH7ZaTTDSnGAXloHZ9ournGh8OLOf74i4W5dlkrT%2Fk%2BCJ2qaJ76TLY4xGFd2Er%2F0YTqacTg%2BNpysu%2BMD3zwkSBrAA5PzhLvfw7%2FuOEUa%2B%2BkORjpphprccj%2FrY4GINcpiik558%2BBwtxsaRc%2FOy7FibKIsdbSdnEK9n%2FDuoWqj0Ov2mFvcjjh09G%2FfwrVZnpGLSVhaVU7iN2irnDpmCrUFppY%2BPgeMbqniRb43b0bi3%2BVe0AQU9EMi0U6jAsucS4KjyH%2B98GfxelRTKXlWBAUVXg4RQOtzKkfCpYL0TYWHWPkoaruv2FS%2Ft7DIvUGkv4s3nQH9K1EZWQWEn2AcNEqzo1XsLRP9XzdceRS70io4x2ljzX151av4DzTZIerlKlhiC9glq3ApuLUckaGCsRLtMFjppgKKGWlIu5Tm75rM1%2BT2JUt3sGdTUtsD%2ByL730FNcADwEgVKRjpAX0YHwwu6LqwgY6pgHMcJyrwfQsfYp5DpMo4SFBaPbEYyCWq82xnxtPoAMAyLd25EpI71URI7Dp7BO7Zar18%2F3GUpzj8J09to88LywCWef3CRk1NZZm936PSbZg8MsRMtoVFksf%2Fh3IJw2KtVue5yaF45notQmHX%2FUfPMJOm0I7j4jdBbMx%2FCVEIpwW7yJBdghtdWV0xA9vjMJZQFOo7rnL4gn9rhVZpGVKfWjhdfsel4z8&X-Amz-Signature=ed09ac5764eb15ca6e1a49813d20a74a54347410059b1146e89ccb1a682945d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
