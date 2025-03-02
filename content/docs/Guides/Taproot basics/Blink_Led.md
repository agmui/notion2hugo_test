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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XFJKYXF%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZ3gTB5Y0xslvCmX9kLWv%2B2U6SvG0x40Yv8gCc2iDWmAIgBFFnatwUDWEIiXQBRVNhher1i6cHgJUR3uOHX83OougqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXcy2WkcqP2OdWIhSrcA1UMtBaV8KsW0IVicmu5qSz7FJ3%2FY6U6wSohs%2BeZvQ1TR2%2F90dCOG9e78hkwLzA0rK9hs3Jw979bOTV9vb3yALgAwUmt0rvdOsSTFBQs646eri5xoukUtvHIC3aopjM4nwRIaSNQdyZNuqfL5P5AveQJwauDawIt%2FTbNTQPa0J9IyzkheYE6QQs8JwxVxnVrcJfo%2BlLwr5MuYEzODH67aU%2Fakh712e56W4tnhQr8LKoOJPPxtmivOX76j7jE7qc0unQpFk7SiapGe2MWv1MZESJqS%2BJHZMYpwWds61XVdFjdtQQgIfGFOEV3Yy3P03JqOW0jlARusto%2BbjZHA7KUu4%2FjnaSD07SBWguknK09sPKDQqQLCBShjrZfzywSsbV7cNSQHylSoWNHFey%2Fdvl%2FkgQRhxqFhbXrXT7W13dyTfCOeLOCTWdI5xCaxWEXbt%2BsxXYrChGpTa6wm8UlHKtjFRuDcTaISrQ16D7OS9EoH9K3bUuH80G4sBBiBkWOROJmOpRp0hCyQBfR2%2Bg4Qsi4tj0QHXuP9uE34yzSvAkqAKrj2adw0flueIXa0UT6%2F4R2PY5YRLu6nVRwtGhtcTDxpiiH%2BzzhL%2BnJe3FDfKZiQh3FfMYL7ro0u4Oz7dtWMJuSkr4GOqUBv2NiXSY%2B3vLZVp%2B0ULXne1xvhtTlW0Aeenzv7JdIsZKQP9GIreh2CCjNrzxu2R4oEX8UOJshkOMD4X5si%2FgUdZHEwJCe8JXaHMNfpXKQ9gxm8qsVkBgJ%2BI%2FRvCfya%2BzPc%2FOShS7kQYUnU9eywGMggBaFC6mD%2Bkt%2FXvHqYD%2FZn%2FLf9PuTUbgj0qYMUU7aaP9ZKP3c0rz6PZG3e6YFMW6t6AXNZbJE&X-Amz-Signature=6e9182f1446f3cb1f3a278154864063d7a5d16fc5ac9afc606734b19b535f508&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP55UT7Q%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T200748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBe%2B2SXu0O0VOT4rqZgq72LliozrvNRPGhgJil7ETk%2FUAiBSaQaQ9LVVQ5ym7R8Dtctaf5HsP5vY7dmDoH6tb4YOxCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgx9RHKf0Dc1C80TRKtwDVQHbG3cdFUX2C7FBAIJpdk3Hi3rMaY7DdTi%2ByIhWDnVsghebI8oh1NOcJT1X8JCpGzMAFHd7SAJWBLi%2BxF%2BBF0JdYry0ejGds99kBas2QDxAqjmtIXZIvvUykj9xRLHewSUWROHTnLW1KSHImOCD3nvjT2ctDRYGuph9NkKg2SEeKb6X0CsLZxKBNT2apShEBn%2BIPk0HHUfL0RyCvvTdeQRww1HHOw1J6fOqrvWLxX%2FXRARUu3RpI41qRqgC8ZLvvylRGTsisoIT6jMOE5bp8Anm3vvNDKR05mRVtlLhvopCnXKVuASo8UavxMzq0%2BK5j9ZKT37q9B%2B1U2FEkzTupjWeD8172qjv409qW6XxbRg15O2eQvSct16nbBllDf%2BRZYHXbnmYfFV1lYAgrWlGc08sI5ZD4EYcs9KUB6d40dfxDX9as%2BrEKVvJ9%2BEly5Q2psdi18G3Mh%2BXqqCig7vkh0VfqPssc9MrA24JzmRffV5igusO1vLUvwcswwlNJFtj2B4kV5lF6eiSBbqXVRoS1fSmRSJ2LJ%2FEPclHOXKR2KrCWRvC%2B2YZXJa7Ggx3OpzxvPk8vgvQIAbFuDjIqggPzLrF0cDTT9yWZ3lVtrPY3rzDo5yx%2FTVm97CMJ8Iw9JOSvgY6pgFepyDl0oLe85OHkZ7KnqZ9u6oIpZc7RswsvvFL7WRdsHNRfia8eWwYVpxIelELR7lZieDoTifCOLsJVd3ccTen4BwPnJdNNhhIKKlS4Jp2h0IS6Hiofc9IT1egOSw7foXNC9fRX3SGVpv9kBMoPm9KEW%2BPFBCSlkIFfZxG6rnCJRb4RiNpYy%2BqT0pMfX8irjEHdXpA3Yipm%2BteVzROiHiIubhUkcAu&X-Amz-Signature=efa2fa01a6997d51d32c565887af3b61ff3ea1fe45875d1fa7476baf673d3f60&X-Amz-SignedHeaders=host&x-id=GetObject)

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
