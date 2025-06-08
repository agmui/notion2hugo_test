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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LGSQUN2%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdANEsNfFM4bTYMNxqCzqA610Z5dncVh%2Fq%2B%2BG9ZwFOfAiEA0Dqc92p7yrACe7G7pFmEfkGLS8zM%2FMnTbhg1Vj4vySIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4T0A6E6oKuABSQyyrcA%2FT0hDdiqcGDQeDqREI2XUOWq0WZE4kgnH2YqFdF7sCdHS6PMfUzNS%2FAgLcS1B1dkSN5Qh73VGCcWn68SrnGSUDMGEeZx%2FZzETQlKBcnqTy8ZR%2Fcri47tK0FCxgL3AUTDZy%2B9m4ZdsZVQPfEEIXMiA8XasLmHb%2B35y9btFWu57kJ5trlu3YKEvMl%2FXdD%2FHQVxaL2zODclWOwWJUChoRLBvQHVyMtSCOUgwN5i5H9M2sRBWsmYG4weDqB5eOWkvEcj8htNBzXQCpV4mhHfoQidhPwGnpxkqGeObZdX5zbV9upG%2FBwe0ngKvRl3mOW2TJoOBdL52BQF8iaRaeQw31wOCJxBLJT%2F%2FnnoMGOqnfVCpt887NOfWpFhtBV7KM6Y4c2qe3Wc7B2Sj7n3%2FPs7kkbNQ62RIgxInAzj%2BHBJ%2FUhxyyX9QwaBq9GGePVoA7nYWOYERSC%2BFP44F3m8S%2B%2F9t%2BFXXC4KaifpafZozpa4SWS9CVWduDC0qVEPgkmsi0%2FoA2oUz5DZ5h7wc4YXRY5jVwveN0Zdxlf0kuza%2BexbkeByXlaYdUxEkQal1rao%2F1aWAYN6%2F4C7pdjN8F%2FqSpCpZtfb1xL%2B8EJ0NwrIx80BijuV8Z762yvDK30lq%2FJA%2Bt2MKCzlsIGOqUBNFHzR6qnGCdhomcv%2F%2B9dqkiBdJ%2BGdFg%2FBjz0V2uQGqryDIHG73paZNsTiZVjQitnw5r6EEX6NDDq6%2FAOgv%2FrNGW4b2hbBnUB95PNG2xmD%2FuOCW8SUnC6eMP4G6Pkqs8CujKXZgfN0yPyxbGSxff17IuCfXAwhtuaWvXj3Fu10v36BfxP4RfmCcXXZCDajDcyOfXGWmsVQKz%2FPS7SVX721bHwN6mD&X-Amz-Signature=9e8c86bcc8e18353304612c2891b7beafb3ec36e5c7aeb34c428b95ba3c5889c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMSPVRME%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T181020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBYN%2BLTVU2gHrZhGFO%2B78z5KK5rHftc37PSaXHY6LSVwIgFDNnAD9D6k5Zttb1XWc0XWzCcomjKMYzF7WPNO2YrpIqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOj4yy2F9AgMFhb84CrcA40UqwqXL1x%2Fex6ZfJAUFuQjnECH9Z3hLxZ7tuiRJlCy5mWoFVdFJ%2FMm9R%2BEGn4O0T18RlcQ97RgPKKHep8QQJC6eg%2BoiyHKBxEoj2CHcn4KZ3YN26VrK1Unq8dnuRoObhOx46dYYwjPrwy37s8U6dbzsHqisOwfyPJMEaGo3YvPUH9hbItpDLcLa%2BemMTVFjYNz0zpA1yt0cUnGszgYjGJ7YK%2BHGZheuKuzGz1RDKHf2wevwMUVUhRhYHqBSvQH8WkWhobIcPT3hbaLVrbuicQpJ9h%2BU6fhvExo%2BlOr3dCxZo0ZE3REXz%2BnI4A8m6dj9eKMSpsE4Ajk2J4jvtVfCPUsLbfuMqlEVGmHMT7dww%2FBS3Wfg5O4y0mP9E4P%2BCVZXxm4Ceav2I2C27nyU4J7LNHbtIpQ3Bd6hVu3nwVcnyKCIFW9BrD4aw63DU7zdDdb6o%2F%2Fy6sh0kJX1tFDCzG2Z5ZLmDVH70NY5c2CdNrmTuD2j3lSdBpiyQgzI%2Fy%2BE9PiGzS0qNhtRGXkdQOwty1qVKYiNe0elfp0elFd0ir5W20ue5td%2FAkyQVMnaxp2qC1iXMpCkQc%2FW5Wo3%2B69vFpJhVCu7Ltl7JSjNp1OlFg%2BiPPEn7eaw%2FkPJAk09JwYML2ylsIGOqUB1vGMQOxEDHfJoGGbrHTtoxVMcwpzb0sTdBdHJmnb%2BifA2k7lVbM1kUVuzXa3zVhOor2kt3FgadnFr4kMChyfxBDhqoYA82GVRyX%2FL7NPHCEEzaOwQCvXMUEUvlK7PYKnNFTqfEiXfjCY2sKC7QCzn0FRce4aweape7v0OSwTLamVpdrqheAgXpqjVhZB%2B7sBShWbKOl1naD%2FjNqtiXDaeTi%2B4dRo&X-Amz-Signature=5159488cc0278953a45087d562a355a7892edd62d6b06e7e205fad538cba1920&X-Amz-SignedHeaders=host&x-id=GetObject)

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
