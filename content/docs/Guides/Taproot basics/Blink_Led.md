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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4UDTWNY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQYWT%2BMEr5S%2Fziuv8A1g%2FpSHBBW1Fnk%2BdEc3nociYL5QIhAK7RzcG9FhICQsf3VDaZznaRTv50UKInHlllKO69Jkz7Kv8DCCQQABoMNjM3NDIzMTgzODA1IgyrmuID%2BEF4%2FKz4XTsq3APoduS%2By3XJ0wCPWwLOLwbI8dwI8K8ukm9KZqeqshTINN4QlLnHYflvwN8X537o9QSObSHvqdaMtMhpW5C5hIC76IeZec95R50PVfLykugK1p3mFVxSBKHmSXXa4%2BLqgdsFtlnAtaBwHJw5PNjGKmCNMVn5gTjMd3NiUqAI1vMYg7Mdex6q1L1G0C1iXfdlfAouA9Us3lN7C%2BTLP7bEyBQE8W%2BfCzqui7wuH1ylrtjNRxzlKprFRKYWdplciKGp8Tvsntx24Gzl8x8ZB2JUI9SsnAnqFiVnq0PskP5zWwWlxKT7w3jZW0QZgX0%2B4I6ucHI5DcX%2Fv7NmmZh6xnxOotIvfaym%2BD9jK5zcwY470%2Ffq9j%2Fm52vErT4tOinQdZbMqr8ldYgoooM2K6NiuBZLhRdyhF4pvL1zV5lhKmfUaWh3hutFnWA1pZ%2FrdVcqV13OF6l9VmuN7X3OGfcMbiXSzT513u1O1jo8ks4bMyjxoKvkoLjVOv%2BOYRq5Ln0u2x7X9OAbGrI3G1PUICkcOnrJuffiX2sYN2Qp0rVEgsqeOvgdWyM6SSDgEo74pMa8jGhb8LQGuOb%2Bvr2cwZtvlkbNDSWfH5ClxXGTbf8agEPHBjrCe7OO6f1PWalEH0CugDCTh%2FDEBjqkAbUiE0ggpOtYBTSTB9XQ%2FSGNT7fGlBuZVYNMY511i5m2k0FpZCBPBwx%2BK%2FS5%2FhO%2BJWNSBEgi7H4kS4EHhQvaOLGt2jFwx1BeX%2BopE%2BtSCdjn3pdLt855FcJqd527SozVc3fyrpKLdcOS%2BSy%2BF%2Bn0rTM0Q3DwKn%2Be10pU7w9F8apIK2hDxM4Ct4MOOJymzbQu67X66jt7BrpSw09XB7odZJkkEiZc&X-Amz-Signature=ccc3054dcb0dc063acdaed4084f31962d10e18d124ac6e04df63e28760b08390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET4EOE2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHwG3cfW%2FXSqAIKFr%2B7%2BZsdylLFPGE0Cas6NHuKFhfrJAiEA5x3%2FKIY%2BvkYkcksYiVuHGByYxWrkIIRZxq9qVbXjor4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJRUPrbdt9WXi%2FiNgircA9clDy4aHOCy1I%2BpWtdNWapd49NUQTDSvRAxg%2B9nMrPGE%2BjA0X2acrYgbrnwRZl3fFNxrnT8YJtrPp5ChPSqqJ1iwao2FR1pgz%2BNZDVb3mA8fQ1pkExlHPS7yHMiDrqdhxOkS9byALQCg9dFL3cJH%2FaJCGdyj4fqiaNXbSgW%2B83I%2BI9crEQH13XUO0PEs4YW5XgnyWU0rMOC%2F1ccYna1LWy7PuK8ygRW7tqdW8K6LIjrgzHM5MyIKaHAzQmaZIWoeL3NJoJUAwut74xoKGC9nuWZxue0VU6gRwOH%2FFWvwXhVRDKeTsGXcLSyVKvpTytHHaAdtlm9xt7NRkB1ujTOFGHq%2B9ykEz4WNRt7ok9nREmEbsFMtCF7XpajN9jlEWVgWMSrwRhqs0gEaIcZ%2BxjeGoZ92g1P5FYSLCz5Cps0c6hr%2BhJrj%2B%2Bj6%2FXx1bJtsoUjQhBW7%2BiFSRVWlvPyNc7QThdPnpxK4Imu4VKyEMFj4dGGs5HwQx2toMvpEiW9%2B0W4SSROnr0D%2B8NVCKNYDV9hC6TcptIYTgbFb%2BDPyDqEOnj8ao6QJV4RPbH7poQ9WkG15yk%2F6xsTGA10zNcwOZ6sn3kDWDVWoL30%2BceqUmcvd9wjlpG3dQJYqyVTK9xfMMKG8MQGOqUBhillvYFiVRt6a9tO2907%2BpxgNz9k%2FME%2BGA2k90tlRM1PeuQSwU0ORKHCoz1xTuHTaVI%2BdUg9nVEixMPNFds50ZIaTjUxVUZ2exopIE57xcF2MRVktDdwZd8j2yzX5S7t%2FBS8MKuvE883COwSmCyuGBa5vVh%2FGnaVNlwx9PoRVjBMD7e3IjPKVfGDjty5eQi81crHUx1x9O6jIhTfydqWQFeXwd2v&X-Amz-Signature=32bf4827f1d6e6713103d1140f3dea188b4d96ba10a4fe56f341f413d5a1193c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
