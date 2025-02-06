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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MGVTLBB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIEHy4epPMGUdYOvskA031ShAK2MLHE9IsItjxnHdifeQAiAMwDsbFyfZwypNgbX0xeLOf4pAtz6Ak%2F%2FJGv2NOqeUfSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMwmXXZMPQ%2FZOhMoHrKtwDZx7%2FEtwjDjh8fanPfpd6CPdCxC0v7BajXZkiLPyVGCx5RAfbSKESnJGx3qEDRwcPD7xqv978RzdkVUOWIevR37L9m6Qn%2BMv5X%2BDij%2FE5XN7Mwykv3dOrGQ%2BOYm7AbptZ4%2FDZ2y7fG9PRhuccr7rPcNyl18%2FymD3Qb1OohSPwtq47jmiD%2BhZ%2FK3sIWZCIUy2Hwj07nyMMVNLX9q0Ds%2FGSegbQKPJAuto0jqj6lAmSOXsibS9miWufuDG8jhkcH1dfZewN%2BTSwdWCHFCjO%2FIWe56WmOwZ9Pj8qycAcQiU%2FN%2BfI3CbATgo3UCcyuACeZ%2BxgV8EwJAczPFxacxIiJksK5AJBJpJk2pzilAq0hh7GR1ZwyUSfsO4x9HvzwKoglx9Bptf4PVSjvKUAKAnY9Fd7iV0kkPXZV52KXvqy0%2FBR68Rpptt%2BA5u2xSu1LOJ%2FpjQ1VrUXFPXRHanriKgM24kljvGK4LsbppsiesuVUNJfPmyeud2fmsqiVNY%2F20eo2XsbykNZLybkJvLPOO2z50mHBUUjdxzbPBNbt5%2FkS8aF1SYKxf6A6bP1QoGjp2IPa1WH8ajTSP8gXbe%2B0NbXVDqp2IwZAFdMlTjbXjpCs63DystkZDAW8LeL8%2Fy1lLYwx%2BGQvQY6pgEKZwTJ0pUH1ZdJuBynvVVTKY0NyZQyo6LNtPI1tKUGr6kBM2NYqSS0OKZHOdq4W1ME%2B6Ig1zIFLUb2fNiDAvubRB2t85G9LaPP9kc8V8nGkgMZ6s8DLOsekJ2F1R%2FHP9NNWV6fGte8opZd1D%2FjxdwTiJx%2BfYg%2FCPJ3ihskw1%2BAioV0BqjHH7JhVh42vJEBRjAGXHLi4BVtOtrOu%2FK3YgScBdjODSP%2B&X-Amz-Signature=3c1af8eadaa5f66958e523037dda6e6634a77896d7b5941748920a599736e88f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHQHGYQ%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T040942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIG3ZDvrY%2Bs6nqVww6Qj3I4moPjNGZDWy9pPjzYfdP5%2BvAiEA5ruhX7xuFKjv9%2FEaESLJKtlSixQx5Qo7Z4p1sLZ%2BK%2FEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF1lerGmcRDWUpjXHyrcA13S%2FIBN4e51sKSePOUfgt0hNGZIzuTbnRBYJyPZIgCVSDBqmsuZrpgQZqSh9aUWyXn3NR4GuqQ%2BPdPYnMax9iQAaowsZz3WApxjbYJVgcRzXAvu%2Byph9BEGjUPO1DHPdxtjriGvu8R6QIbpDQTvMqGFwNprKreGPnDHKE9Jsw3ptWX2xE7wytOgX6p1vSZz0t0kpER3ROxS1R%2BXT3dAA1sf6YDh8Ln9TDS4MSWt48K%2B3NT58UQhlnws6a9TXD5jAhS6mIk0joAdBcetLEZ1DIweithJS4ao54fAPMRbWOb65roSjHp5o0iK6ebpB0gy2cCqGYnKmeUqd1DzrQ0MTNn8hGNhulIMwTlq8j4KE7DMcUipe3bDR%2FMPj86x1vBnfFgssiv9FMWYNo%2Fp%2BqIxpAsg7IbaZJKhFf8DUQuzc9xXLZaU1hbgP7ivQdk3HadVdkeBTddhq3jzJs%2FTp1XWuJ%2F35hzg0Azh9MD%2FkCzO3fsIJsB0FPOVGjjiK8%2BnSgABSQjKfF5YGbWE02xbD9O0X74ZEzHxwHxIZbM9k4FHPR695UGDHs1bKjWZnP%2BNzeIqMMxVQejsj%2FPwQa4%2FQ5x2gya5xbdemsPZU7xfg3pzxjJ98tMV77vQr9cZKxN6MMvgkL0GOqUB5B4YbOLHFqX203jtK%2FfAhgUklMchQu50OSx2F3b7mYxL72nufrbY%2FKSQl3pWRk848Uyc3xh6EK5Dbk4FtqMFwep9LJkwjr15GfDX6QS2C%2FNPbKHyk72JXwFo2rF4w3RVXxqa3yXkGyVFT65gfU87kvx3Jh9mM6NgTCrU74eiHpZB07Ciql%2FNhIHJGqoKQM%2F2pLk8Xak7z%2BTAFvV7yV6R3UvWNQiV&X-Amz-Signature=aa9c42f72c3b4e68bb7209635aa68fc571a6ac4c3f264c68ee119d09b188cb32&X-Amz-SignedHeaders=host&x-id=GetObject)

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
