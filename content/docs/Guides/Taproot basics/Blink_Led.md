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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X372C5RY%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMxrB6wG3Z9ktKixvbZvX%2BXA7e3Uawv48I2mRStCVtFAiACgrHzGNHh9vWR79YnrVGpgvF8F%2BadJ9iSr1G5iHh4syqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbB%2BxZLD%2F%2BLEmtOzKKtwD4%2Bc1eGF9BbKQjX1MyLzHGUqYmmzAWH0Y%2Bx50iBnxOsn7O24SrXvBlea3qV1iH1LvNrwNWaVAhUUAmUYnLVu44%2FlLT6xWYdez%2BZEbHW0EfaffjqydNJTHVhBiBIchD4N6aX8nWJ0wLlQdhhVUhKyGaYfbmDvTS3OJQ%2FWWm9zEWGVZQ7KDfUTkvhu3xtk%2BsHUyAIZbHDoZ7k8G1hFei28RekBEKaBMM4mpkfizKTqapbHIjIRd4lEXY%2FIozgOhdJUQpm8U33yyufJNoDT6Zk90pzb3us4PPVdDCCcfUdOY%2BIihuIjXsbcn%2B2zz%2B2nghXJH11PcehSXxIKhytT16H8ucpzzeQaEkSnqv0z2MWip7BBXJYxq%2FVCGBtsx7B9kpfO4BU7%2FFbAOHkknnZzgLWbPrRPPa76kw6j6jzQJBkcUEzM8egKfGCu9SnCfsouooXQmcLJE%2BaV9T1hesbfCq9JkRVMh57bL5qu95zGpTUqQjKcTXJGaOq6Q97OIUMJwMEZVEtknVJ49r5kNNnON1iGKurx4QONoJGlxcfhiZi6ZrP31OQwSWTjYnh%2BIeVeYz2iP3uEUvc5qiw1YjIUm%2FESVaZGbaXipJ9F07%2BT6E2yGYWfrx1PLBodBkMvkyNUwj7mwzwY6pgFnQfPWqmaOfIUdU2rS%2FJAZzQBmchld1HZZpBYDGhbzreoC%2BUR%2FDe7zDtKEtDmtZYHXhAsy4oYRh11VLfrwwxqa7zsIrmcpJUtEQFflpaYcqJhNvNLy4oaai9x1vBBDXjg6BZEs280ble5OacX3QpjyYvi1vKKCLPdslCHPO1H00KhHJWihoXclN9GeEoOTVHhdUCXJRoQNgajzLuL3OjrZYVO3%2BLJV&X-Amz-Signature=dc16185798d7f5bce96dbe03984c4d63e517fcceb7e4400adc49a7a744a6c04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652EFHREK%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2fPe8som4g%2BvrcFw%2FHHH9qy2QVz4wmRb8s%2FsS7r2HfAIgby0x%2BziBDAPaFI%2Fio9GlvNY8uPG4Zqz%2Bg4x%2FtRku%2B%2BAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHuwHNLSekX4yojISrcA1eVk157htn9XK2dCIblpPYHwZ%2BFwxE8HNHfLvkN80lqXs9FBnpnjeLuDAZ2VlYGElL6oeXw2B7JSLzi8%2BowoJM2jTg1ecm35hSXYKpJedv9xuW6ZEH8DV5gbUu3SapEZL04wqgORQxd17VaB8y%2Bed5yUSAaFOlBO%2BL7%2BG6lOLAlWOTaHrisR4kgh5kndnNDMwxCjVjRpVdwN9fA8MWIDsLcpM9QZ8Tg1qJHxrbaP9jSZQySFZpTTtXMBvOp1%2BSjGYzYx%2FGN6mMHJcEHtq2aMGFCaJqRytMfEn7yN5pe%2BrMNCmeshJYaPjqdffQ2VZZaYeAozYS6M0koNucZ4o8J%2BvWf51G%2FNaV5pcDidjkOKYAWIjxrYi89jcNIPBA9PH0ztTwREv2mgABxlD7ZNijkF9BYkouepaU19MuXBsXAlbuOjqH1mzwFZYb4Fu9OBV0iT9K9VIFd8rtbPjCCl%2FyJB86MSk3cznBxUQm1BiKN%2FJa%2BrcFXfG7R2W%2Fr6WSRARwCbO%2BkYdmXI0p6T05OZnY7w97ci74C6%2Bkty4VS31e3GAwRGXhc1ocpiGwgxG2wCBCT%2BqcaOZ2B6p4Dqrjqh%2F5p2oM2m58L2Wr6LzlNupu4q7j3bwh14RHRvMbtYDBKMNa6sM8GOqUBcZSIzbjDClaiAmIvST8UDDlFlXcQxuDX%2BckGQ%2BQtPw8eg5%2F3CC%2B3uSusmykq96Msoi2TZkeiZwL6aVRrZ833i6z0xH8hC%2FqVHFoPtDXqOZUOAMplmMvd60lDxBHdsuNyCOxgnAT2WI00ZlYhkjZD5%2B2S4wWa1HvYD1ml30s%2FKTXudoiWnXsmFNqal1%2BLMOdUC00O4uOefh%2BEn25G2gR4jwiYBdmB&X-Amz-Signature=a7d79f3e5bc0b73e19dabf0bc3ffbc7f12ccd321e1bbc03b9a3d2e6f6dc389ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
