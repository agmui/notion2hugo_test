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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ7D3WTW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDixd6GC8x3i5Hc1rEUBL%2F6kW5pZQMvPMZzXLkecudVawIgAcoPbU7WAMpGaIK1eTjNv8J6dYpFtOZQ%2B3wDh0ryhQgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFnwIWh29LWUqoKXoircAweZij1%2F7b15NN7KQr%2FGMo5SO2Ld3hwXhwO7RG7oNs%2FO4n62WLXgRnZrvchXguG0d%2B3XbNS1i%2ByB6RTrgV%2BlpziU6aPgoJWd1VXh65b96qZx17i7ovp6%2BBsBy95FTLOxouusQ9SzC0Hr8I3gR%2FTifrTbyo%2F25UJtLIqL1Ptg77pq8M65qXWnMaRVlXbE%2BnSfrjZiJrpZrnWU5EJ215do7ArwjzoRIDv1sUCLCT1SJj%2BHS6%2BtzOqE8MXqDEv4SyDrQCRB0sp2loXd4XPV9QkxbA7EPjtSzNpeiAgkCLZz8L2lcUcmxc7ATcjLUAWyAMIKzHyxeO%2Bbk8mcTef%2B0btl8Pz6WxEivqk85cD47G5WW1nl1K3FpAUe6LAMwL%2FDpwDuLXWwTIuAJeiHl%2F2m6Gnm4MsSKbzj7bO%2BXi%2Bq3DdnnQ%2BzrqwNZt97MKc3x6lD6%2FWj4B%2B4Tq9aolwtE9gIx1pRHhfr30WyAnupi5uXWaX00iEABq7ukZ%2FrxH6L%2Fo1crFMMt1i5XYhP58csjC%2BdV6U%2BnCZXbfg31g0ipv7xk8Aup1n0%2BYAE%2F65PkfslJHfw8BsdIBPQqSn6NollZMR4GvuITyEL9a4OBz8w7Hf0iONlc2osldu0ylB4kJ6%2BEuD8MLLYpr8GOqUBKtlxDWSGeONqiFcdPEwGeDFCUuwckL0KsSs0dc7okbIs3QPXVeWuy563c%2B1RNM6M3%2BD4t7QXpMF6i2BfZ02lioYFFOeKPfFJguRlkL3Ndg5Wy6zG1wWPvCgmLbhNPyihj8XTYPay3KKFtvIk%2FS%2FJDOHaQtuwN3%2Bie%2BmjlmI2kYQMlUGgzUjqsnpgmkqr2AQE%2FZopB7j77ezNYxYPegSCo8pSFPvm&X-Amz-Signature=a45efb327c592ebc080bc8a76216b1d37f001b3e17f98f1f4dd79107e8dfb2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W6NLMVZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T210141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCuQkz2JGu4vZAyTwsfbwsyIMTGTIqt64yK89spILs8CwIhAOFO3h6erjMqLtbLTUmO7Sc5Ah1ZA%2FHYNOtghfxBfZboKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIosic5f%2BW0%2BtJFS0q3APGq4vGqqnAnSE9iMOehwuBPXkXAsdLa0GKKv4FYXfssFd%2BcvhMKp2TFtSoI6llY6LIONZgLpHmk5yLnqkGY6ebD%2Bz1xM3vGi56YKCM0yP681fh8KyvYyZAEVWWUaaPsZHqoe%2BApcoNW9VEBwnyE3onsKaRxRwzFycoStD8o3ujNYALk0jWWHhuOGdYyWq6f3V1CZUcBs6O93b0qAeHZVdCXudBJu5QfztvHOclanG3I%2F9EMNHuHtXfJKrJHxTm2CksKiDZHyhDU6Lk%2F%2BojSS7d8OUfpEiDcdL8mVryMCSKjk1kP7ixKbhd9lqeLHVB9K06VmzWAF0KiTWTJoeceRfxJNhbK%2BeDDxvMavQ%2BeIbtTAHlCIkfc2%2FwV%2B3N1QqL67ta91ajwhsPk6rhSFjVk6YJ4JSOYDUQinx%2FmPP0rx9tVOgQ%2B7LSL6HR4SWEFR1Se8j2B14PUe0QZKvVYTV5inZD%2FCbfkmpSn%2BebVh53GcFpL8cXRwKJZpl%2B%2FYtbPVw%2FTH504nUjMwpSKv%2BeMXQZppu1CJb9VSsKRVmooOHwKSXLfuNChwaic3EQSb3PVl3l1drqN7t5eOxwUKUe3c%2BHdL4vkvcdsCwkQXzc2xbUsf9yMR%2FNsV8yKcJCFG28KDCb2Ka%2FBjqkAdOBykUMe2mEf6E1mA1HA07hkrptOnlrX7kbTmbCpTJFvP8dW9tEKwZxYhpX5Kc7LWRbZLqaV0iYmKNhaNXQKFnwIJPC0sGcIx9h13mM8Y%2BNg8k2L8oJHtHnKlg%2FuGLGJV2%2BmPbd6x5nCniLhb2kc%2F%2FZ6osnP2D6cHL0uCO46MwcHXY7FD2ohuv%2B1ntRnsoEMmfBA4ZxeJZqMP4UYraUjMgB5qMJ&X-Amz-Signature=717c5e3cc097985b3f314862051e53a66de7127c663eaa583b4cf82418d1ca41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
