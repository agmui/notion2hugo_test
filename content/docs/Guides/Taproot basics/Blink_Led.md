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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXSGZJD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBkTSah6X22M1U6brBL8A9O3%2FSOWElY3oie5%2FPFBC179AiEAskYwumnJkI%2FuatpQgCRin8skaKTMZ6jJHB3vNDucnbsq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHRmPZ034WyWvAuqfSrcA6KyOPVA5l4aPBSqDMtcr%2BpUdiKZaMUVtRM2s1%2BO7jMVI8yD00YmBzJmWXeOqbUCKrVdE0sH1wCJZP5ZYbuR91pkWPEachbLSP3n8vtAmxVzOUBJqJ8Dk6AhcpoKGEmafhUgB4LRj5dE349R1j7x3N82AKNFiPLk%2Fk5%2BbDoWpBp2idK7MAMdioLmgT2gGCBHk1Ygq54AJLFDC6bQmhW8LXcoYnlWdubI%2BKjSQ8K%2BlZCdfVMsYkKzCsubA9skBWTNd6GwByiT7gYhgE%2FSoVVtq3ZNAGlu3FbLgBAVLzTrVG3OLLk3u9Euhj232rB6nOYiip%2BfHkNYHQIdhuFF%2BOxdJNL5yBFluO%2FHkCIQF%2B1SHvF4EVM%2BJzvOdueNpL5dkHJRomDJZFkJ%2FWSSuUuNftaz3NoRLqjS0qmOz8MJTNJDRMmmsRtFwJa8INkzcSjVznKCmHlnp79K3UKzT7nABeQoXVA1sreXYN4UeO1W6NCWMC%2F3vMNoN16nSHDmvuKM%2FL8qQpWHxjIQ0wCJAg1RQV4E6RUKCVkiv8HmxZRXI3VfQuzr87%2B8YB31v8hnKSP1xWkvlAFWVo5wh4%2Bvxf%2BX4GkZaUlmkVMK5HhK1EEdyxX%2BVH16XQM2GFLSeYAl6XJQMI7MysEGOqUBZJy4yfh4H92rFy4zGwa8JIqZGsnA9fOPTSdb3G18ZZ7u8HsxzethdXzhLoBZOOJXm%2F%2BJy9SKaOLtBYl%2Figjt2nvnvpcvJEHeM0hCg1W%2FS%2BFVZZx%2FK3NGzL9lM5LXOapxlz3CZ0GW1Dh8omA24Pi304Tp2ciG4mIGGRwzhoZUMxZ3Q2ZyMmd7LKisCWdWw8u6W7gnhzSzQOsP9ONTdN3sF59Iqb5w&X-Amz-Signature=fe1172c76f06c2dd95752da7439e667bbc10249ffa6bdbd0ef89d205720ed862&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5RDCMDP%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHMMdASWdIMPWeMecaHk67TCQyEK1fZRJaYw3iziTJC2AiBAJ4t0a8kn1c%2B2sTZrtSbcqfmAFUomixiNKk%2BN13D8jCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMU2OzIhjcztS1XmqYKtwDMc2OWzT7E1lYGTv9KujgvvyIxm%2F3EIGOqmIvcZafGpKuwh2%2Bsy0IKLdYQzZFh7Z80xevDJ0RSMENVrGaSwc7GJ4ejbmak9Dg7W3tJSrPm1RV4AKq4cpCXLIykJ7NilwJvmugP1%2BDgPgSy3U4REVwLQc6W8CyUusFFNcawZh%2FoLhsxEmTf2ZIrXdkM%2BH%2FlrIqYhWTb6VDH9I2HQ6zeZ58B7nUJClmNkNfOIDTkWr8ZKBJWWsSTSJ76uRj33mPGOjD%2F%2B7%2BOCxcRskIVoUA0avCLYOdQxhuA6B7PIhZ6hgHscd0IzINp1NpOnLe0O52s2bREzhAhN8Hs02c3UIYibZCqasLZxBj5J4gtaKYFz7Ycv4Ptl1OPM0zJvZbo%2BsVULfTooJageHJRAIwOh%2BEPCSrVUnuq9kQ0LR2RuOBWhJ5HgxYTCkwp%2BbBRkPiqU2TTScgzcae4yJU1o1xfL3fi3hiH1VHl12doRSAFzPAikjlrW54PE%2Fm%2FFMYOcN0Gu0l5qzdWWQTVATaXea%2BM%2Fo1dLtSocsoHIcX5TsrWcBjYbtLa1M7PPxzLH%2F4wpgxoAAUVpzXQJLpKusHeMNScv4Epx0daIESDCgiiyvi5CslpZ4Ye%2FzpDRHrf%2BvXfPev7sUwhMjLwQY6pgEJJTUCWimEJgJRXyyCmR9oz9RMTNAIX9GCmnWIXpVaR9wOljpnIGyVTs9SsLasV4QlB%2FIIQJ9%2FRQne7gAtT6gXt8gR3z5VqlRFJ0NXlPt1VCa%2BnsZRmSaXO5FXKWoKvl1AwYK4x4y4y4%2BK%2BFd1OuPj%2F4w7uUO0jtM5DHLKaTEHFRcV0WRMejNej0n%2B2TiibWB4h2OfPBIRZx45xafd1bAtDcwzn9qC&X-Amz-Signature=505a7866593329bec06d4c553e4a09bb5b46996a6194c881604b53c851c236e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
