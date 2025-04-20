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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPDVR56Z%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCNoA7Aaj70J2pmk4MRKQVt53zjC3L%2Fz1zvXZeTUyqhCQIhAK8%2BTN0JifGoBbZfnHc8vYHRbEb%2FUmVmnPq6RXTHftboKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoDLJ5P5%2B17XnZ83Mq3APL1AxeAMdCgwocWkt%2BQ57RW5%2FisyQ%2BobekSeTSV%2BagZqOos4IF1DsItXX62XP7hZx7WYoe1lawzlJGtCaki6YbtZXgSm7l2SewCUslJ2dHsw9znlOdjd3EDj%2BHDXzC4gFpsk3LHUmJrnMEz1CdAkBlq3bPqLb7Bt7XZPkOZxb58YC%2BKov50WmCBP9fO32FA5lYvlVaYmrRMR0M1zdmJu5zz933Z5fj2sP46vqC9s4LroaKfFlIJ6iS3KVciN%2Ff%2B%2BPT1Tk3eXgQA%2Fi1vmwqBQ%2Bvdf6J8UzgYcYKbL6LlVFDAKe1bpXzvACPPUfislBCi0x4QKJKRBxGHTetaKDE8hsM178a8eP3FsHzele3cM1dynpyFo7gX87XSdPxgKDX52DQ5pHQMVME6V8IF7x5LPTzaz2tIx2VNkfcCZXeEV%2BwqkIhWYtagSW71ZNigaf6iRaeV0%2BJ4gqiUnUwd3W6vRME32kfGByVGFLxzOJx0Kc%2Blje2I50aTlB%2F%2FClFqlZIeZGtf%2FWG%2FGFla1R%2FUsgXPsYEGHYKVwzvn2Emv94YsybYusZZ6OCWNRZHlQ4R24sDv0T8b8Sko%2B5NhDAiKX6YIF4D0IWiXJ%2BOZSsjU6oyBDupKW%2Fa3rYsrYv%2FfNE%2BHDDVo5LABjqkATuDIrFgAHuTTGPfUdp%2F0oAqiEVCuqr%2B3EiWP5PD6cuw5rWCkI6KVLOzpfUxN6fJ92n4RctfdTv9WUfG26e7ZJjtj6L81cI0lvU66SmyY%2FnNXREAzMRd%2FOntLgYdNAWX2moFQSsRxmIDMa0bcNMkjtzDVeBXBl4j%2FWIuKiI51m%2FukPSL28M4YBcP9yOqilW0JVjHDpDMCeqn4W1eyTo%2Fvf5swSKg&X-Amz-Signature=1ccfde8ecce502d280bf281fd9a4128a652796f454aab35bf35f6cab1c7490cc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2B6R37%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T110137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIGGKwR29SkjvfCaoYeGOR6LiyWS1rcP%2FYRcaH0uzDvzHAiA8bvZjsRXBpyKJAPQyZC9UcSHjwjWKZiLd1yl0eU93MCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD6pMkoA6ZgVj%2Bgc3KtwDPVQMZ2Ot0PR4OhI1wbmNsk7%2BZOucDt8J5%2FIupy6dxh%2FsX7qPLla352OqWIOeZppCuQC3ebVu6IdFmHLXMIXcNelWJ9qlXNGzVRk3IX9EafAc8Lu53Xi229qhw1tkTLM%2BA%2FC4beVbtzoG3gffzFoPJpH9X7BIOuWwJW1FKq49J9ts5xYbUaXfEqrFTNrOaedyoZTQ92bRD0S8SH%2ByoRV%2FyTWlWh3GFhhJkqCREkZPSGKwzYCGALZwjAKZCCSdQNjR6etC0e0xYMxpvt%2BKcuL%2FuXTzW7WxyI957L72x7TYwf0Sf5A8FmzM%2BHBwL6pHBzW8hWeTXMlDtcJrmoHWBHetBqu7zFMygPf1zGd56QD9Cg%2Fm59i7RE2F6gJzG6TWFoYsMCjsiHkOUpH4wGFzToDSXWxrzhjlABI0egI%2B7VzartKGgY7TpnoRVLxUjqN1BXHyJyJsxH9RuvTUX9Yo9El%2FDZsHJ%2B6Ipxcer4jN4tBhwwc7z%2BzVQyNb7FWX03eAKxexAEzIaaGH0eKquPiwUDqV7CSVl5eAN7EW903Y1xfLocHEfkKa2hv9U365mI4b1yI1HQeoYb66U%2BmHOLb9jDsez%2FL2YDiZxJunEP1qcyas4AdFiIn%2BdTPwJs8EI0Iwm6SSwAY6pgFUlcKEToahr9OcNXJK60ntjPq6uSqUzs7Q5U7tLN3ikV49kq%2FdIwsFlhDVr%2FwDgErVTJ%2Fiju2Soyq7GXxf1rBDQrBhgdv4gDWo9FWjrXo8o0z7k%2BL7eVy0tjhkpTZ%2BTJP4kgwx09tg%2BXmPL0zWdp%2BoZt5uG6W8GxWlOjVOM2WwSkm7ynFRq7qvkjEz%2BMOyyY17HJS7cRJyZ98frvW8SoOySmnUAvcK&X-Amz-Signature=e28440828dc2bd03eabda498cd9f09c42efd93803027717b9dea53043fe5abcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
