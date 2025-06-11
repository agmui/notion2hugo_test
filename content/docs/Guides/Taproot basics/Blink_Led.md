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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423LADHV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQkwTZ9u1BOGDhnhWvzT2rTU1P3YlXWHJFVEikA8NXPwIhAPWNH%2BZWMTJGUq%2FkyuVLf%2FADhF2fYA2uSmHyNnPw2R1cKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxT4C54wfPcAF9gmJIq3AN%2B7QdAFXKvSC6orXiItXl%2B64TBDh3h306iOnXKlSSWqQ7JZ56Z5v%2Fv8%2B7yzhlIkkGxUm90w3t1acHzxo%2BQ2glmCnRQpi4bRjGrXy5bU80t0aLm%2Bp8%2FLO1xJS5ZOtymQdyjWaP3jZix%2FPCh33VIWnoZlelTwEu06nuWbF10rdmnOOmpLK9aHNQzKQBaw6hUcgWg3E27nPVX7DbshI1KYSg2spoj7D8hUmcw6P5ZzAcyAEZbjQXXkWAgO68bcER6RBoWmF1grre63XQCS%2Bnjno4ELY3imPS6l5YFA6fPe31PkQuXhJ%2BznCB1dLE5%2BgZqL4K7PlAEXzWFAgg1ZOe5Krjk7EKAq%2FpF9gEl1Q%2FUCbD78Havz6Tb44tgdCFlyuv5nFWAdZIVvnc%2BoB2y89UPghKfbcs%2BaPhDUo1pgW9MQWr8t7hbf9vUqSJWFHlLbs9AK8VxQr9MKLjX4xvizLNwNzy3PB8MXaXH7K%2BTpWY2gDNXvWSCSB1QAjC1ckNY2DFp4fclZjvCzh5AeqY7t523PgvT8ilMArjC0s9gsZ8%2FtO3Jk8ub%2FvXdNR2Qod3Zpnt8PA6xFnuZzGfayLx7WNDyq9YOwWmob2a6h45Nlor7FzVWWsPdivMQWpsAnRHFQzDN5aXCBjqkAdJlzaiz4jlFHx%2BLUTUCO6QTOFVdJrP36zY6LHxrBHGFU9RCHePj2QGhI3j0uZZ5ulqn7pQFWYrJCgP3TMXweEczuORCGpk1vgkTIZq7qVBr4YTcrqeD%2FC9WiUqD3bcOYg4%2BJlif3qh0u1QXKHpq5fvZv2JlJvHjwmihAgfOU8Rzfff4jGimS%2FHF8GKJ8jhIAMXzQuy5NMlOJHAbIFgPjA0LiQm9&X-Amz-Signature=46b26021ce0837d92b2dadd992717b308e57bfd711b8e7a8c69f9b5986c142b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645Y57OKB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T132534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFLYybU3vY2YziaA9K1Ho8wI7k5jWdPvJIZbyTOzf0mcAiANiUh61XwWi5JXQTyn0DJPQl%2FcM6klQtvn7y5O2QAHECqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkHldVcENCbEhXmRKtwDHsBd%2F6hppc2mYav7UED1hXNRDRTgAlODpPQp2JB2mlpz%2BVt8aG1U8jNBu43FkIRjBx%2B6bfniiWDvHS9sMsFdlumnTls6P84JtsVOa5NAcaq8cz9kNEJso6YbnZclHdR2mIjpFTn9QPphvqVJCuWm2p9%2BK9TMubvA3zNZoqZ6NTCZc9vuDVTFa1EXVyvqJFc81R3q4wuJqMDWmJ5nHYPPtQBJU0oNrAsk0IgSkT14buRwzbb%2FRbmRc2PXyj8ZxDpXI3wIvR6beHniAv0ZavnLr1i0O4BiW72Z%2F69y0iSIb5KNUjZMKpLSj2ka3Sr1ap0NDs8OrnqkCT9ElVI4yL7%2FxrdJ70aUNnj27bnc8yk5940Pncn0a2mV%2FdtwrqwhtT1XimcQH3hKzsGGq9PWrYMSFY4l9kCjXSnvK60sAdeAPagMsmUobu9oS3Gh11b9BSyvfUEi1VrEr%2FUQqX38rleOwjEFFSYLg1wKA1ZOh3SU5izEzdfepYlJNmRYhMOOUIcPwiBUe3CDoxSS8QNmQgPyG%2FTGXWl2v%2F9%2F9ea5htrIijbc%2F4KY4kB0t0Ace8eBJbJ7zhu46lrhuua1ytAjbJiDYFidF7zbT7%2FJbhrUNp2f2QKREFLPGMP%2BhVcIWc0w7ealwgY6pgFRQmDyM%2F%2F9UV%2BdwKdjKeFI0Bkhh0XrmSPifOzQHiEQZezpHsHObY%2FWmDS4gxP8n7AkPLWVgmEuDYqyqgQe4O0XNWEcg5zgM4qjcrXRMpbVp%2BVn8fy6x9k2pO4ZjpcghzIpwQ6r4JC25urhNU1nKoO4S3wdM5RiHD4DP3INQoo8qPcNYeGJIkI%2FQz4vsSzMH4rRg%2FF2ZdOsJb8rTkFLEQivhLnMh91T&X-Amz-Signature=a6601668f4860fc22f72d61614fe55e35526e2adb304c1e99cb0243855047e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
