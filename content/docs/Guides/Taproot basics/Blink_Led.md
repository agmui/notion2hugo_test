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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNBGGNYI%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLP9PmY%2BKxk5eSVDm1RHUazlzYAo6aHvQGrgavMw0jdAiEA1mzOfVuEcNuJypJBmUAqok8A1TddqH4N2RZ8hJigrd4qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7z4QVkIduwIDFpISrcAwPyqyOMT5TJn%2BSXNex5E%2BPOVLkIiRdPtVIDRXG53rW60TzgXbBtMe1IiUE2B4q9Y%2FYeeFiPSVoil2jHxNVXOp9gnhDfVWtTHBjevOxM8GfGmtj%2FdfunFoOw2xHuBkjw4STg6Nd8MBQEWQ%2B0xfHjntZamHj0iFCsefj9xkFSW6RlwFe2BMAfgRS32cIc30j5G0kg2cezPUVrvtJxXuJbMqrVKC8lJvfzPzM6gvPB3%2B1jhXU4oKKrl8D4F5P7v6ck%2FAHNcqUIGtrg86vKl%2BpVv3DJEc7mxug2yrqxsImsTM%2FeYHoeFQo0Q6RzaQNZXo%2Fgg9a5CH75GeWaLVwi6LEtUtWMB4wgNramLk8e5EdyNSCBuRUhXUch%2BvkhrRln0vHJvyejOS%2FCVI%2FtyonnxyVn3i37e2p3%2BdKqTuenFYah0AJLhgDEXsmd7KSf8SJzL1mtOxYACqdaNO22hncXwwrMA%2FCUnsF%2B6hQlb69Bt2OlT38SqzQsUx8%2BvskpnRvVpDd03EAgdWfrK6BBMo7t60IeLpNN1LuVVjRe1MJt8JPDw4bGzMeFk3%2BisIoYcYiJJWTEMz39pN8gV%2FJtfb0s6elTM3uYec6I8bAFVdyoA3IrOry8ybtg7P%2FRNz2Aqi06MJC2tdMGOqUBkzQfkq9%2FRrh6j1wk8df7dw6ad8bnBzPPthRMALyaEtB3PpPvYZyrcWvwhYHtcTo8vljiw8FJAsNDMrvkHjw5E1SQGYxb1gCglqP0lOIJiHn9VAJJTIFbAzBZw2e%2BxzcTpyqiP8ka72yqqp9B6%2BYI6GqMan1ueN2COXAwrhCA8fT378yZ1vwc643ZBNBh8OZU5FBscIA8gIe0mQ8VmmMXG8MyFnTN&X-Amz-Signature=2e00d5109eb409f64c2bea439ab35a65ca725d2d62c39d31426603f5e30ca70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U24NQIIL%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNcGnjnMPegPJ8dUtlzQnmUiY8g7NULHMDkBF8ygOKgQIhAPHJo4jqslXor2UH22assZNlGgK7Ud7WJ8h9uDV%2FK2vBKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEtxuolhF87dyMifAq3ANRq53s76bYQb%2FSZuBnURVDTAtsB%2FXxco%2BVy6sPvAnl6C9oiyBoxScVOUTafdmJWpi7hEPsEyGRdInNEocTlyymumWCsJa9AJ14vwNQ55AAA2tS9CxHD7uDFXjIcFXWi07Z1tK9ubPADP48FKVmRj54AbHtg8Wlv23WV9Xoxc%2F0q3eGoYcqssGMCU4rqb9VFCpAcZWXUGpY91y7JCi5JD7dJtVTBgaIP4%2FBibo9y0IAvybsizD9SldczvIUMLBrspvd8nCmGC5RCQgQgyS2rs6%2Bzqc62oSKxH8Yr8m6aHnz0BppmpnFN8cnjXAiIMbzpR7WgDK2QGWE1sNs%2BD2ASfKrb7zt%2F0WNJ6C2ymVyexrQc85jSLxlQO9FtjnwylYKL70BodJivRW3T76St4XP7sCBfiSHC7NJOShrxAevpU9SYTJWAdmGnXWdP3NQFJiZwu0yiO4%2FBCm3Xv92OZ%2Fc3N15dUHlyXd8nLC8KC1Twscm6e64KWsTiZ1m1wYrjbY8X4cXLfnowF7pP5oJgYMRmwwiYLyPMFeVSpD4y4bgiYgve%2FIdQcYYXX%2BJPqDfLDXI5eccEhtD2Sr6uKfIQr%2BMBHXrlKQsFy1X1iXiveqx%2FBPgGfx0aGJUiTupR%2Bw%2FyjC%2BuLXTBjqkAYmRgKpWcqB8A3dDhZHyCOL5bZKPCSBSx36ACITlHwM4JWemdGnj8AZJ9jGYreQy9nRYuVA%2FihdgR1LswrLaEu%2Bu%2FREvCyqA8p0ZUNYK%2FHct87SHl7%2FUVFUBO34Isri5aH9K%2B%2BnlDXbWDowSrNf%2BepcI8ge0rr8EZoaOX81SPa%2BV%2FZ5FG7zJRk5WUPslTCY47DpTwHjalfbGNy%2BhxBTE1O8o1w3F&X-Amz-Signature=07307fcfd9802e3dc08a523d9e921749658654d13eca0a5c5ee81ac159746b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
