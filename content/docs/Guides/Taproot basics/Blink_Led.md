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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z366UIN%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCID0LlEgnkkvtszn29AKxB9pVo%2BQVxQwpScVMN7tC%2Bf4IAiAl6EeCBn01qQ%2FRnclgLveheWeiHD02zl8cvOrvxIPzCyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM7ifF34Q%2BBsP%2B6sS7KtwDtgrcRodjPhQAPAr5dz0xavndlMrMyUqQrDT2rjG2MY1P1S6fht%2BshXpn2muhPN2un8GN7CA9Dj%2F5orhS3Kf0jLlQ7RsdnxZqkkq8CNGXXMcPXBKilRUdj88%2Bd2wkn7TD6noLCuxd2KJPspFbm1ckayiW%2BbFjB6j7QNzgu7gXGeZKW17wAJRjkdl%2BMO6NmPS8rQ3QCshJcH4yJvCJu%2Fx2iJgik4PggnbbdTxBgV0Z3PyOwkLIMY03oMS09QT6ruomJdv0LfaaGO3NAL2od0Jn3%2B9JrUxysHs1u7xGLaWE5LqCNbwSOwvVhw4a8dZXGNrH3745tMEgqAZO6m%2F1ZmBxfK%2F18RaXM%2BpnN4tS01pZ6PyvUUDfpEwL4AdAS4Eqtd4cOiz1ggulOuWXJ2H1eY2JJtLQ8Qj4wzTlU9xgw%2BmyLeHn3ho5x4peVeZFs0OSNnoplVmwtB60%2Fop36we%2Bk7cX0W8tPQZ7qVanby8Aek18MIfw%2FbvpFjnTiH4HOtKWXuDrh2Wx3IXxRAOGV1zYxYsPpOOJYVMCsFx%2BG6R5a39QZvfzVJXrnS9QEfxNGnWF0rfDuPVVEQIrKcY2dIOLqJItX3n6qhulYK49aMXNeq%2BHhIHRMUJ9iesz%2FuOY9IMw3IyYvQY6pgGbLphc4pZC2RjmnO1UHVEQjlqzJkSPmYp7r51WZ1xXZLiQ2t%2Fns0N%2BdSi50Y96COa%2FwDMwv%2BeMkL0Yvyrw7vvfa5MlnemSHgPMKgOyph7FTde3bLv79Ploj0R8CqgXvQXUfXz5r7zxHKDxRdOnh2OxYTctPJZr3aU29erQ%2BuJ%2B7z1bxsuzezg2xlA57874ZNfGK1TgCUvSIEmougXO9K12gULkQ9V7&X-Amz-Signature=a1ecd5c449af521df22503ccd24331b6e8027cbec081aca4dd14149469d77702&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O4WOI2S%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIE2DmVpsItDYQeRSytE9R6ndobxMUWr%2FgmjrdyPLiDUcAiEAiDI8Et9cAwN0ieRmyv%2BRLLVs5Ehj1YDIv67rWGDfX3Aq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLUYHH7hGZtDYqiIVCrcA4xm1rRJhaUEDBCnmxLKujsYL6goHgafIyV4Pj85bCU5R4L8jhsc0nVcqJZbO9SCyhgMtvTgQ5RhZaxWh5lIEen7S9URiaK527g92P3jP1GsC%2Fr5DzVa8yfE5IBhAq05f7DeP%2F5WMEuCEqFBBGtGF41%2FXrItKDBMhs%2BI5On%2B69gF1h631Ru5kOfl%2FuHLvT7jcRBplwne5oGSXbnBOVakRlVfPAi5jKHg7VLge%2BGB%2BIJOPFxzVqrj488sEiuP0d94GXOhKUiKL8nEkUICGYcE%2BqfW1Isrf0x9BR1tTBMmB5YVEDlbCYcqJGbcn8fYvcY3GY95uN6W7ZCcFGTvC8c3SlgbjGWufmQhF00boYzi0CEziJj0tfdXGiKF0%2FUprPyvvJcO%2FeFO3OnpZFwKSQbKeefWznKXdJJ1KcSBE782%2BUTLB8OjopRsq3pWRcB%2FaW7KYpV9ZnmHSo5RoTpsxSyNGG4VQV%2FkbmAVcmVrrTRe5JvLOMceuzkfHQhS3FurwsnU%2Bd5Yy6e%2BuaPq0sd%2FHML7zczTg5ti7U3X7WgkfL4eSDYd1HNQ3B2bKU%2BZUwjInVYtkP4YmihqIW9pdQ7Tzg8W9zlaXR466w4WIVD3JAoceR5rrDrNeicYUA6TFcNfMK%2BMmL0GOqUBOhd8P7pGXUd8WDeauXx0kmbv7euOT8as0eRZZiWWBal8ZdaXzvEHkxf4J9n2IfJDlDIV5frCLpryYWux3wTvNqNpeNnUOcb%2BFWNtJCGfSqLJwOrwX%2BZ5g5QIHRlCXfYY%2F6mZ%2FXlxoeLpn8tYTwdD0PAvb4KKW%2FQ8bisgkBy3YLmFHc179ZmF6fK9PkA4yqARW0ZwsQtJVu1HAt7p5p%2BabnDw00Td&X-Amz-Signature=ee9910345f1d5e6714f90ef586c1f6ab2344f025886276efb8ebd80e7caca7a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
