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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6FEHP7E%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD6ANZuGlPUam2xFIqYfWuvIENc7YyP7K6a4MBs4SFoHgIgJMaAh0A946%2BGpWQDZviZQcg3eUvhHfj8qEe9N%2FIt83wq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHzJGtLhgox3CqeqOyrcA2POoP4M5%2BfctujzmQ0mSpdn2dptSXeS13srRRVlJOfIraxWpqhPAwQJpux%2BUjXDt9pkeLZ17Q3Gh65PulVbC7gVHWKg0wdFPs4mUzdQ9TF8onhR4TZRVOaSmYLLSEa0FqJ%2FFHg1JA79eKaUQPX2Mhr3w0vLPFVwb2AVP9sYvgD%2BH8JwwOGQlTQ4khbp9DeDHd8SWp1GS4smW0HB27EQpcn%2BZRxPpC94HPOtbBES%2BBFjmhmiGQYI%2Bca2VKnTwwe7EVaEtmpgy%2BCKA3cF3PJN2JgtDVaVQXuvau1p%2BkDsqNmB0t2rO6aRngyNnWg6By9AvYlXDZQaBfU2XaeEiTbZp8ljL%2F2n8%2BXtDMLmoDfjbutuHlmS8sWIexT%2Bg8ZzMpGUAAWa1kG2DK8OykkIOY7NwO84Y1pScf%2B5t%2FdjI44apbFz9HUtRYmucIfn5bUfgK5I9O9UpCfSQNzuvNXEtv6w%2FNk4FlWdyuItm0r14I1kaZNdWbcFRwinLcNH1tPekqRu005z2SGUlT2KQCzjA1uX7B%2FtpaIevZFelAJ7%2FOxEmCp8O%2FD%2BG82MC%2FDTt4z52VIX0pW%2BW5tR8R4rVjT3iuLUa2Pt0tVHDTM9bXB0DK9HO8HGAaW75pNdm%2B3woWjXMIfC%2BMQGOqUBbAY%2FKLBzT06moCrUCWt%2FSQyJr52BLfs3wg0TPCSqAYnmF3TOEPomVAZ4wxt9DDmmDkmXNnxyqwEk9Ms5HKb7DwZAUzjvV9WJ70bt%2BuLMZjwPJIFvdYlzepH6rNJPoABwoL9W%2FT6GdvfbJF1RJE27ap5LNeb3zc%2Fp6T4LWYzIePmR3yn26u8NlO97jgBgQeP4ApFcy5Cw9U%2BOQtDjFRPx3MlLH8Eu&X-Amz-Signature=810a09b3956ec79281241d88d96872e8f969b833571b182d3a0d89e8415f9fac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBO3WLUX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCiHgrdKdCJdUIeWFD%2BNbhWr%2BUymCJ54CdqtThv3ediyQIhAPrkujSjhX59apCEqu8NcRlxQzDjCVosYbeQtUymBa%2B0Kv8DCEsQABoMNjM3NDIzMTgzODA1Igz1C60T0up7tD4Edogq3AN2AQX3aG4GcvwWqtvxT8U6WDeL70xH2Dw3JHVcRHUTGMp99XOg05O%2FzNkfuC8qMoomKwmpqf98GK%2FoLlmVHdDHqYDLUu87py7b77Cl9%2Bodqvb6Z1P0S2K%2Fp7yDRMUtVI4qGEPebMPp9reuhvc9l7Kmj9OU%2FPnYq5soIr4zwjJdBVpng32d7nG3leeXwODHU9PQHitcM7faDtOYXMKaH8eFMOatvfKEA4LNt%2Byy%2BqJg2OWpw16tO%2BXtpMwE7%2FeyriscMK%2BAPiEmzA615tpN6ozFttZwxB9LXBVv1okW1NTVXDzOsVkhCO2d2SB9fHxx6mwSh60HrcwIqFh0pXPFMuhq%2B6t%2BayGNcnexrJrCSCOsqOsz8LKYBDPttl4ez4C4238zQS6fIUKLZA2eneaxyTFOdDzKpfzueW18QQiv2k6deGImmvekRIcb9VjqOfq5ticJ3Zp7IuYJcuG6LFeasFziEeRBIWoLKHXd1WLmKHfF6DEU7clm0IwaRyVOpQLV1sbeIzseYnqaPE%2BGZ1KicZ02RDJyeq8si2%2Fy4EPhax1p6FaOXTRohxHpk2fR0C1ZbuIvJNyCgCouQ%2F6JEKyB3bnhCS44aeAWLICvDkdTsNGHa%2FDruZt8M57mGUATRzDqwvjEBjqkASv228A8grCEc5XR4f%2Bb%2BIniqhtM%2FbJeweZ0F9OC7zA7Ar%2Brd8%2BL1AOVzVxLJqgZZmgUDZe%2FSgs5%2BEP25LndkB5ZyS8BGLP72uhqrYaGHlMzGmoIG0w2tXgcHjkjj3rOkoz6QPhqDnRPDtB7RO%2FvdqLEmOFjMrgTPj6MLZE74k86eApnSvuAXnR4eq2IeeefZE%2BRkZhDLFrF9NV1yA63KEqE08PZ&X-Amz-Signature=c41152510659e94df0b77dff900eb2f574ba60d626693aa5fb349a796acc8581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
