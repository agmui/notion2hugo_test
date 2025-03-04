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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCVZBMRI%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFw3K0cSvQMFfzmVRuV%2Fy8qsGqG4hLAhHa38JfQUtaAnAiAO5I63%2BJmk0dN3r8fP8DEHWntkGIdj%2BZaw8ag4T3a8LiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD4o6W2MKHyLSJcP9KtwDHq4cPAe9kNakXuqaUwpprsQzYxIUlJZNETbKGj6yWWzifobebld6luTxI6cGBQermfuJRHpFamQNc0pqCL360cY0V2rSJ9w1LsjoFD4rYNUpAI8jMTScanqkpGi%2BBPQQlcEg%2FyptpaU4b%2Ba%2FBbzI8mnQHMqQMpwCrdLRcUTslbjyVf3BxKtezX%2BwNPBRKFjKzIIADhy%2Bi86R%2FYu%2BC%2BS6%2FJZRh1YvwHkbnYd3Ps4E3sYvi1WV%2BYAh4CuxluyeSkE2%2FUykBIZ0g%2FHlGgeE6u1Q%2Bvmju2G2wIAP1eH0vX2fMlPaNPeXe0vkiMb0vKE1P67RgPikcQdiCXOPMAXb%2Fg5LdpejDaPHLrRuJxHlicKl%2FzRuq4g3yg4GOVnSth7tWvXLbbNIZ%2FM%2FdFZ7YAtK6Y4bgHn%2BDpDWkrO3rrTSH7VbYgZvxKvBJr6k9TH7tfLuS7a5tvmVJAZdHB1p6qgN5zHLt2XUtPX2dpHu8RGop2XZWNjvKdoh2g0ouB8CMjTIT4vlxXqN2yjJuZk4VjUCOVXJHMrGeKDvW6kaaM6V55KKMz33wGT7RNsIbNIb4KQBMQ08TbSN6ywW7bMvBjxl%2BXabWLA4ytihHsui2RsT6bTfCmPEocKyYxJ2MtvZPR4wvYucvgY6pgE8NIZMBg8JsWuoCiKEsVqibl8yVu96XDVYllUVsq1L00e4QUzLCo8GmKxWNaodfKtkMIX%2FUtDduYogYwm9lmZs%2B2nRu1i4BaM70BY0m1wRWSbycfkrQAI00fEY%2BjGfHqE7InSOXdgwEAGmat8sqZH237pvNu1H%2B4He8H2OVhDVXzgRsTrDpCoI2zCbDUd7qn0nClbPi9OVk28mTDw6RQ9w5Cptn8fd&X-Amz-Signature=294000454c5560d4c0b8d942a8b16f97495da0da352d6891b4216f785dbf197a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSUMRLG%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETnWX9iud4JDOIfSgdGChhc%2FRFuSOEyrRP%2FKK31g%2FOdAiADQTKxxKiV8WyeMvBDf06TAn0aFh1318xnrNy8Y0VTfSqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGDAt63ixmxwJwuUgKtwDaRvYIh0a2abUXtmNILDGvW5wtvi3Y7EijYCY2gBpZyRx4jkkTLK1J6tcnxpenXq9xlC8WGie%2FVpn8AucZIlMw%2B%2FVSD8IyWXRigvxSX0FVo3mqA9gfYTniqNeYO%2B5oplHq2XSl%2FdRyeMVISa6Bc8WU%2Fijkg7fM6UAu9Iq6%2BX44h%2FADCV1N7YymHRZvS%2Fp%2Bf2dy5xi76d8gsVD2i9avvEqWfZFUUn7MhJK1goNdcgM6Z%2BXW%2BxjRkKUD3ECxv06GSh%2B%2BkYFU6VeQ72Dfe0SrjceNGEDcmOHvyd8XiO4zzX367exiQIL1Xg6cDYlqyvM0YjFai%2BmPOd7VobLGNUS0RdO42V6STtsEIGAxvkwFCV09FcDsO%2BXOxg8n8icWaOn%2FbzVgyGoIDzpC%2FNnTXgzM4%2BtNS%2Bv2jFbyYIWzHseY0lucfuFS6W1aSfj3f5eHjAVTuxNyhYMC9v103JqkYorSF5O1ISy5XbKPlau%2Br2IMtaqTDZPqhFrgT1hbBKF2PonEBLAu%2B2QspUd5GYtsZr%2BcVoOwUX446kPo9sn%2BuzXmQOjPoo8ESOOU0jvESyVVrYPJzM1%2BrVF77BxkSgSjJbc5DPZ8HggNzk6sHrYEpVwoSiV6z%2FbPsnw5Ko7vXaex1wwzYucvgY6pgFqUDk2%2BxCys2A9XPFkiK%2FbUoFVat6ApGB%2FQ3MxwlD42ZvTLUnHWv%2BYYqRcST7cL0WqfSXLWP1wg50cAwow5Kp%2BY6t4Leo76vW4PVpc0Zm%2BVRVCNhz5%2BbP7fP054cDGfNOhPhc%2FNejVMJ01J1iLJRf1Bagkf5yNV2nvq6DupKqfbXmL0l2Wpvkl9iet%2FuyWPZTrmup15L3eXigeT1wzoU6BONr13RdD&X-Amz-Signature=2fd549f164d6e6dcadfccbaf39e0a81e606886ee0d5f7747df0e7fe1f9ab80a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
