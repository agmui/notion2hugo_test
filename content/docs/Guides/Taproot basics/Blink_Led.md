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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I6BTGDH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlgqEssiCQ8tD20yO2f3rZsVUBUDeZEDlyUG6TwfQDIwIgcaAga6MtgVon59lEBz1zch7F%2FJ3fcUPiNtyvJnTlOBwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDutRhuKktZ8A9l3nircA6SKHWLoQQQYDTQTqlPXlKFr%2Bvt71mBuh35D4iQ4vFyy%2B5uf%2BArNzrVY6xNOUiuEnOZmCVVUzIOg5z0wDQN4FNwV%2Fm0ACmitqT5guVk3w65TquUHCt825KjgXT9Jum45OTV%2FZAQMGlWtj57FzDx4mh9UDIg4K9NhIiW2oT6UW3j%2Bsust8JSVACF5bkNIjMkTAtbzIWAvkZeNasOBxpZriymfBkgD%2B%2B5ZZY7xTYbYtLz9wzroDziVh3IthZnlgGtC6UxfyX7PbNPh1yAOGByTO26K1CCb7gC6VUctWzYdDrEnnbtrxg%2BI5b2HTA%2FauJh9VGCw3zOQEca6cec7Tk9pfoLx33ji3%2BVnce1jgdAji8WxsBa1zMw%2B1YuwOoCgtkVu1gw2STqmPfTYaFxJqDGmViP5R6n750yGCetQvlnPyy0Me5AxR7eFKJKDo%2BTBskkFx%2Fld%2B36M4u3ujVdnrG%2FK%2F9VavlNSyVtsknUs07mD6AjzuEIFr0pEYe44rj%2FJHZJC8CLn8VR1Z2hUKy%2BFhFbonUXegFSmuu7dIcIysftkdBE90WuUH2Hzu3QOD%2FI3MUcjdgEklqW5NPeHTqmR%2F0eX%2BvuFub%2BbOe2i3oeIDRf9EUz7AxAeLDRiJl0Rp%2BP%2BMIa87MAGOqUBEoRsNWnwxrWitnDyTE%2FD3kddXlWrjMBtmZnaD1gas3pWaDAH%2BWnWOhz3%2FATfy8NPhRnppfTFMWzIRZMGBX21EC2SmDF7V5EuRtC9mT%2BV4z228wg1cJn6Ce1QRK1uLA%2FBrnI113GsueXAEtXcss48T8hJBAon1g0qINNJlmPq1m7ZuDGn7qGcJAM9D1SfhgD2%2BqvCGWfgzf9eWM9cjJ1DMimQffa%2F&X-Amz-Signature=438e6cab4bdb260f0ef908e645f7ccfdda1af8142646d67ad46fd7a8e762bbb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XKFZZPK%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T090939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGRI0BbhqLc%2BTtxfPRehO%2BgK08A%2BPfif5UiKAh%2B0rpAQIgbEPIHBbejd%2F%2FdWGll8tM%2FrPuwuX%2FvAJAZ6XHswHRSMcq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLGJoiQRcDDG98Pa6SrcAwuQ4er7RPI6zbHsEej3qx8%2BfsRMQRBKnD6xUeogZG5b3D%2BSa1wbGC6xq1mic4T5%2FfA9XK4lW5Vl2s8y3FFNl3BqosmzwpMZJ1Xk1mjlzkWBsbUZbyyRb%2BJkAr8Q4i6g51i92avvHWZr6JENNi7DxkVtAPWJjzHJyPYCmYRqpHP9vxh6z5%2BNiMV8paW54lXuwYjMmG%2BDqeUOq51UiHfw1mYRNFHaOS%2ByVcDQjROOM1IcEoDTHHkuUgzWvYkAB%2BuMttJ2pyzffkZrgJ7h86OrD3ecllbzC1rDu0LxjFnzPeTZXnOs4qyET2kJHfCfb0X80CcZc2KU9L2zxj%2Bietx2aMp1Tm%2BtWoeF4XHxV2Ht3C2zw%2BZYo7WzNmhMOhwGNpyKqRP4GOWfoWwHQ7Fk9VtxbQlDe%2FjEQCWINEfx6Xo52qjHfpQcfUPzWAnrS8OWzQVTYPcdNdAG1Op0ksAvoG5Xd3yIBJoUOoGyOlfoyeLwVkXrjtE3BTXorsB7q1QLm5f6XRQRtFAPXkZuoKlEr4P6Z0PlbvMbb4Sq3N2iE1BEfynODZqYXWN3vwHer5CP0%2Bnf2MsrCoDcpgeiPO4G6%2FZIque4u279xiVvxDyATrFhDbhZJ5%2FbvpPASyGHMehzMJay7MAGOqUBYNVcbQLx%2Fsv3XPo44Z1Qn%2BpWmXCPC5dqR8aLdXCozOGsANyvYhABZ61f3hGvf4LyM1zxCsSaOsbtr%2F1sXynY29odN4PpxlW7keea6fjNcyXA5hpNJefvjxmFkF0P55QAO2ZlXlJBAmvGQFqkL6QtZPJfcOqP%2FS07f0akAgNaRyDo8kfIxJxjOOw%2FCAPIzyAczOuvO6AoDOvvl5qJcajwBIqNCzpx&X-Amz-Signature=a2ab02cc30fb35e1079dbb0a0b94d44740bff93da97290394856b938e1e9714d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
