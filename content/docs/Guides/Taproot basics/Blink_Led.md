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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3NOZYP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcv0YasTm9vhkUUa87dsMFO5STUo0PndXT%2B2FM0wZoNAiEAlxn9o81UncD0lKqdySvkeXcSrNB83WzKLF%2BDDzZ6SnsqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA8QAShIzr4MdUQdircAy%2B3rZaqUxfFfhhGVgtWm6mlrmrZSUBY2Dzix%2Ff18SwgAVhSiWPYZFNA5EnQq4uy105VAFKHji0Pey7jAVoQmh8daNHbTzML3r0e%2BIn9VnFL2JuxaUCr0Ort6rJ%2BjB4NGCL9MDC2GOC5RHpM%2FgWTed%2FVKEfTmnxKAD3pc9D1BhTItYwN4doWF%2FIyke4Ml9RwinsCKzQtbumfB2NAksXxa%2FLellqqQvuNvowJSNc1Do3NYm%2BIhZdylPPVvCpdBD%2F6TPKXCoKRnLtL80B6WeYHsRjBiyoVOLt8z7run1G2%2BDnzBv9KcAc2byrmibd2SHq41yek8oVHFu0uY8wV8BJDYt4y70xq37KzT5JDdXOnhZBCKmFZ7wE5PhQ%2FpWxms8l75A2o3FD2TGsN5Q973FR%2BPj2BSxMjJZ%2BchrfCnI6SgCy7vjN32e9l8FGBD31icNbbfCdI9uO7QY84n2QLQ0qj6ScLJc7O%2BDsd1vFkImy2hippWK%2BdLELEhLrsEbG820uKCIMmrNnL3G%2BL5OVvGaFMnTY34VXTV8bCTIJ87V6K7Vud%2FTkjWlVh9pVpwbOLm37ssobeeKXgRx6NatQM1H%2BgCrkRjagQq0rAAuCZDcSQOv1AWNuA6JKq2WcJNnv8MMz5v8MGOqUBjvKxr9Jjr1OMJ6vj69lEJi25D0oQm9s3U7OPzSEv1PNUVdYtzX51LaUcpgcS2BkTOLY2NGBmvqcRRhCybEmDqcOQXBvwwfV2YRzOxjFfjqaYdYVC7SmNudHcnCCr6gTfWr71B7HH80M%2F8W1nwsqee1PbPatrpPaCacB%2FAXYsbzfW59wfr5OsrSRzpM3ZM550%2BXd9yeVugyqpE%2FajRRmWZ96RMz9C&X-Amz-Signature=bdb6bb251b974477ebd7a6d8bf7a133fd6cb6abaade0a0e92baf764a434fede5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTRQERS%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGboIlAnK7YdGA20UImTU2L9Zj%2Fb89Ik8JjavVlzwQS4AiEAnynnAXIK%2B%2F3auoZiMUWR4oADqCXRto39kVPBSFQ%2F4GMqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkRB2SsKT3F5h7fHircA2C0NKR6Ibjkg%2BpD5%2BA3fvKa8ft%2BknSLGzEJixQmvW9fq2iqz9ChkkvunEG6lqTZyqhzOckdqo8NvaHlqJgY9GRF3R74SvbZzZXUQCW6g42TjzXiQF%2BM0N3SNZX1zGC54mX2WWRF9sOByJxcj3m6sPfRWUHAstghYJrd8p0yjdG%2B19oSIn2Qa6fCtUYn458jwIMCYa02jITeNlsiw3feWUXDAqS2kfMn9hQHh1ZFtn%2BKyTLQg65CUmcm2belueFWwrEZehtOz2LjWeAcwJTTfNBmuyNllQJveUDn6cQZhjI2XVsrawj27WhZBXWF3D4LaqYsNKJodsqPyFVdi5CPIfnbOVYrsCXske%2BOZ0JU2soHj9dYC7sO%2BlgvMUrC4%2FD6V3wHBarxhdvWBeAvuBFAdYP5%2B32NfIHJy79cxNqi6LnnazCcmBirbNF0GfZaUhWkaGUCQu%2F6%2FAC6HMqqLptrNNylUVGS1Qcu7g3f5VuIFmMrAzOUHmKXi5Ob3Z5eXS3%2BvWHfb%2FkI%2BnCwEUju55FKCXv%2BynzAZsoogQyu2fLvNh1zYeIlbt%2FGjg5r3kfEogBsCkqMsdr%2FbINgK0IBQkO5OCXm4PHxNvexQnrDqHIZolNcdd90zfLlobX1YyMaMJT5v8MGOqUBtNddbg%2BOU%2FC%2B5bTQO%2BL04DLUz5ytqbm9PsYKfVzdlacvVk6DIwXFl0Au1GjlcpdG8D0WsCbQthbx%2F5vgNWBG3xPuTFmmSdT29eK30%2FSExtYQntGjr1sFOfItthK9KsPcrdwRgoGXjDgVYSVddDOthFh4z5DcZvaUEyo%2B%2FHEVXU6pX%2FWosHpKu%2FHJjF5tYJhbd7sROR09NGyS9nMGJTq%2BQ7jwQZwF&X-Amz-Signature=30c1f24485a5d0c953b5a88d529ec7ff965a69c7edb3952df0ed1b40c606cc5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
