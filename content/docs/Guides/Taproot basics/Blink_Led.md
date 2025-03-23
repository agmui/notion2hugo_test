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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y36WNKRM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4mQHoa7caAyUOcGpIp6KNHHiaKmP5tdBcLlEINdsOSQIhAMlOLhptR4r0aW8WDDxfHmiD6x6BhQ9UNPjtwzwyDpbRKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQQxb8z0SH4%2BqFBNgq3APA%2BD7jEOmlJ8dbVZ524fLzUs1lDBGy7EWWd76IR5mT0w8%2FCEsHJKUyxmRqVARdrxXvO2U2oHXkJITO%2FqDvD9dK7QJVtjPk1mpDuNz5wfPPKCoPmuu9Ya604criApzo6bNWVcUUlKdo78RJ6y8lX3AQU5jwTs6tyiXLq7jAMwdqVTVdJe4Gfh%2B%2BFKjGA1GhlKjB9svamV%2Fs7ebX84H%2Byuli8IW69YuvCLe5RjrieQRESJJUy1suFUZ%2FcEZlW8eVnONZw1QAbF1FkYDu9HeF6EOuL%2B44f5MKN%2FQa9fXEe2KRku7%2BJKfRBqgYGgufaDao8em9zc7wbmFdBu6FasCGqLIyafCXyx57owNqpljs2j0QjoiPjOuHXR1luaPBI6onqeXivMWMku0MRgzvvEpPVGLqTLfAGXS%2FZxpP4qw3w89PfjqHX0D2HhAHrUlFb71XeD8ABC%2FhFSkMe%2BTU4s%2FPOAjeKGvlNw7Mqe5OnrVUGQ1tAmjlBsUzkUR1jDJxeZcHLdzBTpAnuw3vPFvRRxa62ohMH2ewtzzoOmbi%2BvYepI4HCVQBv9yp50a8O8%2B%2BkyY3bpM%2FeqcDo2wFeIV8GA1gNfw%2BLsDLqb6IernAcRYJ8m4aVpTphJXVUNjDKmpLpjCmy4G%2FBjqkAX28gLOshbzuiCICHtJaNXcv21wAjpK11Cj%2B6yacEsDET4064F9C%2BPXwhEXXyaRp59reyOnF6tti6O0MhR2nFuG5khlau0BMhcsJ4UPD7IbTsTqcOS0JrDUOaKaLj3lWKR9b5fmKMGhSCbDILfGTiZsNNTygzG7I9nemRZLMbdq5ormKl4HkPx2DY6nq8oqa9bZELTjyYQfjotPdctWd2Q%2Fjsau7&X-Amz-Signature=46b447db2b6c3340aa9033707d9535a7b4a175918df4341470fb175bb535eab0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XGGLB77%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T220658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO7H702v9jQqkKoYZnMeTeHembK2gzN4ph3NnmsiRXGAIgY3Q917UQhlvHvudLdFs9vtv4pVvzZXm3lW%2Bzslz%2BDuwqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFo3jc3aMsm0Fiw9yrcA8NzCDqzP5cJK9Vhb2%2BA0x37pCTE8q551v0ktf0nUQio%2FpbAvg8ovggsKTWDC%2BqFaaWEgEm3EzwC2ZaG%2BjOpCFErca9yxNVi8qorTb6mFtgNTIw7XokXmbZpd0J%2BsJqgeCu4T7%2FzbF437cwBTTwc957PMlYZ8HY2N3Wj%2B%2Fd5MB8oYhXS5uURcQNvOzso2OmrmCf02LsacqcAIUEfrH3OE9CJFvrRMXy4Ql%2B0bmy6gNyL5n1zVsgJNBi8tUd2qt4nc19FpSOid4c8P1jWkVE4Q9osiE5SoJnqHpZYlg7nDPCIEuYFz%2FSECVMMa5bVfrnVJCSUXKTsFGtJgpD8s%2BTv%2B4n8s4%2B5NBI0flNL3koYsvY%2FkUVju8xR2qPGwqd8c6pkzBhoYVCy2PQ83N59DT6DCCGp0RhGLDpKqwj%2FQukii8stXVc6AzEZTv19duPvs23JlU%2FuTy7zxRjOvJMgAJsgFXsrYT%2FelujupEdvoxHY8HySxOqZg58ZOHv%2FGzqkmUf3XxtpIEB08FnaGsRWgoW2xqvKiMkcWVV%2Fl%2BGFSx6Gov2VPMh3GtcB1vdYwACxFHzBrTqM0OneHsinKRCNYzH9GtohWdAs5Sb%2FP%2F3qZuzefdO38d6%2FOvUTKEa0oZ4pMObKgb8GOqUB%2FNcYGbSnSiAbbK8Gxi%2Br%2F4U%2FSgHjCqFCfZlxPVnsllrxbBQjW1Nt8VW1a5hpGNYLcKQwvUCfmo%2BChgp2tLXY1mwh%2BR7NEal4%2BGgOA98S0x94oKIFI%2BQL18%2F91rVeh6KVr8xjJs92XNvj6StZtr46h4c%2Bqa9ZGt1geWV2T5YwjzYnT1Cl1RM6Ttt66eUZuVOfZIzGUofmoUhh%2BTFrDsfMSkh4wlOq&X-Amz-Signature=177defd148625f4a61a1b61e346f7037889116b089bb7421af1912d4080aabee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
