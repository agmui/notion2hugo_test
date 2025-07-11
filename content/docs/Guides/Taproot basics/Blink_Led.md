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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP4MBFB2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkwOfs73AelRGhxCa4CtW4SrERJWFoe8yL1WTFThiUFAiBr5LfpowaMfwIY4TFHPBMpPH4MuzbHJC0isXHTr5TEOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgJ7bO6gMxj2%2F9gVOKtwDtEMv%2Fw825OrWy9j%2F34GrsaFI7y2urRnl2W%2Bj9WCtv2DADRthdiRe%2FR7J%2FWq44XVM9Tc5u9E5ziAoFzwXBG%2B8vNEQEUuAX283SH58pXvinFvRC1hgcXq0KFRahzolml%2B4sdcQbkJQZUBfizkKVZCPZD7OCdH1Yrov10NxeisJlpMVGx%2FXwF0Y1A17n2uk2jxiZMZeOSa9kzabSgf81O4g2BHZk3x4oui3BcKVBTiIPQmVxsEL54A%2BksYtRDDKkEwSWcRdLxoMx11hEgD9xjeqF3qtSdwuhktVqsZFuy92kQbWEvw%2FTylvlY%2FgDk6Cz6fCV%2BvHd5orRuT4GO8XMkF9qY2fJ8bvcji9J0s%2B9FYB7%2BYGK1X0J8TcDx%2BobsBb2nZK9bkH4CuCsn1lt1pwgpgUaxQpZIjEAqR38IHtMsxNaVN0K0eI3XxzZUJ5swtFllO%2Fp%2BFX3vJKPnGVpMP696o3XW257yrDPN%2FatAxI%2BLNsVh3iqJuFoy4oefz1W0LxNtkPR1YropLtNk%2F45bHxknEpfS%2FCzVHmavpB%2BBMMeVAro54N2v4VPlFo3u2ubTDXh2MOi0vbDKDznqXQrDwm1uXndvYmWWH8PXYSs6h2JL7K5nQWqs89%2BUy1hJYPL3gwt9PCwwY6pgGIYe2zBslwu3ntDnO%2B7KZIQaHSnXYVW7FIIGB574OUlARtdw8LqwWpBpoKt5advfMW%2FKcxv4NIwiqtgGvQS3aup8kl9wNBUaqt08VFrTLxoz0ci5H5duMzJmQB%2FSbGawXgo%2BX1PGfkupG6l%2B2MUhH%2FqOADiW56RYKABo9TFE%2F39npOofwoEiomcXYuKbWfPH2dz1RbrPsnlPElqKpJp61GuEbeBfGe&X-Amz-Signature=291a3261ce71cf2b6a4e08fc37117fd28250c31cb79410756eadd15f6e1cc519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXUR4G5W%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtkQIYYfTJLB3PwlL35mzZv7a9GyS3r9svjZP6YB%2BJGQIgRTqbdPX99y6w%2BG3D2Clt1U1O3mk2lV96RcTtIV6VtMoqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpUoXBimBn9phKmoCrcA8FhgY3usDGG9hYtzcUSQWvW88b0IoH%2BJ1iNEQJSlZqe19giC%2B1r%2ByFN1SkHL7LiNBSeBM5C032pTWqFSKzqqhbltJivETOp5xJ8CaOW4uYpkcJW8%2BGxJusMoCsC0DuS2N97gBlTjU1fLE1rFGUlycoqkmeL%2FmwiiNKzNCyLAf%2BijWeusksrIvM8Td7Ek2gzxwq3xOHcE87eyt5dj38M2U%2FbqwW9TFlniKowy1Dha6zBG3hmx8Ev63pI4NbHVXUfowTr0BWTzmVlMQPoc8J5wj37MwyRUQNIfIEFoGyoZE1gHX4dZjvMt0H5mkoN3H3x0oOB0EEnVcwCUNeO1A4BGAv6vPONr14gUeNZS2DyMNlno1mY6iFeyDGg7x8%2BEwpkmVbGtVFJSYlKkts%2Fg3JVI3qGL4w2QbYCCLadHp225%2FrVgWQr%2FDlBRzgfUh8sl%2FtvVOXOKYQKFJO4lZmatG3H1f071kD%2B9N9QHH4%2FCh%2F%2FAeboEWZgzuwYnw6bYbdindHiTj%2F0uiz6XBhfPDol9stR4JLneklYpFy7393vl6golJlkIf1xVClmb09Xs8IqTvWQr84aPU4pjQ0hzGg%2B8Wghxrf4Iez5hNUot57CqDsAw91lpPW8XjUMxiqPxwzZMI7TwsMGOqUB1GDpXIb2hCXywWlQsatOzRQo%2Frvg4Fasc10LsCVNTW3Zjr2xTZzyxsuWUwBFVLuFvgWDT1YBM93jG%2FwTM01aeZbJs%2BdrIE9BK73KsB2OA%2FU%2F6RkGdA3b2y%2FmUp7krdUB1%2F8p7ai%2BWf%2FCmogxvv8xlC4hiBMwNqWYSdHJJLWQ9jbNWbHAEON4OrYmZfSug3lVdYBbDryK5LB5ClOuMl6Z6K%2B%2Fsj%2BT&X-Amz-Signature=5edb3dbd083fb2542c8724975ecf565d3555e33f867ce9fe237eeb9761a2b0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
