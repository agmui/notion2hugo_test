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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWPYJPWX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDKA79pdlQAhlwCDCOsEZ455EfDznhcosbY7H4RgQNE5gIgQFz7Ki0f5mRFkJ4b1MO0hv42OT6P%2BGkdiLBLEBVsw90qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEixd8np4XALp2LcZyrcA8J56CpTqLkmJ3JoqS2t%2FoRLwcufPSM%2FOkuxyRU1vhZ0zmIiYpYTarL0gKk6pvCWAPn6fiMW0jZ2EgNmoBCvVSOCO98VIFIezUBh7JLG3WZt3zsJLPkXcAsuTq%2FJj5WtkOS4dtjFZxpNSXBTvWhZ7era452%2Bhi3OmNENSIlUuHfRcXCHfoVmuzQv6npyg7ebQ%2FivmEoRX7c0LUMmoNMz6fvJxkRWNuaGwA61xVcNm%2B%2F3RstULMLuLwaYFf5Hus5gZ4tLtA965R6tx0rt6D3ESOIpLxDe9qDzuwOxTaVO9m8VpM4MsWi%2FyIZGe%2F5LMY%2B6wTykqJsnYEa1wmS4ITxCsuAlz53eC2vB0OsAdUKgBwqDB2t1HARW2rJ1ypFMtONCuRv2a1wOKSs6gG9wgv2RX1RnIh%2FlkSKChdehdPIoW7HCqemSSItNT3OE9EEcGipXb8FlYdWt6red88nXr8M%2FR0qGDpFAW1q7GyTD7Qyb%2BIGZNSmshlhFleitfuo1s4AkdpTP2g7ce0Wo57wSwbxj%2Fl3Tqi%2B5ollY3ryNwD957YAQFaxJkpI8QIIPKsdfUwQ0UP6xFu1NB2ukZ30mCCKdr7BNB2CbghsN9uQwl7l4RDDEPgn%2F6U%2BDeMsMVMPzMJK2%2FL4GOqUBRuTA4nh4De8O6AhyTN10eVRdNkhQE5Ztysbw4DJDE377HraVv1zPt%2FSXmgVvlxX1CWHpsC2E6%2FWbNbgmjnd5JtdHv%2BQ0X3Nf2nG5J6YL3DemPQxoukioz8TEHsGkXTGgiUpgLnhOUeZEB4RqqQ502c2e49dEInRIkNkoyfAlekBxw0BV5Lq564KSkSegFixq49UedD%2FNDbHaj9XtOL991zM4PCup&X-Amz-Signature=84d1c1e23f0f619ac377d727e6e1c27201f4d1f4928bd7416288227a685f74a3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCN7GELQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD3j8D8o3%2B1nJ7FkirxL4Ydd%2FTwa20jXC6SQFGDKP5CBAIgB1OAfPKYQp%2FxepRCHiGsbZ52UODM4WSiYvSgC70kIRkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPCLENWgBZSPdRXCbCrcAwNAJd9vU%2Bn7gK1f8RTR%2FwbeEOpzQ0ZCHQEKoL1KOOd05q9RsujRFokgxmO0WL0xsTszTBg7sePrJqg3CCbjIJB6oTIoqSEPvzIiRlEpmZehn5y7eP4dLf0QjN5Dj4cLf5qgClhIAujl3HVMJAVwBB%2FBbjhGZ2oo86rWfVjT62lRkc%2FxXtEfy%2BGzQbxG1zro1dzz9umumRvSmyL9zhmTIIGJaktTWc9TQtynTIKw6HdN0QieWFGpzv5tHs9o8MNznzXUg3pXMCDE2PO0nL1wck9MLt8VfvUNdjs7tPW99fatO59DQpM0SIh5BJX4IWZ6wvc8%2BP5JE89cd2a2XePa9Sqpt30K2mVdKxuCbJ1MxSDjQzQRSK1loS%2F55rzrSM%2BSTJTEV%2BiuU3iRMVIFc63V%2FaorXZ6Hm%2FKukpDHD1gjlIjiNLDp6CaYxPJQm7rx686xJ4x8x6bnemY6whjbUDbRmluIassPyFWXVdD0npWRHOH4YsUcE49AX29afO3a0%2Fm4MHdMhaOXV92YNRSNA2ZxliVyJKYFgxZ9K0wdKt%2BA9%2FdnQy8wo9PHqRQAma%2Bh5cVBlFoSFfKsgaMZSn%2Bdxj%2F3%2Fc4DT%2Bc0C221rVsqG2vuVUPEDF5uIrfkDZ6Qb3QKMI62%2FL4GOqUBxhzKP%2BVVFkiSFlDdZykxzU%2BYUhBAXWo7I961MMsIZOVEBANvx8wa6NTigeBKOLTTQVvHMwG22tCPBOkrgjj%2FmJXIMsV4YVN2b9rtaIRZ2bYl0Tb8l%2BMZtVtG8Pqwdw7LiEv5ejLCbXHKZOB5paEiQQidxoDemJsfqM%2FmAecW%2B0LH5%2FJHMu5WvE2oLSeGXXQvwHYGgj8KbPYhwH89OKnZveQc%2FY%2B2&X-Amz-Signature=d8cf76eda89d4f3d63668b675a28a59d56af2541dc99502a27945c1360081f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
