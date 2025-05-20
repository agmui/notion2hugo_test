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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZXRBEW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD90BWklppyUH76NbLrAp3lSiT162BDl1Ncc0m7a6Bb8QIhAJ6v9dZSlet%2BlbJMLCDtLZUgrEgOqUvW2znhxUdLxZLXKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkUJ6lCGpJG93tHyEq3APZuD6ElrBQcIRKCEsmyTihT70N%2BWDddU1IngtehdeybWnDL21tEregT1CM%2Bao7ug1P%2BGhwPNOhnJEonX5FKW2HOiZjzcPdme4ah%2F0WGcooV1d7rD77kmx5TvSGo3pdA9WDf9ERicqxSDNorm%2FZ6pxOi8gBQrtdARjS7V8d%2Bpf0RiQeS9f7pqgPyAHZJu0hzG9Ns7sA9Vbc%2FC6YXj1tyYWXUtdIxtD7LiGTU7bLuamMVJqrNd8CrXMaN9lBkYeWof7Odvojw7e5pJdvelixhEQbWvFIZdooTBDFdCvgeGXQiob9a6%2BcKWB2B4lNfNWXGkWPIcPFD9Jmku1icl7rei7L4ven7b8Aok6jaWPPtvdVuGiaDBXdJ414c91Gh84s8qUWHvO%2F9olB1ON2jyfRdLpTsIDdByvnGS9fRGF7CC1vJhvnx2A5cIfeYyyF0cSka%2F7PS4bQiTNyP7Yyt5Y6wo8Ag36nVHzKfJPSgVNqUbdfa8vBxNMoWowo8MVtzTIgY2Sez0p%2F1qs82dk4K5F4UTf8bJO0g35Ot1ZQ0avMwBqJUSEHY9ZMiFe%2BVuyMhGRu0xSqH1JGSGOFSTywEM789D%2B4fXHMGnEbl7xFHYgLHwHZdmtFoOXSv9FmtFQBjDCjlLHBBjqkAXUoTcG6XZ1nGu3ihX7EG%2F70IXtc3I4LLJ%2BcjIjpeStJOu0kjSxWzR2ttqnKzoJ0xFlSsfua6f%2FxBiRdgVu212uP%2Futi%2FA%2FiISuc25%2Bw0upiHywhmDw3QeEGioDuKrTyCkVHMG0mGNy5lO9H8OB7QcbfatrL5REsLA47g96Explzfbr3tLttCWTdOEC%2B1BHw0RtFF6YXV5Az7pvkNLba8pep8jAa&X-Amz-Signature=1f941a13295379dcbbac3194144d73c2b5936bb15cdd132cef7128fe3978e64f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJU4DSJF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWGgTmZ3O3T0%2FM5ttLS6OsQ8vabdXBAKr%2FuhXzHx1o1gIhAO1HXOLsfxuQz7bgFI3jDBonE5BAltFB6A4LEzyJLYlwKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Flbi%2Fp5IgPXEM548q3AP44xXYRYI2LCHBpffS8C%2FuHledV8zN%2Bv5WCbVjO%2BLn%2FgjvF1HsWAyflgV%2FmXoYUlfCUpP%2Fx5MQ0V9atzpxzzNiqtnZzsKbAg7%2BF26Q7y4Ezpm8QwF5sLvoSbfT4I2SDyb3kAI%2FKT2En%2FSIQoOg8aKFU7VcUXUdv4%2BDobV83N0BE819zHovI4LoPkekL%2By8wiQCVahCEUoOSy7STPDUQw13F%2BPFQQ46tFPwxV9L3Cag%2Ftec0V9uvtZeyQhAxXj33WdKzxVZy3zRq%2F%2BtVQ9%2FITeZzfqQlVmMoaZHVZ%2F3PuaTO224KRIPdSmLmilogoMCcmOvfGVArxiXNLOx4YWUeh1d%2BIx%2Fm6SyNOwEyEN3mgEeyjQluT8SMbSdUBMff8kV3NTlJyQOXSBBvCVxlKlVUxWzIEAMvPznej0Ihw4u%2BoEo5cOLx0dwFjgHAEZ10w9wZEZ%2FcOkPt8k03ImI3FoUfhJQwZD7U5%2Fl5JDcum03aK6EdtNrWYdZIfHuMrLiN%2BhlMQLIPoQIaigsYNwgW3v4YR98pKMq7ytXRGUem2OirZTgs0NXNXihihKo6qS6W0Ew3Wup9zayJL1YdvCNFxbI8u7BwQ%2BjFrduC9V4rqJIzZ2nXrssOeituSXvkdbDDzCZk7HBBjqkAQIwQ%2FzpF26JGg0Si9QzhszHYk%2BbaeKqcqTMcjlClUipJzhB0XdN49VEGlTAsOs6dWn0jDw7BGcWRJqpnW%2FHxEfthfJSx36geBnyyc2%2FJ7oVE9lD6feYRjTJlyxYDFnf%2BUwaTDp3R5%2FFMnUFstz6ks7CTvfwv5XSXN0Mbl32jUKb0fUQQ5ZEEsgg2TMyY%2BmXFUw9%2BZMmtW5llkQfNigAvX%2BszdMW&X-Amz-Signature=8b97afa9f362b80717ab3772e14e7ffcb6748a03df75dd342a2348c968e03d54&X-Amz-SignedHeaders=host&x-id=GetObject)

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
