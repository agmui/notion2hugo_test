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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNMUKT6A%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD6FjuDBJT5H%2BqEChacHLcyJZdnpZ9RkSTya08amPtafQIhAJ4KZ6wZtwxwX3wUlDILK732Tyhjxfpuh52Ud3IgBceMKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFu5IuXjcMDNA1oagq3ANPsJANJaRUYRxeVnTSlMycgRhJ36gY8Fqw3oDArjcp5HO0EPp8yEr5i5oI8tPwQhi%2ByGsZv5aDU1WyrjQJj73hGAjgHAdQweFLwR%2F4yN%2FVJD3O4vv6aWBmZj85QJYJFwKKihjrn4Zs03Mq2E%2FQpvuc%2FMOgN0M%2FdM37yH2yxU61BNgkx6VVwlHKmOb2fdzlGL5Ys%2FTopYF5%2FvQcDNB5ky8elRSvOeNDYw9hbnq1GSPJDDpEWLfEzk5RC1i%2F2Pkx5kEhA3v%2FejEOvDIVoFqKiuKE2coS8gEw2KWQQaIDQa2u0zH%2BQTAgmhXwFQ%2F8CWHTAq0gdzmFojszhZENuwOt2ROBEUTs8rPwPJqS8i1CZIM1jaoW3N%2B2wn6XQExTr%2BtU87OxTGivSVh%2BzfOMwM7dajDjOcou%2B0XrcKQwxTTl5DO9BN8%2BniyCDrTNZvqtGmcRae41aoRsMfWDSGy6GXMxvmz3q0ZLQltaZqrXIqHDxuy52XInfLqvKKU16nPDwG000VkgVXcDHPwJB7yQsoWrg%2FRiJBTeI2gYX69pHYYfgnVYqfjYVTcwGKTcubBj1bmfyL54k6fNfwjBIF6d%2FqRSiPal4wL7m9lwyt6lcUvsp1xZYhy9gubpckkL7WybezCKx42%2BBjqkAZK84EDVyJMJt29BV%2FpVoggKtEgvpZC2e5it1ptbtJoVjaFlhgI8DieRkb9nyBrjPT0h8QP%2FPQYWZvTRXs4y9ufNdVVmyVZaO1cQMHLbs123G0qs6sL6blU0H8WYMdB0HSfMUN9o%2Fogop%2FEpw2jud1raZIDmHTH33x%2BmDrW5L50GGipTv%2Fl5B1d0d3HR2o%2BR52A3PPN4fKMu4d1YwSiFzHV4MjTR&X-Amz-Signature=c169b20d5552d4f488ed94add6c474ee671a9c88cf684a545386cfe7da9b8f91&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVFGTYT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIH6EKJ2RjaTtHK0Bg1Ac0ixf66uE5IY518uBhGJ%2BW6oJAiEA7TwO47v93IvBij9IDkKuPC6eo6EhFnC8%2BSwyvn4eCEsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI6IwXE%2B5CcprrevFyrcA9GY6UdNCwm4SVcoznFxFyLGhrlvdq6twgFnsqe%2FiKueKd3s4n8zA6%2F%2FoDjoqR3n%2FsyW8lhx%2FZJ5Ao8rOYqs8Nwapado8klB2fvBjRDglPx8oF6F6LKMNL6eZqkwW3XvpZeV14TJLOoGgvuAhRcwWI0a0WohSNGA1zMnyBCnViohgCXSZNHG7GXT%2Fet3aILEhw3%2BDh%2Bo5pqUSlo1pGBCAGZDa0OdFS0eGCdn0jx2F4axm3rrJLe%2BBZSMAHxp2HCMNmIf4HMURwezEdd1MsyAW4wXBIVsQ%2BeZNTRsmYkZv3jhswOU7k6CgTGqpa1W2KbOMfQbrYKtEGfJ7zimm36LCexcxuk9CVibmwOegRkZ5gn2QeXIVLbZnaPDCRJaQAHJmysKsimRrXzwFrJH%2By58VvsnaAfkJPNBPshAVEcg%2FHjU7mf2K4%2FWH52Ye9%2FUPqZ%2B2p%2F3iIId1KIr8JiTU%2FDhF3UFvrp6GpzCdz51G4Cwgb3lEQQYNU7qpApILkbFTZe4UQ3g2QzNChSzPsdTUXYLgIo5SFi%2BUgpkbC859953wa2DJpuxrXM%2F1S2k%2FYdROduoNJC9euQd98Z6%2BG2ji77NX9hdtW3%2B3j3d4qhPSsajwzwT%2B4QsBSRs9rKLpZBKMPfGjb4GOqUBic44IhdvYa%2BSAw%2BtenMQfuNeMFb35YUePCcUH5eMNsuMLS192j8er7Rwtx4isL6NKVu78UptQtJ5il68cP3KYIRcslSgMa806MqWmvpRsS9lRO8QN9k3pEh8mkzjQdGg9gZ3bCkdpQAS6woNg%2BZmaRd%2BM7jVhsjIhzVGih9zO7KEBslGtuCMT0Vasv3BUJKWsExKJkCxT6Owc%2BRJuZKawznIhTP9&X-Amz-Signature=fcda537232265eb92497daf995918808af59ce76f512ea43eaa81f41e2c56a68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
