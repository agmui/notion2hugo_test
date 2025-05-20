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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KCOHSO3%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9dzdPLS5YyI6uVltdJD9ccRWU8ZpNbHl0SJrM5T8ngAiAKxDV83HmCegxmDaueBjsTkMxc%2BJGdV5S92RU6TbOyqiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkSAzVkgnokTElh9pKtwDezpgz0xPPqZR46KddMw5sZ0PrDzKIvvQVdOUoRCDul%2BTfxIQRl6lW0tpliAuUEV4EsJ3w37V1xi6J3rvIFGJ3JhnqcTYg9w3s9V4bIUdITsNvQuV%2B6KcuzslOEpJXb%2Fz7Sg8zDxGRUV6zHF1TnWCunmPANR9t4ubheUjjX5XeEDa%2BxbR4uO%2BJcyA57hVQyH5d7N6%2BSjN6dlHSDK6ULDYt5vuWLFSul01KfIjyxgAFhyl7d85aXwzqtRvUXGdw%2Fu6X0iOEx0JeewNQIPhENIFTJgnxhZf%2BcMuwwfvds54%2BQaiRPohaCzJYxongDcmBkJb%2B%2B5vzRJHUA7iaisy%2BFs8yys8O6lXrh3G9y9GbNEpZyKzXsym0cY0QVPX%2BoBijCy%2Fyopo9Guutt2pWBzqVsh1JMWa3z0IBbE%2F8ZPO2mBMsX68RPVqfIxDOMqMIC01ZyBrH67xTfJJmlsf%2BNtNuPb538V7NCiFspnWndbzR0ydcpoB0Iem69WOv7p6OfsSOSgj%2FL6ArsrN%2BReaNFTgUhESz%2BYekpL5jvqLx6m7qSyl7JlS2RLgATxUrPNX2sSUy4QUfZKjmmnLx1%2FwrZ%2B0SI%2BJ9RAcxK7GKYAthjOTwnqZivTHWV2j%2FA8kN2mheU0wwLSywQY6pgGJkP5QByzpK2JitVM7teLiWXqVvPigfK%2BtNHAg%2FsivB5mM2%2BxRrP1s5B8UNlUDkl5%2Bb0pemC0L1DPG%2BT41UVoCQazDhH6lgOWngnTfvbBr%2Bbw1SlxYSCrrqR0UNeeMWe%2Ff81LHUPWpJE4%2FLAOEnw2kpdi8D0czNw9DnWdEtm4bMfvH4juknDNG7z1ghESWBnNmHMrCaCPNWRJMBsToQ76qPKQ422fS&X-Amz-Signature=73999b23352336d3a602917924dc310b90d0be34de02c6ede67bd5553e37f5a5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAEWJAIY%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T150952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9gSKRXyDKKhzXvo8wgOXjtQGV1rs1v5M1hUnjALRmCwIgSR3S5O5vBNHBkIUWS%2FhiA7ZLDXRq1r%2B6uKfZl1pvNkAqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQWmXLwWTYyFvVHLCrcA8%2B79UClXmm2q%2FQCE8nWIafRsJHyfBPjRQMumcdF48kftbO5VB5TLwy9mVrba4S1%2BOAg8GBzC%2FN9vh8wBqRQ0%2FyLTVHU65HkLYEWKZiqKiOo4tCR9u7X3UV9zUwP%2B%2BVz1tbUgPkC3aFPIoS4Y1SfRWDUvejXDHG84KLC2MS%2BxFD%2BdFWOuv8A90l4sMhgG4VQPCwdbtzBGsUADzBKXiMPAlyAnpVp5HuZOx7wO0puz7Z4H0MJuH44C%2FIElFSpT4DA8iERXh5qLliM4vleTFBzhPZ147rCK4ZGqimvnd6WJDJsBnY%2BgABg%2BLoxwpwtM7eJJ8KxZJRuuaEzB4MtDqrelYf8V6CDaj2RniMdsQaDUg24WneLkXINvFbYMARU54ciXHSDHip53r%2FuxJou0tys3ZVWJq65vEufoTElMizPLGpbphNrd6%2F2LubfmoRNU4e%2FamYHZyQbBJo1JfspkDEj%2Boxi%2FatVxNxrtELnoMs%2BKmy5irbqEdkrRse00nvD3Xlh8PIF3jCWRCEQdPEkQ6Z8Tf4vGULH27JUvieIWA%2F86mwziJGogb7jIvnGpxPHPPKaps8DC%2FdHHt7sUfxAXk1U7De0%2FgD6l56mQLkyxQEwWw7dDw7zKG05%2FlF6Q8dWMJa0ssEGOqUBcNIwTiy8%2BwHvRMJ3o6mbjUI%2FQ99nCmQXwCBcq2t5vhIFwQ%2Bus6ax%2Bn08oZsFSi%2F4Acqp%2FCZ7TXRSYrtyLJZTEDUZSmqbB73WoS7r%2FxEqReAQ6Vg6a5pwD14n7pLSPyqsdL6MngX8e8NcpIJoPnEfRcakBxQKHcQ%2Bws74HCE2OMw0%2FKj0657VyI%2FD9cwwMzJuOLd6x%2FA%2FzbqN9mvr5IyX9uNFG95t&X-Amz-Signature=6859811b8db7984863a0a88aaeef1d6a27e8b7824ad03064fa33e4e4bedfd1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
