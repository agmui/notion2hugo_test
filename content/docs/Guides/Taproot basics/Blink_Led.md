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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSSPAUUX%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIFZCa5jaZBmFXyQ5WJ08V%2BNT%2BtWDA%2BrEdVwakSqBPJ2pAiAHSbKq5F8%2BD0vyzgeB%2FeDykqNa2z5owfiMcYRZ%2BBHHoCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIM5qXz8fGeF1UfjEexKtwDNSm609VJE62lpKB5dhmJmPtzR4Qi95OIMYXOw9waoJzzPVPZav1FV%2BkKYa03nnsDnVafIHdOgMtD9z7Y3g9CNhu3LC7JHK%2Fbpo%2Fkpm0Fm%2Bw6kChm%2BImkZadNyFyWjv%2FRg0ERkExQMz6LGOtC1w6JOMdIfWqM1T45fGdMjR1gTT9Kf4uCa1l7E4MXtImwy1gkauCvqet6N3eUegUiqw3RWTjeqd%2BBzO8yfFaZ3ODVP2EZCozspvcwntldpfdtTMF9PIfMC%2BQS%2B6FVB7uqR0LxeRuvh20TmlMiIv3kbc1%2Baf6vpvtqH0RMyoc%2F97U4FcNsi0KKxN2up9in7%2FoRkK1hIF%2B2C5V3enXvOCyqW6C%2BIm2EPjJeNDp%2BKK5Hykt3he%2F3FwSQqIhc7CZ5yf4Y8XNbWCrUbZ6CMp1gWDtU3Qa7G9ivOWRjS1bxrS%2BYXadJZfktczXrh2ZKihc6v4K9ZheuhChg1Sjfk6FLBJ0w90eAGWxYAqWBs0EyIQhLYGb9pnYMN0FAZrepoHyjYVS9ZOA1JBdrNbNe9fE3Aiu5TnoeaicHb909vsUMb%2BNfeB08%2Bbakvfqud17N9k8iB2ttFqpFLQrrpon1uxBj2LwXVeJRgDu7ayrhTWJB4waHllUwu6yYwQY6pgFUWMnzS%2Bj8ZiVBb61j8LfxkKx6rh6MdkdQKz1TVktSkBOKXn5EcZzgYAvd6yc0IxbhFDZ89F3w41JXLBnmMHcZDfvnvAul1yPIm33HmgqHyJbjYPXE2bO1KJ%2BUayNWyuIlXxeCPpKO1fVjERb8r%2F6GSS%2FKdQ4n9Rik0N04nuP2MhOnxivyc0tAhziyt6cvRleQ9%2BkSCMXq4EQa%2BC2AXN7pVEoUj%2BUh&X-Amz-Signature=b99f7a9d3031d80527ff1f98dd598fbdbb1f1e039d9f4309eff4b53d94e969f1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3WSIIO3%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDZLik3f4BjZtYFdMM%2FYmf2XXkAKjxS7zdrQCY3PCiRmAIgImkBHYdxyQyLA8ZphHZWYB6V8BZmMKqiZD2r0DptyYkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFiZ9%2BwJhpB%2BeFIOsircA0QdUisiz4sME7xpViP1Tlpd3m2fqL6eiGOxwJQ7vBFebVeNay7cOHJcO9BBufWCr2OWP7hf6H07ZXAMlznCddQ4CIhuE3dKsAy2i%2FldKd8ljiYDBrBUF%2BOYR8jFn9OYjvGsSgJciMwg2OE0B0W2agcrJHI6G%2FIp%2FiSlNzMBwopFe6%2FkjO9y9f3BRMfBHEFehb76dRObBBrxJgDX2bGkNVTcn0u6eCOW69E8uO1SxSS%2FBHTn5wi1fay9eKqH%2FK5PTc1WEtDMWI1mfMK5tsYyQDKKGR5TV8%2BrSJytyVlGelDFTylByHspUeXkKFO8wIEec8dKviyWiTN78KsDwvPJsfaGTR1GIcmoC87VcaZrCe9JC4b5Q7FUfWdn%2FgDYn41wMntm5YbheKkQ9SmzO00mPltC1uaUtlrtb3Sg%2BgtbCT%2BwOq4RYK5IehVDOxmgl23fjYSTJoLYJvufHekSoscxqJHzQD5k36wNOoTBG547ts2n7STmQHcWch7WigJXW0e9hWX1Tf%2BufkaVmeRuPpaV9dyW3h4Sn%2BzyK8ujFXQjMNRUv7FFGnRk7mLHoO%2FAzrsLcdm7yOjYYipOgEZrknq7aVO6SMYNGy20aI6%2Fyn8UAXjR7EvxPpjXPP1v94wGMPWrmMEGOqUBt0S2%2BoziJQ9leUbw3Q0UCP%2ByAI8MDXD2qUScuX0ctMNMv3dlZexcAoZ0SK9nTKPUhwkDcePYioddCICifkeQa2n8fettxH0LrfvePelYYYR7UIWvUrN9Ef2nqlUrOMDzf7ktuQmhHRfttrhSmRbgRP2KWp1a4ufCtYwNVFir2RmCDAMpB64HEmzQYXvlbPG3lJdZXCvH1f%2FMPAT86SOnk%2FjZB0vL&X-Amz-Signature=47c9a782c4d70646e7c93b23463585ba20c1888fc53cb693a58a4886c348b1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
