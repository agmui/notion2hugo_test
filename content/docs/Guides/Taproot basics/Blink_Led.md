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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZOJZ2X5%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgQISAgqggUYMlbCqRU7wlVvLTRGHriQPgCs9n5eVz8AIgfbW%2B3RvlfZ17NP0mBMf22yKV14sr0LArWALxlBP%2F1JkqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnH%2BxgYWdrCV5lYgSrcA%2FaH8voW7oKzAMFQa7j1w2g0dw%2FzexZrnqqSZueOHfZwyhLQhOHxbVbBZ5BKnlgZt44UwMdy0LSRby4ze7db7DaBx8TeciBk%2FII9Y1q3B2b0CBCkAb4NW4INqmy1txalUqiWmup%2FaRwpC%2BDqIJ%2BUarCEwzJ3UJLOw21v7x8SYH9A3x8UvU44HP4Xv1g8CCbjUmUJ1FUKbKCRI8GGCxAT7w6TCrdo4i%2FuE2iuc8idPtFcE2C5nvALDJhi3xL4WspMXOHSl%2BPrqFVMHq3STCbfBturLvexyzcxP9vWsAF3V%2FTJhusWAW52g3ZL7CJNpw78wRjdomEcV0I2plPIOSY3p%2FGkr3%2Fr0HxLQqiayVIHKzJE5nN8F5D711FnN1eRYC%2BDpI5NQWCQczzT5L4SeeXszTFk6H9X5MfzaoVNSP8%2FX7%2FS13aApTb69c2h%2FCeG77GUBCE%2FPj%2FZ7azRKhpFqQD7GUhF6E6%2BRVyOYU50MUeV%2BqW1hpIA5R0M87HxCvLgF2GXiKpzgcmwuPmemikA%2BiBx2zoC%2BJz5Yg9vZrHzbM8DDCP8yLNq0OfFPsOxV%2FiAr2tIg9jCwo%2BKulYbW9sX652F229lIOyS%2BJyMKZAjviXRnekftvrLVkfQ8p%2BgQsDUMJSmsr0GOqUBwBoU1RARVhfBRHYa9axFAmtHZgNOvD9lQMfrMbAxnQ9pO6XIDxTpzdjOPRjyGWDpYu4BQK%2FUPZ2GYERFJw6F6gSdtqqvA8dZ1xA%2BmYvY5WQCvxyHX%2FS7pjorrtbE%2B7MRbINTf2HR6HePoNWqlpb5GW2kxBu3LqhUQ9rKXdQrN0U6ziEbEByYyKlPhWLoYsG%2Bn0BcnvlyrL2P7CdTPCdUHpG1tODS&X-Amz-Signature=48d894a8610d24eee62b0c514ba071874b56bb7bd8ee63e70565aa407b9a99f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHR32XL%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAoWcdOyPXnR%2FvW9MgGBKXABHvoFm6CYaoIeZBQOsS%2FAiBA6SpkF2SRJ7a4ARtFkHVff4eEOC89vS%2BhrcBRmLlWziqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8QyElGux4xL450LhKtwDAS5t2cSkPZ%2B%2BwSN5Wo9cfQama0m7lLdWBv9Ss4kvVQBRHnj%2F99NilsTa6zYo1EWka6puQul%2BGmb9mof0Zkmn0ZQI5Vh8Z0TQGwDx%2BSlcnAYHWzyEjdlNoWAUOmCjoo34MRxoaZzYKmNYupbqy60hdDBCs%2BGDCE2THIR8vuFr5gNjbOljE7ZdqreD%2FX70Cry%2Bv9BzmeH%2F4W3Li6Otah1KgIiOuj4L40PBbv3bW1choloaxjMLhZAN4BXhZovvF7XrVPykK%2B9UoAUHO5sod7TvMmOfVRh3VTgFIaU7i6eaqIwWhFxcx2Zi0x%2BPBL%2BKVfjY4Ybo6AcBt%2F%2FpJkx1fRGSAuQ2mWgrMT9t4zi4NF4nHWcGbjpKWV85Ri9P3ABdErK1sj4euHyXXrv75lDQliUT3Q1YpAFo3MwG5FgQdyaPYYAqW20uJsnLKG%2FoD62EIrv4VOkPGR9k4I8LCRUcED4w5yCdfSn%2B8XwyWpRa036agm2wQO6WOLdU%2ByuvAxkzsc23W6FJ56FUmybezKYCHQ3rJYz%2BMxHp73gYOpsOwsvJ2T7%2FG0nCWdvvbqg1q3czG8o5%2FT%2FPCUAj11iFZ2xRIKwd3U6rBpiTRTmmfZly7BxjQ4Ktt9hjtRvlSuKCQc4wiKiyvQY6pgGUyAEaVO2nsdSl7FkPwaT4XgC0fyNCJSB0YoNMahys2bi9gtTVwd3J%2BTa81yyZpySyKg0SLeZbRm4xtMTz5heeIGo2qcb2LKY43%2FN252fyF2HNJco8AW8thEuq5Dw8UKvRWoKxYb4X25HW%2By98pHbKzjPwZS5HkNev9E%2F6JRlkn352gOjegI0d6D3UL%2Bgnjc7IqAdAWwLJtP8LG1fKIRBObrpsskJZ&X-Amz-Signature=65f62f804de4767746ebf76bd6a7cd57792ea378e9b5efbaf693af717cb4a942&X-Amz-SignedHeaders=host&x-id=GetObject)

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
