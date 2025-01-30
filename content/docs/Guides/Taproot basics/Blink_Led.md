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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWLKK2VB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCchZjlnjD1X2qg7uV1zX1jdUaqBUOZN2utMEb1aC6nNQIhAI%2FwDwUERjpYWtmSD13APIH1qLFXNQZAuK5rXZHlHPAdKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpVvdJ00TENYyW7iQq3AMYdAcvhXgyCh0EGSFEmax7rWhhaN9%2B6pI9%2FBzsrOcQaDSrpT9wSa8UlFymM7N%2BwkzEEXUYkYWVSdZh4%2FIy%2B4hHlzxAe2foAal7RjpGkfn57l7iYO5iBS7wEo8oHxQqLSNLGmgEV%2FWG%2FxcYTFbdvQecmDcn2fzO9GikhgnODsdezdA28%2BmxazELw5Y7vFCVxWDkyYKzCxgITcFc5nia2wvVwpKeG9hhGYmz%2BXa0sDez8wnbr6Vp3TRi7FgxBNB7WRaoO90ZuT8TMx5g8P5igZSomVhSW5Y28AQQKk2wlfHwF0HO3E67HLn7fCGqWdNx83Eljp5DApeHuDqFRGST6Dze6jT3IcaHlNNwKHTLaXBSlQ%2B9Cc1nrU5N1O2dY6vXAO4wIgxTcH96DJisDhQMmW5%2FmUV8QGRlEmy8EU82JvNBIVCGwlfK7NFykpAq48r%2B3qFMlwLbwPYNGMQ4YOGoOggv7NOYuxW8Uw%2B3rwXCnIrISHUhrOOx%2FwvX%2BVd448AS5oyaVrat100bZHd%2F8Me%2BtkMjTxEmpzgcESX2lmLu6HG5X2XarmuQkgqyE60s0glRc1%2FWhrcmTCfm6jclBBHuXHHt%2Fz7ZpPIQgS%2Fi5UWKMiRDgsX0TFaExvsIMX23nDCM7Ou8BjqkARMv5hDklJTfClAxirpksnsAxp%2Bae5T6VE4MZPWtSCOj%2F9kSRndcfzLdJFnvlG8QB8%2BJKh11ONfW5otfUL4mBwP9Bfc6EYlpUqLMDINwm%2FVinDNSY3p1%2FQRsGoVFDy8q%2FGWmK2NpagYqAouvoSwJ%2F3jrCeKn0FL%2BKohOTyNbNu6gN3Ji2Qlb%2B5%2BVDbcbQiPxT6fWb%2Fh1Xj8SLxaww4R7j0pXZkic&X-Amz-Signature=1b5d0fa71a0722e77c98438be41f8e22dd0b44583727263372c643bb42f6a078&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7UMV7QC%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIESw0GAXkAmkQYhBnfEMA7VGlOakZDNnefGrWOpYZJ1GAiAv3f49Wapd3HZ4EV5oPaDWGzzcAEepIb6E0ia2ap%2BHvCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0vfdAeAYvFOoowWFKtwDZD7XbHmefFCIKj17joa796irGQwXQkmfwes0GPjU4uPG2PSv6sLrqC1Ozkj1RnkZLB6ZBAJ0cQLdW8l%2BNeu%2BKV3tYZgdFTL3UYVnhUiK3fij0B%2BIOeuRh9SpyuJOZmbshuH0dLrMwWz1GSzr5HGxsh7BnRjrIFtyphWP7f1AO11qIbw1b%2F2jkcoK%2Fl5FhPuYhNPGZYPF7owtQTttTJwAJQF1c6v9gsF5IWXQZUStJ1u5X6pMWYiHz6WFPWAd4v6UdVxKTjynvYKRXSDDbNuVN7EHdArBI5VRlCgJiMZiVTuu1SWuwUL3ysL%2FyqfxyP%2BrhSSOqshTj8zdLlIBtXx5Vq%2B7fXjfemU5i91D9wsRJ9MIazmmg8Ho8KBOeyklIOf7DndnTGdk%2FMrCuA4fO0WEBJSm78O2RObWZbI93DnTlMBrs20ZRu1yK9Su3Oj9omULc0GKStpTf1BuOwn349AYwbFQzA1GIh4L0u2KRPptIYAL71oAl9Jz2Qjy7MD1fTp7P%2B7oEQ5Mw%2FfifR2ZUOTx2twgpNix8YDAyYM7gwHFVWvkcBsnicSo5bYHLdxORooM6VvSiypAJXA%2Bqowoi1nnOuvImqsGrdGx6pzmw7fp8HNqonf%2BUuReCqa8Z%2BYw4uvrvAY6pgHGoQ3MvnkN1Nf%2FRv6XY%2FmxbBwBzBqjZDTVQSIb5N8OamechGds7FFGKKl8ZFEcxESzWio8WjTcUoiBN2f4HG8VXrdNlBfwBszh2xKK8wSVu9x5OQI%2FvccOgKH3Yq7Y0PIa%2FfAxn4IHyN6P%2BSGZWgG2k2WyZZ0OoJiNOIirGPDJG5hcOD%2FXQydLnW4sUZuaGdxl6LpEmvrr3YOS80u9UgjP93EXu4b4&X-Amz-Signature=6d0925364b3dcf80e3da64b445ba3fbb27e796a5a397a11f62378138fe079779&X-Amz-SignedHeaders=host&x-id=GetObject)

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
