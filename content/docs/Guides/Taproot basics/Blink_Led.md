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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRV3HYHQ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICyrgGKnSvhRml3lyipXnnMzF52vM2wWsyfCRQUgpdDlAiEA4X4%2FL2JzvPGdB3HG2Cmk%2ByA14WdHG79FZtSvEdIsfqgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJW%2FDYDz4o1wwGPFWircA5l27p299EXkduSyUsEawDunHjeHFj189qO7jyfd06MmtYLSvvb%2BKGwi41EPzfRy6ZOwYMUSyXS%2BSsVwqtQZGEM69PFOgpCHKnjIu7vG6CE%2BJghaBUD%2BjH3wplKRAV6GcHLPwf9%2BX6j%2B%2FqESfDmwIlZ20j1jlTNa98HyTJ3aocSMMfFgHUdg7mrwWFWQzFlxyqtp75WZN%2FsccjaihigMLb5B2Orew7eSc%2BAoqOakThwA78QQxPIfFHMtuVHr%2BWoXCFtdJv809jMNMl2XFgGejyRphaOQ7zBQPLu%2B0U%2BAD2l90pewvb4tYtsZ3%2FTRjVOIc9TqeaWNnwuPPqHVpDw3ymx7TQ7vM%2BXMtz%2FWKlwJq%2FIeBgysZ5Iz%2FWP5wO7I7CHqjMBMk3zbyZRgIdg3NfCu%2FBwSRmF%2F0zpHmgBMmQ%2FPWjEfy3sWv%2FnCBEXEBFSWZ5fMaDUqQV%2Fsb5S%2BCvEaPsTtwejZMAzX%2BrjR75uX3rp1vgMedsO4WKIUZ7zWxqW3KHLPs1LgLacBZDiivQXYDm9CXK%2FtO%2Fp%2Bb2M%2FA7sG8bXixTbY1Mai7ET%2FD9LmBDNagZV8zTle5jFldKLR1e%2FJDV3TDBZKXnAzn8%2FwZqsuJccot83Z87EAdFDik5WigkgZMNuficIGOqUBDZZCVdpi9WpswGmzvl%2FXUhOtA0TRoLXQxEqAQcWQ9hCsZ9FuEkJsomFO%2BF742ED1ApHOhgs5BV7eRscHNpyPy0xn4068oLvQyg%2BuazCI4OPRMC9k5AvCmFC8cTLOtBtKJEHwUZMfFPNHF%2BRYlBT3AbJyxFKHQRkriKheNGkwlax%2F6CBmwoiWGvKF1eWpwQQTgMrbfRLD00atRFzFplh%2FE75aRbnD&X-Amz-Signature=3004e41bb8d4351a84a86d9c491e7418da9298395be142f269793de95fa6b2f8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466765WN6U7%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T033928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIAmodmgtWtE0ymIcjtyCkxIAnLBnODMiz9r%2BYipjCJk0AiA2%2BwK425%2F7zJt4Q3stAQH%2BoJwAi1ry%2Bn60L9yvV81i7Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIM5ewznS75r6fHOqyCKtwDhjTEt9j586SRtqwjeW6bE9zGxDVrwjlShEl8KvK9sdjsUrYka0KndAb2%2BUgKzdHmf8VellDa%2FNVS2%2FqxlTkHZmeMAKgJEFONzBiL10RbBE%2FSvSdd0OSWSJl%2FGH7GKR2g%2F0l6yJJTDGoaPz1XA4YosHAO7AEWAUgLbkKdPQYvJuP51xPQQwRvcxAGHu1oZzViBHV6SyMf8J2Dfn7noe9RNB206zRSQkWORdQ5Mcbq51FDExLayOrLbrHVA%2FSkYSCOPggj8Y90ki7T4dv4J%2BKVVa5seWyuOE%2B2SJD8PAXuaX3AwB%2BIOSST2eIbRG3XByVNLtX%2BTvOWhfCVsXyeA7XoF3aKfOZDZnoS7DL6VZ%2FxnhhRYCVP5vRKzqXD%2BkHgUdH8FzCUVAvNu74nG1pM61OPchjwx8ZmmnpPAfP9r8qgjnkUXVMR7pCeZ9jajqgm7v%2Fb9mU%2F70VVsE0D98ktGTZiWjqjkJvbtxvCG0wkgbk%2FYuGOla9mvmvCqCUpjjsnw8MJeiOtZTX%2BsDkGbqm7Mu14Op73Ke993c7w%2FWAV0Q3pZLaXhA%2FdVhMeprXQLMGQKL3vz3une0FPcUrHHmoGomPtZ1%2F1t7RA%2Fp%2BuyZPuTI%2FmtDmd6T6LK5k7nawWWZEwtK6JwgY6pgGABXcCiJ7ZhptDC9gfL5H%2Bq8SSS9rzn8j0D0ZO%2FK3khCzFti7iAeA3fnISe9zxsumXUwbsScKr9uIxnxmvuNtzSmH6rtcbcw%2BRfe9S9RsvT8KojPn5Tq740gJh%2BxnH6uS5UYvfivEcNCRpFXIebQM28JNsMc9XcJj3%2FmYzZozZRRIlI5cmL7CI1C2Vp%2FGjmTSt5%2FdDc%2F8TkD%2FHljMQFdP3Cy%2FfBPO9&X-Amz-Signature=c867b16b892005dba6086cbaf37e93554844a9fc1967b10fe22f428b61db88ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
