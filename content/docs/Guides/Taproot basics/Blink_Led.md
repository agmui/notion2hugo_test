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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ATIVBUF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrYERUFA%2FWFFr6E%2FcAQZsKY5QUzZRqTLCFtjEgd0m5%2FAiACWfW8x66h%2BXv%2FkUed4fuxeoMP4aIrxR8mjx3SORedzir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMDjZ0X8nOP%2FImVut5KtwDeFrGHgJvQM7reknrhg%2BldOHX6sWWl%2BOBTcpSWsui6uSm%2BClYw4XAE43jvjMelnJdcG99ZvojVHsq96mPZQbGggseX6n4e9E%2FkzVmbs5ipLbQDsGO%2BkdSOJzdanqC2JASUUDVl7oCsLBCKKzyWYESF7ILNS5vqMjIC9Pl%2B%2Fjdy8gUAsRC86m3kD6V4cRPVfwUGPk7CDhmteifHyoCsKTe3WTOE5tkd95YB0UsX47u3BqtYQl9DIwKjlVK7jCBAzMFZpiwv7%2BGNmd73Ga2bj51cHIBUyUupoHDrVEGgSTgVK41hem5HJ1C3noUaTMcaV6y5m2UTidc713Tsrr1tjLkHViTETkiNDA6D7PmPAIOtdbM3rBk84%2F1jRi4y7ahilZgaIKPghPo7IrSDRoI1NgvmHsWPY7cT%2FZzayCr9p6pYFaPhc4Oevztv%2FUdcF%2FxHNzCNvOM0T7ISRVKFGP6zn1yC6byhI4mpZhCr7sQecHL8IU2fkyd4ipu7%2FmJ99e04tm0m5Ext4w69sFZmua%2BMnEMIxGes1ZW9viNE2O%2FVTDlA8le%2F%2B7V0CBaWM3rfi%2Ben0p1keHi2Ey2tiiBZRoSrlO1Cuf9uv1ZF1SCdpl2NSHs7uRprAj4ML4%2Bjc59x8YwofjqwAY6pgFfioe1ZehFydjx%2BnnPBvKCXIQ58N71d6jK%2BGSVnAMM11jZXXM%2B6j0R1%2BWkIaOM15NY%2B2TSqErxwqSvYNDcdp0c3cmdycz%2Fy4gUcNpuggF29gIi8jfoPWxPkrp5ge0Zl4eQJ89molYYpOPSDwYC0KqLS8%2FFlOh%2FGdQEWB0auDbFbKnuiCVp3cGhKEBRqw8LzPVpaire4gOInKqbAeX5xMDu0WGS2TLB&X-Amz-Signature=614ad95a51921fa95cff4e6218c9093d08b2acb8b1232cb6b502a44fe344dd7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXD6FRZP%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtPDBv1hpfPOoYIVcXvDyuLUR4r%2FxqPu8OCJmYR7MEkgIhANjHbq9Nn%2FM%2Fj%2FIxD85oMzX10gJZlfsr0ht1FvJh%2BpidKv8DCFMQABoMNjM3NDIzMTgzODA1IgzSNvrmyFdPW07EUXkq3AMOF%2BggnTq6tTZd%2FkpJFuuvjWmkOKRG%2BCxxoeeoyLDlVokdIc5BfNZZxIT43X1qMHn4uukk%2B0707a1MKZ6FHl1qo17Rk%2BiAsSO%2B8L9%2F8VVbyyF%2B0y2ZgXhwSUGcsXbeppSJHYMiAEYDoMQ0U2i1dlWIvw8slb943Mmq%2Fno9crS8kzdt0j%2Fn8MP9Twl1vBh%2BF9U%2FR6pBza0osyOC02TP9zyBrszzQ9tBF65zu68T3xEfsiNgtFzh1RcCiTwcP1nyVcD3Uty0HheqRRqifLP4m3u6FCsLAzvlgEMevlopy%2BVQOTmmi2UL6TEQJ%2FzJTQWPOM4oLnWqwquhP3256jwxGjSralgXljedEXWkgNMpO7uyilAVywB4YwX3LJkYWxy5jCU%2BZfU1LYgQEAaPq%2BGljQx8z4LWYSwFQwDhh0FbFCJe4enrcVfiubzj%2Bv%2FxiEBKktIWo0S3o3EoumOzHf8mqS7gMIIx0l1KpLtzp%2B%2BDn5cPpNwPSw883Bh04TVGXfu6Crl0HueW6VBzb0YSfyG3nKBY7hYu2XMvOZ5vliEJCvDVTaGng8qT0XEOyGtN3JBV94D9YxuytAH0XrIXuCaOvOj%2Fw%2FdQylQZTlNSUItJPzJ4lC7OGce3wmYLTYfIMjD3%2BOrABjqkAYZdsjWLF8vv5gFsCFdPk81CiuBJAAo6RcwbDsOVMzq4Nm4DM50TrWV3t5Hxl3LhJB0mauMko5iHoVJ4ODeqV2h7hoTywNrE2kdTl24EkemKp%2BegJDMES5Ip3jzijdSPI6U6XDo0C1buYTdr8jR%2BSxu2Boop041ZYQnSLCXJ%2B5wejTjs1AkglKpf8elwn6LO37TH44Vsg74svBTDTXKJZSm0m38k&X-Amz-Signature=7ecbfb217679692b86123d21c3c7da63e751f37cda8b0a595139f0e1e193a149&X-Amz-SignedHeaders=host&x-id=GetObject)

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
