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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VWB6FM5%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChtindtMSJgQrCKTR%2BNG2IYYMTXGbIFji5e1bQdAUZYQIgHbj%2FOcBZm5iXxmwTXKh8wWIMIfTxEo5BN%2Fq4fAjFuFAqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGVI25uSbral1YhAfCrcA3ouakAntA0IYa7HVQs8o8A4INzu3N3dpxRw1zSllEijGnpfo17pCAa69ZbD5yPmpKvTkQAIDDAs9iH27UQTSStpWuLLZTNfSfcHYJOA4GGKvrpDmhTcYsNFP%2FRPrRCrjE97uR0FbJmpv45ZdY870f%2B%2FEy4Knj36fvsZqyMQQ9fvRWJjBGOPd09%2FgPFk%2FZTA1LKlQ0EjewiNfCAePPHFsHcgsryw5bosqxC%2FomL9E6vd8GU2shruhXS8ePxXoJqfCOkF4hKiCXGruS7f7bKqA0tA92bGtJO8Q9ZicIeHEzEk5INd3jnM4%2BWaq7oKLaS0CQU1OGosgSyzlgFkzhYn8riI47HfrHRJEhcHWD3suujsAfoyYVqgTNiTPsMHZ6BJ2IpvBz0I0Pte5yqkLx03X12gKWPmD6qMQB2JUVzwC9hYZxgTrjL3qbZGLQ91ghu0yheAS1GRfJa3C1r59gVZbrQ%2BMBkxRhmdqqb%2BRNfx1phM5cr3IH37Hqn0%2F%2B81v%2BbHlLd82aprGuyiV%2F2EGtl05uUSvbD6%2B7AuLZYIq6nM3mLJ7mUebcVWYBiUvk1%2FYhePCQY6un05161hMIF9X78vEL25n3rslETkyzEv0xLkhyHDipQUi1gqhLHUW%2BqKMPTUzL4GOqUBXoGbcid6unKtVFQZEw8S%2BrkSNoQn1RWX9JmtxuZ0d1vp62frVLSpniXzjXDXU4LUq10o8%2FnPiwmqJEX4VReSf8BkMp00h3fqzvnwpQ2J9brHIe8d7Q%2FCHUzbE39ZiWzDHDaq7rcNv0YbQcM91uiH1wc61o7QdknYvWGop0%2BNVN8CkWin7NaeuR8%2BFWm1gGG0mcQ%2F1WTy%2B7Yy8RYfCQpB%2FpN0edMA&X-Amz-Signature=6157a5c9b1432462b9f737a1718a10937d320e12f526baa4d54c1f9f43efb789&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EU266LD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiv94bZuTG8EDwCfmmy%2FefrJN985ZYwUIuQhIlwAddLAiA%2FmOeUiTPzqBUgK9L34KDtkvojdFhzca2VRYeTlY%2BF1yqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMth5KFjwA3oT5TDqqKtwDI8RAx%2FGiU3g0pNi5ckP1lGnHGsggcaJAgDXUPSxmdefzE93z0jERUGLwSkTapv1S%2F661gzrtDBtVznBhFOeF0ZlVqmonrqKTEJD3EKO99P26IXncR8iaFoU9yw2uywgdtcxJOWOkaTa0VOSgO7K5CY2%2FkoOulWNU3BgkG6dwE8C6Uw9hZ6Dkaf0%2BPeNb3SjDkP242wmyx9mdFWzBV4Z9BCy%2Fl0ITaBp9d6AIWkhjAq9XnI3%2BS06uRqXvsXt9jbI%2FiA7S9%2FD0NNh%2F7ImHppWkQCI%2B%2B06bYqnaK1bKasxaSlPMJY8bTRX8UTbvu%2BDn0KgyVBE4AVfGuZpUJ8Gy5EVo3x9RKgNF13P36CW8BGjeusvpU%2B%2FCXwDKCNUW%2FM3MkWVBuU%2BhYpY3rCh6fndgteOgMw8dDWrYEsdO%2FcJwByXDEBXyUzdiWe6H3DXYtu4IpqOMBWkXhauvvN3Dr8iedVITHPLnfG9hAECOgQciceVEi6OlfC9PjTu6ULtpvSVjrqMNSBz%2FqPQYQZksLmt%2Fgi4iUDdNZ6U78dlRzc2UpR6c%2Fm8urWirTflxWde4Sb9AXA%2FBxOxIQY2ScEVKS5H7SAgY5j6WrsWge3v1Zd5sMe4gGqyv8nrdyQprvEbhjdYw1tXMvgY6pgEMHmu0uTbWknC0Cs6CQI2%2BOXEDKuh%2B5WsLvWC6Hhj8huRwL%2BE6ODSuBnParnqxIslgwEKcuMlK6Lyx3t1oOhpVFnUF2hkFXLAnmKrBRdO6ZdgNDxLgYJNWSxMySxyCEQRwhZmN2GcxXYRerkMCagebNckdyTUhQ1wDbUXBw8aYehmNcgAYuKaKsnF2P9f7Zth9TQhI%2BFYsiiAtNshx6kFl0r5Raasm&X-Amz-Signature=62b7dfe3260aa0b89225c99d5ef38a41c36105958d3649064d1ce0e18c80786e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
