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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DH3W2S%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCebGHA12urMg54hLBrmFAVEIdQfaw6GEJUGOe9vNHuFAIhAJpFPvvHU58a4B%2FVsr6muiv4gwBH5eVNRnHy9nVcqRMSKv8DCDEQABoMNjM3NDIzMTgzODA1IgyksxeeiQl%2BhVobS68q3AMdVTxc3k3exaPzaboaJWNz%2BUnOtces6IHQgEtG52bc9vw045rU5rQlY%2ByXeryk9OCn6wXdiJw4jvqXQIvDaT4Dlpxk8vI9DkVqT3ziPD%2FEEOKfd814gWjSRP1gbvn7dKlvuNXHhER0OTZCWLToQtMsRDbzGJfp%2BRA4HHcZWBEI0L%2FBqIrhdjM7N7nDLGeRnlegpASSfvJRwRjNLfwmOkkScIH9fRxdLfs%2BwpgXz%2FLieJ3Ydld%2FXYikYiJu36MuolY8l6Ruh8XAS3Kzcwb0iq9wPGwVFWI6zW39mJISgpA6YUKTB494Moi%2F0Q70%2FIKrepuc%2Fs5qJhblD%2BANf7%2Bq4gDf94FX3X5cFZEWa6kCeag1eMznzsN8MIkWwMaY0FTrzBr55mNj1CaoTrIH77V1CIzJYdKp%2FqalnDErQJrRM7AnEVXKqtqv9zmbGdt0KBuefhIu0G32UNS3x964CPsSO6Bz7nZmc2qZ%2B%2Bl1gmUHYrNAK06M1dY9NJvNfTPPfH4oTO9quMPstsFeAB0rQLGig9jLiMb7Gu%2BkYaUuyAAtmfFnC%2FpNxGtjI9PD9O4ORZKf9phOfHitSC1lawnGzUOvTIUi7Y7cUj96VOZfISWKVB662ik1ax7n5OYWmLoXoDCq%2F8zBBjqkAV2PkeXEX6X1BX%2BWjnHg0Ro%2F8%2BsWNdvbaNEeK%2BdZH0Wi9b%2BebUQUqCV8YSo2N0Gcikkb9PKYEk2focdIcJdLchVMdq95IyUX63RuqiFLGudA3ej5%2F8DyRuKWDxhviHob8yUZM3m3uppmO5QcqVOG1E3pWC6LhINPSfz1kBO7IvEHgKpvk1Bgac9JbxtDGokIk9FmaNmsVLlGVv%2B49kYlGVwdh%2FsK&X-Amz-Signature=a2dd3c1cbaf537253974d099469554eeeef0339b193f23b2df09e67a133642df&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGWNMJZY%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDO4KFT0kwcRUHKdAhzPfamK3pD8oU5j%2FwTr5CruYENjAIgPEiJvds0BsBFdoQ1k20XL%2Fcy8ci2EDJPP03fOk8JY5Yq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAkscCBF8HKHZlNHVSrcA6ieKryHUDfOWfx6K5bcJx3XX2DyLYp6iInzDgCvdDqmFooqQa0VixFL6L7h2HZYEjW07Ae3S8Ag3De03w9zauUAABCU1w8w89R9Wa8WhYaotrmP2EldK5x%2FC3qgaj64g7pI0NYqBWhhVm1bBQzK%2FYMpoQEq7TdLesi8YmWVVoCPz1atnQvFGK1oW80y86cVyi8ADcPEjxQCpwFXWp%2FRCR3ZrbiA2sYtn1ZgELMQx2WlErshUhzbmTq0DkaULtYNv7T0eUIruEBwhRSdT4i%2BFlDEMWmx2cYYRoKh1iGIc64P9bxyGNHp1IJ9DZqjgVv%2BD2Sz6milL5rxsV%2F2%2FjZ0uZgX6L2%2FQOAhwkvO4ucF%2B1OvZZRQe8HXPYoyBFbWLm7kfoJZWhzTZKboUuw4CkYSrW4C93OT7oVZd8QS%2FVHalwSwrBOJJsGTtbmadX8ufHkhV3%2FuhAJCN5KwNNINeYNe8f7JKSirF8t3HTxEk2CHq4k2af1mi5iEZq7mD79g2giTG3Q8ZX6bSuQgzVXpk1pFL9shlHYQhaYgTkyIGDnJXP9QZ5kcaekJfSRQOpZk4hLIh%2FQ%2Bgr%2FaSfcPV9kx4Tl8HBv6g4FgyAmAzuSyzVfppxKGJNxy%2FGwm7n59N6MnMID%2FzMEGOqUB6vRFjhDArt6XBZ6bBhapEwwybFbhbF65rLH2fdYDPMSvNCfiizb4LLWx%2F4qTJudfXIPJukloF%2F13B89d63tLvr6CI2FBsZFqCYNnHhcm5XG20vss7301tDtg2mxpI%2BNqlj1Uf9uUulVYtJENfCDsWDd7edfZF02oWplMuQFUW%2BiJ4PuHIyr02a%2BFJq1oCA8UhNBJ8L4DtLVC1zacg2fEx8nTtC5W&X-Amz-Signature=dee9f3eff040126587bc54729f15894ee66672a1153358ba2cd85517077121a6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
