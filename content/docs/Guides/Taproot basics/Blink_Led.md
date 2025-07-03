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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUQJBSGF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIQC8MtMMvNJnTpyMVfdA5Q4RnSdhRAi5mIIMECMJtNErRgIgJWRVHbtYkmsmHmnse91gcSZSf352JWs6IOvKJ9GqK2Aq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDHbzJE258FMowKAxMyrcA38BwgQCW0LZHONSBOQ6Mtqv31BrUOmDY4pVOtjYEk9sAVYmKcCrLOoXFLxTTDUPRMBJdgWwcOk9xUlQxSeG4aAEy24Ughl5SK7Z9Ath75f446XOzJAcD1GeFz%2BCSZ9GHrPLl9WOlajVqN0eyEBCRwO2PdH5F91tFrxEeFJdt%2BnEL0%2FgPahkHPuQeZV04osBrPrYz4SvidI6%2BWVO4hkGTA5DXHyloBurAJsuhRc0fdQuJ1%2Fi1Q1XXH7MfKgXs3N4ollKiz98J7ninsadBbNOVOXDxQH7gWSx%2Fh1RDJHks2gb1zSi6I8nbSdXVqW3Byx%2FdoSdIQWzFx%2FAJzueLITGK7PfjF85lYnRCndzrpzDQ%2BbNsaDVNWdbvaLWwebd0Iw3%2BOdxtOGU7hjy1fI%2BHa27%2B%2FvrqhAkDG52I%2FjB0g41tj19Q5I%2BTypQzX1POlPFFp%2F0fhuxR31gcYghzgpogDUWQKQMSCbNnphn8vpHYTxQDI45cPX%2BwfnbEKBLFGPC9Aei%2Fz5WHW3c5M7jM%2Bxgc76Afx2aqQBfwBN1BF6%2B4jrWObkK6W627Muu0fKA1eLalP07KD4%2BhOfazLvYkxviPAG8izV7rpEck0%2FL7LkkJbDwLa3FbxSmhoMlwFpjBpQxMOrkm8MGOqUBXhTatnAdE2TpNY452Co9zaSK6vUoRuBNFV7zolAEZpElhICpCBs32N6tL9RixExWLLGwHoiU8jBgL%2BHd0FATcHPROLRwdtoJZwaNZG2oAP%2FFba1jdna9UCuM0S8oEb7x%2BoCHeL6wi9gMydTTVfx9KrAJJLSuR8kzf%2FL6M0MTUMk%2FNvfqHwvAariHAXpkhbpf0f6np0U4%2FJH%2FsZl5tpx1T3eQY3nG&X-Amz-Signature=52d554ab878ebf6f1360c806fd8f4af21aa207263cbbd23f668c1c16733acc41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MBRVEK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIAW8eKiI2fEv21dcTOwO7GDyFcOSpxR3DAhegjaYUEoEAiAoiJPvf%2BQDVdiM15FgrPAFORK0kQEzdK82dGB327JBUyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMHXXTavGSgqeCmGmRKtwDbyH6Lv7Vxv2WvhEQwHNsL6mvEAUgCUu4dfBPp4JuuB04dnrVWTRrErevSX1NVA7s1jus6RjLVKfMeKacI9Zanvdx4Efqdgg6RM0J2VgWWFFHZf9N8vKX0iFt3Q0RVVZwOvk1SBH%2BT7odSuXPx%2BHhjNCSOunrT6PGaJ5VTZh7qQ1P4jzc5lSXz2mUZK%2BAK4smWDL8Zi3hVQzDeCspi%2FYvIj8AR%2FbMg60Z9yI3edwEqsJ%2B4SHvtFopblM14%2B7tfdJ479AAlxa6o0kKQVKQr1BtvLmfpTsx0okzKBxIJ7Y9V0w0olxSqt58KzvU63CrNRtj39hXF0jtA0EbbFaCW9fMZtAmBbJBbpWssXZZcHLBUTY6glSwmha6Kc9Du0aFUL4jcxt%2FS7917anms4f79IznyBN5rPjDwKOTkoeMxPoIh%2B5e7l7lm6oXpHheK9MDzPum3GqheA4erE2w7stinOwAU%2BMatafrU4N1dfBn9QN5FRs0J7Z3JOsrTomVAtKbmaBOoxufdcxzPYRIsGalMdDPajOeVcH46FnP6iI51OdKL6qCi1TDdAWENC4uyJET8axsCd9tSEMxa0jFRvUkmi8%2BPe2zv8f1VPmWgxMWerZKWkjCUuPsVFjmLmD0FkMw9%2BSbwwY6pgHsb%2FrKeGb9VnQqO0OFyKISmO4taZyCt02PogqXVjYxZ24oF8m3xfWXo9qwcY1QO69htvZxXwjgqyxxfs0RgSuTse93hcbMHDtK35u7aI9GC4xNhQ94xQEXwYw%2FINsDxJCGpjI6kjlI1wEq45WUndDKGDDdJXzbibZ%2B26iwj5Vg93qiuPHw4JHCbM%2Fp1rTGRBKalwdSYGo%2FbkaIWL2v72gaL7j1sjWI&X-Amz-Signature=cd66d145f3d9a24874d2d15c5b3bdb67d63897e587370460ce3a54a985623c81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
