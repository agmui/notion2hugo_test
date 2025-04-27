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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF22WU2G%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFa35U1dcNQr8wteqnkSW4UFCv2W2J6A%2BZ3VE%2Fq7zVk8AiAJtzsF7ijS6BDubR4lnLIZiSUvC5O8MESG62O72LCphCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM%2BD42CwutA89sZjUTKtwDL3oh49fELVM5Gs7Yb8nKvI6%2FQ9mhKFlve5AXodEYGRErMNvOthursLC7H34HzAI2rY%2BBwwwqe2%2FSJJBaDA%2FYHEeUUplLrztDLqH3aasKkYr2KfTpYx608IEmxmDyrs0vPhEOZArjMw6eNGHKl7HoL2aPhXvA5MPjqwbTvjoHoeEiBd2oqI7688ZRrqUondN8JH9FWstkdLHzg%2FjAWXpZJOXNDOeGuu6FudvSzUAYXQB%2FzVjIT59ZTYh47rQ1Wsr7PFHR4qzk5DGd%2B6P9BRGod2C9PKxTlj8ATJmGkOKTk0geNcX60lDqete50lTGUNxApsXG4lPdPnLzXCBil05I9bsH4v5L04RjvN3mqd7cx7yC84f6QXd2BV59lwxOlYuMnA4M05fPXI06nHUJqdzNzeBhQ9J1PGgTjo0dscAAXK%2Bas%2FrojIuha0WtlbAHblVytrhnUEwySiXYxVgaa7FmewBZE%2BTuR5ffcDoAdFzuZXMJL638S%2FYvSk0MAZtQzJVt%2B2WIHNHK7LtozvSXBDm4GNUhTPc5RZ4aFRiDMazGrAgsWR47MsiP6277JWyMh2O7mogEtWIR%2B47JhkHYJCDNXOkCyMDnAVafpT6Q18khaUVNxdHbzSr4No4i9rgwlIu6wAY6pgER4hizSMj2pjM0vs50q%2FNHDEpQ10ge6%2F91IOXwW5Z50%2FaEG5x1NQkziu193ARoMjxs62YDgQBvWGwvQ9KTM4iwU%2BWZiJUTe4vt2wfP3TOmMNgOO9Pcq0XNKIcovtemhjYdxXALKk7GS9dePNEgf8c5VukE2%2B%2BC7wsN9eFbvw6knV6ZLpLv5UEqqQ1okN2%2FGEvj%2B7PPjl73d5d9eJ2l5B9B6ncrW2va&X-Amz-Signature=4c7e9d6e9141d8abcf9a6863e72a52e86fd994cabe23ceb02e1d9eb9d3d84e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E2KGNSL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG30CAWkmRCxQ1qDD3FMytuWwia1nN8daUQ9hoE8tDXvAiEA%2FFwYYkDah2AAlQNq9yXVQLSRmACLladA8fdPaBiL%2B%2F4q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDJKVWfpyukENTfja4CrcAwctZV1mFBm1yRBFbr%2F5pWLuWAZBEqvbV08G%2B%2BgHMhWFLOjugdrBJdg3zaWsMaS6L6kXTR4bYVMZvvqfLpEbP7Nbk1FDAiuqg%2F%2BYIpb6nb2T4drnu%2Bsq%2BL5nO8zu2gUZVFFEomQ2J8IbmOnlisZnsekH4Tp2Z%2FrU4mk9PhCi19oD%2FYBtHWsEysNk2s%2BMCphOl25Bst8pnscjAGUUUWxVMcQeIksOhT9yAFWTEAIw5h3lm5x%2Fy%2B95FhzLmh3oaqqXL5CubeSOhC7Qp%2BGxbVLnqcaUaLXWE6Loxu3jtcQSVFXN9O00vF14SdL0RFEIHYlW7pG5Z0EoViZqHbhYlH22fLOiHqugHE1Ig0MYOkscAB2lo9cIQ4r%2B%2FYCf7vW2kqaHtoYnLKozk5s4vzct3%2BVene0rJFkALc9t2krMlMZl8VlIFqgQzjcm2V5jTqenL%2FlCxeYybXnVOn5cIMWcNwVQW5jH27f6z0LafTHQmRs4TEnntpJuSK22tgqdoqCZOsuxXhetpxBAUn2Rkd3nO%2FYyuDjGbV14sugMYiVKq4piy7XopH9BB1YkI1mviQEPdCSTBGl3p7y7GSv2NP2xZTBn%2BqAdqEwwDi%2FKmRbePpd%2F5hGA815t8%2BXbtELNWtv%2FMPKKusAGOqUBpWb3TwNlN5w89e3vsfWzwxkjzjiZIh8qjZw3A%2FXK3NENPX1zh4cX37guLKuXGLL6iXnxkjIZcIfeTP%2FRQhKemhBnqc2jToMUQAouQp9nObyzBGXjFxAqyukmtnmXZcDFD1pdm3QkDtGf5C%2B1YlEyUmaVyYvHM4uX3AcJgMuJfEoCBtySyB55mgcQ0nbtQcqIPZQqMXcEHDlzmYn9SvB%2FdJNN8Uqj&X-Amz-Signature=7a6029b0b9771044393c56796681a92e7323f3a30cf9cf41075368bfbce02040&X-Amz-SignedHeaders=host&x-id=GetObject)

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
