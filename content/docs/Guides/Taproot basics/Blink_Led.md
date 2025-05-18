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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDVOETQ7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATQ8yKm9ut6hWNLPN4MarTnhB2418MC2W0s%2FoshYWh4AiBdREj8FN4VrqOEAxrYm8XgFx5eLzaoefW4gHHOwGQwGyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMKqARJv%2B79EhGR9INKtwDHMASGfq4B%2Femau3U9GU2Csu8jyd8T4LDfXaNxD2XIPTIWZhX%2B%2FApehXMS5QkSlTmotxC6FpzrO4bL0OiWGKuqCtKZWRSfUXOP2bbCziEMnCKfks0H%2FWbs%2FV2sY7FMc3w74gPduV0z00ETgzqLTEzYwPgbjlmqRgWrTGs1DeaxE5ipUmsRYxavKw0smJ3FPVcf4nicgFTbWJL2KgknbOvNWccztQ8HVE6aiyCLpppRBNg%2B5w9VeR17BInsVXBnaz6hn3HHqPRkJLTENPmA0b8v6i9JNM6cuXfSXeiFs6hIDbLEv889XKOA1gcdszhtG3HW0xSCXZGBZ6ETAzoAaE9%2Fka%2F4gxAgFD%2BZhfUe6HKjFQzls8LDa9CLss04xgk4LknrxayCuRUdMl%2BA6T6KeRAk76lAiv9I8KB5Pk9%2BNRBus2mTCyt2zWEDRMRZCON1OPOtl1xtfLJyDYihBcmbgX7ujRYCHesqymuqTyDAJ57%2BDKRlMExsNaKraArjqIWrQ7EjhW1CIGplkqinOgjUWVt6RHmXJtFjda%2FqKUJpPWXawVVdjr4P31Glq21ngHtC0Y%2B5Z17y6EY03bz%2FmSblG3CB5Y3HiuqJ8P6py6WyjVpC8g%2FKiNDOw9chSMLbU0w2MqmwQY6pgFCSgiqMGHSng%2BvBaG5HWxkiNI%2BwKmWT2i8fCzJJyNJ6hNs55T4Dnwyb8cDrnRFA58Pso5kqI%2FwWyvw5KCifKX6A79cCabr9uLiW1sZzmvKBZCSK1Fp45ckUOU4ZErKcxfL9GiH%2FynpCr3gTHL1EEV%2BxK5Q2X6VhdXUs6oxyhCR%2BTAcnmoXvoNMZsrxOIINO5OgBIdYcP%2Bzbmk7iuZZ%2FcFk7HiMlKWR&X-Amz-Signature=9ff2c58c8df23e6178a9c82ccd6ea0625e70eb489f31a13f49611f19c8ae5076&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6V2LTS2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7tJst94xgFiSQE97WKh675%2BAh3FqMv75aWF1OhgPQBAiAnuxuRvqmdkzl40drJRc44V%2BwrEWFLZ8UnI6Kp6sQuPir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMR20Wa8hJmpM%2B1phMKtwDURFDEq%2FbmqgeLd%2FkIuT4KyGAFUZCyglJRW7N2o5F1KMMyVLonVMMp4MYopbb2tqbmnMoA6h9MSX%2Fetx2bUy7phbI0mKOX6lA3mENRf6P%2FyeVfxrSgm7pgoT%2FYy7XR2Cq3XphdvKyo5TYguMp4%2FO5yT4%2B9tNjgIlKXBmxLLmgUvVwyIP5BzH2ASyKR3giH6BWTgLDFOukx5L6%2F%2FZgIFl1vrqJxYdV1HD7J5uTOhTVGVDDW1pPWE6ec9iyA9a13XkLZNLZn9dnBl3YEzuF5xUCrYE3V0tgLIgNkDkFzStFeNBLOpP%2F7ua111IajiCaEgEDW%2FdtaQLvgNExJZZbEScGaCexvCk4Om1qbmJfEvI0bJ3TFhdZ5ecV%2BPPxw0vTWKiKwzBEXINaboiO65sDrCLhDBVPcmo2BcgPot6H9iD46eyHzU9GDctASW1c%2FiXJ37ertWuivHfy48I6C%2BYyxZPjPhHH1oyZ80QpfUqTmW%2F8i%2Ba5gmrtCGa5OPKHkoKD00mzks7jjBC90Yd%2B4ioKLpHEZZyO051U5iwiF6NXgSmnSrePhDC%2BsOgkD8GLpzzzbeS0fWzcI%2FsMUv0qUm%2FEW9uaOwtGAU1eGIa%2Byi0xEFzZJA4eRpUwZwp8boDKxX0ws6inwQY6pgFIIY11lXpb%2FFIjshDiuDsDVTXZz1KqiyshoPUXeX5SIchANrw7xgghVzQ%2FKgm5k6dXhxr3r%2FkzU484OoE1nHqbrBvkw%2FviIgdK7S9PQ2KudPyCYAyVRqPKamv%2BhaB6JPlW004F8YcmtlHLpVJxSZPxQ9GMHDzVt6ndZ5ltqCJ%2Bo1otM%2FKRYNMlPYCYmN4Xb67rAcmsupBG%2B08XzFS5uGnsq82Yoerp&X-Amz-Signature=cd75509d674b10fea8abb375957c2bd8f36c1a2fdced9d28639ca2b90b43c038&X-Amz-SignedHeaders=host&x-id=GetObject)

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
