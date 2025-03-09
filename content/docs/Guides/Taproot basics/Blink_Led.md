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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7NVM5WL%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDw5uh2%2F%2Bgx%2BXJxN%2FAWrOmknqO48KPmcSQHc2%2B0yMDY3QIgTqL2IHeJ1aL2Ictkx%2Bvfkk64xtN3cjx3BsN1Um%2Fh8vQq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDALI3CHo8qJLD0NlICrcA7pEqrooLje5TD5uDzovaFAi3eG4cTVjleBgU5aZC1mNJ%2B%2F0huWqhCD0v2WFVzhEKcKo8%2B36NSZ9gwknEJuaG2rCYFwrCz0oVgg7WzMr5S7kbovONNhSWTz3J8CIJJ2zsu2%2BYdS%2BE7qAWDYoorShDtfR4GkJo8G9lLYm%2BwIq5pu6I0umt9QzH3%2BBzGSUizgpTb2yMOhtvQn6qvHED5xRnypWxNKMStosxCnkvtM2r%2Fo61k9FfAyZQJCDKdjJoEl6KO9heDnLrkldmUtLgXrAu1WzOJQuJLkw9Olff%2BkdKKwZXxLsZ1R0RmW86IMcIFrSZSlwdAE3pj%2BDzU247gQ%2BClMpnSNI5uujWzXYbxABq%2BbkkksIVkA68%2FOrYhUEGGKx%2BKNOQOfHIU8DQw90eV933zu9zXqCZqKcOqJV4BGQx5LsRHJiMLISIjNlell52%2Bw9SQk0%2FVI4cYNyWF6MWNvv5nyuIo4Hh0nMua%2FqjYuViOzFEctr0ts5mrRVoJG%2FumveWrTpMmD39ESYd4UYAKvMF7%2Bz3EwfXlM6cLd%2BPe7FI5DIw%2BWSq18aRbPvPfQRHod24wUP%2BawPPK61EygR6Ujt4uAJ4JbyRpANjqfsapr6TfqOwHD%2Bu0RGbpB4ojxTMM3Ytb4GOqUB%2BqMV4HPeDBdb%2BJ3SZA82MRROWAKWBqZ2Gt90JCg48JXrIXPZndfcUxVzoZPY6H1adXP5LUJb6gFbn1Q62qOXBz5CmI7iG7PDkcFIkwLL8%2BD8ip8zlx92Sv5R4BHGPmcBR6bRhFtUdroU3WYe3YC4HaeqWaHrFt%2B3At9qEx%2By9uJ0FpLuuU%2FeX8HzT7dJwXnM4tO3DS9RBJN%2FHDQlNLNlRt3y2uRl&X-Amz-Signature=c6c7c3efa637e618361264faa921515dcd04f67c59dbe4607eeff5af8156c567&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVTXDQRM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T160707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIARYifSJqHDMk9i%2FMU52GvT2y6t8kBs4Rgk2%2Fbtj4t35AiEAk%2FEY2njzgC%2BLfZJK5Nr95c0h5upY%2Fo3HdFG9jbIDOIEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBXaz5AQSn819FV2DCrcA7PEMyXflKrpM4uw1GXSaUmr0XSLSBQIu3sMR3pDA5mFV4H0kJTe7j%2B4aFDvJU0wa54Vk9Sihxctu6Vi2hgFdVa%2B%2Fendz40TFqVsxrgdUUKBSsFekVOy9XKLpaSZlZO7ymUNNi%2FGWE08Jm6WsOc9dcWS44yR8YUjKl8i0%2BWHNW1G66kAJZ9chL%2F4F1FSq4lU11P1yXkjGlys2fjkdRMGdfAx8VlCY4XFRIM7gEq%2F%2BJjcBhOd3Q3l4zDKrKizv9BlgybbW06Wbi4Wh4I%2B9tr0SNCrnCoqX%2FrKiQFb8tU32OjjZkm4g7022rSayiBKwkkmhmiuszYewzfcyeJ0z0GM%2Fjd9465ILfxk%2BW4uvwsT%2Fo6q7jeK4vvt%2F%2FYehohZ13iDYoTXAg%2BLNGtJ1vmr5HTjLdsCo3zukzyU%2FD%2BX0ECju9vnyKJm4fKErOt9zeOmxpdR1MujLuPEa840K8qhFr5gKJOrMdj5noyOxQTa58FT%2BKx%2FqXylDHHGOrBTyF4%2BzXGckPmQGbeQO8lhiTMnorjU4B3T5WPbVOTGQbGLgcaR3U5Gw%2BzHMc%2FF02nQOW%2FMemIvwNrVDcng4%2FHtRb6ub6Y%2FQTCPVYMFzrs3f8pUkyLF9HX7wDW6Bv5omMVyqBgwMIuItr4GOqUBDDKImYgDZblJl7knTimRyvroqUupF7%2FBNgFyspa8QpzlQ1B9jAABVpywr462xLg7nnUW1W1FYG2aBmPjVD5e%2Bl1GSGPKB3HWZ58O2bAow3SEstxkrs4yx53urfT4kUcF6ivY4GYxt3hPBl0zc8BPV9ujYnmeHYpM7A%2FWr0h%2FRB%2BFJvvqHDJHhcPH6wIZ%2FSdvbmRzjfaIxj1upNSAfEvcYwiIJ4c0&X-Amz-Signature=04742a1c4a1db04b5faa08421eaaaf59ff339c23e6ff94b5b8656d6fb919dd59&X-Amz-SignedHeaders=host&x-id=GetObject)

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
