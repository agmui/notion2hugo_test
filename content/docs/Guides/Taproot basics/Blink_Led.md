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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y44GDWJ2%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5I0QNkBw5SAGAat0iPlZoHCFraqt2oLBpXKmLbLBBSAiAN9V1mxXuhrzO1FF2bLU4%2Fsi%2BcYjRc8ruGnSuKaqXAziqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmyQ%2Biww%2FOHL5SkzqKtwD8Dt0YL%2BHJrAyRjzI8pMXR0DazJckk6p5en1eXFfxHdhjTv8uH3dfxu7BvKc%2FS07qSdwgfcMQYZP8oD1s%2FLVwQ2Qyh3lJ671F8U%2FfDP7f8pFmWZR1rB0AkMQ6jIbUpLj7rmdS0g%2FL54Nl4kU2BiFobZ%2BP4yyEPAZz2tKjKzRHW7oM11Ljj9pBO0fTi8tIIYwJrDcaBeDghZyOrUnEs3aYGUqDZFLdDc9bYhfSGqEAc%2F8NziNjAsSAA%2BXjujW%2FS90wRRZjzlrbNhILthP5cy1lC9qSy0Zcwvorbvg2P73Y71nsWpI3bveWQLB%2BCDFyV0wGepo7QU8xocI4hrOqtyg8zLjxazT6JjthmOrya4c426HEAjMclMDyJSbUrs04WOoqEELgQBf%2FBCfl3DRDBZc%2BKwqCl%2B2gnXwFThfE3bnr3%2FrP%2F6%2FF9Dh0LCpBhkNDhF4%2FW3d6mhLGjLVZqu9QZjyQ6C9JhpHoD6blcqeFF64sbjDziCySOdKWKjefOH0rNE6Qb2KQQ%2BsW9PvY3AdCQjP80Hvhc0kIGy5dniaLfUZSyrf0UD7k0zL7WUjC49CuZ81abnyGEhpxDZIjAVLf1ZC5T%2BKG6zjClvOkYke2svCe9kyjkhxljHcItu%2BjLRIwruP%2BvAY6pgE9wgJ3LQ7y%2FDxX2xlrEW2zH7CTFeMvWqttewdLOvjgxMAZ8e52JwDwBZoQEkt1SeASbVN8yh7sEDfEmhVEk7hvC%2FnIATbihoSozmtCA1AvNdsguF0TUgiP0Naam4aMJgccaIKv1Rk%2B5GrIHNbfL1GtWOMu5I4JSWzxNyirygrId%2FB9izJaBw1sIAcfhpdZ%2FZRWWjBUHqheokkJQps0D4iZxnqefouD&X-Amz-Signature=ac3e4f4192064c74cc50e97272923cdf153dced23ceb5a6bde03bc5e6b857ce9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVYEJC7Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVrwaHMUU08rCk5J7IAFpnh0M7jQVjvRWkkB8SDxeUnAiEAhZ4KiAgYPLiLKT39WQKY57L%2BGYvC%2BNl1yy%2BR1UE1E6YqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPPcSacLQOSFhU6AircA9qadyC32P2IHgIWga7ptyqSqR4jercB23tcZMPShMED1LM3Pd61wVDKwErebfT%2BStpBwIA9bT3UaawJRn%2F6GI7UcgPT26bQLOLDOHFm0m6qPPIeeKj5zfu1c4RQ6%2BAW0MBByo1mr97zgeKoKHXZDupO5ixVk3eY4KTQMkhHOSpy%2F3fr%2FFZONIRK5WdPk%2BhG8VKd3ie%2Fug7JzDWfIV%2Bcv3MA9ZbsJ9hZFEBTFXNHQdrBHTMY3KE9j6%2BGPSHo509k0W9NNfvbobkaCGVb2heH2AS1808wLHrTuF1nqm3ao8D5GBtDgtSEm4GLtn8vZVW4dJu%2FHZmrn2Bqt%2FWFizqKH82zLDb5tfz1KCDyIQwRmHNkP0yQkzgqZpcA%2FhDtSrSaxYs%2F%2FtHDSlrk4l%2B2gzO6RiTtGR7aML5d2xq%2Fnhy0uz9V0jd%2BQTri7AC2hTZnvowchB6nxDjSvSD41JF8bLnHXIJ9Ek0YqOTAr7%2BHG4TXTIQi%2BGoEZATBEOZOtZkexFaahVe0y3DoLsRXGmGJwUtUBYOgxRk56pPqpZz7ywcHkXUZ4%2FQZMFyBqx8SSpW%2Bichxaj23hyjb00raBoG%2BhKlp%2FFl99WXYmsZF%2BloDKrQO5WG2N4OJ7JYwR%2BArBy92MKPi%2FrwGOqUBs9HQh1XWCfuZP3cuC1DWm6MES6u2uR3UDYNRYLIfi9VbTCxHSioX1ldZ6Pcj3KDj%2Bh%2FOCANT1UkQXHAC3BGlRq30orPf%2FQbJNCgx9Sl%2BSQq9BHtzHPJKlqW3zE%2Bv%2Bi69UUqQ%2F5KmGXQAe9b934N2lyBFOTrO53IauZHR4rqQCIzpB6i53Hdz4eyYws28Kk3sblZT08aoRmHwPY7dkIXr%2Ffs7l5Pz&X-Amz-Signature=1fa431bea21a99436bfa0fc704143a161c11be9d328e5b23396b52f18e802eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
