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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EGTIVWC%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEervxK87R%2Bceu4hqsce45%2FpjE5RwKiQNs1TRMnGeJAwIga17pTOPK8UjJJ%2Bda2f8T8jlo8M6iAbCqpHUR4nWj5Ecq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDI3gbGowS3CVC2Z7hSrcA1uXBxSN2PS53fBz0z5NeU0FSde%2BsYC07D4j0l%2BTZNzuXXqgtVSeMXxOFO7ClEWuGqhrPahZtmfXriA0cT8AIk%2F8R14HCG8hSToCfqHI63gWbKOzSUgCUfcU8mBh6EWQVmIEk7UCv0PCkdN3N%2B3liiY9otMFqdmKyfACaKS2D83gEWRBPLaIn7Oksm0U4NdtWhv1HsjNRSMZvxQsm3L1qYWdtaEt2lBBOHRnQSndRl4IMlVpsH2BEaEsApFtHDU%2BGVQMzvw6di7yaqOwItsBBvgbTL2g6HhRK9RLIprdMl0sAHfSKui13knlFmnowFXyiMJbgfquhpQDLCByHtqxgJXgkvRaXlff2iHH%2FGK88SBxNBPvxJ0w%2FQRDKadbkcO0kXbhaixQQz%2FW24d5N%2FfneEQpCpySWPjiEUP5mqqH8mlfhj2IRkrQ54gsxFwOYMxkRo%2FcJTtNQ9hQGvDQwEsvDRpoXSQBuuZePkbAeq7aDSffPSCESnjeOgR59V6ltaIhgbmU3zB3L4Xs7HADxiett3QbfjO1knFlIRsQ%2FMx798Re719ezfYaVOGGXwMKSEMVVvsbhTpYupkhtcn9uCS9UZ0QXTkBu6VTrq6dFCLDOmxw3%2BeU69NjKBU0OJuEMKKFub0GOqUBcFVZF84D8DENEERYOtu1%2FWDOF%2BIp2uXyphz7dDfJHt3YPcx%2B3gSiefNnxQ0xAM5knZi5vilObczIWfGtNP4EUvG%2BZ4b7GVwEEkAn92%2FU%2Bh8fk2eKv4KuyW4BmK8nRTo%2BKMlmRoDMN3%2BX9GT91pz7QP3Q3bYLQ8cW3RW1nf9BCmddna%2F0HN5W6nUyqQJirKGCSyukXAqLhfTUQNF5l1cXlUBWVXuP&X-Amz-Signature=220d8b2000b8f5814c8947dbe02c020d029af6a0ee35280c46be8983d9e3a0f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTW642HI%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwZ7UxkwsQVdk12FYEeJiAn4ejckMjkMSAWOUh6nUZTAiB4PA0M%2FHYJ%2BveJ%2FjzsDRmpaH5iews01zLqifwA3F%2BUjCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMY3m%2F7KO%2FJwTMI0TVKtwDMKRRBuL8lC7U%2FccN1MrcTu76hBVg%2Fnr7z%2Fl3x%2BJA5CAztvn%2BHqaXwBj7ruTLaqtg%2BrgqHpbR17y1vg%2Felackg%2FYCmbbyez8jLvMXRkYjqzSEZ%2FiBN8Mp9uCmgaXk7r%2FFF5mRe5jSSUKif3B4gqoDFShL2hi8dXZ623F%2FLvdhHmjv9IZHlMgW24bnXNlzhwR0oYLs01C71nwCAbic5qM7p%2BOkX72uNv0oqGraQOd2suTAauJU4PmCZRFYm1I9FgEsdxXlktRef3k5yesBvpRAlrPEgi1Mu5S2hBagaij2yA%2F6zMLQwhHIPqqddQQXqQTwMVgd9w261%2BEjCFXd1JnhO9wxF%2FxsjXfmLKmm%2FtDK%2Fd7Iyqh8dOFNcwZjjkJFvbs91iFPQP9e072TRjsM%2BeigOHiS3t%2BITbl0hEmYqePiZpLF8JZ3BpdhtPMfU6tybJPs%2BQBotGNS35zt2qvAQHJ6MChoS%2FP1HSwZdrmiGRU6ec%2Bv0sec9Bf%2B9AhqgrQxe04tcSZukzWvYw1cAjlSyGtzIHRWhvZwPB%2BwFsowoJxp6Lj4MztkMN2kFs9St1vT700SwuNHlI6R4orOc7aI%2BYeUR8Jm7l60ulnd5P%2FJ9zZ5VUrterRLgyl%2F4V%2FirsswoYW5vQY6pgG6flc3Xtz1g0Gxt1ADZ2IIrG4fmm96QnXb3VUs6ppyOY6aWijZjHrbbKK5yhb%2FmkhxgkhGuhvOif%2Fk8e0K2ZFPGIDs9%2FlfuWv%2Fn2IyyOo1suNGl3g6ipBAuAjiHXylUQcDF4nlcXSB%2Ff7b%2Bmm7vFmhHR3XSEP2ah5uXV%2FmUEl9grg%2Bt0UCmmoua1it%2FEcqoGBFcMUrrKIoSGXlosWh%2FYd%2BxahncX70&X-Amz-Signature=0bc4fbd46a45f3bc89d76c2b9496c7018c9ce9e40aecceb0a6327367aad217c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
