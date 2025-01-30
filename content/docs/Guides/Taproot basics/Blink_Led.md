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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DL4MT5N%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxV4A8vt4%2F7yMbfWi9XGNv9x1y0gfB9UUKZU1T0GcfCAIgCu3Ux7ydpzxhbFDtyYrU5BmGPa3g49cEfQYWo1%2FYb%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSgv1UN%2F3l8gYDahSrcA%2BE5M%2BFl%2FFzewIGGaAJEm4XBso3XIxnFHlVSTvGSsez3lYQr%2Fm5%2FMLk8PfNWBRg8Uv3cPMVuZF7WiSVrI2HFJKZSf88YaUgComXK9x%2BQXp4BvXPG0AlyU6VHbkpngWz6vz163lWe73QLVO2Ocb1CUdMQc0opgDTq2Lz%2BxUs4J6bdzAv4KINsKN4O79E7UgnVfclT08bvX5kSU1A3q%2BenjcHUNIJxzrBVcwPMdDatTL9XPLY8O0fEK%2FO8wwgiV5SDkQRMKjzA8g9x4mdeOSxBHSSgtOFoAfyl3PrDkqUxPK%2Fxs6%2BRpiosQyhSKZ3gmkPB9k5QvCAOJUOawqO7a42w%2BRipcWfWgsQ7RxM9CVhCEeJ8VUxyPzGAFXuAn664Uz2I%2Fsrtjn2OXB4TYkA6hoJGFg6R1QYBM3jZWB89945jWwck1SSIrJX%2Frwa6qQOx5AQ2EAV6F%2F6809PJZVeZPfhFSxA3lGZ8w%2BepSFo2pXrClwiXVB%2BLyq58%2F3lJkQS%2BmpSPJ1ElNuSlQXJ2W8Mcx2lhrDpbu%2FwfqbHNBrTysTOgg5lbCB2m3%2FtM%2F%2B%2FRketo1lOvRq7EZtGdX2HDSIrWrGTkUTYqX6U9yq2M%2FJufiMOHKW5ykAMXdGGGNkz0tPcaMNjf7bwGOqUBE75xB9OF%2FQEMCkEUH3qkWhiaZo8lgK2xT0VUiacNrt8kPNk%2ForErolzidWsQ29QBCuSNwvHoBpIvdaC0Q2ia9EJTCrIG7rTJy1J1jtNc%2BaUSDGdj3VQtuEU%2FYvt8vJtCjcrnGs9A3wj7Oy4hbArzheMOaXai6nRzjYwSmzz4y15wbM0tt5m%2Ftz3tRrvplfWHpZBb%2BnBmGZnXC872xdJPE1RIbVds&X-Amz-Signature=3c79820915c45c6b8704c55e7e8eaa02016d8c8bcc98db4d9b38ff23bde6e16e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XH4M32E%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FZCBrfezLUJ3zjAIaEX8xZCpIai0Vg2p%2F9LtPAIpCawIhAIQPlzWwYAJFNO6FCQ8SWDljC0CUEBBA2F41RvB55Wr8KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQVrIn%2BJ9u8HLt5Qcq3AMziufICdc%2Bx9Lc2yNHJhzUQGLczd%2FC%2BrJb03FpHmEvuBT2Ok6AulDYARIk%2FjbqYgOGerbdYCIsucVO%2BNdyZ2f61xCOVUHM68tkBeWmPC1TPKltTdTjiPIbg8khhTflZTbzLixeBMvGQI5WpscCfo4BxDwXa%2BC9tRMlqdZ5LuNrRlMB5fpOQ7NZTZC7eVpRoco%2FbXr%2FFpKE5Ftuo2loSkyBw9%2B8bdJfcQKasmamha3EwqAOGB50A%2FYt5LcUTDc5tQAonGaUanmXVb6SQ7j1IQEVY%2FLcV%2Bm8ZLMoPAUJLcUoX%2FUEmlaGKpTggo2%2BgBwSxZBFboQD%2F4HME8rLNEWG4Jg0QGUCKcz6HnytquA%2F%2Bno7%2BbuoYcfqFO%2F44KXAgGzHKZB1wHUKmiBPrsslTYsazGapznTcQbA%2FXHS1VX9%2F3slpcYQ%2FlJccypps0XZoQqrDQzwNm5aA8BVmpKTArLaUEC3a8uiie70Pq1TL7Eb1yTEV8x%2ByJL9refkxQic1o7K%2BLhDJRJ9qfckp19mjMq7uLMZ5K%2BHqL%2B8XQVXOFEbvHVoKyCkBJ0ofcQ6uw4jjwBECXDkSc9ON8B3GFaP%2FG56ljtFq0c3O%2FwCwk7vYUbWKyGW0U6Lv%2F5cLYGjSMHbdZjDu3%2B28BjqkAeD7CNKaWwyF3py%2B6Zq2OtluCESPffg%2FrKfJKAqW0VQERNJ6BObA8uwLOLluEGN%2BePzNgwvwj80k2vb5oIH1APsCdGIAv%2B%2BM5aZFxgFPzSzJAVRxX7WoqpE4UGnYYvwUa2sDWa8%2F16OxfffJV5Q%2FljXfSclvxNX04svDKzm9vYgl7uEH013qRIWo4xVrfPs3kevyp8wOSY2TSViCh%2FB90VPVKQdq&X-Amz-Signature=d5326f61207da8c64a910b65d15194603dc003d4d59865934f72edae1b879575&X-Amz-SignedHeaders=host&x-id=GetObject)

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
