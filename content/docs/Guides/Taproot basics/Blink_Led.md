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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6GHMS4%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF66kjrMWPuQtOqr19iD20%2FP1Kc1hUpRc%2F99V4hWlk3jAiAfMHLkH7yAZ%2FvrzsptIADHNzbNGMUdqvEWsc3xSAI5XyqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3VaV%2Fu%2BvQ2hKVwt0KtwDeNwRuqvUyRnIFcaehZG0JxE%2BOea0LkIVjaiXH2eklgjupAQ8fnHLoUMYaXNlqgKdvCccgPQLNT%2Fh50EzfgZFhWEj0GAp%2FRP10uBhh9JNC2vJeyEKkYE6mEXPdIGTYK4nT5oyHC38KkPRD%2Bnn5MAla5FeSYlWB4IjDnDnuQELhJsWb0KE425ZvFzHvbDWq3JnlPiAXEXhgf8%2F7d%2BP%2F5x%2FrQYoPBBy9DZxILCIcbQaagv9ttJQpmrUH0xocw50nEeUEGxqLWb%2FxpXEXcTJsqJl4altiWJQ5Dq8wGwr2fvb4XMx%2BSUa2sTpPxu%2FFierhbwFEPeLD2O%2BzsVKdECoJ323Y6kT5VDTPHG1E1N3Cqe7MU%2FONj0fTF1RwnpIn1I%2FkUyOr8v%2F6B67sBQPWeCT6gyLAYVrp9NFISc591YGwTyQXhCSCnz%2BCD8FSlqHxv5D21YJCyh0wCHYG8ThKSWfPPe0YkhHJ0%2BFJW4XkrlfdzB2gOdK4Nmx%2B4rb8XbmMoyRyjRdsFswQZVDq%2BzEPkSQc9LSoLw6fBHSQxmXWJNb8ZtyfgtwLr%2BpEPdO3NMNlMGd%2FARFBx0hPranmBLbxUyzrrm%2FpCuXgobdSCKAEEKlOpzcaG8H6K8t8hqkvYjlTHowg7P6wwY6pgFqufllFRbpIqomjbRiNI8u5%2FvFZCyJRceDR7%2BkKsuIT2DZL8EPG4GSRpP4RwOmYwiqiKLEFkgpvDIRmudZ3YxGfK5OjOxyBchmKuEtNECVj2riM0SVbLLlpV6aGX7BnIzGzfUlw%2BJzPAc6wO2uH54PU1IpjHdt8DB98L7NP6Wzu5nu5MR89nl13bYIC4K2scl57xPaQiNWsWwNTkFG4OLh0RmVEMyr&X-Amz-Signature=73f3ce6a5cd33df2575ee5e33567bdc3be594da90e3ae0923523e0f9c125a6d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SSQ4FO%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8%2B8FzGuywRda1iOMlxqwXzrNCs212NncwEX%2FBcvn%2FGQIhAKILLvE5zFsYAbBB0jc8N7vtLc9GnCi66CcuF8jdIzVtKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9rIfXyuxccvdMuvsq3AMLhIaFqdj2mkR1qAR%2FMH8Xd%2BMx4jL4gGAKaUbSe7atwPYUrLg%2F7Ty2sA7FcmXa1gJ%2BAK7x1PXvcf0xCNf0peGK%2FcZt9sRl7%2BAAjPaU8snX8NqSfgdd8USw6hXufdWYfKKS5OR8XxyafWFyvoEEa5e9N%2F7x6Jg2oGoPptcySQVb5MhdAEV2cxfIDyzCYP15pQ4NpMKYxWPYRTzMaK0LYxeTFfhpsrRkn0uHv%2BQ4OLPtcxb8yf5ljSG67DMPapZhnvhTboanK7VcJCMvtd4CtU79JC3WagAH69vhVI3y0fyhRrHiKBLpgfKHQgU4LF4gxhd%2FtD0wp2toyTLAVYZsv9gSycg%2B2k7mNJgEGxDxzOg6cmzGfM6Q5mLaqkalRha0tl6NChBWN%2B8UvNvYjMdJsp7UUHXQyulb%2F4k5ETXe7CClraJgYz1ICEdAOVxP6dLfliaU2EnaKdlfMZQSogeYnft9j8Ab4xEt96lkhTLafrfkvz9gAYL2e6bMbeiNyefj7UugVid93QMAVThyBG6jJtGOHCl8FouBP7Ji2otDzxZRizhTMj9OZwpfaQPyRVXwj6BSrNf13f4GWlpva0y4UwWi4orsMpvomVH3uIdu%2BPyIuNlmAj1jxHm32XhWjDDBsvrDBjqkAbhbdD%2BAsaT4vDeWDUGrElJw7bcBmpjVpbHNTN65D5fSYU0X8Nkbj2%2BVlFqDcemVLxvTjiDgbds%2F8%2FNBTMN9WxcA6VzWApiNT8izzvtB%2F4fVNZxwc5Z%2F%2FEWnGo8r%2Fvb5ceQM7T%2BfEocpyVc1%2F54IFCaJGrKhrGyNg%2Fr6vZi%2FTiODIpfJTW7UxLBshDexfsA%2BnQSf%2BWqL3jsCG45oh4%2FLmeXGKpY6&X-Amz-Signature=489ebfd03b3577fe4aaeaa3d88ddd1ce0687742a3c61b1508674fd4d99adc2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
