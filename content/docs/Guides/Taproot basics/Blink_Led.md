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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCGELD3V%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIA6onX2wA%2FxxNjr7sZ0CcqtWURc5%2F0nzHrbKcT8sius3AiAcz%2F9fVS36OBDLiNcIiwww4ozTBg4dmnoBI3fQwwzxpyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMtvBNehvhzlzHsGbsKtwDAfM7MzqpSwkPHDaOCkON09JOVcaGv6Fv%2Fuu4Geq%2BDcb7GLNM2%2F6rPG7k239KIjZ8UX%2Fyv%2B2%2BK4jCXQBgeRdqpkuUTvz7gyeccE9W3jTejBrojVlUK%2B31btfMp56q2DRlMhOOVA6RD8o6cTGwIGwY%2BDA6VkB5T8rug%2FCClSHff7mymRL1C1W7MnTPpXlnFxGRZsngN5Ml9Mvk3Eg0jIoVX2nay%2FEuveVjMZnGc9jkxi3Yty4C7pUZJtHYCPV7qWQfex4B62t4AcsHMHdoPsB08uM5Nx6VsnTrTe7pc7scggyktT4SwNxwiMAS7u5tKpKcDjHaZR8cK643f5bN9hu6B6NIdk0K0yPMSOC3NPRp7bSZO%2Bu4uQs6l91ttAe7ZBoUZvi5MCzyjqrq3uz%2BWx555HtwiDkHBNBOkgCGe4PF2nnIVE9VetvL8suLW8pHZlRp9gQ2f1b5x6H%2FfHOmZkF9e0KBhlaZYCOhi88nLnN7c6wTgX8aiGEeafdNAQN%2B3ulTPir%2BqKR0ad%2BtncQLJjBEV1ps6LxP74lb0YEiHE9STYZooRfRQJDWI5JQcyiJn7Ig6d%2FndtM1svkReyIxByBo2cjTPcwXhY7Ril837OuV99%2B8RPS97DHYK0N3DDow6e2RvQY6pgFCNroXzPhiHRzQgwgVmWMD2VPfWUhzs%2Bve0Whj2q6ymtpQiIZisDXnAnLhr9%2FuZqFRRXe%2Frcsp8FBLPy48VwHKDFVB%2BC2%2BSX%2F%2Bj4YtRbd0o3Q12f8wF4rVlq%2BipifjogwbycrVNLlYZCGZOrCTnCTliLPIxIdDqvrZETSUEeSGKgPV1PSRVXpDWV812mY%2F%2F834VY%2FIwcELn2HSquEZ7A6xiKAET39A&X-Amz-Signature=c801d0c1443643bc49c19d66a81ce5d84a29d83060b750c3e1fe634614b2876c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGFJAPNB%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDA%2BTbzvRcsiTPKAEHy6shsu7vrz%2ByhBIRu7F6aZPROPQIgNcUD6LtHk3oG1cb86df%2FWS9q2SHg5tnajSC%2BYKgabxsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDGmMXrfM2p4I2MDcMCrcAwkcTOCpxxDfMkJXXq%2Ficpg23TgIaTYIRNKMzVeupfRAaNpqumXvfd0x1Vp%2Fjsz1bKJzH%2BO%2ByP8RfZN2OD1Et6x1%2BDKXDxgOjiUzIUZofSypTTR4NZTuju3TH7MT1%2BKpQhDcbZfs9iW0aSqQn7ooXs8xg99oA7J6pNNt6lwAPUlj%2F9ycRTKil2A%2F2W%2FvqH3uY6O7Z7XSf6nYarZ19l1aKyvFocantbjEOe5e8eXaglQ6s1Ziohghp3U5PtfIqz48jQxsrr2mbiPI55heFhtuW8y3rmENB1l%2FCpCUHUL5p35FSl25oQMRI38sIspk6lPe1qR75cIO1aw%2FQH7l8%2BHiVY9t8wBLa4%2Fj4DhAVrod5Lnt%2Byi9uEvKd%2FKwr35blhqfygwHjGmemM%2BfG5rAcskyJzI3Ew3ESzs6GU2kXqcrKa9PistVbC37QPKCbZJrIdnHsH2XgIfy6srSEZMfAdtl9dnhqf1QyrNEB8B5Ybh%2FRO4uLKdMv7THs1XIqNl8BadCUyu6ToHliAoaMPeCgzIHM8DnxEKfVe%2FegeUNH3Om787claGvcOFX4Mz7hkMpI7xVuUxAsV32XPLdTT7Q43DkaLwjLN6NsdedNDa34u4Bopg62x3rtwUdu93F%2FcgPMNjtkb0GOqUBbSW5ipBe92YhCONBkeXibRASNZGAZLMx3nVkrFxMBfxB2ttv7XXFiHsiBh89lpPixCM456Sfwvt%2Fe6lou3hLhH3%2Bu%2F2kWTR0BCJ%2BIE3hYJLgd3hl3wufGnwUv7LWk45U5NeLxQL8jX7oceeVANMGRfuSLpRAIypeodF5eTMOiSKP%2FQSErcGWJ8FjslDIEG%2B6XkZQKgWE8LhuOrFx9085JQaJI9Y5&X-Amz-Signature=4d347ce8715ef6de062c0da5888ec043a0b49decae2870b4ad05d762894c9e0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
