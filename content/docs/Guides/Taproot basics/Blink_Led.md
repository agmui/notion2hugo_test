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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FYU2TU6%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCFNk8zXb8hzHU5YjXLFRSaH8bHJEB9VR1aHchp2AtLAiBEugcpwRPjJTsej4pcbvGq7L2anhhTKawx2FF0bu9OICqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOTJRVXl0fltU88v4KtwDxUs04FFgu42RchMHRLOYKH6ABKj7L0IZ021%2FawW3hxSkyo5fQVt%2BcT2TCR0txandN3qWlZp3E5opoansrwF56mm4jeYSBmRMYyvhkVh%2Bf%2Fh4AGEtmK2hUqiIod%2BFid4RASx06dDdR4PPeCFnuA5l9vBabpBUQo05l9sHMWfH8NjJm6UJKb0rxwyNG3yrGIE%2BXvKvix2cBBzuROv%2BvXeUBlm%2BR8nxdvkzDFKsKD7XKQHAHgJZBh5%2BBv2IqKpsRIarHpfD3J058djenVRGWsQ6j%2BkM5hU436DHjQEzu3mh2%2FoBVk7ceUIkJmXcB7kLHbKsr1ff4%2FBccbMw5HXW7DkinKovDcunSIFGeq%2F%2FgH2YoEUxfkDvGlkdcNJ0gzFkdm6CB0jpkB4ZzY%2Bb%2ByzHBoPZqK1lrnmqnCkdK1rYS83URLCgs9ExVK2fV8lMcjmENZfJJkJ2%2FV3qsggjGW7QuWU4T8JbcX9J4wwRGlJUkHYs8f19Eu1%2FvA0INdKLSo81oEwkudgVAtrFbZLO16Ykpu7KHxoD%2F%2ByMEPMPQcWaeoWXARpupJjG%2B7Ra57F44KL%2B3MSrq4VvQHObVjtGqgcI%2F1gA3ynnodiGt47H6XWnynNBirVaaGKwXMvJtdL87r8wxrzbvQY6pgFxNS06VnWOdEZ8B9uek3UkAjwCe%2FQDyvM7bmx90Jy3QJk%2BLtGmAD%2FcM7pRS31ubmdhfOPyuI4mcJx9Pu9x%2BvGEn8b3THhsPoxjF6JUAweodwvOPEedNaYxh2RQ%2FaXqcqn61LGV%2BKlKpyj2qEsxf3BhwZE4cUX6MARPP3l%2Bkw%2FXOE4h5twBErj16SaBoJBKi5WSUh4daz62vTdEf1aaXW37F29J7%2BTN&X-Amz-Signature=42f654aae5ea122a3c147bf3f4b2678ea9e6d1c6e7423593decb7070624fcac4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQHDBC3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClgiFrFxcczEnjeNPKcufX8%2FocWkl9ZoI4X4zqhBnlXwIhALuNMk7gxriMSJjgMmSClORATts6JlUiTSn3fpbARYWMKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjaRR%2BO1gTFPZ%2Bq84q3APX7Od1ZNpvprfvAaj6SI1m9G2Ii11AQpBjeAkIkjim%2FSauzmtpnTNnMzP0FfV0N%2F%2F5GqSZiVOKqjdR9MS2ORpytnGxLYDMlwx0uBlwA1ehc%2F%2F7XdmuC27dyFCsNQEETyU1eSZYROgYG%2FA4nd%2F7%2BcUo%2BcWE%2BD%2FymTAVw2x739Fj6rVpGDr9KFmMH9DSt53MQd82HCtVT3EJ2%2BVRkD68GlGkbSwftkguf5iTTkJqqvln9qI75QOrO%2FomQEFcoR5kEre1Bspex7KJcH6F8ZYaV%2BsEp%2BjmIRjH6VhZtYDRPZ8DbQJdFRleKXwVPTqKfhPJ%2BqGpDwxWlMBTKPu3NjSjVAm8Kq8UL0d71OIBatKVFUfJ0PUK9IYq%2Fni%2BSYPmVvaK8P8qASSEPPu7VFS7Z3vqc2rsM6KMcakCbe2ySOgVqn1BZyaTlmtQQPYiXG2G5bmgS%2F5lRVp4JRF98ryaqn%2BN1LnpVDC%2BC1GyWFapYcoohFlrEXY9ojW0%2FslJ031yH2QCHgPAJNnzm0irftvpV0XgVAY7IMdsg%2BBgSJdPJx%2BoDQb87kvhOdoARO28NqexJ3TOKSH%2BiIjtN%2FNMYV3aJnWVQIs9Qj3CWGSvUDT5ODD5Bss2SN1sIF%2FSuzC2nSIUbTDavNu9BjqkAcHuWwoPV5Hljng9Hu8%2ByyTw%2BXg229D4yPP%2BxAPy08gja05ChiRCZo23GD52wOMJB%2FDatK7imB9GqpdakDUarDpq1oxqqwEvNgtgNajhm2wWh4G5xLpcpkZQ9d%2FWzULGYx5kl2TOUNjfFVALY5gNO%2FS3ygLSkLBkS0sjne2ca2iguHd5vODGkB%2BTzzJN%2FTxOVkN2Iq0hOG%2FHsjKhy4%2BoDm0dUrZx&X-Amz-Signature=6ecef352360d06905ccf9484409563990254611febc999da353a39d668c2369a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
