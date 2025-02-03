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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2AW4PD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDexCu%2B3WkVOLOr7v9Qby4cwLy8MfM3HUcHfsDFQgZxcQIhAIdTDENB5R5AAPOmGKiv%2BLK%2FTGqhSi8CITn%2B0rQp5%2FLKKv8DCBEQABoMNjM3NDIzMTgzODA1IgxNhLIntYYenLE4wPYq3AP3b74rkGEcVmMLakbXmLPyknwm0Re7hfWhFcJaEX%2FEOmmA9kTqUVzXvTXofo02VkcpJcycWVCBMZAYU3SY4bCkjnVg5Be9BXl%2FwBuVYc8ZkZ2PuJG8exjEFCefPJ%2FjRqxXA7gI8gBXP%2F9mrJYc%2B4hbTgD0XKX1eGHxIj5iz6pyePsGE5rxXlNVITCCvxVuI6t9rCxmV5EQOhf%2FvgSztpogqqO%2BwrdFrgZgGlewG7X5Y9w2XO%2FCQpO%2F6paOTNRXcvJhBbJYrCo3Tvw15WpAupNXJ3CieiQL8V0m89MQieCVgYkH9O7U%2B13XEFnYgPhhNPrQu6Rz6%2Ff9OvhMJ4teysz6RcuJOA2dq%2FVRRBKnfJDnmbfJSCKWOdx0SuAEbfY%2FMHcUhFmIoic0eAvNDgMJ0gHejBaFqcbEKak0cuCduF7GTLf9Gz150jBD6EMRsP8dkjqgOnK9jy7jEuDSOWwqEBHK28iZrJ9hhCiAzxi71xQ3CsY%2BRNfJDy51IVhsRIj4xJIaTXQwIxAOLleaWddNhCiF7BcA7nZNXYv8yyq37Nfv9Ax2OESktYjfJwR%2FkI20NrA3NOlHtXxxEo0rSY%2FLz1Mcls5fyWYV6RzPmMGFEGLuTuvlDn%2F0sw7cGmIPODCt9IG9BjqkAbGq6D8W6JVTHu9FF0by8huKMLeLk0y%2F0a5LY9yEtisgSOcfYC12fsvvJ3VZleNGBEPyYp8aCHgiKnxodBMJbyEjDNmYji6lkd61%2BIAzgkEdncdKwcYiCu76PDbA51ZQnmVUp8iOi69omAhQgfj9JP%2Fz8gYqBoJ5HRVAsmzMq6SITqsofKzvX5e4MTkEgcOs6hSPJ%2BLObqiWd13nEREyHVkKH%2FrD&X-Amz-Signature=346e8eaa71eb1fe2538b4773509e2ba281d00a320e5d8abc9e3c1a2f412cc6aa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VONS2TJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGRV6z9CzD4dQugzLGtaCytHNJhIy2LBu%2B8g2WGP%2F7o9AiEA8Lq91y2RaRm%2FuTBSP%2Fz%2FFNSvq0YwJhWq%2BPDDTcuYHK0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDH8ULnpxsr1wiIBHuCrcAxaoqYDOeWzJArswblhfQ%2FxORThFqFoXIbp5PZ52ZAEQZyu2dpPkYiUhJ85fEOZgG8vMbBeQf0VD5g4mXmNHfkqbAngqEGbGL5SXTjYOdzv%2FlGmUt3nlsAN6NvWq8VgP9ZDolq1u7eARCDQfxG1sTp0zl%2BGvGbWwm01PsVsivIwJT%2FhjSxfJdUyhmgQRsIAJeO5SB03IoDY%2FdlR4w6wlthKrU39Sdnv8P3Yiz4iGELsyGQYRKZntCIZgnBMbKdFQpe7XMdb1EPPdI5K%2FJVlEcTiq05mIs4%2F6%2F%2FcF4pVVYiuAgWLgWMiJWqFaj4vIY6GJA2nZYo%2FvaJY5qEQMuE5g2sw2n1DNMqYteLepu%2Bi7wzK5YQS1%2B1qyTxPYeTHJkHPhhAYPjxz1yxR%2FOR5r78L4wKuk8Lx3Ec9GddqP73jwTYnnyXaMVgM4hO00HAotlZknPkyN%2FeRMyiF%2FWPnxY6QBwZFoA3tCDx7yu%2BEjsK6qqcMtyjGMKau3zOVFtUwSHr%2BGGNirL%2BJHLdD6dMqRS%2BJ6D%2BqGmsEUbuMpf9DJfK4TDvMUNXAiOlW0o5SAyC0DnL5wREqFPwtamtTWJNL1lvDwRQ187IPwUk1RHimOGgsahuDZij6kXJ1joYuMhu8uMI%2F1gb0GOqUBvQc8%2FmsOJ6cI7sHf0A9EjlEPV9xJpYDzwcxuiMwpiNIhNapf8RljHTowvcDsKYeGk9ulUFLjI%2FiIgfaMObDUHdkJrZIDVhK0nldoaSaKR1ufwHqD9b39Be2pnp%2BDNmfuN6eYIoDi2Q%2FRg200hWdMEdVXfKpZqhdxXPNgkaVKpn4nUdtpCTJ%2Bbm2oFh3zSCw%2FDE2bdHULGvzLrNixhN3ySk%2Fslj5c&X-Amz-Signature=4091d7b0cdef00c967d9d3c7c9bb6b2aa0c19c5b7f0556fe97577b29131c14b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
