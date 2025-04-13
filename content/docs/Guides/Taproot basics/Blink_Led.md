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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJEEG3G2%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDGApgQ00n0%2FTyms7bhADMh1m0ztAm9x4qFGbHMfOqltAiBidbZOuQ69VV8jCHUG7VFmPG9gQL%2BSyR%2FPcXeF5TtGMCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMZQ%2F7WMaHlsiOc%2BDKtwDpeJ5Gm5Er119E7qi%2FWnC%2BVLZ7kjogzQJocYWdAiRX2KaPoFPuytE59Q5ZeriSbnliLGvy1uL%2FuGyFvdDhkYe8OlzwCcAoAid436ihHzFxf0mEIXrhaBzOH0jufcbJpbFwMfggexqtGF%2FjFL%2BEGIuWtN%2B68QXoZBTlnMCJs4rSExF1PFABMVfFWNfHyFL1wTOFFsBfGOPWhNmY4xuCkPUB5P5Vt5%2BpM0OH61cwKS3ui8SKcCVt7WyMDL%2B%2B1MvRAcRE1WhMiLT6vkf4tf1w4sotBAfXZKRJDT%2FYwRK9Zlywt0ZVIOH9rUZTiHUB3AgOtj9TEUmCNCfxxiRwnLtXWzGi7DmYHNSgQd9Mfm2yE6geUNtS6yTvFuuAdjV4MnlUpMOVz1rZ1HXy6eFL5EoU%2BupOk3yiclfbP44Yn1KafN8dzqnNOTxxJOgOKQI4jL52%2FZEhM6pNNTVBNCSmDuiX8qUJeYHqGN5dl%2FuDD490hRJ7z7L3ZRN%2Fc7q6k9HX6Hiug0b1jrIy%2BVe8WnvBq1C7lK1JN6JrOgYHD2YWVzKLpFsT%2F1TQwMfg3SAjiIgpZ1ZRA276Rp0%2B8mr9V14tP4N5Ka%2BUAzYQucIXqPO5srKWshF5C5rFUeWnJARpaOQj8Mwmr3uvwY6pgHzFb14ucQsbw%2FAMifJ4BvXpg7im3Za22%2B5gm%2Flee6Da5t4Z6JZrhEAzZ4Y2xVGLryLNt1coZo4UozzucmiSTIBmnnofX7MV0CGj458813BuaIW3GJreoCtGbVurcdY4y2nMwaSmCmAENd1j9iI5g4vDb0T9K5wtZ%2B0ZBVDYZ9dv%2FUJTclMj%2FXEpOQyomRJS45rtkhi%2FsVNYHex%2FgcUao%2BW4HbG2Mrl&X-Amz-Signature=e017f8c6f79fa7ccb3ecc08989ef7c0e31668d89eeeb584778c8fc3edd6876d2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666LOL6DB%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T131651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDy4cygM4T%2FreA%2FqCb2UJpD8wEfehUum%2BINA6o4%2BdQMLAIhALoLskCY5x3J08S50Vx3%2FH562xP3LZBrnwu41G759yZtKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5Q0fwMF0sN7LL5bwq3ANrnO%2FKRysZrE8BVIKfv7kIu3JtgUAhFuFcSfyt1Bpsua8UHf42Xx2Uwhu4C6GTmntASoHWUqAd5SMarYiVIBtSAgpEXYWyKFE94pCclzxKHluV7XxtPY0cwmY6RpjK%2BFHsm2oIyIg1AQ5RvCfAUGWrYub%2F4CPLApXUysAAXOsEbiOhjgSQEZxhVoFd2MBlBzWwRQ%2FLgo0KWVOkp7O3a7fn0iSBfNQv%2FOU75oujhYcq0y4gJLH3g2keVpEHGz4sqV3fwl%2FhMPVlEtbiAvLdiUysJbEAn4EGHiW7V6zviusnfHteb%2BUxVXJIx196wRVfMI7RAesumlzz7CZ2etOkJhMQXXMJdx%2BKn97nidrxfC812h%2F6PXWQhqqQCZZof95yd2YiKATYCGc%2FjglnbhVaJDclhJrhU4kzNmSf8iDSoz3%2BOjkaOr%2FhhIlcI%2BJhl7IZAbRpT%2FZ7fSPH6kPIfb1JlfXhw2gm%2FG5Ul4t%2FYDOH81%2FUulSMahMMaWJXAau%2FbHO3g6Txy9pXcbUpPGeUxbdRNAKeu59Me30su3Ajvgnf0iY%2BSdkemCNR9Lua9aaX0S4r5Ch%2BJxXfytVSUk9HyjtluBPbsXlzczvINtjFM56Iit09Dmrb5nDKoNSj%2By5%2FDjC3ve6%2FBjqkAYiDCLmrX1AYIAOZsc5z44omdSiwVVdQxUznIRYjyl9%2FT%2FuUVYj7LwJB7Ryx3PhdRZJd6TmB5YyS7zUN4PgicllbqM3z0Bn7KPWfd7eOPwVpObmXjn2x9C6gyl2QpjwsR12iwaf0hRwGHFbB3LR3Eb2%2FOaDAMAkCYrW8cIiOuH3vK6ctcJN2FI2oJySEq9XAbJm15N41qDOjHgjxOtOfrhYibS2O&X-Amz-Signature=da3385863b5c5c9b6350c94bc6a138c3c92252b5b853864efa836ccdddabd575&X-Amz-SignedHeaders=host&x-id=GetObject)

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
