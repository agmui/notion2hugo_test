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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2XSYBLP%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCo0iwuBGSMZ04fDU37RzC8Bs5mccJM54IlzI4PZBdlbAIgEpzSVSDP0TL88sY68gYuGhLpfAZsDst35OeKDAolD30qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi3NPj0tlLTHh2%2BpCrcA85%2BjaBLRNqMivqQkvookhXvW3mbv6PZ6HXkyAr1kWO6k1vqtOZqNziC4U%2BUarO5AnSsuop5C%2BD0xQWT%2BMPR7Krlenyxq60VgcfmfpbjdaxTUiF28ljoqASzzM%2BytUJq%2B5Y%2B%2BQSO%2B%2BcHceHONi49MxbKLAe0J95wKHPnxdnaBYOGt9bMkpk1YCVucei91IwzjtT5ZuqWIyIN%2F4y7zOB83bvy0t5lzzvshSUDmQ6eSJsaFfiYAFCJZt8CcuUqc9g2U6QP72CvIu5pg6Bfzvtf1GT0LBU9OpX%2B2XScnBpvli9JydSJpTQWb3eVxdiKzvhmSKpM1kjvoNnOHQ1%2BQVaMksm3jCw1yjrjsFHe2YmNaKdn2F43zPfmtjViKGuL%2By3GnTPjuFSJuTOOJk64KLfG051MbeUS7%2FTGFGnXgXlLbL1ME0igKsCaasBmf7CnxFJCLGxdaeCTLPg9sPHrheYrG5BetofZK53kySJ7qx6zBoTQ45BdizsoKwrVtpLS0y8EdNoEKvdoZ1nUENw2NItfyZeMtFX2FXMS5GPUK6TqRCY0HrudUFho6P%2B7psHWICE8W%2BeJb7TedYfz1Di2fuqafffHbiBpmu0adhqVpN8yFck%2F91GTz%2FWpxNl%2BTrZFMJmAwMEGOqUB3uYjIzSuBdtEdnStUbymQiX3bSxhMUohkrDk6XRfeSylJvumaWHj%2FO2TxFlSVy9S45J9i71KSpSjixVHN1w5xOdDmhbwB3qq%2BpoCVS4cdD1H7E9dLglsb9cj9q9j4y94Jd3CJE29wo9db6ktt9c3qzHrJ8PXUvCgE2Q5MtE16%2BYBzcZGFjh1RaBaWkHm5P9Rq5mztUfgrsPRMs09mjhGQ7JP%2F7b6&X-Amz-Signature=642c6d2e4c62b6b102ae237e790327bd64dd80fc302ae98b6e5a1864e36b6c08&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS4VURSB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCiRjlag7H2FX%2BaR5196uAnxuOrsRkIAib2BHUwDh743wIgflTG1q3fZarUKw91jpQ51p307Pnm5F0CKjy5NPzmtAEqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiR%2BvlLlQ5UfHfy9yrcA8qK74Oea6rW28AkInpAnuEDqm8t84k%2BW%2FsA1qQnnLM6nhq9MfAjLfh9%2Bxq9LlXncHzfYKnELkzn69phJyc6JRZ52RNpAEzW6hx8F1EqLuT%2BmPDPZb4m17Iz1PQA6sJB%2B3X0e67Pbe2v6dsjWcaSkvVDU%2BVnC1aoMXiUWv%2BL%2BXvXEfeB6mHlOqC51b1jenTRz9Np0UYMPi1ne2NwTSNl5iEGHU3Z5a1ZGT814uSEyYm%2Bxu7jQaFxEpL%2BkuIWEndoHWesbermti3vdELpFuocCjg6uvwc4m7n2IbF%2F2v6tC%2F73XNjH5xQAMx%2Fkq2uwf5GTIGF4uOI0LuPi4A0gRm%2Bo6ztL2WaCvza3XSLkUvuV%2BWlEJ6JJN%2BEVsl3LG2X%2FyrdAGpYiy7obKLU3uQRGmFNq0dy%2BGidBw9Sa%2Bfk9Q%2BzidePVTIdo2YqCfmbEAj5teT%2Fjib5%2FwsgfiQtkGTbkBAnglKQxPu2XkXHdnPX%2FHBPh%2F%2FQcQCJ5yVdlRM%2FbDyOl0yk0IGWow38EGmX6GFr5u%2B6N0bXzDCekZDQtW8jpIRIoIePWdqleF0di51w4c%2BysCKWP79kcdGK2tjecIqezoN0t8Z7lZjpPALYFH99HHGj8HbQCIYNqXBdPIcvLHbAMNHCv8EGOqUBSkr2Lg7VvhnvJ2qA9%2F6kgCqPitgRd1xLVu3mD8ujwQmEyZOnIBPlY1EeAk3H4bupPtoY3WaVjp%2BhCqJyneAMVVaD9l94%2BTCtHAFnSBHfiqmpFR4FKZjdcUNIZSHclypS6JIwZ1Cq4DrBWjIeCJ6zQa0tI1zPFQCDX4zbgKQj%2FzWgVDfCGGU8WqzlpT4%2FH3AStFAwbXuasAO%2FG2DI%2Bfc7Lo%2BQiH9U&X-Amz-Signature=4b08fc90a12f56f51ed2d027ca3525c3211520015f9f59f98796097072a3b127&X-Amz-SignedHeaders=host&x-id=GetObject)

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
