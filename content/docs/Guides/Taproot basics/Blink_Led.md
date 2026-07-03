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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J7VFD7G%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJGMEQCICjcZ8yPghBlHVxhnnrhesW47TOFfAIyrd29gL62jqXvAiAkUwp%2F6lhQ%2BGk084oA%2Fo104oJBGD12zDMiTI4jFRcb%2Bir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIM4uBZ01DCpWzMtUlzKtwD439gNxm3uLY%2B5Jg3A8zUznJLNf9OgJqsAoG1UCWy%2BqGjpN%2F3hul%2FQUdMMe1mBhbjM7OrSJY2pDAIKRUvii1km%2BOpPOAsmhDBmnNnlw6t0aagUMZOxT7iOw39lY0uEQ17F1yPcJEiszf5X%2BBa9BZoCWhxVKoJv4tR9g349%2BhP0KLRH3iVyqEMlbZ38XQdXPppENPhYoEi%2Bjfnh%2ByqCOQG2u%2BaLlLrkVWvwj4nRJBf%2FyHExYy0EPA1M1v4g9cQtM2hBss2zZ%2FP5HyQLc9Q0VV6yazD3VHgZitHxLHNsQMZmfkKGg%2FxKbzO2bCHcmBwjTtEcypTFGAcQvzKIcI5QtBwmUVUS0RC8WS2CoKZTcbCMD4TbP6zX9s2vkAoOHhjBshWlS2Z77%2Bp1S4FT1X%2FKhbQPhgOWW5qAVujnPi0CaFWkiLrkHaQHFVH4tG1psMiaOUzfFAj%2BrpG7QX9d7qMEeCQEBvyRUtS%2F%2FrzEu%2Fbp92PuxC5kdRkstAXahuoCxrwNZOROXBslhYX%2B%2BNumprEfTU%2B%2F1ZqHqJJdlBy9R4SOkPTZwMbk3NaF1SExLfpY2HZ4cnOS%2F75jH%2BT8W4lWUEbuqq7QUP50EJz%2FfF4BsB8xrTod4cAc%2FzlOiyj22F8l3Qwyrqc0gY6pgEFec48OXPismGFGgVtSzIZ3yJqHppOaubAETHDr6G984plE1EkNxfVGESt83l%2F29pdJg04x7Nw5eh%2BoeiiQuAf1uapTIZ52OhVU0Xc9eAOl%2BuwxnrdpQlZY5vLawEV%2F5C7eC0FYxQKv143NEdX%2Fj%2B4fUZklcm8O4Jj%2BfdgAFx%2FP%2F7G6jP%2FeT04sOaAivWnxfqxGRNWbpfCW2md5KhgwafZVhaoQrMj&X-Amz-Signature=5bf9c6486535e1ab90239e4136095c1455d932081f7c30742a3eb152304d1e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UWKKESY%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCWoiX5fIS%2BPjTQtdonURRVBT6ZY5Zmkdp9zqua%2FFqvswIhALvIL%2Ft0KPyEgOinJLYipE9saasun6kCxe7hvMAcMnKcKv8DCAQQABoMNjM3NDIzMTgzODA1Igz628jUe0%2B%2FD8H%2FU18q3AMZzMmcm6SB3r%2BY%2F%2FCNb6%2FfC2feVZATxnfGZG8Rc8DdD2D1ETrdinb6KdhmAkFJ3JlEHWOXWQAmoe%2Bi1NcfLYVPXlhKS2bIC8ZwdO3Tm4A0blcoDmZggPxFi2MomlRs6QP3spLj3L5JCiMixmippla6Sm0okd04f6YqKpL0P%2FW9%2B78f06tF61k0g8L7W0v3dS8FqI7FVIcpVYIcRDMAXoM%2BkFx2qSXYX6Eq546Q3TA95hKqa5TaBGfw9unGqWgTx66K47IBsZl%2FfDitJAc02p%2FtqRvmjmEJznAv%2BevZUa2iB2udpVUlj2645HhGYj1bCE22jZtKftAQcmpr1uTaVFOK963p5ODALfQjCZr23HjBuA0QpfLEiaendxETTn5r7u6%2B9eGL2ZWMEzTa9ukunCAgmF9DYYr0hMZL4CF%2BvQA6K1NVMPVAf8UN7eOCh6tJslIljq4B04E76k%2FdvXkm%2FKJZSrQki38tE%2FZcNU0NTmFyWNG1kiA8J8sLs1w7RoZIsb%2F%2F1O3qLL4IsuDxwQo2GoF41J4o4Ij55pGGs57A434am6jGmfvmCEyV0Bt6%2F0EQtPSRL2up4OZCS6b4QkhIRy7B47yet5FmBJU2zg5Y8M%2Briqk3j5Rt%2BmaR9InNQzC0vJzSBjqkAR5uvXWfowCbJdzgoaRPam4iq9WP99QY9myFSJOPttXa0%2BLaiy6cjjm5fjJLu2MEj52eaAZBT6nAYk2q1pUpgeP78O2auhQtUw9tZ5Q7Zqhs%2BnWgFivIduscv80JwG6SW2sA6YsonB1dE7pM194%2FljgsBjSh13%2FKYlMmgKnRXwlS3tweAbQTw5BEverSfkLkyXGuPDFyAyVFKnxzMKfAJOiCCE82&X-Amz-Signature=90d526539ed0c954edebdab0b4a5044bd1b4c1e38a75c62e7a965b1bd14ba493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
