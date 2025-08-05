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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJFWA2BX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCA0ltlaihXabfBuvvHGuUDw3gjPbgkozXU6DXUz3uzoQIhAOXdxJyqLOczgMjAEAlOBAAvIgM3Ic4r5H%2Ff%2Bh2dpu6XKv8DCGEQABoMNjM3NDIzMTgzODA1IgxQ9istmcxIYqyRE8Iq3ANdiQF1IxhohhTwnuRtmZmhU3WECcNxjQfSc5S7tpyEkT72gKA4b2M7cUNp24Di1xl768QJJwnIOCSHdzXYZXNFJ76igUXsNUGC9acEyCTtg2dlMwp25KLAKfnmf16Ly4PYnqX5bRGfP1SxJvRC0xld41h2mIr6L8zGfSwMe3n0C%2B8NW2XyUQfIkajY72cLg8RvWEv%2BBoI5rU1o76S8xzR1EE37KS3aNz04g9547Q1pXf2S0C8ubOHxDaCpnWNqBV4VY%2B1eZRRuBREnJFwe4L9Fw1IhPYZMzY80IBjpxlThLB8kvc3dO7cCwBYPth4cVLeNAM5kGmmajjUiIDpVUwIZkmz9g1QJVsugvF6Ij%2BDxF18eW4AfxNSt6pESgxvl%2BeAAMgelXDHXKnJti%2BhNgcFqXjw52M0%2FsqbracaWJ71rI%2Fp3AzgnpF2HYxcz0nksBLRuF%2FycirL18vxsGEqLK7b%2FKGuk0KyFnkMpdSwobsfCIYdlSK8T1MdndD01ui0R1wSrEWETR2ig8BTXrDYZh4BfkTO6f6DTPE3IEZXQnhN2T9XKgf1HX%2BY%2FZs9ziKlueBSbCcbWy5Ne2B6IdV1vD2IG%2Fz%2BGmWFp%2B8zWBHHmoDgVj8Ef419oKG8s9VdzijDJzMjEBjqkAfGnD32rIUL58KWslEZEFAWGZa7xBys8ao3ml4ajkG50K%2Bdpk0vpGGZVagb%2BArNAUM8RIs4dqPdAeDE4zrS0UyhiVjvdfQB%2FJZHT%2F9prOJYMom9GgYJ0P1IFldR2EyC6Ajb2T1wilJ5Rh2rHWs9987bEZTmT5Puq%2FUI%2Buagw%2FZdPWLttcIye9TlBXm9A5%2Bw48GBAZNhy0JitTYArW9zvhp8Hi3wV&X-Amz-Signature=39a780f593e254d178c9ecf6f47f0fd5353a844706a3117d2a5c2b33e5472707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4MTYWU3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC0YLJPJ6TpCQus7XJEp%2B3FJVuiSiojh%2BueiOWM43v%2FQgIhALPHvOo%2BbYKXcZcuke%2BhPGqh8vd%2FugdqjwdY7wRPyd9EKv8DCGEQABoMNjM3NDIzMTgzODA1IgzRv8QIE95q0eOZhlUq3AMMPSPdTYkGWYH9pNpbNmoiptDp%2BO7AVSfdwk4s4aMSbLWuaUHg7zIvvy4PzDxuAk3hohlUY%2FBpXloX0w50hcTfSBP4782rfZTCaKl95aKxGVdIuXEWL%2B2IQ1La8N3NpetBPxQjLaLFhmRW3ShE7HUvAUQnPHzYYPMuY8JgoKNwL%2BZ0t6Q0N%2Bz8V4teVuqP%2FSmEWnMBxZjIowJhTmluF04HhL3jYzXZC%2B4hwYVcKe4NuM%2Bu7F8El2l1qRodAh7muTIepNj%2BDeyKnGx26ABNDrXtKt8JLrzfw8BpliG8RYrvZo3tDjcAuhlWIS6uBpXTy2L6YhUbA5IJ2jghO4N3bCjk5GldtmwsN3Il9RZ%2FBgvdC5xl3MsO6rJX4XHNJ1USrd%2Fk631L5KyW1o2ecNbJkvKZMeRUfYVPtvDllu6B%2B5kP9evGJhtFGkc77nX96czMw2pA112qTTlsqytpH%2Fv9SWBIjBEkQGr5ttpEoCsEBu%2BQ0KuTgCZBnxRk3LpV0UIxZL0AFNs7B0Fhw9KxbUjluA70SIXMBu1x6QV9lDPsbcuK999raymxgnvxq8uvqT16DNcFLEM3iCS2a8tPCeMUDLJJOVKaB0e4L3CtzoWHpSTvzkaZKP4DdeORLgMV3jCrzMjEBjqkASeXySdYjhTjJ5vTqTYTgKx8NKtKDbtnYAvDO2UoaILWmWyDXssVU887DNEgtk8PxqBBmA6d0YB5vwpEUKh5ZQPwuPVIl8hIFUA7NcFjBCMpHT0CsS14bbp4jiXJm5OkcIDrg5iQmlHn92axUHEzCeIvNZegbneSWUwvpGs7LGuCsi5tbkwWGgSb4SNOq8DKaMjHPMWoLgKGQTKIZCOiGLY9DroB&X-Amz-Signature=69fd149b3c999858f33f490bb8d3a25ce80ce0d34141f735b66e4b1ebae00f41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
