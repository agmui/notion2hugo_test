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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEHOFO6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQbhnQiz4zCXH1F9a0B7WDC8Nu3B1jpY8gRHQAt1hQGAIhAMWKJG74Ve5BKdeYjQV02AOQAlpP1ipM5p%2FEMbpTc0AQKv8DCBoQABoMNjM3NDIzMTgzODA1Igw9r4v7EMzHN4qM0s8q3APjvWtZcPAz3PqkZEkFIFiGjX8XFhsBfgWAWk58LPBEE2Z2aFFHupY8cSKxdFPXc8%2Fso2QQT4rCWuv%2F3Z19kf5Do82eUeAWx5kvgHM0vHJYimLz1%2FaacajyC2Y7ghUEoZ7ON3rOHt%2FkECwdCWd27ofaRggdohDeqrJzjxn6a0vybe2xGgyLt3TJYvCERv27v%2BapTbOG%2BbB1Fo0D0a8Es3msrPyYeJ77XJldytbLqvz%2BMs1B8AxBDZdpfBppWeyGhwJoGrkD09oz8UF29%2B6h6zpxTwd7ymi%2Bw76sl3QH8Lx%2Bsgo2D0OjrDf8t0gpQqC7b7KBhbpfQwIlvbxf88EsTuFhtWN84WOLkH7T%2FTQ4vPm0TXy2GJ44xq9c5H%2FKm4PfxqGTdPWSXtQyow9F6UWD7l4ybyhTup1e9RYQ85wWZ0ewczqYEs7wYXDiyNkX7u8SwPxjCBLQXOoXWksG4Gqr9dSOIr4z1kCrlKn9GuYUURwvm9aolXzhEFBGUQSXzldTGt2CK7iQMTAwQo4NvF5kQYVdJ5zP4BkWDHMdNn3U4kn6t%2BG0bGWOm8613RgNdBO6yT6pkBiXoN2vKRQ2llLTYHEOwP8X%2B00F%2FjhCh86AZDzansReq8InMuI5ACu5vzCDhKK%2BBjqkAWDmsyNW4djIMPnLLf5nHOOmmoFGSQdCwEcDzk%2FZ7d0GxOuVjzt%2B8vyjGaufRscmVdcfEoJhBFuxNxrDhn7tWToXBxBVCBETb9kiN%2B%2BK1bVcqpLJY%2BsYdJ2%2B9NbwaDSTqcwkMmkNbrT%2FUl6vIkkT2nKHOt%2BXbxj1CUK5mF8RrH1m1Ckkd4qAiaPeXn4nUayBiQvg2Yp8Ilb7fUvpkcsLuQJfzlWx&X-Amz-Signature=dc3549b403d6a614aaa8a0d72985fa31cf74680d556a154f934a9fb0d905de47&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVV2YE6F%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUE8Vxt3cc%2F3Jgx1AynO%2Fi0OZJMx99vajHe0WXk3%2FIdAiA0ibgEuCyu5bWcAwaNNC2JjasqAd7a%2F5bZ1xRdKQrmEir%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMW8ZL2cvNVeWOV0faKtwD%2BRjLrcjZxFP3KGWv0DAKbw%2BL7NWqXoDzftXRmqWo08cXWa7x3JJuCLPeal%2BJkUyIs%2FzR6N4e8%2B%2Bk84PjfCDeV2%2BsO9RAHn8CYy%2F2rS3nAuuO6Tg%2FoJX%2F4Lf%2Bdevicwu9IVp3LeuhkMSUJ9NoEhXNs9Ar3Ubt15ymaPjl2Cr6k01S67T0J%2FSirToIZD2HdYFcJoHdftFakspWX0Z4mveqm4DLJqzdu1IeUY4Oh7C6QGQ1XgZJooEPvxQNVhYeLGwWq5hsvNMMZj25UIhvbMS%2Bcq8SRwP15AQ1nlzB4wjH9aYtmiGbhSU0NHQhtcctNJQILyN405O4HPPHEj1jjo%2BZM2oJCxylEPSc8RijNH4h2JNPih3xXc2pvGjIy8aksGXc0UvPk2%2B1hWd%2FhmVW2G0mCU7eA1K6My2as8ZzNvilnYB2Z5yJkOViJahHwcjwqZYUQOrPAo6y1fRjY%2Bcs1w7McTibcy47MkzEPY4bQGOXPLp1IKRfHHEwo49Pb2U3YVAi2GHpx3CrLT42Fa5FOj%2B7uv3baeUMB4gTXUL1Xo5Buu5kcQpQi4T%2B87tfMh%2B8GbbQv%2BvVw3JHC%2B8OKmNGIoK9Nj%2B2zF0qL1l8TApYyWpkdww8thc6Drj4KbERBOIw54OivgY6pgFqgeKprdaUx4RN%2BSd94k9jOs6D7EY66RRuwVUX7gujf3roHfLn7vW8%2B3BSxam9vKJikHwTA2RLdz%2BXAhrruNrSaZ%2F%2BkDhMCA3ansLCq%2FxL3UcrgMnaHlB1xq84w4YnLLdMw7b4FAIjCdXSL4PM8De3J5sXxTWHEgIiBy%2FXwqCnBMH0Ir%2By1J%2FkqHjdENC2x%2B3x1I5h6ODbmjtGOIoZuBiupNi568sS&X-Amz-Signature=05dbaceaad13f1f51406176a50ade3320888e4ed31812c0db353fc672478bd21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
