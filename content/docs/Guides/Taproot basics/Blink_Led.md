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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BJ52E3Y%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIDY5PC2L%2FCeLM2uUhF%2FzbP1YotWi48ib7z2k%2FMV8j2zjAiAZfaJdROfYD6Xecs0pUsC21ppZ5mXNT1H%2FMqNX0C1dVSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMkhzQwHkdzOqTbIu6KtwDmZ%2Ft28pPrZR5rf2fxo0rasE2n0sXRQ8%2FOFxu4A16LO0JRLtYkcoX%2BRQOl6vVVjV48bAKqdRVjx9usFJ08PR6Phku874MnyCk3Zsym2By1Y6YHQ58drMwKCin4XX3Lij%2BHWHpBMBmvavbC8xWf6K5%2FOslHsgRXzOnjwUfJRPli7LWxuYnHf5twExr5n6oMh%2FzfgwUEUCoB4HiIUEf%2B41gPyu4G6dhmJ7X%2FZa1KhDwZyYvsh6nvvcLMlqEotmimn9gsn4NhrPkMC6h1rOssdvtOaIZfryDXYCaBdf%2BHV16rhFWiql0qYH5vLikpLQd0qoFopjEqxgGyBVYlKTAyfxJiHML%2F7s5R%2F%2B4BNv%2FCCvjY1ENyLwbWAfqfThGhh8hazr5Lfd3ckQxSz00F%2Fbz4WW5DanVlKb9cBqjnCNOXP%2FM0DFCSGD7b8DoKFN4dW5vu%2FdJ7Jf5NMUQ0zd%2FVvXmyLQobHmdSe2PpE4ZEt%2BQqcYyzxLG0Au4qcAZg7Ax1QMrJRzK9eiNZTZpZrk04bTp%2FTbE3Elih%2F0dqylTQyMY%2BOGI6Y27jhYGhPni%2B7oF6zdMesWS1uAj4txS5NfZ3R7D08wAyPJb9p2pkn%2ByRV7MPw69sZE9jiiUfrbhupLrmTow1%2BzBvQY6pgHZjeEXii8b%2B3ZsZGFzTNjRQo%2BFhhDnQyXEFVcynQRjGS57mX51Y8iofu%2FqfdZsJVPWXMJ%2FcNAX%2B1DdKGjWSAt9lh3MVTOgRtlFErvM6U54%2FSfNY2FXXDPfa6FeO5V1gq1Lib3Plt4oFZpQgxXFa071kySFRufIB5bfJd%2Bod8MwIi5bMmjx%2BwhbgkR%2B%2FK62ambEAXDs2c%2BI21QQsVuHlKdPGt0xxga0&X-Amz-Signature=d983212b59f0b4489104ae57081c781124f42096215a6c755e748e429012af10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVO4GGZQ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCg6KVx1crwYNrTli6ulMBDIMwTkB5ElPl2wJ4VWESBVwIgCQhhiClzSLoI8Hw%2FkWir3llY7q4G%2FYM1CxSYmhIPDU8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGvGbajyN0uBDgR7rCrcA3hP%2BNkFfB4jy3wmG9%2FhuabjvsSA7YttuptJFmM4iyCV8f0IpFQ6nGKRn1isx5MgH%2BkGtEJo3ebHaLv%2B13ElvwPedHocbZUVK5ewkcXxJFQaUmlDWwgmj7x3MhoWDQa4S9H7SCeYQ8hhegxXuG7PPSsm3TMdAoIFjVeV021hIJdOIuksi33T00HGcCqrJFgm2dQa9Ym%2BayZBNGhLkMCDB7I6CN%2F7nasTwkBGGxzCimmbZK%2BCFJuHM6wnr4lZoJD13HCp8mUdVuWH%2FsuWKhdrU89WuHL767xUwh7ywhPM9w4l%2F9zwQoDhF06sn6VCsASWXBAQX91oT3lBFvdfULXxWc9WgvX7JXX43gCKpdVVY1iHcbxFKrkpnS2t2HlQox4BYDP612jFU%2B8YmfPrtbO2zKhkynCgy0auol1H1pT60pDFBNSP%2F9mEKHC1fYnL5stCJ6bRJDA7JIbHOsZA8sedd6j7TE50Sr8NoUPUFob79vN1y44yLyTudeaXxPv4xUFZW9bLMQmU0wxzQFEtuPuS2vR5Nw0GXgt6f2wss0HiUo9uFYPEr%2F1kgS1fAKaJC0xWPCtr7Bb6i3nkY9MQyqTvy8QcAkFwCeYPFcrnADe4d5xfdj5PaTNsn2TATJvTMJntwb0GOqUBkX8%2FxTnBI%2B3m0jgqJSbdyPujaabRdZUxfAK9AAeG0vUD2cawS1XDC%2BI3xWguomE7ZLDK3%2BqyIhSgWgnVcAil33CeHbHUMNeqySLO0OVKr4zlp5Jjfi1dAF8VVhC6fK4CBFZ9%2B%2FePDtu1rMeY5fxbMV%2F%2FDpxHhqSVlqYmVXiO%2FQRezwR6fWoBiAemGLWhFCpA3F9Ub%2F4U0MOydxFgCdRSj9G%2FVdM5&X-Amz-Signature=fd2e1ff1a4c3422d1321c5629e1fc8c911ed027ebd803a2720449f906a4b997e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
