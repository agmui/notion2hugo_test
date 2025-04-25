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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFCXUHD4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGyyyHsKwmcqYc7fGDs65aVTdOPsB%2B8G7G8eM%2Bg5HB2JAiEA%2FyKkZ4eFLgxEMa1tuXhCrES%2FJhpvKhHeMCQ4l24lKcUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDP7mHlJ8YupfkJTyYircA5Xl805qbbfTwUPQxKJkWJQHEeaUJSsvfUJ2aZTS%2BZcZgB6qzb%2FE%2BIxGir08bvhDjO%2FRFDFBEMZXDt920Y1g0o868GOVda543ovxY3b%2Bvt072wJUABHzV1xDSPXtRZIdIouHG0bdvQ3UljdZqw%2Fu9DdOWOpBZQluy2PPCZiA4nrEZseYRG0C2IoZu7tAWh4%2BhUQMAc%2FDqogtY6vpYYzNoaYysZOy8meqIiobYFbBZxoI7ROQOjhq%2Fzfii8QYvC8dqq7yk6ho09bVtm%2BBXS852QUuC5wXvrmDfPn2zhp2Crv0yC9aOdynSAJ1vPuzp4%2BJzj7P6wk4RaWkvXwWYCY6d5%2FggmZVeTcxptmzWd2g%2F6BDofuE3Iu8xw%2BX%2FzGG1pMo6vxA2UYuWzCxQ9azrbGZKr2pFYBr%2BMV7XdDquwO63G5DC58557esqH6V5mJ3nxkMXtacm7Pl3Qior9o4pO6aGpXtMU%2FiHoGAZd%2BWvi5BxWK5%2FkfznxIy7Vv3zqyeMDI%2BwMzHoYRvSgCjVl1S0YU4XmhXyNiXMuy6VYI%2BBgIsIGrmYXgALTzHObM6BRNFqjhOxsoEe3%2B5UZ%2BiN5omQj%2B3TfVi5cqFrPb13Dqjpokome8nqN27HNtVnB8fG04iMKP2rcAGOqUBfOclPD3NPNLfSI9fXdEigZ%2FBsUHPaGfP8pZEf3nj24DPpOG7C3pDQ3sCChay44UC9yooeLjJKcU0XO780r2QwbtVOKoGXgqZi3y7%2FOwFI85J3d%2BnI2tNl7%2F1lnsuajy%2BXlOupl2O7PiH1uYQvI9%2FCXFhQLK6t2tDcovkLdh6LEgyqWkaVbBbAC0GYlriuYdImB47JZwQ8r9Z%2BPMEIy8i%2BEHd6344&X-Amz-Signature=cc048a9ed038fff0c1baa0cde0e5b69351898a58754ea70e2a7ac49b7385024a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRMGLC3%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHzsZD4VkBn2oaJhk5IxDGiTXdKDcxrJFXicciZmvCVwIhAJ76TKXsg2rTwiuPluIrVLWzHWqNGPisaW6Kch%2FF0DhMKv8DCC0QABoMNjM3NDIzMTgzODA1Igw4xONoC3R05MUgeUoq3AMBn%2FHsSepeNgZjRNcLu8O3GPGlQQ5aXcauUosDQbRgakJNjkVmQ49q9bci7Rm5%2FQTxNuWZ22d0ynTKspWZUWpjVQFqPk3AdoSG7rF7KeSxMNPBpATm4zcV%2FJPFeZfxqM1sF7QyPRulp7LfAGC0k%2FQQjWdzGz6FoRbNS5V%2FbCmB8yEKlHf9fXnT%2F%2FU83l%2FyqhdjrL5WlzNO%2BemOSz4ewfaEoNFaeHi5xwfvUfrin4enV%2FkxnezvNSf4bdT5aOAWZ9aHXG%2Frf%2FIyeNwX9QU7MljhZEnBnrrFPqR0j3wtu3qsujU%2FMCXrUIckurEsxE1j9j6JYItPUGg4iUlvGJuPC%2FDTe9JyDQJkKnW2Flv0M2psqnFd110MIl%2FRszeD5%2F%2BLvcqplOVTmqg%2FpBkaGboy364RrqZNGCU7kEPAcZpxQnwXMNkKQj80SUB5wQKYhx1OQbwKmZvjFjsBiKJ6K8aZotspdg7PHNm3eEGkBRFK5AqBftIcOiEt17ZOmcwYPGN%2BwkeftZypROT3YVLiSRRgyMAYuH2l9R2OYp0VcWJ62yiV%2Fi00zQcATgcTXEfGYYeXriuOGTu%2BXunH%2Bx4BF6XKaN%2FMK91gLJH%2B3Iu0jWYEte%2BDuKuLn0B51cTlUGmTJTCl9q3ABjqkAY0K8DEEsMHdrf3L3c56ZB6W8QMvI6B26bPG5sutz7IcEbJdsLRRbCU8ZAhV9G%2FdmMNNF17hfPm3jaekkXaMvNc%2FAyXVMRdCVYp%2FcDs9bHyoTwtkuG%2FOUvr256U54LGgYHKDVqnGA85OdVSDIA0WvQQ9zs11xeCMyNFhbus3bn%2B%2FjmdhmdOyBt43N5XcaczRIFL1TLQLwFLfyKRoqaXVpu0yRHoR&X-Amz-Signature=d6cb5b4ee9c126e4dd2093a8f9c2ae59ca142749906a22917415ca5810b3a539&X-Amz-SignedHeaders=host&x-id=GetObject)

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
