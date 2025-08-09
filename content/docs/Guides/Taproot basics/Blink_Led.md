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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KXVUMG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BFChzOcueEQ%2B5m76pUB9Z0Wq%2FeND5MbxLdzvDvRAhygIhAMo5Cl4ozTSLrt%2BPmXxqTybFexGnD73STZSb2Xz76lt2KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvADPMQcSz5XKA3qEq3AMYDC%2Bygb7qS4R%2Bs2%2FLAEW1xWDG73OmpeP5s1Y4MdRS4WD46ZueigSEvqWsD1I1cfHvcZp3gqaQ%2FvVr5RMCPKy1tMZJM1ZKz%2B330HWPLlxOpiQ3Wc69JUDKznV%2FFXPqgRNfvL9VP%2Ba3HmYRMig0i9tPvKzUQ11I%2Fv%2BdS6vBN1Kygog36OAiiPxoVZd1f2qwfttQw0yBYHLkCnlJW3DhOfmOVt5Zo831gfG7YnhBZlbDdlVxUwdTfL1L9QLYLc9cWY8p%2B8iH0zC45El7u%2BcQPKuTZHkNl8Ha2yfk6i3chX8aWjr1COdgmEvbd9%2BfLFvIwxjCHICmyqXjhcJyHoMhJbTSciXbJzCH4VNu3j3wkz521QbDLB5yA47HxtqIgMKBQO8ygnuWOy9iZJXE%2FB5cl%2BuuQ%2BFUA9grA3SVN6RSkaS7VuhljN5wx6Wz0Vg0%2FoY67X%2Bn0HfhRSE5t1Q9%2BpbOBfpwmdUZDeub%2Fs1gKMLUnYk2sWsOsJz0j7%2BCr1YQsMEh9b7MX1ihjec98oxi8Aa4UKB0uqElyjL5%2FuBrD5nSRJMCq1bYqUYaAjwRBMegvT5rmE98aPFAuHDRv%2FuUVm0LA%2B8vBY8pI7Z4u0O8vtGJaLJCDB888ARv9%2FjV3YkIoTCh6tzEBjqkAQ4%2B72i%2F0SyIDMY4%2B9hRi3FQ70%2FU9H6dWya7EEHA5U4sZhTU16SiFljgDXnq9BpaTkSA0CHxcY5%2FDHAZuODurFMMKNiQm8OX8vHBPC0vtsuifomUWos41C6s7qdZn2ZYlJV150sWtQed35fYjV6scwVyUdKlX%2F3Ra%2BjgSQcyDwln8cZCM%2FumeP2RiqURodec15TZjG30yk6n7ef42H4YIyy2AGO9&X-Amz-Signature=0a9818d55743867ec5050ce8a5e2edf1d1602e9e9d9e9283a69bc9059a5b5b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZE7EUNA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSw%2B4WrMPMUkzq6tuo6I%2B82rkeCBD2Db%2FNxMTydNBBEQIhAL%2BaWdvFTKYLNdM2ZaJvKjLAasjBQZ8T2xyfzZWGTVGJKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzllbvPotqnnxcigXYq3APDqiSlUYpH6%2FvSHFYi%2B%2BNRfDhJaMMPTUzEZgtYoeXJK5N0uEhLU3mkk5D2RqsPeIiPYQSU9R4IFUtQ91hNFJfVbwZKbgKdVhdhzAPn9ph07uUyZi1PglxRQSfhCGhLvoePktPhlKIg6AQR2Cl2lsyJnbm94EFdXculj9brE2iEw4VvOXy3IVYl8cZCLtIMy3l0mhdBegg%2B2obqiTeXbkYWcGDmnJvyVcYg2XcF46FFDADhjVZr2zSvPszugzYa9NS5tI3OT3EkseB%2Bjy3tii8ZmKdDQWccXR1Kl%2Ff4bM4fYPkPtFiktheJY5Fp34ZXEBLQgrvQwgOX5iTG3mcAFUbNARXZ1YpwmAF1GlkrjiEFp7SZw0oprojlZ7MRwxtku2%2BEPYwqIUMwz7TJcmw%2BIwnwR8OoX67qCLNq7GPkIJpP3ECZk7TKxZ%2FG3PTx2ZGm%2F%2BIdJPo5IikJlCXpAr1vh10bGAPDsLMHLOl%2ByxL1nWwcH8DQI6DUIGE2T4gN%2FpjLGX%2BqTEwwsLpuripnRCPRD3XwORGV8tShNXS%2B1JH%2BZ8owGX3P7FgNLZRD%2BGWZgEV6VWUkfYKok30H5Sx8ye66Az9frBRzvrs60Mm%2FkXkig9YHFYaTXRjdnVf%2F6EKhZjDB6dzEBjqkAZeKkdQRR8rWsw%2BD2vxhSF1UJUkfYI1lYZ4GnPnGomPxatd%2F7kcOdOWjYna44q%2BSly2B4Hafag3A4felbDyHB8pdueQnSV9JKf29z6ZbhMVumYYDAncACBpaVbP71DELoACAVJVNuTUPaRZLrHB8UJ5%2Br%2B9F926%2B%2FCf2rMfQ0%2FC6CPip71a6REVHdf8XmvZoZ2WxVlOG5I4a1QA98ZH%2FGFa%2FQkqL&X-Amz-Signature=be3ff4bff75dac80ad086214ae915742a66fe42ee39b354a60e1d08c2ab7bf20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
