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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5L5QMJ7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRyq%2B8Ymjjz6afiTLmmFoBx3v8fKMxGNaLoyl2iv341gIgbjSdQypvZFOlu4GhrXC7zbRahjD2nhf1xUOnRzUf%2FBwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDAaHDDyaZccJR9dsKircA5LWEkVgHqi959Pr9jsYWj%2F2ZdZyQa70UcD1zPdC65q7lh5nRXqcJgawlmadvLSxlzBeo27hOcsz23wDfEiMkWHfVc40nVh3pEDCUhTsoQ60dQoltY0yOZlXpvXTpRz8%2FIATyr95%2BHlmiTUl8VH1h6ahFBItBP%2FTGYGWa6ZjjaupaqZ0yxMw%2BRQwWi5brXY4jd%2FxtQkzWfZDfXAA9XDMSdOICddJKvNX3dRi95f4UGFyOe3lPGKOl88gEnQcAPkYUMyYca2BEiE9nqVKlGJOf%2B8HoJ9gatTl5Dz0nEF8gz9SJJflVOfsaHFXv1I5TqGfxEELN%2FDxT8EdNGVKwquCB1SuyMHrvetHw94eEGec%2BLeCrqcB%2FW0XC1ulDfO0p72XTWNY4paTmukFz4Ynf%2BMvm2%2BDJF0Z4RyUHSG1uwXw4AEzngMmPpBDxlYcjJBucPJ1%2FxpyrOVZAlzONhZ30tJMo3HdeCrJzVhll3Ypr6XtpsH7WdfqV6KiuKbzw6%2BsJNjBlpvCNBw2w6p4Ac3F8%2F0fGtzyEVod4nLr%2FC0d0jzk4cNEVw6gcGb%2BUdJAbUTvnqu0LW3UajMmJ9IPwB1X0Hh8Z0IDRP0jINoR%2FlmGKB0ywW%2B%2BeHUAqy6wUhv3KcIdMMrY2r4GOqUB9x7rR%2BcZAGnAI%2Bz9WB3GgGbqllCqFoT38cVCouL%2BvouTpxRpE2xyfgJQ1SQkkwvzL6bWuzOyBsvX%2F58osJYCvHJCAdBo6qtR0zD0kzrE9S%2BGHCJfXULkTuXnD4oE5G2fIy9IMxRIsh6pJ0XAZdzF8mlkdfuK%2BRaLIJI%2Bo4KciUnL0dGXyvZ6AApd09vfrj1kfXHc6QDibey5e5IT7Nrg0PR90tv0&X-Amz-Signature=56b86f12b6e63712b808e9b6d1cef4aedf5a5024f211d1504a100d3bdc35388b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3Z3CL5Z%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9PCFifWUL%2B0SdVZCnmkMKrNBt%2B0zTgGw3qGlOOYl6owIgA2rOwFBEqaFk19ogQ%2FTkx2nljVcX0agmiG%2FtDXo%2FEgQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDEo0KZf4vlukKe%2BqYCrcAx1SlR0P88KVcnY1kpMdgGFLBTk6YSYXWVzEWqFur9LcwZbH28SFGvWZQqY1acsNlEw6sgZf3fu92Nhfaq9BJQn1KtrbXdiOV5kd4jWtie4lJEXRFqTA8Bc7MYFds8dYpSvNEENuVWsUlqQFvJoY314RJzLTrpm1LViu5gfmzrtUcI6PZfdNQENRarbsohiufqnnXVn7sk0yWxRvQbG3uBGEY1APb6bKRjTYCU0M3ApB0Bhdw2DPrI%2FA6EbfN3KfqYp7P4EPa9RCXovskTWi5cvU%2B2EU9uTAnA%2F5hrGs7HIoOavHTlaCMPCIQZqrCatEy9iCa3OOXuvjjOM%2FXac%2FLIaxUYkxaZV%2Fisglz1qw%2BQ6ZMsNwlSTy2pPk5%2Fmf44for%2FlG4hjsAXDR5HUhBnJO%2FLgOQujWP74SUnwGxH2EoQj%2BKHvCnd9Q5sJgTNVX%2FBshBNX%2Bm72pk3JSXa0QfCAzUCQrC1e%2FmSChi6LY4UkVuZMq%2FJL1LUOMJ5a7uVv7GgCS8wtlL3a6UmYuxsHsjBsUZ2eZ7nMmRlmOw6HIW5WlPiLceeQ%2FG508bgp0ONQb1giORxRZIfNS1B176a2HxVmGjWyPQoh0SPeDGAKYjijNI65wI%2F6aJzx6eVQy41C2MMHY2r4GOqUB6ksVSbgFx%2FgQ5Gpbbs3rDtSNLqOFz3n%2BCgf2bPtIOocOnzE2CWjA6o0%2BR50crLLnJ%2FXWlqqfqiSYzuvzY1VymyEa6rYHM7JAeMAnSDLOeHx6tI%2B7Gr8hQAStY52uRLq278W7IjhwvhnUY7Pb3ScqdbExtuGLnvKnMLmhPpzOLmy4xYsEfs10vP4sYULP%2Fj0gCKBxIJpCbernAjgu6rxCkaJSN4s0&X-Amz-Signature=07007467b75bf6a1a838958183c97fcce2de385772bf211f71cdda8611593f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
