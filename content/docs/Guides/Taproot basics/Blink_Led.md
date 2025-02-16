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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q4UXBRG%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDRf5JRNSaXa0EMDKOi68iwyP5eLcI16o27z%2F0lqJK8OAIhALp988ie48Bmxnkyw%2FmgOn3xh6uJ88hBmosWGi3lWPm5Kv8DCF0QABoMNjM3NDIzMTgzODA1IgwUF65yRHPtjb7e9dEq3AMYtKHHzPaRP%2FJlZBjDdw8cav4cQxOrRqUYuroZNJPDOnDPglZtA8kxTXmF4m3Ci9fymdv1dWDqc9JJ3dOc8tkKxGFy5y1f1r%2BBDDHDGNyqI5p%2Bw3mnbGd3MViCvE4XT2wTAYP1S%2FgaY6Ut3mq4WM4s7aEfkkG9GAdiEpm%2FxpiKRtvyNydIR8SkTC8tSt6vQDcY795rPTaHBFykFOn1H%2F9yw250C19wmBPa17wvhtGe6eWeKSjxPEz6gGJ3CfL%2FpjorXJ19AtmOl3wjC40Z7E1svJKiXHEvH5cjauonkYEPI3Ael9SqmEAi8TUL7GlnaUNazXaCcyKSX%2FvkyaxTkv4mW87dsoJ97I5Lk2sDs2zkDlqd%2F%2FZQ2ccOU6kSuy5nnnAixpBmSIYIW%2FYg%2BT9pCNVQONJterkPPn3pKM5T9Qn1CPdQUtaOtHUGPiU2rsWdEeZBcXSMqE7CovUu0qU33PC16dwIM4lQa2vtozLcDFEZG1vxBkLyPKHVNboDj%2BPPM8IJv1V3Y4hBxytIrH9W%2F812sKBsO42b8%2B5J3dKi9X9SZoKJjsBgCQqBb%2Fri%2FFCOvkKLHj6wfrrCrNLyNlQBJnxCvvl%2FYtJTnj6q%2FPUW86jf%2BTUMfYTFiWDOG2qSGTDYmse9BjqkAcMD7OA7nCcUDxyC5IUArJtzrzQUr5omAdMDRUnz6wXcJ9dSMm2toVablYtL8A4HrLzUNxnIXCDh5JAnP2cQIoY3kPEPUr1m9HGQ64nII1hW3E10Iz%2B1uPZvOVJKIajIvJTbS13AFbDRXYu8A6Z5wNVhGqsYPVjeC%2Fu3bc1UUmX7kVdyOk%2FdBsDThchk0rK07mpMzv1CbD0EwVdh04PNfpBiAI%2Fb&X-Amz-Signature=6075d93d79a1d0babb7872893a7719d6794626693445da0375a8287be541c5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHM5OQW%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDkHVfrIdS2tn0lrqWwO775laR366sHYWqYSFJZ5oFauwIgMuD%2Bd8AmaF6tLKOiZrHWlh%2B1dg5uX1sr4YDbiJNyw2Iq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDB2AgOZwKukhCQ%2BVcircA82qIU81K5Qy3QLpARPAAqqE6MoP3tNxfww7hkpyi6UD2vdKQHJDeghWjZT%2B4CghvMvtlNUks4PQNOc%2BEsUSeNVXJnT2nMfQeODndyn3wiBSlIjB3ZucbyawtIy76uGTuEUg21qmWoWLHqamGvsUe3OYqLmjUVHSoHobWgI7IzmVXniFsZgRTF6Yb7pWZ74UN0MgHLRU4lWnAPn4Le%2FXh3wY51%2Fa26a3Vghu1j1P8NoBt3BvorS0k7ZUaLjukqIx4%2Fa3DatR8bRQAHxXDLEaj9Rykiw4iWV97qxuqf3sEnX8gbBgW%2BV7jyn3WFLOPxy1wYkVUGh7Fy2y4RiQTAT0zCd7XEEcgotO22ixYgZ4WRwifo4O5Z0hJbVexewwXjM6CCCQM5SSMuO%2B%2Bf8Midmy0yG8W3MkxbEXuhKv4adVNmbsSi7w0PFMW7zX7BLUY%2Fd5pUXirpN7XlMpxeSQeEQaKrTuhOhD9dR9P7MsS2qMt22ltDdTVT3KVtTlL9%2BC7vn26gQiUI4E%2B35dXNfKSEB3NHrk11IYekXxUoeHDfvUHnf7Zfc76pI7LeJDuH%2BN4kOhsdsqwjg0QHJRTIPULSCozWT1o00nwWB%2BQqbRkSZPYhQ3fX4j0AwUg%2FvUBcNDMImbx70GOqUBhKrgBAsSkx5yF7l16sG8P61ZQUvOQ%2FeYGZ0GtUgtwPTiIc%2BXN9yB7NY%2FxfO8smNJCffCFM6gYJvRv0I%2BewOxl6s9T%2FxSY2K8U6eIjifhiGgiylZe5%2B%2BZZ9JvngzOIzhSJ4Eh1%2Ff7uLtBMoNx1b3HyAX6iSgHL0JEIEh%2B%2FsoRxnmHiJt0rTbL0pYxVFlpPlb2yVNj0uEK68RD1eT7THuhMLzG0NOi&X-Amz-Signature=b1d8941b97c925ed5242f0139ca999bbfdf6f6a4ad22a9dfdf91c43a074e48a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
