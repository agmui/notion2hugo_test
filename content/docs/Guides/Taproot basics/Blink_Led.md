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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BCEBSG%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFt2xcGaMT9uKM2FPjyREex9gD7SOhnBSo4L6z%2FatJNAIhAP7mhjvutfFmKkF3wGkoB1rRUMsMsmOgujAvY3%2BF2sRKKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnoKFQHgB6JS%2FZaDsq3AP4pg69WQw3IUHLfgskKCbc6Zd6bW9JJbwDYmxJBwQNqiUPUserI6QyzAut8YKgBiHi%2FAmNfGgndp7UeNT2mScVljCAmzCZ%2FexQ9o4q5b9vH5AlOF6WUEJA%2BtBr02Q4%2BuvHyLawVbit01pp1ey3%2B86zK8FsztjuzY0HmwWkFYgUTYu694BTde1hNpWPfjF1jxdJIriR0GJHC2KBlUdgA5vEbHhGhKvl7wfnSZ2eyTTB5%2Bdt1Wrnr%2BRqjof%2F4AYLsnEIa11cRN%2B9njgzBOKa2xKB9QIUW0CRIlKx2g%2Fg3zDssQri7R1j8xI48eEdteqw42%2BROdcOPGGzDxbPoBwD9ALCzweCJ7O813m6W90NU5we2rLBSA4uZvFYhadhtdeOCG4AxJ87pLM2YfSJc7xjJ8%2BDxDE3fh7l2Kl2KbbiFjNB5gNB6t4B2i2xrBlQMFBhIkS1nJDUGBHZc43geH0ns7DZQ7H0LynVGzvKiyDOUsdKZdVIWL42LnKcoi9QR9VpgEEyjoimU5HWWdgT4M02JU6mECqtLGguGsi66mzL35O4IU9r4FeIB99lA0tAXg1cWzUA4CPXJaxYAROHD4ZlmTSbe2ono7Zv4Xh8SCTbnbl%2FIxJ59XNnFJKu1Of5YjD0ytO%2BBjqkAd1yPb9AOGmBjCcoST2p4PjFI4vHmVFTHQlU6WYNllHa8wCbEZFrbXHqxbO9Hfp%2BAc2FPZs87OE75dUNiPgKjEFTFnTx329zehPTX5PiVnjWJpfJDVvcwzKpO4%2FGXaOUi5tO3q8LPGzfzkW27UnjXDI5Ao08uJpI00oLGjf%2BKYrh7beCdGZ4vAf%2FIi6YFnwjH5QR8tFXYRmDoGv7y%2BSTPHC61rFF&X-Amz-Signature=c68ea7006dbbea50241d08f7e27bbf375abc09ff76ab178d0179ae19fdcbb0bf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UDOQEVT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrMVVOD63RMLjPOHXQl3wnmvw0U%2BcQe2VnRZnRJc2XmgIgSci3iUN%2BPpHSCZWUcqHBhs%2FcVqOFoMje%2BiJnblxo9J4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGUJnWhq6wMyq6GfSCrcAxwcmzN5arQyUrRUoZaasm8TTC%2BtlJS2OK8F3owrnWroaNddRNlKx59IcYe1hFMDXeStTPH1IACpHTwXE2hQlg9CZ12bOgNmrK5tNX2uZe2dMlOT%2FAN7roTlSpA%2FGdXPHk8EK3HdAI7zJJqOmGMnzHT%2FHODy%2FDholBGOJWRH40h%2B2a4D47HDVNMPqJY6%2BPkKY6U89YmVKGsF6N1usdK9qzZRZJnRomRTsdwz2VlSLXH1i7spBzJmey0kl9%2B6w2L8ZQyhrnqxsqzPL091MEt%2FrVIVZgbRzZZNiFFTRzqpU5aTbm%2FeDU5HCz8PfcYlYYgeNiYxnpwfZ351WluoPUHQ2Ny%2B5PkKA1ok8kuF9xPQ6XXM1vawOhfOo8kd7B5T1dDNtejaJl1pPcBgXwpYgJo2Bi6r1z0brnJEGk4BjozPyyjnUzy%2FpFei%2BlYqCfVmqvCb9FAK2lZ%2F9%2Ft5IvZzcqxGNHhN7K19AAxtSvaWQsw8wgujMArYXefxFQtaodFksuDAu%2BHu30tVvq84EjgaltvRMzmfHhUJ2tGn9agHrHDh6U0jrYfPdHhh39q%2FCkhUKevbOvmoIxADm1PwXCH6X9AsUHCF%2BgC7PxvMmaCLMwAtie6c%2FFmtL4E1LCCxDgFIMOPK074GOqUBksEvHib%2F1F%2BG9nfcp6LDziz1HWHEVT6VlNQDWMut7vrXh0ogCCaJosKX8FVoyeS%2BMb6Rf%2FSP7qMw%2F11yMdpPvCFAVd9msGB7GilMbbQd5VqvaDg6O9hNwbepK78ntc%2FoQ%2B4d5R6ngOXMO8xHftsh1CaVu7dyZqwKaQQAXivpGdZMPURAnu28v1u1PcW7%2BBDa%2FYIuzbvvVv0tzBzBokNCBdvDVYfh&X-Amz-Signature=d9944c163512725c9aa9aef3fbb64ee5311d7d12276e517dbb7a7e6790853368&X-Amz-SignedHeaders=host&x-id=GetObject)

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
