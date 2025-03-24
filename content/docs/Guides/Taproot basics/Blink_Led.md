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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663SMR32Z%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3fETNTorNH8kCsL4TzkSoExEnBP89VnttD22%2BpMkDDAiEA7BCZs4gmsbWwMUlduGi2BCc78jmAB6Yas2q1aay13E0qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBTEw2%2BOdL8w2NojUSrcA2DklQIF62o6492qwCobNirqXTdPV9qr%2FdU0%2F4zrWW8uQ0Fu%2FcpAmtQcGIOIqQjVWHnl9%2F7W6OAft%2BJUVHiyKzonLI6Mx7N99mvj%2BPYNQIy38XqM3MzCyMVXCnBmiujk7G992txK8kO0JZJyhmlNTQ4yFPsO7%2FNYOqkzluWImvYPGP66BWkdbj%2FFr4wTXewECWNozArf3AZHmlzK%2F1vXVFcL4avazah0WhTlBQCgPsrcHEgJTg88hDJ1FGB8ncnMPgWOU3XhP%2Bg1ERsFfhQdWdbXmo%2B6GhrUYdmv7cuj4c4cTbB1Ds2pfMLESIsm03AixcFiql6AeOwMMXIUt%2BloBH3U3kWOUn8xu3c1oSnbwSOdiGdEEolBfEWEamxKgiogkoQbDYD5lc4BXRVc14rxTxcaQDJ7VzsWoozCMmTNIdJ5j92DLcPNQwHhgwXqqmi14qjWrpzcWJnsixYkJlbw0oBbbCi4zuZERbFqZw%2BgBz4yvBg9mPvP3Y4pMyOOppL%2FMveuQj%2BirL4d36pxV%2Ftbhrb6XRcz4NOhoBEs6cEUhqe8rpjcFf3qD85psymqbm4Q54kzk8u09CfN9Hf8kQlk08hz9lUXnlj7c3vylz3N6nZs%2BVSGbCo1FUewQ%2F4NMIWxgr8GOqUBqjWern5N0m8U%2FDSU8jOmE2MIH%2BGlxdI%2BdZUGGAAq1bi%2FTyYyMrp3Kj7hLUgJUKlvoXPw6Ftt1jhUzO35EPutmP7Ixwx1IhlOForzMTguaisyg%2BgFzh5V9QWGqc9GRSWvwY46VM2rpA3NLazLIK8GlSqRdH892xAI%2BekWBNvH4lSSGXtqm09oPHZh6UWHg0RQINplLg1tQciab71EyM3MQbkHVMwx&X-Amz-Signature=3351aa09141e6ba7248e7b8076314f85a4cc0b8508a2503d4fdcb6bfbce5a0b2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPUEQ4S6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T004004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDVOWoh28ShOyDPDiKQvWOycniJ0qi2vZ8jAh%2F1ulLuyAiEA2UBaOriMIRTYXq3rSNpbNVNK6S%2B5ll7KCDrS%2BmZ2ATkqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHU8Z1pSef8mF7l6ircA2EXSJNhsl3a8Skhh2v%2F25t7kWEBEEvPUpBwc%2BP2hsrCt1Wc9wY8bBxxPBT3qBr8IlKMejSp%2FFAgs4IfuGyu3r%2FIck7eUtt9A8owhDLndrt9RqDyPnKga6oZ49xFpOm1PKsGmPyaSst1XD%2Bq5BhfbFQwLqS1uvaELhzyojX6%2FLzQ7mm0jcbkR7C7%2FrUtFl%2FUU%2BJQo1DpK5SaZlsHFRIT1%2BpWHiY1sQ5jFWYHD1x78v5fPJ%2BKRAhYt6V8oRd6RtTTHwQLIPRlR8DU8jxVMsSKDUzoksexn%2FYTzxeGgDU7ka7s0UuBM%2BQHyQku3cPDb2N9Eazy5FWbfrP2UzZ5uR7U1isXwVUc8XPpB6%2BsvBXmY8q7K%2BbvaFhYiyKrbQfcx6KSTNFTBivqLEktdAeIPdaB11UZbjEer7KIz%2BiNTcRPw6Q1J0dxxOUqELILqbrDP7yHpJt760%2BqUVubLWKVfE%2BisWtUHm1GisAepjriVjdwLTzjp67d0HaLJyoFEMReiggwpTOShRbMeIKcOhlMTiyeKBPtkCUjhfQaJ2S3DToMhu4hN1j2lvr5yKE%2Bu9vXjYx9LPxcKLZDW2UWPmfqgCQD0e0ndharolKSshH4Ob8oomBA9ESkv6TlGN2PHZAZMNawgr8GOqUBm%2F5w3dkgf3LsbwCjMYeVPPBm%2FkilSiNcAvkRy9mxE4D4BW38%2BnngzuiiMJ2ZhhCfyiVtMsptKBy3DDSY8dGlEcEGQHoPeDcmFxFRbMgYtqQYpmWpyYXznWnjVHuRlosMk5mOOdddV17XbbvJU6W4BXCz%2FguTPPFCLJzY0fjTRroAm78t59GleeXdAEx%2BC9O%2FCyUb45zYEzB84E5LJNiyjYy65Ks6&X-Amz-Signature=b4def2a5b4edaaee483ccac94f158f232b4c2ff41cb5bf2d830a24beafd11b21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
