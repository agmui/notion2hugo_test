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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QAMJ26P%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuyB4Ly4iGlQBjV9%2F0tlZh9uTArSbB8%2BiLJ84IKcnutgIhAPYzMeDz8oyYPDnHh3wPR0%2B7VnDohokz7sRVw4M%2B5FNaKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTUXtur3TaUuyWslUq3AMNwfdL8Dm2FP%2Bpcmp7NRrJJrzqbvIdQwTlOlo9OkFipMBtLTS84JwToD09%2BgDrZYpA8oo%2FosWZ%2BjCH3h6TaCjgfaP4mifC2zinvTOFPOcixhfOJrcxJiidEQhbeSP1gW2bmfuad7sidtp5MZouOueiAc9785AOk0SY78OBYhWpUK1VPdLuXA1APC9sFdGg%2BEx5xhcD793nF1dR%2FxIKTwTjxI14%2FF6qGhr0P6y6JS46WHoH3vPJ6Kc1wKaq9D2lg2wVKsEoie4vgLQInaXvX9n1XROACfY9vWumG3SHoxkXk9Gx1mWxXF0jy9RbgXVaOGyM3BIFYZH3ByCh9K3tvrsdcMg0Oh8sBiAu5Jka0cXDU9nIHp210aBGDA%2Fpqxh%2FzUsK0U9Jl2f1aAOvtwZHEzGP7F5OFiKkVd%2FApJt19tIeRBDH12GUicCHY2H73N54InuNon3XJWJmZufrdLvVRwswJHRrXq3gNRkBpGxDrqUFnClavN5SfnlWNTZjZcj7EOMj%2BdPCQMW3EBE4Awj4cVU6zXCUdklA8jAHNFJjV4dZVoZR8EDPhqVnWK7bOpRVdALcTg4cJDRwa45H17GI1kPav6KDnPsfZgTDrnytXrBqyB%2BG25cWllrpLZaDCjDYwKfEBjqkARmk9dUwXhEZeQbOnWpIo9t0Qzlc1DDHGld90Fi5%2FFrF8d5peZC0ToThIZ9wFpYxQN2xNwfwtmwcCXf6tzzNmuG0CIHhouDqgVaNRYQnR%2BlTMBsPLXVgd%2F%2FPnW3g15bGYRy0pHTuxkEQbLBd5AyWglGSYWS308eJWTRh8p3SF4XdnJlPjyDxGd9JIQz%2BHUdr64CZHl8yz6eJX%2F52ldzmGaqp2RKs&X-Amz-Signature=d1aa48e51ce54b8ef0b7def0718d7b85494e318e9efef5c90bfbfe6ae9047c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FGWT5JU%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIARwAySw5OiUY2QCL%2BWfk7F9an8SCy5O5g3HRA6thv00AiEA0RMK7uWhcqSl53WZfi3d2CS6f8omcsMl7XEeKwg%2BxDwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXNPltdjOdMLXdOlircAwkwGedlQgsZMn3abindcFwoDnjXPwTTmCYUu9bcnHrHkKHYHB8nVxWmm3dbe5fwG07KbBwcuu%2FKpyaHPPWEobNmbnKETdAcYw8rDPw7Vz629ddCWy3XvAAqlHEBvwYw8Mrt3iFCI3KiVupEYRZCZe8pplmHfzn1ylrKs4me%2FiCSSS9sNQ0fXUQSEKY3%2Bg7S%2BoVYt5sbPClS4S1spLJDVhDqjgu02OGUf8xUroMUoNp48NMdpmQsJ%2BZZrToeBnRYxkm6N9vEjzidwe8sORPwDBY901MsBaT0xt5Ot3W4NkvJXGAXkZcewHj%2BfLh7jnAFw7GAnOAZ6VbSNZ7pcJnQp1cJZjTeozrlY3NWm6ZvrvFAFzPGXSJ3rfINAHcYMafk3lFPp%2BTBVMIfXuKhCX1a06CHhUWzEnBz2pz3Ukvly%2FB8AjO4pXmB8k1NAjcfZwwpnfmK9sQXAzijzFCmG5sMzumzE%2FK2WPEauDJ8ajuNyCnmcOGZdwGNHFKXe6RstcnqadaHZDm%2Fz%2FjSVrW8ZqhhDCGpSFthGEKaBgG69cTRqJLvnc9ErrDJe4avmvkVeNmmdD%2B%2F5DEDFXhBYS3c0N%2FCVPxRfMJv0w1gFg%2BoCQABINdZdx73yVGg2ok1YKn%2BMK7Ap8QGOqUBbf6WnW1r3ZSpL9kaHKMRYCPGz81oJ48OKxCY7b1xoVGp1uar6kzsfkFXNR%2FwD6nE4DSlsFVY208P3O6e4g8vZBN3Bq41Lh20p3l3I1uigFc6XF14efNpOpu7%2FPtFtFft%2Fsq2Izbe3f%2BfcRwfLhSUAlMrweanQLlrbZ16f9xMwse%2F9I6pCGN2WWWTWmfENfwYiauvaDrLR2cMllhMAk1ejcl6EcSd&X-Amz-Signature=16a29eccf93c045fdd2b559229375ba94b709257d4e329160c4c3b5212c7675a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
