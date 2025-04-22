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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLKUJAW%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIBM5ihmRO5DjFbavjGtqd6lsdvDKmdvkuFrv2fJDegDcAiBwDGGaWs6LMPGTYa%2BTNMY%2F1ot3vSsyKnK6%2BnlmK%2BZ0WyqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQiyzGqSfT7TD1QPfKtwDv7SE5KfKhv31P9Gr0kcutK3VWqLB%2FMvCa2%2FY%2BZtvr0HKRRpAKCiItZYV4TpraijMobqQaXF6Y8o0lgUBjcNaDUUP6HVjyE2TSqynTLJpwr1RwzU8Dd6%2FC%2FS5U3WXGGEFrKN0%2FvmGLebvr76JXGWXUAP%2Fa15NF7iUTWoboxvBpmlGDZcAiPvXzc%2FAFgocD2N%2B3CEZ%2FovJ1jRT4ZYGaTwIuHtsPIndQ5g%2Bj2OeMJlYm4a6QGuhpjMHGq2K0vsQBQPbyLIqKfswRflR%2FoAYfWaYCS%2BtZj0vgiaZsKT%2FN%2B%2BiN%2FbEV73pRejSsVXonk2XH6YQvOS1%2FIb5eJRTPbK93L6RSVXxhNQh0HwxM1ZjpaqHXHedpR7Cr%2Be7MFKiCuL28jbYoN1XHINByRvxUNw81O2wvGwlFNEUUcFxDkAXfAvEc7MkKJr3Rd8FU1cfkxW0ECgJFA6E7%2F6nTOJccy6BHLbNYnLeQjcP1WiCTLaOUIMlzRkpRu6xDaWKlcFYwREak7AZIwibfNnjhM8YDPcGz%2FQ5%2B1JbUk0%2FRB7ko6OlMmSSzrMktKVuj2RGeM2tmOvEk2lIeaYhvkJhgDkw8pUf9bwjAQdPswuRqwlYs9j2xf9ad1%2F9Oeg%2FuKuqo93YSRAwoKqewAY6pgGwvasSw4hc%2B9HQlFgtNa3Swd8FmufEmKD6RfYN3czTUquvlbAFkFZnmXO0rj5kD7yJWnxn3YL3hOQtD8Ko14%2FMm5uyqe%2F9nM1Wf%2BirFYjXI%2F%2FCuOfRvkntM7ZYxsSK7%2Bf7rQ3eDHLffLKtTKRwDv%2B0y6auJkflizgy4eknVbnRoL1JSXGN9Mj%2FyRn1pPV4bY3FBYDom8kbTgMLnSInDn73ZXHisNMm&X-Amz-Signature=393e0175b01b1c11666f8de7ac80c565c2b9d867f2124993f0c7e92b1b99d99c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBEFEYNR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T132040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJGMEQCIFe7naWgKL3daHNiopQuQa8x6BlzKilwe5ah5ZAiMFdOAiA%2FWF7wqJBFGuTNE4%2B05TpU0Ucjh34%2FI%2Fbn%2FxFxngBeviqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzpwPf1l2HkDYWGEUKtwDLqPhAO8MZsbfedrWJtS9VaVP1RZ4vRgGwHUff8AYAFM%2FX3nzwmv9JZkv5PHZ1IK3L2km641HuTxQ%2BwpslFsJ6oURzL%2B0uJpF%2FqOKmnxwzCBv4eDn29iePyGvZxqmD8azgYlvRtUVdxQd4QHTSjhhHdiC5NHF1cXwYr7a1VCjYVFknmr9jGcEvkBP1scuBqYbKO5BrUmLOXzlCv7Xqip6M3UVe4mDa7xdusaJXVl3GD08%2BexE2NEA9HpZE9QM4M%2FpvztgEbMlq3Ekn81oK9DhgEidv3qnQqPOysCvjx7K%2FEM1IO%2FRS7s19zEW5bJHb9FO5Dk8oVNEgPbJk79xD1lzuuC8EZuqlkXkCEwDYkhSH6k6DvLSmAmvGwXMPNXjjssJzKg6T3%2F05sCia8z9dWhSLduCmaccLEqAcJCLWNpSSIWrsCYqCJqSyXEGx3ocmORIWKK0BsjS3Su48b5WnRr73ZTVdw%2F%2FD%2BZEIJIPisv3r2WdfhQ5sJjMr75DE%2FwiDWJ6vyvFCtmJhOHEkIKKaVuoyJ5L8FpON3zYuu3WcCTii9EyAeqiYkPIp3yIH%2FbNM%2F8%2BjkURxc5qYoMPEKEgKG4V8uNeYVCezhXpRjRM3meZD%2FGcVSco3fq%2BLkCfdtUw8qqewAY6pgFmX9dFbMESHRaGaqs9IcB7vAT2oBOVz%2B9DYbnJ26BO8YBM6EwyJ5IWe0HXn4G8QyRCoDJPc4isBTfzmb6xZujvYcqQnLG%2FBqoqJCmLMaYG4v%2FPPHqepjhOgL7UlxTRPqm6zvNminlX7qyiK1%2BQRiMnN949Lx5HtWARvBXe5VsAWWR97g9YgPKG6kqgTQiLtw9E9Bv9IIjRov%2Bqi57Iz9GlwlWYTFsC&X-Amz-Signature=95d45ea635a27b78a645ba517af4b579817e8d0bec1ac24b0d65f6d711235289&X-Amz-SignedHeaders=host&x-id=GetObject)

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
