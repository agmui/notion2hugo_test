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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVLLCEV6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBO7nhwKt4I7uussaSbNxfYFjVCLbyolz2WNnFDuleBAiB9DnOEyITqLzHr6BoUE8c85aKAqsYpDi6I9%2BmfNxXEnCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMMarHO95PUoMhlRzoKtwDQAUhtXsTOyvSi0KPxRgyX%2BDoPazAXs%2Bq8saPFn1ZGyhw1vE2tBYe3dbXv6LuSS%2BSWT4U1Sz8yZk9Alnz4Huuq8N4LA5AvcZk1w2iSAqIWOjK7opVmCVI9nr%2Bjg%2FOMFNt58TUkQLcaBrwS8aY%2FZL%2FZB9ngB9%2BZ8tTkM4HDwvBuvPTZE6hB%2FBGj1eJTGt%2FAGXVtZBkxlGqHkifWpKDUmHCpGynsrFPxK8PLHy7OGAelY2qsRaPFC7XCxG8Jnwzc%2F5UnjKF9jnpLh0DZxAm3sN6Ir5%2F1IEEnlVOTcDjzzm6scgolnPYd4AoDPltFYoTYJulIApS0muGnyTuhRISkhR3nPYANDWMLgY7aKVcn7IaorwkhUjt%2FQnGA9W1l9D%2F4Sl4fldOgy5WafavaUb8lKfg%2Fqfz1TBJuWQBvAnC3%2F6%2FHJHyO1HuWeRdq%2FsO6ekpt%2B8obbU3j2uNDLzwF44HIL4a%2B8ie%2B4ODIxZN7lwfTFmGD64nDYIfASq6ExgWPFNRW%2B9rd%2BLQ%2B4PVzM%2FOeZ1dKNmEnGus6JVNyoFYlK%2Fg%2BDJEC51JaIsCYrQ8Fw4vJ09BpyjFGZAaGds7Sj6fVOuhpz%2FsqHaySOfHQGGgJviSf1VSU4jSwfeW6%2F03lhZxVqQwt%2BSLvwY6pgG0dwMMxywP5dhzEXwRTDPv8AFGkrP%2F%2FTtL1Er9O549OVH%2FGczGFCjIb53ptRA1ULUlNzAG%2FIe0G%2BQChFmaDe0NzTVaniSJmQd%2B4CdWUe0SofOhXuT46%2FAf%2BRv2LaOl7%2BXlFcWRbr2vsN6fvReO0b48QHTRILrtInMDER2V%2FNIvgl17XGygNbuz0XaN4LP2YfwAU8TkSY6WQxgldTTRWImT2kIJIje4&X-Amz-Signature=901d67713f821bd82e131e72c6c0dae3cf383be398a7ae2005f082713dd291a2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRVPSEZJ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDopRFGly8YSwzdZVnrSF812wva8aXXZBB0PvZx6EK84AiAapow0eyval3gT479skOwkJf9CUFDdQTY4Odc%2BrDraPCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMyE4ra9zMcf0C%2B4Q0KtwDoYA0pjUTYwbs%2B0ksRVU076XdsdeZ12O9T9bsykEc9vUdWfSpuUkyubhTbGjwNlPnxRpH65gN6zWTBLewav9WYyvcFpjvI7ihJQ%2FwxG0CM0KyBWHtbdKwkEQsGFQAoa2Tixsh91hcDgMgarZzmuB%2BAQ8KZi0QbFt9CUmRhdNv0IjDGVRL9wZQMFq2SBO4EWgLvst%2Fem8qsf9Ye6Ul3Aa%2FISQRQpzLPQRCyHyVthBjQEw7FWf4uTPA0BmCXXfMd7VLspqQyL1UReee1sMP%2BvrLhGi7rDSwUF4s3Gv3Uck%2FW7ihEEtWabBQtmxzD0bVT2dBzNhF0FkJ8O56LQZwhya5qPE%2FhvPq8N4ppxstQLM5emk3lpQhsThd2IX3TnXsMsTRlXBHnEiJEUVgo4jZuARAlgHta%2FHBsPyAvuW2JP%2BWJtkP9ucrkKTPgxcGgsvjOwQgCf%2BcQhj39sJ3VZpbY8NOg%2F1d3M6mbCEBoS%2FOQJfj91Yz5nbx5%2FsHufFB9PMJr3BA0P%2BwF0xNpd7%2FFjQtIVSnM6q%2FREJjAyzamk%2Bp4w0OE2tZp%2BYGKma%2BQv20I4NmSQwhO4Thz5njorHIsVNjYsD9aiBZmGKMaUtNdkpMTdRvAN3vPMFbuBCzROalmEYwtuSLvwY6pgF%2BlY3br4wrlhi3V%2FMlPeob9NTNA1QPiep24HHbRYrRPoJBZM6r0ALl3ZmrPsuSEIbuxqfAJ%2Bn5HsAYWT6Mj2y4MjqybTzgzyed5CONVpmZcP72Se9H%2F2E4A6RYjhNZ3BD0RspRJZdpRtfOPS2FsCKEyq42rFGiobK1yBFTPMSr%2BU0oo0Df4QPAIBvu5rp0lmPiAwOiODS3Ex4TEbXKcIu8gB4zek5r&X-Amz-Signature=fa6984fa9c11d0399fc8035ca35b2c5cee9879c940b2ae0707778023c307eedb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
