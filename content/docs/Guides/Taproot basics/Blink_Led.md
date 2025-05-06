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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELQ54J5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn8qM793aRVJhPHIlbaJ8dzYuGAyQLImL%2BAlgsH6L05wIgTAXbrFjElvX8J%2BBKGc36j6mJpu8HPTMbINjyr5gEjx4q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKciNtlxhVKQACpviSrcA4rojgS5NRNzFvoT3q2rn05BW0FD58qqQ7HQK%2BVNOF2Lbc6bq6kvkWDBwuQFIuKf%2FyHmDkjzhzo6puxq4%2FVbrR8md5TqJnQ%2BhJkHNpRMXxS60pv%2BlbZs05ryg8rYCNwjcAFSAuSr7cWuqDtYZhu73RHDFegvSgKDJ%2BuOxIYe5GadJgMqU3JZEm3XLGT1AYBIbOgO5%2BXBhSFPnHqWCr9Aace3d1F5NDIofkxtwYR3u6MpCJYAgdb%2BCGq43BTBHqOPq1VjSgZum0WvkrieFFH%2FJ2haYlBMe7BugDb%2F2CHJFlvebR1m4Q7wJEKP4cpf0x%2BiZ816ea1dbR3wcjoK5KK7rbJCYUrDNpC7TDIcw19wd8mHljGqiBH9sjtoKjaVEyVyVH2JWSwIioYXbJ%2F0%2Bn3kYuiHSWIkg0a0ssSXm6IPHkf7oYwqpCLto7XAcv6rYPdl%2FPfskIq2lw1iKdt2d7ym4T%2BQSeHdzhQVJanlwoV2P%2FIenAxpczhg%2FhIhgOuV5O89lzyMpWpsfqV9zQoB3ZtZtiRKWLGtbfLlxDvO5ReMyWNp4ushpRrxchMlctFl2MwWWEx%2FDWxLj3S0wrYygz2wB5ShLJWLpEyrRxBry5y%2FagYvvIjPhWOA%2FJt%2FP78IMNLB58AGOqUBP5NbqeSRNRIcwOovm77oYCG779E8gsMgp0UailDd43QUr0aXi5oawTj1m%2FeU%2BQhiqlYRaS2oVmZGRIQWRjby7QPxWPoiAXb1RazYslDpDfNhBwf7bEezAMdaGofJvGnuHxpmi83zBMEJHOOpVWW46w3Ahye7vRav73lP3Ni4IQ39dfnR7ekhc6VfXqaAvc5%2FsSXwFUvNxUqesPF47NXYf%2F949%2FCY&X-Amz-Signature=c875f9ca6b10b7d30c285b4822c2c98d742c23d9df1be569742c461d63a1db34&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4APQKND%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAvNYVmYwEV%2FltFP3TznztAwnT4MF1ikzEcQUkJif62jAiEA89pLqzQ4aBan0ANcUgmLoUFZtWEkTiBU6H7%2FaSd9h5wq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDDFyL4JBcqIHl6ji5CrcAypE57mYspi2ozWHNgtsKqiOMW6P4u7d0W1D%2BsIDs%2BTlWtBEUMrmWRjlEueksx5NlCiBowmfMNCY9Iktzmw8GSFqXpVJLmwwYWwKKrGGZ1lidiiDlXY%2BzzVmAe0zJset9IegcA%2FpA2lTd9ACyA58Oe7QOOj%2FSfhFX3Q7CHLXzCv5WONEzniUjLZJPIky7jJVmrEz00Jj9xMRH7CZknLEyy7a6ESotQp4%2FAARh%2FKD2GjlAMca59Y9%2FzjPszarW1JVibPifYyhmTxkPlkFhkP1gjDWnk4hugNmDrDqCNtt9Zv7Cmq%2FkvhKeMXJALqC%2Bk3iqkYP7DNmCXb4W0n5WmoMsdNKMFxTLVLxWpmU5jwXkx4k3nvDfBtTsxSROLfCqh0saanVYc%2BM1QcJhfWFZbqVfLYZvB%2Fjq3ahLHAj952ftpFQOG6zzfZ83yGtUF5OS2ezyBqIeuW9m9tMXwwQfOjEs%2Be%2BRgkYQnv2yN1xqULnpRPbSw5D3C6zZFahnVgxAosy%2FVrDedin0D8iUqc7xDQDmkv%2FdpwqGffPyONPft25q9kaUGufZmjUtqrjHlwm1mxA%2B%2FLOh91W6O%2F7tODkUKZ8hIiNKQ4JOLZ0UdfO%2F5j0k%2FIvWl7uccGXL4qylOWAMO%2FC58AGOqUBPkRHEv4bRZSNBLICNoCV8kLzSuxjgq%2FeFpTxS0DCP3v2ccQe7KEZC0CDgqL1KixBDIbmP2%2FE7wYeZXf2V5r9nFj257iauUgNS7ixAc3RKXicV1t5UhKIW9dsYzl1R8IcCnqefOINpHHbP8SPpIGkIgIDZ%2BTGAQKT287u0j37o9y6fq3M%2BjckyqHZORtNHUBBJElTHd%2BpASfeAouNOjULP0gM%2Bk3%2F&X-Amz-Signature=65f817d7c25bdb4223e4cce31c18d56e8a7eb80786674dbec527d45decc37096&X-Amz-SignedHeaders=host&x-id=GetObject)

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
