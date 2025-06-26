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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4GW55W7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDWBEKgx1vYVsowy3oHd9mZwl4sWud%2FVGHcFadjniM2zgIhALEjiarvmTwI0hGccC70gOvbOjxkyyIBCEAlEotw9%2FcIKv8DCGEQABoMNjM3NDIzMTgzODA1Igzkfe8PFOU9XmOOfgUq3AM%2FDtHQH5ZHw6EqGfTH1EChTsyDCyiISFFpfK4tQtsQnAFJyFMw9dvWw7DLWR5pyuGigbDB1zyB9RIpU42nCQFE%2BAEfhJ24TPIE%2FDlUS9A77XD9pdRF6OpaFmK2SXa3Kj%2FEijjInY17pZ5n0XOYzLjX%2Bbrkbj%2F7XdEbl%2BIaye5NhjK8iC3ra5d1D8%2F%2BF4lDZJJhvsil5pHI0lqzuPn%2FjfzAV95VYM6zpow7bx6wdhTn0nskHtkaMUOIEx2Vp4BYG8tfqJ5g2TjjnNvYLABU%2FALBqcsBGp1nc2u35htadb7yEqT1o0kNiUn5boCL52GAI3F802yv8sBfXUAPHpfPq6K%2FztQn0UL%2BPLLftipnFWvTjepA%2FnJxJVCirosOTHNACwoFMx3FlUfR3n0YXIOax2sILw%2Ft86ph%2Flj%2F83%2F37CaWBUCfdJJcHrLQjsgpZAi3R9H2J9ckjjCkIbC396Pw4OyprB1ebYxrPUjzbUfZ3E7GN4Uet6RD2NvweGTmdPpbRMYIrY827Ghk%2BKQ9QVLjV6gIFoMIqvCIUxvC%2BTwRqVfVPvZV2Gs%2FRRxcc%2BpR%2BgEbfb8MaTbkFHr0QRTcAoQQZZWlEaXbNTMCyrsufjVYgxK4xvDZd7QCt3lQ7zw13jDG0PXCBjqkAc4qDfQtpRu9PLekv3LxWdBaURJ7lSNG7db6UMc1LYfIkR9wlc4INiqxnCyh3wzVZfj5wtFAVdMSsKDQU1st2A540mDegXs0ERBbfdkjrS5%2FFfUn0KYz231zqbYai22%2BIrDIjKbCpHdyhhIeqYX9eGQwdw00B2%2BMSUjn7DWe50u%2FK5K3SuAl%2FFdRgD5wFZqQ7QnA97%2FLW8EgOvE9xEe6n5B6Poa8&X-Amz-Signature=1b3e2cb9863ebb2a082fc3161ae86f3245deff906f5b250ef0223031ac2adde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDRISU6U%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCIy0CXD%2F7LsHpX4FxKa2hyewk5cXHhoVEdMCZhJr9%2FHgIgCSHfVP5nzpZocE%2FWHbQ10PHBTBF1wzHb7CYYTEVdtwsq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDNzFPIxtkd7z3TlhnyrcAxCaUmKra3%2FXShixz4VmNIM9qf9fWCaiPfxblUYdfu2hek18PvHN%2BS7PDzhWIX7rGay7g%2F3O1av%2BiSFEtxEJr1Dy3WX5S%2BZ%2FC6HC82vZT1J6cUj5OiHODw7jfnSArrZ%2FTN4SjiYq4OTpCSzKsNb5%2F%2BATFJGg9Cj7h%2FmoBEE%2FouKPemlojfhsnCfAqFEeLxXF2OEQ8f5YHEVo4PH5M1Ysrc2yUdomgD%2BBtWC1awI6ynhKMGuD77QR9YuEi4WJT8UR8MsaltHgxiURjLkm%2BvkNO%2Bfu86Ouk%2FsDNn%2Bx0XlA5Qh%2Fjjm0QEQwOEWC%2B63zd08SVzh2sQUS8pZ55Qw46ezsCkjFLwtIBHy%2Bcnq9v9uc1XwLp0NMOO5sqDtQeqQDH9qYE2%2BmV5Wnt%2BV7zLAEhPMWgLJ0ABxsPZBSdMFkPBhHB9NjjmvAxqUgA7%2ByQfAeinDqkv2LtokJ0QluNdV26qtPo5bUrLAkerZXScTUFPppF6VDe7WjK2jvGrNPsZnkn5JVwQV6lc6S0Rz3BYriScOJinbHJGYCQG%2B%2BRl9UDsdbKo2si5iblDXEj9XBF73%2FydXWlRC4DYI9EnnkJrTAzugjxiO3DTQTU%2Bk2ST10cE4Y1Y4201Mhu0U6wp5wjOJmMPed9cIGOqUBVZ7wHegXHYcl1L4pA0f7%2F90veKoamodDw8epduNAwA6fw3Al2lMjSqESiV5Qn45Lrozl%2BOEnJtPQIKYC8Mxg110wNg8XaH7NB6XnPZKM3bh25q7XjAQpB3UNCD2nAM4peRGGV1QUEz%2B2T%2BCTQynXoDIhtwU9MwI5oVwY2ZVvFJgXON1wQYCAJcGuZoegEA%2BeYRcIFHCnBg%2BToajtk72RBpy3qc8b&X-Amz-Signature=0edac003576bcd649dfd1f61ff0b0f45a2792cbd112d9d74f4befef4190f0eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
