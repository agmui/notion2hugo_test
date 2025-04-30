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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZNILJH%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD37Diu1UFD9UQfn9rFIakNrzD2CLruG4wu5WhdcCYq5wIgbi7NmWueDO%2FDRYxyweX4TFaVSYr%2B0z4kY4fJi9TkS5QqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsz1QNNIMVDAGGLPCrcA0CS7KjzPShDClpzTMKYtCkxojX6LZUk4dfpHNMXuF5fpK%2BX1Bwpdr5evuq0yrgFOuz1faz5PQoUdgouPLNSyUhArcqxydV6K8nWsmjlyjPnBsuMNpkjJm0ydjwYr%2BZu6W7FmZsITjzqjExjmc3ppU9IEWxqIq61JBbFPlGAaKN3lbpjnmFql6ttCdAQyiuDtseS7L%2FehPuyhhlvaucfMbgvB4XT0CfSWBnaRexqtnRLrLlkWBpHbBKX4EpX%2FAkf0HzeSk4rUcYfVFLEKCf5mGSSa84%2FoX1kXN8%2BAlS7gbHo5tEHpm%2Fbn%2BLOEeqPYjtauOL16TkSWOBdxMYgrNomQgBgWhcU0D4ob5Jpg3FtkPpsU1pOeN%2BXjqXiykavHXFnUFiVyJWc8FIOhmrw7X9XO8ZTtkJzeaR1QL6JHiYV4359muUr1MGF9Pxmq6gVfi2OLTsr85aQsXPaT5VFsknJX8lvNZ1wM3pGDRDM6AovK7cUS6CKtf1rwMfSLxfhJT7KkOPmAgLUXOAdwDQwfsoC1lOUNh0QNQMePCGIhJidB1AgBvTGvOMAGQGVFrI2o7pDxqvmzss9C%2F%2FZ62imU95LsMc5nSD9zVu7wvfagql9bV0uiJdT5JS2S8YjKzgXMMmHxsAGOqUB6q9StyTkC3R4SvG7vt4ysl%2FWe9Hj8OBAXhwkbaBD2Hv7ZaqnVlPqyeKsDzzyHf3UdRAhBwPFOY123bPFKd12VF7ar9U9Q0QxIpbQwlKuqJMrFwVCm9eD%2FQIhB3eUHm8NvENTlk71eM4CmVWCfJRqydYL08GyEuMKOaQBIhcfNoeJKPdXTudG1x6Nna52gXPhXM%2B2eyXqnzokVO5oj4CwnGVBI1l%2B&X-Amz-Signature=1b9b98aab42f3ad87f711510ec9d3e7866101a98408dc141e80f6f05c862c015&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4GCNT6S%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T022312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIBPnGkCKIDsiD2pzvmrnN21sOJASCPgdeLAV6KraeQ6DAiArRA5SevZ%2BDwLF5%2FJnQBvgFKlmRZjfpfgSVodG%2BFEMqiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMklnUcv5xi3I5ynRkKtwDbMgyWUNIv%2FAky9tGI1xJgPiz7qA8RqkYG9iwitaHcPme6B1Lcb7vr%2FVw9Ht8%2Fzr%2FeYBkdaqb8AI2pQhaJLOuxZ3rwIhfeyyJbmt3LEcatg24MrU3xDhO5xXuZ8XwHtBAahHc2Z02BBmclO25qXukvrXUUuR1b66ZKE0Uw5EP2t8ysd1Rhisnmr8NwytjD9FbbWMekbeMSPPn%2BcDZW3HLUzl65q8uD5tdbr%2F2ypRfG3qvv1sE9LmH%2FA4veGH9neUt56FyyRsbM%2BX9xCQ6rP8ouI%2BSXaRJIpGejn3%2F7srQYOLjiIX8nF3pvUZz5qKml8Uw5JC3nBgKnh8pX3LK9SuUgfvHPPPWc6gG3MMgWdk%2Fut%2FSRBo%2B%2BIX%2FO94Tp0J%2Bjb88lXNNA%2BqRAZme8qh2%2F9p3PzMOXKVoUIxmYxtstiTxsxglnlhPIXIz%2BY0RBCiQ%2BLaDupxS2jliMeuTeH5JvKBVTjY%2FtM7uS92fQUvEyq7YaUwyV4o4nQ8iiYcTHSiGyGsqml1mcolT0plaAR7eP7gPzJ7RQ2mCpfqEu%2BVE1GyDUMPOTOsKHxIl3HPBQLil%2BmsF0Wj9O5ESNiglE8NX7gYmlpG%2F7ovJdgJYtAiCXvDNszRqP4m3cYmJ5fienkcwuIfGwAY6pgFCfRwRtESlkCVmPZ%2BG7Y7jKEvy%2FPd1tVW%2FBFZbDO4NEXsCtAmpk1lkCiYDM7NksXXp0LWpHA2GjnVWqI0lMzUF3PTHJ0Ra34V7ZlFooPCaHSxNOGOGut0STJtS5ozO3BkDS1exStgWiBMSjDZX9D0FGHC77SwIfObCvWR4L1D7aGvVO1cCNdqJXBc4e8oW01ik%2BTqjLZOx3hwL9IHFloS%2FySpssWBT&X-Amz-Signature=fce14f05d621e9e94bd15983986d5b9b78fde4e2870fad7a1717f2bff5651fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
