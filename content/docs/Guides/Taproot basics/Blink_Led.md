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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466246BRCEN%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0Qhv20vikq9%2BAhu9LQqBCCHbFJXJTpZSXF%2FmgDi5WtwIhALeHY4wz5hWmBSvjqEUAm2CtqxPIIZCx9poYBQtRqqQBKv8DCC0QABoMNjM3NDIzMTgzODA1IgxSWmh5cUYatPRVv4cq3AOka23ZZT8S3emxohYcq1CDp94lEXjXnQgYXMyE%2BKt9Q9lQQQxUvvCFkSps%2BuazvwQzYTwv7piUlSxXUdsbZYemm%2FTEyX2zvlKCVrwCqPffNCIw34z0i7ulCw5fNPfNfuNK3oHVyJEF8rYjZvbi%2FfTlR7Wyzjc3RzHQ%2FkGOI5lL5Fi%2FlyFuomDdJD90O5L2SOJtsZUJE1FDLNzHamcujJ0ewwjTcH5xjzx8HwEpoxdrnBey8GuZV%2BwafGkiwgBGqy3e6uhhemgxgIdvNzQjzUNQOPOLqv1O8oddILTIGODFYSCRnE4M%2BeeqRohDTwvBVpRz861HRrz9BGzZQmodDcpqsnjrf%2FjNoQYbtE6npWjrOabBElW6%2Fe2pvHifra2wXeJvs%2FwhIcARhKHLyNzWPM2gLfI6Ajfow2tYaOesXPW35eRAg8AG%2F6P9Dcmdhq%2FjKAO2e0BvG3DuG%2BA9mcY2s8YKVQAF1GthYKdOXGMxn87383D%2BYWcYypWVrCEVSZzhVC2r0tFXssAxuS7hIaOL982vyA6CSgUZ3J7egXI8aD5JPWiKUxlt3D%2F62ExRz6kVzGDSNRcIzdk%2FjOmSHfw6a7XxBlhqlMNv310SyflPDyogKoE122R8Xmtrpo77NzDTy%2BLABjqkAerJe9vM1IN1Tk5W0h30idsAppj7D0%2FYtRzVzAbUgAVo0HfdrmF3Cz0rHRL7yGQ32AISa66TrC7knO0Uq1N2yTAaViCfIMeNIdQ2%2B3XAs5Loh1PJ%2Bc8bGl2OqxvkR0kHDcr41pt8PCisG2paHbTx5BZmZnaf8sAO4ikFbfcOED6TuStnGdsMNnrb1pY6HNuo0FnnkceXgsNR%2FyrtkPx2kpYzdWCb&X-Amz-Signature=c3099690e0a0daa07dd138ee09c5636fd62a1de507ab2af33126b2944da27187&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVYR5JEY%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtioIVOUn8W3THKblY3KIFnUEr82j%2Bca2VF77kBol7ggIhAKCrbmSG4RKj9dKUPJ15r1fiGAlYa1OQIkuXHc8njfdiKv8DCC0QABoMNjM3NDIzMTgzODA1Igz%2F%2BeNQOdIhyAZNYoMq3AOHVmmfMaIpV1L88h1Ss0M1iEuy6z%2F%2Bd2rrDZ9oONz%2BCWBtvsOliJp7qZ7WgBs2nIdV0PI3ZIX2hGXHCzSHdPFzJkJG%2F5vnTmMBB5%2BfdOeKwKL6Dci203jBbUvvs8SnK96yphecDqwcskTq%2FnB1pzIwKlcUARlQex%2B98K8vt0KTL8PGcrnwXU%2BYdfs69T6fbHDVLNft%2BIylsH%2FKHissJ7vXwho29Q6vKaA9aCJrl6aL2A0LFvJ7vCu8KV6UsuZNzYuF9%2BatuSY2d9uypFINCbww1x9lBObH5wINLtn8RyFbepDX3VAWouUY63ZiVger8pcJzFm4sQ6C1zwUlicYPdHi9g6Zco5uv%2Fi%2F%2BjAN%2FvxNDtweBb7Eqs9QsABp1J8a9L7SRod1YYNl1zTef4tg1wdy10fS0oGADtaSFf%2BXtMJlSeeWRuTyrEa1Onmdlb%2FHfkRvWcuiSwqGxhJtvmQAEOWMcaIDNw3E9tkzjb5gMoDWZvhR7wokR%2Bi78NhWeE%2FO%2B2SviPhC%2BVCWd0pvimVBjDv5OkSG9%2FCEympNAk5zTisDl9m37vxscdm1NCuG012wuYcu3vqpB%2FhVVAbvhnV8mjt6WdHrxJtOPPAqTzshX0VVOyXEN3P8sIav5NQwADDB0uLABjqkAZaRQPc6odFfPELJMJJWy3aHHYro%2BgRQR9A7uNsLivyw79KWqoVZFFlAneFvF9nr7%2FYsnV%2BkMVbvuC%2B9dkSBa%2FamlzCjbK2kd9hl44u9K7RsWbPYtEXEv2rabTgCqnVXkTRjPqPDQjrwolRVNtcBB81%2FeSkWy71s%2BFQNdjdIw8sn3o5fV9JVvM6uMFMFbrNGfo9PZEE9C4GFBgeG15x8QobbzNe6&X-Amz-Signature=15a459ffba0e77277e089944cd077c078913a0d2a0f96743ac07fcf04875bb09&X-Amz-SignedHeaders=host&x-id=GetObject)

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
