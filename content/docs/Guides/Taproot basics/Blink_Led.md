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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMQ2JIS%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDYjL%2FNReGTtxAHG8Zrcp7tCLeVneBWMHLql0NO9%2F%2F5ewIgTfcCXT81itybd7vndXgu5tSLEmQ1TeCOvgZ8ul%2FLVeEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLjePQ7xl5CUtfFp1CrcA9jOn7eYc3tZjvbbhUH9LdZtEPgZx0pNp0wgcnpLmZKIcSGgZTDySUY4AdaqWDuKcDDxy%2BXojHMkKycdZ7S%2FZrTXMJn%2FGnjbEEkWWmHgl9S1nXyI8Keu00XHQz%2FLihkTa%2F4WFZanLlyZ06x8TP4kK%2Ft9ZLaKCNTmhuJkgHT1aT%2BYfbG4FWirEYLCqR%2BAh3Yccj33unGm7DZUWo8C3EIY2c2NfJk8g69JvktFqJDs%2BTIrvMksoruJFWaNY5A7RrKuj%2BQVm7K4eHLMVu7hHp7ivT3q4Z%2FcJhNgDyEDqiwqO%2B%2BtsDW0Z4VjW5RCbr9VOH7WXOfGvs6jTCA2byfHE4kEd8ScXD0U9z2x0Dd03STfnasucUIHrwkrVvuW4lVTLT2%2BTWS4Q%2FyEnpU3qEMQ7Gri%2FNkje9eAAb%2BWV4onFjaKmXMDN1jy12VGB%2BwtWwUeORJCOjcFyDGBg%2BniqtqveygM74ydpZ2SXG1MSCJIRgLfmG8rpawmXw%2FNiU0rZ4zz03NWMQTcw9Ez3LvzOdnDerl%2FdUDCPLll0tw8Q1TsyBSsdb9x8l3a0HXWCJv40zyXADXW5SFzy3o%2BzT%2BynjH7gcdB21pHWE1%2F1H53mfwGJ9atfp7aTGNn0nMh1xtXE6uUMJXW1b8GOqUBHJovOLwJv3JLjyUbPSD5PfCBYKkDyAESVQNG7oNj74hrySaz6rV8D4y17qXbD%2BszBgBdD%2FSjJ05GKKApZ%2BrNVTAKnIm4n5mu57o7qmgYjcrn1cBMYvxXYotjAoFNerwNuWucgvioEUA7L7ozM2Ypt6sU0bdL3X%2BuGfpt5hL1FWNgIvB%2Fa610pVTCxlovFqDp%2FqgugecAbVFICdFseZMOli9Rl1cg&X-Amz-Signature=06d7d875bf303a987b36a312e9c588961659caf4c0a638926e5b956bcc66ed45&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FHG4VKV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCmjQTwpPWJHKiTkuuc42hytdhIcMcwyFmOLYGIAkxbxAIgb8qTqBhGNhfkwY4IDacrbZXbgHQnllHSKeJPnxHE%2Bikq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJlZgIaLyaY3TPpswCrcA12GPZww%2BraYJhiek0K7ySJxK6q1tmOF1Y%2FIXbDM8nVbS%2Fk6RwHC3fN0areyDkJGgvu%2FcwwMHSco7cfeYxoSPQvLUOUcv0bmqEZ3jG%2Fte6y6Z0snYAVysP5eTDSA2CHvpYJuaNHRDRc0c8SV1n5Zn3cIBdHej5xrkNsxZSJBV%2Fn8f5xdFHEec6SWaG%2BwiL8RtfPB2SgZI1wOc1NIMx8BE2vpHkvkG2anJwaQJh%2F01ZOHd0EF5PvMtnN1O69HYiDJWF14xzqUTp00vqYrBforXDf7ywksKi9q8aTns9jVkyFEbEFeiDKt4wnSUvlh06tz4zjsXuYO0BrXDDOg%2F2C%2FTkt41OOGP76h%2BS6u%2BfpTNnHbgVUPJHeb6AUtWRuoeyxL1yStiBavJIoFNliRNKVeSCzEQ9WrfRNMxAJC2Ty0bCniZApB79wNkNCGCNPPfrL11gom%2Bt8uX2ty1NHaNPEKe296PaL%2FP3CA4lfOa69jRKtZl6xHJBuXLtxWa%2FhXMHh65GnaknpgxRmBWmH4WQpdLPkxe36Jid4Z%2FIWCjYPYSzHrYoq%2BLFFt0pggOdteTRefDVtPG00bY5%2B0YOSjMkDx8E1ZJj5CaXnMZVqdj%2B%2FHUomvr4IyUk0MySSbJw5ZMIrV1b8GOqUBD7UTClBe5uwVLB8ydfnGVYNSXApgu%2Fkwjr3vao2nYjC%2FmhyIW8fb9GM03LChqqaJ7K%2FsON%2F1%2FKVDTLpsDZWxx%2FlX4KmDWGVC%2FTEYAT%2B5hn8PuYHn8NjhQDDbKZYREkYLzK03Q%2FNne%2BJI3Hx7nrt9kTbdlJubRYMrBqxmblUgPP3uSnsjNbO4ICoZC47QB%2FquFmywnRAyxrG43AnbVwBKTmgyjGLG&X-Amz-Signature=a67f822a21ce4d4bdcbce8356d558e66ac4e66c64c2c90fb17434aff6e06af32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
