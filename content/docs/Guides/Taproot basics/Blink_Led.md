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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOXKLIW%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDWTX7ZpKRiSQ09PgVm5SkFW00TBSQ2wfwQZU5RfBdvrwIgRcBaXWAOiX8XLkBWjsDXWPN8C%2BbpCnfRPTsZxmYvmB8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDH0M8E2lX0jeP15NSSrcA0KDLgG32fO5YOyY7ZyXTejdUuWLzLi1UsRxMeVO8WXK77aqsxIJSuAWdg%2BQzhONCeXmAZMzXE3%2FG37Vmt2glVhLGclV86Ec85jMWT4drqKN4AJudP83l5e52ReEptFWHyqPUFhZKRMnTNmmsKvimxyMDQfqpu3geT2A5BKxU0RTXp%2BOpjFwftVc7vb9Sj5zBt%2FIpiDY57gn%2FuiqKg9RSR3SNXCzVX9slAEUAFrZiSmXgahxuCM3H%2BOPxkvGvk%2BE0bI2iigH3jb27XSSjPmMdWLjh2Pb48gIGCJAC3Q2itd%2BxL6qWz6tVOEkAEgHx9JzUy1ExOSkQPe8tqsfus%2F0vA7WB3OKaZSDZpft2uuEcgUCdmqfxDHPjiX2qE%2BkqmWRegoOmXKTPcM2TGwTjJQpi97grO0kKk7Yf0wS32SXt1eYsvuDPV8ngp%2Fg%2BtcFduLuydbbAqqQPKXT4fW91SX03ROhPbOwPr4Fk3BpnUpz2ADPVa4QvyPnKDm%2BnoCUBLFnYkt%2B7hKeqvvG3qn6U3WYuYVEjMO8v%2FA4UrtzofiAPiyIl1o4VrRWzuZ7%2BGHgi%2BfTwVBm7Xiz9eWIuAu63hd%2Bh%2FN%2F0rwenB8mwR4lwCQ72MveqIGNZ3QDQc7g%2BvLbMOadrMMGOqUBitY6HyGgS8thGNAGlgrBfqQ0Y76b3XAXPaRERL69P2x6ATOJejC4xGb%2BmzjbrikoQtIp8znOyNy3ginMudBEhARfBku9CY67SmNOtuvOB%2BHjKINOK4DSZpW%2B6i35u%2BOMXV9icGw7U4R5%2Bs%2BQnTu4iRlrIHuAerbTaXISAzr21ABBgj05MSNbH7tPVDNKZiIv7T7yc5QArqEswkSW81rcE3nJcX6s&X-Amz-Signature=84d97cfa05f85c19a1468252c5856e22f6ff4979cad2feaed97e2436535a7971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677WZUWEL%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGQ2c4g6Oe4SaukJ1ue6CRN60exnVhaUeTR5TvsqysFYAiEAlaY7ywCg3j5%2B4r4oieriUy7lu0IIrHjKfhw8%2Fw%2Bp3eYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKjIO6T4ci6Ek2JUuSrcA2XOKTumv4Zlwd%2F0izC3y6gLKaUCHF0ZurAUD1RNoCugJQbN01u6fMoUWFKI45du9M%2BwfLPJ0zhoh2gz417%2Bq%2BEBvrRMEygrXQQiinY8vLs1gPSlu6ulEWBR5RvbIG4GInw4uwsfRHz7rvpGfGQSrz3sXoW8DAemfCxD12l9UZkPR7As9V5y2IJxk9hpyAeiGrROzFEQm8QNrdnbQSUWckzFDH8DCl63AUKyp5ztasvxZ1RELg9fQacBuDmpZzy8awSXgkTitQjI1xeaRWF6UW5yWjcBEu1sUhxwJuMJGEBGVNdIa%2Bg4ajZl6%2B7ZrudoK1Elo3abXXOT8DVAHj45jVUGf9Q3xw1cyWVP4OreksPMTRffrT3cMzFB7RhGaccZn%2FR%2BAd2K3bYci53kaq4GEU787Wz4TVRQMPxfgaddVspMGzs9de%2B%2FOyhBg%2FyxzJQmHY%2BaqbJIkzp5Cgx6Lk%2BmY%2BSHDiq9aRX1Gfxs11QYk6CGwn0KxDmj7yVZWp%2BBiouzRf8xBU%2FLSWs8ub6%2Fkh2ufWj4zwpC29Hqp9A%2FtESCEr83thgYhQLqXD%2B6YyKOzkMlo5fcCxqh9oEeZNI%2FDZIHK1ztVYoQACy4%2FpBuF0BaQD2YVuQo4IC9JKBbIdnwMLOerMMGOqUBQ8N9Hq2afu2N5CHcmEdRA5uutaTlUa8qiAm2JAfX2azJGHtEFeajaG1S6MIYIbk%2BVL7P17D3MUYCL%2BAudLMHIO89CqTXGWg2E3sGqQsT5n118CWyN34L6InOxyKU%2BK%2BHJIMdzzh79ZNN6e8bm0gRQ7mJbqQjrDuxwr12mLAHVjDxkyOk3B4CnlL1N%2BWCO1cAwGObFlTiKzJ0%2FaO74ePFk8fTplt%2B&X-Amz-Signature=45fb9ff43a713c6b9506e27f7236a219a2e4063760de86608dab449c49f56b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
