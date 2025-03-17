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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PAWR45Y%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1N2dSF8OZ%2BWkR%2FA6sveKwgNA6XTctu62FO2bmzxJ8lAiASMSrws4V4fq3Z0ndAz30c1EIvMgryYPk5A562UNs6Tyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMh%2FWOKYZTL6hkVOUFKtwD2%2FkcEu30hSpMezG8sCqBVgrYDk9UhYCx6B2iHnPOkvcYL64MO9Ai8kcMZdto%2FhXB78DAbytvdAsppu9LRzDpH2glYeyw%2FOCURWntu14iKUbQNZrvRwXhBm1chS7fbSfsATEVGgaRdTFI%2BH8H%2B8jQHpH5CmhxWF2HZMSGkhqkRmSTavG4g1a9nh2GPcTBTj7A9pxPyGSAirNmuaYHHz02y6z4LgFn%2Fkvlf9gfAQ1k4aDYA8lAgulPgFl9yEGoBbJUM500nWnqwAd91n1yNQPEPEi2lEVnchYyN8QUM9hk7Qd5CCoyrQOFrDAw3GrEOsD8zsC6gjqRqdKqsaIFCtgQ3RKbE0%2FmcFwqZrhrh4TZvLbI6D65%2BY7skj5GKHsacRYbdS4cPPOSixSRL3rccIlAgm4fTAPrJkcTfFGYg6f%2BON3melMon8LXK8Jd4miCyUwghODHT5SVSGhb1lltp2mTLn2QdmCpbyvhkUCWmY0aQJu%2BH7useQZIg3nj4BMX1Du%2BZupnJyalMrF0LNuJYqC8r8mX9aoXODSIExPJFsKRgIx%2BPKRv9A7Z%2BxL%2FaKBraGCz8%2FpHrl1BH96J3e5At3iR2Nu%2F%2B92%2B8agbBeie4PWyLFFGfETusd9%2Bc1bmpUAwmvHdvgY6pgGUfqstjUnbrygem4X006yDqxPP9IPpRhCQsjixNhfEelZ6hgdTj3EHHl4006LHRw10HPy4YIC5wJmspj6mLvHJqnkJ7dQgxh8QZpSz%2FcHGsxP1Mj8%2FY2W23Cx3xNray9HpSdmfH7WLhziqMSMUUaglUs9bcUJ8C9TEVNchO8TMbyWOib%2BhaYEy2%2FY7qLUAIJmTQXVhBZBuWX1f4CFoWR7DZIa56uBJ&X-Amz-Signature=5433fbe77c40fdc68ce47d8a92296609154a8e83ba5d20d41139d77cf5306e10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XVDSN73%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE03Y32FIkeIAUPCtCM8FoJNd3%2F2u8S8qgtAmYd%2BuZZ8AiEA8F2bmd%2Bhf5xNOGyKNwz0lB92kKMJSDffAJZ7eQY7UPQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNksPULyYts5GZNKGyrcA0QzbrYRlhYq3iiPvTp8eHiUi2cy%2F44006DBkWAapHufcGHrV%2BR9wpXKOP%2BgMckzPnJ6kFSmYISInHZVtGMYnlC6DWGf7nfqeTsb7EnF08aXRgNW1bcU%2FZrRJYvrBrEPYe8lZ6Yq4lvqTjr5nB9nlzjvJlXcD%2FNv68GKuri8fk8c1ryRWmqZ3pIee9Ue%2B%2F4oDTAUQB1cvryi7hkQta9YxZsDj80gCbIRX1%2BVKzY17XPcA3D2G1fUo%2FX6Sl6hLvt2Ot7LPvadqFsD%2BCcFsQxR5OV161X%2F01RegKqIqUiUdHa4Nkk2jl09u8HkPnwYJBGBzX2jh%2B%2BQ4lnqbhS3MKZaUiuj%2BW6XOMQ1IYxH2QqBWefH5rN0AUQA39ypNFiT9bSv13LfOi33w1Zl3iBYDUEyfcoiBgCyfGjBlWUQP%2FWEnMTB0SHG8YNY2LgSCVGKwP6tTZk%2FUGTH8PZCrL1RyeTQLodt4Zd0I4eRoVYMh3ZTTLFxMoOnQr6MJRs4D%2FdID6B5tuLSRVk4EBiUYHriKvo1P6qGylVG6aM93xySL%2FF%2Fn8POiRGW5skUHIfdxTL6c55Fcool1cVzZ1lR2WDMMOPVsRLzyKUfW5trbY03GAiRacfNmtSXM60CLWLzqKAgMJLw3b4GOqUB5urBA2Sj%2BSRMZAqXNuastqwZfZ244Xh2oI1Ky0k9baPI3Uegzt9km9rl7sBENywJVSdECjyIubllHIfJWOESf%2BzcH8Ret2XklYkotgtzADeZrHcgo9GaMEJtktFN1xxcBZiaDMrIZJQ5ZoqRWJZo%2FwoNsxBFKvtZKJ7Zh16vFBhgvu2Sn49fHXVXajNxySvRsPshEfYPeJ0pnw7ujxB%2FJGIVRJwq&X-Amz-Signature=36ef536ab81a5540c1d087e023953ef2ba45ea8aa29dce190abb8dca5e7af2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
