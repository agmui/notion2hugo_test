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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVBKSRVJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdaeIHW3suJOUc9VU73BsYQwJOQtMZRAOTtdWPe3mZ6AiEAq6Q7pECBzkTeN8U4jEK%2BaYLWXffiZT7ESsL58OH2SbkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPX3o2apynTw86otyrcA3Clmnjw3FeU1JGOD%2FNkpnrzlqLtT%2FODufG1roGV6AUxPpjKn9wGsoDUdDPh1VNjEVdqlz7AUz9wx3VBAoxSlOOC%2F1Jhz6lcxcPXnsICyBQtq6e17f7i%2FKeWeg9c7StBAl5MhB7Vs5fspoo%2FaiwegfFowGLi4NwwIsBByUccBWI6OLSpo37Puha1s8dlvF6wonKrD%2FZfEh%2BbmA%2Fl8dE539mHf8Lk6YZSneguEMWABFI6PKv4rNe8sJeujcKkKD0uU7zR0Bc9enQ6nkgz9Q%2Frtu9mtKjdTFOLPlowiNANTxm4Ymm2OlQ8I599ei8J6wrbBrB4yoWRvg4IvXdseo1iyT2loyqXahTF4XPPNhR1kX6FDy7BwsV5uMKYgwK0CT4vivZGyNviJtbMrYxETOR1Cpl%2Bb0gbwpJsnw16j11%2FmXXIIkFlmEoEI6SUTXZUh2P5KjHUs3D6iRhXT4eTTkqGcvkY1C8cwqMvR40p8rDlVTrrYyGfVMRE%2Fx4BAktkyafb2dSBt4LCVRQIjwT1%2FWk5oPK%2FZmSowPWh9P7utqefoPEA8ED2Gf%2Bb%2BbJuIAAyz099nHmfMKQxDmbpP4RunanEnofu0rRZof%2BvVacWf1kCBhSdgQn%2FnnCH7ti6fYjQMPyJsb0GOqUBQnRJa8vU7st5LGUpL%2B1LULFI6ZH9FjUjo2daoxJbbjGgTjKXkdZG%2BhhvW68%2BG9aA7VQF0BmvVb%2FI5s0FvtvkUVEWbtlJbnS1JoLlRGGQMeI990SNz6VLyw0b3k%2F1gBpGHUrdiwb6RZFeVQOnHvU8TT8ZyBIG%2FhL0Mr7Mp4uAlty4ddwr3Bh6lkiAbykaH47l7qKGfnbir4P6sL2ddUr2Hz5HvGF1&X-Amz-Signature=4fc49f174cda68f378b9db1153bbc81d990576c8c4134610eff79297c128cf22&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623JM26XV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzYv71IrWMVtai3JdbQUsQS6gAgP17HjxdFNWoWzbGnAiBL2FWcuqdVfgwq4WiWbWiaIboLwl7g3NBcgsYaVp9sRCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BKdv4%2BkcT9WUG5h%2BKtwDiOsLv7G2iFIy21vbaDhwcFBXnNu3zleq4nWMoQM0oLJTvzJxcas3eNxv%2FfQdMwvArjmyk5Gfo4CP1U8NC5ts%2F5eXYQuDW7FvCdKfZz11vaj%2BVfRtHOFAyPY5YTuCJsZBhUWbLvpCQ6lakqh4pkxvIO%2BPtxCb2oupiaXRcWo3KpakomHtBghgYa4LI6IR8sXdDopsibjTcb0qqlB2OAz3Nf%2B1pPyLw%2BpZ4iNnRes9BqsknBYWsCmD1drq52m9PpGFLAvwO5rMo1fJYEkUdoESOW3O%2BoKofH2JRaJmTXH6xTTIfEVbWf1mvKT9zuaLPxlQ3JUHJjMuJ9QEhy3lYC3QLUwHAxaO6d1mhxP2GNRnQfrRhF0zF4NEuUW9FH7rkujIgt1STPk3oW5bPK5y5TUAAEBWAVHWkMOQgeX4SRVBIQ%2BA7XzxT02Ctum6LnSjiq87PAijgsRCRHKA703GIIOOGS8wZ4JMdm5a3cisFeluvk9K52yJMkgOxfQjE2FRmNZ3GjAVQLGhNoGBR3esMnjuaqqCPX84KbBIKl%2BcAd8p9hCBhaCnOa1snwxE%2F9VYFdq43hkHNMfiCgXLMMcQ7eGtrGBSJN3ZMYYH%2FhwH6jCEA7FEYAJw4QqdZSHHHycw6oaxvQY6pgGmIQHY7VLjr%2FBwr0W9lF3jwet0DR4L2UIKEwB9E3MJH%2F%2FTdB%2BT6pgM3s4feKSBfqUj1cnkfo6pibZfraKUHLnFa7UMMCfYl%2BA2qyS4Y9U71fgNCNropcGAn7hEq02fmnycbhI2fLmgf415BAxu%2BZpp%2BlweXP%2F9dGF10IS9s7UsGIOx%2FtKUtHARNPq1ZgGtX%2Fi8ttJw4NG9qd3PO9IkMvUqgXps7tFW&X-Amz-Signature=9343766c070cdd78f62d72e6d7ea72c3570a0a6b1f87b4899e8eada89c250749&X-Amz-SignedHeaders=host&x-id=GetObject)

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
