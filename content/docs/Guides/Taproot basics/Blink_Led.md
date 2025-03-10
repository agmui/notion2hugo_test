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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WYJV3A%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCuYy6L1Z1FBpFI1FsbxadbWk3BYMb65fv7OF8s08%2BdqQIgJkcbQrlbch7LPXkt%2Fc9nGqEBMfsbihxP9JLTiZP4EsMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuYrmSJ3Xy0ydLj8SrcA43hgKgUxhrw5vmMPbZH2paonPUnaD%2BOQ1sTvNEoC5QGdjDNZxh00%2B4oZD72cFtZg51USHhk2abnPzASkye2OKAKQK9q5hMjc3pHcRT6isdfNv3698weSIbrb5gf3YOBZ05S0E88PFC%2Fj7GeCE50PvckKe8GwfjZViubu1w%2BtxHqEyA6LfjWnR4YTZcWRvzIQUGzMEPtXtdX8uOggnXvKY%2BFF%2BKN4RLeaLyXxfwy1EL2%2FJo5z1Z7QOfedg%2BV5IUC03S3oA6LvU6%2B2uWEDp8FFrts1AArV3AEMF6v54t1gGIvOJAL%2FL%2FGJTue%2BWBiW0XyugeICSKyLYPEwisz%2FLe4%2Fn1BnX4xwoMOQqOSmvwQqOfKW8JlUlZrYeHcsQOJgKfE5NS6cP6WmU2CN1hGJMVtNiKrgmaHxjH7h7LJie4pysJ8v29sfTGWJmsrwkizyUEmiRRtZVVrBeMY%2FvVoOj%2B8wPfDwtDVGWJ0IsO2uI4Ax%2FWxjYFSsORV4u5BniIZ4MkRlDgAZSPo5b9j2NNBg3XY3N52%2BYMPvtfTDw%2BYdPqPflZDlaR8CfePQtIjh30dbAQrt5k86sqcMaKImk2DWihrMIRy4lTDX%2FM0DG%2BHABDgn0pIYFwLt3xtTcv8FrTxMKjLvL4GOqUBua3dpUluoXBv6VlR3TBeUJY5hy3OdnEnCKurp%2FuIDqj9IQXj0zeqtUcn%2FhJVQRze%2BmWG91c1o8HJDuQmjZ%2FGEFxi30OQukINL1sXaH%2FBEvGeb2hxiJUXLgoJXM%2BMiKPHuNjyHK2zJ4FWN6ZXBajp%2BylKbR4mYHfIn%2FfwmGhuX27xgQwrl9BIQ4D7rc0OoQrjMwkoT5Kx1%2FYNwW5Vu0%2BmxSNbNoeR&X-Amz-Signature=aca549bda1dffb4828d502f2de7338b5c71ff86147b037341f40847383217f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSD3S5WU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T180948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCU9Q2D4pFjwFoX5ww4I1i8x%2FnZ23wohLLs1rBbt9ns8gIhALcMKOCfyjL7shRluOAQiyWx493zv7rtqBDRiyvRjoLwKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyhc5KVhnPq00gJFaYq3AOFMx2xP9ywAb3NtDACFm074HydtIamRVzdQtWsZttZ7%2FswO9K%2Bxog8gi5wd016FmRGM1XB5bWxP5u4hzHrNNzQeAAlK9%2Fo54zHtf6%2BAwFD3KzpN35uaYOd3pzMj6QzUlX7wvumBW4E4VWylq3zt8E%2FJxpdpL%2BP4whhFIi2kHPjevnaIBX0zRnPGZJOaSR8x5kdua9oK0Bu1B7%2FEhS0igAKBKXuZFAFA2xCW1jSL%2Fse0GMki5OwDkN3gfBUbf%2BB8efzCOkt4YNArWhA0znnyaN8hS2y%2B4H0MJMNpPvdWBlLswsJeXYUzFZAejbJnj9KIcPRkRMyAFjkpXa%2BwrA%2FaaVXgSliGRRUXL80XQ8%2FVbanFC9eagfEbH%2FlXa2yy7fM%2BcShixWABCz9Ys9sznb8P%2BSK0FGDxk3hak5tOJk8IcJD8AT9OHzw7s9jK66mcQXZUb3sWJ1JRU3jEh5elwdK4h05HB1y%2B5w%2BBL4KBA%2BQauz0ZhLfwm2pAuvzT2pXuhKgMrrk2zgtGLTFdk0jZztJv6lyXNe7uBfCOWfNu7xnMf%2B4SgnfBUWOdT4w7KVIYQ1VJSqYHujPuSpPX4xs6MilRTqgBx45IVBC5z4CH0HO2%2FOK2PsOj6%2F4QiDjdl8WgzCVy7y%2BBjqkAT6lRf2G6d4s6VLjMC1vQWARy3Dsl1jep8Ad90DnQ6sAX5r1bNBuXbDFoxW2BZeCnQpJOAd6Brsqwy3%2ByHVkVQLc3MwyNZcechsbKBX7aD%2FJpPSg55QzWKULAhWs2zpHZRcheTYInDqxwT1rWu7hc0wMhYkxsuJdQHNWDWAwGtMyR%2BsVzg%2B3H%2Famr%2BJLNCZDOqPSlhQD8fzBYj8q%2BbvmbPqdLVuY&X-Amz-Signature=492e6d12ee5f8778e1cc3d9d2c583c0703339ed7bad0c4494e22470a2bf63c52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
