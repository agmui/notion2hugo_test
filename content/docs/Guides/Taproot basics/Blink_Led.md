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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW4TZDQH%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIBs1FpZP7z%2Fpquv7jE%2BfAVEQ1DbI4eBUxvdxtwgT%2BeYSAiAPazA7Q9C9KI7n%2F2rlFMrluqFiaLRM8tbQtPEOLDEviyqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG%2FCpsLnrV%2BZ2HeY4KtwD%2FkbnNcGwJYnKxxzy3h1%2FjGxCVL%2BbrM5I0ydN%2Bv0XA66l0nPFGjtORrfe7HfeALScCLA4cbX1NprPTl5aCsWdQePVccwLuJH2Q%2FBCWaMlsU%2FWdxVMml%2BrSxTaQIWHwDzttCLyPsc18zSRzm9xY3IAoVPspPjAqVOCF9Egn6djQy8kfyddLoD%2B6dyZrl6v3PjRVFj%2F2ayDVYK71p%2F7e%2Bf1t%2Bz85Hu7Q%2F3lVLbTmW0ckoQllA24DpJfWti7LmQ4Hw9CiATNlX%2FjN%2BiPk4hbb%2BGpFSBCb9jNxILGUE2YE3k7wqB77cP6UPMc0SSeyuxlxAQ5wYzOyPUh7frtpdRhTQxZkUgAH1%2F9fsUMg0ShibW6AVGrE4xS%2F12mnBmBbdLsrrN%2FQZrV%2B0BSou1CVzevONjKvZi1fETdHimySwORM01ceLSRNP%2FushxLGUYAb6UfLNJ9B3iBy8LkuImIiV71IMEmjsZ7NgGq%2BXX3c3dCrmMliCMBw9FxSuuOHOYgs3ddIPeXOnNQnToIcTiEh%2B9h6hXsh6mDXRXBM%2B%2Bi3o220Pl5FbLxVoOvdzsY29rVrdqNpOWiQ5fNSLTlzOfMYcHUku7AS6uulr%2FZJyLedcIfGq5zb%2F9usz6vKjVaeUmKD1Iwr8KTwAY6pgGNOIMLj7M0wPFsPtxmX7UsfdfPooHyjRbrPYR1eDq%2BMjEvm0beBQR4suHWy%2Bwuo%2FpinAZWhPoJkSDCo2T%2FL2NL7ASJzWxQT%2F%2FvH%2Bs960HRMJohDgE1Dl0oJ96VsOzfbltabZwrebemm7NicgeRvDM4xCUZI7jX2V9l%2FTef51Wv5szVs%2F1ItrzB4P%2BEhEZTBuJjKw7%2B08RrCEZktPZ8IO6X41Neftaa&X-Amz-Signature=c2c9da3242f258f3bbbf1f4d95be2796731f84cd9853a693a35a4b272599d609&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBGHPM5%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIHJrMNyBK04boSC7mrqSkKUONsXGWy%2FGlFJyWeTzXfe6AiEAo3t8scY5ywA1ujcwEqjqXPeFinj1wJI2S61r2MGRBygqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxt0lIIx5EmlO49ircAzJcnQjqrQIbJA14QJ2GVEh5vssj10D%2FgK0LHvtV6ETumk5cusL9LuXsBCfkzbx41d%2FxDwXc0Hi8mK4mhMWW67y26aQZiF8%2FkwXBO7lhUQOR1W95m5Zevc%2FNZjEYPSqcrYQ1ezU8z6otJosB%2FNlKSf4G1wlWQgn3VDnu1XBNJpLT0BzuWEpXCgiPYjRi7G%2BYeO%2FSn966t5nmenUcsfcRHvPUxzd7JrCHe6zY7nSw%2F4MNlI4PnEF5g%2FkSevzXeYE3osjtTlcgpdmNlai3%2BMMf0kZZCxG%2F9C5JSTbxu4jp0efPYEJVeJTaNLyR1Ag5ccVPbOSDEPgoV3C5d6nL284QiMUAQy9I76O75dss4jMfTms8dhD2JQp4FKtFA5slwv%2FhHQja%2BlFPrbab%2FgnKywA2Zu9NO4KO1tNHOurk9y%2BDjSX4MmCzNavSpJ4AvSkKetB1JfxyaNyT6deTY1xPiSCT0AvGQw%2FdKVOtuy7%2BrTUzM7%2BCN47geeZs1xYzOwQo9Oa8esGdYL1LH165XqJ1UqFKkdn45zQO0b0u80tgAUxE0tmVaTfEtmI0IeFB7rMlmXlgUyUxuCS4RHbfCbYzK%2Fzkv%2BFppL%2Fk3b7GNeZ83NZKFvjTTy%2FFjB9S6NrD5FBYMNbIk8AGOqUBY%2B26K4TgZoknHQGrX5z9arTlNADN4NW9qM%2BoWFsqMFu5eBCE54XfLYV%2BGc8b8jHMMmzeJsGyVlHQF2fvOewPaCXtEImPnBD9allWW242V8Zg2QE1aAStdUIu1wSFVbz%2Bw1sMZLASEGJGqux3Zvbjw3lxLNXDJBAEXdJASTBiGgzWwGh3P3pYo22SQxSebuTZHCxw0wbeWWcHzLLSaBjnobDHZNlY&X-Amz-Signature=5284d2f00a4f2ecafe0a9cd1f3ef052f771981b1442370a2e5fa23fff2ac733e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
