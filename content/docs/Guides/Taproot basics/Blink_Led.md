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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOT5S3Q%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIH%2FSIrkbOs4IEyeQ9gvFiM%2BxEtkdDiXGkJ7CTTnLuwj1AiEAjniuoghhbbeWJP79lQQ1fZnYN48k97dtsU0uwuSqS0Uq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDKHkGLDbw3M4jKKRircA%2BS6SL8dihVlET5nbDDt9jWpumLHhggKhkQwClHFxk46mneUh977xd6RMRJM29PDY62P0QHO7OSxfFZZNu1XA2tVPuG4n00NssG%2Bxx04x2HrIBlLOp%2BAR9SDnqEgHtpCjBE8MheCpObbRZxF37fBH9IZHQfQopiJHWr4lJ0omGzPbcmWTM0g3TewaXxi4O6O2R89zAkqoQHcp%2FjkA8MCCpZT2yEYLr24SUwxHs9IgF9ds8NNjLlUOhTcU3czvbDTlxDo54OchoRDYJQs0jVeUHNqclTTwPf9d6ypH%2BBkcAYFExuD0NcScbmViAuGE7mm64%2BSqYDdcccBV8fE%2FsMdEnZYsl%2FbvnlJ9uDl70jLiOdDw%2BAuWoyea7EhLDi4iYxDJQNVE%2FbpTkDzV9cxsy3QinGD8943Zf2skbIdVkd%2BrwGQUinRifzlj951%2BcckKzV%2FQajM58vQUL7GXXMj5Qy3Opme59MReESNDkjKGAnfOazGN4e5dqur6dvhO7CiyrRSYowvcy%2BzweQiXjWWCMxXEeb462%2FiaS5n5Soz7fuLTLATCfkCBzvJKCxZL54WAfd7FurRf5hm5opY4Rz9ylU9Axt5MghLkqUR7hf6M6WxHtY8SnZSZ721aHHyHRz8MPGzv70GOqUBSflq8X9mHImI1EM3i5wX9y%2BQswHDIOFrpudZFxEIXHSJlWPDzCH%2BoMf764ydRHcUaOhZJLpy25SzdYuT%2FQ0wnlb5HQtv0gewm171SGPGo5g5dV3CZVmbrp2n2Jy%2FPd6GySF39mWefhZ5F6LrHLg%2FGSklWRkk3xKQvkLzxW913CHWP84OycPEirHZePvEtT%2BMy%2FQ1j586I4EcTi6xAKKi15%2BbYfzA&X-Amz-Signature=1efa794124f7553bc9cc6960a7c76b037c80b13937f2b76d911c1989a941f523&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTOIVN27%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHlMWRGI7%2BXcwmzusnHsSY0TYy0XIBUVIoLt7D4Dq%2Ft1AiEArAPVbhvluOfcvaoe4UPwo0No0Ez7LRc2pwC7DLnhyJQq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDEuasx1zEDKH2ypW7yrcA0QzDG2qsv2LzfvTEl%2FZn0MkHb97Gdih1Lb%2FsL%2FIpDnG40RI4XQlrG8Cxs%2FfDwlnKo31ANItxnjgzHYlqmCEzqkXFtsBfgTMmCYoLvIwAD8OXOZ%2B1Vqzjpi5GmOyu1gp458AGQOYGBO9lqE9L%2BoQqEWy5U2PWerjV1uyLGgj1LJ9KZUJF6NgI3wmPeVwt7NMQMv5s0YK4Yuf2hO4fMRKqG5d%2BMINgEAqKQLNuPn1h527aeJYrNa2K6KDelG1EhLeqstqBy1htiB2d3Kx5rX7ZA6LGCIPd4UF3y%2Fph2Bb2zirs49Yp58EnCUniTs8077OiFt5atUNSK7c%2BonzrTfDmPkEdbHgAhTDUJ8DACo1xiWEbKvx5%2BmBXJE%2FeWINdYqhwhXv9U6HxepRRszmgZi0sE0iwOIJi7HHUUALgB4p0bWqf0rtTxAdA6TrlTWBTNp%2BoohyREF%2BjL%2BNHXnhxH8qAX1WmdRShS2pVgFIgc57qllxmRhUubBtukCrLExH1I%2B1Q5RTsd3uOdwQYFgLxA4qCeplzTSxITduP5fvsni7za%2Fh9XfIKOhkpv909sTbUJROARmY6idUN3feWEhuLFWs0L%2FrgHGPsKi5CbrfeHAVFxHLxJTEccryeRgwSEmFMJq0v70GOqUBZ3QZm5J34HIUAlaE6Jtew7eOMRnsBCU%2F3zwxZPnXl6R1po5FJ7dcC70sWBqEPQygHhcg0MJPxpTYWpi3dfjAORW3gv5a1mRr%2FwgDszT5L%2Bw9oPPRc7rkY4yIIrPRIHXKMluDQ7TpPEcqA8UtFnIIGcqQRJnLjrA528apdxRqYPwLHdvrzP78d2Ylzyoy9Nn4Tub88k5sJJtqn9H4ZfDz00aSjOSu&X-Amz-Signature=f7aa47a020042f5cac7fc0a1cd0063e98a4e9c4f803551f93e8c9975633d5041&X-Amz-SignedHeaders=host&x-id=GetObject)

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
