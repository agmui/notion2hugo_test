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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6A6LJL%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCd2mdLkBjK%2B77O%2FcXZONvRCkXcwS4a0%2FhtLacALo%2FWBAIhAPcqNmITGqR%2BoCWpFcSRQJsB43AeWNPaJW8uwdHmEaclKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDvVcixloXh21Mq3kq3AO9KrhFaosuImKXQAAqYBWkFY%2BDFt94UHJLptc0keraCkzd6tUgVDpX4MPSQ3rrv24UbHiJL0B%2BtSWSGiwPPKJrc9BXdrYQI7EKLxryDcfDhjOrix7q36qe7GmT%2B2NpX240gk4xqqu%2FWHekM8JQzKzRNgS65kULrMgUjqnLDhY5H6xaJ%2FxHBaB280uwxU75uGi7CqD0o5BKQwvI2ruNUIdKKAqh72b%2Ft8f5nEIagfmGGmwgHvmJPwMG8qNRqzz%2BKXRmN0XNX7Bg9JDjiq1SOlHJBRqdEEHTPRQRsOdKp7ajY2WFd9F9WnW6OQ6G%2Bl64IPr8sAG6hirzxZ%2F53QahjodLwOWsDF9ECpgqvCVgZAAh1l1pX1cnpjuZSN2ZjHSKdpgZojwEASC4t73bBgim%2FbnxkATDPSZ324sj9GVtgyBLZwOReWMwKGlqY4WC0y7rQw%2BueH1bnC4qz8iw4WTw94NsGu1jzRFXfDUoQ2vgBSOHgNYsWK7mhGGWb4TmvfSwLTuhwp9h7nQwZaYenu3OgLZKT3UFdIBPur468tcxsQfT7PtslVkneNXGmwfk0%2BWrkMSEHngfv1bmvwDjU5kpvP7xotCZVmpbsCqJMfCfjF1hXYI8gEDp3RH9ae9tXTCWkvHBBjqkAUObqoYD5sGIFdX4%2Bg9ZB0mkmNrYJ7jH%2Bv8PmzkWhUgfBEyDB95%2F9lBQi0qXeeYgebxnfjzB%2F0iGe7TdoTAKdDt2Km0P%2BNXxS0HTI6rxmUPpHMhUDTHjkHh9DvwkcmZWC%2FnQWEDJpBwucxrnZYyfqnjwi33b9oK5X9cJ2z%2FbOcNdOaJpPM3ATcFvvfu3J05wkHM1kmDxq93jiXTqr0MHFl7oZFtz&X-Amz-Signature=4b075c5b1b7c335a89cec325de22f9a3021965fe20ca8c2edc7a6ffac7da4db9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA335RLJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T131825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDDHfzJ8RPv9wdRuvGJODoSji5Zl%2FmW4UfOmWsUu%2Fs6uQIhANVUt3VFuEkBKaamWoYnPQE4USqmOKhHNCWuOmV4CVbsKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcbcL2%2BUavVENORU8q3AMSICOARDzltNK89xfXSm%2Ba8nZ%2FVs41EVKuZJ99WWOvrW0MjIrW5XhHhLTWInRwGVCN27KBqZsM2w3lnlTUzfoUA2zQew%2FBRaR02yk%2FXZjstTA4TdvSjuOufDkKiL1z66V95EAXRq2Dsd%2FNMS1%2BJhXDNoV28%2FzA9%2Bj1VjvON3IDWvH9LeskmaQqRwXzJmJSqoVnk59Adq1F9eUOG4QJrwbRmsHXw0sCk%2B9M56uDATaUjhz4b9DzmffnuM%2FbLuWu47lZ%2FNs1%2FzK3C54znKG4mPlQ6WVV0ZZ%2B2lPzoi5h66NpzVjDm6mmBKyhyW%2FlN%2FY8bKbVApny1KwiLdUwpUSihcn0tXtpaSbF2HS0UKVCfzOtZAU%2BPFOnzwEy2QYiPqRVqfmQr%2BLiWY07omzrRwDeZKP3Sjb66ILPJ0PMY9f3zDe50oXiq9xuejlUbwBAlVcIVN7SV%2FelFtT4XBXCXktZH3XJCfWcrn42p93%2BcsdVOkTS%2Bydel88vB1hyRvx8V3wJemTW8GVfZr%2BUVK5EIbCuytYSVttI2E4iwf8ZPUA9DNaR2osbVt4iKroLhT3ZTdxZ0oeVw2W0dL7pYJyShFTrecG1wRunlGawut%2B%2FrjpGpoMDJZUBPWmUEnfDByit6DDA3%2FDBBjqkAX%2Ft8RaQFHbMiE8rNRKoWw6PoomE5fPu8GAclVllOk%2F5hQZQLGGu%2Fqo3bqW2y2e8wuFNzeG9TR6pyfzhusEIN6ZivKovEEHjtwNSyPQjYQDD0BR26d198A65u%2BCUKIipSfYKLAMy94aMC7DGGr92ddjRHVQDAp8AB10dsul%2B4ri1h58LYb8R9PPlr6uptbKfqT6GWfpc3hIZB%2BewkcnQ1CoL0NL%2F&X-Amz-Signature=0ec7b5698df508a8397b6bd4b41865310be9cf3732aab3bac9f3e9e2eae64ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
