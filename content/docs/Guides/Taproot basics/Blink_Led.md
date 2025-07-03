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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UCXBEGS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQD9Pib4bb3188hT9fjVl%2FGFbqInWbvhJJd7Hni%2Fn%2Bk8OAIgM4wPpoz4UD9ZbjTIN2FliA5%2FwRbu2pkhT5fOJvYUVyYq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDDzXddYinWWhRRdpWSrcA4mdOIITyDvGUK9K1icdLneJdHGdaxEzndPr0DYcEeReBF5XiDT4rDaB0lgYghRVmdKAbjkgwIuT%2Fc0cMF0kCOt%2BMWOFkJ6%2BiBIhAOlYvdSjuf8gcVK%2B%2F9FeVDnA5p%2FVADsjgoxJh9AkEjxwut4F95Ao7qNmyePGY670ntZt2Freom3uUBIzaFC5Zl2Ik5YYD2CkG4ebnsc0Te5hC6ywK%2F15U%2Fw4vxwFnVSJXbuwhywW3tjryx0icKJw2Ws%2FMftusD5vl0jj6nNa86nY5qbuWELy%2Fahh%2BQe3L4J3QvBYQeoDFTyL4ofHIlbus7Q8zyJRv79HpuIxVVV6nv3kmalDNiuHUR52OpFrSZJhHjZetSXu94dNmp6nBAt1LjKm6ikZYksAtBJ6Li5OOp4JfZu2mPr9%2BEUpPoVrLzeRo9MoaTw76%2Fgd8BLOcAvDFiE%2B%2BFPEgMrPpkoGSgSy%2BkeDW3iOIaQZalsTDj12MB%2FPi9%2BmH9AUcPcpAAf9cG0pVHgmSAQRUQ01F6LMGLnA6ADpsf3n93HK4K4Y9qMpDdqoQ%2FvR26c9ErMQeeZJB7KsXk4qp4kj2LZWpN6zYusSohG4MJ2c%2FnL0WvXpy8IE4CTIupLbLc0ZtjThXnwr8uImIWJlMN%2B5msMGOqUB1aqCL4PCydWAxg7F5BL2Sbv3qwNIYw9HKhLd0ISNgx9f4xNaGWMMtZ930JQJS9hdSWKPygdTQsFEe7w5Q6hl6M2t0iaR%2FX1ovx7VneIa7J%2Bq7%2BtY22MQx5KdCWiuGMnteNEbe10HE%2FT%2FVSJ7yiJ%2F6P9zqd6QQosY0UrBCMhR3EtAVYTZ%2B%2B3lkxwqLfJtakqbAVY6IWpK0sTc%2BdDxVJ7xO%2FgWofbl&X-Amz-Signature=0e3255ac859bd1797b770bf8aca050b451638ee763be9f1331d9fe69a404b237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIKVXFYF%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDm0itJ9GAQmfav6SMuPeczCtSDvqEp41dKLxv6a%2BFzWQIgBBskh3v3CvQL3ouMK%2FcuAEXfWW6IUBYw%2FI6lW%2BNVuwQq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDJx3bK11W08K2bTCAircAzm5mTbuqCYt9JGWgue9h9ugvA04dC1%2BBy42kMRAelwHqJyI81Rmq8Gfdav5mQQ0unx6X5q%2FAcfsJcK2uqgQNHIBQxLFOBizHhLDkyLhvGB%2BnY5jZVmUT0iLSq4Gfurp%2Bpmr0dQrb%2FM2ig%2B4MayF0o8MpqWyN7Dd4w4J9Yg7HWKLH%2B8JNb3RaQbEoKyrM81IQq4QXM6SHwfxNHu8yoq4lq4v%2FkSUsQl74tJpP%2FPsWpqAV6mDmeB%2F4x%2FZr1HnYVEORZ%2BuuZgkw3qnkcg8jOnDxc4%2BTPflpnIAGvudeCtHpCO3yR4ZozVAeerfxmlgUI89PKI7Z696%2FiZ4jiQojhy4QlteBNh6QH2vkSf%2Bmx1t7dValkuEdjCxGQxKNR5w7s7i4huvyTIjQCxVjXGQRige0dUAOCVb9fsdIJoXbg0cJQSBjRgVqZcLfGQCVdoV6s6jcopNVAPV%2Fo%2BFbSfCglBxLHWrZIRXDnQJqokTxolZCCTkmCXJTQTiYhdDm0tDGLDwRhOBIQ%2Fak1nCwcjiQA1%2Frbb6x45CngvLm7p10Rddbm6l1p0tJLcI%2Fqqkoyxcwy4jGeKMq%2FncZ5g7g%2Fh56xH0cfQ6ObgEn8vZcjX%2Ff5TPj4x3t5l8vHISxAHnoY%2FFMOS5msMGOqUBfjr10P3o2kuihD4y0HmPuYBwHlMxB9BemMxcUqenfbr4NGbGm06nvn9Dyi1KqVGjZMcXyDdjVDadHvs%2F03OuUFE2mDL2Y%2B5FxAvLlMImrXceqxwjAEWN4IetpllWD%2BtXIyrnE82k1jb0x4pGOuLBHn%2BH4VHkM6MIxrhy9%2FCbnguyC0X2PP32RC%2Bflo6PxH6i0Zwk7QEN6wWlx3pg92ge0y174xJE&X-Amz-Signature=ebba5bb03e9ae9c1c0879950aac92616b06c08fb69ac0ac7714ce0a730a281e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
