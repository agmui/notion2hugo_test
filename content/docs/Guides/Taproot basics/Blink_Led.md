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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XTZLX5O%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8ZNa0WSaVG8fWSpueuXx9KjRLGprbv73dM9Knw2pO1AiBOUR6z9U52d7G3fv5CrZ%2BMwjhaxGtKGWW4AOUqH6BgcCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4d3TD4%2FmWMCs3NX7KtwD6tM%2BvbLh%2BnxaqvDyjlksQZFg2zGfywgswglvFbxzRFYTCeLXEDComLGEnOZJ0fLlanlMUPssLBXL3MX0VJ%2Fe9k%2Fe44dtLtYjcCAbS3rArzi8yurALPXL5bvQSdmhNBeihP0Okt6OJCe1A5auNFscfwpKKE9IE9C%2FrOkth2jC2lvB2kSsnAxKQfTV0v6lYAW7wib%2By7OUzLkclMFNKLi7L86APgAE1RuPy2rLfwx6cvfivDFbGwta6k7Hsme1EpIkLijRgEIQzLiZWFNW%2Bcm%2FSBM4%2BQS5G6ijBy7hz%2BQGKtm244uARuQqshVL52ea0AX5904NMI4zWXO6qfio8rgT1OrR%2FELxQhxh4pF9ew9EWF1GM%2BFkOk%2FK5eduJdPDUz3LSHc94m%2BFdyTlmB5nB6GIEwHWo3YsDFMDmvefSkbCYbJb9MxRwQdrV1qmJLaV9V19JyGJFFbLyeCUWpAILkJSxagxkQW9rNDj9vvAuyq8peNW439BrfoUczL3qFwQswqIip9ekffsAuwUBcQUUZ4GdAV3kXJRXNYFkF%2BpecCad%2BjBUHqz6dStUBl3A5cK3DBXRrLXRe6hK3XaMFzXhPACnPmrJlYeARoSha2g%2F9ftoQICamZCX5aZZiW5wQ4wpsvNwgY6pgHfDJMi3AZR47n%2BYm%2BvsH6dw276hbE6ZcEcU7wfiB21eLQP9RyXTTQgFzsdfdk0w%2FIADFKgnfPv5ku7oPEbDwr%2FNgRnMTCVs%2Bdl5BdVGrOnUntpzAw7Ua4YwmpA1klBrkYmPR1F4oD4lljq2MA5AjnUPRkLhsAz5QefxFqve2cYBhtaYS58SA1z8M0581DFXHvLkOA7DDptGhSdOCxOULiuPpWTcIRh&X-Amz-Signature=31921c57ecaedfa0a2487b4e0b1a0baac2f75854bd8996a949f2748a1bba8504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJNYH5LX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBmOEQ8io9y2nNfzg7LQ9RACKqSQ1DGPCfjmYlqIDkpVAiEAmxoEkdlPOyyMUzsagXZjIUseDgfhOJuULJ472ClkgWQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHR%2FaZAq4A3Wd4HuKircA3SrItqsFk2nwFMsNThGt7V1eQvwi9zuqqwuHaftWoSC57XkwW1uMCueDdGKCAelqYX7Sw56aUMKiK8Uwze%2BdkmHuJOlJQPQabM93JF2kB2TVBwodqWISXWE9VaI76HWwnym5GQJp8YJm2zD%2BG9ayZxlV6XRxUt1r5yAYXAprKTmyrPcAhB%2B1qrCSMhWhNkQa0ltpJiom%2B0%2FUIaS%2BOEjdmmCQkrwqfPjMdJhM8rY5p%2BvFIYmSHgJBPA5IFPkhyNQQZoVMdrT17FiSpeSC84rEO5T%2FizXI83QjkxVywwUq66ZdKB9NnoioO8vHCBPLDGA0dQG9KTqTPIyBHKFplhg6iCk7LxGxpVU3d%2Fj8cLeME7MZd3lS3YRZbXrvPdTfXNLMaHQz9yLSNTBjr%2FOmVRvAgmMF49WOPx6XC4c37UzZ4Dr5DC7gX54oxxiRaZEwuFMRYVXulVTyOqFCfir5qqML73dC2PAht53crpV1e7JasBSyrFzPfeNrthK3A7Xzbtz%2BXKIoZzjmuasyfnRHMQ8YC8FfhQOwuY%2Bn7qDUIRsTBiV1kvulLs01n0b0iI8oNpJP%2F2%2BkIrkJG573eUnBIdvkBeRTJl6meCmw8UUQJDsnMy5wqZxvHVb3xYC4dd0MOHLzcIGOqUBhxFmgSr9WdfsBmOJHM9kbRwbNEljBbFnItfE7b1m8b5PHeWhu15xN%2F2EB%2FRzMWDiJjaTgxrQggDJpYGHp8MTajkonPk6WzxrHBdK6y7hOXiN%2FcXqluTi8miEA6WxzcZ2ZrM1uFa6%2BmVM0IkPDOkaW5uKD3aBGAkDaHrlzuZax0c4SH2T1F1MCyYygoWyD%2BqyTkU3m71r15%2B25oyKsY%2BCQv9lUZo4&X-Amz-Signature=383a066cee2fc3f1010a2a8fa695005571aded1c4b20a1774f4f1c846ec5a513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
