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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FCGPUSX%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCIEMJzZMNC%2Bu79RhFEStb7udJ7%2FZT3E6RHgW3Y3REadLDAiBMdwixOniDAO%2Fu2YnYo8vg%2FwUIHFtuMKEVozZVjFflYiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBAxQkMyxb1KTBo9cKtwDyAN25tzFyulX1LKyqPuj5UVXna2022AqlhLTyQA6HYyWua94%2FaiZrjKRkGAE9QWbe6Q9zJgZZXe1WgobjnNex35lmUPiko1uqaPLTlBSQv%2BE%2BRepg%2BuGEEmkzxwH3xPK8%2BHqVfbpS%2F6qFvq4jlNgqYxRnM%2FCNU2vHoxhNwsRXIQL6vzE%2FIHPMCUU7sn18%2FS51QjvPeUg0eE9tqJS4SJgyDpzDnPAahprcDNZUZ9nfyKLHcuX9kVPjZBoP3ZkVfhiX%2BsN%2FmYSgGygiHOIhSs02kdlngeBMyBV5hnY4ga8NZB4%2FkUJLTARMUCoEyyH5ILY9KxBJyO4t8UHwQIWLPpp6Y0GABShtPStCcpM%2Fn%2BUKE2aVNoNP4nlr3QR2sDGLlYXB5g8ftGC4aX%2FiH8bSnZgTsuM15kiAwo0d6v6ds%2BfN%2FrvOu7rD2G0KkMWsRC6Crgsw7KBZMrtqS3QkBBO5ysjCcS0uFY1IzRmRGoc9fzTEb3Wpx1v7MiwgP24%2FGHuOw5Y7It%2FuYHd4Lku5HpcEr0bhLKw%2Fb58AoXBCI5XEDOdgH8DDI4RBAQ59AeFjKuQ9Vo%2FwYhvcgU4n4Qvx3NNba4X8g5EBI2RP95zkfVlgwzQ%2FClgZ64Yk4Q%2FUWclTdsw%2B6Wo0QY6pgHD6AOhGxVoLJXAld2JZGBv5X2%2F1Ml8lnK4UGdA3Nl6eqU%2BWF18Vpmsjpd8Gd8q1T2flxoynnzBMgUfhFBu0jw%2B0YNy%2Frg6vmcTRYgNDn6tBszeFUTAv%2BITWoZUFdNNpy0JJz0TFWnpuUnGRULpnIILB%2FvVJNUwCfD8SdMFKA1aUTDFEkjxQ3OEl07KKNq9VvUMbngVQlhldcY6eIEODM9PERxp0bkz&X-Amz-Signature=a043fc6b667c35fcc96891fe281a1ef218082dab69a2bfe505e5789dc9ce77c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTEOQZE%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCZ1EAoXIICXAdyhfIggmYRmpTbO%2BJSy2yuej7APYtShgIgN9BUQJoa486PBESk3DMzpjaQXudN2qVTmr3BkdJi7fAqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2bBku%2BDy2QIS7jqyrcA6Dpjk5AmeR0iJGYD08n7bBiE4AIhHyUUmJcgNp%2FjgeR5tRBx7jAD4NFEj2FGpS8c3iXivysLtvaac6FxsSCiYmdqiaSM5XXHEhfD5zG%2BTCoOkzfGSa%2BeN60vEwD5oc5IbKgIqB9qAAiMwsqk8R0lAK0FpXCgDVw%2FgwEEhuATwK8D1eivQKEpRDoZe06iYshqraEDsJlgQp3BMx8qaSwwKjuCwwh3REGeKfouZ0ZjgmdmDTkb9JuuQ0JeS5Q7zW0jzSJ2nIhV2FXdIFFGkzMcArGB85ZUlZqox5L52QyTgdmvTrLshEpZmYH0A2DlOawnn7SUcgaDmMPXxuX1XY4RAFs8utXFTPDDTUtf61outWqsmLKlxaDmhV1ICQCFaUxUGy1YDKsDvBIam19lKBC6tYjzjS2vNVAPEcNckH1%2BfbEnFB0WD1jlcsvDFodZTj1pEwmVEyu4kNLj%2FcfQap2%2BO%2FVfGEWQChvtfI9MaCE3v7XUBKojalngBJiE3EWmyMRb%2BePhMWX9Y9Rg9ayHwWgdbKB44h%2BXRguykECaIc49MFgzsc2Y8lnoVNKghSSvzBOIR438IBGNwlHQSMsobttMpElAWQETdtRoIettBBkXSC2nIpX9T%2B6xa41Bk2pMKqnqNEGOqUBmE3gShFUbj7EJrtg%2BIf31d4UNW7wVKkHf8JNwYXL4Sh3I%2FMkY3Cx2SreuhN%2ByA8DXHS2jWyDPJr1TlNd5zRaus3VkTpoCwQ6NjY0V23Zzis4eeqPISV%2FmMciLunaWi8AxvVqa5j07mieGhjT%2Fq8bjpycWKmo8EzZzhX%2BbReRCI6Gbeq5PMVfzavjQlwBvrUXYQkNe806Squ1zi6QCayno02m1anT&X-Amz-Signature=5ce36fce00718a442f77e690293e3797c2f16511adf9f4dd816cbee1d2531d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
