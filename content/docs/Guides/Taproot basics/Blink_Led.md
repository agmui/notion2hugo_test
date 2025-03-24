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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDEVMD62%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEoArxiE126BgefFq85IuO7gqTQzkmSSgQGfIuFNpe%2F5AiEA4%2F5HhA8rXUpA4rxOe7X%2BU8WzJX7zyHFeCdeUEwiBF%2BgqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFejiRTWZtToqpoJCyrcA0LEOpZxB8OWulAFH1tQJjF3v3MRKRjLC9OCmJl9%2B2b4WK47cQAksyfIwkc0jDpeovKADSkmcXyccTih%2B8DLStLS%2F9UiQ%2FZVb%2B6czpYai2aSJYOxYsBic3qY1vQ1N%2B07FFW3XWgYCh4vsbGhftGDyayaXcWwNRMWSgh3v3gAlYRWfvoTdch%2BNZpM3t8Lhwy2UO8dx2whSTSZKZZDz05BUiqZ%2FJWn1FFV7nunj1xhT6EDAG2mN0cxr4LSLsOZplywhX6iADXVGDsX31isOBXNYlMj%2Fy2Xb%2BA9fQkCgnRQDTcXSU5y3Qqw9%2FA1gk0tPqKjBKLXtiJ7hgcmykhuYjx2Gqyuyohg9bu%2FUM9G1xYyuSC%2Fke2KbaOE4my06nTUTNVJ5RDpUMJxBPi0MVYpHLZE%2BGg1fgNFDe3U5fJI1Z4UJUKiRuK55QV3S7jCDz12DRZ%2BFakazKISz0RJTg6gqOFBEqoRgEGcko4uFzq%2FkfNPMLeoRsqFG6Jj3Jq8Oj8PgWimngZK6BT%2F1MbGpOeS%2FV9ijYyFa5t%2BfGhdWFjL8l9nmgnH590nOF2GyPf7DW4aJTzMnT9UJI9SGMS%2FN24VB4Lvh6wCwdf3onHsqeTE6vZMJeQikIpodM6xrQ%2B2ButlMMHxhL8GOqUBSSsOooAYZJ5KlbRrnifX3rz1WiRS429yE%2BH1aGfHZbOaluO3%2Bk1Fjk1neHiSm6e67%2BsRIHeAiZiY55xUlK2SBS5LUMVAPiGaBXvO57ta7G4Kh5XZzUYL1U1rVv3mTYlLfHFehuMF4zDXEOgPhJxaUnJbHJFeKKBc%2BEv6oiaBmcciJRQL%2BYx0Ns%2BC1X8nrKjuOlZVs1XF0i56YfqdvUGGjd%2F8gygl&X-Amz-Signature=10954f8da310cadfa7d18b55305da39526f6aaa2ad92426c923ec6167e939896&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FXTT66%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T110736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWq%2F0%2FszOwNnPqJayNcY7EAr6yucnhnjmamsvZJJ43OAIhAKiQWEW9Dd2ByL7TWP9co%2BNfCXSrP2eKRsDUNSbT9FLNKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEAcl5niMIhOQq2zkq3APMPjuwH%2FdQgeR7jpV19zGfNurTVyhTfbF42%2BgzZI7tOVG8quGM9W2XZyM0ai%2FndUFE3PZAapKL07dMxSCEBkyY%2BPS8gLEARfX1Lc5J07cgfhYaZGZ6Kd3MLBi%2BWwmqUMfiuUGi5pp7m7a80WF9TPUHTEN0LKYtiA69WpXzgLTJtYHqBrFnBAE%2BnV3XqUA6WwGEPiSmjl7vclvcjWK9dJfrCyd5yZFG89ZG%2Bt%2Foe8PKA4dJ6bBxtH59U0dQssmXCOlj6HZND8p5ItM75qKvcGLwIyOknFZX0JjC1d%2FHW%2F%2FzhTrYYpeYl3%2FqV2BMBs4vgj%2FlRFHadgIIidjQr9u4lp8DJilr%2Bu3q3UdY08QrKZu0oFlwyQXomjLLJlQE6V%2F0bkKq6hfUeVCFqWzo0WNb1SGu80z1ulSicvNzR5RhrVQwqIDrh2GFLveb%2FDn1tHKl8JtijgwpYssR06DzHOLnQVFBIynswcS6Yps0NEFYyZVVCs%2BduPhXpqpfcCED2gg0LtHYdBWj%2BeZHJW1urzqBkzRFoMfttLtSt3xwG8DdckVqI0IV2aqLFuzveEIP%2BApzCKmRavi35dYNLHcOWbqMlqRRGY3UMOF9xqRt1eARyIx2lA%2F9ZzDcDT%2Bs9qTZMzCt8IS%2FBjqkAf7tTAmpYFHAQRDkpEpj7U%2B8n%2FKOxDC3BDAlErPGwjM0tCRBFI%2F8OYXT9N1YsSBnraBmnJveJu%2FF2grAbC%2BTe%2FjUN25OKFQUztHW%2FsRLU3iyxpz%2FHs7uGsxCLNsx1E7e8R%2BOoPepmvKB8s0r2Db%2B9%2BNyqmpMj9%2BmUWtucfixIn09HaPdvWSXJNFr5eAy7LSDr6oIqOumBc5mGHOw0Xxqpb45EcyJ&X-Amz-Signature=e4dd6ebf8c8248f8f17e3399e015fa64a35537c7ce2972655e969113af0aaf91&X-Amz-SignedHeaders=host&x-id=GetObject)

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
