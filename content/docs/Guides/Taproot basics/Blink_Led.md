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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USHVNKDW%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIDLWpOZu1ZvIPFD1Bi0p99SkuQBS%2FWUIZDfxHl%2FV1r4rAiEA4BZf6rEPAR3%2FA3PMoyu%2FIz0qYz%2BtlQy2J%2BXWuiWC%2BeIqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHNZNbYe9RTbFqqzoircAwwBWnwG6UNz9A2WV6DjNd0x48hhInGhoYLIHZZ3izN73uYmIOObNbaj%2BT35ag%2BbDx7PpZWu0ZVGcMO5XGuOtIdRu4SfDOJ8CQE1oHpVCsXswuKPkaoOINym2a0njXROedNnDptZ6IPSYtbgybsy3xJXrfip3Huz%2FsjTHqqRqEYe8JRgVTPL9DF17UsTUvae349pCjuwa7%2FxDn%2FjRK4I2I3Kqd5LiFS46rC8v7OwZn31u9NZalnTDdYi2Fs62uVRCbkrRWDVKvSh36Sf4cngJaPQrsjtVy3vW6BxDNB6J3jpLGBUCcWYJZw10AWZafdZfqaQ7sAB2oZEqoPjr8C7v5bJuy8RkGy9HBOL5qydhayovzJURxrx11FGFr3rnj08LoXo4xp%2FAPEJqGvgjG%2BKfzBRrWbxRKAAWx19XAacNhuJfiPRrVsMdwiF59Za06vGfeCsVKvnN1JKRFGWn4GczSGTidxK76c0k%2BZx0tpYy1kqjWgPbB765DIFsoOd9%2F70XLlAxgjclAP8Vys7TBi0Qqp8WPJ%2FDjzUzRtCl4Wk%2B2bZuqmypckmJTy0L1eY9CsfAa2547CahxC6eAfc0SUOxYYZoRowfxu1nlGZ2fnu7LjvQc%2BaK%2BIY9NkJeFkiMNCDgcEGOqUBIL%2BtfKgNb9Uasu5i4VQdZO3RMmgsz20SxnW5vr88hfXF1DfoJehmxADMshNDKvaptBE4KBpd4BQElII4z8Dep%2FyPkEUz2rOUbQVbWsZ5ZHJL61mAAL7uFXuazwj4L%2FrVv3BLXLI7dLvNI4w0ezvNzVJMd0pqeK3zKMH7fkKfkGdIG36UNQw1uYwkNeCsxd5O8gtIcSsVFWhIfP9XTTFw7tTEW3eF&X-Amz-Signature=1206217a73dc302269b522a58feb0dbfa61ee4b5b9ab19602c64f0a55e6bf2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQCP645Z%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCICvbPB2FYIcGb2tDc%2BF%2FGw7H5ED8%2F2V8vzn8dqHWA2eAAiEAjckU8jciFMxRPX5Trzaia51phY8BLT1gJKRwwqu6e7EqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FdiX3NaEH2zE8xCCrcA8CD81inRiHieNbJKUwUnxPgnXZZVsc53fovQuMXRyjGSicGgIzYHTzcccBkEAGSm8CNxk0dO%2BOyPxL7b0dgT5%2FOctI1f0rJfT161frB9E0%2Bq8YjE4bZ%2BKOM73Fij%2FfGJNbZHJhS60Mifss58aQhNHt5iPcldNKmOxgs1VAkj9Wte06ZzH9WCHXZzIt6CrIHF0ZtiZQQAkJi8temihUi964JyLm4RhE7n6QqD1sab0n%2BaRM43X%2BMVJl5b0axZRrFiQ85FNJ7JqIXMLGQcqwztrbBhM1G3x2i6NC%2Bk4eTg1IWzsxGpe9rz4g5EmoiNshUXJAozaiCNMHZscufgf7EKdqWNJnp%2FHHNoVoOSiK30OAWNNSHF85t78gPn3F6JpGG8q7%2BOEAS8QKnxLaD60uhCc6GbhharQrcLveIUbUtZuUDhhgVlMl7%2FC3r9ur9eVr6HTD%2FSnr2s5t5EM7mUt5T5otfm417T32TfUd%2FBR2RgHAXP9egRwotYp3hWIzL%2BusWTr3RL%2FMfptIffGkgdOeC5%2BmsCmEXVjbVyYimZG3YP%2Bx6fK5FsRLIN%2B8mtuGWf2BCL%2Bf0FhQl%2Fg53ZnL%2BOhZ17%2BVRRgrTJyx0w3x4uwgNexODAizeyPXInv0Tt%2F81MNTegMEGOqUB98lYC9OkEwsoEFeY96pXVizAM5hH6V4kH8lx%2Fd%2FiIMuWLKzPNlC9tOrXFkEdffUQwLwKdCqMi7HKGd%2FS8fGfe%2FNHhsnjgPIcIB15wxnkaQ%2Fz58Sg8R6LBmE7Pvmd9FKsARwNLbibKm6ggKu7VjOCztkWO0IrGaLk6Lt9QJDH0kL%2BBRtiRZPDtPRdfiXdlB%2FWUZFIUDGvmB393lEX9ntPVqrWHHUP&X-Amz-Signature=d2ee06482b2e17aa55234b89f4745f10526ee70d741c383160885059aeb67ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
