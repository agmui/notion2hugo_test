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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MJWJVJC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQDay%2F4fQ0M7E%2Bwl0ySkHX9j%2B0KaqiyWYGG9GJ3%2Bt8hIlAIgcscytxreV6%2FozhkH5qjBKy0Ba5MjrJrStuvp2S%2FgFSQqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAFhJkAimbOrQXcJwircAy%2BNPG4q5ftr1QqR88KeiMHnVeijUhaeYHYFO1j5AeZNaPI9GVFX1Ux%2BT406ELl1BgN3ZOftUGwa7qx9z9Th%2BGwdVipnXC6F8j3Ram%2BrUfr8otYc62%2Bu5ZCa1q%2Frx6mSHQtv18%2BF6MMim9WffdzgrBq8U9GL5njEOPeiu5s1gcXQJWwkwFc%2FNTfY6zTWIfOmAe2J0oGTQJiEZ5kMUiG5kC9RrkLv2goMIoz5IFSeogAZ7QhRrTur5X6oIpPByor2XLYNIFek88Ac9OdzrfaF9hnF6ZlS%2BcGscjszyMVkRf47FgU9OFUShBxCq3xSNKY%2BdwQSn2NSrKXHvJh15jW7IMF0EI9diiKqSrndxI6UNpvTxGBuXMuddRCaLVaaLsfteLnONwQC7NSE%2BD9XXesy7G02ykOHQyASYGCz8n8Kzp1x5xI%2BF9%2Ffhp7S8PeQQmYYwvIY94e0gJ%2FG%2FZzw0yLxtvA6aWv8a%2BGg5tx5NhKAPD%2Ff1z7hAOQrJVrjPhQ4LIRy%2F9GKDU6lX2c3jQIwHggd%2B3zlCP60Xgb05y5eUd%2FjFe7IIXhvwdyGVJxBOWm8v67DFfgIe5pJ0DyOAFbiMsac4TWN7PmuNjVg%2BK8eeEycbZcBD8u20yIYKifkjLdSMMrz2cAGOqUBcWZy4prGbPSFU8G2yOpdFD4I2FSbmqvnHIeYLJJJfqT3g0PYnRr%2F1j9POMr4DsfgLV1NYBohH4c4Nzxj7gJeUDvXluDwCeqQME4j9ZQU%2B8JXyn4XhqSwyn54kUxfu3PVLxf99DJgN0szdV%2BcTZKWyq9PaVwARaKPCGGvOydMRrgQBjHmga3cxAV%2FLKdZCtmIxXrmdAwwjWPMk114yt1DeclyoFC%2B&X-Amz-Signature=7203bb2409e8b34a46eb3adfbc2e70c379428d2da6c1f72250cc9aab6aff302e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LPSRULD%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICVUh8E%2FgnuV5m%2BORmGqnGpU2PRTCHfsjrk0N5RGcslZAiBuoPDKoadRHJ2pg%2BbFQJ1IYZEjU350xc2u8tYx%2F299KyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMThgzSu4fVs9Eh1mXKtwDyD0iGSe1ooihzH3ozNjK6kPZ0k5xmxomFMQT5RfmGHfQSAHTNJcQrnyAY4mJqyZhDHqID1IwWkRwgp6opqBh%2F6chWEHXVIcz09QQCGa2%2BZIXcfB4mIlwMKbDPsar08TlXjRxlBN4PNvvkZAg7n0LVglWksZA1KKb28DKawKxPeNeOSObfUjtHcan2v19JPdVlwK1LQ%2Fps3CPvaEmjV9VlJZPPkEv8pY4luWcwpAaqfK2tbo2pJX%2BadkhhQYqe011bykZr4D7umqSVKwWVwJTMSR7J%2FbY44GvjnrPfx3Bi39wjU15o1BHAmC2RI8WVw9962cEO3bZ50acnD3JYaZCZxUEhieIfxRPvPN6S8sX%2B5FQFkGmyJPex1yxYnGeNDB4hXUZFH3uyFdjGWW7ip1cFm1EvIxvGuJSaRU%2FyD0GQTRo5gS03d5%2F6P1l7h4udeW%2FwKW5A1fhTrIXsQIvUH9AB8JbCayFVg0tfXm0snu%2BOUg8O3%2BdN1Q3FlK7Fzmv6nr4B%2FZO2GUFz9eGdu4dGTr%2Fij0UpoaYBCMtCZuKbY94L938irF90Mwqhaq9JP%2FOSOk8x4hhGvz9PfBdLlISXtaNYingZiZOo5j87oLkSvX9Tc1H0r1bg2eJmKCKD50wrfPZwAY6pgET%2FKR7s%2BPQAsbeZ%2FiXCLqnZ1ac4pkKiWZYdQKKIYiPEWp3YcRW19Ye5yzEHsc2zZD9DB973aSJAvmqCKFPISKCq9T1dxVl%2BhWMcz1YGa5OG0pEd3YTgZb%2FFP6xnaPU6RWu8WKtm4ni1HIe64pSEnf26De2fDeV6JHGYNuL74hVzVJvr%2BX5R6Z%2FiIm%2BfUpKiSajuxv4LqH2peyWr8uLivtVNXNYvbO3&X-Amz-Signature=b5e1221a409e7b4b24e2f5319db7abf7ea991281172e8fef7ac9fe3e38fa52ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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
