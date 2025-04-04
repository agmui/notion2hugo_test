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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EH3H5QM%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0FDzGk75VTEoTD9QQ357HBFGbSYInLHwE5nWov%2BEJQCIQDSoW%2FyC4Glpi4GLkqu6fIVOpZB6ig%2B62v34Ke4MN%2FZpiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqw0bciLvADaNSszUKtwDYI25TDZV9eLUWzhTNKS86T1rXM36kuFyZOUBJJ4AXTULrmizDgxL5sowZJOmpThr6WCQbztJq9HIIxyQByMxxtPHRIgHI3poJcm%2FqwQscpWgc8zhO0iMfaZTrp4TUcPs8j5cjm%2Frsw4AusbyaUajCnSNNVjmR%2Fl4w%2BWITZRkPk9qZ7Fwd1yspBgWRBnZwbd%2FgODVbeMqmqfsQjd0xOHNHY3o0D0HRv5Y9PMp9upkCB5xeFlh2dvCSfR5j5EU0GZwbG9T%2Ft1wQ6%2Fyd849vMcm1tQXw6w3ihup5qO03%2BMiD18U%2FfFu1KOpDJtNdsP%2BN3POxISGhCxcea%2Fr1kKuJWIaS8n7kP4CDVIoQJBLar0Gf4CxYfPTScAUs%2FQA9SRy7tDqep9SOrGVZr66J01zOlF%2BMElcVwI4HG7jf%2BN6YmEb6IXCcR2Vhqqi3JHPxaOjxXIswRvTyiEtxPchRoaZVv0vU4szrw0OyiggbSG3ZRfg3wo%2BKF8u6wrUAXQQIMrZHeBbBcFtnSpoGwlp3w9YPPrRyQOTNzQJAMT9Tr6rnk1DQuHo3IZAb5sLVVdsymEsSX31HBaZGh8KHU4YFT8tsjblx8nvm0smHnPDIWTubaqKJ%2FN%2Bp081638cClgBSiAwjd%2B9vwY6pgG5AJqD%2FArxw8Tt6a80Y%2FAg2kSf3c6FLuZ8lgQYE%2BGwzpRDAk7PvM40MDt9TrOc95aBqNgHnNTRFrUDLedsWW864SyaDb%2FdbFpr7eQCX%2BkWqO3s%2FKpF%2BtlqUy4jIOUJBb0CxbdUqirPhD6cnLCGOj%2B2WpWgBpInY06xf4r8z9AZxmKqaTkSLqSgLef5TptoPNMGv4FLpz5LmF7PXpVRjSrgtNN26%2FKP&X-Amz-Signature=27da5f0abd1c4670bb9954388c4bced51412b4ba4253af0e6479af0aabade370&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FLEUBLW%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClycZkuNo8jdlluB3qM4mZ%2F7Nbo2Pd49mkhAbXaW9l5wIgWPjx9jMyE48u6w%2BhRHAUNqKX9ZduZXBcLenTNgTlIWwqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCO5fRhxpnE%2FeTWP4CrcA6c0qCnfTf0yq%2B9dsYn163nAGmOYevNcolLikMxc5jEQsWiC2zVGjoxOPdCkIrQCU2FmQqpwAqv9kpvY0VEcFOV%2BUmV4dnmLSoufBfTBriDVBA28yfYGjJ538KeN%2B1%2FOv%2BSduqOqPXtmx68nQ2nfeSsBH7j7cKc8IZ9dgUL%2BqN2Jg9SLyj2eZodQBrKH0Z7Qy8iJjP%2B1mVnuvAvP75GNHXjqJSNGEEIxjPGAra%2Bj0Re9%2FtgsrgQEAYiZ%2BLEl4YKWegjh39WE8lrfUt4Og7xFEDW8%2BLPfBCcTzFxy7qyp4L3rqNMRI1c7SP6%2FLgCb1byZh%2Fr4trlrN9xmDpz5g1CgScNW5DV2QgTKsJZ16PueOZdeCBs%2BvxW3Xmky05qeeiKg4jIStckuBYk2C35CjxXBCngIVmGWP12l8x79E3HA0xeOUaJJ9bbmTZ0tSCOVZDd8Mm71MzONZ02cZiCO%2BLkJXeMayEnh60decuJCNUnugO%2FMSlmjGN4S%2FJoiiFsgGfwzb%2BSglXXgpe6XnwLTp5hKNRw3Ib4NKNQCJNShNoB1xyqStKskiwr%2Bu%2B%2FAtld4Bl%2BTonL%2FNgGIFF0OOX%2FEZGb5MAmfz3aLSs5nTdRw5NgvygUFVpR%2B6XrDKxHLTtJdMJrfvb8GOqUBrNIangsATOdLCOLRro4AsSD3R5OVeE%2FLMCCCpsI3CMgbBAsnLjpkIrdc5yfqN4N7BlqV3G98MtjNPmtK60vNBpHf79Eu0SIOxtSt0IjyV6yqw4QzTM8WVk0%2Bv6e4Lfhi6W4wnbhsR9nYw%2BCZi%2BYautRn0fEhhqMfu5xg%2F9LLGEJFjVkfvm%2F4pA8LeBImD%2FJYT8LYRUtePhPlizS6jTLg3mtWogzN&X-Amz-Signature=1a87255dd444c13ac4a43a7afe4822e8abc77f675dc88e5c04408697960f3cfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
