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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWOQOTDE%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCWuOnHQ%2FCvYPxmLvftDUR1Jmk3nlctTD8h9oM0ndTZVgIgJlnv0hP5ws40V4z9W1iYtLaS0bq6mJ1lBpzx1aCFNzgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKL1iSebsaLI5NKMiircAzW5CsduxfxSMy8zMPQq0cBJPZI0rAPpKJImuYYRhoDX%2BLMWUtouPFRp8eN2ufpD5yYdtkDrSUgo51xtDSKgJM8yrmSq4kuoqW3VY4Y4mCqJF2fEz5PWXF4w9kFYJ9oAiUIqoG%2FjKn90Zx5rlCjmemQscNbEDyHj3SnzvK6nqGFFzDQms56kqLh9OzWh33uaV3l0CYsVVpvWLck5FQ6x%2B6sTAzfrqZC1dDjVNly%2FX%2BZN0LtdGzXKRMHEb0NSAn9%2F%2Bxf5M8SAjH9tBekwtd1ZuBPpFSSAsai5psS8byfEzVkpgYjh4BLWKNwsCZvwMN7C%2Fwlzq9y2bhIOIvrjPvpZIz%2BYhujVCBu1KM%2B9GekXXEU9Sd84adC2BAKb22JJhkiMo%2FiyiQqYlNYCMfpK95Ga%2BhXs7uB1tmrtgQK0oKpAbESTfdUoiacQr0YT3DAGfIYRD6iHIVtZmkkiC5euqbtoHR9BWp%2Bwf8EDS6gTLNoV5XFTHmeN448edqM4eENC59povad%2FMlqjJ%2Fn8XZf80GhBD3HbFushu55NQGZnV6TCALCx8JBkygo4ri5nlxBmovwpRVYn0g7Gw29LyF0SBpjltnn7h8HHARbuFMKHaFrGvKAIihm3HrAAwCC1JevIMJeGzsAGOqUBrylmcP5DDpJwkVvQFStz0q99%2F5XfWS8sKAvIPKCRLKTMT%2F4iCjFpB1o0Ax8I42QFUgvrvDdxleEN0R0v%2FOGpba4xCAQ3IVSM5Pxp6px8F%2F8c9gwHnUJEhOuGyObEVEaHJiqvJakQJ4NaBG8nJ3Li1xoIy6v2ARzdkZEOz10t5yLwBfGeoRnBG8J1aKlSIlk1ebR3cGqcUSWp5SzVouQD3niKfast&X-Amz-Signature=062c3c19c913055630ccd177b03a3cb579f355a609b1c8dd8de1e5475d27205c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEVXMVR3%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQD7udAZdtlBzCJa2RoCsIlefJB0k8BsajA1G1pMq5mBTgIhAP948MDT0QDYOnGOQYbDkvg6f9cRtyA1qCrTyzXFvEo7KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwLUJ3oIV16B%2FFRwIq3AO9Vnt79UZDh1N0ELC%2FLYlNtj4d%2BfzR7Es8TK6Snm24t%2FQR9wK9swrDWAx6WBF%2F4MvTZcmhF5R%2BZ7bM%2FHqC67HkZpeMmrro1rk%2FW9DuC6U8D4T%2BLC8eP0Ee5nH7Mn%2Bgwx47whiuGjeTu4tcOtJxrYQ7prZTtPaw79vVoWmdxhY%2FhXfKVIiCpcduRB1fOPNiRTT2WWxYi3NELpGeg8SU1p1c%2BUa7tde19PFYBGxXEl6%2B4MfcNHZK9jMUJ165BGhMn01qAc%2BNSabLfdQvBwojWzYS7XtIWNDFIrVaZGAXwwhFaIGjvhdooI3u6kZ%2Fc4LVTmhP9Iuzonx0WdsWofI%2FaRp5Q%2FGiyKz3aryUHWXk5%2FOV0O5cWYRkQYnv5zRHlz6TscDx6l1VkTWemYMO2ayUH6jn0WDtwKm3vFFsl%2FjhzlOCxBEOmVTvphIFVAz4i1z1fzgDFHFgZ%2FBoLWUI9nvdV5QoS3tJD3ussWGxcde%2B4n7HTAKDg5O0qixXLmjhgF1LefLineKpQFL2VivubDQ0wPhKn5ua2Belm4cwwR4xb7Kqq7w%2B%2FdCwJX%2FyshL4cPi%2Bqqdk39vWfZZ44LLL%2FmhczRTgZOHaxuhEX7dXR8uWvLsgD1z74o%2BMBrnl6ILbrjCvhc7ABjqkAVokSIEksvpw6w0cdwjuroY9XVxG38H6RWB4GqEGzHKgmjVSFavmpa74ULPUsjJ1iotDcQt1sFjtOz5rT4f%2BguvaKdcIAvRgBPZtLZpHf8EHmUU4G2E1suG9DjrbG32%2FE1YC7zgLhH%2Ba0qDLZxH7uXaDO5g9rtziE3GkY5b5NW8mWXzWh1azCvb9clwBopUfd13QRlPFt%2FbvObU3GtqqdC3QBL5d&X-Amz-Signature=25aa8948e9a069943684fcb3ca20a87f8e1022913e4b2718185ab9923bfe902f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
