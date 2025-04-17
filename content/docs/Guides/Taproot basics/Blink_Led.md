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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z54Q6LIE%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUX6FGFpwt6ZpcJZ03fMuPIdTwhv%2FARYdeT1G9H48etAiEA17uI4dJQaRRpHD9RuBHqRarsB9oN9Ep%2FJe2Twdt7Tw8q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDC3Q0G4MzY6EaaFYtircAw%2F62UV%2BCHxD3P6naLFyDj7iWOCzRLwoZqQE%2Faj5YLbZ7LA%2BdElb6LGesFxqIJsn3H5hP2CLFrFdQPvnvblT73udMjP%2FqATjsGyugavsE9U8GCZzZf7776LqCQL0nr3ctX1movOE9TJ%2FrQ0uyifbt5wQorb8DDpB17Wds7gC9iefteX46hJDlOBw%2FWiUcLmGxYQwDXfIidfA10pnj72TIRlJj7lz39l06OAdOM6lgBB5eLJRM1K82dvBvXj5xL68s%2BK0kBdLlUJytjg%2BwL5Hu%2Fafd3l9nzAvwSg9M86TZzEDbkwYZd%2BLBqLL3tnEwYQfIg%2BN2QZiwZJSepuYKuDpBN6tG1PJuldtgJU8fOKvgUbLUse%2FOZhomkINc2B%2FWrAW1%2FWNc%2BGTOS2OOZ4Ouax%2BBUBRA7MRayjwp9lAlnq0%2FY749LHrfL743pKjazZ3SuBNtaNfw0m47QKxbvJTor9OLN1%2FKbtGgukiGIR5gyjTXhOa49KnZYzzuqalVZYo2RBtsvVVbmXA%2FwQctIlPIXS3SGAJ%2Fd0KOb6ROhtKvkORiTd2as9nUb8wmLvIbriYmpylUskBtdtCqbl1D%2BxjWJh41f9vmgylSOK9J1MB2TJDA20dFEonTdzTWMw1Zv9vMJ7ggcAGOqUBuwNbmwotI%2Baqhyezc2K4DXa7HBMQjy6i8kWeCrXL6Ngpk%2F1AuDs6blR7mKQXR%2FZhPKafivatoffsSya4I%2FDlRMfLs887j1RkPdagtKwLqvUcGAE5R7ljDLvo9cXNji%2FT%2BznYYw%2BzNVA2LYhDKSvQdBGj%2BYuv%2BRNQERUCktSg91UwPzrVb0JORJ4vXoBZ1mtPZ%2F%2By9fzk1S1HvZ0MR4z3AjkljRHh&X-Amz-Signature=3aac322e7f8bc267253321f583ee02f684cdd8589b63fea38192fb1391b2062d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KQW62Z4%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T032800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSMtNduJ4LJJVK025BdD8hAQOdG8mvNsdFpDWiWefx%2BAiB6gesWk2OgzWGCV77VdjS7kIl0Wc1nEOQlgTBmFmatvyr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMagFmsSyA5V41kCRwKtwDuXYnMS8NVxFngpEPsi7SNYz6%2FHXuZzmHyKEodkzONS1WPxJSv1t4oycSqrOcOKFHviXkWcdR0MqOOazoyt%2B%2B5hrYCStTVovVcgIdLgscKgCm7Od2NxbRRj6Pme8bNPtoJciXQhQLxuVAcovajYILfR78oyop%2FOz5bEdj8PitfFgSE8rKMsZx%2F7ZjMk2blxGz54ELcFxCczjaH03WzRkV2o2tgzKiv4%2FUY8xLBG3S7NY%2FSG60fZqjmlBo9hQq09cDFmn8cjN4tCi1nwrJLZt9ZAm7O%2FpMCX%2FAJxjGxS9ZA02QgRUFM0%2BkIWMwpcHIpOKbcix1hvRil2ymYFAmbb%2FhVX4b3QDLEslHBBEiCetr5ku3A0o%2BsQjZvNyis0PmYpgV4FKtHqYpRG%2FB%2BQE2Vh0aSZs7O3RjQRrYM6%2FtY3Ef64wKR%2FIsG9YuOGSPAwdnUGKUHodC7R1%2FegygWJ%2Fpt7UMYyxWez8QBTrY2%2Bb5bChRNl8ZeDuEZ04L8GEL5SJ%2BfLbTvSvGziz7O6efT3%2BTl%2F%2FWo55ZIejS19nNFb3CSZ0ElYQiCmcS7OQ5cq5IMA9TsIBq6xqHeQo81iqcbyVUOlAuHvswbAOvooD0OJRYmRvS1I0CSIliV1Zj2zPktOQwsOGBwAY6pgGrFH8DvCTseR49p%2FaucKXa%2Bogr7IB04jiHApSfBcdaSfnWflrOu1UzLuqYuiCvuqavou60%2F2AX9vyiM%2BFHc4I%2BxYUcbMm5uTly7w71p0x4lXTdF3SQec0dV%2Fk3GdzMWmfJykDVyELpL5prhh9%2BrO9374lknwWliFqNsQzTrr%2FMKgccqxUBTsOrUAC4akXNOsgMV5btUJmnesccMVcGTUKYr58SSa0O&X-Amz-Signature=8ae9614a656c32e37ce55758c9d5855fdb68aa362c45116902f2a48088b22f44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
