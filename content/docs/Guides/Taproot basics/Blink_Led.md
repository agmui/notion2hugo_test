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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDIKFFY3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClhDcsqqe%2Fl1swp9PudoJp53Op1MSxVhXj3Yw9uiZO0AiEAssVK%2B%2BYUiYNICo7wLIGgzF8BMaSATZDlh1PRpJPJG9cq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDJm83KsWsTj6F6x7HyrcA6ejnR6gG541UOBno2Re2ig7orde%2FcQ2N3VBe989H47sZOFecH4vshrCq5JRbfF4NgdEwwe6w7vg0jboxb4QD8Lxyj9VYcWdpnZ6q9B7L1tv%2BjK8OE8ktNW3paRzU4dHym%2FTrueOgAc%2B3o5OLpyjVfSqHxgHFvdBcQI6ZQdlJmA7Erh7%2Bs9DF5YvifS5JdwGBJu8nRdxcAvwWJWJmbf56ase1S0bKZyL9NiqrpXoIfNjVVHhwI5uZnRkw%2B4gUU1VYu7GgoTuIZx2znLoXSvbGqTnKM8heM4%2BPF2IRPFJk14ds9ym8%2BXGR8QOQJXMRdtSSQjuQWu3ZHFjUd5NGd7YG3q9syhcNN3owc60y6efPAP09N6PUiTaTeyj8VRM62PlEYszIfDh1WC%2FR4oATFOoR1UtI4yCkEeGzvkNm0hcOhQo02%2FCrwx2Kk%2Bv9QL27QR8SV7R9Z3puddfhR3%2BHpIpyqdwXz%2FHF03mfL%2FNWRCd%2BP7yNnZSGBZR%2BEBMCT%2BvMVOf6FsWKSFWQNR4Qg3ic8hVBSas3zPzVCr0C3J4Lbf4UdmHtdwm6yEx9hRl65ZCznCxgOemEAYSoDdt9hS%2Bpdy2%2BYqky4sU4g7kGa4%2BgGElh83MuF%2FTc%2BGU9CdELwLnMOrjvr8GOqUBINNNnlh3aYG6Diis54pxDCB6TR%2B2XXzanYsR3r5h0tFFmUSYjHwtyt4pGLAiN4ceeEPZUeuXpwyaoDweVek%2FUioPhR8Jx2xyzEc8mF%2B7ezw6CppQkIbvpMO9DVPTAUJOy0uc0thSLeFgPkhxm5yU3FoIy9vf5PcEyr6iMnJPLBw8DbO1JGtLx8vL4a12q3x8JoqUbD3JALRoR8ZjRCEgt7ggREY5&X-Amz-Signature=5197ef48678aa8f12a2ea67fb82e9e2abd848942b97fa65523a3ea62b943c7a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LHBXLPL%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T110729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkNNo7Hyu8vweCDOht%2BA0yBcqy%2BxMBIIlV4p24Tn0Y8AiAklYOAHmLbjOQQjI5QMf5MDKDUCO2P0rkes8FkcZxYPCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMYmkRIG%2FAmp3jcYxbKtwDGFiDUvprHJpqfjGwqRGwYemKtvPwmvpYK26FH%2B5Adgym%2Bz3Y4jKU%2FJYE6cJID%2FVHYnqUuVENKu8xLEcV0LsDXWJOdz6FTnaAwxDzzF502cSWUq1p%2BNbRSJQ%2F321gMrms5dcQKyEmBCwHA5wSK7kgVh6la2IPbjak4baiBzz4f3iBkxHR7lJlU0wXKIgZ02q53IKQXGNK0nSMhQCmHEl%2FR%2Bm0vXdaM7Hqj8F%2BlAcrl%2FSc0pVTaUK%2B8LjJCf3vUbF1IkNMF53H3y6SEtoF1k9YCDDDQj2EV6l4V7SqnTGFv7Sjg4VDWOyO7ocRPDCilWjlCX8P3AtQl8E%2FDvfEHkjGl%2F2%2FvRPKa2tiNsveVvVs%2B068%2FFUVph3%2FXcRiRWLsQSwpM4HgA9EXuyOCRMhfZld3qJy9kO87rx1RENkTrvyvQMs3wxD9HJFayaLfbl55BukoxRHXv%2B6jhMS1vjITDfefTGlFDCj0W38Avkbj0xW8LfSFE0dwp%2B4aesAvARpICOsCpEh4ssOFZy%2FPGdhCV17SBjepEyVC2SHI%2BgOJrX1VkCh2juS9NtXxsxXaLn%2BZ%2FZVLFGJJXzW9LJc29dHHyuJpVTEFxesOsIeJqTFtLwi5kQy5U1EH6UuygWCjNrAwgeS%2BvwY6pgGROVQFsDsI4GN7gmjOG5gw3nh8C7SbDcfBo0asGk6ycFjmGd1ec2WVbNBNOArYb0wuVH2upInWkO4plpF65Zv8j8f1q0j%2FvbptzRsLFqZwPYqvQes3lymFKZLEwzZRSzEX7m%2FKQ1HVdcpSrL26Fk6H%2FwEdO5cBSqeIyYxt3b%2F2xYw7ENcPsXLSMwhmF0aLJ4VlYSTSIFUI%2B2LSaJEpKBb9N3%2ByULGC&X-Amz-Signature=cbafd9cb6cc6a174d22c85373b4a56d30d0874177fa92c677b7f6c57b964fcf8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
