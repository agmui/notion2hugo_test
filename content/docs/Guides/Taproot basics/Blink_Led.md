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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZ5F5TJ%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCewD0A2ME3sRox92Ni6HqzNy%2BmlvV%2FzFt4K6hq4oMthwIgN8%2F0pIC6FAA6a9k%2BZAhStf2rV6g28kxkWk6bg5DfGzAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDUEBMGEnmvO7BGqNircAwLYblG8nS11RNb5%2Fp4HhYlGsezazRdArMTKXw%2FrsVggdrNoXryz2%2BtupMguGT3NQciZbJKM0cxNfx0wavZtnR2oSUFjZR4I1oCyeBIJZBICQ4wtaaNQTtpSQGlsCLpZWZ95F%2FjWV3REbm1LY1f7GW8EUqLHhiikfIqVPvwWoKngGyex81zKrknrvqlOozV%2FjlKQoprzFc%2BMVjHTO12nYYE89FfTrGp1oOFBAsQ10gP929Y32RrClwfVVs4x9vGkZgYZOPtQfYDe4zXFtBho1l4GpDVuNFrXfVSvR9m5nipUm03LvA4r0zQU6paJo6oJ8V%2BANN7ZLATLs%2BvTue5mwFESSRZI9Skl2joP8E1GpQZA8vi9y4gU0HTky2B2XLA6aXmVSxusN4KqVtMlcGRjLY4ZaiQBzWyAjYPQIz9%2FzCmVFKerWsGcocTGr9PMpSEwiB6vxWhN4yiYhHpp7JtsL2qP%2BtMpZd6ENNGmhi5MjOfaCM1FZBvXmDs2oARYr5AewXcyDLSLe7DA2qVhsWKJoniCViMjYLYGXufcImxwio4VYn77Rme1K%2Bnb7QVFi99YNG3hBAEWQSTp4r2uHCTp%2F7wyndn6vAVO2%2FYmJn%2BhRJfkj%2FfFHXVfLLF67%2FfoMJqo6L8GOqUBjDiGRfG4alg1md6MaCmi944NBbRFP7zpdHoQnR%2Ftzitjz3TiL8IyiRU8FqlQDgjarH%2FaQMJA5leceTAJ3tvt3%2FCzCYgaHiqPfenhrxl9R%2F%2BywbkM%2F4GHmFce%2BANBkGKX%2BAigef5J4Cgrhhq9z73gJ4Wr%2FFxLtGq2l%2BoS%2B8NBg7WMZcDYmA%2FbLi3P1qcEopaBLViNxzRGSqSH%2FBoXkmPKzsNnLO%2B9&X-Amz-Signature=a1af01fe05efe8088c86bb3e4ca0e50ab78a0d5bd811e55ef3f084a4bce78c34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBEMH6S%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD2PzhCSOlepVhu4K22cGIrQmOYoITsLzJOMjsdMS%2BLDAIhAIVwzqTiB0XZ%2Bdicvbuz2DaXU4GXmjySAJxgIhA7%2B9ZQKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7frf9X7iP1Vn%2BMXMq3AOqUQrZJ3X71zuwGOzL6U0a%2F8xXDo5bOkls6DXukbil10KFcEsGr8jS%2B%2BNRSS3CKQJA12bwZRap%2BMnopYezc2mvlMkE4K6nXy6q65BEZkRewxm99r3gWgtvtL28mmCwF1S8SGQXA6MKSmXPrhLLb2SOur%2FAfXQK5BlZbVoeprVFeYknPMsre4OSHIRGH1oI4g5NOLyifFQYfoQ8Pp1vihIc7HIpcDHhff6D1MNqDtXTcqSWcn%2FlJvJzgO41h40eGQq3LLogmdF1lxnFtb7iMmY8kvcKiaIME1iRxG57beUl1jniNneAMHff7uLrOkK4MEUnkzj2wjhBExVAfGEsk%2FkFHGU%2BMvDyf%2BpnZ75uDZwXIBsEh80WzeeaQ5%2BymvooFtq7dwgvQRm9UNIiWVcShLcRNqtDlm3v00cWmuuRpqzujNZLL9fxmg2W0PuLczf536ZfqP24%2FyN4n1NsF05u7sDaf15m7n2F7as3NIKOjQLp%2BuwTYHMCvNAnNUJoFP9nNwQwMOuL29KuT0RnUXjPHvXCmZ9T6J%2F%2Bl9YkmCD1UnJikAtF%2B%2F6aHsdil3Djzmq0Zaw8ZYT3C7j8SGf2IlVBaWNxebQbYx3iWVUaoFRfcdfedvFfrClF0EqxIVVDpTDRp%2Bi%2FBjqkARFPTVHKI%2Fv13BoEV%2FmDncHmeH%2FEpbAo%2B30blCIev2TFKNM1EM%2BNmVPf7XF5OZX7WZ2ac5cyVnfInFfpthzHT%2Bk5ON1%2BlGersPxQBoGVoEIh2cQcjvTtsK4naiknmnsMPnWWQ0vxIKiPIY0P2FhKxsimYxJGl1n4PtC3p7JP8yR6dHLOowESJwGXxXyzvkjT4sepYavgrwS4aNuEl9EX6Muc1pPA&X-Amz-Signature=ddddac191576a729769b6ee6029c357ace933b3bfc61374e6ee7cd333d065843&X-Amz-SignedHeaders=host&x-id=GetObject)

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
