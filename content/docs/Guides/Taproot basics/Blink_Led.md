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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLRU7SGR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgrq0xoJCttaKdqIAjUSWLYNcO9dRxyf0yiBrTcJnssAIhAPeKVTagVvDuXuAJhK6ClBGvkkz6QwLAXIRi3ubVMP7xKv8DCDMQABoMNjM3NDIzMTgzODA1Igw3x7PW5%2BxuXTo3mrQq3AMHkEcfeU5800K1SEFFIr%2Bx2%2FZ83%2FKbgrgm4n765QUbwMYaVwgdBhIU3oVfnlIjo08AEV5OltAEQpj6py5tGX05blTEbsKoiMMAEvSX6cdrQZ2%2FODdaUN1PjyqqTjMbFHuMzxVtMpyINwjhfyQyEC0g94gO4%2FAa5CncVS4%2FAH0UUG7nkE1djVuDpgobL1YG3cwgIKgR9HkhGRrUiU2qSyBKog2p6B2wW6S%2BhUfZzytfkzSZ7qJD1LP5%2B4cOxWBHoSawiA8weJBP466yTKJ9fYt0l2hdiL3huq33xvyDTnTUBxVlimlpcZED8uHeC4LsUvL%2FEE8%2BU1DFzDCNKcsCI1gbLoq6f63g2xTBSuKKpLTAHu82dz0dL%2F6PMnF5yGxqUBhWljJasnsV6oLIS6gZMD16vgF6MS9YVy8cNYMqLbR6GeqTLYd4AbcyCKj4TFP8%2BunhfObVgo%2F2YDCy784yoBKYo0MKXkH35KonI5PmErNf1FibXqFtvOtqOz7gHfLL2Y%2BCJNBb48uJYmMR9Fjk6ZocaVpRlU3SyfEUt4BSougzEZTNjJLZmenhFqIj5vsmJ8fknNb8LJsK19%2FiqBuPPyb6XzkzhPCfZYEdu%2F8zYxDwXXpnDdmL0RhlhD%2BlnjDb%2BuPABjqkAX%2Bgub%2BzAd8sydf7GJkJLjGMHW7su39DyE8%2FDQzgR78YdHG8QlKpQgLS92Te%2FFa8DlzcVHv6EJd1JY2d0CUfdlrxEpmnB3O%2FRE1NJxlH%2F%2FVu6%2FY73DAVb6EkWJvk%2BjFfXHRY6fcHKKQ8V2U8VfkGVtAXFe25gd9mKay4jKeo0xSRVj%2BuEXpczoRUt4QQvEWXkYkgttFmjm7FAqjn7HcGRUaRqt4a&X-Amz-Signature=666c163c6771cb57b696736835c95cfb52a2f1e3d2a06e704bcd6f38ab1e1821&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSHLNQOU%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXG2U3qWrXBk5dJDaMV6sUqBB%2FIJa%2Fm1CKY%2BuUte5thAiAA0qLtMFuVgFPzSE7MESdSbzfDisUKKNLH9Fe3v5H%2FVyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMO611RhZMfke0r9uSKtwD5OvdTgzCLg7GP9%2BJAQQhXs2wOcXGL3PhtiR33wMwymj%2FmsPPFrWcopvCIJbGRwrnKlhisHTrpnc%2Bu8JWYL8K4XTckubvEggD57H%2FmG3pbuvNgfxFbfuQCerzadaYuRYvDysDMo8iAB%2B52guO8wRGyDmk5%2BLaK583jS4jFQe5CYx8qObMuEkV825Ot5%2BY%2B0P9FOtfr6rht63MxEtEq0E1Z%2B7%2BMsLJyXVYWi8bWlP9fOvHpdDLdlpl7nkAvznhS%2FtT6zj1fTbze1Q%2FGL4mwx9pJdb7LT5jmYkM5pttr7LtRLG6GvmguITL0pStOes7PvHMfHHHWXo2HBhGZx8QjJfdhB1xCZXruO0C3DikaKX4CR5G7zUZjtWVUyuQw6k995NVqny0lDvAJ713pwrSJxN7czfz%2FTqmoBY4Wu4y9mR%2FXERHgxliiQeSTxHIo1Eltq%2BVACgPJAMMegAGTFrUKz6M8MzUlsWkUAL9wCRQkbnfngicd5TRlSVuZvuUeLNZ0Z25pdA1bdqP35TLQNoyUXMPovbqprMmaWWBIReYsOEzm9dJs%2FF4PYcVFOIuyJq3FEqBVO56dgts9QOux%2FlUQWkhVbr2wPNgS5lo7RZf0XbCloCDZ0PyzNpxjkmEq40w8PrjwAY6pgERLRlI3Ht2%2B6mCyURqVIb6qWxuKq2hSIP4UEzYF1svQ0JTSDjOHmJrdd3IBZQi3U%2Flz9fRJ7WYaB8XXitjQWUDPueuqNJplN817SFc9YoLBv6LUzHsQxkgm9AEX%2Bx3yn%2BdlE7uV1H6vh4zmpFgOL2KRXbkT6rDGW7yvl7aTJnZvOcGHEEb4sg1v0xIsWRy7mes7o1dp9L0NBv2PJdvmnibZCB3%2BZps&X-Amz-Signature=100aac3c5eac31bdc0b5d2d0d191f5458a153bb20fa3c1d5a20123a1120b7f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
