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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK6EJI36%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCm3aOKuZYyTyeNi73GiIcUBMDw%2FaXOsN8Zvy2u8iUIagIhAKNgbwCRXGIfHk8vOrVScujDwytDqvOqr134XC%2F9mM3QKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIA3J7L%2Fbb001gHZIq3ANqXOnD%2BGh3CuTkM%2BOHu6ohmxEshKBDMIQYlCbqHeGDqTomDJ%2BpTkTPWOtj%2BuUTqATIifA8akb6CrRXYjES8%2F2d2Glybi74Ue%2FXwxsK2MEv0ozQkX7i9u7xh64oVuE6s9UMRwL86ez%2B%2BaFghm%2FHFBRaKI3XYY6dgJZU3SLObUgJ9aVd1hdTKg%2Ba2bgCsur2etPgT6rmAMr1ZIG4Snqnhx1EH69rQdLZZFkpugCSvJwcSMKKMnd9PJv5SPipGSdTqvGByPSg%2F0tjEkZM%2FYVKp2oXTC9Ega9cvnfxCMYu5xSbxzPlrwg0sw0PbI6ilupC3kBTfJezbA6gG5mPQ4sgOj4bQ15XXMo2dYrAQUtO5MzQzGixvcpLHrSgE8IuHQNB0mXR5J2w2%2BikKaD6v%2F70li0ua4eZvjz5ApE%2BPoj2LEbgSSZ0Vq7cI52T5E6rs5TL1rGrEa%2BdL%2BFrKSxXPGwdt1CyFHdUPS1JeTbiVOjcNlouddxFQAsXyDxw7uT%2BMJXGLVUCN1IMcW6wwPNYYLMlYNLEtZW%2FXXoK8l5jOysXWU9Q3D37H2VET9pTPnyP6pXw4GamevunAflPVrDPTcfUNAF6%2FcS4THpkTgWfDgS9kF9jEojkoDGO3C6SNe%2F9BDDArYu%2BBjqkAZH2spn%2FhvjP714WLUeZ4HQtlpieFJoe3jVp3p19dMDgLZUnqGEk7H5YZAcOVWedfT5aDb20Lg4Rs7I6sb5iSwaHYdpYWgx42oM3oFm8ed%2BYnIMThYiEeWUKOwV6uc4Xs1sx3wVyGB74tKFMewaozdmeY9G4JHkgOVXrD6%2BElkChzJrzIjhtcwE7eFJOKT98sr6HyGIpcbJvOeWSDm1AqDmBPztm&X-Amz-Signature=4e4833068422fd657d66d1fd8d9fe576dbee15e0e174b23fb1f49cc123e1200c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRB3IRA%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCKnmnzmy%2BKg4MrormAQBc%2BXsoq1ZGuhWtfudXjIGTNVAIgUzX1oPP%2BFWIrBNcKr0lo63MZbAtn8PH%2FjO1JA77FYL4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXY%2FKlP9qcawLr6qyrcAyLwa%2BEMfj8YHfiTk30Wo1folOHZ1HArXKL1nBDdSOFwZ0H2Z9TXz6GjK46kWNZ0VFOymJTz54MAtK0g9ALod4vphWB84VJEC0hdxbyCbpwsF%2FL%2FIx1vjddSgjfrP8iGdtWGOrva8vjRFTVKQPH1flNzntZvyWZ1zNxP0ViVfEoNzXQZOC%2B8%2FPi43TxsidyVc5qMsGAY%2BHhrBGPo62KscipQWKxi3cFs%2F5XqnNdyw76I1ZRFRY%2BarWAmbed8eNzwwgbMzvJDS1mpQjLfnOWy%2FmtXv84hsaRYi2COfJbPJI4lhLFm9KiBL%2Bqr1QLFTAaFbWZQk4AvSO9QXQ0eF1HwUdUIkX4VdvSR2OLQ%2BgZ3%2FIOe73P7sfB4XBi%2FqoYZCVq%2FpYY1gnNahA5XnSWQiinhbmo8%2FxlfZ4h4UqtwzFvfZ9JdMd18icWjwL%2Fy1CeG96S09QgawUBjhbNoIhztr5BNEQuR4s5CWbhETYjZmn9LTnyD8s9NUwzIljljALMZjsewAH404PRAXss6bi2%2FBZZqGyGwlrvCUnElcsqka4jqOSzMgjaJcLzL8RR7QuJ2Jh8X8WxoTRspcqdz1duLlFQUZ1BHuTFxTAWpqLRXV38R7eb%2FyJ0EAs%2B40nY71VHaMIK1i74GOqUBJP9Cy1KEo%2F4827N5%2F7XL1xv2TqLb5FDh6bB63Zm3%2FztIlcfp%2FfMijK10A2zcsaxlhe6AwvghIwy8wvMxF2MVUedSv9FZqb%2F0d2vNMZxykL%2FqQo40KEV8c3urQ3QRvEu9V%2FaU3UVyS6xEyiOHnKU2BsgQ1srXxiqI%2BJuME1DeqvONbc0WuHxoRc4RABiYVt3Gil0w77Z9oRo%2BZUna3zIik1OYYfoG&X-Amz-Signature=938e66abefb430e5c60fcdcdb5ce3fab92faae5c41b2f17e02d0556bca37537a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
