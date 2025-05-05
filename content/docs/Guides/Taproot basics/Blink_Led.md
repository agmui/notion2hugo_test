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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GBFJ5EQ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNl5WYySS0D%2FfjVA6QO8NP64Vo%2BaBnnwvU7mFy%2BwIU9AiEA37TZkRfubDYekN2PtVqk%2BNOxsgBpY%2BXImmn5URIc%2Fr4q%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGOYLHRyjgVTrBB6uCrcA6uhAIP%2FCXG2mtmMtgcnu0TGMqVGCuzr1Vu9FQc%2FmTwCi3bYJobFVg0yqh8LLRfZKhMFr2ScKtFRwLUNLpPOYt9MYOxMszqkyyMWnI4Riirt4KabPHEccgKorsV6qGaGVOlPU7I6HW0wPCRkQiNikOTBzTH6QQbCGoL4eq6dun2N8iyAYgRxswVLeK6VKfUhHeJjPajeCET9o%2Bk8suGtFclT0UW4jKwvXefERADNXl6NF0A2U%2B0Wc480ih%2BRCSRnttx1xxiXZcl6vwVPoLDBvXeaIXcEI85wuZjoezJ9zV9ogy%2FMX2njcukb%2FvBZ8Gt1NjdssW06LrPnVppvmxxtxCExDdppcoxYK9PzEX0FW7ZlblZv172gwd0%2FoV15iT4gEXTfMjU7tnQYdN638fFREyjf%2F3Rc8vHl71qpHOEuMyshQYCOFIge7O1RyrncneHQ2lScuQkDaIQzsb8YYXKx%2FaU1kB8uGXBYmIgqh8G6bjj4scnlqbI78zOFhIwms3VIW%2BGQHNT0lql7R5iWFbv2FiLQ4UCMrE7mW%2FsCP12UIw%2B4BlGrFcnOvKxJj8gIrCHvVzl3dN%2FlHvNdp0chHPFS4q4%2FejL6yPHU%2BeePkfODDF2UA4EM8xtUQFL05j4nMJGW48AGOqUBkO9%2Fvtvfdk3dpGglrIUukl2aCnvONNcULRUH9YAH9yEYOE%2FRqauarhOt1B08xwobMWmo7tqKTeclChNDWF8ii2RK4vSyGFi%2BnKhcWlqUv78Q5D%2FgSJWpswDedPjUVn1cbQv0Wkx6WfQWPZUAkCcxGogK7PKORyiU1z4ApXZvxPYVK9DFGWtruBxlqte6vGC1sSlx31BX%2FKUYlG8V4byygRuebaHy&X-Amz-Signature=96e9a72dcf31c6b775284cf496d7caef43ef8427174cb827ccd2131a40eac6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCPOOR7X%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAd7hZme0SY8qO2jt8ESuA9I3zEQRESwE6DEaBtH2G6wIgQOOVvuVgbkU50RM4WbCPpLpFS2hGfnYjtHTRfMekMPwq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDIa97IKGLCMry%2BPTtircAyGMHva5p4Vf30J0YsW9S5TKYzqgpBEDOq8k4dZa0AAPJpQlc05tz7RZ1UBWxY6BYomfn27vvEpU0DttBS8JAZVcxDU9CXVbGgOsw%2BZ75DTZaR5MvX18s67%2BSKG%2F1GF9nYAga4ghc6ErXp006KV5zBybI5BoJwV0TV1UHFrBqSeaXpDq8VcGtu%2BcIVGbkI6GNcWpmPAgRDYS%2BA%2BDc8OHRcx6oY9Db3FJI4zTKR%2Fk0srSgEMYK5%2FkGFsnXjW0pmQJBotGejQKcLhdNraZAzJNUzLCog61XWXQEcbJwzg%2B%2Bi5qipjMa9LUB85PTSEraA02u7x%2FkALyQz0BhbdIRhzwYgEYp9QHsiG73jYVt93khWmEeqD2lJlOcCPYwM2MjuC8YKGUCPjJj%2FrhgUIRrrtJqln3l3tTxYCURNoloahNrEGdzIxgHUuW%2BDPlrIxl2Fk8FC%2Bh4%2FGBrK3RpZ3k0mTTPMOYACVqt3hNGPyt5nsEm3saJzUM9qdqtt8xRzpeizg%2BKC71EYdUkoW7iC2foLKUwTzS7ySQ3t7J3q0YxAtaGFX2f6Ia5EsgGFBY3Faf9aBXiGCC7vT0iotUkYV1tG5BGdH4aYg0PGH4257Z5ieFEukhgQ6phd6BbSsx%2F0iTMIuW48AGOqUBWRKSUHkBMwRb0HoYL0zGf9MMGxMx7ghtypFDSND%2BesOyT63eeiGEIAbXxeDmM4AAKOMiArqeU8%2BG772BIUkNhL04UgcEBsVsU9lz9LKGjOVOCOnrBU6jOhgEKUeXmQDz0nIDgA6WghaqWS7TG4sg2aw29Fbp18NXhwzbfOqM3%2FV7a40YT20QxQx13QEMpKiqwpmOaIbF6rpC3kuHUG2RYydZNb2Q&X-Amz-Signature=71a432d4788684be889815697d3316b9e9032c2b85723fb57a3d669c7ad19ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
