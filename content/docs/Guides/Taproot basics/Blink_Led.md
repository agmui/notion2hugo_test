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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YKKAJU6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLIVOR3C3QZ%2FaNTfmIxV2AoCInQmgkxFb8iSlJMIf%2BiAiEAnGkbzxB0gYtKwrUPM4wjhhZn8B4jVcmYFS0g4X4IbWIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFZi6ML9%2BEqVMBV%2F%2FyrcAyb2MZrNSwZ%2B%2FEUAtSw6AaU%2FUZsSZo7bgE959MwCHfX99rlDcEnBAL5qvARkLszZEN6lv1DAIj8%2BClTYddp9tcu1iIOGa2WlyeBmMh%2BXx7%2BylZUGkoB4paxHCjgGqYsukfxbnGgMEjo9FZEgIO4LR0tTXMK3grrubYzTHR%2FGneTzz%2FMqE5nNCTQaAYXMuYnG4M1Ic1f%2BfcY24t9xqO2lTRQ3ThJguns%2BEqDLUbU%2FNPHT4ZW5oO1QcSTJoxk99O4e5qk713vqkXL4ZSICdFRpiaX0KacGhL0okWNlIJEUvpb6%2Fqkuh2YussM3xkEO7FE%2FM9appU%2FvIvHhFnsbkT9oqnXNqbjRjghAwbuIzvMHzFHilrjKI0K%2FVXcKrlZh2LWYZmpsSA9roXtumLQYWSEhZ9jruq%2Bcl%2BiwACsBPf1jDIJ5Xz%2Fh0AxUJG%2BVVqCntJkdcvBkBzuT%2Bfb1I5FuF4Qq9NUoH3qS7ASWyyMe1v0S7EIaqsP9QN%2BXm8zqYfq4%2BfcCHziWI1ngjWmm40Kxl2NaFBo7wQ9%2FJ9gxZV0GDPqnzb%2Fb4VoweePPTlejWYhvTM0DQk1gcxZU9jX5SNgkijr%2FnsLM%2FxkZyEY7EKcTtyMV2%2BjA12Xt2yzFxt1a8fqAMJK8l74GOqUBLpjXkcGCrZsPtpUKcG2UPjW6ZKfl0pC7zcpEy98AgXvL4UGFqEQTVwGNuz%2FMA1h%2FDuhaHsh5Ov8xV3Gxwy6R7%2BrtZz8quQ0y27ZkKzpLXQET%2Br%2BzI6oGV2dxF%2BCrlsHlwsAFpz0xdaT%2Bs5smpg30iWXG36H1M8qzWj%2BCdhnv7m%2BszDYnmgh%2ByoAaFlKWSQRLS1jD%2BuM%2FrGsJcV3V%2FsCRmzmwYOq4&X-Amz-Signature=8da2f60c442efedd65497d644f4aa108a38f13721a868851fe037f6a8fc3e085&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAYL246P%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdA2UMyZbOMQllRsDJZhYk9Ip7OR0Wjx2rbBSqyMzaVQIhALpYFDgPnxjLAb74ZSzMnWzh1Swr%2BRxfiDdwRlIyBG2IKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc6etUeALYHCtyG2Qq3AM%2BvQL3qyDtdivDyujzGm3eraIKfIxcP6V07KlbBcqwrJgMuN3kPU9XHeiHps48GVjJYl9jkz0y5f1UtZibKqmVYvCs7aSlUkVmM%2BWZsnn94fI97P5VcKDII3OQXJJx9k%2FIO0egDbqi95%2Bq3CUnKCp3D%2FVR0hkrZOocmUr5dlGni2QNwkPt0Xd34bwKnxkKqgQrrWCR50nkwE3ZTvlOgFP0dTmDopaxy1V0Q2n9WMXxhE6yBW%2Fr8AJpYCh9U%2FqfcV15aJOH0%2BJS6zC%2FStT4OoOAess%2BnlWEtMeHa28gfft%2F7GvwGdt0RzbTaehNMDtIFV2VL4timIq2QzleuYGb0UWaAgdq750%2Fuwiqdmx5TW39M65gxq0g3R%2Fag3LKH%2Bk7YSnKlP4Q%2FTYD1ot%2FQNQWcfnOEfS3wqRS6YNOpijSvcU13KuNZBinLoI8PUqA9iqM%2BHo55AkE0uDSEtQg9GoWqoirfkEyLRefABTz3tSTG9%2F0oRttIEwfZ5IPWy%2F140U4XfpzhuoHV1XlC6PN3da7SahkZ69r%2BDuciTMupLaJ7Dw7vmKIELmPxwVIhjjXdjFn%2FEaJWA%2B3tTpLR%2BYp7GHtSo6swleUiacB0S5%2FBfAbTDjV6QcRlNFN6ZmpzvqW2TCxvZe%2BBjqkAafWu2TOxIdgQDZ3GVz2bzd2wb4Jp2ZRgaztjUbc67iva%2FnYI4mjYH7uQes3qnnghnCr94iVgKdHqA7LIhzxF0sYv3mQAPHq8V8sIODeZqltXIB%2BMyYgy8pQB1GqkUWKEAo0X2vAm2vbBDNOl%2FhEfviypJSctCn%2F2s1AVJ%2B0QKiK8MgV2f2M4OYZ27bCYPP2ELPAokHzmdYf6Q%2FDcjiRU48hQKHu&X-Amz-Signature=653d6635422be607e36f83ce7ca8a306644ba8504a01d05210ce9f03cf9b3b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
