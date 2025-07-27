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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAEQSOYO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCnBezgihLvx9MYGZ%2BfuYcyn47UQW%2FbfjzXUfCAirnEFAIgDhPTsQGWkYyjiAu1Qda4XgWUz4TCOSTWlqtjSvzSfcAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOKO3paGTQ%2Br5bdO4CrcA6rWDPUTR9ZemiprPOE2EI%2FNGqBzbBI8D6S9MpsF5MWSgIUWhdVHPFM1nD5WT1s5Rvr7sUyM2HSUPkuojQi%2FsRBmtuT5EaR9fSFZdYUs7FCp2GKH%2FVeTimBCpXNWvNAMn9uLSxrZ1wdddkJz0tQtp9ByFs8jtTvChSTu957z7uGA2m710M5fd5vp%2BXNfiuAtjzrc7QwTJpb54bitxpKA90yaBFculVWP%2FxguH6tP3eDbjaq81vWkc9mcho7qo05rkylbdN8KedBTrOM1KXDWTnB4OdKKiHQJGoIGvsO2JlwYRF9psZRxu38H8RNmUzZrpr0EGV9O3oQ5UK%2BTizeOI3mupzNvH4ymEcbUD4Eblj2zequcrgfcRJIcLUwJ%2BRcYu2dRx9v9TP5lWgpj5ROc9jj8X7DPcXbUDmAon9YHP8ea%2FLNonLExmjdohNT0T%2BOTd1nlp9%2FsIjlsBjfSvsbt0Dl87305447Nj4TRN7iNp2TiYxe3YqPp5JrVUQKZFDTQRgHKOvT1Gj4OY0o%2FqHIBH7%2BRiqX5tKxaHlLLk3mhy%2BLmjw6%2FA66pStY9p%2Flvbm0%2FMg0SB1XhNleGaCAz6PEyYxedrYg%2B2oxtqIr8ZgLZiSEMAIE2PDxbaENeYdFbMMP7mMQGOqUBP8BlWH2G04PusClIVA1RXUxdwEbZl1UuIjqDso7IJA2wqPzawzBz1ZS9RIVpaZVvHJDHQy2svfQH%2FPw9T%2F3bDKDCWp8%2BORyLMk%2Bo2PpUbeZgpqaH1Iy6lEORzoG%2BVlE%2FiNshBTC3QbEzrD2RNIzATrroYfkjHUotBRlAxD7IRHhpZYjtfnFZad3UFkkULKryG6j%2Bf2QuWg3D7LrsHo2HvA3fj8Ke&X-Amz-Signature=249d716274b1349c6565ad096c6e76e8a19be349c8934d1c735e1b842a8cf2f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VXN3TE%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQClpVRiYfiaOJeJ6d6wbDKOMAnq7PuCWTZ7ngsRfTJobwIhANVj42vXWf%2FYzEFidJA6dgpCHGTg%2BHF7V%2F3irmUCwh9RKv8DCHgQABoMNjM3NDIzMTgzODA1Igy4yLWpLYJmKOznn5Uq3AOoC2wE17xkt2C2aofm2DDWGFkpXaFEU8Na%2F6PXBeCVyJme3f8X4mUhDnKbZPik6ONCGShQt4gkwj3UzqMcMtDUS7onDINDo6DgtL4v9mFsUUI9oykP2PYFm9ob6hsu9PXr1ke%2B9CFLTMBjFG1e474prQY60rIQoQOvSpDl2ASyezxGhVLG2NU%2BzsZNKLnI9pKErBzvKgZhb0ls%2BkijObaLcfJP1K6Nzz2zsx6O6i2O5GVrOWrEyLXEGh0%2BNjyUDSYbEvp1l9KehP9fjN7ZBpB1i5L%2F%2BqW2h%2BQvx19YjLfPNX2hX0K3%2FXlKpvWPUOOPlOf6A5hAzffiDC943E95fOjCGNs5f4uN9%2BKZpipMy5YDztw8BXZ6KqbEGWgQfwjWEAN%2Fge2q6zHda6JG3kOzPTfRt46%2FE3qmmsGVjk%2BvWzOoTvKqhrhGBdlpdXaooyZ3zvHRPKfyoshRgUrlD73IkRZm24RDmh38z7%2Bh8MxB6oIBYDqcSY6HurBYOlfAEq1KNowXBWVuCXann22s7RQUTZjZHnztpWXTgKxYKeecGiiL7lGxvDBlyOCFinH0PXynypkToIzIY6j76JUI32Vjaal%2Ft6qxeBAKrMnrCnOaux6w1gRWbpzUHygn8AmzcjCg%2B5jEBjqkAbxPjrReeGCkFchN3Xlh5B96DVytx3DizLpTW8zxckcJgzGJJdSk9gwARCmTe6BdYGNvZOlspnxeyhsI6lsphUR2wqvSbOzuHAmFZrvPTrAWNXlA8jd4%2BGlOnf1DuHrwrY9aSt1OmvDwAGsu%2B0x2JVdGfdJ13HEiykf%2BVjAXCBQp%2BBj1tfP3AeALxi6GnneHYuLt%2BVp56rWN3gepMYS5d4s2qD7f&X-Amz-Signature=7205529f3548140b7289177642567e38c3f259961a923a9ac529e5c3d71af7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
