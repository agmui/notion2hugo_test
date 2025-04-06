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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5RBFRP%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLu0iR%2BdVaMzXMstOu1%2BPoSVvZCt4eZdS7YGkioALGuAiEArNqunC7%2BR3cBDFvr8HpvAUnqm9BtodO64JaYGhjlD1Aq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLIJHJxy0%2BZnP49Y3yrcAxKqkdDcRgqF8dLkWsOiQ7CuMJ1h3xbeq1aqwUbe22589wIXjl0MY3aAugmJ9q1L3dnoNidKCL%2BVG34AMXls0I%2Bslrvxyz%2BwSBz9nORvLNGQk4Zd0NyYXgBVdZsZRB6jkZJmO5SDw%2FL%2BqvtnLZ4QjUj1HViCzmWL0drU8N9gM2aKQigjU2hWhni1SmGLP%2Fpq6L9y5Rh9saj5RERYEWvkATiX0qY4FF0fS3G89x%2B80x73zNw88GrZY55DBdvsBdzLzCfUhNQXw%2BbhXPJxETuUdLetwnuasaQESMqpPoEpvqoSzVtdsBvdQKlf58olcnGlr7xxGxF3eKZB23Tada4d0cAtjYqqDCOis5X%2Bb1xMlaKaRQ6n%2BnKfyNQ%2BluWQtqo8RgTWnpBZuunhj5CLpFfClJrQO%2F8isOiJNCKEPlObnkEaGS85UFh1WIXDd%2B9eQGcIm43abaKeVdkvdWS8%2FI3cpVRZBdhzdudf0Rch2Egi474BA1p64BNLt4YhsdocMhLy9QXLcNbZSaVpcT9QV%2FL55UX4X8fjarCcxKUyyJZqlfz2npAwwu6qPO2RATrTQjhszLe7bRM81NVp%2B76Hkb8OvsJY3d0OP%2Fz13cPrvfb5JAyraTm4FWdx7e2mJ0Z6MJH%2FyL8GOqUBaeLFCmlwjHVammClxWSykzIkI4NI1gGxpRqZcEAlnfpqLrfyJdTBqaKIJZi0ObrqmyTl4UTT4Vcvs5TQ6BoWO9yIk%2F%2FNoehoXX%2BSsD5kkcdhLveJjW4e4pX%2BpQvVUE7%2FBDHcIrFEDs3KkvSbIVFovJlXzU9XuHK91vNQ%2FxnMtIuaC%2FGmnzek4QKshkPA2V2BEdGP4hxSV3bAlBxLlsuEL68fdBub&X-Amz-Signature=33cc956fb079cfc8c74e78120f4789cdee19a5a43493776e02b1b8d89fb5e5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ4WEBK6%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGa2SXQt8gQHR%2BVLBYpbRdPy5krWM2aqF4EeD%2BnLr02wIgCWKPxGECxgBszCJnaF2MFJAyWD4PAWYAlmoyldHx8%2BQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDp2nU965E8YVvO7FCrcAz%2BWBvyEnaXgJDlgx7yOH%2BS5wFgDSQMy7gy9PA6Bydz%2FUsgGIBbcQf4eWSYZDLgj2UsdIjlMr%2BIj6pCDT1NJbi%2BelS2gQ0q%2B5i3iwfjMg2%2BWGhd8fB07PLFMCev04ZSsaLCPwi9yUVJqt8SRKUkO8O7ZHLGKPIsKWWp7yif5qmc8%2ByA7sHEqUrIWnte29PwuibbnNIdfcGSxijNbxBAKG6%2B0goh7oUmMfnpQrWNSse9kIDrkPHBYGWOyYXb%2FGR%2BScRC9esWIG0Yn%2FRuIBaJZIZTMioAPSNiqRbBbo1%2BrhytGY%2FaTEyEUSXok1mPWVzADdfgJOsMi0PoYtudTQT4YHsAqcyUwToSZlkyamq%2Bg7ecPZrhZ%2FCSXwe%2Bc3Wt7Dv0%2F2KULd5ERv%2BQ5y7VRrg0dRK%2FCXeZ21jjgX%2BpKgbC1p62t5BEXKlcZ02QoZx%2FMeDJ81XRIYtKKCtLrDABMYcU6QpfNy%2BQ7LEcaGNd6TFQmr6HmoKZO%2FfnP%2BPJOxqYrKX%2FpRIcxoHe9RrXpkUlMHw%2BAT4VNjP9PsrDPZJ%2BNsxbh2DfuKX2h5%2FaIGr5n8AGcMSg%2FTWT9xQEIKfQZuEaQJy3XRO%2FhKEldfL5fN9685OSIhI1vwDlzlEMtFtsI6reRMOb%2FyL8GOqUB2ik2u2Jd4ewMcSWp63unm9QrHyaEfCOMw%2F92hl0npdL8LABOkvGD9tHGFm6y16f9lr35XQM01Mm%2BPE9iVq%2BNxaGaxL9gtD%2BkA8TsiYcVqv4bgOUOPXQFrvFJYM1bidLaQQ7ASR9Zqbt5Tr7V%2B7x7%2FNrKRy63Rf6KdJTfIxGN03j3YQEq3WBeDPJWbb%2FwHqVP8mkwWL5442IumS2sgu5HZkgJ1D9f&X-Amz-Signature=62bcbc1d60e9838cfd5ed2c90240a2580d55aecf8fdd6892e9f2a78717ac96f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
