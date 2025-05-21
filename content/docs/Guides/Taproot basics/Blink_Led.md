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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5X6S6C%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCZZK1fEDjBfbcw%2Fsh2hr0gEr6quUHrXsUE76cznwPnPwIgGDHr4947WpCS5WDoI62U66mlAZhyl%2BjbRvvMgNkRZBQqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCaBBJ%2Bes9187nJzXyrcAzAsiJwD9OhKF%2FhKpbvjFN58O5LHjb3ibqrZhOMZk04BfIpLKb1Bj7Q74TmjjtER5EgfKndchz5UvMLg8sOCG4jRXYqcYyo9s7bYlpYisRTXb1HQ7NmrjRc8uw7b2T2iXdcQ2m%2BPkCv7D856Hc%2FqeMPlH%2B1wgrFaWYO3P0%2FFdOvgAILfK1ETovZ5gTd%2Fa4%2FL%2BvV1a11qg5WRSZhdsX3LTvW5qdIatwGNDSoup%2FpzDAwzFH9T39%2FTHsg2wCHqX0CmLAL1JpggDqhLDtO7AFUPeyv%2BsFsWA6%2Fqc3cradOLqWnOOL9uUKwXrH0ffZbSrTk4GaSke7zEh0NJn%2Bv4P%2BnxBKXuPEuSNbdKzuPJV6mv4Mvfe27VOFP1eogCugZ%2F1IV4r1vnhFMBaWasgRy7Z%2FTHZkv9oziDP%2FoFootFynEexUwTOER5k02Gr2Lf18UigqC56ZVPmgDpKMKzoTHRiaHnMwMzmnD2xv15HKDheV0KRYX7T3%2B6XqcUs%2FIxx6izx76kyCMk%2Be9Mo01Pl7GqB6e2n2pkVHl5R0wITpWVnbLFXCl6hC8zz7%2B6o6gvmiqx8zBQMhnTlm%2BtSmq8LOgzH7wnycsnzGrvMkxyPs33JaN7vxuuXMQh4Um189%2Flum0QMNajuMEGOqUBsbHJw0R7mXEVnXfBgrdRVM5Wq13%2FWE%2Fu0xDRFgj5JTT%2B3Wh5ZMoPV7BetKoj7ygm6tk2GUUzdni1w%2FqXrxaugb6CnQu1v7zKd7qbBIbYdf%2B4rDvplZnDgOwa5HkUSHtlmAmcFope0XgN7DBpYzli1CNABKRz%2FoSX7TdLZ09O3oLY2%2FXgW9qNCw9JqP8BjUP7ENWuzfPNdtGhecgp4%2F3HcTCmmF%2FX&X-Amz-Signature=7a62aef14eeb6ac8405914ccf8fcad75ba25441ecb60f2659c3f27cee0496021&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YLBZUVG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T181205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDCLoBb63kJWOToj1y%2FoyB1vrUkLzxbz8WDrzEXIZ9O9AIhAPe8QaA%2FYiGr1fLok3HOYWgKPpeRXsVPBehZLMqOpkelKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBcFUKoN6eQRIgqWcq3AMucGvM%2BnoY5%2FhSvPP0iYWKR99MMuI85ToNZMjg%2FNr9fAzWlBWjXvQbH6c%2BeMVb4TBgXPUU5pwq1nPCbECrHYts7LYA32uRkOktreIKkYIwFVDMKH1eff40lHAkI8f6RfhHarCU%2F2C%2BusYYfKgQnyrU2IsKO%2FzlGqXV9MXlC4yyM1RgIr%2BnM%2BJpD6S6441hBDq8sWzweFn%2FzdQ8B705bbhySokUOloty1e7kS9oo0hR4hix2t%2F%2BLliJJ3sPRaxIJtGdw7pekTGtVsP2sKIudRC8m3LZqKW%2FOOZhrge0toAig9WL4Nt%2BzIzrBQyioR%2BHQEEOVrpXSNa6jorxpVQgqufX2G%2Bm26B0ZruiMfrkIbaDYDhfLMbpbNsKIDalT0Am1JtIRczLiuulKsaN1je3AJ9F4SWFojgeGUZu37UVRER%2BVsJiM5epv2Bk3vmm8iZi2YBc4deZinHS6aCnBL%2B0dJ8jGE3Sr40Vz06LzZ%2FRuAAUQewtB0VS%2Bx2tEGBJyB75tWS0wbLd4ukfqF20wKV%2Fs1EOJFBLdWfqE%2FbS6O1HbrsxldJwyhXhCLqOqGRZMBdaOSTonxiMXHK7ZaCYBHW6oL4rxkadmwwKEVkuHNa8YE5fSzqOCMpH0gma9tNtwDDBorjBBjqkAcUopHRrdyqcgKbXZgpCVnxCCvLK0h8fX3jNFyyD2OF8kt4bGnz99NVcLDgdisX8CzDDtuVOMp7ofPQtNs7QTMcfbgzk%2Feywtp4MEKTINqqBLks24DLpL6yWSvE0bHIV97yOu%2B2U90x7rnATRURXNinw%2FcROCrVjIZbHT3gH642Sijv1vc16YW%2FsKTHDeNVOCs43hZ3NpsCxo0WJsUHxa5325h0N&X-Amz-Signature=21e0e4515d77f1b6c00ad20b18fbed82284e1cb966edda0e07404bccdf5389f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
