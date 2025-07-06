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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752M6HVP%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIAHfhGnLHYwKL%2BwTuckr7YTWzpktmLS%2F3Pp6I0Rdc2%2BGAiEA0PjH949EuRyqM5aXDeB7q8hPQtvm%2FZSiO4WTEPPcDUMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAuCj9B9P4CzMGm4DyrcAx4rkloGWDamtJF7LP4LbopGaN2g%2FFj0KtZh3mOXlc8uPybUpEq%2Bur0pbxlUrUeccvQWmHWAroEiVEH9aUpB40%2FcPv5S5OjjmiRkStl7ckfxV2wfmeSeCVUiqxZYJ4v37h3pfqH0WIF%2F24QRB3U%2BxrbMcj4kJ4dk61nfj%2BG62WJLTAtwVFzwST7PmiocRG1OHB9MDyLwIA7FPzGmHhEogVBmyz1UVjCX2OpLvCns5ChJNrYM93y0a6nVQ4vW8GB2buNdToj4wCH%2FKYoIkFkr7auWn4CKtAH8jqMybF1B0pTLXGrMZmMtc79R78RiEQ%2FMfSCJ65CiFCDBgh%2BlV3prxinCT4XLvreGx%2FFw141mY99fSQhE1is2RI3OJbZxHuSObX1%2Fw4BFxa%2B%2Fg2f4naWyO8UTIY25s3C7ZtKuA4g8dY%2BgccSLybRKbuEASaBVhaFonNVpSlMEEuG5bAgMGFbQ8ek%2F16DPj5mxJHloKoCFhAoW%2FtgE3HSL9HhzZfbct2RI%2FG8Y1gwXkAJKPU5Y6YwSYEugw1CQ5Gg0JqYeQz6BSge4c3uRiJUHF7KVFhMEhEz79UZWOzIXovIifnrpf%2FfORyT%2BvjOjWVmC8AvsNbKJnsfAEHjGgbNbHbgrFV10MIGSp8MGOqUB%2F9I2l63vDlYXBBLsy5G1QQ3qDnIFggCd5UCYK6gXym%2FASO3zkHuLQbeVCTlWtOWLSacfKM1dozsThd41tpvQxuJFsxSs8HbQdAIbHv3uG9nwlZS31DgQay7P%2B%2F6kWdBWrzDS1r5wzLLagZfT9pGoJVhRgKFAh0ofCCXQ0xWqDJ3DUBU%2BRRcabq7Ztjxiai2iuRpyznxnIMmNz263HE%2F8B9Y9rZnU&X-Amz-Signature=c512bd7b8a4c0cbc330ff1cac65d5e4061b7f227ab744a08550c98539bc1b9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YENQLMPD%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGt%2Blt3ScjeGUrHsLC6yjyEkaHpuu2gnCnacCWX%2F%2FvD0AiEAwX76ZH%2BVuno9RzMVNSy8paWQYIkPGxTY5J4Ygbhp8KEq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDAB0FbbPaeYNrXhNXyrcA1JxUhrzoHdsqTrotsnUlnCKSia%2F2Cy9jXl5T5Ke8mrh2DZYUi5rPx%2BrsuDSxKZMHj15xfAZh1SWpaIUZ7diWX%2BbUVuZvFDwonLOfQb6X%2FSSAQqKsG6dlc5hy9ZWXFkJQ%2Fm9treIzumSLnaQQI5umx9pEMs4xlMNbU2Er%2BWX9C0hXEx6m2ISGdSKuoaAYnbJSYwoExRZblCsjx0es49oouac56K0eeEFgUwO2eAlLv5vmD1t9nQwXEfDnE9o5KfhGxvjAR3uPLkbLqOcDMWyf7UlbJJqBG2MDDylxLP6B%2Fz4JoJIR7HtTOaRghz%2F5ojuddlJgMWd15hewx3PLnZ3EbYYFQMq8UCVtDuEnHrsPnPIjvxvk5VjaAA1jQ6SPWPrP%2BeJuzByExsNhNCvL2AD7tI%2FpjE8abI7%2F8b1PyUInb8gmXfngOmI2ba7uRFNRB7K7a5hbGt%2BhtFIdClCnIl8I0QailfoioMI2qMa9zxE%2FxYX34xZ5WTFLYl6JxA%2FOlabJBqJIMQUqNyQ70owaMQILKI%2BB4UMUxfDcFrG2%2Fio1JQ9bLeR3jIQbvDgHAvTP8qJdofX1PjnM9fDRBMWcyTc13gf%2BFF2dBcnXCZIe2DuVUHpvmHZT210zbs3g%2F1KMJyQp8MGOqUBmLA7xj7a8IBRp476XC7Su9dumm7vL9KG3R2BIlUNG0haCF1JtCBIHJGuBxG2GxRDQC29JwwjS0ZW%2FVp2aHgbbHV%2FSGlfKqQs4VXNUmo6asVSkEXAAaYz7tugJCwXt5I%2BF4Ws7YsT%2BMLnwcTVwXuNSl9I9Ty452%2F%2BH4jX%2Bw143FIcT%2Fjo2NoultAITUQ9XiqVZ19pSpXxx4gqX74Tj0QiHLywV1A5&X-Amz-Signature=bd91968dbb5bb3fc88938e553d1df685b25c1743e2f78905524198bade15acdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
