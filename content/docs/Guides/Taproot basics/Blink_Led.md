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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7KLU4H%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpVhB0sKc4G7ZZAsix433UdJ2MH8umq%2B4THpMcOp%2BMmwIhAM5WcnTB3SdQ2D5WVB1vd57YhG4jL7M7HQAHD6tGZWukKv8DCHAQABoMNjM3NDIzMTgzODA1IgyRk0erEXktDJ85V8Yq3AMH4bMydZs%2FUlHWRErdFLF7Zm%2F%2FY2GHiMIfAUpuIdJiBrtEPozTg1nDgHvBk2t7%2FsxEBsxM0t5RspxUi%2BIGnwbxsVlMFaCxwtg9lj1IS8OM2fN6D0rM619mRcYtHPJ98HXUaElwE7sBOWUz294QDbvcJkC4rruXsNpI3SRdWYQe2Zvt4MRoZMe7IyG9LEe9nVdhgnpVUmEopEK9RSmEKq014OtfnT0y0dm0bHkS4kaLzRl3GUOAoIwLreT7NBuO3YucNc9Jj6yguLBKjvjhtIsIU0tpFhijkKbI%2BnRomWETlE%2BNLINR1BbqfVlVfMidBIQbLpU5z6ijqmh8yB%2Fi6b9YDQhZ34O%2BUVxZVb3LAnWwDxGO8EnW7WmL3kKko%2B1pS1SEXxP6mXYFDRODdeXnY44V4dQzMKCDHOZRKosTp9H%2B05iNLrOiEA3x18nwa%2BP%2F8mNiDCm5LvaePGnu2a5TSCvXS47KqTg8E44Fe35EBRhoU8xa%2FfpvNsN9nsmrdsOPYbJa9%2BUv%2BQzGeBV0%2FBogCh3CRvUaGUuFWeAjJxdtAHhKuoKU60cXPhVskm47TAWBMmIgi6odcrKHKL9xCYJUmOysyKZtyesS01UUF0NM%2FUKGbAEBbrWO7YIUAUPABDDo94fABjqkAUPVbYWxZ3i0fyvOQHRitQkv9ZBk4qgfezTm5bXhsIcSA3DDnN1kngm7AkWFtVzGQay%2B586eReSf9vGgj9qBbl3YlpHahRhGyN1U2WSr6KRTzjjjINR%2FkMjDpGQS46eJCl276W73%2FxpiXXxHOw7CwdDYQaARSUE8cd05pnEnGPMMXrCGt0NM4%2BbRVVMYyi5gu0KQw8vv2m7lFKjElvjDuMUN4pQ%2F&X-Amz-Signature=91a6078f6f10de85d2e407f9e7b1cd57a2582bad5ca2fbde3df116d4a933b1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RUKNTGT%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T081121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNwY2K4Rp%2F7294DpxJllOU%2B65pzjrTD9zn5SNhjMYO1AIhAIZzWeWKqwqqUh0iIZ8YMzkcX9pz3aMHeRKcWgSezi3WKv8DCHAQABoMNjM3NDIzMTgzODA1IgwWGN79QoNCBn0uCMAq3APOwflyyggNpoT7L1dwjAuXEiYDqKW7MQBIvdJsRodtUO7ccXdC%2B0pScVVIgiC%2Fu01ybXYYxEznwlR0zuE2sOu9d%2BHO3apMi2diyhPYAFFveRj7H4luFxLE9ESWvAS0hHS2yrrHXmon99ZKJY1bGomGjEA3IxX3RYdnaj%2FR3tNaVKxdiF9LhziGbMXAzRWeflb%2B34oj7Ak%2BeOQ8fVz0FKqsDDcm2%2FG0n%2BE5PGElvZjHDk%2FhlAJfjmMt39ycHqEUZ8PFrpElxlkhpTrpEzR4gCxPqduERsHqwJZ5yZ4iTPDrwLN2g7ijWPaJN5CevQ0ScLwEGtZoMSKzIWLlUJzbVO1iPZ23pjYON%2Fd5ZT8KciYMcdLLAwWLWFSppLA3OiEGiBCcjRRBolnWjb8is%2BAnYRWxvUVDVpQA8EAOqCJHFVILPVyaM8NWHsBzCJbd7MudAR%2F4G7LMSAUYwc2fI5PL3PsRIY16JcU6FrX5rIsKKMxNMhf4BTx689%2F3nN0SVfk%2FGPXNE3t0TYFuzff%2BykHConz09oH6bLGGfHe8X2OHIuPaqiYjMnt0oRDKXweY%2BB7GA7Y3jcDJitEe7de%2BuOyVj94LI5eiFWgykbZ1ETerJxQfbTlo9YpyIrEDvMDX4zCB94fABjqkAd1XiFaiz96sePRV76RDQugEnpWivQSP2mFBJfQWgKgT%2FyNZn6kWzOHMdmksAFW1o0HfjvT4Kv3CN8o%2FvUQ%2B1d7U8RQR4Hy7hH3PZjogUPqNMrYPrPKunVqcZ1fmzA2hnfIs4u%2FrTkosLc2xCu2I6nxASe7tiLlZg77XnA%2FGfqWmd3J%2BbE%2BjMd838iHIoq%2F5266l0cjIu7gxFPtUUXZ13XbZkU7j&X-Amz-Signature=33f23ecc01a6ffd51d5a8aa34bd0884f2ba3be0fb1777c00109025b81871cf67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
