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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY3YQUJF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICqtpkjULgrFKmhmKqO5ZhVPG8axuimBvrVgs8WwYQFIAiEA2qFDBFmIgO1A7vlioAOQIC0gcO16uusGvz9w0yIbwYgqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJca7TW%2B37awNcaVUircA3LJnWE3LL6g14h96JElHH%2FpyWWV62Rz3NSoPG9YL6FoQKcqIksJmLY3iRAKxiFPErjpjOJb65j4UYsqaaPVpkjaQCIjnjNRkHoj8D7lMHoHB%2BEg8QrtCPnjy9lC24upT7jb3MIG%2BNdiFZ8iNc1Spcrjx5iJ%2Bjzmqlw5wCBM8q%2Fn%2FMy0XhUscgteqm5j02lVUJYfe0sIxPeZzJnRiW3wayfQvM6fwj4LeFf7oWIwI92juASGudFtUqC9nglIxmfe4lsjwDYsXlrN4QxcQ0QgJcZO5%2FGt0M4pFHh6fQDuem2%2Bi7R5BSANOr949QPO4JeMi3bVR7OydCdUjmKpnp43gLLQc2AC3DYMWwhaM9Yy%2Bhn9hJAWBoSV5UU98%2F5SMxfeErvGIWYY9zZoUX%2BwS0kM0PAev1Lrb4%2BvBjpge%2BN3JBqG0UdkMWLQDyjDUi%2Bi%2BFw%2FU9tUkV%2BaUzjjU2naX%2F1KEBK%2Bk8JGbLnU3EjCbkLf4A4S%2B6tUtwvQSZKo8AVZKRLaFrbzQ2On7DFon9ivv0f52AWyCVdCLWF9B0k1KqSxzejybZm5Rc0xTB3XzYtvoWu1FyIeXQGKaZy%2F7kaVM2RfImuHSVpzyLhD5xUuEBJ2JvkWTG0qTEc%2B2y8Yc52mMNCHmcAGOqUBDSEwnKSn4EqCq%2FUZmhMk0jPv7NvcfUqhf7zpC45zV1d%2Bv2TClafjbA5ZbA1kVIPerOnvZe6rZxm%2BJHAoyTU%2BVeMGqoTeNrS5rpZvIAWJsWp04UaHat2V6qryldRPJ83VGEpcZN%2Bu%2FwqJD2i%2Bd3bQQxXZOFHgQe6uA1Jgsj2ROIukTO%2Bn5Zed5u4n%2BObz5wGhmUVsP852tJKZGRDO%2Fa6P8fGepVaE&X-Amz-Signature=63b0c9d3c040dc41c721e02b83abd2567c5674561c0cc405a1b0d1a5a8e928f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662EKIWWR%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T131841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIEc%2FmsuOjPFj8I5NNCTltRih28ETEYY0YiTp9o5%2Fk7P3AiBYSiYBEAkQz0PbB8bnFvQjrpvwcEAXJZ7wwOHBKixceCqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcKjucNX5DMh5M6kHKtwDnhR36u4BPKcnsfGlkZT2esJDhPDK2%2B0WEcE7F0GliJkLwYDSgCq3XEldt2kpbrG8uV4Y92gdU8ZQ3mqFemC8bdnljoAu6BDFn63g1caZ4NqhaviAHYl85geKeFMIKyxEEw8CCHOMNiHuXIccpR0aY8pOgrJHwPSfyZfHvk%2FFZ0ofszQGh072R8KsD45sVgNOfluuUFJHBWhZjVRW6pc%2Bbq%2FPoAskOPn2MR1GZhPHzXN2rZSqU3zLZlKIdmARHqZbq9W45USPcvcRJR%2BZ8UpDpxNvJusc8j%2BlNQjhki%2BpEjhWnZb56tzhWZMl3cooSWta3BAKS5gjFaVKGWr2A0Y5uYadHBL6olIRez73VgF%2BtK21XSTSzvkpExHmvmznZQiOblSJpq0%2B1rtqkRjClmbaNfL%2BSeiaRSvDvW6axqduOyulxmcT7tLxuLpymmcVxaVdgjOBjOSS8ChFkzkG%2FXlbncQfmQIecAti86vj4DLVjJnhyCFYKaMLEp%2F8NMPakk0YVqtmTDUEAOG3N0JKsEpcYD8PtaPL6z0lx%2FsdEPno9uZpjkwo2waNO53P844V1RC1Bg%2Fp3TWAg59HRw%2B66yOIXhEbu6Ap70FDGcd3CqA77B1NCaGnDEED3z8ce%2B4wjYiZwAY6pgEwRHpmMb3Mcv5J4ENUSttM75J%2BMjbq9Vjw4byzOhECqZBfYYScd9Z52GW35BrgAVLHH7YSBDy%2BpipXPzabCHlMt%2BZSF4wWcQ%2BBEeDO1xS3Q%2BOzmM4OTgoSeGdzkDQ33o4BBMe63QFrfnS2FaTTEtpcGCWNffFNl3HtnuIxjMsi8uyedBkwrH%2BzMYBTjKhJnAwsbWUguJOsz5Zpy7TON%2FxiQb7S1sKj&X-Amz-Signature=e31d65ba9afa8ef9903e9357b8968e86b34691b516698c0cb76c2acb1e482e45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
