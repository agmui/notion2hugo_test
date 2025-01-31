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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SSB7US%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkBA6fOKqrTrkJWou%2FPwwwQy2x5C2ZewimwRcBtb20FAiA85fx9%2FYfUwoJqnhzjMbIzsHCShVcQGKJl2LuZrZalXiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCD8ZhId6Crdd9o%2FlKtwDMU6CT3ktiLp2V%2BPNjKc50M2DWGPHxSCS51uJOXJw5HpcuoINQKwywt1jaBqbnQsTdem7SvOCBlERFCifdO6J19BxmAhZqTdAHOYo3xTguxaDD5pUOau038ruuc0R1Q%2FSdkhMCNYB18Idwc3KIHcnw4FxYVYfvP8Qnymy2h3401KACc6%2FUB5nBMMlVLoLssxKstwW8ugr8ul72lCcPgiR6aHeWAr8DMH5RHLzIQ6VxJrpf6Wxyjvu4ere5Hh%2FtENFFBYHqYLOtKnIGejnhhN7P9GSQWd182i%2FKRHTx%2FOd3TImabqtUsPoyAkxF7Yq%2BTMdNnmhsDmONWXWzJFPCQ3xLQ5yTfqvmiqzjtGzsk3aBVQX43uunSd0pNjyppuXgwfh9du%2FCZg1JD9F%2FevvphHXzR%2BNLwcqcBlZTES%2FlrQ%2BOwc15MbqtFAzwx2k1CpzDB7OHdQX8oHwCk2pHhx6T8PWsy7%2FnbrejALQdyIGHyMl53v6mTy4%2FSok9qkmajcxnMDSIp2NFfAHGyp6mCP8UpecjJvD8Yxus7FvHoGPr7t4IgFJN%2BPHIHJE7ML%2FyP%2B4%2BP9sqrBPFzSFZ4vx0s4SIukz0LBmwywReyvzXBx1S2x%2FxyjgDvyh5SljzVhfqi4w9NHwvAY6pgHFeJmKJQ78%2BsGJbWtLLJzBoULRBSSd6XsJsbBrFqkbbM%2F8OAdLRym2xDq9gb4aP2WVhEYmYPUwTocK8DN7JOK4n3JXDKhYoME0g7iW8bzlwvLQozvCr8sYTN3G8XrJdEEPdy12YUrxl7iqaItD3zTd0zYZwOYy0XJrGh4zYOogmQfEWwXpzqUrUFJ5LISjULSCkYjcMJaxHdSyEAoOV0xxMf%2BBh8JK&X-Amz-Signature=35445f5081a45faea2077bf8bfcdaefb59b215f8d98b22cd74e4f95765f40075&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FWYUFJP%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdL7UUCTU91TpkXgzCmCigLUThYky3%2BXR66oqxaHuHOAiEAgxYg4Kiw7V26%2BWbm66MDQVXQj1UG%2Bg6mkvZ3Rn4Iu48qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEzKCK8Kx1f9l1gwSrcAwxoYkd4UA03QsY2apkwix2z%2FivdJWs9RUhJSB0qh4GuBuoIbWWASeP0M%2FRrvpCBcJIcxhWHFhf0fYZyPWgFG0sLSZah7t0acHzdCVmwbS1GrTSUZ9ImozSGWQjCYCTK2PgWSbtloyHkCC6tu8RSRTzaTb%2B5rzc668jOnQUIs3w49T46tmpowRRLKX4YBaDWWtThMnDnRCAliWVmYdF0uiVrpORYnfSQU6%2Fb6Wyy08R9cy34LcobAhd8eTKJc86PZ%2FMkpWKnAhtwwtuDeAAAsh7J4FrYm3WxWPu2rlQfHkrtObOybZ3reUBBziHrHS7Fb8CzTEgJQz8rxrTmmFrF9BpJdK4qQUDZAI6vofeFe1fb63NQ3kaWCmTeD%2BVQpcYYH4p0c6pIoSd%2B7o6Rk%2F%2Fd38hKGqrrMpmGqEr2b3SplDkNdEnqN5ALLGTZYSRccayUtvEGJds7xEFLM0hBgk2kli%2BL4l5QgghS7msi78ogRAaN%2FtJz1WHyTlLXlHk1UkcpN%2B6LFftZm5V2hD7MSADWDYZkhoAc2hEVe83tE7ykUoWl0qJDrdyJDevJ7lWt5OndE1KTH%2B9VdyPp9n1ETjqDzTXrDPG%2BPZh8DGmgteFfF2wvf2O0XTltwbiOTnJbMIXT8LwGOqUBrYHw69U1CLFX3n4jbrH6B5FXHymL3U3JaNJVkeD85HqCPzqnXZjmAKMm0%2F4yzcdYwCT9jD9wBvCViaFzt1JrhGymrpOXyodfyFmQB7ok6HF7F%2FuuvWbHLn5i%2BSAVpcwCLpWmdRfqbchRoESH38sX6%2Fn18oKF7K476KXvgN2yHWWvPy5yTQlLI96A8DYBw3lG4hC0nvHNlwLj1%2BPrqogaR20dyWgk&X-Amz-Signature=dcff88605324e99c827dfa8bbdd211f4309dcdd0a8630af159562de6f62c7863&X-Amz-SignedHeaders=host&x-id=GetObject)

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
