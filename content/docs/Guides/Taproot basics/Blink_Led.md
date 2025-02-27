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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634D5M6NA%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQDfRJlccwb6pmHZl7r43mtk%2F9egSE%2FtU89w6UM%2F0tVXxwIhAIrt70m7eYsKSY%2FDmO59KVKVfEoq6ft65Y%2FhKx1GsKZDKv8DCG0QABoMNjM3NDIzMTgzODA1IgxEZvbk09LPkcA3voQq3AOeCvKHrnFXJQwWg2dxTU5RHCEJF9XGbyuIbwQBV45%2BpdIOal3Yjgv6Y20hcAs7DBgN7c4uPkjaYtURwv6VzLEBGwkanTDTYjb5KULS%2B6PanQQOGS0xshAZ8GpNoRePGYF8%2FaBFEme3fWAmBbSMcxH2c9mPGWehwlBfB%2FAvOkX9udpBYFQ%2BhOPh7fSOCYEYjZemxu8Bnb7GO8xS7xEU2p2RqclaNDoEBVFT9eeEJRfk%2FQ%2B1kqf0tMgdFMNk%2FgSu16Zxut%2BynNEsp7R%2BT6JULlT9zYeFt%2BmCiAS5UTKBpv0TnL06PA%2FrZCMO%2BVID4s8PzVfy4Z5fX3CDKzSjYIZkq0zZIQIkIVLyUdVUCM7QzST3E8jKHgJV%2B8qvj4xfi%2F%2BbMqrS0wnENKWm7XsFNfyEnPbG6qJ4pqF8XpzFhUXhLynFpkfrBCDYsz3KlD%2Bi68IjeZHMrNnEkAKW9rT%2Bg8tR8ECliaVj1MkVUo%2BR6uLjrdNwytg%2BL7r%2FG7%2BmuF9k4n2iE4Ki%2BKtHQU%2BV6fUGN80teHEkp%2BALa5OKuryzxMCrj4fyKFhwZfxhG8Fc82O703m5dfvLZyvQY26vO1BQXiBy2woIOVhcXf5VKLB3lp65%2Fze2nzTQ2%2BqJE61apR6rmjCD0P%2B9BjqkAVctMXg1jyF34WPvYegFEGhSWU%2FSiv1Vca6BMqvJp6ULR6Z7OWMVuJyB1YQYCY6zHVCXgfos0hVXQzkRxRdpY9S8z2VOnxco4z4Dx7LwLpVL2Z0VE%2Fl0hepAzrZ9TFVKh4kILLtQJnNR4fqxeIMz1lWYEgSZHDs9Y8PukozPep3u%2FNTKuLIdj2wXog8LPUEPRXWWhOoTk8P0B7oxSY%2BTagmhVBzA&X-Amz-Signature=684be7e459491ff4ec46003dde5dd19e968415705a1ee7b4e099193197ee66bd&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNNM3BQU%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCNzDQbvPLmjRYrD3vSGM3Sx4HIklJAbTvNd%2FanLFDRFAIgbKVMQ0vk0EYAw2moaiitGYMlzBra2QfJrdZPcglLfjsq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIf4PFmDYD55y1ZMiCrcAw%2BN6Qdr9NFt2BDzU28oBOEjv0pGI9bQNSR2PJuYLH%2BpGfuyl9IB1n6VtCScpueK94PmpfEgc4JqvRSAWMx4%2FCRAXJti6yyFl1jtzJXoijxFLPSTvk3ntR2E7QgT9TgquNL8OzhnNJAGmu3yMipaGMd4Sy%2F2ZI%2FjBxbov6yITYQCVIbKSVKXYzwOpc8LZ8r2j4vEBOv%2Fgk0ROn%2Fk8pe6lBlt9VZx%2FQY%2BUbBRO3cuZA0OaTuYdR5YehWWS4wAap48iN34tzStNj4AS%2B%2BWsSO02HNjI0mPMMedGiIeVJleQQwnwUEKv3UQittrfk5Wo0k5UpimPUzDMji8pOrmN1hx5nEOE9tU%2BLPv9PBIGcU4js0VpFmfrya3%2FtDeejBl2frl2IrEoe9llQs%2Fh169Y92Ze5Myr6YcKxQsjW9g5vyo0ck2hNuRrs7%2Fw4011OvlUikjh%2FBDzsSJXyyCFtSGn3YdwQAejevebW379gQRNgeATPc%2FKFrtUjUVTPLOCyZ5R%2B%2BQ0DEUW24qk89aJnT8%2FSPlja4c76mDYXmpE9lffUJuvs7aKu0j8j0t2lLhjwUSJckt7Nr7W6feN5nXAWeLIyKVi03HVDXvg%2FyWsTQlDXcpxMsd1mTFg2X7zieUqIQaMLnQ%2F70GOqUBD5wB5ovaIcMunScmcqucQUtQbwKqRffNhYVuKC0gyhqN7VEgn7ktNvH8imvEQPh0mDePOmPiL78W8zmkfXNYVbbvukGZEW%2Bx86YfmYkcRNU4Ze6O5eQM9mJZIuGzaGbZ0tvNQphptBNHhh66XFCsxyQO2%2Bk8i9Dl9f77uvSXE90ZIyIpIGX7%2Fr9k82PvWjnHmBw%2FyN%2FojuA6aHJ%2FIxOpZrDOvbGC&X-Amz-Signature=930474e547416ee3047b14bf0062b2820b02f83bae496cc5a2aef922698450fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
