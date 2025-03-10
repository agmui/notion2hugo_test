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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNQI46HF%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQC%2FbtG5yUMslj%2BcWItLUVtR5CCednC7dw%2Fz6yWr74%2B6LwIgWzRtrAJZgJ2FKRKc4IiKaRuymPmpOpw3Pr9k2NxhPL4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7ucmj3gHPe%2B4ewlircAw4eu02na%2FEeLMaX8gsI3a3JjHqj418Xu3NHwTjgryn6F4y2RXm9w%2F2jMx2eWEtoEurskmrA4OFoB92DKWvbOokc3%2Frl%2BXTxNgkawQvoWMkq%2BGg9EpefOtLM6mik9w2ZuMspPzJuP5IaiuVzqCr%2F35fgl9149kwU63PnDh%2FWJJ3xzoREF4CUEip%2B6TLt8UBh4Egj%2BN71BdxJWW1lPeHHk2o3Ha0Nb4MYW07GDsfcHqUZEKGqXRSbvTh3QDxeT5o5rSnSSZDZG4x8FMx3TorzpxrbAqHmFY%2BQsWotKBdS7o1WNPIjVMiSr7opAV4d60fKBF1noWBcLgPqS%2FN6T96lcM0jeM3PYsJWcQJT%2BPrl8J9Fy%2Bui6L2%2BBi162RtZAiQkNu0uJLM3CoinBkEv8jWFRm98ro9knYsrncqbT%2BNhVQmoKZp0fEOMxg3Mb1VBiUunu3nCdA1HrSZCkcE7QkN%2F1j%2BiiNh9RnA02eEYfWxHfZcMa3bc5TetNoFCG%2FhU003dfEhrrmRG9gvYNYPxiS%2Beq4dTMZVy4jd%2F8ru5mfUwOP719RAlxhtKCxh46WvJa7CP5HMPTv8AqIEVYfY3g9NS3ATBMI7%2Bh%2Ft0f0%2BqlySFILte3ZQsyuo4oGENJtnTMLGLvb4GOqUBt3VO4dHgzU5x4sgP8R2%2BXsxw7Qzyrdm0MSCiWeWvtx9M6lUu%2FZFN240cDL3ljELJ7Z%2B61zEbs8ZErSXfVPVk%2BG5NVHLHkyItcDJELb7rWmwU2DmvVPNZIOuEl4qp5tblbeRmvEzHfhGv%2BSRltUkpKc6HupwVdun3kcA0rRkSj55%2Bw%2Fp6LWb2cBLCPWuvOkd879ydlhve%2BJv9bDbGUTa5nuBOMija&X-Amz-Signature=e540b043a9c2e03f79a0e0c65be2fcdc40513d0e831e5fc54d5ee2f325d71bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CXLU45J%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQCUT%2FjRrRTC301Y0guW0WfYtV1%2FIXLHHExRpr%2BvNGUCJwIhAImAnfm1d3adBtws6Q4y3zj5IgEPfbFPyb9Lo8KXl6EvKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwykI3%2BYfMUBNN9u44q3ANjp%2BCM7GDS7wT99mIzc7qxznGg050nNrEYFrL3GWaLm76wZdoZiM%2BjsgBRxADFV48b81ZruhJyDAe%2F6HIlxMzarvmOV8t%2FiPQCzSf7BrTBtwehar8dbl5XJBz7iE6358oNFvSO%2Bohr6ebFk9VkBWgg5lkb0x0DoH2U0BOJPl2Ls7KpVQKVhHtu6rBhtbUV5FA%2BHDQ7eVaheALUs%2FkMPmuZP%2FsyZJyKc3qJ15EywqR1YBpmTHofwHrYTb36lF2EB4cWpPA31ujELQ0IK2J6ndH8h2Z%2BFC87lwJkquMkIsXf1PC%2FX9PwHXp6sxp5PuOwbHwPtOJovGzipMy%2B%2FiktEVeLITGjM1kHDF%2BQy6ySPwc3xiW1tCIWZiTp3CQ3fRp8S4CNypsY2Q1IyIZttg1DN9c4jiIjAJsJ%2FX46MK0jFJmNSiqOq1NalJ%2BKDqBYLaJ5K0QXP%2Bcys%2FSjNi%2Ba78s4V%2BzWEfZnavrzyugl6ux%2BWbEHh3zYdmQV%2Ff7re7U2Gl5iZtYWIGiQBMnecdvk8uMMwpDTUGv7T7jnWOgDJD2IldV2x7aIb20YeHxRypNqEDBh%2FvLFKlPDvFZhmT7NaaMggLaJYcAo81Kf%2B9dpZM64BSm1bHmbDd37X652uvLSJDCCjL2%2BBjqkAZchXoZ1OVvASFB6Icn%2BvUv8%2BdTB59%2FJmE9yzUW0rYqQ%2BU0Q8sExj7VHPQ%2F0jzXWC1zirVt6mbA%2FEga6pU%2BHIxAqfZnrtWARoLoUtz6kmf8mRFfbgB0XaxNiUVRHlyqyp42Epdrm8L4Mnjlrzo7USR1bnsa9BOrQKZ5BlRVHNZh47Nm0Vx1zD3qkN04lyd3BxKf1GtZ5eKEPvGnrSsqtU5AHMv%2Bm&X-Amz-Signature=f2c1d73f058ed5994107df718a8716df58eee5a52291771e37cdcadebe23dbcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
