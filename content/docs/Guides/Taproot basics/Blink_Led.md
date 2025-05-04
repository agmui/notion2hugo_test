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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUM3MUUG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIHx6Cjq6xsFetz%2FTMESqa3iMZTS4AmRyrOZrH31KpwWWAiEAiaUP%2F7Vx%2BUcJJ4S2kOfw7H%2BLUj2WlKC%2FfFj%2B%2BxPVg34qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgDJPxmmLWdYb6JDircA%2B9L7lIxtd%2FfaheEsfuX0llZRmE0p46cyYvmTM4JSz6Ae72yytoWKZ5fb1stPrh5mBGF19VA112qT8qK4ruOni%2BZgCl5tosm%2FJIfYJzqYE5KHlNgZBGtHn2Mer5J6P2VtW3LgjWg7Y7YN%2FNnqNMb2WasfAGyowCr147%2Fn2Do4hNArKpqO2v%2BxJJ1V4cJgVwkHRJ06dhih%2BRmaiW8uo2jj08kZmh7qQVJGvhaqeU%2Bb%2Bj9SLCfV4nNUbqz459YS22%2B2VmTdd8vFqiV9Li7hy9yz8GeczUOZ5VX6hY2RcGJMYOL11Pez4f82rTEIWKz9H7eyQBwQ18zW8Zdgpaq9TX2GYjjb8ML%2BLJfTdgq8IVilvR5xcIMrbSC1auSbVJJt6bVCQtMZfp7oEjOr3Pge3K9WIlOdPEtkX8WT7zCFZtNjQ0NwoX5dqbmzqAE%2BJNGRxTJWM7ClYFBgzW1T7tiQrtCG2gCEmFUzXXfZdZ0F3G9whoJSxRZSDGkGqXC5cglgH7wDJd%2BBTRsc0y8br0%2BO2sdap%2FUnCJtlFCSJamd5fXIyvIYqcBOHCQ2zf28vAc%2FZWTddKf%2FRyfvvSa4G739HVfHDhPdv51aVr201ncnpIk1kDVG%2B1ZGmMqquGaTl3fYMJ3r28AGOqUB5PNsDaXCeQAV24lUb2hpVSGq%2BpachwRmpgY2q010%2BchbPdcNczhlvusvW803269CkNMmI9PW7XX78x90kvk34pSW5lPp6PdtOYauMFOnYVWddsJ3k4nORwFJevmpcmX5LAijYoJP51cQexlmdk8%2BUqb0DR3HJbraZQqu04Em4pG6x%2FdygKj7%2BlidXwjCqJlXUFcB3kiraI7vkbvxCQ2e26bGSvtS&X-Amz-Signature=25f6a56158891085717b442c51df68666b999ecef265145170bee7a0dfdd849a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JUEXP44%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T070750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCIEO%2BP%2FV8mSmG%2FeqkL2BKQA32D%2BOxjotvHqae12hY2OwIgepR2odokmQMIOPNgCgtbd1XXQ9Bz%2BmrtszXEY8GFmEcqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8u3IKR%2FKH%2BE6WZmSrcA6UHmcN83czO92t4hh97rM5bXn82u5vpEG0Lbez6g92B5eVpivIXhGYLIgfoHuT2kAbbnsQgOSbhIy%2FOmd%2Bp6Dn3ASsnWqmG%2FHnbbwN0on6BDHv%2FC4PMiPDpwv5rIMwTfNGrsq365bKCM11eU0IdCba8A3rnONjKbN%2BX58EoWOJ17OEQ0kbASo6yKsMexgbpmCG5LN8WIi9L4Gitx8ZNwbftr869WpyoxKP%2BIqpUfwsBf8GvJJJYC6Qjqi5alwvW4r5ijqXzuTIOOs0z6A6mcceveyqfRGUkN7wvMCU%2FVUbOD9em6Xx3T8KGVRCsWU03RMZ0uy9Jt6k1FPcaO%2FP8BuQARRFBRdY6%2FULXsueF6m7cJp74TYzmTydUFT7ZTReQObS3XdxF1whJIaTZe1upBvvaDB8iUBH86PV7E1QNxGi%2B5b%2B%2BaeLsCtgd%2BYHtEjh3arRE7dLz9CI9iwKYamej21gK5lP3Mbm3K0U45Iw3wBpGhNWIN%2BBJOfFkUgj38VCWF38KI1CgXsDOgOY5dUn%2FzE1508wyUgGik91ZPSyBhtj8LUJVa%2B74vGsecXdrC0xP5Z1DbJT2nre%2Bm7krt4VHtRYG5avsglcoL84oqw0SZ4QCZQRvKfkkRfd5HayqMILr28AGOqUBmJH2Zldi%2BAEiSHRzzC4aLw3N4vpTxrzjI4z1nTlkYTQA3EUlXDEA14DPAR7MOANcaXXcjh38UkAs%2Fi0JU4C0qwQ89bCKt96ZHn5yRuqsO6jumFUlRUZm2GrauOwZqKj9j41RF8Xxl8iwjeKMEMbi8LvB9tkud01FbZBXX20t4nF3h0YcY6fV71JrHxLgsSV7s7kb3baygtt3Sllwk8yQ3qBCayHa&X-Amz-Signature=925015ccfd2a0c63cd996227343ada624295e8d76c2056dcd1fd78dc76c6c3ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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
