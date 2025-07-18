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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3REMS4F%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDH4lOJlTZUPWu9LmTYR8MmmIm6fbPR1J1gZRDqQ%2FK89AIgXcYtp6TxSN%2FDYLrqFKB4TI%2FRabGoVu472RqXs6oC9XIqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMU5Eg1xgDuoY7N8nyrcA5fzt1A3iftb%2BNR9QNgAVxhu0XkWqYOaXjtsCA86UcbrQU%2Fhs67Ub8%2BdhN7OHxC9XtLwdDixNsREN99TJ%2Bk9KdsJf1vUhi3WX7Y5MYN%2BtTL9TeogV4zbKk25L2WZbOY6rL1G3abb8iYPFJpZVSdHngMFBwKvka7mAS05s%2FP%2FKRDdH1KykQ2bAD%2BWUgogThPzt56D1z66m0KZoSIzOi8J4GwhtYPDWyKc%2Fwo3jiOQVoo%2BCMkjAjSmMKgH7pZO%2BugvQ90%2B28GNl8RZ5SLbEgW3czlUNNpgOU70DczNaz0Yw%2B5GIR15eFkW46v6x4mFB5aLbIZ2F%2FML1F09pdvTLPNmcHV0YB0UM4xQJfqTOp1azeyjHT55sXBedSjvj9Kx4XkxKbRcMaV%2BQCIgDrvuTa92ygLsoR0Fi76lYWEOfFabaI9FqwBMCn4Fgx87o%2F9v3ZLz9ljbpVgAxrOhBFfjMP6lU%2F1p1mxRn6L5snayfbOKa16JUgu4Q6wEgTAT5Q29F10Wuysdf%2FJa2szuEnCf9wvQoPVE7SRCyW83VjQfe51Fp5D9ro37Ahpj6jrF2vVY4Kwd4YhpfQVfdbCunD%2FZB12rqYtbUN5e5wSnz8xeRW0nngQMVVu6fi0IgaVD5jMFMOqJ68MGOqUBVRK91WMl5Dys8fIZCIj0ys7CCEyrMSpTO0vQcUjS8G1qNQOZAcZSWtQWCcL05HFjh1jQhdLsFWcBEzZcCG6Wq3a%2BsEtdFW%2FMKSQmSYBuOvkWBZbyEjHpuoHR9ANpCgZmWDbViTWNew8MA6MvNi%2BAJdtixhcj8yxxIZFKompcvLCSlyfVLYW%2BtUmxb2eWzzZs3kKyZAwBPtvNIAXX0OUgu0ReBNLI&X-Amz-Signature=0f172658244b7f16278cbf58441e77b00b9e877fdf0bfea6716877572336fe8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VLGHC5T%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIEwPPD7JLRdJ%2BSsE9B3pcDEctgBqQuzQO8BdWhCZtbKTAiEAxmQ2Tr3vvj1zQzlSP4Zq%2F%2FltMLIxQMpZ9WZyIHm4V2cqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ4%2F8SX%2Fm9bGkjNHyrcAwxtwsq08fHrw208C1TcqLnHQH5veZel8zHBDoFdMKxQs%2FqzKQyFThZecLvMRoolJUbHjqBVh5fQhvsEFOieU7pU0KFW7%2FMF4GJtmq8eimhb2EKHS13qH51QgXOJCzkozdXMzM%2FDRc1Ju454MH5wi0ryJtn2QetroSAGO7Pcdpu0jQxq1XPnQt83PAbLKXLFDJ3m6JdaqgaMybqqEngOavbUC1gb%2BJP6VICz%2BCHmBk5bOyij0pewKAxiHFAlK4T%2BxOkmDS%2Fvo1rG8rWkaaObjMSzQqqfIzIa2ZGRNp%2FljzL8sZ7q0MVsuAvsAVaxfOx7rGrK09d3cMKTh8AgLrinrCFocPXahK9KWu2B4EW69jKyWNibSjoN9Y1tFUHXIPmXqtCpmhacGdA3khAyABxgOQPuNIT3urk3CuxPzcIAi3JM2atGza2a5LLEG3WGhdfh%2B%2F13tp4Sis39FZaeLj7YNe%2BSZMEIGiJiNPgbgtLKJlQ8Mm72QnjQ9DFoJ1R9rWBjN%2Bm6Fd8%2BvO5vSohmdNkT%2BRkzEkhltY7clEgoXGKL0tPJdgJDw7DL8ifx6o7Ia1rKfpbpEAhEaYmc7P9yrD5VEXY%2F7WzTTgupEWHNcT5D9kShqkNyhUE4%2FpuSF6qWMJGK68MGOqUBMLj8%2F1esKfiLQEzfxdXoQcDhngwcNvJkKzZvAJMyfKlNWY17toiFQtov7%2FkoMb%2Ff7DxW%2F7pXiadyi9M9Y%2BpH7qHkj%2FQZ3ZQGfHtcb0%2Bkeb8rVF7kVjhOZXYwuNLmOxGQi0vLwD4F6BOu6%2BVv%2BOns0nYs4gq0a9XQPl64To2PZY9O4SZThriyQ7g7fSaaTBwQ23O4AzuOq%2FX%2BeBIqeYVoMWgbYkXM&X-Amz-Signature=1fb095f7ae94221b5e817c8624fd754df39666874f1021ef1756d4cbde54ad3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
