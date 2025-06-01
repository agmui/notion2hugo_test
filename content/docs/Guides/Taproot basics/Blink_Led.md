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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBYLP2Z%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIA1fEieznVXBGD%2BGOqa7W0lK2COSa2IB8yjT6bsHtl7sAiAEeNO3tpSMtne48Wrl%2FKHSQbL0yo5GQr%2BvwXg%2FY6G9ZSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUa9lBbziXOyboDZGKtwDXBpDmvV%2FzkM8OkMc%2FaJGeTqgEfR62mYXPfdc6WlHEdjAs4g4rA%2FPiQc%2FnLn%2BuZwVT5UgUdGSqqUxMvhzVcw2Q78vh69c3U9ezIK8S5fj9HJvKDNceehQXKzhFB6RJZXMhPuQk4JN8eBtYreuF2ugGYbbhg21Empe8szFJs2XBt3I%2BVkDlQCZ92klF3mc5GybmDx%2Fou39POduGSw0IWKqJZmPV7t1YtQmVSwWNEhT5yAI3YaItDOYSfjjFRjD0SAgMPFPWfYZIIH7owccDFgO1JZPebdOA0hIOoxsCkL%2F%2FpT4EDzhC2FJ1d7aAVzgzZ8wO5TMk56R2lM%2BqKA0P5eb5OQ4ie7vrDv6KtwIWmN%2BGTx8y632WRD56vLZICOQ6CbSSQft8DfKUSqqPQfer6yIQGYPk6Prea3aq9jLCG7oPzN9dp4wfI6MTjIW3oFV7AC1Id1lFpyk60EjCUB3YpGOtTGLSjfTg6V5idVlb%2BxvYAU9nE4Gi0pcSdRUz9ZmN%2FwPf4rvewn37OxM5mAMEUUNGO9nk33mAZI%2B6fEP9K83DdJClPOaKIIadVYxYqYuy%2BLs%2BkY93dRlTR2KbkqJD0dqkbHqhOUOSNBohD0g4C762IuAUaV1n3lz6uySm4Awh5LywQY6pgHBV6I7QKzcf24K3C1oWJU9mtwYAZ6GmbCosGj5DOZzs%2BYaUOa9sV6fv9nqs0dlcr5Brp86oAyu21GRdXAibxwJSKffTj08987Vv9zNGpQV4Odf4oT5odd28qC9kp%2FqainQoD8vKaalgpxPgknFdiW15FBg6iJPnum%2BeFJfhBuSad3ThdpuSYV96YWsryMVdpapm1z0PbRdJWiEiPfSf4Ru3qN8gI0M&X-Amz-Signature=cf8c6f1424acd3075c54f4295a911aec5bd41e65900bcb51eb825fb3753fd6f6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDQJ3SGZ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T190243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDntUfJgvl1%2BK3b7K5L%2FdsJiO5SweEJ59e9uwJOKwFCuwIgfUivH7K5GJA54735bq1tLl93IYNqm0o0zk%2BhFyFgRpsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwVa9ZsE6YqJY7dbSrcA23btN4MIJLrqlz%2BG3l4bm3MLHfEC4V%2Fs0IGR4R7Lk4TANo98FIFJZo6hvABe5kBRPZFveBb5%2BlhSQiVX%2FfwqSfc%2FDhPArP8ynjaaMKGfahpGoQuCZn2TFKqH0nGscUbCGRAxHhSD%2FKg3AqETzN4uDpkIQlkhniPieqTyT%2F3V0yvDetNrSqkMrG8MzILM9ihLuWE7Njzbq2CDsVhatQFFHduA%2FOdfH6tCw8ih2x5ckXpikxgqIV9iz%2BGvNsVIjVDcFf8P7NxjRwFoc9XAWLMtyhJCAXripmU1%2BLOoXTjvtbs8V0CJFYvlHlbxsldZBhbsT5Lkw2q0CXD0Mty8S1unEa5waHnJJGkVPMHqijllNZF5v3az7cwdUK9WrEJsuyM8yKvZ50ejJlD6I%2FvgZeOjpfsrVw3QD9vBpgC%2FdDaXgp7ATU30QDL%2B%2FIqHNo48tDVwkjnw%2BYD2Ipi2YU66PCusDkpglI%2B6nX2LphCIyUacTZSRnw316f5f9Vx4UpHP5OrbTXmh60DtlmP2KWEEUJ5HMuzPDy909M9yya0VQBBbc84DtwYOssk3GrybnZiHSovaoUhldUoGyDJ6%2FBwf9viI5ssqVmLkUZpLTJL5a0I1%2FI77IXsotzR65SRQ7X4MIaC8sEGOqUBRXXdipkVQo%2B%2BgNXKVM7AP6ENtlXK2b3hOd9ATLPcfVGMjCV5cHItQ%2Bb7OWbpac6hQrM8y%2B%2Fdm2jyVr%2FOuqnveUkFj4GPifSnQRpcd3%2B82nfW%2BorDRk98FxRS%2FGddQ52%2FTmxzskdgp3kZo5YlFtP1aGJw5dzFXJDmv6Imw4qo%2BwwBHeVPMcGr4oBsKAmWW9AG%2Btr7HErwa%2B2LPT0bOdbQovna889k&X-Amz-Signature=0f3b657738a66bab6ebb514b53f883813a5a901d9c59bf6595bdcda678132742&X-Amz-SignedHeaders=host&x-id=GetObject)

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
