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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466243WSUQ6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDMCV7WSAjl7TKuD9iJihTcGrURML5lNC7O%2FlNhG8QMMAIhAL6SKXKn%2FOxZKOUbquQ5%2FMGHAQCoTH%2FeqgmldbHK00TBKv8DCHAQABoMNjM3NDIzMTgzODA1IgyNlkzxWCB3XKbGgHEq3AO1gWRVgslISq8bpCJgz%2Bp85OM%2BgrR7XeDIcsnA52vheaHvmFifv8b1CUDi3Nn%2Fw6AVdRsl1cTuZHod%2FTud08FyqRq95ycMCf1A8P56i6k1pMmyRB0BX%2F%2Bp8Wa4ewr0zwGhaALIMx2vrONkbco1C896tLbhyZpns4c%2Bj0gaDqFUpJcOV9g8zSKhBvKiEoD%2BwGxl1%2FvELHexrYidVWXDm7EHunSFnwPISzBhhPIcQSjgUPkVNUgW1EUhlUqHguTSI8RQ5IsCwiDaguWXQg7piFGY9gVUPeBrfv90vrRqh%2Fg2iOXoJ8fJI0ymNTqfWoi5n2ktM0r3qh7tqtB5K2Uu5NR%2FRRYsTfIxP5oCISn05n34Ov8H4aW0iGFuwSozn%2B%2FIE8AnIfRMvcV98CAzzg4kWCM16wOe%2FotUDio02aypa9uCGciYrEoIUqPwJb4%2FWiig29d7PqtNm7hv%2FtIJuwNTkgP%2FeKyee1HDfuUWasfCDH5YSgUwe%2F4h1AjCAlQ%2BmY5Z2VRQune4tDXRA%2FtkxV2a%2FJyr9upQP6fKyhem5O55pCj9csPaleRj1zHrkdbwqcUZ0wWsTw2KR1QepQKrKednxSy9zTP3yUp%2FCXAlqiqY4oNgyQdeCK35bvnfB1ebrDDAwOLDBjqkAV38LU2XWSbKRPI56t2TTpUsUGmrE54Pyspypf0RVft5i5Fzgy52vG0RF41Mdh3Ag%2FLnhWMAoOMIuK7P%2F9co1aHaXg0fJ5EIiSrqpG4mAgUqzHVzjCDRfOx3%2FnclZpxeIrWDFgLqF%2BYCle%2BwZLLbHwFNDoKPReA%2BJuos4iJFGl0HgNCvFSpJhDOkX4DiZBxzch1FN7ZiUW1TL2LG61hWPNlo6bc2&X-Amz-Signature=e553765d86037c0c8b16a458725576459e73e0d3d1f8d9fb9aa274870008bcd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIMIYX6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T071246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEa4peAosnnaRtKDVpra0zW86YRlxQRhysbeH26mIH%2BqAiEA2bARNkiJGIlOnmfp8mJOh9vmVjbW4hwwJ8df29LCZUwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCM1nwslRoVRjptb9yrcAznPgwqGzMGZKZVDxFRp4gBjwkgxKw5iZnR4j61zevPUOTjs9%2Beh4PKdGllQAiBw6xIQZVEzVkraJURvuusLp3CVAYKhWm0wCDbBwdjC6tnsgBLYH6NgQLjw7q5mYdHm4WZnKGaqXYk0nY98S0pN9owE%2Bxk3595SXylPt2Ky%2BOMMiUW6hpQXQ%2FqIpFtPO5PftU5j0oNihIvIAP1aoeqAmcnc9ukZWNuejpMeeq0hySDe3U6J9%2F2zzQlAwt5RSrmJfL4gISYTkby4Zuee%2BFxWLDr9pgzNJdF1ur3T03Qt5Uqt0Ap9a%2FU2EDqnjUgcGrrwBnEPjMWsIYGLwNfq%2FofKCwN%2Fs9fRtNDeDo2ZAMDAbwl46wsNdThDHSer%2Bqc6QAQd8UZ4M6KrYMzML3EpqaB6zBu%2FhKYZnWfIs9%2FEsV%2FArdQ0VFoYaUATVC6G%2BpUX2QQ9hC28PeGdQctmuwPfbT63ZSUeelcIRIcU1wy8u8t5He9usYaXKsQdkjFX8r6jKsPCIZ8Keq8Rbt5NOrxtdZSiTMLtHdh5wBuHD20XRxqXFe3NsolGNuBBkwvY72iiDy029h9xjy1%2Fmlc35Gm3G%2B51oovKe%2BNP2yzRmhtCMJQZLgSnZw4pxG2zbuN3kJxjMPS%2B4sMGOqUBJX4t1O4JbjRPOaeycmVN6RwBusqTLMy6jix2YTWq6inKAB6tq47tdMYMe3uawINTBgJw%2FGNzg8WcJ8qr2UyLyyUl%2B4C0zqE3q%2FihRBu9kqatCnf7%2FRT8JKjHxr8ERGZu3in6UWVWTl%2FB0wl90Jo4%2BGAwW3gbrVcxf%2F4fgcisZne5LdJjkcNVK1Wmg%2Bm8D7cUHyBaa%2BcGEy3bLk%2F5Gou1iKy7Gtyw&X-Amz-Signature=d1c3df8db4bf231429d0a2458e1ed0cf54bb4f07d3e1be283bc65de2dd59a597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
