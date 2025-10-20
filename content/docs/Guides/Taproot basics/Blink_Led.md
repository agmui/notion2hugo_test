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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCDUGNNA%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIEsTk5B2j5D4C3IIOOhbASQlSHpZ%2FZ0m8WrclamBtvriAiB1yE7uIufvm0ZT4dEq2RTiyU9z97QYgNRGiLoL%2FGUFuiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbKKyK8LNcAEoHB%2F8KtwDH6ZZ1i1lcAWpI5Jkym%2FAXuPMnSCW%2BBLyEQGjWCnO%2BvR0WtyqbAtB5Ub%2FdPbzUsr8f0vl4whnZe3JTyCVqgUharwhdwiApR2I9f7jzfYNWnk1AmvqFxY%2BmG6f1qVgsgSzvLtr1umhhi3HPXWpQYhyS9JZeWSVraelt%2BKQ0WjfTF0KEQpdGFnUO7OWaASI07Evx5IUL8Hs9nPusSNqzYDb3BhyRQ2RSNCWl7WIqPYUXy395OMgwGAcTZIchRSbY7CKiejq%2BPBXBRmjQmgTqy4hxYyLfpRoitCvUWi%2FYPPj9u95SGisqtmfvwP%2FS2gx3iy%2FhlgcIxbtNHhCEJ18FaQiXO80cI2%2FPaJy1slJ8CrZCDchlMG%2Fk685p6git%2FfEfxeb%2F5M5o87ONrMkt47i3eKOQn%2FX4LvxGKPf2%2FbNStL2%2Faazysu40ElckAG0Ih%2F9OmHDXRblG%2B%2F7fd28q3uJyxXaFo%2BuYWZNGVj%2FwcwZaKQoWFZTf55ZIAqaP7Ns7yHhXSus1LXqYmpFC4mSlwId%2BjDGGgXOhNZMf4CqUlqvyFEWVP%2FZ03hHDSufOAZEGw47qjusMt1l3yT%2F94jC63FPK1TNDMRbO77gflfi65HyYJPjq%2FHdfQqpS5fAxwt3CqYw%2FI%2FWxwY6pgHzHsAfEX3brsnhm1vq5lesbhZ2Z2uY%2FG0iWV4P9eNz49wtjeWME2tbZVn9dMWTrX7pc37kVRQ3T1FGCNBwBE7hg7RCJgfHxfCpp9WK3pRrOeEeDbhxBLnYiY%2FwsF6qAw4cUlsUa7m2ZmaviYf56Vz41rigPvlxq8VlHC28K82uON2ua%2FgVUTIroWLSaaQooMxg%2Bl8CeKwhlepziy9i6%2FiolSUEWSKT&X-Amz-Signature=01be9f85d9dbebd793683bad4dd6737cedbf7ddd1d26993afea3cc484c0cc878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666U5QVVOW%2F20251020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251020T014033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCw13kq3g0ngzR6k4MDoy3iTMIiNYndNDnaHncIBaViPgIgZZ5efXPdKfasgYFZOdN%2FH7s1YivxQhkvnefe6wkYnu8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNONq9WrJZOCQHsNQCrcA8HeTy5%2BKqnpFgSJW7%2BwDqR4XASIdCw3FEPiC34E3pDxIXxtudHWLrs65cJNUPjs7EtjvddS9Hf961YKLhiiq2HJ40r8AeNiVKzZEk6f89d50tvjKpam91etPvezj1zkUPPPgilKPesyXUAh0s9VzyL00EurtTviPKTso%2B0j0Jb6QtouVI2nqvcPVuNIeFHn9sx%2BUdj00TGmFS3yDgTAJdAJGIwF%2FyOtybrTaFapjgdohhqa4LnRQr2%2BPXcILa1tOi2orVKB9VvEE66YQRoqOPviX802ku8q1e5%2FQTPs71OKxPKyBJ4rkltTugOfKA9L%2BPGVoAZuVsHn7kywzyh2CljDY4QCj%2FXi0viohhtx2gYDIJdEYimlEG%2FwZrQ4WytuG7LKrljjL3wpWKHN4QvXlq9SJranuSp0e6TprZ8vfNcdiZ4dbA%2BBoJkYv%2BRxIGzxBT8%2FBmxA9c3kZg9G0UlXbpZe2FRcgjUhEBfnP1P2bdskOQsKaabnraC4B7EGDADUx1uCzMlqTiOmD7MLJbhTb7A5AnhCt19%2BvyyEwBvuBF6cBFm6JV1fnz18wdretHv01irTPFJi6VouulUYe729kFCfaJsU3za0osZdJosFBrpHKSPD9Uy7ffbBwlSQMKOL1scGOqUB9Bizkwi6NpQZ5LNBuFYqQe9Ty%2BzVZrZugokRYixAaFprdndplkdtVKvPZ6GIQBAt5uEWHOndlN8MDq6Rrv9W4EKPYZcWP1%2Fsw%2B%2B51thAOzz44k%2BwE3O5CXgmir2qkheKz6sPkriGGHqKH6yvHnJ518nU1xS0BGhglO9j72kMdUxnfoS22KBNM3WXoDB64ZPx7NgNIJX7s9f6NZXGurJufiFemnMA&X-Amz-Signature=14a1b8838faf3f0d3092a31ba0e2b4b531a8d7c341184b655829a554529bd0d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
