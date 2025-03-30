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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7EU5G6%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDXRfEJL9zfWFYiH6NXcsceZmXXkK2G%2F%2FnjedS%2FJ105YwIhAPb9OSj%2BbBdmOq%2BtTgzC3ZyfrFgkyfxxHMdXkOMmcjbUKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1tMMjwaon5JlcChoq3APeUFLhvv6iw56wcpqgXncmZlCK1msvKBiVI1muFkh9r73fsZml4SiZdZ3vphSDkSDjxsiRLtV%2BDqQEenwxgSWk0w2G5XdTeUkFcvZKAISSct6uiK5zWDR%2FXauI4n1PRahJHCGfqFDS%2B3KLx1qbHvaf4llB5O6XjA0tBZT3CI475hNJyokbDFOK1VscAo%2BJP6TstX91Mf4lGBuhRr1X9l%2BbE4eMHmFfYyLUlH%2FbT%2FR1diXvudC0ZD2v%2BLoPuYRzCTORA6xJuGFFDkrM1s2U3pASSe%2FiSCXRzADT64yK06r7ipgoAzM4VuzeKlkYZK%2FDWmqKIvRSGYvQHduTWV9ft4YO95nguWQwl3W7tuTkTce6oA96Sm7kvHuNYOg3%2BFJITpuRt35ympBOROuReiWE7%2FwSv7zxKs70exdMGOk67YflZ4vuY3rht0oSWuKWpUKvk%2BiiI3tppZ%2FgUzXchZk7g%2BacVMTE3BtkfK79bOc0FWPM%2FijEQShnotMdTHVr%2BtLt0nUKN92fYQNIko2N3szh5ZEbIiQLgoRth6sCQVys2wereO3SS3RljgrgiQ4hR6nY3sxGoMocGwdHt3ej1lIMmpDPbCDF1C8FjS9382MCycqFWQi1i28tEFDEC1WvCTCI8KO%2FBjqkAb5eQmmGWRdgx6oZ8Y%2BTt0gM5BWjeHSJpdfQ0uy1ZQ9VNZeazABKa1bPbUcKYLW%2Fe1tynN5vbYOCXq6uqCHjljBIbE93Al4iN3jTmh7M4sryilABNo81bGkd7LkuZdK26bX%2F0lj%2FmbvAlmUYhTKtLii1hmkndxWNj8mTMy5KMqnBvVh7Su2vpp%2B3N%2Bc2a4ARcMRh8I2nZxu2IZScQxli5q7h67Mx&X-Amz-Signature=a65ad15d197349761dbf8c8fcad78550405e02378ba46ceb57a65681a0f0f4e3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BCP74YK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T131446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQD600dRnB89sl3g%2BNZmgsR4286yndwqbvj6WXBWh9W2sQIgLYmrHJLm%2Fub%2B54vqRALGniv5oZlSXIE9hCv0fCPUmh0qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrc%2FDizhoUvc7WaHSrcA8HN4jexQVQJQwKEEO7of3qeJMAQVNSiEfyWI8UNQD2kxud6wMbfZR3y%2BL%2B0J2mZOP8PlRcBwuvnA1kk5YFSa95riRxeI3V%2BBLr%2BeCxL3hrbIEd1Iarr2KYH%2Bc0Yugo8MndPEkB9YrLVZsstyYjBHYVgghyuEXkxNEE7VcjPEKcEl%2BPpPa0uZ2Zg9HO3aAXlnA7JX4NMnVwj4MVplk8mH0yglJADCXr79Ojj0TfhEkR84Pmeqb896Ryz1Lsc7wildGM086XVEeAQtEButP2LAcyfsNv%2B1TQmeP7beQgbRoOFQWD7s0W9GT76Y4o%2FfWmzenoVYq1LTuXbAbEiziYU0x%2Fg%2FL9vJf43Fk8xBLi8n%2B5XzQDRit%2FXCvc7FBjMLekd8tWEbnmJ4FPHfwn6xWm%2FIq7CezOSfyL7KaW1wgGgWIJ8OK%2FjuymRM6k%2Fi84E%2FOciqDcxSbWqAMrE%2Bsj46LXvcM5w4tnJxKQnQbPydUfwgyLoEw%2Ffsl82lEBZRjXyH343k4xQtPnwaWZp7C1fZ27JWL7BGkCcq3SKbFPIs0FiOKHbIERWgEBrvt%2FX8m5bE%2FtfVmJuhLeuiDltucOS3%2BJOmm%2FtdwkutSp6z6WfKP%2FruzgGxE%2BBVjz5AA3%2B9dmuMPDvo78GOqUByrK%2FxtkO%2BsCHYR4UBhQfo1wLqA1BEgWyLt4ieukEX0lFAZoQ7ZN2BqQj%2BICD0%2BILUiw0buz0hOf6mFT93mEVdiuFOB3olTr66bxFKC1JU8EAYR6pq73eLCKqlGdZXYmOjv%2FO7rJ2xmYYOLDiXlEL1NewI5fzdAomsB1bGhQtwQmFJEmeja6k355%2FFeXrCt3wYBC3uEfDg8H0Hn5Aq6yjexfA%2Ft17&X-Amz-Signature=dcd0ccedece5155c25f70ffa08d347a52b399c0b68a9d43de54a565a99be2c0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
