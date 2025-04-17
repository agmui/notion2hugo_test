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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIZJ4GYE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFagdfnbY7LvtRJ2WNge3lUPgDy5b35g4DIeMauWyo%2FhAiBTCllk2cyLJh38LLKotMjEceYDJp90mKXWiurb4Y3ouSr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMfVWAhJSBK%2BTpjYmWKtwDHnY2pzMbZv75KvLL0nK8ywjEIfgvPUJblpA%2BHYfvHcSf6DgESDuMxpvq7k7dOYorjZrH%2F6dBvKw%2FZ0IUFjb3wFMEhnI4AOW7aU4yN9Hlesmhbyj7h0Tl1qlqvCnhFr%2FDCIeHWwHB2vXWwDvUvJnIWnVEEXqvqlW9Hlb7mnT4ZyVqga%2FgqQMPRTM7Jbs6f41X6PTrp37r3ViXuINnteVIOiv4zg%2FDKuMiy0QgCFVsAcKRR7gU9Q7TVlFBXN94F%2FKlIxpyp0xIwu4AtzfJW2LWhjKLnvxDCu%2FIhi0dSIMLjInzdsn%2Bb4JWcMtz%2B2PZcwVNnGDLKX7MP56PXo1FTnloax3T7U8bzYaPRxaD8tUh87vs9xDOY2cjmbz1XTDLO7RVwI4Q3DO73lLooSejQHAQzXFAw7%2FXSDDZif84cJ2nqVO%2BJcp9MoR4SqBFGgsQqU0byNLJBhfh8EUr0fsXwTH7Iak%2B%2Fb9Yle78ENfmtKRO34FL26C4gKw3AiQFPjsTzXsFDoaXGJIWODHSIwoyl9Yqb2Gimh6E%2FMw0CuvAj4puJDoXLw%2F1BpfT9Jrhp2C7kKmknNuB1CV%2Bc6cUOrd6aV%2F40NJubzLgUsI9rkgOY02Ghj%2F0eYSocdbxsklv8WMwtLCCwAY6pgFfiIhSrTJNjRAhftRsJMjIXHM4Rf6xINAWnbEXpBiOMxdzwfaiap77M1ZXcq2dm%2BMLAHJGSyvKXWmPSmQZKGiWbZbCsLM1CpiiaIsm%2Fsmsw0hK20PgGV%2BO6FK7%2B3844UAhgmlB2%2FWpL%2FaxiXVj3WwyTJcfejltcnoae9ocxissJlkCCHOdUx%2BAkYRKlrdO%2BNd9USgsk5RQT5RGDRfIvaoWQzrvPz1b&X-Amz-Signature=85e6720068ec6949ced87c3fffac4dca4a6927f31cc7b4219ba36a3a192bd224&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDZWU7I%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO0%2BKHyKrViouxNDo9vlikwMCwtxKS0sBS5I8oSX4QFAIgC%2BJcIctxeOijrAIUZaRi3CUkpMfUOIMVJFfUpnaHtn0q%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCIVyskz9UvTL4xCrCrcA57q0JEtr4UAKOMIT8WZpAZRF4lGBQ8jywU6YhW35FUEeqVrLo99yp1G9d1irh%2BrT4WvKdu6ybkG%2BX3NG75kl0PVpBY321jYojiMPWPsag1ZiYr9pK5RSkGRZqfj3AMl4inlklp%2FAW9UsxdkeWb%2FgUG7buxthxBwNj%2BbcQHwWtao3xe2KrjcgyeXYVrVTi8wKPIf23wlE%2BTxDeVEaMyo4hLDRdTka7qxiGOvydB%2FvNcoz2DvanogDkEvubcFu%2Bri29UzY5YH7hJv04KhAlln8TGmMv7fRRwbKsxzCpZ3plp2KwwW99tC%2Bpos5dS9YVcjCWZL%2BplVBTsCanOoL6HiUX5%2F1bezBBvNTOZLvZWsE416l0HAzunzAFpkYjoiD7wkRxdHbFZemzjQEujHZjD%2BNJYT5piMoBh4LqlJKhm7HS%2BbwzcWKsZBhO%2Fig3t5CZ0G%2FCG%2Bcvd80NcoVdcbnHr4NJcaMqHNfpu%2Fh5QSWPKF2g1%2FJ0AJXHGI0gt81SgVVHa68mVyUZy02MC8kkumhVOWWqhX1V3DbeRQd9f2eJ6ddZ5Cf8w3F71%2FrWTykOW%2BUBInyAmH%2BnsB5WGFSHUaWiejylt6sSD0hZwc0gYWxHDrrPnAXSveP%2BzC04n9DEKtMKqwgsAGOqUBa%2BQXNaolcKWtHHCH7n%2FX%2BY6zC%2B2TNldf%2B1JFTuw6zsC1aZQV%2BrE3lnwraW2pZUUnbJKIO2Y5CxAbN62yfodnVrlDh%2BKqWbgnNr2jc6o7xSZZbljYW16N4vzxaQz6KEaeRz6A3Y%2FpnNggVxyaMzhUp%2Bio98Ok6FOnsV10%2BZ8Wtwawyrt4JNi6LU8WHdur3RLwLiQ8c1Vdb0HTHoac8xTzl%2B37YHyZ&X-Amz-Signature=a7e8d1ebe5fdc81694b26fcf9525dce0490370e61e0e49fce773e59e7805984c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
