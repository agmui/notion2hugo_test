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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKQQZMRQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHySujbKrOcsn3vPgQiBOBQulOvYBLCWEy424yKOiM0sAiEA%2FvZGEkaOTvYGBO1mtonGNqMl8h2v02MjworZSajdiPcqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzA0DJxSKNnz5gHtSrcA%2F569i4coFn3HOUMbMDzE8%2Fr2CT8Oc9AQLGNohtTjrLnIzrawhKgLE%2BJ8X1Qo9zlzm5XtPAgDpGx60t8oS6%2BWg7D%2Fiyk06UtXelRerVYG1xCD4PGM31JBiwEI4F5B15lTFgUaKV3n66r%2FZkDM5RVRKJzVyXP1sVBLBKjbvnVenADIaf%2BreSqj27PkuoiY40437x3Fa624%2F%2F8ucIy7TDDy1P5NwLdz7oz8FxApygrS1LQ7qu2ccDO4pEQHqQ8PN92KkRsFDXTgATsBllPKhBmg5m09V3NZtAv9tN7aoDgbkhcCD8zX1Gp9HrQV4g3MvrsDRmK8hQodVF0tqzAvfvkdS8QndE4F5PxuCUkG01GMHeMUvJvaAn%2FM%2FWtgns8HlGsDALDoGNYXxMxUS1ZcMwK9HxlY%2FjehfRW9%2FGv7DCEalSZIXh8LufQ6hNCFL%2BX2s6Avrhi0C92Fb%2F4aIRP%2FV7QbhlfCxbmUcPMXq5ru%2FIhl%2BZVmWiFP%2BB6rZ3DctzzF%2FRl%2Fr3Up76n%2B8VDauNJ3f1EXU%2BEGIqrIcWXdztbUeaWDwG1uZW%2FiDSVO588gid7odAj6QJ9DuHFHQQsUPC2GLtwMuBfHSQSlyYAUl%2BmFjFMJXamieU1CciI5jOPykQ0MLbE28QGOqUBIjfrbw1o%2BLPSkGyNvMavw2yjqevU5OMh7IfkZAz1DYfJrzzwBu%2BUyp6zErxBuk6yqDQ66BICVBR7qqzUjkdfbwFXulIxTuHC0Bbtslb%2BPWidLBrAYACy6PW2Gz93gkVvQPfncykznC3d4yjIkbRVeSwlou4s7yEDYnMTzoUkrSAzPFIK7NoZYuz20YrELJ%2Bw7hGGdIeEGlbPwhGnEohUDzxF3L6b&X-Amz-Signature=386bb3b44fb6425f4eb11a8e48a5978d946c6df64a4c724acb48e106d8d80c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEV7T7NF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDNLLTBRIEY9cq8GpK%2FIph5s65VgoYSQOcCUunYUw%2FOSQIhAJPS3FqFkLYyj6XIatpjnjsTq7E98Vbfid%2FIMQ9DlFEBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBsOjTRT6YDW0gyjAq3AOuuYP80Cn628iwrkmNSzdXqt9cOHJfUD9E44jmuHcOV7oauL4Bt%2FrDVVn5vg9EhqiBQvOLvOeIxylNA4hlUryRDcguJ3fFC1TW0A92OG4WzUp1x%2BwNHrNOzQXoh6evu%2F59%2FroJMmqlOH%2BOJNdcRrh5CYk80rN9p3x2scdu58lUIHPQW0CCLkGCkC1%2B%2FBlnpCtVpMezVlItDTMlQvg5prRTyQ1JS1kn9eK2IvQmE2QldJJGkJYR59cPqBVwf6RDBMfhTn%2BXvincY70bw%2BewQ16OI%2Fas5FO4iDeJpHvg%2FONEL%2FhlQFKZRZqLHcamOnn%2FS79wTHbgko2iCMfcT3pI6YsnLxn02FkFz%2FalizDbV8kcgVwE0TUnVU4SlizwgPeAlRzVArwRg3CyozJ7Usrr%2BNr2WnG70B2JoYsIMnyfEVwjMvGrfFg8XmK7qG0VILMpp73u6sLu53Hh%2FFSKrApgw2AC10B3tQc0XXZP75tLh2GBmgGliToDvMC16JxBsjYzMHlp8nLcZyFe1U5kXvjP8TsFh1rCHx6qbAM6xQE31dC8gLvlFFBW6mvpRVr4P6bg1vmKUJCK%2FSRyv8ysAZCmxqdesd1wKscYIqO8fAUBZgWeWSjXQTIsKN0N2%2FMqMTDdxNvEBjqkAaLuaJiDZg4ndpZyFRmVlCND%2F%2FmLxT9xZ0ExUHe5GplVZAkOcOZPvxbxdUVD2dS0pHJ5pOwrTIsgFUbG9TD6JMaLQjG4CImPw719N5sMtsX8EqM28axvvEUIS5epsObiFpkdj0K%2FZOSUW8SO%2BSDdyYtQqU3nFwI%2B0%2BW0tsYGg2TjRBQ14iMWVTRxpWCicOxTZ0viKVbmYKQWhWyZX40tzEk4QMrh&X-Amz-Signature=5a396f042f015c9b23932c47348c0525e0b4fb97f9a79ec24b854d6ea8c418ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
