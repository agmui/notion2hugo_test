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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z645WMU%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQWcK%2BzwoENOrk2FuGmLs5tRiW%2BXFztXuHJVWI0BeiZgIhANAMSN4Gyg7Js%2FqCPR%2FahMz7RqhlWE%2FvIGXrmPP4CCSaKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuLjq%2F7tCGQARg47oq3APYxgXeg3zhiLg9OMSJxa7xRYvy1VWTHgBHXiVHngTHtyAjUaldI6mMMQXiWR5li9ePBsdnu3OJIJSoxPUhq%2BKpKZU2g4%2F%2FRvUo9ZDhgVLOAKqf2trQdgYo2NMwT1P4r1fNnNxjcglM4w3w%2B%2FdpKDiFcdRla%2BQ5zs33XejKQ0MjsayZTbRL3cbA7i8N2g6gweH12zN4%2BSGNedAY%2Bod4n%2FYOLTWPsFpnWnWNatGGUX7vPidKPr7Nrh1EnfDsjcTOggL8ZfYEtSB38MlcjvGAQPKq2noC%2FxmF6R9akdsxvt0bIY9kqs3YpL6foOD65I4fkYw8l70fyh4kKLeLDOIpJH9a4Aa0%2BTeTml7l%2FoRiyyB46mletdt8lRSWLCzm%2FhSKPs5aTqxvomsH2wvtuTm7RHw2FFvMThv%2BO1QkfG974%2FBCAboKYRoQMFczV4N2Gteze%2BkJmfQLSyT%2Fu71JS7CHz4s%2FygtNABAJFnlyuh3VtcmOBs9c8aRW%2BcdMJ5d802NzCARj82G5wXV%2B4H7jl1sfszYTNzYq1Gnw9ZG%2BrcGMxphF4m8BVOd%2BpFIv3mqeqLR4mtUzCiybnUbw8E1qXBOECFEf1FZagoEGYBOAjxgtXLVbdrjudINir%2Fb5sJMBUzCEvOO9BjqkASSTOVXMP3mdDndL9LzNXDD9wGTozNYMAlxR28kXzgtpkzLjEDFkzuNHl0FHaxmUL%2B04X2MN0iQgZgsc4fSXtGe5W8Rb%2B8lWEXjvl4qucd59Thkz35tZVIT6xctvdEIldUaPDwR5LGnjvKlGlraBLNw21XCInvkJMDRMDslOiARMMeyh3UP%2BB36kqDhghxdg8PAbE7uzw6rDhXKpwA3fSYYfcNyF&X-Amz-Signature=c4eb2b634973905a57ca1fa6cf1f3a9c4743428f898e8f6a10045d17ef783939&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEID5Y3%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdWsfdXM9Eb9z6xxUKK1lqCGMYXg%2BY7%2FRyfEvVtHnOfAIhAMGF8%2F2z9dOP95rKWUNTcuFJUKy2S3SQ3jDSXf3f2%2F9eKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmxjOKlKTNCKLqKHIq3ANkBCa%2Ftn%2FWMI2qt2vYvv%2FGMyqs8AeFtAQxAuHi7IRQjTQcU97OECJ6jM9JufkmN%2BZ8juY4gG1JhiZtTp6CfbNsVG25LaPhTcq6isFBZPSXwc4zZoYSuPQSx8YRxaUzvA0R1yeuvKskl2KK%2FhI%2B6SH7QZvBaJR%2FYbBqIs9tYGoep%2FHOBZCATdTkPn3vpWgO04kHQ0jOB8OQ0tG5IvA9nmhcQw8dvAkTb1PY5dZthNAaALZpkTGDdMJYEDLdEO18Mx5zKQWkdyJ4SECLyIb%2BO6hn302jAB2AfuY6mXq8JQ6t2%2BtWe11QFPZANrVKfTHkWotAc6JGdJGp23YHk%2FVe58STHEcKAzvBG8UAtSTjewGNsIWm9TH%2B57bAlrmgQta3JarM8PhSh6oP%2B44T18KtLQDbOlqOVqu%2BhLx%2BFR4xdqrZNvwLQn6dPjaHJUXx6ZVZpMIrH3%2FkL2%2FMh%2FRDCmHvRgrXGt7bpwWS36IApaYgABim4TQDVzSiJZdQ0x%2Bxp9LwlUsdlYKlFU0KfD1D1rzDMur%2BvQunhvim8YDNqxNh8kcmZxVBKhWQUGMAaELQdXk6TnLEOjlQeWsMyjEx%2FG5TW4uk9U5iswyCZkUfggLe5p21XqV7rj22YYWLV%2BP4rjDPu%2BO9BjqkAaO0zBKduM33QP77hQ1RTWWFajAB0AUpKqzaoW6NpKI6q0aNsVrb3KY4Iu2iJ%2FZiFmeXpbV63d%2BJf3OXQdURr5OTvTpnoHglkZhoYbrTRusWVWzCzRDgDCjQ4%2BoDgRCmlTp1kI4gWlUfESIZqBUJCbBpKkKZxYAVSUN%2FvK1rf0fkTPoRfNjS5pKzKRZ0z0J1JzO13FadbFh1T1LnPSsq5As9b1xA&X-Amz-Signature=244c13df47054ac05e72651ef76d8386ee0557bfb8b61f8e24683853141dba60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
