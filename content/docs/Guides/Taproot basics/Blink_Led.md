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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6STQACI%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICVhTdF6ueLNSQn5iDzxX2Vd1qO9k4IevAggDwEGq2MTAiEA%2F%2BreGm01XANokQ0%2BCjSiQQkppkss09uEdQmy%2BuB7uJYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzCGYVSE3CqOttzQircA2ZhexR0p%2FS0amr6X%2FhLfH4Ioiy4PRxyjI08AtWKckyHpo%2FDOmGQC2kRwp5emx5x81vhf0McKhsZyL83Ax0wTaIVxMAJj7%2BwuaxQsWqfWj38zI0YXNC42qJKV5Cd1lwi45biIdn901SMAZHCHwQSEfFYKnZHm%2BvXg1EtoR8qgpCh%2B4aH5QR3%2B76rUJSSOw%2FqY4BdWWSDREVv8nDgtG90G7Y%2BXEsPnpiz7FMXv4RmB39Pp9%2BtsXmicuISf4i5jFFaYx1Tqk%2F%2FJ%2BaivBDgGQhKVSQz%2BpBnh%2FMzMRMvxS70QLZZkwKVU896675RDakv3WrAkjcfmP684aEk63FJtPkAQ%2B%2BHqnGOvOUCjs9JTtdLzWywHynjKf8SWuKg2WnngvmkfEX1uLPNWuA5j5ODOZomy3lRzduhi9gE91L%2FPkdluHq%2FpjHskKzJXNqSYgXsAicbn528LIDe8RJZob1Az8bEvT%2BP%2BDwiPlPRt59gNnjnclnazHsDMjJUggfZt11S8%2F4QCuNhN7Cp8FIsZDzzJEBUUG7mYMuvWNzrpQD7Wc5RXYUnDazE8i4pNCiu8Frh%2BbQ%2BYy3QGRC1mPshY33SqGZqjUUEsLvR8D279RYIk6haVJFNKGhmP9OjtB1uQ8laMKmAtcMGOqUBjwBZ7UQV4pPTue7YSdCQkN63QEVULNgm95wETdvf1D6nbaV0tOiiJZD8qZA1NUbQRNN13rjKU1D6wzlSyaS%2BTirf8p%2B8sufeTEU%2BacuhqSkuXeOZEe0NV0itRBS3pA6%2BPt4OuXCjpHxPfFV9Sa90sR9%2FKJeKeUzRQ9%2FHoYkAegWiGc8aLkFCvDrSJlDGKGKmma%2BCGiqeyCgj%2Bj28P2hHYSVC5xEu&X-Amz-Signature=bc78e58b80ed8b3b626e2a767cfcd1f9ec836efe8ffdef4f9ad43d83c148c254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQIZCFU6%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8a0ppevgeCWi4eTrEld9NiWyf5gb6H04DTpniTMlL3AIgKykFYX%2BQW20EgPwuA%2BCrvZ6lThh90y8aHFMTqYlTBTkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBwsO5pPdPdRyOAqvCrcA%2Fg5vzzVpEjWY0bPVOZ1VQLtUHo4TkIhQQ%2Fx%2BfpDq5sV%2BKQ6%2FfaKCBQf8CxHnsMVW8cXA6BDV6%2F5Av5kEIBAvYoECT3Tvg60%2BNv9k7oxUzw1HQFxe7xgyolurq1hO39xlM2jihP7WP%2BLpnxyNZ72cuA2IPlBHvvWI%2BPLExVzfW5P1w2foBWLMIlqntoH8%2F5bt1iL7gYkfO%2FPaWSgFIusIwa10uxvrE8QQ31ivhc0k35s3w1dknkbDrCkgiM927p%2FuyenmvXgj9UgGlzh7TKpZzJEKFTmUjU7m76MvRiSX30vH9ygg7Qku2lJ42tIKPf0iOfgagSxGtfvpzosagad%2FT1eah9%2BXB6F3qlDKJP2mYSLe%2F7GNPZjw%2FFFYuFsBTCSS6%2BkW4mrzxfTVGaRaxmCyNL%2F4iusMlHer2PUi18f9G7SM1b7JnMzgIozWla%2FSX8VUBg6x9qnS5mDKh%2FSs2EITuoQ6dlqcUlmHrxrByVOat1G2nyMiCsm7UOcPuEQvJ7z5DBiqtztbG4JLgpzsf%2FLLKwMzxbNB%2F8s3DGboJGeDDJBXp53%2FdnbKYM%2B32j%2BcFhB6R0gXCexhNKFnITf%2BKYu%2B2bErJ63CT57n1ZXy7VnnaT%2FKSuk8VkjtUSgfzv6MMb%2FtMMGOqUB7hixQSpS%2B7Lw7rrReJreUEkat0JYJJri8VLYOVVcWyAinf5r3Q%2FL2K92Oj1qjbgrWUSrKbn%2BcjJFd7TBcEX3g2OZl1t2Lu80xHaJvO9YUsJc7rmBQxK1a5%2FG9blLDYO2DuTJRq6dFNFfVMkRHRQtz5jkWjBmZsVgtd68s%2ByRfO7vBON77G0vV7YD2BGHKFPnuRj6uVAh059M6x%2BNCRjODkY1C1M6&X-Amz-Signature=d9e3352095523eee537555ea8e460445605677b62a4bf7712acb2e4f2a3a127e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
