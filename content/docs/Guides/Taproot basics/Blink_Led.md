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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7JKPOCP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8KpJQtTr3olRcplz2nztV%2F2zKbVmOF1bgTidHrQPgjAIhALlQbtYJLydTKR7kMJCWBfON6qC9fOUhXOxk%2FyWZzDWzKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4bNHXEKrgAPuZSbsq3APaCHnEyT%2FUnFzMrh3dyqCGEphmNXWHFiQ13Qm0k8X7vWSj4uSJoQeMdyj28dONQlcCeI0mw8zJGhf3x2Bcx3JRBMVxW3faTG6GBE%2BOmZUp8tlk%2BjZqbtOfS9PM87qRnv64hn900mCnAKiKeKvA6bA5ekWbByqL2sIwdwxyOB6G9TWE2KGlgnPzYPUsGttsMJtdmlJDIEWYPMOaVRhzZegVpaiWEFVKJnvnyGjAqYMQr95vgob%2FkofdZWJnu2Xb%2FpmtKs3tHCLlt3s04yPyIbQW5p8hn5IdBgveN3bvmO6HXEMx0cGUJ8NZ2i5waBDDmad86XaVLVYzyMSerl7eZa%2B0WF8Ff6kkeGUWNg4rp0tnqJ4dDEkqjq1wCCVUU%2FzF9oAkm9VBl9WPDpNqpbjpI3KFuXYUwIXf9foEwFyH4q69RDxbq6CdYIYxePTPeW8bnG9V%2B7aFx8IPs8TU6XMDcujD9IWoqJf5Gn%2BeJlGe7DRRYtNd7404jNxnk%2Fb8bdwbTVhiMIS3i%2F1Z4wJuHD3t1ikdFnny7w372xCDaZz6EGxBUbo6l5sm8NzP2H4Zq7%2FSPQki7a9yAjvhBcRqY6xy4aOmcjwYYbNaVekyFcLc9DHD7LRlj7oJTi3cS7QCeTDxuuPEBjqkAXp0W0JUIFyySSDy0Bf5D4A8t67rE3JDAri%2FG3GWf2bQZtWlMwpmqO2i5T3b3RA1yaAXSVuw5rZrWcgHjSmHSy5Ru0m6uGUzFSNkajfOK4jWrrCbv9qICQBuBU4ZLbHKYWi9tFn0nAO99Qj6Jfdv%2BG97YcEVr0eHG98DvKZH8W6Y72qBJxppivyV9hI4W3scraGNvilv4R9GLCILpkzJVKqTI6FP&X-Amz-Signature=087336efc8c96e855f93031b80d483cfeba9d3fe5755c630c59dcda6f8e52ea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZVG727F%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUGkkw4T5A52cPcqToz6qF%2Bqlgqb6tPQ%2FfBPZgmpPMfAiAmPpBR2e234wZdBQp1jZeC%2Fzah6aZY5R61KYeu%2BphUmSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfRV6EWollTI3k7ZeKtwDJyVSH%2F5sL2cTlTwL%2BtyYC4%2FgKwhaxdj%2FHtL4D%2BJdpE9XBfrSwoPJ8b5EbyE8BpwPM5Q4LzkEn1XxKQQFHv8Fiy67YBuedKCSqFg91WOqt%2FFF%2BU3kFnCP09yZc75f%2Bd5zUHlTidqBj8pb%2FAgRcIPxHRGyYlPrENmXFHxgpxPwnrTjagT2m5DjgW5zfKEMQHx%2BYEuGdvZSu0Bc7WcQaEHvF%2BI9fkkh1tfOFZrz7gUYaRAPOFtSjXBW9bmCBxiOhBHF1ubZtBXJAOjFIQd%2BrCmlRljRAH2qdd4JoWH%2FxLUEH6AFs00rgOyA7FwP058cALCjxNxBs2e3XHh0SEOBmQBXlVdT%2B3yAq570tIc2Q4R%2BaA3S8kbVRkPfLWXEekmvfQUMUxaw6CtOaUgAKY%2BV2jNFs6Nx0NhUl5%2FOZPUX9eBoly7sC0wonImy9K6TtDhNPLJIVQvhYf13Xhf5F7%2FKamdZzmOfoCYCv6fbpdnffhfjJ8NxssntgeU5x5nmkvKlVRFS9ZtQZ2xvPvulwYoi61k%2Bal6kIoirWHaSionfiZGEVGNFbHbO1GdMB5dMPcwTAFfMIbQLYNJTwpZW%2F0CFqA2wJf7VPT0d0Lc8Lo7MDgroPaEiffsThaSfwf8AbEQwyrrjxAY6pgEg9L3Qc%2BXrLreBNbJqAsl23Pq3sGD1Ipj%2F4iSsv0wsAw3rYGeRzmZHURLtgiUlJHkM%2FnAZyMq6PCdjHW2BeKt5e0pDD7vYZTeqjV8opbUtl13GYUT37tAdtLldN59TSUt2k5irSnk9hvVtvFp9B%2BE027%2FKIs5c9Dh7MpeYsXphptbidtmWyjfk%2FOtpITlNwteEgkIgf2d21ivSaYq8ke0Fpo3nP9lU&X-Amz-Signature=5b56007822dff7f31868aed796f8febf5b810f53a957d52422d50943954d655a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
