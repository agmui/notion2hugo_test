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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIZ42OLN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCWls5YMcAVFKSQxayUv%2BYo8eQ1tqAXgJh4k50F5ASEjQIhALhASnDSEdbCFKuYCD2bF3z%2F7x5Fb9xBy0f4Upw3AeM9KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5saHbgvKF2vMWf98q3ANOtWS%2BxEBERqutRWdt2d48CbzXCNpn5AiUp1wPr21zuOJxO2P27xYKn%2BcQLCrr4%2Fj9mt3SSaCNaloMkw9vRPij7Ho1JTAxqh2ClbkFMkwtlyAHuQfXvbVKR7Te5ntAWHQ52tdvXWKXuaHDl2V%2BSO8ZXHXjycovBakpu7xCzdhpWKnjhVjI4q5Ev2G6BoievuVQGDDf9QL0OJjdHM8mn2njpMHEQhx6XAmziKacCyXBoqWu6NRoSGWFKhIHoCZFWDgGgOCvaaK8%2FVVhmG1WRkQp%2F3WNmWIeCQecyCUYGN%2BbJdgjxlBrnUarzMSg8Ea2mK%2BF7JwwNqy4njBvskm3TCkJllcHgkd9560E7LHoxoeQuoA4dwMGtfWYuyXO6%2Bpxh4HI2xG9GlQvZ1kAQIRhUpWY6q%2Fki1IYhJX0SElmcQAprT7KrRLSmtp3O4h2Pb%2BqNVa70Rnv0BwBJrQONFBBFE0%2BKhuw2660O2HIl8AHy2Vaa1T0aZiHHcrwCwB5fVj%2FITUonaQpEmDj6p8SOxKQ3RwPcQqqTbAJuQdr%2F8KDHqbSay3usUFLhwNDixGhtn6j9AHLeNyWg4mBie30v0pCRgzp9CdgRbbpmK2%2FeVXsY1HhNvloJv%2FQLIEfDWVnfDDa1rC%2FBjqkAe1OfHyTDy%2BSFc1bOJZ6yt5O27mAwd7ETIG3Rq4fnc9yKMEzo%2B6K8CmOelEoQRFkkNBAVFLHG7M%2B8rEFjiqTfttL35SlbfAXskJ%2Bv7SPoCUOkgK4Gs011pkoA3zP5i4%2Ff4hpbPXWvbkxGq%2BEYrovSzOvFUV8fPw93BIDzGUoaOHsF6enFhpO%2FjT5zL3oS6gW%2FhkTUTgPpNlC%2BL3z%2F2WKkM8gmjgh&X-Amz-Signature=13750db2295a78de80d2e364dc823fa5817f34b59fe891b42af52ba2c1a56038&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5OXSVA4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDFXioMH0PlGQyxrafWl2jQ22RmdpgzyutNPr8caKpxoQIhAMwJJGhWBSRiFeVhRinr2dEre7F41zCu66IDMT%2BLWxzcKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwc7IY6%2BD9tXO9Qyfoq3APpW8l7%2BFxRvz6KrDc2dp0I9An7Grw%2BvexauQSKoZkD3zm6gIGa2VHorSzUCxRqy2q21Zi%2BFICY8N5JonvYnYQFCR6%2Fj6PskySstT4KljXSASumtYUnAPtO4BJDKj%2BlQdRqt5uRCMxw7ejNSEoOnodMnwxS7K%2FkXs99giLW8puiU5VVp83eYcWHJq0oRnImUiMbTtpFnjPQabtWZJ0zze7wt4HOYjmp0TK%2B6lCH9hC%2Fl%2FRXY3kmDdUdxB8tWgsJjKGcG6euBXagJmsW0c49MerpikfEtazJr4F6YhKB2vKdbW1FCI6NLS%2BPbVd8oRajyF831Q8dq1sKuOfDndXXVdykSOZ9naU%2FpdoZdURXBaSro%2FdmU%2BTw2oCRo4bD0%2Fd9vbVBTvS5R%2Br6h4kl7vEL5UH8Xh3VUBtjwnult2qm%2Bz4eWeqNk%2FGji%2FnhwXt%2BoRWT4vuHSLBs11s99tGcB66v85xRmFd2ntNV%2FyepZD8uRIXcq1a3gFYEg8RvaFuV6af%2Bi17CNh4RpBPlzwyap0FtJidDpmKNKxq3iy2epbzGPnnFr2UIERo3NCvcqei2E6qicVf4RgKXSvnVa3olLPt1LhN9KxppV4xarfiN8IgRtrq7%2BW77cxoArFG4RtCdGjDeu7C%2FBjqkAfwfbbt6o%2BEvKO%2FjCBu4GpjJgmzG5ACfnsw04blpMq8wfeiuV81WUbmR0sLwuCX4UxXz%2BczmZLG7QSn%2FnC0Ao4RyWAQTKCTVOkEnaHKABtcIm845FqqrFS1STSsHIEfbMh9lF9HiRWfEGETTrkDGTuhm4jlx6CK6nlC5kByUOwe6%2Ftrcod%2FmT3WvVVGmYnKUg%2FKRkXoxEFbHEcoI22O0idh2Caif&X-Amz-Signature=e85ef2b9e2abf0b35c2c2254339cb64228164629b8244d26a8e45ddc7ad34687&X-Amz-SignedHeaders=host&x-id=GetObject)

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
