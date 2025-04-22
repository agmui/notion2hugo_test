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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6GX64HX%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHgW5%2BsV3yEUhs5IxU9D1Z9itveQNageyjqdtzgi9lXfAiA2r%2BXd2nP%2B3BeBEukzoPpaHxRjVBrcq1%2FEwPHH8xtv7yqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiYW0iR4KgEUQe%2FYuKtwDXr0JtPZbbNXFOurhrvPUlhyHCoBvCkWpwPMVHNKy0aA%2BX8BrB3BQgj3uZuwuIGnCiB9greU5wyVQpgLyFH0hsYj%2FutGg9WYILTp93I2QQ5T9AtiiBmas3vQx0YT1GllGG6OHS%2F7OmT1szH53BFpA5uYOtGpS%2Fru2AKb4Fujlk3Fu%2F6zAGt3R%2Fze2NrTjMm9FW3gdulpiPUhLAFdpsZO%2BgC%2Bu98qNJ%2FMZrMudYXKltVUrfOYdtZmiXXDtTYOqW%2BxsCkqJV3iAV44%2Fmo9bypH65eMgZY3JP8aMMZbQTzOIn9MawK33%2FSicALQkiLdWkCPCunLwz0CRXYVxcQPF5kKd4iRLO8GWPIq3HR7HAp69VlA4b1pg8ERjw1LBv2WXyVEe5q6lme0HAyN1yInRz%2BRjLCMdb0xp5Y3eeNQlqP9ckB%2BXsFIhx75tZj%2B3xz2pv%2FApJCW%2BfGHp0KMZ0mtM%2F93mJDqSyN0kv7BqgCYxmMksVz73c%2FsMQtbRyVDSYI6y%2Fyz5niM%2FKwUXvgQfEDMM5aUJqM1kpnaCGnwHPo%2F1lbd7k3HW%2FUNe4LHBf8N4JBzSPXqAocJaTSurIW1YJLcJEYVKnUDq36ugfVad6X1QEFjmjEgn%2F59vwEhYF7QpvGkwk4udwAY6pgEHpW8hgosB7up4NswVXLa%2FQWaJnLT0qwvg7y1cxOdHN5rdp1tHBpYjs6Q9k%2FfuavXVnYC951sinsqHT7b3RJ8%2FOjvR6okTt9zT135C9dwXOI1UW3gB7%2Bdah2D2IfBptzNU%2FmVRmAAHDZpvi9Cx5%2BTJyIUQKrud%2B5VusqumWwe95FIbYmlQrg%2FtWj8VZoNlV9lTCqt%2B%2F3nhBFCzC3aovPFAoZlACZ38&X-Amz-Signature=e3ed350b5d01b30b10183d515630edb329a59c4770546a5d4b2acec4c855a8e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZDEZYGW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDgrLaalitTLcQFQ%2BXNGkJnUaeiYCOWq3eAlKCTnZnxUwIgZ%2FoQ83n2n7AduAUFZIv7v367oC8O70ujI5mZ4vPQDvQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVj2GXfpNBG6xpd%2BSrcA4kkwFiCjUI9vAHYZZ2340zZDkmwIaajPgT4oYJGAPledTPAMvL7UUWrqnsWPqgrGNHeHnnkll5zF2CWMecFZ%2ByicDf5rRmUEivtvUq8f0j0wcVBEbMvpVxdGSAgElvBVo0roke0QWn6JcdlH1fF886wKbIRd%2FxTP2DDb5l1c98FoROPjIWCvPNGN%2Fer3grGq6g8evU475d8WiQJoFbdpcfkBdZM2WOh9RMSr5qOw%2FnpL9Ac4yu1Cpeqdsib9jsUq%2Fr6n%2FXWAGxzccfaDELCIMUfUQSGpNO9zQGVLqd%2FygIweN0qLwBE6R66bG3ZUBMynYqI2y7vQkWFmRXAk6IU4EiDV%2BlTSLmwACWSJFePGzOMuMHDxS9trid6C4P40%2FWer50bu5JikbXRqy9W6jeEmcM8boHazFCspR%2FAGv53fjIItSi0L29lPg8DWU9bDo8M2MOBUufC9Hi7kJf%2BBholXc6NeONK8VgKtCAgIiNfMFgEaQ%2FVAym0e1M0xuY%2FJ1A9dW6Uarg%2FzteufPOhevWqH3MHO%2BFbm9efbLY1CfLUbM94RM4A1QcX5kVClGihGTuY6g5aVe%2BV0ptzMp6pgxW7dd4KnAgagNK0HzqwofbC6hvYE8m2IsKPJA4xxtVDMMmLncAGOqUB7SjsOAfMnUmIpzJcCHlgxcGcRJ13YRjpZTKxJJeOBGU%2FgM5cD%2FGkzLdsOEtEVdV77tgzvw8UaG%2FBMiegkqzmHONpVUNnZJQVDf8lc54Ig4BiVudB9rw2WT3fEc1P3BztcVgZuT0fD9k%2BQDh%2B%2Fp1GppUy0RRRlC%2Fnb89txqErGUwwxLP901Gr58r893mlxJu5lqG8iUxkYW3BWcs3NjF%2BPbCSkO9k&X-Amz-Signature=75fb5d9e69dbf7328074a90171d4e5b1a022752273424b605a60af53f88189f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
