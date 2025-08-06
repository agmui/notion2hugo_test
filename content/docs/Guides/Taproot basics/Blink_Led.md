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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PNTW2WX%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCICzEIhAkrxeTNP2okvmnmSxLvuSXefOPERYBb5YdpLQKAiA2z2jguiUk7NRUHVWpJ3Rnx8%2F7p22sNBwto6umOD%2Fugyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMIOt%2FHJpUirk59YctKtwDCEku1n1Mlh5%2F3EIgA9JXT0rbMVUu4DGEqrOvoN%2FvR2y%2FXkwK0xlXYgiLuGySJRrNUXuTyeSV9sK%2FBrgPHgSa3oFDJ7o%2F4I8zjlI8xBJVaP0ZfRQfmACU2Pttk8n4V4lVJPbSkMC%2BqEYXWwWIbKwLC8HU6iw8vhKYLM0s7dl23W8knTZVw5aPGsdaSmI4x7GZkYQf7H5OwsY9MelcIVJMaYk7n9JcKVwJkTyphJUBuTHqc53umpNgG%2BoJhZ%2F6IYQY6IW0NmMHBdq8KYxRo6tGd5zYtVoaKLfZSxn6kN6CUDpvHvHgLBKdV8NNQrB%2B5DqN3yYfnhtW%2F7QtrH6Mppfcfaa4wYGLQv%2Fx61tEPj%2FpOs0BYtXWTrnOUfaGuOekB5Uz4iJmnpt1L9vxiImNmuWREI7jejp2NKoxnQbiTpVfl7biIJ3dZzN%2BVijj0v3AUMc5Wi1u58pSC%2BaDGh9yO7u5O8toYCQ8ZFfLvV%2F4guhfhD8DCb4XdrSR9KrUXew72CanS45BVsRq9Q9JFE8IIn%2FkTwLaUfsh2gaKGFGJ2Tjc5vaxVIgzpFurH1DzKrV229jNxvh7OrWYo%2BYL9cHedE9qdIZZHmjI1c%2BsAHasPVA1tONyMo4IF4dJGtZNKlMw1vDLxAY6pgGXUzvMNw4ihq4bz2aF8rQGZ5h5KCC62nBVKFQHsDn5dGq00NKwmmWdbHLoPa8%2BJ%2BYlArrogKCO183PeM2mupEsfS2eOIICIxKnr7CiHYTwedOuN%2BIHO1Uz%2BhrZqFf6KOMQtCLQ5HzsZvSVwVojrbH5Vm7J%2FdDL3mY9rlFZGkTX24CNcrtrt4h44PEG8B%2Fb1BckczOyxy7MwER2YMbhwTiRK0NRC0Ld&X-Amz-Signature=08a57889c3fc6c682fd5036913cf7125cfbe0117e0ed83bca5385077d7694b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVPDJS3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDi2%2BtrkJBl17uFGlLq2ljODHT%2FtjniDelx5IvEy35YvAIhANLzPC8n%2B7NChQS6WHP0%2F%2Fa58lrd%2FGP6GEvY1%2FnQXMRRKv8DCHAQABoMNjM3NDIzMTgzODA1IgzglGg27dlhno5JbP4q3AMwae54N9geBH2IwYwcYB%2FFING0JWGMZg58isjeL2JAmoJ6d3wDfEFhpN4VPkBhzNmU6bxS2v4qTma8ywcTqK8pHSCnsVMypjqtgHtFRwWV4UzXGz5ujXV1wSsIYDwicJiUZ4%2FdUKFiX4m4MMm740M8wgU%2Fx4Dyee%2BGvxhBdYf62RMmwTrWXa3crAddXieqsl%2F6q7qAsI9sTCtmpEBPtBsiqzxUP4oj0l%2FWt6LMdl8rzH1cpJ6umdX%2Fm2pF1%2BXinOd6O97QK7el6rI1Yl8JVkH0m%2B8JpQgeztrjZVa91HEcerjXDKwW%2B5Ncs5UNsjTzEyG5FaRboekxn21%2Ba3L6imL%2FZK5gareffQMv42vimB%2BpegvuK7avlKjrbCEopNkV9I4owDGzaPA5nAWl4FJHF4b8A8eRYgiqV4xEfeXmu0UY%2FJLfkuEzoWCaRmj9H1kTY%2B1DCaM3KxRr2aY2Vt%2FgB98y3Mqp7kNLqaCahU2AE1RNdCYfvPBR2wa4qILFsBKg33MLugfWI0LLPH4RcbpAvbtDyoSSrv4fFHtRri7JVxbY8iFnAUyosNFl9dPXhUvhyUvYRkMAFF4%2Fke40aGDnUM4pSpjJKjIVbYAyi2F%2BAHJEoHjFOYLlbLbt3D1T3jDN8MvEBjqkAbK7ELtoWrh8UoTTTssISxwKp4pIbUYp2FpldKtPN3ZWeMOZ4%2FnKM1LT3SLeU32OVFbutoa5cOdQw27OYKfDmPDP8w4%2B2KC9psmw5G7om6yfY2XugAgT7nN5%2Fs90hqYVI0miqWpmegoNlI2tsb0eFTZOgUsd8K06uwPiti3ma2jF70so0%2FfeHfETUyzQ83pK2LXyADsSpo05UtIM6BWC0QoLrClz&X-Amz-Signature=9862279dca381a0192d16a9e8fb1c628a38dc8bdd44177050303097db0391c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
