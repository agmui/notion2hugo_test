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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLBWIDJX%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNxG8THSlzOFBybM8kPlTMo%2BAVRiUiOIypBtzXdsWiWQIgEfIV24GaKxRwd11N7FA9qgdsqQISZoz%2FVhaDztuiomkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0lry7AEAwgDnWhLCrcA5KTR1wJo9xmX35NE7bqTaiZ6gk%2BjALkp1AYZp2aFA4Nd4atJDmRwDCf9SmP5MZUm8pqXVB2Qy8sgp2%2FTUQsi4PZuNLwPrjLnIY%2FDNhJEdOSMqhqwpzRxAcx%2FKLFwEMjJ%2FRFvclVGos37eK92mkYmXilzyeRLDC4PJ3EJdhYAKbUGvFZA%2Bst83B38BLArcYyYFuqQZ4V0q7vKPBcuenqHBn9C7mKmXhcOHeUEUSo9iO9dKB2U7HZolIQElEGe1800%2FOETQzTRxD71px4rhvlldL%2FeBLAueucxAPAKcLR2bScsVasDI0Rx8VEeCbrTSPRNobieWb2%2BxQe2GyVzBYYszlqPjgH2pDdUPirZNDS9dWCZ8Ig9TZ8oP5s3Z4boAdmDvIT11qa2H7iUrUCr1zzx%2BGhNsdT3HKpUCa14TUhKY3Hykg%2FSW1yVy7ttqFofh0BCpNpV8GnZhqA8iZbOzYXElRvxbMyiznDiBWHMUgdF91LTil8xEYTZyGFl8KMGFHXpuj3WqGtyoHBHxIHGved1o7sKM%2B7lJp%2BfsluNowoyPBsKtTasu8RQOR53oBZPOEsxd8FKXQbnWrVWN8I2oWvKBimobw5Gw404xIIse%2Bc3612aCpZ%2F6%2BUiBi6IL8NMO3Mqb0GOqUBelx%2F4NfJ3e%2BXXGdpZk%2FnMCScpbUH0DlnxgF%2Fyh7boC9AnJ8BYgfxJBVA0PQhysDjZ3b5BO7KT9tLi%2Ff8W%2FU8%2FjdmBdG7WBck8E%2BTr8deTy68hpeUkYmuBQIRKGCdvrjG3Y5%2BCkJ6Z66Pzv5B50NPIFWicHsv5I079Mn5BHimrBxLKMi4FVbqS1t0UoG4OpLbyo8uXEw9BRw2Cif8AqUBNGAlFJ3T&X-Amz-Signature=85a667ba9fb1f6ce9d95e2fa3ff4765ff39df77f90c1f0d4d2762c4233aaa217&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7QU5JA7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T220729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkzB575H0FaHFRv%2FyadtbTeR7FO63hpu0obMvx5yMSVQIgH0Fg6FBpMq7htJXpeGPJ%2BUsh6cIUhyjGI6apJ2EtbbcqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP63bglttJ%2FNzD0ZcCrcA7h776ptm92XQT7jZxXmHWBOnlTvUjoVxj8DLQGwyMAyONCWloUiBMB60IWyW%2BJCkiFrCPfLJdr0Kki326oSuI2TRbVEZzvpdflCxFK4TPTucrnD0EawOYxXPrK4XFFFYRAyKV7AYjWM2Hb6b%2Fg85BKnS3myncaJCwhHbtf1SMKfzpZFX9%2FtEVjwhwb5lpGJYPyzc4ZYW0XGwLPPHWnE%2BwG5wR2tj8b%2BHkBKV42ReVM5L9zAcDinSiRpYyLJivuItf7HCpbbL1%2B6dWhXOx%2BYfStsMLzpxc3TqKyu241NgrMajqPIebMfqGy1aqVJQNpOXYZNTI2zhSFhigRhK2W7J182yKXok9Z5w%2FIH0GobpU7wNH90knVLwP9wT8pHRxcDUbsoG%2Fqeuc%2FdbtdawUn7Sko3JiLEKv6kRXHHFUNlYJdJ8T10j7cblzFgNGfR1PEkCaPUVcINdMwWsZvB8sCNM3CvUIQhWLdlx%2FCnO7Diqj%2Fomp78PdYcSXVKDzwG1KZchduMzTJfWNVYDOTkITVR5Agm16AM%2BBo6vjyB9oe1x3NbdRvdal3P7CVKf%2FsVyAMxdAz4us%2FkqkMlU8aUfdjhmVuLc1NdVlDuwnzwq5z05Kg9OhslGt0hCpnmhplOMPjNqb0GOqUB3Jhi5SFDxlgC1bIpaUIp9%2BXkKFzpF%2FMIa%2FxjnNZd%2F5UfXlet2%2BbJfAX2l0ajlr62F1NXMIBl7Ndii38dT3BS65cKlHt9nfv9r2EC%2Bx9mMni4jGEvGIpCngDzsumtQvhYAxiFgZBBau3tjsoSUaYs0KyFVE1TklFSLy9CG4Dv%2Bw8eMklhiMkjqnrqNGSeMOWECivfSyK249x9aDmVBywqnpzJdftm&X-Amz-Signature=5fa907018cb4bd61ed542fa512e3c57bdb12f33dd666e7834fe14af4fbdec8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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
