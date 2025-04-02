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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCAJALL%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIGkOe%2BZEHObmmVPWjs%2FC95E9kYWRtTtMC3YvaKNWwQe6AiEAxEHTNT8j1YPynC6QUxD6BBDP5OXa%2FjLsxTi3mAjZ3F4qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2B1djKojtwMnTmLUCrcA2ckJKasBuEy%2Bz5VLF6lZ2k69lohHkFIqPBtBfqXVl8yEphrwTvftu8BooS7ozBUoe8l%2BBlhaJsuNthrPW0BPQ1QqhVRiGxDqYKfmPoPKTiDxVCZbD4S0V47Qpr4hldLzRGRZQEW%2FWx%2FB%2BEZ4kRFUKm2zI%2BOOhVHLqRNLhSm%2FkBogEileSBMAsM%2BV6uQ2AuSb9Rk8r5SB2OCLcYMP2RrpbTcLygQCM4mk3TJrLwZqQOp5g9vf99iP9ePghobHFL0O3IBucHVnuf5oEtaDSDDh2a2n7UZiiEvuN8QgkR4XVZOeZNIbdSejOMFy2ycDsm4NzsfV8CgoAGVXaMo150ThVhBDrbd5NYa45khz2HYaIc8XU1JG503xoFID4KLZ%2Bw7hhi51uD9gnHEsTXHoiYRHh7bkkcnfFkqF955aI0oqNwUQsG0O59jiGhq492EJeiEmIRJZmLWAuY7Q52NvQ4rgGYbmg6Lym6f%2F83j%2F3LMA9P%2FH8%2BT0SHeU6c%2F5rI5QCQgrUrcfP1Xcon5tJlU9gkXRRTv%2B1p7kM%2BOTSc1jM5%2BRC9LHwS0t%2BWmqCk8k3aybH1WU2f5xZ699I4IyQncC2DjRwsjV330eqH4mzzZwKLmpZt6%2BI%2F6zgNVhqGLACu9MJaDtL8GOqUBWt8qtjPe3K7ieHdP4XtbwQZ93PSpFIA6XsOevxMjINJH44%2FQC85XcGFO8rpIQ8gs%2FaDpmpRvpQhV7dznIqLZ0TPQKRPLzj7geX%2Bs%2ByuozgjDBIoilDmG9zZjykFg8OJUGPga8%2FiFEw017UMVBG8BQMwjtPFTBbUQ9k5%2FuM50WdCF0xK9Rh0jMDQV7fwHW3HNpsWNzjVneUigx3GVl01knJJuWTUV&X-Amz-Signature=1c43283caeeeaf65594bbd189e83028bdb0a043f4e816645c2d3863d99a9c5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466674TV6SX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDJwqrCOiKNeExplwoXRQLPnYk0fsanNIBOYymGlk46IwIhAOz99x1k3R%2F1L3OG21BcP4BOxOjsKe48ruBrX92UsbN0KogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgfblgXRyxxCUVnGMq3AMnPlMLPzyH3DanRmdpBUSpW2iklMVVIaFumYfrIAihxGHLXpwXBh24G9J2Q9A%2FPG7DLblOyeFFrNeiGzsY7u4SsKI7m8oUBMwlQ6%2FC2KjmGPZEGRg3doxI2xwPw%2BSdZ2HRO4Od4pQIGUv4k%2BY2bF37r0MuxrCtUK%2FnVNoCR1jLmuRW43HVzz0%2FwlllCiYcfT1gz7E0W2D2wf2u3Sou%2FaGansDYLbBt7AUqUMSWBqbl3f%2FgtM%2FRG6MgWYDz0IUCmNx0qhTMCFdSXWtm7yoC4xQIrJdPZzg3BhWmN%2FG2Z5fbjTmkbuNjjpUhzkOIHKN8pqp4ksHTnDkP28pWOM72emU3FwUi0M2yLDlDjDYECotMN2Ve0y2McROIlvJ34YPmfI4A3Vh4naMCLhgqxmK6ONs3jaOcN%2FzBcTMkg9vR%2F7Hg5PQ6t1Bps4%2FXNGOGDzN7q64RgvSXyEjtHxWsOLgg1CmVMNOaL2jUtHBqquPh4luUhMu41fltq%2FSHilPe3AShUaZRMT2J%2Bs%2FxDAot%2BUB8ajKdhhGBin1Jr6KtXPksxCukVtrDTtq3tddxLN8iwxZPH0cCdyhrZ5ZEeNBg99%2FOmU7v2b6yRm3w6muc82%2BAHd6MjCb6mhh6BdVvklLGizDegrS%2FBjqkAQ2gXdYK8O9GdZSMqbvdxCejTyKN%2B6724QfUe%2BTyN8p6Ya30bXVL5yLcnZy0nfMC2EORx%2FaBrab1wUVIG633cGy3GPZWDb7xVf5aDMreJeJgoy9l%2FO9qKKimyiQFc%2F9AAkmrnf2mDJo5G8ywrN4MXM%2FBQrrj3jG6vs55nPiCcpYqHT2kzR8pQ4EHWhUxI7LtHBCj%2B0e9xup9SauK9OosytNc8frE&X-Amz-Signature=6e7f9738c3f24482ae17ab27ce1be262e89494931b6cf06062d15bfd77c9fba5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
