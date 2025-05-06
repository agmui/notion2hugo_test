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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URYQ25BS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeSAdJz9ilIXg3ynrRIv0%2FvQtR9G2zG2sREuDwNuqT%2BQIgXiRs0DUOVUuRnGnc%2FO4hCfHFRjpRfP%2FgP%2F3C3LI73BUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGQn1LEFOW3T3lOBjCrcAxD%2FT7TVQkCGSv%2Bp%2FUFONIpynjhEs5RBD16pG2rNV%2FN1i%2BRZ5SiEpsfRkRovCud8JubABKa6r3iankOiKf21RLEuvFRVO%2FeEsOFwulYVjUrtHoJMt3MvVLBmzqOjwNB8I%2BYisevR9H8NjffV1VfoVszZPvA5%2FkeS6nwZ42HdXj%2FNW01yMjoLCkW0N1d8v4oajYB1nzqm2cYTWcbl%2BG0cv3913%2FHb4g%2BBV746Bfsgtmn8cW10NJEzfsyvMzFy1jKPVjLh6B5CFqD1fkb0SA7vc%2B3VYLNFS7Qa3y6dtVPsuMaag299QLMK5RKdLiKbS%2BDFOTi9wQhXjz2GDxJszEj6a15IU%2FvKdeBvtn%2Fvpdw%2BhVhjLFgclTI7Zmh7XyFz178QUIUnLEmDOy0UpI%2Bv5KY5L59PlW0LMKNTZtriSiimFWHMqWLpi%2BrsEZtBXXtDMbwiX9aUSwcH1ySTnXQ5Yj%2FjeMRcHSPk1vn9Ye9KX3GCmzkqmlCJQpDEzrmdTAdJa3vxzPJPjMwnni5OVuDL5N%2FGq6dSw4mjVzH1sSai1SdaIlH3DwNY66SBG%2FqTATYtsdpbU1VgVn3iiAsqmx1R9t1wkzK6Fd0E1KX1kSQcGPVdAQWyj%2FtoEiNPAR0UQxo5MP6X6MAGOqUB6uh6aSlyfDRJBW0GZk68LYyi2oP97uhXLnnG3oNcBGbvZjZPMUlimmMbmmIJjupZN5ZB%2F3gbd0tkGQ9I8pbRjx6%2B3I%2BhnUp3Ip7YEvFTAk3VqRmqastX7QIDTEToDH3wYf1IZjZPIWok%2FxfbdT8dR3MTEN7cx6HxqsEGMzsoAVy60kecER0FnQZr5%2BLsZnDK6FUUz8I3B04UeYJC4sTCA%2FtnNhQS&X-Amz-Signature=028a7ef6c36850558437e56b2a4ed871fe5840e778b7eabc8dcf648796b44511&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY3IB3B3%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T140843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMakQqxzcdr09sxUJkke7mNIH%2F2Ye7c5K7Hz6c0cA%2BpQIhAPywt7j8jB69nvdr7TZ70RsopslNtGufyb9vHPeLXDJ2Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwRDytcFn6V4R2nF94q3AOVTb8XIaPsQu5vgodRXwRF%2BvoNDpt%2F6pUp6FF0QGb5KsDekPHR%2BgAxkIvacJ2WbYAD%2B7KqFZgP1LVtny%2FzUFHc0nBZWrMn8%2BcWdCm5Ddb0khAocobC5%2F2AAdhQtTcpZ6vlUrT625cGxwWssmovjKLBv%2FLvlu4T%2Bs88I%2BqbCAS4QRM%2BAtrsY7EHGChskg%2BCbmQXdzAMnoLHDdoV9xgDe3ByuVXLHdc7pHsMWq6DI7Nm0U8gdJbIBl99Wk7LNBapCHD8bDZVLKT9xLa1VzxO9Mo9BT%2B42K3OfibuAVFSEmLgqFhBcGxNH2O5NLoyjK%2BMW62l%2FySFU28ngJ8RUAD%2FlPOh9XND1DO%2F3s8nz4lqTG18muX4N%2FO62mkT8H0h9Tbs3YaXM4HYvIxWCeIhGBWF6XbloSTkUp%2FCS9AhCDG3FVLyfxjRLk7sthT11n7HvOGmCLNuS7XrzSUHwZbGPee7ZifmGg6kISm%2BsDDgvL9QZA5of21Qe9NvtfvrDsQ%2BzHBgSFu1PUKK5DBMdn8HabfSoD2fG8KWHlbXRkR26TNOAshvVpROVZLKOFE5X2Sn%2FQ%2BGcqG5IL7QwKUOkBZ9isDx%2BAB6KhJoWHx3RopLlmHCS3ODkLvdk8NCu6sYOxj3%2BDDLl%2BjABjqkAeHL2Ig6ufFUhKPGDHNA2GXn0wSLlfMJ%2F5hMUPdfxWIhXUheW1c%2BpFka%2B3P3vT%2F%2BPqps5dj7TpQhoXpqFnmmUKl3VSQJ%2F3dM86kQFU5HmPug8Zjz8A9FpSd7OXv0TM1aiJNaezKFnwFhUb4hGU0Syr%2BQMwfr1xRnt2Yu1lAVTAAn56Y2JKtfwgxMcv3MD0oSaqUOTDKhQR2Pc%2Fk5yvpPjt%2BHsN2%2F&X-Amz-Signature=35cf3b0337e5f3da57c0e209bcd784e3a39fc0f2c783561608c228b1bdc28eab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
