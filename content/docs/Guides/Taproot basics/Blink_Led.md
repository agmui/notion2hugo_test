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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD5SPHOM%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC0xzLKEDzYlTVULcCK6D%2BBMe9P0cI%2Ba5o3eEgS%2BrZ1TAiBx5nXZt0GV6M3tpbg1Wu1cYbeByQMgUGuYKXS6nhYrhir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMVvn9F42OZGUlDgLqKtwDioCdzQVOc66zwXvUbPY4Q45ioNta7aQ%2Fm%2FrnYGRl9T5dhtsFY0hez7z4iVwfUcVvET9dtq3kRWPgwlb3iG0giALu4YSFRHUPT90KbP6dl94zFuwo90hf3bz2akf1cw9lAuwbsEsK5dgcvvCIbF0sMRQIrIynmYDaxUIsJIuvV7Dz8WSpJifg60ZFkAC5Iu4p9nNVA3oSryKkeBoJDV4l7vnAcp%2Fg0uqQndyPEKQCrzfRLIHGc8F848a9Qu5JSkI5YM6eIH1SK4C6eoN5cnF7kaAUTLVh%2Fthsu6Kt9Q0T%2FwHnwLEzs%2F8ICEeUDXkKRwgHKdVnLjOT2wAa7OGZg5EGdCpktsgK225rJLSDaA6ESdV0ut41y2Ia88gZ9h8t%2FQtHtRFppe0FR%2FcJ6beC2lTEjTovMC11rvOjJDYF%2FiLoPJU%2FAp2KS4WyHvW0a9Y0eKETqU5yaXf%2BBtH%2B025ZNO8rFBLNj1cjGlKcvKcIcT6Tdmg6WGPH8gT3Na0XMbtZGFKMjtCpZ6zcYXtXMctQ5D%2FibSmvPDhwxrnA%2FKOZRpoUbLR0gUs1zvh9pQCaPEES9zoNMZZmdpQGKDBmPZfsify%2BsnD3xv4HM8KRmVsON%2FY2KJPwQ%2FiSrrXMgdJG8tcwn72hwQY6pgEvmhxQgcPivQICpPjcQqeD8tfoNhJzR%2B7Od7K4gGyfDWJ1VmccBtfBbye4%2F%2B8eg4N30un9FuQ0tx2zDKy%2BfKCEXdpW0ZDwEXT%2BVWANe61HUUu6x2VbWRVtJK3JA6NatZWSo2Z2h1Gof4qrY0%2F3XkslLQtKamJpcQuNg97dAn3Yj8USgAzaCznwGE2o76TcXzNmJndI619TMTDPLYLtIJ%2B1SUG6ZqtH&X-Amz-Signature=70c76a4d2c38254353f69ab9de1244eb9dc610fecda7b190238acb289dab8f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K62GOYQ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T110243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFWmuINbNF3n0F4Rpb8adk8c9t2DZI0eElZ9FFLgf2EAiAaOVNEcM%2F3ZuZ4BvV5yzF7v55qZg7zwWXFifogAN0%2FDyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMnp71G39Ot8Ad1oDdKtwDmnJ1DBnsqfcDE0TIQKCMkeotmi%2FVKIiMjEc%2Fjd%2Fi1jHWiN2a%2BS5nSbUs63nL0dYPVNwW9vM0qjGLOlgqDEOUAlLFfSGH3ETOVDwxAgu6E0cmVyAYIQHnbgwinql0iqiotjO2rwcIJRKEkryPjiB%2BUazV5mfWsHwDHgVEMOxosXKDWeQfImetuRdS2C3BJvUNVOaCer3Mz80wb1yIT%2FOH%2Fs5ThhUFrdfhZFbvMjAoMG%2FeHJiV%2Bu3guZMHiesx0H7jsE1oI%2Bw9XJLRTlZq72K1Z5FwKFfJ5xZKkHnlI11aXX0DB1cKMRnghqQ4%2BLs6OJj%2BJ6cTZh8E2BAoqTU97XLwFOV1hzFNUS3HPrfwxm3qLyOPP4FInAQwzUHeyhvjp3YD3reTt53t87zz9RRIWHAvUuwNtHHVYev1pMO3tuoSckh5SYpthGUSRXVx5Dcwt8%2FvObhn7B6D7W6W19JuG%2BzzHg3RGr5KBNGzrHU%2BZwAqfcjC91KzOBIU6CNUoIBHxIETYBA1bnWKOwOTPgJ1yfS7RJBu3Dq%2FQszFLVYgysDuKyQSaspJzFkHPQ72BdGWtloHeujI0%2BjYa8efdtzua%2F5t1vX9EJzYt%2BUCOBf%2BdmCy0Q1nmmb5GHWCmffFLnMwyLyhwQY6pgGfXSrjWACvxjfjpZekjXNN%2BTgDgYOnajDz6J%2BG33SPCt%2ByDFIOlMFyiHzQdNl8dW5fRwM8ge3p67XC2GdaJ9s6FOi5Kwz2IxyvgYni9CKLn6Us79B5uE2ScOW%2FZo341jtA4bXYEYb3Xb7mjR2eUsBNu6%2B6Z%2BMXXo9DTW1BaF8edFrHpePugKS7ivRi5Qs%2FRQ4rlMo92dth1qMDH5MwUEDmBeylsKYJ&X-Amz-Signature=8d71a1dfd8ab99d40c59b036b1d4272a34ba80e46544b58ac45938d49447b5cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
