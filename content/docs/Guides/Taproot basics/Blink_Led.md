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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2BJZH3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD1TKXW%2F%2Fhu6k%2FNiVvxFZhqLYGdZbi%2F2KTEmoUIDPZZ%2FQIgOkV6UpiDaPBw0%2F8eEw8w8BR5uyfVuVMhi%2FaxbUMe2PYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPtTsIFJ7bxBxngolircA%2Fvikdi5IQhVXvqEyHLm8Renk5a0ITigeCAFCzFP4BKctKGRovJDPBMzCUPdR8Ag2vtVZkRwkV6YXXM%2Fj3csRj1LtW%2FLUslk3NmvImeGzHpSwAEg2Eib5yOIICxvntd2Gh8ydFdTY3T5UvENBmt3lv4m9tkQxwQFYx0QVvhRVgCj%2Bv4wYPpAYNlBs3CcRm8Ut5gst9O4TFlTVpRwWgmK%2FVgIlK6LNN8UwiFvEuH1lLTSyEl6WJ9U1CxI4%2FikPdyoqwHRnziTWvp7xrTB65E8qFCcHMM2KuHjplzK%2BXnW0bENohTYR%2FhCUoz1ujzwPqnQfAfa7ANaz8i1OXjpzGdK%2BwDEpjAQ%2BMfDU5MrFnCE5jkz%2B1soQb37FetsSBBIbipxWyefNQ092hqWKJ3vvj84%2FPSwMNwDBJ%2B5F%2FGlwBwl4idUQvHaPwzPiyn4PiNitZDeU5MUZAiyTlif3hsndKyo%2FvVq%2FiTfd6zqpOxZS84DriO9FEC%2BJabXYo0%2BZQJQcsIMGao%2BcDmO50pgBNeYHR2pV9TgatUCPkzG5L6z1CUYFLnw%2FWLPZa%2Frncr8wQ%2FYeEpzTpuhkSOGEC8umOcPMfgK8cyd4TIayXqQa9Q2syHsKxqI9AC1e2MAkuB5vQY4MI7W0MEGOqUBRCbwh5AtH8UV%2BckQVQG2TcuVq8QSqyDIcMbjDCSYSZItjZUssJTvHCUYVwxuLwhiBFZX7oZdyrbutG3FrOEppGiGtjYdaIB6VyRdEk11kj2VWBTMU4qMr%2FHswJNBS3XJkp%2B2yLSafEhwV2RuPFLA%2F2K3KmvLDrnDhX35Za3oXUu2%2BRp3DQOR%2F42z%2BS0nmARpWyhCEaVsa7RZKWIkxNgpIS8bTSZN&X-Amz-Signature=60da58cf8566c514f67eb74ca75f4b47c9b5dcf3eb22631a36f2bed11f7aaf3f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJTGPXA6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCICNJO8NEx9E88XgM7R4YG5OAYNL6%2BeicZS7pG3%2FAsopGAiEAxSAUttOqGl01xfGtcGd4YJuewbCXI7itXoNBcH2Uifsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDPMa683o6P1KVTEXPSrcA3vic%2FvFual%2BLyn%2B2q%2BNn2Zd92uxpBKw3n8%2BRNAo0WupPAB0SivpKuLjg43CmqumEP%2Fyr9OJ08vJgQASFsU%2B6kjzGGq5J0OikL0%2FfSefEsp%2BFpbjsyOqfbg0i3Y%2BVXgks%2BKoW09RDADH5wggiQsK04Vx2hdNqvsJZWwaU77hHk4H0mSkGnm5nXIDs2OVGbc3NQyN6gghmK%2FWHxNWyhNSu7bgeFTDbbAfRH4E8dBMbI07P68r8XBWZHPu4EHruZNGVqUORE%2Fy1nDTLflYxHixmCZ2L5FxXOnwUNQdHX8Gxag0ETa1Pv9ycxC970XrVsm8V5Q1SCyt0egL7vQ0taPlTOdu5SGoF2NLq1zzN8oqDwGwIDr8XDONdpWzhnvWzH4CZibfKSB7zBi77Iilkul%2F70ZGPnqdkcYioxCEQaTm8P%2By3Z3I7QcsB1uAmCLfBbL0hfutxTGNDefXFZ8jTSuUTDNLFFYOqiz%2FSIQbx%2F2OPijTVGi3seJxxvs%2FjXj3czNK6xVzEzudAXbxKX0kZBrYeoSdbOVr210baWcB1Eq6kd%2FiwZnB0gMPyuTMUTbuyATFMEOKmBHtNgGSSa9GrLOrYhqHtOoVb3rA%2FJMVlZNnF%2F65Gmq12tG6uLaY1RjKMJHW0MEGOqUBIcn7a7POsfbJjp9MN33bbgSA41aKbTTmzyexlvjf1Fs3hehfYRymcXGq1faPonX4aaR%2BeEK22DKXp3w42rswJPLZO7StXVOXnMg4Q9AFVZ6ENmFRbSPltvf1wLw9X1QgKqMdlO%2BwLWmPHmi9qxCQSW4plHleYY59NTjEIg1F1EeyD%2BtHdw0FFnLTAdBwHpX1sQF82r%2FBO1T%2BxsFYRckL0ay5N8%2BM&X-Amz-Signature=be6432ac392eecbdbcbe72ac7d2d5e01e71665a0016f1e97c16f1103c2520639&X-Amz-SignedHeaders=host&x-id=GetObject)

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
