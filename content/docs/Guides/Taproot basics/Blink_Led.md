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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV2KYT5W%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtLP9Yq%2F3G%2B0nDEBhDQVuepxHZKe0Rqfy4Xo9PACZAYAiEAm9PzcgDN5KM1IOwAkeY%2FDMA0VfKvODak9t5dp3WYEiMq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDLeTu30QjpRS6iPauSrcA7%2F3h1CeVY7QZLRLjOhGlW%2Fj%2B098VqS5sfW42fPfysWVyluBQ5%2FVf8D5Iv8QFS3DSG4Qg63YoYC0onVOHm7R3o50Ty0WFROHxFX3r%2FgQ4f5HbN%2FeQojqxc2kOLyQWz1rmepfRcUIMgNHQgHT8j2J5%2FOqC7CKTLZS6UNbQP5hHHB1a6SE06i9zjnBmOPcrXv4WX7GkMQQJ5BTBW5aX8L8USl92YT1FWULbnRgkba6bkBUw%2Fks%2BZbOrSepUL2vySS7qrBtkECQe%2BA4q2tPKn%2Fbdhi%2FstSVj4gmsy2lc8HsEGp52h%2B9IzaDfo%2B2nwpPGbIEQQo%2Fx2XluheAafOxRwwpPFahh62lt9Xdub%2FbeAqw7PBamk2zns2YMtV59VpFN1In6e8OhbJeUJr4wxNILw74xgCakAzGjrqemY5fbWIhVx84%2Fn4quQLWvG6VYe8qtL6Rc1V8xLfkk%2FEg9K8EygDiuTRW9Nf0BeGZb3EK2Ix%2Fitv2J2g3PQJIEco%2FrfwzAD4knzwSqIBRHhLW2tVOWLf0npNaDI0FIhC1j2TYM6YCpOMRrH%2BZ6EGgsT47N4zV4KYBbyb%2B7YXCsOX3D6g3yohtuu%2BU2jENUOOMcULPiYh2FPX87i%2BCmA6t%2FJzAetBNMMaFzr8GOqUBHFSQD0cnCuKw37l2NZ3ufEKbpxqhxsjaSzAUGBYwQLmFwfpFIBPL8we9O8V1x%2BTfd76Qi0V6fByyTWta6l%2BugblIwOnqQs80dQZyeom4a36VMPhzE4w1jRNRE%2B26S3%2Fw1y7LHUlMCbC81a4MJajRnfYhnA4foTTKNM%2BcndaK41Yyibcy5IUopAMmV1peOU08hxc4NBvIu9XCrIeGMKRXofzGxABZ&X-Amz-Signature=91232d119dcd555ccade0666cf6e2c80783a45ee225005f8d9946a232af20e81&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGYVF6A%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpWlb%2Fsuv1FIj7JHJaK7oHwrTnq047vFuhRPKBbceMGQIhAIATVUdrmzG0tfJXTVNcMAABVuOxiEkKsA%2FDzgHVWSUyKv8DCFkQABoMNjM3NDIzMTgzODA1IgwCKCbA4jZOa0hnhcoq3AOUze67Eds%2BaFZnPOYSDeCjSY%2Bnxeq%2FAfdtO8nxEleQrGbKSYfDbWXiktK9HwZ%2FOIfqUTmo7meHQWEdt2PS%2FPGEvrXaGqQc0V2dDz2Fu3jo92h%2FdS6yywxKv2LcKswZEwzpurM0FBGzLq7nTN9QiOzEo6cG7OuG1S%2Boo0W7BOdLsNgrhbnxAZrzpAtjZg7hoAnPHlsZghntstxjb2H%2FS93bmieD2SGYxn6l0hbnV7%2BZFUFZIhhk%2Fumy1ImhZ9RbpE4m%2F4mO6nry5hO9hxSUxpZYM1IpSX1hvM34Rx8Ptne4CoflTFr5VUM5j3tILpi05w8y7SB5rP5YpxoMMJg3rQ%2Fx9%2F2%2Fif19Vgyi1i2XoGvFyvxuthSX5IQLkUh4PjPLZ4V9hcKpUX7ronQINxcomQlV8VqFQF6bLh%2BCvloOifUqsSGQwoqG6V4JG4kXK0OsAsEsO67lBWfI%2BXRTo89Q%2F8QNnNw1QZmNgxRgqnzB6xXYheBgTYfyK2hcbI0t5IbWjt5wviYSuX74FxluJldqRYhzlrAN3HW2v0ReugehFOxf0wqbIYDGk1B8ekNIdnx%2FK3kFhDh726LDWDhydcPaKSFys5nJnL9hPmnXHfpLSzxMqQ6zuySmMmDSEnjxADDVhc6%2FBjqkAWQonDiWUak2HrBFQb4Cge%2FhK8ceXJF3ZEZKMAXa%2FnTxqp90fmDUFWpTteYwRVTcU92VSET%2FZpZqOy9kiAvjXqo7lU6QIby%2FRG5oldLxsYSMAMRdpNm%2F6Jr260mwwkAV%2Bq6am32jyXFoCPr93wJgWBRIwhqpR4KYS%2FBg8Evf%2Bespilw4yjczmQZtxpsRwvwdNWPWB78ZlsdyZP7VVSlkUsoA%2Bj0C&X-Amz-Signature=4ff18c95cb1e145c22e2dad1ff1b04a7184e51d7a924cb324f41362cf459adc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
