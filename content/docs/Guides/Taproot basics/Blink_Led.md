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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLVS4QTE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDTegyTKZGVqHd8DWkJ7KP54tA0zTgPcD5GeC8Y3gfGwAIhAP4NCzx6JBeoBl4WvKZu%2FSJsvSOCWBLlJ%2FuvFahHcz%2BBKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw%2BnJ1F3NoCDoMAKMq3AP43%2FbxCeSUk9kqFOraNaAzzvxTnZl0jNvn975zVOmsNXBF4qzEE7YqQUTe5fOdn92PoDBpxkbh0bV1FxoSbkcChn6RtZXf9tmGPoiDbhQgP4h7tW5Qr3TgGf1rHgmNyLdZqkhHRa8eqWmK2itG8Gciatab2WNi9Vga8751dfzfJ%2FcyAHm1ayKa4XOvtNnGxYWMSFem9tHWLC6JCX4dykYF98BU7oz5OoAhM0PXwj6N3WZy3U5TAYFCO4SFYvmxEdsaeyIasErsyK10h3iftgrqBffuj%2B%2BX6gl3WfitYPmqnP6gmWoAPB4SRH03AxopsMS7%2F0lAmrvYFnbQ%2FmU%2Fw%2B1W1PoN6PtQSSqji%2BerqqTxz0lUWHh%2BThkIBmOFfGHT%2FRYBvm7%2FbO6uqMKEQzlyQBtIeimSXM3JJTIgrqL1w0RNZdMxuAZ35tPAviBrkvH47rn6on7Ri8%2F7uoXUr4rPsVj4iI6VW1BLHPaiduxxWg52z9EM84php2JLV3vzOYvJhqJ3fTBVCqV3PPiF92ao4tNCFD5GNqCwUnRIqd7iqfU1T2WVn%2FbcEqUYnW7TisVeyWaKtuZFR6wAqsZci593OVGqzTdvOJwKc2ltmH%2Fu3u%2FwgPl3iYFvgeFtozY0fDDb18PBBjqkAbJ48Z%2B3iB%2F92Z0Yuk5zKsUKmDTe1c9Oo4FJ46cUBYBlcZRMGEERCb9VuJJnnbbF3gxtFcte%2FZazCYnTFtMaWYcAj5xsogp65g%2FXX%2FptrWt4SmPmiNgu2JU%2BxXn%2Bgx%2B01f%2FYT0Doh7M95dQasP5etAQGLTjXwr3GqYmGuwHVX3HiWTKj1WMWRUMGCUdtL0fIRryo0IEx9rZLsRrU%2Fa5vtqCEDtOw&X-Amz-Signature=cf867ebde9856b808194b1caeeeb706ffd973b2784f01c0b11f14dc323014b69&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPZE3WU%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T220815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDmxBVB1YBy%2BVbpPDRb2tAc%2Fmf0sCfe9XghGikUDn1V7QIhANFGrqQmGcmFbEzQJ4fQaDgLur9KYAHHDU4GRm4AbnzlKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWYEevV20wRkW9mlAq3AOihXoEygSIfa6n%2F7K1NC%2Fy2gUkDD2qv%2FsWsqHLIgmKFi1%2BPVob1wQMQRaL2TdxVl9BBPjeOnKQICIr0o7b5dzWqUJcWFzfERt%2FwbI%2FG5HRLAUY%2Bmy%2Fxju7PJOmAXF5KdyoqDRLIQFF9dBqny7LyH4L6dD%2B18Bj1ZDzQPk8zoVsXC0V%2BXLIDu5MjLmM3YAojOoCRMz2R%2BIi15euuKQBQ0bmqM53PuQnjCK412uXrpoFK8QN8EedPOS7LQqiSL7MwBYBwbGerFUFLahUOyQtd33rLIxotuxT6Edu%2BlUrhttk1OsOCkZhMR05vZSniy3ohmnRq1GYeGFlIb7Xqu8Vbid3vvUZm6Y5VfnJoXmpP74redYuFZJAVtZIDlcUS20X8Gp67s0Cgi3FoGrKwNE%2BSiwi18KgCzIhX0UoWEQN%2BE5R431L6wMq8Z55F4gsRzKU9J8JbmxtbVtn4he10vjKvw9YeUng4KUUU3znGUZq8aOtxyk19ToVKTKfD2qsaSvrl3FFmHzj7x5NM2GsVjU%2BNVkhrYhVOPu87Ir8PsvAXdRLqLeVI3OPs2ef%2BjNBEAHKbEFiSoWq2yuJU5ukXfYiyCYA%2FxkIoOfSFDk7O15OA520dmg4ZNEdrb%2FVxRA3%2FjCY2MPBBjqkAUsnhlsZR6HQAhoIBGMClWjJ3aBifeX3PL8iHF1nKME%2Fq9y1lKoPhDkhTRUJ4bBf7YnPuuhPSMEY6Wt%2B%2Be3LZQv8Wc9HD7mFfRLRG8uGg5ckO3DQi93gydy5cTL689YxT%2BDVbNomUFuDvrx%2B1rwVod9DWxejIrUBVTXej11o6Zivci0k%2B7G4mfZrJcHN58AdwvVlMgJxcCNLSFagp8Ka7R%2FCBB%2BJ&X-Amz-Signature=1663617168beb5ccaffee240cafc85f9877691c51de5144c14d3475be11f07d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
