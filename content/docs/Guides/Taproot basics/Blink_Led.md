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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGTQRTD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu2U90osdv7%2Fy7VnHWkVse5%2FBWjKCRuKndnko%2FNwPRMwIgfPlpdXoBecfA2sbYVWmdDiO0IZ7ZNiOSZ%2FCIGA2euyYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEY8%2B14my6%2BdZdNFHircA0iO7sSzIjr7c7SlOU3SgUvYjkv1GFh4PxIG%2BZ8X9NzEFTDXRpTKLLJtvFSKsr7epbATKXj3Lcg8nkqjdAD1kBXMwvKwKQncsQYa9g541tS3ikI4iwCZ9KAdpBmO3b1VWSfl2MleFON8jMM3y1mCwApdwLufpJzawwLx6BKjdM1Z0L6HiaU9ZpfukyWT4CZUPb4Rf5qwrG%2Bh%2B4oK3urZBARuYYfvK0iF%2Fr5viIG7qynSiUPDGkcFPtjU21VmwI2fjM4Od8x6H2mM5Vj2jaVVSNHso1UF0fsNpGZHm8GanA9t0JhFbj04b3Pg0Lcft450P5MO0FMt1CgMx5sLgQzPqdGxGgA0ktFXxWItb7X%2FV7BfAQn%2BNzaJA1FZbHJakHngJMTfsuXP2Ml%2Byy8eW0D74077s6x63XFeVRC8yMcCd%2B%2B7zAtcGed3eKB5GBJxO75zMTZ3HuH8jlD47OvvvJ3HY119IJpFyni9O7v0RAjx5jdRzCnUiBe1632qtbFIFWshPeswYUrfekNWsl1NRjjbwVxLV1mhiW36iQI7Tmz3MMGHyuzYZH4EYdc%2BsnaYHutJEF3HrhPM7IGrUuWHXbF1DUYpyTSFWbm2R38ngL6sbI%2BVou7WpNS0CgUVCbgiMMi0zL4GOqUBqgrVSy8jd3UznjlRJYL0z0P%2BghitKhUxbjKvmSGiwJid0l%2Beo9UbOhzXytYz0v79tSbwz9PbU%2FNU958LVjhhCE4H2%2BqM6LsKRme0eD3X5PTXg1zLKoqV4JulLasojP6rJMCbLwQfLlY4yqlRCQauy5bg3NF2IAklJnZYGXbz678uLshLVHJqBncoy9A3rtgsOmZGsfo2pRgIV4lEYZO7gEshJaZm&X-Amz-Signature=083dad84fdc553d165b1a1885d34456d560ff3915904faaa422401ba3a5d2208&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FSHJCET%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T181058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD764o6%2FDfg5FkXhaQCmAJ7cst4hzy6RS1GA6C%2Fqui%2FmgIgPqFGJaPO7H0EGCgwKRVCUXrWZh9IoUOMI3M%2BFuGd88MqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOmah1Zjf06XrXQJXSrcA08rAK8DSgH9UubgMumqI8p7zEqtTiVltrMcQtdviXwJZqNhfd8zE5GBx%2FEM0v9Dql0ERc%2FoiQIUJuUaVNajFldzHqF%2B7z56pAT8RwdhDq93SOePslGaw3ZdnnUlE7%2F0c%2BxVu2hrfOwguGW43sjFo5UTQQHtTE2yscbhvL94Tp02Wo%2BkLXFRjFslfkouBDCRQBA3VZhaw8DzgdvLMaPU2m0OIA5wqtpFP%2B2LzhyMLDtZbMyxr0gP2TFPDJYryUwppgS6AfwRtgdjGk3CkHOd1l%2F0sm3hYp5rjWshCf7jaQTMkP6AD6wLC31iNEmtHyR7lvkGlocbH6fdlM3IEyy82cpfIuBcH8kojIxb0QoLypoCF37TuZuL46iQmkqHexvSvdb2%2Foio3dYi2CK6OA%2BLgb3%2BVUhwbxI9pKd6JlnZP8QH9WxqimSWVq%2B2xC8lqfm5KWhpixWJn8FGAj%2Bjjd1v33gNIEJkjUveQa006%2BNJ5Zd5UM0FoGaa%2B%2BkmJHq3oNVDV1cR6wMl8fCplxx7wPGV1St97gMpBPFvvpxPuwLqD7vV5Cfcl48GwFPPRug0whEQe%2F8i8GIPf4c8VDQISXG1r6%2BvOKYFriFENqdHUPN3OuwDQqXGdGjQztwjNXxeMJO1zL4GOqUBG9TCPwk7dsysBPKmdy8ZYZ5w3RjaPWXd%2FjrB3iJsrmcpy4%2FwZQnMd72iLT9GR0zCs6Vw%2BpDbCGAQYf3vnqOzqYekDoz70uo2QeKR9W%2B0olIBqh%2BofNri6hqV5CnuOgMcbFgePuvlZnVWTmT4nUe7bOoGZlpFs6mEbiISWFFddTk0YNb97mkzhVCEjqyd1XZO0DU0a9RcAjqx%2B1CcjOGqa1XS8o5%2B&X-Amz-Signature=abe9f8e911dd04428cc98ac18f1846e802957b23021433547b23b50c8febed12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
