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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EEKOBIK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNkh7LgOnKoQWtacyl5JuLq7XUBzV6%2BCeOd9jxRGZPTAiAhQmupienaYsMRBylV6s3%2BadyApA%2Bt4e5stiV8cAc4Myr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNd5QSx2%2F34sabdCQKtwDsKeCAZ8RSos%2FiSturNTgHqbmlguUK8SSzkmHjWjW0rFHGKLNxCVeyQQ%2BKpsK%2BMj%2FTMXrUpYWJEPHanpYwHXBKdwmZNMy9g7yYf1J5pyr1pQ1eslysyXZue7B%2FvIVmtR8Kodmhhr2%2Fk8eFvdazbVV6QKErejuNb%2BXvXnE%2FG%2FxHOy5FM1xOsqjjsayd0lLOVy8dD81vBjcaT3roLHhlfYKDiS7EmGGm3PTB%2BasyVX24oPtECJuC%2FALqUoTjPjx3Z5pdAcoXFvYPF9ti9sNGIShVFtWPLLxnC2hAgvvqDtzjRvkU4UoD9qrDB4DI8VTo4mifpG%2BGjacO0KVhFJuIUhwhLDfZnINxCYAvi8yqd0gCrf14CmcjK%2BiZI2NbxqCFxKfxUZBfTfcR%2F9Ikt9g3MVAj1xT4YgxTWZnHuy%2FAZgX6NLcqB3gXx484g7mag0enNkXtVwUGvIiG1p6Rx8BHXS549Z4wLD4hTnuYLr1FAmCQKCJWQd5MdkOw8UNTWZEMo4xOqdOChII%2F83v%2BoorSYcnoHdeUsLj7jTfmvQjKsmtsPI3X3BQ%2BCDDKgwXQUvfGFdX9WbI66yPoS5rhHRbRX%2Fhdy%2B8xEI4lTi%2BKVO%2B%2B5jvTyvrfZ0%2BPTCFN7xe5Rsw762nvgY6pgGfADnXnPR7j7jprHKSzfJYcIuU1NqWwPtK%2BIVK5LlMeI%2F%2FOw6aqP08U6Kaji00EHFYBfx9r3zsvIfMjMQkpTR%2FvoZPYIJJOhGrkNcBCBkjzJQvNTV8o4wpEklhSAtuQJdHYfR2KbwUv0oG7XRXMe7h%2BHzEWYPGiSeaDxdr1sn5DyY%2B7adCz3fj94EBOOKuLNiODAm2trFSuz0lMFlJFtLnyAqmaW5U&X-Amz-Signature=ace005098859279bd0692784549567eea1f76f0281eb3d502e027a597717e1e0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3GI6DNC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuSAzwBRT1GqFn3quBUaOj1FnXJCn4XJaqMJY35TQFkAiAE%2FHpKjOAjvYIrTsgG7Ihoua7%2F56smFERT2ENYoBo0Gyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMLEQ1UK4W1KxCD3e3KtwDwH7tyeDXm5PBnMh0Y3B%2F5MuSwUCJ2jcbyqkBd1f3UYlXUqB%2B6cB6AOn88VU6MQOi2tzOcoRiTrPkdVspr3Bf2nNq34gfnYg%2Fo71aNUVKHul5RblIjCScApIvtoHHhCMRP1ZJ%2FkDYqs07N9%2Bx1fUFKZmi5%2FmPhWTq%2FR7oh6x0r%2FJOEhY8AugTszOQ7PC6Fhj%2BDF%2BiI%2F5ycd8B17N3lTYjwnxFm%2F%2FJl4dw6mGEr6DEz%2FYGQcxvAj8M7BxCD3P66%2FBD86B%2FXffs9rv9L7R%2B6XxI92oPE5nLFLyIZ60L6hW56dmva%2F0x%2FLDcwnPpzPLAqhZKXK69pXy85i%2BI95FkSWu2F4JZ3SPUBr2790NRk0%2FM3qms%2BAoBMa%2Bn0hsr9S7MbOHnZaNhTkteW%2B1bT0VTZKAQmep8PS%2Fy7Mf8MjX%2F5ZT2VrsAR5qr8HLi4%2BJqgS%2Fnle76WIS%2F5fNDJlrVQP6QnOPGMp28AUYDtZwYHYDYYwFAOCZnfZyF%2BAfURT1CVA0FyOVDlYGb0O8x%2BpwwF2EtqS2Ah8gshu2tCTgIZQz0KfLSADLa6Owbx0dl6mPponNpU5hkaAOR7ULrQ2JdqpXaDRw8JpuBm2M%2BYEDefLiXLDu1HrQYoUTUxdv56xzrWtow%2BK2nvgY6pgGJn1ORjoH673qQpfutuyadGlewQfBhwCY4eOrxDZjMzfaAzlmS5DlR%2B1aRoh5UOJmwp3N1Fvjts5I6F5hS0koCe%2Bboex5uI7ka%2BxyI9wMuRgGptq%2B3P3PZMVAcAUgBDDk068U1Juxa2wKs7PKgjcnjV8Fj5tpH41DjVkUbzUPX%2BzVItb9CYu8p%2FnYOqhKowVwN%2Fx32QFT0HDSIojHY9Ym7aq08HI4v&X-Amz-Signature=b0b2005a7b8881985d5c18339d52913d5d7490084bf4f65bb431185b1ad3bc74&X-Amz-SignedHeaders=host&x-id=GetObject)

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
