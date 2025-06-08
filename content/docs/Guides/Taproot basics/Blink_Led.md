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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LSBBNH5%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv%2FEFo3POtxgQTDVZekDwobZtyIJ9u8ujwEhs%2FunoargIgTIqjIzP8ekSal0zK1l0dXN4XOriy9TcCZp3N230tm3AqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPY6MvxZtRflltxXVircA2SV2wgmZkAedS8%2BkG2TDvkj2vTlAcjT7mwCxqASFoW9PZIuOdun50NOAxXPrgzXDeqFPcH6GZLmiahO7qpNtJiKNKr8EmPt2myAv1SpTMXHivZD%2F096hQ9laT0pEdGo8CVB6C61JoZfbEe8fp%2F%2BCuNo0YHTBQ0jN0f8UcGGUik%2FC620bLuGkpOckVUldetv1oXbcSVltu8DRTBT0Vz5LfkBPCWviQCF%2FP6sU7PuXC9BIEKx6dHfv%2FrLzxXyCNFO8kdRxW5ElFvZ4KkHIv5xMgFSoc6Ltyy91jFlQcylgJK9Z%2F%2F3BvcLhMwfe2tX1xIa6VtNLWg85AVUhh%2FHNX2PHcfGJk89sRqc9aJTgIQ5itNq%2BMyjFnBEzTxA5H6%2FxfDjMQnCdWqKZ2m1pVrFR5E3Fzvo6ypPmcXRNeV8RScFqV17q6pLTn2UAOaZTWWD6Xx%2FzEacy%2F6MnlJkU%2FDs6TRWgdPV6SomA%2FiZ22zG05CUfSvuhxkp%2Fb9olT4HOqUP0ruTKMyxChfHQAumPJc9BN4GMVtFUuhnBdgrOKV0LvFYdZvutFTh0wTsX6t52zueYjHIEtoD1FontSNTBYWPImmArcFh7ivcPjRsP%2FaMUQFc%2BWhq3zSTpYO3nV27J%2FikMLqimMIGOqUB7BBxF74LfL3DXaG0qbpwIXrFuQgJPNov7AwtLmDPdtpF8DruFQSv4kpZcSKl2YhkXZy%2FzOTS6mi5WLRxCrhSy%2FLwgWcbQ3BAkLyu7Lsqd0iAeLwmv30wv%2Bs4r4LpbY2%2BvTGM8BPYKABciGM0SX3txTTLytf8zjTAZakhhB1kfsWI5zClcUSHN%2BNjG7ssSrO6q3NZVjPdivL6fiUHTQGHsVw%2FYdRS&X-Amz-Signature=886c80e3f134362b207ee97781ad52db0ef5b735f7b6ecdaa931436def85ab4f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3LEAHCT%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSlHxlLkzgVlnunpLDjehcHWb%2BEyupusoQwg27ep4D9AIhAPqZ%2FJzRs5gfbPHLtqrHK8qK7SCgUg5AnbWrKvwzVRRMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJoqRnATc%2BMkhmvqsq3AMiPjiPcCkwPg%2BkHcQ9lF6fztL0yNHcrghgr%2FdxlE8N%2BC0A7mXv%2BTWPfyAungi9rM552IE9jW9ocR23aQkBvv8Ag1V%2FL1OyOXzTAs%2FXTrzPyw7AuydCvddFluYZCKNIiWGjQg4Tb6YsCca80lT8csc13E5AJY99beT9VYtO2x%2Fwl2VmTT7O%2BJrBDV8bVnDdZHGIzTuShWhob07HJ2lUNszxMM7RtcDzRCJ0JwOHSTV9bpDRgzat8xN%2F8pODi%2BYpFYhBXzFgRkJ7uyaVExHCkrKd4ihfs0KmZnAcGyCUegLwQs1fblmMz%2B2m6pjtVUIVyP0JbjdDNeeq30qhQfHSIjzjiVb%2F1NzcAEb8ygb1pMnJm2uaWiOQxgjnu2BK5TSBb009dwc1zNfDhsL7mL2ImNc7DfE7YVKz7gy%2BmUt1AYoNIDKy%2BZpMW%2FOVdWHSf5r66OWLPrYfUKLs3LRBjycYTbWcDFcluDwdF3r1nXpIVOGpWEjuHzXrCXlykjcv39khqJCUsCn9KshFlfn6CgJ1X1N%2B0Q%2F0cy2Sk%2FpGPKLvoW95QO0MkkHBbSveB9r3Rmuu1rgzJ432AboPMktULC%2Bl2F51GHnPdBLD6NeNUZB8zw0BL51CLrP4%2Bs38Ta%2BJ%2FTCPopjCBjqkAf%2FfBDXW2HLPJMMzovtLSlG9ws2%2BDGduGQGQzpvjuz3mPFXk9f0fXTYmH6VkP9kytXE0bpIllaTSe9ilxOE6MH3RmJGsFkevskugFirIZMYB3P7sQj44Bsb48LkAVGjtRHSVkbxzn31gYO8%2BgdxlayoJwMGQwdPyBRiQ7LTZeh2KrZFb6wZ5WoVEaRBHdVA%2F3UoES6ZvijMwQ1R8QiLrxXxlRYzE&X-Amz-Signature=9151e600c3c724bf4cf3a6d764627a6d76c46e91b5f678c53c544d1f71b07df4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
