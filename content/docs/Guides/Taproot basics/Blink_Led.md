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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IL5XSK2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDOPqChwkF0L73mDrILfsOVeOJW%2Fd3Hx9urhUH0vqCcawIhAMKzmTnNSwTvmFKbacFky8UoyvB8Q1Gkc4ZnpiLCI20bKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYWjTnSd5qBxQ2%2FR8q3APwqzaa8VM1EcKlKTambTDIVgAi%2BO3llV5zu4gKgou9582uFsjwE24u9H%2FiTSTQxIUSlsSXsNbgU19VEhPG1tv2Q3bqqikTx0tG9LXVtH9VSUOolln7C26bMrjGK27YTBz0SrPWLHB6IjdMF7zqDXTW%2FZHmE%2FUZ9a%2F2MMC9dm7ZGtlWHPZn1dPsmKYVLL1r6i9LIPi230rAgecK31FfGqC354%2BSMGbmDDkMlrrDxjyloENTY8ZvulWp8%2F%2F%2FTH7foyoA%2BIUAwIAd84Fn56KKmJbkackFTI4ioHhtsKSa8%2FTU%2Bg5V1%2F5dDAW62JyyEPlqcK3UJOpMdr2SThTWCqrcyA9lYK4ICwonkiUv4av60L%2FfuocQapWdfEh8fhLk570Win3vr7ixvcpGn6hau%2FpcfCnxBL5JM2xUVvsZuT4VEcx9EpQBrIPboGTlEuo3TQBduyrqICDfNZv2skdFK0UFSd6KIj72%2FkRi20LQFrx7zzv6y%2FqrE6Dqx23t3a35LcIOYE1PsIi57Ll0vXV7TYmVnAh867HEp71ssNPYBxTty8Hhr0OYw66jrUvwAmmDxGSd6x7fyQ0ch2fWBCEPl7ymzX1W%2FSZyjAxStnT8YTQK2FwXRBLW1bkQadGgL26lKjCg%2B9a9BjqkAUDr9ejyxJKVpyhQqOAhZsZC55ZzUwsMQMb2jq%2F5SEmnUdZRXIPlJ9Hrqd%2BKftMm49OjDNZ5oIxfpp66BOrYRkB9RnX1j%2Fp6ZjdW7qRDUS7HxYOp4hCPAa%2BtS1yBPx%2F2a4FAJ4ATB9%2B%2BjNxmGC3%2BImECZBpNL6kOhMWEohyZsWsQdbN%2BqprHlVb9TiXOxUS7I5wylM1dvIIKNZ%2B4l%2F5qVNfN8trK&X-Amz-Signature=76d7409a9143b09ce29472ae9a5f94db2c07bd8b78458ca77f38fece74e18d41&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU5ZKGJT%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T160919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAby8zuYeA%2FtdFHV2QbuGajY92fLsUnE8bs6qEXatqnPAiATmPsW3p3SAZvw4cRnj4d6TuDzhWEcnrYMJG0s42G2GiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmC9%2BRSNeH2ja0UJpKtwDGMlwJMwNr6zM34WVWL3E2XXf7gS9QOHPod%2BGkb6d1viQHL7ueB6n5A2uPQCRtzk3gAiyA%2BAGD3CjlWochOmLNQN6n9yogQ9ZWokdIUHK%2FuHTOmliejF0DXjeGUcsbsjuf4%2Bx%2F5%2BcY8pSgGQCea0qAJAmzbu%2FGQc5u9qTeFj8FnZDjfeq86%2FPUJQFUK0vq%2Fr2mLcNh1mWeNFT9QN6ZZlfV3YWQCl8fXGwOAfHNxuLJs%2F10V%2BhvCPtlMTr03tlqQaoBgdZI%2FvIl%2Fo9lPwV%2BalzW874uhtbwZ6WbJHgGNWBmMVT2j5Z8lcQm0UzTneWdGA1uDh%2Fiigem1r5sJwhe872GyDDP7tbcb5K8vzleo3%2B4sF1AtyAg%2FJfAwh10%2Bl3NO1f8Gfl6IZ3rKyekDYYnqXJgIjBz1H%2F2kiEU6M00QGm%2BqjJYIrymRjz%2FkHl643qL0SaNXjOXy%2FdENdPjKyvJJaQrG609pc6RbERhlFhUQ9xrRPNqEP6FCuJnczOQpW%2BBqJK1BOxffOnvNJ%2BrNEJvIQ68krsIERwL7MmqBL42VB%2FYbp%2FZ%2FLaWlH34IVqHuD4huHZ8tf7Z7DMfbcxRlUFEwUPoow6JEj6WCKrPDBRpuWSt2dQWBYdNre7Y5l0sB8wmvvWvQY6pgHxr6tUZM87WKiDi06SiZ55ZHIvnOL%2FvK3fTWOaT3CumV9lRqBbv1bZfaDRn92bL5nN5Z5jVC94JMyC4pP4nyKSOst7u3jlfSuuVlKstN5CmJsuvIvTHnS3Ufl2yVM7%2BQR9W7He%2FxRFQ7jQrcauWpVQXSfBvmPJ6O06Gq5OgpSjqm61r9xO8F%2FWBM0dRAzSo2XyLQtrSTt2uS7azXyiQ75pD926NnFb&X-Amz-Signature=7f439e82b2530f8106e11bc8b69d38da97aac50ea527dc4ca4da05d660c0f9d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
