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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQYHPSJ%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSjtlY0PJ0nAbJi1gAbbx6oaSSeD2de%2Ft8KrtZuJ3r4QIhAJ44pdCQ5qp1XEXrL%2Fi2enJ8aT%2FTwuYDjPv8HW4R0bX%2BKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BYomVXqPmEvg0CNsq3AN%2B41NSQdp2x0qMUNckDw%2FtEUI9EuiUjnZ6TargciyXJB4PM5HCvHbJYm4l1q%2Foue0q4RjBexz0OJUJ4cTQPstf5hdsDpygi3JzTjYVjqO%2FTHd0%2F9j974BekUexJ61ckl4ay2KzdE7gjOfzQPRGSaPprViR2zfA2flwNhXJZJUmo3HUarLKfc%2BDJSCrMb6L31EYIi5%2BZeEUnDCwGTlNUnDcv64CO8Hfl8iyjME8N%2FxyaF1%2BoAVulryECT%2BSUCtIaDACRtyzHq4uA%2F6%2FflH6lE1Kw7Hixm7UF%2BIYienRD%2FnPDxxG4igkcQONQ4B9pRDyd89wLT8ExO%2Bo1Zs7RJbX4Qd3%2BpkRIiYlMGN3%2FuD3DCFEGOfLRDP0APJJtbmRD2AB2pRy4%2FHcdcE3EHtwxpnsANZgcNHKvC54qdMMR%2F1bIeSbpAiih5X2qwj1kLsSuMtaEVMPRtNK5cIkc0XmIPzeEMRlcLIgTCXoqeR0B9dB6K3CK3pvSbxuOYZ0hCvuol%2F3BJWFijqnQeJ0RV1g1i6tcC9e6xbMnVugTLiDMSdDQPwt44I5GddlFwb%2Fzwve5bnrNMLN09AWs2y4xCW31Z42HLBGy2ARkLYxcGCq1r%2BPq1klfI9Q7PaOwqfr%2FQ9P8zCrrqe9BjqkAS993zYfNEjls2EJkdMCqJ%2FoTkf4yXyYt6K3o1Rv213lZK%2B68WMM5CeUrBR8Wom04YK30vCh%2BNy186vqLbPT9fsPepL5MF7Ig8K9GH%2BXqucnAvZw0zEXo43CXbNn7LifA7Tn%2BYynbXjgebKylH7OcNahIgDQrlA1rw77dG6ZnAiv%2FuYf6EeJYagjAg%2BAcUozGlOkoGMbaOinIL%2FmPvHUJpT%2FkANw&X-Amz-Signature=44d7e9a903f78614c17d595df883b0d5e7cc448807371cfe941bb0ad0ba676eb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMCZW5ZS%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFrD%2BcivMM5xZPIIdlPZS0bXXojpwsEupr%2BKxNBKaOgQIgKZuiKVIg0uEFQic7g%2BRkkwujmncYCpGpuG9qnJ5Mu3QqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDACgrIENwLHZbh2HeyrcA%2F7m7%2BxeIYALY9issOXKfk0JYx2ghJipRzcdub282kONyo3HxZ8WFtqMIbkhwMikxzzo8HNUJ4irocuvwT1ZvKlSD%2FzXpoX3j6raZ%2FtLksBqBh6LdXgMFyXVSPN%2FGJNHXTqEgi2XHf4T8mxDQP3LIBDy%2FttXQvgAsx5eSoNVYv%2Fg5NhrwtC2DEpB4I9KrMY5XaFd9IN3pwAGOOz572D2rfpueZGlwj%2BITTGbnpvRbpmJubaSi4MrV3wBjqrMXV8Woirx4ultzw1iVKUr1deh%2BMD5wGXr3%2Bp9vVFrDZFFqxW2KJhz480KZQ0up2mToKUFlTpLz8ENCorfcdnHYMjAnENsolStIEJBV3HQsyOmeMvEDxXu4jou54dCphE2OaL7puPPX3wQljb0ICrtreEaFy6prhoAXc068tNjLKsF16hMyNgp3KLUalW64fOM8mwV%2Bo%2BqjHnsz8iL9yT4hAjTPda2QwAyngR0KpheBZo7tK7yp1QtPTvf5G1dokWs88RO4%2Bc5n%2FcSSIC5irwmMAhfs0WAZkXu%2Fa3yCn%2B2PxRfgLGPRJrr7B4I5Ao1qMq0Gl9b%2FANYewtvo3j2UuyqP5lLbX8%2FhVhLCser9VhYvYXKksWOBWtCsFjwlb6pbKE4MLqup70GOqUBkuEK40DJlhg5l4U0IaOCuyByiYGiYtZ1CdzezsN8azOIo6vnrl0a5Bv%2BVCd1aeagINwY2VQ5fc1f4dqcd46yrhbDAN2Wd%2FIoAFnmXQhi%2BVFJZeCpoo5eDCFYpSpxWinpcJ6f9G%2FqK%2FOVa1Udckxn8svm8phCd8GBiTI%2B3yGmlmtRPTATR1Et6msdfZkoTgaU8a5jWXyKMv3pZ0ge2QWD0BOpZOiu&X-Amz-Signature=3413b208c1646b1bab5a60f33ac7a895a3db9a0ca34cc007dfd8899cabfe6431&X-Amz-SignedHeaders=host&x-id=GetObject)

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
