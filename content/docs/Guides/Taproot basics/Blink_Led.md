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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZENPJB25%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGI3ML04PJHFBo%2Fq2JaVtgN7soFdWRIb%2F%2F9toP4zX%2FNKAiBQjIjSyB92MBNAVRQDRY%2BlKAft5tfE5l9H7Knf40FI5yqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdpaGtPXcNaqzdlCKtwDCS32lnIjXv24RGmuM3exdg7TdokKMepZIaIwUg0Mk8lZnXyvbPyO4Rekct%2FxDz3BvsbIrfBlOPsls5ibXWEamgwElYbe%2FCNm9ryYPLXTUyLiwBcJeLppIE7VExWMjp1sinSwGzFUFSte4DrqoUQm5AhajKJeVeLwmGyJD%2FsdL6c8Sx4421SrDIxewAB4TlTW2BEIEv%2BJ529iqa68g6N7pf%2BZFjNDx6asThxkD4UPYVqWkACxaRXH0xnFiPueRhg0ep0QQx71agCbSgjat0Xba9CD0Ogzz14GOXG4ThJW%2FEUL5y2waTG0m5uETdDM57JpKNeDE35kAopctNJd%2BFy56kqlin8VDfq5tnDbaK8CXY0uYvNRb5kKAoQZUB4%2FcYQbNncUla%2FBWIEqM5rdoPmnMkJA9FYNpsTcGE2MW27593IQ4kwbzUfP7VwMEgZG4RisdP%2FxaS4zlogU2XSBJKCfzBZ96KHzjv4BQbwL%2FUGvH8kDvj8jzS6vZMYjM3GEJUrRuJfal45HWvKLOHdSrK8Bfd7zuiE8Gm7D%2F8vovqkqyivtki45A030qR2HKMbz7Q8R2%2BAL6xDy58l61djhWtcDSK7QkJtu4C0Z8ulwToFuND8XntZNU%2F01fyeIvREw4fH5ywY6pgFTRnTiqDI3POxvVRrwEbqfAcq%2FVVvgkrlksJgR8pn9YOgYlBTM5KOm7B%2Fnd1NhxyOVA0RpUftxq%2Bvx0WjUYSq3VCw7hrHl6V14spa9vE4yEah6qFtV7ejpbhCkZM%2Bd8dXs1zDGsLw0e2jpvURSU67xLgh5bzphqmmcI%2Bao6HnjQpROTzx6PHv%2Bu%2Fh8JefFs%2Bk51tfOGmx5acEfUML%2BxXdeN2RKXFEh&X-Amz-Signature=efb53a372794ea9ab84adfaf7d4c089f0e7c60bc093262614fb869482b7bb4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NAJ75IC%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbEh9l%2BD3q93JVgIOEZc76F0hrL5H1YGgPmiu1Lb2ZGgIhAMzehmFKQtQ9zzcWbYb03eZ5D9sRtvWHRIDDnTljRF56KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEMjz40muwvjfdJyIq3AMSLhzMu98GVkRAYO%2FoMoW1EkiVf%2BFhU905v4zjbl%2FcEJ9DLF2Ufm2KqhENMdQjmVy1QRaOjqEbj7TWJXdrX6RhoLS7mNlHJtasJ9w0XEFoRDfAsid4zXALEdP96CZCK38iRv5%2BEHTr%2FFrWn755Zl43aCRodG7UpWwjw37TVXztkUnd86CDvJJToEgZxarRwMyMdSmfz%2FpiR6nbY6uuuv9uAXNiqeGm1vbHSWlPnGnEmIc2TgGtiPeTjG9Reg3goCnSby5dHpT9BQyQC%2Fm8qhbcPYv2NwOMSrxgZaxp4RvZD9z6WCLLzZ8aya%2BVfrNOG10kjcRP%2FWk8dMH5FhooC8A6%2B8o3IRhI0TiUD8dry3FhgfYrggkK%2FY5pfW7TN7k1TEhEBTBacFpi2VWODKEFt%2F27%2B151hWiciq61bml2CoraaNEGWC8P3%2BJfCPmzwaFHmSeNjOr2Y%2BZUdxTWvbDBa6LQ%2BHekDKTbH1YusZY%2F%2BHJ8DhkJaczoN%2FaRPiGeKEFXAFU28JuZ%2FNMEUFoOrSyU5CPApKtkO%2FyPHbXsjgOhQiaPkuZg68H51V0a8Mr%2F3S5h957J5ReoPRmSIxYAU16Htfml%2BJeJqLqp37X0eQRMRa2eD976oK6spNfjm%2B0YczC58fnLBjqkARKr65qqPAp%2B09rYXeoV%2Bv7LFWCu9ZCw4tAn5YNkAp4pNSthUdVwQyJPlDVO1gKrpwmGsOYfBo9nl40q1hhH5m%2BaGomURBHc7MoVuf9dYfWZwhOaGtJmzIeml0MIvvxh25mblTMeER0Jai1tV3E5gPv1Sa2xj03bAzFEJZIvMkvG%2FSeStiVxNDwtH2x8QIv0WoXdmAp%2FfvExegOMjMAPrdy7Df9S&X-Amz-Signature=3aac4ddf2fd353d95727bbe184553e460621e7fb48d0a8007de132e8a60bf7b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
