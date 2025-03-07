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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULMHCO6S%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIEaUWF%2Fn1Y61TBDlwNkeAyN6Hiq6IR%2B3sc%2BtVct27K7mAiB2TPAz1lAIlHL0W4%2Buj8y4G7VoXyBxryqlQcWxBzGZ3ir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMcuCTbFv3hocHhW3MKtwDd%2BnB8LJVhsUvGOxgoyj1dledrkf5hZxXI4T3KllalokEjOc57Oq3%2FQdMKPhfI4Z5CIxr7P4ZDrYqv%2Bg0jOUCjbZPUs3r3pNrPDTCJtDB94FrGaahrSp895Qpq%2BC2tXPRLD1wEfVB1DVt6AH567SnauEeGLXEqMTonvsq4F6uwooYPx%2BGoZ9D0kTdlWobdogkE4cP1rO4DGcIbQBd7%2Bh9Wd6zQbppoHPTlyeL%2BEWaYTxL8cLjND%2FeMKgD7QQJ6NS9mdgbFIFRC3%2BsMF%2F%2Fb5JHNU1JhUydS%2FowDIo3xYidaEFLsHsBXIkOcxzrX6%2BdxSZzYZ3W7IzL3kySoD787bTYBFnB1Qy1kOwz5YOqmO1y4%2BUh3Ja32H%2BJfDt1Qr4a5fnq3JJUU5vPYVLc4a24Pqvcz6ZDMYJbjqwKg8Y1KdL1AAZSuZARTeAD%2F%2FCPkbI1%2BUUqhV%2BLtWx7xGqSUJ7e%2Be9ov8YTZvCELaE3H7Y4sLrffpzcZVmfyIcV2Ryfqk2%2Bl%2FAQ%2FN5zBc5REHrxoX7O0h5v9WIj1B9aItzB%2BLHpPo294aJ0ULZyyxyKGep%2BhzPy%2FZjM5Uv86S6Rca0ho3KtRwGVgsg326TGn%2FIkmPcHJPnyJUueRVlltU5FlpTZS7cw2sCsvgY6pgFwcdPVdcbb2Zjsxo5NX1yGFQS3lCkaGCXTPOLgtTPRHdjyiUzkpQtZLAIJKlBQ81XamA1S3ahL9ZTdLIG%2BIvgmctHQ75vCHNQU930g1Zap4wswSqy5Ey5p94uuAl3ID6apzBIQA9TSW0dGcmFqAFaKycZgXy%2Bmk33vzPfjG8upKoZpIhzYaBSgmtXwW8BPPNPcuHPZhmH2eOmCpqN8Em%2FLB7VhpINw&X-Amz-Signature=414b4a789eb8bdeca0f8ecd2bf8e09577b3fb888df62698cd3a17b4a998c0260&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCT6S7O%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBdWdZtTu4kHGpIvnJV8E7n5%2FIplVzezlGoqGbqAmAmbAiEAsxZC7zVtKWmyAs74w4%2B9Oam4IVn%2FJhD5b0%2BmRZorZVwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDADdWKGaiibKwl2JHyrcA81cyM%2BuDlWztTYN%2FBmKMpUVfp3NxYGiretsQjYvR%2BCECzs8xdeKHf2mPGVFNga801ujyGuvuYhGDUa3YGmTj6XAqtI9veU%2B75VcmVOFKj6Y%2BAZC60AZAl8IGwrIN4Nb33aTF0lkt5GQBQupTeYF4phHYWrqEDDHxvZ2tSuFon22QLMnqdI3TNQxHK5ivDFZvbwSStjUoS0q94Mlq1IGXHhDnhCbURWk3Z3qfpUeCa0MiLx1qLfg1nzMBMRrQ8fBmg0U5GI3JUE5XLkzzzPLuDUVzn9YETvlftSH%2B2YcUMJXGWh64R4xmcehDGcj%2BvfXQqa8ZCp5IGclD8VfuxS92bANDxu4ahsUKWeb%2BfHxg5MCu4p%2B7%2F42cuHmmfpLhkfyzY34FJdv2R%2FHoFiI2e8dgLxiTEi2xgoUTIORpRZNgJhQs3qDyZDU4tEsFVrun5S8jAdPaoL%2BqEYrROulOVN%2F2LJFqkY2mbc%2BTUIJ9P%2BvSqANwkTT3yyjQYRR9h%2FhNPWEMGgzG8MEjI8TjUL44AYm78wUrJNBxOL6VRdPOStJZ2F0TozKsjItF9Sa%2FxB7aiJNROd5ZkysGSzIfk1gMPDL8yIQEOIwckXFZh02dxi22CIPnoz%2BOH57Lx9XWevRMIHArL4GOqUBDYXiVwlAw0PTFlY9I2gk3SLB6bdoYXLvLGRBcNw%2FefAbPZgBPL9IZz30GfebvEq%2FEfwiZMJ17qilKb0olxKarv75DGyt622bqKlBo2wBuaLhHJyWrD0VGHuxo5oK9gM9ZQNXgqyZw7m9NzHkDUklexJoZpAUS3mbBCkDjCk3wVaUlarAEDDJptgnjLEtbMFdOFDpddaD3pThACSj1zL7gjN7aDQP&X-Amz-Signature=5b81487546be178c9c4a8434f5140fcff2e4e3371e4b879820bc95e57fd6dbf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
