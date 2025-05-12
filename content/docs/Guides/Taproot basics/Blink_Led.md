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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2I77FBF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIFterpVPtFUACqDEA%2FwLlHyxkzC8Y2wMYRiwgwI53zZuAiEAxmRXzSGH6DHA3l%2FErdrnaxd3QukMY8JS%2BTa8jCH8uAAqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPk8Cp4Zxx%2BPfME8ircA%2BQoy735HwhdxObvoqnci0kAuraUIpFi03CdKCq%2B5IahxZZbs3mH3QY2I5mCOOvp1MAhdU8wY%2BiMiPhZDmh6XEywJ00SHw7rEF7oeJZqh0OqFvukZ%2FTJiVIkPMRhfgBBkM6%2FbjU5YT%2B30mj%2Fvs30nrdhN0MuukZiV02xJrvaDlQMOQi%2FjfkkNas3AlOtIZ%2FYBAHdI4poSjof%2B8qM%2FmpLfadA2ecPrsknE20yLdhD0DVL0fbXf4EgnwlmhnxL9iV7kLAtrkcyXzH1IQe27NFoFDHgYKozQOARA9oDqtmjFoVhIOpaQj0%2BC72oL9dfn73cQ1EGbB44AVvh9uLkeh3j8Xr8imDbBn1oTXnJtUZO7330yM%2BnhbWTbxP%2FZMhIZLDYJ4SYzgxEAEsBociZobx9%2FhBIHPnPa4trXsHgblMnPNAERZqQafI95NEMQuxZ07yahk229DTr%2BDRnC82dBfFPzj5yonAtiMAH2TK0YcoMH113CuwYv1OO2C8FY1%2BAzfTQrjv4xsviw1ITm5G6uUgEQxID0AQiodAxsESpJ10BFY7YGv4rKVp1B5lDjPjK1wvt3JGudCRtR1htGZsL%2FvL3X0TSf0CzaZM%2B0R1tq5JkFUNFAbtQFMizw%2BltrzLFMInphsEGOqUBZ7jEBTfhEoWVWO1sUmDY6MFOziH4AgqpcImQRRoll4cjKUIR8B%2F2Prs4gXgIHYTR18d5uY83Pyjmi%2BRuFmdh1g256AuKur22HOCjq%2F2s0kgAAQMgOi9l5zjdPE6eGyGkLMRjpx0BUKkLv%2Fs%2BQjVT8Wxf6EjsXRs%2BbhlYBkBGgxtAfRnfmc4aZ1RSEYE%2FY8ldP%2FPdf1FyV4GFuEYVRYz4%2Bpwbj74T&X-Amz-Signature=44e133cb82980c4ced60b72388bd4251da0b1af5d1654c4c9378d338b43c4dcf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OEZP76R%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCh9tToyAzQya7BK%2FsW72IoliqDCxBf%2F7a2REAyg3SQBAIhAPJKWW1OskYEjUgWDqfZUjBIHR1vgpwG6dif2CU8lI%2FYKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7aFRrF5xZNPpDAKoq3APNzZswiq4b49AoSjbxvISDFdvuYkqBF8%2BVMSXnjhMZqu4cKrjjB7JMoIuyoN%2F2CXLSQ8gcURt%2BX7IefNCaqg5BEpJMNgJSSc66yTfV92F41LPo23gks6nIBT6X9w3bpnyIPGsC%2FpbQLPti1yUOtv9UEwoIEVWL1A0JqTKSefFbXgFR4KvdFTrE%2Fy7LqIrcMGDX3wnK56thcwdxD3zrvvOIPasPZRtc2Yd22WrPKR1BtCPjG%2BrmofrDIzS6HTjdHgzgDxuG9xkphqEKHddVqFyquRqonnw%2Bj8W%2B9GMxqLfHW0CzDMAYikVsigLKAl9La5VDnwgUlT8F7rUe%2FOQaN1EFJwg6L23UrZaDFENvXdMd5s5Ffy5Jh13NEjLKFyGs9LGYAfMeQ%2Fh8PSbSpVi02QpqeX%2BkibD8Hh891eowHZBz3zaiquSGosDtHsWTRKZDFbKt69nqwtv9I1e5%2F%2FV9Oc3LZrGoK2U7NzbeG2OX2UbmWVwPCRy7Q4lXJ3u281L7jbkxARW91Xvx3a8y6RXUQxSOPqmWttI%2FSXgCulbTM%2FS8dMmfLgotdMBd2TElqPFwj2fD9pVPs89EtHZh4VKFtstaap5Tt2vu9V55%2FdaDZW1lyjqpTwnD4D2sx%2FNPcjDU6IbBBjqkAZL3oB6igY14QYq5Z16Rcw7huSRlMddbk6B6cW6T6R9rOowfI4m87A10z%2BvJ4l0SAhYJgpRHS5WTXw4VI9cjkA8yCjejKQoAPylJsfTjBuAL%2B6eh675An79qEWUTjdXHsXJ%2FthFsTVyb6oQACF%2FX5vDBy2O0Y47OOh8ugdPcPpA5cNidCs9xfeZAPtc5ub13RZ%2Fl3Ut9xb0NG3olw1v10XDYSu7N&X-Amz-Signature=b650f3b9be417222214c9838098d4b4d85945d3b510957cff9ad1a9342f86bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
