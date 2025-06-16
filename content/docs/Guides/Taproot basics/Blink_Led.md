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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ST726AI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDPIViiG4NlOLk9HE7CVMRRBN%2BJCZFOWDE0lNxEesyunAIgXhijzb8OQmDMJA6%2FtNvOUgSRN545hMUcKR4MzG%2F9sYQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPcWArTfx6vjgv%2BsQSrcA1Uq28%2FWbvWqlY6C%2FmoOQxsan7MMm%2BKxPegdSUht7NBy%2BvyaeN%2BcVhSnEqB36GvOt5sCIID95PBi%2FVwrOTY8dlledcdR0JGjlR2KY24VFZQZnVU%2BLkmZD%2FmbwbLSaOFiu8rETzJ7qjlQOu8WEuD2YHCgslL758rAbPpN4%2FzKRulfcAOr9jxkghOhGmmeys3%2B%2Bb%2FLr1Gyr%2BoHawkLBI1EXQd7ioFT4N34oWjvJyrYkFRAcC%2FR4uU4iGYiqWX%2FoL5Rc4HuLnIetWm2rhkeV302B2Z8Ecj29YFe75%2BrQZjbcpw%2FFlPVkvwDjXxdjEFC4xsnVO9sjEKGbE8SG7H%2BQWpTH88Smi5Tuq630K8BohOOpScWwrE36dj1R5OgQJzWuDdGVjTq669%2FlCYNt%2FyMlVTI0ELoxJtwrNaDLiopJUuOm2hZOqFFfkC68RaKqicyvFfyDQmJBrlSmfiG50DlKHgXjDRez4YVBO8qJBkF0oMnugLEyHd5DxGVzYEVwXa3krZ3LXiY9hW6sWSQHUoehSBM2jZZPLp3cXTIYYIgsAqUFEGoBQmQRhdL8Eydj%2FPfEpRgReLG4rbdazTxVJB3IMnOL07kGnEKNR%2BRug2663h%2FY0z8NRptWfcWwzc96hhiMNKOwsIGOqUBX6cIKftpoexA21WYE2BOUPtbyUSSiW%2BTp4qNBmuhnXHHcLxQ21pVC%2BD5AYrJ8w7YPoIk%2BNAvZ9eLVH2qRS6kE3v%2BUL6Qco8Wz50Ek3N9QJyE%2FYzCis9cC9vIBXiHZoMMl8T%2B8NnmdnnVVV0uTtn86sd3erQIaDN1KK%2FJ%2FTJuIFJE3XN%2BY6e5CtpTBQDKtCjnWBg9y1jjDPYSp%2BEEKzkDeArafTAu&X-Amz-Signature=618b1d1519b792e348a978979ea8b1ba2398748523013193bb694568826ccfe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBOPBPE%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDuAzo6qiw2t8bALsdokkNZSw3ny7OLoSg%2BkG6qWNPRuwIgANj3EQUKwtxmmXvhT%2BBgjA95ybYxHkc4Py9%2Fu7Rd1kgq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDILba%2FIiEkTAobqsyyrcA7p7qBI6H4wEqL8f8w7f%2FuEhq5nYWBdcai7PKM7Uj2HwuWM6yqCM%2F26BAXQXqXJHwANuaRRBpwf1KHtKZSn2XX%2FRr53pWBoY1oDZbGOEIfjC6xGphAYZPKH2REEsn88J4evjRcHplzbGdD%2FDwywSfm6nZFKbFmTV4Y3yI4PGECr%2FdlvtIOd7lLUxPRkqR1dRCbETQzrre15mOug8CRB0KIrpHuyYruaCGwqL8D%2B8KYbcjp24RpVZqTrXBDuOT1BMjfpBuqGUeKtoCZenzZa6MvJDyKJAiSsDczB5EoNqR%2F6kX3UpRsmUcKG2%2Fi64if0MnasiKeK%2F%2Fcf4h4lOJxYZ4RsuIDOTS%2Fn0kX3%2FIIINMz5NxbBWn5mKSxV80H5eCWX8OvsnxP52AJwJ%2BLDnfW93XLDlNKtRDEHbeb7kct0lVW9xB1UHc0iz2wDdlp4XZt0EHoul4g3EHh%2B6LCSQjr5GN0MM5Yt8wLsrwkj03UrIzQpJuG%2F6tZTFyQRnPb4Sg1z8j87bZ9DecoUUWIBv%2B0cPf7uFNYDGatVqkSV7RI7FZvCiQMBAZy8KijrD6BEOT%2BvA6uTKT2nm%2Fd19kINkH%2B%2FjW%2FCeHuJ3MWq%2FRXhbkxPdn%2BEMkmI3lPDpS6vR7LxaMJ%2BOwsIGOqUBOO5dgRPIJBKsoIQ0q2nlq0l7yhXTD40HXWKwSTDCGJhxK%2F6ecStG7yXXYhvw9HpXwcUhfkMUCeOlFIXVvf7IGqCWoJe%2BgT79xuqIGCCDW5yKRS3%2BNTkLMDhzwWHSZL2m4b58gKdm%2FdRNOGUkJ9pjegDR29Du%2BKaFvXr8%2FcmRHhYyxyWlUm88LZLh1aRzYnhZajvZ%2B%2BZzmpwArtjAIlyJa0XWTdZL&X-Amz-Signature=d6c4fe662e082813d7459e77f794d544a85bb38ce3fb3c8a009035f3d1881d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
