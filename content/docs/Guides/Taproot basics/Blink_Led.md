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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQMUIABG%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK94bSa1QNy6NGuvUFpKfUDv7ECcy1%2FMq%2FgIDxC%2F0C1AIgSjRmEGnAukagQ3UFkOzl5NPXAnOrTN5vtpxqasIS5swq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDChORkkuqkeiX%2FIg3CrcA71hQtXkmWjS6%2FoixJH%2FkjemXNm9nz3pSVlSXN5aCY4CTmjI%2BNXwq7EqGazCDAENWapuTLsY3EYzYp2hqgB5Aybh4hXYM%2FeYfa6JWQXb%2B1xaCy6YhXQMr%2FpDUFKLboZSCN9MhoAK9kQNUhckgGWdxP3wLoULm399u782VIDEGSgkn31vkKC%2F5Z0Hjp3yKbHbUOIumMEg0IlkkamZMsCiAUwotxZOd71sjCg7D3Z2XCDwdbgd4TXvGuHf7fErcXO0Hjln%2B6FN4GD3H1G1DTS6mSNUl4cCwLctzbA1Eq4WBG8XWSh8m8cJmQC6hZsQYblgPIbnn83OczNFARL0YccF3vZXA1PD%2FfeHDCi58dt6jnnwoLrRMZLKDHLFUyQiNJon8wpZjbX6BUzCPTeaIVZKMjLkYunHp2tMqlYlPS%2FgzEnQqPQ%2FfiGA36zFZNpI0QawtoshrgrZKgHJ5Q2L4EcgbbXitCkYf9SNxR6g4bUCn4%2FMzLcHytQ1qjnW7IerZDmly%2F1YHI0xwEFRFUUOvCQoBUeJn4xVoNPhaBCO0mH%2FZCGsNaU3QHsUUahKuFDGxIo5gkXhOhyxJ8Svp1MRzbxykCYvOhj7BQzGZQvjtkKbRepRcKG40tlxLwVHqhVXMOCb%2BL8GOqUBfQ%2Fh%2BEhOjREu072jdArTQOEVWXbgH3YGoT2o81BOXDrnCO0er7tuHKJtqmoXvgVIajtC%2Bn%2B30tUc80%2BEwsVZELzvIVwofOvzyuLy2pBNu4Qv6HTdb3878%2Fd%2BtZWleG5zmwk%2FHzrOF1M0yUKbpofsNr8%2Fp7ReqRhsYxhxufJNjVvuA6QD21ZodKwDibBprwYJ0WMBpuvLFCPiQaigSXzee6dy%2Bt4Q&X-Amz-Signature=af3ca51d663317319be693c285aa230a95a6db9e9349ea04b3cd5b3c09c8d560&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2C7X3R%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpuar2yrxCO6mvdm%2BBo%2FNLDZte5T0pg%2FOxfpncDYew2AiBl4DStPAR0JjipdXPxwXWvDqBFjKy5z%2FN1ou4hZeo59Sr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM56MKrgxmFFemnpk0KtwDc%2BLfJo3FhlgflCe1deRjwepPcnWmHwRBJevRcKbTA8weikNhlMcPOVFXd3TbduO5tkl%2FXaKfzIkfkvJxOOwEcySj%2F%2B9NU6R6vIaRat%2BWHMIyqkKGy5lUf4LD4S%2Bp2C5emIK4x51%2BO79eAcA8pD68oFo6D4p3JDMg77mGc0V4VFaKRu4LLRD4Jxlc8%2B9QIyIP8K%2Bm8GA5n%2B8uaYV2kja64QbNCUsZ4Db0nyxSZM3b%2Fe1E0fdb90YLfBMjtwoxFdECcsEDgpOrJ%2FsY2Bv%2FBB7GtPf7S8Cu4lM%2Bxrd945OL4kTFU%2FgtiLtP9jtkrrAJHUdNv6m%2FWMdD9LnefkKpHV5ObSEyHmFy6c6njwF6NVqYhU7sTRIncKa899iUx%2FnqMNmMFjbdwBi7z9HFLfcP5M%2Bik2KslBlZvJ8YtR8Om5nRteEX5BmvczyAN6x4JLAnNd4T1Tf6jdYqPbYj23CUkjJL9ocY3eVjiVnXVHakRKv2%2F%2BZmU6LCoY3k%2FUysjs54dhG%2BysypOhW%2B%2FwrXx6Gh5OhjdE6cJXZNTcG6aDFWR3piwEhyS1ZaUFGEDYPQs4N6u9tb4nKIBwmiRW%2BMtTgOEnsHgS6j6Q6nUIlMsWyte4kwTv%2BAYm4ZR55SBxBpT5gwgpv4vwY6pgEVofvUUFSRbXaWAkhu1zMc3HsmGAEhYQtf38NhthPJEuVZ1IQlnwbO6q2uTrBZFQipb3hTzHSngAvwuSbt7473HxUzJ6S5QymL%2FlhKG9sHAGO2hl06%2BO4%2Bwhydh2hRZLjLxOPkpWdoSBayNeZjooOjziWVFRi1n%2FA4P2lwPXvZSaw9Ohfbv8lEePmXADa8XgPVoy0XsNcvxfYD1D5m0ZpElhQHYNfD&X-Amz-Signature=d3982872b0a07d9929cf17124de2015cd6f32d5259aa096a2495620592d997f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
