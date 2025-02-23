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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HELN6U7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9rX5QVU6Rvi4%2BrKlHFBoAD3HhmEVBXVVFIvqJIKmnsgIhAMmhA6Ma%2BHZu62XaYGiMLYlQC0pqSAVAIbx9tSbhghQXKv8DCBIQABoMNjM3NDIzMTgzODA1IgyD1SW75xGz0ky%2Ff48q3ANy5tVp4BOAxV%2FBID3MZgo1ZbnWJ%2B97rNpICN9aZiWW3SddnK1OMXrWpnwUkP2WslwQTHLYCh5%2Fyql9P62wiGpFbJE79x696h0tiKb3gWMMIYqqILCxifQKan7%2FNrtZ3blv%2FDZuz0q8fmDOVQfRTmNfzUna%2BYZdUC4GGFNtsH2%2BwB%2BNQNzNlGW2kaRqaqD19mNqFf5qDfDD3GqzqIAS0MvfL3OfrJji4norLv%2FjJuU4ypIXU9O%2BaKazW0IQhYn%2BG6%2BkgZAiwTwLZlpB6kwgQVkUBLUHDN4OdPuZCY0CD%2Ffx%2F2icCkQ9PvZb1rJE%2FSWAdmeN4D4ImkQWWZAOLh3avTC7tAg5MKI%2Bd9E6vS%2Bqr0YtYsINdUYPhsxcRqUFVrmrI%2FSFQKOfvtWurbu56i0QfmA0%2BkpGKJM1Bj%2FQQfxfeVzV6Y7NJw1lq3VnIxx6lCZdy60fgqk8VFimPu0woqP%2BfmE40noGslH1B%2FLIdfMRpXJlmHomQadH8oXlImyvSR5SQyycSRDs0uUOXQ2eIg3ci4vO7jy0VYEaOtPlMLx3RyA0vvBUIrL7beuUMcmGHnEK0vdFkH1%2BAO2quij7YYSLEjQMubZ519sp43ibvCTSVxh1mnOWWHvuvc%2FsT7zrBjCpz%2Bu9BjqkATL%2FfzvhYByoGD07oGKnUurxGxQMHDlRzLmYscJ%2BJA3mFHoHSZ6zUJH22U%2BrdhhpEA5JTb0YUtB6%2Bi%2F23%2F309g4%2BOY%2B0rHkUcakSo4pfFsXzvBqUydu8Xr1WYGfqYLqhG7ZM7i5lNVijnlnhf0PZ4A9sVl8bljhomHn5S1Q7uuABj%2FQIcZskbAJVWfZa17%2FSJSU7XP9RU5TTiVxeRM7J9ofaUSeJ&X-Amz-Signature=40a2756e602e173a273ee53f6c8f778cb25ec63b62eac2cd2ffd4aa75346b8da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647OMIRDD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8frF4gCSlXF9gCMES2YuYkzLBEI%2BK1V6qnj4IR3CXxAiA%2FzdXkPr%2FuNr8Z9c%2FbWQHyKb5pQ%2FOKGhWNrEgpcvinkyr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIMCiZurA2%2Fh3vq6NRpKtwDwyb28Mnl1BUoUQVVDVknHf0in%2F7sCARoX9GKIoOBkuYL%2BEBUlBG7RoSaJ19Cnu1N4D0VPwRl%2Bw8ymx7DdIcAyNek6Sqq1XY7z4zJx2de7WKPGuviQTQ4Y0Q871UKDloJ1YA3c3%2Fufr4OcYZdB9yvlhcPOi8V5FVX8Ml6x%2F08n91v9xieJGaef956GM9TLx34raLCgICbdoVmjkmGgszp80jRUnlLKMOtNboiDl9v10%2FjqY2e2WiRxiPEHGg5JYpIT%2BJmg5SAxf%2FcaWDYnoW1cnjCVEtwAcCVo7ib9FC4ZOqp%2FRZKE%2BoFDajipuJP%2Bj%2FZU8n2FEpNjIb4r4WbMqV3ii69yQlGv6BVX%2Fm%2BUEPUdCSDWVjbQUuoyjrXiMqh07M4vnW1VKwhqZQSUh1k%2Bq9BcUUFaNStTKJ7PGCfWOlfbnVhdUPvF9Y02dC2adK443m0q13hXbis7eoHSR8CsWX%2Fg%2BZHJSf2wDE8OSOhEXnp5UvXcMp2ETJfagebNxQdL1GLiBsFvbpkbrGbORueOigeT8CMC9AaPZQulSFaeIwhsXIwfYxv51mdYR%2BHku1EFNNcutDj%2B4n7Duu76tCcqgnZ7Wicx887owwhhz7Ay7YddSVfXPmOxaKnr86lAW4wkerrvQY6pgHZA5lak%2BezGNKC2AfuUVQKZO7sTIk9jH7z0vOZPo%2FXBiJulj0cG0j5p6wq%2F%2Bf9r5hop%2Bgiaocj6Zvnhx0oJKEYE5V9QOBMxr9PAL2%2BNGNmwe7comQLGd9WkM2yuru1dWQZQGecB0VZgjMGPbHdP41cKj9GSF2fnAhIG4wc8KfKB7JCSzQNd%2BBo3Pd%2Fow5ioEGOZN58uf1vH8lSEHB0Kz5QGP%2BYaMqp&X-Amz-Signature=81c6519c97c256725b7047306927a05c6557255e6e9a052142d69b235c86d0b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
