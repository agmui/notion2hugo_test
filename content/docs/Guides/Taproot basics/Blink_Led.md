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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37ULYLW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBH1%2BnGasiAsbE2lmcKDvjY4m8eJoVdMqg60C8SAObBAiEA2Zrnrmgvwk3y4qO7jlod1aA857mBsg88bZgSS0nDdfQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPC7XIwHDMhD82HwOyrcA6Xop0HOw2RUPctn%2FQ1KTRyB9Vp%2BCZMOm7f%2BDGxQVCJdh5715S2Yf9r9tA%2F5CxELs5fYgGqpC2H6QqFFdRXJjpa4WcXg6m4EnOw1n8bVy1iLFBdO%2B18%2BHqreUthxdSGUZKddjUpUIUyGETlfyffpa%2BZdyz8ogDFxRdn9Q7YU7y5FcE8H%2B0nzkbZjTUICv5BfWW7CKH0TEIpTW85hEdBt1FZgiTmPilSwJ%2FhY27J4xnVl3y0DFfzyJnULiBP8mLKksdbAlCNj3431VM7wvYAAmLcPGIZeAMcFy9ITWgFLv4%2Bofb5GMGhcIgT7bjhEvsdq1f6j2C6%2BTN%2BHINhTVKDNGmDS7XGRbV9YNt8VIHUqF9SKWx0UbefLBR0clvRZ7gc14mog0ZBTMFEGk08NzJhtvEx%2BV6UAlRdzv893FRwcxAa%2B00q0VcYvZAf0Lq7u576jgNa2mu55CyA%2BFusuwrco4NQn7VFClHmDkc9LaFABm19EONfTPX59n7fKSWI%2BjPQT6LwXst5VsZU0%2FLrDfioofGUIDLGRB4ms0D0gOPw4g9kESgP1s%2BoYceorjE4oOMqpOlT1wjhxFbvHHTR3DfraTKpOnOF93AZcadyo6a4%2BTaT%2FM1XR%2F6duPWYzsOxNMMub8cMGOqUBMUu3pkbun0Um2tcBNWnidSxc1sQAL0bI4q5ZAPDPTmd3Om4cYbVLdbqSlGvZfUSVTerZcAP%2FOII2kSqPX54fW5jnt%2B3rACQwBCsCRyZvMxa%2F83mC%2BtIZZPB0Q4DjYz4DFmCot5s4YvLfvyF1Musk9TIMm5rKzQ%2Bq4QSRJfKwy3HPF3jdSxOgKvSR1VsrBt1hDmRj4VKJa%2BIkuUKS2seePFX5RRqZ&X-Amz-Signature=2d7cfb961088bac3a07cb3f7b18d6f2d88fa57afac70457f7472652e393f934c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RWDMI5Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEWZHiiqR95olUoZJFNACTjy2%2BE2lX7KOizC%2BQEvdnoWAiEA8vy0JrM9%2BgB252tgfwViu%2Bzd38dif4t4KUErLFUAR9gqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhrI40NGADGaRr7rSrcA5%2B27Ed%2BeNGgBaKvp4%2ByEw7CioRUE9BWCqZ9HNM2aaCAOZdo8ug72HcwmsRwOR%2BQUVX%2Fnp%2BqHqx0LLKbtogfCKm0Cgj0nb21aBHyu3k6YUINeEz8P6VSdcnN57pBcVMKQJ3CSqlz7XJX7I059DXi8k5cv%2B5pU6e%2Bh%2Bdz1l0vkoIQPWR5ej6ZYn1Jy%2F4D95GJADyLKcHWlrcT%2FDiOwWtvXz8p0aifjCcsp9rc%2FUsYuXSVmefhd2Y0xVgrNnm4Uhvg0EWOd2I9ArKzoDk%2BXP4Q162zzXAkY9Dexv0IEoe5g4v4qzrOmQjHMHP2zQ6Tz1oXqhF7PPlNjzdbBsOBfyXS8M9qNLqrw9PmwaYnmVw2kSw4AfZDCbdS62ZuO34zpVQ3VY5iSyYlzXuqsmFkgRxk2NmKB8kdokB5B2f77p3ID3V6FvzaR%2FIUgP%2B9pvo2Bnmal%2BexlKSAq3f9NSzLGebIq1T%2B94QLeg1Z60trj3sScaXFP472CBl%2BX5awvTbycf%2FFwGmvGeDy%2B8w%2FU2k7sBkPp47GUUlV%2Fix%2FGYEIBTmI2M1SCwRLrkxl5d9dRVMfKqMs7G8oxInB1GoEIugly6sK%2FRMiJiBDPTEUH99Kp907LOKNwYoTISykqRshN4mYMOaX8cMGOqUBCCMkTOEv88P9G3LnNDVp6Lpjbmd3%2BrtkZtmdOjkd4ZLMWdYtyRgVsmXMcyKr3dWr2WdjS%2F%2BP6HwDRaGtKSBAmZrrfwZK3rhFTvBhcNNkTvkFB23snEYHzcvdSSOe0sVVNVszcSVG6hsO1siKUdxfV7IU1NSXocHzQJ7o5Jx6yBsAcYomfl8FJF4J4UDvUDMQratWmEI2bWetiyybn0qMHNCMeMoQ&X-Amz-Signature=58479be99aec6e2662d86e7372a2da0b3efa70b8372cdb469dc14f05818c27b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
