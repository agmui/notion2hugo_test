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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDA3UNVF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIBMwhwExEVxZHRSio8h0gIByPP8FZ5Hgogs9cK8LQndeAiBt50IMXkluubFFY2X16xQt1Nl3CMQR7IneShPuMj4RECr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMXjneXvYTh7GtQqrBKtwDzG8BAXBjuPc%2FqUnloTmiN8VcR0q%2BAMp05eHNcYmLHbMzQYQYQWxYWhoChsGy5ibFRmq6T7textsreQA6OBJCbeCmvUx2CFI73l9fljxFxKqjkaxdTusZkbnyGyNWvU9GmdLsu8XUSAEutcX82Pw2LbnnUSuiylparQEwPpyvxQiRqDUStt08%2BO4sZnS2uZN2Jw3DneBMv%2Bn58Ax%2BImUwuLaMWIpqQZGywakmg0qgwcGkgq8jS4HO8oaVKbTHgjiJiCldaZCrfZp%2BVbD8kAp%2BhdbqfJZxVQb%2Fve9YycRrOMgLH3l1Chb84uGHk5grocLOwjtsVTfDNBSgTf4NBrCTi4LaAYE1Rid5k8GvxSf1gcMYgP0rCTZB52bTJ7aMx1N0vlNgwDUsqznqrRO1LMdZI4DbjxX63GdglxKYVXJK1diDYq%2BYyIezHJMwm3pCd53ln8m3ESnd7Auq5qU%2FEjILT6bZjO29IxYuoJVZIq61bFy8EBH7ejK%2FNxj0bP3o9l388WwmcuKknoXmBkcneb3dO%2FG9SrALuuK3bBKgv5HdXTlX9OLyLpuz%2FIF%2F40k5rH2i4PBhiIJMgSTPR8z24b3k09WywgFpvsDpulS6qFbUsRjpyq32eEiiQ7vWAQowjLHAvQY6pgE51HM%2FiEqWK%2FCqIlSvgY%2BgTBQ7Ev9x1HQMC5zIdEeQlPgsJohJvD8Qrg8saQU73nzz5%2FP1xhKRL7Mk0IUTuoBhYrvvx8Mn3LtOmuHfPjF0RP6OQufJ47dYpeiGqJPg3kg59%2Bs63XykyxocYCSLXG4KMuqLcWsTQWyeNGwn9UXYsA7LG8CrTzI1cEyLxH%2FWgY1selbX7FzE3qNvyeRqynMSCI1agjBE&X-Amz-Signature=422cf332dbf06857dc03b6981102162951d3cab01c742d372f34541c08bdd569&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QNJLV2I%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T050713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQDNeV%2Ft1Ky04mOGPVVZo7gfEPG7BMzPOmCSW6v95pggUQIgR2ER%2FGbW%2BhwSa58%2FRhTRkTGLwJv2pHI3n9WStWnUMyUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDW0ocGjljoLmV9PgyrcAymdmfq0NQQaL6Iitw%2BdDxmODVZNWT%2BTXYfiM7YIYswHSfGzKXNDNHHPaOvUuRY6k0CAwUo6h6d5%2FaHz2qkwnJvS5w1UIb2hbEJhr3vgzSeV2h8jo5PjiUxF%2FGIt0d%2B8wmIXVNn3OtXHymGuWfPsP6MLCI%2BxU2fMYGejHSxT%2BJQGD0MVUbd3G8y0B9dd5Ko1eB2l6K1JsFhQpe86CzFrwl8g%2FcL0ZnNMOtG33gDKZdCrFF0Vr4LysJns6K%2FXc9eO7MTq9RoYtJ8Sk1aimi1xyHV8VH%2F8zMI37VtTbt2JshYUBasAQ6lA4YNAmcdbSdkJV%2FSOU%2F0uv88rL0zXLca6rRG7SGROygF%2BW1%2Fhr3kBO51kbaAsBSzT9L9f9FmChBHUaXP8Ryf%2BSe5HbpvJjPD%2F38hQejKnU9w0m0V4tLVMqNUlH3xyR2odJCNZbs3AbhNJXROdncLxLcr8Qi7U9y%2FTP22QSgeY4xMpWTt9WLGc8Y4%2F0tDs43vOJYzqCN2g9JAe%2BuWkkPwCI0K3brjGTuywrDaS%2B3cuVxWqCXq0N85knmtEAERrAFwTyME%2FgaeHv2tq5houY45Qt1g4vtAYav87IKNq1M9kZLF8rkKH2qessjTPwNOQnw9ydh7fiep6MOmxwL0GOqUBGSVTdLuAJZsISRKt%2B4A%2B73nPN8a1ToQkCagpeYTsjlIk3V5PQZHT50c4Cc%2BX%2FweqEdmQjHHxYM7YNIEalQpaP5AHKHsSXooOhSnqONUXCUkdKUsVRVqaxpETr76XCL54Bv4sowsEXKkH75DVQubAqjvDU8cDsnHjsdBG6KUa%2BayJe6CKAvLtrVQbRrlyEtrT6e0Cvlj9MJh%2Bt2PHYwt6B0TqkWmy&X-Amz-Signature=b482c7d7f1024f1eb0cb2900198e58ef8359527090a426b496556f81f6d94c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
