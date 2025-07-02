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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EBFP6WI%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfdkXRSdoSj6a5notV%2FU4TmBfT%2F4vfrZTp8pFXGYxwJAIhAONEdPXt0LfnjWUirneFKcKgOsLcgsIEN8j%2FOiH3awXVKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaBz%2Bk%2B%2FwpxVFmbQcq3AMurvJJT7l%2B7nmHFna7O9ifH3Wc0%2BmQAOhJQrfIeegCSZ78QHrSEHrHniNScjU6Q7aw3s%2BD3E0mncYKgQEGOaJhhntJQBJWZa3BytBULjdkiJ%2F2%2FYwCIdfAX%2BcH4GbFfODpSJ0quHdT1Q6eI48Y7LmI3Uz%2F5149MM36qOe9xH3xJtgAPnl8wQh99feI6ah%2FM5BqBQ%2Bcf8ifg77El5MdsMOKnK%2B5KfKV58VyFjXrIc1AJOjkZAfF7jt7TD%2BgKtCFaAhm9nWhsiF9E3vtHj019yAAW7bGcS%2FyHI6MgfzcyPinVQk2RM4kmK9ih8R%2FwudJtVFtoltRJpszV8zh4P00cLxm4uJAqvXeSuCLyfPow9TENmJsvs%2FvgZ2YJ%2FesDvbqw7A%2FVlBZVYVxvwv804gXlIhyuxELLH%2B5h9Tfrh29pn6OVP25HdiBj5JLmpFyumW2hmHfaICjdXjEyqjP2F6cnnc3y00VS0TG7vvhdDvXdyWHX0pOj4jDSDozc%2Bn8VUqlq2OKGzh88FGvvivE4Rsf76ZQrJw08x5RzY6P40qytegmvRCIZ84DOwj9Y5tNNeTbCrhowm1rabFoU2J2jugBOga1gDWAJF%2B1puKWQCYr4SQh6d%2F4ojQQLbWbC2FCZzDd4pPDBjqkAUXyEKnibb3YTKhHDNEKQGHR%2F%2FAqxlo672SZkKk8Cs8r%2BPYoFXTexFHKRInJPRz%2FKbVEgBolNBUNrbazDUCyHGuJB%2FLO5YrD8tr7sL9L6rby%2FXcDPI0iJIMMg2%2F2N1BUubwBkDKDROp9TaeCe9%2BjP9Uq1YFCoinp4WicKA1oeBAKMi91OijoHMpxZnwSn5bfpULeb%2B2RiBcbYMV3uvnQCU3qoPiw&X-Amz-Signature=505ba9963aab1f70e86ec680ffe92d3e3450152809899665e74bcadf56690bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOHKTX6%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3l404t39kPhgcUEggSdCKZc2T0HYxNIgVVJmYoPqzgAIhANuLrb%2BoQc2RGG9EdJewQl9nTM1LOPIohAMMIzRL2KI4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzllaj3rJbhV2jbh4Mq3AMBoCoECkSYR0JT8cB2KIRoINZYX85OFzbjsE3j4SFdkbMkeFtZ9DdBcwL03ot8W1GtFI%2FOJIWc5gXrPDFwQWxIquME3HdFCoebTuWHpHObOuJXgD66BtDjfTH%2FiCLAV8obpA8jg1AR25JQbUUnI7RIYJLkqi7m48NWiAXJLWPZtz5QB7f8SKh1bDvfqcmub2Y0w1rNr6I%2FCASPYyQZqSuCSfySvxagq4YdQWPSoocMjgo3OBEwEphjA771Ztt0HMktny%2BW5O3sfJgUXUkAJZmJbCpt3W88VQwCok2KMNVl28bLVC%2BCBKRy94pfU85VZ0mSTXULH7md9Gc%2FbxsHFAV5idFDeuviPkTEsX7LBf6nkOK4oCPUSfi%2FsFMt1b%2FAJnFJlY7rK5PTYoSy%2BgOP7r8fNYDJduHYoGqjdngFJzAnOzTZG8nsElldLzm7V9dg16lEYs%2FbP2rtAe9UmJzrlfrj7XLDoki28QXxnF3f%2FEnbvP94a895HP2ITrleouwYQZgZeDHHT%2Bdbh%2FHjKLgeiMwv%2BaJ1D622GQU%2BPaJcTtYw11PsVq5B09qWDokM4%2Fh5sN5xRyLPQQ0%2Fgs4IA7KsoXiS4iRR8mpGHiiCOpZyfFjrGwrtRP1e24E4g%2BO9yDCk4pPDBjqkAVGyJ6TVmE5WO4v1uck61CY0XFvSey7W9cjJl0dXxosU9%2BpKNPoo8KCF5okOPzmKliE7dOpw62A4vQN9ZJC74t7Fn5gntgR8Iot9Mlv2PT4w51CXVa9BreT8w2J6tRNkAft2bBHG29z%2BQCzgKPw1HDKgYYzo9ZiYDExCLdKUDJRzzmkeCSKujsdnKu7uKzi2Jf9osjN6iVcKbtVleIi%2BaOlKj2w0&X-Amz-Signature=df9a491ef9d02440b147ed19d69f9a0b17445b1fef03a1eabe33a020a099ffa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
