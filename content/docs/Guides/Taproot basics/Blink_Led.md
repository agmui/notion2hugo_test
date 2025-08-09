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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3VL5OS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAuBXzIHFQOdszxp2o2h0FDVH7CFtb9EinyjQcZN5Jh6AiEAzrc1QFUE%2FTSrjlXTu%2BZRCNyA3ipgfV%2Fyoi5O9xC33%2FAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJITy1yYnHITfFOujyrcAwZqLzlvKE5dCvHsT3JwoH556Fxpg9VqTkqj01kqImfJwIeHOgGjaaN%2BBxTAxPwNuhEdJ9DgRk9s0aKgUzJIykp0KZaiso8WrkIBru3gYuaWhZm63aFO2PXgupsEa1SidkwCvtrofcnsIoSa%2BBuWJtGmHkez9vRx7hyF%2BhwWXPol8OVt04CD2noIUZ2An4%2Fh7E3kv2Jpiju8Ujw1K4qxYkprVu5Yd6rmSRsUYpUFue55EMJDC%2B%2FP3sUjZlCFxvvoLPL6URHwQPKWlSv7iU2o6A1qdqrq3DCjt1a64QKaAMKzqj8aGcxAZwREN%2F9C0VFN7yEJeyuduHws%2BmdOL3IfOMbSqxUNV4SJLwZMcSc6lHPQzwFhs%2F3AEhdO8MQx%2FvVEiYOwBjBh%2FZk9WOcG2Ucbhgag%2BxTLZrxavnNBwOz%2BqeFo0jK0fSUjx%2B6Uo%2BYaqUkTKJG3%2BDRUbtX2B8DT7svhY8prlzeCIt3a9fr%2FrdTWJ4PvcY84Nd6O%2BtX0EFL91qxO%2BWE6j0jH1Ozzgu1plvbS5%2BkBHKlVFPXPd8%2FEsQVybXuU85NFJW7nI9tehxNDAmolXdLNfKjZUnVJX9i%2Ff6Vpdq02R0Dw5baq4k4FcKZB8Hg0wDX4aWQyNc3hUbdeMNPp3MQGOqUB7C79PEmIxtjXLZXPF3v4zcybAEd0GJx0C%2FDibdOjvtRK6S0qz1nu6EeZJzSKNd%2FyoNZy0vQxEcQH5bOZm1ZVQiWR1RY7tv4PKLBiF%2BBb6%2BZbGxrw3l5rS4gQlFA%2Bswc7%2FBfd0hDevBjKesal3eWqmhuNPV%2FA32ByIMfyQpjrmxud13xghzGBSBcB7e6O2oizLPJrVgVoNcKVGyfS2lHieBSgWt3p&X-Amz-Signature=79aecbcc97c00d2b08083e3d232feeedab8e868f021898b9fe0d88e6e8df2a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2CCT7M%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAR0GiRXQQ2w5YUTS38lja6iPziJRWE8uhPZKLCCJQVYAiAoi51uxrYC35siJHhGceaib%2BySvAmk9Ns%2FG26hSS6phCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCuaU4Ifg2UvUC60TKtwD%2BcmL6BOaz9SVMjwjsbckiCWcqKAMugMieFeeobg%2FJZFC%2FfFn4ETBPAEI9FGGddNRJH9dJu1eZNvBsLGpp1Y5bV525q0q4x%2BysQCWZFDg1oGNuDFD50SwU%2FpQWqjxPLRMVN2%2BYKfWKBm1uT4Byilu%2BjxxVr6ALTA21TIc7%2BGRb4t9Ev6KJHCfBB5AU6oGTmN46DIyoGjLnv6oHfusXQiAl0hJGtzHGGo7PcZ1OcUrWWW1wRLlodXAxG3AUvA0pGOjhZMc53nJEAZAsXuvOR5dGQuUwgjOIBrPzPCXXoNR9hwqZElZtNMkunkVD9Gdd%2BlshfG2pixRW4Kz3TiaGvoFOhEPDWT3iwIgC4PWRR4U0Su7E7xi4GbSgFw9yf6Nsl4PRv7QNLks%2FParW5Rubocdayb2dCOBXj2VoxHuB%2B0oncEPsKGNHfpKDPcbbkXmZexaNeFU9NDcPE7F4T4d%2FbGkE8ahp1IfPO6dI5RQvmiIU2Z3uDqO4mM0SVpVB2gCrWRnJ3rWgR%2BrZMqRQDtk%2FDpLS71f99CEZJPcrMWhPjN7aZJC7CeTHGcSNT%2B1C06Ecjq341JHa0CWzwXgJXoxzwLpcBnSF3JazXaOOIxUagfK9RZ2AoIcWl4ZPmsXCMow4uPcxAY6pgFAZ4iXXA%2ByT%2FBaoOdURDUkeGK2UwD5MJhBP%2FQTi1FN5ls20a9FN2bCgRwnUO3mgcNo%2FWcVp7M4DGUzVDzG6A4DSEZA15KfLctK6Xy9EC1t7rnX2I5NM4NUlGt2C6Y2zjqZD%2F2Xk0v1a0BtA3qBK%2BjToEYbWq4XHSXfEDwVQeP72e2qE%2FCIN8vjgUEnghIHvGb12Rqp6w4E302Ge6WORbVVuj220MDS&X-Amz-Signature=078c63123fa4a9e80b662af6d930af28189554bcda730daa1b6c796159589d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
