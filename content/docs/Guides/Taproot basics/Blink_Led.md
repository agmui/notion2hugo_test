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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAEY3WNW%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDLMJGduN1NGE8MuaFRuhkL95OtiZu1jNJ5EWpYk4OD8AIhAMXb795Uwfg04emTn%2BoMqYysmU4IBPLVMSjhEJLLsv0VKv8DCDsQABoMNjM3NDIzMTgzODA1IgyDS%2B7cOK%2B6oQa7Kboq3APnG4p%2FvXVShhgiJppXcERHfN6aTu7Aytyq%2FAkpoRVYjRRSHy%2BYF5gmoEILX2IErN8CdNfJib0L2OPYbzwGoqfLKW0WqluDMpHljOL7%2BfcP5jOSYBZySNFjE64SdpStBncj0dfs4nmXZYn8oB78qAB%2BQ44jsLbA6jUdPru%2BBw%2FOOcIm0hbXPUFyWUxC5AfRsBrwTmmnhI874bgxHS66H2XtMUqoR9JJ5%2BpteRXP4MhrpPGmPe97vvtyqAmPF6b37gFA88vt%2BCzq7AlvPazFMtvTPcJp9ksDpv2Yx1hmnjTq6g9K99ofNVZHuvqx9iRnT5Z6ZHat2meqkWYl59zeebOv9bkUNucvTHyRUwBR8VZdE4n7XB5JfXMVPx7%2BopOSzOHSjdm5u71EpGOY5kHM17na%2BobdxyUh9shQtXlGr%2FMJegcg75DitVFt9b7JSOMRPHPEIQTJ0lW%2BFnXaj6c5bE0hk9IY8DUWNBmnWvmBopMXUua%2B1pm5sD9fKGzv86yX4nNmoRtlmiZLLOz8jw2UzfQx49rthJCiFJgn1qTigXSAGrgYqXoD%2BqCiMjsUiC6syl6Br8hRA8JWQRtCraBrpA73A5S6HU37wKf4lTeJs2fgwNVuQaeghCEROm2%2BVzDpns%2FBBjqkAcW18hU%2FwCrzH5hOzyENPxtIrH2nuSpSOJdMj87ZLcZykXRi9l%2BjrbLoQfTBuC7Q0x4yMw2k7BXBhIWYLNoUj4K0Fd%2B27Npdknl97In6qMjML%2B3VYfSo1G0dz0ioRsV7eMtpXz3Mj6aJkc9BlekiJ6xUIroam23Xk%2FWlOOnKgHId5T1pg5BCULBP%2BfaU%2FWwoiYWfzN20RN%2B%2B8Elr%2FW729Zwkzdxy&X-Amz-Signature=897962f3f062641fce77d616b40c3ea9fd160705d1ffaa73eb1727350d804d06&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XDEEUMY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCtsJEvPiK3NYeIeX9hoLGttRmnkTlbK2CZaR7UxmrjAQIgRybTnVGKlgZTmRCjskab8IEKodKDWvQyGM6CQYx1iqQq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDBbG%2F1L3K7ZK1yFL%2BCrcA2v%2FDu7CWs7SZI%2BRcnIeih2OucRzXArNjsdkBr6iZ2sKTAFDAy31grziEBW1d9sucuDGwn98qtUJZeVUptVrGLFOw%2B7NGUh7HCFi%2BkV5Y0HqFnbDmqZKe9%2FMP5qI3HavSQ%2B0fY7UI4TgQpUdGikpLrv1Zic0Gtt9wA3CdUMmnXFq1Ywjj0WOOp6rclfGc%2Fq7nPY2oX4JWfZY78CxBMZBQD3isdDy2UuYvSkC%2Fpf53pKZCBYVhnGq9Vehu%2F9RNynmEf1Xy11NZNEn1Lg4yypARNftC%2BFFn19GH1OYcrN%2BaGExYho9wT2A3D8eOD7v7qOkppOvilm8VZepUysJSZn0NwgkVAc9EeMl7IjB7GS0RnqaD4%2BU%2B9RVC5wNZCCaTi4ETjPHTvutgDBkSu11KEnxEzK7k8fsKQkaSe6cAXtC7NTlFnOkGrGaFQWCGHlE3XRyHuzOWTdvu6npByz1mZGBEZMH4zSDJ3m4wde2IkNSunGzVxlNfO8Ok2HO8IZfclxEFMIWYdLYgxK%2FWmhSHSC2XaCAwK3BzneQOciAYxO%2BADctgdktF4AhS4O4arKk%2BcC2qG7QneqcVDIhLRP4oWkPATDR46xkuqtIr0EXFQ3gqneqhocWTM%2F1c2fyKyZWMM%2Bez8EGOqUBRe5dILXvBh9XuyfaFKL0TAu%2F%2B2YJbWGxPIRirNcPUtP%2BovA0E1xP9l8Umh4hQbgEMBVfEVoWGq9Pe2keyenhy%2FblxVdP%2BABkkvhIe04oUkDCtvXGCq7zenJvgo%2BhPDU9vJSKFXqYj7LslAU6V%2BcIXdQdT1lzYrFKVAHUG4NdYLnHdnKudhd2hlUnRR6BGgPj%2BxXV1K44rgkoxTJhNc2X%2BcnQW9qN&X-Amz-Signature=c5f4af7c055a59af291a2923508e13ee14b1d23ab6c2df869905eaec0ebf76d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
