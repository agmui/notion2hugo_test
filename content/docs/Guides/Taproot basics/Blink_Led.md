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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMYW3JQ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDIwr0NydDfPDj7uToAboVu82XcTTRiVcpazVpMI%2BvRwQIgWvmkEqOPRGXl%2BaquE8QUmJfOp%2BPx8Qr7cpsVoAXDYQsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGNyYZ0U5ToYw3wcZSrcA1Zwn3%2BgOkVL5GtsJD3iiVtWJ%2B2gdmuCLoeP9DKgNEZRtEkjqExKlnUG3wLpzaF8OUWdU1XU7UHyAdOPpz0AIhV861ktfmGrfduUAgx26U7DZSRDi3tA4RjYXy7ATi4aB%2BWXnyxOIaQaRHWF3ST7IZ16%2B%2FsAmwTJKpXsbHetWhCws3MkOKP9pOtmZjphl5zO63Asm%2BhzlVSCHDclz1FqTZppPH5qk35%2FKF7p4pHrv81RnSXvAN%2F3dIiRCShKuBj4oaaAOoiTIYjhUvqbi397a3HJrzl38GyP%2FSpRmF8GtjUfvRKYwNftza2sZ780gL6Q3FIQEliAwNtvq6eAnTMP4gf7ljhqW0ehEJlAhGXXyegagwLwGvU0rOMWG%2BOPS%2F6pFM3hdRBfXqxuVNR1HH%2FJ9JDtXEOr0DxwzyQ1xbgJAESBXWdPNhWm%2FhYK7zz%2FLsgdkO%2BfC1%2F3DPBi3s4sjOCFVXjaFk6DcOtB3ey3abrKjwPAe%2B%2BdWslYqZvhGhzm9R1bQrEfAQG%2BwNUrQxtL5h%2Bydp4U65FcWzHK2V%2BQSMhgPY32QL4LXih%2FLCV5l1jMld87sOZrsvDZCCk6FInDZSq9x5yPrwVZs02MN%2FB24V4s7aPYJLF7GKuNtN6kG9KTMMqK%2Bb4GOqUBUwpsBpiAEIB5LugjuthYQaN9BkmBLdMfr7ZtfI3lva9q9ZDI8KVklojCFsS%2Bm%2BHtK8ajhHl2P6yx%2BLQvOOGZ68tiqV9B8NYhdmpnQ7cxyHKO9o0LirkRAFPl8gXsAND2BBkYTAbX9fCchfrLniokNEL1p6BmmxB70k4jn5FsW3e21TryBVBmy%2FnbfeGfX8cvmCXX5BSLYjn94nWNyHiQOidbygZ1&X-Amz-Signature=9e35e33339d665a84b8cb0d84163e6c77d69806662025d78938fa2d7a39b98f5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AQWDJQG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T050754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHt2G1WQRwhpEOR8UTWW16TO4pnMoTzGNWGmU9yfZySdAiADuOptT4m751WmTNBMcLGWOD8SIU3%2BTi7ZAf9bxbTlTSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpY14KEt%2FCet5fRQpKtwDa0dlJfmYtvyXfk54qI09Wx9g8O%2FduLZuQWHyeAZxNWpv3BlvvsoCTWBGti2fPCO02ONDrYv1qfZeE4Er0uGtPkMY8xNyzR7Ljm9j%2BwjJJppQfe%2FIc4ggMAP2oiQF2Wd0z8uvpKn7T8O4BsnQKyeI3XBOmSQ%2BeROl9GbYwwwhb7S80GpgJrbRPnh54mxb4Mbk5BLAZNDpukY1vbFXGNdXxHKzi%2BOVRH7c3Hco31DJPsGuI8ESwhQ8IWglTApvF%2BtPP0qVZnEHeGrnsZNrYMRpu0CTnha2AOlPypSlQ3vHDk76ET4qYX%2FTpbLkeyb8A8M7RLfRiMyA34v4R3ArSsQi9zA9xaVdIBBjtIxew%2FWYz87TG42JSCtRSIbEBZfpdX1gtlrgWl%2B9qvhHVM%2BmxSGfyg%2BOo6sruSqiTtWmBRu9l4GICTSX6pymKKL5I%2FKvMf6QI8asCjj91j4C82KOwE4yjnzyxLQ%2BA9M49hi8zCiCT7kb06%2BTwIASoF2t7R4Q63VU3wnqebfo%2B7TQ63FeoDuF25G96YKfCK4eu%2Bq8U%2F8wci%2BLcJwOLXqj72dkOLsmTSVLgLKwxDTIx4w9sxBF89BkKxjCKDT1gtuqd2J%2BBcy%2ByRxSk2RhyGeWoQdYKSwwmej4vgY6pgElpD3GiZJ4dGO5Cs7i93lMrfeUDnmoPqU5tSN7x2EOsfVFrY9TMhWOBJpWZUHNkRRMk5KNBxIw9OzGJdpAeavHYNXEA9FPET34WQUzCyBC8O9En7SBxtOnAvA8E3HSX1rAlUrMZYaUZLJfPt0WqNRgZWLJtBMnd5vhciJcLs0jShUaz4LQfH5GdpN4svDbZ7vzxk9ly%2By34qK6fJcdplJdcWFjO5TF&X-Amz-Signature=d70596bf78ca78972ba96cc07d608f9428ee038e137200a1acbf1bc05bc08b99&X-Amz-SignedHeaders=host&x-id=GetObject)

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
