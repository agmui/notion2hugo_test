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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNXPWAJ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIFZ5IvFmzOD8SmOGr%2BuQ1cor2VSv3%2FMkyfQ44a%2BrsQM1AiBxoeUTWV9tz31oo6aI274cNmxLerPOBuXIsNsPf2KdxyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YjtpVWaY5dFP%2FWqKtwDarUWZ4TbBEER9y0K2hrBVtiilActj%2FhENbuQNAfkcZIOebFuxrEsFLBujYAKl8zKt34ZJ5DpRsYODYLOmAIKCmXfD%2BnbFbTovwQlDUx4EIR98RhGRrSUUfrKolbZ5GuK3mfKtANGvJ9Jhv%2BU2Al2H2LR2%2B1EFug8qBAWVxIgEP%2FDNYTBn6TjqsxbaUsjnK95okOAUlh6psPYVc6F0gWT8p%2B8Ed2D3ch4RAfK9E7EjNjraMkf5bKvH9a5d8XBuK9%2B%2FF1rdFZwxOVeSVn04i3OdIHjhEKnoCuJDB75E7QYXDSVLZRSFrrtsO9Hgv2QLq0kz8w4BQWXwXDuZHesqzOVWKTMQpvHrg5sR5wmxq4uGvVNmt9g0LcpqPcFoBciA0oIM5hBNcwZUetC4rWHQhchbAwSb%2FK3WM4IDRg7yOvOlwb7JbgwlHnwf2Xb94X330XSEgfLYTCMyQ3Xr9RcVkAcGjN05Rr4z3Ii077hQHFX41BaKlvcAvA7TiMHn0TCfggwNkp4APTdA7n42zs7m9U7TZturcL%2FmMlG8W6RLXnfgPHR0IDqjsdW7XwoDMz9IxYK2E8IyVDBlWJwihEqjaScBfN7qpBp88psFRbOV5jStk2KaXqFoZmeC0iwGfQwlOP9vgY6pgEsDyXFJJ4ttfEclAhuMCECgW9YG2PqtaMQTI%2FZ%2FL5EFT1pd1msr41HI%2Br34AjmxUlYsquugUc1CXThbz0PF71cr5lLAD6e93R5HGdart3W7Fr919kZ9vIWlsVigZMmlpdcEKV52vB0JGavChqnSITtQO4EP0jlwrY2A9X7f6%2BsHKqi4%2FpNjV87YN%2BgI%2BhNwnedp13O%2B6uy6eDc4EZGZtORbGdLZRbY&X-Amz-Signature=6ae54b6d813a7a1624f744d48341a11b2b99476b179fe8c04f918e3e6fe4fbb1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIABTMXC%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T050751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIDk4AKgNqzy18ttzRH8A3xVmq9O0W0Pe%2BN2IXBMQigpZAiEA1yeyau4CGmsYFlsVpw8mRoT9N6MpQx6v8nkywIscOOIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8eFKdLraAuaK1DDSrcA1fh6lNDb5rQXM9D1FUab%2FF00060hyAZfv%2Frm1atXZf%2F7gt0%2B55gwGPSI31dJEX1rWoNK4ega9TXDLHkcah3TcsGMyQ%2BxccnXIIR8bU8M1j5y%2FM7bP2iFZUOJkj7%2BUyd9ZhSY3CRib%2Bq3aHysUerX8QyS9JVV2w9nixR3nVdz9s3XMiq4ctBngYOffgCeO%2Btjk0YntueZ%2BVMJRl7pMtW4LtDEAGi4osMBDNfmwTWM6t0NaijhmhkrPRXTzU438XoVXH0DV59FsPfl%2FpDcSo7vHTZLUZ4OTY4fnErwG9D0inqV7Tm46YgMvM0R%2B9g2nZcf120k1KV%2BJp%2BDF%2FDKpMV9z6%2BIMVAKNhjVlxuxrXve1Aicj4N8IuNF75kPoXkdTG8hNqoi%2BMzPG%2BDxU9NoQRIUY6YY3DYN0VeNmcEfx4ZnFx0qWjGI1migBUUrZIn6cg5NDCz%2BSssoBDgs8ml3rDHysn3stoi4rS5yInqheAd%2FZqfYKGCYiOUR%2F2TAnxpyeKt2x9vGq%2BD7Upn%2FgzJiyaIr1o1gxiiXqzQ6zz39vRdiSZF%2B%2Fd7H7ydyzcXVunAsQS6YimtVBgCuzBWWHF4zoIjofSibattLpSaoAaeT1qN6U4b78SoK7PffRywy%2BQVMLnj%2Fb4GOqUBY7BkWh4Yhs25ifKDd0x1OCtPNsKzAXzLXtmTYHJZBquJZLiaakEgm9awQT4IaNFwY5hQM3wyLc6o5JXNhH49eGVAQB4wDKdCj%2Bj%2BYcBUN81RODIUt62a4VMp1KR70SGtQUa6RkFIxIbfcXHg%2FMGijbZ86OoN%2FlZLfvITcu8jSZcgIR%2FjbsKywOE7W8SZjIIv%2FB%2BhLOav01FH0Zk6ZQHp2n43JPc0&X-Amz-Signature=548c00fdf6e1c40442353d122b9a155d1cd2777b4c74871401aa02ac63dd88be&X-Amz-SignedHeaders=host&x-id=GetObject)

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
