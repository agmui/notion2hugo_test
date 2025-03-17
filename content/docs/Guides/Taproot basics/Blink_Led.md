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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5ON4SM%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9rXY69N0HTPf2a5mkLzLkMkAHkS8bX9NY7w9ljxURvwIhANyNGvLs0BHRtYzMESrBNwaX8wF6Rntp1cyC%2BWM3I3LMKv8DCEQQABoMNjM3NDIzMTgzODA1IgxMUO2kgY%2BhsyDUu5cq3AM300JSyKla6%2FKaFyGRkPRi%2FRhx%2FLh1RknFfmdXIe4e7SUZQHKcDVEQxth%2Fa8paN3rt25Mthn4QlsmKZV%2FEvtq1mXteqq3lL1hNG02WIxUKbEJ4PyBvKZE%2Bhn1SS%2FffcWl7kEN1ZVQpKrJSJMuUagxnta8Uia4WAUhJnJ%2FHKOvmIvD1Qda4h5zEo6AcuxMeLp1LMmO8iTFRUAQ4K2D2f2ueFuPGpr4VeC3iT%2B2VCXNNVAy0jwAKqFYoC17tsDsxcSR42PKPMiqUBT63LA1VT11JAtpVXTDQq8D7%2F73v9EzI4DES1SjBp9GtMtDy8SPM%2FSDsydVxfaTA9e8y6pAO13TyqnuGW6L25aaJa1uojS6WkkBGCkYvzzq5DnQ9oG2XcGYQDRSzaH8SuKhbaJ5UByfF72965i2GFSY4hD%2BhLpXR8YlO2OH2o8E6hu6DJlD%2ByDkZJn31X1Ak1cGgIIiFraSqBG2EIJxSPa%2Fk2hxXQR01rUQACcEbzBfaSQeflU66MRMpHO74woIeoa7Np%2BGyXNAMIuZGezKoCtkwPN4JB%2Fkgi3i7fYxzqFuxOyvV3%2F9FOgtmhqvthqFiqiM0LrGH0IoqVoPHazmBxMS%2Fb4eQNxvCLrR%2BPBmZP7fRdjuyvDDli%2BC%2BBjqkAQ%2FYqpWVOzdQI6DQiF9%2Fu8%2FQCOOHDmOs58RPa60HGTccYXIjgRE9pEnK2RhUubCp3suTKcBOl39WmQLPQdQ%2BA0Wqj11GRFzMEvV2m%2FANSsEXuBqu3dRWvJFKT6g7PnSLSfX1N4QWifJ37bcI96ZU%2FJ7InV30HouUOPcpDOoaoU%2Fbx2OK44dCrUeeoBMLkyh6lKgZs9vsnfAaPkY6CJET0IcMSSvi&X-Amz-Signature=04fd59da2b1dd037b6cb751404b38aa65250ad87447ffe65fc3b025a3031004d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RACFJQ3E%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFNKJqbVgalYRzriPtyTIA7vR4hc9mnchc1PaQ0LMAiAiEAlctFsWXHM3zpnEnCaSr4pDS7OOB92PJ%2FvGTJU8%2BDvckq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCxc4vTcV3cYnmJNjyrcA%2FQ2BTYrue2k8O%2FnJLRSY4I7mLuS1%2BEOITPpynrMcoN%2B18FxDUKKd9iNYaW382zcdD6gymqWMxhz73pl%2BLNESvgULDlAE3ZTWfzCAi8tu%2FAAIG8oiSfkBpJMvK9HlF5ROQLwcu9DMF7MxE4qaF5e3VMBGlo4fD7EaAdLWl2unPJ1KZv73zy4wWQw0ftWq4OiBYN3NS5MEsnHKBCP2WJv4vGGuP0f9ORAnhkX%2FBsGR5Mzi%2FkuGyqQbF0N2nhC6WXj9KUuIsOTX9muDd%2BvJ9N3BwNIIXezzx3U0tCEd2hdDB9uMTCw9EEbLwbC8EbLEkIN5PmB9uo1CuLXqIi3u6mvKQCL4wVxUdOIKmSCu6zh%2F0EBrFhLrFaOEXXcCwuY3nMIbakqRyhgmtcLbUgURJl53w9XnBpx9x2fgzaT%2BJtW4lJL0q0v3fE91XFPtgRmFdloSNYfXrEFwYRhoJGAw14PHiNUhgHBhpkQWRS2aoyJjx4ADRhLmMo35c0FyrWVfQBWKPm28FnMxCwymYlZrz%2BmHW3vKfVcGPaQbsOTRs3K9jet3biN3dIiJUnXBL%2FKQgednnizgnFlW9Ogi1obV970PiRtmS7JNhMy%2Bnhoj%2BxW1Mf24lQTS%2BuHP%2BybWWmuMPeL4L4GOqUBT%2FhCP9k6tnD0tJrpUjmebQVL%2FA%2BodR8PzTvkDlXVNNlRJ41C6m9ZuAmEolGkAygSlI9F%2FZvl2qXVzFrrw7cAgh4f80EQRRP0Lg2Q0eAnIYtTdb7Y2uStz4z%2FrsuhgisReCnEM7RbyujJu9k7qwZrc%2FH%2BY8HPls6K2dtNuk6T0AFdyMLH7ElwgJYFSkMLbZjAKvox%2F1DqfVGmQf0Tcm%2FPR5dQkAiN&X-Amz-Signature=514aa2365422f84e58d6e522ecf307f1c26d976948cbd4dc1d6b3e856a234bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
