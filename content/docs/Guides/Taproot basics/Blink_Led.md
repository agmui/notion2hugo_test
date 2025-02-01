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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675MS6UC5%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE0NXAYu0KOE8GiePG4PvLyuXcFe%2Fg1esn%2BvzB3LOKgAIhAIpxAcmALprZlSeVcl7pSYURZ9XTyXDD86lTJD%2F0TrPNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwyq7mw11rKSmEqL0Iq3AO6neygka7evMteIn5gJYEHvb9Wmw6lq%2F6%2F0pno8LwwYRuxXt0MOzab4wbCOyCFu7YQ6%2FZf7n5k9PeycpaiaUv7nCAsP4UllOcTF9pBblNf2dsFwlPKlgRfjixd5h5WQ4grkvIJe5U%2Fd20%2BhBvvpJCQ9W%2BqisFeS4%2Fb7cfJH%2FXkXgS4NKRDV6ul%2B5seJx%2Bj2SGrZsiVaaQgddUw3vgJz%2BH7OcvJuxVGQ%2F1GnzUOF8iBY3wRZkNzijH0ArgzJ8UQuKvnGy5XeYrcH2o%2Bs4r9hBXaqhYgt0HLz7SKAN5pjzjz7nb3VWX0e3PTFkG2is80khWLk2DpCkFLdlQu%2BYfegSgy0oz4TYsomRSAIkYRhiuy9P5IzYSY2LLoWn7913mEL%2FD%2F8Ss1HNnXLV9SPlhrWIQami4Rt7dL9VCEIGZI0ymNDjcZ9hwLywF%2F2LJTXeMyyxa0qrcXUq%2BfxtV6rg6p%2BIdFqThH%2Ft0sh%2B3PuXgIKAcmZQ%2Fm%2BWDxep01Bzk5EC2AdBlzahYjgK9JVjjt01AHcq5bIwnzggiXDjH8ZB0cRdz5j7Xk2N7zZDRmH3tZgTrYoXSgRwStuUH2tzDt5dEl0iSGmJbWfX8ASZ7zDAby082PC6%2FoPLbZ5qYmcofhtTCCzvW8BjqkAQ%2FzFwD56YOkA2NlwdIKhb5QDLrHSIyoKAXJMbyEW3zN9jIu3aeXeTSFweKumbYKQx2Y0Z32naIh%2BaJQQZ%2BzoVvTApruyQCdsGYJyViSr5RwZiu3OySZFf2StBZkAt4ayUNK1sI9Rqq%2BW6uQopUax4kvj59pfkL0QDV2Yjth5YjfJY9TAM2gIwO8ISlUbVt%2Bmiz9RxpXSMOl7%2FOmdwnMBHIswTD4&X-Amz-Signature=279eedee8a214fe4696c25d6a09c697f5c831e005f4e02466d76965219fcb3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5GVFZUB%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhizxKizK62VDGKdyRoyMSIk1IeBfpoFGPWwqM88M4gIhAI%2BqpepfScBc9MPIn43av5dFZLvygUJ6wVatoC7zSuPFKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVoN1Fm7%2BZXKra0%2BEq3ANUS6lt2qxj3kBplR9A09dZEFA0qbAFKW2Q5BcSKQB2dcvd1qsi9Gh%2FVAr4IL59YX4Z%2FCqlgjMeOETkwMogrSRJR%2F1oNdCWM47Q4PBMZyAZdN7J8Dc4T7g6Z95A5REJS9afD3vgnTQrNaV2oS2u9J3gZYg7NADV4rELkzSwv8UbVPsev35pwtBuV7dJMlBVCUosZjRk8e2igV2Sr%2FwIMxWoMa2Vr5h2dAOAKZtCO0G%2B73n3UkB5M1i6FncKjbVtrxMY%2BJ0rW4iTh%2F0IccMVRzu9y0OU0TEn6aQkcgkwXYk6l4P1rBNrPA%2FHBkkogqT4K4HIEmwucE%2FfPF1MWTBrNajM51q8rFkhPXIqI6TFkAZrZUbBiCamDar6Mu7I3tIuy5IHAeBoLonSCoSGYO8cP9d%2BiFiWpSdifi%2B9jzhBqnoefyj0Nv0M21CzCJvRDr0olGuV3aT5nr9uvXrDfdJwJ%2BFNWDsWsqlwyNTgKiA6w7x49E2GOy2QUpUNE7UBt2H20TvcCni9MB%2Bk3PjULrMv%2BQrMFY376MmXE%2FxO0%2B5iWJfHzYmOExWjYP1eA0tYrVyzY4Z1CzDcpH9LJdyJ4KClL9neRFjQcbCAzHmB6jjxh4MHLcfCTuV6s34yLTLzAjCyzvW8BjqkATRmRfefnHokyHqQUfIHs24KXGLOsb4kN%2BK3iuRSKttSrzD56IBDObjGXr0Kc5KnPgBBqnuYW2KEbOQUh2BHlV8pEYksqORLYAVA5e3DiCPvPNiPiFaId5p4yXDjQPXqVTKaNDBUFgJ%2FLk%2FNVWwKnIMkD820gqn8%2F8mlbIVI%2FZ1zz30tljMRF0GblMJeSLqqzjoSMH4NPlOrEzOJH1Fl35Ua5MUt&X-Amz-Signature=760610743fc50c757ceb1447fefb88cc2316347e9cb2768c88c87537a1af026c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
