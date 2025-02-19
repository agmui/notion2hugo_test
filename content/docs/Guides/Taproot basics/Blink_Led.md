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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQEOGS7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDeW6BLmTS3KpjKcn7sgw4UmPAoEp642bUPg%2By7ErEhGwIhANOKtqr4pHuCUJvOGXybRO2ct%2Bfw5ZQcFAHmg0aKPYd9KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwwvdp33FdCo9i7TWkq3AOA8mw4UT9f6KdIfgqjfggdB7uoM%2FOJxVYVjgy6GzUJFjXuCCy7tzIk7JbmBMGnZzEf1J%2FECVh9JyNk1x272k6yoTZ%2F1FI6KXJr%2FZGp%2FZYiY5pSD06QCMvkw%2FYdhbikufChGICPedY6pU5aCS6W%2BGTDNUWup%2FUUYiTx92e7N8hVCzsNiE328FSblWStR3Hw%2BwMC8VQe0%2Fbs9ge06ppT3IlU%2Bx3Jefvy9uzdlUfwORGnbh99OOrcl7QkHikgxMMwxZJJ0J4IqmfSQh6HXWJcJSklPl0MC0WT9swt%2FzI0GoAFyI5akt2lzeAYIA5PtzuW1he%2Bi0gsFvPbWcb6u8Jg2FzdaxgxHZw9HiL4fMBa4dmjpi2fkW7Ungh9sgUK4Dn%2BKOjKO5xFek3f%2FbGXQXmQJCyfYV8mzOxATaYBDZGXExHoL2wXSfFPFc3phHxioLui0FIabFoBKc%2BK3SRApUQBgK6vM3XYRXeG4i7a%2FA3iFzx2WgnDjjkdJBQGa0R3IcJOxMwmKpZrUkz7QdxqInnqKZphcrUOS2PYPSI0AdqFqggzXC%2FhvqHGkEXqcKEP7lMjHNPuZqaIsENTGubQ1ruEpbrs82eLdqoher9DwEZat2eXR4PlXp4VtDVm1pzovDCw4tW9BjqkARPaizxBHYoK83gO0xW40Qvgt%2BJnbv7%2BFqQbfygOntAKufaWd2JYoPjmHn12JTLTg4uFVuqWjMrTjtqYETmiGL5wouPUB83%2BhC%2F6gDn3UW0CumhqWbnED8CIsZ221at5mO7NHH8hFLpk76nDaJwf5EYobNgxXXwqrYyizLNg8gymkQCiF4xHg3dDAbrPdR5NZaahqQKFGM3%2B1ok2kdsyg2NULPHy&X-Amz-Signature=21100c710ced0837725965eb494c495617318b5ba94b0260839d7ecf8654721a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJ5QEVL%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T061056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIErp02yTkPU3pW4AaNXDJO6jdbAy2RZ8AkLlVCU4fthFAiEA01LyKp36coLKfxPN9bil8AAGJIbt0Q%2F7AgbVlIXauCgqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAb3OjU96p%2BHGWGRYircAzSab75Rk4fGfvTkThOEyQWDhaEhIbMH6ONRJn4qRDPU%2BaPD0Kxm2JUpjSNp0KNfhs2aWE%2BvhaXXTyg3IY7ST1%2Fgjny39FIZKzrfsqUMcpG7cZc1AoXSi5tVBD3g9%2BeiRL2KXy51Cc0JQOMZd4%2BMhiQMVsKuV61faxVYF9QWQNI0PK5d6mKdDnbekqdpTYxMCTDnb1qPyUlHxa6VSKyoX%2FGoeZqcG%2FFmXUd%2FAhiuOaQbY0nP19jcUgAepXah8wmJyZ0Ap48V1xFrq0Uac1%2BOVigJsajtGhrsGwzZMfLP4i9DnkjtThRAtzKyOuusaajnubji6kfvrpnd9%2FOkHgHwe%2BpOalivJDO9BXFqUQxd%2F0o4RKbowQIKMP71tAU%2FzwVpKydsjq0NbTD5t%2Bxn9ACwdJRoBZtW9C2131uyVxhtNq1KOjtJtSby1mF%2BG7UQuKKUXTzhSA4mnEzqEbXm5SespteR0sqWaDhFGIwgejQ14QUt62NKGRuJer01tzSjFTFhPUkYYgn%2ByxoH4UMIoZ3AF%2FU7X%2BCjo7SyVWYYQdc6Uq%2Bx6zvVEKRWUPGrbsKP1hA769Y7dsmn0Yyt5PgKAsgPyECLZEMg7b9qKyd6SLrrfT1odwBxheca%2FLwOBRdMMJLj1b0GOqUBkjSCANjeSsKToM4BXwoSM1hyOdYvMRXf1Tb9shx1wrzJmLy16zZyPzVWxlbcHzq9%2BuwlBnkNbe8c%2Ffgags00qFoPVA%2FENnOWvikj6ORYWgIt09Mf%2FLJUl2N0uqWIovpNogPXacplgwT4muhk6WCgTgJrsBB2UoXVNV8p7g%2FnRoZSHXATFZl3B1TQr55AE0MMUClqIoeQOQvhlJ0O2Z4gkVODZD%2BO&X-Amz-Signature=26e7fdaa0631fd360ba28a1283e1856a4d7f0c43231d9c9ec262493415182c1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
