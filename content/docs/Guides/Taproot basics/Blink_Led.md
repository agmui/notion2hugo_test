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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637IRYDZZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQClB1D6f3MhdBFuHHMjEq7grVcaq%2FXecf4uUJI4ebn6OgIgBfiBXhFRkT4Hjtk8KHx%2Bb3ksgrOnxQnqzO%2FiO0STpbEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK95dBGHiwl6aQSjKSrcA8lFCZ7uL9yJfWdNKeQravxHpeSpsLJZMX7oadfWVGbmRMQopPh8BT5qlQXWmoBPGq5SMmqISMQRIg5DMqTEQFBop6LBS4GfDLcLezitvO9jhwrnamsyTMq88kES6p2SedXzfZYh6ESf6VBDzypvHWNG7Adi6GyuswK6QDQVJbt4PEYy9lrlQfszGtrZeX6i2Z1EbLjnLbIuK72eWF4amfrs%2FzeLw8DXebMNMEqBIk3eq%2B2x6GxkJECSC6%2FyVkG28wCa4MtE%2BSgysC5qUQ5LfzFhF8YGybYxz9VEV3EEDB2%2BhW8IW2kaiHO%2BkRpmik%2BW2HlUPmESmwjl0UZqbrS6STxnKNkMxfUoyVj0TGexKUsZjbwDtYNDGGmhPwjqLUKgIK0t88QJreCwytKklwmedYqJGXXf%2BJn1kqGzl6N5bTzS6yGKgJOcSBSStlbxAMzxL4ctKuwvndH4%2F9SJ2eNyVcjylTmGcFOFqYUQTNd2QRTQMyhYgvW8cxCLgIE%2BSp1XL9tT%2FsIBbyVbZJ2u0SRQ2P41FcqY1UzKIW%2FWVTr2G32uOBOJlsa3NlTsPQTjgCSa2YcLlksSxlvrF5YW%2BZj9mVT0c0ZczeLZw7yLmNrHcaniNekqMtf9s6%2BhJceqMNmGsL8GOqUBOaJ2x6mQCP90kRJ1rithOfj470hdXNGqBPa2Xq1lc9vuCcnXjG25kgBbwEiWXYAFAY9cZpkbKV%2BIqYIFNHzsZAJ2ngaZEMnLLbNC1Kq3gwJo7HiOmEy15lnudcsxk0Mpa87FiKYFSYtuPoiLzAQYt0vUSeFyMexPQZToqGm7B4r01%2FQBS5NI%2FaIM1XGzgAK9IhlDEEMoGHRzzaXR1poxxypy2QjB&X-Amz-Signature=ffdc0d85409319654e2ef7f09070216336bc125f0fd945f35f167f9320336d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KESTKSL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCWMgBxdtRCAmukw0Yct3MXt1rDZJca5xVmZI8Z7WqPWQIhANFT1n4N22YOa%2BX4mx%2FkQXZWWy3DkxO%2FAmIt4IG7L77OKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVfxRLGBc1HLEaP%2F4q3APrv0zEwyUfomNp9LvAQZVWuQmNWoMUMmL4mpY3SUOy6gJ8s3WVVUmnyAhqHjGO9PPo9gOOeRLT01X72Ns2BdVWqLGiVMYp%2BOmzliIr%2BuzaFHsQkhmiDqj2K01LPRhkNGMfcD0YYIKBICJhkBym5Fqjn5lVtPJApsmUvVkmBMrdki0hYK7OCR0ib6GLvYLDHJcpjzywYDVd%2BFVjHYWZhMkKNJ1T1oSRCdcxw2v0%2Bz3KR1SjUHNt1PibLiNN8vd9O7DwZPyj%2BG5APSzVXQna%2BzZ4wvIrIU4LHJGmbXnj%2FmyHMz34pePYh8bqDu2FP6Z2Pn9QvhHy%2BBlaR%2FgNKipR8WxgDoyGoTQyTnx%2FWLvIVOiB9UtWitOT0QGEIA2K6t8VzOdqUixnGI6GTQffrombFAGUMLRFqhYIqKruZkNX6%2BUcXwQNkHGaLNKoCBWQB3Cyx8et0UGDbk12QD2D9%2BiUWXL33GzumS9vJTy6aIzZ%2BksQS2%2FLrlLsd%2FMLECWgg8y%2BKTAX3N3DjiBLgTIGiQOE2F5OBHU4xIaFf%2FP%2Ffd6UR8g8gNst24hTvR30pNPezrO5PmdUFu0%2BB%2FzfLjU2eNr67Yka5xBhoKXEpXo23693tv55ZbN7kS8y3JvxbCGvazDrh7C%2FBjqkAYn%2Fa9geaU0dFQHSRnBDm69QWzmnxG%2FYHVCbtCgKIB8ptQ24qC62AGO37LT2F7dJJYHCi%2Bjh0Rp8wDKfgEcg0zwqC%2Fiq8yZdq%2FKEKFBWzNTg6nmP%2BJOxomytuJl38uzkwnF672U9H7wkom2ASIKGIbFshUba8SR0I7Q7wOcdjuaad7fhbSXdjZSEhEZXhdbZS%2FtRjbNBXydxtKlj%2B4%2FQ%2Bbjb1AyW&X-Amz-Signature=97f4440f78be2fdb76d3c7ab7fee4b8ef1ced0b896b7854358340ea646a0efc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
