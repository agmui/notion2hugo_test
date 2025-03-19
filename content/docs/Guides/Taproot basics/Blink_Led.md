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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q42VA6F%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC8jh5Ogu%2BNyxHTybQ7sXoYLqeVh3zJsUw99o1yPg6iwAiAA3TQLGnbRnZHb2mFN09v9hw3R%2FKsxe5Q2hAI4TeDasir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMYzZRWtelVRX4p5wMKtwD7GSG%2FQ6BdqFZrYHr5hvxoxVwudwHj3zce5Kpudr4PAZZ1xP7Gv6M2PrDOdbDUEk6iWw%2BEv6EEZZjJh5dsoNur%2BjoiV%2BrnBNSGPcs5OYuGhDYO1FQPDexk8c6j%2FB0axUgGAA1HYb50NfgcwpU6EUpk5zRwrzVHvPdZM%2FSJ84MBg4%2Bv%2Bw7oO2WftPJn4nIp073oVlZFv21iut6C6kgSyKqi3wrYBB7QgIcYgpJbrhb76BeTTED02LLRGoM53njqdUpkqNrX1uIlX5XlQZzJdxjVLDyEKptghTdU1AyGpIuALqiS8dfkUHCsZv4LYrJRn7uG4uJ7PtC4S6DbSPA5kKGaxDFpNkDBIRyREbDIl93ePsR85QnrNGW1jphiaS09xb%2FFCMidIN0qPGAg%2BdAhMEkF6a9FOUiJI88bnCfACUJnV7EQbpj0Of05QOH9nLl6q8qeFM5fFhMSWCOZUt%2BFD8gJ8MwsBO0vB%2FpaG5PAJlDWHpqQCcVJBUcR%2FGtHDrGLaQHnLCB%2Bad%2F1iNhZhAyfJw079nkZId5FUFciwP6wY%2Fj75d1UGY4FMoA5xix%2BanGE43HIvbIWnfgk327odvuZhaapofcsrdXED%2BOskpx%2Fw40TMoNTSCGeZLs47Eq%2Bfsw4%2F3ovgY6pgE8T46CbteR%2Bv0nupho96f06PbhG1tiU5mVNMjRQ4P%2B8eCf64S3f7NJyVO6RXN5XWvc%2FDIh2oKZV5Nyk0NhCQ0OYvoeLwqEC82Df4My2AxEkVtBlxVg2pDPz3R07QdalWzJfcTERyJt5h1H4%2B8Hw%2BDItN2uBKo4Gi78XZkY0yd8bKDLaI0N2OOrv74VMkqBX9gIGnrOE5RNU3aCv7RwsZhbPF%2BVzdWH&X-Amz-Signature=33eeb9bd17a93782c6fbe8b20bf310fb1ac1e01546b1be67499077ec1d7ccca9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MRMLGBK%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGjjO9oDzCl7CnvUc7oRStl3u5UMtlQKNXtnAFnJqOKeAiEA2CrC2UgpAWA1x5l6I2dI%2F8P22Htb4xfhrjxcES2NLXsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLXSac4jtOKQoBKZtircAyEibedX7EL0p0YH1OoPKTzoL5QlG1Dv%2BwkjreMi6HgC71JVzhVW8nHUk%2B5IRd8HKf8NTAuMk%2F1qHwlYr5GkA5grGnm0T14R2sioQvm7uS5RNRQpv6Xc5vhCl4k3VYe0Le7yTi0ghDFSOgbVwyckYODYETZ3wFQFwyXgrFdRygLi0qkqivP3W7eEfpj8z61uVdigTA474lPEGngfnKG%2FO%2B9iC6wmUVChy4fEZDnylDprAebvyO9pj66A5hOvFRxvdoKgMBrrWsYAM8dOQWA0CdTBXENMfRlJfz01DtBqi4TVF50GkvGE4w01Sd%2FAOptEd85%2BSVQrkhmOIHrHET55EnAQv2wdHBWcss9xGjwvbBn0y7SML%2BGhuKvg%2FcfEhVYxLvGUzrpqtvax169CMfJGWM8K1iVGaMSeUCeOt4U3R6FFeCBgEINjHsEtLgyf9OaO16rG%2BrfvY5SwgwtUlTfu4zmO5d5MYUYBJ1z6z55gjX9Usg5Yb2%2BS8FgZjtlon33RI7CqRGQDD%2Fv0D3Qb8jIhL7g%2Fnl1cOf3s6d7fXVh4F6TcKnPoVHBIV2WovaGR3caqCXFSnqIgx0OoX%2BlRg7tbNkdam6sTStcsQLE1ufjdzBaR9V4MOO%2BE5gb944JKMNj96L4GOqUBA5Y2O8Gg7vpWlFrotdXkFfZ8GwD%2FZ7u1ITDUG9nbpfyz7gpMBQ7V1fDV19rCxAz8dIG%2F5v4GBR3AGQXpYsS0kYN4B%2BSnyRl7HkLCQYiFwavWtweKr0cpO2CvPNsoyOtk8jX5bFq4V7muqIRB7cES3YDf%2BX7%2FRfEyIgS0QWfZBMRDYixxjIn95eFCPePTf49Lbnustzp5MdvSEHZYqvEXLbdNkiqA&X-Amz-Signature=f90aada8314b91125db37e001dccaba4d22562ba7fcdc31a1e98e22597ac3a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
