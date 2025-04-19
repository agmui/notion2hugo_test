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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMNQ3MY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCkoVGR%2Bya%2F7OUcnKDWPGbs4mNuL9kgIissioogRljuDwIhALKuoBnWliXAab3bQkkFVayT6ZiJI8bTBLg6iOs2yZJCKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwetlnJ%2B07EdFLlIf4q3AO5JjZGNtUoY19mJ8LkSFXZADvf2FW0uGjx0svYPs4ikvTOzZ94OGF1ara4aIEp7P5ySd8ileV6JNeEEQkIrxqIX9pgbGk7%2FQKsxwCK%2B7GnxQA%2FAvgrteNQV%2BeKI6qzTgBFN5mhSQ%2BsWcyi5i8FJMbdIUp3OlN3K5FolQflwwOE64UcwoJ%2BGhRxvkNYT4jXEVlIi1iIK%2B8k90OtrItMpV2oxsaJDuzhKfi35ngMNArqVym7atWn5ICG%2BBGln1DOT6X2ie0ephNk6SMxcT8bGCpvES3c7BGbri5mrkETOrAY7xNk3z2gL2V8CebYtyBDH80SM%2Bddm3XGigIlHkc7nCkM%2FjH4KVjXzvhoGm7kKsMCsEIworVHa%2FWLHHE3kZDC2JU79p7Ts5kMwk0z5KNlK7Yozn0SYFh1t88SitgiFsUyqSCD360Wxm2%2B4Bd5ItqnnF%2FSVgMqBC6M%2B1LqAKktzS0%2BRxaop1Os9RNZh8apk6qqjx8uNPXQHc0ymXfvrbFDD0DKM8MmtxeGAFfWWUGl31ijys56GLbcrr4F2Y0Vt9z3D%2BD0SgG8nFF%2FaFPuwsJKhxGMhdnlNIhYUqtK2G6wNwM5XbwCE3rrXvaBlO%2FEeVhYT%2B0KO1nyAuDdQzmKmDCMn5DABjqkAdpYkCJQNzP4EVwJOfZTLk3VjpfuWd2J2QZmskBEZM86fOXifS6DMcwJY8Z6OiM%2Buk5dhSVREuV0Q%2BKE5W9Wv49R4pEdTbTSkJ7i%2FrUwRjCBRA%2Bi4xdfT7Xo47sJnlzT4jX8IEHTI2451UWrJV7rzWqLBUs5DyWMZK7XH2%2B8I0koMXEWvXyJCQG0bQAALYnVYmLgueDGw%2Bqu3bgNu8Up6M8UcchE&X-Amz-Signature=e6affd7fdf21b6113bf657b3c9230064534d10c853bcde7e8ed48773a334ff56&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCYTAGIJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIGndbMXRAgscNQSRDtzxUSBJUBwUiQEaFmhRdVT7fK0YAiA4u2e4cgh8eC7yrikMyaHRUTcb4LqLZg4OpOOUEmh4eSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW5bSQKi9umOYOGUkKtwDBuB5l6Mly5l%2B5jFnvKwRXFaGqIJbcQjYXKz%2FjEC9z5tysZLgThhES6MtwVTofnzTjsx4Mvfk9OnCp4ADkv7RFzDhgoJw6PbRdk8HuHgtsdsB%2BMgR1V8EGnRLQlQRAumsm0N2sVpcRhS%2FFtHIh0pSHEB12KjPcuroN668RS5e1ONcRe1bpWkqzVwQbnO5gTXAafADG7jkxui1AvTrtDgHpHz8BPZeMWNwt%2FOcatd096T8dm3Je7a09S41tIGrMiddommM5RxrVR6DgjEcpzJtsRpu4PtrM4v552%2FNBXu9ytNp%2Ba4qt8olMqWyTO1PJ7l3w76I13KSacd69LOuFBrhTGECWgx5klOEHE6ea3QMkAU%2B8nMA2jazezhKy3TnkWhzUgEMtUouzu8dg51g%2FI6ACxXeB0RMNaIMMjI%2FIHTceJB8Ki65%2BimR8u9NDQePr7sOEKAyz19IpqE%2BRJW5CULrGffasLO0lrzIz93DiB0ORV1J1LRKIW0rxwoqN%2F3dkX%2FgilFVoRKyZZPZDpGpMRoaQmfK%2FQJlBbtev8Tq3YC4pLBZqYVhkc6IBKQI8UGInEUoTGM2v2up0gL3oC5ymlBRNduOfqfcxsK6OozEphDmiHqzSAbr1wcVk%2FFUSAYwiJ%2BQwAY6pgHDObH%2Bey6j3gAk6xvxVq8CLV%2BS0jPCEHVqv5NEruooVSQ6%2Bn79tv37pBLekBVznT9EdvcokVIBvCzfPi1j0TwxE5Oj%2BBsKv2xTjMVIIHH9CsLnGDslnlcjCr1K4%2BDhHF9KIH8WnMN71orSwgO%2F7ljwTnwB7kBJ4BjOjgPXBkYmGfzNMjqY2ydSChkzGMsYaXK7JHRqyapxCaBcUqnBz4gdXW%2BPYh5x&X-Amz-Signature=189370093608ea1cc72ea473ee6ba20ae96673be5af94cb5f3402188309fdc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
