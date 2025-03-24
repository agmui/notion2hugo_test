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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FLKXD5O%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fwq5FgsRftVzORljC3yk%2B0GbnbgG%2BECGtLzU0nsvocAIhALluHSagT4fl16iw0d40Apuy%2FiP%2FYBn5K%2Bez5fvMaylLKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYr6R7ybVOBfiXhCkq3AOdA%2B1Oht32YSWB3adyYd1wqQcIunMNhcDvejSaKFxaHD8qOEHCJVpYLIyZDhzKT%2Bt0cXblBgtYG6UE%2FHny0x1kJcKmZ7lRKcv2p8wyQfax5UTJk%2By88NFhKLqMVkMKxdOnmog4P0R8bWxbpD89B8dEv6L5gv%2Biy039E5dMNKiHypRG9vx5br5xhnY0WAyFGQxvIMs5cpqLsVeAz2rHCRrKAM1uxuBilqxoSWmY5qK51oU%2B8AY%2FwXbDBsJ75esfDVX6fLrf0%2FxW67EtDSMOPvp9jyNXMnNII9PIvV9RTNs%2Bg9OS8VyDxcJVJBGyFOIP%2FQV%2Bvei%2FBsXkm5YpHh0nujCRz6BPX8ZeItQ88TA8dcrgBJB3gyHCkY2nXVVgdkMJ3awce9MtBh12qZ5ebOVtqhn2M6zK1lS%2BHQLmn1VLfSwNZohnsV1mKYtqArPpNtDuyE0CvJgWyU2bQHljSfBxQZAcfTkXjs3DHkHoT3i1Oza3qrdggwepFp4kLvr4qV5dGeDT6pn%2BVqLBQjh%2BMNH5UrYKODpqEuJXbfr6oMQLeuaD2FIPs3Aping%2B3NvxM6xwkarj68vsogbge6qKdmGD09W27h1cbplxb0JngFrcj0447NrO5%2FrdncDbacGweTDenoS%2FBjqkAaSNgtpiuOeH%2BnjziB60KRhEKP0yhPYDPC8sBoTdt0gOwGpt8sugHmFBwy%2BstKBRJox%2BUja8Nnp4JoIW02VgFIF6S4J1DW7Sa%2BFlrDqXQCLGL7QbuV88mfaMWoUy55QOcO9IJjqWI%2Ffwk89coaBXQfEiAm4RCOk%2Bbc%2BtA0b3LlAmLTZ0TwZM9p4smV9m4mx%2FZeEuG9jyJW3r53IMH41HBAt1L7Wd&X-Amz-Signature=98bf1293cd38578852022079f1a695971e2ed0a6522338e96072ab367df8f313&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QITUOCSE%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6klzXkQL0Ayvh7fX7KI6W9ZhDVix%2BuQh4PKPEKlcLMQIgBt0RBGdWKwbPhGdWkri4rz7sJiydUyCGnmH5Le4Xrv8qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeas%2BnPIhtPghOqFircA0Sy5zcGvpQu%2FD%2FBed8RPNY3CHkTB2y2p0YApdoO1hFXCeoa5t68q%2B3e95mZus2%2BFjaZbGEydIqk2XmcI15ponu9UNas9ewCpIP%2FvntnmSlyNfAa6ZAyrYLrqJor3GctgYFbHYce2UbQCQt6mIqO%2FETR636VOSm8pPAohqIHo665HOxv50xlGN4EA%2B6QMp8GW0kaSQWVVFY7fnH41C6VT9V%2FKP0zwL%2BlG45wLdkVNi26H9idx2Uv5XnIv0wmKb70qjzo1l4cY5syzzEZzneWEo2fc7%2FyB4zCyVOQJ2xVFSiUWkSevinakKCBcJXTwelXhfakWNKe0Hi%2FsxHkFD4D0tmiMfHfQwWALRp%2FMTtMtfZIPeJ0FN1vlJ67NG0xgENaP8Buv60nyxGWd%2BqLJ3yFTigyi9807QP1tJWSqwl4LB%2BAI%2BPaDDch5TH86PnzdsLahcUgg7mBeasciQ4isonpArwn80mG0Z9yeNKq%2FULhs7ljpTFEpBTa5y8ajFxCx%2BrbaYHa2Wq4x77hXyiH8HzgvzrqcE0dmmwROiHi0XVWQrBEScYe3dfQXe4yKTB%2FRrk6IsdOSPcOXZ9G7%2F2uIgAudq4x3nkbVJI2SfT2JerFgKCIRryGsMbGwWn80FEkMIafhL8GOqUB7K6tuC85KGgoJ7aheY02iZyCLwYx2JecJGUf0JXVYCPH67rSnoS1cMDeu%2Fbc7CoQjZ0XCeRkBqJwIo2ejTAlJVE1LGrhJs78jRo9M8UhbPWH849oWpZZ1rAQ9xqe2GyQ5%2B%2BFrDDYahaWx%2B2AFadqASIObTsz%2BdUkU4XDsE4a2SIXOb%2FWJ34Ys1TuoXYaViec3Df8dqemMnkv0w%2B%2FbEdKf%2FH6hILW&X-Amz-Signature=3d58fb3310069dc807ac8b7927ea0044822805fd4fd2f0a76ff48a761795ffde&X-Amz-SignedHeaders=host&x-id=GetObject)

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
