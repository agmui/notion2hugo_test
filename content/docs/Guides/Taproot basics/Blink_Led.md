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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUTATVKY%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFy7jrBhPIOfCGrH%2FWxvhAUeVUCwwbIepB3DaYUX7FxAiBfFIveo7P9h%2FOOjTBfif8h4F%2BWZMmGf%2FGEoKPanUayDyqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmx7SUKJ7bxbjjmVWKtwD16YNU8o0FrnbD8FMpnI7kKPI%2BEUiS0fMWtIYcDd%2FHgSPZE%2FAYlBFEpawdiRkcg1BmJu9YfURDRHhQVq1Zm0L68vPjV6yI%2FJr%2BXxS6oV%2BTDiRK%2FzQI8kHzecuL8dTwrqEf2JmZSvcgl6OISGHxVtEidzWKL4pMSHVPEJnfSk4nMoOiP38siYNjDkeYJLLk6WL7y%2Brjwmcsx%2FzFz2CC0m7aF6dOtFzAJvWUQo2j0aDNKIyLZf%2FTtpVq%2FPwev9m4CZIw15NvpinhYByRFHS%2FG1ETPpuyK9g124MeYQqDvfP6i6MohD6hGUi195lpwGLg08hNROAfBndWv7oso%2BoMZ9XKsug538Inkho2jN5UrmcXsV6kcFG7M3lRHkLeqXXCRjzCiswOWSL9imWRw0JJiyad5Gw8qe0o95YLU6jKZS%2F8H8cuh6o8Uh35DRCnc%2FO%2FTmzY0TBUN0O1cJupcQHny6e4t%2BhaMaytkjxdLQPqglJpKVHeh%2FNn4zo%2FmqOyfdYKz1Al%2F41rvNpXKJroXx3Zu3aeXwq11ReZ95xM56R%2BgZ5YAduTuj6zk5wcmPZSB6nIxLWmTTdgY9XC5aANqNAYdGYvTXbYMOkxJ%2FVCm7Gm1HNxq40fCDstcPQoM%2F774wwhMezwwY6pgHRHm%2FENTBMSQ66N2F7xewKsvApWgFGhG7okfYkJU9sB%2Fe27aFUhVufqbPBD6VqJ%2BXaN7zqgJGjTaP85zJJDx8CBgoJlUR80mVQ005vBTvaK%2Fayg0pUPg8aEOyMecupVZR5jaAzK5OjIuuaKU4HM%2FRaD1E%2FJbnwy6TshwZK5g66kk%2Bh2zWPPOQifICnIPwCebKmlwySuv9cX6pmoMDgjSbcqJhHIOk%2B&X-Amz-Signature=743dab505d599bdbb2ce34195d663cefd1213ead1447163ec450e6564cc4b432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6MB557%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID6z0tD5jytzGFLblhae9E9sTcEfPmlM%2FS5t7bryPu11AiEAtVAy42ceGLtgJs4I0kvNgECXqSNFCW%2B3ppQq3oqihgwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2lPGuaypXFhWrlGyrcA0ptdTQ6W3gj8mMB4eau4sH04xkrbYnjhjcQfrYYYVSFQhlPOMkxVUdTQn3820soKkLqLuhL6cVtiLhLF80AjBU%2F5SKHUZrqblckkrD48a7mH4tnoFXwWmc8VHlvh97LDweXE0NVDqas2hwdz9Og4l6golwWpCWSa%2BXAI51xJNW0J4O3IBH97m4eoi9swpw0X6YgO%2BXXShizflsp75VhH%2FAqSOZcoR5Zd9KjRPXRyA0scDjIO59787Ux7R2mRPDFObMb%2FHDrFyDYU3nZ%2F7%2BHUhPCyEamgvaXVHe%2FT1tvzdkpon%2FPayVlVYFUwJlXfwCy%2Bb%2FSWroXHkTlpgrTvrSb%2BfbxWWxAfUjON5YLzkkZC73ukHjq8zNf6ty1rPJL1DxV%2BIhZC4LTy%2ByEYrruDa1NqthemCSnjSzcSiIsEA5EDm%2FyIZy3YRMcLL6kVcBdsWXW31q65fQYmUZhE32p53Wzy75RafSpk2ZwjjV9MXxKBgooQVaJZrkRhAdvkwA1UgkdcI7hjpVWbFUw0f08qbktXLGQsrGdBJzByn1R%2FQXKF6fBjayrP9P%2FXw3RdHrKFg%2BZc1koi0vF4vHu%2FObxMAIaOJAx%2FOUbvnbPyvS%2B%2BT9b0BSIzGB90iHx6y0zo%2BRiMPTHs8MGOqUBwqJeP3LL2h7CwCrkmz%2FV5irOIjUQzvdncdeQGwkIi5FKCnAu5mb6hVN7elfax0DclBk5JSraatQ6yISjCMYdzxC%2BXunrVIniAZ087rGr4lzGlcQyRKctrGR%2FaVQB9en6tVWqeFO%2BpQHhHDL5%2FQteRLI5swqtTRQfQUaqDyp3zZSiK7IIHdXDVFDN2tFtXNIqx9jQMmvmH%2F2LGH5kHrhyzBNDkwwU&X-Amz-Signature=dc6af08dce31b8ad0ef1b37dd5f1cda4aa374e6711627c7aa0548c036e4d912a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
