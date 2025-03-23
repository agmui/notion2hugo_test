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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VPT63E4%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDs8AlB5P7NXDHDHLtHrZ55BW2i%2BoIsG3uJBtB1Dbd8iwIgPy1UMxoK06HPUheKBADjwFMmSU5G%2FrbhdYsTNVQKcwQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvS7veMEcneHa6xEyrcA5EV9E%2BNnu2Uea27rLhVP9ggzEO73I4qZ%2Fvx4oEOgwyIXs17NJvVrM7ovTKthOKEjT%2Bcrzw8Cah%2F8WIz3fr3kiBvPr0nS41e6DS0%2Bz7MWvuM8Z9vnXPv%2FNodSfMBH72bzmYlOHxu%2F5qodwuW8vJ5E70y9i4CwY7BDXqh9SY0BTT42ey4TT5t2Y%2FObjsgxM8XtwlIp28p3qByWcUR%2BD3GCn6Yk8jwnpO2lICAzltKzMgldl9vLnQ0Tqw2Ysr1vs%2BQT%2F4%2B37wjzZxZHmYmSaJja8x4Neh3t0wN7aufz1BuYEBWARQaklELGCyJ6sufx46wkv0C6KggdNB3f%2BwSZ7mhDEB2LdJcOS9%2B%2FxuPGlbBIWQKkDI7pXGRD%2FyeeC3NkfNaV5BLlh4RBzuLpbPNAIEB0MQp7hA8HKNQz7uEHSIrngEbv%2Bu9Vmczk%2BI4KHvlV%2F7zjB1kcQqz7mPsWiAlQh6I0%2BJzIOlPvw6KP3dGvmnvsxdYm%2BSj314RRe0ePZoYSpHIVWnDD%2FjJ%2FXWPE%2FGVBORoS7zov35DzQQzTYy7QAJJwhmx20l1HElfZaOYHtujVE5dK3JUimz4qeiTHxa%2Bhn8RZHbc5fgmRXNow9HKa0YJ3blLz%2BVlfgg5gso7iyLbMKnZ%2Fb4GOqUBMORNC18JAJ7FueDevw6JUlxqJB3aj0ufgCmLSdTQAC3VaHGGp9QiQuMKfCxxTUiOQjcJRUB%2F4jW%2BbkNoHOm1vqCJVCfpfGgtxhn%2Fr050DY%2FXCtUNLLfawEZJcArW3LnuAcnbm8RslKe7V%2FmqdyPrtA2NKU2S85h%2B0ntkaiOXmSLdzZeYmaLC2upCXI0PRQCVOIUPKbCbpmo7IHo4JN%2B0tmwLzr%2Fj&X-Amz-Signature=2d2d1066de75f0fcc52bcfbdd96945ea261622f32e9dbdda36157860c4691acb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVFBD4ZV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHinyeI5TnIjIWzp7SpZjO6vq7MpwY8IpuFIczKJ1QA4AiAiUNuHA53SD%2B9C35IkfYRx7UljHRTvwDyoLXgT6SSvpyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMinVL6LLKQ0pCMdddKtwDQhrzCEWgB8RW9uAJwuGvSjutSHgUyp11%2FGOuw1dlpNA3KZu3MANIqk9MmpZFncf5fLLpDqgaB6zEiE%2FdaAGDWc8AJFPWiRWbEqirClT0zTyGwC9WMb%2BVtu10bEfqPryknwOTNOS6wmRdZOSw5b2%2FJknNUQfKgSPQ0ODqUofi3orMzncQ4LXweoowL%2BlyE1jFogLvt30oL7Kh7IhJbeNnaXGF1fUxqIv6X1uFQbqpdMgEpDNt2OiPJkM7UUZgiHjvUa4csR3%2BN5%2FmUYz9TVZPwNRx4xaaAtB19rclqatfOUS6zSKcoAeNjzUWvJSk6Cm7YHoMwHzMHidSihBd3WY8AVrsovm73C9M6GxTDfQRRHFVSVBskkihRuYylxNxxw6Xf0Z8bCLoe8UIAlySACQKwf8ku%2FZFz2OGMEopCIAYnGgaYFIMmOdapN7fw52Hro6xych1y30NlPtGUV%2B33ODjnxCYM0mvdKn7OsVNft4FWW8ZO5Xh4iKWGmPKB1kHlCmFWNRhbnmSz2xeBZt2LXmE0R5vddpWZOy5C9HeNdRNrNPcqA5PRMWDU3zaTyeiLE2XCfSwUKcn4ArmRgXAtuiSLrVTgdt8FJw49ZTfYiCM5ZgxEs3KWSYNu0S%2FZTgwtdX9vgY6pgEsnTGaEHA%2BJxZ6S0GB3Oy5%2BTd20VCNjwmz8LcHxag15p5d%2B5j7h3FXs2p16a204XuVr3Hya%2F40qx39ZqbO%2BZfSHqwStreSSc99kfWZo34bJpMRU%2B%2B8rvPt%2B3LYvpRyeNmqC40XHCTRDpfsHrA%2BIlkl%2BokXscBApz1x%2BcfhBmFB5FnbZPzgOQjKLlZ2nHtmlNJLjMQJC%2FgGObYfa1gHQgG6r1RrDFwC&X-Amz-Signature=f1baa0191dab3a2ddd392b1ca9ff8a888c6f182b2acd280acec662b11b173735&X-Amz-SignedHeaders=host&x-id=GetObject)

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
