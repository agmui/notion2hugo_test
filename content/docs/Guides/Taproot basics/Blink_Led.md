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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKPFCTR6%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm%2FjTJfFSZoSppCErmhZ4tYcM4cxdUy%2BjN6VGDqpqUvAIhAIAHyQW3L%2BetvMGXYzioAnOLYSBzzqhndbHMAPkPCkB8KogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNcJS7VQV5CX7CtZgq3APX7rhUaeTcQaqlo3QO9n9VxdVoycw7zAZRNistuOoIQ5THhBHBVWK%2FLxcwSIVLbfLImVTuySSwlTDhI%2FIDOLRc3McI9kQmuRcuXNhtPizNDAvrNbRJGfi%2FXNnKxnOaVQbAKpVXtef0kKn9eMZ93yl3RVLo%2BP3XTtu2i25zX7mZoGnHjCd%2F73Ertst%2FN%2ByMc4r3M5FU25p1pfDeHw9FiPFvssfzg%2FovoR0IiE9PZDELhATfsAF8Mt0vCfa07aElOmX5xRvPaflYiziDGYYnA7HAOl67N1iLj7Ztrr8q0i80WHHMb0CvztXCLz9aP0JUeMW3DY5pYwf0dU7BD%2BsNMGOSShb0olCtXDOeXt74UUDZ8m8%2FqLR5Tj6B0gZP2dh9whB%2BTkhW5MUtK3EMSI8UCIUc0GhinWZm2CV44b5eIwo0Przwm%2BQy2QQaTYRky%2FKUkQU%2FopBXAsyqIEJQMZZOMk%2FE9qYBp%2FZmginiNMO%2B3hyytX8sKzLB%2FJ8bTXVKCK3butnawLsYmB3N6he%2BaEF9emSyq5ZM2AQ8i23NAdKb935T70grcgysSNXdaIVy5%2BLPbvtGN7rSk6zJVYt71dmhIORM46aZA1XydNKtN%2B4uZ02jY14cuOkyOO7Vgji6HDCJoezBBjqkAa%2FM8KjZ3kQO5UGmLI%2Bhu%2F%2Fs%2FXRTvN1mikTHY2gIUm%2FQ1bTgHYnqebh%2FYNL1d2AfqXS3zEU0KZ6EWpKfHryoexQrC6i0TVivmadwAM7lK24awcJIISAV2hvDmREeJcvO8oeuHFECSXGMcdLUeF59LibOKLuoEo%2B%2F0M2WR%2FKOxgOXE8gfTT1J9yL5kBbNMpj1uA5v44qLWfeTq72dr2%2F7426Bzj3Q&X-Amz-Signature=be2c9587a60b28c565c40c5518bc91d97571af5d1c13b2821115540096c7dc40&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKMRHN4F%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHzcffcNUQrgN6aFFBLN%2FwWTx4KmuYquf2u%2B%2FHAkyKLgIhANlYP%2B6VuLWvYOMU6OL8CGqqkmzvvft%2BLt%2BVyXapebvpKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4lqgd2vtoZ%2FPmaIMq3APtZlpUwUkSbdD7eU%2FtcjA3iNJw1r38LMLW3ji%2FF2A1NuTd3PhJGbYt89%2BnhVSrB%2BdDvR2m2X9xyBE2SOXKWscvhhCkw0rqBBp0ZyiXRJbFHH6AKAnNBvJvQVd1OUF%2FIlIIcJeS00D2nEWosWnds7iiRohZdIm0qFq%2FBdMugLtd9ELXDZkEPzhzX4mLsW4pDbl6bdm9ceWrPYUv2oT3mjzLndrktZSnxIpw%2FwPAUBVlASLo3Hvz49In6DfXaKR09HXnoD8IDWtBA6i1oj%2BLNRMaJs6cnrslhBClGiw%2Fw574XtoDiLPfj2Qg1wTycyGg6h4salWUkiVn8LCatcgz0kXEl%2FhRvJLvsJWN9eArkd5o3pV6GwY8b1DHHrsHkRyZlSMmTjkj9CDhQtmcedWwS7fZKbDPvkIGAUhjE1QbyKrBUR9h4EzBHBcfWpamfoD9mDGy9hKSwiaX5nlqOwSkGpm8eWltdsrjw%2F6%2BK0smrN9bb%2BuxFsIgOIts%2FzbeflNMPpacdZFSB1Cu9DLVh2KMhrI20ECduOhbTBA5JjBdHX73OiFYwbO5bO24nOFCx9ljSyEml0Bc5yhtuIqrilAaSxCReH8eplU7ZW4eU9pC%2FwHPandOLnqEfdBOP9yy%2FzDKhezBBjqkAVCNLNcSuSdELCYMmC4pEBkmbIhysZlCSyhgGpCXNnaeV5OD6aBM1iQ0wdloI%2FrhFwusQ9RZlV3E8CoX3yCN5BsI744noX96pFEJsafQ9Fnj2NDVzHo8wdUZc7qr7Qe6ACWpbaLPDpESOOs9KTbUvxTTbjRUjIHjPhxPCsVSn9AKtxt2NGUr4bhVvatrbiVABQ05whqpBAiuBRcyICrARBqDRtxO&X-Amz-Signature=2e3baeae36436a1e7c066f599db27f5d8f637028eb7dc13159448c9e0f04fc02&X-Amz-SignedHeaders=host&x-id=GetObject)

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
