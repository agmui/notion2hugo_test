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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWS6VQJ7%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDTVNQFynfwVqak7k3b6xMtHlYxPjlY5QKBXIETaDl5jwIhAJ7SnuA8mfmZzmveuB0StRzhGmamEovRpRWlOIAehFYIKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxq%2Bl9rfjgaJthZXIq3APG%2F0oY6dVF3ITuPLZyZjOxO0BSIrdtj1ml7dvti4tPTpE6aaWqT%2BhmlOhGcKa40kPY5mbzehHKWnjeJ7uixWUUrs6QdIQp9zRwQXQVutUUMGRKSxkMy%2Fr3M%2FIXUFURYEIFpU74OC0vIV50sG%2FUoJQjy%2BQvC9VRuSpU%2B0f11GzHCx3fi819iOcV1CUQd%2BJpRbqmt%2BKRj5jCgNtD%2FqqVTPi288KWUyR7UhVYriH3dFd7BmeLWM0nj0M6nvrnA9jiwAcB75zZhEridjwNerQTHFhlSA%2Bv42g1I3ihTPKs5Dk%2BdopbPkq4UM8f%2B%2F5hBabHjxoNVRAlHLVrNMZAZHeKfpkcS3ImejvDRuq9QTRaplFDvQTR3em%2BCKd6ubGsA0%2FMp%2BM4BFkIzgG5U1R%2FSCHt%2BpUBIFpaCU6NZy4%2FTv93ZZlNnj0hLU7g2jRBT9dICiqwSLptEi%2FJNWJFf4wMIxGhuqBkZcb2AewgiEDec9v5r0A4Dj99DFBDMif6sjVocePgiQ%2FAKcI0A%2BYiNcfSBB%2BoJlaeJrLWPBWSpmaRnuw%2BMQYL73Y9xbJCz0gYtqi7pt1hzR3WrRpwz5F%2B1%2Brb9kTji41CHhU6FqefMjhLh8pGpeqJ340bmcTi0mlbXE9YiTC%2B0pnABjqkATSxU%2BG5N1zp%2BmhUD98eSoernSUMxPJl2foEv9fExoT2O8ZbvIjj%2B5qZwe37VVke5Vg88KxEmB6HKJVWBJpJJYQ4nzvWB4yRdMTy06%2FZdgRpuVMUdnNE3%2FavuKpJinRAC8mRuLozQ0ewJC0dJ42ml2sWOG2SXSKAYu7CuLyzqRxiwsOZXcu2piTWRbb%2FSuUyxVHOR2DH1HOwdwPZ8xtTPt52HnDc&X-Amz-Signature=1b12c68f163ac4f3c75005991196f3e6656e7124c4c54698927f8c2ac7044d29&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBUSWOIX%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCLqk7xEdrnnbCvGKvNDS%2Ft0XAEGl5NRKe5lBsgpim%2FbwIgWgrn7r17az9mXuk0nFf889G8SKabfvCHVI9Gf%2FtjM1oqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJBy423lVaqq1BdCnCrcAz9jmuMrvXiaO6IMP3xkR89F1%2B6ofgjGk3JWJVDj8omIYvoihJxvoDwgCW3f7sAtt85SdVXr2jW2o0YYo2d%2FdyRBTupuk9NOwl1qfM1YlGUoYYB9j9xyTXdFZ2TwKjFPxNeAsII1b1nNKCbonJdpSe0hLm%2FaCpjMCCKAOtSxC0imnW%2FmD96KeJMnMNkSun5dQX1Er5r32wJccnot89grSEZ4TPlOsWUtW5NZB8P2kpH%2F4FiY1kJjIr6GoxZrbay%2BBtYHkPfemxesDZkLFE20oUkAEqw8JTOp25lhDFJsVXTHAkP5TyU5jYcGIZs0BVhWgsZo5auE66llYNxR8iLfMxcd1gfbCSGGN517xC5lB55PtpiAwPCra5IVhlTKHJP7xMIdL5YlcPR9gqhMbQr95jHL4suCKtAA0KiDpSaSWcpvWO5hkQcUAje2s7ztIQxoY7XUndbDjUmZe7Anc3TcMxOkd%2FVHWEn%2B8qcBW6mlr101b%2BS02I1tczUAVlzPbZhyja1P31BP58zY2OZdxdMSwZaBEwk1Q09cq2Zk5liG%2BRDo8uwesX2R2NGO5lLVsIk3KvTqicp%2FfNFPHu9Q9ja3jIrcdaV2ShAibLX8FCmHbHQiwgqCVkpirpZVqj%2F%2FMN%2FSmcAGOqUBnjvnFPg81vGtobsPjM9iU4DSGQh05f1cyAmxf3fxAhrOVaumeOGfh9CwYkfTFMJfWFR9TTLrC%2BW9gLybgzSeOCDmRtjUBnIzOvDAK1Dj2j89xnaeTuYgisvfoTqbfVAM%2FEsi5C7mqCc0biewIEKLgNilM%2BK8aOtCtKpF5E7BFAWhnGknIqyXBofjhi4POhpEKLfwRDIyMAgApKslBy6iH4BPm4JT&X-Amz-Signature=0cfb06e16f6be491da77c982794bf8d2103edd170c21ce4ef4753883e22b3f75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
