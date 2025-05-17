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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72D6WEA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsevf2aHESZQ%2B1PWWIgsOeSj4FSgoAEsLuD99YVjOzZAiBmF%2Bg6sItSVOxtVxHNVWmpJk3Aa5A%2FriGasXjdLV6qWir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMD92amYqDoSnFLEQTKtwDRlEH0Iclcy4A%2BVY5BH83a3AgVCK%2BZjFscSxZOTx%2B073l%2F6%2FjxhakNrgUfzUqB7OPH4sA2AJZarJAhzZ5XFv6OhMhElfgCl3EyiY%2B9T%2B%2F%2Fk8J6q%2Br9PSjxZsJF%2BOFk4rdQvyMaS2wInTgsbDvi%2FNDt5%2FmIX7vhPV%2F9OEOoXPusmNmaMhaSioGsS%2FO2Wdx3m6%2BKkvcUBajO%2BuuWlaBKHerGxIV2HaAxjSukkjPOItVDrMZkI7r6UbS5V%2FZgJSd2BpLqsLxELg7WsmjWL%2BB2g9SQRbAFbV2N%2Bm1vX0TUvw8hbWyuF8IDtjTB8fYYx5zP9BffUr7vyjQT6Fiia3mjdcMC4WkzAWu6P6M4UDbG96KgPWzwOKgK201JYZuhEA4y4r95fTMfb%2F4KO9g4zuPLlH5lJRixwhpiN3duP%2BkvVbx%2FrGYW6nQg76BEsCmCoca09zKQHrShckEwy2%2FTo2a1sTbW9%2FumumXJ%2B6VWulsiwHSB4Qtx3MAF2e6vuSq5zIgQh3XZltlrx2UmCwqaOlINqkVMfhDFHybYm6qyj5Qdl6txRBe%2BHXxWp%2FVbU63KhJhzs6ZVVaSDpCnWTqWJ%2BVu2niS391E7ik3ryK7ICFOKK9s3abTwcfHR7pWdw5conUw9LWiwQY6pgF15nv1F12RiHmFuC6NUpf0q5fwedtiv%2BZqJTlTR9dkIdI9ul8vrkvGS1E%2Fp18n%2BRzI6I2fdPAJExaXCwjElxmWz743ZRePzYkxOqV7S8nTOydSsVfOr9HSaO9neRTuU1%2FPJNKe8zCJCNeMKD%2FxfsUg3str8GjaEEmSGZfn%2BKwxNw6xt9csREdhCpNMZnSqK8CvsYE7KDtTLRVCxnQ93MuASnOfPGs2&X-Amz-Signature=fc1e4c8739be0a5800067bc167382cea833fe8bf21c81843da0ebddc06236138&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMXSQK3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhwFORB%2Bl4TBvJNRUuxeFCr%2FobUXzbvEGC4AqhCH0pjAiAns84OMIbVk3lob23uSAIrVAhrQoatZOb4BprqNNu6eir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMHzbUiMWsaiwkq9LPKtwD9VABKgJksQJxCt25oIhDdXtPTEGw%2FAq66dGQ3%2FJtWodH9PNy%2FvGJMp6JmOm5BFgAdlgM%2FhjQRUWAkwSD0il8EhG6%2FzxlZ%2BZ92RGmqX4ktk0kYpoXmmuDKewDZJALPGpgMBI5sjRVS9vGy79l42BnGbu1ymYqZxe3mfvetNTZQWa2cVI8k8dBmgABheLS5mkQ%2BtVZNmT2iGdRLN9qN7qStlGOTbQKai1KhwPMtpGbNJz8XEm8ZZs0yTHT8Uou4cxA%2FRgoHKYOoCWOGqcjh9TqHdp1WBpzrWeigEB3sAoxHjH5By9%2F709L8%2Fqi9vUuDj9kVabqSKzepWzn%2BA2LbB%2BDfweyjAAXKIXj7G9chhFQXzwjU7c8bwpS%2Bk0NUQRbUq5L893fJueL0VMTMUtKbIKk%2FVcD6o2cmzn150XaWW09sm39DScwiSGOgMC1YwiDXh9GDwj4M%2BWHX471VXCAuRj3HxAJhyaiyXoQ1%2BblXxWqlH2q5Uw6Fo1jBKIUySpIpKAiedZAFx0SVtYhuNlerrmVTJa1moQYxnf%2Fl%2BPRQzGKS3EL96V81zxPGp%2FywVnbf8lghgLPgzWEDfmyH7WjKynhfyiITqj%2B%2FGtGmZsOivWsHfgtOdw2tPqeiwSou%2FAwwrWiwQY6pgFZ9cjPBqoNAcz%2BO7zweliv9aH9YtCiFi3efuBMPJzzxEUjHdABm4W4Ra4y1akTqkq59hH7zgHDbXd%2FjZJASExlN%2B%2FQfiQKzLI3N4HcWET3ma7joJRgcpaFG0pAwkkDA1ncoN1LKCw3HUIwXG2bc2A1xj1G%2FR%2B6nolu2sZfYqdbq6HV2rI9B8AluHvbZPpp%2FyIGksbLdWOjoWbAgCNr1iyNgPN0E0Dl&X-Amz-Signature=09a677742853db772af9cb94838acdb46454a6c9c151e7b5bbe664537e88442e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
