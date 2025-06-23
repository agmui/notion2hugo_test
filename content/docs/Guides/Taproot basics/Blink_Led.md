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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3RUEMKE%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHUB5QfvZ8zIFcHiZVJITdY5%2FN4EAI%2FCs%2B029xNh0zqJAiEA84JTOYloEEv3y%2Be%2BdlQhjczNODlQK3XKVgjySLDZu8UqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORNnmI%2BnoGZ0S5FwyrcA6xvnfrXkhSmD0c6X%2BaaWiKSvhftCKVSo84LjFwV2TZK4vbQhq9mVmIAs5WX3oFgRXJ%2BqRBukiFtVrQN7TSAocWSuUNLyIqN1q0WMaOme8SCzs21RnLoqYJxllvDVmUaYq1%2FPtgD9OTqhwi791PKzd8pEmeSPkLkr6%2FnshBOG9JQ5SzOBYRAOHEIfwPvtLPGqWkmhFAmM2JkgaFQSEP4wS8b1KXjYaCY9hH1nhte4MDdJ4n6BZ3Wg8X9wD%2BkOsBUJgvGdbItYgOn0IOV1%2BfjY4HzUz1WDk5YDwRdywydksIhf4nTcz1PNu%2FDjVSSar4e270CQzMjvHg%2B9xwIrs8F5zTm2DZ94IZSdSYu9R2XIifMM0KAhowSwAtcwXlMfERPLhIGR9Jaeha5h%2F0LodIp1S2PMxFLewzCc%2FdoeI5%2BVdwjYZPdgsOivXX8u4K18V12gnFtQ4rBSSCHo8XHngskN6HG9QmiuKaI9KTRYXjmRhZBmoHgXebFa7PYUi%2BE0M5C4vIY8bzlsDzq%2F8LlHxbj0shpfDKebF5mm17HOpr1FlRn7VSVTZaMdRr0e5m16O0PU4fHW1HZmWfF3sUMO%2BEgpEDLIf%2BJ0%2FEAy40b2BB1hVCOH43XRUqwbzwIMrCFMLen4sIGOqUBFt4gjghFmq13dA%2BQzQGDnde%2BT6%2FHYBCTswFPPOCFUelORSh2P2lGI3phmhZ8juDRROEWjK9EKV2I3%2Fz9QfaEvUFW9Q2RvdEoUxvOrpS2A9hVRUEEs66zmqbaCxSPcfW04rcSsuHTzrvC%2BO8z88RqR9dUPbZMPcJImfM2nZiWz%2FmFkR9lXa%2FVEBmK5gGhkiKw%2ByOBYT50W4O25QKFk9IsZVh4GK29&X-Amz-Signature=357755aaa4e4ac68ca8046bd8910484b39f7971074e6f22d354c3016d1aa80d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZTNUKC3%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T042405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDwFQMDAleWetfHUKqaS4Z04kx4U254Qtf6VEOjg%2Br7uQIgJ8OiIYRRaKPLPyJtmWIC%2FRGPnPVz30fDVbWkDnUzUZUqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5wEZ7nDOSewRqgJyrcA07W7hLJf6zDOmkixCtE8zsZDcM%2B%2BlBik72%2B06otRTsbl2aPvFl6nqasJIuyUrGMK4rx3vPHH%2Fa6Lpm4w0M0mXeui7ppl4Z5uGQ7m50%2FMeKgj2vq04EAhm9H8dQ8a4ag6wbw8tp%2B9SGfWWCKWEZ3vuyNeia1EWzGqhRS2zhCGPoEG4wKzPfpIUSSt8mB6haZPhj3HFCCvHFXYf02sGLzYShp5dVO2RRSryY8V8UslKVKCJLbW3kfHislFZq06%2Bew%2FZRGQLG0ElhQZG6DSsagW4HNPuF4vBiuG7rongyguV0R7p9htvRtubjwCS1NDluUkW2toS1DrfgEU%2BdcDXVGdcT0UiCxaPFLde9UryrOCgNvrAa2FA%2F4QuTFePXt4ZVst9nfUxb9e04pwNLzJRnHT2yAu8%2Fke9xYvJoh%2B6FDHs5JBJw8pT4uzx8Y1BsgqI4wJTICWuNW2i%2FaJepq51C22NTHNt6vrwXZ1NNbWMZX3TSZObNieA5BXq3XqN%2BTeF2opk%2Bv%2Fy6tG7A%2B96X%2FySRdl9eY2qRKfHMIbcAXFIa0QcOMfyO7QFRW4CHLY3NBRFm6EXRRHfpXjrJVqRFEJp1X2dS%2BqaIvaGFfpVxlDpSurtYjH6jMVBEJ4ymCDxptMJT94sIGOqUBUJN4%2BzClfK0djMB3ZHKmegvoTz%2BBfhIrbbqq1qTtvnPUDjxGv2oxzC%2B9QemA615HzX%2BDm4rvvYoYSqM%2FZJPyYViWcZ9835PvTj6D767PHBoUaDKpMuVRJNGi%2Fs%2BJLVNZ7rjO1uLHGwHWVsQwx5DIxSp7gCbkc5N%2BlWl8yMQKPiU2ep2KVLGZTuFkInZST7vcztvP4zUEnVR3mzGXeZtXKM40buG0&X-Amz-Signature=39c64b6988cb97109120b05d5ad41dea8ff06dcde8251d7233de7a0e1bfcd259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
