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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVNQNAKM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDxhFPxBW5AM4Ap8fdXNIe2IHiSm8speT5AWbrLiaFOCQIgTulYt5d%2BJzR90I3rE70vRAK5H0fx4vmxK2L2%2FLI8zHwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJCOXoo%2ByKeO6ldfyrcAwreTUiIf7Sk%2BjirrY6jb8r3LcadCCl1P%2FdttcD4e0fQASR3tOP002yWbxp37K5PrYh6U%2Bz4DlwU8zPQAWjPBniHk5ABJYtUKAhAgvpYxh%2FFynmgbU9nrTjvfGnZMZcBUaeloiDDVO6w2yyM7eINyXmXMpF7pgrBIS%2BZXNbmZKbQYm3TqQ%2B1kbflfEwphtIDEqAZlCgBDqOaLUkZkRkgCwJALoNd3v5PAXle%2B4DlzNhi2xXoRIqAJ0ivxTIsfw08cmOzVo0rqXMDF4XRSsr%2FlmTxfEKMsVb4zlYsbLb%2BMo2c6MX8S%2FuWSTXqhURPTMDbrT2BCL8Yvb2fD1yGPoYrwEa2EdRRN46wZXMGyc0Rp%2FTZ9bQhNOPFAZvSPYpwb82xn04tJvbAHQASLBYiffQxMf%2FUt2R%2FY%2FpPtFW0HEbY8VxeIEtD1MuCqmRQzt5ko45selk97FAzsExeRtOIS3VKjeJH7y1aUk3XKV%2Fb70KzrEQXOmaqVTdEOERNrmm95Of4PW9RLXDcZxjJC%2FgDG%2BU6LJeJAmJiRBkmL4Uy1PPtZuHrGPyvEr2xNRm%2Bq9LfwBpriiC9Yx%2B4eUIH3L%2BkBJsAMFkhiz3JIgNN%2BslhJbkIHzlGVYskJkY5QVM5yLK4MKfzoMAGOqUBk7slBN1u%2BlNctn26FdTnylWli%2BFyRoWg9uaGzkM7ZW%2FcszsYKhNkOet%2BJGjl9ERiU3LoCveqYAklDbOvQryS%2B0gsfLmzFulGOVJzl290ka1tNyRFEY4XYMZYpKeOeyR5xH1b1%2FxH8%2BWGxV8QMA1RlyDQjK8At8Np9xaM%2FloJ8sYVeRUJ4Y03NdC1ekaBVb7Bg%2FM0k%2BgnfqioMxJEW%2B0Y3jzMJm6p&X-Amz-Signature=42c083fa1f709ff868fb64ea0f6f8de6a1259f7c175d38ef0a6dbae80e2228c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXZE675G%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T022200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCID3S4NROdj1B8acE0RoWdNwRcvnxjFnvexD6aXyly8kEAiEA8%2F%2BTeBSG%2FNdt20BG0eMR59lBWcqtejKh4WTfqgBSX50qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrxWhxl99jqA6BUPircA0akGU7CSHufHzgdqy4f0ZyIY3XypK5hlQVGnwNprisGWNu36nEBt8iXiXbuj8GThazp2IP75LqdiU7D1tnuG%2Bd%2B9NsY4XwihF4vxkkpfnSoY8Xe4cYvd3x7v%2Fk%2B4viuV7xA7wU77ay2%2Bz%2F%2FIQnnMrqQwOyTiCY00JYa7QwG89X8rgyfJjNeS3nK8%2FYH7Z9MfJm%2Fp2dF90YNNijRsaHxGeCpY4pLwfDNUteyLprhC56PwQ%2BenEgw41GNMNa7TLvgfJMypuu0BCo1NygVIi0ZsQxeAc0eB%2BFCXDRCLTgnocXzL6ot8oVe1zbmmv2s7XI7erJ%2FcsgrgVOAkfC3DfbiVztSyQZpa8Wr1g37PDX1aW4z3OjhHCaTkRkLgbJmLcCOi12%2FqBLL6pvAOSe%2BPFIl%2FjPXbleQnSR%2BeUFokIU7HSi0VjtDbHmSm%2B6hXzTlAnPjphaVRZ4CKJxgCZdbs9ff4pANaBsoRIBkLL0dlA7KEYVW9Qg%2Bqj730msBkdYuJnAX0SwYB0Nep9cJS%2BIL%2BQWg0e0cY7%2BtXxU5a5P%2BojcshQGJuBNcHX14gr1Z%2BD37GoLpJHZAXCaIdlxNtHJ7MnEyLoLM2%2B%2FRby4k1%2Bh1vmU7gjpf%2FOs5%2FCTHpuFzOBzOMNj0oMAGOqUBtJvi%2FLDADRQuHd8gNkWRaj91uj8Og%2FjXJlBtfiJ0rWlpOR0SFZhAin0hif%2Bd5fYBlSGLCZkducvi0%2FWLwzuHfw1SXBA%2B5sXQT1QZT2QMkQpZOKBW%2BcOzbeP5C3tnzvthZg23qhGbgSRuRYzBRSgQgzO9cTGdWJBbSwqRpDWzANs4mWjbi5wfmK%2FTaQAKXbge51o%2FxL8QaMbQ8Tu3hfoAbdxpcqND&X-Amz-Signature=6942c405ee8cac7cbab97ffab5533590f67db251af9754c14fb8fcafb8e5cf28&X-Amz-SignedHeaders=host&x-id=GetObject)

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
