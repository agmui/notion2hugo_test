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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOR4XCK3%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQClCOxJzFOjh%2Ff45hiR1b6tFMvgczHSxTz2%2FTzKP%2Bq8%2BAIgFnT3Wlmt0ZTdrbqW4v8H%2FmIZSL5ehyKrPHzq%2FTRoZg8qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuH8SzdLkzr9I66LSrcA9tP%2FN2MoAfw9jtTJl4VNkXI7gBLqI9QSI1FZoaFrQzHPVYc5GfymGOaxZZE9f6Dh6SzVuYXTZiyBmLkU%2FJZXw6CYuY52fMLbJgCx1ADauK9gY%2B56lX9FYh0s1FVuTWTPSd%2F7Op4kfTE49qJYBlT94vB7GO3Ybar4PeMh29EMkaM3EVQyute%2FpXUEGrvbQLbpz0ub61U6%2ByVwLj6%2BTTbVSwWkhI9C0K%2BOSGZJculO%2FkZxFxCiyNt90QHbgJ96Vy8BY3FtdXWKbJOeQahHE0UkoxofEiDiJniNgs3hD%2B%2BPLeQF7dLc0krBhLko4z9oacFNrvb8CXVL4e9HneAX%2F8izxpqaXzcpxlVw0OysNGhNU%2FANxiZlgHXGP%2BfsEqW2pAjQhR1C9mmhr4MfdLSKD4YHCUUHSNbokKRAZc4aTnsorjqac2uMv83rEUr3ap3iHM3E9IFw6Boq%2BOWmV6Q1fgv5xGGzMJ02Caepewd3lNQwiNeXReQnysySCwmNWggAnRI1Mua4nkIez2C2uoXrp%2FwHFcOuJcAdyZeWwwJBobico%2BDCWDP5DM1mBE%2BiZQeHkhMycbw%2Bf8HD9lrHplDhgIuaLjkN3%2BBOve7xDQ4xjuG73AzUYsqLw%2F4elUPcnpNMIrl08AGOqUBl5wjsnXwNLCbqubDCZ4B4UoOK5jQBeJfq%2FgtqQMPVNDdffOoABY1W5lPjdJKNLNeQ2B%2Byx3zs2Byk%2F%2B8Nx%2BHSBKtYpsi26btwYIOy1a40h07yvBRyc7qm65QSefBniNnxF57gNa2XXr%2BA8%2B0S1lyqioN5nDTp55wkazOgKNnT4ZC7CqaIBhTxHxlubv8IMs0INJ4HQyhRcGnEXsOlS4TrwT9013a&X-Amz-Signature=7380ec4e9e797fb5d71b8aa3f103769b24a8d9dd750a015f87533a39e29998fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634JS57LN%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCofAl%2B3MgRbWmhs%2FMQqYNIS49es7BBvVcWvKFhons%2FcgIgTESgGlh16UAV7I1fUVkv78Ui8eGhI19NS%2Frgh3Rm0TwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCIz70bwKlpIIz7fSrcAxNC83Qih%2BT8KBiwSSKVnB87dNT1TxVxwzmifXiXG78gWicyPJeBFsExDUqJVcCZawERJYdQG5Yo60n9B%2B%2FjPrNC7%2FTGcr%2F%2F0Kgv4qXV7BUu2fR3nPFWxg0bMy36ByOo6b%2F8Kh8TQ9HLK1tLHVS25mQfhn3ERBm6sSTCNXbg49PKQ8pN6Jn10pLEEsZPcJO4rM0PWjqYb3JwW0%2FiRn%2Bet0lIY%2BuP7Rj0wm47rGBhNBShsJMmd9VS9pzA5nNoE4F2HESN5%2BHrIZdzJ2hxYEL1I82KG8L2jM7hL8mZ0ZWNQlee060EqOabcjzT7UL0KKoLQ%2FYTjpillvr4fTSchm34R0kBViaYgpgxey%2BFhV8OzZH2RtO42V4Uh4RRUBnx5eNWcyhkVtQ0L4OS%2FoQ32utcDF1x%2FCxSq4Q9kRzhLoaY1HLu8Id87Pk7RAS72dxH4XU9owHzoDZZr%2FTCphXuyREv%2FH9j3hZBpp9qYbQ0p0JLic0oWH0SYGV4qwPnHw3XeWB554yAOh9lxmzo2J8pkGQCoik4fJNbjOP41TrdJKeWgEy%2B%2BMz4mmtAZNPV83V4i2rdFQJX7ojfDRlnL1150JIbI%2B93Yu%2BdgdYie4QsbzyWFnLQJNe43ieAaqrb37WpMIjl08AGOqUB3xQlF%2BP15jRkv%2FbMOAiuq0mfql7Dk3s1AYoEZCIdzLVHlrM99sn4YpVhktxRV3HerVwVWgg9pYjOXi1SlTz6AEs6tf58EtyvW3wpCerYntLbGZYmeykABV2JmZQKa0PcQqoCi2U73rimP93DmpvwMbwOGmvDtncIGPA3OIguh8YR36YPUeMapSSPuVrtQ9BHGI96tTSqEqXewR3jIBg%2FKGe0C%2Bos&X-Amz-Signature=d8931c49edbba15ae65a48bcba47eacec6b7dd139e9cea96db9c57c0e94d2d92&X-Amz-SignedHeaders=host&x-id=GetObject)

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
