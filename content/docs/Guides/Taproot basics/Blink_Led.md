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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466572U3MQT%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDGd%2BqsenTiPMKej0pmiJ45RbRIrtQHTzWlypMjlFrstwIgLFBHFfdzDWj%2FeFBwpbFqLLtYK5LZbhBGdSVSbNZdw64q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDHuRTQTxOymY%2F32wmyrcA3pHLOaWk1GJxm7%2BkIb3E4HqLIwBOqUCS%2B50PJSBeGs2VOCQbSrZVCOcOO1JXnxYo%2BvRyKA57m9%2Bpejct0FZ6eCcW4ria1SBqwMwdELyU0A9XwAZe%2BI5JCI88oICekdtwNOrbT2%2BEP0NYVw47kqLjkKW947j29HYZPislM3hZlMgPUHVOacxxSo8USXTXtFAmflCwXyehJktmHxmVr%2FaeDGQ8jye8RvIl9EETzJArLFY4pkAytEwIj8tSrL%2FhXYIqBB8r%2FddaQZckbexBzsa%2BU96RLp1dYJWIYjs%2FETNFargq9uyBsYvRaEDxyYY1eHDLkGYYjbPcC8mLc6C%2FJnkILBY%2Be13OXFaShWeZAhnE%2BQjLmG0XOW9lp6%2BATMdu59%2B%2BGgi5KJMp6p8QlavuqFgliX5MAyauq%2BhLFdUMR9xMGIHL3EcD3DZ8yfvbRMjbOLlBqs0tGLOgNC5BXDFe0ZvRLX3mgiLkJ67OUcVALryo%2B%2FOB0Z8BXlBGML3X94kgE2hijhfy3tEGHSPy78kYJNjATBJm9VNLgwX1uVL49oX%2BehdW4LLEwYFyiTLWSUEVjA3ibzO%2FawRKEblwyKK4sNi7GbP1uo1v3LfNJwgZ%2BZOuxwPilYr0AviGX74bJPuMLDO6MIGOqUB9%2Fb4f9xpaTT4VWdaOwoN1WRdTY6Wdzc1dqMQg0VjB4450lW0x26ZDlHYDjh07lLXjCEiz%2BD%2FOBu0EbdhPSphgylBnEr3hCRPhqO1AMN%2BjKltferR8Cnv136VBce1%2F8uoF%2Fd6w4FYbHw%2BbPzOLinuc9KI8sP3Rf%2F%2BAfHDQfOKRZWqqvoj%2FdbkX41tZxXtKzYrMUvntb9lQvpriw9vEIWc7NH0plRH&X-Amz-Signature=3e30a9d64123cbdb89aa9404ccd80215f852ce4ab934546092f793d37cbcd74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO54OOPD%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T051145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDDB66nNZc9voSVbH8eS5YbyfgZPQqlFNtIVkkmRhnAmQIgCofMNkArjI8K%2Fy09u23jLJosBQ%2FNxXeASd3OMkyrEjIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDE0CUaxjdTYwdcYxYyrcA2WQo7UcDJjUdS6zx5w2dYOEKWObCDnAzb80fIrGEzt8rr6yggaDg%2FGdtfrlrkIqO4Ie8B2hqCJCxK4TDMQP8KECihL2X%2Fn95LprF%2FXxNQj7uyVtJwka1QttY1jC2WxWAbq2%2FRCmsWYQA%2BolLts3vnTGDLW%2Fj%2BzQVOKhsbdAlIoMGTC7byflD8fDbdfTcrNz%2Bp1dt9loTdrNKIuxNPSag3nTiQvrtbUIDaukherzxWPTplNp29ZHlVaAC6fuPWK7hKQ7vG2SauP%2B77llBi%2FP6wj8v9uvoNANpsu5%2BgvWgjJevbLacccPqxoNpo2rNQmXwHv7r8BmjTRfeGbVRnhaiUIZrDugMFglUW5vYSbHzgT4yaRyFDGtzRIN%2BL4MrwijKDVzbSIgZnVWw0DWZVawIN9AO1YtIGcy5Oaz6F11TjlE0Vn5vqsOaUcXt5VAbQREX4Bct5oR9WG%2BhNeCfRqBH9dkNe33VEIayaWSZNm7aJUtwEY%2BvvBklwbD5GoO7MvSm3S3PxOY6SBbdrPtRomOL2WNM1FCDNZCdm6hBMhmc8kqIYLrf4Su2YMe1P4%2BoTnU7w3LdEnPaIH4Je0gTW1Xm%2FboYXju8DwvyXmBFmRWA2poXnZUkrTBigYdeDqDMP%2FN6MIGOqUB2wuozD62NYbI0ZKpP%2B5qhJvOpBt3PxjsEZPwlFvUvjGgfTPkd%2FpLeG66BMXXSOFPcEWW9knKjXITD6pF%2FwXUzjtNLgGJ8MYs%2FPDlk7kaBoKD3LHYNiJ0h05s2mbEhwOURPftXViK06F220AqlMN3gq5FtkMk3xgfgHjJCgwU1NPWSTVVFWxqLJFSxmG68H2kPYcX9dS8fEwA5GDNkkuKXcWPhnxK&X-Amz-Signature=1bfa889042ec30c7d939fe7d26d29965131a533e0570e647ec7906695415bfa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
