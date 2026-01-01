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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXNIXEXB%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCHz3THPfuSEHrn%2B7Vrh6YMG1iA2bSr4rp0cDR1m6cRCQIhAN7iHNA4OwDqPeA57wleyIEgkLu%2BH7UnU0wOLv52mweZKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDcsLlfKEtk4o8h0Yq3ANqi0i4bo7oQcKtW880xRM%2FAUvgkuLaX9NuLgnCZVwjSLbwqzSjS7fmkZ3T3oWrbrhi4zXMurSf%2F%2FNLxZJWqk%2FtJj64eChCfRmLWKBkSAMGFTPs8SaZTXb%2Bpo12PvxWjUR5jwkw%2Bvq9ZkNT1bSQqh%2Fv2CcODfeLEcI29NsF9pghhrM8lb4qXfQdX7I3d6%2B60TRu5RtfkVkk%2Fsli2bhd5azH2wivS%2FfTr7MtZtIi90FfnhWtX3u9Tc6fzijR%2BKYt%2F3%2BuIQJxO%2FBX0MlRxLKxN%2FbJxfKKz4JJUE7vABWQ%2BClXIzX%2FnaIizt7vfC%2B7lvcJWACU4sMyOXXdXp3%2FdqJuTpAH2jYMxfjxm%2FPb3chFyx6VBdCkL9awHEn7WEWX72d6eeX%2B3tTFaT0A7pb593MUDTW1DNf2%2BPjS5xeVuGlbmI7R3wz7i18vC1i2ppBJy2OYq56G4I%2BFde0h3pQnmHIlrkZptP8vWLtqLoD4Rv5%2Fhu7%2FjdQTnw8aIASJcOILD78XXWdl0gMxZ5lPgfNMvxB5apY9ZS60qSZ08T0tkhP9wN%2FReikqRxBAJ%2FRPTNuxwghBhFXwYrhh2wNKiH6f9Rw62VSgaNYR2%2FX%2FWmbkJhp7rWNZwGNY43zg2SZ56uy8djCKmtfKBjqkAaBEhl8FL1LJN9u9JDg7uwh9XMF3dNeaXBs%2BJYfNicE1FigHOphMbDDb5b2JoWjF87AMudp0z9pVbFEzqTfUW71%2B9TOhvuJAnAlwcILxJlE9X4%2BU43DhH3%2B0zFK72FQ9wjstSziG9GqGJgudSCRj8gOvoKI73id5lkc4%2Fr8Ec5CR6JGlAEgEE3aGj4e3wlB9oUn8VHvuW0uLd57qvMaRYeb9SXmU&X-Amz-Signature=0c503719f10a795b23a6018fc41481c9729ba78af11ebd7ec1ef160749c59fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRT2QUJY%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQCllkSbRoEwdYbMmReUKeUre92LzBAgP39T2iUhRQROqAIgBARsO5YTq%2BltTkXELkTrFrLMrrhgOmchiz7zLPa7OMsqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3Wo8tv3q5PdPYB9CrcA1EFXCYY4UxTau4PJ8lh1edMSIaoU6%2FUkMtkK%2FRdZzYLAV%2Bi3qYaCVyUBJIfMxlWZHnIm5%2FnMvKrZKx9LPJ5ugnyPkIh5rcvDjQtKxOLRYNQYFu90r0%2F50Q3JJrA%2BxgEacwTU91AI1aD98s4chK1EWayBJKOHRdCSJCRf0YIPliliA5nejS7IXnKQUfFRtFTDxPf9MFP4WYyc7nMbw9PBrgTG7LT7GOOA9iqsAZAciEOEceZM10u32rZAJoGp0aoPbs0G9s5jyoq8zU%2FZ3aUyOUHEq15zwM%2FfnRXw%2FZKK66gKbRgXJl3zQpue%2BdFC55n5KBfrrREhpYy0p9Z%2BQUkQE%2BYx%2BvDKy%2BgILdK%2BOySZfpqJmNF6DKYv9Vg%2FfYZbJObrDQXycZFD8WJRWY24XaRFSEvfoWaCsn7L8mgVMbct3kUTd4xIQP8VpkF7CQ2Ha5MhF%2F42JOzgHDD7db3CxP1ScIVHbY1qZPaIpC8IsYNAPW9Trsqpa0haBSKV7Oa5IzVhDKI6nWdOcw0eoI1FKL0RKoUgS7DfR8lKwTxtAHJmKdLESLaHFNUhimqbsPISctGLhLo0fJpQevYbCRgCFmmLzzzOLevljqhOV0GyDqrV2liDiskV%2BUYV8Z%2ByxABMIWa18oGOqUBqjYS1LrZMB%2Bzf6n7gnkOZbHX3ZCHeFBUvZRx3py5eHyvy65DmmPAyUUE6X5fLscLZKT4THm%2BanysRE3V2yjnJCU37F4qwsw0t%2FTXSpo2VfV8WEOB9kCeRp1EOUWCGxDmMJMtb0ysjUs9Exw5eix3dCmyH0B6rMnSbck9NPNq8L8DSqrAIMdYqXnIPe6mZl4IP%2F%2BfdfaK6FNHjrKRvnZ%2Fw2zmxBCt&X-Amz-Signature=c2d6e99a968df6e3af2a3d18f2a7a35ef5ecb486f762e995c5e5ddbb7d155640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
