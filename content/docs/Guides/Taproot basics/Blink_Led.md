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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DTWHKHQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIF6KZJJEWJRw7dMDTUWfQmCggCJcAhoI3l%2BS%2BomE9hPwAiEAit5paaJFW18A3qXh4Nf0ENaTMQnfWdX1ITb1%2BZ6z8fgqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCFPy7xlKFPm44c1ASrcAy3hULrT5fiixQ6HhUgTdc%2F7zkSfazKR%2FSGWTxSQNaOOXsGAMWS2g7C%2F%2Fk6n8QPQoscgKhxsPY3%2Bn0LTeKoUWdnJ4j1q2nKbtfDREcNzAH5vidQnLyrFSAqwWZ05g4qbER3DGCz1TqMeN8J5lOKIjsRyXa%2Bfp46jJiyCxF1F2XcZY4PjO4GgMMxfy9IpArbNIzj8jp2tUHSNznarZHgP7KqaTE5eM2SXPU0owEUoVFIf2rSHOfRy1SjEH5%2ByK5MxTfRomlGmoRTLZW4fN7TeBY4ZEIDmQ268%2FTt34qHZ9fkmQUe6Nt%2B0Ce2BjXNQ0JchgmK%2FRmyFkAy1p6zHGba%2B89AMe36HjeiFlBcwJAXwj5q7tBWklVtouES4o2B4aS606AwfyUxv3xTycKENVEKvaAXOBP256zUB8OySwI7x4SVXsjwifHbW092go%2FiQ%2BoOtk3OWYSQoDLRbZ5kLgSCWpKldHNSTB7uu7NvWk%2BmyuJrYO41QtQQsqp%2BpGO17gyICUnbqkOozHgNy7EVTZxLgjEEAfbUB9AWf%2FiQ69BJyafabQq2rnjzvx%2BTw4Ionw0DIHm4OUH5KsEozlXDPfGftNItoKEH92b4T%2BhoFCH2CyvMruKg%2BMhvrKYhmdScPMKXto8AGOqUBsFz%2FT0U5rghNfipGFxJZ8x8%2FKSb9PI5SIp5YI5gFXixtkcvYfZBS101AL0KYIQkS9tiPdHT0rzExJt6lFsKXv0oufKgPeyQkb5NzMhXVEjptdbeW3ePTPckNhLx%2FAXy0Ren15L1S3V8hc59o8gRcG%2Fku0gi6OiBYs7hgrN4hYaCHw1%2BjB72NOW93oWOV7nrSKONqzUIXp5ALrbIc2HIOf51euOu5&X-Amz-Signature=185b653a5eb69444b87f63f31ff51d299112bfc7fc78d1a447890608bd6bc1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44CJUH3%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQD7SjeAf7YfdiY762clXHYageNQ9UYS0fY5qxqCs3oy%2FQIgN6J6CVYJpex6fxt3M7GrSyk%2FqfBnlug4I7HaJrI1XcQqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEiYIf%2FEYEEFu9yrrCrcA0Gdf1lZ2Jjajlp%2B%2BnQWnbWNj7LN0%2B4%2BgIlsHtlo8NqPJtZ%2Fj3lyKX%2F%2FVkEJWxajvDzW2RmXWVb1eMBPladFlM8X1VmkfOzswpNdCeMOwWB%2B7W4TrkqFT2yaUAoLvSZ%2BXToR%2BDPUWl7qvuKpJl8T3RxgPwNLKm3JZzSQwfkMoMBlk353Dxc0XD5QtsSq45lSwGvXy%2FeFbP7jA6hrBoQEOV9JdFji8svRH5RCgMDl2WyV1g0gHkM%2FBOe9rJVqjVUXEP69Oor7qORleNXoliP1ZVsbxg5n%2F4GmmZCs88t8SS53B3NNSoGvHgGQqppzfc1Zo9ND4itnHWBFf7u6mFDPGNNKVZHw%2BTUV%2FAqSLogYlJbAp%2Bh40QXAazdeS1fs8PS%2BsKwdUmEJJJUR%2BtaHjnrwZIVL7Cm%2F9%2BVgkPS0OZ3AW6CbY4vkhJLqXHCcQ1OQi8Q2jsWoJAuEZ9L23VVGJ0iWEa%2FfenoK4fHWcjKKYxmw5emlXgjznkv0J8l37QRuQdms1g23N5wVeBFVDbnktbF38WRJ2vxDtYDzC2nKGv0P64hPyxujagb7qcYLnPy3zVIoIf24VZljPfK7IuUmKgLcsAiUUOM7N5ISqVUUt5EzJS3g3tuMzhB01SspJLTTMKbuo8AGOqUBTEF8G7ZCsp%2Fh46AjLOe0ExF77Xnxk1EKMLT3nMjXtvVES5mZjxJpFUlob1%2FNi%2BSHoF4dn3JZHzTE%2BjaS%2FOYJ%2F8%2FQpNWwDmtBm%2B4Ss6xajpilMOwRnzys%2FbhE5vEu0Db8yw9OdexvupbaG2hF9nDyx288q33qSkXRxBFiD8Fma9tBNJT%2FUolyUUMcIFW75Hs3QSFVWG%2F4nwheKqkLqoWp8ZOcQQ7X&X-Amz-Signature=97b993d8ca6c2ccfc073f61b0f01fb1f7055a12b2efd8913648caec89b6cb254&X-Amz-SignedHeaders=host&x-id=GetObject)

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
