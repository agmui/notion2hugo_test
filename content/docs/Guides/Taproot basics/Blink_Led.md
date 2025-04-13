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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPLKDHHP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEH7rHlkjGAXFtGYcNVuNhhazXrOwpNpnhj9e20RCmwkAiAGxwcl6bnP5h8SxVVhJI3UqUaxWfVvkhntDWVpofmEySqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvMIfumUNNNFYZLAKtwD4rUGtqI156VD9y5uqru%2B7nhcXLOUgpDn9JOuwN8cE9FD2AFCqhgGx8fkGIXc0Q8VNn%2BMHNHHKrfA%2FAp%2FI6hAi%2FSyy5I%2BBvXzFhOJRsA4O0GVaCK8u8pFZMCB91HTDX4EPW131BTfrFawfKnT03XGHxSh5nd17viSbCwqXHepLMYt1TTZ7Fq0ZwGTn3R7igYgBwLYSXn7LiuZ9tdb9F9aAWENiEaSPoGxGSjxv2NLumTuKNBgYJsHhc0lHEWBzqjclGRVUorTHMOUfSM7NrqGkQR5WsIDDPCq9krfZaklojbOXXFIsaqTIWtp3cQqH0H2S%2F04Xby%2BNSpQlhuWjuZPzVOuPuplKh4f3elthzbelfh%2Butk6NEcV3zLY79sch9Peqkq7iZ6d5Sn0HLTRmvuk3WpuI37AgijLHYh8hDJrfFobTYKRiYJpjESaW26kSFmG%2FWky7e9m9N%2B5PEQo%2BElzskGhvz8YJaJjC07NSxn4SuS%2FQGkLWFQrz2eakjMF5DoRPBxJsHFYEnOSu%2FIcDmKzNKLm1WMKIwcyA5l2MfcWYwYMmtJ71Mvdjyqj4T%2BY98XMNkep3cPYmjEa2Nmok8QdpseRN209mh5rFi7vKTCezhas416mylqwOeMsEDwwhbzuvwY6pgF0pQugc1a2oiNKHxgCIt0S0IcprLioL79WB4XOAAiWFfbVTEwbS5sZYlFnCSWOdU4tnQj7WVt74YzEXBCxzGjscB5upVIYLXIpjMHzfuYR2RwB%2By4Qg9k4jYSQ7%2BYFI4CLrAKjC2FaGlaFuIwzzdhUYq36Vf9%2BWjX84eTuof9gUvm2HVFoWlQEF1BF2V85bBWNAPEF%2FHOY2ZBpVl9ZslbylXR6hTpP&X-Amz-Signature=1ca47b8ab9d1c165c063169f633db811553d1fd682ffa525bf5852ffb2f3de55&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KTYKRL4%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T121320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIB1t9A3xG%2F89CSagSZgQ3lUDTR0OcCPSfev9VtcCfBtEAiEA4ccCYy%2BWCcC07UrjwGzEZp5xqNe4dogm%2FyNmEgdNmMcqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPRI5hLAJb2XTIrwuSrcAwn4034%2FJMXtdw2DlODRFM4SEG%2F7clav8CJX7t2QSHcVHNUmuUSSVPyNN%2BWXevtQdur3VNoLh9BlSHlcRJR%2BYoWFs9VSB71Nl93HhxVUlfSXarouyY%2Fx5r4MfT6vuLvqEgEEvcbINAmv3sLGDjuTxw%2FFBShGRmPTy%2B1V%2BieG7zzWTz%2B0L0uKb2TZgYivMpbRdw8%2FzLqG8hfJWpSeFS76C68E8WXrpU5n921naYi88dMWoLNY%2BW2Nq2J0JRV5bmp2%2B7qgN1Nx6zDh4pBKg6SYsCEaH3jVyTZUZ4D4cwrOQiYvQuJAQJwJq8NAUJFIeyj8xNDcb8h4RaOPZy0zFKcTSobtMyFUM0Yd4lczG3gUQgZv2bWM1hm9VQ5ncztpcwZwr9eWK9nwSSiz%2Fov0%2B1%2B112FVjmu7FqYRRyxqsFWyffBW5%2B2X9iLuDCI7iATmivd6DdUNMhJim11Gmamqa8WDg0kMGlmxRuVJvFe9fxikCXoalR1KFqpJLnj9I%2BZ34ZJrrDTh0vmjtcSFroMATlmlqMAp5KIilQgZ5BejfBQThrZUxbRDm2VngwF26bhGsf05BKqkHt4%2F4ttlEPOhWkk1%2BpZXMSwJPkgZ2cic25ve28SxbVy1EJcmXb6ovPbwMJa97r8GOqUBz2cQbKYxSpEjP6x62t36RoZsmLEQU7MKubbkiZ88OkolFdwVwwM2dvZR3ufSXMD5ry52Brb906Ojh4%2FdDX%2BbfHsZ2O7aLe1qYKOL%2FHVWbGtRAEMjyuePWZ%2BG2bltlyNeIW9trrlrn1G%2F6oHxrKNMWLXZfXP7SOHorApaCxSBl9QmA5sNHlDvxVL5896EZ6R8DktQIf3Z5ErbeG%2BT1NuZdU5oaArN&X-Amz-Signature=7c5035cf43a0ce8b1658b14613a141ccadf229cf2bd11ae3c507d41945829c93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
