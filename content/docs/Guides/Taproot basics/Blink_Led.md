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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYDDJH7U%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGlg%2BrLSE%2FcnETzNqCLjqHYXuThi1WAJ%2FIQFElYfxgLLAiEA%2FmEa0yAGyUoYv6o3DAEsS5JR8s6agA9iUKxnpcHCL9Mq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOQoSGAc7WdsfWYrSCrcA6RdfLWpUYKNaYEwCpDzxzVeEaGbpEIrKVGaprovsWu3Tz2qVU7vnEvGYASuGUWJAr%2BCLa6kCjx0vO8H6JQDuXFOE1kMMPBWu%2BQp%2FCtQNW3WQe7WRDC%2F2Ca71WXLoAUBQ3oRDmWmMsMZIBOv2su4n0LvTDpoGZ1eEaNKmqvHz5b35BaMfe4%2FZ1bidXxUtiZM5%2FULuHyHvARMfsQs2BkZXsnu56stPyNx9eXK3pdZviS1huJF%2FI8DjOWcd2HqNZhcG4vh7EUk%2B576Jm9f4qNoby45dNT9iMHGJAlIrWLxPy0%2Bd8sKbUC16Y%2BSdbSlQyw9el%2FEtcFMRgj4ZVN7YThKH1asNAUKE0KvGAl2F2cQ0e7sDaXmiv6LGW6b%2Fe5C35O%2BR5CkpPhwBhZJlJKTMFWo4HpU26lQRI83Fv6ep95RBtYuVb1oXSxZ05rT6dVYQT8NAA%2F89lckpwr%2BXwAWAGUBM%2BA632nFxFA03u2T0wYgWD%2BDhsR8x38baU2cgeVShx7TpLKf16OsVTiR6IyvL%2Fpmo6jrMU7j7ZO9aDx6UY80tcGcowvASZpkdWtWQGZ8Bj4ljwuT90o28g4FugO9nwXCW%2F%2BAz8eLdC%2FDBLPtBkSfvxvYe1MQsgk%2BPlvEjx27MMy9i8IGOqUB5jUyiCEgBQ9HkcGCfQ5jofpTYBetoleu1%2F4PkB2PWYaOFyFJr5sz4tzV3%2B6CujtPHlaPNGvrvUQtbwBV54Syd6doUYVrRZqzvyrAxoc7K4i%2BGrID09mhjL92PHJYbbiSP0WFNVnmMEOqiTqzZNkd%2BwN1TQrwuLI0xXTOsurNNP93fGMqIqcVWEeMAvC6PKZ%2B31pYcR7VBKrYGb865gVox4pNQBdW&X-Amz-Signature=998dd3464b43078b1d9b4be9be45ac309d1c0e4cb98ea4a8b3e0529c970f6e10&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLJSMIC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9ht5%2Fw808BqcsgR%2F3Ou5RZ8tMVWA5KXt5SsrO4NnOrwIhAPCoZb8WTJxCVN%2FSkL47w9Hx84FKmWmrH4fVEZWt5JT0Kv8DCF4QABoMNjM3NDIzMTgzODA1IgwZXkGmToOZ7QpFnBQq3ANfTkUaetNk%2FGHOBgWomM7FIheqcG3LJjD4vJtbZGxPCxhOKKSsQgJRjAmsShMjZ3lGb44vTJCFVewDLMnnmAZbb1Wo9Oq3togXt7%2BqenI1lrS%2F4QYuK2vgf%2BeCYJvRPgWFrUZqHx%2FboeG9%2BI0cCLiTz8wZrz8XZgORcOgkt8dsOSrVX6A9NZ9olza8PriR65cfhwNIcCLGwbb7sKSJGLOfa9NYiruqmV0KgsDNM52r1p%2FecLRtsJHDgqgf3KNMfkKx5xFN5WTurAp6Agtlm2YrcXD3f5dJZk%2FWBaECQS6yuNfDJjRryCn93Cx7Yrgk6uP3APcSVBMAoLdDH3o%2FpRhgthcx3%2Fnhx3UfUMPamhmTIoCi6k8x6Y%2B7qHiWU%2BliI9Pl0grmuIuPl%2BbPXA9nh%2FuP%2BoYrj20wcgkNphHzScYVxT9NZ7R5IsgFkK%2F1YMVG47sUKlKfMasUDL41KTjW11q%2FxIKT%2BZVge2egH%2FNKrqVcp48mzWbPb6fnBAGVmy7cG3pAb8cb7DsmaXuP6BjKDdH3gFNraIbatUsRfWr6HDUldbTdc3JSLsNMKYmfvL6DKqEbdr%2Fi2FPjeQjGVTrS3RshYWPgOMojumBuQLz8AaKi7A%2F01N6t1mLL4BnxzzDcvYvCBjqkAQ8d%2FfTFtPvKbZI1Y02WfqTk18GfP%2FLZ8xG8FSBDbJfv5skeebfLFx0GXUL%2FC9LaGDvmtdkNTpQm57V%2FTH12YZB5VpD7Sv%2BtBGU2G97AqmJ0vEjE%2FLs4lEYnCxulRoW0lq80LrgCgO9bkjgnZ13jx4nJ1Pn7OQIkCQa4EXFPuDZKqf18CGfH4wbTP845JjqBqRIZXGJ2fuBcS4yjWs3zWVdE%2FC0A&X-Amz-Signature=96e3a400c144bf06915137226c90c96c88d185dd12de99d6e0783bedbe5a48d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
