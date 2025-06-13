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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDTASKB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDwm5M1ti21IbE3mF2f60dXo6kOzrv9QRQx%2F1PKmbXBkQIgRhR4ygG8X%2BF8mJ6o%2FJbGcBxEvZG327EvNA%2F0ThPZaKAq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEE37N2K9XkxUYzjtircA7QoyRIO%2FgKR0yIGCwIOPpFKLuYjU%2F%2BvCS0mjdCcQOZ9jUzdH0Ml3EuQF%2FBjT4K7ie2%2BaN60wrMs%2Bpor9ie4rNAXPHwQLAy5KEr8XNbQtTe%2FlCxYCrmxrzuxXh%2B5Kyowv58UFwhIr2yK56cGFI%2FNAWlFiiZpADn%2B2JknDTgV8oRaIun%2F6R8hB3IKlM3jf%2FJI2JYE6J7ewTKWqJZx%2BPLHYoBed7pfJ8F0c7S4xjK9I9Y%2BSFhu8OaT9i7Fo791e%2B7XDLL5b3VIyXhDcUpqRsVlK45yR%2BnKWmlpkQmTdPracY5Ux9Ti93E8ziXDPFxy%2F5rkqNSWri7J6AJjwU76y3s5CIHqQmLgjtHfPxQp61a0QLFSpoRvEEhtNM1sn1HbqU4sJKpZbi%2BeTgwA%2FvHX58057z4eoiHWSudkQWkuAb2931X%2Fnfm%2Fx729PJcL53%2FuFWfdGSF3oyyLtAbDNPWFDZNoWb5K%2FSLgJNnCDxCZ1RCPcJz8g8fiSPeoZVijg28GQ0UBkGs%2FBfcfHhLIBBU%2FeXQbtiaqqVffiiHfij8h4GsCnzDt0a76T9MqrOj7PPkZD6ZfO%2ByAztuoVcmvVUd7etz0HQ8Z4uQFWGCNYI4nfPLjbGAAxC4LJrPD7qqbnMbPMPXSscIGOqUBNpeyh584VTrSJcKaHmjfE3%2FowRci5w7Em2qH662vj57htGlOO10RYlYHsX6lqM2QG1RlG9wcrOWHSzvjeb8besDhHNVLXWJGuWgiGgDouaQ%2B9z%2F45hhIL8aJBzFE0h%2FC5Q5fCANKo57LmayPYnRp5QS%2FE30aaKYa1x8TUz1T7oxWDQ86isx%2FiX%2F5bdnnyXsz%2FybA8mbRJUZCnU9fYVj%2FwsNZdHsz&X-Amz-Signature=27aef3fef6173b77fabb0ceb57354f9040df73078c3b14b20b240642e6ecaa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQESLHC%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGBdz8KFRxfZ72GpKCiaF3ggS7NGMet9IpME0nsxZ7MuAiA1Gdqx%2FjJ7puVgUI95tQsWWj5LCWcZeGWAXdBNLMniNCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMK%2FWBnxC1H3S6kEh2KtwDXArIQNOwuh%2BOpwOD9564PK9TaNJWQTmlR7EtAAknOIj%2BSAorekuT2tRspyuACMKxRlTZ88aRxroRO5G3ErBvHhXrYYYuuSpAkWWpmOUhNDHZROgJit9DqjhagWyK4OOAY5eAWGeki9FSqg%2FA2qJNL8tV5Yif5JSSSya8pCGRoh0DsgKoM96goYI3DdGMH8r6SV8Q0GgCibKDWdjzntFOop5KILd%2FezimkvectUihV8sol3ln5p3O2jVHQKC%2F48RMF1WsDmgcvwMXoswQ3r%2F2zj0MAuViUBIc7vSXzFZQdH9QGCZrVpSf7W2hVKNOwwnX8fZpZ%2B%2Fp4a0YjYwnU9xxxPOzJ%2FeTuTfOlnTMcB%2FfziaLAj04orBfsVo4OHqBpi2cgC1AZ4m%2BqRzUsoOLTneER%2FA%2BlMAqCkP5St%2FrGG%2FIPiG5O16YANtKTf2hsUmbG2brDbYzd7zaWqNtNQcmxxD7%2FEaPw0uEJw8YCMzVdYcLWicuOae3D3LgNtKreg7FwEupD8AcNgfa7IbZiy6QHpdBGNDr2ZPCwk%2B1jVuNpZ5ltiCXHDVtlO3afNLU9cq55Y6nyNJu8cKrJLi1ZJ%2Bi2bnhg0B7itcCMlcWGfgi9UpQ%2FtsqI6gaXbYkC52rJPMwntKxwgY6pgHK2k%2B8yjo%2BzeG8s6fEcy02aFMJd14Sc%2FgrpM1A2u%2BLauxbUR3jAo34crnOYQUI7EAWwZRTr%2FDscLvm7bs3faqg%2FxyBzAQtDMNCciS65UmFhk6DsqbHQTn8tXNY0Xx2ewKs9OJGEWe2JrVrIQMv4miihgvlqbXifg4W7nYX8a0j0DOp%2FUJBHIrlJsApfWPuSuAOF8UfGolG46%2FOr%2BmUPbeYexBzssNf&X-Amz-Signature=4c734f833a87b7e88b4e1f345aaba6ab1c8ed022b3fad61aa0a574734ffe555d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
