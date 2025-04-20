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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AA5TTMC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIF9LicWmUtnkoMiqZG5V%2BGJoaNzJ%2BJEgxYghu7mLm5KnAiEAmJXaTnwv04IMlUYxImgFiaE1yKhAn%2FJrxIsKCDGhscsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGouKFA4ylR%2BHYSkrSrcAwF79qPQB2cXHRDxtoTKH0NeHV8WTSZtZp0Il2lBHHCxIpfkbf5uvN0SLeslRDokMRUyazWFR41mqsWsbpe9Uhq%2FReaMVux9dlgxWjOCK2xpa0gLZ74QClfPvSbhrv5aFpf1bMrHC8cq8Xu9GGcANMW2abtSPGchWNKhSZ8TLn7Oja2ZU2ngC2kr8pBVOLgLS4SWZZ9Zky%2B24ipEq%2BFtq9uGNCVTzsxsWtFTVtSL3a5qY8ADnPYxRumt50M0aDpVmK9FzBEHcIlqkQkddjYFXq3IbySc7lB%2BXSKxTzDdfZfGKqUxTlaE8hHolHW%2F1fHybLY5gjHJLNMdZg%2F9Lk727tj90Dfviw55aNqw74O8onwPI3KUVIPY5pDv7QP8NnAWSfu3TImLY8V7uJwF4IbxSalXLFoOM5DPd8kj6nEH174uaUXZeRuO7rqGZUpAJguAqjeyYun%2FjAkW%2FI5UH9iTR4aAuxedb6zqRdmuNbeXZqwBsVlR0GcHbF8aeGCDCAUMDHZj6nkwRnZUBoU2RMuXMXO1U5vlo8oqDDpXU0At0oJGSDdvwwnmSbXybgYvK7tI9jlil3EYkdfBudhF5949N%2BJbhqrVk4ZKF7pcq1aZY2K76hHQMlfTJAu6FHzHMLOkksAGOqUBC3eeBBt8JZsev1ZNG%2BLneoGib7tIhRZvWyBbk1XQDvrT8Z2Pku%2FnLX3xL0YuggeR4lCyv%2BEeBHEmNog5HsJY0xFJ6Qzn9vSaaD0ASwYN7oKA3JsDZE0JbQYXoXm4EtHUnxIv%2Biiy7QAP3T7yzcAUdyjgM5f%2BHR2YJNbYRKk7gXo%2BNr%2FAvlbjbyCiaQySTiDzmqE%2BC%2B2j0aJa1%2BIrADsIKTUeCrcG&X-Amz-Signature=39bcb2d96cfd1846befd76d474186d024459d785fa7ee0ac1149bc1fa5daf80f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVPSQYHT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCU9zeNYeiWGXMmhm0Fkc4hQHGSgSNcMVUmvC1wPQUu7gIhAP5frNpwsY%2BUNNfryqdryBXLQZ%2B%2FP4nhxEqLmoECLoGeKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAl2CuoPDVYuSgU1Qq3AO6lcWbM7gtW3XJEu2FTsUylgiyIIuXyQ%2FYmrwbIOG0p%2FnwYyq9JNbmK2VNwoQuPhd5bd4fXzTFDqRiSlORcaXMgJD3UgtIjv%2Bvag7SUr00Osb4iIx4NNqV1joct9R4NK0xg8nJXgInTYLhxTA1L44d52xHwsgzK1OmgZWe%2Fd69q3WNdh2IfD5LSqf1qBdvll1hSOWm9JVRDVha%2FGLzS4%2F7%2FeCXJOND4Z2Jrw9%2BO%2FJrLCtbybtlfnlLWRzkEQRJjgFIFELJwT%2FRePWK05VXtpHjw1MLmikbtOHqmiPfsSq2VXWxkMLr7BqGKssl99jZeaYYOLHrcLUdj4TUXt9PMw1URftIvaQXoMUTCvXzE9poFkhpYQf5TjhbOSZ9bRKJ8pjRz7xLRoXZI6J9jFSI1nz7dO8haogWuTW60YuLh9sk68KPs4alMRHe7HpF3SZV5d2eBz2I0bAcN2ezuqurSDOQX9W%2F3mQnKbgRx3C9p3dll7e2z2DpKGHsoItfJ0gDhjoRSJwE3xysqVnWgVaoYtJqkq1oAzLsxGgqrbKaRc54L4YSfbBpFxs8b2iT78mRNnQfd%2FP4ECPA1fabhQcsH26aj7StZDJ5zZpECPHxPwnhmAmq%2BP6jChCEzkOVHTCfpJLABjqkAdgZFiwF8xaII7Us2dsWZQZdNRL648O4%2Fnn%2BxGooHMn2YZRlx86wgkg%2FGSewdZimFgqNhHk935AaVzO8IpPSBt4Za0vuFxXo%2FXDXcJY1tfkhcodLBFl9Q7hP8GgxsFMemzWYlhy3b1BrFxVeI0l6k%2FtpqPalsx%2Fn5M4LWIBGtyhtxmL3zRZUxxCwotKzZ9KchsDXiCwUaYkYngY1sy5CVTCyLgPZ&X-Amz-Signature=5db99602e0b075d5764abe4aa48ddc544d60afad7f6cdfc85def4d755d1be306&X-Amz-SignedHeaders=host&x-id=GetObject)

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
