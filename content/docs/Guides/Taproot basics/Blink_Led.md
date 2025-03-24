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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQCJZB3%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEresfDqTIhEDZWwJLWC8spKqQXNCseDRr5oCuDU4uCNAiBYuxGtuHxnvaGy9ciUbilslH8hdt4eMBbltwik732eCSqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXxKd6gF1W1DOxe4kKtwDwWHf4T7F%2FbHszJF0EE9H4bEXgB4aSaQH61O8g%2BOH1Kpm9zp%2B41PR42XE4cv5H0rCc6OLmw%2BlLlWYyA7%2BhcCLonZjZBsJZ%2F96giS%2FC8vQ1D6ExveAeNGuv03DRADC0TpAVciAIt%2BJY5hMOhfeSXPHIsOkLjGn046cNicZq0RfY0kzXcRw2yzTmuBSCw%2FSt3UpKSyM5rtJiuP3lh537qTPHUWzm149ryhkV3QkCRuU4nad1UaPVYJ4HgA1PAbiKJBXAvWbolAwZemKKOVeOP4Sqkf9p3By5Qk6OqPTS5L%2FqDvO8lcQcN8d9mX9BekUzrH5nj0lk6F2p0sscXwKBmk%2BXLPDqAO%2Fk6iaQ7h9QxAvUGfG7ZGZ%2FIMUwesCGs9rfLYuPoK3xWxM5ZwPhgY%2FbHdPq0yQXIQKGi45iaJHGCQuuJ9ZOjDTz2FUbu9PEfpCwWiLrAohW8bGFs%2FOxfIBfsblD39lPjFz16tz7h8KXF7gnfZj3k2Htnk9FGW8sfxuKZmXWddu6q441AVKbvLgAVwvvGc0%2BYRQ%2BBnuSDRt%2FyNoGIhBl9a4IKYNPZAGLtWnd5f0tIFHoY8BP9C0%2BNYO6%2FnRVPFknSL1rX0PJC1C7Jp52pGBUY3RgBqrjugdN5IwoP6FvwY6pgFPiwQvNS%2BVXmMlugoDjD2JNigLSCaDYgdgOwPqM%2F3y6qyH9NadqRo%2BJORv8jqkN0WjzA68B7NyF08y9RE%2FnynfqVlq7%2FWkSAHPgbRE6p4ycRmullpY5cJ1NVM4JWHTOFCaQJMhYKN8lNO0RGilJAFk3mJddx6hLgxMh5NKtcjWPhL0i36HYz5KjwAb3p%2F5RU5SVlvTe8FWPXO9PRpWjXs0Sq1k1dr0&X-Amz-Signature=86a4d827d11e35448351c0e67bef6978571cd096a8a460f5fe1e80b4de5a27e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFKZNWKI%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfLzA%2BI5K4cgaCGsbtTUZSfhX4mzqpyDeVpKhQzOlJnQIhAPLVTAY5NBwXphtU57rjwIUZDMMuudL7YUhgmPeo2QATKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BMwTtBSHeTYWZiEQq3AOcEOSJ1hrAhJj6o8CEEtCkKahLXu5bkJbzQBjVslZHLenLF8MgDYRgNIvvC0MioPEoRrbqV%2B%2B%2BudQPiTOOl0tNoZTgMpnJjsDMcAANKW9nB9lmV8tzwwhpI%2Fv4UiVH2%2FtFOXJfTnrawzXW4Mw62%2FNAz0sUnAABjPjgvN161wC%2FHVNZwxyTE5N96w4WOnZgae%2FbOwkkTb0APzwBW9zOmd0ClUd%2BJQMyeLAGx1%2BVa0DrQN%2FOIGuLo9ytrGfDV6n7Qm2AY6R7Vv99qJLw695PTrk1YMRAj3hbcwK8IVfMcGZ6QribmLkv5xl3FtZT358B2kpO8VK389ws6O71T6SSk5bebfvpVCEimO9aNwxBbnTGuqTxkerLVA6uApcog6%2FOfDAzo5RAo9TEtO49tBpiSYJwwJn5ZKp06w0AHyU6czBwsobxeu%2F5k6PUzNSNuTBUX5WHIo6pAgwZYeJUMHEoJ0vKRMR3W16StJv0s37Fj7K1ArYCdK8DfGhh%2FUvWYFSpxXBbyJeLRPPpHrFJXqhrhZ6oeSSH%2Fw74YpdCWKOzbgyCEzEXZ7V9wmE6GCe2fQOUiwK3N3yIyUSbSOnWRhWgOUS3rtkobP4IqpZ6xycgGouIMKZnKpsBKfzP9EqE0zC3%2FYW%2FBjqkAcTh3knKgOhY0JmEyqBwUHTQ67VsiPPy7nMT6kBwWy9v546YyZUZoZxRBovjXre8weR2W69DAyK0IA34ioQ%2BIjxbC9HrTFeXEegtsYcpOjRg1Puqfk%2Ff8xoTT%2FmxR6Ak2H8yHKqGanSViog3Gd%2Bc%2BrIxi2xSolAr%2Bl26lcfozDOG0V9iohbdguplEXuOaJNjfJpNeQcu45IFM47XZDo1NIErw84y&X-Amz-Signature=dceab94541c184bd1e72c9b210e8d6269fd2cbbdd78327d66cb2c0902fe02383&X-Amz-SignedHeaders=host&x-id=GetObject)

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
