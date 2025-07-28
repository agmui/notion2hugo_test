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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPFT3CYQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDl5nkXeeChXNKOBn38ooHj2qdAstd0HArSbwZRzH72TAiAYfatxV5DHOXHTDNYAfim1RFQnqjYjMrOs0AxYi4fdXSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ%2F1Gn0WXH2x5nydcKtwDCtNLv1Jn1fgF26SsSgvlsu%2FpKeH03rbA8V3ipJ%2FtsD6b1wAyQUj%2FqqgyX5gzpVxZ%2BEcfryPCNMbi6wagF6QIEx4zvw9ccThWpR35zeblNO4Y91K66oCxue7ECva8FHNoLFVkvDur%2BZbvAzqWbM0SCp38m9azgzgE50bC4OUKVOwkfVRNigEoAQJie%2Frhpz8f5UnwDMkKrbYMyfnV2lCpHxqRTbpmS4UDq7S9JRE1%2Fb8M%2BGMk1cfxkbL3exMhodGF%2FyTQnKWw2bmYs4duGKN6yJ59FXnRXItuzm0EAQ9ZXU%2B95nRicZdthla0DHMZABJgo5SkjNgUJy4IC5nPHYyrFZJkY745w5uHnFA0ksNwVTNb%2Fg9YwkiGwZPyWwL2Up%2Br6zelYnXbm97nfjsXIDpipPB6fWD9XMtN4GIF5NCiC66SnO8rf02Xe5tYTZyucnHVrO%2BJ3y9%2BHo8Cxq0A%2BK04HYWQPMDRM5vYiYBwuqDqv66nfa6Mtr8OWl0evBkAEB%2B4mJcwbRYXImQWwrrCiHbby4Xd5uOJPenA%2BqD2dvLeAtZzmDJhX952mIvocAHrlGkdwg6v6h63VrP8aIShGywwan9VUhwTpo%2BggQIUNndygrgCF2Mb5B4CKE%2FVsxMw27mfxAY6pgGZiy5%2F3LPThormw2S6eGiQ6Uvolc2PuGAJ0%2F6X%2BF4xPgBcnY4QCpywwChdtb4FbahexB02tYbNI01o1Ky2%2B1%2B%2FY3RTiNhPVL3gAeWG%2Bm3eTk4j7KOI0uzJRGFVLtvm0ZAjz%2FtZxLoAZ9454TsEtyWe7o%2FoZ5qu2R5v2E5H3adM%2FqB7deFkMNZQxdivPmrE0W0aaRtXQ1icVSFE%2BZSh7HBqs8fzBG6n&X-Amz-Signature=6e389038c40b2a2fa3822a69b75fd267da3a2f04c47076cec1e8aee5062bc18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V3OXMUO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDOKEQdanOC6ZUl3L3i4CP4yt81XjkZ7nUSVRosDgtmqQIhAJWSwUSsi9nMUCJr6zGJo2nNk1oA3PcLN%2FTEJIyrEueOKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwh3zzzvksyakWHxD8q3ANKl7NVjtsk0wn54gArjTNaqXLuIbNMmr9QckHL%2F23Np2e0wPNJnWV92HwbxyP8WXM6zX4Eg0jaddyvAsm84%2BeVgl%2By8HRkZ5%2Fw4VGLthMs%2Bm%2B8k%2BUDWHIW03mvwHrWFUoh2jQjLvzhJ4ijfQRoG%2BQ6QvSsNjLuUWL3QKHFEWQW4fiuI5p61wKVygv%2FyLk6v7thrb20JVuW%2BMiOijkT0UFIE1ZUspZeaEJuu3KGzDpn6JMUs56umJgEKcDLPy%2BmBPcryMWK6T%2BYYl84lmPDLpv%2BaK1HsIqrkGafUV1B%2FYejYrgQJWAEfujarTRaXJGfYe5HJXwxOFumC8yKwJDQPHWWMKB3BiHffBnw5TA35XspFiUnFixdnApfbATw%2BBZWnWXScUqC%2BxO4haT1n7B79qxXkNA6DMI478d8dFMQ%2FeDZpQneQPEkdSBcB%2B8XjWS3vXZPj7dyTkMRP3eTZNDtK59kAcSxTqI61DUQ9vdnhyjlUbFMrPBx3ODsv1JSD5gGJ1dB3%2F8T968ehmfrjme8lt574gMUDHiQn1mn82Tt5GXy3oaFDRuyLIqAg65vsAzT4xVNVqDETGaroWL8EYhdH0YY6rrevoktN5IU6GS%2Ftn6m2naJ%2BUg5e9xohqFitTCBup%2FEBjqkAfy0sZjTMiUrAJ02XUfI6S%2BteOXRKmczQlt49FdWA029xqgDr2iGmiVTs3daqwNvqKpc%2FXB%2BmlJr9KHGhLmFnxUyzY3KobHpL3%2FgQy8g77ReLb2PyvHXiGjmtSuHQYZDj5gGQhssz1KXmmo766zCDzeet3b1qsK2A8VmlXezGzYtplf%2BTeMCQ%2FVOzrvSUuIRBSWLXXts0aDDUPbHtvtMu%2FW2fiwa&X-Amz-Signature=184a2f75806fe11e5523af2a49aa5bb796bf6f956a41a8d4ffed4038f436080f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
