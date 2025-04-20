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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UJRRRD%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDOcIls7e4HrFiDhGMXeLG1UgnDcLJP0ZQK8tQ3iLYVzQIgMiq0SayHGNuoSIbX16C%2FpTyHAVIeYWlVfGzTqNWVlw8qiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWVUmzDN4luxkvMQyrcA8EMbaKed7V9Fhto%2Fqn4Dh%2B%2FAJqrKAhvhp7NdSs1Sybg%2FeQ7Z7astP6RbQ6l2YMjy47qrut1mF0p4Toulc8kJ7MSkeQ98xJ4rOhBWNQQ64%2FGTqG5dP1Y8UCj1umgpXnj2FyTnil6zpIkiTetptcOo6OMTrDoP9ZCCxobl6B%2BpUkoTraBYbmO67OIgNFBuvfaklFVWkEJrN6paUg2jyXrHJMsGr9pgVglieO%2BKrPwr9ECfBda00xr07V%2BTWvDIeDBFzFwatsHOTrQVvv%2F1dZ3HaMCV1GUM0DUzd3P5KeBxg7m43FtD%2FtsbiTkfq%2BEC38kW54KcqMeszG6v3cTJc1LEtR3sJwW6cztYxkpK7NEJPfmYzmJugZdzGFCVuf6VBkEGoiOp7Z5%2FcLakz3cLUEH2RDoJyYonUcCaWWokEzOAfiOvAUKjPO%2FwdkqMmX76FSiH56HC0L6RQ8%2FfD95fCIrO866lcCbAu8blSaEFhDGedETjhwQSJfrxfjvazi5GQ52szt3FUdS4Pw%2BZbncy95TkGs1wDKhqDrwMk5GMTYfVEgwFo42XBYpIRMhLQgJXYE0BGO8JMZUm%2FG1OOWtIW9hbsS7%2B4rQUlcbLoi2sMxIwmmQ50%2Fhg0hj6A4VZhM5MN%2FllMAGOqUBQfcvW%2B330vOTWgEiuc6SNZljY5sm6sL0bTKLT%2F93HWxqHuW0rbFrSCcQ1RGlaV9F1ABzpOTO2gMWz9dSQBENwJXy7eZBlJYey9fnmGLezHIUrAz3dr%2BP24TEj%2BhVcp96YcrIix40xnT2TY6DAosFb0ULiRB67ARfCjrmV665mVVwny6skKZNNZdBOK6huZAtl%2FEngrAqrf7%2BIYcmocqDxdqZQztP&X-Amz-Signature=10848c81dad313fa899d761c38a653b1f3ce9ed40f47ab35c644b506ac2af677&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZT4WM2B%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T180938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDn5EoxqzdoZByZQZTjAOpEJ6Awyk7wh0eofqGRYDXyOwIhAI7KUttQkhm4FWnCfYcObsYR9swDX4yHdbCJ%2FEK80P18KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhC6WngcBBifKUp48q3AOJvzQYmdqYprtXY4vjS2OQP1KKeEpbFKnXpAe8vsFvNnlpE4hPQ1eJBdGbgOQ64GYbRkXfSwefeOI0OtDlcAoRMTtvfICkFBF%2FDXq0eGpYOKVb%2Faj9XFwuZBBr0Oh2SePju5Wbo6dl93882xHtGi0SzZBhl2tJFGwDwUfBGYtW3bIZAUFNZnOJ0REB2XZ57jljyBuE1fIvBqYr2irmKBnMRRWSNA7kRhlDARMoqeuUHhfOmnPER60PYfe3Ddd4uroduDfSeWsAZc0jzQdMaXeISP2QEMGjy6qL9d2NJwF%2FXajfYXfXzg1tlg1Cib5f9IQETEV3qC5YuSbveYpwN7kyNVXSEK5Ydu2s7m%2FYiZEP9t9daib9G%2F9uJLlEnR60m%2FwB8cyUh%2FVJ5HkxyCCsd78H%2F13g4102Rittmx8y1DV6%2FZp6jMyFX9uFnhGwkiDjMGUNnu2%2FGe7SZbdmvRS5hBD3aHaUKygtupX4BTqGrJqXBXz55w%2FxJ%2BMJgjewKvg0Ic309xGgO1z%2Bye7RmF0WZdmzllfQDiXWjMQpJ7JTrUyB42uDaEZA2096NwjyzgwhLWV5WyPAMPjUB8G7OriFsnQtMOM%2B5ZMc8Hy5iNEph1cZwdbzV%2BfSPH3bRY8PHTDF0pTABjqkATT684nBUpB0d309QL2gFTnsgv4aAaJL0hxklvOb4Ovt%2B96o0FJYQBWtSFnjaAFrwN%2FGAFbN5g3A6o5VVevDO1As7jggeCSkS7dTydAINd1s6LKsgNhB9baS7YtMQr3VDN880Uij50cZJ5BnRDss0%2BpwWR9hK1yRBR%2Fe3f9F%2FPoNE%2B71T41gzUyaVHkWIgkotE9HnofVX%2BDV%2FBdN2H6Y2kS%2Bj4Hk&X-Amz-Signature=369814c728477bc88d79cf478156125f941aafe1e3054327fe4f85911351cb6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
