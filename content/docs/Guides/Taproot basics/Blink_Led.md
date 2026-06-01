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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ATM5XM%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCQ7DSv8YMjlwdcYEcIjmmHJlT%2FY4sgGVtMuPK%2FUvAlwAIhAItDAt6F4J%2FSBasysxZvtBO1SapyUQmEUVZAciYSmdhyKv8DCAIQABoMNjM3NDIzMTgzODA1IgzhrE4uUeFPwhj%2Bvjwq3ANVunNLYe8AciiVBXjKUDMxYIuy0xWxPOK17jGmT7GwoLFmHLHQif8T3B7p5Qe0fnkjyYKoyUUyo3fIMXTfqnPCCIkGMHN%2BVuaxmnrdtcAwotLvuAf1BqlvQYVev20n1JwztFT4L8wSqrhjm%2FvlIhUAf6yQenAJ2%2F9vQoj4ZgH%2BQI7dsL0n2hyNdSPas8G7dufZ7zp3VbDwuHvR0D5g773aJQS2%2FZABd6PdC1nNh%2B%2B5SSyTq835%2FywvGox%2FjQuNh3c7i%2BGcZGBaMHBEYOMCLkTIu60SktjDsSHtX0KPmq10Tkv8c1hRpWluZVJJ2HuB2Vor7WT0AF2%2BdDfOY8AhUgGamZIPnkAGnMwjqSjMZB2EDofuM%2BcdD1ByBDMDcbM3dkk4Qu3VJLhkIm%2Fu4hnfMCoGAZ6PHiVlStqkO%2FOfXSJkxyaMXG4EVHPLYRO15XsJRGIjusSEL8lPbbHOdkwqnukt7baoio8qVvI3jOyXgQ5RDcQlZQ81Vm4ESqRwtHl%2FrSmSPxTQPjpQhSA0kBHgCUIXd%2BVi5A9W89xHRHwOGGaDMpOb2Gp0wqP0prdsSsotVe1Fd%2BBuKoWYXUhXXE3AXnh13vSY0XSsBAD2HAJWB9ySYtRvE3IyTcbG2xZGmzCsp%2FPQBjqkARnttKJazopdW6KNKIciGyhWRZgDxUHa9gQyAjIY1h4N%2FArokAs%2Bw1%2BAXFxpxbs0%2FysK3wnrU2imTO7P5TB73t8OzvWpdnYsBq507M1tHtZRQ0MxAUTsHcfVckQbDukxI8oepaOZcaToUx4pl1wsnNpB0VqR6r1wdCdu4LW8q%2FaTwGiKTkPM7%2B%2FpRbJku37XFyAYwgFqB86hlic%2FUu7yqsmnP4R8&X-Amz-Signature=04982d5ce177772ae1d8e0e03dd2f4d1c46a9d6088cc7084f8aab2ceda88ca97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BPP42Z%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGLMe75pRtBgYNt3QPng9B8%2FcCX71eSv4Yik3FyzEUKPAiALiFWwDFgCQvWBq0r6rnRVenBu%2FL%2FZlcGSogaFGgDpiSr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMsq%2BlMsXwCsDE0q0tKtwDunTod0jOJOwF%2FczMl2bdrmfZo2gxz8DtkJlyGwh4IeIXKFUwQ5l9ntbtOxEz7EuP4py5pN19wwhSQ5%2BZMGfPR0K1LWi1xOKt4yBlhPU%2B%2FfjCG5KjwtU5gC6o4KxMdUfdZj6Ph2TsqpjKxEKPlvE4VIXkGswdkhOI5iCDyd%2F6Q%2B5HizUC%2BFKQ8irDKpTD%2Fe%2BA72B9SARu4Sx%2BvHQDzAIlXcVeKPaMVpIiAZHcFUrWEDYMEEKy0RY%2FxJb55CWRyJxzqV1x4g4jF8vh%2BU62TWJczcFVoQuTrWqdXPSFPMHDAqYPvs6B7OKdDe2CB6npMNubvNEEB34WomHMsBToOWoCAZ2Au6cKcDIp4X6xnF4%2BDnT9DXXLzfsDVORsjWNWfyT2BemOoxHrWPPMzHhgeE%2F4ihIcsrDXtXNJXJxEOV%2BwhIGMtDVwnGbe%2Fge8BAppxqlmGt%2B0swRMh3YRDPxp5aXEiB5iGGYttRo52%2FyUdH79OIffD4JBZwJggTEocsHYKWZh%2BgFlE5h89HepRJK%2FzzMVKw7p5CSEh6v7wP5t25hjFqF2WX84dWf%2FmmQBzULf0qAf2Z7BPsUIPORnt%2BZlVdtTpFGEWtI4Q7A0gzv2XObxtiRWI5n3V3sz%2F9a%2FZNUw3aXz0AY6pgHlL6yfbM29EdSsRPcP%2Bw1XA9fOj%2FrpbfYL0vg9TCX%2FDbnjc3ePFH87jL5xMQHEHCT3xR4foosxI0fZw7bB8iOOUZcd2EUzS7k79yTz1KrX6McZ5lr3W6n%2BRgXKWyMHSeliguJpgMOguAC7XM9VmVRyboleMqSahE3%2F1kMWeDGvxURHp0nlNPHjyLONEM%2FqXFt0u5F%2B%2Fu0K4w0zRUoallqOfGx8Sl8u&X-Amz-Signature=408beb53d8c3162bbef95458937036e9bcff15b7d895386ec21b817d2735f808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
