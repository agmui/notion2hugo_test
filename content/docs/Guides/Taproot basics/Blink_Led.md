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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVXZEAR%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIES3NTKi9H79NFz7u0Bf7iIqWZM7zINrsuO7bcc5w1vnAiAyyZGGYhW9Hkubzs28fkbnbUQSfS7u2PZhekmy3BWMuSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3UmU3KYRfn7q1VCEKtwDbZp%2Fj4Qg6eVhjqnHN5fWKrKqjrzwXHHD1pjH8rr8SYqvs40Z1CtHk1x9fzJu%2FPaDf%2FCiZ3fg2THuNV5yNHIlvyXrJaoYMOEU%2FiA21H5fOXcLCXXOs6Ca4cquL8EA4xFjVhU8kETSI5Nk6TpYGwkXaMeSoc1M4zFZKN4l4A%2BkzOK%2Fxdd8pZw8TqG%2BmD2W80C944UmD9Favt5ARSVAxbUiVViCQ9rQyrMaO58dGfc%2BPdZel6X8bgsWoef%2Bgo2PPfZjW27im22WXEa3ocqo6lyasaKDos5NrDFruQPrwkmV93RPruEUj9fTDn0omy2C05wad%2BLVzB3XzxOzospfbcfi4wDXnoxwHcSMgel7hIMBxdre8XO%2Bgv%2B1loS71ZR7M%2BFUoUhvzujtbMgZGB1hIlid3V7oz%2FKJc8gZ%2F47l%2BvEPCqX85GRlupgDSVYcdY1xtTb%2BIrEVLyWbQnfOmte1iT5YBnb9CLhv1hqk%2FnmJaTvX6Usg%2BlNCr7XXcocQPK1vdhERr9JxnU6CRI9Dq6GqR%2BNnvflYpLTNISpIJt%2FGShwi9j8m3Lo%2FBWI55sY0q86QcMQpbkfnaL%2Bb2KKK%2B6IgkC9RbOwOonr%2F%2F3OjQX%2BlwHeyt%2BFnUw4LyRjslF8lXGswgqfovwY6pgF1UWWQ9WpTi2wPyplDvllOkEM9Zt9%2FRAcGCAoRlqNQtoNWaT6uFpU6QT3U3VkkVVygeRI7YvS%2F6hYrQCou3HT%2BCEYEWytQO8MSxq2PbrvBiDovZr1%2Fit%2FT5XFCcU2BTH7mgfoPKhoGU1bK9sHCQwHCHj9Aq3ZfnhGy3du3wQpsX6woDtdz%2FxD2mLiraxoMi4vBrWxQxE82RfVn2qrVeqcgdwvgTfvh&X-Amz-Signature=a657758095b57c5848427eaa1c67d2199e643b7bf407b3d78f64c55b062f118d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YN43XVP%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDpw9%2BIp2TgEatJHg0RGRAGDJ0JVczTGIBmunYConDfZAiAMbd51KKo8xzdhET55%2BXoF8zBgj%2BUuKoNIXhXT4ErH9CqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FUK3LGqyiqHvh0%2BKtwD%2FoPIHDsWE4g0t8zY6%2BUy9gKLH%2BZ42YH3DBgJRTJqk5v2EsGpmBKL5D2vhm%2BxwtyyuoiiPwRj1iBWaCMI5SpT6FPUXYgSLaxLyheJw8HB3HvtZB3Na6VLKFSbFyq%2FHVt6becawe42LMQy0%2BIrN3jUmGWsu0s2uV2v52tTwZVpNitr5HigCb73YxAABcUdnOlyBslMrCYk36qmTjOd%2BYRCxjHM%2B2mvpIUm01HTbpXU0GH%2FvbZtUMe8gsHAAzoJNyKXXh5Bp82veQNyOF%2FG4Us97uVfYZ1RQDBC%2Fjer%2Fx8o7md6HSbYxMMsvL6dIe%2ByCEcnVmEaUhLUTn76DkevfSevdVLIlLcH6AgbYlpQbiQH6uv7y68zo2XACytyASwoX3y6N9T8RwvICFvq7rdtSI2gkZThEMkl4TTIvjY%2Bbs%2BVhaTEcaOghq1IS8Cm%2BrytYy9zEQDyaO8rkigTGERem%2FLkikROFYXZ6eQLNvfOcwKEk7Ab8mqKEDQWJ2gRhououJpUEHvsrj884qxb7Z0jkjwsjsaS0t5SXyWf5GzdQBrD%2BOeAI4Obq13PxmdHLulefbPRNaMTHe%2FNQsZJd0fC61A6unVlAEupABEefOQdxwAUNalYN2bLVW9eODC0P6UwrqfovwY6pgFPqZtT5A6PgeJUV%2FZ2%2FuKvk2KfgUL6SmWYx1%2F2YHRpqJQ5cLczV%2FFSwc%2B0DZUDl5LJN%2FkQDvV0DGFw4a9uAWGmjN2nTqiWx4kLU3%2FhuKati57cv3eGpCo1oqk82rjxdPN7ROawycl0Pk5a2sazwz73%2FgZX01DMGkiy8dAmsBAgGbCwhTcrS4TS8d0Oqiz4Cdwi6qx8JxLW8S0sZ7NlYExZJffoZdr%2B&X-Amz-Signature=b7528c726682f3f79b12af10c0dc652f81f8717ca10f6548b90405a263c1ba93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
