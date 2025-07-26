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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZBXWGPJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDoqQbv4HsZQXWEJcCwFDg%2BKaRLRbz6AoEA5Dx%2BzUe5KwIgPS33MvUyYozxJywTPKcCxEumgAg1Ot6cDzlMU8eJr%2FEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDD%2FkEPXdcRPKs7zWZyrcA%2FxMRjr48aMYp7khkb7Wq64M0%2F4nbvAVLYK1NKiTxs2P%2FH6ZzCP1l4FAZK6hfCGL%2FjvUjvhcZiWwznIpAerK1OMAFhE%2BQnbosGZNJkikyRNwJanA0yCKsr7eRpUBeF9ziuJavcIJbQ2U1ccp8UC0S5HryaY0tCZtRRZFnS2SfsEJQcjC7972aMqLd%2BM%2BwwSsAWZEHqCzVI31TZXUIZoy%2Br1BFPCb%2BsnTQHQZT2GQ8DiO9n1nliMDeUGa1niDBuz6e602HZJX2fVB5UZXnf%2Fa35Y2anwwrjGcoutNzoOV4g2a7wn5U5NDzkl5Ij9dRb0dq1ek3WqdI9pmUR48C8Ybb3XUdkAcLNYyrRX4hbqC0mX9zPl6EYCK1sjoraSyPp68jAVGRzBzne1kJLC%2BJqgSSkdS67siJ1omlKebH1mrFzEyNwELqAKU5REvC%2FiTmZq9SCiJ9O0QSbWelAa5lMVfa8UvYbIO5hYvwNobLZf8rlNjh5Woek%2F3zRyfuCsivyFIMvnHIUogD1Q4AAgBjkWYfini6uNuXhqY9Oi1kt6iWBflEVTsx4GUpncU0%2FcxfnvruRQ2trJqEBiWuoiw6X6mQ3v4%2B64%2F9LpE55h3oM7CzJGOY1gRPjPh2IfcKmPZMNr%2FlMQGOqUBgTBC2qxvkurDPqO6r61P5Ce3Q7PooWTulCOjJ%2B%2FXmoxqoEYrQzCwm1K0YKeVzFrhVhQk2nTMv6fEvKhLqtpPrhb5cE3uA7aDFIm%2Fw%2BKVcnUxFSfodhQiGqSZ8ADI8rZjc8v9%2FwcxUBUW%2B1MjsUFSFJcBTEvdr5kGGcsEJ1BIs25Go7HPHqe7LWZlJX13wwC%2FGa%2FbbS%2F4%2BC2%2FviDv8neOlJrCY2DV&X-Amz-Signature=ae0c18c73d06d38c67ca083fe5a42a3b915084a29e94b8d74d8ad7252e3eeb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC7PNBCN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQCetJxmxyi55kNFbrvLAlgOjzNcOispijhkMY55BeLu9QIgEywNZnp5m1H%2BJJlaLOwUs%2Bx4CM0ZfHsca6r8DBDyHyAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK1yH3f0GcBG9khoZyrcA3KrNnbn4%2B%2F8DTfMTr73AzI%2FkRMmNG5koeuxKyMNmeTvSwc%2F%2FxgjSD%2FJaEXOMor5ffThJ6a3kxq0J31KCjwmvXWB2Fki6bID1J9uaie%2BpBW0uKePAnmIk2YZ%2B57RQGfSN40rRwXsDWaXYCv9hsfNpFqpJ7U0UWKaE6Ve84li8fXrfY4F2d82nLGbVgv9iwWRLwyECTQ06g3nYuIKY8M%2FXgBp6l0YGyHYQzBfAWB2HRjJVsQDvS9%2BmS1FzVjn5pTAfYGKTY7lOxWm%2BZKZ29ug%2B2EiBsSaKLufgMyR0M5rC8Kc%2FqwfAs50kYa2mceqyHMJ%2FXvkLaiDJfR38SpfL3ERvZVZ%2BUy0mgxu7sx7JPdkUhxTJn1tkpXu8ZRm4IhFYQpa1iD8Iqshx5z0d7pKLS6s0q5cZa2OJuLNI4gaTnP07MSwDUPdlhAFb8qIYkeRh7y%2Bz4NKEs5Q5RdhCEDP2hd7dkFlke9jfC7lUspbUxBa7oFQb0%2B7Hqh7Jm8HpEj3cY1jorT6rR87Xjvk8696S3IB5H59ujNbqvf%2BK2syQ6BJbn0rowJKTLe9fmda2I2LFgogQLlTdHmy8%2BkDNY6EwRKHiMoFHbEPabe%2BKnCyQ5MazttOf3X0jx4OnuRLtdvkMNr%2FlMQGOqUBNEkottOdvtll%2FVj2HlexCiIiBHu03VDSwP0xH0Iu6MEf40fP%2BGkFWuE2gzSSAL%2B%2B1oj8DV3VSclV1VzktV851dY2eIpZpHpxJqi5gAsI8QWLULFe92rhkvo%2FXkQaIr6sSzBInBLoHR0mrNvgrrNY510Sm9QaG78lWq%2FsS9teW8MLAtsTXunNrdFCPqt7npGet%2BmFxDDF8FqyWHeqjVdvnRnvBWwi&X-Amz-Signature=b98373839f32cff6a8fac67ae676d19c9b6433187014ce6a8cf93bf9168eb579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
