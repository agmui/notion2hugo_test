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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ALVVLVW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFwodBfjR%2Fcw9N9Qpi2Hd5vjCeivPHX7WSYRGAXlN4tFAiEA7xCMpnUv1zUMNJVd%2B%2FwA6IyaYWWkM0xSWJYosPjyRuUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGOIll%2B%2BhaGBfBRalyrcAw2nH2KMziSI8P2u6ID1dZkE48bp6O2%2B87CdaKWRDIfIsdBVvzZtqU%2Bz0OU0fhVdDWt9r5Lth1cX%2BLrUHjuFGlo91I4%2Fh3A1LzhKQ2LHJPV%2F%2BI%2BaEj8AIvm9hJoiirNARvPg1jwQvVauLR5h6i%2F9bjlsz97ybCQ8XiPRTkcqN8EHBNUgNAihbJIUlLuLkJ5AjJpcRNiELzZLxacxoHOp5m1woosYv9mvcE4%2FixzLxjQmwKPijqsSSuCdcoJ3T4AjE6E36LhlpzClJzNKea6SwM1j2%2BlsiOz64J3F42BiuPHhUKP7qsOdUubU3duYdBIQ2LWZZBgV5X4U9US5d1lN7HjMUACZMR02mqmAEw8L1x80K%2BoF8DAUf8%2F1EeD7nn7hNNgOFNler1QXBKczUS3OJCeBDot53VwLvMw%2FegtR5jq720MY%2Bzc203stTdKnSlKepikJQRxwuUxTkuOR33UsdwmpeSAm4hUMtvQbOcZQ3XkZ5gVJwpezV7Z7%2FDTgxNr1n0i6gtuDT5%2Fq2uCg1zkxxFmDJDR%2Bq5AxXkz1gQDykPKBqlmF8SbHnXj5tppixWmuQnN7cc64JMcjifbolNGhl4SyIptOpR9e8cjWvdn%2FZJooiBoIfvTMYwdmgYhiMO60hL4GOqUBy7BvzCfR5RJkRHcN0DTEygD9o7GWG48OgFaMV%2BHdkcx6EH%2B9lMvANma%2FEbp3QxmotE%2FbW%2Bpu6nRKD237byvMzW3P5V9w6%2B294qCG5jzUUWitNEphCr%2Bxpdjl8ZWbEDt6GCg%2BarwolsKkwpAdujd8HlRosFUds%2BOYX5k0%2BSe7yigOZJiQh65GXjhTRFRy%2BtC6aiDqYGcoIYZDzQ%2F1vv1ol4P0An78&X-Amz-Signature=3c064bba0e3fd98b245bbd467f1a3d67240016f963aa37122bc9463689c97448&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUQMHPK5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T021345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIHDsB%2Fmvl8SSABhwEzVgp91xb8rDkOO5zp8D1BXXKE7UAiAKsM2rIMCiA8kUf%2B%2BBL1XHAoHf%2FpFdO38l59tvpoBSfSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKNd5Um070FWX63lKtwDge%2BjvsUa%2FEnuhhtupgl8LKXm8Jbl8Cx1%2FhvO0PAN61Em0Oc4rAE2G03iGaX6pjs5UnBccXGf0YmbvCcHcUjmoirxV%2BZp53yo0FSnzx0HkFIUg108vo5zBowE%2FQuQxtCcTHFsnPpvivDsukHhbRBqEXX2uAmUsJnTr732PGTMnuOaicA6MYDlQTi6fYUY8LPGzsqn0PMKhu53RQQ7naNjeCv8LtyS%2FYi6vG1kB8gmAwyJtOyjku%2BHA%2B6CynhcCHgiB83YVzVjQgrpZVYRHg8xJruBxSOYTADFwa42Maj4JWnkvGEwSMpMbagNdhj8WsMgpfoUTV1BBUkFphmYql9R445tg9zMefgdnlgvvFLzh97KXmrLNL6UDWk%2BEzJZw1IWpTCXaw40pXjNwuilRG36j3YS1Wpp5EYYqDyD5T3MHsTHt54mYE5VeyG0b2%2FA5Mc97Q9eUM5FyFTAsC58HMcsRTgEBL0Ri44Ph2rfytgK8fWzLiZFd4S%2B8YTisSzhc3tWHyE%2FJwh%2Fb7zpVQbrhnjKyXAM0NEJM%2Fx0y528uSu7F%2BruTaAI8WiOvYlUHx%2BSAgD%2FnBe2vM0S85myMfGXppH1a%2BaU9dBg65gPhR3pcjRMVod3hFJaFpvYullXrB0wh7SEvgY6pgFr9micyetU01J8YdPNXzdldF7Me0rDtRWidwdsl9tp0lU7z3TPlPNIvGs2CykzZ5EMRArbSXTIeP9bBSuAyCr51IFfPQrrbszixVtO6nMYpNW%2FPkbj3ZsY1LBHkGB5cd1M2qIG0YInkcxfKpImtuA5txMvWgW9eEgAVKNlcSO%2Fzzqw0VXxSKgdWQHwy3bvDTruHJh9brF0AZpWzfszmYEy4UrJuXHE&X-Amz-Signature=a295cf7e0b67577b5ee2c805e034ed6e9a7178d658601e3b7ce9c4e2d780d107&X-Amz-SignedHeaders=host&x-id=GetObject)

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
