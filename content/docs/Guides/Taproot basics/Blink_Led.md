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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F7DI5ZK%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoTDGAS5YpasXUaLLTtGg7l3ayN83%2FKGYG%2FzZCG9ZR%2BQIgNwbXsf9tzQoUzwhfdsH74vcoJXu8osc8HNEfexXrSgMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqN%2FRXuFqiQ0u2KwircA1%2B7sHYT3BmBRRMf1aZZ5BnoJrxUG7af%2F17G2d5zg9p0MS9HT7CyY5fCLyv430ZhlPWrv7TrlFvS1%2BpuVX1NFgk%2BgMFGlIsntdSrHyHBik7Ma8oZPXv08cW3FeSvESyKpaBxKf4B0uQLP80LZwa09oaNTKDfBkpj%2FQx3U2z110N68OwMm5cb96WXo09vcq9AemHp0m9FDUv2XVZcBzBkyEU%2BLXdX14t18mXmw4srxpnFA91lDh3LWFxRXhalxlRVx18ryghIS96rCP33JpUMBv6txNrJjLwmuPTpK2KlIwUIBvRRJvWNZePmKlDuQPlLK0tP1DiVNneKt%2F%2BfLmIsjwP4LwELOWKhi2ss1q7DJfLEUQKwRqVoLsFsouvfCFN1eZyY2%2FUjZ5KgxlVrylPeu7uECVdxyuHBp6W6EGi3Q7nWS6IzqyWtQII5l6BTyyW1HQgdcXXcCOQ2VG1mUNLZ0V8%2B4aoT008G41sAQQZ84ZzXhEsUh2j2q0f9W72XMt3JHudxD82d3fJqPWOCTdEF04fP%2BKyQ%2FsSP6CE8J4z2ejq0s5eqKkoJNGQQxvbax9pU65SaAVhfv3JCnSvEeJgChcdA7hUAG6vWABFHk3MU3h3ZSNW2vC4KrLQhp1jSMMijuMMGOqUBm36sBSZj86oiSxdvjtWJNIgrORfXe2IY03XP2fmTGCIFhQJ2gRjJBR5D1WHZEN4rb0XRn6umC1xwr1hLrlUAKQTGsFtH6UyDt3ugKFmkSP5j5P7R9xq00FXhwyhmSHDAy18U0Q8CVN%2Fa3VFviDA%2BRpVlUyunnMyUERPrKTLw77p5w%2FjENV3XfQf0GhsYvkcj83ns6stiD9R%2B%2F2bLCpIaTk2ofPdZ&X-Amz-Signature=badbb940f4ba60828cacf5f1fdc653af65f3eff450fd78dfc74a312b7c171371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U35Y7IO4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T081248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiScgXpt8g5CndxoZQh8duvTSfJtbN4ogC%2B37%2BbmlkKAIhANCiiV8mhWVFRoWziWmsLVf1bVuGE3LtqHHjTHtv6TJ6KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5mInGPMr57UnrhwYq3AP%2FAKS4OXV%2BEjOvIMipQ1QZi%2BmHAnNrmynembFdNhOTMdQ3MQzKXb9qZA00Zjmcl9NHA8GSPvRTyYvmrkDyJgsdt6D7VmfdUDPgP2ZS5fzvK5rO793D%2BDOujxKowx7ekwssSG2awEngjG2jHVwBt4G2Mi%2FFTY4aviP6xseXI1atuk6O5mPxrwa5sh8J5BofmbgOdwGFOy8%2B0nrPExjXdyiYv7bJ%2F52P3QHB2M9tuO2ihNZ2HMhwlpP1NkP7vP5AH3fS%2BawxAWD304%2F7muLt6TPnyQ8BfUa9tP4PF97BOmJqpcVQ8Jk2%2BO4XHn8KNUXBux8nKVLF99m%2BD7h26gLmhxUvXfo7BzMVu%2F%2Bg9zAiIiGiXHwSQQyNNCjtVKoGdaN%2B56vMScjricDEVK0b1xVMvVYkHif3WlGte0XsEmC8SwRWv1RvYlcM5SUSqsQ8iMKeh1KgnJxoq2DMCNGYlrFOy3l%2Bu3%2FldWNiR9LwUXXF%2BpW%2FzWNvHO%2B9%2Bl5ElSRau88D0%2FZ4puVUYBR7NyRaCkrJEiPNoMQ6EmooTEQUCir7gR3pnJhGzqt5tyYf1kcCGZT45YT5sFBVV7I2q26yPea2%2BgOcmrw3ameSJOkH5MdkbbdLs9eqIWS0heLG7b8%2BozDDorjDBjqkAQ8pTdpEiFr1ylgHV5womfwYngPKd6aTyiJ%2FYaafJmN2Hb%2F4gU6FHZpb68uXztZTS2El4a0gWG34j0n4uEzHftbvjliUXv1Na6ev8GYH3GcDo8Mv6H1A6W%2FstGtvst0YmEoFt%2BNZ4%2F1xK8MHJAF9TWabwBIMvnwrnwIQC6OzlZJcWe0P3j6Genq9nmdjS2U%2BiuA6d6xYa44nTmZMemNcE4KFvY1D&X-Amz-Signature=c4012cc2758af989f3e1e1cad7f5efc76d8752bcc72541f7a90af86036671b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
