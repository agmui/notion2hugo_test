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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7J32AJI%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIEoiCDbhy6z0Wlcve2XapE97a0ck%2FldCOu0EXp7vm0EcAiEA5cRS8io%2FbrvQsl6q3PUbTtFTUbbFc4btaGVfWH1lergqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLBlWgzOE2roj2bilSrcAy1iDqFZ9fIChrydEVYMSd828OvPPlni4LL5lMbEEpC%2BI%2BRqoPXw9heQzOjMfudOfyYncoTBnJ9n1JqlHr4A8ZDvibYB%2FgehiTWHCEjQOOolzKXOb7%2FPpHUWqs2USMQaY1jVCK03Sh9K9gJe12LnEVI20FdHrDIRP0leMfU8L294Fxxr%2Fbl8i579IaKGB7pwHjeZFxd%2F3PN2hvBmGVHPSOzpFUoR%2FDk9S4QgRKQHxYnKjDl69kpPksv5XPeUjweuig4ExSPxdWP1vxH8CUdUOFxkwUDt3BDPGafUt1aeX15LGZ%2BIEEBHLJ058xiYb7IsIoNj9%2BNkOXruw0lcxFb6kqIze4BNS1rjAqb0QTlhwpg0piNJSP%2BpaskhykH%2BmtRKTG%2BpNJ7RJvSGT5BLKghzY24dxRcdFljY44t7pMeZ7D%2F%2F5%2BFujjSToI6QsQdBJ1chuSOg%2FkuNl9IQ59YYC2nIrB1F4%2Fp%2B61UXw%2FkjGpMaDEWyKsxKjwCC7CCNxSWm%2BArruIf447pnyhwdaxUTocWoibNIpKKHHIZrEHGuPU72aL8fANasvKgtuZ1iZTVG9fr8KxuHSW3qC9FyOpUlpI9w3xjzSi3P83Enkax7uhb4SyyjgqKHhevM64IE2JVBMNv09cEGOqUBYGtzWTVbHUoNrg4uXdn%2Bn732RLlZ%2Bs1OMG6s9hF6RZNkGn7O8p6UkFsvfT5gVT8fAjA3yPPIgqkZg5FGnywN3ixkpgPTNPCXUhH0JHinZHmsfGuZOTHYcCgmwh7QFU5ycX22%2Bw9ygo%2FBG7KFjv7rbAKyTRdjLjYgGDy1hpL3Du057v4LTeOtJlJvZPU2Y2lz5iL2iaQGCeKiRqklDYBYNPzvAbp%2B&X-Amz-Signature=9c9b533515596b29ec19e2fa7b576af86dda139e3efeac05d5545c2bd1311206&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZABDLTJS%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T110805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIGikGaxYjgullxgjr1zU98mhO4P9RocJvtsdeC3MvhMSAiBFgthGqeQg%2FkSxFTMw1GkTbbRVRVSWIR%2ByrpMN%2BKgxWCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGm4EQYXlnCaO4FFAKtwDFO52mcN9yxXD%2FbdClh%2BQzN3OSFq4KLT1b%2FpXTPxHAzc1eQF8w5%2Bh6iS7otOUS9UZ9JjSZLItqEmod65OrvbXc7JkHOtESdp3ujHKEvBOSPSykWwNYrig%2FJTECzofuNfaLauxZ3%2F5OUGi8cezxEHTXyLPrCbB0qUPBgsbT%2B0%2Bt%2FTiAkNCSfGbN6fnBC2O5MeUvk9KcgVif3fVjD9MTDvKya%2BI381efvHKANEHLATiZ8y2iKOC6fbiFGD%2FBr7%2FWmZVacRXjw6cPIYGoN5zjNjNVrXXRnsq8IxnV68k%2BN%2BEB9y%2B1LG4J4Xn2wqrkabfa9KpEOFvDInxvq42bXEP9RM3zJIaDxY66RftxNSSpzWKuHI9Op0VQqhSBOqxR%2FJaiG%2B30JsKKEET%2BEMxohVBATb98pnGFU%2Fx2jPwd3bvrLk%2BVFILe3TSfOxBNysT30kNvGOecRm3wXOOvlF8LQjGidJU%2Bd3znbfPGWNyY6cOSX1HC3HJlrmRliD3hlB3yGW0bDf2y2iAcCkOCoJQk5Ie0fSCCiTHpv7TwaBoM5VH93ZmJxufo6A0wNlhOMzcb5VQi30zD1QTnxv9p4N4bacY%2FwOw%2BJmDCqkv2XcrnzDikJinXlkL7QSooRG1gO7IeSkwnfT1wQY6pgEABtLOyszDPxhrg1XxzzSKauIENd9R0dk2wUe2OIQQRwTnQF8UytjMkOQg5LtZ2743u4XxfCWlLAlp7YqE9vfZttGaTcfF2yop8QFKEge92Q25RHUNY4%2BouxFfChr0RTIZCm1J6RiakjaDXl5Oz3k34xJGv9kt4Khk97ol1H2NZyNY8L8Lke7sj9nOZCpmsbpgG%2BPfcltWTaTNiTK6K8ypi6JkPjLW&X-Amz-Signature=50086dd6d48de56178ff36818ef0eb49715a42ca63b439ae0b1b666687ae1211&X-Amz-SignedHeaders=host&x-id=GetObject)

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
