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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCW5TLJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE1F9X2S0NmqRVxj0m2sOJ5iXo7ykGeKToiNGRTNTNSrAiBFX8abIMLX4RhTbozfWmaH3SY5cR%2Bzy1BVvn4qzH0Q3SqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJQ0%2F7DywjNhehbEtKtwDc%2F523wXP6fGg%2B%2BpMTzAMsrzymnPjXUYCkz5jurUT0exLae0r00hnYC0F1%2BnE7jk6hVUi5YuNe%2FPJy%2FxpH7TQ0sf%2F7PwGR5IOQzXoUG%2FwuxD4VIxXW1ieFhrRawurD7NT2sOE%2FIht86AHVIO4pGCno1hXi7irqcChVgxlHFPh2v9ChReNGwM4onN4tI3sSIKLfGrNGbuS9aXDeiQr1l7JQqeewKGQPmPTtGYGP5OKPgj7B9uISp%2Bt%2BgoLuMUvPGepPdJIgfRBT5urlDymACAQYw3St3%2F41LI1XVYd%2B4MpZReyHJLfxzX%2B0ONurSLfbc90H%2FX7BcECINct17ghli6qc%2FVHPJcGXCR3bl8FXbAObSycZUeBeDVqTeRk0N3vx13Nl%2BhYTM6ZvNE2QwGVNAY57aIzLSDX2P9BW%2F%2FtmzueBgs%2FxI8yT1fy0uSNADtGFlvlCVdUyEgWUPgHmqrWHo2pJ6EVCfREys0OCEINkllt2VXdRv3w4viXmasfPE7hxecMMk4gyz4MYCf9Zr6TNQc2RWfk0wVoCbDs5rMh3tnPiseZAAQ1p94RisTU9xdy7VktXc5schHwVmyzjfTmDCfLzB5fXWSZMJyleuW9uDq2YmQoOV8PLOOcBiTAo1cwurCFvgY6pgGBG0%2BweulHYOG%2B91TND0aiRjJguTB3cpISVDQBZDgLRuFhsAJRNdh%2FlF06Cn0yJSNgwpx3BY4f5%2BGefB8GU5fKo5hU7STA6B6sJoybx9LAIGYQGnALD5%2FOvy6iPBDwrZIy5cl2SB8%2F24XresPoKWDxfu7ChRiHCEF8iNij5b2mNIQNed9Uw7MWM49p%2FUMANLhgCSXHA2jYu9RvLiQDm8mdUySYQxco&X-Amz-Signature=c18693159ef2f3ae44a0391e9fe6997e3a0897fca6d702419140f0d73d454b15&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGBITWN%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIAlPoQ4XK9ToQ3mpzKKJiF2Ga%2BPPKmpN1g%2Fb3IrgSUdcAiAxuEtOd35c65IL%2FRRZYM9vwI0UPWyiHvGI4yVlVsW8GyqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLCQXk7F8XYOsI08HKtwD1eQ14Tlt1L6Ra8%2FWMY3rO3p%2FoGu0ckIlHbn444OdOp%2Fw9YTySMq2fMfWT5%2B3WD0pBU0oi1t4spmySSgbkOQ1bqXG8bRIIc0dQ3%2BctenuJNTir2Poajb%2FSJb8fAGmlFobkvNnBSIPQIY4%2FiVBcPzaxEDeAU0RGDri%2BLhoN0I6RTd%2BQvdjUlQcR7dXXrrkCsGb5yX3ODqPoSuVmxN1tvSVUlcngkexW0XXyiEZPyPUawEZg9ntv26LP%2BUrzZ5eOKJnMdCwRg3Nfh3B9MmnbKIOuagH7nfipFyRKesma%2BnEppT5eN4d1tlHkMMTtzJ9n57pzd4Zthg%2BnuP%2FRbargD%2BQ823bqVcsW5h%2B9WMRrJBw43Mfl2ChkuCPJJ49fobfKSMcSaRbu7mbQ3r1RDNKWaxCgKBXa%2BFgP1891LKcQlgHy3zPkE5HFCQ8S8ShDPodUf6dzLE5G9RZV4IGBJGOwPevtRW89lVerYQ74sQYgekOC63sCocE%2B64%2FA0PoqSyWCB1LYyISyi4BKBFWeQO5CBTKS4ZDwYWR40nsADSG8h9FGGKiSpm98PnToUO6%2BziqcSe1rZVFmhH%2F%2BbVq4%2BiJc897IrBoi4BJJgFJoBju1Q1%2B5Il%2FsK5AX%2F19SNPEIsgwurCFvgY6pgGVWXSkLPRyEol4DUvacLg%2F0zHjkXZ8g8lIvCUmc0yUzF39Xy3aqXUbQtuXWoHiS71ipZ8U5BhhXMOzVxeoRKSKqqBlpJn0w6sszpPqzsjroNs5AElOABK8gbl5IfjrWsaYDMH%2BvWGnrQK2y%2BG%2FEtQo4gwqgoQHe5fi0H20XCC99Ey1Aq0q%2BBVuv7HyfQNtuGneNtDuXzh87503vTVbIGtWDO62sFBs&X-Amz-Signature=b3c5421a2663a37b9a84cebb8cf631c11ac894aec0ec41da5a5771c553c89b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
