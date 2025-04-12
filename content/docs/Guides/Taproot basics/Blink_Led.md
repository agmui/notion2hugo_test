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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZ5JUYA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD087u9XilfmuzfZOkFIi8PROqNgOvxsZRhiA60vS2V6wIhAOToGxDkTrZQa8XPdYhnoh8LEf9PR3KlAfb%2BT%2BjU6ejOKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXSbEfterYaGBUDiEq3AN%2FW0%2BxrAGuHZFqZR%2BVvTwKU1C4gT%2BO8qAaF%2BTgAHudNrM2CeXYOBiOdCNuSsH0reYKTYCC7%2BxdjCIYWQuw8%2Bh%2BonZhHXja61Rmu0jS78WbS0A7xVcq8AsT%2BW2AYhEiCkLZLtQ%2Bk%2F%2FziSxTs8Ac6msKg4kQcU6qWnJDIXIxfG2ayTSvSZkP8KDDP5R4T%2BfSFh5pcbs1QByyZlAuPcdd37cR79G8AyLrGDgPN6hwemlvOCGIiL8SZafW9b9CRQrsFZ%2F%2FHAwUF%2B3HhGe6V9cP7Ee2ppcCHkSMp6Z%2FVgF29PkpWDkr15%2F%2BuVJ%2BEaY2YLHwrV4KqrplpvQ%2F2Nr5bNMpaOssvhQQaotjHs9%2BtNn3DMviyifJ%2FOqFvomHlNQjA%2BptSC%2BbsY6YQzF41uqb5d7FSEreCP3aqjrvzcFcar3DGdTPoBCjX686uLnfIVpSqvDqGuoPHaPVhQP3mT%2FfvhOMO51ssgWtWGi7LzSub86Y5PSmT9OLzXwAR5IpvlDTyX34G5ShCiqBu7eNsxQsoQp5Y5ukKhr74hAmLz5Fek70rngQ6PN97d5r0WYn2G86JMHOG4h86U5PmX%2FmThjjDe0qAPEBKcyOLyjiM6Ex19Q80oxJAIezCs85aoHNfRkilTD%2BsOu%2FBjqkAea4402ILdNco5m1wocKBu0NweUzwaB56Yb6WvypisJ4k3eZvnQrMk1oqf4vkbANxjAeNli%2BdatZuhgu2ppolzrQDVjijSxmiAOUEWUH%2B8IKVGG1wIkiuyF%2Fzs0KsI4BMlfnOgLodf8DtfYkT7GGJBikXJO3UNkFlJd4ZvQUUp3RSunyPKa9318hNOSj28y1069IsSKLaPFdKXRiJQhiWORIO4qx&X-Amz-Signature=9161720525fdcc5abbd942cf8eeea086a4ca587ce66c93c823bbf1f76f7d80a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTFSKIKT%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDFOtEYAbO%2Ff4JQbAinqZBWBpBgiPV905QYDGAHjAuFhQIgfSH0ntbKNEr2zbAimmIKQAAjizuCdYcE%2Fa8d44eqrLAqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIN8b%2Buuxkbj1NxByrcA98%2F3np5pujVk7wMRTMXoT7XD7IvtprlyPOf7VDV3oohyXN7K1HMuFIsj0FX6QVBXy3a6AHKEfANteBjX7JklLogoMQkIxzw4Ljy5%2B5%2FpzC9MtQ0HQb53yl5XbSyufbtel6DRB1M9KMKknRFOzXXP6ZYJFeQhjNhkMvJCnzI%2B14oHAsclmR%2Fj5suNEON13C62JRgInKswd4wuiioVinoSBhsDsa428oKMO5Y4HT2Mr6Sz4V507AtRB0TL55oQXcBLXIYeiiFOJvYSx9VNM5q%2BJIqEFyFWd99tt%2FsOsruXVL0eOp9On7kGa%2BhMLrUzPB6hMX8lqt%2Bm9jw8mousVEG1DVvO7WObDuYxnJMxB9b9%2FYi0drhc6ISwA3OtX9GwsuRvT9hscGrJaibZRJ7DPhPyOC5sd4VScgWmS1hL1RcFu3RYC740hLPAl18Q%2Bkh7YagIbU4dbsKqUO1ko3ne5DOZBrnbTokBstWxA2KmQ%2BsJX4uOqKwseNeNeLq2amCB7%2BRS4JIoXwyIGBoZpj54swNd46QUbiz3kPsgfgC8tx1EPGC5lP1bzHut3it0GUY9jvswxQKrh%2FfGzHH8lI1g9wJPluYkOxnAvfdu0kyXvinHYe4prkcZ4pigl58upo5MI2x678GOqUB8va%2BcEFaYEpsMaiIKJtgAKCGiP45BDsHJIuCBjN1CuP1BDyWOyhHR4ujI3kR3js7CSAe8X7357a4j9smZMLn8ZOPr50oHbYbd2kCaaYz%2FYjNPb4XD9vJn0q6TMoJJB8Jh6k0ywbMszAp6w0uGAYaW2I0GGI0%2BCj3ulIhRq%2FJNKrdsj8k2Y%2F4bCIbGeCeuUSz325dyFP0YT4atE2BBLft34OdNtOL&X-Amz-Signature=b1fc52d813b56d90be3dd7df305a72c40f3b7b90785fde52e54af470d5397236&X-Amz-SignedHeaders=host&x-id=GetObject)

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
