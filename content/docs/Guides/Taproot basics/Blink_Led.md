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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE6MC2HO%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXuz1rfDt01YH05heMIjHKk2bJkEFumB3AuyudIq7SWAiBzO9QkcV%2BV1a7FfsHYX9IM4YXCEMeSmQwGav0%2BpiD%2B5yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCklP0BeGvlYJjapkKtwDMWVQiDOxmSJhGBfPhY1nGwJ4jbjRhuXQCb8Xd2j5rKmXKVqChSKAXKCpbSMEv3w8ovuM00x5ZFei7dEFAE%2FAGAkTpe3%2F3yFP1gUye4AzSt%2FRBgkqQVcmuHBMuQtBZNa9qFKqpzP4qCkd3b601zF3OEOvXnEataPOytC4re%2F6xMtmTfnylOSrm3L0RKdFGihndw3x%2Bc7waydEgrXnMp1anIiaI3Ot%2B3H8kenJYrJhI%2FEUPlfELovqHLAjsLxGfe0O686%2FPp3ZrVH6yptd%2BnPnP55lUtG%2B%2BO5JzE4gSPkkMeu6%2FfQwXRSUbmAkuMaFcQuHTFAuzch0ZpTQhZktHbFvhsrZew%2BuC6a7dbm5kVxUzsmcj0DiQKWJXtjbefb0UCGv%2F71rZp5doVUoa54Qt3wck292wB3krnYnNWUDGFsCnZP1E38LXFfnFGwKuIGa52kQxIYC2xE1Bs%2B4Ey93o8WUmnT02bkMfVCOmsX7N%2FfAmaAq7QOyy5LQSLtixCTI2P3qIZia5HhW2bZqUM1rqt6yCuj626GjSjDP%2F3F%2BlQybNwhiYEwT1l7sNDh08D1JePxRUir09IZ7Q2KoDwcBAtHyzP9fTrs2y6lfxUhtGG43Qp1l3FlGX%2B2kxG242Y0w0Ze1yAY6pgFDdnBkimpLz4UWlShcgamZqlEitN7lVFXVlmvy44VTdoQPWY3CUmJMZZxRJXwYptVVhRIQULvlcx9y89eS%2B0VINoAIurEpWMyfeDHM%2BoJHNzHEt57C27ULSCrVude5SQ3%2Foppb7jdqN9xIUU6X4nP3UDWOxN%2BvAGSLPk1piwBmofNvGDIwa70YvenHjLSXQZozjBWr%2FCcLDEEON5EpWB886hyZ1Yq4&X-Amz-Signature=417eb5b347df9783e41c3b89b0bd16164dd79867e6dd41f8959a319809fbece5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MMMOTFR%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfvEJ9UOGz%2FiG2zTHCxd7daDTvfRtODp0wFyQ6EB9x9wIgRPlei%2BBELEd7GFUp%2FsM7vjlTq7dblLUIY28stoxZ%2BFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw0I7cpWFqrcdaYMCrcAypoBzpLo1%2BC8nicWgFU5RiLPewM9W6%2BD8o%2FcGlHB63Sh%2BotA2j%2FyNdIfveY3KSG97R6FneD5O%2BUU9Gya83QOVXRM%2FqhLppVLlSvL1t68Ic0caHdzRC4ZnKhuBWHILVBu1tio94lpknK8Y%2BqS76RJEaRNemPAyOVdRYVCvU1vGLgoq6G8JkeYLf5n6IVgCf0DGScnMwNL9D28AV5%2BdNkppiYR4tKX3zUHkJFIVk9reM%2BHFmYECZfwLpyzAX7C3%2B3wu6ACqzPsMZpSE9CzRC8fYUBuT7or%2Fsu8Xpovc75UMvM%2B1qc4nIUBGNcw9C4tVIsL8WR7OW8qK%2FC8q63SXtLv%2BIDNlQbnGJR0WXfAn3QmuQ2Mcw9I0OAh9ZTCONncSo4ruUevXKV%2BjyUd%2FtmHGcC62JbkoYFzvZr5PqMcgaLsNHXEZwc%2BSCJJwTxNBgqVAYma46a45OWr0yL9JOaPB9ZYEiaK9KywVyygSasa21UDb5p4Az%2FCDKsaFon1l8JppKfRPadSKdKwxo7a6pfnRXVIcacmb20VG70WSyVENG6Vt5znsSNH%2BCCiwVrOm5OlRnzMTl7K12BuXhAn8K1z3%2BqkGDvHMocIsnqxHC5koWiYICQ5v%2B1y7JLtEjYC4NEMPeWtcgGOqUBdBuUPr4WaFzhWbV0ncH8MfOT7mTmKd74hj49wG%2F9OKNdto4UCYJPxTJjJuBNTd6eNdO2RJXD%2BdPPBFK07wRQTfHDVjhvjneR6WhAJobUvRlG5%2Fj%2BaN6GilC8K1GWbWREcTdb2h1punumLKU4YdkA3WfIx4Men1uSj9LGayGacVbfyXyUYFNTr%2B6TcQY0mUKnruv89lM9ppqaoVuzSZ6JSm%2BPfudK&X-Amz-Signature=d267e6195281c6ddaeeb9bc3e3333c09c4e138f9b50ec8d6105b39388cc06aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
