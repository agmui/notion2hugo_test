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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KCC52I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQDfd%2B8sR0Sw5HG6Jg%2FwkK3Mc2tDSgv2PlUjRf0KFV6A6wIgOQm%2FnRUgV04g8%2B7WUUOJYciVHo3Q%2B5fhJxJLCDosyHEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKwh3gcS0Z0QOMs4TCrcA7jkC21fYUn7XflbTRDqhzD5yQuADaK%2FgjDJU%2F%2F5dPU9oTiizfBfyr1670HPm%2BXU%2Fv7pzew4sFjRi%2BoId7d32UCJxx4RRNHtC6%2B%2FEkQlrT4yH2q%2BEwnxeYKUy74VUArUSQPs7Gl23JOC4jrFK%2BSIDlVib3k1GtfxL8UeqJGfjLWqjpKcOQEJ7Xtn1RtB8AIv1ARZaYnPJSR56yIDibpMFrrOR%2ByjiPLZ1C9SmhXFBputyqdy%2BkcYUBbl4bfUoMY4R%2BXBRR5BclOO5QgsOiHwYDzw4rRc2dadB%2BJmSHS9iAgkhGuRGgjiGLWKMOoXEPUmkmworSXoRsN9DbhjjEa%2ByLqP8%2FIG7R9PcPU1DcjbSctAjmwQAO4h8Vm920cgUVmvRODJlaQT8FwdmbmVJvhWuWb%2BGO0V55ZAu9LSd26adqPQFQoBCYtpp39p4g22ql2s%2BlUgvaxBfkj%2FvvzYTpx6mKzRhu9pzog3N%2BAUwn%2FGnVzHeFIfMGaRctwSC01flnR2oPmDPXSwHVP94sQgdiAunDEnPCZU6NibV9SljDbgTo1ZyyHsS9btZisWFLqBeAcOk54OIiqeC8pHmMH6YiiXKmHS%2B4W%2BPsv6igUdjLRhMiScNcCsPVJ6kHIGfCDgMJj15b4GOqUBtMz9%2BtzwiF6VUd%2F1Fnay8%2BHsgu5aBOxTgkDrW9hSBMUvuL8Q1JTNIu4QNPhWlo4v%2FR7%2FVbsqTt9gSTqWDY%2F7Le6Nb49aWqOtvh7HgbU4WCq0SXxw1oec91zHyVptxTm4gHnpj2mMqeD1H%2FzcEO1%2BEtN35G%2B7Qmk%2Bu4BbhY51XSCcjlKQZpmBdZ5DOIl%2F0pncMA5nLrIbC1uB9d%2FHQNC%2FMfhPemnB&X-Amz-Signature=91d85161254e5aaf669c1272cabfd13e4440bea947ebe7ba72deaf030e7cbb4b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DK4CEM5%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCXzg2NJLM4Q%2Byn5%2FBMHGrz2aSiVM0emPXDkNhusH1o7wIhAOzSrzqy7wf9E02zrDuIqv0n%2FNcIVexx2i7QNBqv6FDSKv8DCF8QABoMNjM3NDIzMTgzODA1IgxnNR8sYwsxTUVegAUq3ANt2NVdsdAeq8XFPhrToLZNXunzROHhTb2U3wIvjRUoVfXRxY%2B3FMvTP32RrI1ln4hZvZDUkaxjZS9q9bKUD8gl1Fg6GsPrjEzM%2FiGTMWJO4rSgtT7QbtmVL1WksWqSGi%2Fz2PQV1%2FeuzPz8BbCRGV48%2BnZlj2e7xRcY00kbTDVgmp%2BF9qpCNT7eAo3H3vOnRk%2FjKAQPvV%2BB%2BQLQqzepjNuIgButspDvJO2W2o5Eo9IWfZo5OgSw%2FsYXl7lQEEHu0RR%2BFDhBLscGGcgcqj1cKU5ZDQ8jMqYsSouMmxnNA5tjOHsPRT6zkyxp6Z9ToFL3TUBfqucDRi64yLYdYTDJB0jk21tue18Sk6nCQ7uQEIZul33wNOz2pwBB54ucNgta5wx0An0sAOf9uhbg5H8UZmO%2B6SSbkZCZKGR35bt5DI%2FXXhfs2UyFxO6qGuKJsrp92l2pcklYBo3G1K2tgf%2BNearR6JQqXtUYZ4D8BVZMrpVat8avQ1M7ng7PivqPgGes69cLw2q0N%2FwBiE93GEzOSECwmZnK2jeZjhar9xADLANccDM9y6%2Fk0L0J5%2FWtyZ4urn%2F2R5cbxpLsr9Jwe%2B6%2BFB0LdCWY%2BCGiBVu%2FXARmk%2F8FjUo4UacEG5KBOdg8SjDO9OW%2BBjqkAcOC69cY6C4%2Fq1%2BilITFwEsSHW%2FVR7RLQzr2acLxpT4P56gkcFRQGNrJmDhJnbu0AqJub%2B1X2RCS9Pag4cex%2B6EVwYnCJ8NAWIYC2OCRYPqx4y5J7kItWk%2F7dvGsLZr%2BSb6LRTPD0HHOnmHWDfK7AQE%2FrfQsCNTM2cYA%2BxYdWVo6UPhUYus%2BfX7rmiTJsaT3ILPMA1%2B62vjdFAbupy0yoTIulq3K&X-Amz-Signature=041738954cd21febc6f0b456951080be6e938732e6bf3815ff9dfca071ae754e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
