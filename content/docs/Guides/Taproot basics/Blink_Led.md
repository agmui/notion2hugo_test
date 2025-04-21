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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSWNELCU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD8oIds4c0WaCE6SDHhmaR9Btwc8Wwn7ZEFnN5jpQQhSQIhAPN79%2Fi6aIy7s8zickbMDEaFNw9OrTtie6%2BIq5lvjin1KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIjcr0DNerUeCVLsgq3AOj%2BRsxpjw21ARv5ARzwZ%2FMTot5kGsyk05boEZFWDRzN2l%2BtqIG8U5Uh7RbUSsHFlZvtqvD5T7StJA3%2BsxrjHL6MKl6FBH3SyZaUx%2BGaISABdTQYZ0cXYb1%2BOkv1397whDY%2B%2FvYS2Xt%2Fu3NdI%2FvA7bSPn4RoKtCgLQryo1HRRkrsFoUeHCrYC1lWoQ1A1lwiLgbXNbROcbnBajueRvhVt5bDiMptdJOT5Q5oDQFdyYla%2FdEwyFNQ3VW6TEAz0YS72KnAb7%2Bc5QQnoH2Od%2FVbkcfGxVLaepCmIPtn1y7bv%2FlYmdE5sVUyEOEQ4TSmGRcWAzUN5MQJP%2Bp%2BH09OXEzm5lXX89tmW18wRu13qXYdI0RdOj2la1ZFOT6A2ZoptMu8v3Oyvb7SeVuae0UmVuS47Pa2C38EjC20mrzdKbD5Er6ufsA0M%2Bis4MmzIJFxzfOXWQR%2BHrMD%2B%2Bc9wxgNx82fpGgSXjtSMCO%2Fy0R6TNG1uN2qHfwTCJeuc4vcNYQ6Y96SVKxOJQi0w8VNh%2BdEjD9iSpOsdeoURJ7Zl7fgR7kB0sCB7h%2BD60qvUGXdgpWIny9SCmHcghEzKwjb4gVNZ24VFd0eDhnURl7WxTaZG8wDqD%2Fln%2FzvkCr9Bq226CWXjD4kZfABjqkAetpMwiHWBzcWdZ09ElDUJ2onlG3EosXWq1zuFWwfYawtiNYyrMKQyq4XGZvtP1zp9Cp7UWhtYjbcm2oPP3dVRM0L9By%2FFJN4eVi3wTTpK9jC0rXIj5KNEOqqns3pWvA5wSp3GPSWD%2Bd1KEc9oPJw5sItey47nQRTsKmdtJ4N63lIg51fuIC1Q5jOyo5uHoKXiLQ46s8MJzgcVM0okIC1pkcUt9B&X-Amz-Signature=437cda55819f926e7a135cacdfbd813ad248cbcfc9b7ac023b760e9d2ab580a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XHQDFPU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFxN%2FnnPZO1yg%2BMVwPKhPfYPGlkNAjAYzi0OJVJmBlngIgQ3OnMfci9%2BYBGf%2FV6bhLEsh119%2FyAVaB9aqPUxZKlWAqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4EFn9XckR%2FtaTeoircA4%2FwOXv5GGsTLqj1DNjnSN6AD4IBFoXivMEh5ubCkpiEwxIJr2rhDBfkBEzAFhzf5F1gKsCw6lHmYXTqiMU2mEL6GVli5uOekUmSkZkDa0KkQ1k5M5cocpq89YbGMI4hBjaXpSl%2Fp4y4rJNm%2F6K5sCb1kCZoGrOF7SvD7QXsMNB4LNZ1oiZK8hq4W8GggTgEB9yZ9N%2BLr%2FrhXz3QNGRJzkg5v8WoiO8tvfE4ngDCQVUgoqPtAEDaaBiWRkIQsaRpK7K%2BKDrCDQ4d21gn0qhnn8GEtGEfja6gOnnLUAAMNfZ5bA3%2Fq6vVcaI7b17YBCMQhaV9ARpHttUefHSmKBVREtaE7iIBI21%2FLDCMFcUrf50PoMW7g3vQ96fH7fhB9FPnMfBllURNNhA25LHI7OKzqwxuc6dPIbp1Os8dI6GBCztyVidOi9Ho%2BqYXjFGnvEMWoQ%2BmLZDG8Nwc3JrjtNCMeORA5jMmAilXWr9wcc0%2BIIRx%2BopqL0VqYGgQH6qGQgAcMt7vFc9ASUMeeCTnNusmsvBRV%2Bp4X%2B9u1k1IVGdtYZ7IIe%2B1xRi9%2Bw39rgQw4adV9s1F3HsAaH4cqF2FHh6YofpgRozMZkziP%2F5Q2TzEvezKacnLkl9p7%2FSt%2BngmMOCAl8AGOqUBnQBKevtUCg0T4Jbw%2F6Jab4k3XQl%2BGQpV5SgJMKdKZ33WPlwTcyimMw1s2TsNGt9tYLf%2FqfFBMH5YOFtrBzDcyku3s%2FgYCpjSxyaUO%2Blhx%2BXwi7uO24qeUrt1alWqnwJ4lTb%2FfuxanO2%2B4VrS6RdWusLqJTQoDoRcExDBLehg%2B1FQlz3JEottVP1nGnbGYuD8fOv5BKYzVn4cKOcQFkZhzxJxsIlD&X-Amz-Signature=ffe9e8054212ba944d3c5f9b791b75db19dcdf633d1dde6ba093efb69bbcf9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
