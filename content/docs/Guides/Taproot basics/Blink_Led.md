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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7GEUHFW%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9ys58ayug2JqZMqv%2ByCCjFjMqdtscXb9e%2FTwWS2KIVAiA%2B%2BmBoVYD4pCATki9wT8npy7hArQtdHEvN73%2FRIwNH5iqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMf1EWbtFMGeI0Wb9TKtwDfV3cOyrV%2BQJQJRMJjpcH5cML%2BIGQTSgCOJ0VVEYq2qNXz%2Br2rauH65dr%2FFJ9CS%2B2UlFniyutob5ANUQBJbjDeyvYLyutIxBhfBFwXXZOlAy%2BmOQ2qUqjvcti8JYp%2Fe0Y0bjjQ1Hl9988qVEpKpsuyK%2FNcRLkAlb5vlnCVByPCmbzyQgodj4%2FFygpuaHS91xPuvxao5k2tjJ%2Bcj5C9Xbo0QTMUYEE6QCguOlaTX0ik%2F3PjADyFlbCCuacySurjP85bWdPadjYtpGVAADjCmddPFE%2BOe745D4NWSmWCCi6O489YooPBt9J7ZKXKUOLeRTg5aIz4v5bwsJSVpvwtxSBZdrYBGWzV9CVoK4iCcCmRCADt0chBeCnqh%2B%2BgOFbnupgu9iZKkH%2FnP6Z8vCMa%2FrZ1YszI7xjZD9aYjvaeODkI4Fl8eJ9yB7nVElHoVYGxv535q77k1V1bCqsCTj2nhuzQYYzHXSx8TvPgxSHYzGIrWEpklIFOgc6AmcNKjxdy96SwkZZaVgPg7EpqHKm7WmTMVAiDlKXIXCiZHbF5O%2FXgD8C5Nw0BJSrU8wDtqi9ZwDWLoWN7PIHFqpq2YNn2UO6r%2Bjpbc6DyKwPb5KxMBgQd5p0lK6cTG4gyWVn7Q4woPbMvgY6pgFBlpHNwTib4TDoU%2BowpK3pG%2B7fbrtz5HrSHOUf82lLjecGyQSQe52eIpYwQkK4Vku8tCbBCeP6Z6aghTZTvBUNIO3KEMV9Be%2Fawoz3kBCJcBS0LibXEoEU4LEQMegChU6RIeSXTZH%2F1sAQ4pKIKvrXprQqGnr61XRkkz7zhSnXdYXWOPaf0j6L44ZTVaAEcUBkhcc36lVgCNrl3hrUY2TiP9iCf9nG&X-Amz-Signature=64a00ba1545c63eb991e0c63429d1f1573d233b8d2cf68b85583806b96cc8954&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WNI45Y%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMnQ1a%2FhJ4YLX6m3ehwHYl9ooly5F%2FtVFKBUojR4hTAAiApxPJNvxvkfnMdcZqeS3SPJgU2fYmZpuU1hC%2FxMxAXliqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY6sFg7a6YocuHaI2KtwDb2kGKD%2FSHy1fdBjtA4EoOVJy%2F7uGM8fWv9VlxkUOhZ9h5O2PpJOuyz4ApNGifEMmxOF%2FeSVtLdSd4W7nh0t6AbMbQgmg2Ns4CCJMmJk1SELHFvaGTXjTLXMcrfz0COmr6tlF40O0Dm6R0To3J1WahWa%2FKQzc8ZFHV8FfqFGgoN4cA0Qg1c%2Fa7jQSWVbRRTH92thTT2ZGcj3fMJfYaa62mjAMN5ccIYtjjh15LaZ%2BRH4tYJrveQgzA2bemPwA%2F4ISXl9zekwdNvTJsAk2ekJ5QvI22%2BDToIzBze4UJ0EYNVQCVoli9y4fPm%2BVH3v9SeZmcQAlTE8xVYLAl6YU0SI1k4GEX6VCj0U3lSgrzjHoOVrPhhYzAniXMuC3i4y0ifuUsqGLH4AqiMaNooZbv2slHQmSzYfK%2FyQvjnk5LTRJQVZYhKW5uhIBNAkDMExCBKJOzZspzMIrFSbCk8meNx%2FTgyzuJKByBOdkXmeoB8CAXYIatoRvC09g%2BOofHdrDMGxhdatfEcL3YhODY8b6b4n7lyqZaLrwNGo6n3vsvy0vPRAheVFJITnpZLmIOcAX0Cj5dVUO5q4nCeA%2FCsKIvA3HSzLbeXU7%2BuaxrZjyWgMRIx3lFVCAtAF1oylJ8TMw4vXMvgY6pgEKWwsrQdsW8TBQra42%2Fv0seA91g0M%2FCwGkIqQanRNaNvYzJ8eSlIRFrWv7toKybmy2lr1cA%2F7G9o%2F6Ml%2F%2FnfB2Ei%2FzlY2BT4mFl9Kq1QQLqgcikWzZZVauXqO4SRK%2F8GrpA3s5v77MxYve260n59hSSlgrmAJ5wyng2qg9WhLDPHVMbw9%2FHDY%2FSJiqUs6RY1PiuUt8tZn6e3Q3gG%2BTPYhEvBh01Jta&X-Amz-Signature=5d243df29020a636426c06c3dc3009d68794603beee2338e4a13f9cd99634766&X-Amz-SignedHeaders=host&x-id=GetObject)

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
