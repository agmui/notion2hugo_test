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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDXKFLS%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlIrZyP8GleAgEwu9ZeO9wn1VtpPVM0MRNBqKwyCbJBAiAeplM55o%2BJRUr1XfCF8u6zIfC6veCHyt4tEql6JW4q%2FiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9agr%2BAJXPoRNu3PfKtwDspKXSdmPYWqU%2Bxgdq0g9rn%2F1jmUs%2B7Y%2FRXKrZbnwwWWTEB9pAfmCWhnYUA%2Fo%2Frn3lorv2oaq6oZfRyazkda%2F%2BkWvlJXAyHFUtrhzdSeR4P4MtVUN3gihDtYdkrz6hIU3IN4zJuX%2F%2F5YTLPcSiWGeygQrfI57m5mWHsiVYpOLr%2FnWffQqVttwlY29VKFvZt0o9wr89v0CKfzrm5t%2B%2Ffu5a%2Fn52QMc67v212oNY9UBMhff8L1TauhiP1l%2FknrZplKDBrElSJmzOocUxlb9dyTQ8QgCBF%2F6SCT4gvUWZTcuKZfooUrM7wT7svwKfTHTN8L%2FshS8nUsX8fjN5kidgrpHE6ExexhKMnmovtNk%2Bz2HV3zxIE5jFMwUzgNWo7cvS77lXWUX4y4NdvAhyQuT%2Bu5%2Bn5AyOC8hKKpT0hRwxIDYtrb0vo1UBXdMX8zY9nqbiNkgeNSYK5UBM25NBgoeMHSAhTe0cxUFb6yGWj8GGKWUmrYKd%2B1HiEFfD1mRTkQeC7aKFs3z1FQwi7lnYLSbatvdJMAPIdYClSHv7UU8hFoE2ZHXQ%2Fuetlhgs32sbquCxLP8tpUEbfI5FdLoolsvX3TZWNMBF7YXIl9U6ZQM%2FDvH1jOVT8Xw77LpKUcaeJAwn9fzwwY6pgG2SBaHeeTWR9u9jgyg60t90BWd1momH7S%2BvnacFrf8zTB9UTfFw9lr0wuHwOyOp2o9wTjUEHLWjUFIgBW8T6qNZ0DqXBxhToepiIVdI%2Fs2Dh5aIVPcVe2rBbz0GOGnn1OtFbZH6Q%2BO7lpH1yAP3eD9iBI1vS9jKDdgBHrWYao%2B1d1AmEHoCFLG6r%2FduqwR9f1E3YumgAOwFAG%2BlulZKY9iWB%2Fhjts%2B&X-Amz-Signature=0d57e2b2ce556ecad12137eec6d041283d572462d03962987453a19089cb924f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXM6JRE%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD581WDxrYjwZdVCRrfFJz8XIKi0EAYIfGeWCOA8BrKoAIhAPYhWfwFUTK8p3Y%2FjAZOmyNx3sF6xHPbNb59iIxxuuhuKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG7RmwmipRbampLo4q3ANcy2mzqqwGYgP0dUA4zOOVxwEiL%2FjFLe%2BzYNoFL6RZ38OV8leIvYR1qXy0UvqNJhvB8km%2FeZ8MxacAsO5Jy8MJe0s05XOYDcaEN2xa0LA9FtzfScMsvXqNmO8Whc%2BSHVsm2SzQ2%2FDR1dCsULijYhL2CO5Ylr%2FlQKIsTRg7bq4D05ILqzuTtniv2aWxD%2FZvR5uMlyXgvWmUAtxWYyvbe4L2DCf27XvH%2F%2B%2FTjKPprAsFVwRjU4QEpxAAuS5fZ%2Bi9gAX%2FsiqKngSqpiEo%2Bq7WLFB8nCVOPQYDxwfCk2vPVAGJKwhh%2F5X583FEOzSZUe1HU3%2FuX2s4r2d1%2F8GrEyKcezs66oOF3fFPjCxxqMb%2B14TyTskfGaBWgZTKV90qEWcim9JejvVvvwYCG4vtdbeYEKpuZWz7Mqoo33ixaJ1QjDvIyW6tVq3X4zXPS3WQGaaJmSufSQoHWgUo9ROJ2I1SuMshYA9oRQxXY9teMFNpxOHWew12dHPv4RiDAg6BXKsBDoh4SI83EBbe%2FhrOJNpWcbhFFOzghgZeY8EEOZQ601yfXSLhLSM1apmSURPUr7%2BHWBUG%2BVPvoVWNcS5zg4X5J4W72ODurqyfs3C1J2eNo7YgbWs2H66f15j7Y2eiyjC%2F2fPDBjqkAZ36kFFxAoqdDclutVWwUDQjraczKSBLHxIFA6169bZAodIwVoWakjtwaPbF2ASaYaDxuPOdmgIqDF9hHnBLtYCAYOKuahp5vMGRIvWdoEuMzzmQno%2Fe9LoTjxGbB%2B3Cn9%2B1AbhnKWCss1DFY4xhaoJstIsDTVabZn3EREIYMvwRe9AUE9Z3KHiCV29Vkh3gME3A8cRsTsu9PeE4hbt5B0aH35mp&X-Amz-Signature=ddb329926446f14f7a7d6971122cec453eb3380b9cd4a4720d5b00746e2c99ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
