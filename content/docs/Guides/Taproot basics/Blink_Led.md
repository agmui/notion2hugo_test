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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAXQCDSX%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBOddw9DWJqyrindZD3ctGQKBCnJ0cu2UBolUcJ40ZZWAiByy%2FVqerxOYZy341A%2BFqnIBdjVmNVHXRDlk%2B2qVdWB8CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEBAAZmWGdWMx2t0WKtwDz6VAdDHOLl%2BzOZx46ggLixX2nUza6o0360YSlpZhxoGtfcZJNNUzN70x533RGPdvf4gY4vzecayZ5je8UG6YSIc1H1ChUw9SdGHjRGQEPdmEX71krEcccz%2B3gusqNhrteNb5xAQtEflVkRd0PVVudmiui5EGy6%2BDR89KWqkF2OkXiVkasAwFXiVfEyepPO9ilntnjvyyBK4NT%2BrzT9IXuQ19dxgDnwJFHdga9MM%2BmU2babKd1luZruTTTtTkO%2F%2BCDYNlPLspLnYI%2FkIe%2FLQOERBmUCcRWcCTtBmL1KYW%2FM7v0lybDau3ekhGiJJ%2BtptoVTyo7%2Fvu9ShI%2FNU32vxo1ZA0drAqFJYSpDpyoX3ty%2FadvlPYlO7i0pGX2v%2BYKC5w450SG0Qvpv2P7llO6xsCpE1CZ%2FW2%2F6D7lEnWD%2B%2BtiKeRoG8iXVZz1uN4xqqCmYCXpgvJA9A%2BQoWZl9Y9JsXBd98d7YqgqyPpO8vuo1upJEBCq8zE0sUugKRrj4gZ%2BG61AaHZV666bMmeeCdRZRKoVpHhY1OgMf0D%2BKtnrmiqyWmhW6OLOLzYOOVJWM%2FMQz1GYBhpkEPY%2FMHkklMnNI9DvVU%2FYlgMRm1asqySvHyhe03XeYRhzIJFxNf8KsQwppCcvQY6pgEVreRKTNoG84C5oCu7sOda0fAT1xtj5RUVeTN0%2Fr3DyXrz9iLLTRH%2FrscawF9POXxvlJ4hmIQLGLOD2LFu088wL3S1FK2Xb%2BCn7QNnFoRs8IwIfSpxzBnSU7xZeOSNnrnc%2BOczieHh4MtuV2F6Us3YqUNmJRjEAcy1FsvFypydxSftg%2BHVvB6BIGcAkZe%2Bu7dU0D2yWl3SMSxowyJJiSi%2BBsP7gKyC&X-Amz-Signature=7826ee766fb4776e8fd8166b92fc2cb78c0a7bd7a3c9ef2372082f7a6aac362c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXO3RJRP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEeA2X1AQ7korNToPIlOcCjeH58FvCPMz9e59FYwoBb2AiArIJr4IhG4O8NwmDpkI2p6vSvyYSIw16Vm9jXAD4u1JSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZCiGr6wUPdv7fnl6KtwD58Y9t%2FnwWOr1RqCldPxqq%2B2EOKJsGFISIg7zKA6TFxCUBn7HwA0se2%2B2DqppapG8Q88M%2FZyRefSuX%2BstbH6uLrTs770ENA5JiZbprg7%2FDNJ4dW5J6N91%2F9REWQkK9eCAdiDm6vUyrykJZM8ZnmgB1p1cgk0jHuVcE1xtf4llTdMKc0vvcot7bPce%2FIlRnSwFgdlSHh7c5JC5YZB8mtpzcRObe%2FEb83CafHTraDA2QL07rjyfoRh2iaYdX0W1YwIzarCdV8%2FmRSUnDw5XciS7T%2Fqa3LjKHmBbUjTT12eJqlQM5miYjcSE9xCOUwYq7L8K4aYad1aS1mTODioeMTwYtLjq9X2ctTimWa21kNJW3s84wYMjMjwjJyIpNBbolgpANz93Hq0XeRSQLBmnPI%2B%2Fl7puB%2FVqyVxPtahlyWyOvICRNIK79OAb3pRm1I9c1%2FozLJZAwtnxEnyn00ZInrdqPiNUHUARTSRahpeAVQ0gaaJthEc6IERT9CRLRJTnfjZPZFbFmp5c7stTv8onMz5jpihmCkHzA4zcVeAdJiipJbsy9EJ3FPNdQGzc%2BbNct92QzcWAxUm%2F367nusTZVzjKigXb0EmneZYDHO%2Fu2W5shWI3oUqZV64Jc%2Fds5RIwtZCcvQY6pgGLzOZa3FnE4hcN2a3%2FIhvHrcxgDaRhie42n5GZwjJCPX%2BabEkkTgsHUGdTfNUKBkWxjNjyR5MmCgFsBHteKKWnnPt8Ne3MNPJIWbcTM0XIDaH2Q6gtGkfcyWVzjbJbO0pHPvxEpGfDrr3KVLq%2FfTaAdZs1uY92N%2FTFOBKGT4CsEHvb1CNADsJPQ%2FFgZsisnSKjHsahWpaE20DkeZqUnxA8U2V%2FSJu0&X-Amz-Signature=c766b673ed829fa87d6a7f653964f326da34899723fd8bec46ed394d8c9e4f26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
