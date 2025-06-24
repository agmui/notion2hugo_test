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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIEGJ4NW%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQC3XcmAd1Qpe4tCF8pfqlCEOchRO8UJRg%2Fbc1qbk7wCigIhANcSsxDAOp3MX86wYBiVKdqc91flKMUw7ZRngsvPk6UYKv8DCC0QABoMNjM3NDIzMTgzODA1IgyJKb%2B%2Bw7Y6TnZ09kkq3APXnVywNIABnnqEpwTBTpiGd0cR7X%2FH%2BnkCd1ItjvPCbV1xDmiLb8jmUMmdvjHDItLXYYDyfT%2FlmGuM2ux2Su3V21f0RykRYsXTGO2WbBf2uC7ESZGP1W8fWVQbl352ppeI5ff2uPY8%2BXMkT7RVrNZTI22KlZ7eCU7RnHuR3GzUwNBf1%2FHy8VkontEVMUgWW2s1tsZoGHCnUZS7%2BSQA70gxLEHPZtZ9MujJ%2FNWFJIkA6823zcfpwLG8aqn6WOiqWzPHbVD9LViK1t0fcddBf3OxVWvfu6xx0F05mokc7n%2FnHG2lS2B2QfFDcyMU5icuw8e1nLSVO55Y4BJ6VRezPqxR8PTfciT90BaufBzsmdKBnTYPTyxSzpNmWsOjcSkeJHnATgUAXBLWaIHTYNt%2BopP8uhNFn%2BG1Xdq897%2BeGxDanUlDU%2FE0CbcWsZ4O%2Bsg%2BGc%2BeZ%2FYO2cJgIqpAcPlhsWwG1Nqc6%2BoPcCLCZPsDIn6ZxyQLsVK%2B11iDg%2FTIusAhRVgk%2FjKc4wnXVqCMLxpUkFusedheAwhmU8WaPOF5FBi%2BZsrWS6quL5oniB%2Fja3DLeadvp9cmqhe5owTGWZWwv5GucnD1wjXDAAl1qA%2Fu2W9lzDpppTDZSQUuPq7dtTCMo%2BrCBjqkAcEN1gK%2FXBaXRaYyQXv1ksJD6w4GFS765IMELPrydjsigWrG%2B3ZIBL6ZMeS6B%2FHSe04jA0ciWVNlhSy3zpbBkp%2FJb8McuSnay0AvxAxBtXzZiX11aaAy5bo7LgAFnUDSGKqTi4XBRMMMYJ%2F%2FZlGnaPDv%2Bx8ceeet7SzPviUySWRPATdJPjFvF7OKXTlEyZDL6zWU76wsD%2BfCTB9HJ1eYi9RAT2z0&X-Amz-Signature=fc98419789e3a9ea2a37388fb1cfd9f2a98adb720c319724fd3b51eb0ff8a282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TY22RZF%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQC4uK221tYMKUtiG07y8iz38LzweQUg0gaBI9NLG9afPQIgIJ73oCrig8Jh0ebd9THORZ%2BzLxipiKYPvaVqfy%2Bk1lIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOctTK6v6i3eZb9n4SrcA71usciurw2%2FJd89Xs%2Bh5hIsZKfKeatP6fRNfuNNj4roQz9%2B51PdST%2BYKq2xaB2cfzQbraxRodtJIp8UFYWfhhq%2BeG%2BBrXZD14kiSBBB4tXBS7lN47rdH1GpVoYf5O1DqlRNgA9Jcihb6JK2QMhcVa%2FWw4IKUL%2Fga1CPeAaJqtBksPBKFP8TC%2BZC%2FffOK7KMZF4CrjuZ10kYfy4PlYFgX8f1V5XrQTM5ToQ%2FepCtnLhcFNh8viTtjUwzQplxAGAcA5EObtYfc1k%2BSvAXek7iEgy7b7l4%2B475Yr73bllwZNmn4TpC92igydtsscGZ66A%2BiVV0GInvn4y13UkVlrB48cbAETwbE8hDZeTHinB6Rxwc8AY6F60voh7V2n2ZNcIGMClduTmhMRrdW5KWIaHDWuoD%2FTYkfJVO3%2Bh25ivB15yIE24z2%2Bq%2Fut6zHJUFDMeUDZi6BiZq6ihlMBjCB6sQjMMl60Lm1U9ESBD1uZhzQoEogf%2FUxljz01kQpf5KFspoWSA1RvuEJlPdINhf9ib7lZZGBqA6Y%2Bw5k5S2wpo%2F697BzjA%2BgT%2BjGGnA5cH4E6O9u1HUbe%2Bhgce93i46A5rDo6bnaEoa%2BrbicPvG%2Bl1sT8E5WwCXIawXkhzE3DRrMIij6sIGOqUBbzEdJdsvQDoGPsU5p%2FDpzo6CiOkIVEZEvSEa4ULGMXzAXVH%2BK%2B3cBM6q4JPJNPQUQTHEiGMs7VxJfIQ1HeAlxXX9M%2BDN81lMrghSjFr0ilpNS0Mao3ECKQt4tj4%2F7ZgsWyPdCGCa4rX%2FqXbn2lNNzJrLiO5eKUcKJM2okZAz2fHGARKINKvVQb5DLypVUJhOpBDaH7Divs0WOnWgezvxY%2BcirKSN&X-Amz-Signature=360b2c90ad57ddac99a5757959eee002e2f0e6b41e576885f30af24677172f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
