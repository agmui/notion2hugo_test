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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7NUSQE%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDOgewLlGA8Alh1RVHn4ltMjlemeM%2FNAjVOj%2BH5Hf4clQIhAK3q%2B7zgcSujJdzzpNmFJOst5qHpIX7aDb8NVtUbYNF5KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK5roprN36OFFSz0gq3AOZl169kdX6zWq62fPc%2BZeonnudSD%2BkkIdZOOY3TTbQONOTUrRk0%2FIYtGpQBFaI3p3zBVTuF94r39Jk6SZXDwWXCYaYiZZIH01KbjSaVQAz0GVTQb8RFtfFFOHZicpPeQHTno6K3Hbq2klCxBJ447z8G%2BX0nwREeVUzwAqPB5AVAMfconOoLVL9HUMl6K3gaEALEt720xrV71hU7z2i9KYPQiurl5UNP6Qs7phikauJLez%2FH03seDeyZ3KzfRhDRAOKl9Iy1%2BgkKLi68ygtUl6UlLWYAxdzugBzKObAmy46Ce228UoQDMDbCg%2BP%2BzPOmtAe2%2BpIPiorwRrVw6zWyu1FjD49t7HFH70eA1XFEggIHOotJZ9AjtM9njR23MtzpHmpDJ%2F0QwrAjrrnSByHlnA8Uc3%2Bz7nmWHhwswPtVLWWuW%2FJ2k8y3JXNXqAtimJzLqlmNoAfVp3toywwYSHjI8yoX5FrvEjJzmn3JcwbdAXcnHWKCo7NoXMeACjNOp4rPRrY%2Bl%2BRQwAhwiGsXobNQbC57nxQdakF5aEyaGIx8YYQsmX%2FV%2Bvglwkcz84%2BvwSfjJxHchoz%2FGRigonbbVS%2B7VUEqmY05MmrxGpTWUWfrRxTmE24lTueNbxR5KnL7jCRo%2B6%2FBjqkASokBG9mhlUY5iwsEPxlq2gOAe3ZjynoKeldwS2CAk2z1pMXydjsmv25CiEw8z2AacJKLppM9y5ONROoAYCUkNaWuuKryJy1TKr5NKwAr9RGUCSqRjuE023uKEXVs6Xmrsfkcn%2FktT0jRDBRgGyaYNPHf%2Fxl5g3Tm5C80gc7Ey3yE4FAaWqLlHo7vJpGaWFGEZhgxCaKERBBBiEes%2BLRN6BCNOln&X-Amz-Signature=98538b83dda8030fd210ff5b39a017b1408d064713addee10bce8603a213f021&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJLQW5XY%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEbeSwr9A9tY%2FhkpnQP%2BJI9avJMe4L7t1fnwC33jNlBUAiEA6UtoHhk9LhEQqepQ2KUeWA95ae5juOykr9sIQ%2FhyljIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhfHYK8nbiuaRLGeCrcA1maSpKOrkC0NKf0q3Q0zOYNy1kmvmi7hVOPetFkfSTxECYB3Dl7ubp8vBFbQFOMJfXHOmXcB3WmbcPizreQ%2F%2Foz%2FjRTODn2jnUqHWwCzndfObGQCpSbKgEqIXg6pi0kteQHb3kF5bii9%2BlG2SwuIiAiKKtQYz9WMCRgS8AFD4g6BKQbwrIzOD%2BZr1d2CHYASm%2FwLD%2FCV18qYTSRcQq2sAe43WT4rXo16bdON3vhQtpHveDWKV3rXw94bvorZzUCnsfWEcGHthC2Nqei6j1FohyiJ7undqffJx7vmrJuP8PpP%2BNpJ1G1tIr%2B7l77eHyk%2FMkhucwXJJpVCNYYTSO5WqWC7jd7pncNX0v5AMvW3TOU8%2B8ArilFBFF3D%2BVsAn8aHrq7crJK27sxW4Tgzm8jyu5N9OniCqEVzMFmoJaWtmfvyUdHJ9TM0JzDxjfasHvTq6Q%2FR2YcFUZ9t54L5LPieVcqcWjMs%2FxVR7SfdjlMQKww%2F3sdBd%2FFqhAVZjz1l7V6Aju3COzqUXDTUmAC4WZlO3hiFpQSaikBsMUoxq%2B7nSj3LVC77M06IUiPF9x24lZ9oulYLL7Oqx3mS9YTsSux%2B7lQ2U5jzUJbtT7dx7uBNiCQUTNZbTazaPg6VkB0MNyj7r8GOqUB7dD3mohd3Y7Arbv5JLzvy3AsZ%2FmAVV9T%2B0gmuSVhHTAXuN8BhRx4eKx1qtaC7X%2BsvrB%2BkL3F9sNUFJczMTmRI%2F%2Bo20UmbZ%2Fr9aEOSG2INuYfcKZELhtSnG%2Bh0AqA0nTN5ZxY5plgToUfj9OYzWHzPyxpTT8pt6CsimtBT0at5FynTo52QRskcm97OQTVwLguGhc7vaR6YxOPXrvhAzHEA4tP4AfG&X-Amz-Signature=a68c6023a4cf7415fe4a3cddc94e7d155839e56bb67038260ed231daafd21feb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
