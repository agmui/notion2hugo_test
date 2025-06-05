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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYAL7P6G%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCCbXrEtlTC4XtfV6GRI0iv%2FkpBb0wikgEGrIxkq4W07AIhANZjk57FGofEO%2FTQWYpcsff%2FL6iecSaqXtKuTjUDuQNwKv8DCEAQABoMNjM3NDIzMTgzODA1IgxXTBXl6s17davNGkIq3AN74h4wVmcOisB314RF8GIxbyNzRQ7NxqoLbUjlgg2CqWiREDj4nxFgbKlcNuk3TWfat4ULrI9H65XoInQX6IteqgSLv6Y84wA%2Flhpt5ho5ZjbitJo5JYwCdL8EN3KddAcclJLq%2FPonGIsMV31ao8oGEwW1RUTFoEmIjwoBIguPcU%2F6v%2Bkffc3eLcagAitm%2FMqF8H43sgO25mdHD7SgsP6pyBEGO1ZcsK%2FO5EigE3vMAXpAwS%2FoOF%2B0xBLKWW%2BYWN9YNFop8k0vsS1sCAixPorkv8lQlj4jH%2FIUMVeVd3rOUkTD2L4kk2oz%2FQ0hQbLo0tfTnAwabWCf8IpR9yMmj8XBrnHbzXyWB2%2FqJEZUHzS7yOBCdoNz%2FJ61BMj9AfpHtNZIgr9IPwvNskQG1hPYM7XQeo0IGt%2F8bO2H%2FV6QEJynidPagsE0nyjnwgtx3FCaiXWASx8JbtxVYbfJnJs2GdyY47V5Qy1NeEY8W1VSrRUnmfVPJWelwdxikCXYoeFtdPbw0adCMNf1%2FKGVwlGG8jfGlFp2OmB0sZZZULx%2Fi4mbaFlowJTo%2Ff3UGeTAPwqfUinOPmV6zHveQ%2BmF2NO11UDjBvMgCm9LJRVTWTlK2lcPksDO2ebEX1IKm5BEOjCIi4XCBjqkAX2y2I3%2BP1px27YsraBZCeBTBLfblmG7WAeWDO78uGpjcU0pgUuvzga5ar4Yf9lOPyGANaaVSV7whIuULUOtJmKucsHuVt5qllo5V7%2FjA4yZjMEitJm6nemNtHbYiH8mMhPqEH%2FT7O6WrCfRNjG0N3fd4dhNmllQA%2BYHNdzbUHRXmhIZjgiNtgBmhQWJH3Nx53tM5vyZnFp0NZ%2FNm%2Fibp%2Fly00MD&X-Amz-Signature=f4640203883e7b4d16f3a23853d9d9645b512434d33824f2da76195d85f4d302&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRGZWIA%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T081235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIEzrgkTWSJZzJDxMJSToNlY4uZPIy7%2FVRdj9XDJx7gQIAiEAtB5gnNlZGGm8MF5R0vW7y764xT7svnaqRAGl%2BwET6xIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFOh%2FP%2BvcSRTRngdKCrcAyGIvgzesqAVojJvIHBpg8oZFVc7M6eFaVW%2Buoyvnt1n77q2MctFEg9t5qDQ1u0MHZjQ2a0Txrm3jZ6YdrP1SK1xej8bnNYj4cz66b9JAZ6dbdtU2JYNSdpf52EuQWVg6kAkRD4jmSOs21qpsWilG1KZpO%2BzgU%2FztIvFOB9HttTA%2Fk6R%2F2wtzGQ%2B%2Bro6F4G7hPpQvfjqM%2B%2F6fQX46iAShEWGI0aLLtSiVRoGM8PUKdzz9gVuQ9WRZhPZmkounvI5f6JPH37LfCNFMoH6cwJl44Exd3EqeSHfG%2BdKefnGPgIOx88KIXzDrwFqjBNWxzMWGgpjOILVxfTkIOho2g6%2BgC7yN4W9MHj3mdjdNuK4GUuCy3MzND08vwA90X5Go9hqL1Hh2OafpFiJ%2F1Po2gaykTEtPzVWgtZ0uhfAmTCedkkGJdgm1kQYAzff4F2WfKQOQ3L0r%2BiFKthiP5UIrWT%2BMTxTmXMoYxtmTihY0bhoOcYNIatFDDNN8CkoGNeXk1TNBMheCJ5jGnYE%2BbgNJ9DxkBkQ0QsaRnqnfdki0UfEtSwXyDzkHKWMtOLYEj7O9cX22svQfJtvM60UfGf4z70CT8yOXPhMuY%2B%2FATowNtoh8sBZ%2FpQFmMu5YYBQAjf3MMOKhcIGOqUBgtEtF8sf4lb7iEvWN%2F%2Fo4CXH4IatQNsgAmKG6VFgnVJF9I%2FB7A3R1WBWGd8zYBRJArIMhHnosIhybk1XrR2ojkayIb3YsixmmZdxjAJJDOzyuE4%2FsZjqa3sceQC8LZxxEuBqIG1U452t6ANSXG%2BQy4SYTO1pHMIkBSJ7STcW0xm4hfDClf7hPAMFSmy5gqaTxNRwVnytXBglcvIFpyVH9v483mPv&X-Amz-Signature=917db7ec08717536b3d9bafb8e1591818613ea07739a0ed88b0075914607fd06&X-Amz-SignedHeaders=host&x-id=GetObject)

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
