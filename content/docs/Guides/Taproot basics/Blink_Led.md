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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UEH5PTQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDE9Li8JSC1sCsAgUQxsV0QTSRV6MKFhyr%2BOSLcb22vywIgdGIH8aJhyGco%2BW8Jg4CMg3a9IMRzKw1Y0PFgu84is%2BwqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFetUmzXJ3ai7CqNkSrcA16saYgxbOUgLgbt%2FMUg8xNtbIMkVanEo%2BpS0eT3nu8jKM3bdmsSxHKVIt8AJTAnMXMqf8mh07YPV4L8hX7JstzqVJggmHdFQO4%2FZWjr3gk66wyItVfMWIoBjA4B%2BODQ2c9XjKU4cW3AIJMiCZ%2B3qj9NEvBUcG%2FPHHLyWY8JqfeKLR4NxAlNmGxqhZu78mNzYlj0cAMFikP9D%2FHICbkFaleFLwT8%2B1Kdof8uxwDblaLArOIipLrhRGniOu9BIgWWL521cCY02gyGqSnsEl6GjraQzsko3BC7w8P8WBSqs2nEVDzs%2BXJg3nxSa9K5kDTU5bhALrSMML1h8PKZhN%2FaNUgRVuX%2FrMQZzBXtrFtNbHKWmXH54HbnqxKBZvWhJYu23W33nuTNKhq9%2B1rh79X7Ypm%2F27xLkHiCmU%2FkhJe6kE3RfEeRINgNg2i2lDxuo1EKVwnDWWjAlnICX%2FDE4N3spjPIZ6JOvE%2FiRGOi7wSOT3uxLtDqMK0jGMD4QhVKZZIyrXWK%2FQacpo9b0K79cpt%2FRxF%2F3IISitWQcCpVHyrtxCxiaZr7sBpu0xFubTz1MBrobJFlWZ3WBHpdIBcy85T%2B8N96THAhrNluz9JxuIMx8sDE4buUSb9MQXkiQHJFMI7EvMEGOqUBHnf9TfrwHjvHOSHx1e10Y5QoYrhiH6M5viqnx2ZXzqOKfktmNuhlq4FnalieHqLXw9ffZXgRlrK%2FNxCAvTFKtti4yhGry%2F97x6S%2BQIWXiWWHk7NrQC5kDIS11HIigGfExAYJexAO0ztyVloceHZDNvHvCAibBhGRFO%2FYgCnXks9wzDDRAzbRyAd%2Bdkkh3GyGogyslL3Bz33Dnv2xSSsG%2F1VCd%2Bz3&X-Amz-Signature=ac4c8ff130b7c1721eb5e92234c14b4e3ee3996cf32a09edeab173abc9500518&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y537MDX2%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAw66GESaTjtg2zuaKIHwE%2B3RRryn4nEmEjb2U2KkRF7AiEAlOzF1lm75JlUne%2BU7bxKGGujgq8%2F1E9ENVWPl%2B4eXBgqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUk8NcWoieiXL1jYCrcA61lyUndRzpgKzz0zJFjMVd1Tg5F7zo6WIqIrFV3GyrjDjfVyphYkMQV784uV2QIl5Ntz%2FSGpHc3i20phjHQe7laLcYbPr5NosUQ2iNsCKUDZVdehnQ6ZnS3adCp5hAK9R9g0oAeyWF6c%2FWHlSKCC8y8tZC8DjEocZo35%2FzzcAxBqf3NKA0U5NuQ9oK3ut%2Bh9ocLPBXdmVfDsfGgIwR6DAD2wNTX8%2BA%2BDjINB7wDW4Y6KiN9d%2FU%2FTKSBJ0hC2ZRxXyFoS2EBBdZrdHdrAi0n%2Bo%2Fj4pXVLPxWdUCxcQL9lr41fdJWr1%2F%2FGVSfpfDFILlEH0ekZf47OZwm0aWPGxnWte9j5cLz7OsQKMJ8OW8RDh5vDU%2FiW2rIxu%2FDCrX2fmp3kuxo8b%2F47er3b4S9wRb6VnifInS%2BHcNV8nOsPVQcict8iTdJTlaAqmFx7yZ4lUGqJPr6sUed2Iy5K%2BIkuUWUwpvRusqubukWy8akPVx5By5d%2FriMf5weQFF%2B6VnNjdcepBKogeOwTkaUS4grjokbCitB38Kc6BJftQ4avERKRFYeZq4RlLvtpa6yoWBD1vviDHZPTD0rKhnbqB63KrUjyYVIy9ilaF7fQvs%2B4oFLZiJlNUQELb%2F7Ua02Xe4SMJ7FvMEGOqUBjAYO%2F9%2FP4s8PfBgrGikI2DcFlPHfET0TOD35G3q75xv4p30ftQD%2BQ3yuUiY3zCwPwS3pVWywLUShfXx2AGeqKrS1d7JnbLe4wkKjivlXP1QSUOBYkcOua7QEVhKDaulQ1ovzokV3i5Ygj6GqniV1gQMvZGOL00LNg9%2FkMBRpAYD4IUnleZ7qHiY%2Bk8arJzX2omWx7qSevV11EdqpiX6HgmR553Wa&X-Amz-Signature=5915f8e4bf0245f414c2e53b441d8ca412588a4f16aa2589323cdefb9d711b44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
