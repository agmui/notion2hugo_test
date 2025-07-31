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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675MYUL4E%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFea5kCYI4zWCgT0ftfelcknBo3HoRIFzY93JY0BcpOAiAQgAoH2%2BEdjh6L36IP3MA%2B0CneziSUmZQ5heFd4khHsSqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWLkvGwc1aWopriAnKtwDgc9nRPXoetVI%2Fkm4vVp5kg84JiKdvYSyeq16PCb%2FmsP%2Fj%2BaBOZWtfrMXtOMWY7CRud%2BYh%2FiBLvozC8BZxYuhv6o046Y9xZciBrtbicBgS24pX2LURQCzCSyDZGq0%2FppCoUPlmpk0btpt5KEGf%2BG5cPLhVL%2BvdeUUUp7WscCiCzXKy4T1E0rzDutLRZfNJUWIvpqMTEqPcFw0QMEL6Qcjfvo1QOIz%2F6m0lpCQIh%2FzQM7wyDkLP207OgFFR13jTfGksU0JCXKXkZRtGKUq%2FEu6S9U%2Fva%2B6iyAXyz0zHXomyYDUmCViPz6s0s1AKprN71eegsRZgbRqeTHpKwvhHGYuVsoGjHBsac6jyqghZI1H9ZO47zuiOSk79Ar5uafNG1tUwjHRJlUooYqsDPKUCnGs%2BNN1JHpzS2UxGX9RgAyeIENhNhUMhbaeGog%2F3Qsm%2FAKxTTY4NpnzuzjHR4FuqLRKbl3YBQizNVXwTom4SrtETrAVTsELM8DKLuoIIdco%2Beum0Dnyz%2BYYwAQkpVa24OU%2BrC1Oxle3rjYSeEyDySPVY5rjjqutalaoTntCNusiIGa4ZdugYX%2FyuDlrfV1GXls3qcNnHKc4Wlr6uYg6DGFIMIdOypl0J6aknL6HPmwwo5qsxAY6pgFF0qnbkrgeROH42CEuyLB7oFcPmRXh0HOOX4%2BGaJvf3e%2Bq%2FtO%2Ftwgjd1dep55pcKgug4OSZZu%2FrbHu%2BTrgoEwgyxzt587k6MS7OqOoax4cI%2BNxPzm6hppZKx995cgU3t7KPKdR%2FKQcq%2FJ0vEikrKcs8mnTwxeP%2BQaRz8HvYAQqmtlhuf4VLZCi9ocxRSGFO6W9MQXJklz0x9puHtw1Wo1nbiFzT23z&X-Amz-Signature=77e1d3c4c900f362217c77f5f7b91418bdfffad6fcfdbce5492955fa6b8dfded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIMEBJ2D%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5u6MS50kgvv3gHJf%2F7OHClPLse8GWeJLc4OPEJLnXNgIhAIKBWBd85e%2BzoOGQWe%2F3EOm5kpupkepdcTrsDk%2FAKmkQKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEa6yzrwko%2BjMh1iYq3AO5aUz31jyOBGs0LVZXaDqD%2BQtGkihCur8z7c5z9rXIXyWya8AHCkCZZfF3h%2FjZUkN5wx5iy7vIkAu0k13G25%2FxofC%2FgRb29k%2BQTKItatupHbr7pEkfGk7s%2FXwZiIp5SNpsuBz4gldnoOez9c9sCiWoUA9h%2BNKFpvbhzKjNh%2Ft%2BBIg7xtVB6PGnQe3b5VTN7RxHXt2NCXY9iyDPqj9c2xWBBF1A37HbKqxV3Zc9WI0DPpCrdJJVJbqq1OdnBAkmvJVNGUb%2B276%2FV1Q3mQFs9OL%2F%2FpAqQpOv%2FjowFu%2B6rT5g5aRBkKy6ZuKakfcIhZeJarvA%2BhNzBhbihxO0qVcef4upHeEPHYzu1dtqTSFwejjMh6QOowV0DBWo7JVp3YLM42B3Lj0u3aP%2BVJLLnRI5JlLvgKi6W0um5a7ZFwrUM4tjLED6p2y5C6XstK8SOjgULOIGL29nd0BkcJ2pUMlmcAQjl6l%2BjeDUcyNVZEmJ%2Bju6%2B7Fqufu%2F1LQni%2B%2FQmk%2BnOBtzwgt7ofKc4ynItbOFkmT%2Fkkhlt3ePdLs99Qi9Vduc4g3KJARk%2B97%2BMxpytHYY9T%2BlFlKo6LefWvVj9dsKjnpClMCZ%2Bfk17YvYaEimu5lqORE5p%2BYZmffnsKVArjCVmqzEBjqkARIR8eqzaNIISXS%2Fa1jeJ4g6Qr98S%2FMlRFYJ2b7n%2BvMltRtKUglFpY1KQUSPNOgCJAX5Kmwqrdqdw48hFXsyRyQHbzqJ85DMz3ii0MRgSgijtHzhoKBBMnaY1KH4t4GuDdgm%2FMeFyT%2B0us%2BKF%2Ft72eYGYfXbCgOOpxV5Ohwz7XvXR3SlwdSJiH%2B5mLgLqVbA2Zp%2Fs0ryCB5Xs4vu1REvQs9HYdba&X-Amz-Signature=d4e56d2015164845f253e35a3da12104e02a3975ff92e693a18083665eac93ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
