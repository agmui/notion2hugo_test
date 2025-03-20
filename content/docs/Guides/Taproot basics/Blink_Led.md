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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMU6OGQV%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDjNJ6xfiMwMA9uk8tBgs6BEjhZVhCvwdbrJtcyI3nc2wIhAJEymHcZyUFmid0vhUXdsqdnJmPjAeHKmKBnTpHUIlGvKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZWuQsNzxnE7janikq3APSL9%2BPofKzm0G8GNFMHt5UPrWDNpb4vauaslywKiGLjYkcCk9nqqO9mIv3bEImfPmPHB4NRpJPBPeBJucgu%2FB%2FftAsSWINirVoOmfC5CsePXMhUXnZCT%2BsBbyRkAjetW%2BQdD1GnCe013whX%2BNzz8JCS6tOBCoRoFFlKI1vIC2OJxYfp87G5d4tcpImufVYiXw1di5YNIujgNzQjQRbGmFmRrwGD4Mfk0N1AebOS3rgrl0881TQxU02dSc60pQ%2F3VFSLFdXFOtmyMU1cIfhCpYR9h2sYQW22in77gDicBrefPInjM%2FuuMZeaCmC6e02Q9GTnsYwwYFdiZbbjCWINC8RdxAgz6XAHv%2FN7iE09OGhlKZ7E5L3fgEWgJKR7rdfpJxDTXMkvwzheRo3w24AoKY2%2BdsPyeFx%2BxT3y2QIuf7J9RYmCQEhQftsHCVeSp9W2eK1GplM%2BEBfdodmJO2VqvlkBuXTQFg0Bg2TzLFmeBSfGp6JsU0P6xLtd2i%2B1dRMVVE4sUy%2BbG8eOokKEYkPobooa%2FE8WAFuIBFZvVOr7qb3K6pB57BXKoQQCKZTbnNRjFkveUnfDep09VY0%2BX9qfRBp6AumSIr7z49qgs6Xab5G9qTMQiUSae0cEE6FGjDDhPG%2BBjqkASrPiA%2FAHKf6cva3IumKaiiFdzQ0r0Ex4tyIgux%2B%2F6cfAUzpo3tb98vMYM%2BhpAHmfppKGNVJfaOxu%2FV8hrEx00RDCkElE3geK0o51hd5XYuW5Coi7ZfzdcBG%2FlljUlAE4P50saCCYvSSaCumM%2BKdBmESEgihW8uY2oeItnn2M3Yg%2FRMsZN3i%2FVwDgZcLMiT0gzt42CcZKnWC2xNBaBKjJvUGNBH7&X-Amz-Signature=8a796c4449f2f926cd0c9ece424ebba204135b6650ec4311c24ed9dfc6d90d47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJ2ME4Q%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFOEXXzrnLcDIS%2F0DZP1UHeIMOINg7LlOvOHqocW7XCoAiAZvRbz9oP5MwoHRGjJHWtpiJRb53sJglORbNRVSl0MiCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQcVAErCb2Dk2OWTbKtwDt0wO%2BJL8BEww34Q7oz6uWIYOZFLcEPa7EcR7cLERoyK0iiShvDikPqUsSYLztADkV6toClIxF3Gxn9aTYSfaBDS4DRyYXAB1K6GQyUIJ%2BipYtRpoJYCVc8tSbw4z9t2qD%2BY8eNhhw4WkkbSXOHyVf%2FE7hKmeuFgTMukFQ4lqEVgYz0L99m4BmpVpPCC6SAlkaqM%2FNt7HPQXX4J4XFL%2FX%2BQ7GEoeEmQObLshW1V9G7hH%2FeTRwlczP0kVA%2FSDZmYQzDU80Fq8TrjeUP0AvtyqKTgh9PRTIjYAHzm89joPDBjebVacifREQSNI0yfdGj1xjCScbLax0RVnm3Nv4yE7SelTHk2TDJx3BIQw8ytLhPhl1dOm7mCyomNPx2cKwxIxFC4S2zl8xY5dEBtVCqak6EC3lYF61ngR%2FQgzkKDWGAf8YqNL6jLnG0bb0hbiTkRPEB%2BkaEH%2FqfDkwiDF8d691zSQ6Ok6q2%2FsDdJKbQVjXjRo88MzZbcSEX2OMNHsZjhVUwhsMwFh8w2hFcLmNROhtvH521dIYjPxdt0UThA8LDliEaaY59kG6PEBMkVMu2ARI%2FXwy6Hwds9lVG7Sa4sw3DSELQLBaif9BR6Jq37stJiuRmjWKrVdyTCbAftMwt4TxvgY6pgFQViMAwNWWPWyivboHlmkeJ1BJ08AqngW%2BILKYiPT9qnvagLvCrAoXo9njM5dnlpl9MbnElkMQFWCZZPVZ6lobjCqUWKxylLupLpKXqMKdS%2BfoQqwAx9SE5zvBXnp%2F13hzFxmBaFtvpW49IymoIB5qsuMvMw0zhzFn6Hn2iITqzNyo5mDeCr8aE%2B2h7Au1%2F86nywr6rbkvG9uig3TyPbM22FCAqFV%2B&X-Amz-Signature=5548eed49628aacdf7d3d17d63da1993772a25b6250ab3d68d23952a797dc24e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
