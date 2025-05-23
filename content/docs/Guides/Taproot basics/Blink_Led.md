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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVPQ4VPR%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCkuzfk0gJG%2B5RpJGCv83adKW7gd7Bkw9Lmf1gnrx8%2FhQIhAMS%2BdAp8dINtmaoFMQhrS4WtGj5oFFPtCSdHS8jPzbNMKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPuwccHEUmPKHqalgq3AMKbYgv8QlwIanspXgOzt9LWPfn2x9g4HG0Nq3%2FcKmMpnKKLYFta%2BlYL1vfQol%2BKKwJs0Xl1WrFrROh%2F%2BMQbIsk5pfSzn3uZzPEGvpNkQ6J8UURRQ26lha%2BqRWIvC%2Fm4PFIgTqmLni2Uuv5Cq2qOd0n9GrqW3PJ4EQv0PjEy117iWEH4VoMsyzmuiJWqxka5pygU8%2FYJT268BI8LVlLsPuT%2BL5ZDwf8gmv3GeqP5ZAIU15rGlpoyjxAICkkQn4t6IKGzph1mmhaFnhAmOGwlBXwLX2NdZtPgSu%2BtyzsZbJzq4Nmq5vuCUi7S6Ku1dWdPEJpjjIyC3g2y8MQa8aNb3X79xNcq1Ug86BHGIw4jzsIRiRnSj6r1mBkqDk7mIqYqCsP80NiIFD0LXhKVNkCpSbqsbPcHl2Oh4kjhBi23%2BeN1nK8wWhj6agvyVTQoonZrrkJbqHq9SeRb5ProeHeTHzyV5%2BTcEe3nDkah3%2F0cP9S1HIYg%2FYQP9CEOs%2F5g%2FgKSnNAEmQ9Ktfj45BsyJhnQcda53Y0roUA388leYW2zWBiwKYR%2BRZJNMPeqPn7LFusy%2Fb7CUJVv%2BWbgdf9pEJ9dMUAeIsZLiZjhXRXiYHHGSbAnvxtON6WCESRe1HHGjDCyr7BBjqkARgqPDJYMd80mhJKdel9GoaSQtMBq2wULccymk4X8pAMmm7Rgak6COat6Zssp2tJtkhqS2N%2FLJ%2FutMMTFxK7qcPvgLWbZ2NwXS%2FQ0CYlGBV3IFU22xcdmOzgAXCSa2iyX30CxZW%2BDw%2BOfVEkup25KmP%2BEWbYnKjNT%2FFYDrj5s4cjqiKqv%2F7gtQrGmMseKpfUVVcdHYARcmS2XqdoQVZfuSldzvv6&X-Amz-Signature=4510f7eb39843d9c7fb534d5cb6735066483167c3bb38faa675d83c08cb32bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWA3G27%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCz6j%2BlU9Sjwne%2BlRPUnx%2BOwsEH2VfG1JHhcCka3zcBKwIgRnzbIHQadKpAnpYslhzkY9%2FZO1zMgQD0OVBxNxOnAMwqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPAD5XozkPlM%2Fvw9zircA%2BzKhZejYThoHZOeSIcrIUw5c0xmewbbKyqd5NBLFOA%2FSqFM1PO8qEZV%2FpC2V%2B1jaCOx078KvW9dm2mqT3Y2RPIFOb77JHD%2BjNebp%2BFUMKK%2BLxqVk7nFMisA6pn08vOA%2ByhY2s4ur4pIOjTRKhbEkt9XUO9K0DwekXm0gNtTtlfOC8ZnQWXgm%2FhVENIz3pMWA2p56Raw%2BXYfa8qRk0l8lHlh2ZdyfBtyBvtvDw4pUkOcgyrVaqigp5eQP8y6cmRy%2FhMsZGctDXSlp3nGEzKJ%2Fczpj1wt6bhj1avb4SKOvDIiBs%2BMOI4GtLFZFYTSTbK3jt4ZXefympwWC9NWGjNFPtOPlVSC8eql48edxEc%2BETkJPjYxSjYcJQ37prIeZZelq9j8TYZEUnBfgL42qEvQtQfjMcYRSeV0T35T6eOE%2BVQ4b3%2Bj161w7yR6da7r%2FE0eOzSrJji%2BXtMv%2FpLqgzKSNZXpoGieJhwV%2FoXux%2FEzQql4e61DsX2Yi6oQA9iSz4hUJ0QbLpgSZSG%2Bp8xBoqee0m%2B4FOVqVSp0cTwshKKQuIakvgQGthVqUJXpA77nwgC445sfLLRlak8%2FQmrrx89cgrsDO2up60r6sdc%2BXzdG%2FU%2BLijLJUNDgkSo5qWKAMLnJvsEGOqUBm%2F7BSxhfI%2BYHavUJhxvgEK%2F0iDkA6hIpVMF8fAFXZrJOHfLL9eHPe3KTc5SFtMeQfWMjHRwzTfVfbktJB%2BU8Kg8PNtczcGELVrmj%2F1LP97pgjmRxtgPXcetDn8vuGBfIdCiupF3rtfc1HEVLdnTN0UM8kI5%2FNXxYnFdU4jrxTdfDvB4WJFBklNW5zm%2FTvw2oxPmRsklcqYxl6z1VGbv53ULn8uCY&X-Amz-Signature=b176d389342abcc7434ec4f7d1b5866e59850a28ecf591183b66adca8c7b51b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
