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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWFSST2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGAD%2F9tYMkm7uCsPa9IbhIwn63keBKcOViXAxiGQQQyUAiEAxAHnoXXX2XctCiW4r5p7H83qEyr2%2BvNuJI00qfXLSfsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjywRNPdmpSERwifircAzdqd18SBV1wWsIK5A%2FSOI%2Bi%2BRpfWlT0GxH7JIA0986JcR2VY0saYOjjd%2BQXhrp1vcJa0KkNACCBrcHkDrOCP1YDWUN%2F8qUErcgwtuvKXpbIqZrc93DY6pG%2BFOP8kqR9mwrOygnNkrS2iLurXeXq%2BlefcBXOpblRiGAo7xNXxm7y2NoP4XQVfDTQdbqHxYiSTHaIVQEbefSUXBM2q4xLpxD6eR%2FXeeVE8hH3ZgStLB4OJ6%2Fy6DaGMwGn14o3Qav7XCR836sbVjayfgxjA9GN6PYhLaoug%2BMUNEVi0gLm%2FGvhOgrxVFcUkgHt6nbCRRKYSoTGcsoBm3CRc22UMXIkZVCpYP1arCyBOhwO07ybAgBh6OnvL1KOnbbZyrwdoC1MjSp4TPK%2Bw5ATOLUmW0rTrxMjf44pC3lEAvLVzow5FxtYKcmuGxYhttGU03gwLfHdA5nFyTVBDQLdPXCdaH8lod9FASyoqBJNiE72vyFf60sMhcJ8DiiJ6DQ7RvoRRow7kUN8fEFcQM%2BwLqPoKyC1gaiHPqB%2FYGXM%2FyK194sPj5ug95DmiJAsbDRlKWSOAKt6CsD7XVx%2FhvKZlLUBqv1h%2BoyIp%2Fs%2FePCsSniZ%2Fk1uWVP11gU75knezm7j5d0wMMqTm8QGOqUB9v5YCvq%2FS9oknegWtSCTGKvTHqRgx088ASMhhvDU1bDVUf15ndBQSpkaK%2FwPut8ikZbIbzWbqjLo0RpRpOj%2F2A%2FIeuAzIDawRa62lHGiSM03JqPj%2Ba%2B1vzMgi4XaqtOG%2Fd9vqy5KFbeBVYZvFouMqkPOXG0ekNcWH%2BvAlANQEazXWBn0klROzLQtYn3M1dL5mXTOUur8DcxWv82iSNDGyn7NtAhy&X-Amz-Signature=bca52c20d85026272a4583918747939c2d9fdc0e9d1fd70a5899df1c4745e8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXEVUS3G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHhNNS90hF1bvD9nOEisarrUwjJ%2BB%2BCW0RnCgHSLDPYMAiEAiC9i%2B8ff8sMasDbrdCy48X1FmVuKpVAepQlT8fddDt8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7ZTXuuchYYLNYxvyrcA7OOzNDxQ%2Bu96qwxTizlejNawtSKWspO6WZUghxgfP611ku7sgIpHli3s8jAg2NLK%2BW1YcyjBWr7s927AzzH%2Bwmz90kC6tinTs%2BT2ejXDlRAqgcPoztby%2BBsDAroKPGITpl6GOTNT1HKCRyJAxYEs5FLB3ZZgLHmjG3buvvd%2FvJW5%2B0v1vaYDL9oRP5FmllasN83hEz3q1%2BQ0ku40Wy%2FMdP2WQ9JLx9StVX90gxC6yz%2BQJ4mV%2BMWZQEy6k1CbNgSWv2PLJKTOBnTlftuW4znZ4A8qLSU37HrGC4vB%2FOWxTl6rBYszyNhkHF862cPsB5FBWLe57SUuIFYLduvHdOod3lIwKNRGNPGfYUf9WnZMuMjCVXLF8%2FlMl1UjUTmcyHnskkTsX%2FYikOBgUXu1iScoZldZ0zu9sjlDUFnyhpFzQS3yKmrUP98ibWUkwFJr3buJ7TLezDivJyRiJVb%2F1vDmp0PsX301lSkPD6sqp0onjsRO%2FtbhkXiCHfk%2BoQDayJnWOvQRuuO58YmzdPkJFV7xno8OBh92iKz7QR2xX%2BnsPQYT7P8aBnRDK%2FvaJC4rerqD5XJaGja%2FLTRNNiUEVvYLxuvJqzhM0EjjUnUSAqWWro%2FVacAhjTnL%2FvxKK6nMIeTm8QGOqUBs%2Brj3qslS2tW17gYbNYkfsM5uNq6c3oip%2BVoyEg3aegF7RvgmOodgJJVkznCPb7W6SHk3UhAF%2Fugn1GGx%2FFLRQvrp%2BXosZsmDnb8I9Z8PdX92nSg9rMHehI4qEaXigglktuayLILOinyZZvmOLXqCqwumsdYel3qnJlunwMPWZClUDUovWG8wCqzw2ubJViHlAjakBWG0Ea5Nun9pCp6Od4MScLB&X-Amz-Signature=9a8eb2e8614b303e1fef897854f794c8da7fa374d3d86ccbdbfcc35fcd32059c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
