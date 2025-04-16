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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D4GJMQD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtSz8RjrfagbVlImdXxmtk8rz2IwALe7FvqR6D2UmozAIgEdDzmQEOBP4CW%2Fc0KNomsCc2WG7%2BkHd0E0VQOfNDXaYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDDqD23AL5RxWu2jtOSrcA08AzdFmObCzgaLA7w1FM%2BhXW7OqSz3NLwAEPNmGgTdN22Z%2BeBAUMTIhy4wwvhcRzgBuEBDmUBG9abDAnCmC6D%2Fm8kEf8a2EdOd0FfM0B2fgQYjBtYOL96iYsFeVpC8aHKigPIEtx3bBRhvVpU93oMGqHLxTSF8ls5kxHfvtbCZ4TBnoBnVJKwgpRYhKwOZ2Bq3EVens%2B7c%2F6V7EKXw6iR3DEY%2FKfBIKjfZK3M4xNjb4aa9FJmpdpjGrVl1ctYwlKS%2Bmru3SlNuoEVOt2YUkEaKtc7Z6bULjNNPU%2FuywO602O4Ax0ZzDIFvN4U%2FOZf4sD15H5y3pYiKxfRetTArSkuLKCjUVgU7HYIeAwxBoLljvmBRLfC%2BKS8zRzT0csvP1eZyCYAfIzvTr13CWJedr0qlrSCac57%2Fu82JjrSjBIQTGHTE7N4pW2oYHcCR1RgxFIq5HPjK78TqX%2FZosSL0v%2FTOxhMD5dccQ9NukZOo10IMgNNsX%2BX1rIdOB6WqrIzYWYxfrANHPEvRJy1yVQHKfOjTHLU5%2FnWK%2F5XKv46k6FQUEn%2FkQ0aVXPSWXSB%2FquBhFbJf2ZMW0FDa6TYgMIBfDCMuc0LZZ9x9M3t9d76552UbX9PaKB8gKn1Jp6d8cMNbG%2Fr8GOqUBcMYA4sXPUYrVtIQ4vaIJ1fZYlD93gtipqLlq38YMcwST74VD4nvqaylcQi%2Bfpy2cv5Mp7iALcfYddxy5wuL6W7A6Q77TyFlSzbX4cuO%2BL5SMn%2FO1CeHECr2vha%2B%2BX9jnA60jMxe%2BhNvFafjyv5fAKoEgIzEq01f2tMt2kHrFhki3WA3afh%2Bn15LqB4ZECy9mcIH2q%2BktObmm9Si2cz7wg%2BtGP4uS&X-Amz-Signature=a45c6c484eec9144c15dadc27aaa5cc8df99de3de27c0ae31c9792fbd6a4abf4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAGXVDS%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T132045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWGv5fOhNFn5AGA03lZbv%2BLCeYqlzLdo4aD4GNjQJzEgIhAOZqZFI8PXHCpSNw82u8nTO0scypse3laP0or12qkc9wKv8DCEYQABoMNjM3NDIzMTgzODA1IgxfhaJr%2FE%2BWU32jqlEq3AMBJtGZ5hAJOqeHsJhcGLEmZmkENMKscUcqm4GebsFKxyFzhQoah3CLPe4LJu8w3aFSxUSd73CTWNj7YMPvLBCJdiBpDeReCx7jrsy1iqPl97qKh4o%2BSE11b3IvygYP9sfnjLIC62I17bLshSY3PmMUQCuvsehmOXTR3lc2b8GHJ7dHtj1XVulcVdTB6RXWwo3SLGwJoHln67WqiAbiXjid4Gi5kd6P7qI4%2FyvXNat30agXwTBpn5M%2BPMNe7M5H3Ex9reVtLrVpzseSFu%2F%2BZGdYg79cxvy3Ow70YQxc%2FFKQyIVJNB9GSATEKRPGS3oKfhV6h4hsiA2CW%2FJ66EzA40SnTo2DxiYopytUbKXtwwhIPSyluhmR0LmYQdb0q7Q18O8zWEKUzQGnedu7UahuOH6PmaUfM2H9hN742JOOnvnY%2FY2fwZqMwaw9Rbe%2Bh9zo31kWrMMQMqHiFXCaYpYhzNMChAyqts%2F27Xe9TYOyGl6aqxhxN6psroZOfQuoawfGtEw5V%2BP6C7q0wL8nuqAqhFdx5JQQMbQAM0BE2d%2FvLTmDzTKdmdKfNwD3B%2FkxyY9plP%2BUvzz90kBziFOBQFJ60Ter9Z4Duk2C3k0ibxKzamIfgut138zNlVvJ3xD08TCTxv6%2FBjqkAW6oSSXSKJWJ67d46MqZ1dyMc7e8U18K%2FO10getqx8dbefuVoWUnQaOujop1fuD%2FBTIvmzALyTd7zWDIEI7wesPUUQrgUpiU0Xr63Ygq3%2FKPt6Szjay4HRYE7vgW4%2BQ3SUe2LXjU41N7fkXUH2ceBg8Eo2bRfcQ8q98qMvc%2BTt76qwNz64dWjASg5m6DxZo9OCw7lnDnkSxiesPzeclPikjvgm0P&X-Amz-Signature=1a501f7248a2364af86bbe207044a158620fc1e657adc4e758c8f77b621f7e21&X-Amz-SignedHeaders=host&x-id=GetObject)

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
