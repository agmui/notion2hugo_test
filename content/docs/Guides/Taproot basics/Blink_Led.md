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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636U47QCS%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIDSB7sc1CwEuL0m%2FgxCxXNB8VneN9UQ9MpoPgjoMFbCgAiEA7Apzb4uw%2FbRo%2F2rCOZhx98NKD4Zpk55BGugrV6%2B1XzMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBs3JdvoAEPUNrk%2BAircA28p07Bl%2FiCJ5IoIrFIEEuQrBCSbSxSPYosYgsFb3ZcNln5oVz%2FdTu8YZkhoVKqzS6yTMZAqVbN%2BqNNemLqOWWw5LmFCNlvktZoNP8wBA0VTDj7qffjGTAiWc7MhWhMOEplpIl04Z8B1G4QPsTY2l9oOj6ZCZ0jn8rlvOlsOqSsJSU7zKWFqKV7tHCbSqfsjn0HBVDgRfbsMaKNhZH9Mv5KwOkpac6p713X0TY19RKwKJyzX4zmWtVaTlYBl%2FN0pY%2F7Bl3xygBRYkcUhw1oqFd0Rmo6DDADGT1CLHCU3hO6c%2BmUYpCZXVZBG9i%2FauJTha2iYGJP60ELmeo2GIk1BU%2BLi%2BH9H4Zfox3sW4I7u%2FN%2Fn96CwAb0JkKuZYdPuuTcNyAJa%2BBaE5hyOPTyrm0Cez8yrZWCL%2FxiB3GFlvNS%2F5g1z08g5%2BA%2F6RIY7SmaC7LRP5VlKuTC4UMa3eYyEO9Pp6P7NB8jHM5oZpUuAjLcahelDk1QSMQ57ACwm6cO8jp4jYzq7ua2bDA37txOkpMv1K%2BTXzXkDn6a1oIU%2FgxfRZEXyEN8Dtl0XeS6S3g1c%2FsM%2BtleNINr3FxOSu9dikSDpqSuZ6DYhaZ7AVXEbUERmmG9T7wCU%2Fv9Q14WxfCqOMP%2Brvb4GOqUBJUCOEo1OXYk3DCLMBsgh9AH0oInVCSUWtTwK4l9zotU6RUlr2FAk0vDlnvY%2BqVgw4gxZHLld6ePMyF6Tx3z3xxeP4YbzVIrLSQXvI4zhMalnz7YLcz9RuhjLcGQlZnOGuc%2Fs%2Fy291p9gM3KG2XKBv8jxyP%2FD3qWmk80usxsZVdaJslsG4MfgCqESlFbs%2FPJXTfubkXuq62UH%2F7%2BOY%2BH6h0qYkcjc&X-Amz-Signature=f07498374b644aa7ed7fbb85245c85e8ce2d8715a0f86b12d178be088efadc80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZWBCNZB%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCID5p4BV%2BiTB4fVrRbAGCtU8n0PXHVwnx2yCnNNy4XssMAiEAvnWEQ7CEytcwEYJatP4wJ2%2FY5va%2FiqVISV%2FLELMI6qEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCLLG%2BWO%2FIhDTBpRSrcAwoRoI03li5ifd5Oy3v3OxbV9ccN2H6itaLehl9a58dy9IPN2cq1A52ZsJj7YEbBcNS%2F%2FISx4W80xgnCGk5BLsJ9tcsB1DUiyK5RyqhJi47MLEg4%2FxI4DeAiLgqvvZD%2BX9HzzdZgs9AgmH6kqxXLXTsPOmPNVSvetaruG6dt2RVc7FZ4SBOb7sFp9aawKkVLEr4vBfqloWuLu%2FG0x8SouCQwAbPQ0Td9vNQmeLzIo3LUXMgvtTG9Rd5p1exNnR5vRetsDUJrmG4BuZKQ5e2pnCGyM1f9iGEt0d7NyyqFhj%2BXYZSD%2FlySLzuu8e3leBhNlaxZTK2Ic08IsU580VMgyAx%2FyNGt%2Bw38Pf5EIkIAVSWF%2FYOsLLnKD4qn5B3fz2u7rdaSzYC%2BE%2FqGACVYLAN5IZ4O0nrtwCr2jXdYhhqIBOfEvtaoWFkV%2BU8B9JBhdKDYDD7TaHrVfwP0aqLnr%2Fqy7MZYx%2Bh%2BNfegYUpt%2FzkXC3t8X4VXmbMpBe9BRylMc16%2Bn4srzAZek2Y4Zhc8SqXPXdj7G%2FDTmpLRBKADC%2F91Udc%2BRNyVf%2FnueAdgYY82lCuW7z6iJItCaPMOWEj5WbMzOhaP87LvqBbx4HHm5BnhCTl0dp4qvATwWcSRajSeMOCrvb4GOqUBwdRXQpnpWV%2BJ4lMPZv9t64KfVYYVtrk0WKHEGZclwuJLla3JZQ3VExikfxBmoeiOjxiDahUd614xQDiWk71I9xXmrgjO%2FEZTlo3Q3i%2FLapQBe%2FvXQGj8agstM5EtcKGTL%2BOwL0yxeKZdSgr6EBnkRlC6vISqh2Xx%2FuI4htyv1kKYMaRHM%2BiXc8QRrTlqz%2BTh1mstNK1KPVCOEGnx%2BS4XfE9EDeNo&X-Amz-Signature=44a261459cebc04206fb62f22231a72ffc7b2b776386b9f4b3d40732779801af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
