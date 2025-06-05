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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2UADY3F%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQDPILatrQC3Czxv5znqMBds4THiBJLc7CS5ZxDONob6agIgKXcVtaR7%2F31dSsuYU9drzG6MNtHYh4cW3waa6lRdvKUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAYkNOQ372JbOpctXyrcA%2F2wT2d9yFlShCH5HOCaDEMEicU5Jx0ANMZhwQHDkBDJBzeP4XKyg2O4IxxkjEzJUEr%2BTGssxSCD7DOMzyIwIFaAfrQg3Tu94utC2rVIXGsIxtDfHUlnUAhpbO%2FX4xKbdLOKUVbqMB1LTF0n5CMKswBdGs%2BNMByc1c5NLOCE0hNoI2%2FMiEhQlizEBwP1guNnq0kvd9vJA36BmxI85wh27RN2CBfJbQaZwuN%2BL5rQZYF64tuk7ckEiZTxhnKzSbPfeFzK2l1uV77R%2FHNhbAeCxrEJzY6wUEfA6lXbWDkjyvHOrTxl%2Bn1Bs799lETNUzqJ5iMZFlsrTsiNC3G8lAUi2mD%2BoEdHAJmy4U0N7yGFnuYdIC%2BIbZsvl2%2BdqvcrYJkgjg5Y0B7piPnduPmLffwT%2B%2FV6ZIZuyi1ZoNGNVthRNIEGFGD1SokNKmso9aDjzQfqfyZF6E2JANcWRKJ1IKlaZBauzXmgY09cHMpSSJSE8ApmgcwlvQbWubLRGzOtGP%2BOIbI69MyW9vRO9t3lsKUQHcwptdF2tPzaxpic3JUfbPIxKrJ0FkCp8a98jMwZV8zRIVLSs8O27iXinfu2uCH72l5jRK4b1pRRy0CZ8GxJdFqLGLFzgYDen8sF8rMyMOuMhsIGOqUBWvVIExiXfQipOkIXs2ZoJ404KBz8GkFXKUe8Gxx8nrPR%2FdwOlDQP3J5gK366%2B6gRt1VoTA0GRRIKUcsBKIhV%2FM3%2Bk9rBW8CFFwlY9yHxJfB7tNo9C8XIwlowpKJIjYcxNdNqTJSEIYhQq6vK4TQgHh7fErGAYWYUflF5j%2FQ5JuAseyGYWM3c6tM%2FyL%2BK8i0dMFRKe5BWST7z1bXJao%2B4gTvO1Gb7&X-Amz-Signature=1508b921c993a348832d110a4a78ea6040295312d7f4782459a5057b8a85ad07&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQMEU7H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQD%2F7c%2FnF4HmXgYYiaBj%2BORpMHXJ2vKUj%2BebIvfw%2BIw%2BsAIhAMeEc4IXERhSbXtCkGLKjRY5rDxOFuO3rxD4481nR7tQKv8DCEUQABoMNjM3NDIzMTgzODA1IgxRaBy%2FkjlrevVOxuAq3AP0PqkyseKcpScHw2yh5BLwh2ywTIqM4SSV%2BTMpMeYKUlkhipXbiVhRe7uJKrIbgPJwA9qCi804xVW0A3ddwluCkyyC4pHJbsiHn3h8IIEuqg5B2aWXYJbZGzQkOopc8WLllTRwjoJYM0%2BHUhk8csRo7PCru1F3bA6AERTKg80Z4trR19cL9m0ApSjxG2Wh2Kv34fNQ46hsJLtwLHqiHCJtd7nCADoUwSM1FZdyqvZ8Lsb1oTD%2BWoPKE11Tb7PW54VColKh2EJkhIaR%2BxgFBRULPmcdlK5ZDugse5vsmmoADVCRE2myPSJyo0Lhy%2BcCHyutHUPoWtjY0ncdMbKvT9nyfriTEGerS2OxZ7s2qJaZCdxt5gppwxEdrZnTsuDGK0ImFPf4kj0dMNSuz%2BVUD%2Bawy5eoFbAmQ3htUp%2BS%2FcAZiWmhBOWtK9EcEZ8d8Vbwjhr4FFTuELeLzmF8CwUFvuFcR1goZSHcFGVBLE8OD3TnEXDXBgNI5mHwEss0VNEgQ8hSYF8eVThLr3T1rwgPKTZ2N6DR1lEx6JJ3E3HV9rZQHmhKlPrU3OuFxoFIG1F1u9UF1LcXH7yEjLN7VyfFKNpBu1eROOFEidkTsc6rvwYbQtah3nbq0OpOeHox8jDNjIbCBjqkAWS3OB1EcTlXln0s3PAvD1XNbm9uAFO8KT%2FD4eSnX9pct8ao%2FLTNTQJmSkAHmE94VATrOtBAJqVMxuFZK4uQbZAvUNX0ZvPsCtL%2B77gdijtkVR%2B3a17ojcbSg%2BuEAhbEZYpJORiFR%2F2xbRLi9tKTrGm6FL8caejtoCSf2jkPu%2Fwr4ObTkaObtjPJGureun25D02HW76Zfz6L%2BzQOjyCWUR6ujutw&X-Amz-Signature=1be052389641776484ec44bb7fe7609a665b5f7b59ecf568e976c75c33643e34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
