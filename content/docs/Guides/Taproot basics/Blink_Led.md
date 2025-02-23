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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAVSNNJG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5dT%2BogllopkfKuJQ9xxDeS%2F6ZVAhU3x9hoz0COMOI5AiAHfVgB%2B4fWkKGpwrwAGUB4RorqOaKhH6cAv2EG30TxOCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3kn8I0mjzpZhr5qkKtwDEGeJTTAOQYpQXY6n8A7LXIeFqN4oNtr0BW%2BXybyEmdaLSGszfN340Z2jbL8BzLKGpA0XbbG35qLdooSld35h5zI3vVnnTloiGqzSX41w7IzrAzLggGGazeypwx9vfJurZoH9fuBQr5LqThmIcop1W8tC6kaJubyqPRYFyR1eh0LeZukZYjHIsstImhtjqAXN%2Fd9vQVBrgsDsRQI9W8UVRW1YuOrT75gii1W2ZlgWolPSxnY1vMbHEnYBSrf%2FOVgFmk01dA7L%2B32De1DAzWT2fxzEJoUt23D0YvP7GOQFMk7YJLburNNHrCf0PlV%2Bp0ZoPZ7z%2BWPbiWAiajPa23sNpX6jfwVhmZwVF0AFy6OEPbk%2BcmPuoppByAxODiOVthXt5zBui7EFCmw0YZiNWzgyEGaVzAKb6KwU%2Bj7nj40KRj%2BqJeKBAph7i%2FnTlzqsQ9nttpOVCTBhIBNEU8JQHcXxfwQ%2BJEliqyRFSps9U4IDr0UJHM7poCM9suZJkRthg4xA%2F%2BElo7uw2lagBrj0ujr3lk0JwYoZEayAE1gOeAfYBO3Lsb8F0MjYJaCxedoic6vHqonyzpgVSBsB9xmboGxfIhrVwvlNM6sxkNCBHNjdXlBO7BoXHeU1SjuEtMYwsqPpvQY6pgHJdNIrR3Aj6KfMkzn4cMAOXBiXXXXdjzfwx83ejIGru0SJAv6HPSfGLfXsDh7oq2qmf5aQQUcT4nHvSWv%2BKeoEyzFwheWYysS3KG2LXS3l0evOprfkZrOzixurXSr57KG4RL3C0M%2BtBEMsBSnA6%2Bqiu5SF5%2BcFUpoZ7ieEvjndFab3ieeguCrMMrdSTxrg%2FB01wM%2FFctsBa335TIp2bKgAXDmkXA2L&X-Amz-Signature=80e603d04a82fdaf12a04c51791724d90cbe7be938f48c5bbbde390a92626c21&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LZIJ7UN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T031542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERqe9TcdOLe5mDJ7tKxiasrKdcVVKPwep%2Bu2lYnfk%2FAAiEA1dVsW%2BS1HMv%2BqPc1wxIm8yZ2meVRnD5IXtLiPnXqTDMqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBtKC4bYprkn5FPWtCrcA9XwW8BkInsSwM5%2FlwpKR6ycHVf4VrB3FPIuKvp8lyw2aN5ON1a%2FuO2qLKloGfgTBW6QNMJu%2F%2BQasMOQZWrUuSEht9APokEPhBicR994hwk3qey5ttTrGb2gNhUyNFAK59HQfUnVBrxSwf5LH2TbD8B4NPmmAsHTV%2FPg6ZKG7Ya%2B%2FLQL010RVSn3%2FnA8ydLkvQu%2B5Wq%2FligqGBW0LSH3CtBaKMqfy3c2npg6BaHS%2FSNtIUL402owY5DHZuafsmaOBTmrGlu38ieNH48jzBc1vFC02BDffqSTxsuJLls%2BR%2B7WumGK3Ih9lhd%2Fc%2F%2F16%2BUcfeToIevcnyK5U6JkJyqRqnT9NYY9FFIzX46g70bzf5ahNseI1qwyqQblzuFkUfV193B%2FDut0%2F4CUFkMMT%2FG12iqLLHaQ4R5aRzA7ViHC4BwmKCIuRJLejrznD4jwM4%2FlYI335%2B%2BH9z8hwg4VTglUzcT6gqvD1l6qjVosNV1xsawyFXGjGyNvupnt1FRBwT02M9SGNtnTbRpHYmuXAqoFRpgnhqyPrTrdRkguSndJeQmngOWAdv5s%2FmL4odmtWYHGW7nnat0HK1gwCl2sYeKgkvz9o6ph8EDrOViiMWwLrP3DNzBsp4UTfP%2F6v12mMIqj6b0GOqUBGTJ92ycUTy4HmU7wpos6E2SeORtrJixxzNOwr7suzihgOoygUe0%2FTECLGf8Hsdqw7o1JED6R%2FadRGKWdz9F2uFuVluyaTttHkfNoK%2F4EhAQGunBAVNTgroV7y05gWxYrA6jtNj3CTqMlAMLNzWusUDLmNd70F2ZnZmUgfRnjsFaIn7wKfp0vIl0mMWA%2BVGfJT%2BfyhzdTfxG55Zkzqxu%2B8LzKf%2BLJ&X-Amz-Signature=181c10ccbcd2376a30741afdecc7d4dbfdb3ce89008c2207091a0c7a9f125631&X-Amz-SignedHeaders=host&x-id=GetObject)

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
