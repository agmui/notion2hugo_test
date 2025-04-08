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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRPS3LUQ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEk0%2FIjgfS1cMlftx8gNENALUSIzG2Maz%2BrR8hnP8aOAiEA3NhCMkh%2FzybGCs2e8kCrhaXeXK16%2BjLTP%2F4J2wYZQ0Qq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDK2vDIGyL22DtjkuESrcAyvY%2FPz9nmPSkMeu3AvCBaCzI5Rfj8fiE9RCnzX7JGsuXDV%2F6jptMruQ48yh7WFZ8NL5fwCusf7PeR0Q75%2BWth5QXttSZfUJyrWV5c8JAkb4UY7Xhs1HgQ0F2s3AFNhq0lsDi8xkfruk7OKmUUwkqIh3pP0t6LbMpUAqexOAp%2FibYMXjR5DDx393M2e30DStScLuh%2BIw%2BzWAuKTBmkBrhISAjdpH5AmJ4Td589%2B%2BJrb6T3GYGo3Gfv6mdZNCzF65%2FkyKWN%2FWwjesQ2mMLrmwIYt3Ce%2BuFpOqzdyuDyB2I7Qdvun%2BFeUggLHGdEsZJ53o99O3uULIxUELJYia9XsWqzaYY8SnGxuBAcKGezsgaDg%2F3yjBE83PzrXaMFYNkayEv9LtQEgrMbaTT7KdF45pj4XBa6Em%2BqYcK1tp38nY%2B0wTiJwGeboFk8Jsc2PA2zUQ2b3iyWINOy48l1MmvGYP4iUUE3PofuLMJK9cyLZxkZrRCte87tdyTgZt%2F3DG6fbfbTy9q97WF4mAsb057IVuYiWbR39nuYsQFayA1YadJmZrgsvKMY0s5YdEalr%2F39oo84%2FlUrAWToCr%2Bhd85H0Z9EC5uhI05qj5Kq5HGvTgmQIfTzPEmN849eMtUP3aMMK60b8GOqUBP6MtiGiYe%2FCvR9wsL5y6QJF14uLUPxzwGoG005%2BaOp8WUCWC4U0cMcG6hmz5NK%2F94mskxG7CHUfLGu6DZkdkMQvEfxtGWkxsyymCXQpHBHvTIN3xRBjt4qBgGeGWSZzrBuprPM34bijXTM1BbY7H%2BtG%2FEZkfGof5I4sEAwYC9bikLhT6GUfPhtYO4LNMpuNCwIp9ig6g1BhlCy6dsDMyN3ssLd29&X-Amz-Signature=c703cd826f9eae55e7ad80effeb08b85b832e32e2ed5e33b112548d6a9ebe47d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A4PLVPA%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBHPHIqwMyTex3nBzgnA10eJJUx1LFDb0TsLeRN5jhW%2BAiBx7y7Xlh9L%2FYj5Ds54zKIgwU%2FSD0f0BjqAgrQg4J98TCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMCS7VieukKB23OAfAKtwDrRn3nuqAxQ4qmV8VL32YHlOF6pywQ8MW0%2FyBPp0zDTEwrlzTeSH6cpGMxc%2B3Vcm6STfpwgJiCNcAKRgc23ROCyH5vnKCcDFav6Z834fwTrBMj8ZwIokvvt8sDd1CrXvyl5hDTDZut%2FjejNwfmte4NFgsHAyih5%2FcqpJIERipTvXBvS0IzLKDTviij11dlCfMaZ%2FCrPttfBcFUpztZdvzCIqtO3yQ61AcvyBnMEZyY6OGlIJ5%2Fg4mnE3%2B2gGiWf%2Bj18RJ8MrjxVHh1faTxO3uZ9852hqQ7oNnvHfsRVMJRd6LYkTYsSkg%2FE1lkAyaxCRYNRZvAnsJnC1N1NfoAL3o6Ssxlwb9HVg8uzEJjA06KPDXvv9jbBYjyP2bqjgUCEw49u0UdIevHrXrlcfWXlsTX%2FuvuyUv0aYu%2FgJtj0eQ1nBt%2BWdbc2WPcfi%2B0dCV3Rbl2pcGX05kvPUZw1TtG1loP6KK6GkQ%2F6oSzZubKbaaSooLb%2FsJRPzSXSN%2FsylFTqY2gwZO0IIRzJ3iEQi4kLQ5xfJvEVd8yGdwdjYp1v%2B1hnAKG6NLa%2F5wcitEMC9j%2FgpiS%2F%2Fh2b9whpcElQe05q1P9fTLijcm0YmIUHHm5uZdNPFz2Wy02vD%2BnSL%2BET0w0rnRvwY6pgHWX8PTzEh3WXYF14OYCevo3KPdqS8XaGNiagZ2wcq2Q7z4eIIkbFPcAbk%2FHoyvCBpgn9nC93AL05QVSUt50pO2WA4y1ZpJTv3wOaZ%2FT1VZ7Xs%2Bn8CJdoL9zevV36wVoAV6f%2FMJjxCGeLnQETl0lDOvK1vQe4GOxM%2BRCy76afiCnRlO%2B9XSF1hbjU%2FjWPi39DgdJqgIKx5McTmANx7DFXC7uVLl6FcF&X-Amz-Signature=0db78e8afede7d167eca2ef628f8077b1537be4690008ea09bf1b345237aadb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
