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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635TKMMWH%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQDwJS9zMXh%2FSzGYqWMxgQ1%2FDrtuUl82H3IK857R6E2nSQIhAI5I4bM4KqF43Y9JOShuS0owx3zUQMiScm6ZXOEU0u8jKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPI0gWcvgzCWRl45Iq3AOp449zAR7d0KzEUQNyzpryndb2nuipCcMlxOF0L24iYMUeRqhjXYZVInM6VksK0YsuPYM1ixklxvbgZtL4ievfr68BRLS3MnPwqUyMHREqHCiSmOQAj50E%2Bykhsf6jBTTYw7tsXdWrrkqGp64miY295GxakfEy2hd2YQIqPEOjOJS4871fTaIVPbB1c32sohnFMe3Zi%2FvDzrZvVD3Fb7yYoUyCszrRqBh89M6WtAFvlJfiRXx0KbdqYuvhGQ67McdhCR6wNhs6MIVeSjXMA0RbIu10tlxTbi%2Ffkda9vJPbweuiS5z4352LNLvwvBWjbLJWgOnLhJ6Ef5LnjOICTKka%2FOfXDVD5fDcLvF4sT9m0dUwdfen37xuHqmDojOgFHwiXkzF9Tcl6CfDDHLiWCcK2Ig%2FfdmNHO%2BaQLA4wlbpbqXbeB0oGsf%2Fiv6JbZTmxPU5zty8o4Bh8N8xr3FPV%2BT3A75NDcYVzgR5%2BaCoO4XPsU%2FfwPHVQNx4XLdHv0oxggGMAHJth7ZzjhK%2B6iSC8ko1CV5MtUBRR3j%2FqycaiQb2b4i8YY%2F0PaSsFpGgf9iQ3gDtZ0nRdYCJxMJel7qtgvqr%2Bjjmq25wAs%2F4X8wjl04UZxJ4DkM%2FXLV7kQzy2FDCvsuC%2FBjqkATV1F3zoG0uFelxwXHdvlAerOlod7BAYAoo5YTfeSGZmk3fbodVV7PN6%2FbFjtHFHSVSetYsnJiAIek0akFm4CN4NjxZ2usoits00ceiy7On%2BvviaTm%2BB5SdVlA4%2F61mqbX%2FNou3Xu0IMZ1hQpv2EhSIzf53HWVeSrks2J6v8DaJ0tAEFklD4AOTLRsx8p%2FGcMBMrH1uUlQqV%2F4I9qIDH579Q9Zkl&X-Amz-Signature=47c786127b337b68675d0e7d319549c6295b61929ddbc72a3e759c3f12833bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN64VL7S%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQC6wtjc%2FYmH3gDfiE8zfuk4TKjufR43hBSRgEigK%2FV3tAIgbjyENM9jta8IcBQ4WC1it%2Bq8HBpQK1vC5Z2x5Wu5vlkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK5oUsnGyUQWNQJdbyrcA7vODyfCxNUIxmD1%2BNwGbYHphQSXJ0t3praUPiBNN38XlAz0ZGEO%2B58QqrUKohvwlDy%2B9531OTU%2BUOF%2FiK2Okz6HkyVha9kg1cKN706gJrvNnLhj%2B%2BTVeSj5IE1CvAwm8bqIRy%2B2v7kfjRY9n1NZbYl%2F1CegOfr9Sjmz6a8uemdG%2FVumMX%2BJ1IpVISX53SqQYNEkCfHSuXAQ3KbjFftbJ7vpTOssBNf8jCpAO6NKvEtJMQDETUGmzd2ULRSzsqSTmrc8V8fiE0KtHfgQYf7EouTGBmtkQz6z1vo5izZKV8tXtolVmdjt%2Fg4IdimwuyePiJJBqJt0JyhwKGfVaGg8GK9DugAR4RMHs%2FXT3VYsh%2BoHzr%2FPFNPU1bCafajJ7Yz6B7RPZ35GD%2BsppXKBL%2Fk6O%2BSl2YuwUpPCxjbwCBf%2FcMCcMqZJ6k05gcYKXfH7Tr7PVRQo0J1N0zdxD0zYEhMvyCkJ%2BERKxmISvvZNE1PsmztUGrvG%2FGiPrqTVegWSzu6Q6UoAQ30BNrCh7j7%2B1K9MIj46t9utwGslvUE7x%2BI%2FWMJAC3bL53kOsadGI2ell8XFoYZuXtpUSQBZlFUWfkg%2FnD8fJi0MIOqVquwBzWc607HKXknNXnimWSCev%2Fd6MMCx4L8GOqUBoPS%2FgvgFbH9c6L9Yzm2DXAIx2pXJA1VG0lzJFySupYQYeRCzMAcv4nbMQ0b604VL76J%2FgJZdB2JcSzSgUMMhKCKYTWJS3DYI2VScN9MGLs6jws4We9tbFIpWWwMCHsKwteX6C8HP1aTfGf9BuLUDIHdGN3GedFgRt2X5T6rZSzfGIaVPj13ufDxgnEVyakHihugf4p3AU%2FAy59XnBK8QEKx9lsMt&X-Amz-Signature=d0041dff558e78c07007f6fe148ffc92a833af0158526b28bdb89c17b79274eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
