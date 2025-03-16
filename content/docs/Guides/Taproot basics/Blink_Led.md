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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7E5F7G%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw3d84rp0r%2Bdaqq0DThDBuv%2BXtC6WoZyh%2B0CDHo7ntHgIgKADVelByOBaLIMfZEXParqLel0VxsBN3UkLV2NRX9Loq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDM3xmE%2BUAN3lsFmo5SrcA0J8NdVxk0KCkwACDMRdnrpWijFp%2FVFOfqV7vHdggoVUdEk4USSUIfko%2F%2BQUZBGjYE5v8gUdiONzHOCMNMYHerME18hncS39Tj6i9OY645xoVnEYMxXgdLIFUI9xRq%2B7IhXjZtvD2ayL%2FhOvWFKqg1RWblgCA1pXXDMIUYHgOBHK7LyZ1W04TZVVIZo9NhlSqcjD8WqnCZyUCPwbRpuG3x9tUZaldCyIG1KqNSmhWdQX6VPBgT2SaxT4vIko1fLHaOubw%2F%2B4iv0AXNaA%2BM3Ekt7qg3d8j92TA4%2B0T%2BWvd7qg2kjHPzx6V7IIwAHFUx%2F%2BPxk8nkRE%2BUWtg1icHc58FfUgg1n%2BpbFtmFdx5M9zXuHBjeiRSzCiavjadd0q6n8%2BHIgfcEVJczN9CvC4u3PLZKV9FOUB0tCYcEGRkI7PPxauX%2BcyhfdyKGqHLcIAo%2FrUIQSzY3EIAkjyj4ZHdKg0iMeb6YE2qfSRlFXsOZh8%2F4XV3Q5bdxOKIdQqxQtp38jlKqnOYg8axBOt1A4Pk3%2Fr4b2K%2F0S2HvtWWFxxUqr%2B8lown%2BHm%2BCHJbWrnMCjIsqxPxwiEZNgeCgz%2Bt8ktvDgTHt4hAzucE5xw0%2FxF5m5K%2Bqv%2Bcqv0rkWt5IXOfEA2MKuT2r4GOqUBmDFAh5jv3nXhQBI%2FeYvSm%2FiutDHc0pSWPoQHkiU7WevKNNL1vdcNQ1AMo37S5FUccmjeVPRBH28c%2BHCLY3v%2B7GsnCAdLaD1csiPNpynPYoAUJbPJ50GBepPhmx3EF5KclEKHjACo6T2PSpixPve87f9gDyZ%2FmkBaNxvSEpHoFC5EmqETfjU81gzeWDyNHNkZqhn%2B1g4AEvJjceX9%2BuWiBmBFKrIb&X-Amz-Signature=05298225a1ff0573d095bb70bbd7a9d9937588134ebf056461fee44162d6bcd8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM2J4JJE%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T100713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxxzQnFKCSK6RSArMzP%2FeH6ZAM5pLif9Lt2McqdwbbyAiEArbiaiMZq450sMXP8uxOi0aIMsFpHecWSeHPauowKnrAq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDOJ4TjkCnSJ%2FOiwQrircA5Lf779TZOZHZAB3dIjHluunmpUwhL%2Bw%2FzaM1dchxUBzpdi7Q2z4wWYJyK9UAIOdiHr2TO7ndN6FUA1fhNEEgaTp23l4f5tk9pgSYIayvoOT7gZGlsoK8CRVwB0S%2B30rI7lMH%2FDiWlb%2F0Qz2wUwhUe%2BHWNXcENUYjIaqvOownyoSwC%2F%2BvtSrUVIZR9nMfSWAfEJPVjByUqG5Vui7juXx5Q5I%2F%2FkG4euPfzAKs7J%2Bv50CbWgp8JU%2FNFApRA9hZs2qrm%2B6G8cm3LfWT%2BXXoBmwItdVx6N1gV%2Fwf6eQZSVW2ZiLG7Uot33FpZ0yg%2BcR5Sij6UjhbB0%2BSvGmjEoUulFGKFCE7dk79G3o67IDjClm1BObeOS5MmV%2FLQxUsFuYC1B6AVh%2BD6P2qVyWbWXPL45PpWSHiTZr26Vl9zo7YKNp%2BC1e5LU4pwH%2BwFBWZflRae4oqhW7leS2xprpZe3oEWC2rCEdjsAID7wHRkRTbuWvy9y1w5UblsyhzwIqqAd57Tyz7PqQuUKjD7mk7meeltwdg%2FC17Z%2B4bvUo4o1yQFJKiVBkyPhBrazXZu6As%2FVxs%2B9pSgeg5CSPj5ehDWcvvwie2EHuxFQbISP3Nhyt3cUzk2WQMR8GIFj%2FiEopHRaPMKuT2r4GOqUBpQFyGtS2ZTcfiMY9RCHq6SDqntWACknEy9t6nZRdSiSsKXR%2F3KgxVMMsGGF%2FfPMix2WS8s1Cq8mS5L1TRdmZJhDe%2Be1CZ5Oc7II%2Bq0IDWxvR%2FLPZKyesCKfkzpWEJjkmKLfabcalsbCB8qpX1O1lhoXJGTjkbv9uXLAENUP356j3bWmsSRRx%2Bu7otw4DJo8jNuMpWfuuV9LVk8IiTpv2i1KR5xF4&X-Amz-Signature=e8584e1341322f7c8a5740beaefb7e0f083692f1d3b950b2ea045dfa6b11cfa7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
