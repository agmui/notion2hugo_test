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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPAB66L%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPuy%2BDPbbVgMgw4DafMlmwFRPJ3ZQ1yVD2baYgolaAhAiEA4pOG7MAiD6Ga%2F%2F2MBdtZIxyQFJqOsK1sZNhxSpsHmhkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP3RjSEwCZFH9UwS%2ByrcA9GVehFAHsmXBaaUyCJrldVNM5DtXCOOmkXq9bR2IERsMHxetsV9cgOUZZtSUiEqq%2BGxrKc5JrTqAMHDjivlWTbQQfhMrit5Ek57WbxFzp2YewPqD15HUT6fomS%2FLdbk1J7ylD36rBAAK0jOhouPv6wDQXKLCBERevHiqUpCa3e4mawn2H198%2F4dK3A4b5ZIoGif4yEnhF4H0yjD5pKFGyLniZtTemEfLnkUPwBuNy5WAriM2qTnyuSmGD%2Fwg1tb9qW%2FZc0djuv0%2BsS5eNNkTzstl43aieuOV1%2Fbi%2F92ceGLshdKGKuxcC2XFAK3%2FUisw0fAldo2qRAyZ8uuDMPC540EZrYYO%2B7rp0gQpRY5hy9VwMxfHjoBeIZ6G7h%2FcEY9gJuDBtpe9kaL1fnd8gE7LHEYRUa3yhmoyP%2FoboZPfUFOZFU8cNq%2F3zP2ri5csmG5A7jUVDkrUq4P4rzAWSSqFVwaGyns5u6mQN8PCTy3GTfY61IU6hhKl%2FjLzR%2FQGO5LgJQqtAvO6MVBBn2b0WSdwJjvkhFWVk%2BWJ0kN7IyBs%2BUM2wTjFn%2F5Fm9eM49z5%2F3QOESkWav7BmEqcDZCL9929s%2FxH1y4VeImf3QU%2BlRZi3YyhUXXhIVXZ6IkPiauMJycscQGOqUBSzVSTCgrJ1LeriTXK8bF9pseYZuGT%2BtRhTypmXWwtMstI9kwXTyQhhIX0LBMtz5mphQkDIHo7wB%2Bf7QjlQN8qlo89iHUySo2KsdTrzWqvCw5ecRIWu80StrybS6DGj9OGDWfUNAAE3jDfhQf%2Fjmxmq7wSklidenL8jx%2F%2FNQejGdFgM74voeq0%2FC80lIIS1JbDZ%2BU6HM8yjDTX6XX1LtEFwHYr%2FzG&X-Amz-Signature=ec7819e1d0ba10fafa9b2faf5ffa5231a53943a18e4a5aa19d2911b62239df5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJA7NOBR%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRQRifaTs0b3Q5uSzmNc%2Fe4q%2BaxDzEK2ZJJbtmAYLaMAiEA9M8zsEenKcKMgm9gCQA112TeeB0zDB7SzXpu%2BF%2FtCScqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9kN5y7Gz17QvWA4ircA5s4dRszXaq6Si5ilfU7BnavwxB7p7t%2BEoKzBlIYSnZRrd%2B%2FGS1qBl6I6fzCpM3mZSMlkM8gHsqrfQIQP5MZVHZvv5T9ZM74CSxCa%2Bu9EpLqS%2FQM4hbn77iYRgCycoWN%2FACdd8CYcPleYu4Xp%2BQKLL2UcZvQ7gwx7JIQ3oROc5PEIJCL4lQT7EaPeiI7KV%2FvUT702ah5IcGwC0Et2UxyRBPqnlpH%2B2s367Xuzi3CVKasLWlO2m%2Fz1SmKPs%2FnONplZBkuNGdsrCac40E%2F1gKlvIHqdKwP7zgJ8norKtP2b7OkeHN%2Fb1n6yAR8Ov3ncZ5MBDj4oiaJYcbZJ2XlLkc0BGzGvK2EDqk%2BtV7lJxD5WqZBhIxhyjKWU5JDOSumA%2FVeAxGdlVtP6JDutui8vmHlWH9vu5m2EFemJLEjeK2jcosKq%2F1sCjA9Y42orqn44ia%2BPMz4rKDAq8ovUBhOWLJ9qyRDN0%2BcN4qD5HRV2Z1SuXPDOyMY2wXOTb9pr%2BB%2FK8QdZydTLa%2BpTIH2Cy8fwRVp7wUrm5xHULR3qoYXas5TvPEoiCPmObIn9a9V9ufczas%2Bd%2FA%2BWbH3QmGW134xqnNdyvTZAol7HjB5kmh8EoolSgEvfdrJCcVmEjVfHrtGMKKcscQGOqUBrYcXgkfO4NFH7fvdp8JdNNDnvhmGHDRhurV2hHjZRl%2BS9aKO2mgi6gOuRgwSlAzaDhO1xhEl2eWYJFGEXBSEABX0XV9TzgqnWKVw0SDEeVtYQgUixjBel6WRrw1v%2BqgWBHdroLp8u5OnSboRomePfbx5DnJo%2F%2FNGTYjFKQIrIz5cKSUz6tI8l6lc1wgtym8dbWP2CuNLDtyGhnrDQcycqJEH%2BhGx&X-Amz-Signature=e1bce7170fa0669682f7ebd01b83c3d7c3b8125661b561946454ee08dd693a70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
