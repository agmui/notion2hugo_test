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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHWUIK67%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIF49PQJBRqG%2BoVcuWhSBgyuqZqNg9SRjf2jflqgY1QqbAiEA6dZjFDnHhPF1KsWfUQC%2B1DLO7i1EzzjqfIzXFe6WO6QqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClxgFl0KbDN4YxYSyrcA4mYAnGF%2BW1TnfOrL%2F45e%2BnvNfJaS%2BpqpkjakRfC5pl3Bfu264L8NGwJVUhNAgm%2Bwnyd4I5H9KZ2GsNENCGeycA10BXe1kEP2pCnRJwbSPtSLdfRj%2FiTja%2FjDomu196Gqz3HAQ7%2BaD0gS%2FDUEuZuYfOHlxm66shQ5X0sveglF1A%2BaoNXoFhOLcNzO7LEE8V5ZBud00Iim0RC3Z%2BzeIvVKiA8phMmlawP2w0kqQ8%2BOVIkPTvuamR6iK9aXU0BA1sa9EpF9KrJmwvpqCj9S%2FVOt3%2Fah%2Be0ADBeqazg0maTLayEpIV4XZlk%2F5JIp%2FeIUys40FscMLWLWwwy2Rep6LgXft5QrZsfuBItyCKr7sPtFbscMDtvTItw1M06UTAgup7eoD79%2F%2BxxU%2FT%2FLpm%2BUGZ3pWcmPEzx6QUJQN5wtCjUTyvmb6XZh%2BocIFPeSkFs5Gja2CSw3ZuWKRDuBdeUTsHS7Eo9lRqeaTDyievc8MAZU8tkxbqChM%2BcHva3OiW5bWjcsaEwVFfY1IF3jBKK4j5zpgp8jTN%2Fdv8%2BbBuitB8fwC4UoSaZ7piMvO13sKaTaW3y3FGDUNRN8BLTeVsX2yUllEO9KLuIW4TeVu0ZV2iZbrjqR99FEQ0P9YrFQ3iVMOndu8EGOqUBnlsyK8pDlTHqabLon4BRpWFw5Fc%2F47Jhx4vYfEoT3fzXpz0W8fD7TUKA2gSqK9ai04Z1oilmDKUPy4KySEHiySOeP3%2Bvd8txThnsn5B5VNU5YVLvHxP8ZuzCaG3anos9%2F2QdvplEWgdyePdmGDPov%2BXxIqJpFECmpFQMIvYx1zB5GTKHl6cKSCx0ZSTP8WFaJ1yqmw2pGLSEbe7mOh2fICCYf3%2BU&X-Amz-Signature=f50fdc8fddb5b41bc4e49911b870ae1095d2741e5cd6504d8905881d2f0ba52d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAF3JR7X%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIQCH0MWzu0PYryu7vGfQ27AtH%2BDbLtCEOy44jspEZRdkFAIfLaMi0ezgTu3mgdXwOUgW3mwjefEmFF7ZefYhiAMUwyqIBAjT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnPmbfMKgxvJgmwuvKtwDrSdSHsDgkcHVWplJ5a1TpeblOwTmsdJ8A1CZCU5Wyt4AIjNHwUbwnN1gukjPLSkNnWwBKla7WCHehsZy2UjcLlE6X5SWcI6%2B7kyVjqA2vVkutlylAEv4enMRaZQEwyTuYvWUEvNcqJSb9T24cNhKohck9COefF%2BAHROTFg95fVhqKtfgqTwRAeBsHMe8UKxdkQYIbZXOunh6y0zv2S8bPiVpv3%2FHUo13DPcfrJN%2FKVUE5wuSa2IGeeOJAztH7Q%2BdWOsWAEOIlsV4BwmHU%2Bk%2FgRy2%2F7H8LIAfkuP3JVqWRF3vMoS0nm2d9i%2BsFJjva4qZ4%2Fv2jMUboi0oWg%2FU0uhNP15B3Q438%2BiB5pCnT6pgbFyFBL2rkRZgCLJF4Ky5o0Af5%2BVd8hi1WoadlxoL%2FgEMgN2U3HC1C1ZEGSWFKUoRs4PDvKo94QB7s7uaBYPcaaxdZPEXNlNAQsfGGZGjzeJrUOLUmBErsTr3SHCy9GlOUEoJCpVwzkBRk3RG2nlgjtUf3JwkZXiF08xUQ8rXEDp6FAD1KFIRDVaeiaLeULzIIDNaimPChUgYMdPDwYw16Qd44H488%2BCZPMWJJUFF3UcCKXf%2F6QttTNjKa9PTimGhdPsdlYur4VbfvIHFNqMwht67wQY6pgG6Q5NdevoxR1nA04gx4%2BPa9bYu3lkDLpt8b0tA7nBDAzIs7nx2b6dqnZX4%2BioQ2HNJpDPo4%2FcvxhkFNtONLvUK7n8pJATqmn5bygvUm9qQWa0Pek4DdVq0GrLnGMBGZaEQwPXXzUwTjanpc5%2BFMl2GQsN2jKISuU6ddLeLQ%2Fux4c6ncRzi4JEq2Vt4OMXyLaCO2SNx%2BeKSeqmmzdqlcFJzCaoiD90P&X-Amz-Signature=55b6db3450c1150f0ed5e31a94a42090dcb742d64e249d0fee095cabcc56d917&X-Amz-SignedHeaders=host&x-id=GetObject)

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
