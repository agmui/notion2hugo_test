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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YRRCQ5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9dtTfiu%2B0yA0REHeneDw5Wyps4TvlAIO1EzxOldIGNAIhAO0rdopfgkk6x3ghbLeWkWYc9HMufkp10hw%2B%2FPFlkgj9KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8VFfpJeZddqbU5Vwq3ANPAJGZ4Dzc%2BZStbeYoiq2W500G0mrFlNPQQLVdf34ibJk4TJaNTEeqPcA4RVLvMBCx%2Fz3nNCxqwmKnB2ELqvPZ%2Fww9IiSqLlub%2FC7OiNrWnYU3rMfsG%2BX4k%2BhgOKR1coTN3Am%2BHdKBjnzI%2F5Mb3Cu0X3FVIQjep3S7lWz%2BfMpjj8PSXQOH14hexY3MiTwTRMeSzS%2FwIDquQTTi15oMBvLsqKKG%2BhLutAuurwL%2Bky%2Bxl3sHIJKbOW50Ui2dwB8csDwhqptQ5mktZUpNyPejnWsGkXgSkOzX%2FBw3dcVXXGjOxlMVm%2Bfnzy7dZwcTOR1Zu67iM1qFNvIBnaTGGOLCNSDO1z9jBh3jvQBvnBHT8a0g7aee4120vr0oqlhA8AoZhN5tNgOcRuBpS3S7hNtTrQhbzwSKAZ09z0ilmyaGnevMWk2XY7WZnOGL1aSkddGaQaY3BNJBy8GiCKzI8WxJHSrwNrUUK%2BIVbKNQIf4RRcvjPRmrq%2F3TsGk1joY4EuHC%2F7qpvwzgRZh6tL15sbWH2XftUEh4a%2BwhzXLBAA1HjPYcJ1cPxIheEtY%2BMlPb1Vojjy7Kl1DVAWbVLzWOrXQVji%2Fr%2Bu1r3bCjQhGYY3u4dGDTGB8AQjFK7mVI%2BU6BzTCQga%2FEBjqkAXrsMRldS0KCvTW7vRsVbuZKeW2J9uL1nmiq9e44jghcu6YcuGtPKFAh6mJdEihLSsLM70XhTbjM6q5hCBquVlcCgZhirRpsVibWjam7pQMqU4YQCMbnnPu8wpHF3r1Cdlu5mUPaSxMaBcVwj%2FwBxB2fVhBpRhl4NsjXhvj%2BAX8CDm%2FcZZLgXdseUTr8kUkPXibDUji0rfShPeu9rYTZXiP5YOnR&X-Amz-Signature=845d2d87464c9bb4039be522b90cd5dee61cf2b65f3af87a2eebc0f06f169114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCJIOXV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBT1Fvn56eif2x%2Bp9Gf7THNqu8N9NjkM5n5ij1w%2BCy2AiBALBHkyaxppYiXjEjesBC1rF935mb4eYYpK0dOITDNzCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbFMsjhdAX4hoIEO%2FKtwDtGp%2F2QFEJZCcN5yPpVXpgRMiZmhpMzzPGxOGm8%2FMVL5gqlzfAaj4nVhgO3gmzJwrVEdtg%2Fv%2Fs9AkHaPLvZw57g5O%2B%2FkLjvWTsC3YgmzewueQs9uvpq5XCRv0gw55O4cF2%2B6sBaHfKyT9%2F6w4gF44L5IlbuwPaZm7MMxgJsJ5Nd7a%2BnaSkgwsHAlRXksMN3IwUppad31%2B%2BUhYHtBopZtRoKL74tmc%2Bnlh6AJv4LJB%2FMUQwrOY%2BjpRmUnk9%2FCxqiXsQ1Rqx1jBaNGcyoq%2By0xmMh9Cmm66gbdhvOiAf4%2BEw4qYRlVmFBWBAt1mWhAXwZhIUuQn0zsguBY9KlHMga1K00C6H8BM57yCHiDFxmDF41iqv2cxE0GtMMz7GLcCZlT7z%2BRBHKDGFwOlonlGnzO8kBuuUkMi%2B1gINquM6hmPKF8HBE2CqH0Yp%2BOIB6DXSZrPRBTXs60eL%2BD00XeBoQAfq4eRYqaEGlTa%2Fmfd2TcGKS5UFutvC9DZo88p7mZWW0vKlqh9FEwEUDxdhxWkWvGiwBQNTmoC34VYGoKftnSt3AEyoBL8hyRYi5XQ870o3%2B8K09uTULA5SQvnzeP3YowRAOIQSr3H%2FlueGt4qnB%2F0FL8aA6bXH2L%2BNydCsIIw0YGvxAY6pgHz22wAnzQ4xxGc2KDJ4M6eEVV%2FrfxlNhFh05nHWQM98k32AfYimaCDEUZmzLSqEaagbAcfxN8rhcQYiizESD3e%2BuddM1LiPU2OzvCTUclNQ574haqaev%2Fs9%2Fqx7n7CL4Zz2XcloN6lcKSuxv3F9XAEOCtsyWsieQD8GTh%2Fm%2B3CPAhhK0yFJSmjdxl4XauSLGAepeh9thOPbKPU8yLVNLuL8m4AdBm9&X-Amz-Signature=b2bbbf0a46e5b23e4ece5dbbb806e3cd085cc990ad0be6dc6cd5f11b12bb575f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
