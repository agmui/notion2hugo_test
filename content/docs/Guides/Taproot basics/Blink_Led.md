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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY66DMZJ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxb9WuF2seIJ1tMdsFgQfH5lvHNmZ26iwWSfO8feEqoAiBzzzdUUTT%2FLfRFBUqr5BfKjCHhaDQ5tJRIfv2%2FSoAF7yr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMeAgHoPGdlQDikU5mKtwDxhSayNg4UL2MsY3260GwfPBRP%2FNr%2FxAUFnvHD0eIgfTOOxKAt8nxhjqIuO044RndgC%2FARCEuI1CpIhufrZA0x4do3poix%2F4njiPsVp21Y1ISY6QLnF5LExJOW0wBeW9AR9Yu%2FU7jn6ZJrbNSnmi5EQWVXFE4JnT7vp3EjtG%2F8FjzHmOP3hD97g2RA87E8V8MNz6gryFmHP638mfgqPNPq6F%2FjIkPPaj0JIU3kTqyDiu538tY8ih02qsSKC%2BkUiEwlWnbbVPSbjRCYlK37ss4ea%2FBJGmgdfZUFj3Vbty4i%2BMag34xQ0CwC1yWZNTtV2fAs2Wa1YDk7qSrs4bnHtHjNBcTmhuSuFBaQRJHLC7sOTNDHr%2FMz%2FHZv622XgRUA4%2FfFJWV8lMHy3nKyydfSTofQUixugKyavTPutl3D2FnMTUhCN6%2B6GilYBM6K74kDeMdCByh8VPNrHgTsGqdOEFtXCPHSGU12N0pAHkLOrGOaasW1g86v%2FWLVYTeFZgpRWM5VrOWYT1RkxjH21gLJs2ipdcdHyIYvSEs7jl8sqHdo67I%2FjOTCq%2BA1XQhx3YgO7n18%2FsPc3%2FkbyaHSlyB4Y3mFqe72muLpQklqwuHEJhJJyRY5hG7cCNY9JGpvXAw8o%2BnvgY6pgEAMY5GS8x7GDNsAAiFtLa8oeLbMmcDPU%2BUwKm4IeQzzMa76LTzUzzp3jhy2gV04AFHBmbrzZ3YoHUPDm8VIhJCdgbsE7qqnqCVhZ41uKq9DPF70yJrA189N5cM8EE0bkE71h7x%2BrLT9SjenVgwU6BWn8mC%2BmP%2FYS12WYUB%2BAF%2FPXEUVBPSHwk8k6PgPKvVPZccDH1901eK7hXHU%2Bh%2By9dxo071tm0g&X-Amz-Signature=8fecabd8e6d5d4ff6afdbdd9d2cb4e82093e91f253370b96a081b9ee12ecbb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRYVX3F%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEunZbSN6O3OvnCsagyl3invcER20GMThzc435mPrY8AiBNcbg6U2grEQLdCi3K0mNBGCOQcalF%2FeSK%2BN2ozvEY5Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMqFDW3WiwbRgMHSq5KtwDg7z6VwAm%2By4%2BOFOp%2FRszk5QXykedaAusjsfmYe8gIErty0H6wce0h%2BVgUnn4%2FSn5%2FVCu8rohm4oJOh7tAHkNWRlvVtUycfpqBVdq6a%2FmIk3kaFX%2BydS2z1L6vzsPwEnvcUCsvIam7JcTzxi8sE0c69J6x5UaA34TpNDQUNIra0SCpm3IbdI0KNHWU2tNRxxNP9wPRE559oYq7yMh8YM0W0pYOjc709gevd9Yza9pNhqgqDmkcc3U3zlfuthjZVeNgv50g2O1QmoblvOf7jLGtt0ohINcda11ONB6Zcvf1TJpuSm%2BuY4uoAtZdCjkohQ93M7ocE5JFBMi%2Btpt2jqGHBI1yJVypTXeYcN%2BXI56IRTCxAK2sgISKV%2BM3U0CesqZDqrkBLTDb2kqmY4Csg3zO7WVVvg8H4SlDl%2FcK7uTyHG8Y7gsPgyQGKs6NhDK3WtvDQCWyohZtumq6bh%2Fxj1x8IjsBQ4jS16clCPCLaTKGDYAoKkUf5dOPrrlvrKuaNqw%2Fbz6I%2Bp358%2FFr2WFx7lJFhH7LexIdd9R9Rec1FyNTC5K9WY%2FVZ9r68%2BOZx1O8HOK7Z10zZIMuyPQObyzwkuDal8uJmp9P2JOSAgngA666ZUP%2FJFYwNhuigrE4NUwo4%2BnvgY6pgGYrQb6Bhc0qA%2BDbEgfbkWJnnCq0gTgcXS8l9OiTvWi7wf5wRajfNhsCdbBLGoYCxXhCBKeupSrkabUtNJA3zCw4s%2B8XKOx74wLerRteli2zBKhtnZEMU46PLKjuS2sjEu%2B%2Fov2IVTlBniBRjnp24QxoTTpRLz%2FbZnR%2F%2BbkRtIp8NtgOOsLKaNhqOe7w8tvtW0bjq%2FlVaLOBXQEFo5gm8ozkNV9vUcl&X-Amz-Signature=c8d1b1772543a04ee3aeca7fa955f71a350901754f0dcdaa1d14cfd94b98cdee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
