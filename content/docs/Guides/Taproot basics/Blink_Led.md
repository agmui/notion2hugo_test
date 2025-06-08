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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNOQ3KY7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm9SJrjmVmUDWxeM2Qzkj7AFpOcjds%2BhhER4cCWxsHmAiEA23SqRzKNqWg3khtRKg1UIpP7TxMOj%2BiDL7Wk%2FJkJsGIqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKRYfqHMVJ%2FDpKKXjircA1QEewe1t7o3ygmV0YB9mUJkXLbHZL%2B%2BzEwQgc2yxHw319BIx3z0rY1RoZJB2dn5w1pWVkAALhWkUdN7EPM80WYnaQjeqXu8I%2FYSrRyLtvCHxL7OWkNPpRuckSpGZ9N0KnRrpZoMILbtWI0fwJZtsa5uupZd8kTr9YcAHAFmNa0Vi38MrWfMCdIOsLRgLYUBqVlU9NPrEWzG2X6l4DSsaqLxPq1Q4KvoHJyb6g8M%2Fn32NouPAlSIzRl3%2BysXmeF1eq%2B7loprB%2Fl1rpE3wDAmjLV9BZJiDQStoRqf1gO5Y9HU68VQivqEG0q8c%2BVPQhe9j1LLqvr5%2BCtpW5C0L5pMJOVeTcmHbOJGJz84Z2Y6aVrrKfc1Fz9lcRqLR%2F%2FGcO017%2FpaKaqDGM5tcWXqDUNpCkws%2Bja6yMyk60GjyIw4IpSmMEeZh9aD%2F3qjBkzsdvRK7ybBJLCN2PvS2fN9%2F0iAh9TJtnX7CEcuaWBjpqqU2ZHzfc1Xmut%2B2xbjuIFUS2u3yJHkbUdnVG%2Fbh67gJ46SkiG0gl%2BjtwasoxLj%2B6Fiq7mOrd4OO2Qc9ve1DVxnXDKeJt65kPJInHl%2B0lGISbsT55wrj1aLQkjzxcPvztr7%2FOdgnCMGu4E6FGH167l%2BMMfylMIGOqUBFDU5KqvBr9%2Bba39IYmUBne9IwPjh4sKNfxTclFp8EccZ5iiQz6Hylq8gb5WRscrW6%2BA%2Fr1brMbxrH%2Bkf%2FPNzaXZ3BxR55r4yYOCi6eQmTeaAbWj0RGEld3%2F2imOOxOcNMa6ErYk3qw5Up0BlGATZpm%2BprJoR2Pa9OzQdXbHBdD7t7Vb2xhJ%2BqUpUy8HDw%2FzgBWvepVOHQgNQB4gRVTcjciBHamtZ&X-Amz-Signature=f68951dc960fbbbff5fff2af3e220ccdb99dcf5cc4869b0fccb6165973168595&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N2JTZVP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsr6uvH%2BkR%2FO4a9GoulHkTS1o2eoVCUZSXnc6lbR0MYAiBiQwQ57OyCgHLABiSgg1HQUOt90arRO5bjgQ9Hq2YmNSqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4OY3r2SwORgUqjyAKtwDNRbOVq3j9Yfz73X%2BrbNO1QaETotxjbVIzj8%2BtlK%2B30W1qT17jlGl%2Bz0x5Qgl9ScBqOo9H6hDRqTxC9eXHy%2B7wBoCK3%2FPNTA0R26j9Rj8cZ%2FlM39bLGa%2Bv9KsNSxgNeVm6kBlp2qJtQ1r1YXmZaTTTgmexOW7HGEsAQkhG6MyAW9sK2e839QunSwgQcPMPN9AcFHscQDT5WlEyMKroUndrHFTdQ4Hp7QlLKmpbmy336yqm2F%2FWxfNIzAeOidG3kTT0EZAmriVqeFo6PXwfML22fAskM1OXWZQ91O%2FiZV3LuOg6ZGja02p170gL%2FAnLo70zw6P2u9y48jTKZeX1TgWyJlCJogKh6hG7JyJRaZg0wvZ358EDXuWy6BZ89O12V%2Bfz81PCPv1wnXKWbFH%2F19iQGJRPp4ZzAUf4VATK9BfqeX8kBkHGsNHIUOv9lyHopaP1YI22%2FFoZAeQyyKiFT2sz3rpMC7BY%2BOJbTfIhvNNhAVuv89DegbYRccBb2ZsCy0WqVlHgRJ5ua3o3mCXvih8zPEW4X5IEKdQpvlFwtqIStzjW0CvXo18p%2FUBWN4Rcym38xW5qHx3%2Fnv6Cls16vyHIV3K4pprLiXxS2s3pE5DFbsuqcufysPyXamMXjkw%2B%2FKUwgY6pgH5NjtDF9URHl7L%2B9aRqEd5HXwj6fuFmF%2FEA0R2GPJnNyDAIiqTZEa29DK45GIMiwkqIyaaekL0cjhPjyCmQyWKje1iGsmWMTiX5IWV45t%2FgljfIBjyV3ibU%2BkOmELwR9nb5lwCxvXsAODYLxw%2FuQRLKX7Es%2BNlw2TVmmTYfZvbII9HcvXaEs8GK2SjAaj7GvuUh19c5ATDwAYmVxOuTfJGaOoyNtbQ&X-Amz-Signature=f4d1ebc8d651a9a77c64e5ad18596404c698b827a9bb0c7dd941be2547d92d16&X-Amz-SignedHeaders=host&x-id=GetObject)

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
