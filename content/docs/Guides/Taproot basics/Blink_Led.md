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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BEUSZPO%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIW2%2B%2BYXdKWbzvInZP4q0yaMPUxNeqnvty69isJ2P5sgIgOy86fGKiYqLm72A1rN5cTUhyReL%2BOBa7120UOQ1TYaMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEYYRDA2sqmegbQ1CrcAz533W2LGM6pH4f4xOh6ctWCcZ2pw4yAc3wRLJtZxN%2FrVJgcnTImr2ReKY9T2Vmc15f9VV9zGZEQ490kGNNiS9xLxe37gr24V4cDXiEoAbrR9U9LBjIp2dpD1R5RKOAsEzhfI3fcjXDDHlIRPHr8e2nra0GnKNafqOuhLQNppFFA%2BLPb3TdafoPUbdKmZmbSsaIbJH%2FEyHyCrWhnmGXL58m9znQyfmkGLqL%2BNPShoH%2B84JIQcp5TOr057Z64MxZsLAlYPebmM9TXyKs9Bj%2BoW01xEf%2FOWdKzvnT5MA4uhW2kpOlaDR%2F%2BFe1DRTWFnjo1Z%2FHQ03zA8F7or4FNrXgt7qBAxCAtdXoJzKcghlLXiyoQgDTiKfh6riQEs1jkM9Wxc3yyqUViGFMA9Dak7XsQcs0Zw1YGuXa1FmOC2uOBFaw%2Fjmvll5OOfXbC9tilE%2BwkoswlxT6sR557BlJCnhweFk%2B3ytyYzhoA9WFfQ5k0%2FjY1tJBl9lG2rE37lUy6dHnuQOyEZNSnE2PWBPbjlyHHSyRyGg5J9cshp57wGBdv2uSn1hXm6c45nYmMclKPlpgTV6U6DaNr5NQV7MhS66tkcyaqY7QpfLoGQo%2FVuIP1BKFePkse1wPXpmtfgcwBMMHX270GOqUBrvKdzkuQNVs9NLOTVap4PIUK%2FOPEytf0t6WKuN7%2FvbqU%2F%2Bt0szKPHMOKIXpRoY7xqTQ9Bqm3K0AhEMsd8WrCw4UUfzOBPqBCR29ZBzSt3p6HIcEYllIHPVbjycYZZ0QothNIGcWo8SRVAYhhN0S9%2BUfp695NO%2BQi243lCbneh3nZ1O3gOGZKVCDmO54DOoM3P1BQfp%2FdB%2F589EEszbFQnAnWKcWN&X-Amz-Signature=25ad772eeff213bc18ed882bea64a5b4d5b34ccfdd9957f8c96e4558fb3252e2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TMFI4XB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe5cTF4TH0aEVrYEnKfmMrIl%2BdUhoY0kGMzu%2Fuu64XxwIhAPRLnNN8hDaNlixZiG59zRjZbJt8jdOl%2FGsjl2rBLuMuKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwExo%2FhjoiUrq4v4pcq3AMHaa7wmlYMi6o73mEWOpxPHNrMECNxCu4xENd4xZtwNlfxu9p4m%2FJCIqol53sJ058qkqgZu5c0m5KhSoQnNRky2nQD0NtUvKiPdzDe8i5mM92fUt82QaBW1HRdHSwbcSeMza34jxPl7i7wpPTQXCrp2M5oQmoljd%2FpkpIVdr4BZgrW8nuPoxokR7xnz%2BwpLpRepppzoOF7FQanYPGGfDGn0gm9TuXbmHL8Lgtm98mJ%2BcHqB3JJXFcXcuoPnnRCOXBm8VZKXxMJfEbqCTeoCTx1C81MyZ6IFipCwCNZlin5liiQAzHIRBGrwTbCgLgHwIYqBcYth%2BopmtF8lphL5idFCJNR6BOq3VaE5JHjr7GLhdbLQ6k60QPfTG2xiOWOim6H1Iikci9PhE3NE%2BelrFMmx8Cp83VwQpZLRvNsQ2dteVOM9fnwUBCXHo0mOm2xy%2BpgDTyjhY0eUjhwHCSCNZx0X76H6wLc80B%2BN%2Fp79i8RvrhbDZICcDrUF2OZXnmiFScl9g1nPfhivWlLtWrr%2BmcoTveZIYbcRO47crouaxC25XhCJvX3GPj%2FosFeCPsD43522JAuNP9Ps1TLzkiDNdGZ23%2BNNjLNW5BGJpvcraFxvyvB9U5yRG75UrTwVjC52Nu9BjqkAWKrswy%2BsAIgVyMxo9ZRJgw7URx9Ow9UxcoIeoFaEK%2BkwgBhPoTiToVtHEtrIkbCVmZ5GTN%2FLpJWGWom52Sp8TqgClJWZB3muNpYMd19ZQTSd9SxVs9EUazpt6NPVS94jhONdSvFY%2BLffGwGj2BpY3ODZXwiG3nvCFjDtl8A7i9c3l0DgRXZyLvwv%2FLuyMdbptxF%2F51jjGvNyCeFbGTYraHYoGOT&X-Amz-Signature=90eceb7c4870ef3004ff5aac1c19639969685b8ca1fec4e7b3cf6cad07fd3597&X-Amz-SignedHeaders=host&x-id=GetObject)

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
