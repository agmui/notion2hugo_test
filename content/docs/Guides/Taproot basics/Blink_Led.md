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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ICGRMTU%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgLZgam7ZDnCoYfBbmx8rNr6R3x8piZ2rYW3CfPBmflgIhAKuXviFscNO%2BEa4m0U%2F0Z5e%2B4Tz4O8trMJ3X0mwZJ4DIKv8DCBIQABoMNjM3NDIzMTgzODA1Igyfa0igOcNB2q6%2Beisq3AMSt8bxnPJ89vyejQBED1xYeVCByXOFaurEUEPH2CmLqulKj%2B%2FSCDr29WcIp3A7tsVkuvaQTvTgfNjZktQXoF8bsbA7LCqi7bKQrtIgYWiSGcayz%2FH3bN1I8CdsPQkAjXYUZv7SJamYgTARcwXjNmbKpu06J3BYbQSovmmgj91%2FIwg4kfPi0EpzO4sCkjz5KEapI%2FjK0OpeLbR50XXb3uCHh6vahlqZW0Cpf888vxafWXZMsTEYi4Eo%2FclJVCFXdn%2BxzgGN0MxX%2BJx7Fh90vLWaPAglU2gwI0aTBz9CG8kirYmZ7DaDVrIJ4UHTK%2F7lyfCP278rnpKJReOSOPVQWb4Tkl%2B5bz2EbqvgCgp%2B6tWNcvu%2FQjBMlr0cpc%2BQnNVQk1lpb6JcMrXnLiJgn1DcVDJtDhGf2jSeAoTo60CMMZCP%2BH%2FzMXaWugrJyKf0a0BzbvmuWUYBMDB7Lml%2FqeP%2FdRoCHs%2FSCAguSyhsoxmWhZSj587poopuADTMDrB1ZfOlcRpp%2BGTwTYrc9TvOuV99wUNJZO7HKV%2FcBVz7zFkXrxAVMEQaHRI9LPaTYTW7aN2OEoMS%2FQ%2FNJU%2FxDOkkblZDn7YZBaLEcp9zsr56IRiULATDCHP3Yldu9%2B%2FMnAs77TCzpvO%2FBjqkAWMYTiaO4q4pKjBaazjHfsv4a%2BThosu7xjRxe1sC9eOKrpMtQbyIwel4aNUOsRxF29oGgeOHlzEqSlt%2BvvRgN0qHcWIAqCAAtELq%2BJcritnnsy4UAhusmDTuqKLhB6jyjjiUpt2jDOOj8E4qiepuDjNtkU6tWU%2Fmxiqf50MDKIfccnIo6vSz7i3lpmdY%2F4fMzZfpTJiX8f2PcJVzQFURCrDFFBmU&X-Amz-Signature=bd3e0e743c4139e771018b62376a50298846e66e237f39966a7fe61366c9369e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WWTAUSD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGvfFLcs61SgyOogtTgDBoEPEAgLQXagCROkHO5FQTdAIgb0Ssk1onQaN5USsU4IlNIV9yiKYorD0ZxGvR24e0pG4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIbULfni9nSdGro6zSrcAw3NqZnzyz1rZ4CfDH2tB0%2FcF6xEvNmMzgQXK1SS3Hc8MQYuI2Ka1%2BwaYDYgUvjO7hYAyfiJtKJaKTc5CAzEQseF7hvRhIkz0d0B6q2fHoeCJR5l57Nn7NsNDOPj9S9mdhl%2FeyCQDJrXZD9JhDe3hIojxKE%2BO4YF2LB9H5iyc6vgXJ%2BQfz8Irx7C3VPmAZ%2F47cqykRadvd%2FCjHvPzHiNRuaGilvryHl4KXyefS0m2%2Bp0xBTrNciFfba0UkwrdiP6D2tdzSp9WG627UfUzH1QSGuqnWnuqPE3KMUnQTBRo69k94YQ7ve75pnNRa24MLCJtH8CidycgGZ2lYUKVFousAPNXgYmVfS2VByz19%2BJyc12EpU6JF%2BBuMdkkD8QkXrvpKyblSi5Oy%2FAQkWRAMK%2BnVi75nBM7DXFv6MJLuPPPKDGQ0iBpnLH6X7Ko%2BsaewmxSy0hRgjCRIEGSM91yEmixzzpo%2BZO92cCaVgrOTIKpYDZthPQSZd2p0Do9ZpQ7TnxklHiHBPVMKVxT1eEPyNdrarGTBTNoKExo34ot7w6LcHMR8dT1gimLmv8l7uiBDLMZWcCUvfR7Fe3MYVEfO8vYtjJkDlr1I2q9oBUvdDFYqblN3cOs82hMjYyVF5LML6n878GOqUBaN8n63wfsfpTrUGNTNdJk9atdlhLzI3ANXBg18XxOBARBEePi5bt8%2BpJqa7RXdEUJ9IdlFZqxEncmSKBhOrEUVN7ddyxLTQVAbj9MH5YHS%2F5B%2FF%2BxvU6jKpCiwjT8fmp4FQ%2FIWuq32tdkchw%2FCcnuRZnjj1%2BlLa8sXFmTUTF6zlC4u4XvPzsuGy4We4doTrT9%2BmpdYtLW%2BvTKnZ0r2POJq%2FNhKmR&X-Amz-Signature=ee8b3ac63447b1422060d63e17213be0eebba1aa9ef00e2434062be84656f63e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
