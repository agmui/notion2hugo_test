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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKKTCK63%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwcp6VwUad0rpqD3xP2lirGxBi60EE2lYy2zmC%2FvnbRAiBzaBUBTz%2BLSf%2Fl%2FLB%2F%2BcP9Xi29aQLfH7gwMes213fwxir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1FTFOuuugZr2HZllKtwD%2BqwsnAixu%2BshqiICCjYM7gZ5pWebo0wQTmIhWEiN%2FiDFlBCGJUjcjLi%2B8VxP%2FUh5IQ7WreOVtfU1DiW%2BJm%2BEkm1GK0rkO1%2FIqcN1Zq3f3BZjDGR%2FmHh%2FcBkSWekSeiuRj0ibgj6XF%2FPsPI2CfFmQzjKTpE0A%2Fw1K0b2M4VBMX0an2m4Q8o4nuUDRKBBnJlJvnGZFS4uKKj54q%2Bdtzlp808o%2BKcAQ17jHzqQ7KYF60fsJKP0Z1UzJFhtyXA8KI5OxBE3W3SCSOdjWui86%2F23ZZaddyleRi%2BvohJ2383PXlvLRt32FSkv6EkbqGZt2zMI93%2FxxVNda8dEsJo7%2FUNieP8ITndZR2mUM%2BDdv3IhTkQBagXaz0B0YrrU4BvWA3eI36DL02nvJY5C8JM0P%2BONIuGJYzGCgLIEyoVNUCEWD5eUrmc%2By%2F%2BfHrGQG%2F%2F2mFeSM8vujiP%2BeNF9udcT2VvFfXgfmMY8kFnh6PTh3niO5GiikA%2BRsVt3TanEQLmBnBl87rKVAdFFqgTFoKJWRCjnl5Do6Q47gfpME2%2FDBTyMXw8a0FUVP3Xjb8gcw%2FgkgqxKFu%2Fju%2BkzLdkFCcKIOQphMtKcHGS11rmxZjAcDN22izu4Qv7NixFKX7Z%2B08JMw%2FN7bvgY6pgH7hP19UlZu8uWsRsW0KZr7N8KbF1WUUIupckOA9wKn%2FBqIr5EwNDw6Dve%2FTnCWEUS%2Ft3HzT7dlZyNTpDxebtTs9mlmtrL9OAkqqIJEfNp8VKGXNYtJ4EuR6owM1HOADH4N0LGG4CMPnKmBaNmN1L53cg0chEg1gXpiskrCmLb7yFEKiXI2%2Fihl39zyQHw418bZEDKVejZZz6w5C30Hxvlng1XPUmNy&X-Amz-Signature=074f69f2dcd3b03ca3b7cff207b8e132504608573515b7566649e5197b5471de&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX6EFBQL%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T160754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD98CY%2Bfj7TyV%2FvqjVDkNWSyx9IfNcHhM8h7OOsSW5yZgIgXn%2BgMKxOJiCfA4ijc4D36kEMCbm55o76%2FF3ehBr32noq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDKOfNKipjK75NQjxMyrcA7sEfvm%2FKo02XUGckq30sE1f2Q9KGfoEVKb%2FrfaEMDomTuTfxWt6%2Fjf6Xp90qXoX39bu671pLefc4CrRRbg9FEE0HlN8eBVkvmX1l5HYmn0KfAJ9piHcUJB26bmvT5G6thnXY34wCCQUxumLiv%2FoHg%2FQ9HhsaLhgBz9%2B%2Bhp0wN8boQLaMcI%2FvL0iftEqBYsv8qdiK%2FE5L8Rddh0dadw2s4MIsP7HKMi545WYnAeZPcOWmuaT0qDjFJGWZrR36n68c0Rg%2FtTiBireMMX6samnocxNL5IPwuHLBhnM4mTwIoVoJEDykbgQlTEi5JcBJsTCa7G1rP35j3AO%2Bnn%2BGSPI07ozBWEdCmcN9y57ntxpqjdUwNmZEvylpNx%2Fw01nAsrYFCjrQELeLalxgWbqNb2oWuiSh%2BRF8QW1xQAlcTL8T5WjSNw19bk7KnPg5bg%2Bxw%2BGK45eCcTyi3cwFV4ysrSI0PoTfZcXwLMWBPKkXQe16cFNUdMNJG0XCgnl9bHoNzIGod%2BdzK%2Bg3WFjEWaHoZVK43zaO9qKpSaJn860wEP9dKVGXCF6htwphhgRfMT%2FU2PvyhwqSrduA4JJJXqt6P4dLfWunecsYI0P2Fz6T3A0Ro3z%2BIFhniYUn1iyqJvOMLPe274GOqUB%2FieYulCJySF%2FDswV%2BmMAT3V73HhSq%2BBdEVFsEcwIFr7wiIlEW9wtdynElCJeZ9QNCZlHlu4V56SLFVXfJvmO6mT21QCeWpQFgNrRfxp43fyEmbMtwHjGgyy3hkLRUwrLkp3D4NzNjCS780U4rWueC5Fnq7XVeKbniTioGIFCFwI03%2FE5dpRtj0AhXcQMsS199chJjlIj3drB%2F0o85TWd57vAsagp&X-Amz-Signature=72573f0c84754b614a6d7e0a00a05b49f5606db1cd2ac90580cd158401ff1ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
