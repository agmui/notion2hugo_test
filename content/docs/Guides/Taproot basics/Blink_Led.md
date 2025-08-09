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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z67SLYJF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCZv01qNG%2FswX0PbZNqYKNz6EdvU%2FYP2LAjZcfjBR12qQIgC2LnYLtu%2BeRgYIMMs2zYCUUbz9A4OBR20aTbwCCTd4kqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADuRQuqj3IFHHKRAyrcAxCDnLg6AX9nuE1srTqwfdFx5EQOUFr93baUkRShx5aBbrULnL%2B3obtRcZ0yAiJ5xxtS9CWnTMC02sUYxqzGw70szWiWQmJME%2BumfdlwmJ2O%2Bg6%2Fuf2cDsWULX2OiAw8uYpQT6IT4fDSnfKsmeUp6KxwuIoA4z5l7rH1WiFXpFL%2FeKzl7C6fE64AkGzhpPgCLUr1DJxbJL4EGc%2BXmYJTI9WWGxrkKvMJdVEBkrdRpadMw%2Bb4McLOf6NzM8xv09Ka5JR5mZqLt8NEQK%2FaEK7OpZyF8TTEmhwXSbWmyLXR3d7kyshh2SLjA7uQZUnptoGWtpRtcBElHZtbdoJg5kst1VppciqMH4lxaRhFY2rj7qUcLUxvxLZyiX7fsx6QHE3tteV4XPOboLiwvWQ39J6MppvVsndCK0wUd1ZQhQOPDXbUs7L78H%2F%2FV9yAdxO4Iwz1o6HBKdNsUQRgcJZxLASgRr1wSBmi%2BTKs0m%2FRK8Y%2BOrrvKbKbfjRWCfXeA1ivzmE1XzmF39HCI9qLCnzanslDx3zTlEbWBBuSdiNZNfeEiidXaD1iiWjue1YpCeVbGAV6sJmF9rsoVf29R2tR1M11wjYVLssjfbO%2BQVZm5hZ3DaP5G1TL7UBoV1ETQ2vnMN7E28QGOqUBfL8ZJ71zYCZwWORqn1I4H%2FhhF8mnUODmqNfK6k%2BoK5S5ENbY%2BBWbDMkMFj1XUt6Ujs%2ByzcrKjwzIF1afCHqPZGUWZIthLTI4PWWtaRQQAGJNR4v06w0C73gG4mymv%2FQt6E%2F24FlsZPbGrSfPN3bF8hnyf4xB2ykAM6%2FN91ah7Eee3GESE7GL1HKa2lmi78cE0ZJaI5luLRTOoaO9%2FPWsX5%2FJ1Dle&X-Amz-Signature=e5185b229bfed7e3ea0314d5e4350a9c7b7b557193fb4b08428c7f2b75d8ff36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAQFEB4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGawu7KMCl39KafLGpKRYdmyUu2rFyZsozhXEFNenDOlAiA4WMgV6SIBqIf6fO1pZGYlk%2BU6xe%2BmgBzsaecRPjoYtCqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQbbZYa3R164UE4JKtwDzT2rLRSVDycXu78lw5VtCzMz566SIeQo9dili3PO%2BRFtjoU%2F1vj6P15vrD%2FyY4S0RMUBeBXSnkSeEzSGcrt13JCKNMBlaSzGv8uEIwSbFnTcFcPIcFxIKYBAvsaJQE%2BxTgLssvYfvYZpgCXFa7%2Fwe8UIA0vY7onlZLARWE0cwcW3gmIYMxBTIGzdxJcLL5WzfqO0SyuyddFfn4wQR9Bvh2O363%2FXar0tphyj0kV74vVES7InclLYT2xu0%2Bnu2zK6kaNQzDwt5Rm2qPPa45xdCa3E2%2BeiWfZDgGHm%2Be1PlcXtqECw7SEbDbtBYl6%2BdeQu7NXfL1j5vFz995NZ21ac%2BP9X66oEtupbBmAEOhj%2Bcy4FbNTtPXImM7iDAPSJMd7IA1fOaHlCPoz6YcD8BbyTNm5wXBJj%2BecURN7rGcojQ2FutgQv0GGOAWcfWRLMyGYBh908ssbMmFHPwaW2eSou%2F8DSd4AF%2BpziE6H30qo%2BpQRRPyo7A6Oh71bsbG4Ug%2Fjmrmb0Zc%2B%2BlWFdqfRseK7Z3FTemvQt7muV78eWnaJjeZdy%2BdjFmQzgx3BryPlVOJTqzSFRFQX81adnkGlrDHZTrezCGOKOWy7F6PHZSovGa6RgZSAixdmddRb8BrIwrcTbxAY6pgHwdTvkPn3NY%2Fep9%2Fm8ztjB6v6cXm22pl7GQQnnwC34OUEjmov87ngrScQiGeMc2I74Ep%2BfLB0YbTM1lB22pXuiZUU2D6oSLUhIiOHox0dBZ9ztLNjfGQ%2Fa6Y6s5aONbdVhlVraIoUYQPbgjPQJqPelMIaMIDB%2BYgMpe0uJBLr3h9wD%2FYg5fpp3UM1PkzPkWwz7PUbX462ykn8zT0vRuNccriaCQUEk&X-Amz-Signature=e0bf68f19eb1cd8392448974bf22ab60ed866a43f384eae6c8872e9d8d8372e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
