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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HQPFOV%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCodGaBQ7MVug3y%2BVF9Zq6r6CDUK%2B01gLuJgLagu0FYowIhALlaZnlxLbWJpjDLV6UblU3TdK%2BKeD35gpfItbnKZxIcKv8DCD8QABoMNjM3NDIzMTgzODA1IgzEOSZMphVN1bo8YkYq3AOBaNtzvSNTmPa%2BTJ%2FRIRG8%2BMlSIGs99%2BszngXuWzsrOawapKivstXleYMqiPGqXO5Wr4BqVJ99gcAU8OZ%2FUhzUwGdH3o2VnxxoFUHcgHSScKGQZbPpHNcf5H%2Br6Im4hw4hPfDAf1IZYmUGlI8iRLW4x4toU5tRbEsL3dMJ3Nz7CLhUacNfb9cjXQGQbDXYA6O0rvIwQk9N8hp8eN7%2BMHvj1Z3GZfcdY1z2gUde6NgoF6AB6g1uUl6GxtDdGotkjqg7gPg6sextbXi4SVygjUDOd31qBgTQhf3VO0kqTu0Ge3h6mCk3zxQYKWRrfEu5LLRfStCtRNzXhuPT53VB3KKhAtRd09thgklgIzF7LmM1oCoM%2F0%2F%2BaNwKkPuC8u07l7u6tTK7%2BipQU0hvVleazAviRNPB%2FTHonXuPQYQEFnZ7%2B8U3cw9N6imD%2BKQiYMkTdGUDHuBvpcq1azWR2k8w0ygz6rVW6N174wRy8i8w%2BsWAGb4GlY%2F55YIpYcAbX%2FEOcqaMxBSulSnsDqh0OJj8ONZX4f58N%2Beni1tNaxYVhAjP5Fkx%2BFFpoLdbA2TFrLfuiAhDurym9CrtVOoTImJtMEVyFjwwL1If%2FfG88kfXZ41bTZ%2Fy6x9DWp6UnwoAATCtxbnCBjqkAVwFqu1eyrHvkBQ7ZD%2FetaZm5NuMOGZMQNrHE4qJGzrq%2F4yPLIpcqrAxiRxrTScjB32DhiBjx2KqUPH9vzLdPNn4jNKgtpfB2AhkrL1k0Xwhk0ppyVtLv3UdORdtYTnj%2FjwIDrzBry0KHSGTVHSpS%2FeLF0O4YviVl6OmLMRarDy5Tf6jbWsuvb689GvMIwZwf7QhLBHk5tb3p7T7jdXBSpnx6Uxf&X-Amz-Signature=0dd6a6ef77009b3921c7f10134356ecb6d636e12fb75b5d97b2eb9743146c841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP4EDDJN%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCQT41Aow09gTGgUhe%2FLO3Vsf1NUAYgR2JIFA7Df8P%2FMAIgSlGdNVxkKIzfnzuG55xfLtM4JGBWf28GX4DtJHK7Qx0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLctFgp%2FXlBlR7jB%2BCrcAyGl7Z9gx8k6TpZogSRbGAmMPKaeKKxCPwmOWF%2BlLcxCAGVAZwyNewolVZpBtNFuYYVfryH0GK3sw4xPnSxPdjw9YipuMhTcbZgPeSZAV5wcKvJecfBMDTlv6XlEte7OEQJx03YtD3VfVzS4W7klVLL0rev1J4jyx70SGhVZpV7YiH60w6lQS9hUYVr4xm1PMhM43PpokVNvbQszFl%2FqXL7pP3AyhUw5Qj2LrYOZ2F0xSGD38gSVhOcNvBttzKkqVp6gGd5LWPpn%2FVlmDFRdsYIJCij8Z1iqa8IN4g2BYELOVnBTkLMB7a%2BQmSldiG1RZ1k9plodAr5DqsBTs7IvD6Zm%2FyAOzgAaOe22T7g6nwe8sB4OT8Gl1IcTuGhIVxPXBvAkIzod7ZqP%2FA0CSd5W%2F%2BsQGkjFQeTysO5pZq2LE481HYbIIwdFlbBhzWPU3qQZEwe%2FtY5Y8gvblF5zqrrwQWHRLzFTsLY%2FYDItTAZlPrDu6MsZj0coc1k7pRTwEtCOXJ3diOeKqW9Mgs8KDZSUB7X%2Fkcf1XK%2FHbHsEMr1bHxcAWuhDcTiB6pIA401MmiIjMF4XP0bW8RdfKdIvWJ2nlD1n02QM56FRs8kfvgiZ3vqSYp5hWI0dBtVIL3iqMLisucIGOqUBhxb9Iofaw9I3wmzWrsgHe54sLmHjSxEWb76PjJn8i0JExg%2BizFKojOpWUtpFw2YlVA%2FSZ6BVk2Vm3ZMwabtq7tN7uQplGq2oAv%2Be2kM0rBRo9BApbqj1mzsJwbvFmcGBQdtwFjp9yV5fcLZm%2BonK76EC6Hg1D1c8T3MVpS73aKXTvozV0vwwhew4HO0B7gOFJARgl37%2F1u097tR8zHe3bznyD90e&X-Amz-Signature=db0ffe51e1f66b967787da211990fbecbbd326e2be375bb5931f4f8fd87722df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
