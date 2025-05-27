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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD6NEA3S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFM5fVXMylq9GyYrUjGfH3iS%2FsEiu7cencWjAGMJ2ay%2BAiBigcASv%2BUzW%2BBq16OGe3Dp3fQnw8wGCAQGphichy%2B%2B5yr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMdkPzlfhmO86dSQAqKtwD5AEzAgj2WOPyMCtMfbnWk2QJ%2FJEzWEGMNSU24vX8jPpmzvMLVwFKEukLV2RfTZCiwne7T%2F122DIhK7KKJ3ywmOWZBmOrnNpwIuw01Cfcswt1USGKSKq%2FkTlP1c9k7dpxgW%2F1z3INWJC7d7hO3a%2FunfDdc7wuddl0fpsPYYoQCKe9mEjohN%2BHlTiEipGREB5Gu1FX%2Fym0gYMIOG7YM4tQPY6Ic4qfZEm66m4hYLnq508SCjzFbwVmKlXaSx4y6h1oJ6VnVueOVjhrOEYMHJRsCWTKru%2FgF0NuW%2BeBd249y34C%2FQviLNNYaOsS0u9ZrXb7m05kUWuRDDGM4aH2nzjEx6hKR9eNHffJCZad1pQG74EP7OPum0ElArLEOIoM08RCbgWe1WVUEj%2BdDBhuCCNuTdMlt7HQS7GBo3NVt76EIGAiCDM7z%2FTWQsWDotDTnZnbHFUzK4A%2BGWSeTP1u8e30CJX%2BeTgAPG6pHcp2bsUc%2BxrLa%2BjMlD%2Bn3vBmG61CmQCPm8MyxgTC6hpaaut63RbMaNeRNYpYSsdLJuVr%2FvjYjAIrflaTSV00jR29BiAZ7dozy0109ULgepNFfvSq631p6KHj9ALLa5dsbuUccMZ1ONc%2F1vzvvKKCj2eJK%2BYw3trVwQY6pgG%2BOym9FBxPNi51Ho8nahUo7%2BACiTpc1BMe6LeDNdDuhibqfxC7q%2Bv9eNLBCCssHy5qRnqyElv36zYX0AlCvs2odIkLG1CR1mloqv%2BxZSEgcVTnb2iUnYhKPz0LiswbwehpeFoDFyN%2FjWifP2WAlRc9HRePElWAhu6aqJ66T%2BIaVayt3R5m3glRKqD1nZ9cXcedNBRaO1fH1F7DNcpVqrLfWsGCtABV&X-Amz-Signature=813b429836110da76f2143cf8bbbb99576b929820c61f9d4d68f76fef234ead2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BVKEMG%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjgvYFloQuLC6DZinnwG7N7dx7ZfHIeVByeYXu1pFAuAiBuTv9wuwLxmO7KKfvKNCORhcl0Py4%2BaN0gx%2BnxFLATRir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMtW7AdvepHwS2ePGbKtwDp%2Bomaqr%2FmCtieNSAPw5R5nMacafseCZr%2B%2B84GijsxbCGWdBsqpvNKtn5lZBzK61L1zR0CIA7pNpX3oDnXkFuusmeTLJXJkzsf6RhdUJuZYHHf9DxYB%2BxownHHPmvbmrm67APjVkGN4G1zpFPwplQ4%2FIES1A8woLS7F2Ihr%2FXxcseZQQrqQVE663GRFE%2FwETd4HPqYShfoAbF8yhKwDJbFT5FdQFSr5SLuAsslg%2BZaSX3pDo2nNbKcCCOqVfdNaPUsDoech9u77RR6oN1qYMUt7%2F%2B21FAZ7bTWPfmDadDHtx4QN%2B4CyGN1a122TGxiOv9ip9hQMVHnJ6zkMNWdJN3ahXIHbQC0WOJ5smVt%2Fq2sutJ%2FbV6t8HSAM21N3ENPw7qlJS2lZZv7PDgtUrW8peAnSTV52MsLxfMAReKo2L%2B%2FBJEo7XcRyfBq7vy5IIGqQId6eWMgCO9latKetZY1fxSwQdK5I1RbGDXH8Fwd1rc4Yu5VBeLJRjJnzEvoEQD2TWFOXCEupund7mHUxXC6yJoJz0spfrdTcqr%2BnBjRvPV0G5GHedKCtSF4GD%2FyDZxxqLd%2BGNliAnpFrldSACveggFa%2FFlbv%2Bsis71%2BduJVBcoMB1VResUxoLSI0c61WowntvVwQY6pgEQaj80het3uxVSt%2BzPHuBNDnNohs25QhGguxgWQuO1elvxfrShgAcfJ29kS4P%2FZF%2BuJLZtPfvwMPRXWk1dEg8Ldg7drz0tuhvzLHvqMPv4Ylf2%2FUV24wo8ljiqHWw2t5IvQcC0aIJvLd2XUgQyHUHYfVmolHnVqHwpW%2FqItZ6LhKz2RDQFPyQnEKQy2mBwe6Ee1yo%2BJqcVplccnO8BHxA9amXcZwBn&X-Amz-Signature=7c8a7012633eeafa67ca1d773125edcba8ee22dc8e6f12ab7c0f300108ce682c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
