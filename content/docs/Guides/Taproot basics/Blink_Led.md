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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OHBTDT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQCQ%2FBtSJaPCXWBuwB9YTQbtHJWMoxmlS%2BVtF3xPyGBpIgIhAJgu8OMNOqrF5Sn3Bj7CB3RHgSooycrVA3ioSl9LFTwpKv8DCHsQABoMNjM3NDIzMTgzODA1IgzpthRpvXc8fsmON7Aq3AM4b0pqqDyi6n%2Bf5PEGNBr6FWOQK%2FGkvWLCmNqcQUuE6tOPv3ZSKlUMyW8jo5FJNXxkeHT6K3GTZzpYtK18PmGjpcEmOtRCgh53uxm7fuWzIS%2Fm4zExTv9on1PCygtZ6hKR6r92SH8rYorAkRNowMPLIy0mCguTcV0t%2BR5w6%2BrQoHfsHtPEi18g4XPsF7rLkWSsMK1iFnK%2Fw5keen%2FvyQw7lStmIyrXaqEutvGRjQ9ZOvlpFisXzf8kSjz3%2Fvcp6B4BxRhqnnBlzHt7FUvrIv1M4jDOY52LCVUwAgzt3igfsodx%2Fok%2BVX%2BItS1vQKPsYKcm6a6a4v72vEUJJdvTiHr%2Fy3v1uBR7i9hOJxkSiWRIDVhclLS2KgonbU3Hbue7lNET67JdnxI2zys9aQ6VphpgybyiEvqfCcGBBgN0JUDtyODL0%2BjOW5%2BWk%2FfNg42J6RzKvHYvIM93U9iqQxHftgn55JKHkjvp%2BLM9O1Llx0I1%2B2yhj9HIoViGhJzqecqhRcylowxwiVlmhA%2BkIHpFV1rwoVOTQyAPfyriOvtprueMZhOMpyaJeO1frEq2VRclZlZNAdmJLwzdSC2SDNFuQA9hQmRQXtiMnFIMJ4Vedwdw2bnyCpIVbBXNGCtf4DDm5uTDBjqkATAQBbMvtWSEKnSZAVaMpExssCMtXD0TyT4m9NS7%2F%2FbZ5SO8NSs8bC9VzKN56lnNgyTaiGFEbzZTsNQ5pB0FJWlmW%2FwHyR5DOk8qsqIzwh0AigboiBdQxVYRLgVBCDjR2n3KmISTTdhT5rKZcYwdhsehj5qEVEC%2BRhUCzmzPJ0oc0A3yd%2FTeCsQvO3AiUJw7gzzHORvKhCiCRZkdU%2FIGXyENm0k1&X-Amz-Signature=36c14a86a9cedfc59afc0189749ba812452415155e325350ece6dbd4e446ec38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466634YIGB2%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCMCWJBE8K70XkXRK9bsjOlJOLGTDpbyr9M6176gLHe7AIgODpjrMs9%2BrOKXppTu9UWephH%2BDRH9%2FSP77jIB1GWLP4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGt0DAZGUnziiDs9USrcA2o25hM0d0AQinFWU7F3bZXBn3J65ISU%2Fh8b33OdDLRHoKl%2FuHBi2%2BiVXQEDb8FnrYjjwLBlbcLTTJlI3ISZ1rTncvUVt%2FXvvNa%2BuGP%2Fd2Bo03%2BbqeXsCjkNlx%2Fz3HVFgcvWcvdVPZR91GboYsoG1PnENOCO7I1mlAe1KN09hmK3ljEOig4fjVVt6Y8jkOmAWo8bn67C%2FWv6VdBsav%2Bpunis7WTa6qCK5obp%2FNsE8r2lv8EcdcqdFfqi3rhHuHxoMQt%2BziKfT%2B6vNMWastcuWXg%2FXq%2BJ9JGtN1%2BnVDna648V93B%2FDUNMJuXl9UhoMISqgP9k1d6wn7uGlUOuI9w0vSb4a1kMYP2fb3xqzlaxoh1hBVz7EqeQqMmYKcVb7YfZS2zchFZoVfK08wq1cR630oEBMYM7VwzK6XIe0dI4uoOaj7QzXTEn5q7kjD%2F90aSSf%2BJAAzK0aWRzLSeHpdxJaVg2chPKecS%2B%2FyyxhTo1k%2BCVsNiCydDnMzcKXZypRac%2BSMl09dV5S4KGLXDhIkT2KLcAePwjWlEDR1hBPgxuZysi9m%2FuZ0rs%2FBjhmYmgdprdFeoKHamAht3z%2BA44BXlpIv06h2YB4Yn73F5Bx1AiM5OPOgDBuMML%2FQa%2BMStKMMzm5MMGOqUByRr8Roj7FMfkKWEDaSqR3AIUpMn%2F%2BKwvPeBCEgbDdNUqlsAUmZ4ptYGxjiTS2NGac13uBhJabP3%2BgWxuYz4Ol5WVZWzKB1EpW46oimB%2FIfXKSKRJm1hBlL4EkISQv5WWzc6jiRvPig43HXUupcHsRRlcMu51R5FHyN4sYKp%2FFNNmkiYSaQ9G9OdUk%2BQyenFsdh6q9V4uJu10X5AqT8VCwud9aJOM&X-Amz-Signature=438bd61b7ca62d8e37ba524dc537fadc5433ffaa127ac581272e18d3edb433ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
