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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJJJ432P%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkKkes4O6KyBF3QjVyT1tQ1WEhBg7%2B8trEMXqNjGW2wAiBtHSxwQcRBNGS2rT5wUZ9SAjPszq6ktYFA0F4sWhLUhyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMPHqKNBdO9R2KrhjqKtwDopmo96ms9dyESx%2BoZ0pK3tr6MjySPwLh9kCHorgkq4WYeVyEIJoLpOPp26PQ%2BjdsRH0sZuECbop91AbFrdeFxcwVY47h%2B8NheVJSry3VAmqoy9%2F1rzRmLO6R3wjTLpG2h9Y7a9aseOpkDZf5dPRKQP6AdyxYR2kP%2FBZHNO0dIzkTOeQpFwKdhYm382Oq%2FoGNU8VX5Xg6fS3GG2gGrXTLm9s%2F6TzTFnXIwUbj%2B6bMFu05ZS1Sk4Jy6eFmhfa%2Bnm5FmgKh50Zan%2FdWC4coQToks4Qo2ENrjFQrcfDq5UVpZupXg%2BegEMCaOfeXGLg47hOE3HvGuMuO61alwL2PIxYnT6yic%2BKSijgBYgu1qk3ihNt9za84Rxs9c5kpHV3rUETsN%2Fy1H16tYPk842HxNOrve7zr%2FpIQLzqiwlXE7f%2FchrZASuW1AvcFleYT4C03uBCJV%2B%2FfHEai1MJ4wGMNfkY5iMhakkpPejalvQtmeUDbgSu0V7v145hvelXX3d8JVhWtqHW12SSxfrrEkVcqsIYet0ND4k%2BV%2FglRBbXLm%2BPBKw%2F8EC0AZB9XUogFBaKaSQBB02eEP8bz8ZN2SnmvL7tMOTVEMZLZCrgNal0fHepBu4PhoPVZJaONwVTBl24ws424xAY6pgGSLD%2BX3Uw2BJqUMQcuSjvqglDez9WJS8ei570JnJ9GQ5aYfEfzIU%2F2pHgEZfVW0xXDkMDEOJemGRYzpLmA00IAf780z9cbZUupXdr9mOJG3Q5tmsx%2Bpvjh0N%2FoLZAKZAlJhOXZ%2BFGcMD7ghErw%2FxpX1gjGIc%2BuVN4JDNAncB3QKuNaN47BqEv1xiDp5qSrNvr%2F6GjVm2sWrF8lsZoPZQjdNuAnL7KA&X-Amz-Signature=7d4983dfe4fe593d567e717d9a6354076d49b7f33d5e89d9481d199b3b63fe37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S46BLN67%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpuVmyKj5I25ctRxb955i75M02lqTTTb5VubAufReYggIhAIaJ51PzjqFEmuCTnvbAblzUqDn2GA1ELSzIw8XyG4TtKv8DCBYQABoMNjM3NDIzMTgzODA1Igx1NZXHZ3yLtElty54q3AOvsOCd7gls1nGLZ4OIbQJUOaPcVy1nchcdFNA7yx0kBtULXkJTHOAiJMbBck1rFiwcz%2BXU0Y2XexzUkdrZnQZ9hJZBXVzgZxjUePZNYowdrJ718ECfU8wPJyqycVFhioumv0%2F%2FEKBAxguNzIx7sFWM3pDPBw9nd7IGdm4PaVppedHMk44iwNUQbw1CeU68f04fHS3b%2FxvNl%2B5mmpeYHBHaI5TmVwX38uXzQ8uu%2FYdbRqavwe%2FjkG6LSS9q9%2B6542mkc%2FHLnrBrTdM0hZ4fNV9Ie64ecF6E9BHZAnzVf7B2rd39QYTAbmfGJBucC%2BOAAfB%2FCTt4aapcBu0UEqm%2FiEWRzacMjZhvuN%2FPYjhIgkWPsYLGOi3ns6Jk6FF4IReAyb1WZt8jFtKEpQbKW0GSv7Bkv%2Bg%2FA6MFpSsbOcNNrpi8OYSAo%2B%2B30W0UCymmkCSL5II76%2FiVS2udRxa8KD5r7q6SnhQiAjf01oHrN6z2r665cop7AbNygGHbMV5TyI5lXQXTYvWQVzOEyqJEf8ippS2vpNUeiiUPcFLtvAgJZaZ%2FOxoF0eAh90kcxqNULkxvhrt03wSgDf6sm0N1zqKznTkgEOOIFl9bjcn5BVL9y9jFO6n0uxIi%2BPbv9hZBlTDGlbjEBjqkAYxrjgkZw%2BsmXSzb0KDN%2F47bYQzoqWsiWIFHTp9QCycCrzymlHgB2QwQhD9M%2FlKguXH9VVoAqjPOVSpB81LJSpdgazALsqiVo0LkPi6Pu92ybeHzj7UhfQITKr6ipXxkfV2lgPaydQtum8lzjlRLkfjmX3V9p%2FepvuMTZjpxUX1HeTKXQI3mgZHIcr8gWPRxMqUYqA%2Fecoeic2wek%2BYZofuEnhkI&X-Amz-Signature=035feda791c26137cbd96ba46285a877cba505bab7dbd5f2c283e526304ac59e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
