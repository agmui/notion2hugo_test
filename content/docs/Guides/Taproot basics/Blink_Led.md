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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BXZQNOR%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID30VH6tnANcyWZdd1GKX2hrn2QCzywi0yMCaaSiCnQ8AiA%2FJiqYoVPjCah0VXYQl%2FyNsxJcyrXunJaipMMGMV6niir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM7HRBa%2BfKtC4Y4ALOKtwDRCgNbnCmrvoOKeLkZD%2Fe4rMvSq6ePe740Z31kOKXmtkGSQtxjVoY9h6s4TBHsN5jn571zEiYgiNF2bQOVB6%2BcHJvm38e5xjMsJLFXBJqSioqiJQoUMFVT8RYbT1o8GdGlT5GtnhtQ7zRWBBcmV93SaMjOhZyDCg4G849zahekMVGWLW5NwMQaGjLE3CNz3KiYGb6FuPsG05YkOUzZJjZuzw4%2B0Me9TiHpa4jJGYD%2FPUfNlML5JrBrI9UfXlKMjhmHwEik9H6S6ydyWwqNYilkmcEBgQTwrZBTfwYldBcpUweuKch%2BaTSpIrtwcv69p%2FfQ2RVO8zne6WyJdKU3y2QcDDaNtoYETmCRbrGPWlt%2Bytrwr9Pu%2F%2B7oOreaWcpMyhatrN7%2BYs0pYZzEuAPZPeGVvUlLLiT1BE5rv7XcqpMnhUfU1tPUac9x50%2B8BsMDOBdGNsynZSrX1hGiq0fVqiXOEur1EjAhajJPyE7LVIb9dKp1BwsFI1riZkepur%2FfdB54mVUnBPysMabrCGHdtGEXIXgbfcJO7gaEbf8XzQNbcktHUtu2Q4wOhfPJyEsakzYFbMIsw707yo9ZCoXA3VCNJDMJZ8sZQBapuhHx884s1rD0kgJYIVe%2BDGUFNswq82YvwY6pgGassvNjzX%2FLqrfUpRJpTfyFeJ7KdwCmAa2qCUH2KbyE2D9LosX0o3QVOtEOesa%2B1gde8%2F%2BM6iUw1srCeXN27VAlPCbV3MbQP4UlH61he6BDbglca2ycDnKUhbu%2FdQBrGE0ATuOD2OLb6ftN6M%2FZipc7x84W0LG4vAdBpXz8vsXZRfq9dTwZKZI2n9XG6T1%2BRWePUhFpymrd4yCsmK5nKju6mcGRkR4&X-Amz-Signature=ce7b7e4457c7d119f3f03ad2fa49857436e3e06db5b14cea0fe48a20e6eb1cea&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFYZNBYC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzl02fraukTw07hVDnerzhXQKeoh6qIi8i6ZZlLW5gzQIgHeE3AuTYeAi5tqiCWbfVKl%2F3TbauUrpLvD5aNSyXiioq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDA8SWShPyU%2FO1uN%2BkSrcA5fha%2FGCCVS%2F4VzVMOm%2FIFjxztUuh7dIccsQULuVyD6HcD6KtEzC2OtUJ3Z5WSYmV5SpxCwnpOcaNRqXEBh%2FuVSb1yeWb%2B%2BekhruxzwzoZOaIO9LrCyPy8ubCRvbkuPJFBzPDVek6LKvu6jUz%2F31VGWYC%2B7KCPwQ7ebNWiRbaLbeCttjqz3IoaTb0ovJBGpJWf1anG6%2FnqC84cJQb30tSwhH6J8LQU1wddT2Fa94GmuxaWkRb%2BUp65KgVFMJUvsXi4f49Gvd%2FPBC8Ir%2FT4EoGJI%2FZc1n%2BibwS7nR8BsfOvN8gDUDLrRGrO%2BgGtiHUJzOzyKI1i9cDKneCbebgXp29P58CYCpRPb73FcPWOP76ZhZ%2B40I41KcHhm9Si5VtmY4192SwlViABPUrcKm6ai5P%2FQBKqAC4pE1eWQWU8yK8f11e14bAJtASXp0Hk9wTp8nAus%2FC7Oh7bGl3pa0yDKDJulnZVXaHP8EziLo4bOHYt7vqKSsnHyli4gjuw9FAS5947ZOUTsATBJZUUWghvgi6c7IlpUSny8g9eATfo6IrAblN1t%2B%2BI5pK376phoHqgXBziNDo%2FgVeLeP73jsUqOGibBpizt%2BHNkl55z7sMryysoVL5cAk4%2Bn3w%2BRjf4cMP3LmL8GOqUBJ8uMAgwTZl7OcSZa4eCrJ%2F%2Ft6M1r2MtObNt3OuBKGbJLUUZaqYovzGk5LnHbGke2tkDaLpUXHALkBe%2BZhIgOAmQ0qd2vUrAxss2SA7z2cmigVzPEMrT2koUz6nPVEbLdzC2rELpliph9YqYTnynpwtEmb8szHr44c%2F90u2bII8zA%2FfOUtwb5Z1e0PjWGx9YlCJHtYZOPdr8mackQssyqasJ2QAtP&X-Amz-Signature=428c7fddfa66adb76b3e28e556113862120ba6daf853369a28f05600cd661578&X-Amz-SignedHeaders=host&x-id=GetObject)

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
