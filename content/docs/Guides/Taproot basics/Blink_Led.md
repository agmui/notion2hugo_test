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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZMHTCTE%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIEIbEk%2Bw7NkZMfVbNYW5a1jwI3ix9jQQ9A4sTTe3MleaAiBB4ACqQp23xGZXGoyg%2BD10kmwbd0JPc9t1Ny%2BpShRgHyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMwAZt2dm4UBr9i3gIKtwDCzAI6FKWyk6MJPq0BbxNmUYhrSPIjSve7%2BgBElnW21dd%2FUZJTY5kHfDwKgiYc4jzY9NBd3dddMAHLizRCZPXPpI%2FN3idf4vBMwOoqRytacasa7ArZmKrrXs3MewNARDzTHy8Tw%2Bbr2RQIXhEDwJdZlR55gU2%2BploJPCmS%2FmU47Ym9uz8Z9YbPtLN8d3%2FW8PToO65bcC%2F18AojfANe2Ne43Hp5%2BGK0VEYiMFYBtcM137508gW9QaID9nmhhL%2F5fBTvXleJ8nAqWeqopReE7h1ly3taGloI8j5DNwEMCx9HSD%2B1d5xig9jlunSpkN4kWwzTA8BzhkAR6g0PgU3Ig0OteFjMrheBi%2F3UCZXTs9s%2FmGSqddX6CQT14jTVKpOAB8tmSfe0gmZIueap%2BLqxWM81aLSBByz11x7sZ2nOBIzfzHmUgofToVcv82d8K4xNzHox13wXnPpE2jqMh1OuKE3lYfU3KtNVnol4aMioSoLWgUONnRSk85B7MWMulM02Z87wtcRhqFw2lxw91xGbnzYji5uUtew2XMoDAPebASsU0%2FPrayjXVqZLgj4SR5HDgFuMJmaGciOzTp%2B%2FjEdSb%2F%2Fc5axEIJc2tnh3LekyVJoOT%2Fvd7ms3xs4f7ypd4owwJvDvQY6pgEnig1hnabcQehVhkZzxVslaoIZ%2FuhJcc1MGqbFWMUyg1HsazZSIehKqDEi7zhY6qQfFFG3MnZKv4VFmm2i0AHAnw%2B8ad7vQOGFRc6kSWl%2Fr%2BGDSpAAT8jfSVgw92SwlvqlL9PJ2566xJIsqWyFR0q5yHFOlSpDJbXIxrpI%2FqVg5RhaSQylvA%2BQ%2FZCdKPzsJS2aTXHGgpKJ8pdWVkS57%2FLJOPu5QcKX&X-Amz-Signature=1dc1eec14fba31b1c8f4dabd3bc53a3bbeb24ae1eba62f4e8ec1ffbb0784b781&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667KBY5IB%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T180833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDoLo8MjR%2BOGi5MzysYumO0cUu3mEpqM6CcYKrXi0YPcAIhAIF3D5OZ%2FBIqGTXyxdXP84Oirh%2BWzdap4HedUI7F%2BXtZKv8DCEsQABoMNjM3NDIzMTgzODA1IgyeehohsVfJZgdb2rQq3AMQ%2FPBecbxHg6BcfHYOEjto2vyaEHtQ6og9PzZEBgbX5GFljqS641IcswNqIaugE7%2F1YnvWPi38eZpk5WGAt6jnDXkPm5%2BnAo842Wtq3gySBmcJOjHl6WdWTtcnGy%2F%2F0tp6Ts805Medc9jGIbNViYEDzgeIRBXEJCKtz8QPPTAt1Gi7maZ%2B571ejVK5MeNFpm%2B8h%2BO0H2r3tihooKmOEqR1a0yt6WuP%2ByaaMJcL4H5Xdw%2BjjM2faNJj7lIw5%2FW0FfM4X03XGQo87G3OObQO5KxXnzCH%2FNTOYlrZy5Vzr62xRmbmGO2SsQQgFQtFkhcs6WASChJDW%2Bh6tnufvBCR2CG0mrLIB4%2FAPKFQWI8pyn60Ss3teXp7t4ObTbaDinw0kUffAGFTS51r5AqNPzQH51eC2oKaLOMtathNAqFrVH2gynTcZLQ4kCxCycK8AicTYT5EOO68Lc%2BnJWRYLrKxeEHisCQeHtBiA8EvzbOobiQ6sAc7BiOPazxWeKC2E1iGAgTWAl06tEd90AQrHDPATSZ3j5UlI8yTI16SZp0q4dSmtOdJueuNpcavPHlKXdilJJWHq%2FHoNfIB4o2VSq%2BKh8aXxgzljsnqyWAuwbRyMuJ55TyAkVRPH5TfK9%2Fe1jCXnMO9BjqkAZ9DDJON%2BxB8fSD2THO%2FWOyY23QPhzZMBIHtmmePauQ9ge7OylZbCLfjABihydSoch2ZhV3t5nDNBBKAax8M9r15ILEn2%2BLT51zfTg%2BpdPi5DVFQcVXZbCkrHF0xbaiALsmBQuaIx0UIDxTI8dvcqyx%2FLMplnbQmDoSzC2gCbUkQIm44KoBWcqsQwTG83XyVV%2FEta6HVDrXwagWh7ryJJJYiUtNf&X-Amz-Signature=06475a8c06ce4b3d50dc48a1f7519e2af92ebb63e927f3503a5ae0dcbe3cb198&X-Amz-SignedHeaders=host&x-id=GetObject)

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
