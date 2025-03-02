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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPYTSETL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTzgJaA%2B%2BBHZ4%2BbHv52eV%2FIVDtl%2BKN5lWt9kW8MDewkAIgK8SiFhHXCCOGlcEZ2qBywCh4rI124rSQR3QHxH9138MqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfwWhZMHt%2FTjBJ31SrcAyP%2BbOG39WVHtvgx7aOl35yYdPihlV%2BXdf8WvsjsVzNk9cCqfOOF7GjLentKTMXUKj%2BaSbEqMIBtBC%2F7Q2Z%2BY9dnanzaI3ytQdyqiIXJhOJ5jmXAFXDnlDN0MYM5ZgVyOfctfNX9zmlMnnIbQ80oIAbtotBynHRZejeUyld2O6DKnRvc3V9ByCIYAaXCNxp7nXeIZ9PqCqS3%2Faf3VPPoPc921xVfmRuuqep%2F1%2B%2B2pzdXpcReNnnE3VT2SwUVdPQxJIaLc4AAqRu%2FZdoXP56FJwS4TKQdr08QyWYBcp0z1raf5ryGcX5aNZFPYkfWsw2Z5Fh3LZoBLVZi2hNoXJVA1mxF9rVcADA4ES88qDCke%2BTqMSw8%2BPh%2BWXuBu19UHxTGzXVvAu3C0f5gNvgKUpqOMU31XVOCsXpV1EcOpKyWw3b%2B2JCE6fNx2MoYvikyOvTzlTv6%2BGCACWjKZBoom%2F8Nr0xI6gWV8A30MoiWYGTQzPKHPqeDSBX37MMm%2Fru1L11Y98T%2FGcS%2F%2FE%2BzEi5u2Qlx%2BSpGcSV4gqgwRXSOFNPPWUKCI4BxsAVdt5wlXDhPmOvFacExsqoUJO9%2F6DXGDLPB0O0yk%2BU4Ec%2B0inmexqTBNSoIJHD0K%2Fzzd077TgGCMOGlk74GOqUBsHKYTjGBmzMuhwdCzogOLJ4usqFCUw99r69LVCc3Rt9IoppyLEAFmV63Ybh%2FNYeag0jWPtEuxfD6Ctb5QuKlQJ2DNDyFoUzLxcXywEOhTHIHnPx7bTYnmWbSRuaiVOozw%2BfvD54H5hWNYJuTUT1%2BttLJSRy2nih289IByFQrJviXpRDsrrFFDAfANAHZttvYp819G9Z2C2%2B6DZUG%2FxKMCxFJT2CW&X-Amz-Signature=eb2fc32640df6a1c06e6e537e9036120f0c6316a0b6e8eb27416f8aa4a7bb04c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY6OLBO4%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyhRhAiyvTfCY6je7E9suPzPKRvQavPgifQ4MGYv7w8AiEA5J3cLU9Rv9sk0Bnc3bpRQy1mj3X85ko1Qhzu%2B7Fgz%2FoqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiwR73gwxWPwOrRgCrcA0vF23wIEm4kQO9tf62cGDOvEwYcqGl2AQTRqaMmwnlbs%2FtnVp8vkRdbrGd6utmBjzQblb4x0jBujtlRCv%2FWDMYVeMrBAMJsoia7qnQm%2BqSrJj2IgD45KrQRzENEt2CbPRpr5mmbdQu6AMrdoUV487LnT4gduYGfSx%2Fp2IBtxvE%2BxZWLadoYjEkBCbbTO2Su9oX5HVStezWKyTwCL5jyCjPVqsjol3%2FVdk07Sx7mvWwjV6d39cDKlwLakExSNdVE0aZ2PL35v8%2F60hp0WP3IY2ElqQ%2FbvP9tI06qsGLJhjmNxIVweR2HICGXcIohK0wppUZ%2FZr6EeK0koI32ULxON%2BVrXpxb1v74kecipIiapXeoZagoKbaLdeCEOJjf%2BKOCOW80dHf6dqQZa%2BMOf%2BKABKZuOMyGDKUb2Sa%2BMJRjalxcbL96zgbDbpNh%2BzMQvBfHHSWVAjwnHjK%2BkuqR9ih0c%2Fdl81hHJSQvdO4MFdBvtdYFHbXWJDUP2PWcm4m%2BqePWvfHaymD6PgAYxrcTEDAXhOXWINs8UKo5CkY650dn2vJXW0GdroNMieocZZ6UgXIlsq4TRHmk%2B7O9gW%2BRfkCSVEFXpjT6gVsK9MqfIP4%2BwZMeZN%2FxITDri%2BEhA0CjMIqmk74GOqUBsy8gi%2B9EfYIw%2BtDcStDW61SfmdGlRCVe%2FsA33vSSfXkCrE2VnfqdE598wQ%2BDJBjzXAsweDY5uUlu46Jgxx%2FyEcrPcqF81gYTLRh34B9t%2F9KDQgI22%2B02rTIiv8M4zeCpgPmJ2ABbXJ4zxqv6e8HeNIwx2F%2FsASraaAmwNeiAegy5qzPGNH29P07gavCUn2PybgdZgSSutIXPqYPtgDQzfHtPfvCD&X-Amz-Signature=c11e097b7a97f9a125dacad052dae0967c29bab58132223f98f039e009ecb9d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
