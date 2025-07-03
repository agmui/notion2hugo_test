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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVKHGKGS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIG2ihamsVSuyNpjlQua53%2FEh6CzXhiVo5QOvhrLwACg5AiEAv7SWfjpRdYNGOXTgLzSGTUBOOSaNIi5iyVB1MOZpWgkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHl3QTb6AwU89HTTQircA73qzA56BNEldvzHY3Kgs3XTr7V1p5EGZSr7SxdX69jWYDcRGzAsePzRrrq7cgelTYVvcW96ereuOadHi9nezE2HR5k0c4ekIWptzkv%2BBl5bSwppRhiWsC4nQt3N6GJ7KjSACOlXxMZF0mcAu7vdG93Tc56GGk5efFKXqcyCQxrv%2BOWZ78TgMElw8NBeMbEHGM1R3EkffLypiySqGUVQQlMl5nfyfNJA%2F8FFovW4Orv5mbDKFBKRejnbMbNSVgfwUlslMm2cyILOuM8lVSac3djZIvPlWS%2FVcQ48oUHPnj%2BsNNOO1EaOKcKjCtpLO3Mip79F7vF4k%2BAVAmjt7%2B9hw15Wprtf0w54Gj4xLjksqa4wdpp0wAXJ1m1%2FxfwUA2hsAxLdH%2Fp2TWECtoXV0ngELjLBxq%2BhxDrwqkoQCL8F346dMmbcg4KcGPt3GyDec4QxQio%2BC8w%2BBuoG%2B7C0ML7QgzygwsKirAYANI9La6g9K5Qqu1CzWWgCllvipodkfCeHMEOOWlTojmsoEJZwLG1He3XMtm8WV%2F4LxNeF4Mn5071ebAxGpjKsSg5bSKt3sAfohxAr6H2Tkg7RvEPbkQEcEk9NoKkw6pi5eUxy0G8nEu9xd30wP0kvNiDrtOCSMIixl8MGOqUByjR51Lrh08xrakB5VQJ%2FQwqOxveku3gP5Fmgt5i4KZvEsvVWaqFhjqypnkKHY3vC3d6Kjk%2Ben15JRv2y%2BVm2Y0xj%2FNE9bCYbdVbx3jlr0lUCpaPfxOfvgGl4ftG58HW4w%2FIjKkQ9%2Fh7kazBH%2Fiirr0NwvPXIvXG093AodPJcYCZRjTbPnvncGzifNQeaOkM%2F7L7iM90%2B7gLU99h%2BhFJQUCzY5tKu&X-Amz-Signature=f97a12af8c736e421625570042414a543b027afc4e41da6994d5a3e5c506c51f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVZJE266%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T024304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIDFqdXfSyvvdT8qblyYKeVJGECHgODGS9JpyGbbw%2BKDzAiEAmoRvr4Vw4tcU4BUdMzmzj3xXvLr8RuCpM%2B5pwWweH8QqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyM6L%2FeVxFZOm0ZByrcA8TkLwZLgwNo465f2Anw0MaZ0btPTpgMHP1SHdnVEjBptlvoMWdN2EhMaOEVHsC7VKklHRj10uPIoquDOMqDZtCXwIH7HLhMdwGc8qX9URtiS3VMN1eV%2F%2F6DYOcts2R3a6iVO1bMYLBxW8P3oxrrVZDMVOUxOa84eEE%2BeabwIYWWm6zyXJC0OR%2BtexbdLDDfszFfyrWF3fQUPyHDztKTb6kBdh8ei3bcJrKXw98CaLxnb8ARg5%2BVC5h5oxYvLBUidT8rUK5HM%2FpluvZ%2FhOQ91hyh6nMeuS1pjW5z7jIex6uYRBNHDIC%2F4PYgQkK5T6pa7EwI56CGji4LBzj28QvMY9x8oIW71vB4IHyK0lQdllGsU7%2Bq4bWpnW%2BZyAbPA4dQfMXqtgOcVDiEMKZ2YvhVl8nntqKREYVKLz%2BiyMcIvvicMWqnrYokG73joS9LYNoy5vBa%2F49v3u12YMRiw5WhAFGiYEvaJ4V3%2Fs%2F239T4S8MIlE6hZ4DqqIFjS7kybuzZPfYx%2BS6v1fKSSegUpoMjO6R5zBslZhG%2Ftjp%2BqPUwUI1SnOAxQJknO0h42ieHw6pkcAsdGnhPvqQi2oa9%2FlLVfaQbtrtTKcXj4UFhIJfddCk98dE3dD0w37MQciJTMMvbl8MGOqUBrS6yl%2Fr0JiYWh0R2vaIt2EyQvHXemdRBLulMOOBjyRsOpJAKhU9OMuU2l0our8o%2FeHO7XX9evRMr3jmMeAk8sgiH5YTqRjj0dn1fmEXu3a9jJtpvX%2FcBW2GnM57M0012M0dKM9B0sXokU96ZBINGClDv3wZoI66%2FRNsyBYnDwDSFeeWu%2Fa4SSaCshkpL4Gy5eMDrbVAZDidmAPgkzzXmuUdDVDfh&X-Amz-Signature=dc3716a740ba945cc4f6dac66faaeeda8fb2e375af83ccaad4709557cee6a6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
