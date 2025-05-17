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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633YQ7GRF%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA0kiB0s36EvZZhM2T%2BBRaurufIsAvi3lFkEwQ0nnasEAiEAueR%2BooTH3cPP%2BRoEUqDFKcwSn4xb3xtEA54xKSXGY8wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIrjb6GZOHMNISmZnCrcA3GkqOdR8L3KMJlx2PdrHmtkURnOT%2FxYOuf3nV75911g1PVNUhbMtvayqlxKCMYxsJsowM7YUGD3O6FygtH5oCUF8mgBfooxzJL6JFDyVXuW7Yqa1Xx6qdwbefweFV60699ywfoIujB8rs8euO%2Fa7iagW7r%2FT%2FoNisQ3Yrt10srW88PisrOex1frsgCAKhzbxoQgMafpg9Dn4H1BtIQowlF44dA3OJASC%2Bs%2F8JObYGO4BWU3QY2vYiB169Etw7cxeMwoS3pEMxxnKLd%2FG2N85zXCGBXyzs2j2x4hQgkJ0HTbV8kz3LTBamq%2F7nVIE4PpfdY6q0kGosqoOYVeZkUWhAzEjGR4m489VkFP8Z3RT%2Bnh6tBnz7yxzEOL1cjVxvmUBoj4Hw%2Bc4cWFeEMBQ6ndwPQOgmcjEqri6ejxIiIevCAlwWPJDFumJnIHZJsDhWrVtR5xVkfjMEntHDbqD%2FzFH33pnuuAAGWBK7y53N0IYc2g6Gqr2nKdUD8oY8hN3FPpetC5HRM5jVslB%2BGqeOuMiq7mhbMCzNNK%2FHv1exO352POeaaMewgko4Wwe3ThiJf6EqBRFYYJa%2Bn%2BxfqveQHwA3w2nZ0dI0D%2BP03FkimJqHMSSXXWpxlK%2B8WFFZaQMJDcn8EGOqUBn6QF%2F04JVcZJpe2rlGP5PhwCm6d5REhb4i5uLi%2BMp0Uj08qt4IO6xx%2FQ9PsN2gYHXyRWH5jun4IOmrz%2FxPYpBRVBjl1OhuLUD6QwX3XhfPU%2FBS6StxXHVbHxVnhhi%2BL4YqXcWAOzMkOTEfW9Bj7Udm1l%2Fnn58qEemLq72kihrbUTzrlz%2BWJVzV7t75g7Tay%2Bz3QVDEP2lv54s5qZ4oOJEOnAzf%2Bc&X-Amz-Signature=cda74168b02a24dc56b209aaca2370ceefb8465bfbf034db7f89507984e341f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XELLPOZP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9wjt9EaSe1T2JHecb0re3yzCuB0qQ%2Bp01QMVK382gZQIhAK2KEBUTgYCQijGQcdlt887cuLyNny%2FyzK9p1iRXqtmhKv8DCFMQABoMNjM3NDIzMTgzODA1Igw54DgQ2nUmYX%2FmFjUq3AP3fxdoydFVQIx2rkwVs0zzN2EKPs1oJlr%2BjyjVcZA%2Fkve1LjVTQdacXHxNKXictoKLzhuuHJAwID1tfJyMGnXo9aUIaqfullrN8nCD6RTBMSvKuCrt7JYUBLbBKn72w9AZZC6bssmNyJMm9Ejsxn6JTUYNTDctrK4glo79Gclh8nPXucbiKLd%2BsZJAZ0hz6c%2F7DnvHU5qLE6zpGDzufqbqUjYgVYtWQVv0ecvmHbeakxJCAfwdp8n%2FQSQi5Ee5K47p5mo6gmzikKgcVNLuO3vZo1Fj1x7sJfP77kFptEIJYDnyYzXTgFpXieEUCYvE1PwOriM6cMhbgLoAZNjqGnXc%2BYTmE44m3Zo8cA7ZXYTnuDgKxaNf5nokcX5YwO6yiaR4r1c1l6%2BEmSgHPF9Phs4XJRoBmhHr6OvuRtWZhfjI07eU6IBkEPlPg6%2BYoSjfnr1F7Vras4jNDJppcalP6AOwI8WoZoj0SUWEV9syArJ8DP%2F27XUuQ6s3P7z4zEtntuTxq1bykfy2WrZlgzRLsan%2BwmjT4SYtyVaEcNl4%2F525iIeiilrGwVQS6whCru8B7Rkxj%2BzoIPKt76ECr9dTxeN7UWBgdwzprulhp%2BGWgSXIbWeD8V%2BPWtqkNONJvzDJ3J%2FBBjqkAWE5BLtpyGZ4DatxaKZK5OmeatnLtZ9j9GrFGaikSQMxyPLu4mxUgm4X90TeMk8mpe0MuTxTM%2BJBNt3qojcIsLr750jAgXp4DsJmqkKv5h7lCKpyOPZCk%2Fld55vQAE9zPZpVaxztfTrW7DXKxdwXvY7v10VZVh7%2Bkm7Qqt70r9m3%2FadqRJA%2Buu4AvpIitw9ox1A3jkW5FhC59rFxaFMaDCeMWQR5&X-Amz-Signature=f26aaf1c77ac69ff37991de9d498231ada59598e7670cf0b4cdfc1617029b26d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
