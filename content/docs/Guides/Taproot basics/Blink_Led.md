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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL7IQCP6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU99qrlpL0jl7nMAGuDALfjxB4f8A5Q5NKoawHINYQoAIhAI1hbE1%2B9QRngfHPhFQQaaRXJWBSdExYiJ1lFSrxsQrGKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyO%2FcDSz4pzbOJjTUMq3AMa21d3HG2A5Cp5qJQf%2FN9FQ1TxqVmloYIuHiTkn7oKPOVFIp%2BhsOLOcUKgug2IYbcqj6Cm9DnErslbInUHErXQDE7Mwo9Ql7%2FSc4I6sEx6H9Yv1HcbmZoAQ3Xyomf7wczYGlcuGWXtYRbZrve75Z5N%2Bs%2FyV0Eg4hjb2wNBApqVjXyPAO256f9KcTnOVEz7RG%2BT96LzPVPTYZnkpRV2fyn5ez3yc7lyDewbEGsif44H%2FbXCTSHnwXC4IBKn3gdqhj%2BNrJmYi34Z61AzOphpuNEmUUAYkhCEV6yBUNhse56CtC1Ff%2Bya6nE9oRsbbg18noNFOFPhirMW1FlQklmejs%2BBmoktD7lCNHD9RqjsK96l%2BpAwnn4z%2BLaXGY6LbcFjBkS1%2B35tr641yI2yzY564k70SHTjudGvjE67Srwi7Z2lv6JPHB3mi9UP5F23wQaEgJDeUdeVxu7pot0hHWoSsYeZHXRptBricwlLv34sOmnqregnwIaSSO%2BvOnyY0o8jLGDdzKQwN%2BXySjnaPeBK47oOnKhQAOnkUbu6Q2EkGFnCREhGZ7KrIgFiX7nsTP15%2BLkkMfj9YvT%2FNd7ROXPSfFuhRGcVW7cgPFwkZby155UkRZusX7yvekGlhXFdCTC4t6XCBjqkAeLDGdaBmGqrre5VVGCz5oSMdXsm56P7upKEoea55uqCHMQA4NItCFM91J5cT5t28fKmbo7lQch3NZyfx9Cg3%2B5Y%2FGtgBawSwC%2FJZGNsE6ajrDtDSchX7BDrMiWStIwwwyCVjiD0iQXGVrC%2B0authX%2FYTp4WhlqXvKGYVn3rxx6MmGwduYjx5oh01i%2Fy6uA9Ly51Tog5MMgUeqT%2BnO7bUm7vbuGi&X-Amz-Signature=00d3391a76adcaaf6844d14bf038d5e89254237d8e11343154ae2939cb6687fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6OKQMTF%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDizr7ctHxI3%2B7a%2FY5QMp5kU73H4LrB3Sq1eSWvWxXTkAIgVWWIy6ralj0hQ2EBLTz8t37rf0%2FFRE0Je6dVz%2F%2F8G%2F0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKCWh4LKz8%2B4hLFN%2ByrcA4BsF4B1hzrjV%2FsQT9ByPf3RYxeA3n9UyiZu0zEW7VL7LlGOlMCkxSx3Gf1J4SwNnEGydb8Rpr6jNxCEFZhsKliaN92AOqcNGdEP%2FE3WbN0GpCVrtm73PWYYy0qLoBxr9C2zxIgCtHIJIb9t8XEOivSD5Pl0%2Bo8xSFMuAiNAN%2Fu4YA%2FotmectExR8SyZesPSYZvXMUKdVKSsSAZsXB9p%2Bfi3DfKmxlJaKxf9ZdjyZd2nBfzCvdZ0AI3YyDSJQpKp0hJN%2BegV0WBigcM%2B7aPLEouRD%2F5lyE39vatUaZY162zXGxEnqxBUSuZpCYgIkDcz8VScXSsdPqY%2FwpQFn%2FVtcmPHYc5cOL5KJklV1zv0GYYKFtU2uZioAagF7cHiXIZ2AIglbSd17BfiaWKAU4NoUEypzKv%2BvwWMGQJVLE1Yyy0yDg6vs4kHQSsTcWILUJBNCrmvnE48qU8Wr7a6OB5LvNLCOOAJfls5QS0ZdI6i3WZoMywMyCBENQeQalgVmj9VZMaDXM2TQtx8zyaS%2BpPfWrU0V4cKZBgT4h5wsAUu%2FowXckO6l1DUoHYOLC2NCXz5yfG10jR6XUhKDrRobnqf4O9uXMRH073FE7fEdxMXnRhOet1W6QoIx1TjPFxDMJi4pcIGOqUB4pmIQ4cFELmiORxzUAv%2Ba%2BwwCeFqVq3Fr2uOWJnwLRmY%2FIzTDRFDtibazT%2BUSc49vMTg5hELqAIKUzgYFGA7NdWcfXbN4XXRutXVscfd5WdqzXCZaZ%2BZVGIJfi7lQPGWJpy1j6BjYTmXmoqAoEluXrgiz7LxWSvvjY5iYYgueZoIefO13632K1b%2BwQAgUOtQOBhPvdWrdfGSj1M%2B8dsaiVa3SUsD&X-Amz-Signature=09e56e7a1018139a1d2f64f81443bb03f76ca9bbd26bbbed837755d063bc0752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
