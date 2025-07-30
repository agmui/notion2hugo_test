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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZA3VJY4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOCm3gYXeCztp%2Brkrozdf%2BawBMN%2BN7OLA1EgANjZqZjAIgPht%2BZru0kZNv0F3ApVojnCPBwRlK09SgvG2HILcpH8gqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUSjg7a1lcY4XCs9yrcA7ojzDZAqoYPuF94Iars5gLEKrwHVP5t5GvRTVl3I29tq0DcFTdl%2F4yNlTGmFAJy5qqy0nKXcu8CHvczyz3XR4nJB4XR6ufSapa3Y8xnmPe75u4VOSlxn8hdU7JRRM0y%2FdA19d4QMK9pq6DcHKyH7ZzT%2FNeoTirI9XHScnHNVuDy4XSxCiehd5nEvvaooM3Bv10xvnn1xtyk25RIFWgPk2AFylUTsRMU0sP0Q8Lr9dqKXUSliOVCbcy4ZHiqTPK6%2BacAupH4mBnOF8Bp1GwIyghif20uGL6zEkXWnByCNOYqmJwGkzuwHypbJ0I1JHGP87VsbCg%2FvIaLsAi3Dloc5%2FspgCPtiuaHjqT7QAv2ZZ74jVfi3qDHSBPiM3%2FLaTKBHbCigKMdtgBB5Ia41igHFthk4Eq1aMwikYebeITslRS29lnA4kQZ7TA3OHMk9q%2F5Z16JTo72tIIiKwFjTWWpmY%2BXIVKrZ0rpyD%2Fpto%2B9o1OedHmvoA6VnUoe43V3HEyGkDhA8fGjFzrFqcM5lgTIieI3WMSyKwx6oPAFH%2Bubw%2BDu05zOGeC5quL%2FUu%2BguZZeNOgzFJLXM4QnwwXuVxvWAOm%2FxRoEXhbm4ZR6fZzcm3w%2F57vaY3%2FWaxI73oMTMNTapsQGOqUBULKhEm7YUjAT%2B7DoAJiGpHHkW9vBZKSkD7D8d0oI5CTgTEUboGPHeJwssdv3vM%2B098WV2BMgvMULHmAqCm%2BqlheNuw4%2B73V5XWXmyB30bYTX%2BSCpZA1d5l9h%2BrDFspa59Ciya2MoflExlg%2Bk7L%2BazAW5h5rfm%2BJitNZocai8oXplm%2Fv9WfGXuG55K9WA6%2FIoLPr1ww%2B%2F68C8h6gFXKsAdDQRJaE%2B&X-Amz-Signature=d71335488a3fd82d8c312e1d03ac52c8214570df88848d802778416f001991b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YK6WKTL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9zBb2kFw95vGSVRMWZFalDnQAGwsj%2BahH%2B%2FAIQAXvNwIhAPlf1udpInzS068F0AEc9%2FQtsiPH%2B9HVQ572%2F%2BN70yoEKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1nQBS4OedoBMnjkq3APd3ni6HUdchyvs2k2a%2FFdHC8xtp7CZF4770dUCKicddrvvPYXlD0Ajbc%2Bez9paNDr8o3cgxlhsnXZruwng7lCnsvfpp%2B5Z98AEk105kr39VRWpHVX%2BNV2i4iKBkaPOQ0C95BEX9e65uD4vCLdQkUFcmJ8esPJUX5dTDqGZ0NTnx0gSANYJf6kAa3Vksh0GNx1%2Fj67uS%2B5DFYBv288CsShV8jtS%2FgVeG0Meib%2BXoakqA0XNuhnmz%2FHmfygfhYsP4GVJsa%2FNvnvvBjiW1qSFLXQSdSlJyQo1bqqxHHVix71oTjArEyqbg6%2BhRs%2Be08KJu4%2FLmEjfPmW9u4%2F3so7ZJKya20Q9gx%2BGvYrrkmdyAxDpDetLjWNJW7ZvFZLvHdTzxg9c%2BwY9E4WcGqhqwhGBTRDLgVmBw4F7ppXNuZsWLHc6WWoTH3hpgD4AKHQmMJuvqoyw2W7%2FUMV0crD0VllpKdu0MkQsbk6sZHD8pZt%2Fj504X7c%2FJWofLWCr3FDGcONeyKxRF9avU9chyQE9k00oNYnTcVWyzfuWCWYIV9wIk0pDGRCOaVo3HZceikctGzJH1oqQnA%2FFA%2FMmTNP72ujh2ftS1yZJ%2B8lRsSpmPLmv0Pnt30fpiOrh%2BoeFbi0N3DC72qbEBjqkAb0zMTv2QIc%2BPkHb4YwaOdReP83ybqxlcXg8k9tRSjOl9gINcwZ0A2fWU5h4kHGZY0sgZom4E9Inp9OKLSX7fkZoS1FAyAGy%2B2M6e2SJXldjaWjMqA2aqPGppnjd1DmdNId5kD4Ae%2FN75C47m0VRYBBVA81o%2FOf8QI2OhV1L2XTzMGkMOA4TjFDe0lEHedKAS2VjQTsl5bn5u938pN0XK%2B%2FpmuFI&X-Amz-Signature=3e5b387253a1963064aa686550ab60e65432ff2b0594f081af0bf6253ed03c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
