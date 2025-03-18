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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRX47YYP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIA6vJS9wFLoesDt8OKegC0yiLpvXZS%2FHScs7auaqeUTeAiBPZWs%2BChVI9yyywsQmmw7fH2nXx%2FknnamxO5ciNTOQZSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMpa2Lsq%2BSwYoTdj%2FkKtwD9d8bffXts6np%2BRzGJxRi4im5IezrIjgJibLlR9eDh8fdKiA0S9zzzfFi13LRURYyuvS2c7j3FBfSI5GlWqAfAPlWVVJJffJCh9qCIt5lWxqzB%2B%2B2vxjmGvUTyXs6t6WS1cFMJebLFl6JrTI3obuTBUqn51bIOrA%2Fxv%2FCSC055FnAdQJlOJIMLPRSep0U8ZZgfbLtwS18y0L%2FgGWRMi5oJb1vROPwnFHLeJdw%2BcEO%2FqyWAbQpUw0lwSdIv242X7ixDnmqkTEwSFAg5a8tPpupKmYnwV13RA7qvVBmfpBCyXJ7p5P71O%2FiimgQUUhkHITN9eQ1L91h%2BPMY2avyVyQsJLW8Lis7lqaWUH3B%2BiUjcqpahD7VI44nmlUImKjDCWw21uuPkOQZa4Vou9PIwImL%2B1XQ7TCXD4wjW7%2Bic4csO8eUrk2fZAXnGzNTMwMPG9HDqD666A0Cnhh8itOpqL5VjocU8GeotQo5poXutEplGEI9NyYSBe%2FWbrmPhyGJwZXC1w92lgRywxtIgmUyM9MJV9b8L9%2FF4sTkJkXeVZeEjAzZ86yk%2Byi2W2L8%2FFDQb3q4Q5KVm5joX021gOMClZIGusvjvPui9nEycJQx01PPjqzqlVWaLgdDT9bX7FwwzrHnvgY6pgFZtCih%2FKgHHmpFdFSVOBKArXEiBU9zG20XuWfu4DPewvvC%2Fm600F7QNprJbzzlir9TTDOW19J6RfeXzxvpXrGT3B0Nz2ovbeUHnn4MbnyncpfniBym8lAGevby1rPqojeAZDcKL%2FXfW8Tp%2FPNTRps6F7XSBE1gwZF%2F%2FF20T9ZTbR3AJCXzSwt4UvXNE6bH%2BzPsrcQimIQRLjsLmJDkSvUDzc5C%2FJJ7&X-Amz-Signature=97af89ea6c2fbdf615d3db310b272ae6900bcab1ac7880ab441cee468d206a73&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4SR5FX%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIBYxfsVHiVGF2h5pxiFAEZfA935HpwDyzpg74vvk9QVsAiB3YugJErTuKZohiYgxXgAZUspMAIWacUa8iuEJq0h7Qyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMje8SnbiJZMUXUiqkKtwDdDoPGkWZMILTERzw5OlMF0SPUSGccg5bci0NzD%2F5ib0GmLz%2FLDtTlNDRBTg3OSWkyFTc5q2K80Cpnvh88CImZ9T8vq9M1u%2Bgu133ZFk%2BGzQ2OOsqJQ1HGU39itscHQ432uxdLsaCNiaj45pDDJSAZ0B69pKG8%2FfqwblrzQG%2BVtPUAuDMYUyFtomzaBu5BqllJ9OmasJYVytFgqGVrWHi369db7WJ0HunEUHp5qQcmnBjetFPR74Abb9pDf5tJDOH7ybiwvbZkGKm7ycbtlLYLNjb6pABLucEV1fHBSmuMh%2FbBOBkQG1qJkcNdfJy3WnAdTJybh%2FE7HhLFGaI9mp95K4QGSRUGcTu3mc4GXp0po9StW056Ra5L56W%2FYL56AZHH1WCl2gMW9ezGLv%2BlfO9TnLrE%2B4aCZfEo1%2FVCiCCzVMkI%2B8BkmZtwRwUzLZ962D1mo%2BeIXOfcBnjuMOVqte6i2G%2BI0zhhb1AkZDBXNgYW05OIjQ881QUN8TIdtRkT7X1OUW138UDPAFPxy%2BCz0MUt9Yrbtb4HUdsDi1DaVd2VetLwlm2buL%2FdeStvZjtvdh%2FTt04Ui15YMdvtdXGW8AppCbUbVfRQ0rIrs0ruFhxcByFgpo2EMTc%2Fdqa5NQwtrHnvgY6pgE%2FNwS917hDh%2F47hVe7L0TMIaEy9NeLzCkMHkszDF4rqZ60FIhlZFLLFY2VQ4z%2FjzVfTjfwVAWZBHX%2FzXZxAlPoKsxPOIjQA9UdLeCe0TRksNkJYhlfspuwI6yZQeA%2Bilap4iv7q%2FYaZ9Wim6xZSPU0ysB7a%2B0%2FNl3VZN7TbEfq2lDp3tUqy494Ovj2fefRyW7xljMCtMcZyuHdpLaDntviyeh%2F3Xhn&X-Amz-Signature=039b323f96586473b36ea49f056f6aa085a5a6626fd2841102fb623785981d81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
