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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQGBAIJ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBAEsfkv3VI8neqEbme02SujlIrc81P2nopvNtl93pR%2BAiEA21ERkqJWzp1BG8K28h7nCCoE%2BjOfwQcG8sQlZrwvrXkq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDPNN%2F6TqB7sN9bGxXircA8x38x0i5hvJ%2FusJfrVrLz8WBYJMFvfOZUuwnbFPjeO0w8G1U9l4humOSTW%2BGBpEb7%2BCK%2FopgrBn%2BUebj02HNTw2HPvylhUQW8Ey73WrH85b6Qa0rndd%2Fj56H8g3Agtq1QXChTG9WxADDxDaxY0y0PvvIxyy65OyxTj%2Ba7XUk9LO%2BqLh6bxxcvffgvZiYf%2FmCg1rDLhDrYerOG3VRzQtnZyEvOOIH1MvLbkRwbnDzGmPraczDXR0KIH4%2Bw9A3%2F%2B%2BZQAaPqRt8Ql9PJWDZLMHvZ%2FHzcOH4crpnanJtgvE16c%2FibaxOTpocZOTBrzhr6JizXBb7jUJ9So0YkoiBICeUErk6aSdGohEIViXGNhRuW6W%2FVQrHd4SvmN4B1LAXyDk6A4JGPEbI8WsVjxTFXPID4rrm1f3%2FoI8urbujxeeio1saXYYszgL0L32NHHmSyVu2GVmEOxZDcPPmc0LFAw%2F34RpgqBXDEMmYQJH2TMbiKgxrsJQ7lXKw4yh5gDgczaa%2BKpuQ0LMNYG9AohgDlRCPya5iD4HsWOFPrBYGWIuUQD7CB%2B9uckqAuqc0AcN6Nrejvq5MpzPIYt7gukUme3kuZitS%2Fjr6a%2BQtFaVv9l5yuR%2FhRxQfOyuAt%2BSsxwjMILn%2F8EGOqUB7WOkGZ6ThwWGlMaXReaYfe2d%2FGSpkuUqMOTC0CbJaqwiqYCm5%2Bh6rz9EbLgKmeoyhczmGEfUJ4Lmm%2BoUTgwn8ZB1or1Ea3XqoWBiFnQDvaNdFB2KySxTxuHa8oMWCEFuixAXcmklygzFEW0GjE%2BaU5qHzUmOGy%2F%2BOuLSfkkUYxnnnOlfVYgZyVBoWNXR1OhLj5CYsbFEf0y09QXNtuhhMoWIZhDs&X-Amz-Signature=db2080b8afb070b6e071f9155f8fc1ec8630887052c51678e4fa4f9b1521a234&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPKHIOX%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T090953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDfKP0Al9OA9L43JGmvWhd4NZJoUAYxVpn0%2F5vTabe3wAIgRCrAWXqsPtv9y42wlinGU%2FOUr4GXmmNnnQftfK0TQkoq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOJyCYvTCRVjOh8JcCrcAyBa24c%2BNYDAs0R4cNsmNxys1fSOYwd%2FDy%2FHFj2nSUt3afI7asgTC%2BnSkUIWmK8%2FvGMKeUC6S7Cz4zZydFnkHgSO4W6CvWNywW3v6STPWF%2FXhnX%2FC9Q4P9ZZk6BQQ0E3zK%2BK5f7l2rZQxzDQFGARTrSU2m2qsNY6ivDegFc6HreotC56ij8DSQx6QR%2B1hLKzowwRCSjVqPeGgtbEm7a8Z1N%2Fl0YKb%2F4YCDtiB811Ud0JF2cZFx%2FBrQN4WL8kpP2eE%2BVEs3omcUwaGgizosRXl6aUOosAbtxX9CQ%2B%2BiycyeAbwCg1clBWf0s%2FIyqQE0TOHMz0sg1G82n3csWD2t8L81eP8IdKUboGeIiP2eWX9uUPGDCvEzUDfNLpGRWTEs2ux9AX3254bdsp7DxZpOyVEBRqYLGdlMi%2FoQeS1QdL0kfSH1Sxbht0SGryHTuR7NBDakqyUFBm5koblwU3a85QfcsgUAtyE%2Bfz1NP2Ghi9fh9octUdXV%2BEtKZ6%2FS4dp14SETdSsurFN4k5OD6MKi1Sz8bD3V3vxBlzoXmgPBRMzQR1IM3A%2Bf0BJSa0two8PRusPIrnWX39svNtbneguq%2BlVQUP%2B32q7URSL0OywWED3DResl4oL3%2FiUYwDvnEtMJXm%2F8EGOqUBuIcx0OZ1JukbVqjfN3LiXITFyERvfrRaA0J8%2Fc8y39PEj%2BN0CiptkozXdLzkUkS%2FbCvayaBJYPYINqRCpA6IqWkIA510iCtT3tb5sasRZrR6dRfTIyD%2Bnd%2Fihu0F2bcd2VXb6goXhnp48Axk%2BAP%2FodIWdsT%2B42wOgl1QCL9BVQiFKMmZDiZYUgWZkeSxtiYo2rGFdwpDB8YYJPRxs1tdOjspp6zE&X-Amz-Signature=c910c5234fea616a689cdceb55ebd8e0b4f404254171cded1d6da7e36138c85a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
