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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BDDQ4M7%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCQ7rkYBcTEdEQcLZVptbxWPRY7QcJoZ76kxloL%2BWwWfAIhAKCZufZKDLn%2FS0lJIFLqMtQtmiUcP79j%2BxgQFdJayaMMKv8DCCsQABoMNjM3NDIzMTgzODA1IgwESSHe6%2FZEcmprULoq3APGwQ0vyULJJHnWRGb2DRWlS7oAYlwf9HAqcYDKzYt89VqYmHsW%2FSX%2F2L%2FDVq8ROotWiNiW6ytlfsNg%2BxQFP3nnO0eRBe%2FP1Cda%2BBdHB%2FbT0sQzSeW%2FYZe4sCNLyObj6tKc85EYXORLrUuOIQVhTrEhRtkTqlUixVeFlUhdiykVD5R4kNedvcEziAycCyUxVSUYg1KjPf1B6lYQVdDfaQJ8JxW3sfpupdnTWcQUMSBwPegWIo2kTQbVL8nqiN8aiTEZxhlq14x0IXjtr3d6a0TXHFy0AhWmZcee%2BAeF%2Bgbe06dpxVq%2FFbBoAe4wUFISXKo3WqTEuvsKgNoVWrWNB1AcOJ2lACDf7um0ysw0CbCvvmYrlCtKP4hfQAHEAFTj0Eg0569sNuRlDvrDhJXaOoIQNBTtNE1x2he4pUQk3oLz%2FQuDTQ4fcQDof4g%2FooMS%2FqS%2FpoZgrqqrAQO7RLy%2BZ%2Bam0enkaEkvVOYnB1%2FcdoMrTeRbzm6%2BtxyUGYXpAC%2BzNRQD%2FW5gPXgTH%2BRwK%2BeS42bZHtMph8gHHr7UuYvYed5%2B2%2BLaYy5wDypJ1CnPCHl4cjmjRY9Hz%2BKsPUBbLaHgDduS77BJSNWIY6GNX0A1EC45EuMYVN62lzvOetEoFTDIy4e9BjqkASxIhQOEcpiAdwj8b%2BCmy%2FfrSfioQr3T%2B11sjC3WaMgYoR8GuNoKcyh%2F7aKsSzN2vfeNN8i%2FqncUq6YAbHnl%2FQ9KzUtIjSJZRdO4A15wD5GWtASHuU5w2GLMfuSnk%2FfiSJ9iLBHEMw2E9NDMoqbKLMqOifckSt%2BITObgrgVcJVucvpO4FjdhjiMUrsHo5qb1yd%2F%2B6UJubL77zENgpqG1LGXqb%2FfF&X-Amz-Signature=9ee8f5e03c190cdfcd776739de5f0fbba052c1c07430349001cd609257a376ad&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TUSLOFE%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQD6c%2F1lHronuu9WXF0PtHZMe6XyMX%2F6IFqzBU9n1uAXMQIgdOgi0oJgAsq2qvbWSyQci%2BAX66855A0jrRdLkfKHZP8q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLfeF5hBqa1eZzy7nircAw4KHG7ZKpsfdpWeLTxzVcYqdKcFUVoi2vV6tTnyFlXPh%2FLs8XMhrNEGY3cjx6EtCzIyBZ66CCjEeF%2FfEl183DC22xMDzmR57wFLi8vruVfJyrxdpSrfVXFqYV%2BkjFQiAMzO6ymfFyOK3SFOV9NUcg1lHeL0kIaSwBshR7Pyo8hM9LsNBQ%2FwUXu4xMnIiIS9hPNTj3L8aN7Ry8wV%2Bim4su6QSIuwpTlFrAuu%2BdLKDw8M667I1k%2F77Rc%2FQPow3Pgt29XyBOkVblZwnB1x3y%2BRLuHC11IFIrPNFPJpWyM7KAbJCS3Jb0ht4KL%2F4vCCK4ritD2HRBcjuQoVLXYOu4lf8eZjh0vD2jdSnOn4FpL%2F5fj8f3YCHI22uyX0qfv4RZkaYHY5Tw6jg4XNpqzThMXdKxNc%2FRxaKwFYdmsYkk%2BWzJeHcrl3DiJoRgnFQE7cTvNdmLbEMFdNoCA%2Ftzjq0Fe%2FbsPl4ShDZUT8N20sBQUmqOE30V3K%2FOXA0VMh5JrYrbx92qWacIRqB7%2F7r8Xci9cfhc35XW2GxZM%2Fae6DeVKBFjP06sWBtZ8aoOiEC5MwJcGYJDa%2F3WvqI54hFLjpnjyvjunvVE%2FHOHTobqaJAthmF7zhktwlbIOwc3AV9d5uMI7Mh70GOqUBlQmsdHAOwzNTD7qmByRNObbKo222JwqQrfQUm9LwX6a7woIf87bpVsNcSQ2TWtlu%2Fr9bVyA5JaNFQdSBLT0KedHgLT0eCnuAwHkboL3WmmdlCXNmtmu9xlcOV4IS7M8SrSsdbP7Gs%2FKMvSfA77rH8lqkUEPL5yqC1Xi1vkoM9FHKIimfpEqZko17lXJYoKerrdrxvab0yxtjrEHcPjlNovUBqTg9&X-Amz-Signature=3e1ecb46b819a80eb71b5ed1e359ae5ad366d132fab07624616494b6da27827c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
