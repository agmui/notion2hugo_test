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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7LNKS2R%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCAjoE5jQ8yuTX6JAwcjJE32un44lfPS%2FWCG%2FZP3JRP9wIhALV2stVZP3iIfSYFllnF0qsEyvk1Lhv3Dj2Fnr1mUyvEKv8DCFYQABoMNjM3NDIzMTgzODA1IgwEFpHc39PMts4z0Ncq3AMNnff%2F5dDbff9ufRIBmx4N8%2FJ%2Fmc978IzP2WMcU4JloFVR4B52uCVzQgBYn2lJ2pnTPV2%2FwypOk9faihkrfx3uwtCGJfdzdo9Nx6McKz8VbNjtW%2FdHu0%2BRJ94JUbhTsnyH3X122U27k40ZD5IEdo4L9GK0Nyia5K1kIRf3gHpF0IyhP3EfwkJm%2B88RceOXVPzvQ2vKQc8EzwW8oBuD7Wc9lQjZXFxbT4gpLOLZmOy3Kuj3bnOML3Dq8zUDvVwoNkYIVKZLm88fc1l9PJjL3h41nSS%2Fa%2FHDKl0pRBiByzVwHaM5jt0jUio6zPx2YNS%2Ftt6LLmvQt8%2FEjBMPzCbm96d93pLS3C1SF%2FPBMccgKkhoP8TbooJgc9akp2bo7%2F88K466RzByf%2BFnOFJB%2FuJlB7Z3Miw2oNkFTkHzubpieInFjGxLrj1l7kvacN16B2jaObSz7KOw%2B8vqIInn2uzTSD%2Bj2Sj0GPy5HoduGPz8m6zeTHZEKBP9NsFUW6VtZoQiprootXwpaiCDcnnDTau1IKPxjYjUKkFdMST8NUEbW8CinMLlkstt%2FBnkmvUzt0cEoDcvvzGZWDTEetGq1imSpJ%2FatmXFO8JcfLoAMBOS%2BW%2BHgsgD0%2BVTfMWSv1vGfTC0vJHEBjqkAZGAGDKEPPjj9y91RPTyvUDGM8UoxxpMMKwjjkU6Cen7ysTbpeGT%2BqHYvyc1CBc3BWrH1CAo%2BJEs4J4mLgFR%2FAyw0AJV%2FZwt4j7K6ctzDCLZ2l%2F83apeK8wDvgREJ8c26a2ibpTMZNtMMJ4EgetP3UMzlZAL9wwsLcGQHzjJOyS7pyImQ%2BG%2BW%2FituaDt1kiymTPmjkxb90zNWCJrR76veF%2B2Ild9&X-Amz-Signature=e89fcb2f543c347b66e56f91ca32d221fd1722652ab46bfc7e854ad3230d2054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTIXDEVD%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCARJ8Ymad5kb7u%2F8KEZE4lNlNPm%2F5urza4w5yw3d1KNAIgLkJARx9Mhu%2FcOxSwY6X%2Fc8JA530W3EKLO1NkxdyXVtYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDFNoTtYcbnXIMhwr2SrcA11SxBNsvukgR4b7stv%2F9XCJosNtsMRhvLJX7MuCelMQR83il2cEoXJc2GPRGTQ3Z%2FNoekXy1sUMPRhLc%2BB9ZuuN8mtkDzRSv7RnyI4th8I69TxKwdT2BD27PoP8NVLrxiUfJfu90DEBe%2B1WPIOKicP5EcH6YvkTuwLRP4DL%2FX0%2FiMDhoh9FiuuQeiMP6s8XjRFRgxOoc1cTxXGmlZXTWhTCbNi7lVsyFeuJA%2BkYY7aRwU6tgVoAjeaWdpXbCo2Qu7ZZBU1Q85HPvSOT4Ds5iFg1I4qE0oP8Oha2y7SlqMaBK8xpt0dN8jE7iPEHrMX5x4NCGWkMTYcO%2FxtPGMMGe00Vwk8tqQ5t5ahbzGVAFufBsFEpjIR4otRqHeSS%2B8FJIqBBAVxmPghqgFlPRlIpz26WMlFE1HF1P13RcgGl15U%2FiguPB8SFRP9XQW2AO7SfJLGXjDDMtwWU8AffeqGQkJUzCyEMkWq%2B77Rc8nW2ulBOFJqjF4d%2B6VCEB8QQxJgmB8YYmMn0%2FeV%2BfkIZnPuiEhXoS95i76UzU5t%2Bl879Ty%2BUFEyYcUmBzYgbTSP6F9aPdYex4PKhWjciq7GcojX0%2BWasETAP6IoLFsZBj1PKW9mz9%2B%2BHc8O5f%2FkfJTbmMP67kcQGOqUBw9DjGk4xCje0jPkNY7ZTG8PJ0IRy8bElFCnHwDwUOjIHfYzaWfm%2B9OpBFvwS%2BaqVJ%2F89XgQVY0h6OB12sqcI4KeRN5tWh2%2FocC6RWJeFHnhJ0GERvEcrpwjGFhlTyf4AfhCG%2FIs0sfqe7aBqmgRCT686TQCn2Ot52unOcF1Mq141eVXZfZiz7QJDeQN%2BRWHaXEbXpAw2OVKekjwYUA1c8XamlIXc&X-Amz-Signature=3f96c2d66cefe5cddfe928320affd90894c0fddc7e112c8a04802bfa5b172867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
