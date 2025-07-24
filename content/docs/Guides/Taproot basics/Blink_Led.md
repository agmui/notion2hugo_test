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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBCIRLI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDheSN9KsvT4SX3PKv4CzbDlh0RZaWk3im6jE8MRNrc%2FAIhAP7AqTLUqIIHwug4m3GnmqUSgztAh2LpE0kHeCtEtl%2BzKv8DCDIQABoMNjM3NDIzMTgzODA1IgzJBxUFOjoNI5nVcisq3AMYTXaD6GRYv5CN8MrNHHvPuHnECF5Yg%2BxYsmeJnIayXZ6nvFWj%2Bd2sSpKezOLXVNLXgTutRAeuUkVOvRwnSIVUsivLcvUtkVHnP6xxoFGpdC5YVurDeN7pg5Ro99HBhLW8M%2Br%2B8FxbnKfiwdL7FxGRYffbWtT3IvG0uAZpfD0FwLhiUnaoT0BZTZjaVmhY2Wcyt6%2BzEFVLlytjtECJFaHb7pm2eNHel6wCR%2BqaLGhO3PjPNpuEBnJ3eOKchVPxBizwYXt8kyKkNshwelAQu0jYTzZ488GxZFHDku2XOaWdkCCOEiWzIFyHd3VcX1eK%2FpWAuoxV4Y%2Bv8KJjulcb4%2BXQLeiC3%2FkAf5VSYfU%2BaOCuVYx0N8b1xM10sAKOavGxFGUUcrO12Lk%2B4gwVcB0iKtVVK7T%2FHjb0Qpnbvk2vXWMufNASnn%2F02A4hKyrgqiK3W7GUjYwQodL%2FH6YVOADAdP4uYuiNOc2WUW3sBROPjkRZbmADw7VJlRdHm7btekSwdL%2B58mlH8ffU5O60EShR0aXLDp1ehuXNGthNvHrklPAbseqsQtkbKZAo%2BDk3osdJBiJnS6bWih15uI%2Bcd2i5Og91Kli7haJP2WeSxlhXOLYIK19Fyf4GEZ89hukv4jDV04nEBjqkAXHVMTH%2B3KW3lsbi1eRdDhib4fV1UlMzXJuFdiWIiS2F%2B%2BtUdPSDY3ZSck68yechPFJnqIx5%2FIj3r94E6yDaFYiiGQKDFQSdpQIW41d68j0OpRmIAjwjINv8OkatSGuVzmTtLOCfvDJHMxMU0pBTxnNQJY5VLPxSW6KK9aU1wJlw3OVRpK7VsAjG5GzaIo56ZHB0%2FfyC7ji0DyXknnBLxiSgM%2Fja&X-Amz-Signature=cfefe6f949ea09530b57290fe434d1bb65d8dd6930fded49444555cf67259ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQ5JJA7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIGSSnYtjvlS%2B8NnFSYRWieS2arJCRBO4Wuq9QcCsuBctAiEAiu1Mx4m0hxO1iBPxezkvbwFCv3f%2BxbnFN6HfXeoTTB0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD6zW70Gka8EuRbvMyrcA1ylJkKnr6oFZo5nmogvCNli76QEyfN%2FjTbqOA%2BeVilVRWFc1hNuQ%2B0EB%2BQ%2BogqPHO2GIOCgcrOvIr6zBiCzbENfmK92nNSoH963MmP69E3hmgvQjMcp%2FIaIs7zM8B4yXWWAY%2FmI5Eh2jR0Nyq7ejk78CCuJ9BEXrbgXunzNqWWVMXNKFJIaa4VHT35XBadp4vwuc8tWZ7USatSPoRueIoFsEfvJJvhWJUpw6wtBpTU%2BOH0MrBYiwnbM9dMnh0a5CzWTeSwgdDzQjDOgB62Up5Y3wX9O8YApimMXq0ot8WJ8irHvCWMshZIk0UBmlHt2VxNqqfdq6WJSYpHQDSWU2DbAnKwAsSdlmTKuwx%2FFxXtqclcCnDsOck80Qkq928Af%2BAPpz0EuPMBH3Z0WhNGehVSr5zllaE4lY1lePqz9cK5mbrMjrFb00aYiP0IplcIALO4txnNumKNJuomxgynSj7bLXU2syRxg8wpLUGTdVJuVOI1ESdm2%2Fe38dFGKjLow%2FaGK9Y%2B%2FpWzMob91fP28ZhZgnQCPlzIDnUdwt0is%2FzsmebT4ErQXkSC5Fi5Nr95CXI5KaNGmEj8Vwf7UsRuPYbr4D18lV6o%2B2jJS4g7p6L2n03xb7SXJHhNZwTAvMNrTicQGOqUBL3xQE%2BpAZNlTI55pa2i3KqAaLZ5KG31%2BTeUiwTHxx2YjQj%2BWhSVHqOGroH2Y3we3wvUriE1peV7bJMxPLWooVl%2Fj7B1w6PfyfOTu3mLr0Vt40CRtjr6ivaNm%2BpaGD%2BkyZC9B3EFKloSpxyz3zjAuzcy%2Fvt7K3CytLpS%2FGROLsaDu3Wvx0IIAM2dR5tbBwqKkxXzbEK4wqFHEbzrS64vrieCB2WRF&X-Amz-Signature=a4593c9df2cfdecb7dc96cf8a1bec156913bb2dba567fbe7134e0dca4a05d80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
