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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXVIEZJR%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFLh7Am51YetSD15nH22yxrRycIv0OPIbmw5SGHJXEn1AiAwsqZVh1i%2FvWGlVfc92mZuNtV0JA6YFcFLQ18QYz5zNyr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMNgdLaMOpAhp37v0%2BKtwD%2BjzoaYm%2FPkCv5ipp6ED%2B8ZomDnk%2BQDJhQA5uYO4%2BmoB%2B30bG9oiulXPGXYWBhNkG2OPQc7DW3%2BsEtGiTNrIko%2F%2BGsxo00htJaNat12R6xorg2DofDCT0yRKLUHu9cbqEHTR0hLP0exze2F1ef2Qgh5cP6kkqoEVMtJwkVxpRwhGL9OQpaD73NL7ErKiQvDYUCFEu0XEAU7vA8i7Nlq6vGnuW03MtZiuqqjSfuUtGMZOWyVgEXSxMqw2yGex0l49m7kmkDzgqmuzgz3TbxcuY1j945743QSjxd8TCxp6YECEZq%2FHKEKMWy9Pe8ThYt6vy5byGyZODv%2Bziwnf4Oqzp6a99Acj5kk307amUEvuYyRJVZf7PrzLcE31t4E%2BStrTTFlNfkFXTNCg2RSIg6mYDV4IOIns2eBttkrkpG4RE1Ubq1wO%2FEQtOSo9HvdNq8QyrZUYz%2BQukREHHkf9TrTSldMbCFqe8exJxX9XzQFaDk91bRPFvlXbs7%2Fs8byr7R3gh4p6oDOF%2Bvd9UKQrEa%2FvVo%2BzewIcnBVMtOjCV7z%2FaF%2BnzJKUU2kGP9I%2Fq6oLY1Ubf%2BXcndbkY47VscU6vnCD9bjinlkzQCcrx7BDIfhb%2FSRPEqrqRQZVZyofrb7EwkLC9wgY6pgFkDbt%2FkiNWymbMrFwCpqTSV6vKpGDZWHkTkM8A4Xvd9LvBKtzOz2z6PjVe%2BxceILv8JFXexPtYV6LvA1TXeKzriYJMLQarOKwmPjldBDerHliCsyVQMed1Z1ThEhl5UGN4yPTf4TzPHmG71FmsPogOkzYpthUI0ID5y5C%2B7gLk0hU3EkkXr9yNE44sQYyR3GbdTe6CK5dgbbOhaFQHL5xYGCob2f5b&X-Amz-Signature=04b603321403cae997b71fb497d728ae4e7135f1b3022d8742a2608b03133111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB6O76O3%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T004448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIG3NJZICD6RCUDvsdox2C1fgosV2ZvHhjqUE9l%2Be2VXfAiEAvRVw51um%2FFgcZ62Ar9qEaXIfuBnm97hrbXNp5830BWoq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDGh2lKr0bDRqfa4%2BsircA0azJYeeK25V84mpzu55L71OzAb1LPMfvUbRdPo4AhLtkMbeXMSbgQIisAhmS3K3PVhQ6y4RvGl2IhyVcWi3qud8KNkG%2FKUvcRnvWmzFlKao1%2B3VNFf7Bkg4yO%2B%2F6rrfuPhj91UQNRdnGhacnFkRZCq9QdTJyaVp2pvdPdDiAl6JKpCCA67AArSt0jGGls8NZkmNHllKKPPoPfzJr4PvameDVdUDb7iVczVdXziNzyeHuVjwDr4Pt%2FI%2Fm6CEKezOXgm%2BkxIBy594c1zXTWWaK8%2B7CwLxFULHOT5u%2FUnYVytwwqTPteqBqBued2IIZk6tg3nlhleKD6mzURYOOB377C55QHdIwXFqLtMtF8tcQ%2BIRNAstKLxPwjys82UKZOVNm7Te96SHKQug0NXwguRun8BUtUF%2BRMGvwRbApro%2FrXGhV%2BWuWIjc6UWcU2XUts%2FhZZNuhyeiueXd2m7jtnCWjHcRJRky%2F158krioib0btDh7dv%2FWzypC5Qh7hQZgGlnRaqg844NEuhEsM4vTJrS3Rh70rY5jk8AuCFbJPwMAZx6pdcMWr7jn%2FLB4wm%2B%2B%2Fe0B38eZiEZ2shJi0K674T3HWCKGnfG2CkY7STF7acFcfZ6d887%2FZvhUPdyLWUFvMJGvvcIGOqUBDqFA6Oh2dQRC4A3luXwQhuiXtUh2viGQzgf%2B3EiYVwXgwVmK01Z%2F4%2BkOvoT5ILbw4NqtICzRgd%2BsMeOhUnSP4rWFljF85lM7pPGFXlvsr9isytOk2JpX%2Fhng0CFJyyzaudiFSesNHqwNn1yryh4F1AMlRMmLncEiclD%2B4bK9tst07GGawS2FQagTPfX4u5lmGUuY%2FNDZnhGIcvOvlZ3XwZ8RkAjS&X-Amz-Signature=7077bedfd774967134b06cf90137f7c6467fb98b80b3f306a72e6c5253b15507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
