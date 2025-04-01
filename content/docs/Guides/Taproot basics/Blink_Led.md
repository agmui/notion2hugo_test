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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NLODUY4%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIEKtdoHTXhnuJB1S9x3uJ7RrHj5kzGNiuiHVAG1EVoNPAiA3x%2Fa8MQg2OnIXt%2B%2BcEIysF2ZgIRHf0AIpVL7dgo890yqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtnqc9iq%2BL%2BHe1knLKtwD81U4G0AmRA4cK1u%2BmNHeJj50Jnf4%2Bf%2Bdj4wrUEtEPE2YeIOhCyAhUzGsqobAV5ZJz07uxpe3jICeVANjUGmUnvIFrtZTRjIvjgNf0ATI1wok7O1xfKHKUWeBYzxH5KPhbUFJ%2FWNdiyHO%2B1FrgruZJw8mL824dwVM9u4y5yCHmt4d3e19beRJV2cTCVEcX%2B%2BUybZ8KV7btib4LO%2FGFu48PBLObxHWBJlUcHf4DTrCEHoribBsC6ZS0I6qMIN7svWz8CYBNh7FWSVw3OH6Dmzb22%2Bj9%2FQ3rdsZz2Vn8tUqsgqZ8qeHYhyqo6iFj8VRXZU0BZEsSLSi0dm3%2B98gt5RGttbcstkJOWx0W%2BM0Qz8EAOojK8J4k0Uzlj%2BTkm6VfRf2LcLPIaxbuU7yn1Fgx9cFU3fuP9SbqrtNUo6y7Mmy3oIl58SVmOAeeMeIWZ7gICim9NRURgboVx0JF8tnYz5pVO1Mts%2FQ6XUVAUJE22yLzX%2FtrRPa48X8e1GlArw5JVmNfukclPcY4DIcFv0eSaqCWpIZ9WefzZn293%2BKL4vG7UeM%2Ffh0s5Qk4dvqbXN5lJJXx1QH5dzMJJfLc7tMPRJgFh2oUpRapLaO9Vl6ZvuiIFNmS5xAUfWDmn3p5bow%2B5yvvwY6pgFrkBEBrtIRkuXMiIxejoJcnj2jXUXSt9fG9cu7rgHDVfE%2BH8jSooP115%2FuQSzGFYe3W774zeYpph6dNAE9f%2FcbyaLvfsJ2CDOBx0hJ%2Fu9q6r8FOAVTP%2Bpw4GFLZ516FB9A4ac45GUvZAxtEnvkk%2BI00kri6vUvilAaElV5JjLfYBPiq3vVUgGWftrYn%2BwoNJkjq89QAQbeLH5gSgZsvC%2Fu0T7uOS2u&X-Amz-Signature=adfb2f7ea79366bbbe9b55581ec26dc1010d4166c7ac2083f97b7d0344f7defd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T634OZSL%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQD99LJA8TJCLiv5dGsPZTknWDZ8EObqX2vobpR9YLdL2wIhALsN63Cx2DJpDDZxlqUDkvVE8kUuutzKhdKbmpf3mRv6KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFgvoDhZ5qdPkmRoYq3AOIlQj4PJmei%2FTaqYX0nKmH1BwhYdqkP2a7Xf4C9JF0EixsYEe%2F3cY%2Bmx76lYdm5SKKEHCjNWMGUu9QdFFDzTxfkU%2FxdpuJEDMFDf3iyhuVn4cxh17FuhAo5rX9myxotVytkUtko9%2FaYDqGeDtCMfAn4eGHZSf0FHa1PMFJJRha7osOk3jK9gi1MWUeJ6KxBcNlvfjxEmn0dhVwSQrARe1Kiu03Ba5ldrzpJ53LfGy9%2Bg9SQiJGLLd6zLaFjq5HcbOJ%2BWt43kBYgXQsEUdXZ%2FZnexgd4%2BWjdm1Ee0OyEQo%2FhRrGhKg%2BKLHSxG3MbywJFAewIJkqLY2Nd0VS7CIB%2FcW5nwXzVfitrjhIlH%2Bxb1BmqpFsY25hppydZcVt5WpM%2BNkJIoDD9ouHc3F7BuAWXuIzUSqrePY7eah1IaaQPXzneji4kdTewpVmT8nH53r%2BwRggfzCYWlZq663DDCB8b5dsI53jdWn2KbNNuF6VlM1czxioPmaH%2BTOWXKAJYg6bqelZRMqhDzhTmxWh7%2F62psRcJi%2BowK6sfJG6jFo9oGgzfIFXfxHJqEenEtxnld1SsTITbpnKsmYvi9hKdU%2B8F3Vm%2Bfv62vh%2BrXTIRA6w%2BIlYfRoNOiUn0u1QOBxlCjCbna%2B%2FBjqkAebC0r2DVkzcpw51HJgIGHbpr2xYdsP0RjVXiMKCR6a71VwnIdM8PDcjiLejp6R15zPPBt32mNeWQKFMMMYtGALoL8a7lL%2F2upuT9MiJxC1gdPF3MMSOVQV%2BM7s1e2HTuAWU3iqQWH0xEmLSbe6rHZD8bJGrWVbvFJdBaIz7Hx%2BAJJwArpf87cqSjqPdAg9KwUKS0h3v0lE0uoVB8vW%2BaLO%2F%2B5mp&X-Amz-Signature=ae6bfc94fc68aae8fac5d46dbe7b8b17348d146d135026487db353951bba8208&X-Amz-SignedHeaders=host&x-id=GetObject)

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
