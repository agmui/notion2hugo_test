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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S667TVP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDS4NM58PbnkAcSH4ibDIgIfzB5lSnbZBHxNrZQ2pzRMgIgcPL7tCUgOTfi%2BoRE2gFo6PX5o6A2Nnh4MBz4PyLMJZUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlLGd1ixOnSBL8noircA4W73uzjIsQs5ApZswO6Z1uHAYjPyJjDdHByHOlP8DFwO4gXYcfK293d2aw%2B6v4%2BvKxtiK0sjuaFAuzMEppQupgHYx5Or9yQ2YyztuH9d2QT%2FtJZYKREgP0pwWBPTPxLZQe6GOIpQ4LHH0YZSNhq0H9uxF1v%2FDTylgyhR5%2BWPWqW9hUHeCjSrrV9Ot%2FlzKc%2BYxmj%2FkFBzsJ6rzomUWvO5zRcMKd%2BWI1ptlfPF2XbLG60QrEaOqdYBH%2FZEP9YX%2BgUksCKtxxxQY2U1LRlZbrxvj6CnME%2Fej6PcClmMAgP10A38OTUKZz9tCoZBSbQUbAllh5K8O3jooHqv14qw8gjb0hhfHlDOF2ZBxactF0BtHSE1CBFI7XpgxzChGEmL%2F4J5IgVobAqK6oP4Mp8l4CPOtefwb8mpuPuwD7OZ%2Frdjkmf3RrN%2BTzECbkEiwNWi2GhWlIo9NqpuoOun4ojemY9U293A80%2BB15IBkWhfzMvmuYUorJen6vXkQCrY27KeKUbeZgXACu8fTvvqjOw2iWMKcvvxNfy7NFOhd7CjbDTvHV8WxWIvgfx1tEJlmetGM9RI5iziZBN1G4V8twEZT0POFwKdZy9%2BS7Sk5o8QMjLFJ94sXUCuoskDMXPLSbrMM%2F7t78GOqUBWLGsH%2FW1HbSDe%2Bms%2B9ywH3Q1RYNS1EUkF31trRDkASFi61xJXL44PZ94TQONb1egeFceifVi7MLqZousjg95aJhylgBkjFpa99LwSEBPi2xlFHtn2R0UfI72B%2FMYLpSMfJ%2FFAOWlYtL3iu60lUMKekuhQ0Pcs1yVjcF9X3rPYc2f47CMhTQoP%2BhbhLlpyf%2FcTItr9b%2B1WzSOgvO4ymnkKERXm1Xc&X-Amz-Signature=5fb6a2f84955df75962559c1c00cca669c1545481d6e17417a3a6cdd6802699c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOKLQQOV%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIBUfLKb5OMtOClHMFAmF%2Frm235dlay98IKOykDOb1NQSAiAlAfmfWY68tACeS2HA59ZafK%2B9KiKh2ZS0cnQ0ht%2Bi2CqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWxLWSH4McNNb%2FNAYKtwD7nlqYzUz1KLwTrTGeDKk%2Ffi9fIsPt4ZbqnTin5IFlHPiHtCP0fdAHzeQgOA6a1eV5FBLwsvlROyviDGMidYBPRlJ%2FqqN22ROmETLJcJrc4FSAkyEXL3Y5jgAK1mjyDGhhOXYIw6OFEbhBjpCQbZ4XxKG4hahfkyjHhYB0pWFKqQMzVMgYkkSKSMwP6FwmNZm6fYEnsVpuy0rFeDzfTXDw9mcaKX%2FpJLjZwMIxkUFAh6SE9HVVf%2FLoiPFYVZmKWWs2ssh2mp5%2Fe78kajX5r3%2BPXcTMKSnOIRts67nzAQWhQ1yl489tP%2FUYUQ%2Fu7heD723OIu6RntKWOxPA34hYEhUhaVYF0Y1lLFtnNwJIwKwn17KpuGIQVlWAJMPgL7a6xhe1LRWckvWByA743ekAgqrSUnEooRK8Kf3rj0RVRVmpSdRd66UGvF0xuN2t9b0kG22dDM%2BqWiSmYlsB5VjKqmK56ayz5Ch1ETJCvmBUqu%2BLMYkZ7Giza7cWFlV00WoRpjw%2F2myt40HYPoxP05u3pOTo1jLlWCzgcSWRIj8qkRFM%2F2TuoNFRi0%2BBQxybxE7DGdu4YV%2BG%2F%2BItqxxzTXya49PY%2B1nHBF35YdI64f%2BcnjjCfwSf7yF01jkaUCX1f4wuPu3vwY6pgHvHvG6qtqyYm%2BBePGNkDenapgxTP2jpp6Nx0auwnJgZuJ0fJC%2FkZwwzNBOhrXOWnPAs9qa9jFO%2F%2BmjDHabDkoLEe2uqOw6VBqoPqKTKl2a8g7F7KB%2BXFfGupChYp7AehyfehGw1QhbgT4YNTju%2BvseByDnTrs8E92K49ZjSculr9v9KNR4k7VZ3GDr8NuRMHo6lg0TgArTO8%2BLR5py5CiApNf40icx&X-Amz-Signature=9a8111e06478869ee04e48d2587855e66da6652dd69d5dbecae377c658f38836&X-Amz-SignedHeaders=host&x-id=GetObject)

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
