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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAO62Q56%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDXbd1E2IWdIHTR69aGUC%2BDJRZYNbzkCW9foXdHTZ7QTAIhANhFlEUMR1fu1lE9cl4AwdVeCfbWggAb5XJJZ85BHwAQKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7uFEpfgVeXKi9wGMq3AM9n7LOccMFVrX8Xa23kFxpeaaupbDHpiHO7acjDm7m2hvU6oCRsCeQVB695Q2loFdjt%2BaRBVOJ%2FwrmOmxQt26JLcVfHhayyfcC%2B3uQ7j%2FqM84vQf83yDFlsLnPWleD53gRHRuK1fEoxWZax3HyNTJpW6lHXXxvU9WPdZJI4pEqD3I%2F1W5U%2BM0Jw7JexoomUqiHu0PCpJOa1ZBf3Tupj3gouVa0JA9eakOf9Aw9GGh9Jo2rnsVCZdXNmpB4h1VByZ6xGH7OjthHwM%2FTJqASN6FSDNfSPm48J3da6I6sPSrB2Nc%2BxF5QvrnY%2BXB%2BLAPryczbi0PSXGiCiSSMhYqxLeIhjtuuE3lJLHeMyvWIU59l1jmOplDpB7MZHBRn1lFn0xP%2FW3s1QbACIOQ5R5Dw9FRi89xJX25CkRO%2BAA3ziOxav4iBzwCLv648nKaJp5NzTTIxDmD9kyPBSGM6NlMQEhhOIEjWTlcRJmR46aCljVoVZfilwQb%2Bn%2BHJtaxpcH15MyVRYzdcblwvClHbGLlwUBI1nlnuFOrfJhD4P6eD%2BKZ3rpNQuzlQrgoQyWPiJhlcet7Wj7PuQ3gH3hGfk%2BFDG%2BOY0EOAKvSm2KGBk3eNj%2BCCvbzB2VoCBoMQkVcIhDDS5pbHBjqkAYXj161sPgfoInrUXS5elv5r3g2RPF%2FT6Qabs9vZCXp07UpYusAjMofHG1WCU3pYsg6JXW1fpE6DJmdNDxlzkq0158C%2FE6RTIZ4MbM8WgsnI9J3qVyhLjdtKgyR47zLjInMif%2FMpE8v68SH848XalV8ssjxOuC3BYxcUi%2FI6ku4nkxWWn6jCkX3N0IfOXVhBQVC%2BaakLyf2du%2F3EAkJsugFi9oeT&X-Amz-Signature=e4c4a3b704b86eda0f856e3fe233bcf87f70e7be399db70ba569b1c4cda47324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AQCNDJ7%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIDocML%2FX0vsU3Gr1A2WYfRUlC8oBiGhLml9lZq7QwgSMAiBXJvL%2Brhl%2Bj0nrwUdFC7syE3foGw6OmE11mUVjEWFoIyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMN30mTXTPy%2F0aubbWKtwDOyQmKD3FAxGlVr49daZJB3FCtcXFX6PnKswNYh95L5F6WlaZ2m9cS%2B7N1J85JbW%2BTh9NoJYeZR0Uo7t04rgjAIM42g7lsdPLb5LlcFkrCEzScE79r4CxayyvzrNBfTwt6COx7nOF8i%2FVv4xaD%2Fe3ReUM9yCJu0e3LU8wlZSAUH0g5KFY64wKWWq6OKLA6uV%2BKHHcsHd4nYW4bDSZvda1P0I2WlTDhfvGC7oQmHZjPlHSCspnIzqfDsJKLYOqMImOas5ZYXOwAnnf2K5%2F2s1tVHVzkXW02H8pB%2FvbkQFj1iLEUkHEcqXFoyIyznjQefvmyM0EpxhpVbRv7tZxVI1JaApbp3v%2FOSbma3P4gVB%2B%2BtD%2FoSWuF2B8PJzGzReoZekx3Si11YASSehQ9TwbxogH2Loqs0GmCFBNRjfYJWbBHPI400Ewnqlr4cG6ZAUCBuk3%2BNEGOCLehV0254sPyJzaeVce6gqq2wK8gPByd1r2uRNbYPgSDgMJ9kL5M6eG%2B%2BzQ7fAyE2PbAcVyyqtGx16Znz67%2Bc72c3L0O6%2FtdxqkzzT9mmmsOC38x3mkhdmyF6z8mCyL5a9x2sZqBcYSesaCWXkx8M%2BBwak7Yn6dHD4N04rmmCRS9Rb6xwXQgaYwu%2BeWxwY6pgFEdJxFHRuPaPQejwpUcvQcAxv1u6Ynoij7qW7%2BB8tPlnYygw0F3KwZhsNnSuV38MqA4woN8Kxo67tTPoRPEPAt3FyGm4gp9DxEqgiSI1a27DrdOve2PLEkulAOxg1aFDPX0T7ZTJ7e5M2tiFoQx47IVnPBHFOObg6WDOvDqqjCVB1XT%2FekocicLEDuIXyrUd7%2BN9yyenQvOPBIvVqPCbZLiM00ChJl&X-Amz-Signature=0a684f4003e446ae5efd6f7fa06c940f0c012aa5e01e2d737af8798e3e2dd994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
