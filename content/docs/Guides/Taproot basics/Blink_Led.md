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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGNFT5B%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCDmZICBBBjeUlxanBUXPQGONKYiqgEcovlTdIm%2FecY%2BQIhAM9QFBXqmfhNb55Ft147jDjxSpGMK4rNyVPlEaZH0inpKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYc%2BiH0SxqLBB%2FCEIq3APlmyjccgmCSV%2BSgN7iK85yE%2BBA7VfKgfPvToaD0e7Oq11ZFg5Cf6aeJSaOWoPRSy%2Fx3I22gzEZZP7C0DNKZyrRttu3d2OjMDJ6AxP9StNlq5KRKFu%2BgNuspztghORbzH0KP3VTlfUxHEhTbE0WX1xfHnhpIJNHZvEkYcJ%2BKyKUkhfd%2FD6zT57JkOvzLSd6szRq%2FK06s6c3ZBlIoK10C21%2BgRhKbDhz8Bz3mIZOTnll2vtuLQQgykFwDkFA%2FWcpeReqZHzGypRXUWbE%2BRwKPxuA0eYywbkFhYOpAeEZPX0csov2vZsZKvllU9vFAir50Frxa19BDiEILAkixprwcV2N81ePgaaygwMqDLu1nWK2SwJPAAaMOpGoF3Rjy5lnZb8WbFF1Yo16Y%2F02n7BJwte0FsM0CSSylrtz3wq2o1g4gYkaFiBieqWKXt%2BLnjRH6LHTZ%2BOMYL%2FaGzpIlfY3Y6hlNHZAgPstz%2F8iVgiY4W6%2BY3k5pTwhhSyvFkkxlaDy4PcZ91bXnlGYMzPL3DBe07WQ5MxeoZ90NmGYtkf93Ab68r6erq4meffB2lCjJfj9TIeG3F3nH6GmBO6tjUlIO%2B7koAwkaAFskusP7MbSEITyrE0zGsQkwtWKOPAD3TCtuJDBBjqkAdB86TmpsBKmoUfPVl4Tfsa2Vk0dgZT4s3F9%2FC9FLzWi9cbCWpISvoPG1DsjWHxUvMOO9qYOMfmwJVCkbKxXmMs%2BCTVWfI4F7i9FGS%2BK687m0FqtksovqdVWXFFYDkiCufg%2B2Amf0LrsvU2pVZar72BFh12AhkB4mYZV7yEm3qadzwVBM%2FzKSMgAjNQGAvcvCwiLMpDr9aSwgv1H6tliH4o%2F8GmT&X-Amz-Signature=515913376939fcd44c49f3227f74f22f895c859ed62e0e7f86ba9683ff78d8d0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFEOUT53%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCID1G2WySA1XDnmvejD6DnJI6CUcLH%2BRaK6IJbfCjqNpBAiEA%2BjfQ5yTfVoi2A%2FbPpWO8hyK2ztIqst8Jqj8IOPu4ccUqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwaiQWiYush4JxNDSrcA7hfyJVp%2BBNCyXy36laLB%2FBukex0jYzis78oQwSprwjdPOyhq%2FHUMBxdRFvGxGiz7sYBiXdtMZ15dU3ma%2BC1p4BEidKEP4FugOoGzHZc2MEYMpjDhiCK4O0z3V9%2FlJOOd1J%2Fb024TYXimfe%2Fu2SLD3nIRra2CcFaurgulUOBb%2F6pBKgna6NkrKsjV2ZlTD2za6eulZIa897VNrPcLFXLO97vTKjEjpXF63yHU5OUWMSEmj9TUskxoG9UtvIRqDtPn4DS%2FLgE2dl0Nc5fHkTkGOYrau5VByuzQ1%2BR4HNO%2Fgg75VXIxwMZwx%2FstrMDuts%2FbkEcvbUWpNgPEZeqNV4OQJ2zZPVR4fUsEpE4LREOBRby4rkKX%2FOwgoP94N%2Bj%2BEZTAr6WP5pE06LQOSnUf5y6fQL6IKWht2zfUSkSZq%2FPVFagg3YOFa0AXyr2Qn%2Bl%2BdyvFzBFsmW80EA6kn1fJADpy6xOdfusn5S%2F9FP57Rc%2FY2ihpSxF7bJX0LgithnYT6%2B90v9r5K16q%2B%2Bpl9uTAeoidUPbyjf9Es5eEe%2FFvlyRVwfnthO6XmN0SZ%2FqaZ7iHpr31TrDJrjxLRqK%2Ft%2Fu%2B2LH183YHVtFOYa5R4HHSxB873w%2FS4N%2FJpeIiRTyzHfTMIC5kMEGOqUBe3nYxESexWE%2F57N8l%2BUJnxI8Xe4Tmx%2BpRBKomdwq6Rq5CT9mCEoMPzSxcWCvP11MCGrPPT5NDZvkyBXXxPgWVUFwjQUP4oFJJ2sVCXCZ4VfOMOjxmKMWPI73D6QJn62vRvh7HwK7lvBzl%2Bs%2BtMANEKw%2F1fhidxTKVp2A1QKk6hmTVsi31Z2tMNP3mL9AqguS0FfrrcRY1j%2FCbn3idyX1kmUtTi95&X-Amz-Signature=b9e8b96ba8a4c67f2ab73e0942197069c4770c2869c33e0a1ea11241def43a69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
