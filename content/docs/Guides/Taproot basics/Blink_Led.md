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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URAK3J53%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEN6AGAWBMqOoD74IyzU1t1YnH%2FwBedKSGVatzcJURSeAiBVnzToWAV3vTJYuY8dXJPsr7iXEEHVAmJA95jJpkwXdCr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM3L8VMdqAktiR4HY3KtwD4%2BBwTi%2BjTsBAUMdbWzJe1tE0ccRMMCwNHfRetG6%2FoFSUPtUyWAmt%2FKHELrjHR9g9bOwbUIIX9gGs10ljYrhakfrzB07E8sdcDD%2F%2F23%2Bt4tURmnxSoiSRgcMlVOxkn6NC9uw30PbK8eTLNoWZJ%2FbUSnBOjZ%2BiAI0FyXWKfv3g5sonmUx1R9wvGB7FSvVPhezGkkCR4FOrfdGTyYvxmfwZd8zqKxN%2B4W0ZRXyOtLHsgz4j%2FHbSAfpgKeVxKziEtEw6crbiVwdVueWMUJQ5Z7b8h5H%2BopnZsBzwZaPpc47PhczKIsiOzPLyQpK0Z8eDQW1td1r0v1GvnCPvVNJaOf%2F4bd6alpUhse2pObZsvFyO%2BLrLBiv2gjZpaGgbN1A%2FOSRf2lbmaOjqXqmvIDknZSQ5lXy44smqPCS9vAJfNBokQY9bwv7%2FJf0qFMFPVXbycjIirI7p6MUmbX%2FoDoW6OWonLICBzAjs2kgNK0DpyhUntyvamGTueT9CWJ0VXXIBDvwFdLOGCX4l6s%2BpliH%2BBfQe9NcYR4rFRd6mxPfTM7%2Fy2avNqZ8Qk2cU%2F8zxV%2BaJBJ32ANBvYpvaEDkt%2FsYwbT7E77SikV4qkGB7%2BB%2F%2Bw%2FZu%2F3W%2BFiucRwoGlcTuVDYwosrgvgY6pgHZ8x7gtuTJeCUaSzOKvFssIGSKbDGUQQk5sdR2eEFdO46GN6vZqpw2UJn0b7mJUa2nq3W82GsEKaUb4UMD6jP2B6fym0sXyg%2B6bn%2FHYM7jMCBJWGK9NB1FTy1mkYlMotzkuoSGVM3OaIp4mg%2Fnua%2BUAe%2Fn0NtDvXwHPTk4Cq4Fss0q020SjBqlU8wHQ%2F3kbxsg%2BpgEwkuaZ5nrfxXPRHFVq38VoRmh&X-Amz-Signature=a4099e58737c1067e619604953d22d2a9aaaf496f9a39f09c3be2f0710aedaab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDM5JUQM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrumv3Td2m8QYKg9zdAjDXb60wVNe8v%2ByDum%2FHFQdpeAiBa%2BXrRXF8%2BZChH3Ew8apFOhHWHrjij51eIhC5pt8ynwyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM1Xbhw56x%2BPs9iCirKtwDxUH2sevv6ARNR5vqNkDG6KPATlUCBaNc7HKybUBaOTsmvDy6J%2BSK%2FWuot9MaXvoXexf2LFKVfcuR%2Bk%2F0vceeaWddBaV7IHvTrZAbLlw2I%2BdOh0WQhpImkKLoC9ePrIBpktxJADDmBcNbKaVPkbv%2BRo98iebWj9HTv2Tvyl1Lh6Wp8PoZGqWV%2BUPHXqAJZpfQAF233PqyJelRmXko%2FtsWxMFoipDu8IWkTXqGw8D53k4tBwCDetj8pKeqhkH%2FBLiqhyzJ0hSv6wqwOpqdzFw1NmfXO87z5%2BHnbftzGiM%2BwJSSA1T96qAbD9nlsEjDLECXXYOrxTbooCvt4F0OZMRFIEMNqhcEH00XpSO%2BDyXLHJh5jJTjPnYqPDoQ5DGY4N9pmK96iE27V%2FbrNTs4LeFuI2F3kvk4y9XluTY6vA31foVbjmDQo2OmO8blcOswwXMCNkAaRWXiz2H8jspToNWewZJSAFbFgTFcVw90kmrCXhcF65UL3u6H%2Fv7c0wd9zPuismGnpldJUHJIsEvt6TuzWXQ5rLK6VMKNWdsYhpm0usQ69KrZnx3glnORsbTQBj8Etu%2BhHY3%2Bg1aJGz3nVhQMX%2Fj6Um6FNEIgcoBbVw7yfIAHYbt%2F0MAKXJuwoR8wnMrgvgY6pgG9Ccsd2FWFAXQpfiNNxzFQ6YQziocQmGsDopQz2cgTaGavqZ6ayrBBdro9zg3%2BvCYwOG5yP2I2vTJ6Y8bemPPQO0H2yxHrmdYPWuCQ9P0F1EaSk3TDNF5geMQs%2B8FUIz69H0hoUjokiyc398QZv86Sd%2FBH272W5An0%2Fhp76f748l3v5X80pPssQZeJH8U6DA%2B%2FwPad2HSitNihZJ%2ByuBow8Oh2mRHH&X-Amz-Signature=c3d3eab3877adf85be7a45381c648396467c77aca4118030e5b0dd307f0e125a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
