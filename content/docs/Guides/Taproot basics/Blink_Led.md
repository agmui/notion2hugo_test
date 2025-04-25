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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQTNGQAZ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH389EOKbUGEvaAX%2B8a3sABVcbbCcD8bgNI1Qt%2FPgF57AiBZB%2BnEOsFmwejIY4ZkqJr5EY9qLLS9tXXV8f%2FYWIUgYyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJPvtjaNpikXnoQ%2BQKtwD4Gun5Nbkx2%2Fu7SHT2RiTb5pIO8vrCnjlOD7hmffCbVbq8pIvi%2BIrBq6hFi5iZjpnTOVA1F5gnuxQehLVIFsTWA%2B37TMSVOGbE%2BDt0QJtAEbCzSG45yMpZzZNA7f3tRJT0pZxORWRpcagqUwB%2FHbSVpVYPau8sm67BSL1PTZDMsnODKALoiekAsnYRvlZk96p3tz6Rc1Lkt%2Br1qOx11g8OY%2BDo5JV8s%2FHqnflNQgWR5EqF2hBi1%2BX7n%2BVyLYSsRDg0%2B2Y6qAr03h0koVUHxaKq2%2BZYCJ%2FM%2BTOrAAvLOUjkdUpDRr1qdFvOn8tBLcyb6Vtxea9P45bRZX4zlC%2F7qlNPUvIWkMlvm5319nVvIxV7tSiKu8PzBHTiKOxXNE4IJisVnJlVSD9EPQqxxRXgjljCk0WiOB6mqgQFizZcFMiZNn40vNUZhMi4krcCDjkTDvVLDjnBz%2BUo2VCS8xX2TJbWgJ7c82ipMQfGPjQpxLC5lJeqmABILZUxB7c76q0INxb4Gvlgw6Ca56lQRg1%2BciVAbjZPvIKZrgN1uMAGBi9RhqHbBe%2FdO4GKVVY4nwB6JnNL7sEADXqw%2FCiQ5BH%2Ff0rFUvwbqSzi07EO7DX9eTjMJTppEUboArasge8rbAwoJmuwAY6pgF3jM7ixpIp0YHJeSJ0D9KFPV08luw0lU2lUjZ6IwEH1EcqqUZamh0t4rKx9ulILR1hFJi%2FUUWmZw037Qjne3mSSlIK1PR6l%2Frvq%2FUgPz1p4dYtfaurBM5eATmNsUlgDdwYSrUB%2B8onGXKCf5%2FmONg4dGilTX8zd6OukrQ4IMWxG52PoTYdgWthSnCzOfxtNF64KFgpGFA28RUULjpdK8XbQhRMTntQ&X-Amz-Signature=56909bd827ab16ac226b3b76fda61571c8f1cff3c94df5577d0e47644955b62b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOKU6VNS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnBbUdBF4M9uSn1WvBWMnZl0V46S5EWs3MA8Towgo%2FDQIgf9VR3XgyPLvSA5SU1w017OGlymcA6%2BlWC2WZy8XBL68q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDImCcKHX6QVvcZqmVCrcA%2Bn7t6o5g6PnKfvPrEbcOVxdPrGfncZ%2BWHYy7CN6wk%2BcULODafN4k5TB%2F%2BXRQdtlR3mq3nXr6TP4C%2Fq4AZJsjiQ%2BKCas7Yf56YpdI%2FF9NiHG58lUg5WlNjP7tBzCEv4XGs0VEmO6j1n0f%2BZO1SiDdp3y5Lv1fRuibJksxix%2BTknHA7zLAv7joBLZdSAauX97FGmoCaj1mUjIR5%2FKubTo2cChFeXtEml6IcHZMIYKdurnFKU24lkX4T8%2B9wH0wgcD%2F%2Fs8F%2Fk2JufbTnR0JBx2MoXSszjjBKmSrjcx21nhCclfMe1UmvUNigC318q1lvqiX5UJzt8GNWQ15E%2BhwClDIdv4hh9wKAu%2BcxkXx421TEi2TshQglLHmk7XePIJYiPrHbjz%2F3MfhSpvSV1LgS2vRz%2BUEIkUcvxv%2FCbhYtaClk8aEyw5xsEhIUgX0BtHOBvBER%2BZqFX5qxn%2Fb%2FEKBZ%2F2aWYqxqYKeni2FWtVhFEtg633RbkE21B0EAVumHbK%2BFEZ482%2FI4GkMW20fCCTjAPX8aZOvKz6lP0GpUSuHmH0IuR41cc4%2FRma6kNWx6v8jbnkJxnXCMeIh2foNvEKzAtGFx5D1%2FlF%2BSGxGH%2BOzkqIW1BHcoT4d2ZUZ3ri9YugMO2YrsAGOqUBPL6PMt5uWijErJzegMNU3NLj4eQGpPSQLSNsg7%2BpPWLPLzoiadZdT2DHm7PwmigL%2Far4dS7ubsdlwDODZnR1oQUTqpEXahb5X46ohD6hVTu%2F%2BhYgnnPJvKzZVu5SW1V9SMKuTMtw1y90VX9XWQYPCox1hnL9jtkLqrzLfu9LoO8QUSqmkW5Seu9eNp2snMcCw5a%2FcQ3KDSs2utt4s0FYoWKTCic2&X-Amz-Signature=eeb8c3eea96df5ff6f1752b00caedb0cb2284f5449c3eb707a4a63f80e4dafaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
