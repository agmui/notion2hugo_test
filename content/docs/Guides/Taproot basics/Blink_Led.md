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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F6H4BGH%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCJgrB1psE2ypnlXdS2bk8IjqM4xdIOQgn87B2jJWDNDAIhAOxDVJiBXmRC1oW231InNSpF%2FqA031vWl9tKeKdVXRmVKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2fAOr4lnObn3%2B7LAq3AOj4BVIuJEsqrTFbDBYG4l0EMHMKnos3AxCDJhDwZbGkab6%2FkpYf7LDp%2B2TwwccZ2P46uxTdrdHVH2erSYuqAis0b4FDDqjvgaGTBj19mAvxVyyb8srAkEQ0AZIvX6pmuAbpY24uXULm%2FmQq06QCRxvMtcwGBM%2FKCKQSVPhwfG2EW9LqfTSzWI%2FOFQXBTyeTbWO90NB7tobbls4hn0hp9PSR%2FDeInkKPp66XeJS3VkndrLbsZjmu1F4ZjJ1izyTF73fZnTp5Pl%2FAEnonYQRBjLvLO3S9pVaoNQ0B9PDQtGAEXLzbbLrqdFynDr9fai851bymypmy3E1PPeCCcJxKBfaNfL8P9VnjqafXe9kV1Yli8MbazqfS3t%2BYbhWhqY2qtBXoHhl3Tb2wlA5iaQMOmUdVA9wyuNR79Qg2vT5L0wY%2BZviCTlTVBBLHgIBUMCT0q6f5A2YFUKlRhTZmImRogEiP23pBuTutR0QlTuwMzc8taeDGoTzcLyYoYXsii%2BRFQBQx1q2w71wXu14gJbCQ5Qs7OHMD0MeZ40%2FYNQxTc0zhxVXeY34qOiEtdBBjCmZfYwbDc5%2Ft9%2B9BFO7JA7LT%2BAVRR36Slz34I6XZ5nkC9xDZHt1sE8LUEVl%2BelZsjCqxfG%2BBjqkAdX1SFhXQGEzKRxwKtHzYsSZwBNXkfWc%2BupTKIIzlK%2BmJaK%2FvSdoLlRwF%2BdizVRVo%2FgxiPNvqs%2BfUkfbpdqoW7EgR8hTQZhFixWerxQf7K0EwgxM3dfW3XzkIRoblzjsnbXdPom%2Bz7zy4iwiWZASi3cSebJdTEIQj3MYa0NrOhOK9JE2TNJHUnWKLurZ%2FpP7JD8FRcKjbg9Ty%2F87CmKebx6v7FZL&X-Amz-Signature=202e4cff44c87ea75b44486056c7b7d35d93888cbe616ecb7c964d1aec2bb499&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBUKCNT%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T190339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDoYmUdJaUKPUOR3D%2BnKwJpeaKe9KdBtUPO%2B7oKo5Mn2gIgOjwrpJylsRrvXDELIRoHSaAyvdFWoyx03IU%2FStPrFpYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKg3vOQGNpZ6KLkZtircA7E1HU3AZglo3UM6hXskNsSV2wixmd8jnyTXd0TgUzCI6h1eHhkiicj%2B%2Bqc3Ai2%2Fl5sP%2BxHmDi03x5EEE4efIZ2Z4gXiR5cg0znq9IWhvCBIYCP21YLTYL%2B5a25WbfpgtzkN41l98aVHzFudVOtkWseqsKgBEtqbdVBgsi4L20pqURyDRtr4N%2BnSWT87l9I5dZS7O7nf7DYzPdHmDx%2FFeNUbuGGNWbQG7iVFrpn0hRsAVKDifiueoguwQMGhhgkPKE0lu3ZkmG9AtKoXmUy%2B5CjMD1CXUlYebqgvprO6oJ2DsFdqv9eEo3MgNt5HQP1M9JVPjZAGVHudAqPN7GWmIFcNkluf71CPO4txLs129GNa3HAon41SLyy1qNRf4PpXk96EbebQzDhTjXyuX%2BGUNNUQEhJvhDZe23X96A26MXxFR%2BXHPT6HlcN63xbnZ8svoTtuq7x%2BRRdaIvmPIaDx4wcuEzc%2Fy8tZC7crXOwsDaP1WipsfwaL56%2B1yT35xHpYDTL%2FgcZirGAqeXaOLDwsQaJ%2Fq74bKgpbgfthQhmpE9LFsGtXXlaamH%2FkYvVoscKHq%2BDT7BU6NTlwCtYpcIay2HfHHRMFicHdcAcCzxipcRQG79qFrJ%2FLeRVxOJ5EMN3E8b4GOqUBQBwmjXRI63WToSggK%2F5CMJZoMUVjnKkIzTYEJwgt48v6Gi79LjjPL6PRjLtKzRkk%2BfMbMJXNfSaOcevVDdJoPTGdU6qFMwTn6EHNkmzsPUvxkv4ZJhzAhhqBb%2F19Gx7x8eQSa8jGSNwU%2FYfOH3fIRzgKoOLwAEz28UZ5YiMAplrwLKTEg8cQMHmNOQpr69AF7zUkO90LdVRZuLI9LHk%2B0KQW93PW&X-Amz-Signature=3a17d75b27f2f20bc5c3847bb9285df52bd89b3b093200268abe328c0d86ff65&X-Amz-SignedHeaders=host&x-id=GetObject)

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
