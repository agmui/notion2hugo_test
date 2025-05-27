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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BF2XBGW%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZbrv3yXitKF3E%2FhyEZjDmAKyT7%2FEdXbMUgDe%2BZVb%2FQIgE37M3nAuXFsowtBIdOtZdb8ZLe3MMnAAo7cmLP%2Fbq2Mq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBIMyAAhIOjlEI%2BOSyrcA6jZSwo0nQ2dL3oh3dpUtGyQ78JcK71%2B6YCivqnQBY%2FoHbScqGwO%2FJOeCe1qFXuiwXeIHwSUaWgIFKk%2F2NJWvRS9tXElwPWheXEadtAz9q6W%2F%2FsLE8Oxx67ju82Pk2UOpxVwDfno4iw83HvFX9p70LvBpIyntvpuuq%2FJxg1kZs%2FtjAXqFBozuOD3n1cywu0MtIEk7ajnt5Ikapi%2FKXqZgSHALgT6MFcuZwo0rSXqgAszbeZtv5XTzADKXUHx2emBHWFc8TvSogWxJG0a7iKcn%2BHITxABSyQ6QmSHZYZ5o6mD2oNp%2BZDslPLcIVwuwAcONlLaULTUClQdYGOklmeH9bpnl37nDO5R1ST4Pct531q%2B%2Bmrs0iDxWjvX%2FlS6Dfl2n3%2B11x7Knz5%2BoLj7TN3FXFWylGXVCk3gkBF3OuBWJESSmC5KRnWldybOiDEv5N%2BJfa1WT8BPO6QSSJ9gxWCAWrrdqDJIdqFDN4dsHs3UAcbw1HZoCYDGX0YWxprtNTdPkxBesNl4ASlFEYb060uv2TRZiUpnNLCquiohAwmDs2RtKlHVDLOtL862fJZlonjIsFNTtCiwG8%2BRgJutoLh0DebsxkV95779mHdx905X%2BogJD0he0UYbS2Wz%2FSSZMOP81sEGOqUBD%2BgRXMQ%2Fohx4LMqLQZ4tDYnpW8hf%2BE%2Fp9xcbaDISa3NFUA81DuY5JKpXzXgUN5wyBT6xE5UOKqYn%2B4LZpl0RPWcF9TJNk%2FGlIrrKqcoUZjmKaqoXj1IUE4o8Fnhg9WTwN1DoGTtakQw7PedTyZTLiHvKXB%2Fz6Wh7S%2BzFYBE0uHEp7KUI32CSGVJY%2F9dbDTIxRX1AnhGSBtFHyqGlJgdVqgu0WyW5&X-Amz-Signature=3c37923a16ca00009537da0ce6e5e813c82a70853c7b2827e9c8929158759c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D6WL2YT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T161057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPyBCamr1JSOyc%2BisvBZeM4qgLRDx5Qcqwp9zopCR1zAiB2U3fRCZYT%2FCHBZt22vW64Q2lOZSTt3rQJwe4KbFsj0ir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMjZN%2FI8PF5l1Ef4SkKtwDWA6FUVV5LABbNa%2BQmt%2BsuRRibZzK1tytznmTEMRX8JMPC%2BK0yJD%2F8TF2yPfaFmka01SBrNgsuylWuQ7SWo43N5K2YfNbO8UH62jj2J5mlW9IC659BoSCoKyHmvcj1IpRhdDlvjcsIvNmjFz2v77TdCnU%2B3Kt9pYXLUEJxPBLeqiAhWQmXoRRzD9NlDODhyppZ%2BpSIedCHIoPlKZTklBDswR6Eda%2FPfqVICR0oDWmnool0G6TWN%2FQlm2RMgjBk97Io8mVV9OJJcQGGsqlgtIdF1%2FL%2BeVk5tPtjs6I%2B4sH59vWVDZ%2Bs72me5iCjE86h4WNk%2Bc0Bisp9X9BYZ%2BClWBZNwT2QCzb7m2DYAN8KZEDPHdO9%2BgbMZIxwscB70GivfYEUmqM2dUtB5gBp%2BOh38J7UsVBFBmxjXrnTqIp821%2BJZcmXJI7FvLMlBbAkcB4zVyxoH2dkLyS6b3clEmwofziwStj%2BMmmKi1sZAp06iNuuNPCr3xrD72WbtAl%2B3GE1XDkJWT0B%2Fjl4UXjsyX3SnfCQ0lsbHyp39WU10v97i0X3%2F1TD%2F4a4Bwn6V7QN4zSzeUMU8rgP%2BfoyfIAg%2FGTyansaw%2BeqcX6Pk7prSJ9fpKI6JV%2BxcbV%2FUq6onibEaIwsv3WwQY6pgHJsHjVAHtRFfl%2BQc%2B6vShGPN59mmv4LKC7dFPqUKY2qcPEehen0Gc8FaYUaJB755EEYcmflWqUxC1Rr0k0EL9eI25Ac7O0fniXvmST%2BwSRBUdqahRgx3ZN1xYFj0rgZbaYwkcv%2B90%2FjiqJP3WfSiMpPdz2zakfx1iuwSpUBTuhc5H9bMRHEfsfd9TSO5ASs%2F40qeHO2sBFWn5%2F%2FrPGxQsTqBHiqkHU&X-Amz-Signature=0961f919aafddfccb549468c92b37d4da54de10ee45c8a0b35391e7d4ce90db9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
