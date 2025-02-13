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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFPKZ6ZU%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFX9n8cRG%2F7n9UE3YTvG%2Fa0GyEzfpocLqsOi43srLjRAiAatQROGvXQIU6tnlH3NuaLZ5EkRVGkIl9o951V1U1tiyr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMQiv493V6mc1LBQV4KtwDIUT6oYyxsT%2FKrC8XOnWtj%2BKD75CeQjW2CFwRkU3qOxXXbOSizdk8GeCDz42lJX2V0dmjMXUryJ2Zg2m1e%2BK77tGXQPBWnvNx7CvwNuXh3A9OXyw1TOD1TqmTj2CcUGIByZx5RpDLTztN2DYKrCndibr0TuuiC1lM9sUdK60kBdfHDqdScBmmEz9tlcBAz%2F%2Bad2UtHh7M5L9WArtMyLod7Uz5dRnvXXkn6LtmQUo6hBHAWiijyX1qwOXYdl3uc7GkEwVzqQueS%2B0WTtIV4%2FO4Tq2EgJ8EGW2SgTajachyRGiZt%2BnQ%2Fzh4%2BfV47FQqzznJEVgeZ4TgORy1UE0TPh06%2FimbMC6%2Bder4fyTFzU94w%2FMH8fc9RdtXdMs%2F53fF%2BK9kzw6F%2FIQ20wae5TOlqPOKGBJhv6FlD%2BnFrx0UMQvVQs4ZbsZTiQl%2FZMXhkQWBC1h9pmswpvRZ1ZZjcZUQ9gO4yZn3RzJ95Ix7tf%2BdUpDjz9vgoTRNldeylRiqHz1fH677Vnk8qOoJyPCJKqJVzP79k1Z7NQENz0xfbEu%2FfNRWfcbHwNBZXHcvq3NhHHCZhELW0kUDOMAEMGNvtTJM7k1fyCkAAFBnRXY5Uaw0yIKUpu2fZojads2ok7UskLowmd23vQY6pgFTYfWaYxKAAHSH3qfBrnATkCSIxhstaGb7Kfp7uXCu%2Be9xeBP6vxKhGSK4N3RzWyYxR18vTFSjskkQhG90lkpbmDqJiQeHQ1p6nBIWRZGuDsUptCWRQkVXcsG4h4jraoovw59w9IOezK%2FJH636lcSpYdtZw%2BYZ7A%2FwXcDZzLyN788jJN3poZHbadsg7D6w67r%2B3b9MI1y3sta2r8Y3KTve4pFj7swG&X-Amz-Signature=683f8596d1b50c15e15d3bb4601fa51d209a88ec2248b85245b99c643763d20f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LEKII2Z%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkUirpp3m0XvhAYGVDcNSsyxrvM7qCsGMAokdr0UNtmAiEA67N%2F1r6kJePtZFuFDw1ff4AftFLdRS1TAj8VwJ6Orgoq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDLngXVI3MIgQK8xIqyrcA02bDlwX5%2FM%2FU42ir6FnJ%2FfN2MTfADHLa2Xa0JbkEMKAYI9VeL0JdhWaRtQzGpcVy2%2FyhyUJA4tSQFWO1GYB9N43FuSRpZ8KkRcrDoQhC15SuW5liz8Q0%2FcbOgSi4LnOY1LtKSRy4QMeqM4Ny3uCUj4A3yr%2F5FO8qKMBEPXs52KuPBGOev%2ByrV86k5H46LZH%2FSY58ZJDPPnobc6viF3QX72sw2Tk9l%2BntVbmyn9zWEYBrhOXOujo%2BWFQmOgUzov8vSc4Xud%2Bkhy0oTUWtPzBgqmJ9e6XTNnjvctklIAj%2BFsyjDqHrprd250ryXUGdtQdS%2F86x1B8r71vW%2BtWNUsS9TGyd6IjQ0U%2FReY443Om947Ij6tDyRrc17Ch%2Bs0q59jT4tAzcFuOpnjnwN9NWVFcP%2B6uaV%2BegT%2FJAgcXy1mCQixuaosTcbkEjW4MEBkd9MiHJqwD%2FQOgAE0IWPEjRfKqXUgnEpFNKCxnxJyBB9URTKuCnp4UnYeaBQRzVGB8K4SIWXR3xuzmteIlS5P2ieNEv8mndArcwPhjrmW6fhLb%2FJdqYgxD%2F7nduLUhsaFJCUkpZ8nAHORODVP7i6bodXJ2QuyMLY6HK%2BGkUNsgZiwNmUuLj1Rc6jUAfy8DmjKrMM3dt70GOqUBZ5Ejlx%2B783Awbn6fJl5TXim7ab1ZAngOFo0JYQcXR5a7Aeqj5zFDcj4rY5XqDRacsk%2FhGfr637KXPs4kNh3dOj6sWDZdI73mbQG2afdJGBOFbYv9e2sqw%2FEbEe7efM66ioXM2EqoNYOH04y6c2KxHkqccDc8MlstQ8ZoKXAv%2F9jejDeKP8RFN%2BJQTAZsfDk5fka1oy11zGoQNdKgMSeXSi7Jg3i%2B&X-Amz-Signature=ee53dd8cde5a266effc17e3c08727a632bbd1675a1041a072dd180761926be5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
