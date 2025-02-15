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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4EUVUAE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCICtf4EgJwgUyBaCS1%2FUJbMLEeF7eoVym8x%2FedNWbluOmAiEAmQ2teTkMXv8sY4BfJojNkwSwItanoxjcWJqcEhDKUBoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDF2fNiKnVl1iDGYMYyrcAxitszYBv5un0BbNVcVhQRlBBx2NxeeH%2FpUsLSTdJG8%2BQpLuqrBqebopwpCLWAYiosqXJoa5vkWMbZpa%2BlfJRhi2gvgBuJQ%2BMbSkCujNroZ6pkZ%2F%2FtappbLrnSzZ3V4DZmTEEFLNeEVTwKwoIq89Jc1beoBZOuxdDAtbHYOhCTSXUuqvHObGPNUjnQ7VocN1hQupDmPrpnZCxHN%2FOW2iKCajaSiISJEFbQU85XiHj%2BqvgQGSYjZEWz6AVGVto3khr4NjiFAMnSOmNF8xdm0p%2Fe8VQXeJ3wwONVs8P2QD%2Bjx5zLkvVXUwh%2BC2jAd1tqxibYq%2B5g55O2lnhw0P45Xmw5aW9Aw18GK%2BwSMaKxBHruyx5Lv6njUAOzgGTnO1nScuavzoJaYK2Iy1iMGTfOIMmel9IeziA5nIFK0S0AidVlUD9fQYw3aywIKVXCGdzD5oNLbYeF3cJCGevhTgJqKYlTS4W8xqbNE3oa9o%2FbEZzoE%2F1cSZO631u9uCUncIUkO%2F5%2FqAlNI3rnw43TfV5w7Nh2pd4OIamad%2Biu%2F4lG06fdi4ueBea5PYy8b9Mfi%2F8TFURg8l7fs7XCFNuLlH5GQlmkJvg3clrf2AeY3zYihhkGTK4cCXc6YpdmX4uC6hML%2BEwb0GOqUB44pgBKtg%2F2mleCbMUDu%2BK3udNAJHLAfw0tpcXNjweEQK1GyAwrXPKDvI3JQ6VpZ%2Blc0fX6jgCz%2BcC7UPE%2Brz9uQEB2h3nGrPhryKJGABg7BeCKIq7gAc9AxJ0NGOgadNiiYftrkNXea9ZXuiWCU1ebc7bMiIQMZh6kgRFEi59RLWkye08U4MBX1f8bPZy4M%2FfTD6RFa%2FwFLupF%2FDeSTpxutG4fyW&X-Amz-Signature=197013491e57466b0fe5c3e2c7bef68b0496d7699e938208899aad0d1ce06d79&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAPFGRB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJGMEQCIFNRxzmtGGctd8qixIfd74JS0ow%2FQ%2FpQytL76v2G6taDAiAPyQ0CfsnpXnHOw0oSg0w035gbpluEdp26MjVu%2B2sVfyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMWwLbgwuEUHRZFWeDKtwD38Iqx%2FYr5A6nML9C3GoDe7U%2FPvYi0gbba%2BDyIu1xLJ2P9d0SBmEB5FFuLPPg21cpKGuhieDpYWmpEoGgnNssJ4p%2FgzK3wXdaS0eGJbbWenlVP8zcCNt5i5BzaIGGc8N0bf%2BsxcfrOrFQeFonOd8K61ybrebMLoid%2FH%2FLaAs87uWqrsDcHQ5TLnTWa0IEVQKEfP%2Frr1SSIQbJ5CiG7Fq8kZLexF9pkyk8ok0UgRiMvIQ%2BNp6tTY5cvFW2dmbd2dD%2F6325WXipgLAKC9voDx4EjhO4e4Xkyrvqgli5wSyGhxRO%2F9xm7EjMIj6TLXjOz2zT8qMSg%2FeGr5RhHufr%2BowU3t8up3l3Ck3aJ7XyCjxgYxqV1EIVfabaT23L2GzMziK20r4JLJWwHo8hDfntKjT1GLf4b86EbQeyAmWu9ihzjF9PbhyoJ2qvLICR7GZmdidu3JJc3gUHZkvPBScfZdkL1mt1JxamffuEpLDEM6uxVCU6T3PNf0YpxwH3TYCVX1qRk%2BZIpNB19UrCzTwU%2BjAlj%2BuUYFbwePtPhZ6mvxElA2cj1cuMKF6X0Xjah4P6tLRh8DwojILrIUqJTbaRJVBwhoCiHlex8yvUzvjEoMMBcSfgNs5chqA%2FH7y2Guow%2FITBvQY6pgFBJnyU26MtM2bC92stSjahsJyeD4V1AU1wamPhDHergul%2Fu%2FnwGyUUOYwlbbIOEgcA2ZpGaIjt7XHUDM4IPyealb%2BlXNMjLkURRNDMDIPjRYkrCjPDYA%2F0POLHM%2BXqHB6E8xEH1CNfC%2BsKCKUwXKjKx60onqM3v3B%2FwFymrcRLIaulJ2B9wpWl0vvv3PUqtOV8MwievTmS6q%2BeB606p7IHUjy09Ljl&X-Amz-Signature=59773dddfc791ab8236cc3e913023124ea2c1b794bdb2790b860beeacf75a217&X-Amz-SignedHeaders=host&x-id=GetObject)

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
