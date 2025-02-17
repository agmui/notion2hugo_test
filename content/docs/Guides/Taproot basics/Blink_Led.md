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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NUV5B26%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIGWneL6y4CI5L2ZAlDYjHXRlnj9Xzg0riQ54TCUjInifAiEAlftJ1CteKmLDgjnwsqwyWjMCV%2FHFaqo%2B0cNS4XP%2Bnboq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKKU1TlPXBu4AsWsjCrcA30PiP8E4%2BU8pmqrHSQA5bmSD6wBvfxxzJdAczPzGHSzBduhdlOLIj02BzgK%2BYA%2BlfKDakAMMRRuzCJBfikmPx3o7pIUdYi2Ys3BtgrqE%2FZTf2wR9ChhihXS%2B9Fxtdm7AVAzsV9UynBzZYwX36FJ3CxxPx%2BXXIQQ5%2BhNn%2Ff5nKjbO0S6Nm4Jei%2FzZ36oxLb58of1I69AKrzbBP3Ccc%2FS9Z6lnodTtILD3YvsbP4xqu8ho34OmJlXcuEcSfAO65vJVsZHr8cpsQLJX1dcpaCV%2Fd3f0W2kbgBXLhxjEyLfJvhAr1JxoBgTcSfxiSrJDz0Qf4zXB8nIPVHG8e3vg%2FAxcFtig0aSqvk%2BP8YZqptiZZwQ2kD6w5tBs8M65Us1flC%2BGQ505u0LYZ44KsKyo%2FwibmvWfYYYylhYLEVRe%2ByQvGYzvE%2F2ic6xSmNc%2Fc7suqDd4GN3r2XQNL7tTT6b%2F4HgoXUZTnLhC1SYU6uSaaNGN2ejpMjXle7AHrlATtxFua4t9bP6srThOCfDk4KKILycBbIAnP9RjtIgqDLrIG%2BVimthPesbAq20MsZlsYENz3evcsGDOro2Us%2BdhoaOh0iyo8VNIbfleRCL2%2F329ki%2BwOYr3DDHxA%2FbcnJIAogcMMWmzr0GOqUBkxpylWzik3WIB%2BF5VvZyhJSCa9P6v%2F2fMFCmqd1we8zBoXZSMo0lgbdRsLWEOfytziiT7VsCItozA13nJFG%2FvlBnk7IHrvUc%2FFG5f9J55OqI38D4O0cuBjPfgssRU0HBNZ%2F02dAyQbgt5Lrh89%2FAYJsnpgvf787EeP02GcRH0DixXHVE7xCuOudA9jpz7NPp6DhJ5a2VPfMa%2BCSNiCvqpsijykec&X-Amz-Signature=19c7158c7b32b1f5e879f88fb08464f601e26f98b7229460b77bb745e4c70567&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3L6ST6X%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIAKolnV3RYayyLhHaukgOj5An2CDv4K64%2FtL5O3OREQCAiEA4nbGogJiXEhQ5ONC11Sk5SxfuoEx%2ByxLRj6moR6wNuUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDJRT3Vot0At8m5Yi0ircA%2Be4ffi7YJd6%2FW20ON4t3RA%2ByA5dR4H3wXs2jv8zxMqngmpDNPAEKrkjPPEEKzWtZNc6v%2FSVUtwr%2FUw%2F1LjwXmHW6H3J6wgl3Ie9tNCQ2XYrZD5wH3e7jz4Z0mgiEHTJm6t5nRS0lfoE7hWWzQg%2BgIDFoyVwHxqGJgC4ZPUGOSavxgB%2FRpg7JExrDh0ksrxmLBeIjE8t1NBEdxTUfwyw5%2FuH3mjBUlYPLf8x%2FeTeTb6dWlh2X00LIcdmAS0lVy7i7Ha36FucToqHbK9kWDlnxwahDEzz0dZJU8%2FAv8ZBQBgmhE3i5S8Gfh1r7xVOwdHXZGa7eslPO1nB%2BMnF%2BuP2%2F%2BigEjUkY6r%2FIB00KOXFTMVaJpr2gKlCnhZxghLLE5YlO8az0Sd9oU4bcewWsOO%2FGDLFakemceC3ruTkmK96J8zHRvA%2FWx1llekotYcBZOkSEifvvlqmI26f93LQoQsDDeHONcEp0E653z4snt9fBkDyzrg6hBVd8r7UbR1NnVYx8BMhWfW9pIrKiKIIoBvMLVi6b1NkBfzslj2dQe91uz1bFf0X8jZft92ep3P5nhivMNTe2qBIvtKctRsyeuufRGOeDdHTd8GdU6LzNTNHxCRzttg%2BjDQqT2tyo6lWMK6mzr0GOqUBOmjBU3bvYPF7B5%2B1B4QJWNbfrn5%2Bq94wQxiuX%2BaOY%2BeTtax7bwuMIcQvhFdrUxgwKB%2FUDoyKYe%2FiY1rYs%2BO%2F6snqZtm%2FriSkEKi3TRZccV5TTqwVuL0LMHjbvfwOq8Pgr4JsJUP0c2Enb4QLQPOrgoBjTYUVvyRVtrHKyAqR60SYMWj6dDocDv0B%2F%2BpdV30j6zVJlms%2F6LNcwtU1VVxqCl0ecGbt&X-Amz-Signature=4ef8c245e1035e6e85b14554793ab7e1074124ab4b0191fcdfbe0fca768f8356&X-Amz-SignedHeaders=host&x-id=GetObject)

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
