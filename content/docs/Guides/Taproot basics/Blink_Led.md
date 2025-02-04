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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VYRP7E%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEM1wWaT%2BY0nyXCYL%2BxYC3L0ox2qDn0XCRBtTFsHS0AGAiAQ5%2BCTUZ0wcjsNfNn%2FPZioF%2Bq9Rqiqyt9WRqna86HCSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMq69W5LO11iXQY7a3KtwDfEzZGObnOmAePDUiq6KWAGOkf41xMxm%2FsgiL%2F2TSSM580SrshlpD3tMZe%2FSKpusVtnmDrZyAuhD%2FFCuOq1Ivrsl2KDHu418F56YiNuXDf0H%2BsvDgBbTwk7dZJIoCFjYSvz3essWC%2Fgnk%2BPiJ0Ngyh7iKKe2F%2B6GJ4DJoCX6N53psGuFISS3s8cZPfD5KNdAwpx9H2OhXpVeJFDZ7oMu1GVOs2MyzUIbQajiwnQHOC9qJ01AYjrlMRy7R%2BEFuErzANrITn%2Fhk0iMMNw38VxlEogVwc2bMh0cXSkssmeV3CvUuko3WXBIqh%2B4NOQeXhvK%2F%2Bw%2BT2GVYahqByKyZktvvNt%2Be4Uo0Nt5nuxkAt2ksWc9Nnh95VRTjo5Kf1rj1GpjFJ7FBi%2Bqv5OYOYX44lu3KHF9g8r6tQOVE7pT2zqHG2ICy91anwGvvzj%2BfPJYlfx8V8CpAet7MBt80od6EQmBZx8drDMISsdUKMB4FjDnxCXVfDEhf9kjDYRcFQrwZNSNhARJK8kPI8GhrCqgONQ5oEa7vQXEkimzybHK0RHWfVPEpX5QVJP6%2Frhqe1IgkHkNmS1lwSvT26dF8DgRlue5o4xE2ARTIgexW4cBoJoWKL8fGCpJJWzs%2BIWXL4fQw%2Bp6IvQY6pgGODrTguyGJPItK%2B1OWf%2BN7Im2WIR3azU0JZaJJIiMKfF1LDfP34n%2B9dGef9qqL0lGBddQcRCAWnFUUNTIvnKJvEwWV7T3fwc9X%2FwB6F9YuEQGkMdB8VX4VDMbR4InHvIvL671oGE8tIEK7ATcYStBObRHLwmNlPDcFIA%2FeeVWlTlr8iIjLbKIPAsafcWEDDoVTfHg9NK1rncP8xvd3AJFg%2Fd8jeRpa&X-Amz-Signature=96ec71223a3d60ed95a5ea9f1520a003a7d37059e7207e93d5183c699c357a67&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJIG7PO%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCJggQhB9XZdTkMtvfzeLT5Q2rQ1UbI7RnJ1A3%2BCclR9AIhAKMb1krCkaJK66Fo3NNNc6XYgXyKABRFc%2BrmLFHXdFlUKv8DCC4QABoMNjM3NDIzMTgzODA1IgxgPJHCBUE7GUcp6egq3APL%2F0AakgklHqyo2Hist9wFXoW8wqaFG%2BOp3clcyNLk3vvdrMbB2UlKPbyQndZsVAZo%2Bs4cLG1%2B8isDGKQ%2FQurZiuEeMUnwdtQQ12k%2BmWrcnNYY8E1Unhrc%2FIBIBE69NSjy2FMVzym%2FTofEfXMCyWB%2ByyaZRQaANwWeWn7uB4hJXAZxtCTUt%2BbPY1onJA3Im%2BbNieS3sBXuYvlVrLa%2FY2NBfiPJfyOvt4LEXJB%2F6gbuaGTEKXDjrEc8r48lmkEM5bl1HcTAWdK9I759LBouI0%2BfxgO2QE660175bGrMXnoX8OCji%2BQYSqriLnGq9gwY7k1h%2BjSsX5rvJpvvOrRUd2Tcar4l4Mc9cFMwFL5Qt53%2Fl%2BbYtnUJZEZziCuJ8GOKaAVaCn6OjpYlTBcqaCl%2FOt09u7xKH9aqO1%2FR4Zc%2BnKlLw%2FpIciRz3fv%2BuIjEiRAHEPAJ5K8mLJFEuZFOC0I9%2FA4dRTbRRrY2yMV25K0Oie6JfnqEXmrLN2FZ%2F%2FVWhAY0w19DBAifMNeQcc8d6Vn2yqY%2Bfupc%2BvRvw%2F9rRnVndqhxflWO1lpZ0of7KnC0SyyhQer2W6f3w3X%2BMZ5zKIejt3RJXu8ZlijJA0dModoyzK5wa2bMt59woqCBmAGf2jDQn4i9BjqkAfvzq3WznmsXFe%2Be%2BSX2fkVkqIKiIhVRUzYqlWIXJC%2BzW9Chz1UskZ%2F5pRLVlK68RGbnGYzTIQEcG7h8XIbn5TWSbNlNub3snkfm4VUoXliWFiAySIyHHjDY%2FD6L9BcyqOauqggqW%2Fit0sKLhaqhFbSNJdNQrXNIfkbXZj79aynMwRy%2FuALlD9xiGVtnrNeCiJgcZJmTgqbzwtW%2FNi%2FV2GVke8%2F8&X-Amz-Signature=06d47a8e19389296cd8943ca914bd87882cbae2dd388b73d93ce60623ae67c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
