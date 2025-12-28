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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WG5MOAS%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANktgqLdqiUXhjBCbAW3MYcCCy%2FBvJ2Px1mnsXz4GD0AiBJvDBTNN98os5hf0FOAIYfI6VLaNXErHNNvQm8HDR9tCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMsaMcmR6AOdJfpMWIKtwDInyW4mbC3dryN4HIiCe2GEDvXk5E3jrbY7l%2FJodJBccDL3As9CR4pI7upSaWuLpdjQ5GHCLJ53qnCRrxmqivYBATakMwdK%2BZiLyfF4fsopM8Da0TPVVwH0SgrNGQiqzepq6T7mNVH36CzSER978t0ymDQso%2B7zKgOtyQ5TzuYKST305SC0LB5Uw%2Bn6PmUm8GEycMlwyiXlQGCX%2BGnNpnuz2%2B5Io8BxMchvnGGFOILTxwTXxTUi%2B8jjTeafojcR1oznS21iedgXYFL4n1Wnc5ca%2Bne7FVRerlBlC7%2FrmktGt78zYHYB51Hb1dR8NQ7oPpfJvFFzu9ndm0BsaGaD3WsX1ubNgeOiq%2BSakyng5I9uEfFAdOQY5W1RnncTVO5a7HbrA%2FmW5rI2j4cXsSNK40%2F%2BgzoL65fxEi1GuCy8akJKrBzUpIAHcwVcop7%2FK8YIY%2B98M8r7kUn4DigKTxYsUVurd9PFHUHX50XO0AwG2kmF4G6fnSzUHX2wcYa1z2DJLgAasEPJ4jgMuaj16DBVvOteuH77Jg9PpeucFDXrLKbr0EtpCPsaSXyQz9UBPOPqov4CfWwTzn6xlvetJchSXnEXFFE17mLenVR24SSLoZeC8VwhoLJFcW0u1NVV8wpOjBygY6pgFPHuy%2Fsf%2Bl89mcNuWuAlNTBV2v%2FedJEXu%2FcJka3tdw75IqpRqgpq%2FeIB7gKCPrRVtxoKHvs4n9qE%2BMa%2B9jfv3%2BTOubolvgu%2BSKXYv0X%2F2kqFMlwRWFE0fyQgsNda%2FVpMtWQQ2SaxheVw8OdfCk8Ibl5EjtbPzAe1kUw10MJQ3UTDjwffYsbVjku9aeWvI%2FWGd%2F6ExrpFZ18wUFmySYHDS8K%2BVW21JS&X-Amz-Signature=dfd9f9b5a682c7b2a34b12acb8a8c3f616331907f121a1be12e7bbb9b8a949f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVG5GYE6%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrf2oXn7rynGNmGw4DyzofnSFy0zbEHRN6zEBknRCJ%2FAiAuDgbryd2LEmyNd3hHI3GOXjHa72Zm52ptrrNd7%2FMsSyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMu1KZjrH9W9%2FIZs8rKtwDnWChE0en2Kx7UP5CkBNpQ9imW2dEBRqsrlkEgr428jHwL5TLzedA%2BxCRVJum36Lovuhyc1RliGYAuvnH82%2FUCk%2Fv2OdSAOB9iQ3swOzKArmaaHU%2B%2F%2FNmuNsAuDsZsKmFy91K7rt5L5kW0B%2BOGbHEadVcfATMXUaUYRazAlFoF%2BPUUm7Aqx5LB2mJm8JVFkzJeb9Bue3%2FahSXLjFRXgiATiolXK3gOJDKtEeJNlJuXLQANKeDDcaGaNVkRkzT3Q41bC%2BWlYf7XGcf6Ogsl6SiYN3aLok6J6X9AvqJtMJ5Po5fTxEGVj2gkIsvVjrsMEsdoLdJ7SMt68ZMl0r1r2ASa5Re3FUuP5%2BIhu2FPM4kk6jKiYCaV6xTYUr9DD%2FzzfRDoSPhKd5XLipSPR%2B%2F2b3oiUojMSLMtpmgTrohPEPxnXU1bUlY7srW0rsIGsExyEC8dUzQrlo3QHf3q72C6oaAZt2%2FMOEnatvyf1z9oJuK7nOoJ5syKxElDJsHRxHA%2BzZ52LVnnXOUjEMjPW4%2FG9h4%2BRhQr%2BrvYFYrwu3CTThKC6j4xJV3A6CJAQttSDu8TKqeJl%2FjjIpntq0uZrR9DZJF0UaEHjr9FqIP%2FEqXQw%2BPg2apbGXkMXc%2F93vG%2B7sw9OHBygY6pgFY0U6%2FTgzai23FlKlXW4SAGUQf5jAnEwKEuAj%2BQ8aHaoZ0rByGugClxXX0fLyfat%2FbmISerrfhfksgg8tdp4P6LhcG11FVSzQoM3jZ39qR6jnwyeb263i1iLOlWnEC5t3eovkVZ%2FVMHN6gLeW2SB1tyi2K6d8dMN95LFpZ7XCrc2YKPl%2F629uppzRKtYG7as6aE%2Fes8K3pOcp1nYw6c6hmD4OkbeJ9&X-Amz-Signature=71d8d48a19b1b8b3fddf14fe0251703a0c0d77066455393c697676d3d931b785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
