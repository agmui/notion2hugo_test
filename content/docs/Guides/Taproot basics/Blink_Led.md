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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG32OC57%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPQbk%2FidgJVbq%2FXezgWnAHHS8ioBj6yNRf5yBpYXxTrwIgDZyykdNtfjiBhm%2BA8JX93SKPUqvUaPCM1nvyO%2FHREG4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaFcGEA0EfNdh7OFSrcA9jg8ixprAa7muVQxHfk5HA5vjsp0DD%2F8OtTpfuuTUKFnEs0m7WMkzKMTBrq5AysHRbL4QzF23%2FcZ%2Bw9PzDYURy9Vx7mjvBtCuuY2VJgvqXhAskD%2FvmQwMyM981v8j5wsjVTeNxIwsyxHg%2B4ADupdXmeF1YrMUTMgBuXy70%2BdbcoIW3fGRiJDzfGOjc0c8%2FeFiiQWkx3w0Jdx%2Bp66fja6ZClEFHRRAGolpTuuoff%2B%2FZE7LMtMF%2F1KLLlyK1vKFdbnFGJPkpJHwY%2FXvfDQ9FReYk3ktpiTCA4NBW3%2FyrBKXYthBf2bVGFVfsumkHJ4cZNxsQADtDyh72UwEzbQ2XHHExjuM%2FoCDykQkpEXrWk9DJjUvd6TcQ7QotfJhARoVXromBFcNNuoEw3mohzS%2BkrvzXwigQ99QK707CI8PtyPCsnmvD2PaXlNdEOuev1Hm0pBCXv9iMzzlfPp5PAssglVbF07yq7WtWNmYMFBI7EA5bzEAI6tCXC1B%2FgZTGZauR8WBQPKhbqVEFv2gbNnJTfwYIgv4ISjNebn%2FKuQEK4PU8WRLTn%2F2vmVcS%2Bp8TB46PU6nlp5T7qXAr43ivf0qNS%2FhoPh%2BsB7zLdEmh6I229nPol%2FtCx1d%2BMREdEzRHiMM77kL4GOqUBFx%2BChM2EsYagGdPubdettU%2FxgSjGyCV2vjR82ANu%2FaC6QZfnPFqaLakf5KdLX6UmFBjpmjpELPkj228EAPCHef5rhB9VEIi8m75E4NtylPgJdm9S369P2u48uC2DJ7fLaPSXB4dAuLsVvwKSgVq%2Fw%2FR0DzhsDUwrjIvTFC3KhEKAChbvOTJzHwFdkff1QqfPvcv60q3n4vpBTa%2BW0XcTrOV61XbC&X-Amz-Signature=6dab20763611e34b93d3fee133101e19e1a1ec31aba367f224a4947f7a8de275&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW462QDH%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6s3W4Fqvvhe3tiBHKMPRsiLqYDx6xNegmXWjR4GqrgAiBHTYh%2FOyT193xhpnr6pruBiTFHgYcEdz44tm3sswT2nSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM29Uykt5LmTMQYTS%2BKtwDr4%2FifVldSwwTMt5N37KW%2FKnrh0A%2F1bI5rsV4SjRRSUt%2FaeP%2B%2Br%2BUamUOsg5RgeLY4TTo8mU1vTW6XgXKgYWKEuC6cRu%2FeUvr6d0u2u56x1lEKUX12I37N1PkP2ELtjDLHI9VFGRtx12VCTiNFIMZjIQ4c71j5txBjyZ%2FAzEN3XhhC0VG4z%2FWxIpue4z6t4Di4Q7TXCZwQbkk0tZXATBMYNwaFsP0pbUaMO4RcrHSGGN%2FChaZY60FDcgSyTjrvlDLOjbooC9H85DcPtpLQnOOjVb%2Bx6tsol1FgJ14zVNZeIGkGVJG5G9bHiGWZjBJgc%2FUGBBh549sCK4%2FIdm8x0eDNttfhlR2gybQE0WjOSsWvddV78o2qdvHdnASkxUoWjuxCoYcaEk09oHYTcRuHAxRTSkBxegt0KJd1d%2FLVdwD413xDuO0oNGs4CCzV0kt1ut%2BXukEel3eFzA5%2Bpo5too0D2nkQkIq0gSBMOiQDdvQVxgkJHHGuymLcdj16TeLQ%2FCnEBv10HPAAjQx8WqvqXOrC%2F53G9Eh2Ld1V586om%2FgGGSdEAX93rIBYkFNTuz0KoPia5OW3y%2Fuc3hVvHEBlNghMSn4PZzun3%2B1XBYRLr1ddqnV40kOv1ETmxpRZ7EwrP2QvgY6pgGbLQjSbX0jt5vgiePdnmThi0iB6Ny9rJ6or3xLp4j8uyt2wLXqe5oEb7%2BBG2eFiKzgdHrIeZQ21LyO0KRAOk5mj2cdpIiJc%2FqXapQaJB%2Fd2L3n4wQBm4u2SYW6OnXDmUr7AQL7Js0uEduZzSh9xf%2BOOyHImgVwHfH9ZDeBoMtM0ZBNyxR%2BFHEtWjlVIZfTxC4kZc1mGqnBLPaZVQTYURjYcISkxXZG&X-Amz-Signature=2406500f2d3c66cdd9b64af1e21ce1c03c870f3287c9a8388bebd223048b5f56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
