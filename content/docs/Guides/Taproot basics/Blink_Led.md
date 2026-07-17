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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4AVTOOW%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdn3pfrRyT89gHUQcu0QQIdKxpgUwWW2E2g3%2F7JMquEAIgf2me5Zrpi3GO%2FxiyL3Efa8aO%2F9X0%2BmdS3ZW33gGvwiMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDCQuGJFINwX0k06P%2FyrcA3mqiZ60OhNfWpdT6lTQf36iWSkIHHK2g4y6TqqmWTfLbqBtxHIgzV%2BREFPNQO7MFUyqj%2FN7KqwiP8k3jsK%2FTRBq9HS0MnSMTwE3FmPB52vJOQcRnJj5MsAYbyJb1tCIZhay%2BsBk27qxljmIBdWC52OhY7TVtQE9ByRD5XzvkMMBE9RhkFEo7KA9GUE84X0oQnCUjVkJlyK%2BnASlCtUcbqUWZAnPLlXF0cD07aV0tkdyGm6gMvIj8sbJsx1Ga30i%2FbQnLg7sLUzVtzjNrNqtp91OT7L9QeeAIWnw5fAFM69BVV%2Fj5gcfX5bENK5qlv%2FFfXCI7Q1lL19vJVEji0QdaJyx1En59C%2Bg%2Fx5hkNYlqJQCLvwmBANwD%2BHapCgdbWyT%2FsJM63TN8giKbzyVXjoGXi8QWGb8U1u2TprfSSLmnCAzU%2B%2BgDGbq5Gy74XvhpJbShDeq727XwQQVlhA2pGM3ilR62rhWe3CTq03ZRjiCPzDIx9ewy0Eew1zNRPuWC%2FFvlvEQ9YOCuqzjaD4M%2FadhPU%2F%2FCcq%2FzC73SUzhJrDFKAyFF7Ag%2B2BPZ1BETnsoEZdX3lfqNclzieBJzbwRA03krKCt6Nl4v0FDh48JCPlitOizLYrLFMbZEuISaP3XMILx5dIGOqUBOHS5XsxZvg8b19fbt960st0lemJv7P7sLp9cOGmSK4c1RTQ7f1wBoEWNuVupAtDNhK1ehzXFe6RU9ydOO1UZAZL1fi3jtj1lRLj3zV5jQ9iKGplksQ5EspMnGgBkAJWb%2BluC7qyYQq%2BRyBy%2FM61LNj5mEEDVq5PKLuzs1P7FdS5PQPb0ouF70TpVk4DDgeNud6mUtNSXvyfvP2IgCGxOwiB%2BAKVI&X-Amz-Signature=5a21af0fe9253671782623d971e96d25a1bd7ab3dc8e5258224150377f7d5f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHIVINE%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDosz7KYdqc%2FlncLm3gxNz87YZHGufimn0cNTgnNLH1QgIgVL3j4jDiw0M8FZekgZbTc%2F%2F54jro1kXv4azmNRa%2FXQYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMxNIw86rrT3wzguHSrcA2QJAGKKD%2FkzVHMYeaM8tMqWbU6SXic4G1pVjKreBeKEl0wzrM8efiCEmRue0cORyjedQOpk7k11crKssFpesk77cAK4e%2BHLc5a%2FjbzYniH8CL6mXLcQ4YgZJEYL2PBlSXzXlS2rtGvE59w7krscTgYNHdhYCbEGG7k30XCY2HEnhVUnkgMqGFsf6P5F5LLZBk89zhJIvvJNFKCCy4Vs6IecQnsVPaCIuPce%2FONPXl6ldvq9%2BBds%2FvTQjz7LL5TC6m7u4lTgH9%2FcZZM6XkDfqsLWRWWjSbPhgA%2F6ZNSQ2RjcTTbIBxAliGtC9XXcU3%2FUpJAWnzZeCAzwHbIbrFyGdENbJYOshI0GUoxk1y7Ef56enBkhjPsnytvkUnJ2t85ZL9hLMVC4k787KGAjFiqb%2FE%2FGcSzjYRLkEW9MYDr%2FF0qgB1d8SLIFIUU8rSxYR2uGbbqfFGjNSUP%2BX1ENN3RJrp9DtnwtlkHhOqdUqKItNbp%2FOHe%2BvBU49%2B%2F7kJhT2hyEc%2Fi5UBN5%2F89%2FQKJx7kupdbcC1QTKhb7Rhl7jDbd8xUIYWuXI05pKO2BGYbUOH7bk1Ktu4yh25B%2FlvftG3gLLoIfLcGrXcq53hfrrzvJmln28DGkktyLbSWZfU4dGMLum5tIGOqUBlJgM%2B8pMqc235xcF911WvKIrNf0xNwBUUyKvi%2BYIVWz2qgL88xqHPaQ041T9oqTNMLU1bj%2BAFTfV%2FguaJb%2Flx%2B0ZWp%2BPvx6Kjs47tGU8zB9ti2G3bND26NBOvBwciLgzCRqLeewueWY0MWGARGoE6JOr4NqsSZKqKfemJ6ofdGLELkKTpVHTsbccMMvAMju7lgjafrr8jma60XJ%2BibxpBsPgAj6a&X-Amz-Signature=8ae2960bae27206ee7e7774656614d25b1764415f0a37dd0512cdac092a92634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
