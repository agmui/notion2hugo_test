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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR7CWM2O%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCbhM8ZVAvYHmqLgOpdtS8kZ7vQBdrC%2Br9zoRvFfvkwegIgINnH0kCabK0Q5x86TRbUNtwWm0ft3Vg6H5153L4JAn8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcfjS%2FFmVx1nLinNCrcA1PUMe2GWjoJBbMg7Ab90EkT62oE%2BlTCguJJPVyk1%2FEXnpg2v%2F4FU2LydsmGl7DIXE8j0KuvDtxJWGktULkguLtc2pMoTZAj8CpTOezQ6cV1wzcSWNGzdNCB7DznpeC6Y7izDbdshV4ygAo1ui%2FBq%2BB7UsVreC7S1E1FwAQnuY10MlFXS71rXlFyUDDqYeETnwkDgz1XjhoLYUMXiPBSepnX8vGHfje0yuKZUXdP8mWRLHjgwCTdeh%2F9y8hhuAAGCHtNcHJepdCyeDRzH6cD5OcR2P1Eo697inwfP5nu4VhKYS67H9rtFs9ctUAi4eE2V03bXYlGIsPN%2Fe0aNmTIQhkIWl5PsRzWlclClzoyyuVQceIMTediYM9WAoHqe4Jn%2BjRpeJE7mkPFEmEYiA7gEn%2BzTZwDfGeMbZiYxT%2BIm5uwti7fVYMmz%2B4INRquVZCfa2Vhc6mSGDJe0%2F2u0UbFJipdBtwvXp9lv2Cg4I1YATy6aGADTkxTRIa%2FnGmIxNWUlO9HDITBofYY6S6w%2FK1u9W9ASpJ5AAZNkeG9Grde5Y9aoPppzKEFqbkGnLwYP5UabJPP7gAD9eAs08s70oH7lrdUWjbrVu492sf5%2F4awlBUQ7KGnLnoaQ9E8b598MMKrnsAGOqUB209OczkOS7Ew573m3V9bn%2FLAZHUuOyAogT5CW18DFo1icVlcanUSgy%2BhoZdbxOslHnKVPiojKdxFe9TUATHJCNQRjs%2FRSfj4zwxUklldlN7QQ5OG4vrQdF6njx1PiJonsgkb0POW8aiewYIRSdEnZH6c9NiSnNpC49WjdtNwv7O%2FTMcAAIr9qgr%2FW2w09hO0jsRW6Ml7g%2F21Ok0WgmqMSBub%2FIAM&X-Amz-Signature=9715a5c4b96e388a61f26ae965dfab5dc773b671c6fa56dcd6b5b33bde62394c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3JASCYR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIGd6RYzJ69VkCAuVMtMnYJo8SzUQWXe38X3InHlbse6bAiBVNqDokgpiHS%2BxYn%2FGGugCDBNE1YdEx0tRrXWN2UN%2B2yqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsymq%2FDssgHQfWrp9KtwDILrpaAZ%2BR8P%2Bi1bNzdIa4R9Ied3A%2BYuOozbM2f427baRqzPta7JCL0EfdI4zfherTM1xPl%2FpyX0oK09iq4MOOSAfUEiI94Pyau%2Flw2fwLmuUhFW3sP4n%2BHhnTZfmLeCky%2BTQ9sXrWVQFyC0gbx%2FavqgkXSK2jJJnpVPQFCscxHUsB2tgaR3bkMLbuxoOIUrNlrlnSBWpCbSjLdZsSGUTdXck5jpzfm9zAWRFWqKnwIvlOLt%2F2CWBQCB2vnKzhwKLBw6gBz311aiGOyWCK7RxlOKv6xDfkfa2rvermi5GxGn%2BRP0IWqqI1spOLFYsjS%2F6t%2BpGqA9e88q9iMIp%2B1YOowIMIRtwKiUAfdipNvI08jvI4xzW8dO%2BGbCeYhoWirO1HYDgGI8WfN4%2BOw80TzvSrk5Tvc2DXsqCr%2Bcv2q7YfQEifqyXkJU6Gkjq7e49U0gR%2B9xpYWogxnLf1h4o%2BxjUHdq2pgXP8yPBqGnv8ATn3dS%2FZOaT%2FxGzxaomW1s4PHP9V4zBxcy1mOC7EHqM%2FfnIkZY3socTTPXH0OcuRYkl3k3H4UQtxaG8kd5WpLzaqxpKl0E3BYRbZcFS9uZzTNyWgLXWb0GwUiQ9tIb2QaMPS7%2BDzbxa%2Br2ETlnHD9ow6aqewAY6pgHnHu2TIX%2BpEC1mpJVQcYaXZ7n%2BWHzl6MrYGXkhXVAtBq%2BwMgAjjS4XjaDeUkFIhmJZAj45545vKFKpu80q3w4zllWY21LvyO8qI8HkCBBoQtwBEmoHNagkjb8YinrLWez6wacxVWSvDVo0%2BAfA2j59sgyoYzbgZcUN2Sj8aTH9nsTKQ4bSt0R2cOGpOGTLlD87FeIUWyY3JP49gTNoQZG%2B54JtRQWs&X-Amz-Signature=c30887465c28acc66b360bf833f0359c7a4af81c4c8c7cdb3ed6efaddd722477&X-Amz-SignedHeaders=host&x-id=GetObject)

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
