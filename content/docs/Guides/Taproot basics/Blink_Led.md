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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676LZBT2E%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDQnrNy1QmIle%2Fqce1OOiDCiI4DwNHBirL%2FDYLaof2uqwIhAIEjU3PtLqeismulA0JetpWwmnjAz%2FAVT1pLUiGBAzv3Kv8DCEEQABoMNjM3NDIzMTgzODA1Igz3NEP5UDZ3cK1RoI4q3ANQ2VYgaB%2BTOZjpFV4cpIa02BcTyTBMJgey6iA3zTaC%2BwSvXd0s6mBXF0%2BS73c80qZqfg8jdo9HKpioxyFaXacagEuocaRpqhN2x7OWrwTHosb4XPYDKjFUtqP6TX7ztEqfNgdS40hxoogrnb%2FIXUGF2h0%2FZQUTk%2FQ%2FrLk9PPYtJRBtFFeX8FAjwp92FjzrUj7JMfVnVYi79YsXY592Deb%2B0mEUHb%2FLpwzZSpcd6GkUtBb0QquHeNYOEJpmRxxWKpXeEyxIEAaIadwWTp8mzkjyXAknvNr%2BPaMNWvzojIY%2B2mkwu3SI059Ek4Tj2zw9n%2FlreE9pi%2F8KBuyg3w6%2B8NQscfgkMiArFpcfGj4bdY4EAGGbuwg5b12WuKpd6XEo5xEez4lKYH2nT8cjLVDv%2BffrWGWdK5J3frZsXhXQKYDARBrd3qaQlEIwGNRmPDYdkrHVyjAFcRDxRhkBgHeVkc7IIbgv7utnge733EwdkmTyz5SXjnveSmdPeOoeoVtj9Ao2MqvxLQwSITO4UKUZCbOvk46jlSRNEWkrs%2BwIjHjg8a0NpONd5U60RkPHbBPCbZ%2B667sXYyu0DL89dFzHGO7wUYkkw4nf3gD2z8b4dnPQBe3efJbufDtnhPrGRTCkhbrCBjqkAVLAkhpjPfduWrBhQi8uQNGK0MYDlaPoFX4Xc7mqNvAtSjllBK4SukvaUCpBXPBoeJ0U0h6qu9yB0PmoR0G8PBpkMSatCy3LMJMNWqsZkYtBWdHp0wPcLy8fgsM%2Fich9IhVZcOv17aCx8ldVw0M0J2rPDLHCxj%2BoRG85dHFUHXqnZN0iwJEotkFrCSESTrZKn8PICM3gjPVtEApoNre6SGdlm6Mg&X-Amz-Signature=799172bb7e70bac6d46c1f641054552d0f511f830bb982f27a561f138e2c90fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTTQXPW5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICw1HN%2FO6HLy91%2BkhoUW3hpaT49dNiUOdZRXmdU6pmtPAiBUGwJhv6tbe%2F58pgEOwvEyvkHvjf8GWCS3QHWfTY%2FsKyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMsp7JJso76WhMBiuHKtwDHL2CVfC71JTAkJVcDsKITnzcpJ%2FuH7ut4kYHBC%2F%2FWbtCV4JvM%2Fimf%2FzR26L8mJVonsPhhMYJMVEO0JLCUjvSnUEoafShxtZiGhEUwgu%2Fvxam3I%2B70NfIc6%2B%2ByX4zpH4OC4o5L45bY%2BnvbWGSfSbFzQ3t9DrTUf7U1JyfiaZoUTi3wLtZSiYMq3K%2BmKH1eF2bCQ7wHSx3RjzAUUeTTp%2BEQ8NJJEGgqR3iQ0sWI3W07T9hla%2B5UM%2F06g12RnNh49gptn%2B016HrMNxVBci%2FpcqoMDEOBKSucxQB5jiqLMUu0Jbrw4sq%2BYQ9dwHNY5ZKM6Ro0G2bvklf%2FZSkR3%2BAH4xiwOiMAbn26t3FCQfmp5cp%2B0%2FhoYxbijvFrWx9%2Fqvzr8zbFIWmgwrs4IWFj3yqPwkswe84TKOsfgfTxlcAkV55TN%2B5Kva%2FD2U86CMhyiI476x2fow6RIX74bOdTxgbHsz2Mb9qVRjhcEnX7%2Bknvfb9UK0gostPS6%2FMiStvSxlW3ZPxqA50uL8CfYfzVs3LOS6sMae7ZQ5Ap4vFoEChkPwORSc9F%2BwX2d7oaqCfo5rjGUJFpDbWbKC6FXctoKQautpcKPlVmxiDEVpCgOyXdXUSKfRgiDjDsUCoFqIU0j8w1IW6wgY6pgE8tuMoU5AbwjdrIFI6b0qWwcw2zJQE1XcTOcadj%2B7gcAuJbOcIZu1XB2Zi1Pxa44CHDdaKcxoj7rj11hKQnlnHiGgiqC5G9cHoBJbbaqvNjupCUSdz61SFMJnQeqf47n2V%2FI57aU%2FLvZxnMhn93s%2BDrfkfuXLfBOokynONC8baedQGJffuC69R%2BQpCxlOfNpIHtYdXspYPKBLsDIFrPpRfkzbqFjA9&X-Amz-Signature=a9d97859e93a5d840ec6eee5ab4a6b4b3fc1f200d14535e9030810ad1e264c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
