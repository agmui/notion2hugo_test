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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEVOSFC7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIHj27rKjBIKM5LfvfpDePqJlnsP6XASvspeXG8JRghGWAiA%2BjCKn4gTQnLcG%2BM%2BWJH50UoQbqISx1uBeYO8ZSzMhWSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLkgLzQ99dhHSxjB8KtwDcUnT4hzFviSeYW%2FeQbTtwpW5l6kZbVNh0%2FWuThOjm4GxMegNzzNz19Al23gHA95o20%2BemgyVsRF0RmViUvt9CBYQJTH51974RW9jlRTVgv96EO8EzyGzrlL5qND4KoF015V0I7UoIuXN6f52RvihkNiD8Yuu%2B9CxFlI%2FnOjxqM4Vi5FQ0W5YdaNZGMWi%2FDXl91gVAHbSzN7jpVFpUMIbflOcmMRaOmZZKiTTWK8exA3%2BjO3rc7FEd0oPd4eGB3uqr05Fdf08tdnSR5Ve%2Bj68sBAi%2FV4eOK3a8bUVmDHs4Qrqut43m6DKMKMUBb3Rzh6Nq%2Bga9ryF4mXaRPrvPbl7qShLXWy7nwSicXRtc3b7TYRLICrg1srPma%2B59BOg1XrzEO2HfSWf9pQbZORfg6m8ZNTXg8KvepRKlQ45vxaONXp4hYQrNBCIN1D69ymAWZejkuEi7aKPgYZe82dwzgyIWZFRO5Gxguyy6lKdti2qNI9yTr5kFOu1TQaCqFIXCGvCVXD8uBHahWt7DWWDnRljqlH7wFK5Gyap9FEZfNCSsI845MBWBY52YVUNuBzOJvvd2mIxvcgal%2Fg3l6JzgnYIoEMYdITHgnTGSk9LmAnC8SZONQ9aEtOtAfWCvxIwh%2Bz5vgY6pgGovG5rLT8yhF5tUjIjrFIAevwg2FTx1dONa%2BufYBd11TmMaeAJKyTH1Dshv%2By3oCsXP9wrT4xKPZj7EEMFUlM97eGvtZn7xqqdgFNn4l16UsRpTS48sZ6AaVAqAsDKVkDsFSm7mdfgR2rXs8M5egyJfZmzp%2F3r7QjZRsZ9sAEGUBzpyi76TK4mx%2BFD1pO9kTOPi5guR1cIPLCpoAwdYqx1sia2S0Zx&X-Amz-Signature=5c09fa6c0228b491659bac1c44fda45cf6fe8d34aa246badb774a678267ff485&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z74NCOOU%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T100707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDZtLKFNMVCufPNpQNFcvlnRqoGVnriKdrhRi4VhD4Z7wIhAJ1ePJYxJIAiRyXrRzZtOEYNWPtUP5yO2QqKzriTfoJeKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzxFqNKgKk3fFRHLtUq3AO%2FRGnr3OCU%2BdcqGJYSYndpJ2qQYlXsytYpGUQzWo8Xp5TeicPd04zEFRAK1qmyhwwnz%2B0JC6vaHYZXFAUc78qxU5HVMIWiiz3o3g%2FnIR7Dyhrh78ghySzLH87brZQ5FvkD6rLL4MymWd%2Fq13BomT3QmDRgCzamsmhSHJeg7NZDq%2FbMv96ImCFezbgaV0E0ihuqd6WQl5P7%2BZnCRQJoiUS6Ag%2F9kV2k0SW0snnQJWStUSIEBUeIpmCpe1Ns7b60xoP0BRCbP21qtU1rZh81KYd5fEbllaiX%2BsuS9ZGXBPeri7pMVxk9TquTl4WayhhUmyMyUZ%2FFNw%2FmhDVE56XVB45LYFysTRxSMQU7iejZLc7kXXV4CGQSVTnNviWsV38IKasRKU6iPP7jzLVvVUgkrhkDlgv%2FmhLwbzqdfunFon3uvJbadXR7AUf1dYfIgGv01Dx%2Fhx9ZHWtZmnqNDyRHxoGkyHPlinvxY5%2FuNiKXdB1awiU0rfJ4L%2F6P1oEVBFCdJyUrYpiWjYhm%2BEtjw1s1DHyOD%2BlXnQfCH7bPGgSUks3XfrImHOflrhsVzfCjUCM3Ul0HZprdjlCRR47XDcoIk4jXnmCL%2Fz42D9TPLU3vGcIaaBOlDvEqthHXyvJdrDC56%2Fm%2BBjqkAWLuy8%2BoFIEAZ157Vt5%2BLSCAq7LK9ofdXgFKmS%2FA6D%2BYsUueCW7HlSonMRkjzESx9QQihw%2B7bEODxiyX%2FSQWSrrK%2Bb4Gsz7mt5XPkeEQRvDYETEe9%2F7cQc4Ln5xoK4F3mGhWG%2FDeLcRIZJKCB6pXS7j1e7GHnLyvL1FAYbd14NbsW4LNl%2FbEaQiv0xVnzB6Py3AbjOGlHdqyb3k39xWgH%2Fr8FsJU&X-Amz-Signature=ceccdda59e246a3b49290fd8ab31d6b36dfb5264c35d0273cbd1880827f75d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
