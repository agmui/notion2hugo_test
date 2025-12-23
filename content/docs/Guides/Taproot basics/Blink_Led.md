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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY4JLXOY%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIGyc3ngm%2F01GlM%2FRc%2Fm9Bwh9KAeK86p%2BKJdySSHea1BCAiBXNEiz%2B39oCRi161JoJP0Upq1PI4qMAmCZjKlwr%2By3jCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMr7A3zjR4Of6j5yIXKtwDckymzVpPMRqzc8D9EriXaNBdSQ%2BjgYbohY0%2ByyNwV8JU3V4iQtn1ASCzk5LyEZPSNTnsZ4OTMkxVHS3tqEF%2BAoL0IfjPqHTpMPuets8aG1%2FtT1Hg29HznaFOToZDLyC9fXw5MneCZTh1xh3zhJqj5ZLrFpeckCCJtSZYLvEEEPgWhy4iR%2FNXy8nQB1%2FLY8%2FbiQd2ZUlOWjUoScu24KbKq0YMNfi797JmQBwyCVXSRJeRtuO0XnJkAwI78woXM%2BaOK5yPEdYInFsom8ftvXoVGPRlCYH6BAm35LnnEPOfxgSZ3A2QS7a7ecpTLyAx3ijd70a0%2FtKCL%2FnC63ICuK3kx6N%2BwYJKUaNX91XkAovkY9QajrvV3crOvHHkay%2B6QM6lwCXk9UIyRA4C%2BlyDZrAYqJMegcjCcX1GRO09yMZdQpX9E9d9SUKacE7RAHdg3%2BtIwPgkVd1JhOI5S%2BHbtK3%2BxpmF7oQr97spbIQ4dP%2BzuY%2FkEjRHzQVEN4nXTiU%2B3KTkza85ZiSe4EsrnLigUnV%2FHlhgxtKcVm8J3I%2B3M9ozod58a7U6zUu6tMJKuwK%2Fg4Z7nnQVBOu90UR3xMveICQhpQdzKP5VviS4ZZOjb8TKkI9A7Nls5USZ3SGLajowueGnygY6pgG5KBUTIk5gC0PH%2FeOwWqFqXU2anHeemjOK2RfQIjlYIMw9usM3esVgGyG6P%2FSlbqeTevjjgn0TsKy10lTNQ1jXZ4uMJzl9MKNVFEmPrIpct2hL7zsuALIP5JVky7qYVjg6ed12WUWkuJ35rwGdnhCdvE0FhkbUDx3KiEkAHXlfjAJGcXwFQK7Dud7I%2BDSSzIHUdCWvhJkC1d7GOh90qWcTwaW3yEK8&X-Amz-Signature=c37d154a475ca5ebd2447ca8f5d5928ecdaec2c0a7b8ecfd2e03639ff7e40141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHC3BA4U%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCfIN3VtCz8xt1wD8xtZzldjOgxVbGvJrWjix3gsta4egIgC1skyKwhe4%2F7fZOx9IVZfWKnU98TWXJCjW0yPvJ6J9Aq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDD%2FXm8utt6kChPpywSrcA6Uf6NRHkKLvMHXM%2BM%2BP67p43bOqejQBQxJG9L0UeHsTzVIyx9opehlyxThkzZwhEbnqsKIRmklxe71tGaz7hBigvKg3LYaqzbbs5%2B%2BNevd5aPAsj8Kf2xIPR2ucY1EiNQD5waoTk6%2BIN7AFo6XkIwWYYRNbxHBZ72CO4eUrPHRcIoJiM9cuQWDAg1OqOTmUtxK4Rz0hL%2B7L2z%2BRcuOUl3VulyK7GDtay9ou%2BJRgQsuyA1D8gTlrX7DqlRxkp78JLsC%2B9yLWnOWjv6OH92EhK1frr4xk15qrtUQ1di1Tzzheo5XMqowO%2BbozAOtC4kI2kbA%2BPLMDDWyUYSIZy7i9QDepV8iR8O1ahh3HNY%2FRiIW6PVpDCIXzxdptUPmz14y60viD%2BEbusk6GtQ7tl9Y%2F9hX0DUe5gUb3yMgXJ8ZDZrgM%2B56Zc6rSA8piWtF9AI5ymJrg69RtB1yCF%2FyjXdJX5I3SXd4DnmtqWbtX1j%2FqHj0IZnV13EFQpZW11FMwlKOy6UWFC18fY%2FDxKMko4FURrTD900YdDDElGDUGGXTYC%2Fawi38JwpobjjiarJFhryk9rtKFQqAh%2FwBAEPf%2B9um8nNhZ%2BwLvCL3M5L7DtqLknrwNR8mzUvJtCJO075QEMKvhp8oGOqUBImEitk%2FiBnUsOj4VFCC%2BqbTzjwZ9xoG0Q3KzGfAhLS4qGpItuesT5qs%2Fp%2BlC1S%2FNOWqMkDBi4ndNf4GEWc%2BBdM4sforrBuQZn3tPJ7Sj13EnMr5SBImFbrbIu50gmqAN%2FIzlFhN7tAlSQ7SzEQ1apUJUOG1j5cmIbCvhSk%2F5v59Lk8eCHVQt%2BHA42VK6LUGIZts6ETIIGOBdBeRX7y%2FA%2FyN%2FE69B&X-Amz-Signature=1331935a78bdb665663a8e2f1feea0c1e3d2b094fbedbb2f22e9e9852a690c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
