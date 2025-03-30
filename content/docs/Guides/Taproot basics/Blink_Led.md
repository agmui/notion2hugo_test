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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YOHKTRU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICbMGTiqR3GcqsEPsMz9aPHg2EfRn0FWPyc9kwLSFt5FAiEA93kcITn9YpuJzfqAN8qfoMCbiK0Jrx1Ept69mOxDvjYqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxsICvPqs1v3b6PZSrcA6eKOMeF7Bt5H6K869t1XfgNfhq0bRYhqerNIiK2rN7Q2KHBobn1ci2VuSSKTRrASZT5a4dniPV1OKkw5hebqSqxlMhnyGTyAV5E17W3jh%2F7csToIKkhBIY%2B7LLt0iKaN6VokGnYMIGLjPul8UKE6nhSUNtbJXfJJbnNGVefO64kk5kh%2B0dmSbWDLlLOeBXF8WvHFRHs0WPma0mjJNe6DCiw7HBuPjsLgYNESZ8DoootlBgkCLsx9hNLGZ%2B13OvKNAUw3nO67BvzWAl%2FmXLfVllx0%2FVMrPhdv4AYuZZdh7dwbMDlFQaMcNiikRIDlU9CmhtZi5bMMAlnwHfcf8389G3M5mpCV4ML4fg31mybKw56qZpxteBxc5pe9I6ksCAJsxV65wILfXWaBg01lvxkTMkS%2FMu2fyDMU0N%2FGlMLj2hvUCSBow2M2zrrtJyYjN12PtTx01F2W7xFWL8C06K78JHqieRQgJYCVGmmFamTVdpmj7yhaeJ58fKu7Hv%2BOCg%2FpyDR6tThcjeOqeIqRzvxh6MTKk5%2FScBo4maGCsM4MbwfJqZQM86Jok%2Ffo6WpdefUVtMf%2FHklHTgGDtfISz2TaVoW7zUzpccrzcu6bZzen0mTM%2B%2F1WD3b7da2QiBnMLTQor8GOqUBK7kwFovnDhZqtL1LtmjXtX1u%2BZk%2FMK9XvMvHWrByYIuysfbp16uAo8BYjgAoduX7Tkfk6eIxm0XTHZ6MBT48Nw2TWuV5zFIJw0iRGEaN6%2FBVXS%2FAP8zVqhmLvgjs9rm2tWar0vC%2FXHaBU4qr%2FbMvjBUBpU0GnNs2N%2Bb6tzNhVScFOcG2IOOX5pv8PBni0vDAUDWaQs7ljyuPE3l%2BaMv3nBObo9L9&X-Amz-Signature=03a1cadad288ade6325bdc38c6360f5d08e3327fab0afecf860c5598c5253258&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHM64GZ7%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T022434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDeSzzH74i1b6iXoI2VBW4%2BzAegdXKh8TsOzpQ2%2FADekgIhAKNgB4DjkxawF40%2BXCRngomhfAn83Qrr%2FJzsb%2F33gIHgKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVR4Yc5wBSZE30wBgq3AMkACSOuz46%2BCrrCY8mHE2i0BDGIkzh9IC%2BM2RB5hs%2BlUagV%2FhlUJWMJVp12nckNnC7F7CmegqkGuN%2BSYD5XTv6dMMuk%2B%2BzBCGoObHphTP29gfqumNa%2BTfflh8HJvjgMppZJvt65XjX4EGPZ1kMuFVqhoimchvHepvSpZFiFKf4%2Fmla6LK0FlGMNN5EM9hiMXciRD94Nskmmf3wzoFXHwnsiBIrZZw1Mh%2FZ1UB3Y67LcIi6H%2FOsCfphW7L4b189lu6OF4MV%2Fd5SFQW4ynzSpkZ%2FImCNTmN64mtxvGLYMZTHvzLnz29b%2B7J5mIf3bXngRkK2d4XWlQrHihMom0VWEaHvexvWGTjbfBf1YQj6IjDuylCr4ZpLmRfrGi%2BlpPawFQ3eT7rGDce7ADcD%2BCyHhH1A%2FB1wWjFH8NDDHhxyLtX9EkdRcUEz2Oa4ZzQ%2BZOM74kdO2TPopdxlxzAgNFMhfk4hv2oWJ2If0k%2BSMVmUDHbeimqzDHfchp%2FIGVtOkEc%2F6JeLAZKje1zA5CdO0nLj7STQPBzPefTYVXdj7Z1ZaG8iT4PUQj%2Fcl5D3Uhhtamod8VWl6EbS5TyW4OV12xSBdCJKXR2tF%2FwO2Zxtth2yVaQ2Z7qAJTlQMoGVEcc%2FZTCm0KK%2FBjqkAfhhqAlFdSDTCWSJIcaEqfdGSIkdTiDraIHAvCd%2BTaguu3Mm%2BLDmHqxdcvEEKX3PV1CdTThJPcgA6xBgMiayAzhBrCp0ulHjk%2BL2S%2BsrVh0Bcj72dfnpOZEvX2sBi4cCz2bSpbw%2F4kTS9h9uHpajFGrzPbME7FngS9bDD1O7SOk6dBfJyFmyx30%2B59Thyxj%2BtqIjqdLBPZD4PJL%2FLTdhYB6PoQV2&X-Amz-Signature=abe95af5aaec775f8774c13a38832278fd1fb104e02a3f86caccca25dbc132f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
