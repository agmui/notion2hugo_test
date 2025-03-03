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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ETT6DRT%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK83vxC4yllsupjATmQNduCBRDM%2FakX8jS2O7yQG7%2FnQIhALDMmCV4ICXxaelSilCVw8%2FV66Vc7DKZJhhc6jE9xYJAKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbDraV%2BdIBv7V%2Bimsq3ANLINpzq8Ez24FGWK9xV8IHwYA3aETfpzPQg9fbCLVGnv1kHvcos5VNZidCeLbyv2eBpxVNdnNJVzm9aBuHiJ2Gqwj1afSqdwTd4tVMwLRmB4WoY34bxIuwFjtpF08zKM9zbgJBQNT2NbtBYytwwZteGhIwxOe%2Bx3leOGA4bJ7xAYdIe49f3TSrBE%2BCIliMu%2B3VTun0Wrj3yFQHD29aiWpAU4Lrr5UcbLq7E8DTkR4TvAdPQINZoT1cNoT79qJxXIymUsgjUzciybuaxtblhSWmRogOtCqzuE4F6sT7yTOKR%2F9V15QO5epCEjERC9rSiBw86VksH1LnXZd5moH4yGdnNq3ulJkgHBlI5XkRjF0SWnHLncSadShdFzbvCcF37cwnb4LAOtbtcAYal8ZBSgj6kfH23%2BgfwE4Xbi4HbuZZ2bePB4T%2F6IKU50LjOPcko7RN1v2SFoJVpJ91EqDdETEd4Zk49Yre6H7IgYxi3N3IyjLEkvrrgADhbX7ZykHNm3dpC09ISSdibd0aoB4CNzLPNLSvyc%2BmYr2iTgyjRnkWgdu50MV9IEnxwY21q8ky%2B%2Bnw3mDY6lee9wIAKLo3sTEZrnz%2BLoBHkQg7QxJCMXK6tcM2JV4zGDxmeOOUUTCd2ZS%2BBjqkAdA4u3lT%2FtbxmTWnFZFHUbH1Glhl7dWssV1g4RO%2BnMH2dNgcRibvH8EUcejvgLKzTpgSrlUD4OQDrOegzY0DbkVB92Re4UwZbW4%2BTaYqicErV9ixs63NKTkEcC9hNdf%2F5Xldg6JHfWU2SmLKMnEzCrkt299BQSsRog1UMfbDqE%2BSS1N8oE3SA%2BU9IfI%2FjFNmKXfju1BLD%2B50AR4uVMbAsoEFMCTi&X-Amz-Signature=9b6de6bacd6330d7f1905bd777592472e8b1779bda90771b9f7cd039459932e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETNCLB2%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Rejxl1G8jnBBt1ew55OzvoBvAagjZ4Kx9%2BVRVLGhigIgWR0lMGuBQIHExMjzZhR9YpomdbHZus02rNt%2BKNxvVlwqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhupCWuBysRaCjh4CrcA4YQPA7WpmOysE%2BMhe%2BUxlNC74ltDsR6tq%2FSBsP5kiYQ0EoIsSguT3C3A5G%2B37GIJImgvHHYEtZ44Wf1WFo7TyoWsxzjAlWZt2sVPl%2BhFt9RpRNMK9G4W7IUfdYoeSoQFVnlBta64RCxwPOp0wIeZDrnYdMMSRwoHC10zupMBFexFzjrQIKBmZNb6roVxZWNosE8DlzkCzMYIdWmQET06Th0Ija6OX7D%2FcJoNoZs3Wv2PYwEHlPsKWtwqogroXCt%2B7%2FWXHhz09kEL8shh2Om8GjxPa1w1%2BRqVz6iB4NsYmVbjPxk2ZaK9ecdSahgngClFGgPSgRsbG9t0AI6suHX4tVKfT4Nu72YHyDXd05AHwNr8vtaG3jDgo1FNH9d8Ob%2BoGLoOfhWjwi%2BT4atLwNLA%2FMh7J2W70qJuZN5NcShMpA%2FWUnU%2FEIwhmKWBq%2FspRExyEujSOblNaJMKVA0CokIdVNX9SEyh3qXHZBgSajIlTedjQWLutcJuGVvyYNfZvgYLq3XtFksmg6xZ%2BUAZl%2BI3xJkS7F%2BOi4D6eJbPtWsGP%2BfzEspFdHLteErSIhnK3VCiZerdUfX5yyxaVpNXVU0WyuwtbZUJdRRH%2BPi15sQ6J3A3srFvaBa5rnTiArpMLnZlL4GOqUBcXoxaIvxK4lg66a%2FhlabL7M8PuXuSFZo1SSfvahLh90HrdEL5YzrkKU10oEN0mx7sIUJNx3d%2BIRDWN0lDyo%2FfHMaj9Mcoe70zpd2MxIiP1KSyu3g%2FI5AL7%2F68Q223%2FYzgPmxoLcjzcyEV4H3ArkqV8Sioq9MjO4DbxJ%2Bb%2Fwuo0MzDtPN68o%2F%2F8aMeedcXtq6rgsgTvNOf9qNq4relBso5ZQ05OgL&X-Amz-Signature=faeb8f0241ee6b8dd3217ad202c405d48b9f73b81b478014257e3b39e78b8233&X-Amz-SignedHeaders=host&x-id=GetObject)

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
