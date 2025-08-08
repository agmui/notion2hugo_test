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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHXQKULO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCfAmwJ%2Fk8CfhiUV2nUaVoINwTK7Nb1Wn1eHarjzNJ0XwIgJc7N4iAts9NmQmmKFHFtpMtTXD0SrTpV7OHnJ136m3IqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEi2a71m3Zc46e1ItyrcA5vlWKy9GHxdb%2BEK7QVYW%2B%2FbvuHaI1QFzjo5yOFu7zusxkxMPrbgAQBHsJLCzxRHifCcN0z%2B%2FDrDWjuvHM%2BflEGivF5bdQPDImrLyzhQoTa3Sjv2gfLtfYjAqVINoCN%2BQIxslXxAyGpVGivuxf4RSuLFxQiwKYNJnt1RS4UsDnEvgjzbqwkGtbiMIpWjlsM7k2DI0OD3DWHVZYJnjLVqqEaLWWJH17cjsLBaJyGUrZW0xC5dlq0z8qWpdchBcNnJUpAB8fOct8qwq%2FaXXWuSwPP2W%2FB63LeoAny3X1L5ZHQqI%2F9WtRYteg3k9GWT4Rm8qsbt6Oi%2FxTDBX%2BXAWf8IrB45%2BhQYXEUyT3cTqcnLB6vQtt83tLhp0LZmVEGZqGJhLxsVNLKSN0kbeAThZiKfq2ee1Lvg2%2FO6qDwSgJK78RuBW1dQK9wyCMzm5P4gwLQKe5VXF3DLwgSr8cnBrHENNiZ5VIJLBILLEQy5tE25%2Bu8b%2F%2F3EoCRE80lOeScHCNrn90H8CXClAQppbJ2IYfgPvqx%2FWvITe3mbx%2Bf6J1SvWzrokXA5h%2Bdd4yzFMbdeLZFdATXVzYkhMWpwLhK4%2BgR%2FBzrUcVt2%2F%2BGAZWXN8Oj1fm%2BdcCfakwU4PRt3mPRPMPGf1sQGOqUBObv6GK3d9JdnAXNkwURNStQhHbCtU2T1jpgzuwjsTe1Qd8w7D%2Bdjr6mu%2Fm8z9kGPUItreF5OBGhIi4mRwIXPD4QQ8A1hmZcSm78hw8vj6%2F1Zh9mw%2FwGpZ3qUPKdnHiEOAN4hnUIjqOBcFLQ5qLi9tJWk2ltwDMsG9vk92m0zgXpTMTnhNEOddolrl2JvdszHoJ0XNpLW%2FtEGj4hUpqdhHp%2BDBkQX&X-Amz-Signature=005f52b7a5f2d961ee14d59d84dd9ccd66cfb5670fbb317b1553eb380bfaed97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNYFCXTB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIF851sbsaRSoaVOXApi%2Bz%2Fd%2BQgSpBG2NJMicUOM1pU2mAiBjASTJ5xXaP6sQjG8MZEWaEP2Jo%2BOM9cFYwOiFtwx2oCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRvWPPvhzEA5fEYCXKtwDss5XGbxjJ%2FdEMGTjBc4zT8Wl8Bo%2FzoW03%2Bm6qtaQ4auYVqBSJYTpcuSVXMeHN2IOzuu03qIrluchcrSiMLqVFzgh%2FZaKWfE9Yjq7hL4CT3oTQ3xEvcj%2BwX6TwU6JSAM2P4hFTdDn65ru1aTdNj30dS6A%2B5HuVzjv5dvz06oA2RECtqhWJrw%2BtCV7%2Fu7v3NEIhSpVNEVNZ9dtSnNppSyOVU6ilByLhNDr41pvo5PdtaRrJZl1E3tOlnBhIdyZGlYhOn%2FLvRgOSu7Q9yZo63Bpq%2BlhZK6PdAKDjjti8pQeJlsijdNUlyBMPpzy6zdrrm%2BNQu%2FZuuDR%2FKgw019blMj8BT%2BwtxEJcBSxfxKpB0tSajvCncwFuMkn0dD1f6UtgEumxUKiaH1w%2FfWQLPWVL7AuSBjhGqZqZ2qTY69s5c%2BCeNULI5lh0jHGO%2BfuDhlL8zxv%2BjrVKhoZkxaFvAiT0F0acGoc1uabLKz81dQMS3ZU2QUBzJtFw6T7sUVghNXRvPukJ8oDfgVubgvCSaBW%2FQzdoTo%2BdSkFQ%2FcvJPx84a175PSf2guhVt%2FaTuM14hAJYunTwmoBeIjqKwENMg8y%2FdPt2TNfQLJPle2rL6EPpKLTh%2F9rWwlMK1Xahel35C0w%2F5%2FWxAY6pgGmDSevgBHVTCwVAi2tmO4tWtc1KBI%2FmHqCrtamwuTTfrrN4pHTo1tYAUJ9YUVzAOBbd%2FL84mfpX5raW6fHoVkhhFJ31wVpxk8SiGGWZ4SwC8iDaxdsK4FqX7o6iB1AwHjKKTA6QdzeSyKhP1ChqIkPBmBJgVOFwu0IYSzrCijXEnH5eHh7jNnf%2BPpyqA0p7BkxbEHaRsn6%2FhMbOKMtxehdQnnsZp3o&X-Amz-Signature=137e8594f561e1e0906198cd1c951e2e245620c2750567d8ddc988b136581889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
