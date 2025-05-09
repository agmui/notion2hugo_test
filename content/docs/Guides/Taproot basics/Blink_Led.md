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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOQJKG7W%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRKq5SfU17ZUmHZ35uXeSm%2BCx7rI9hN97ZuSdygr23fAiEA92ScOHwslirCH89JJPhbpuu%2BhG78RzxkyMYEtfH%2BX3gqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD78Hpq%2Bh3cOdL16uircA6feX7DWAp%2BOoLZUVkrn%2Fz0evtkzpvI4eX671X11O4pTXqxBfHNJjbFyHZWbtQDWhxw5lNSOyB%2Bv%2BB8AIEByowk4OB%2F01s2mEmtHGenI1s0xkn4z7ltMFScJHFBsz8GbgKfX7f43otE7RFdPU%2F9x9e%2Bbqcd746qBQluuKPpaenB%2F3VUKAGVpHDZvZ%2F49HzTvkoLSDSLH23S%2FVTzcZQJCxpfJZ49NN4XaCw%2BpICPGiMt%2FP%2Fucqpu6pjlrF1jq41E%2BVTu6%2Fy2qptLYiavsVZSPtRhVfpdQuSssscTnRnoANqmUYPReZG14eVRzjK1KSaxrXr%2FM3jov%2FbMSDw2HVbK6r7iHHTOy3efE6rdr%2Bkb%2FtiIp8j%2BLg6A2%2BMACXKPUeb64Md4XTbLcITreG9Md2lVI9FgnPO0XlU%2FYzIKsuz8Omc4zrgWn7WaCrzvGR%2FPgDVL9M%2F0A%2B1TcvQBy%2BCh4i3JSua%2FghvSdDhTHm%2B2mU9qMtzMctF1u9NMzMx0aPTi0L7yMBx0nycSarwnS4vy6Lt83ias%2F4uGBF0S5E6ChmbUQka4StJydYnQjwe9Yz5VOA5hEptOhHbJuL5PCKEUBDpy7wBP8rpwEwQpSAsr526p2VaGkz2CW%2F3w0nU2%2Fbb6XMJ%2F%2B9cAGOqUB1gwbNI3P0e8xz9syBPd24RNn%2FgEC2bd%2F2F8ETQL%2F0PLXCK5M0UQA15uALlZBOPPQJr%2FEBkQ8orvOw4%2F7DxXF6WYAABNw3Nwv%2F02lZCn16cJdVK1wCMLBKPazQ4IEV8S5PQj8p8z0AGzl65SZO2h5s9i7yi%2FqSwCvMJ9Hzi96lEn4yoCcWLksbtanuCnoyNwT8lpJvw4YOUmPJCY0kXi2oRtl7byj&X-Amz-Signature=97ca1aed24f9b295347c72b7e7f10087f030d070b28aac1a911870304c95c700&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F5ODWT3%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T041216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDARhkMaE9WQ0K95otagzeiN9e68t5CbXKfT5COjOX3nQIgDojU1N7Kq8bmbddUXphr%2Fu5IQaey1%2FnptBU0TrbhRGcqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXhn0zFXNxJ4eC79SrcAwWaTB8s367UZgudiBUfbrrwcBTgmEKsbvboWg7MibzS05NnZrhqb4sTQtA5dzjfwqxezUD989m0y%2BXAlMOjrx6nQeY69Try4cassUdo4LSd6Je9Qiklmg%2FHX1oek%2BYiTIEeXlgWR4i17LM39aMRCBaiuNzmSc%2FQ1tSSykv4rUxEmOpY8qvZLNnRXTzMroIaSUuNEwPxfTFXSB92mowSdCVN5IvkVsPb0lAURJPmxWMnC%2BScnUcVhsGX32fy7vZ%2FUY9eXwvUxDMbtbvxF9Jkekc6Vd3Ae%2F%2F2cxCSEQEm285azqQG93D3GhwLMaWTAJW3mw6rTjqRb%2BE%2FjvhnICFXnetBxAWfRAMlsas14xJn4f4tV%2Fp%2BL%2BMlUpeiy1AiwN4Z4zo4EZDIS3BFFbpE2Zcz%2Bqe7wjXzVMzWk%2FUM3GPqRQPVTMiribtUh9dIWPDdzLtThiQoCaR0edWcZnyDSz%2B71RBJXb5SkPsegi6aJBGuaVSztR10PNmqXozP53p8Uorh887AYJSOGwIQukiI%2B%2F8Tv5IXlB5HLoKNG0kc7tgd%2Fm3u6U9AGVV577johqYIl47bymQdWvjsRxUIvZUdJ5F0P88%2B3%2Fa1M8rhV1x5w5WA19JK%2F7bobJ5QN2gKPU54MMn%2B9cAGOqUBvBBEHo0rchGGbi4quPfCLLo3UdIePx5yCq8igqHI1PSguxBHIbuMEHJrmTNBVclX7ModnijECeEcbP1dmeX49GjjVRjLD2lNW3NIJ5U7wHZuM09HQt8BkWihtsPuPfqmnhdGdeIvokEH%2F8HyQpl5Dy9DroIwUCJSsqu%2F5IaIqZuZHe%2FTlDVsliWtAzeHTvhNwZzCvQdlQ6EQjNd36YEESFZw5fLC&X-Amz-Signature=ec673352b12d3c031088c29f495fbb4b29251ecefc0c5bcbe28c5311d5413eae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
