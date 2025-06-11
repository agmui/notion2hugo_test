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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJB3QCB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaSU6Mb5d2llKHFWnaIJLezGKRBHTiV%2BTq%2FH0agPFRRAiAXfrHza5LfoytzQOD1O%2FwJOX3e3gtR%2FF8MfPvsr5cMWSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPJiK3a%2BiuAqvd02uKtwD4SEnIgwtZQ7tt1uhOkcnZ0tEopknZBAS8q26b41raU7H2BFLsfrNZ8SC7ck2N%2FUOJL84Lu6EwP5ms3KO7uCJ5Krx8MlnrJOpnkJUbDO3XUUFILMyCR%2FWfKyHhcWVkchEqjHJJweZ8eAzsQDTCX6Vpu0wWlvAtQX0ClNHNZRUZLxU1fhJPwqIPS0ocmrpXj9eYVFStffy4IeLjmTF7Hm7jygTalTeefiCcUf371Nj6c6ymHwRlJ5meZD6GZSWXx3TBjj9PBufkKDp1qWXN%2BZLkGxmRNM0jhfIGFrm586ucnOkr8ayCSWge4sN7RYEHW1ERCNYmr%2B9EsIO2B2Ih%2FeQBE9ORgStK28pR8NKnATYXatxR3wpIq7dd3i1zNNhFZX7ExUgypNyxXQHOoHceqxrrYdGFGunIB%2B8a5pFwJDGDbu4xedHi6ZU6Q4qhtd%2Ba%2FeFKh1uf5NCMOHACgaZFRCIz%2BOc0EXYrsYImpxcDfS9w5lzTL8JfUH1ORUqtYWJIviMPgPFvFEdhbvDiUHkrNi%2F6R4wAG40y%2BSytc48dq6d1KzBeHlhdjuFzh56bEdGBjksTIbQ2G8bYQK6bhY6t%2B7vgzntFijEmI1P6bo3bG57nq7i7tmAjp5xiFrfRhswnOalwgY6pgHjNTRzoE3e%2FdpbC3slydqI9C6VfF9Bu59yCe7v94CU2k52skNzx5aXsdgUNb412Bustb3LUd3K0gJlP2b8LYxWOk0pvDBXNFg5Y71bxLr4U8tCy3Rl9Z%2B%2Bm%2BX39SQVKYwtWONxzbVjGl90wW22wcP5lcsQG0hghCaI2IVdKrKqcLe4FcJDX%2B5cvdM6OqH%2BxDHF70GQ%2F3JGqokwiXoSWay6u%2B2m8RY%2B&X-Amz-Signature=e53b73a765ce66c2f0691d5fa1d38ff3641b401423a03a924afd789efdbea7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FSUWA2U%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYt0WSXDV3xg0toCa%2FOmixZFsShASUcWokhx2gG4K%2FugIhAO7ZIiBCH24d97LFFQmi%2FxnytbFz3wtmg%2FeZPBTM%2BPaoKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywQ6EIv34QBGTm8mkq3AO1Kas8ebw7AyyLG3OTiGcz2JfGd60PRb%2F25w5kskkcYPuJe1BUuuPT1teKoQ9nEXGTkm%2FtM6Upcktz0kZTPmlw2oB9ma7UPuRPNXBCKkLu9DvjxVkdd2gVHZHMZjgE6VVmhRemUPRhp7lZGu6i2yVtb%2BJp7jOTHqFvtQ4CDruI4MZlN9qWyH7X5F8sTbbLjqLwkb134c1iHcMysF3itk3uGngVKHWcwaP0241%2FhsfomueAZHXEnFZSzsQvOJ55Kj7LrPhuMaQPj4%2FCt4NVPXfMr7gIj10iCIVOhbg0JZReFvKk30wOvpqywcm42mRtegYd9H7A4VDlPuZzvyCiy8QJ%2FxobG%2FODGFUanlOmqAFxR5a9DFC6MnWnjePfFaV3RCmI5xwX5ZGd3kSqpWyHYHbCuKT8fzAEK2kZtaA5wADGP71wDDeiMG9wlWhy7YrfcCiQme%2Fa6y1KZKbYNnMzwPdfBNungQtEJrLtTwxi8qv3RfLFiqc%2BLQon1hUdWNby%2BUM65tA%2FiFn4KbAI1vmHeF7iuwiWaabWRUNYq8TJJ%2FjaV3VpJ7NHXJ8U%2F%2FRPqOCkouIvuvDZ47wFv6d6ExUm4rGomS6AGfsSc9NPAKFD063hry370VdA%2Fx0G%2BLtGwzCQ56XCBjqkAYx4MANgXl6Aic%2FESWQr8dpPOFG35ScH0ab017asZgiZIz5VFNuJQj6WmZlGbLY6mufB46xrQbdT%2FdzGg0UOxijVkBRUJXl84JrNyKotfCipaDq%2BAUfFxlo2ekTZSUZ1hZXJQAp5q65%2FtwimNkZMDDwKXacplMCC8uEcjM56ByT53L13VDTBmps6u7Dplg2MMJH36H3ZXARFLGwb9UEICnaF0t%2Bp&X-Amz-Signature=37509b74f0c1fa5341b201337c3190f423f5f60ee67478562d7906786019eb50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
