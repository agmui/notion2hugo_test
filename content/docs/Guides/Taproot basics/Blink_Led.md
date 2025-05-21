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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7OUPZ2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEXs%2Fb9oosuUrj%2B%2F1lDTWkZagBQlFNa0n6d7gFsK%2FN%2BUAiB%2F8lgu6ZQKBhkef7h%2Fy4fmnvEz%2BS%2BfMax8Bk2RGd1yvCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmaxryo1o1NzXq4SdKtwDQC19LL%2Bnd96kxidH6jCRvRCpg%2BiVGR2Vo6QCnQmsNadjxjmB%2BYBNJmQfCyje%2FrWJZZAz310Linc%2FS2P06ixcyavcQOooR%2FS480w9TL8RDptVw5%2FMy6tqLlyaly%2FfLzo%2FcT6ai4q5X1QUBoH33Kz29Wv5WMJTxBlv7rH%2B9yLgtEuRwY28zJV6Ux2f2ozvv%2FoYFXJRWfmCOqJwqyTcrE9i0oKec0l3BnOHJ7MXlMQUvKhKN6EgvSpK6WsyfeIPONBgQowdaKPoSX5gyOI0Y6Ik0AlkecHXBfzWsHh860jm6oVc25S7x%2FiN3mwDPxOLiPy%2FCpEg81I6q6Zgbb4ramngaP0fY94M%2BpV3HdYphYV1rSFE0cXwyqvehdmf5rpu7LmfdYT0bKkIxN3h3%2BRSSqgYCuMsMh3M7cIQLGe17eNA%2F9Snx9hMkzM6qVIcYXV4hmzS%2Foe9BqYOC8mwSCNSy0jL0nfYXiubowe49bjvEHCg6P85GBqiur5E53usi6taBuxSHcefHGlpm8DUAVhFbAsKB54c3azuI6IF1judQ7B4zzIK49sFJ1T6DaN%2F7Uy6kVVRupf4sHS5Ec48nWKukq4GKvxUmJIxsN4qbKH6X9FDWlW1iClrNYKJHiIfdoUwuO62wQY6pgFLVbT3IdBLW6kEb%2F1zrjKCCnad9OVW2w0Mcg%2FK%2Fwt%2B%2BUVB4MfUle7jp7OG4Rea2HuLBcIhP%2F6mCgeN9aar5LYQaPqFal26skOPkNX%2B5rDxds%2B4S%2BL5BC9GSujpNDbtDuEpqerNNyIO37KynjKKF0zirKDFTtqhd3x6lggX%2B7wfd9HXAIcnHODFQFoDaJJBa2eMQeWvfPqjVoVWtNDWZUQjrWN71Z2p&X-Amz-Signature=c2250019b68456b2d556408809e5baecb5f562c944102dd6742f466edc73b76c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2SOS6Q6%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T132332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCnVwZ3NPLQtQKewqnru54uy2VS%2BjvQeLVQKlYf7QUj1AIgK6%2BkGYu11xZliybfDhA5wE23glsVIqNqBhSJ50SHWLsqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK39rAItImcPKb7m6CrcA8YdqFKihoCogBRVxQdJBr%2FnB3ctx7%2Bi8Rh2sUJ6vfkrTEMDTA9zkh%2Bh8sExNPzeD605JhWBht%2FiAK%2BLx5aYaD8lDA3QCmrljx%2BRmvp3VHRBxhqZexxU2bpv2tZq%2Fec%2BViF0R06YFjDvSTL9SuCMN3U7hvNh%2B02YUFD2Rx%2BU5VXbA%2Bs83RmeYhTIhwFC2Ai9kBktvtyVK%2FsqMgAX6Vn%2F1H2ZbZtEu%2BcEM4y61VCt6PYzOb2Vx5NBHv9H3avnldx6evjDQLBzLkq4EIK6kdVI0tsbTAbjXT2lXNYp8POVpum1M2z3kO1ngcDlNWWcDaLfMiMt6YBy3EnmQcCvBk6nuuDpKAXdmJDDQt5x6Vu5100AZ9mhv5RfuBSongSz5dSBzEfYx5OkVksn%2FWXeLo0kSPKzSBREPO5xvZeYE64hkWNNyaubeYw3DU%2F7e6Lp3Gf70vGkgfauvt2i6%2Bvz%2FarYJpmLvLrzh1N2i1HN24yaSULgo5z2M8PfXl5IkJL5rMn8DGPT48ANg2J4menzx76jaLDgaXDkRTyIr5jHFJf5nW3mqdFMf5ncnLbmRllb%2B7X%2BdlH0TzzfKCa3dEB8uCnFuJ%2BEnymEYTCuIdoermqIXu7NY8SU4G1tB7d22w3zMJSit8EGOqUBsDb09Xa2ScLi6JKzCw7yrGRlVXkJhzwd%2FsRulRLXSPqo6I97X2LhjCjX1UJ4X33JSS2bzdDzibC59ZPYSM%2FBVb5kTvXOqR%2BkiiOmB9gcbT93Yc4uhX9V9tYgOXXDR21UDMu34xcJ6Vx%2F6fZ8JGiBwd6%2BWf4TljpXeuTaEGJHZ2dQdDUemLVPG81seEiFJ%2FbyU0FskQy7XpzMGQdKrDr6R7mikz5L&X-Amz-Signature=a5584eb3d7c3cb8150df4d28ea1ac6d2d00b153055a99bcdef77dfa7a4700e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
