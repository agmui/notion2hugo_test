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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QTKFF3Z%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIF1Tof5lCHJ2zv%2FRFbARgA8lWOuqtBw8BSAP9PQCj0qJAiEAplQiqJ1bwnHY48puTx6HoOwYJrXnyXp8owlHpgQMfpUq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNwNZRMlALLP3nQtwircA%2FxgGk3U1hoEvxDXRgdlRVo3nLVYLhgJAiBSUptP33zYBvb11AP7tcdFVODFIEVYJAsUA2G%2BkJnC1cdKLNXfk6BcrejLVyjSTn7j%2BvyY6g6%2BssNHaWpnPWvgvGSfjE9uAqYga1fbKhHFkUJTb%2Bq8qVFk59gR10P8ozYcsRqlOyAmQocOEw%2BLovCCfMMpRPM5V0Fw24Gd%2FlpKgrK5s3lyN%2FJg31XTWRe14g6WUrsTorOqaozBVDWzp%2FdSWBV%2BeM1OhAlWPeQ%2FqdLEqNChgtAfhJwMlvc2PWqeE9iNruKKm%2F1596TW9tmFbjf7M8cqMA8MfGpDrnwkRSrn7COCLWm68VupG5JhtE59jc8ZpcnbHJKC2h2LiZfNPbYNks05f9uUsAG9MCHryJGzuSF3WMIJaIwj90gOjwqHT6QCrEnmucmSXF%2Bui7GQ845VJN6ElRXEJMZyrmdZpzyAznR2C2G40H59hSc8GBQAKKEoCJeV0qqaNzq0IcwKgEob%2FT9dspk%2BeEO6THr4HEG%2Bv4NOuKSZ2B1E%2FPTDvamrzJKoklk81awPhbI2X8HT4VxqJVfBU9txXk8IHyn7xVT8k%2Fupq0fqjXBkT8Zu9lr2r2r8wIg7NhVDT%2FPjo2nh2Cf654yoMO%2FQ970GOqUBUSdoq9BQ%2BJCEcobdqQ5d7DnobQBs7nsZ1JyyNe1h5mPzxNR%2FqgaStnEOOPC5TcYHK6%2Fgj3VkqilTLG0cIwEBqBmyJ2XALgoOf0v%2BeRgjcl1h%2FVjY7GcssaR72tyqqjZDZIqdViZMzbVewbmT7%2BRzbgNpzSykX%2BP8fmJ39u%2BQm7Em36nudgHIa9gHvXDJ9HiW9a1bXKPbb%2BIRSso8IdCDknkV7%2F4n&X-Amz-Signature=705b19436a85912cd65e796a4bc77f66af79df6d6df90ba204131be9beb2ee05&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7P23J2U%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCE94DrMA207thCU5YaKAZa5xZ5XbNXn1nWHejgi8h9mwIgLtO%2B91VQLKwvRRiK8qzPIQLucjj7JfTdAxY%2B%2FtV%2FW0Mq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJBR%2FnQ4ReDkHojCYCrcA5w7LgWJ6rXKvc9apZGXc9u1gWa4LrTFYK1%2BM116iZzegPT%2F0gQ3gy43KRVzhuQiJVrR8sLcESyMNtpcYXZopIB%2B1wxU2ZAP7SRQmKAPyB2dQxwXSi%2BFBxEe%2FL%2BRdR38ndKyZQj6fXI7dxZWX0OxxbLhTvpIJPNrnZxlXTxRVPni5sN%2Fu5Ze%2B%2BlWcScgGH1ZQXt%2FQxNoiZLyBcePlRxLEGP6Adfg35B67SW7KwGoBp%2BLMsfamGHJKm7RCyAFaHgWZJ%2FNJAklehQwpFEUtBG5QzjAt4AD0MLrwCC8eX50NYNJa%2FwtrHZmk%2FdlEa97FGI1iUs2xhLXd14MFLd645GZmwkX9T0tr%2Bct%2F2WTxabNiyPstOSeWSdu0YhDxPklW2IY3oIz5Gltacnwfq1G9HheKWykRouQWHnyDmbPCbvXGgdi1oDHUl%2Fu%2FErTD%2FrBLyGceQmOfatThBPiCDSlo%2BgVO%2BoL5hcXfuG9SoWYbUHvlrDiDlb2D6XwJzi3%2BJBZmm08tdvfz3cbFQMaJZkuRF8F4SSs8YdvdNWYjU8%2BLEXZ2Ui8%2BeM7Ttr80X3nR%2FuQIS3qVU45dMMyu%2BJjpgC9pwtMptQDa48IsnMuyTRN6%2Bj3OujRIynfTkQ308hNkYsnMNrQ970GOqUBLFTrVl0e%2BTPxkqccZvARO0SMit3fwHhCDCCEvHTu5ROl0eYY%2BX6HRGZoITeWU01%2BC3ICF9NR6Il2OMle6h03Ob2maXkErbs5pyvBEOjogobXheJypHBQ18jztjolCrZ0zAPxq1Di4Fd0VObEpv%2B%2FA2rwQO84Bf1lQVtcL9NvGwQjZUaOUZB29N7umHrkDjar3I5LkG1Dmj1aUF1y2AGy%2Fr19pl7t&X-Amz-Signature=797c9a661b5836135c535052069b6506aca5a554abde8545d17cccf78730f74b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
