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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVN4SHD3%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAPqD2h8muR%2BLLlewcEeptlXh5ujWiileDZDtlrPNI1LAiA1%2F5R%2B5obUMfc7efFqCkcB3cazs0bgIP2Hqs8hxDMaiSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMFoTZZFPgosb4oWUCKtwD4I%2FVFYI7I9JXwqx72tF2xbPTjKe8q8MjwFBN2yr67GDH20uDmHjXsS5PHzHYfyqsSBV%2FwiwFkQVZoYKwFtXqC5zw981RBS%2B1OldOpdG51T%2BzXVCBAObQ%2FCX7ZJbf12vIwjOZXJ3d5hd6qk%2FajL7YAprIiXxcJ6tBk4Gm%2BTaP83%2FNTK5g4wEZLn0feenPJtzwD%2Bkcxhoelm5YcPuj%2BLawfnrd%2BBR3Ta%2FZfc4cewCSIBMPrw5w649zP%2BgTSW7JLxIIcouIDCcwGGW7Cl6bvJySSYtYz5%2FimdyFn1H0Cakc75BEe2%2BJrj9qVAsqgtt17ugHxiCi5vTNOFaJVFvUPHiURwQb%2FKe9vCZg4BJAvP1yfT24RHi%2BTEuqvRFqPR380x7s5M5JcRkrQljfzeYQiXeIKeHdv8z2eyedZ174%2Bs8oGgJ5x65nrUOHyX1yJ5xqvXCwycRkLZzNjP2vO0Q4xrBGy%2FGKaJjGI188%2BkXkyO%2BGNMR%2BD6rs3xkOXzlFMMMO9idm7SEzKjviPKQy6KAK%2FPaO%2F5SN7aW3G4a%2Fmv%2FRn4oijNaC2phtcsGVbaIS%2FGe4432VC%2FDq%2BW2r022EZs9FXX%2FdmiKweu%2BkWe1Ivxn2y9w6YJ%2FmJCJHJMTvs0lFe%2Bww4Zb4yQY6pgHcbaPXt84ZCPaR6lkcK6TN7TAVDCvCIhNfbE4JYLF4WCNXw%2Fg9i%2BSrRbgb%2B9IZgdoxySQyYgjl93f2q9hUVu%2FmpaSjgK5co3ilp274bXUDM5FT52p6J9RG%2FDujbgGvddi9HPouLDI2L9K6d3j%2F5lqq97xNM7sJUrVGHLcvjbrtOAmbiEnAQGIZPLKjMCm8qYTvyzXdDU66CG69LvdXOx8RbNMYTmnL&X-Amz-Signature=70237343009b583f801b947c2debeab6d6093ae8c7e2c0a039530f5d4d2c845c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDL6SPNG%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCqheswKMNa3RnWdK2QqZlKe0731NBpEFZkXBCsCMlrlwIgaBhcbcfVC%2BusNavbaZARqN4ZbvWAAAPVGy9hsXgpmXYq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPEkC%2BV2px9obeBdlircA%2BbbfAhf%2BRyXN36I0erfMu53BrkV3%2BkGE4jxi1V01oPFbmBWveMIXnoMJcaED7HzhykkYaFZEgWshCZE%2BnmdR73x7pI5Xlj3Fu0YoUcAhV1gUI6SvtImXOKdomrDcfEkdVaQzED5WYrl5cf4sudl4OENBrfd%2B2Ss138Ly43GBgFhOm%2BJr1tyfrbaKhzEqKsSru66QUZs9rs%2BsL02FxKEeKkrPOUDp3h%2B6bZT8R45xPtBE2q0%2BgVdqYoeSAUuySDOe5g4YH3wvT4wevIe8%2B1fb9Y2cYi0GAkulzGGX1lrHml8FaX%2FgeiZGAvtOX5PyVou8zwDPSdD%2FeQt4MYmtwZdHpRZWh8pI7fax3pR4onULeXkqOYMX0oaPTbT4Qc1JaVctM5qO9d4%2B1s4P4ZfKs7eVKScm02mgCtce1OxTIDkPS3fcWd8ZGLdPFPg%2B2mlPo5rHIax5X6yX%2BrGkLn%2FKl3nk2MwOQWjCdBM9Yb4Xjxw5Iee2qaUQiYaU1lVzg4MVmlddXvVSLpGjwNrExyc2byiPTdTfqZTAa3ooLBIRBu7%2F82I9aYNlT0W4hIyktBpfhyE2%2BbjZJrwC54%2BM3Z7cSGgU7wgqEK6HxvJPPf7UONJvaeGlfKQAmoXv58DgrADMPKW%2BMkGOqUBTDGFAkakCpcB4av2kW14jhWBFkaBSnP052JNhliZQdee56N5mEzib%2FCzhuO25GAPQnGH3JblXB%2FhdiliH7LmQmwUpIHlQXwOM7cPe1pDUI9hX9IVeHSU4%2F8bUqvzASjQMdIjAf670QTHvs6d75nSvlCIhUmBKoCvj7yQ%2FhsyGyGMgkrUWptmymQJ65wIirNWqTbgnoPu2bA%2FRA9WP3I0EHBewsWK&X-Amz-Signature=d16a2e730c208e7565c0ce032ea643218c84ad140fe1672155e8a92571d560e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
