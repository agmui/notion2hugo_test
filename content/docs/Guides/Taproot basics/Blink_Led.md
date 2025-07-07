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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V4ER54W%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFg2n0wSEVe%2FQJRpNSXMwiW6ju29Wq6F5R%2BdlmIoH11VAiBFC76zsSwgqw9xcB5sRl60Hn2M6YSN%2BRA5ucXncFFS%2Byr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMx73UDTBGfDSrszzuKtwDbiZTt4AwNnDmNtVISs0TlmlpCYG7aD9Ack9ewV4aw%2BWUbrwZbioRQdSUsJv5QR2CEgK1ECCG4IlLGGOEedTpN%2Be3VcVV2SWl%2Faxs2iEksICo9VHlsxlj9930ptOby5zWBSilq51HPa9U7fiefzGyznKSoaX8jKK%2FDQJIdFUI3qVq8rOnMWw5zxZ1YBYhq48YHb4ChRnNcWQw7cvvmj0AJ02YZz%2BV70d3eYY2GzNwjsHjFPGm%2BYBGheHBhEh9iyQu%2FS00bj9fxJ%2FA1Dl19ZOUbTZYXbBzRx4QSO0Lq4dOUVSLWw%2BITNsridsCKYq6rIqV90Dii3aMzHVpWCe7cqQj1brXg2TOX8nEDliYuuVhiFKx4GdpnmVoOr8MJTaePjwr%2BFVhzYO%2FoOMCn39hzip8kom2gIiLh7Dws1xmF103I3t9Naopc8vxyvNu5DvbIRavd%2B4OC59gHLMYooI38XLXHblBWmVziTMt3IrQ8wLmCIBvgkTCw%2B8fXQIYL6kRcS6jvsXlV9fUOz1K%2B4fXc4Zai%2FmqA1xz%2F36AsWAzGsS%2FRBH1MjlxsxIrGnUhMXT%2BDa3gtKaINrU8PjHak7lCY9e7FGjN4T712Dw9ZTJTO8WDaYdRbKV2Dj00766dChQwyZewwwY6pgFhDF5vGQBya1g21OsczRpX83KRLqBHpt%2BB%2FqU3ydVp%2B%2BjMlT59oMe9fTYXuVHaqBkJ8CEkuz6xmsfp9wEfGQknXgVfh%2BMYvPms31F5qk%2B29WPgRtsXJEE8AztoCbjHXpTIbRVXXwTbiNJHr9GIKwa%2BqVT08iN%2BchTTZ%2FdJyzYm0JBn9pCRe0hBl69Sf784p1TWcJ4KqLHjFHJDakMsuFEG9E5Sk8dg&X-Amz-Signature=55a4270908330b6d6e03857a78f018832e1c28d245d8a38d7455f8e82e7f8611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFJ7Q7J7%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjozVoAUnD2Qv2qh%2BKUYY2%2Fc44PPKuhrtVirZiytUOPgIgeKa4%2FB8E9fJlVICXnuKwcgQTiVv6kXxLQ1ZL6dhhg8Aq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHk797kMRwfDfvGaOyrcAxUPG0j7oIyMTD%2BAQT1mU3HOiSy%2BmUCurUWe1vc02klxFfHql%2BMvcYIHTxac8%2FkL1G2CkZNBcHzqN3XYVL6weuZbiClLLxvUgVPbWLSIVKK9aUf5s0F2h%2BB055PuC7RD2AEdN%2BZYYuqlQ5TLfN6WUoy%2FuT34ubULRws1KdclQYu8Q67uTv7Dtb2Z3XJoumIFV7LsJFqYyteeYTZWQQJeEAnYu9%2Fh5AslUaiQMxOBziMd63HFTYtH6S%2BWpyrUazUGu3GtOJmV6hBcLtA%2FVj9byBgn%2FlAVZmdvTFQUMw5LnbGwnsr7vqmkRNzqkwqkMWOPRSHieJztCJ8p%2BWFrg4RAZ1DRBxLSMKQw%2BTnpSce0MuIcFXfDvE0YmwXNI3CBqwvzkWwDsUTRpC2ABvREg4MsPd3b%2BuDJu9CQIXGLsA18IfJiLqbx8Yi7yOE32unh%2BS9ZeTvovPnUI1CsQSSKwAVHXZusMznXmPTGgRa6TLxPk90jZyWr9dQJUasCdn7T6g6a5g1d88oUXFSmEa37MZYsZhuVFjJ9JpsAJF8eQFogQRjk61cgYmvkefljp7HD3IblX2z2FTW96qrQoVbjn8LhzXAiIWZdrwMg39S61axSN5LIV4y7wFgXXIJTeAnmMPWWsMMGOqUBczbUfgk%2FHWSEaKlkceNj8f5mHWxmpc0099OJN0gqLWh2aYhp0Ypv84otqMfScOww7GnjrJHKxII4zpFHzuMBmMX%2FwfsgNm9T9MfDqm9QYXbbiod2f%2BrMvhAqlyhIopJJtT2whXtgz%2FOm0SoMG460QRILBItc2XjrmiYIZqu40H5Zj7k%2Fdg2pyvWYJDYq7CDr8eEM1OCh10WjPMTTo5MnGZ3PIOin&X-Amz-Signature=5f62c8f875974efb8b0453931b3765776442f0c090158a132b846f8cd34ec8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
