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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT6776VK%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqmoWMuzWb532U3uQgYrGOgofRorujtdL%2F9b3Se%2FHU9wIgWXdz7LFCGvtdG8b%2Fpw8mN6BTQTpEZ%2F0nOy59EWui5psqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0SIP0KUwVYiQtSdyrcA3lfAUHQHKzAeUicbMLv69GhJBvkl3p%2Bvk6PKR7ubUyNQEGwn0%2Ff0Hc4T%2FHVKLJQr95xBTLlP7rEZnipbZoxv0JMutYoRLgzvv6Dx8db15yCZ7J1hkJKVqpvbxIt6bXqHdWAx5flBqVrUXx7FI76h%2Fdtc68bwgJgk3kY%2BYH26EMb0DI%2B8Tp08JN10%2F6v%2Fzlek86IfvgVBU6ZHvSmm0LbZZtZuk8KvE6Ig0AaDgnwBJgwqBsQxA2nTeh77%2BsYycLdtYm20oWPnwIYYM6X2XAGH52atcTjG5q8ZU%2F%2BWU9nxhV5DVrwYmWSeOJHzl57epLSMB7%2FEijxapyC1SxWMPWJI03N7u0f0frGOchkfQmiuRuiDh2gtCl8HvkeQ4vt4D5KeHBuvSqHZ9KmbX5qVwdGnJq8Nmb8dH7IPbAfsIEfDJqaSfzOazirkzikzHIIk1H1fYbt8TzgX9zZfKoY83kfNYhG66Gr%2BJGilQTKFedRZgW4RlDbYKx5oAdf4AOfFM3rBUZiq%2BlJy9J9C1lKxijmdj7bI0hJlrJOwm4DBnvJHLtvXlu8vKUDtPQeMukUX6xRpgFRxv1dYS0yW%2FXbq%2BSwrh%2BD63aK3dpv9W4q4fFfUn6sd6BCOFVs0Pur9nZxMNW37sMGOqUBXaNCaMLN5r%2BhF%2F7G0Ztfd2C7caMT%2Fm0UBRxX9efUdaCc2mu4Csa5vQHsqrPU86bkXMrxMZ%2B715IlyXE7eoa4lqZq%2FHdRvlYBWrqxw%2BNf9dQMeFJuVJbzQ6a7bQaQ%2BRni2%2BjwI8qfldWMzTnnX1UygIai23TOhVh6spps5ghCYXc2oiEN3lcwG3yOEsifiqCOZ4OCUkkTrxWQU7w78OHfu4pP5euT&X-Amz-Signature=aca06c09b806306418d2d544985b60e07c02f8fef6ea232c203b65f802481879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NAQ2E3X%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T170810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Fg6wV7V0io%2F7OVfHyb%2FOnH4RbZMjdQZxfZq0J4%2B6AXwIgef4Xafr9n6lPpLrdeMxgXhuO2L5vii1ZPP9Vd9NdpuUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzCG5rjJJPxD0DvDyrcAxANkLi%2BMftz3sGhlw%2BZcPEUA4qw7Yeeh1e9zqVkofibCcrjSEFdOaSAoaPNuWBSn0E%2FejUWGyZHxVBQ2jktY9w5O1XCSzZ96JfubpIEDg%2BtuWxLv9ZmhEVt6VN0wJ5CLbzzpwTy8meZasC7RMeO1BVRk%2BP8v%2FCEDUN%2BtwY7Vl3KomqpK3A%2BNrjkZZEvjJq22B5LE36PRWZJZ6v0uwHQ27z6fA%2BpklsYLnizPU80qR33yctHc%2BGZGucDx%2Fon8yqgQswMw3TykklNeUsMxwB5xA2lqdUmxwqEf6kVlYr7w%2FFk%2FQFPfmYuWTZYFzKMDBNo1y%2F5FpiW7ZIuYwdxJpbUSiPu7byNjOq2oFnxVefVSeSU6aLZTHbe5xcilvpntXl7YTSOW%2BHl2t5CAdKrs1jfCz48YwoIdTZQLmSBIMWj99P2mOyofGshM1Vkj6YmwTMLJI9t8E7w4C8xDhzO3VBCFY2wI8L3A%2BPuUylpPYKtEF2LUk7zMkPifzlzSBCd3231bTBQZ9knAX9Mh%2BQS%2Bg5jyTX%2B1V29yOyS%2FmTNjGO54I5cO26dRQ1gNwXTLKO4ordm5zvvK%2FZxU5TQtvkXS5akNG62THu3MC%2F58HL9i9x2WhDmSNfsjfFlFIRcgXS0MKe47sMGOqUBu%2BaflHVDV8MjAEM8fwircZr4Eys218jfdzs%2BYpIkXN9RdCWqq7Y06BZ94DN2xDeH%2B%2BS6zITerclXK1Bl4sbAqaiq5xxeTLs2A5EbQ8StWLcR0cSCDdT80HL2PLLTZ4ljH%2ByshWkOrY8qGpDq26giRgLHKoEMtSIQzqT1tjNS3ZVr%2FOJ9DbOe0iDDZe6VaBjcUgeJjWWRU%2BtP7N4o%2F0Iq6nYgR7P8&X-Amz-Signature=0ffae6277282c95e76ca77e0ccdc4cb6cd14c5dfd1f999c15b06a9d0d54a1de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
