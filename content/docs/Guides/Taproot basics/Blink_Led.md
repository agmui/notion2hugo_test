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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W47ILLKK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFBPowXSQUz18PQGENDkNTMc7fmqOO3IxtgGrklMdddAiEA8pk0v67jxMy8DHp13uq39KIi%2BteDVgCOB7I0Sy67iukqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA89oSDQHzRq0MHLfircA7SGR8zusT%2BqsZmW2mYVDarPgQw%2BOBrG7%2F4mA6DEmr8zS76xugFnSfkxxDSy20Xm9SwyMo5%2FMK5XnOjPruNexD49MH7%2BGK48IqvvRGJtEhEEN7sta2oOAeP1ZWJ0XB6fDEWOxX2PK9nmh8ISOw%2BEZxqyLkTTu8xAETjPyKGleZ5SSGiIP541%2BhN%2BhpiP4g5zfZ1m6rw7%2FIQHS96tqvAq1gcAwRp3mOCakF4azLp4BrJ2w%2BQ7NAci%2FjnMaFvevJUWkUeOpOv4Y6ZuzTNAio%2FA5A7X00OKPUg3UsoLcNPeMOnksC6eXpzUAcOlJGOL8942EYWpn4EozptITUxDn7mAkEpgmu2%2FZkGke7YPYf3SucS6GjkiMmSC0zyduwqudMeiOD1RQN98DZf%2BVxiTZSEudJyX9bZe8v%2F%2Bippe0uqU8bDfwQc8%2Bkdoho9EdTcirtqONSqH%2F29eBwNgzXG37KcgtIVXiY1Rj3YUHmbW4VtIT8u97k5k3lrbbjn%2BNznPLQNNP65umrmI1t074QM6ToHy%2FvLnnisGaw7dR3EJoSc8by4XVEuxodQPIAJgYrGyUm3aibFSaKNuskD02ZaECaE9UKUUfkPApkik8X4%2BocTFkgwlEy%2BQ82xj6AcEqbpHMO%2FS2cIGOqUB8yAXtZ9MiupsMNgOeQj1v%2FVK22GwNaL6Yv2QybhHl2%2BjWrLz0DYpVabllqR9%2F73CtvgcXahh65hhlIsl%2BpoThVLrMwa%2BcsBcNHStWRaR%2B%2FHF9IRwK6i23ptT%2F4P4MQz5XkAzzpqFCn0u01Avr%2Bdsmoegdm%2BQ7gqyHstoaXd5Fe3FgJGSerQ7z3fx1iUXqHonbjYTm4aMZicL80a%2FW9PdAqpqshIF&X-Amz-Signature=f67a0153ea155e4ce88aa52e9cdd37283cf8de6cdb4354293ec06f6f18f9149d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PJXH72G%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T110554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMUEGm9JpnRZXPZsISwHFv8U7PawJHkMCZ4QDqgpxd8gIgRJkHkEH9Y1nx07KOT0bIEKBDncGW4LddjHjE6AwrkX4qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLcw2mTISFTG8jWtyrcAx82oHZCMJ5pFQbKyZoZegpx9ZVMDLky8DEfkDDXBjess5dD7Do01i2rjPg%2Bq9hzT%2BtF9sCAbGXFIF7RbH0l%2B%2BfeRA%2FgjiKmDKA2VwV5oak2%2FUqqoEGWgCTHXYkqq5%2FU3QwFS4qY%2BYToREftA2BTiHEr4JQGfmmxZ%2FaK8fKMjcm3DFMDLXSHNWvGoUtvkYw3isy314azF169qh11DkBu8OZKXrC30kpQtBlLURGJ1tzVNVAQo3%2Bs8j%2B02E0jAvyMwt%2B4b%2FyEgVr7s11y3GIrCdk48u0xYoF72L9qhFCC7I%2FAdT0ZoCCGqGHs3V1ZwroprClmzG90SzFQoV%2F54YQXpPTrZnIrXBuLSGlKQvQKcF2Y1mt49fDv6BVsCt5z4BwKDOJ4N4vSv11%2F6vYq%2B8OV0mBGw2tvhBiQDG%2F3Txs%2BoSsXL2lhAKpAV5ls%2B5RJBSYa2ObLFIwVQ99uPZQanHSM1tElo3AUeblJLZkOuMV5LchFtrnpM3m8x7yo%2BDybaSQSk7yfFEtna3Pcbkgxca22ZfrnFvhoRN4ZPkrlIuIt7ZJfNW7C3PWkmrBKmSTYZn1qy27q3DAmAXoN0TzkPlMo7DWLGO9MZSjz7iukV6gkHqvaUoSHbahB%2BoWDVrdQMNLV2cIGOqUBrX2m8Ddrmlu4PbQ1LJWdq6eUVYbviGuA%2FFqcHH3KgjgfcfIkFRGpLL3bW5EJ8fPRQOponQ70oUghT5v8sO8RznZZ3XrovcUsFOPh4N8ZQh462jCUr%2F4Iul8PIyQ0nH0CAFlChWe47e8uMxgE1OhNzl7Ozm8z%2FQjJrQ6G45735zY7q0DUqdKVIyRxMXDSaUC9vKgv0i73jXcNbAzLEjzXbvSU%2F0zl&X-Amz-Signature=63bf78fa8610077fc7273ee4a660f4c87d40120076f95aecaaa30308b2e32b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
