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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DRMPDSZ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIETebIjljqqYd6KdwP3ZvLByphoYvHbLlUFplWcEDBnCAiEAuta458nXpG%2BoWwpAJzRZnRsAGq0Pms7M6h7LxGvVAJkqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINVJltBSHKdNPrzMCrcAzJ6GTV88UGwVV19lcPoBtf7aTumQag%2B2n3t3%2BjCTtG3z4KFt4g7Zjc87oPh9FYE0u6Ckj7MyFBNtHXKXwakkW7CaB7M7iqqUhklont39RHM3CFp82%2F3RKfyEvic4ko2Jt7SHYoUlZUU55mPqGhWUEYgtAEJ6aI9leoON6yKlioAPynlIV6kumBloaet6A4XVijWFDmaSotQr20GMNm%2Bmae948yEbw1Zzgunozno4Shv6BNFOHH0VZkcNVyhbfbttvE4GDS9Id8vmYYfrKOJ0SMiHc%2FnJBgoyEldAv9BqZ07zXC2UEb2uP1htpaT%2BjCUA%2BjXRLemRCYnMrUKvlcXzRZXa4XiVLoWUKEoe1i2ZF5wVc2dwmXx%2BLCVtt0nYLT%2Fy0B%2FOavP4PJk%2Fd1bd2QgWL7S9PRevRSrHpnuSsOOmhVXYTRuIGIKOxYKNOWABqHaAQifmf051VZYKrj1O6ROcy3jg9QpN5AC%2BOs%2FASzBMYknzuYuuJTqI4VNepQPjQQymE8DKUTHW%2BQ1QdHJdcfNSvHllSh87gKma%2FhpTUVc9xEBUPq9K%2FQ1L0%2BUizSDMcx5DkRcwKDa1A1f3r9PFJ8IzkFh7SUeankx5zy%2BSbBofZ8H%2FfFD8ikVbf25BLheMKS4g78GOqUBYDAFCukRxF0hPg6EMMoLgnRewpKOBTlxzmjL6WAoYrgeHaz1Z3dOssq13ZaeL250ATAhM2Q%2FvM9NpPFMMtLuEVvaNXbUl04jeSw1l4WXM4MgTDEGC5lgj78PiYnYuMZtYFn67dwuWeYisqTybTHAdiGakkrNd6GDTQXxX59jFblJnuJy5HmAhcN%2Fs04fqkjpmjK83fxxJgHx2D4JzIfFBDztTSXe&X-Amz-Signature=91db18f9dfdc5e48a81e1f4369806e3db3bc9716f628eeb5ced54b60eeca4bf1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626QL7FNQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BgZyI%2FswAn8YLY9ZWpVocQXHfMsvBJGmvqTFNPZwzYAiAminVN01xd6BsMupZoHtVdhO54m0f0ngVZ2FPwJdiGQiqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0Dlp5mMaQ9T7FTj2KtwD%2F6lBqru9I4BTUXbfRpE71rRZT5MD20%2FP38N50Z%2FOPBZA98uUHdlU0lLKh2aLbJCgkjfRU%2FyPwcBRXs7VS6KCbZehGGqXJ1mKnwmQ%2BOeo5Fyumbov7AAUqhHT7qAuD5wCEKHqpuISp7RluEDh5zRVtfYXEfptCyRPvP4ZUUSpJw0kk%2Bgq2I3j%2Fv8WneobB9P2cUz8XvCHnCOFLVtjaTpZeJf2MUy%2BShm1KHqRwh1IpM%2BjPj7yQO7dYM5PcfDCCbAngNoe0Z3ouHJTe79K56VLNyK6nlluYdF74rjw2YcYHu9TEG9gEIa3gYnEAXLqVISuRmiF944TIX%2FujEJ%2BfyMM%2B4VEeQ9ZgmE0voZ7xW6G2fmvFGX0gcquneYvLXPUO%2F5LyaYgT3K9M1sQo6W8rLm3z284mPbdBMRwrGXbe154NrXMQylDvjd4hB2S53N%2FEMVl1TaYurDmQgzHX%2BFrIWxY1towiNAIO%2BvkEWqPOPJApP3MLGIn1F8lVGau%2FIj2rnDBr4%2FSZC6Wc54rb1jPf2ArB%2Ft9dfVBAdhHiC6xL%2BvSRQcLa8Xvzb2u%2BLepOo1u%2BgwnQxDRmRruvq3Q2qHKVfLAJdpxGkPAWtV08IX0yiHIMprAgbXf3DalfvaJmfQwzriDvwY6pgEeSmUY9q0SNX36qnUqENfo3HS5jlIgXQC3BpF2s64ohxHbylsK9x5HbZ%2FtV%2FCq1Uw6kVBdOCGxqukWiEFc0aU%2Brhjs9YA%2FTOGb3lZfCBW6faBmY4Wxg7YdQ3b4jYbqdwzE3lLQ1NYcVuhL3xShA%2B2wbT%2BJ4poztztHiWSacdmOYhNl09mcJhSvpHkgtxjp70bYj%2FtHXf2e%2BQIkgcoaHWamnWT4H04l&X-Amz-Signature=1023c7206ed71222fe4f164259fb0307cd33f6e73536c10cd7b06b89b5a80693&X-Amz-SignedHeaders=host&x-id=GetObject)

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
