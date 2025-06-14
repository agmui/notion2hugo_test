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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BVMCOJK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIGTNlLjgMj8ifSYHXKI2WkNpzuKGsyEIkdrVwhwxlNNcAiEA0EP84Rvjm%2F%2FpfyR0aGvGGi%2BEdvqt%2F%2BR70I3AvVQcJf4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDMOFWUuO7BEG7V75cCrcA2wB7UU9Xq8cDAIuRTOSp73ruyQEG%2FWeIn%2BGvweAXYJQCWOOPZX4pVRtQZfrnkBzH8RJ6fh%2BhG0RwkmZKJmNoOA5m5TYVBI88Q12b3%2Fq%2BQAS3mKlKCOE583jAtfUpfNk5IA21kX4vjk2X%2F3Uh0GFKAZJLOgJtO1lBZE1cjFdEr3pqDEo0d7qHsC3%2BhKBAkA3E3XwBGqXzfsXv1Hgj%2BtJJZ%2B3ZHQT7s50dj1R9nL%2BQ%2Bbk76KLo6Yjz97TqgV1m6vRbaXkvPmy7PXmT62jzPrCkoq4qfF69CcWwpyd2toH9Z3Xa3xVqEIvgjsSvSkdlMNU1NpA%2BSDywPEHTuSW8QkaK9m9PqYR1ZQQrt3Y7Mf8IDn9j5Xmdumya8AruEUn7yBJknH5UoAcLnQnWRggERkmXEZH0jJYi0Iqw5ZicYHzbQSL8ZwHhugGcdTLrC4FFGiPiZ7Uo8vsBFaQoCXWFIvnAUjjbLT45P11R3pw82ujjkmPcN3A8dO4I9KqO4GU2wG7eCB4j9mjfSBUQmQMpWi3qpK0ybrFTzGLvYMiA2c7lhNUoj3AS9rruzpFEFLfiUkAZH7uLaEg1u5GeFGGOAEifjeCw%2FNvMpEAE3yja759lKLsdugoL3mNxDHCKZ1PMIvMt8IGOqUB9WBGnIZSlWFwJTiyNcTz5HTtIFAt7Rk1Q2V4usQmGnedGxi6XmaV5Z95%2FdaTpw1Cgs6HYT0pg%2FZmHvSPMJvRosJPWuwbXMS6M2UTaF3DYz9eVdywvM5P0e81vUJCaj%2BpqMO2dSfHDgyckWLQR42aCZvB%2Br%2Fx8Cd7dOm9cUXqnNdO3s1DvK2Zqg%2F1uGd0ohndXa7ylsENtf%2FRdGF9lIGWduSNtFUc&X-Amz-Signature=6fabb575ec45e436f1ef34eef8aeb535c16f13a108a3f6fcae7525f814bcb628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHCU6FCQ%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIAvWEPxkH2bx9wKmbqtdXYjHnH9KOiKNc7wuocqs8Os8AiBzVcT3lkYBtn%2FVislpRXSvKGsNgoEH4T4EjcqJCEZuRyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMTOpzGp95yudzjRJyKtwDD4%2BtUUUFvp4GMbrMqXTgiHjwefbCh%2FFjccWrqbvH%2Bvyv1YqMwyjam1J6SuBnYEUAdVFiTciEnffe7Qj4z5B%2B8SpFkm2DWbQ53JDCdPWhAXGA%2FtR%2F1fsy%2BtSnuVX9cxcAaZeXf4kdxa6%2B2pc1mgWa%2F93PvJQVcEoJGWRZpjERETjnjIsIOckWdqPYn8i1MGaklzEJG9NK3ojlCYNWG3JgVXt59OdekhLER6KnaA3X6QBnzy3NNGXke%2B0IAZWzI2O8U%2FqhIScHJxFViTxKHusNyXlVvLSOnfzFmIw8vViAdkCLuaHX1Ew50rfTStLvIdwTtZPppIIzznL%2BIfxr6HDXqQCAfBNbTV6M8Ydr9%2FUhWw%2Bpq5UO25Cc5mW1BuDKjWLEWkBb1TryhTsasOkKiYnm%2BECHeoSgjhlNNrJs9qx4pkRFUSLal61%2FvYwTPY0P3P9%2FucuO7wcQgsglQYWgt7nv%2FW7h5h2ePsNHGLrcu%2FUBegNVo6dZ1D7OAH5wowMxvY6U239ErFeRX8GFbmGuS2WfIX2TUXBKkfNgCHpf5AoxlA9q4l0ipTN7LSHOxzcB0kmgWTZTm%2BTk%2BjtlzQbuAS7L7fyCGtLRM5RXzNOBUtGPiZcXS79b6YZ9Jab%2F6RIwkcy3wgY6pgHk3ae8X6CWx4V%2F65KCw1d2WGStnzv29BBIGaIVfwyzm8uCsRNHXioGANodFvhGI3Zx52IYbxCwzZvknznl0c8bwy0TgBR2ffkOyFpJGOpNo43n6n%2Bwx63e8lh0m5hbMj%2BGCRdURVzpGzvmd2bU6IFIhdL0jELhxEj%2FuQMGt9Om0nmWF3np24OTxnVCJ9giooOsOLZvQ7baJIdQMbe6S3ll29%2FnlGjb&X-Amz-Signature=8e3a4407b1b215b825b2c6a6ad77914b7671b0607992f9ce1c615653d7e2eeff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
