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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPTO37VG%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIAqPB3dZAt%2BbfxacdX9BTgs3yc9eAClV0vGnNzufm%2FaVAiAiT4SLJJ50R0wWUYqz4OiomVNMecRp%2FbHgtOdmjUTDlyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl5n7gosmX8bOAAJ7KtwD65AuNiuEPsPCyvjGYq%2Fh9vYWvJ2xVBrV37yW7NG2Ta0ju%2FP9s0Om75bh5erB%2F8SbAaMHG5UhaBbAgoCBF8i%2BInv%2BmsCtu%2BMTJQvq%2BuGwemki4p5NT0nqNfyL%2FieXpBED0uzFpIVrTXb6RrNhaUpobTO3UVZfK%2BSM7Mc3M9%2Fv%2FSopzCoU0F0f5JRAH9tRMp%2B8Ir17TY8GQzqeZFgcE%2BKL8pRz5meNHJ2e%2FRGISZpPSRu%2Fq1Eekva4PnghnUHyh1ZoYvl4Nsv4H0uHPyBUYg%2FfeqkI2kPGjDyLvALf7uxK8NB1Vtyt2WUeYYQ9zHonOtpE1KODGO%2Fx8mzWL7ycP6jQOzFDGFRgpBHQewAVUdQWujKCLMiASamAFNmkdNREBvnocqae0DZySEEFMd%2BUg09PJkD97KkEdGZIQv701EhqKNYdj%2F9BgSFmxXla0l%2FwtJgozvvV5obleSYYx0Ds8rbctaGpPJBoqfic4CB3nK5JEL%2F9UD1ouQ6pVi7I%2FaTBdjFwfMqdFfe1CEk3%2FEIwcydFJDLH2hpo0PaM27lxUAGEdNswJcMJNV0A1ndjcBpN8qWpHhzf361axVhASu8YhOOGmjuiTJc%2B6Es4Tkq0Qfu7jINlpBs8eFf1hJVZMbsw5ZDKwAY6pgGf9Y3p5vfPTf4TcNG%2BELsrrGPyW%2FSA0XpIqf8GsUQxPmIPkHcfYSx7xIImAyorgUu%2FdhsJ2sK0OzuPtKd08HTkIJCQ8w65E6T6ji8g1o9JtbZrL6lfTXYc3hA8pQrdPdXd1ojMAIdKZkGQURLzqdpqCv%2FOparoTl2cQTa5LEcpvapyPcZWqdBFaUiIAICGTcKBXevaYqXj3JDjsP297X8v7Ac3a2b4&X-Amz-Signature=4166eb6116a8b85e03906db37ac569429514e97ee3ff31783e83982fbaf76230&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQFMJTDX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDvhN6xpUnbKySfK5eR%2BsrN5%2F%2FR7rW8ATWZ6M2SJE8eVgIhAM7OVRopqCPy2bV%2BAvJ6B6hsabE7ARfgJsSvw8vLjx%2BSKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymuBIp1REIV8Sj4%2F8q3APVnJ3SCY87HoMD%2BLMFmuHjYSmRMMeLR6e3MgtXS%2BBmwg6t3eXZT52%2FoCedQtxVbnuCsBInORcfTaK%2FhMzKb9s4J0wcGnukgZMV6n1bH6Z9p52Lq0UJLSq%2BxbChGe1ilJ8C8cSQoOX0UCGfFii5Y4fvexieggD7sfGRqaVKOmbBqLFQg3AJ4Cpmt%2B2C8zlxKquXviZHLwTkFmJRzv4dxhh7KoOreOT7CT1TY1%2FXAZorO4p1Kg4djbmQ9g2IdcQRzgsFmsUlwv50u9N0k0LaM1Zo06elkszSNg7IuDRxnavKtA8seIMcYtK%2BQkp0%2Bot%2F90941AZ%2BJXlZqAJyAy47FJxYH42g7l2CXVhHd8s7UYtC9TET%2BR53%2BLWzX9GxyJPfJd5KPUbbrE7Ghc12hlXgJQYdRAV4elww9rZpxHwR8JfqSfdqIZYdbf4L6H3w2bFx52m%2Fp2gk5TARDClXpUKHz%2Fg2c47J000wz9eUALDDp6bmKz3b374LOMJjmQpV56xjG0wHLLQ9ji4c7VaiTkE%2BBDXfi%2FQU3gmM6ivGyDM5finISKk78ESAECXcHI6HGznQzXt2xk03kvMHlYdir4zyqGPA2fULl9kvYWA9jjHnwr4GZxVRN0Jx1AeXj8sKxTCgkMrABjqkAfKra3VA3zBXf5dKbs0Euy9rIWDNlo6fcoVHHpBugmwVFBrMvmxljLsKIr7d0HHRRBrfQ3dfBaxEeUkaQLi5a0GRo0g1L00wA5N3wACVTQFu%2FK3n5Gn3VJyUopKOFBhb%2BVG%2Fcrq6J0bJCklfx9CrLUkq56QSR6T70st7n8ehQg1Vxettj%2BdtKAiR81IQQQJ26lU1ThFJDgfOyUQB%2B2STLIkpJkT6&X-Amz-Signature=01e562836e901545685ff224da5467f10fc911b855da0d2f20cb055075f3f441&X-Amz-SignedHeaders=host&x-id=GetObject)

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
