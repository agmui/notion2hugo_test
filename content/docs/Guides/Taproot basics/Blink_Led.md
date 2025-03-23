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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P7SE6XI%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDJ%2FXPBB75kuB4pMxQkGGmhHwcVzGeRKZcwEZPa2KA5zAIhALEFZITH9kgluTATAP77wUuGD7w5aRo6nhDmVQUNPLt7KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbBs74Nk628avbw38q3AOIqLKZokQ3tdB%2FielHWEy0AOy0QHPFXXi4t3eD7bUCKVrrVBL3qctg75nKR%2Bqe82vlLCRcp%2F0SOCylnA6W53aTinyj%2BUGB0%2FrYd%2BCmXQawmbw6XLRrr4qCoVL5KyX360%2BEehRrJBMeP41bit8PJ1Pq%2ByDUKVST5sFa3P%2FdNfXyvDX%2BmPoIJOlB0k7OII7R0DQZoff9GxK28uYoukML0l63bkQMxI2jnE04YnpyL%2F74FdMVMnZityGXzaI%2F2YWa5P21fIwPUskdhAhAZAbw3JfaKaR2eMxCOmCXfzzc7%2Bs0PlHzDBUJZO4b1lxpEetd4kGtv2GCs9yTskXD9BqPGcjGBycnk0JTfDmO36BGM8byOn70b0TXw3%2BSodyqfKqeQkQguNIdLX5229yYOsQkLe9yEFE0n41VR2MFZpS4ZaWOKRWRQcnlTxmTYt1DiMBcySm5zEWQwQXYWeYcqHbbYSYsmkYbGf3nOoJ444aznbvvgoHpUA2ngWeYEyROrvPP9BKT5U9iMmYNj4B59kE0kuRfEGUVO3bRxX14wuMckbsnZ%2BYXt9rd5So0AWODLiG%2F9O0Jislbb1QCrTFa5fB1CSuXT5La5KLa81mfAcZ9mc7n6KfMmBhTfXz%2Fg2okyjCe4%2F2%2BBjqkAams2AiUZsVG8zBAjlP2uMP8VfDCxg9zSJgF0tZWrxDU0ohdEccCwHf7CKFRSNmBr4Nt1m3%2BzA%2FICGH2ZxDNyfbP%2FmTTvVUN97uYrcU%2B6eFHyIWZ%2BIoNCAXcvarSgf9zJHZlS5lVf3zHGzR4MD2WrIMgCAnF32dP%2BKFJ5C5dll9tAObUjXcgCTOM8YwGQmFTw3ocFbBvXj5gf0ee146J7uv4nAcL&X-Amz-Signature=dfdd55345379e71c54c8862df7c78b65a612b709d212cc13395e770d4c99cd51&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G3ZBLL3%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T040926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCGGMY1kZdRnQ%2BHUeOMVPGuP46TcZtR5DwhOMlr%2BBwctAIgTPAUt2wWpwEmxnHcGqC426ntyjMeMe%2FQnBLpGlXw4SoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM29yF3gIBPqMQrU4CrcAwJ5vmmtgJyzUg2qv%2BhP2POTSUEGxpsTKjI0AIf%2BI%2Fm3s2FpEUVHmkKCCQ1KO2%2BsnyyeHwY0B1K%2FHfk9VxT701KJwSWNE%2F9BaUBCAbrbQl0IdC47Jg2y9tRXPQMQ0bxGjN6x8J0uqYjSWX8DTq8H7WvcBNiM2bI4zhdKFzSiV4fguWaMyGg5TQtUJFpL5FFS7lRvBQFhpDajxWrSGw8aDAuIicWaieOFWLvdWZG8o6F6BxGoZNu9ACDFnmaOtYrj%2FnAuKwqf3Aa1crM8oxTUqB%2B5Gmeib2L034EtH0davkY0DOxBoiR7bDr7a3awsjsrbDHzssuVBOga%2BF3wgs7lU5x4DUrU56Pe7jg%2BnQNVDQd8Gkn%2BAlB%2F%2FDG4wmw65h8ZKbGAL4L9jAMcUMhh2S3XNieqMRyxC007ugiJAZtVpyeU3F6RTsLoCn%2B7aUBhpeN%2BwDdhsOprQ7255BSWd0u0jrAcVn17B30nNZTaD19bAu%2Be21HqsnQ2WSc4ZfHRz5VUXBNPh9XQFMcK2W5Ota2RQ%2Fh1HIGxV1UXGRX6sZ462%2BsOwars74fcBOLHgLdVoNoF6JN%2F6YtwJeCGzPb7LAK61zMYa5c827JR5MhYWv54uWqOPk5iJ79dsSbn9iJ%2BMIrj%2Fb4GOqUBFcrPuu5xHyzsO0yxyo2Ra9Di9FBfnSXXeQd2t8CQiDwkNKz%2FxUwVcd1HaRSNqki6H8dFP49rQ4r%2BuCzQuBznwHzDS3Xnxrb61tyhnaCsDMVFAyb8Qb78oxSvZlGcDfYYrxNwLA%2FDEyc2QB73Zb5XTTpD99cKNr%2BoAR6FmHWUq3hYG9DHBPEr1XjwkjOvAUQN052CGdsBOeYh79u9zds%2F5kx5anvL&X-Amz-Signature=0be9d2b3a7548959ab74bb2e09412f41c8e33ccfc0199312ac9097c43734a9da&X-Amz-SignedHeaders=host&x-id=GetObject)

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
