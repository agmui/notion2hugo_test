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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ZAN5WU%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIFXvpaPCYvsWkgoimbvlfsQByuMrEYZzVG%2B8hSkhLYYnAiBwxhbqbE0tQxE2mfxE2YevS6m719YltdHrSkAcxLNNIyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKjZGQ0bmxTlIhzV%2BKtwD2aU5tIUm5CdNZL1CteKOF4tSJk8Al34G3FrvX6C5nIq7OB8aZL3M1Bx9cHqe1AiT2y9ZVVer03r6SiQkQtUju1JKSPH14kmqjTYxM176PIf%2FvQ5RDvBzt8D2m8G6k22p1aRaXhCl8JzJ%2Bfm97qBOfEbJglrKr3kRv0qL4kVx%2FYAUfRM6RwK2BSNVTYQMZ3L4AmiA65NW6kCDiA3jwZhX7M2Ot1tTMY5DdWUw0C%2F4lde1WTKIJBLfqYvLNdK1%2FXHwB8fnCL4E8DEyvTlLVObL6JqNc3Omcs0un9QyKPDufQk9kHpm6tY6bYO2ZbFyUc%2BxxAm5%2Fgknykl9ssQPld%2BQYcm0RMeK7oqDiN1olwuun9ji8Zp2jzK3qZ%2Bjvn7ytkD4kV7IeXEPVOlIW0LJ0EbrG0Vo4Av2Q%2FHdXKaf%2Bbl044vony1dZFaesXZF9GGsoGi5wH3qNDhRPCijq9WQmQCcZ6zraE0gAC03h%2FAgXaNJesEhX36vNm9uitowQRt%2BKCsUvpNjFe6WX1%2FEq2VbwzqbdOw8KC%2F9%2Bxtdb0UrIhg%2Bzk7ju5%2Bu4SCu6c6DtvCUrRZ40ARanpfIyAFvC%2Fcm51gLSApGWOQnJ74SuKxDU3Uf6SmyzVc8%2B3mvrx%2FkQ7IwtbGmwAY6pgGNAqSvbLRru5CEfxs1i4i9o4YTnXIk8CD1x80RvQLf5%2F8jWchfKsS7qmzEsPHlYwlhX4DzxDaCXQECQdYlCqs70smvv7Ba1UyhC60oigkb%2FMbqZ6XJ53PGapr63Uopuf2JdFUapRNy%2FVq3g8BWNFjW%2F1cCcilX4VIArTMMZdC5SlZiWiDEQ2De6Y2yjYwJDreIgXQsG3pn2cZzh018jYCciQ%2BzyB40&X-Amz-Signature=8b25d1b9219d0e9f7d5bb50c45989525d4cee32ea04c542d6601a5c54cc1d70d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MGMQ6K2%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICjxvU7iypSQ1q5c4vmBTL4g9HYTxgM2pzJNeTusgOgUAiEAxKQfR7e%2FB6vBRvG0LzxS%2FLntkZJt75h1H6GmehUNoDAqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFt6cURH%2F1PozBOJmSrcA5j%2FIXTUcbTvKPZ%2BZGXQkNr0H5LUnOZUQrjdLrOTQcQmjOHpAAXQ0MN6pDSfKMHEeTX9tOu%2FpMsxYo%2BRPYHN9j44c4Ybio4wVvaPcVjD585%2Bs9rZ7IOfY2O4Cumwe059FkVIb5q5CmQsLmp4KkEQmdzTdszrOc%2BGPTTmJvGW%2F2S80vX8AO3t%2FWuRswTcZoYK7PW0terW4OXfN1L9dO5mRC85jTNVMqrEhb8QHCjN8CTMleIi6hzFYQPmL9e5yUx6tCNmtVI3HGVC27q8foO9TYTwNvr074EV3Z%2B3IpyakYF2FEJsh84t1k5m3RnGsOuhAJksOV2AIPR0hlaY%2FPMGFv8t%2FeVLcOsyKMWicbaTxgPQKJLg8NSTOk15BjJB0vugb86psYvL0nEZWp1iX8XgE3Y5JwBf6mdI%2F6SLX%2FLU2IurlY%2BO5aTktYRSST2xXGMlnMauM5lM6ry26fjY1HId3Oi%2FYnO%2FiCZC8aiNHUxIsqYm6xdZmdf16Z%2FoRZb5bJioZjshbUDFvXCJPMFaqqKMdg4klMvgS6zMkdn1GyzthnckFv17mYAW%2FcHXOYiZ54%2BylZXDWEvrWm5BYw9mGUt%2BhdHBiEaur1JEIbeQ0pk1GJ8AbLsmGvI2acdEh516MIaxpsAGOqUBPTBPdSWHKhCQdWUTlZgHXx%2BtRG1ZySE67YW5%2BmBamDCzJS%2BOMyxdtFs1hMyJQjwTgs6jpYJfLegcNr5xiCEsLR1UfpIw4eUxvF44%2FSjKmscuF6JPhTTNcTXc0bAuCkWa1AM%2FxwE%2Fg7%2BU3%2FXTwmpH9mlkJ13Yersrax4RgKE7mZfkxfoP%2BNOdVYHhE3TCnbvfNd%2FXaux5MHCCtTIlfG0aEQ8rgl6f&X-Amz-Signature=a5b1de5a66fdb0ac70fa2cc2afb156a593156fd1b35db03951dd37123bf8a930&X-Amz-SignedHeaders=host&x-id=GetObject)

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
