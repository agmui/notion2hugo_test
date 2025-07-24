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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LU6LNT6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIG15T6ng3ctlIycyTotjudwismUDZB6K5l%2Fyw8TrdX04AiEA%2BScG8AdKXqxguM2EokD%2BI%2FVM3tZflrqdGX8F%2BmbgCHoq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAZb6x8GY%2BM3FnOu%2FircAwCUSe0%2BU%2BaQ0nCQcRh4vaWwRF9uxmUt1spfs7RQLyWEO%2BwRRgo%2BbgdyTlY5qEa7CIvvFiI%2BXSO2Lebfzsrl6lspGSeHrua6JTl8SAPkv7MhQTdmA0pAG0s7WtvGAAKAgF9g8sfCWgtRoxiYgmg5wK%2FjxOAoU7mm%2FMx0pL9xPMb1I7GUN%2BQ98myFfwfz4q71gURltxTIqKGNBPIVpR%2FN722TXATWvt1W6e3rcD6rH5WLhal%2FZD5Crc2%2Buxs8FrsQfuoUFfdph%2BcfymK72BXxFmBdfQzbjLUPf1JX%2BW4nLIQzvHelhzkd6log14hDylZQHpsA53P37Qqg8o7qS2k7Qi4llH4T6BvQOPJ5JqKafQKPvkjcvbQee9P7TPflSUPkV1ezokcSGhwan6YFSK3wMHkF7XQX40AWJpxnSq3P%2Fu7k4%2F%2BG4HEzhS5BSuZANr0YHEySaH7fi91bS2w5jB%2BQxwZ%2F9F7pEygbZW8BfaVs5bIixeRjJuBlLxWJ9v6Ag4dwuzLi1XmHqjhvaMBx9YFL9RkdAChzof80MK0iY0gRJRmCdksMyFV3YChfT1AtYQY3ysd4ePDPIr185QRwyTa1kGVXrV5pUdecT3ffQxMXDafNutef5hn2aSZ47duvMO2PiMQGOqUB07VgV7ap7Y1z0N2t7NxtKkdB5h4Y5QArGSzUS8wEZE6uesfR2wFDz%2FJLegcqFjNsOcLynwYj3%2BebYCu8DK2QT4opwfIXZM8MLA7%2BGwDKst6RDWabd2S8AWt%2FXTHwy7h9u5Okp7PW2MfoB%2BK5TabPnbJOuGkQa1uF0mxVcgdGrsL9O5fg%2FSC1E2zFNh1xa8Q0KiqWGrsqoYH2yKkjXsvPFtGHPlbN&X-Amz-Signature=78f4cd49e173bc84d122f277e709a1df0e98ba1ac27616a428dec3e7b9bcd5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2MWOULI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIEqgcBKIzSsmFFsHilbJ%2F8hUTTz84Q6BQVcqs0d5pgovAiEAx2DSwUb3MsXkCVLQ4sKuD07B6eSp68IQdhFZkiqaSVYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKBGAlLHlTfqs5aEKSrcA2jS9q2B9xzhJ196uePvOblM5yBMaUEBgQnVIy8wwNHNl1IYOLhUwuYOTPLgI82%2F5%2FW%2BCqzcyx3SJ0oPE2gZbcW%2BukQptlqAQJxVhKjzVSsCZ3t77n7tBM8qBMEvEK0EugFyaJk%2BRabXHpnbj%2FGNWE5ruuCeeGHm%2B3zi1Wc079rRRIgCM8HkEzm8a7h3ffMY%2Bn42gIMInrVhzK%2FtKCE1lXJmGypKuj6PFq37LGXBXfspnZSp8fH%2B0iXohqiM%2Bh2GVWzUphnGHYdIDria3apgWjzWvsmUMmMS%2BaHc703t6YLCBuzRiXfahUpr2wV%2BKie%2B6PoYJCLhgnw6rWB64ed5e64BT7lZOR5itNsEyVziOt3cdHQlPTcrxjHIKJ2NItX7qfqFMEwvjXqOIXUQmtA96IdRbr8M8tlsnNEna%2BSupTr9s8weStonQPYFhdl0Ov6eL8oPcJmJ3F7kXeiNiEE1OZ%2Bp1gTTky1EZynjMyaSGD3otPEXsRUpgcLlCtmsJ0CKgXWICgQVoNh3HBeLSNSzEyaU5fCwHuXYKTlXQ3tEmrC6Ag8paqxFDDsS6ePDpcK%2FYK0o5xbG5uPCOCF0AXYlSwwnsMV3w%2Bdf7mhqedhDVQY8G1nETMXMDKY8VgqJMI2PiMQGOqUBHI5V8s7W%2FV8wdhB63ZHSiMcQC85%2FskoV%2FPas8YZ7C2LCKnkFz450HxeqjHvee%2FFl3hNEl%2Bf7eUXY0xVy2gogwTay67sg9CGh%2FiaGdfL6z343gIi72AveffflcfF91jU63vJX3xwZCdYuF%2Be2kxl9KeORWqLolrdBhY%2BvWhIongz2G5mPlG%2F1XDMi3lXz7fvofPMgCmQe1FV9AJ68m7kcPzGUfZLT&X-Amz-Signature=7eef842180e032618df4e1b806f5ed047e1924701fe1510759b1216db595c4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
