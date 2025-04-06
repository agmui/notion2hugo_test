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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54DNBAT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FyFi8ht9w8n4UUv3Mg%2BPvl2%2Byd%2BaLCBTSPBPvw5SX%2BAiBfj0OxGEEesThL8qvwPO2UYPzn4l0AhjZb5n%2FWj4eKdir%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMoMobaOvil7ejWhW4KtwDLOeRQ984KKyM2KQGONjl8nzFuGZ21WwvJAeUoWajMUOCJdQJzmPNArp4EM4wIhiQQsJhTmqNBwkcqMCPBHBFj7YZFVC8WH3j2%2FCM6LNC5FyVIf%2FUCV7T68nR1ks2Dv%2Bd2vgEszg4bn4p9xhpzEhgpOXg4s2MgD47SGf2uW8tkvPoO6w8qOQ6AtXtYBm0TxQm9TCd6vgHvWn6Y9iKQKwKU%2FCzleYYj79AHOZfm%2FoCHCc3hlJgUPMCt%2FOi4FJMZfjzcBqat11EY05dku6o9D2EOYdcpFVIKukIkQLOA27r4Q3%2FtOJVR1xDq8Tak0BrgEofmoAmNPP1FB4FTPCFD4RDgCKFJKbL%2FWr0LEAK1iIw%2BMXjG2LC4wK3IUHzE5hYuSEhTTQQLGJojt4AZo%2Bn4a82Pemn0Z5d5K%2FSksh3dAeQ2MH%2FCrDrIaKz2%2FE6wCM7jEXMFxQF605jGSgtfXsPgFHlyGvswzqRn2OLUC3FEW84Z%2FmHAnXjhF88ewjSCz8Rt5RTVdy2DXcBRWgKqfKpGhynFWDhhFvcLFK3w0JWPkfBjU6L%2F0qSjV%2FOrMsUJuBz4Jl86nkSVibrGrNLG5aptXCAthc7fApuTmgmIaWZaucLRBZbcaZa0%2FsnALJduTwwlJvKvwY6pgGbgaMZJrUQJEJXsVnkt9l1KjIPwHVdSY1ByWme1S2k1Ig498M6l%2F8J2%2FzB0X2nO01wceqCRIehfa3kkkLcjeXCJyrdm4XRyNz6oNvGn7HuWjXKuPnAzhwakkb3qiw%2Fx%2F95NQoGgpkO92UhRMzDCmmVRCTzL7ubN9DEDIGlUs66IL%2FWbDFgu3aMEpcjH67SMCzIYTtfmI5iDRe3GUvsko%2B2PfM5zqbN&X-Amz-Signature=e1343a0719d66e27797a5dfbd7fd084a0ef31341751f1fc6c4deffc156eadbef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6WJA3O%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfK36j8%2FbDXt3%2BdUhEDvOiVCesnBx3UGa1vOIbZkoGdAiEApdhCwogzVaBWuNisN%2B1YyUXGOUhBnvoBbWs%2BnlAw8Qsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCZhl7QQwxzXY%2Be2iSrcA%2FLJ4iYw5KWURHbkOh48ITlqA4zS5HDfPnn%2B0VE0SryXgoVyE0RbEJtdH6rfw7FGkU9DN%2F9rrhk1kjg8JrWRsMAKRHZfQz6Ir39zkTvly1nN%2BBMa0zofyk74wcDJGlY9M5N4TdM%2B41%2FWD3jPYbgdOvz793pRDF7BpLicUTeyISlWf49nZglnQaIQcxNH7Eiy0SGb%2FzB3RMgjOvb7BOIadQB5itmieAKrpg737079kW3kOHgwPE7%2BVZWld4vsPnUWl8duZpSLh6F%2Ba0pP4l6D5RSgeYiuEOxpuSGmaZ%2F7kGmIgRdXKJzzaqZf0KeWl%2FQi3cn4mhpMkkz44LqK4u92wKUgOgGP%2BY9oDCsLDWkNgx7yw0TEWqMxllCmD6%2BWErGXiXpQXs2mfS2v9YX68c3hXniDDJuitWmBxF96cnHqFbOOzn1EBhqy8pr9nTmhCT2WYH7iil%2B1sYVmMGdZ70pgmfaOwjK5nMBRSE%2FY2%2F6oAibQiv3YKIX56STgrdkB68LB5gs3pDRssTmk8SL61QeQMF5oAzAF2uG%2FpA%2BMDYo1TypO0kN5%2FMvhEFjnBQ7sJJxE%2BV8pZKV5xV30IPyYIGWZk4Bi4rKHvetaEcmKuxlbrMKVc8YZozGmpai9MlY%2FML%2Bdy78GOqUB9Yf4IPmMR7GJJjV7ql7PubMTBdwK8dwqzMniK2Y7B7nCx5kHHZwPQY5Z2QhM70uGPDpBiv3TaFYWe7lW2PG7KOrSAmL8tOIStp9KYpCIOg5Q44BQKLGgu%2Fq0zggCPo2mmHgd1Lvu3kyXS4Iqk%2Be92WfsxMrP7L15pAv6eTCSszhmnvnmf%2BmL6QWQpvSSDvv%2FdszP0OBKJzQyJvpJMzQEFk0t1sQM&X-Amz-Signature=66e0e4f76521858c7ce8da3d94927cec599bf7c1b7957cf5505f1c31097a33c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
