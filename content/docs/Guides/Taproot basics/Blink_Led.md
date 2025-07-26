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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674COZHHW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICF%2FB4eYFUWV9CrHF2Ces3kzF7GFrn1TocmQ9pPvWYVpAiEAznNxyRQBn%2BAn7UVv1PXFttOl07OpABtiHgIi%2F8R4C1Mq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBLt6fYlFu6kZXzmfyrcAxJPEMDAS34FkC%2BDos2SSe64JpKQppjUpIz4Z92zwO3MVM4s2CSwMYRUpkiEkGpXSwmitbcJIXj%2FwO%2Barx8TF%2FbKUjX%2Ff%2B9jBHZ4IRLnHHL3%2B7v47aqBRpDz20YNqd39P6QRexwMcBja0%2Bn1VLnvR8s9Vt9ePIJMlAfW9mdzeYJ7mDtSkCL45O2T%2FPyRGuAXdV6OBuBa0uROssCITT8ZPzoMNfWE6umNzxauRteZqGJyfKpufYcwOiG51QehEN3rBpsZOQMXb3UIUM0T2hs4p0kfyM7vP%2FKgdnHddsGf88ZNbaXFtgVVP8u%2FlqLi%2F3hVLcWaStAokrGb6aISppuDlUs%2F0e3dd62roI3ZF3cIXVsCQLRBbU9lGcu9YCd%2BKPGK7umPk%2FBGj0svR8jvmIDLBqD8wYl5Tb5LaB5qsT%2B9bD9kmZAyC3hhcklMP%2B0jczf7E8nYikWxtas46Z0d2akBwEaMNILpYbyiXcecL17KzaUCKK6CitZsUsdYRmAYz0nfcFhnCCg5ObRHoC%2B8IjUmz9fOSgeBOyXmGUnUjHykkW0Pca2aP%2BV9r50N55EiaK7n1%2F%2Fd8bRgpWVjC96oa%2BAHp6d6xNDWa0mV6Svl3QasrxgBwa3v%2BgAC8Ugao3jfMLfikcQGOqUBJk1%2FUe0m1jgEXbfnkO7HBYXRr7Z%2F3OmAjfNBu%2Bx8fGo2pFr5RrUAgCH7KldBIEssmLbHFqcncuLspHejYuGNyTl3JrdyGhSDqJPJJ9da8YKMVR9ce4CTqP7UzWPlLr%2BPsFL6GoCLqWPbvQtPxPzAwvr0dLvKo8m4qrZL8as%2BEA%2FWZjNVWvC1wAjz%2BY4v%2BeoW3bxQO5P%2F7tB9W960rA0izidv0i9t&X-Amz-Signature=c5955be37e0649b5983bdac6fb421cf4d370a524efdca219cdb123e0e6347baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOTOYMF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICr5EJcXTKGXJLEogB%2FhQw9qvE2IhpHN8hMsluXpGDBXAiEAv3N%2BJZh655T2sug4gIzDnPavXtxT8rISfudeHng5gfoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDHW18lvFg5mAOVtZTCrcA0l7S7NRluT03iQkhzfQpcDBWPgATccr2iZDrCiop%2BJkhBH3kF5oqPI3WvnAa2imJyMFrkGPzQ62QJwicwmw9z%2FZAxb0AF3PG%2BlmIy6g8WJo2lgmF7SNIoF7n4AUG04eWe%2BifLDJrq1C%2F4rOz6ppyLFwYcoeX%2FIg7BcN9TWwp6Mb1Nrmqz4VaRrd6%2B8iqEenhA3dQknfqsjZc0x3o4wm5iLTA9NFp9sO97sSnnUuj6JygowivsTSZG2h7HNyINzypVyOtVgvbPQxyrPh1UBMOUcZAbgPiXNhsm1GeEzUVWD0mVDPkMxj2Uu3HqrExh0VwgDSV5ExtNHEsBLjmKAo5sJKF%2FQ8a1yLAB3qdFaxy6gl3BDoE1TRjplVwQG4WrJFJTgtQwUDnrTHSMwWcT16qBsWldNMZsECfqoGkTaPux4bPoEvy4DUab92whGkB%2FQR3JQzBw61jEuR4KzSuu%2FnnjEUCQXjJFSlAo9l9q7p59Jx1nZbcuWOVz%2Fpn%2BJSZFs54UJ4XqmMlHRUZG1fV8%2BWnAv7msfuuMlHLj6z7sCWkRg5DkbRTcij52ezGAiJSlNeKMElVZfPMOZKZ53Q5QJwKoRdEp3LU3PS9GYmqb59NpClIlbcd7F2bj08ybgnMNLikcQGOqUB5AurDfvfjePVvxjItoKSCoaHoH35LDyuIiZSWFhow%2FQ0yQPvP341NwhoTeaxSFb5SMEarHhhbZ5YgGsVQQ2H2bQ3gjakQDw69BO3zWVAVNIQn3SfFyfv4MBQGwZy1%2F6nIbtYu0KGSeDUX4sD%2FZogQIPawscgcaxKcajoYhjJRtA%2Bwq43ymRBBNcQjCJw%2F%2BeNFx%2BIh0w0lLkGGM0Tx45Oj%2Fv1WYjr&X-Amz-Signature=7a5a1ebdc697e19899372365e85787238091f717e6480bf1c358401c91955bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
