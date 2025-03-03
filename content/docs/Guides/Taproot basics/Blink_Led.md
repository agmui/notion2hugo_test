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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR43RVQO%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELpwbF26iEzbyN60gEceQw2n2Dfh9ciLOUmqQC5bYytAiB9FcpETtuSFDMbja7VBdZN3SO2LlsPTs7AyiLcQhT%2B5yqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpiKDSkmE7G%2FB6FTlKtwD8QeGAX3f729BBfF61ZHxLox88n53NecWY0%2BS5L39orsBMOUg35TWlz0EoREoZsflQO9JGQF%2Boyrt%2FK05i%2F%2FFvtoOWtPoqYsMKVyWpWizOI28eKPh2kWYq4ZDZhluPrF0cKdNxAbf6SbwloeVDIBeDwQ%2Bs%2FTY6JwCLqc%2F6goLEyJm7SYV9os%2FX2ExcgCG5oa%2F0JZzuhGd5p3680arLyUl5bHKulH2WNs6F1B5VN%2FRNEgrkVYUgYLgPvDvM9q19RWVuczv3csqf6uegpCRCr6RX0gD9T2XNj2vl8vmCV%2BskTov9WJPTt4NtGz1AHZsPLYsGokMoGXeR5vYGobR7QoBgB87KVF32WmS%2FRQuAJedBF%2BlzNeOGSNUdQnz17vpTpA1BJUker%2Ft6nLStWqLUA8XluMAZgQZBurhDZQ0LX7En243VQqhAGpgMNX7NVyyS3fLtFFmIi53xNViCA96WK3M0Nh%2BwYmwS2Ppy4KLlRyFTRFrsih4RW82siHkXwoH7xjWHpUVDElJPsvYCFnnd2ktXqcpH7jly8pxtL6E%2BVSoZDbzVlP%2BnNcpO%2B59JoI6iPEfxYpo0APHoG3ZUCbjMv8NTT6KNX6mO6T4mONFEGpppq5fVoMBUo2Kh1BBKN0w3J%2BUvgY6pgE59LBoZrqxYqEMVQklgeaX2b9qt927igkqUiptix5BJ2b4z6Qc8b8vS%2FgCSz1xeWPbxI%2B6AFvtbmIBnbA27Bcb5NAS2NZpwTg3ay7ltI%2B6vVrLp9qxnpyJczkGvADJKOdtLSjj%2BT4%2BXr2yb4tamn%2FEXprDpfps74o%2FewkLbC5t02D4e5E1er%2Fo9vjKPladko5%2FAZUC97VcmPkZQOV2LwA3HJb0gLzR&X-Amz-Signature=73a67bc79dda33576f0e522889982e0ac5a57e72b3a50488d0d95c0f78e7cea9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLVLC37Z%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJvYLmR7prUDakj3CVl6%2BTno1bskCjr2h%2Fbg832vZINwIhAOIvS7zSveBsHMhtOui%2BhSgJUxCBXP6vZb8q5eYiiX4uKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLKwJ0Gp5Byn6JJG0q3AOnGX2ZAZS5GBqzm2%2F8IQqykMy2DMC8d0fInhJzmNy%2Fkn%2FuZO%2FTCbUIaRWGwSC27ljE%2BF2iTf28T3voiZU%2Bxsl9X2vQUB5vVQs3BJuu%2FMY%2FaPf7fpDD5izshQN9cZGQ1CqAFPRleBHTSzIjIE1n2GPybUErxIYAz1ce7CN1btumJmNmnRu3cwPfSjqyHAoA4YBHvoFeD7TIy%2Bc%2FKeCbj22fLA%2BNhv8OIJGOpZB7vDzvh0NSnxfmUs%2F1xaugI0YuPFrp02Arb9jWYfvyHyLUpUVa77UY%2BHS5jP%2FRVpArvYRYzs0My09AqknUQf12Z2dWwYmGPYzf6o7ZTeHt4B3VjHX5lX6ufohni0u0GbFyo5U70YHsnc6jK4BkgBfOo7EIdMka1%2FaKKgvlo4vBoe7pMfl0bNdwE3QsE02qsWyUhmBvNfMsRb4wRaHx%2BDR1oECZCjZbQEUUE4T1SoxBqpWjKedJdr9cQW%2BzextXSUirW4E2zO7p5Q1hYghbjz9WYZNculfcnk91qhrPh0dQDIz0qBiot8LZkZesIkCdmAR%2FLpVN%2Ftm7%2F8Oq4wJ%2Bv%2BeG7HNfUmJtGhfhkPZI1GIvHgprY5b08DEihxAVONaQzRavCA3SzBEGOdRx%2B%2BXtitoXlDDIn5S%2BBjqkAX7Wkm5WsOlJPKFDfloRdvYRDBxOkfsT9AWlT4M0YB3o0fvG086HZvTwuIuh27R9UuCW6DoiJ%2BbOyjE3Z5gB2NNgjZMxD3O%2FBaBOuBw%2BohaK8uHm8YW9VsjGrBl%2FM92ExOvdgY8GCz7goshH6bFqHZsLmMShCT0mIcQOTWTvFW8cyTlS6q7LA9ZZsQaTJmfOH9DU%2Febs2FMFBi9xRwmXrjGyN965&X-Amz-Signature=bf01bc31ab4fcfada50f8d7e99de4359f028eae756f65ca0f2a1a46d9de54f3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
