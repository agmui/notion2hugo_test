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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJXSPUF%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIGcWWdd72Uo0pC331ozhO3s1bNZL3XiXubCVc5gAgFj8AiBhenbwmMqot7I9oD7oByc2Jfgr%2BxGiiJLe%2F49j%2FeBXNCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIM0AK4hxhTqTvcx9c6KtwDTU%2BYoVtpOKQNEq4ndbKimIfXx4as14SW4DFmDGdBQ36wZ6io1gEqgnkajA8umvkt%2BReVTYKQkkKUV1kkGSQF3DARAgWpg9I1ulfxKor8mKBwXTw3I7%2FyuUDZCazqo6v915wJvip6atyRaDeNGyrCL0ZdU53V6%2FuEUR1rfU2lkfZv5RghfobD49bJ842Gnfe4%2Bw0Scam1m9Gh6LFrGLFgYX8EWPtH9cFj%2B4IVIK94nH355OctsGJjTM6DfC%2FXjJpaycEPWD68iacqyAH7IynEJZQd%2FtYsEkPdhrtub40IL8JZNWLiKtxwUKuoQkv%2F1rS4wB5%2Fn2n6NPJNrp775Dm583gF1i%2FDQ1VoZ%2BLxRRN5NOlaP4rXHqa3hO6vhXTAC4DTQAYouC%2B%2FAlr8BP9Pgxg%2BIbmzbTr8d9j6tbdHBrJmkrtiF1GSGKrTY9oCSWiVHPv4bRfZYopw57e%2BFmilJ5n6RBWO%2BvjEeQ%2FGscJ2UCAQ7VKFRdbDfz8ZBpphiaUN9TD%2FPgx7de9ECKSQJMtACotEPx%2Fosj0%2Bd9gkq1IhQ6MENFlnfgWHIIVUi2ZjjklkpxMV%2B3Yz3gsi3Af8Jl8wNoJwS%2BgF0SRBA%2BWn63DElU679IqGExYCS0bx2IEqGUkwzPXDvQY6pgFTGjr6sxW9B8yIhSfr8jbjmDMZUy%2Bw%2BbN4OptqqxVETvaDM0J50HAcR4EVFrJ%2FED%2Fhi7UO7wDv4KR2efQUx4WRdpJh2%2B%2BBsrnm7nZ%2Bf%2BfSzs9zykxR%2FLv4UQKZL%2FMtN3j3vgXR2IeZZU6o2fO3Sfrt5%2BqFU8gAfUY0CIBgjHlNEO2daS%2BlGxhZwoCUiN7l%2BVMuI2eSu96pU0A8cft42p1DNBs53iRn&X-Amz-Signature=76bf154a969940741f0517dda86b4703278abd631d3fa819100ac963a1a56a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KBVTIVB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIAU5i38HjAALhIZM2ypEKUHMT7UQfKSDn3z4DgPNXL0BAiAcvvp7aQPjL4Gzctk0%2B%2F%2Blz5EpyvMtmOCgzpaoP5%2B7WCr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMpQxUQdIo9lqmifTNKtwDvXCEY6GLWc%2FIpFCbrpe0Yn7fySdNQUhAyfAjMC2WYqVo4BI14JXOoWfldNBYGPwInOmk0HvqlCS2qYL%2FhariLmnJ%2FENhSPsNI704gLrt96m9aTmjne%2FK%2BZ6%2BrbqfB9Tw1%2Fl3uD%2BXyP26vuBDLtvU55l%2FbtA1QqSitry2Tg09y05k5UtIMh%2FJCNtKvaX%2B2cLnMBCSVws05Tylemm394nzXnZgF6NIdvOdzKxnXbuiYA0u6QMQavJ3EKPxYr4saXm1WExweFBzL1vPlwamXH87uOm5NKjyObVKQ0n7P2wDblSayVjnxL%2BoLLF11FqJJJiGDpZ%2FWv%2Bg9xZRw6EHHEXjw9%2Fd3fPI8mCTPsDDyZLjsTwUEPmC7t9gIsK7Y6kaksVUk4iIEbxrEV5pJmaOarl6KzRxJaqUHpySrcm9TA%2BskqQEIoeMS5G5mCkgblHpYrONV9rnc1LlPvJmJr2p6%2FshDN89umdfzS8%2F9%2FFA9cm9QCdqQJIdFv7PKgymJHmX5alUEHGGzzJ2Hvwsy%2BHuJKhstge2xdOAMmxW27N2trYVw2FazLRAw4s7U9RvT3WonsiojTLWkFVCEWt2K4yCIgne0oR0kN%2Fe4A3imln72fJY1kNeNe9LLimL6RHlv3ow%2F%2FXDvQY6pgHOswxYEo7dyOHfvFNADlfjq5Wx1K5IR3MHhh%2FDQZVDmhh4UQazVGTgBQxSFyZBfWsYPHiDbu818hytCbK%2F46cFLoEkYj7mHfvxBG2CkOL%2B%2Fi%2BZ96v4RSUZtCk0SIOthVTrLvveVQiqW8P%2Bchmen3MiyhylndFyyQb%2FEB9ZF9pMPWr1%2F8UGBvjLwrlCLGjRw%2B4%2B6lkU%2BblFfBSwsLFjF4G4iysu8ztw&X-Amz-Signature=5a543d086e6f2aaa4f5bf75f25d6b714279cbc06bd97012cba8ce5a4133378d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
