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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWMFC4JS%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD74hlIxHt%2Fw%2BX7OK7aqcWJwGckhl3wu6f%2FWksZNaGxQAIgf3CUVi4BXmgkCIwubo9OuvJ1W7IdYvxTnPzbp0TJaGsqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZ9ixt41f13eq0JXSrcAzlqYHRGdEELXqV0ry7srdoYi1xds1OK3gm%2Fh%2BdULnBqp5Wk2MhWk3QCGVRHUIVHLl89v78m4UqBXveKnMs0q4bZRN2oh6RpQnhnMhOjcSjrFS%2BkJTOldoCe9LhSD77NLYyPElucVnjjE6qHvcSJNeUq8A1DCv1sDQbl9ZxSnryXrGMtETDEytRgRMaqo6LChasOv0ZylLnq7BhJj%2BgAo0L5venDSGZRUWoOKdd%2FdEqOaghgqYzM6TZWh70bP4Duje%2FxwuZ1zb0EatdX0ISSxR77WCwTTwR91D4dgTp3jT7hPVEYkra32XSk1gYOwUQaq91NFn%2F7ACosMS8lQJYNaJfq8IR%2FCCVm9uftdIBPqi%2F6W3SaAilcZBCOAvF%2Fv5VITDH3Quh1B3bZnfe0PBnVX5N47bdJZUYw7X7%2BzRbnaKu5Uu6sY9wAus7IW1g3bza6yKE7jXL0QNGogbS0wbLvgRy7ZaNL8WawvtXYuJK5HZfOJP%2BmLVW0mp%2F66ZoqnyXLgahO8uZoCUgKw1zA0zefNfIz1ag%2FHewfWiyhffqrvBA5CBEoFPaHx1uoXG6gPZVRWe3v71NrqboQjAc4s%2FV1csas3lFzmU9%2BvoDNJnlKvEaKWWDRuI4iav632KVDMJTk5r0GOqUBdHR03m1SBzzoxPyMIDWqk8J%2FznVecpBy3v8tf6CeE0ebm8lmP7kszpIa6bikiXI3kv5YJHsITpiMz42EaeyRW36HS2Pqap2I9DeOrK1FkdoHmOgi%2BLrSja%2B4UWUFkcPMVOgJbZwURGt6S5c5t4rzs7bzGtWSqvA6ezCOuxfG%2Fj32azPaTO7t3MdyosNzVZDi7kbmlIx6ZYStZGv516sTo88m5ayl&X-Amz-Signature=a6043fbf6b1d4ff8d2dc3469d4f0e2030fc83e4c6fbd1294135892bf3739f8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L625JUO%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKdWee8LBFNfRAaqteVQ%2ByHuVSLhrLxCnPwW4UUjNZoAiBcGQrMygkPpmr2ZIcTU5d1%2BNDgBKeGt60OjHe3gh1MjiqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV6PacEeYMBejbjpaKtwDu1djWpZwry38joGaulVbyj4OQFZT7N%2BLgItmWGEaPoxaGe7eDP44ZPqI%2Bzcv9NrVP45yReAdZRmHF5sIXuVAcPwv%2FKXIkdd%2BFVnvP6tDm98YW5JtMBXldO%2FgjoL4e0Uff67P3deMjWGlQB43CmlV%2BPu1Wr7EocQbiCo5G48xzHmtsajRsQminN%2BD%2FdHeuhnuIBTmfPfdaOuuZVCenLBgAHpMNH3irf3SLyAPlDBwXlczl8kPnQdAHdhJvGaM7f5P8aMSDiZwYlkbj%2FZKm9CkTI5e1uy9C6HeDs2BDXprZwZT47soRz2zqtn4hkRIghOW3c8bLEVU4AMtXPFqUJeXoUde7UNh9HiiQQjkH70MOS8PRA7%2FsViPZTrp9%2F6F5OhohftiBFh9TRXeKbCpSOguFs0ZOfOqOIegzUdcTNK2do9A0Xm9o5IhLc2LBh9%2FFQniqM6I7ljWd5CZjogx4Rzv3uidltRE74xyqCMSoKUNqlAXvhQeKN%2FzJ4gV77SmhJ%2FiP2rL%2FKPafL7HhFSAPpBVodLlr9kszSbOABtEiwkPBDs1Dx%2F6xJjDRBOGSUHp5OPdvN5KRqpBm650oSjgjpn7bZ5EAwBVS7dhika90aP2rmls%2FTyhCY1lClB9BgwwxufmvQY6pgFZjNCXlVSWhZZW451FZxUHRgc3mF00eVnuWJLld1wAEZ3%2BLbV7AmAyJhpwFj7RGXgOGfMvzx07eTj4yDHHlx40sbQsbyWoE5FJDO97L9uFcna1gUQvKR5%2FqW0Ox1OpMO1gJWNUA7THldlgz922tArTO3CdSHYA9qGdDV8IIqQ8aLXu0P74ql%2F4oRQx8Ia3UA3iZr4OvGgQZPlA6bg4SchjGPOHtmqg&X-Amz-Signature=863eadbf7ee8a93e929157bfb42d3026a92f0b5f4ba3529f2d1968c6db573133&X-Amz-SignedHeaders=host&x-id=GetObject)

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
