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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C47COWZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC7XA2xFO6RdEfY066%2ByKCHiKmY3IODG1IUX4eqDxYR0gIhAIpa%2BAcfIqac9k6MDRmomiGLoyOSPK0SeORROkcR9JHIKv8DCEwQABoMNjM3NDIzMTgzODA1IgyklXPJ%2Ff%2FhxcBBMBQq3APw9561GgG32JfJ0iJiUzpU7ZSM7nDvV6jmWHvEAeInyZ4OPtIu9XwWvnQZikSuIJj2qbttlZJVZ0Oe%2BtIrBdSMoNNCpPVbhjmT6IrAKUlf7PrwUZkBpnLM%2FoGtJlw3BRF3aUethqdvhU0m0uz1V94SLugot%2B3i0a4UCmdzE3rH%2F871I6QAZ5%2FHyDGaCV0nip%2BD1r8iNI3oztPNdRgV8oAaxYFXSz57%2BQ8qIiJjsq%2BAv1qAUguSYf9qnW74%2FRpDhUDHz0XF7TBAfGnw4vZLCBXYBz3Ga%2F5Vi%2BE30Xy4HU8%2FcRUDg5w9lwr4TzzIeFLzX24Pm2pnSJFH5RowV7GCcrXq7kQXZHcQSBd0i73EK9IZWP44qofmpco3HQLP%2FMoCBdQU9psTf59%2B6OOM3d2hT7hokrcqfGJoHM5TA3hBP6h2nvo9PwrBwwTqBj8x2sW5D7iR%2FVgHlyIIl073b10Om9pToQsAp9LaAibud4BURlpyGd1GkUhe2Td%2BzhAFnX3kKEj4nLk%2F8PGfbAJytblnDwr%2FZcAfyaDYflJ65cDxXqKL7BTG%2BQh57MR54hp2%2Fxp0DqixA67f8D2xgVyeBskws37U1BJLUA%2FJDpOFPMTr5LSiAKC6WGbL918VQu1OgTCNu8O9BjqkAaLCeEpj9JzKdrfEXUny2L0klRTLL3srb1yQUNvGEVA%2FAph2bOxxxVbQsy6fFOg2IhiAkmPIhDdrULSECLkdTdnIxmUXpU4bIw1BRAuULgTU7jUSejyq3eMLbwoRqECJ8lQH7FTEjXkgx24Ak3%2Fyh7JL84AgmlY6Po0ErU25k3teoiOhZvDZ8wzNzRwrseSzg2wrzCuc12wPlahVvHBAPWpI3JuV&X-Amz-Signature=b6c389f2923b62f9c21c3f0856abe034a2a58a7c4225ddefd92b72e3f7d99886&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWRRMSE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIADAqMtj92HvnoTxuiLqgt9pA5IIEk0KYTc2PgKxdcPvAiAG2peiI43ErRkQjWtjKIAfw8RNlkcsl1hb9Nyf7aMyUSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRMIKi6K9SdvMx25mKtwDCQac23LE82VRRei8bb5z5hM2ysm0LoMCoI5LvFlNuS3q7PNe0i4KcdIrAGtsWUOtwP3nXtduySB2LoV%2B3ydGM53k1wLuznJ2AiG1fo%2BdTKPBs7CHjequOKiJLEuq8ixO94FbPMqV0081iCBbXyX%2BUyVCqh9Mgjt8TBI7smCaFq63mRkDMLSTTz3ZamKqZqmBETeuNyGfXAlf%2BB4xiEXITInGth8fEFUiN964MnDMD11IdBr%2Fel7wVmFat0fMhjaLoc4zXwtkJswkoAFmCMKNmnpbNXgMw8llwOz9F7yhj4BQ3f6OJO3rUSAV5knD1Weoiu4Kl3vxKlFW6iTfq4enChLPjAhIKH12Zff9%2F6s4uBUkQXmoxuh72jqkBQgMlh2n4OvMLcD7rG7jrypswEgslZFfiLGnPYJhpfeRvZZtYgZCP9BbCJnJTK0J2fWSnqRF6CML96gguuzW%2F9ZXdTfblatlUsuhwEGL7d5kF%2BouKgiy8H7yWUzcgFMKRxj5JjiXM4uUSAVZ6tqIlzPv9%2BlmcdW1T8xdZjIucZIrGLIP2K5pcp3zmNG2ZatEd%2FX%2FACY9eUXUb2N3UPdidVFwEhnAqZCILhHEIfhFxt%2B2szS2bsP0M96CdWPs8GspxEgw3rrDvQY6pgFQT54or%2FELrMPKqrnQxEtkcNr%2FMtcLu10QedB8SMV3uHLHkRqmg5YyiNZ60GPcVgk5M1kBqh63S0U6fl1TuOo2Wp1KW2kLHwphPrscegtrUr5VqY77jDj9FLeFTkvT2lfzrBPsHxCUE4J%2FeT9x78ol%2Fu4Q7nxtdmNH3PXzG4Ig%2B7bHHvl%2FxRNXLNfKIqUi8f%2FO4%2F9NSFUz4F3blYHn5y6heSDzcI5R&X-Amz-Signature=460776df0a91b9c1ceaa4aaf5d26d35dd24b5ab1a782192d55d120b9dfdf6997&X-Amz-SignedHeaders=host&x-id=GetObject)

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
