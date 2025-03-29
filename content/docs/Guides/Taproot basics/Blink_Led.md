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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CGCTCAF%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICye3NbQSqVF8O%2BBzpOxvzTcYvdHWife1Hjq9iSTe8%2FZAiEA4QGwLp4mmH4OIbAcwlPhZE4wrz541McTl8HRW2yUzMMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBBYesROJNSCtA7AcSrcAxhW8OChgxWDbIloxIotLbAA6rXe%2FwsSHga7k4%2FYyViIorLC1LaVAKvDUHcBjyTlJvDZ9P96c%2BI7o3f7hOrq7srFy1uP6Ffxdi%2FcaDxSopj8IEfB7oYgB5q0o7EZJtLKBwaqDCqbD0E23yBT%2B%2FM89log2yItoMSu6HAaqwPX3Przo2mfepsnNBVd7UQjNJDWLz0%2B%2FENdHCg8uscgrhc5cheAKohYDFT5QTOoB2ZTFM1uFQYWMFmm%2F9wZ2kGjpPenjNpTQkO6rhZo0mkC5hm%2B6kQ5vijpdU1bxRswuYCJU9wLaMg%2BmkeqycxDyVsYxrkUBzIIBOJYiJoWVbpsNar8J62HmVimhldlD5RWD4C602GS5TzBFI1xhe59AkLhj1geA%2FsuE4z%2BnVeSOeeXtqnD86qbz3xiuAjYIpuEW0GMd4YVqH68Qawh0l%2F%2FmytuRNKM6YMHi0CmvYCE%2FIR2vd9W%2BjOrW87y0QDPlB%2BXL9wZhTTAZae1jfLr%2FvXgb6pg31QDsatX31WZSRwrQfNTtMt6wnJKuLsV0%2B0DPe4KW42rQWZqcKYcoNcNuYBN22FVvkruhfab2CYqXKJUEnKe%2FFfXfLOPua7et8vgnmRiVJDcD0EaVZNXTd7c35%2BPj%2BqhMOufoL8GOqUBVJKRF8i9a8ixe9JCWm2boHGNteWV7MphFYsXOlGKTomB1K76F6PcKFkuTjnQ04ko%2BjoW5z4G%2BPE4kpb7gXmlxFmbQ40iqmT2OTbfZWlDpcCaO9BEHokoiJtleijT9uQ52kcf5gbAZ7R%2FfNNv37%2F98Y8kNEi5AU3JP7YqnSu3GUltvFmUTJgFq3GN0z1ZFuNfl1%2Bpi%2Bbs7EQaUzfTBgIOSVpNTFvl&X-Amz-Signature=31ccfccae40335daf4405e3bc47f48e8f4552d779702c3e52cf8cbb5220096c9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP5JF2H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T160804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCodK%2FhS7iEXh6W%2FGo9c2uxuLVhah%2FQLXgahPXV%2B9qudAIgPppcSFU%2BeDCBtrex3wN88CkWYRph9bAGLV%2F0d452lY8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDDlFIWvqOwISM7tZdyrcA2A5PXCtVy93huNMs37grtQu2F48uh1b14KM2Bb29C7mYd09GHJIZe3MQl75gst%2FWt0g8e8b8FBLslH0g%2BitEQ2y6ZkMGKsVE6mEEg9eG4KqhzrT%2FSb8E%2BBPrK9kZ3lhA5Axx3bMOoa63C8vp%2FC%2BEUzNAu6tZZDDm4IpihLpUAxldn9IgyONKz4ZjzqYFVJFbPOJ%2FieJHuJW0FYqUACkW3EFKWsqQBeL3i6Vh4cMTRPDYaPMBInD2OlNjZlm35divowVhWSMDhyIZOSr7VpaRZ33C9YqEoCnLoKmUxpL1B664lAuBZBtuIW4R6BI%2F75dNwim7hgrdbgxGpTUQPt5B4yRQ9PeP%2BQemjG6WFLeMIL%2Bz1ZQwvRZjKY0SU2%2FL9jUFDpTfbZDB8ud%2FwyJ7Nk8qAbRR5RF6Rorm8XKNsw77XYgDbGI3ZlamM5KZ%2FKyQFzFfFZZwtAWQ3ICSDyc9%2FAdeMjJK3Hd19X7DmOfWU6ZpqnOtkZjcjcSW8JrhsZrHOAPC5mspurcvJHYx80RppL%2BkBUbE2j9F4OpEG9y5iGXHvincTllOPDk194mFKhtcnabkLXwV67wmK71Dr5UTjRZbaAQAueBxASA03xYyZhSGgzHJLkibcevQPMMxoPjMPWgoL8GOqUBcLnW6pwMzl%2BkkAidx9T0t4Fpglcf9UCPF5KpoaQDvJM33icKOsjLvZlh%2BJpfLtnW3LOiuL%2FRNUeAGB9mYjJfSNXKNsNzo0nwnqJUq434G7qwMOBkwZdZ20%2FySP%2FqsJm5fkhFU57s6yNuSkTvraQYluXbLhxOXGBeeaS3sJQpGVxRYXyYtCZSBEOhlzwE6iVK30%2FsF9xp%2BmySGnUhdSS4g4fAAY9M&X-Amz-Signature=ab3e8253ba4a52cc3199ad0e3ccc6532723bfbaa9e144b6b5c166f2e8d188732&X-Amz-SignedHeaders=host&x-id=GetObject)

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
