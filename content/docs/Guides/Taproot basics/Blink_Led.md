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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AEK3PJF%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCy4mjAJg59BB1UgHBGycm4h%2F8zlX8efJOi%2F2eMXM%2B8gIgAl5kZ8a%2BH6REe8EF28tjYH%2B537x0pisEpqPUZueN5noqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7YffURHFKMKijJUircA%2FayBqux5M628U213UeZRuWMxiWe1EAUNg8BjF7z9sQR5kpYDf114BvBJB0FhVrir9qHNDG5yg1j%2FQ9XnOpJX8J4LQr0VGDNQPmIlu07rtBzya1upvBwn5ACuOYQDvBiBqcyTj98ZbqRJEEdVG5sX0Qr7Wb7f6EKJm3wx%2FAfVTBho93Ijb2050hc1VJm2vdg15%2B3rH779PzISf2IUQw%2FqP9qh08IPC%2BaVlcl%2BSanhCxjkBHEfR4TrLFNx3jWlscbmG0Np10urfrHJ1wBjoWNWpvUxCz0%2FajZIEhxbQ5yitovdppOd7Xr0EanNiMpBid2bhMTBkUI5a9M7fO3LCqGgGtTMK7awhagtMGZE6SZWH95EqRYaPhawZsQ4t%2FuHFUJ5wnaXUz8x90FdgVBfaXlHyOUwyTWd6hJj5ivgw9YEkccr4GsQUHEFSnB3Ky7TwZh0oTGAvnogLcZAODhXvAvcnMYNZeU4C95FbaWJ4VCyyTXrCC10UjBn7duGxrLOHyXypzKyXqiFOkQxqln8UVlhb6FjiiPiIuI%2B6gilGHb8leEBsZ%2B8MEVkM6mo4zP4GGUhrPS8e5rZtTOptYS4LdeX305jNcU9ydW0lqQ1W96Vmoiqj8t9WOFZ8cRKSa9MLTctcsGOqUB3Y2aS05%2FxOeLjpzhJPkVq8Z%2BtHKwGz9RVHB4H%2F7ZTet6wzu%2F3%2FnvxpjmNZ22zfXbkdQWtiwYMY11SC%2BwwPXDJjvLxcDW0z%2BTuLTQ3qd5WJuVUKveVPHLLNkSF4JPJNbERqf7T6r37hDa%2F1T%2Fvj%2Be%2BkWyEh6mGcK3SUH443YqAGpwJmOgYAPUReEPpWFADT9HsR%2FYD4gb5TUNBHucZC9n0urRnC6Q&X-Amz-Signature=057f3c2fcd1ffadd88a1fb84698bb9076e64308ecde514f8a25538cae31496ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5PIFB3%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWwhhb4G%2Fsr%2FSiFMjn%2B328ZeLBhVjjasKv%2BU%2BjGnAKSgIhAPhMKJuzRTIkip05W2hJgE2JnKgT0Anp86RkUPDyNxwAKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzsHLAr3TarVuxvokq3APCenS91wYKN6x%2BkDLhK9lTnZrvXZzcv2TVfaH7rE0A%2BYUClspXnijRpjzvzIGGEg%2FSzUzGzhhWdHqlREml8ydXi3CpjlCw1O%2FDaYoR91%2F%2BdYfbNQmoScpUUvY3VIwFUp5StCurAJi%2BRvGUK2otoMtzWrDNj9shZLHbyKyoJOpB91pPQSCKZZXWdujbOL1beRgz6HFh3vsBDizZcgYdW5wKpvGIguV8DKbSma9Iyt0uuziUe7aXBaPEgFVvxdGMMFbmaBydT7SWlFBjx0uAsdKjzT4wUtT96rXv8ycu4z%2FHImSxRWtKPYv5NEi4NGA%2BdYCsgRWDWwRZxtswSVMtCdmPVJBTFxyOh9TASK%2BJVGKLUQUXwTSdTpqgGwh%2B0MISxDnjYtWrF4F9KpWn7UGuVSQY8P2kxH%2F%2Bl8quDzDuDRkHMv6MIp9ZJBo9X0j37dYqWkFuLE2v7J9dtRRA7u257whhVvQKL5UigkYgVXKBWCHeCTucbgV2%2FGy7ssGGHgspQCNam1y7n3tU2RxgOQWKNkelN0ZAXwMzyVtF9amCdU1wVrgdmw2VVWwqgD0r9cYg%2BrDMN%2F%2BaHGmy6xv7ucq2ZHtJTbHrCosnF1FN%2FpxZL5%2Bi8BLQ21607ZrG8mAyUzCk3rXLBjqkAal2y0qihzEwH%2Byb1gSeJISnSI%2FT4xMEFiM9AAyjuPT8K8XgAGF9YySMKpi2P85R3PmhYD9yW698tqJd0L3TrUwwv1l4R8YnoKpEBHZeiJ66FKjIH5cHrQWmIOqTeNhgbQdmGJpwaTcMYsucXsYR1o9DNGXQN4ucQIj0cSOymELK6Qu63ipBfuVxjGUlxM%2BmbYbYD8Qh5hkEUHbs7wI2L4dBMw4C&X-Amz-Signature=5f35a8d9060a67598f235feb950e2146d2bbd8860a479d009604bc59271576c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
