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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SHVXMSG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArF2YRCZefYov4RPHyUOqIe9zjilpuM62ICR7ZwjeDqAiASrrtAndpXQRIzyy%2BNmas7YPT1pahlB5kRN3hA78uplSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKx1saX84mIZxwMYYKtwDfdO6PEGAslQpMhQ5y7foUDpR4gPBL87L8MGnSaF4qFbNMaiTtl%2BtBgv0Uw0v%2BGl5pIH8phISOqhajn0wL50N54QNL3ZuGAnhW3mR1mHiOzf5T2zHQKXGyQNJatizxKZnS%2BKS9klx4yP%2FApXEPAyJ8AdzuaO4gF91jayNDnHjl2npHsiwCspYqx8fuCSyx5%2Fkt9NQWD7rtwOPhzFQczlBvATJZVrAhZyVdOSNamMt5i65GBWy1rYR2kl5EUH3IgGF%2FBkmepi9tvK0etoQ6C8ji05SdTJr8taphHU%2B9P4%2BaOItXy1Z%2FG7aUVB3w%2B%2FPPsu9wFUj5IN%2FwTT4e6urf2WmSFlV6Tc6W6SqgkthsOo6nPHQYR9yZmqTeCf2lw%2BAWjSC70WEaHuhGr3VTU%2BqBxB%2FDqJyY3oIZCFPv0rODdHmZYEQSGUB8ieAGX8i3kByPiKNQjYxr8ZP8yynhqiKmf6%2BMLeLd86vZjegRsFiRU2SJ854imXRBuuPVpN3MrURDgHWM8Hlkn4uWpqY%2B4EFVOhBTFej5fIAs%2FwscvjdY8%2BvNkAEJ3W3Wo9dlpoViNQiHd98VG8AP3S%2BV0M5dYZIYbprE731LICNyN5CnwnL88wl86AlTApiOx0uVX4oUucw6KGgvQY6pgHcCYSnQdvgh0oQPWPwdl8rizVwqXEobMKGhB418uzHrkWj4t3yg2OasQzx1ej%2Fg6Nt0yy52zUIxaFF8S4Hyt8y5H%2FPdt6hB6KZr6NlnDSca5RWwKg124GdyqmVrY4vskFZmjg5XwEx2%2FAM%2BX8OQESGB4elemSLZia%2BkxOdpy9MoLeOQRiL2gWubn%2Fq4hjTBmzsvhWl2sBSopIP3omfOP4Kmc9pCP1n&X-Amz-Signature=1df6692801b005053b8c5b8f651514533ec0816842df1a0225db68f5717a03a9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675QOE2NI%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJ7tWQECU1Z1mZqHBExGGSTY%2BOZInWJBnQQeAkzTGoMwIgQyzgJYKYZvApblKlY73HSKues2O2YOHzm1qGAlsCKa4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOq9Gp8pyhr2%2FnPJhircA4bv9fLcLgXjfqKHGzf0tkTmLE%2FwGAZnxruaC6hcYgOxe%2FJ%2F1P8HQ93tehiDM9iDNIM3mA%2BMcvVLBgKEZrihZMKrAyms7WHem8eBmvuMUmVJuGFAwDGQMSOfeB7hh1j6KlYG33iCLNef%2Fhz08cPb%2FzOHmxYFRVr93PgwCzGDq9lo7PxDLDA5KyPSDovfnTn6qnm5cbw1nPkVWG9PIIhhrcf5BNkKctxurxeBc5Mq2maBNgxV4U8tGQCcbjNH%2FHnFu8oijbGrPRtxWp370jyWjSxKV6829EJ8ud3QiEYAwnLmtv%2Bk6ax3b5h5LtCRLZy1puEfeOFGl3A61Pbo06T8eYTTMmpm6LPG4EalebLBFmrBWdaoy1jm6rPP0ou%2FhhvJ7BMeGVc6aA5S%2F0Bs71eP1CEgiMsNTNGqLH%2FtaGOnWf3mBFnGsu01QKmXxLwxOggZ0F%2BY9JWnj6D4mZu20%2FrOG4D4hfShpbx909i2tbsGVIW9ec08q40e4X%2FCsJC8i%2BlKMs7%2F%2BQhnw0lDrjiKIycYykmJq%2FOt4YI8eRk8PcDlTklcsCdYjtY9uK4X%2FUZiJ%2FUqx9DSxLMdYJnrrD2AZ0j517EsXwfweOOge7i9vfA5RLcDhdc8tmwa9AbvNpNqMNWhoL0GOqUBDUu09ojcFAQ9%2BiG9cxFCfYdwXBuDhtuL4woA7X11XoG2S6pfGmMno0om6bQAYgV83cx72ZJo8SmhjRShtyGoOOsORUV0JhSkFl0%2FIxhyiSLUdVIRz7K8eN9P9mSWtMV%2FlQb1OjaHsniEYBeciuoaFiNHHjbrkn8A2l5q106M0wRL3jC0iE9808tzS5bCIQMlDZ6suWAcgAGKjno2JlXhZbUfbtvf&X-Amz-Signature=0fb9584bcf4e15d55a4204f697639d63a06ad6d90addc15b83e233066b9a37de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
