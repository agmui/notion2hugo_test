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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47Z4SOY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAfkUBAsgyys0%2F%2FrSTsWp%2FmNnqjvQ25NQGOF8JQwATdAiEAiT8Q28Rnuu8cFu2bPULPWIAR9WbIzBvaDitcMGim0%2Bsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJyk7A2tSJL59VBOJircAxTWI0syYqkkR6nG6nqK1wmJnMRmoOiwcaBbh7cDkuygaoWJKeRUQU9oFPUodO2sbHADRg5zQM7tLNk5cIASjeHM0n4qwcqQls8dNTCV3%2BQt%2BgEshYa2WReMmkUP%2FrTXAWeyTr99pt932sciRq2honymjDMpU1IY9WVP0EdOzyFayJbwe3XiEY9GVGjAqqYl%2BPLwjYRu4XljKhWaPitf1BvSrUgaeMeyekhx2LGevZiUn8lVqjLDaY6gdedJYKrS%2Fj8VZfNddsPNgdQqok2otMMcXnaPfk6eLNqsKaNktQUtwICEyO6Cix4kQs71CHVqsoZ3yu4PKiYuM8wXTtWIU%2BbIecCciQIACM9M3IjCk3kdPAazA4TNRXMrmskJxaHyIF61%2F0rqXITr9z2PTgo%2FFksMXxGxpkQxDDqgg2%2FgFWtRRiQYa2CJLHEN19EvjAVombDBylrAnkOEHwiXbS%2FHJrUMS%2FOEjU16P%2FhkO8MdSlRl5aISt4WppjJYKjvzSWPZPGaDsUxrMjDMSJem%2F06wax3ppFf3mQGwVv%2BSZBZrLl%2FiHcy1awa31b701A8aioHfX%2BSgBpyFm%2BxrpfynQ1y%2FtUqQZ1YmYRQrtqXjMlVjnkwMa4zEBNfcCZXs%2FP1KMNj3l78GOqUBwKSI9cx0ZVx5p55%2F%2BFbxuOTyitzYqMnJ5mcYL%2FknWd%2BDnY%2FGVJpMdYNa7spKiNdeGM5Il5cCXaWhP43BXR8Degw7Cr89aaV7wNQ4bUK08REp7HlDKESBm0VIMQfWzKckbfKJy8iLsnFUDZ%2BPrGjSzFz34%2FaWXXTGl476jOl8%2FBIwdd1CsoTAYlMvppfzuDgidktDzYPxP5OVvr%2FnWNIkyaFGpx%2FF&X-Amz-Signature=9065edc69072dc11bc6dcf5b903e079ecebcf8fca9a05d3a972c43fd94d0a16f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRWD3C6O%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T021858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyuQxwOi89VvJ%2FZFhkxNRgL7xi2pPjPXcofz3daMwdtwIgMWufNCppOGqdftR2g7Rj6Wg%2BSSCWbbVJ2jXnVQvGBJ4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDN7WMBxw8KTULVMdUircA80qQvZemqCn%2BYR%2BUV5jsgGw%2FoibvJRovhpv8v3ZW6j7x2Mh6D0IetiIHA%2Bvku%2FJ9zl1kbeXT%2BwM011X%2Bq2vVHohUlCqpi%2BPobAsekMgXHRKJDP%2BjO%2BifQrUo%2Fnz1nsalAU%2BJw9goqcj3zkP9K%2B0UmukVjVd32f2DlhjWtmMH82UBoZV%2BaJWWko1iI4ENahzR%2Bkh3KJtpqSltdNW8%2B%2BEV64FL51SWMEEGDrpu2c7gOEFpb4KiR6pmOT7DmzeYbDEabzEYhdB4z1PTu2rHJPadtQaP2mrSZ55rbNpuE0ONme2QxXdAGKzDpq9XJIq%2F2PBB7Ov8O3zm7nn7FE3qqtn1b%2FPe7aXliLDdtlvTnxHkv5jbRrQYkNrmmoAG1IhQZzSBezWErlzxf1LSkHMA4VrMQVwiFaOUSP0QwzoCxZe%2BWyoZEUj%2BJl3CamDazcEb%2BBDuZqJoilByCfdyaq%2FuJq%2BF21CPZZlECnegRDl1%2BmBABvsy7g5Eb9shK0CnsZ7QleMwl5vMf1t3JnECCexiY8Qp2bUXoCqoWJwqEtr%2FFsdn90CnkOFS6gsVmphomgZxemj%2BeLbFokjp5RvHktlfWJDTZuv5rqewbZOW9tuwivHctGubSTVx0tn5t%2BVH8Q5MIP3l78GOqUBB9iUAwAkFQccdaFJbgypaD1QRtbVttpLddAn4PYVaNJbsq4Vqwqq9yHYLsUkDUMdE5HDuZBwfZS3oaND238A%2B3SVAe%2FCd2EALPXTh9%2Fq8NPU9aZsrQtFVwC38wN%2FA%2BdFk9obAvXh1h2SMrtplgU6YV2oemSK0G1kvsSV8eEXWAHz4p1MKIiZirqhpAIx5LHB0y69C2NDddI5Jy5ygzNCjgYILrVA&X-Amz-Signature=c02aadede6335443c814948ac563d628ba82ed5b2710e8704823447af371ab0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
