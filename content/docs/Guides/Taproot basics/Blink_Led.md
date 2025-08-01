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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG26CSI5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvfkFqD1Htkd6YLhdIYSktu%2F7%2BfuZy1cIF5UJJaPk07AiB0ztE0xphPyyvhVqCT%2BcS9HlaniNQbZeEnKaz36l70CyqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJkRD52Rodc0mwAsKtwDoDYC7uQcDAigUr2Qd%2Bnt4W0GqdU4gp%2BobXG7NFbmf6l8aEdeRBGxT2Gn4sEXLSVuwT3tLNcNTCwhJwOAPcNzolfCe5nQnb8c54mJ1nhTHLV8A2JafLVDNZVGWoA0Wycckc5UD%2Be6WUrnbTzHK9RbDxXJcBBdaskIzitrux1lP2i1ZBdqL5Fa7HP6KXr78djQwOkmmZFsvu1NOeQfRAQH83Wd%2B5MNVCLtrex5MAKu82CadXblB1S2BCPrDfP302ZWJC8v5RqCSvoGuGeJDVNY0RKGaAJ5b%2FXYurbkkuGM6uL7osN54YSLAT6On2Cvkdi5BIzgZTYya3hbJP6iKF5VTB0Gk4BVHbTg9Cz44vzowhAnklzEwYyY3Qm5HctVpshi6zPjTjSLhxMRf7ckTuN8Ik2wFDy%2BCdDfj6oETYvFteifGcQKRRz%2Bt%2F1u1kntJOSc2pQ39IHlYmTp3MPYsdNefEiWG1LYM%2FLDWNk1aN%2BDBdtu%2F2FfuBg3j1V%2BuHwCb5e%2Bo1YOoGer%2FfbdFegtulfrwOa%2FquU7BUyXu3oYhJd6uEJU6iSErjCV%2BvvKIIOOB9oNXQ5XcuxwnMFI6VY%2B%2B26q8Nju2d4%2Fg79nyp2MwpjumTRqS60Z55hQaH4217cwnLCzxAY6pgGGKKUFIfGTrNHfuLvNmImlNyOcXPQlzeOGEU%2Bqey1FWfO38B7yzyizn9yuMC9EFkCZARbYuNIxnFdjcf1DYh6vaTiSRSNVE4n6%2FCfkVHl0l%2F%2BsCG92qESw199%2BGB5z3VyKd69fpsAgiK30x%2FDiFdpVLYBdhfO0uxRRRbgMr32lfUeWtmui9g0tXgkBfEZR1OlSfrigydhtKbK62PY8dR1gXpaUhK%2Fa&X-Amz-Signature=7c7b68aaf89915a10029376e7981b4b50d6f60737204bca88411cbe150193efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HJVILT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZT1ANoOlGFoWDvVFVLyWfQL7rROcpbo7Na%2F9vL2xpRAiEA%2BdPgIBx%2FoNwTrAr1n07HQb5EDWGacdp4i6zrb4zUxJwqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FNETj48TJw9zO78SrcA9Kk2%2Bv75A%2Fr%2B7g4BtTDggM9kNqfV%2FonL96fVZt7RnYeHfNuRsy%2Bh0mbE52DHgaXH1WnRq%2Bq8AEwY0Xs%2BTXCnRk85lZaTcP3CDx8yk%2Fjyg%2FCjOo6aLMAxrQBZa6p52enjHonFlUrZ1MJt4gAsGVRmJ0BB%2FBJuMofxG9LQJjP9o3Chg2zDAyWb3QoX46MEtTFk4w13DCPr4jmOlyt0GbiNQv%2BgcazFL2hXgZNZmLWEYCoM0iLDsfa2eKBOnBlV1vtxQci8Kx%2BFYyUX24CTM%2FoiY6w%2Bcfbh065FvnNh9sI2LzeI8s3%2F7w%2B2gHUaQJNw0cqvylGxtx%2Bfr6Wsw18tjmMXOzCye9mKpKHrObARuI4CmEKKzAm3Xmx37%2Brk1udy6ooJVo%2FxcD%2FK%2F6bHYRueHbB0zo8AFdSJ7nYjR738NQylUGw4%2B%2FR%2BIspkhANl3LwgCAwKL3gmx13vMCTh97B49QI9ScaDuRyXDdLdnzP4ePnSbLrUDkG9e0WCLZht8YMqxupLTYFCWqYbD8d62ikWUZoGI%2BfbgFA5s3%2B4SiPVyf%2FGdSVa%2BkZrfggqwU98%2Fovcxc%2BRyUy9KjqOiT2DBm5BsbROUJXibVtmk%2BLiNUro60d1zxUuDWx5Mj7d9Hk%2BKHYMLuws8QGOqUBbkaxXxveSV1%2B%2Fe4aWj2Qvw%2BRjVXN3vv2fgpH1bIj7bm6yX4JHWzEiorvu%2FrQaDyBkqjO68FyrzC38GZfSbtgpnCWUvFJFPU%2FhFfVboyJJ%2FOlNU2QCuq2gChLHyN6nixcm90Kuo%2Frvy4YIa7UyuBNPqY9TATW4%2F39lllSh4Ghm0H5hWSk9ftRX%2F0tfuZP2UpQujrIXfb9Hzqok3RPaEa1G8h5ju9R&X-Amz-Signature=7f68fc3dcab2de36495e407dfb7598f5a4d82daa7b1b5b54c388b4092fc72301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
