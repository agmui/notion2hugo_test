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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3UN4TVD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPopxzl343WSEbxuSpWbiLDX4k27iIelgE2PNnlf2qeQIgEIlEAwGcv%2B9jfRRkzlL1%2FXfsDQsLZnIhM9tNT97kJUAqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmQfddrlF1k2hx7aircA1AhTkDVEUPGJcAIsu%2BWeloc23WA3GaG9YB%2Fw5LOkSih2TL6RG5SBr%2FpWQ6p6Xm8wzaDMHEkDnRUB%2FDWeWuRsi766pT3Dcfu83NYIOGrUzeWDa6TFv5EhhE1amkPxUse%2F3JslcI3oHG7pK68uBIxdx0V0uc0YO5fysqO2MrTlkuCR6DC%2BeB2wFhAF2%2FWzS77uln83gLLk89xVdNAmKcwAqL%2B5FJ8mLhG8lIMm8xJ04vwG%2Bd%2Fux7ImG%2BdBHXMOBIZBwBqGhX9LNnV3u%2FMTTIY4JyQVEBY8vXGZNBsKBgReZUmbvofDe2ps4t1clK%2BS70uS1gAIPU2y3H%2BjHDlcTsD31iS9SYTl8f3VRVZ6rZaFI3ldZZ7wzCz8wMlPLuMbSM8JTqgcn35pJv0eiNoyHEugCDSiFZfUJ2fBZmjdRtE0Frl54N%2BGY%2BzjUERm69ww%2Fe%2FEreMLvLlyLSXju%2Ft9RIv46tf7T1gauTfIu3PVMb33I0foopy4oUtbSg%2FTI1e%2BfbHPUZtt0frBxhiIhYpLf9WJYF0rajc2S8gcX2GJ4B6V5XfLDfbDwVnrWz0Ju1y4Uo%2BT8zG1zvJVIHQqUlMZT%2BIAH2jnfgj6Uw%2BC3va4wljW00aM%2Bs%2Bvg2iDBIWgNgZMKWEzsIGOqUBo3bfj96fDuvRwRqVpAOgx98SizGzNVpSEumPND0hCOYjm9F2GiKwlgdLy6TWEP3u82czBrk8moo%2BBRMjUHzs%2B8N%2FLDvFzOWmUJnlxT7wojr3C0vpMPQObLweusyx7%2BPHTm%2FyXxTMm2RTAnxGateErcv9%2Fhzy01Ssj86iHXTT2ueXS5PLSoI1E0S9iNsJ2vL96k8D7i%2BdXaDIzj0XvsMgaXvZeHJx&X-Amz-Signature=997c0b22d4ef3b90fbef0a3ea5ead7f4486728e8e366d20cfb6cacecbc76d55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFGDUEQD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T034040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAIHa9L%2FKwzEagcJ7srZPfEwrtpg5o8vS4uPkxbqskkAIgARqieC8pXwETcJ0FAuCEqSBOybp54O54WATYKHbrnDQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC991xan%2B0OqivGqEyrcAwLaqGbAnxqhx094fiQNNTOZfr%2BJQYBIJMn1XAc%2BDrkQ9FSXktMxRhmZ%2FBpAFtdzoGqXOgxaPWHpXnDA0kfvRwdfWvJ3msFSiBpV3KQwUI%2FzQMvpPBEXvq7zwBVYX3fMKoRcsRmSvyh39HJAvPWWr5YwgjC5kk72E3kX8DGKVi9h6AsGoBiiQk3Z9muXiVmZiCIBaR%2Bd1qVsmfxWPh%2BL%2F1lktrMg2476wuyvTj48ukd7j3t3oo%2BlIP8xKE0R%2Bu5IiaWVPyYRsAygyU6Nu37qhYVgFE8%2FnvYFymOk0WFxfM0MtXBZJMByzwsBVVErH3SP71WfEJXOmlDcTMhxzP6flRcXtDsCO2LKy17cM5SLARF8w%2B7Askqd8FQGVAOc9K4ffsRobzei1jBKg6B3blHMjTiBy%2FUkYe2zf15akzQlQVbFZZAQtvrkNMBva4%2BIjIXmBdQISmD63g5LsJNeek3UJmnIQ%2FFlq8JRz%2B9AHiVIZQ6SLv%2FZO9%2F8GR3t3sP1LGr5JUD9FqhIH2KCT%2FdQQQT5VD6faknTZofggsQrEDPPfbPLvGLWAPWFKQREYRnZIFqPzmbBKnpTsccK3ntQ1zcJ1bx0yJv%2FURvSPh0u2esEXZIeH8vb1D6ZfG1bg%2BLIMJWEzsIGOqUBDEI73iz69YMITYg%2BPNM4dbGTHR6aVszc%2Bxxi3DvojpiyK2A157w0NFbRMgMkskejTJVFtrGuMgTbZXnfOcRzK9mcl6PQ9jG4oT06M18DU8WA5USdlzfQVIrVXmeuNun3upCnpSxKRUnamhCiBd6FCyuUZMslEBpyinwIgPnj%2BOJY1HwxIhEn%2F2zD6VCRXXX6aJfPVeAZfd%2Bab1%2BUml5fHuWilfIB&X-Amz-Signature=7765b29af37407484e79a66d2787429c12ae43b5dafc2e4c8d12f8fad8fe2b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
