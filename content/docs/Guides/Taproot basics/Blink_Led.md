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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7JGEC5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGNXwLpZMIRngK3%2BYXOPQB0tIk1QJ7UTjnbftNU1LLahAiEAylLXbvDX2UsEMwEnjT1wqvlTlAkoCgPeZLuAzYoqVkcqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4gqnQir2A6z%2BT7aircAwCEek2EaxEZFTfh%2BdxpFySpMJGXSElIFrVXVcipqeX9ktAxxZM4w72RkHKXeWWEbvlq92UxnxqzXKrTYgJrXhKPdOxDWKEqiSAdfcDJE%2FDbWwJw0bOMsMvKWVVsx%2FZLJhO0k0YV2YyMZH8379Sw1QKLLQRupnhh2j4eujchbNhG71cuVKJGcKTAsiN3H6sNcjllAAgc1b1EOoLmJnfmZd8ScbZeEc9AMURi%2BvMJjYkObk7BG7dWEVVo2%2B8C16mKlDbyd%2FgmmVQxpdal46sO7EuhzNMD6FEoBrq7pqF7DQ6wd%2BhycEso6b%2F1FHNYIe6CX06l1%2B%2FnuhjTs8TY5GCE2j89KY8KQoJC5QaBHdlJZKip%2F3OgGx1nBEExJrtS7IvHdWqSu67KQTg4GElmf5dzqPTSqzQUxt81UPZF2in%2BvicenMXAhZzWOlbK9NVXQPDUKMu4JSKT6r5pH3pRv0qqE6c2ak6Dlo%2FR3w5o1kSK%2FOXoe0b8OAFNd8n48pZKTSbidZ2V2KGLN9rku8524mZnt6rdpS1ShlnmNcGJDUcLC%2Bo76ZumnPSQmOMrE9ti6S9nFJfb8otrS2E%2BqrFJ8L0vnjwrf86YU5f%2BEjDmu20c9E3%2F3syR%2FD35RHggWKc9MLPwo78GOqUBWi1izYYBmJvEqKmRmPVLUNvujNXCIf8XI%2F7wn6ysOP19ZE3MiSvbSiAS7hx39J8nfLFqIRHoV3O%2BnSY2MQ4RarlImUSI5Nsiy2OMPoWVXrbptP24l%2BXqtltj0JFWzQtOqAmZbtQgW6nGo6UKKqLT4k3aL%2FZXJuFrixpQBi3J1NbrbbLHP6JtFwgwC7Kc5HvlHsYYJHTkMjVxzZHiEJrmCRUX1c%2Bs&X-Amz-Signature=ff107b4ffbcd11e0c19be8bb3091ca37e9f692857491516bf99c1788e5c409e5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJLMDTU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCICFFG7Is%2FhcoO0r89UKuXbofbv695%2FBN%2FOl2Gr0NZnUgAiBmkYe7Ws9gly14Viaw76HB4tO0%2Flor4mX0giDSTZZZMyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxuwXvqKim2HkVEveKtwDqlrMmdfIX4v2%2Ba33YTde%2FnBKIK0QLyvufkD7dqvQpgWjr1S0aXa5j8ODBchgLx15Z2kaUC2%2FZAwoO2hRglOuWca0qoHR06Cxp4R2D%2FlkJBcEPJOwTUId6StgZJWMFiF%2FS1pEPemaK1NGmfK6IATPCda2rn3k71lmbzLqEqqrxC5Z8fzfrfHwhAC9tW8HxOcYod4I7asoL%2BAVR9EsSGz%2FZyynUDz7KLkkVgAqh06UUUp49xHM8R1a75vPXkvZLVvsWM1UHLAtnsSKWw90sFxIMlPxGtkuluFWfM3G%2BjtG7zksS1ineFjhKiHzzQjfKBHLE7Uffjp8ccMZyNtxBqAuT7voVafWxfhMXDmeIeULztcvdpEaBaRbFQkyj5v4%2FAYFZjvf18hX1EeXD%2B5HaB8v8xd24VtCry88o8%2FI8QQiFx4fdwq5tl1iFxhk4gAqLenzGQvUNjjm59cDVYnTnEzijjpVYsLMXuK4VTtwOPPiU4kULsitC78YehDUpqlqGyxON4%2B2o8dvaDYRrF%2FDSv08CWUq9gpZUtUCDATqBQkgzVqMQpCJxxTNxwWEJztYtR3Meo4GO6Lz7Ms7UePGADc6UVucSnOGQ4uDlj6QAJrth3Jxj4w0BQ3jLcdMMQcwnPCjvwY6pgHT6ejtJUv3punqKzEjJzRDGlwBF980UZXHIwQrGldEGaKd623hLu4MCaA324CE5I%2BlFTdAmIBWVdY%2FW6Tj0xFOGqgo227hFRH393rhSfRs40aqldgZtNR9rg8lEU41oNG9UBGbSRiFvFmDj5M8dXEykWy30hHax75rYBnUNi%2BptjwkeYpuyDfBbTybK329t8ysJwqV5uy7PJLYSVeQvP9R0%2B7RSyLT&X-Amz-Signature=0ac7092fdbc6fffd7402cfd278ccdbbd97300ac246baf46448b01c7587af2882&X-Amz-SignedHeaders=host&x-id=GetObject)

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
