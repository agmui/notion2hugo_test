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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSDZQD4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBVgc2nZ65SDy0jJS%2BFz8jqDNJmZbRhsUTxCBD00FlONAiEApeO6FzahD7O192UhI%2BvEd%2FfIkX8wNg%2FlBVylFFOwOtEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN9LiY1ALzQe4FzteCrcA1m%2B9vBg5f5RzJOAeB8zWLvEJJycqUnkwlspggSVTC8gQO6%2F3wH82dG9QTl6I0DeWANi0xj2IUOFpL3dte8XJ%2BIkTE%2BEsk8HEWnxzjx3vMJSrjzvCBDt49cjgadgWQyXRPkb1Nq7CCvOHetFGqmDiQc3%2BY4cWawvfu0oi1rXpNpsdYGHSTpCHUWWpWb5Pr6SAb287YBZrGiQC6OpOkCKVKXMyvn70Ughh3WbAMYqMF5ItecgtwwQmQuwe%2BMb%2F8zLMmo6bKPPhuQZSMHoqanw2hyOYG13VR%2BaFQwwQId9imHwGZ%2FIUCbQQZ188yytXZrpcOkdE8nvix0c1%2FOfzhVbY9Yf7zSTNrzyl5P9N1eC%2FUJZA3f8sx9DNl0yomo%2BKXjNHCi5fbc30hLn0EOI40H6entKSvvZlWTJ0%2BM7hs%2BfSWQdpnwo58BIDcum%2BeQP%2FlWg8%2BvndDZlu6vCwkIUOVX4KbS0Knly482Rm6EvwCEwRwLKreCxeQaGd90Mi7oZwJRnJw4cuqCxuTqY9%2BTtmbaUUdK8c7OT7qROtBh3ELrT5A5tzEe9w4YaY1jTDj15s6e5OEz5MEPHxpmCqT2m5AFir4cMt6uhol%2F%2BBizylGthOFdqzJ2Y9fvCMayV6QCAMIyBmcQGOqUBfnI%2Fyy%2FyLigL59SbwQ7Fs8rnDnY7UMXuVXHN7YxTtVOYqMFemAH%2B7MdQBKsfngmk1vrQI83n8K7EPSFGgvdu6WQXDEHarcPjH8vo8G%2BSZ1pjmZeEZAS1Kak2l8fUNvLNr4gIpqIPVsvQZjr9FZvWSeHLN4yo%2FhTMXFOe9fohWCixn1UhjpEvFdjaWYUFWDC3VWlhURz5wQ3m%2Fwx45u8MGaiiqMxD&X-Amz-Signature=a96f8f2606442940d7a9805248edbfbcd75124147a3b012de3810c327e00083b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222DESKO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQC3I%2FJsTxQ3DQm%2F1DmZJbkXTUU8Msk8FZmVfKh8PM18vQIhAO9LLNwsQEgzi3pKy4XJSE2W%2B%2BDy18xuhAL4novMEGvDKv8DCHgQABoMNjM3NDIzMTgzODA1IgwNqTBsGqpJVA7kRekq3AMzWyB9sTH1Tu%2FZsxU2FT2wSuxNaZORIMO0eQ5Q8Y3X7xdBRDLT4dMXMscSHA3vchQE1zjnWsvLcblDy2RNrXawQ%2FK7EiSm0Eu%2B0GyrFFj1T8IQXN%2FVj5drG0sX1u27AmYyyM16rP1Aj%2BIcW1s6J5yrhw3CE07twNmPNyA%2B8lwpxqCZaCpQ3Xj5NHJ209Qdti7zq28TR2J%2BQBD4lMe9pWuJ8FmoyTGeJqFzxvL82bRG0bCcx3VmNBCasJrqroWj3q%2FmQqOzMkkG9s%2B1J%2FesUOBhV9Yfe1eBM9BDh6Vb8ZA7sKtc2ZsyoP8cPqr9rjvt5W0nbo8t1YgC5bK4lRoqn9335AUaD2DsgAkbA4mJ%2FzrEKHimKFQfltDw7QQlU6z7BxEZ7SO9r63%2FteQtsP6jaPinueV8%2F9jv2c9tN%2FCxEvKVrIALA%2BNLeZVQYeUMliNsaipZ9LKlZhG9A4YUpxBaWgRkAY2QYKK8tCHc4g7p3DN%2FFMG1WdlpZ%2FbObSM9pD5do2zP2iQq0G2OqN8%2Bc3NZXX0QV%2BDTkqj03ng38ugebzosAy6MAQfcvisz%2B%2B9Cjq4Uclj%2FdrbapKN9W4JjYvsi2%2BfiZS9KODjUaqGriNbJaA%2BkdEZwgkzLykkdybWz6zCl8JjEBjqkAWbywNsLxSxpnmIlfz5bbEIFvfuxjMKqJq2bVOQHLvvbKrVh74Lzo2sDs%2FxAs81XPpU51JqCram32NUjftyRSnYl2xvVdQJ9cJSuOET9PVM%2BtOvsQH4NtsPZXVkJdBLOfnNDuLDvsTPuVZyGP9dUINUdYdV1JphOnoLolRrB0D7NYabLZnuBMlBl7VnS%2F3bI1ec8%2FqaRnBROPG1YtzCAX3Ac%2Fi1C&X-Amz-Signature=74d8af5a86da1e086b3e01e4cfa4012ce31432add055676bdef4aa716f5a6e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
