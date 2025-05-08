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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHDJ7WB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDEnYzMRz1LmPJWrViDH7%2FA07A7nJdeJmiziMSuo0h7UAiEApBsHt02I2r3fcXlDp0GQYlVo67O23bBg6nsjFU9QFWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG4%2FgV5uf7DLUfcWzircAzHlqn%2Brk%2FbIE5qao8lJDrt0eEe1h7ZqnnnRqe7Y2Uri77kBJ%2BdVs6Qzv3Xh%2BKuibymZq4eFPjlUtqMLMg1Q3V45eYyqrdrKHlNSaDOA0tNmWvN%2B5Q5LbffY%2FC7vzSi3DFmrEfqsnDaDyYD7%2FCvxeGFsCpTxWg1K1oJd3zA9K4B%2FCmc2MHSVZ2imzgKiO%2BykukEJOZj5ZqDCcSNeu5CSt0tQC%2BM9dASw8OrEHuioQYV6R1ZF80Lfn54gFQg93WFe%2BJUJ3X2XMj1uACGR6YwlZ%2BrWHDQ4ZF0UXjYVYG23SoYmSd7x9K%2Ba%2Bc4cfMuLBiXSiPHollOfy0b8Lt4Hw%2BJbPUwFLgMVb%2BgHF1igoxN2eLcodbimxrg7lZRFyjLkmRexc5PhidHNJHq4v1UQ%2FnqpJtdFhXnImg4889SbXxu1o6TfoWuT3%2BN8ko7Oiss1%2BPqipsKDqFQ%2BLMua2rzGqUab%2FLG%2FOanFBl2uTznbC%2FN8Xb743EJHDc%2B0Pnb2Nelb2qmjoPyZ40yeJfiJ15oJMYUjHJcsYSBqvJQSptGfek9mm6TA2ucRkCPsX4qsC%2FHkLuq9P%2FwPapqK27pr21qUkCFQdkwt0miDVA95bTboUZSvbMqIjmVNkjyhLYq8gefMMP%2FE8cAGOqUBrUsEzEMpwD9OuhpRKzzaUrMo86jKLudtL8BhbownsxMv4fXUHL0X3lzUoHY2Gkm1ZO8dsVn1xVzCCwKii4ra42kCj0FSy0k36uS2uWwi4LqeMtolZkz9cNHiCE%2BAyxSZgNT%2BzqoFD2dDxMc7Rk2xacfvjM1xKh7VIr%2Bi4CUQ%2FVOfkplw0lZKlyizjp7%2BJI3nEkdlmTJ46JHiaR%2BlUGZxFussF2Rf&X-Amz-Signature=8f4d12921eaf1640f28ead502e1dc330eefbd0d75d7ad3ea5b4863e315a07ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKLXWEAB%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD79dvuO7y8a01NrtMTp%2BKSGH0rSt9dJC6GyhyBhNUW6wIgDtdLEcnBGRGlKEaGTxwpyNhjTntDVe1llxYr7KdWK2Iq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFewHKY3m9%2FqAPVhOSrcA8lANM2cZDlzs%2BlYrU2XLyTnZvKbN7pg0ZVZ6jkncZr%2B1AQ0f0ol55hrsVdYjSPW1uMYQW27pdCqbNRL2q6eU7Iw3KWtst7eJ9vEIWVO7IC%2BDSn2kyuqtO9n3PtfiY1F%2FFf1A7OHEvRr0j9sgxuqUPQ%2Fqi8Bky5rK7dY9ulFuNe5774e8HohkJE91JlH3X%2F%2FbW7koybRcdw8SUBs65MaJqa3FZQF%2FCpeNDQjUt5oFhsna1xrWg8ckZOSoh2CsmIAU7spu6DUBJc2iwJ4ObCQ3m6FkFe2tNrKQHM3Xnm%2BahqSagV1kkLVVD%2F4N8NCtUBxwoUZ%2F154sFnQVf9yNE8vlwXSjsw89EVXS%2BkDoScDqFAK1dB4Wx9EiiQFoOsZ6U79O2qGrXeQVLgPsB2Cz59xbo3iu4jJoGQqIn%2F4tGEEJ9itxQke1zutxOh89e%2FhQDcbxFFebq%2F%2FkUPoPMPgB8V%2Bz9BOrh5dSRP82T3WW9XJByfJOVjy%2B1fngFY7xNXU1YzgluIiL8Y0zaxbL9I8E5ahbddixCgNJik71FoFrrSmJ%2F1g2d6HA4a9D2eaVkRRmNdfxBdjxHEcXXIp7wBlky6QkhQHLXrPm63iZ1r86zw%2FdM6GjwFnwOUjHp9MAysYMLPF8cAGOqUBGE6rpDWGDMMd4kqG6ze%2FWfmrbyjLHvgNWuJIIfSAUmGzfb8J7NTlagJA%2FMs3gbGkwB44jgSlDUz4SvzrjGvev8s7AQqlIfW41p%2Btp%2FFJpNIOSsxOPrF8frzMXTXZlAla1lPWy0beNsNYMVqSxt5yfqIqiXLb8IoehxEApoiR4aue%2B%2B8lS%2BWpCDqwXd7BEeqdbzibzGwEiXyj8m%2F%2F5a9RJ%2Fo2Ly%2F9&X-Amz-Signature=4c144026e79e740ac00776ec2dfd3b3185ec92bf16240bd8be23313d417e0251&X-Amz-SignedHeaders=host&x-id=GetObject)

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
