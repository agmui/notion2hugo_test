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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUTFIXH6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIDOubd7ARXebiPqDHdlw6ewLtuhzfMpsFnQYzyAbG0NNAiEAm24KzqNlWiO7oH5yrI5xoio71qoFJ6nrbH5I8j87rD0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1Hf%2B6p04Fj19b48yrcAyMqmeZXNGX2KN1rwZnkVm7efgqCPZ3S4O2b3zXwtBqrD1SmL%2BCl0GAmVb8Y7rqhuenJiryEOKG14gX793Khi9cSxjyAEwi0fwx%2Bu1Z0SwxP4NG6chAfU3zECQ76QfeLq80VbXNr%2FgqkjOGzw2vmpt%2B%2BRWnZMZE%2FwauDTpsA1bXfdmRVHH%2FW7Aa%2BfQI7I1qvXHtsAKI7KSFySBoBMvvXNTnUpeYrAkjFkqA3UwoDOIozctU444lNaui4ZcmD%2F2xMJptqqPX013E0yllQAggvPAurCGtChKGutX%2BbFLeQgHXg7a5R4SDu14uzzB3OZ5QsEXBjG3mJYg%2FSrEm6qRmJHUFyK1zndpcn%2FiRg10R0oPltxp5N21VPDz9wO4LlrLjmrVgJwD1NCRx%2FDE8HAcEBErUZS7Za2r1nvDpT40pY7KGhnEELD0O44otJO3nPh7lBQnXD3SSpGqR%2BF01DnZY%2FMETF6w4SjcrtbFY%2BtDTCzdSV667bfcEmcnQ%2Bizo7CnAiLqvDWYt93zFwxLScAn6tpIRgpzIPRplEcJYq%2B61G89I6iOIR1H%2FVt1pCr4PSd65wj12Hgzmo340G2LlLvdLT9yvu%2BBdev8sP4TBo6W%2Byt5b6fyI%2BJAH7W0mhsSnUMMGZ9L4GOqUBz5N0RDjIQljLyyg6haUSXT%2Baea7NQp2ls0wtpud2Db1jCA26Y6LJXELxeXmj0piUQJ%2Bt5vVxypG0QxkOtdVQxSGcYyncAY5SwVBHsmzy2jpqUfbOCVN5CXsiknHb2oweAs0kZ3Q3M1UZDQMPEndkI2CLKoLFuXYqFHaeVXdg5MP8Cj1LNcV4jTH6pTK5ctj4QZhmZzjnX%2Fp5FPUCZVYOS2NRzZFK&X-Amz-Signature=f44c88c23486d7ae3fc9018dc7d617d0bccbc572651922cd3707f25ad4a97655&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TG2CYFA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T070805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQCioccJ13DJ9%2FRl1vBZ%2BfUZ7ZU4ua3MRiqF07D0n%2BNUegIhAMnFRuEluoKwVM%2BPy8J2MMAddhh0G%2BnOvP7FS4QgU9n7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytsuTuf5THc9VWoLsq3APtRzKyrteaKVrMTcZm3jkJ%2BP3pwajJ8JjfyGrHk83Vv26TrW4ARyof2CI3wwrMB2QrR%2FeTeJ2TM0kAsGJOoz6UYLr48VnzeoCIXS%2B%2BE4OmE%2BQjlTa%2F3QvtVhjpRm5pqMF61Hp%2BIcP1rgttBBC2FZWlyS%2BIkBWUDdBlz%2FHUPiDpbdW4WwpXt7Q92ocFhf9GWYyO0ll57Fc0hUlhh4NlAV3ITDHU9sjbM2i2N0UtHojiL0p97%2BkuZQ55vGewYzoPHRWgj10qx%2BeS%2Bqoy4P0yvj9qKiogIWVs5POioGFlMlvjSgn%2Fj83QY6O48IW2UE5JyuGBDddLH5woPSaEF1v%2BA%2B%2B3wLIBx%2Fa%2BdJCNiHdIqAzL8TZJoata2N6dKwsW02r5PtSztnoTvrq%2F7nFrvQyn3JT5PswaAyXnPgLK8b8%2BPzBVIHng1%2BHdjKd5y6BidEzvNfsAbS85yeZ1%2FNe%2BKQStNlZJ%2FM%2F1tJx8ZY47cBBlfBIEc5ATVTjy9d%2B1CN3We%2FkK56nkRXeItDgKeXKwH0StZa6kYSD8fJT6P%2F3%2BlS11m0GUM2oeenyYzjTn74cPodWvz5VOwT98HZtR6hR7u8d2UuIgYU%2FgehHp5%2BGTVWBVyrIYdvuwUh5Npf%2FId%2BCURjD7l%2FS%2BBjqkASXSTeiuQ3YsgLLqLDjg9HCa2g21X%2B8W6VmOhuidbtuH4fK6XP9NDgCAlkyVJ5CGRi6gqN%2FFOnshsezUw6zMcWOzqf10XJq5ZXBx7OWTx32%2BzHmjsLuhdCRuE189Cdb6KdjcoRj6QqKtylmBnG%2FVJzM7N4ze3DkzP0EpD9gRU4ibfs1c3mF2pXOxLcBRWvReB8xjErR3ztJGdWxALBr7S2mdeUsy&X-Amz-Signature=53365038eb0b01d978ee6fd3d94126e1e5f15051f683de5f1bee7f750b507160&X-Amz-SignedHeaders=host&x-id=GetObject)

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
