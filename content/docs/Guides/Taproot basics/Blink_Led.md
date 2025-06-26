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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X767LGI%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDuaQcSzCj%2Fkza45a2wuoU0LC%2BMKW2cO6MIUrCY%2BRUD6wIgIgMhMnvvmATDdygP0iWwIiyrVLvGd%2BY1yZVgKFgsCQAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAouvPK6QAAbYK9yuSrcA702UF3GF7wrXRIZe2OFqUKZFWo9Od%2FeCNtIVN1VudbZ%2F9Ukl1B%2BPwkpsT7dO4bHsR%2FmnB%2FDkIw4FVFXBvxxrrjH010m4owojde0wQ2P%2BPCGGl7D%2BpAE2CSe%2BSYyMgVnU9vzwrdHBvGW3HXo0MKZtgGLJ6slZ%2FU%2F8ZZbS%2FhF9QWSO46uSk0Q7rS1Pp0eJdDyOJaHLztj5wWfPLbTPyat5FM0sfJJuEWxAoZ80dqcLSiKIvvTMQkUQy0e%2BbznWQi2pGvCsSopezHwW7akc6oksSnbcM62CnEMvy3H7874sSYPla127VGZTACCwnrewLrGwXCtDSLStAtQGCcdcEiZp7RRGxmrU6Nmob9OrOjltZ7j6jppDkr7R7xoCl129us9Mf2GXYnXpuPM6V0NybC0DbIYoAR%2FOvepR6xwJQdbncsyckRAQLZf2%2BBhVgC4F0IHX5novd8jG%2BM%2FM8%2BtDa6vLjTtVTOt8ndjHy9X%2BqcN9iktBEAMibjtyFiCUOSke%2BMCxgU2P3b1Z5X59WtQBC3I2m3Ze4BfNXhBTElW7nWt6zf8K6407F7ntPFenz324P%2BmbsSyTOJmX4LoxNOSoJwj1K0DOiaaLfQFaQjm2QBpkqTWvfnTXxvVWNaeWDVUMKDB9MIGOqUBy7GN7%2FqjFBVAATBQCKjlYAJCNnnk5PZabk5wa3DUsT6pgkajZf98SQpewfX0yEmqC5d4awyeW3hyTvwgvx8d%2FM%2Bc9IU1IJnq7QhPK4yvY1tX8SQTdypXQXS44MSVWmtcmKzF3H6IfdIywPk7w0U5%2FeTLnuNyvkDOQmQ8yuzSBMtRKbPYXF35hjHuIx0QGNEor9zrUvTva2O4Vk7eYI%2BImyOEoSr8&X-Amz-Signature=2b20a12296c657464961de2d47296aad5f87d709e0358f9dcbcab0139b569137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3QUAFTH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHFCfSXAt0ddMnDeQksEh9zjr6BemkaWxBfNDSKBCp1wAiAjOiysQ0Wp%2FynC3oW90XEoT3BLjC6UqOazS%2B5Nf3cVgyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMmWDytmB0zIeaiDZIKtwDBKYLulK4Xp306Bg1tF0m2yTpKsLlEMz7REtz%2F9J78gWSkxkW2hyYTDS8RTH7t%2FLosG9w7CMg3Zn%2BcmLsal1V%2FF5N5LTHqteeLTYWzE8m5hA1a%2BUh8iyX6iDrLLmfciBVO5yAClnQVieRUWQbrSUtzGTvjK3KwR37fGZMuxW1LzNF3bFY7XKLitI8NmdOed47DpSgkSzuQp0lpyF7Xo%2Fifps9ZuBoraQj1%2FmF86dwllVSPYFRTxpUBYj3phPj6pQYMpY7TPnRUwVb27KqayIfuqxoXtCt9YKnABChklmNsA3RjInuQc8823sUFdoVcswbngRAboY41H%2BSq7Vx%2BTqm8JjToTL0k%2BBvJVAw7bBL90olo2HKLxfhlLjHdK6zgtwOatHtWbPoqJyzssVKR0OxJ9sXSy0tzr44QrmQdmjVw2S1IbAoyReMPEP3n%2BuyJosaeNcwwGi31k8G7i8XCc9vEUemDnwCEXDdRVM9kt7IqIBrrsW8zQ%2FdnEa5GOVE%2BXrq9jcNIW7qulHk7D69BYN3rJ8FfCoJqWB6zfc5d4VzgdBPvQw6yHunJeRZ%2BhG9ySDxeib6SrFx%2BgCfiMsRqMhiYaV%2BTULEVDaAF1FAMDdks4JisGZCr%2FYCdu5P81gw1sH0wgY6pgEAa6zUBD7PE4GHf10H8r18XPYFNXwqrxIeTOXCy5nDwQA8jkoX0HsJgB5eNhnInmCCNk8qkEqKqAZNyewyWVqfbP5MdqjsLgl6wLcKObqLUT4SJsk5CK7tvuyJbkKkSbSFTYVO%2B0bi4nzZRLlaxh7H8iMq8YFcYEsM5OYOKUeG%2FB9TFzTVADoFeglYeB1ivIoOZK%2BXhFIGlUzkHBPOzu9JL0Z1BKZX&X-Amz-Signature=b89ec4f11c574a4dacdbea8902ef569f7db39fc86bfcd3f1e1cc886856c8c452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
