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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCOTODZZ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDSTBIWenzJVg8z4fqv6%2FTS4EG4nUo7jSEOZqCfBg8%2BPAiAKA5Hxf4LySDPz2gK4KbH%2F%2FvdBaMw%2F9FjhKkmDCDYKsiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOAg1RjudTI0OoNePKtwDsHvW3fM783r94CThm0vskf7VqrT12uNe6SItsHlvZP%2FWsTm7VK2q0uo1X1XrRsTURyGg1zehgPabrDtkiHj8q0SGsNMrd5tf8RC%2ByJz5MgyZOWm6LqU0f3zXAcJ9M0yZCkbJmtR%2Faj4iLBXOGQ06Xtax1uPprhrbsE8qnLKrE7ABq2yJWmYfZxdz9jnlAuQNVkD7xnj%2FWI9hLDII5Uc0SHrqpjBaovn4fIggKWZM0gVI%2BSLQCUbg7r8KwDjIZrDHdB2Sp5Ll2yr87Q1zCo7NsaYboYJ5JCD%2BVIEcWCa4K0zcQn%2FvjaoN0xrDfCJZmAxiVQIy6ZhrGgBk3oEJGdog7f6aeSIRoDdLaLYGeLYYj6f6LXO0dxTipkZEuzzaSZc73574PLFl1jfIZp2uncnXOWUXqSmftNR7mKeOvBQ1ykggEN%2BLlZlm2d74wVohVouJknyACRBAHcYlKZ7YR%2FUroMBwDrT1nKwo%2Baar9zfKaD77slzshtHtcXB4ut90jP4y5kHiuipjsjPTDEfxIiFO%2F17%2F42wCYvgpsT%2BwH%2BJARoSlXNxyuhlzFpjJ3xGQjBT7J2S27UGCFDKDZtnNBSOBzPtq2Pmc6ywsHLNS6ky8921hClIpaWcIttqrNY0w2IuIvgY6pgHcb632rf8Wm62t9Zq7ziKdpCMvX0qgg9Mqy8eBKq56A5ezKGzsQeLtcdkQ6NCpirxZnbqUbY3KY7%2Ft06w05jiARwOzxk76XpqejxlucpIxdAMSv7ONveoTzRSIQ%2FDu%2BcEBy6Fx8DHBVF4h6b3N9RMc7JgLrg0IVn7CksMHSeX1Lv5dRm4ShTMpzGbFGhefR5Onrh%2FtoWDoAjzBnrRhCp93aei1RGD7&X-Amz-Signature=0e1a357e63067f904f21cd6315fdcd2c4bf57af9421144155c7f78fedb5be976&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCIYCH2A%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIE5H4p2gLCJ0kPs7xUQ85AxrnqeY9dDetR28b60E0T8UAiEAgldOFibvsc3ZGH140w%2BHg%2Fnqt13NEezsKJQ1267UXvUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJxRBnqBhuyojZnzCyrcAwpbntMMyfTiAnX7f0kjY64wRJgiTwP7RIsi5pN0RJWBh%2F2Q3qnEjbWrOhH1t%2BQVGE6F54Zyx20NzW95%2BA3kvXECzsrB7eZgdnGJEwcjJj1PDFyUPowLyFKVxR5EziR8uJqWMoR2CBmmSVx3CEuOHuanpVB%2FAPiaBZu2xNj1n7pfw32IDqHpotTBw2GjvD0ZG4v%2B99EuAXkfKzU5%2BmF4lbU%2FaxvEocA4HzMSGVKd0dSKWGOETd83KVtrjx9%2FY0Ia2w5BkDJJQm5vRszgygu3OyhMCSPJEty8W09I48GfNLrnGwxpmiwta7xGeaIH%2BoEMqu50wYpp%2BI9JnidPNgMUvB%2FCeDZcYlaE4cyFaZI1kKS6cwC5IkbCwNYiq99KoCynVoT2PdUiIhb22gJ1ENV6oNyiex3OjAskNHWB26N%2FDLEeR1g%2FeGzUdpauGL4ouU5kH8%2FOvf%2Fcdwnfjjsux00EDqJ2PQYDM0JmSTQCMScMIO6%2BOPQqWJfSEPII%2F%2Bk5LftASmqhXlvyM5wLQos6PUQHUrZ3rOmqlA3EHja1danm9Iq2DaScQnUVR%2FlZv9vqP9rDpbWPbl09sUWPrZ3U%2BUG%2FjxfCd0%2Bx3HijbeqA%2FAGYoK95VuAdKCZtrGe3P36AMMKLiL4GOqUBi%2FZ23yBCeVgpHzdbwHqQ%2FZqbOM%2FNygAggr8cRDu%2BGFXUB%2B8sToC6HOvx3Y38RGmUV1r%2FRrT%2FXY5YfIyTN1JrN4aKwbjCmHUi7708cA2pB9cRhw0WGMZflxzM94rEAJPAiHaIM7R8n2ll0T04f19EnwVoxo6nCdMXs%2BGWHzE4JBd2wpsWdMNWKvnWszz6d2Il6yTwOdXA4AKA0OU1YRxHZuiO3kg%2B&X-Amz-Signature=3e3f3e6232e18fe9100859b7316dd0fe339bade414b1f6f70a1731d544996381&X-Amz-SignedHeaders=host&x-id=GetObject)

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
