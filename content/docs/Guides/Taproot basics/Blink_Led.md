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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTWJNJA2%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBDLx7OiTJJimQJbpDT%2BnrlhKX168vCAnLn5ctNplhHQIhAIAgh8p8PnCdnSdRSTDig2RNq2u2maYroOdkIiVlWyVaKv8DCDkQABoMNjM3NDIzMTgzODA1IgwqgBjzN7QrwaX2U3cq3AMnWBa2mob8icEOnklresDYChQESYWmDiJf225m75JqZh5qmi3JCgNhuddGBIKwWt8Ho7fJSzGeyr3DAYfHRqlDuQFtE29nYStDeWxeZYpCzqVzVBfFxrSmWEO7nNw8tII8MaUAAkHHnhwwOZSFvrqGdcQWhOHAZEQ476bnPXs6qZUwmork4tB8L7JlY6CPT2EL1HceNR9DRxk5DB2d4m%2B98TPvpEdjcNL%2B4HS7bhHXvdjlmqqa793jhsgEHl%2Fm5UN03fvj%2FT8HqNv9%2BTQ0uay5FrQeQtDg%2BPHekJvmGN1HdTWcZWKBMbdX6Y2tjXwaoKlx7IXIeInqqZ4BaTlZ%2Bm3cGQ4V4ELwu9oTlq%2F8IzBVEBY3A43hYymDTar1Gg6Dg%2BstNjLB0YRPTQC7Q1Cx0Lb96cVI3gSiZMYt8xjfi2g0Fo26Mj1zZ7haw026Mbv6DuIHzZIv0n%2Bn%2F7iqne6%2FtlFo7ZzOxnl8DbwnAQovxASmH0%2Bm69e%2Bp30cOCzP2BsuTqff90w06Rb4iu1No0qO8HyYpY8Uh%2FW%2BUht1US5sh5ajnpwCtkhWSO%2BMEFjAm%2FjnMZMfpwNHmyrHzTnX%2Fp%2FqOeWKAOv2qsQRv1tvnF2PtwCMsceQbCkfxUKPHHtkBTC3%2FZnBBjqkAeZwpaZSl2p8wfQm0a8UOwiTA2ZXim3cxjSBtP3QTQNmbYyURUtdkq72GcXcFCIYpCc14eeszJi4DWGKd9muFtabDVupEAChBCVRrU%2FczylZBP5%2BMIGeQ4GJ3tVfsuIDFjcQfGFhFgeqpCyLLBy5JE%2FWKrO5TMxjG7dM5sOM%2Bge3txOAy2MmdhXrWs1JY92XvJT1O9WhE2K%2FrX8O%2F5XlwcicQ9Vd&X-Amz-Signature=b740cd34080a82d6b149f3c2e665c3eaa66079437f0e688982217d3bc0becec1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MJA6KN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAaHCgiGJ8%2Fq3w%2FHZeGyTtakakyxZ51fLYvlMg5KopSQAiB4KzcZy%2Fz83abhjuLBMOr%2Biy%2BNJI9mDRyTk7%2Bvdvm%2BHyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMlNbzOEcEvaUC7sLPKtwDfT3uvpNtAeiG%2BFeoSAkgx1F5w4%2F5e8spgo%2B8XtrkKOm7lu%2BoZlhVuvPTN%2BGGkiSC1PZHsIhAmPbRJHf%2FIozzeUgidKcjn6exI6f1tyjU5OIO9sSviHLLAiaYa1w3zrhOKwJfkgOwjV2sI%2Fetb%2Bvhv3jqQd07E02sV48ZxsAN2510SdBN2nA%2FSjUkAAlE1INkXkpwEfhV4%2FP9uDenvMEWntYgjkHQlNcmCYyNmUiYjeurKswBSSsw1MEFG285Qb%2Bh327wqUWlamPl004jpkVUjbIhOcjqUZOQOkd6HJ6euC1Iex3eH4xWttqZoE5eTWaVU96oE4vz2w1Sk%2FKgS0zP%2Bn68pZvkGC2e3iCHC4WY2KDiWaHlbuqkOVcTKOCiStJ1D0upBxQbFiDUgCq53j61hqwyRF5%2FSE2LsKkz71SvmMx0fI%2B2po839ODtUfHZVJEnKWJ1WyeBV4qHDLmfQRfARw%2FW8CBgX4An%2FaooQScVeRTGb%2F4MfKGTJM%2B6mWTmZyN9QNasvtxoybjkG%2FQ4XJKc4XCwkjHS%2BUPfVgyBM87sGnRjNeTBfNtqFfr%2FQjO13Ndkw4a0M370YrI77avvox9IkrlcRjWaiz49zUY6OAmhOOY62h8D3XRbzPAEbtEw7v2ZwQY6pgHryDlj84Ss2gk7I4grtNnpFyKUHbdEs2KLT0eV5u7ZptUvsSii1m1udqAPtMu5QQagCYu7qjXrLOZWrL2Dt85vozyd1MmkNzVYcxObp2xMjB3jf5hE8ZHnxF7XxhSZwuDYezTEzjSfvS8Y84lJ61brhtk3goV5jXyiKg0IIGxe6nkTHvPtiPDUKZQM7KfcgQ8HnohMd0c0Gpu6rBvyJ5eVxtymaWdG&X-Amz-Signature=c849d7563d7b97ad7dfc50b8b6051ef27fb569f4ce18643368fd3627abb1eba4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
