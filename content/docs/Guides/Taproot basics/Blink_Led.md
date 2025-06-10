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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TUZBDS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDj%2Bya7tPkeuFrk6IZD1WNue1JbeFjYbQzof1rebbs1eAiA7%2FenulyflL4t%2FdcXsOLvjTHGWPMkfHRr8K3GZj0bLFiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSQtLP%2Ba246ZBpXOnKtwDE6L4TpxVFbKlY0tijysTqXCRSFoQnN%2FgcDu4A4Zg9ovajbMUIDt5pG6yb5n17nXOIHGJaYTCOhYMn5NWdDlgiKyiMgMebfdUEmFomhFdv1TXK6ODDU3dV0MwXy3xl55HbmgwMYlpXtflilpVZYa5x%2FbpWIiXhJwrg%2FaXUuCSuujaU9elPVS2A554urzyJgyh0oHMglhHKcX7yUGvbelT1s34%2FuEyPVqpecBaoQXujvbeEYhGapveuT%2F8WGn6bLGVxxyIBUeOFhj9y6%2BZu8EU9H8nZ%2Bgw%2Bk%2F%2Fo2ldnAkBk8Nq2K%2FAPLQAUwhrMnEoXfrjz1r%2FElw56E5rT3QkWfenTt5t%2F3AOJ%2BfLvDL4m6uCKubLuojYlbAa3RRoUj4sLdp3NFG%2Fwg9robFlCxBhDAejtmfughVAEZfaJ%2FYUbzi4V0qwuQY9s8ekDSoDAVVvgHCUwVXXUkY1z5pY3Zg3z%2FXdZd6EGhLvHUTVg%2BErFn%2B6xbfDedZyR6g1yHwmjQmN5YtSTEd5JCiulZbm0kGmULsMv%2FEhv0VTawHUNF3k5RgjE2baUT4VRuccN35jAGMU9ru6Sgo5r%2BFw%2F9S05aQgi%2B3VB%2BePua%2FJoO9emw6orerUlVOilsiSWAgm65fIvggw9oifwgY6pgFiG%2BzGmhzeVRaQeZgVzT3HZ3zPx%2BYUIk55%2BsvoQxvq8jzTh3wbLBjCWtYmqacPTS5Nnl7j1YiQP8UjcbLDtMvFFZJnV%2F3kdm8Qa0bAsVSueZM%2Fpyh%2F7FC0GnkJGy7ICLUtir5FpFZ6KEuhQIoBTRR4MCA7IvxRVWHIj%2BFom1bYy2SxoDq5BaZynjtQTs%2Bf%2FxJpYWHVLn0BZ4JhO9BANPPiKIwEodhe&X-Amz-Signature=200c343876ef5af05f57fd006792356ffbdfe372d10ca740ab76ecd04f2aebdc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWE6ALWU%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUspk6Iqhe38TI5WPxb%2FeStvTLJLPFbDsqIE0wCt0JFAiBqoF2veYmWLmB5D93UP2ty%2BZa5hKm0%2Bqf34Gx0Wh8rFSqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMADwkqBNH0E%2BnDg8YKtwDJWPUqIJ0rKKNzeapGk3jaU5BWsDnADSpmVTzcfocAmuxXhgu8s%2BRi84pZZ1owqsn1Av4J%2FiifqQ5v2ibaLHzRO9RDbjBXHYN1AaQGLfWoAMLCWHdqN7x9aqoIzrNQq5EOjhT2kcYCDQV0rEY1XYgF3JsQO5Zhj389hXhfXW7SW1MzIwihqwrezSR1cm36dcCdx%2BFvj8ybejsApqtjzqB7NVDrU2j4WzvlKqzfKPQ3D%2FfYYEWl4QHC0R%2BI11MUVgNqkaG3oBONnm0INMjFRCu5bLA3mlglmP9Alh1pieBW3torg8OVHKIku2F%2FWqboIvsUG67kI1lLm4Pbg2ryD8RSDAqAiRA9iRgN57lQrxecIia1okr5X0tMijbgC%2Feg8xnVXLWQg4lDQ14gdfFmEpMT72mJFLWzb5wUGkbymznkWazqRnRM52AYspf4vV%2BzXj7ZYmFFOfqgEetgHs8m2uKe1DDSTxR7WArk2HenaixJnmU7nnWuQykUu%2BXjobkKrpdUMAgJ5OtwYJd6oj0KUPm0CeM7glVlWvXF4IqJDPvSkJPSf5hUfVWeS30nb9m%2BhcystFlrWhyULvc%2FIcUqsOj7sbo2HVtNhCjKJ7qP%2FOUCE%2BFBYsIjRIlHfoPrd8w9rKfwgY6pgFM%2BTS4M36AL3uZWUEI52mTKVJydZ8uA4H%2FzZOgp8uGw9%2FfMJ%2BMX0t4QijiwS476PYP31bBfFr1k2%2FxKiIBWt6qiULwr6NMO%2BShkzPJXPxNbMeFXQBLqyr3eSCF8XNdTMFjplyC8eU1I1sZ7Pe8iln3McDsfj%2BiqOpE4AmPz6yDDqEOu%2FpzZJv8DSeurufLgN4qM4jaDdLJ9ASxkskL6YRO1I%2F5rdjI&X-Amz-Signature=28e3ebac443a99bb3af3be1dcb40dda51a54e88aeab62e85a5f1d7234a1de76f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
