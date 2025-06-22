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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XXGQ4IL%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDmx8bPWPSlEdlzNQdEZmfJzDGOfiZfDjCiuR3QnCve%2BgIgcCYwejwfnPIKvrz3mb%2FmJTFD8Gn%2BUQ5E9E402g%2BRyx4qiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmT1LxWU8rd50P6KircA9YgYI9N926%2FKja%2BMHbNcH3ZlT%2BMHq%2Fp%2F3zUSd3J6iLyNvZfU69oBOaTcZXuKkEara5kJmrzASL8MBrKA9Xg6bxc6tBHmdz1zSwS10oeN8EmnO2mbmbIBgYgm8Gcd3%2BfMzZEkS47pOBjcVc%2BYAyhvjKsFZR7zoMgq7G1GFi64zi%2FhlfRyBmhnUVfSf8LVs4LYRqhH6IIfECpgHbVFCtpsPaKM04Pib1zy73pGmJC8H8dF9b5gCOJ3qR5%2B57vMzQArVNB4By7Cc8uJUkS7pdLEnd3Y4JU%2BHGtMdZYjyEEbuLjNIxF0b1A9o9XSM%2FfnyYDBT3%2FuXwyY2yOfNW9D%2F3srU68sXUb6%2FNq20XLULWdCVFdSYOrZy0WWSk2h4aqazZwm2SDncitPVe%2BhYgX3%2BrBLYHnjGwKmOU%2BG1ldOS1W%2B2IDayt1R5pgV410TPvNB%2BHDAjGBUrD6X4diMp2mYjdvRGsROvi%2BfNrI%2FxurLTkVAqPK7oxGczROvTkLKyLooZrFl9StnxfMe5dj%2BxfcYMilJfra0l18iGYv564LLHOolpP0akCPcjdEHglNIwGq8V4zFksCdGp2Jkzzy9IDzdFwf9oHmcMjo%2B0NjdKGY5S0sBWkDEhF8TsciLFgYyJSMIzH4cIGOqUBAyMH%2FJOCm%2Bp%2BGsiBnKJKE0c2jpTspnJUpqQFkq4fcFTAF9lpsYl9zSqazbhE53XJ8tXuy6kxDhrRk98B%2BaRErRNKwwAkfsd%2Bp%2B5F8Js%2FUI3jv%2F%2Ff0%2Bh%2BtqfsJRcHex7Tb3iKtSzoNYXHwArAlcS%2BksAa3nRsCDUsfaSNS1y7lw4V%2BMPifrdh4B2iJq0fFGTkt7xc16%2BtK6C3O2BSUBuTqHI348Bm&X-Amz-Signature=cfeac715806cb2a7b7ec30bde312d192fec144eef27bc39dcfab3eae47f5de5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXYX2YYE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC1ynRXIgQne6M%2BWB37TUDCCacKtvrd%2Fh%2BpUuo3c2ylfwIgEU4QfHQRKv41W9fL0ibwuWbZ8kWi2plbZjlmr0khwRgqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLEQqN1WmycWxIBOCrcA7QdmWufSxOnBV6LX4DPQPRCNHmMzAyTLaAYNEsfYUMoQqw%2FAN7b9qIsULT%2BLjSe4bbSPhL9GOmE2Q5B0aT1%2B%2BRG1l7x08%2BPxUeJi6xIQSdOyaLqPNe2wdke5FJqF7uk%2BzSgQUNxY5%2F4U%2Frt2LbUKBCvCI%2Bgbrva309pJLJQjmhYTfcjuhQv93dRHmRicqqftTENi%2BCiJDTyWpyJdhBMcP28l5%2FdElvHGTAxMYCISDaPvxsmbijJDekulWAfvD%2FeSuhemVNHHPpHKFgObn9xmZgGEOhPqX2qvYM0WVL%2FHQ5zzYvLUEwCr9Hjglf6ut3ATE21Hx91SBRJ0miKgjojpCrMzJqvaZ%2FVNrzD9KGlFiY9d%2B7Q%2FKKxW6Q8eRUfLAGFLIJ9X4%2BZ95O09xbya766M0dBJ%2FRB7I86%2Bn9H1U2jKxvp5t7TYHJoua9TEkcvR5dsRkoBRyrgWDIDQqxEPWcFi10AlGQdj0hyFfhRV36a4z4hVJ01JkctuaViY5iaZ47j98CsJHfcVr1IRJC8fE1%2FpEedm%2BNTO1XyeA9VGwfI%2FOozd4oE1y1By2XIQUhZ5SUJQGIEHL4rQzvAPAXRSdNxhm0CRDTo%2BOiuQro7fHCdA5eloVIe%2Bh3IeolDQB56MIXI4cIGOqUBJdK8ks%2BvsT3LNA8lUK7Xcn4HrxVzmlUUit9PsZiiZRtwx3n45YoxiTK6peQ1lMG3Dzz5SvCoyWyU24cyEU5fSLHc5FQXEdgm%2B6snr3aOpSt35eH8xMMexdf8sSnssqCzTCFseakB5h%2FaH%2FeZ6CBoq6kxuRZMlBNkw1j47jADdP1VjjwoEWa3KeuOKagWvBZ27rmgtPrIHCkwsHMY68rt7l92hV7S&X-Amz-Signature=c9e42ee2064de2e8da8061a82919b9da24408bca069a469a2d4eb1ed038da55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
