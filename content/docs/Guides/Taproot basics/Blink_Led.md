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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLXRPHWM%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIFobaqxjx8PF8U5o99gntVY6mB0mTzIGT2sM3B9TlWURAiB1yWIpG2%2BbMkzM%2Bl92C6uuXyl%2BsgMqeJvvnCyMvIo48Sr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMVeTZv8TEYUptA2GzKtwDMjQb4Mfg9P94vJ1DJ7P5rBLfJIZrSb6dkTE5eGyivxby9KHOEdzrHa%2FyeC4AyvFqXh4gRiBTeInHsOZDJuT8SmnrDwSlH6zs%2Bf05VCur6JnjJMGxsW9cWzKxbeGZRWJqVCAU%2BTZqptu85H%2F2PNyevkXSlcYQxY9qPu8pGH8aF3bHCXJ%2Foe%2FE7lW0HC3ISNSeMkHYZyWaEc1K0ZkZWSp8NVuwIVAqOUlmrZn3dH45d6eASTBb%2Fi9h4KpKrYbByhJXQtcBduyBwrLqNXmKBJfxObV5AcirvlCypr%2FwC3X7a8a%2BFvo67Fd26BYYsiByaxAYmImYWO6k5JtUuzdSA0mKwILRhNXzXraN7wDOW2ZuHvovRU4S%2BQX1QnXvwEw38MNahwTG5quRoIeFgG9uvkMUrQ%2BGjTRM4Xew6NzsyZuklVylTINHkUKYY1Itpn5dghLY6GadL6XjhWvNB1QupdT%2F6ef2%2FNT5b8lI%2Fx0D70qgLULXIoFpJJxu7cs2dqXMqvbkb6sbuW3BnAlyrvxBey98JsVB31ENVukNn4BOZeKYHxYzs1ciZ086846Q40uXaw1tF%2F9l0nrZK%2B4PafLXYxgwi%2FerrXDDxOLQdVycFqJF7ji8gLj3LA2urrJ0eFQw2fCCvgY6pgFtlHLoMXjIyW6heTjwp9tLCvjl9u%2FJcmhmHOuz0rTNT2W7Ck%2B2dyg7qy3P%2FncBm2se83QIJsMVDwQ0jQwwLgkc%2Flb1oV6pkB9%2B%2BtnPNkCE80sWgHxpDp%2B%2BPz1ZHbJ8SAScNeoKPLpT9xeuPc6lNnfRTbJo4dLNEalWjbfqrk0%2B3phiPy2UKghJxnWegZuklHzocHCoep2jOIE8YOMxQrBkoZb6eYbJ&X-Amz-Signature=f84dc95cbba4418aac09fbfa29db8332fb02188931a20a315c9df8f687e2f9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QT6TXYTA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICX1oKG8SRyDOL%2BqmLcTv1SQLyqO9gYmoZDGBJ9IkTy5AiA5A80kjd2HCrpsaIlbW%2BqYI%2Bjgxo%2BjXxhdBTj29wA3SSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMPnEhaa9KJfJQRFLLKtwDHsCa0pvJAf1niXELFVL4yOAM4ScOkYppDupLMsyOEGAbhFjtBqQtSoKM7xr2CzOgPjnJePr9WNSHW5UA3EgGrQErhNx6m4n6nbJ9q63%2FVucaHfpdkVCXiYlbLgMsjeCnkSiVASkO4wtMOOpNqE60l9VW9YvvACwiXo8bPUH4utX6Sv%2BYFEKm6n24YvQyb8HI43Flo%2BLZBMEFGoRGBAmpacAj3xa9JAhELaa%2BlHy2syh%2BCGjYw3HIGP349o4F%2FGDw4JNipPkxADmFGZi%2BbckgWEBEmV6G%2F3%2BOTrahyFm5Tz%2B8B1Peln4numgQlqclfUohEYeewv%2Buy%2FxcLC2uNI6qCM7vOHm%2F3zkWVxVCm7kScEID2oDwErjlRU%2B7khIQP4pOmdQ1MWqn4qTTmHqM0o7SYkzVXDg6HegHp7DrsmQDD3%2FwfKqFN369kqeVzGor9iDVYk3Qo5p%2By%2BL95h7i7JJOK%2BSbbYqgu7YLxRmSDqqh51s6OeKhniyoX0gkBb6DLh3zkvU0ba2gjTlH6QTAN%2BfmHuBXdiJ1qvgVJC%2FvZc6ZmpDtOKJMcDox2fK1SNFjWqiUjXEELpjN6BXFZTn9tC7jUd6CVjWPzTwLh8drjmkaKoHefjq8ZanS59f63X4w%2BPCCvgY6pgG3ZPmtEtmWyERnXtUaJpUfOjsjTFikbJIr%2BWAZoJAXnv3D8FLfQmTcoCZGRPea5svY1OD%2B7Xlu5p411uN0E85q7Q4K4ucxrmYNwsSU1EHPO64DYyjDIJ%2BLO5qufsg8oiPTghTUyKL86o%2B7l7tpk%2BRjYNJwOZn0JA9d2%2FBtelFe4CHC2Zh%2Fc0rS%2FyQBmj0enkl4fUfx3GeZ0gGVVZT2RLFNTHALBUW%2F&X-Amz-Signature=748e08881118d0d40a561b3f66c98bb0f6a6b62734820fc75777aae4c9d20b79&X-Amz-SignedHeaders=host&x-id=GetObject)

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
