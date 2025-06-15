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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V674CSZP%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQCtKVKfpg34XeO%2BlrBPVIednqJkCWwolK8W3SCzyma4jwIhAOZ9EP6SH2uV1qMR%2BFNRgGQPu%2FjevTTY93owSkJAKdBLKv8DCD8QABoMNjM3NDIzMTgzODA1IgyyeSzrl%2BhlIwMJEvkq3AO1t8pQK8OubefLMbJEbPXk7Rrv%2BRvXFj%2BtLU64riQHKhNZWpOnXqsUqizuJ6%2F9QFPNNCK%2B0oYUMmbP0ktTnQzd4EnQYWFaXQajdJLVBttvTuFfh6toG%2BdshnUTkfobW%2FBVNUFA%2BnzC9msXYa6eFcGisFWnYCfd%2BUDN%2BQ5hAximF4fumP9LvLSzB6rf1DRA%2FTKnwEivPKDpjaGE9vaWHT4U7dWMCkDgou2yLu6cx7JS6dIS7SeU7trC2KnO8jVdzaWgnCcpVTj0M790cTEgDOLbEiElOOZBIXcqJFxyQrUHCkQFQe3%2FWDF4kzQVP15wgmUABVsqZo8dQB8OnYCuJ5FOZb%2FuybHKFVMlxgj67QJvViedhYj7KEA0kcVbVaxfEf7vbNWSAVcjUBM6YuIw4rVc6%2FsMRP4iHoalwiXgQaDvUiSB%2Blz4HiqJqSE8ep%2BlwQzZIMMwzo8QZw4EngVsRHA1Q6NtGj4VZSO0NYqTwPaMHttpfvmFyPimsjsfBCe5HDf00zVs3b08Sq%2Brke2ydPhkAFIZ97mC9PyGpuB0eKuLYlrMO8nNugTQpBlHdmXXFBOacSZtG5wc6pz%2FXcSd0OZX7LBb%2B3UcPmgj7JHuRjNhjmPBIArIB20Tg1WatDCuxbnCBjqkAUf6FZsC6V8DaYm0Z69U3PN7FlD0jkwHlKM9OvbT%2FMrfasFooM1%2F9eJz3Um8w2qJcLg22qmaJuTsybaPVwfWFUDvJ3WJBNPDZWZZPviDstPneJXHphRh7Mu%2F%2BShfE3uB3s4r6mMHiKWM5iixydJh5oXR5Xj2McJAu6YpxcU898YERdwj2vf8%2FJAfxmxaj2KBBwstLsEAXE4fkHoZEI22uzOkqhrg&X-Amz-Signature=3a49d068a1008d34dad862f33aed80cab763672fa618564df6ffb748689fb4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657DJ3LRK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIBPSRup2Cg%2FK1CM8F07TRK%2BjrFKTss5wLiZXzJb6OA8BAiEAgM6EVoZmHVHHvJ2fwdkB8865L3mu46shyHmjNLq%2FRoYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGEZ9thdHFk5XACvMSrcA7Hx5dnc80cRDuGiwNNC53L4YeP%2BA1%2BzeyhWaopAQjjgXdQedhXHXrtCQCvjIQHWXPMVDcyMZG5U3%2B1y%2F%2Fhpz%2FWaYc%2B5HDPKpZMn6u%2BZW7XiZe5jWCNSZdlUkJZOf1EoWaugQ9wkfZI9jSrqU9WckxhiOc3BC5B71j0uQbABx6XvNP8K%2FyWKQx%2B9iekswbwSSfyUtD1ArCZpXShqKSQ11LvXSw5bGUioPqzge9qsG5Ic6EH0OIo9c9v5cskAOEZRtXm6b%2BiPnvgnGF7cwq%2BDxOXoWwOYP7S4wAS0mb0ZUtaccrtUTwpaDIcLMEGNy%2Bd1nucboU64azbrNxpUOskvBqkvxHp8c%2BWeOupcl1aczT2SRdR2LgYdEW6t19odAS46vCrNRCej1F1TdsSHFG6OdIZ%2BNTylQ775Lf9bQRFHDk16BI2bWhX577WL1u6EW5BTYQQrP0tdIwlIbStEh52tiO9Zl2q4dJD0GKiq6BXFEha9kw9VyvYXKHHhD3B3YwBuDq2BeHkuRqvNRXky03OaAKkAuP9tmKv%2FPb5dSBExsSYY%2BAVhq4ZrwIQvNqJ79Vpk8y5TuI50BxOjIkK1yUBn5BPQrRvGW5hhroOtHZHHO2a2D%2FUd4YQvgOjDAxhxMJ6sucIGOqUBZNR%2FQhn53as9AMSImniAqlmm5azbyva1VFXmkKci%2FptnZ7Dm4k3JxZRBAka%2Ba%2B%2BH5DIzpFYQ4k15oypG%2B%2BCdN2%2BU6WdOaWYG9PvMna0WjyeezL99vPWdLG7nYRZ2dg%2BaYg3t6uKAP8ULWH7ANkoOK4q3VxaAWVoR54EUoAX8aZLCWKXD6hNCbWLauyNFMgGRPLCMmX9rsxzYLuUcDVghG7OVcM%2BZ&X-Amz-Signature=de7dbd16baa8c0364974169c460656d164c588084f032a1541bdd2f6462d4cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
