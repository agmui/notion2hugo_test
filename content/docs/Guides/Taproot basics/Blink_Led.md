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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI7F4OA2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9CxR1Vr0A71Hje5KT3GVw4yduPowKK2GMR3I4iWbWoQIgAS089zDRet62BdY64z60SOrZavGgNaeJUci4o%2BZnLxkqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdDxWcmyxS5c8yaWyrcA56sRZ7SOwVpfm3asARIuQtxby%2FYden5R40KMic5aU%2F5xkD17SgsH7sR6arlbB7lm7I3goYqCtsZNRlfed4hb26oPmVBKkPdLpIql%2F%2FPleRsv0C5HepRflX3lH04oZL2S027s2pg0WyjJ0ClVs8qOav4zF%2BPRd5vM%2BFCOTJWOrBHO40j2nwv8bf3XwkswPfZd9KN%2FHy5IcdFs0A1OrC4iXelJ1MZWsF90VNyz%2FR4%2FJYIAuLpsXRbKnAAY4mNIZ9WCz4%2BnHh%2BhZ2OjM0hmGIsFTlRyXwBTZMbrtFWJwZPDNec2WgoLBSnooNTdzWhP35lQNXFHtnDBTGWvMDmSMWDV4m2y3n57fz%2B74Yrt1zdbliWma7RqCBAFLh3HfuHkDfxSZfyEDSsNXe5mqC%2BZTxz0SyTZOn9DejlUD1rVmYkZYLDkrxiOYG0i0kFGcrsBU1%2B0Fy9QiWZ601vJEdixNQBy1TB7jJYVDloFAyIWwVPaOEenCXmsk3acBAt%2FZn1iag49GfLy8Ej2BR3CZtcRn9N3fBNh8th1LdueoTWtuvqUv2Bnjr86%2FAFHOumNeZKyjYCHOWvjaS8VP6vuUE%2B6APBw4ojlClr5oxLN6q9x2KcdlTTZgp8Mq9%2BSfqEkMwLMNHy5sEGOqUB54DW%2FznICwo%2BtOKaS5mCauvyo%2F44%2BeWIil%2F%2BVvIHsYYSJSnIhaFUs%2F%2FoKum3C2iTj8aFqYZRodL2Jk0EObeeiCGK8%2FWqnkF%2BBw2r4UpQP30m8CBO5Wsi%2Bqa9EM8epg2rOR67ROWKKuPm3irG6rK4cVCulF0BlzGqJ6n7rOAJcbiOlCRGCAaeQ9Al3aDat3v68PKz34J1jDcgTzAaSq4o02fBknli&X-Amz-Signature=3d052b1ca4becd049191f38d61df91d18af8686fa83d900a40c3ffbe184bc179&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5VF4SYH%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T140859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAg38CDjsERgVkZhmNOj7C%2FOYHDmsmwtmsnQCe2XmDm6AiBzDWBIZi7ulDNtLbSCLh8iTCc08C4BmVD8vmc61QC7FCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQxYOxCQyw9tc6QCaKtwDeuWow1MMoNm%2FvJXyQrja7oAC7VaT6IDVq6rPbaG4A1eteKsKMrF1V2GCREtoiuDz1pWaylEqWVYjaSUO1HyDf8ac%2Fr8IGbgUqvC9PSMzZ6idkw0qu4ghs04Tw0OJXA%2BGrm91cS4BCdJsr85QHptUDYT1kfb8O7bBktclkQ9iGXwjtYq%2BvfFXOztobqZA30FnMlItQg4x4sxKuijIjIp0k36gz%2BLliCuQiOYCRNfLRqYu8%2F2vNx5Cj3JO4tKXSkxY3T5jXZY4zJdFpEkeviewal17zgSIDHLO4vpjZCeAg%2BgajaE2H6fKV3fLpq2mUl6NDyDqGn666rXvSqUyytgjGZcB3ichaQiBh037JO%2FjDzH8oY79oM1f%2FwpFx7f2EyGwV8Q%2B4Tsh8G8TkZ%2FZfVsvHGaQdLM0EbFsbfNAE4TDKFl2DudgjpPy8uUVjudtPAVPcvEGvB2dEGnNmTyh086JnJRq9rBOndyTexKUM%2FnTbJy4ooBlbRD%2FvwQwqoK7h2RHUT1uLT4lABPNmoG7a8YxUZbDbiqf7rVxjQIq4Sxuv%2FH79TvYIiCQjh5d5rNA%2BlHqbfaDdfFO%2BalxduxuEKr8g%2Fv7TMqOtK3sfAs31N%2Fb7BkEH%2Bf1YI0MSKHfEK8wt%2FLmwQY6pgHEohODjEFn1VN2sK5TNcIWdp3c4Y8Zy2lGLZz4ZPYDedHqL1lCYDzTpXrviKEDV6l0OFZyT39Zo9rKAFnmX5yOY6%2BRcOCf%2FPXfR6tWMEW9%2BWGhuVYaXiHe%2FMg1uhMyJTCpWLPK7BciBEn8VRgYkymWg55dhJquvUM1d2g7ndEl7rImadBy0Svgrq%2BUztAiEmZJ5I95pCSTo0bOK22okn0ipCJIvT1R&X-Amz-Signature=5f8d38d2e1f98fd7a802ffdff7a639b5483ed549be78ffb85f1b87099bbb9326&X-Amz-SignedHeaders=host&x-id=GetObject)

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
