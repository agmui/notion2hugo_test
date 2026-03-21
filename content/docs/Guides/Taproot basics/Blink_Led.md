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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674HSSTIG%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFW6X5DGq5q0d1HJm3gmTN9SvMYHAhaIqRS5jeZ9KTuHAiA3ZTbQ6WfKklHAg%2FZevASGdpw%2BQdxb9AYqF0%2BdIWrB5Cr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMTyKiSI91NzhxkO0aKtwDSYMrBMV%2BlZ0N%2BOcPqfySfALZU%2BQQqHfHH4UA%2Blf9SDEvw7CkGcnrsSCzf%2Fft8GEORb0Ke9jVvLB%2BHMsyKgtUvXvG6Jb87hYLyP6sYC4h88yEgXbclmERp06cBMFi1wQ33KYbG143uL7nq%2BuGrg2AcOw%2FNv4R8%2FrVrK3uKorEEyzjJDr5lL77ktSWR7Yvvo12O3iMN7t9Sn2u5zpx0N7e%2FGy0qsfvL1kvwYGclN26BClbJbowme0D4o4UdiNFVTgcBK2pHb2eSxEhtdsQ3aEKhrl4qM9%2BVuSNnBLX%2BHYZpdFfUHNkP%2FSknlDehEjOHnyw7UZ%2FvKkvVvZ6EWLYPkXDJwX7lLTD9H9o12%2F8LeLJFjuxA8dx%2B9fdf%2Fb0f5kk43GsKguSxPbTkMeYegc7wvlAD68W4UD7Q7M5LANZN%2FyO0v29EHfXyR2QemRYEinBXFx4Zq6RG7Op%2Fczo69GP7OmMiFRxxHDgIs6dyNjMTC9HGIlfy82DeVZLz0FyYQMf%2FqOKn0QIkjusgkE2Z5m%2BgN1KCEttukBXzA%2BYi5OVua8UKmcnxgiJlywmZ%2FtM0dFEXCG6oh4WhFPuOSlB717H2Yd2kdDC34yQPUnoRF725UjrMmJOHJ8SrUPK2guAvJIw7d32zQY6pgHqyGwkOfTGSIo93SGeLpMAeuVawVDeufkh%2FClxpgeCbcLLLdOP8Fj8NqTsmu0FogG5MnIDrSAihbGkA3CwmAbD2sUDuej9Kf9VIfu%2FLGawn0aTCGBlO6pXd9CkfBT%2BeJpBvqjiTvylPa73FQE5lkyhIhNgMEy2nSFwcYCwusO6ONIcQ2v71MavRGqhWDinOIGoWSefeG7OEBJhIFSQPa1u4xwH3pKI&X-Amz-Signature=233d5ea0c294b011bc463fa316cde5a1a4e3183763a782a3f43413b9ec9845f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WSMSZDM%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQC2BYwY1CzWEOmXgmjk8Y5ZI5SiaYkTVgIJrZBdrbYpIwIhALN9%2BEE0zzOhhhbtcKJGm5zw94PwDrAf16NB3vz9o25tKv8DCD4QABoMNjM3NDIzMTgzODA1Igxq1vGjkjGpwaI8rpMq3ANspaL3M5FhgUn9WdkKN5N83NvDK4QhcsIkuWasdP0MLyKz2aVAeixYAJuWcCh%2Be6L%2BnxI0ki014xSOh88EHCDkJlcF4kfFmF2wmGRAtrk2Fo5bdFYFI1oG02PRlVGGpHExs1cNInlE70Tr2yvASP6SCDJexXJXeAiBqqIxRiH9R0J2jRxJRc01DP7uqMB8KQxoqTCTtLsUi3b5uJR6zZ87QYS3OP1atsgKEyF6alQWl%2BaCR1CGhQrH3g0rsy07x7H%2Fb8z4WfXQS8EFIlJz8oj60CFGMNGyd7jBdoMpY8WRy%2FQZUCMdDo0aMeTqXG58Kwy9joX3eGUipR%2Brpoig%2FgPHXCDuJIZQvT%2Fmp6qHzBTQbh1CJLXoWQIXjk7Z2Lh4Uq4AdyELbq2MZDRQrPVmwUqS%2BvKwtl%2BMZLpLlHX2RLikbe9d4AVcSlzwaNgriFl7%2F3U9PWKGzTPITkhzVFjJxsECRQJkbixF63%2FFCL%2FGn2QTYqk3hKbnXzf2dLljdEoh60ngNfCDTcB%2BNtiUdbo11mp70A6Nc7coF9B48NBi9d2%2BhWLHxf2D6K6ov%2Fh7i5l1CTyBCaWn90OhKvHI0FJPoSdrm6Xw%2FXqLfQBogpbvoCkfJN2vmYhDFQQZ8TXcIzCz3fbNBjqkAU%2B64roOpf3dExzI3p86%2BOz3VYcGER8yN66jemZjCKT%2Bw091qCoLeyhNe7fp3%2BTViDunBAsmHWM9B%2FTnDdNG877NRPWApcPO6cgKP5%2Bu41giqS%2FhMPsQIPZveChMmh6l0zL%2FAkXnGetwf09YPYQlPkjBL0pqbup26WgTJcnJLSDrrmEmqXTIAFdH5ga1gy3F1MN1%2FHxOaOtZD69hp7qf2Qy9D60h&X-Amz-Signature=3fe686dfe5316f94efe4f3feaa9d720b3be6d4d5cecda01ba827a0879ffa0679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
