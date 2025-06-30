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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMGXBHX3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmTa%2BFnzEDL7%2BSMsXVBoW6th8%2FlewodqjH3EA39FVmAgIgZ41ykOoJ2K04EtQJmW5yJZBu6hkgA4sZj01T0QsZydIqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILUYdkU1EdHG0ZY6CrcA4Iz%2By6w%2Bldztab%2F5aTe1Qbsi2VszLn4%2FQ5RBqH6QQUaO2KH6Qv4kQlZRaJmPLN%2Bom2xZKkjmfd1EbS%2BftFQbKIGXvMn89LwBtgJzBkVC9cWilU886NlOSzC0PtSARvBQPNXtqgwNKUdgTbtxD%2FFYwyPyBcpLS0qgji3WwwvJbQglaOUbgTOw4%2BwCAFd7vaP6iD9RTmfLK3NulUuOMCTCk6J96EoQ3kIBx%2Bn1RlBpaGD2YacCRnnp7j4taq0IwR0IQMBeL7qj1oelR4GImUeCH%2F6bhbmLC9cZ0%2FjrL%2BrjgUC8wupltwfNnF9er6BJK3PbtDhvwwZ9WpNCIioZmgAoMl%2FctWgKHfmvE4Gb2qH1bwraQuIO6HjNpzHza%2BG6fDTnS2jp17mHPeYoqqt7Tddu2iCpnNr7ST6PZve8O5iXPz1r629yWuJ17Rd%2FtNXju2LWqjH6u29wgbn%2Bj8Fu%2BEJIsICPesu%2BHW3iqFYMUwLuCR%2BIlK%2BDImycFJ%2FkZv5lmBd8EUCEIhXGECbMvEq3LeWbTc8h8kWkZ1yLhJz3psRyHoBIu1xHjVsyiHRcFfkEKDqq5K%2FShOTtv56jeeTTfymOCHBJbL9XvLYIfVMLve5UpLJw2Ss8lf1wZbpJGbuMOGEisMGOqUB%2F3sOPSggz1u6r3PfVE5Q%2FG8ng5vxC6ujzaDRUDO%2FfTE4h%2FI%2Bd6U7NBDwUkwYEgX28vtZe%2FUGFLjX85QFX0dF2E6rE9cWEumeVGR9I%2F0oT39IEfL%2B4F%2Buc4SOwQBHjTs42ayqOe0m4yQnTOsRH6gAq1aBsynr9F%2FA5y2tboLp5mkqaJ0VNAbwboYiPnUDOLxj%2BGkJQt2k9AsvQEVPF9eLG39DrHz7&X-Amz-Signature=7759cb723f88b0b7ced6f4e1f1528f7db0f91fa15108a525784b2c4a15825e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622NVDVYL%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICszIl1rKCIuemLpPRLtns1N7HG4qgDs3DydUHP0B5WqAiEA10Eq4MKyEacbPOrUpXxWZdpLZCEcya9sz0odPVr%2F3EcqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRFmCV0yCZ2kWX8cyrcAzOH%2FQW3BijRpQ7QHF16OQKYrRSUH%2Funtk%2B%2B9FJwqUSdYg2UVZvpp6HpzZmw3oM7q%2BeVSh1ooc8KVoaNl272x%2BLAv7APC99xBS27TTd%2BFNVakOAHbH29RWH%2BGwRLqgkc6%2F8Fnzux5f3IKHj%2FMIeQ19OD8KFJgzxoH3OuPBxt4r6xXKMQ98RVeBWurYl8SNYXY3isx0l%2FnPAribfB9HCeL509Xxm8eMXAp6daOqABfJl4xYMStSWpYfMm%2BBzLEHpGoD9xIeN0oaiLdRKjUjBm6vsqF0h0jKcjLZshSqRnn%2F0kUh%2BrEJBIbnWgNcNG866qld3onqhNvXce3QtAZtJEEF8hhGzpYMCp%2BBJtvGuSNE9dY2077uZ2L6NIpJ%2F3JMc9tnxQIkEzJgp%2BPL48K74FnfSJa0VTRZQKi25xIqGDMdR3jfoK%2FOUxRyo9AFP4khb3VvvQENZQMUjK2cVbcV4S%2FH6F9UdduXWb6sHVxfki7qpFE5Nisx%2BNDW%2BvH%2BTZ5fYNmlEDHeRQRFKbiuGpda1Vnxr9D59LAUqfuAvFIZMdXCLFIUVFBtu4UFiRLOd1WxpU8Y2stusPzle%2F5s5OtRXGOxegQpTgcLXaeeGGxhZwBy848h3Pg4feTL3s0aG2MMuEisMGOqUBELTo25vbjHPaTbTafU%2FvP4eiFkVmlw84iQJ1uz%2BCyar%2B36sp48HHSIRy7yUy31oR52xyVxkVuZwAy7hLm3PJsXfD3EpaQcNGlriKHkfR5J9eU45dpY2KcO082qC3IkU%2FR8GfYAj%2B3mLKBhsl4fvIvWY09CqAMURUhVNG45d98oSlDE7RxWuyEDqRlfF54%2FaFF3Qfg3Sj0HAf92JlTbvdhwwPDkc%2B&X-Amz-Signature=186db776b988e238db87dced24f4e273aa6db1bd46fe4bffa7b9aa341c02c558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
