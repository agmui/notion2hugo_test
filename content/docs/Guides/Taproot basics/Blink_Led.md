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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466263YBTXZ%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9bo4FUlrXkqxI5ZDrTIZWWrklZ5Zge16vlP%2BsDXuK4AiBp5LghyQ8wdWHuI8fWnnR4da54SkWgmZRRWOXUYFF4CCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM3psh6rMjImvjNcNUKtwDiCwQwIyUaqBOoy6s6xaJzVmcwdwIDwaR4HKcvnWpiYcIWwa3EBD5yIOgOp4N74SkViC3VDaJl1mLI%2BDFFAmDjceoLDVDWWAQ3IZjYalBZuRik16kI7fUSoTuCp4DnRFVMUe%2FqIY094irPmvMKqnrU5ppLEnyiIWIAabPhT2qXmdHXVmbi%2BXMw1ZSlZyimYrRgrm%2BLYBsPgTTbakiq9r9OgSzTy1A8Y4cOuyzX0pUuzPMcnfEWfrpiglAM4M%2F7H%2B%2FyYGRVM0tCCJtGrFbTI7rVkV9mnyUX07k%2BkyPJP%2B%2B5YizjHLUDHuOhooDzBoRqi3ur%2F4JmakaiiWY2IxZSZ0k3CJKFUTPI%2BfWlEe6DeSqCWwPToiL0oyXoyiXHa5%2Bz9hfeTm36b5qH2XTmCtGgl%2FeyM1U2KBthmzMKnGhigaiXppSaq4qVkRJBLDRESfsoqHj5yOKTWN6hoXnZ8PEbgJYv0%2BkNlRpUk8OXASL8plDnRVyYrwF9GP9JvGXeJowZ9OkQkD7AI2KwCEkzGh8N5Zif9SbMwsIB4HyJqPV%2BYdFSdUZEaYqUWJC85WyIOaAf%2BNPNhmYpVJ8%2BxARXzbAvW3YC7bfKPLtbrK54RYq%2FVc0OJHMO%2Fksdyj3YNcf2W8w%2FqCUvwY6pgFX3EP8ITrrULI%2FJ7vUo%2Bcgq1xgtUWhBTeMQZ22tEmYV6ZdPrwuVtVnh4CSR8GmdCJjVjxuygNXXvKdNpyQzd3fuuIZw%2FeFw6Y3NWK3Opkl8CKDgB5JrS2fkSBSkoLArtqLyMpNLGLSfeK4RnSTkKnOahSmb0b6v%2Bj6ae9%2FkkROGrUf%2FxJngg0Q4ifRF6OJF4M6ZQ9AArsq8zjqOZvtDZ6U%2BRlqoZVe&X-Amz-Signature=a6e687b0e3cc2006256739dc1e64110b33269ba3d5132426f4c958bc84b7d14c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H77YOSR%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T090837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgZoXSxJupw7WgooV3QMtjRyvRCOx%2F1Ug4yLnnuffCOAiATCliUqW4WRJtorzUlpvW8METvSa3oTVWmwAszq7oRFCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMKUj7%2F3iOrECqZZVpKtwDAWnN0juveirphyzone%2FE%2BJLOljeBrhKmwd6PKtLy4u868GsEG8j6%2F2vppmSSW%2BRnD%2B6XcxHw%2B4i1xhPqGzJRnPYtKBYktLMTimT5BxEerXvwf0aHBmQP5jP%2BtpL2jDHm1aRLrExFiLv%2FxwVp008sgoPhLpBbvZ6XmvBEZHWcsNmDzwWLho9%2FOj7dQ8rxKCrXq3kP9Cs4oWAy2ouOKS50iWoSx922STCtsASxoETTJG0uvJYp51ZwQChLFR0z%2FTfydr1KFX0SRLNYTH4uA1sTs%2FJ%2BOzwFq2SvReQ7V61xamP2OjMyNtPRO9ryhRdXbqyi%2FgHktgxmpPqZCAf7wv7S5uRsNcJ9LxKfXXv5Bkvj83kzSB68TiOgFPi%2FPVzZ5EwfygdA%2BMO%2B9g1qtCis1J1rWvDSJMZOy9mTO0pE6ryFyN7%2FiVo923Yr%2Ff19kI16etcbaV7Dg%2FyQQmLgKp5JHd%2FEjLoLKQfVSP4yf1VpPoOENucEUvPIFlqZyyNGubXD%2BHbnluKDYYMTOpPFLFqQ9IwNZgREunzy4KOrUUxUdIv2k5YtY8r2yWLbrfVu7S1FGTt2yRTkU263TKwsu6rBVdhBZ%2FE6cLbolMGwYP6p7xVAleoh32hxzkyT20y%2FOw4w9aGUvwY6pgGZ0kGI16%2FANb749G8qRsC%2FoCTfjBhATdpF5DfknubqYmCcF7FQiIRmN46Idtw0bnkIe6hRhHowT1wHZ5BCeyb3xWOOvDTdLvHBnnN6V3Iv5%2BpRL7Yjx%2B7BAGpZPH2s2g%2FCQlk22EVzw9avOEgIHP2en0ACKLKS9h%2FSDxea2NVb86sbtuSPNm7eDsuyvXEgQsLG6uTACEF%2FUrvjVS4sOKJcBfze9ao2&X-Amz-Signature=81ad3792bfd3933a9676068c3645a14370e7289669073dca7e814f87f37817e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
