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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYY42W24%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2nxP1xe%2FJpU8JRJYNMg3nAdB7x1XA%2BdY22XooecbjQAiEAjO9VXL0ZV2ZoActJq2PqE9TWMYcyNdt8fuRndXMzCSwqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL5V9yaLc%2FGI0GFOuyrcA4F02DNnua5ZaTlWi5rrVIjHznvH8SNuILQcqAdmRvLh3N7DeqR4pcvKC74Djl6dAEfnPXRaQB%2BGQqmxCn3Dqnc%2FQyukz%2F7yIBZxWVSJV8nIAESM3WYgL3ywS3b%2F1lHrqfP77i1iqjMrChQDTEDFH5vfZMVK7vS%2FxmgXL3%2BtUsuAzS5csktjJJ1uj%2BtcpoBaeD4LP5dNXePIh8G4ahJiQZdIp2%2Bj7W88DWZXkryRD377KK0wqnYp455RuDFX1m1DkOPJ6fLKFhzRbhOcoOAEZjDR5z4K5RG2gjuIV8%2BWJqJhGPlq8kTBfae9yForO0W0zGXD0ma%2BAbn82%2B3zXcZNzEbnhuBVolUNkW1AxtsAE%2BpZ6EpkFnAApy%2Blrx8RNcqKKFJGaeMEQONHpEocaz9ZmoCpsVqhsOn3aP1VZmEz%2BQ1vEx0rkvidyaziMXao5kWXq%2Bs70BQcc0Nlm%2FLwcOR%2Ft4f3ZrXlvV%2BV2%2BCkCv5qsB4nq0pmUCgrNAT740LHT6XbGeOdX6ri3d%2FoF0QZ3g5OvwrNfrmbwNc6jIJDS7Ly9pRISsZyS%2Bu7HbPNKsnsr5d7tAumfYS7QrMVSTH4TLOA8pAg5l4S7nLVP0TzmDgHx4qNfnGwHDc3k%2BpcJEkzMPrQ4MQGOqUBca3cgHuHe%2BjM%2F8odBwULhmlP1uaXPHLyhlVxFpmFu7KPOgHpm3Qjjs%2F6W5uzYKUZsRsZ40iAM5oeee3PZJK3%2FUg3%2BfAZOtilRzSWcNgAIgtfwM%2FsMFNUUvtztWhrwniZfG5g0Z4R0Kr42%2FA5jMvMIk8NJJJmyc3tkadrEzk%2BmEgCXj03ndGutXuIJINVjuggg%2BYqFMdRFNMUeqzo78XCCqIWbt0G&X-Amz-Signature=8898c2c1d4f1acce9fa2f60390bb1b5213ec083b36c29f2cdd9dfb43a39fe7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMSR6O4P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXQ1f8sMAWmbPBVZgxzq%2FkyfgL%2BUF8yQ6kIHKTJX%2BpJQIhAMBWdha3OFAmFw6d3sypIYfkb9RcISsmQEhdoVrtsxP2KogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygceqzXwlsAV3viMMq3AMLZIgVZzTmfyFBDSiIbKOAzn7esD7EzfqGWZ5a8kMcquaSslZ1M3x1pYXn3SH4KVLavY5QpOuOpgiOsNwzfOitizO0dD1MTRhmUHUEx2UJzgk4KWFhMfK9O4fcpymrFucZZnT3hjik6S8hj8M%2BKeV0yfWkyYGMNP%2BgbI44Ihcpc2ig%2Fi6UAAwgn%2F9fs9YYKyQBsmG9G6K63qJCVz1nWpCX7vxrfMzdAARbUmf1Ai%2FqQGrcb%2B2YX9ds1d60I2IhJ9SthYqKiVbH8iyWGFRDFUR3ngNagyPOaxikvsK4tVPI0xR257CNlqiCQFWUA4wa203scZjhBbscohsHWSfd3bV7qCQE2kk1ahICp1QIi8fLNKHcY4JejV1CrqGQwVuz%2FqYB3xAU5evWnRbTzB%2FD18CJBA0kDbW3QFXbhoevHgGP8SCy0sMxnBhQCSxzYVCQhurUh9s4ehOw0Lnmjw0K1jtKlIdgqOQGqoUuZ303tdMs7ubKlM9Z4dMvuwI98HbaSN%2FD2qGirETxm%2FrjID5uZbqGadB7Wiuj0yK7lPZpsM%2FoKXxwJBfx0Ak4f3CWS%2BQyNZZPfGBWDsYQ3I%2BwMMzv8I%2BKouC0uuCank9twt1Vsc922dVgN3BdleyWVZbusTCt0eDEBjqkAcrmlMAsm1yuB3flmkDrP7ePhP4uiCAsW%2FBE6RHrfExdW%2FZoNUcnW4BC94iRj34qyBDtjPXKuuBCkQkRZ%2Buo%2F5SBFE2%2FslI1et1SLQ6lb4mNkuCOxxxiN9T6oYOOseRtSg7hAQQb643FbAZoV8B0uEnltVXfhKy7DqfBz46jw%2FSz7XEGbekQMmWtV6ePf5lYathL2%2FOrAjJNEmj4egxA2NUWWmNz&X-Amz-Signature=18b7097054543f635441a9e3fc9d6396d418655a6670c4c38fa1c5bf34e18108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
