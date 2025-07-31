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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPU7ULTO%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNltg8I1JVd6ZEEXMRJVZT6%2FmT6h1DlOEPubxrYhOx7AiEA1XsSiOqALBnaqtBs0Dz13sZdryZmxeYKKeRSPjxWYgQqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzFNXqY8wItpl6Z3yrcA%2BvjJwcuEPxJ6w3uKMd02F4RHqxGTn2SSkciD01b1r%2BZZK3zp3tSXo16CK%2FpT6nFKck7uXEEbDY0lpZvxgcxd2BqIIxFZTEBWql4SN5ZZ3fpMRBVAgsNDxFSs23rBTDYSSfdeOzdOsuQfCSFFyq1Vf1V6ipalxWuD25JsHW5bxbTOtZWVZk4jRh6P79fNepc1hIlKjwpSeYy3CrAyzZQiHXHCcb2R73Kp9f6vHxJMJYbOXPVSkSEBNwhGFTz0pk1N0%2BirN37xD3bLbtVRyrnhA7Ip8UaeYNquUDVSH%2Fuxx2zOAV920YhSJAGxkdwNIT%2FWAE71%2Fzbb17uCZlib4nasTdIHgNGie9bcdUkvPx1uMDfVh3oNC0Cn8NeeSW6RUWpXoUa%2BvDkNgrhSQUY%2B%2B7KYhp7JiolA9nDR5MSYv7f%2BPmGN0T035y5Ydi3Zh2mfcH5m0dP1UVGPa%2BaO7ThvoZ5ZwhBEJ7gmtFmXXsafBAoi5AAiMSCUZDfowwoXfUPO5ukYuAMQjeWJCjrtlqZ3kwEFIbPCXpY%2BkO82CAcyBS8px0yr7mT04yhT8uHCACDT%2ByuCHyo49n77E067zlgrgaBd8zR26npplHlrGE%2Fw7esKBoJAsRmwWUvjotyzK70MPWQrsQGOqUBTKfTKxA7wa9dDdyVedWK17QprV8qzbQPepbVtwSSeCs5OCxZTttNZi0JjZsjpjAB5wAxNbMATjmVuYlF1suXRMzlCyyPiqu%2BRX1CaGFeo%2BPR5M7W%2BjoKnAvq73F6TKaHCjjMoyPUm1WfhieeFaY4%2BlUD%2BKukPPRm1CGMOdNdTWWsI2nlqzyVPDfc13XybDZKK2%2FC8Mf1LP4dhAJlSimPXL44H5ty&X-Amz-Signature=8c305c3e4a0d71e14c006bfd5544f1b3432a63f3e938da320a0fc5e838e88060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK2N3QTI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T161206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrY59rTcdVhOon55eE6e5BNkwFy7cg1V%2FVI1byD6wEWgIhAK1AAIKyG4ZmbQNdqAvxMHN2%2FE8U0S9i%2FZG70wtnu76fKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwU5MZEIWLv31Zdc5gq3ANJxjrZTH43W9X7whWcS%2B%2FA5ucHCA%2FY9jtcR8kTHFhiPK8KpYzYdQs6NUoJZkBEcz1HFY2DeqNhm4rbRpDOHbVHwhl3d9ku9x1Nt%2BbK2D4gLjBbljxnFeZs3B5z7i%2B39Y97Pdr9cEela%2B3H85HVy4%2Bb5thMRL8CaLAAQ5M%2BKexDaIDVbN%2FTamgC%2BZuBAW9a8QhBNCO%2BK7Zbb1x1nmvPGnOwLXyFWAAg5dYMXpNhkByNY1Pf6%2BVR7JN3V2oMs5LpEnNY%2Bsko7RMhptJMnl5MVIzibuZmE%2BfKZUkRuMq49r2v4icPqNucM5cfS5z8MwMEGO6QQNurQphKup4Z59jppNFCFiIcHD9WljWREI1AExML2blxYamfhNcKQffJLar7gnUtNUrZUSWp8H3lOBVLnh6BOSwyLviT4OXyHRZcvBFoGmbrRzjC%2FK9Llm7m8eva9uWDXVU041ty4itP4c8O2j8giMhimPY5i1wWXJiA%2FDtzWeFAoklooV6GUys2Tov9YVrsnX7GaRhw7oDclhhjWneNkYffHHfz6q7kW7z%2BRKqwGEKrUkOx%2FCp7hWuahzM0UlLhNDwfuPch7LcPcb2%2FXvMgS7kNUMk5BBnf7nMewamlChoO6p8NzRy6L%2BrN3zCaka7EBjqkAaz4tjlfmt8S2L7bzapOxt0EALZfPrswjfmIOXBHaHG9gVI%2FP2WFo1%2FjyA8uUcZ7lGHW%2F6jfgE6d9moB1i12uKQBr82OkhCRvYVmsFgRHD5hlohquvRjxwNqsDXVrE7OXA7p4QJTBZc7o%2B8YIexEY4iBWA8UJk%2BHnWOjX22wfax8Qd3IpKhohMW98%2BYMm2cYa7ThIdinN0STNzIXJFRzFlEk5Sfg&X-Amz-Signature=9f54989e837ef77ec4993d89a34ea3949de1869bd4ea80b230aec0c444fe5563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
