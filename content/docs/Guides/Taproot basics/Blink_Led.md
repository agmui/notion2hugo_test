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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AXJFHT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJLhRGVg4TZ6x3A8hyFcKMBbGPbMJ%2Fc6OsyzJFp2Y9kAiEA8VP0W8fLNpjK57fOWxHDhL0YEt4bKdvHfv4DSO9Neesq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGQSfeUBnp3xCZ6QIircAzs1lxGAdgeClEPmH8hq%2BY1N7Lk%2BWBLJ2nbzE2ByyLSKXFwQ%2BH2UiboEnYJ534ZL34MNB7gc0dn9u9V0hV%2BIXpKJE%2F9LA%2BVoKN8mCPUsR07tjErH8cOmxl%2BhWhp%2FjWJRTraJz%2BVSvmwEpcIigxk0t84pRGA%2BBk9C9y2UYlc%2FlyskDlDWGn%2BAVuDckUOUtYmmo5qvyo7WuPrxx7RB8NgcCVqo45bRTsHWWywjjWxS0V8q3%2BIeuIXQW26k1T5FnA394%2F2mNFsvQZ00nijBJTNsnbRw1oE5CV6gQSYEzQ9uC%2BmrOzBbr2kYQKcsJlUXJO%2BqgnDDo6uxK9QUVCSYKqIHIMvSOEyVofbbiN8g6I0dpazIVWQ7RM1DOGGomulFZj3s7v6pF7HbVrn32i7wnecn9frCqsQ%2BWlyHgPSDhuBKnlVc4IVzabe6IMQsIhP83%2Bpl2%2FkCYhMiM1Y9zZFtMYVR7IbJlKRWNyiL2ooKTRHiTQUpBxtOYsgdmpbE4xtaI2AERTv6MXccjpZVKFJzfdjh5HgUODW3l7nRMWE%2BKWpzZrIMm6NB16J4DaSNDI6dd3HyXQqQFpIuXiFjUhkQrBuIa4jKbLT5FbXGIeDpXkwoxNyrhhhuPiXAXhW%2F%2BBHSMLq1zL8GOqUBR%2BpnAaa%2Bw5tpUGYxqrx2sbK6EsxUn%2FJA7D7n123Fcw4BiL6t30mNV0FARiIPpm4MLr48inMFQsvRnmgLDBqxQD6X%2BLzEP3d3oft%2FG%2B0xxv4hxeDTKTpLQXr7xENb8DGfVNpC0JWKLGt%2FD8ppah6iZy0DeVqhPYdMEac2vvQY90DTYo2ebCh2pQSFyKNd3uGleRS5muoAUNi%2Fofu2iKbc9p5mXHoI&X-Amz-Signature=a8a0fdd73b4f1e9881fa012a2e1de2bff438d4790aac593d59ccebb09be16a74&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS52A7K4%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA49kK%2BxCzfeBvmhnecmCpFgEPSxPy2gyhMc57n2Ll9aAiEAwK7htHU8VFmECjULPXLLCZf4bTiIXwLIaybIRE1dgK4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDBOvKk05udpbwgdk%2FCrcAw00AJiiWu5%2Fi7bK5V9r1UOYeel1v0zkiVU7mE91zlBR3m94sKniNTUAGye1M3Ivf51gWAOrthmANR8owjkAejYu7qT8UHOBHk4%2BrkbG%2B4S1Ga6t05L8PMLFV%2F%2FNd%2BbQq903KiZGpAUAJ5VXNmHxcdxxhV4pY9CQz59Qz381bqoeAu9U0B381qV%2Fa2nHZkG6apn%2FSR%2FqSk29wPsONAaSJeTIU9rhbef%2FgZG%2Be4IvaDI6pc1zThFPPTPEuq13GL9kc8IbOSPe4ZkRHivsQ9eu8r6gkBJTZKt%2FbPp%2BVo3AmhVRu2ki8EYcVikXXtgPOPlCcBtnAOsQeJ4B8Y4c5ZhhsvK4KiBIHOJ9ObnABWIxyEEIPLNmCouXdW6HNEuz8t3ns6gzWHtcjdhWOgMWkSF89pMTrUOJ8%2BW3Oh0LoBoOHE%2F52ETQPKMClumG7GqsBc6IYjDxTnL4feWUD3gg%2FYzWRNb9n4zAlnvbm8j9ERZ3i6ukf5BlaWoLxAdoXWrt2mznoYp%2BDrh5Pj6sc%2BHiJnTHtZ2%2FQTfbpowUqd53n8%2FEExf0eMOtTT5wt8BMksN8W2mVe%2Fn%2FlvpjvCjvDsjlZ7mGVagEn0GlOzbT3egWXkJ%2FxQdBbWwRiV%2BkEV1Ig4qtMO21zL8GOqUBuA0QFPY4r14ayTmGK7dm49xECr4qbaWmAS3bf89KDseYTGatE46h0%2F8hmfbfeGlYCcs3Zdu%2BpaBRYEyNG73A4%2F%2Bxl0JWCn8o6%2B4bRxTuDwj4SiErajkBNReYeikvelUc7xN1z73Q%2BAj7NYq0q82ojDgS18RL4JEfFQvyWrfVIsvA7q23ueQJPtl25S0mydnZnVD42%2FiHG7XVxGtP2VnpIIjvYBZs&X-Amz-Signature=e3fa490a377f1b39f930147aa6dd8e57c1241bd501f68c111e13a4186240c096&X-Amz-SignedHeaders=host&x-id=GetObject)

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
