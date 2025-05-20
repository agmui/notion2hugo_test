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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667STFCSM5%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDpGFrE%2B7xn2lBFUcX0F3beyHE5X%2BzZlKcgwvQjh5LiAIgN8327AWLn8pj7av3VEJjiraDhGXv0aFaJAIGR69gv0MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQRu8g9uIeQ3LWcoyrcA7GkObN9IymW6GilBllYErjCpVrwWY6koWJATFaveQHioKYQnE171U8PV%2FSoDk09vWXuiehN83djwRvPJM39L1JAOxazS6QTSvOQyGsxM%2BBfFjk5N4%2F9%2BWWkBn%2BO3Q3fJ18sMTdfsqeEBmVuSFwwT%2BCRLya9hRy3r0fYA2a0fqZGURVRjLcAIipF7dBKq2ED%2BelQTIYzMlC8n9gxmEQmutDV%2Fx1lxlZQw6a%2F%2BPCowySQNnrhtzpj%2FBfPNp%2BzVZCfv5xjaLeDbs4eNYpk1nCJKf7An%2Bkz3foHYmvat%2B0WiXfZsnfKbKiL%2FU4ZoXT5F1Fpfhiwu5lAP1FPpuzS%2F0bszqwI2yVCuEtLsIQv93y53Ul5myvskYHYQ422McFjXwcMoCRQ%2FtuiDtcoEcncdzjuDhsTEVStEdn3XcxRprJz%2BpXRDMXOBf9MIUxnuiDoGanhN8cJjTQNkkCAvtOAFaHUB8oSqMAMVSr2oudG8hRTUDufyY7o07RSW%2FuwKdnfwGWc6AYsbF0Z%2BQ0dvGxcEtSIlKASf3eEJitoDxgS4z8ETM0oP8qGrbg6IgT9Ih0oyAXBZHkFhqkD99o8%2Fu%2FmAuWSU5qWc7EqR7ZcMB03Rn2taBKe2vUZlvU9gwtfUq%2FtMIvGsMEGOqUBbjcdt0x3n68dK5CjlRdBtweYyyqH5udjUeTQ6VZv3zXvHGmrsL4JETWT70oiZDrAnY75M11xAa%2BwWY8vto6YhKg0c240cZDih%2BYtyOL02t92r7FK90O6crYv7teqFdZNzlfQxlmUTUigDcviCx%2B587%2BWZRVT8N7eXn4NRWLjPU726eNMn67fOgi8qtyf1JvM0CjyUev20TI%2B02LRHW9fvlbQea9K&X-Amz-Signature=1f81f57e355c4d76ada015b04c17f038d249849e30de4b28ea27779bd8c457e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X7CJOAS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPSTXmnLb%2BSZWJs8s4g0872obYnM5LQSA1SKjVRRi%2BtAiEA3H7uDqD06e5bXyZvsi2uwnvjV5moHVXDOJE6w4LAfJ8qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClgMYxC1HLLReG2cCrcA%2BrjtzgVxgjq8Dfav%2BgnlDtxqANpcJK9z10vW5xI8WF2mP3PHnUDAJNhlagUXYKYXZEXAKC5Fqqmr9CvFh%2B98oR3n9CiyhXtfQ2imNNl%2BYR4UFS315xxypf9gGc7kf6MQFQAPVlIb%2BhYngG782koN3h5wzqzjJpF4%2FAf6xae9GnFr14SqwR2uaVjaV5fUB1Il%2B1GtafISeAyhjLcjFOsyVvZ8HWykODVaGa7oMaZgZBqfnP5yrvS7qBlDMAb5YLH%2BIk1gvW%2FKvR6m83r9wFaVyVkkZPqw4voMIdbLHk02o5gkaCfBp04DoS9ja55cttdHk08JPBPfM869117ENJF22pLxijCy7yOPwnAmibuyedQUqzBTTTgAoAGHmMYYYfm%2FyC2myPrO5ft9hw09XtGm5OEqENDmakeWdbVCskSZkhH%2BoHyVbCoFlXXv7FdAZR3N2NGDqXTzDgYf1GvYrVBToevvdJSWoUA0MueNXqp4mDWNoEIl6OHEi9JQs9OUf4pvzlkICNlG4LTsm2hqznxq83CpCKTWci2bzrCvegXfmS6PV2xXR7hqVg4iQCddead5vxt5ikB4t42iXwl9UZBLGtJCUV4OjFmR5kKnWOa4fxXC44vPgzQ8FcUH7g8MObGsMEGOqUBg3IvAXu%2FrtIsjCaG8zSQvC5h73CzQytIncbL%2FcLKm916k3a%2FaZ%2BNbfsyJPNPYI7B9oeIQlv0TQzhYQoakjyCp8K04cvLQlf13YZM2rqTByVLeiz3cLGokk6jel7so4aorIzcY%2BOsiPEVdPXTTVthuHGUx1ziOsB%2BJ4mGxr%2FSrLCGo2kys9W4qR7ZiER4MlYERVNf8O03ts1pelid2YhTIyY08G3l&X-Amz-Signature=941d5dc91ea993af4b25950fcecafc4d406dd6d26dc1add6e6b57a212497a005&X-Amz-SignedHeaders=host&x-id=GetObject)

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
