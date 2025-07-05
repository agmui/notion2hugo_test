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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAKIIM2%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIGcTmoeRmeR0nEeOB4ciexEvIJPUucqXZ%2BCeTOv4sytpAiEAo07tnqUTRBWd13%2BHCXdQh71cSJtK%2F3Z7exPqWACDrjwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFWFiIhnCf3XFO2acyrcA%2Bz98Xfsvx%2B7J760P9KTO8cxgg9usFhL3iRKTMo%2FGfDYgaNeGrL%2BM4Eh4dnanD3y2OI9u0AZmjrvFqJ%2F0RZYvaNTA1xYjt%2FXk%2Bobt8NLt2RDs%2FJFK9cuDHfStd5BaHXIj6MDKs%2BZ4l7fzO51fcq3ebuAiQLpqdWHUrjgNUZyrjzWRkARqVr5aqSa4jb27v9vng4NdHbOwwbdmP71xM7aVDOV2Q9gr1NzglJ8vGkl1N1soK4yp03z3SZJONxtf7maC1nSOba7aBydRkhb4G8Bh%2BjH6zhsqUm6%2FOJYg%2BuYKA4s7bnY13a%2FvVLDRm3B9ELJOr7%2FAYFzHkM96LzxjCAvq0NBHN4Ywt4xjDlr1pWQempmiopudTp6k7H3x2Tg9bJXuFDxa2GMXojMRz%2B3SGSf0w9zHBSqh11C%2FVQnFqgTflyfTp9vLbTt0MpgPD6m%2BbUBxw%2F7FHZQe2shs3cWieNF%2BrL%2Ffxzzoj1xIBGjVSWQ84RHPPTB%2FF7KKQOoFaonbnNhNGcHnmnjuORYTeX%2F7YRF08PvWqPjR4pHVte65Z%2BdRCMFPpB47JhuS4Hs%2F56%2F5i5dhOggD6oyK7LeKcIJ3mleFFCD%2FlNOSlQWSM6GqzWjNiep8LcP3uSJBEflSS1RMPeGosMGOqUB0P%2FUHIQZhWYdo69BAOAgMPUao136ErH33xP7EqPLZEDVpjAt65EvJXUp0lTyDO7flfb%2FzAi0ayyfD21TxsjuViUZJbsLjLxyMvpfA8Zuue8I9Eb3FWiA%2FRBkEnnAW4VXe0tETV3G48D6nyvl9glapkZlelRU8%2BxNIbiJyodajZHcVW0urZHJcbykB%2B85CEpZ7w%2ByVIV5uvgUzQtTHy0fupLO6xX4&X-Amz-Signature=350ccd51fd89749f91524df793c28a475f4438f3a422e1d258ff145f42d86e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU62NTTW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHiHTjbrmPghJRmDmFGkwegptgyEsxpbND4hA7BjgVsFAiBol7i15uonY20NlQtDzfPUWdwFuQwDJcsKQa8gZjTjQSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM6c0RpK88Rrj4w02FKtwDouOUoWA4OMYuYqVJzntIx0tDd6JG92SYNCrzYc%2BskBXQo3Ne%2FgaKC7IMOdRV6TNYjWep%2FOXRsk2qbGn2n4LT%2B5zBhTI7aCu9VNy7l8f%2Bz5wd3nAeGFBWGmEyWjr333s0Pfwvxn%2F3goAlN8JGNdo6YVrV9aOf9dfbK2%2FSvm3pnpZs66UuhbOaIETSmIXRnSuwp8xJJbUew741rvLIEbmegFqEU%2BFOqLr5eWHddLnqFBmevbQiSZhXPSdSZVCg5QHwitKUswo1q%2BeaD3XUxBRZEBvnGnNSMcEac8GG7d6xUhwB%2FcLt0SjGU6xZrw6oHTEIcYI90H%2Bx1beTJwwzNRGiFpAHNCc1BbubrIvdmWq1QaJBVWXWwqIR6drYhHQb5bqKgYx5%2BgzF20CEfAxPHVij8Qo0OSUv%2FzsPcfhu%2FOoNdfBOdYUYuIYuHIj2ov1YrsfyQMEyurwsOH5S18bAInkYyYXYDVE7HNZmqm6fSj1sQAsU0zJiDzqgNPWwwF2zNTZA1mqs0vEZ%2BlxccbZfBriUG5Gn8zoRN38LblZ3YZLz3ie%2FrK44rft59lr%2Bf%2F9hir8SvZYRy2x7VlXBcsPknMZznou%2ByKN%2Fe2l2j%2F%2BQxnrtv0AEoRz1vR4wbo8q3KAwooWiwwY6pgE%2Fp78oF4D7O12JmtdKG7gB8fO%2F9GmjP36ww6z0isJQ2qUlNikV9pQrlkPSLWQ6nX9%2F5s2RVaKKM4I%2FIZf1Rr2SCcT7rwV%2BJljU2l3gjydR8GYv8ZzX8qNcaLJbMawJ2%2F%2Fh0t16icROLTQfe8VQa4DO5ISBnR7nOfq99XRHXMWMcBZK3KvqgKU1NVQM73cYhsHLTCEDTRTh6Dl2P%2FOpth1XYIXqQX0J&X-Amz-Signature=2a3ee026152a9fa282074c4b2e002ba863eb7fc49a870dd7962b372c30bca866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
