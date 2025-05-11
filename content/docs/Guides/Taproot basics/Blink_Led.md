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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZREIYOV%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGu5MuxVPgE4FXVBKirtEAu1TqJHUPdpMoF8PYW0ZeGzAiAEFjWZYDezTe%2FVYvPuZbtCeFLWKeEuU4fERQwTdRY5yCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM32DvfO7QyrNk%2FqgTKtwDGOvnGmMpzEnW3ajmBh8ExJ8VrgARPgM%2BcDjxN5AHgwDU3om0SkZFgt4Dsr8ULfdFDyPz1gwVtgE9Awx3BYZxPSpxtEFxhoc%2Fx3UgcheHgT46B8XY1XvN5ezjrrPQAlsPy%2FnvsOR5%2FtP48N3HizFStZ4huC3UIX%2BQr2azT50i5%2FDZUiB31Rk5DJxwesfyq3m0leih%2F%2FXzaq1zN3aQ%2FHTlclqol%2BHNXTjH9fO2EsnY0M646PATgGmAE%2BmubfhVeIYF1TbNZ0eCxQsanh4oNKT6xq%2FrZ3WMq6fAW1KeTZnGz6smkyY3RckP6JMo7QXETfX79U%2Fp7pa%2F0J1FGP6Lox7xKyoao6o926%2FFjuii9M9VXZHkqyfnugmyFZ%2Fop3%2B%2BFaNOXcaSWcsvU1qmmlIOcGq0owxeVuX%2F6uApVaDf53loI%2FQ67uP9oVgnFgSSdE3fuEnKlqOR80UCKyRwUikGEZJ53yPYF%2BIOMMn0foFMIxjTDfZcgAOaDnSNwrRkyem9%2F%2F6PqQaOAoOeApZzDNz3qi7xoszdeIP2auYyoqCoj8CoGHpf3rbFyNFEsgcmJoeN9zEW8SYTwY1YoO7Tpmcex%2FsygiHaj9U9LO%2B5chGok5MTbRWFK9sVgu79n1bSuRMwn7uEwQY6pgEMIoMEmwLk%2F1B3zxLnDW0V267iLggJHiq8ST1i4jjefcNyWyFYhLzGCvQhK9N6vheLNRZs2eMVKNIdBhy0JKjpCzFKPRdPkuHtSah2X%2FmEddLmZ6nXqijZ2JhO2aeNPRf1xR%2FrICfBj6qLzZU8Ejcc6Vj%2F3HIJ5mZglLJQiM%2B5logaVdtN%2FRytowAemJjAv%2BHa8HSM0c4W8ziVQL8xN6svroIBNApi&X-Amz-Signature=009c789981fda793e30ec8257f8b34c84a25e054917d3c0fbd8a9ce497810118&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWVJFEHQ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCID%2FjpkcEK%2FkMjAZh7IHR6TB8KmW6HPfjemavkUDu7kfHAiEAziFEIbVSVbGZWcBWO%2FolihguA5G5YREDtfK%2F478w7zsqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA88Aw%2B6Gg54zIDonCrcA00NrmN0hXnJ13HTWEj8FSNKM7RoxSb5Xp3Yshysol3Zu0ji%2FDSepYCOz1yoHtTKxd0kEO0088rAJnqQWX5V6YkZSeNbz1pIBCaO8OmxGk8%2Fn2oXl93BTks%2Ftl1USTngNammUmxRQs92QOJJ%2BRRMnOtdOD%2B8nVvrygmpHiloZELI%2F1U0jeMpmbP9Gnv1E79CDsyTIVm2yRKtHqLN%2BpVKoxs6Lq57nQ7Gix9QGo8S1jBQEawSfn157%2BQlbbJb%2Fac7tb6Sthc8kr4iErUlJ77r8yhSP76imLyxpgCM8oZwMpeFlVxJihn%2Bl6c948Hlq0HJkX0ohx2Zx9yRj6XiubQR%2BveqSkxvD%2FA365Th8rpoSm2685BgA%2BIdDUo7EU31X5iTPDEiSIerlnn9H766rHwzn2B5vDglMPa9%2FoMd5hmnp7hMvfQwD5zt5Mg4GMFyIfqVuR8uiX8dIwV9aCgl70u9ICrzg5yWOEI2GQw3rz%2FdfPXYx7%2B3PhXaIFfolFKsrywkotQcD8av3Gkjl7ar8G%2Fogg7uZHx2g26t9WBFNGH2wCH7iIvx9VFTbgrT0nO9uBuOKvmJVJ%2FmsIJQRc9ZDx0x5E3jIvYkuQytht%2FznDkKxAVC5JmLCrevQCilt14vMJa7hMEGOqUB8wVp%2BQnnQOrdnuYyw6lkCNO%2FrLjWUs8by5e8xoCR%2FfHFmmstXUi%2FPr4SPXRGI7t8KuMV%2FN3GST03zGtr0J9uhXDRE4Lcwq6EZUaQe9LGEzNxOq5gzo1oYKWdCTMquE1ucdg5tZUbsqEsDxeplaeBB1%2BnRXZH2A4MlQoKmoN0%2BbNZJE0DrrJduhRHMVmQMZdeR9PdPWPDFI6R0Cr1V7lZpbU2aM%2FT&X-Amz-Signature=5cdd90f79381f2b47917fabb130108eccc164e8a00e24bbafc678e7781e61840&X-Amz-SignedHeaders=host&x-id=GetObject)

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
