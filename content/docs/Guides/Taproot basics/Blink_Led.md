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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4PZJ5H3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG%2BogYCBDtGWWLs8X%2F%2FIsD7C6m2uzM4glZAu6Zw6QB4gIhAPxfEK45rJznNFEwcfy%2FgQ92hAGJbPhgLCffXQjjAQPCKv8DCHIQABoMNjM3NDIzMTgzODA1IgytjAL3H6GntGi872sq3AOKlrQs6RFHqHZT97oQwyUGWBeuF%2F3Gab8S6aLa6heyDF149SnNC%2B%2FjSrZ59VHfGAJYkb2ee2LaVVDk9ojI8uAvKOSPfxkf1%2FL7yETtFyQARAPTdygmX7nv7Vhz29oDmPRxb5r8jLYilTCoF%2FwvOzIhqpQqtw3fQHaGdnJHvM7vENJvG9JT%2FAgh9MldE8%2BaWQS2TzYOOkb5ivdzdPBkQjwqifOemqorIDryZ2pTdfTKwrAys1xYtVmLNVDUr8PjrTe7ztZbRxTSj7mh9p3B%2Bli30fVlbazNTtTPxovuYFiS2Fe4zEtBgxv%2Fqx5DNWOMlQaBq51lguhEKw5gzXWS8A9M1DjxowUp1DrjxOYXsoNC%2BAP1HvVtEc2jWr%2FJL9ey8McWTCjVeEThy8DSmDI36JR9qWN8J0PU3SER3gIVe%2FqtETDWg6YcvrU4EUvlKt1Vd005rPOXqMVxIGS4%2BnyPue2d0u73BRhM6zkn5omtpeOHBNkZne5khivLL7M5Z%2FNS3v8GxmhHZXLyZ%2Frbkr%2F%2B7oHbbPD1ATyIAOXR4aoFPZ8dTjfrSXFJwwvewDSfdWXyGUI8iHC305LzqH5kgakRHvMPJqw4sixMAWt%2BKi6w6RPujhN995ywSl8yD4qMZDCtvNO%2FBjqkAT1RoNMDu%2Fzj5Y%2BzdkepYUUJ3fN0Qo8SUBtkCETLKxLLpF7IwFTD8uKm8bRZ1eNPuvAuyAtPR53T0pxvxGkauLv3kRMdjqnHr6B1rx4wmarlAMv1gfj1RU%2FMlVQV6PDeBgB6CKBMdMjVfadgUuFxJ%2BL21Hao3ACx829PTq1WeTttUK3ETUNZnO%2BjzKw%2FwTj24dVCl2pP0pGlnGgXLMyVyrDgQ1P0&X-Amz-Signature=8af25afea5e2d4de2da53ec1b7710f2aeb7f25fb46ee4b90b71a798c7febec24&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDZFSQPX%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh9zh5i2o5Ahw1QIhkPHAgrs3sdT%2BYfdkKJ%2BnxqhxeNgIhAMKCaPfRnRoy7dRnyDxigP9vQrYoJUiVkuDJS%2F2PCk7nKv8DCHIQABoMNjM3NDIzMTgzODA1Igxxerq2c3jLWYlaINwq3ANPwYCNfR%2BJn5GLU07QMIBa27g0dd7sc0IAx%2FSBsvqeTRGmk4omjPdpig6rhobu5ds19sJDMSakT52SUf35WKRX4jfQ89KWLQa7bV3SYgVhgoWKboTMDG1LAJyXB0FQO0eExOINaShm6pVHocBEHGp%2F7WhBNSEO0%2B5XAWZjGXeAlWMsoLLmnEF1VXRgAD2aYrZWwyGqxLsoeYmpO8QaQHl6PopHERu2G6KT7UXUzIMOh2ilw4g1z0GndBgPYnkFm%2FkC1Sdl9vbZYtA8z%2BcgkwDtqEu9%2F7SZp3r6Wf%2F%2BjFYLT3IELSHR3G7IR3Cbz%2BbY6fOvs6OV9yYFuNAFIMjnFjTM1cvBu0fLDQ2oqZ4VfsC53G%2BJ4x6aAn8iiqUKlfaf2H5R3sjOM62vj%2FZ%2BMP37HjROlZcIbmFOBezCwa7WkQOmpNj7lrPclIE070KDIOcOsIXSH3sWPRl2cNK0GSkxunF926pLQWt%2FAobKtueYgBCcDia9DAhxwLRn0tznHKEnR6qFj8SscVf5qmqphg1nqSyiaIiM6vw5TGlmLMzkdevdiggWLPhZqn7Y%2BYQDoYjNW4BFxQhZsdMZ04dBRmMYcQHihUYtJxb3ZLF4ep72SEPL32CkuR2CgXEVRo5LRjDOvNO%2FBjqkARxaUyNlFPpP37rcV5GU4T8HH6HPP7Vgadzd5ImtfleN8eMl3WrUfxhJVgyPPz560D72PzuyJFopK1guXwFj6f%2F3OVp21OJO%2B265KUE4Dkhw8g2IXyQK%2F%2Fy41Ed63Zsrad%2Bu8CEMXGS5XNZTvmj9TYWOv0%2BZwFLYsxV6O0MXj906FYwTqA%2BxWJchQlfOFX2yztf8sEjn6oUN9gNCPOBPttVz4TSU&X-Amz-Signature=985709ec26433f76f8cac54f5ee4cef0a5ddc3c77d561fec06c490c384960f34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
