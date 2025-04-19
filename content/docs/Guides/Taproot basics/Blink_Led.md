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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V3JRQU2%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO4hPpreYzvdOVU4p6d4ZYIT3EqMtDzLGVMWKEX%2FpYgAIgZeBOPckJAe0jd3fkApZHF1wrrZ%2BNjdczPuwWw7f%2BgcIqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBdtE2nWQKEQeXfZdSrcA%2BfXNNOd0hTGzfc4BnsbnwC4myQgL2ilU61uz7HMMa7Nd3zb45zc1aXljAagAU9xQ905FOlfDA%2B3MF%2Fo8H7UPaNIno38ab9E2BMAB7HfTUYw3owcpbB2ZNBzjxYsm%2Bre%2FLIlckZXN3N5C3Kx8z1U9WZKBrzakhwzD7wM6rSF81OSbK9YqB5AVnw6h2cWgy%2F%2BknzuU1L0JtQyJYJcZ9D4Kt25Ce2Sjy1Gy59s8XkawtQyXDPyr1whc1WXpBfJlUcyLIgyIbhA6E55jHsY2yXrzOBtsZT6GcxH2njpMJ05dHwl%2FsuCW%2Fe4rxnRnwv5YMezXJzlPWTSTO%2F4b1vYSdCur5UAFDOOLRgBNtRaBYwW8szkKw%2BNmVzSHs8fX6EwNYSoVMD2ICSjsiaB6PHf7aBl2jPOMf%2B7G1JYZiYxilw8WzcpbfKbE5hTVEuKQE7TaSKEZx9rv6FnTVRD%2FOfwEEUag%2FAE%2BEWkM%2Fr6T7%2BeeC28rPV3ub9YfT98WbgAFbLAcxpRGdbCtkbNI%2FYOVUy9M2n97euiNiAuy0qSctczWN%2BNoSQ8kfdlFWdMGxDPzqd3cHdkHhkm1nllNCPMuISnQcTg4tS8cdUFLjN%2BdP%2FTJqfXXLAFgB9jQr1BR%2BRErzQgMNW8jMAGOqUBDBwER3fjmjzj073lIfCZc2PyUu%2FtgMra4tcJSSd%2FvpT7vyMHRHqnQ%2FYs8sKyyewEygjyfFBfO6xv3x4vja2meXPS9Kz%2BXLiTi0uqewq7oVr5AEmaVZw8RJa9Sd%2FSMchYvnrY5zuMcUaOopaH2CQhop9zZBJi7XeodbJCk9Xdlb3n38yKsRG8H1zrFzWr5ztQhtyDvCrlXeOEcRfdd5uVSW3yW39G&X-Amz-Signature=72f87a2bb3c52156cb1deccdd385cccd3dc38366285b645efe97407910acd601&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EKZNTY7%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC82EJkiCDomgej%2BPo%2BGuZaei65jsgrFc1Vm62%2BlQcIDQIhAJNYrqHkZHwdPqrQFQJCnRJ5aXqu5IfBJjODl86KbQ37KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX0V%2FHaerUbQEg01gq3AOEM2aELaJglRcMNkIE2Xo3xpW6WCBj81MMKFCsK3YgGCOl72Jpgip8XRLrWcpOQ0oQxE%2F%2BD29Y7wEe2JYDyj3vWN23uJLNYXRk8O0Gjav9bUFxrZ3XCvnvRMthD1lOZa%2BTPdQbnMpM9Kc1awkL5GVNDAxMiqUuF0ewMa27penfWIPNI7CfuyoIUW8UUwd%2By%2BZFsvvuf5ixl45qTSaGG4ZS739u8Q8rirw4KXNFRk08Q0U3affxzESfH5LxVyxCwun6qmqFnqq6HQJAFQkwMXKQm6N%2BKzb4MLgtbwD%2FMUY5oLGNpHUGSZEHS7gCei%2Fevponz5QKuRY5KfL9cswjSt%2BwgtVIU1A7XewVLIEM0BmD9ht7rBELw32tZ7jhnKiobsQDQMGhiNDxSND%2F0FfVLaYr1%2BQUQzp2lpnln9UuYz8irw7VebbhPX0M91tQDiFMsc%2B5KY2xbHDGy1wkXiMgdyI54dd0qC7egulDKKpf%2FROSRnG4iSREUrH4O8i67uD7CSPO8MvFH73Kk6qn1kiBedOeez3YO4OUF3z3xe1aLt9as5vT0p8SM6rmxvXRiy1EW86E53vHZMt3ATFRbVSdNAowfTcZnfdFklH5SYkavbiNnporIkheCVvFoXyNuTD%2Bu4zABjqkAdfw7wSZtLSigcSXWNrUjM%2FCrSI7ttD1GWD4KoU%2FWPdbx2GkNv%2B3mrYvCp10pHIFfgitAdKaK9G5NcmLxvBs5O7f3r6e9g3kdc9SIDyA2bRnUh711MbUbTvn2MRz2RgD2FOmkjYc6M75SnQTEkE7%2BTQW%2Bc1rAihA7XmI%2F%2FUl7xLUpa%2FWmMG%2FOwN6DCD63XlXd5K%2BZjwj7wcaLG41ol%2FyGRi%2BNwlv&X-Amz-Signature=8222f7c24a2503948926da97feb0144e26917dd61832381a6c4a6f017454df1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
