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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5QXGPKW%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUcVj4odxmuabAFtmfq1ggWMAWOyA9EtcHeVK5WLhY0gIhAK%2FtYBMhV65E%2FFnM0BDDuo4QvD63K8JgN6%2B93WmV15ShKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFI15q52FYOB8n2noq3AN%2Boy57ZiB7KCSgJShXG5wsVQ8QxAP5Nhcn7d%2FzX%2BpSuA2AcfvDOLQHCWJYjkczC2EESqAMeguIsrixx20Q4L5EcNcVI7ns0DF0XYnT%2B6eliPnhOpQmZToABTqUUVZR%2BRB%2B6aOp5r2XJyGau%2FYn4lprkN%2F8dghwU7tfCaO1sYCiOyH2Fh3h%2BEHVTgA17wCG3bZLbvTf%2BXP%2B3HKDfTvLZZffrFgbGaZCVVWGCP3CeMpmDthAvxfTRXZxF%2FvCSob1IqQrGrrxR2lSLb0fcN4HHJZCcfs%2BRNWHfr4Zg3fMZjC%2B6ttjqqToK1PLRUb%2B9%2F%2FUDDvP3Tr0KMF7ivG4d7%2FvAdBo34ArsoTKvEvHhLHG4t8TjJwY6bUMlKD6fEJI3eh06qenBp%2BVjQkmw2L00NEVYdWxSWPGTDyD0DWQ8jICIZCSHt0n464mBBuc0nQtr1ZwwPOIp4nr2lj37qKlrgNdreLo3M6CF6b1URq%2BQdVv2pimaU92xgxP67xmySySafN70CFotIsXaEcDLbs3i3SvxSrvoNwBkYIEYNUTbSA4tE7VWvtXiKvGi9SRIyo10ENBmCVY2Y2pyvnDtUoq4OB%2BXnqNNH0tqUafMJm9efCR7OtwI45qBeahUOPtlYsUjjD8vf28BjqkAWX2xbdO9qrYC0Ci8ULZ9c1XA3sueDF3zwpdvnv7iqRFS3q4dx5m7TSnEEgNAkDzcEhH6N8MKbiOjkTz0VvQuYylkmf5X72r3ERBV77nLUfgww1%2BIIBxTVOm1xn0bVxi8S7GTwwolGpsPDKJlRJWae%2BchHplY00ddgyYcc4Afb13HTsrChDyBZnERdq8k4CEdtMNwR4AsgoFJX9r5o%2FtadaAtdXe&X-Amz-Signature=a2a92cc2fc22a942dd2e8b3d359df93c5b70da3b114d901cb57e4b479eeb6494&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TWED42T%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfyVf1uNvEcfLQpxxLmjtkR0Y5DlK%2F%2Bt9U4xSHX%2FOYuAiANxqEhnJJ2PvWto9YF1InipOdFJX2X4weoWCPjaAZaICqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsc3OjY6WF2UfyF82KtwDFsXlRLWj2XFRvir6okw8eAtaFBwRPtOAFtI0D%2BcF8hZc23yxKgiQvcu2iv8NlHqSzlWvHg10Nfet%2BE7tccVFx5xhcCUuXIoMs22pspEOWpTSPxZhGfLYETNaHGURQ5S1GVfkT9ctE9vMWj3GA9CP4Bu3Xedk9lcMd%2Fe9NkyCbAtJzDJ6BP3ByGkR3kJIHWVcm%2FMsDsrrOnpuBFDU7BZab0ABYAPwFZyI%2BYAdYOoZI0n6%2FU%2BKNzLFMsO4tB9ggcqbXbQDtRZE%2BfLjE8EnLomhYSBEpoJnXJL7CsRoigIvqWenmOqqiWsGkwAkcnzMMkY1SoEa6lYUTXauLDPHzybtrXs6M1kuXWNf%2B0FvOwpk0ooNJN03NulPwOm1A7%2FJZUaaYCjcSmdgNSnnEF%2B%2BDWaX8l2xiAgwxjsDDro%2B5O5K%2BJg%2BvNXk0jRUzPH1nZE3Hqr%2Bg39gnrf9YX%2BDNlzoKJkTNzHxRRVzSyWOdcdbIqm0lpH9YAZt62wQVBOZfNJ86Zfw33Oaup8busGIGbJSXB%2FFqFL1nrgXqjNM%2F%2FNAgzhLbA%2FML7NHcUaIAj9xCA45C8Bj%2FkZIvqpRvi9AiLsXYTGY3R%2FztdvPKAV2U489SHKiuTEefGK%2FjkvEFMB1APcw4L39vAY6pgFvWswqxxx%2FP6tP4Zwb97R8UgLumOggfc%2F5UxkLmdXqGOv1%2F%2BUlefYsQaMPK8EuQ6%2FHSjKJcaXC7pjzi7ETwW40fhEWh3lhgul0YPLc4QkS2%2FI58nVHeYjvQqgS%2BWrPpWA9ahtUUTqTllVCh8goFueD2FPsrJyX%2FHy1nPIJCSNLERu3D6AcPaFwMMKGk3lILCdEiU9VwRebkuCq%2FqFsvKXd0PVJSqYg&X-Amz-Signature=914177f85d953fb8d3bc1197a7ddf3f7ed7ef7b044d9dba50dc4010567be2761&X-Amz-SignedHeaders=host&x-id=GetObject)

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
