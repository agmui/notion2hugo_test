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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GW3NYV5%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoz4t94ndO9yC%2BEmMEATi3%2BgmqBWEEyUiBYzsw3xGhpwIhAMGwTwpWWe6JmmWHnN1Ylyy4E7r8EYhsBDsfLJP%2BvI30Kv8DCB8QABoMNjM3NDIzMTgzODA1Igwus%2FOExzFWgtfK%2Fxkq3ANKrbD4jddVW%2Bi%2FzI2opnGkSSUrz7Jpkry5%2BM8dm6mDtIQAfXU4LeG08zB9GqYN1FhD%2FYTF3XDS7Qxdq2jYFqLY6Q9RRZFz1rYtmdatUSQHimMd0mxT5uNbEQHx0YmOm50Z%2B%2BqpHs5pr5ET%2BQW6WpKT%2B0gEP8tDEx6FBRlwowF%2BFnVgP09NdqZBbItXodUgyw6V0fHjlLfXIFMCN0OBlQif4MjGUOc6%2FYrkbCUmXynpfc632ypgUttT5H97TDHO%2F91jRRRVOPH%2BT%2F3CDdPj6ts8NeI1gC7KmHon6yUEW67iPhORkHYvt6QmDItc8OrFw1FA8074U1xub%2BZK%2ByFx6lHZDE9t4x6KI1lKHc7de6oT87A%2BZHG3irjUg1Xa2vwYm7Sv8owaMS16zCESEB0mF6pDfzQnin2Ygl2bXP8dnlAVbB91jFAzQXvdAhKCXzPf7oaAqGriQhy%2BEIlqtyutm6%2F9aslJw6E8MiT%2FpD4c3mrTdZwNQPmD%2BjsECSI9TaMkZ1rMFh%2Fi3tF7rOqVWzB5SF2NWeOuXAX4m3VhHDYkMgQC1eG9HV7Ke%2BMVjKU%2BVShF%2BWfrspYE5rtwFpnJqbrdecm9fb8v%2Fvnw17mkXplYr%2B0Jdxm4bV%2BNqgXTcwv3sTDtgaO%2BBjqkAQ2h5bz2hjyM5nVXamuaIGXvhh0Okfc7ivLjbb6Sr%2BmBfIDioRsX7aimOAxTvKNekIj0s1hSS5PnHcNmk722GjBgjhWB%2F0BNx4Ciax5TN3LdhwQuS1IPksrdxT02Vuv0OSFt9suxBpyAOr22M%2FXWngCXZYfpDvJmtJ7rVix7kNU77ua4iEYSzFH0BjI1R4floMzVGNFqVzfEjLT2%2BQHuaO2FVaAH&X-Amz-Signature=6c8e729eb75c083fb571871dd43869eaa3fa1e422c7ec1d40e11bec93a82fe95&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3AS3NRV%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOCQQuPjCGKuD8fkYBssCz8Hj4qLqf%2FnJ4ZoPNP88gtAiEAhP7mBCyVJQOkkTneMvoMnLhpBc7YaENVAVRdXSvxgXkq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDOHV%2FGFFpCqy1FZxMCrcA296FC63rtYEshj42OlBh66wlOzqdUF2edUFcfnnRH0lqjLlyvneZ3ZeafQ4lHW6UzVo0zw8rGONQDoxNXRBcqnvvM8xRL%2FoVcZQbRRJPv3ApSHJwbwm4QdX5ArqDrcln2bKysAeIBAcn6HGlgdVJZjMAVvwHMmD0zQWoJ2vcZpuZj6%2Bm0bDetyK1kloWYj52T5WLkTJV6C5vDano%2FE%2BhVAEue4q8w8YWvgrcqyBkve35RgGp8N39IK%2BoAOwKThjvxFUUy5brZxE1b92wh17u2odzeSxWepu7Qq7T2nW6x3B2tPL%2Bmyo4AHtwUi42G6UVya3OCC0eVdNbnA1cB9vXAjgrb5DvHBT2kPSa6%2B%2FO4LSpWoXILT0QKCWGLomPkR1eDB%2BbxXwRax%2FmuIrVlSoD%2FXJ70W%2F9OChFB9XgzJsDzujFROmuckqhSVAcUtVUb2FJsB5uVkI3hf2BTrHNbbFT%2BH13oQCtV5F87SOzrnaMg8OToYwPy%2BXieb7VhIWhnt6SJ1SHHlzAT5Nscav1lEteusBOpJMwpMZ9MUEH%2FdaE5YWmSqstxxBHuuOS2omK8hX9mRGixCXog7O2VPzvvBxnQ5Sp%2FdGlIz5Z8xINKmO2loGe4Ls1ltn75AidL%2BZMMmBo74GOqUBXfrQitCxUQTlRPfpfrxJK41MO%2B0zGFdF6Us2BpEYs2Gy1N3DTz2EWcAb8osXKxTEz7Od63SCq6zUlJWt8VFcFs6yphPd2kYCbUCMh9c%2Fw1SHKjidTyx86Q%2Fl072T%2FXKlxQirmPdqhNIhhTtMMIWYdSQ18PcQNE0MzIla7v7B9eBIYYZ0Gtfmu1V9BHijb049Z959SiJGMv%2B3xzz7FG3ZC1%2BwHjWd&X-Amz-Signature=1baf61ac6aee257a49c5a46baffc54b46bc1f35390836a78f299907f0db64d81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
