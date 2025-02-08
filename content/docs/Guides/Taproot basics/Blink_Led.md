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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JGDPG37%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCFIGcEZnG5OuS9MKFgPwiHj%2FdeP%2Bt9%2FcnQVW%2BGucjCbAIgC9EVmWCla%2FcseRtfH4oswxZk8xJr0BDKebNvTkNZE0YqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuzCjzSbjRGXIzuqCrcA4ZUfXETus6HBl0Ud9lsD0H53hgFkjBjX7vnauua9dJvmejm4aAEak2SwrmhY%2BwRp7b9v1UrRxxT9nZ3qVnWyTOr0ejiVVTJoi1uEkyF0U4orQk7J%2BwvwpmBZ1fgr3dik3AYxum4n8B42sFKTkNH%2FXNaAX1rtUWefzUcyRj%2BvrnR2HhaDeE3QW1b2Pqkfb6w2rJdlep0gI6jjEaYwUIDmJa1aMpzY5ZywZjv4%2B1nB7%2BG7ZpaCvgg5T1WRbBeMRAVcY616mXlMBSUTacseHQQIkpSSJD8zxGUQNyTqg8ahK%2BtsgTKmIO%2FOrwfTZPmpbawwHc5L3Mrb2TzjWBTAsNqoJw9399%2FVXJ9DBYSUUQSJ7SLzBx2jf%2F1HDlrTvTJ7tEZXEb48kfG8jXHe9LT%2By5HURgKsv%2B9wbydQPQIyazlgjCHRW8w1P%2FjCa07aEoRXR3garxSUX7TnsaE3v%2F0%2BI8Vz90z2Yqli9eDeD4AzGLHnM7rB%2BrVJHQx%2Fh1R4BInmvaWqLZPd8MLe99rCBi1lL5ZLu1gldsPoF6zjVqLCUxEm%2BNy1TXzU6rY2%2Fk0azb%2FEd6QixzPv75C%2FO4HM5cubS3YNPyJeCdGi4MHB42qFlciVJaqIN10qWu0LAd44ywDMOmPnL0GOqUBMoPolFK7h5fMDWaqOyYbLWcYFMjdtPZKjBKHMDGUWv71EdN1MnfDbiK%2F31Oi5iDPtKD65mhX8%2BQtt3eDMvGD4DeDVph%2BrlzXLFAwnqwodGwHDZnZtIF3%2FfyzX5NUnW1xefRWom438OaIlU%2FS5vuRbZEqZ5TRSrkXI2NrStpniw%2BNx5oM5uH%2B3G1ulV%2Fvq5lFudpVW7KfJPLpVfInjxRTJO%2BY3%2BY2&X-Amz-Signature=7b32caa29b49bcdcb600dd9a2a5a06227cc09a61309e72daa88b27fc505fc17a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZDCPCJB%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCVv68DoQuk%2FWAOhmVD5lU9VDYwZyOY1Ljxb6L15gyj0wIhAIqE7zrfJUMPYFBSBCREeSD5RIOt7T%2BftJHpS%2BuM%2FoGzKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxV6jB5A5yFGihXrUq3APqgcgu7eIHKV3hYCH9AwFJWRYqKiBZ9REM7eW06JqcxLYae2O%2FmW56tYN%2BXIg73tzdty2mVDMN3c6y4iTioUPdOR7hEGChMlqiykrGx6lxoWqYHQeypbUj8lD3gFlHkI09m6I4%2FV%2F7a22cf04wKZcxU62MLrja7wzVaFqZThVM%2B7%2Fu9BTwhzLugqNK%2Fd5lJtHX3N2RcnP6UkxJcy0JMS%2B%2FoyGEzN%2FCEfGB13DgqnLgFdFPUvXeWOhiy64ylnZ4pK5TpBQIBvmbboBjtEGRQekCvJpXQnCUqVt4IGiCgjYGx9gQ%2BRB%2F%2FiGHTTYpmDQR4H7wgUvxsjpc5hz8P3AvGg%2BggUJZMU27RafjSDu5fWkamBJk1kcUh8ZYxGySClZc8rFQa8nmm75UH3wvi7rABBQh%2FUwXXVRGm7cBYlPOaS6huqMnf%2Beh9fiRlB5%2BLGp2SdUyj2bOlIC7gHRwcq%2BDcxSHDftrg4HmQnkB2qjBJsxNIz1vza2FAAcI1UEhF%2FLpfNpKByifJ7KXpVLKgZ00YD7U%2F0U5wpWJO6EXW5E864OBVVxchR9E8ndqsZQS7n1bFeur%2FY5SDhwV5o%2BiocDhXBu7DjyVzrzExQv4aunFxMRwpPbiYgeMNUjnsFexPDDdj5y9BjqkAWM9oYCudEVCQwPRBrXewkOfTlF2GP6Yl38AzanibDl8e2c55njQjoRL745PAh%2Bno2r9JHXJE6h6RlaSCnP37S3DhlXIXb0zH7JqKoJ2CYdl6%2BdE8ApFK6HhS%2FGTXkEZMXVbjYC5%2FalE0zFVRZUG%2BZH23LvDjT4fEOP9OEuqeKxWT0Zu4v%2Bt7Cex7McXAolDzacZqvUBO1VJJH6DfZOXNWQHqD5g&X-Amz-Signature=98a078b33c90f46da17bcbffaa2d82e549daa24630fb1ca42a3adb7bfca8b1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
