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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MPFYVMM%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDFLw1GXoW68O%2Fcgj%2FNtnTq6qu2sBzRfKEQw53aRacjbwIhAPwq6Z4wpMrIOyFutV6JYhPITnEbT18KPq1vCcAOmt8kKv8DCDsQABoMNjM3NDIzMTgzODA1IgxYKqoi6zUe8CXGaAAq3APbuGbsvY7xLoF199NQXARPhojD4tpHfFbFB9zq3VKqqJ677iBQY%2By9RRdT27HeqFcIU0tAp7oiEHSkHBADTz6UU5kx7%2Bjl5Rg%2FkBy2b23pfR6AKOyrgehBjkFjf5ke2wVtQPUfA94hTT9NH5WmQE8Pxek17AFM0DgrWs0mN%2FS9Jx5OYX98LxhUtRx%2FrG2LmuSqIIlT4Rq%2FZebzyZVs3StiQBg4kiDPV1AiQBAZFXAEgYIpTsnLGTihu7NQrXlAxJ8Hi3ZhU308RLN%2F6ZRsszn%2FrkumyZY%2FsCFntu3w2r7%2BSpN3c5YKCZLKc8FNH4KrL28ehupA%2BRFmSfzeH8v6QgU5AbG4qSFhuxhhtUn%2B%2Fxw0hKpsBmwLy3frX6gDSVIE7UbE%2FLTA002hC9096CQ2W6YgVDGEaKHWJFBiMjSq1uIf7KxDLAmfDsIU4%2BkJ6TkPnlrMlxj%2BtCvpdW1bGwXYhE5F6U0bFbdoQMao7pSyYSv7QvrPsSItheR44ONSIXYQ3KBQJIIKU0h%2B1dG1ZWgC3xngKSav%2BDcwXJZBbCUvPOamr9Vq2iAQwpAWw865Gz22TZ5KxWQ%2BoKfobpUk4XBg%2BZsg%2FwUBJ7L9kqSHyHgyflCxfcOeg1hemqQIfSOfOjDPjaLDBjqkAe1RXzCmZqTpt63YaMsIr6OSFQ8wOQvhlHc0PhAfhiNAUKvcB3YvVX650L46OoQb4hx6N%2BHI14vMVaZ6vhN8Wqb%2BuI9E%2BYWxQq3obrobY59poDUAjJrTFHoP2nOOUTDSwxTrQ%2Bp0%2BO1fSsefU20p%2FXNAWp52LX3oIqJkz2OB9p422F6PjGyvsHuABro4QOUY3XyNRwK5tQzD27rVAmFH8NAFh8bH&X-Amz-Signature=ce9e4164f588047ae6bcdbb75212c1ec72ea3a1e29b66ec7df975a834a6357dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7MX5E2B%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T033758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCC5ukKtH%2BML0qQ0xxg0HkZV10Q%2FUk4gdZO4Dgiq9oYqQIhAM5zTjFvjujQpk6hlSN62yIgUmwf0txJA%2BuEAjevdJmsKv8DCDsQABoMNjM3NDIzMTgzODA1IgyQ2vju43g7%2FWGC6mUq3AOY%2BUgG13D5mW%2FY9RsVbdMTCamDRbhGTfLTRCT%2F7NmC4xkBbIPxZ2n7iEdoDxTnDgb0lsX5SB4bKA3WV9PY1d%2FYngZxTozslBRs7ObIyHNSkGW5P9JtY7rt3JPbcwdiITpYUz5LtoN5dxnjz7pp%2BEJsxGnLapIE4zPFeL83bhy2me%2BPos9dzcpbxMgaqIAaj%2BLrIeVel7UO7yEG0MRNjKG%2B2d2rA9ZNtJIa7mwskMuqjpfPOyzP6yhUU3r4MUb6GlJWQ9xFVh1K2wNEQLTnvwuqbo0s68EwVLhjQyUFeBx0heEqpuJIRwrFowHuwFruKnafw5rJuPAtJ4b4%2BNA%2Bv8Sj7RvLtdN0mzQhhPq9UZ%2Fm26jqFIi1AWKRWhpagbcbcVp1Qba6bhgok962vrMyJh7e6kibvu9974NHGX8U1sowMhd2eB6hWJVQUQCnKxlOCBkNS9H6igRJbQDtyBskIkvihilx%2FHzBFTyyMuaFa8HmxD2ZsoYoq6jxAFm0KcUQADhJiSKCrXInlyMSUmzwhREn%2BHvt2512PD5k70g8t%2BQ1C5RluKArUBT95crBW8Lu9ucXN6VeclyEbz3%2FwSd3QBN%2FSqInhA50DaV5sOzafkI8T0jM%2BKT0LsmaeS%2BU6zDPjaLDBjqkAdqGy4BsBKRvYFywaEpqBBWPO5cXh4zjAw3uTZCONgoV89txnyho5Nz0Tdl0I4dsW0ZEcLTtX8f464qxvHDlZYNOGSbyarpiWzCbrsODIURpEiujWUkfiU8LiDXT4CvAHE6GJFQ9AfKPK20xBduu0Oj2HXW91Xs3RCuG7%2BGW%2FQ3q3Qm9eVbvYedUB4nDIpvt5e5FWlxoCArMfLnzRVQ3Zvrt5GxE&X-Amz-Signature=5ba8a41cd61b1a5d080822da261b66edc132b4ba282b8a0e7405a5941ed89ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
