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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEV7W7AB%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQ69LtvYzudxuvhcl1i8eOC3tV5R0daaAF7ffxzT%2B2yAiBVh%2F%2BO2KTJeaBqBHr3TIMY39lZbo3MWHRtEOZsRHPrxSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMXX1d%2FfglHCcHVfHxKtwDIWvIe34t1uvGR6FNdkDzHC8yjqP1FvVuiQ6gFOhnmXdpnq8fy1lQjiTTrjxYR9Gmxh7yECY7PePtKBKDQeN7Sgizp0xjZWa3XdwK9EpFHgAF1%2F28MSsGmm9XFZQqyZdKqXd0f7QtQJ6bIEvG5iwSuHWrtKobMkGyiJlN9E2ZCG914mu2JmbJsatisNUqYbTej8AbEkzP49%2FUsYOsEChB2TzSyls4a%2FTTsT8mcRBhN27ihf8dT%2FCDRpejopz5QZWPdyqz6yzQ%2BK26hBMG8CeCwUWXYyyU9HPKNyKC9aGK2vWnBytywUga3gOcMeVpIMdz4VpNzCj%2B%2Bb5EKiIFj%2FrHZZn4ecD%2BUVLP5%2FbwKDM5OHKM7bvnB5Mkg6GFmDBDeLJ4yOgioLv0ubg7Jn5aRIDvihA2qE3XjLsfmktCit70EOb%2BNi0XYY3WZoS0szIDNH8hoCiIVp7GleeqFRPCIzyxRKz18%2Fr1wIYgAKbflIpg0JxuQp91peA4EsylFue1HA6dA0VL1DeFSHW8rPZ%2BGFj8gsJYuHWcSffWzkSkWwDvGU5qnpb41HtipH8Rw3OVwjXNjBrtPlnCptZpdy8tARjP3XL3GJr0KKsGQmVSBgOZuP%2Fx%2FyC7TtfkV6xK2dgw37fFwgY6pgED5dAOCAlZQM9rth%2B1Nlf0115vIgBV6g%2FNWgXX1jtUe8mb9bjWTB6BhbL%2FaYNNaFpvPY1o3bJc5JHVmB7QQsAJQWhVP%2FSaGOxa14oJdrc5B4ZRNX%2B5ZsDT88OleBeq64r86hNzYzHDC7q5OEW0JRFCuWCYS3VjRU3FoNe0TGCK8IxiVuzqP1uM88nXmkImujZV6xP75SjswR%2B4KM8RqGNg4zQiV7VP&X-Amz-Signature=ae6e769bf39e5af20d38195e96dfd8b4a7701871ae7f2a1c5371cd21e2509631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAOU7YP7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1fRxKdLoVAq%2FODYh3dz2oGhrIpHHXJHmVRJc%2FhclOVAiEAwpCHO5JDah%2BJvLbQzIYLPzUc7Zb%2BYmGUjXQV8gz0lVAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDB%2Fj2OK3mRkM%2BFBgjyrcA47hRcf3hwQ%2BK%2BpJWvNxr4NZB4w%2FWIjoM8hrjrqoC70XKUiNIzHwEFfSnXP16PmuSNThtk2uZJJrXAdL3gOTAfB0RI2ag8H6oSpokXSiy%2FypfgB2lK57%2BZXiy0iermRAgz8m14HSabojVt7ZxqfzIONIDG%2BaXvGEYxNvEmRS8cg55oB5IFZhxG3jCKSU9PNPpbHrl1P084zsAHcyORIZxjmZpM2KNZAeW19S78RM1NNJ6mdkikpHYZHkuliPxF4wACD1%2B4k8xem6wtP4SCTwV4eiabt92%2FQqEmDaCaSW6jyE%2BvVGOFq8x61cnreO6CLAyo7omK%2BenISNVMWW0hiy63S65WF2SZOG4Zlzmc5h2KviV7yJDWU6LXFD4mPhFfTvs2aIh6jQgMOiGS1Y%2BeNlv%2FnNsQaaDtcdJXcrD1IGLsE%2BcBf3LQITAsetDvz17yzB%2Fna5so34IUUCfSDW6qB%2Fr2tKRFXjg4mVz4K5go6s1ld%2FUNYFMhf9%2BnSxkI2sOi%2BgyVonvRDOt1n9%2F7mLbxOKhINpLy3QyTGwVfemD8Jd%2B%2Bllx8JKoNAHgtnh7%2FXQ%2FdR9ueF%2Fy4rZfp%2BUftl11cAtY%2BHFh0FlN6rFjf%2BQs7FpxfhCuCl4Mo3vEbNYe6b%2BMKmnxcIGOqUBeQkQtLA5o9E2Va69RuktQ23%2BDrQI5%2FkvAiQh4YeUXLABZWgmFaQ3G8bEIz%2FsOEnq%2F%2FdDYtyVJInRvv7J7quocnl0rjaWq0czhnmhs3uhHt2WiBwlbgn3p%2BAAnC%2BW1TQvMMz7iKnbDW7FwM42HOxa7eXMxuF4q5kOg038npo8z8VRha4K4t2SMwiMzqvvLBWfYCSpmUCfywytK7UKDMEa44ZFtZ9T&X-Amz-Signature=8a6a2047a788185e791889822357ec784b22af896796a4663ee94c56b39cfe3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
