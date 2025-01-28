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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYP36QD%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIB8IRc%2BROk24TeX58NIM0gkULVRXv7J7zAb5qSraZiXNAiARDrR1QjTrUqES04fSMwqeuqANULVdXcL7a0ZdOlxR7yr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMkAqx%2FCZZE8ueezQXKtwDsDlCUPT7GI0y10ICTCY8PR86a094puSIkCz98WfYI9iepp7E9bxiVvDaKBCu4SDFBmGh1uw7OBOFRnY1KQXNMxbGiTX26DbjQtUuxtl%2F44lw4LJyt2njwf68muFDdJqul1j6gK0WYvG2jQ3drtbdtnZi9z%2FSTlpc2aEM93AHMZC31eQ3%2B2%2F8nicis7ifqSbbWsSsKuioHzoxkPQLU%2BJUg05S69wBl6ZeMT5InR%2Fx0kJLSw4ET1OmvROlS75ar4uAVe5pTqslC%2BqLJO9RcVjiesRjKgGkEPOmSjYiE%2BMei10x1cE%2FWZBRtRO4VHA%2FQ6SvTjYSxbYChBlDb3qlRySqN%2FDTePIdaP7a%2BcTZoyPbct2XyTVUGtqXUDFvTXCI9pz10n4qwUU4dunqczpMoqVvuacRwIUhkBb4AHuMNnORYro2nVuxCFXwtUK4OWztpYbhybb3i9uj3AiXSu4qK9YkGVjxYbgHGs68XQklQ9USQ6BmuXhlzVTLIHhLkRYX39utpVd19RllvJfPNO15JCVc66O2b7JdvohpGYvt8vlXdysP5TXMkUvVMo7eXQa7nE5f%2Bk0FVPfF3et07dFIhsfwsfdJ5uMJJMTIhDKWBImtSWJXkEtHgjLWOCba5dowzujkvAY6pgG3otQzG3Tgk0%2B5e2%2F8ncdbb01f3%2FBOlwPzfT%2FzElwZ75eYDpqsGoOVoWyCztIT3QZLIFKDjy8jHsLGDDj0lFvJW%2FfhH2ocvuEZHWFKIDf2uSx%2FbNcODx3gnEvZAh%2FAcN5M6U82BlWdyV4NJKeYGIqJJZxHFP%2BQK9nBBIbaykdvKHHG1Pm%2FNGl3GCMqocyp4p6JOWe1%2BjIH3V%2BW3qP1eSZ7dTmmQzbb&X-Amz-Signature=b039aeeee2154f8336d691a652713cb9da4a9b4ab013e7a13e024bb1f840a7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPAERNO5%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC3wDjuSqNCERANQBhFBt6ZWzKuWsbJ%2BlnFzxKamX92dwIgQO%2FaMODDSxyQqDlNr8A32hpKUmgGfn0xRddec32APMsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDB8S9K0oK5xDruMlsyrcA7akhwYU6eAkcPqZWvx9Au1xWhX6oG0OAgw%2FGO86u0iqdHYNlMK1by%2B4YzBy6mRWmUaFPXcS63nEPIsYkzeWm8PEbwTxXA%2FRxaWhU117LSYhnD669gKq5m%2FPlNHlzru0Af8sIdRDcV%2F14OnkRgzTMdqhr%2Bz8IkfOcMb9jHbxFN0BFELqLQ%2BQibIQVoPHWZbDPNydYYQITmVR5%2B10ts0WZ03t6IvhRUeSouzLLt%2FePM%2FseNU7rxn4tKzTAmVJdXDM4%2Bi8CUyde0R51lPwogHJxKzVzIKwjzwp9rcFgcsDX0oMhRKrg1bA2XjlZVdHyHvHY64eL3%2BUu478mGij5HGbzwqiOiMCRkNPvi9AEjH5Y8kxR3dajMGq3yi98NEYVUb%2FPbfQevP%2FXkifjQ9F2dQlm9XflvWjehmh0xAb2E%2FrNejvOKGVJiMGuWUqgr9hk1B4Oq2YWWyNXcrlH21XPaXCKOASgJsTxbFcDt9saEG5CxCD0LUQObvEvHE%2BgXvls%2BX19jTW4vYFhQBhKRIV%2Fc55cG6nCnHWgtjQLU5008e1G56n4Cvoc7JcrA52QhwcAA8x%2Bh%2BRP6e%2FJz0SJHO6nM2xOVKWjUTDxA2g4%2Fknrlfi%2Fu8ikxjoSCYO2ZYW75niMPXe5LwGOqUB5z9RSO18f3dqiEkynhKVFz6yMKH57ugawvU0wJbpzhBVHi4KWZRg8SDfFQ3rsS8ez4%2FnKdaOLA8au0FvH2aqr%2BHTAu%2F4dmM4NGCdf%2B03ixynn6ckbadxohcsGDaFJz%2Bq4MhFrAjATVtoG%2FphsflBYHKmUOk%2FZRc2iteeNHBtMjISOd%2BDV26KQ66adRvO5j1b8FyH3p1nwKwYnju9972opXl6fML7&X-Amz-Signature=2c640637102785fe3cc501e9f18921e3fd1465850b19dd71c74a8b41c4e7a71a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
