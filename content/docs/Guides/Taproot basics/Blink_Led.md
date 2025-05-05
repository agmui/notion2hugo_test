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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KZHMBC6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVqW680YmBtdaUU%2Fjo%2BqQhy5Y%2BA5JG8iZCPHNSqrbyewIgLA5oFBQI15Wj%2BJWxK%2FDsy9d8XHM5yyXknT%2BzfuawQT4q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDA%2FsaygX2Kw9VH2JhSrcA85CHMBcgJUIFCkKQvH3p19ojEn0QkdubTMrAm%2Bnl2qtQQdgoBqsUAntiRPwe503QwizREETW7cstGkokWhf7saJp3Zd6%2Fr%2FV4u5lUeAd9XqaM6LCWDNZNaxmLA7Yr%2FIHgOgYogaHa8NBV%2BxUCOPxWVUjhZH4QMJWUoxiqHzAut8bdbzc1q5fmuPCk4URckexOB30za%2F3RJaxG2jc4B4C12B1PnfewpLKQ0e7IuaJniwDFXOe2xpnZkrT7lzTH0i8YjoRUm8L5DWU2%2FOk07mVt%2FCni9dakyWAA4532GMdwWlWvsrkT4UZS2duYLJZEeKTPS%2FAexSNqUjPT2wbmIvotij%2FLn0u8PYNAe5FehrLMVsn5jF89yNODAxhg8wRvVG6oYXu%2B76iL9J0xIcaYYahyKSUFj0%2FkxYV8MRBitDX3AsXQ3YYmUSjC2V1kSVOCTj7M8AeWD%2FSo3zimau8Ax1hwt4jYHXSGTykhP%2FsGl0WzIXWUXm3PWTn2B0DVtltCR3lOZdXQzg04TaL6lNQ3sQnOP3mqoNnokx8p9j6mMJWOORVkCrh5QTigjdW8s6Xkr7Pt5b34xlaXL0bOSm1qk%2BxzVEdIvd%2BBVhhT%2FNeCRUDp1wcNMWmkHoIOvq5f5fMMvl5MAGOqUBLrtsE8iVc491fPLVoCp%2FKiDJ1XHxEQdyK7L2Qa3GpgnUJVe%2F4IzviI%2B5viv8wRJpOFAHVD9H%2Bz7ej6Rs%2F7mVaZDGiiNFladsa1rnSYrF33vfYwCyeq7U0GzUImAAW210D0gicnyKw7sRrRiKch5%2BF24V66LwvNmYj021XzOpIL%2BcNfelhVvvrwG3Jnz8WpypEgeSKKDfyl3BhewHcZQD8u7AEU%2B3&X-Amz-Signature=32edb7b2af4e46b0749838aa0b378ccc8d52c6df68abec748bf483aa00c54880&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSNOXQGL%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5SK8Edo9z0ZH6CLIit%2FR7huIx2r6p%2Bf3aDQBbPYyrRAiAqR3Enqqp7jepxJoMNOoO0vz%2F01un06iksefQn9D5dzyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMACYcqWYIRMvaPK5HKtwDSbKfZA6Dyww3wFRhySpdtmc%2BrPV%2FljXnv3rKpizYyl6POYEMBLb5oAOFxJRuuwqkelIsmtEotk6S3lYSu48JJLFRlTNkZ1XtD65%2BgqZtobfDLGYWcOAeGj%2FN0ezo82YE%2FRRbeTzb7JBiVFkh%2BT7C5a5Eqt0NGWId3G0Xhhiz6iCSnpS5uxc6EIQRWQ80EvR8MXyp0v4SfNvpF%2BWecYISdNlFlo9yvF1X7j7p4RdOQKsmz%2FjVqgjnbzM54h8IiKedgEm%2BCCw3VkJvSo8er8vaMWtjXzw0BO3elvREHYwTik%2FzI8Zg1WVbNNSl%2Bgmls9MQ8N6OxcrGhI7TSuC8eFmNmZfgA1L1oOgyJQZG8%2Br2R8lr%2Bk3DFYXsfFzphevMJhSzwIcEtVEizFmBWEt%2FL6jXjaVFYZt588OP1LpD9l0MGBcWamdzGXh1EDBUv1KdeU%2Bm0ZBJT2bgN0WnlaWFrwxCfXOZkOH9qBsMI54Rls0GdFC%2BsvqT%2FnMrD0BjhXnqWTJxb%2FjIf08YF%2FnU%2B7FsrFyH65ZDUWtUnWGjAR9di1gs5JfIoeDEGA%2BdUWq2UxzJRE6sQ9hM9%2BNVHdH0wfB011%2FQEa4xY4Id2mOcBzFE6iZJBXpEZSxphH082X8E4okwp%2BXkwAY6pgHg1H4uR0WbnAvetEMHKN9YlV7z6jryTnCZZ9IB%2F8yImlHI97%2B1CEkjs0cAZYhyFOqH7ZkvtOzNWn1rrvKoydfoMJ9bCG0Fn4G4Z3UvOiQPt2gv8EJFiBqD52JQ7koGrPriEyNCkmF6YQ5GnTKFlHSGZqd4s4nI%2Fe9P3blH5o%2Br6hBBCY7reYq7wbEE3yFENgtNNI8KTVGlHzuy7H46oNLWEQmzGN0s&X-Amz-Signature=4b00101d9bd4d7715f611be005f8a02ea7325ccc456e9531c1ad5061985cd348&X-Amz-SignedHeaders=host&x-id=GetObject)

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
