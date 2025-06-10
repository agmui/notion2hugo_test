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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSPG53G%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmZQBolEEj09JmBoH10N3%2FfSHLDpSOmqa9Cm5VfJf7fQIgL6jrQhpIuw7TPFfPqKrmcGfAosEVC%2FvMEdaQBKUyWZ4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzj8OVwjcyDiBEOxyrcA8Vdj0oJqa5nFaNitXzuyg9wxnnqFFDAvgt%2F6w4ncNDreAEbfMZEIn9DCIsea1AWrfejbAD%2BB2eEch%2FSkrqe9VApMh4XE5DRbf8r4G646K22Lx8wBO%2BRkU%2FkLOlMZqTTC9fd%2BeC1D%2F45sRv4WPgn3ldgsskRnQ6VpuabHb6xvz14Of58OBw%2FLucC8K08Gmkis9UcYjG7gUZXwt4c4Xis5gjdcRYIP1xa99ic4ZI2h7isQPAOTt%2Fa0U5G2%2FMDrNoEtuWHFu5JYr8DYcbbBkzBcIllJ2HzrupZt0nY%2BhKLXwLPMkmTDwdzqaL3A2uYZ7KyF2Gh1DVBJLqs86bXr20qMqEoGsru0wpnfw5NJu%2B0k%2Fo0wG3qwRp4lpyX3CDL%2BEnzYd3JSYW%2BqglVhcV%2BV4cu6%2FWgQ4oRu7nEgRLohZlAZi49OL6%2Bv3nuJPTFfiwTdgmxXeF36dwJT%2FKVGvYxEZwnCuqCxhdKFKow46jr4gG%2BvAJhp3jeerWPfpN6NPW8fJZwlofKtExTI3YgQ3eF3XTct51BpypeicEUVOAMPK7pmWdVaG8FpY4SUGXZ59TZ2HWz%2FrLiet0s%2B4IyKWcNzaHJKQqkBP4ToHa%2F%2BJg0mW4WlYW7%2FlswsoPkvOpMd40%2FML2IosIGOqUBcrX3iZCPLbCjpSUSX0YApPYmM9OH2ip4jg%2FNHgw564OZ8wYKo6fEBDh4NfTFDd%2Fe9NjyaO1XusG9bw176TRfgB%2BLp5PBedeNqxX1rUALyFmOxIEoIxZg580m8LDETzs9y2LkAbx2UL%2BgKtDbk7SsrxlA32dTma3XZV6KLj52fnjksnEnQH9UasVMFW9bkBvkE9t9QxTPW86Sdxgq9y1teHkVGDIE&X-Amz-Signature=46e833927de79b0e0496567769ce02fa39d2ec4a38199ad477efbdb7d1597526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVEDF6E%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpjhxrKdHzpwJiCQRxUciaNII3wUKlvzipheDZKMWIQwIgERpyBG9zdYakV%2Fi5gp23j8N09noKEi8cSt%2BQxVWb8xoqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FkmUL3U5SNmHQ5TSrcA9JgZ5RTkXB78MmBI8IBbB8t8zT1XTh8ebLrcrmHeIJtXOCUE7dnc0ILX6BfKytuJNZ3ZiCSN681c8hOQxQcWgRNe%2BZq1CCpZWUPqHhjEXV3RR4amAqWJW0KGHSI0hMO0noPg8R3J5pFF9CUpqX63T8r2pfEIHoUfekw3cayMBHgBXCdUFhSyAwEZsXk8YCU6o7LDV48nEW4FJQJ46cyTgn%2BOnrXqFWD4mjRG%2Fz8N9%2Fm564m9hOyW95GeeoC1Z9%2BeQ%2F%2BvKBRAMeB3hAvRiUq7Sq6OEnkKihCzfBhb%2FLFONbzpwuoN4h%2FRn%2Fx1OlHr5IeaWm3NSVrgQoG5R1Fqg2JgGx97JznB%2Bp7aMmwn12SXA%2BuAIPslRvWkZhPKdQtwo3UQOa%2Fhs0ijyC3EczZ2deeSrxPhvEZq9cpp8A1QletXxYNfWP%2Bn25fqUSu%2BaSDMRc5SEdStKfSvzUvub9xQRhUctTwSL0QdaC43fMOMXSEHOKpx%2F%2BqBQrEi%2BuNGU5i5j57mXYWtlpPRWqg8NC8%2B4jbW2vcDbcRUqN5eysmMVSTaH%2Ffsr6MmpHFsq3jYFL7%2FeEG3HLxL94xCot6UHz%2BTTcbED9fudEzG21DEH6MTOHlf5L6Bsq0JxBJAfOFMhHAMLiIosIGOqUBlaRbK%2BJv1NVB%2Bl%2BhatUZVXoyiGgFvJQ2VR%2B7VGHDonBa%2Fb5k5RymVw6PEeP58%2BsrLtMNrpG7AzyP7yda%2B1cPdCMAGdJ%2FLMD7SylcCn574nvP1bngzUanEYix9nJCWY9iJEDoKaeE5P3ITLjA2PEbQcBFVOb3se2YElCjGmlBGm9cjL4F%2BIEnJBblJ08tVDQJ7pA6SWNwIMp1f%2B5IIhdkSGdk%2Bd73&X-Amz-Signature=9c82cb1410aba5092d24e956511a214fbd75e5e655b1675d37261130deffcdb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
