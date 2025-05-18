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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEFIFPJZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6aMo3nhEOsaWtTheHdIWSNkTJxD%2FHw0jo0IucGhPSugIhAPKsWRTgshE7EtfJFNZSCalsaVIwFml91mxEPDyV4lAfKv8DCHcQABoMNjM3NDIzMTgzODA1IgzQbM%2FlKcITqoY0nOcq3APi7UuzNN1RpVe3c18oXFSw38o5ZKbwVaka87Uk9MsRbS4dfbqmlSvZdKGvecRXwqIpF16HeiKab2lVxPNP1vZ4raiWKUvGUNzFnETccyp8WpGX%2BeWP8%2FnQefr1xTyImw%2BK4Z1ANUA6gOLRdP9w45eMxBZ1U4pvSY2tVEXfyPl%2FwgFdQOwalFVMH96WGXryruqeGsO6MxzPFnBeIRNmHhb3QaJwQzp%2FEFqE7v0ohyltxkjjLHFBQ%2FsiI913TwIILFeK7PXiFy129T6PZ8fpHjBjvj9WUglD2JRg0UDs0Hrn4uwR1UF%2B%2BUg%2BJwsZJYdA17qmTjxKq34jw7alrxHnxDvLjXX%2FJyAnezvkRL3fGKsrrOwzTolfUlNxbF1kdoRBrmWDwn7W%2FIK8GXfpoJcOoRWwyvTi1gT0d6HoACe7xFdq5Dp9yKmqOCo8nFlcDJqnWSm3Qi1x3r7Tb4wJsJzLlHX3ldbbtbeSzsHURctrSuKd1R%2BjzLMak6KnjJttcentvnL6XWtNyBjx30hrqMbU2RnCbqFVSt4utsoUXRLrKl6OleQPTCP1MfQ329oAT0sQwXHFXUvHHsO3r61PBlRFJnpKY8bW3%2FGTJ%2BszhtDHtAe14gDQYBm8iwxwWAFryDDN06fBBjqkAe79NmC%2FBr10%2FK59xvZfJe4L%2Bq%2FiCX8etZfLldpeVAsDUKKW1Hn3iYv%2BQ8Fp9G6pNIfwE4oqwmQ93rniG0CV0Oj6AWxy86T0TtyS60PBG559Sjg%2Bsf4mSC7h6hbs4MNDaMXqLkCjkOmYwaxeNEmlweysBWU3yACosrbm8D8A7SALekmKjKU6p3Gtnpnmwlc6iREg4pM%2FcGGrLb75zN1Tw%2Brjxbat&X-Amz-Signature=68845a1c07947afb0f4cdb5e15703c6b6a534ef243b6a6827bfec88feec578cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LSUFJD7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T160839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtDSwwCXWrAt%2FoLj0%2Fzj1x40nqjB9Jch%2BiJ%2FswVs5yLQIgYGHzx0aaSirANyVPI4drt52JNFehZ8%2F1fB4iD8yy2d8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDKT8osDX87FwAFosGCrcA4Z3wjZ%2B6Ku06MVUDgEO1p6e9xJLFXIAEjNALTOelxL7w16ZEU1u7bQPD0PTqI2DQCbUA6mM8INsWa8RUgaxzruwkQ1n4nrYi%2BL3akRYaq3kBKweD6dXF6YlxzE3wt40yntx21Heat3Db59P6iqMnFy96jlaB5w0bbQIV3eaZVcs7wC%2Bdd0h%2BjS%2BrNoAm46fEoXXEsY82XFCUBxigQW1KCBZVvbKclC7ScRlh6MObQowxoGIR87zn8p5FKzu2CWCCo%2FM9jF0XcblZw7P4efILC6sifvNWlgG2ypopSO3UPRX2Pzq3S745FzLcENzdgN30B1EIRWRS2iNhwr2rFtJvzhMq7M%2BghpVRR4M51i07g6HV6x4WQf%2BeLPa8kCfAOTqVlbENSJyx2swKB1bf8W9pP%2F7RjUyjy8Y0HR1i3%2B5BIsdK5UrvkSHLQpoe9QROS%2BMYGk0eBtlHqXK3BXYQS5ZdhnMJXnayAALF4C4gikRhRUEbaxz9iWNjDNZkrP4gZFMkplA65p%2FyuM8IQ7R89XIfVti7Jeul1ea4YlYGN5OBjhBhbr%2Ftm%2BsSOy%2FR6dyPqBE%2FW9t7v%2BFrBlHmm%2FvwGxagCeg6V6NNJJ1nAD2b3evNmMZ7oFk2qjz6Oty85YoMMfFp8EGOqUBMHnlNEwdFkjs3VZBZ23OQoI2eru46oEhHd51%2B6Wpsa8%2B%2FSxT5QUXrsuu0iEsdRbnM4GB7hHcn%2BrT2yNy3GrMwxa8G35NrENa3oeQaWtnH%2FSsWf9kSbjuNGdiu2tC9QwwV%2FeopHVTDZro0HPRa9%2Fov%2Fe0ZMl2DHJpvnT43VffF5ES42U7CbQ4IVUQ0Xaf4bJA9J5PAHLfLJ2UtVMLl8bcg%2F1kOhpJ&X-Amz-Signature=1e1be6d7f8c8869ffdfeed096f4310e3d6769662378114a9d06b0b8a295797b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
