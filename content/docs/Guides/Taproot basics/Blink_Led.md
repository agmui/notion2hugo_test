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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WADOBRWM%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElpQaBBwYpk6KE6MzHEbsFXo3bbuNWo1GQagOk2R0iaAiEAxlO0L6ei2sHtmO26DjZp6TUz6pL45UTBXhSYKTMHEvIqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPMdPxWUd6d4Y6S8ircAx5B%2FOLKnVdkhckBfvn1oLKtUAaJ7Bmy2sV%2BPmtnKu2L2qGhBJZ%2FdhHo04jtJp3sXGzzTgY7RmTgxFsiu2mkpZuWeRXArBLiZ0fxiOOJgCF%2B8b5NXjBG1VhiDxhGjt7yvCoz1QJ6AmRfNaNQH2nwiMpyMtDqwph099hfvSsmfwkACygWePjp5tlQsCbhj6KPqIoSnn2XNfXO0%2Fdnxm0EzLvW5PC6HRgoXyQkj6MY6k1ayDUTnZhAdNp9lZOqSv7moPGjISvE1wnrkCtFXqBkWcBWWVtcMlaavxA34dGeRfDkTPwZRfwIYddzX%2FErDPRDbfcX5VY71Av4tgAp14KZsSpQzjCAWXYHP5NeDXmbNSU%2FtZ0N7UNqiUJPrQyaLf%2BFEnZrLoA30bKXIu4JIjO5Xz4ri7zR6LBJKXt%2Fmw2SfjZil7a42fKHx6Rb9lGCc0BLUbnx97uHfpzIcY0TT2nPnmeVkkWWmhv6jgVwOrtVsSnu%2FNmCwfjQtRWPQztiQ23mA3tgQlHDreSTaaXwuMy2wYDG1uDwxo5Rpqq85dViJ6sku8o1EmY%2F8XyQTCpCrYTSy5TlSVqpDHSgQ1lLu5F0JxvOSCcsUUxcmHysneIx5u2VxRwG1Id0fJWc6U%2BjMJKov8MGOqUBw%2F6kWBVJZ9xKWPLe7I2q5CTNeF4d01FSlkCinTApWBIvRZ35ibuBZnHIrzIugdVLimL0FztBa3TfQUaWSAlQ8pA2MCtCAlE70gt8FCxLd1LnNuQLGBp8gSegj4xI5y9o6OXG58Vwft4MRYnKSP7wFw0N53KXOj1DTDK4dxtem%2BVUfWv%2BkX%2FvORxCxGG7BLBm05%2BySTP4gFhQ33UvALHDXywngVpw&X-Amz-Signature=143aebcfa6d2a5f04ab7463c9daa25f1a4569fa07cb5fb98f9d89824f88907b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDQVCWO%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr0Tr0Fpr4gej5ljppVFvriYnJCmq2xN4qGrk%2BtFWvXgIhAPOZqgcrrtPx1DqHFodD2G7XL6m2iQlNNJgZ492pL5p1KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCfay25R6YJIlKVvYq3AP5Dvbd8OWwWoU6QKsfKY%2F6IUw%2BFfQsP3Y2cLxPJss7MHbtRSRCSMQYztdPJeELa702ydQQAkfrhb1ATcqpfdgDjs4mHHoUvA9B%2BqvKDnDDv7M8avhFkxBMrzZW0XW3snthBTwTKUgcHfPqQiDRQbeMmUvq8MBqSHs7l%2Fxdmg66Xm2rx%2FdjdOT7xAAXyGTNlyGykArjv7yUho%2Fnsr39yA1oZvcRcj0F4F%2BPrBo0ih5EDHsfiKHyN4YG3laDDwDPGiw6j94NIKox6yPv1ubM3IbuMTREpidO733JBmvQtZocI5DfkoXZ0Y%2BWKkqgF0kbj1Ear95kzCUlszqgCDKUjO7DGRG11C5K7WKk52BQXTxIW7NwTJaTp2lGmdwZPD1oboG4SUcxk%2Bgkva%2FQGLl%2FwyWjRr7egDhJmRHWObIaGfM%2FFuh9OUFqKP2BlQxNF8NXnaLK8rWk293uXbQDe9Lda7ftgjNnAW%2Fpa5NeXdG0kid22%2F1Q0oqgGjiVYysrCl0MeRxemkNGv8swdGrEZO1fHCNKLUh%2B3U3pN9iKcSI360qigcUVDKoo1Qb4MdCcDWqaz8YPO9IKlWN2Kjna2vWqIft1US7JJTxmYPMB2ujEimRc%2FQFBSkkNkHLXZASRWzDgp7%2FDBjqkAdd69ONVwClX9xtM%2Bkj09b9As06DgUDT5zIdydRcUQ%2BYXG9LWjjhJFKlO%2FJzRuzY85MBzzEQQ2XotFUpYcJNCM%2BU%2FmAepmPyKwQ84R3p7G%2F%2FQzQEE%2BVNmMmKtNpFT81d%2FDjHy2f9Y1iphXirEqtD%2BsosJTDexTwRhHlJkHQlnIYeURIZug8iSQaIRItvzD8tmIksjnSOPSlJSCkAwes95tEBEO11&X-Amz-Signature=a16ba64b3b345665ba73573355de661299e8e6812ab2218f5507870d387c6538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
