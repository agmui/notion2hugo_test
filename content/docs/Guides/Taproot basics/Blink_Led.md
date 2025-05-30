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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666URVGAEM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiW%2BjZLqeqDtPKaFs5%2Fpy1C56JzaUgSZ%2BmNbHCzJQ%2FkQIhAOrm9SmlHOCzc2EgDVcm6tZQ2Qjxa7TaQeWzMfF015aSKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkXfmpyR9WsOWB2kcq3AOl0yGujeIamY1Mg5x9Lt4bZMSULBlXKZqcSfjeUkyMsxdeG9peZ5SZoXZ7mgWimkCdjG7g0uaXYtLXY8RxFGqAlg4DMipK%2FhWiycQjt%2BvQjEzIz8f1zitwfcA9s1lghVuE7HQDgaIO5usH%2B0BRsnoCD9i8XFWsND0IulbJlKaXFerNeKddUSUshM3udKSAtzbv6TXStLFArz89nYo2AdWcF0zi0rgh9cpaw%2FP5qdX%2Fncvo5Ni%2BNUk5%2BK8LMt8%2BTztY5kQTHQi3u%2FT9PSATU4D00sA%2BgghguUjUhoxtgO5Un%2BrywiBX3GgFfQO9pjd4wCjpHCVFte23SRa0M5IS6TkEugx4UpxZeGhu1q6Q%2Bd7Eh9MkaQnJvSybDxH1foYdka9N5ISVEZ5dN3WqRf1wl8L7TmKLNvepmnm7rBv6ka7%2FnHl1cV9zzOQqPlrZ19CEgJOotH6GWMLjN2XmLlMbyKw6UIjDyzhdsrcJ9FaUQdjxJWCmz20KEtvtzbZnjjSiRfcSmkchf4M4vWi3ZOYOF%2FvRJsZGh2Vh9REF%2BrZWMVK0W%2BmRNuGQNNQU8gVdMUhUWsbT8wjizSObad3pTg48jUdwWNtYKQ6fdkzgSL1HpFcy8yZ15Q9PtgkdYCTfpDCY%2FefBBjqkAUlol4QErpZamAesCXvP7NELNv5yRBXGZOd3mRICWNzxzI7NFc9vqk23CIGm%2Fq%2FXE%2BUEHuzd9NdfipqJz8aJwJEAYJ34qFl2SPxQoa%2BE0gFaWWyNVtblqPy6IuO3GOGOx%2FIqG5QauZ0Aa8OhLYEMhCkLETSNDYI8yl47PPjb44n28M5nSMzB7BThsWrv2jW1BzrW9OjQFh6KY1rxBPPD2q0rEIpj&X-Amz-Signature=b307699dc77d2eced3e7c817b699764d5233c85250d80b71abaeafcb7c3dfa80&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYPUDVVV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBiAimdkax%2BylmRXvQMXeG4d56LOMyDAlRppsokS9yedAh8wmy91G64Bh8YZoEFtxjF9Ex2npFkW8P6kzicRGLZjKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDoYJoYeIwbZx%2BLdkq3ANd8n8lss5fsuskiVTN%2F%2FFk4bPZf2jLKrKn7dbzNjhIXwnexZGxjucL41P9s0k4m%2Bvr0rIURD2Tuzda2fWchzN13wzyny7MO3howwKWhUmDQbENOjl9aTxjD%2FGtnTLAa1yiNnoHACMzX3mcp%2FKjRsK24f9l34Up0v4JTZtQi2rLog0TuVbpkUBvgDYT6A3M%2FtUW6VIZqdHaPzlRVIu%2B8zjkY3NXMs4STuY5%2BvMEOR71ywExbNQQbeMabO7lFnuXbLj%2FbXsesrPT5iFx0CkfjZxsoYnJN8DG53l674534TBRx0yCLjQTPYNnaZvrU14LWJgYyqEd10eZXPQFV0d60U4Z4tdF6X1oEny9tvti6viU0O3TwKVoDq6e7YzV0FLjOsiDhkYqB6aYWrWge8K0Kjd9wT3THw8YApzgIliTzQuPp3XGIvRfp8M%2Ftvau0bA3jNNi%2B3dxaZZfqMoRpz1Uoy0HXkaxY%2BRCk9rW%2FQxgeRNoDcNKDNkh%2BvlQnHxUyXeApPmEwRRoz4TnX1hcdIhx8f0GYZFhpUZ26ZPJ%2BYhzJ3EqBFcuIlDunWHC%2FfPD%2BmTqfRNegnPK096EfExpLKDYCjWn94NxZjB1TbpyoSkHJjNbyV18N0ASC7DIrNCTYzC4%2FefBBjqnAZkYgDHS5WfO%2B%2BC9qI6V0JHMD0qGcS%2Fe7V35GP5VRwgxekWQWfsJ4l5RhUch43%2BriiDPv14AQV0ORN8tEsfVBfkTSeVGZ8H%2By7iTmgwtzw5Ny3OaYqE68ZIi%2FO2rfkGTV2t4N3gSNKp8%2BQ2v6iGKmfDAt47aH01pap0%2FnXDLWHFvHu9SPlydVHfdRAOIHD2R2e4k8gv3jJVynfnUAN70lYNiH%2F73DlgU&X-Amz-Signature=05443d30884247ecb23dc28024741fbec615b336a72f77c71e627852323a42f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
