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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZCJQZDV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVr3VS9uxK3ACnJacSw2cfy00y7VBcLGAch8baOEze6AIgI4ue6xrRvTlcUgfGRMg4PJasaH8IXbUh3p6t5fzMZwYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjxkat1qV3ck6aPwircA4nZqytt6WEo7I%2FvjuauWN8R44yHDiUqrGBNFkdveeoZ0pbCuCATnebo9DtsFlOvrweeLYh1kA4Yak2q1G3%2FU8I5Q0hcXj2VU4PDyc%2BpM%2FOP3FGH5D1BgsrkAofHyXNGhqNj5pvIQvjVtTesi6nlHJejyYflP83mxB5H6Mp6TKlPgJ9VJ4MIgg0lah4kv2lCuEvM34utnrqAuYcsLbmtLmI94fSzMHffkr8ihmMnscqVFxLfrl8pFojzo4kYkI6RPesWvB%2BBGalPjXC0Sb%2Fj936%2BkmWshn%2BdgkJKbxD116uvC%2ByWiYVTho6lc%2Fb4B%2FiY6Cnr2otR%2BX2454rMmUis9RGP98dFoyA762c%2B86NMJiWlFAJttwmYCTBYYXcxjECir%2BGYhyLsH39B0dXtbiIXEhtGrKuaWnudFD1lF70k46EE7yUXDESa%2BSJgN2OhCQDyW%2FjJOody7eYIzvXbX8xYln8olf3Nfywk43GWliXekeYrA8jAeONM8JLtMofzDURFgsa0V9bS9U5k5%2Fz8r%2B4yMpcpst7JreZIy1th%2FF6cqM8S%2BH%2Bq%2BuH9E22Q3EELZk3Mf7GzIlbWDnzZrezYryIANkk7BOR6I50atuwllVrn%2F03%2B1T8F%2Bgz74jAGR9i5MPvn3MQGOqUBX6AxSa3RYKOmzXl60gmxUe%2FpiAFgxYmoozIo6U%2FkMhjY1MNKMxLU3J912e5gvJhhPFOCJyTnKcHQJGW%2FwamPUvMJqQKHFedukBfckpmxTJ3U1fOo6k5TzYZeT4fQTItB7CK4Mz3siABR3NxztBYmn9iggyQo87k5zLBXmfq5J9xljVx0Kr%2BdXJr6qGblvj4vR9WOG8pSqlDekACPcmVkeRrGyHK8&X-Amz-Signature=87a44c2cffe75097bc002bb39d206ab1002c5dd4e984ac6e11a4a61f716bd391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MRP4HBH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T160942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFEIhO%2FW%2FeRecBhwtEV7YuhFHtd3yQWXwQCSLpaEw1S4AiEApnanGkdXOqfwAClOnQU0Mqi3bB2yj3rppOt1Bdd5HJgqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHZ71PJIn9mgeotwmircA8eSXLnoxOjbI1RdP3Y2PRMajCViDwd8d9MqnlnSFV3bJ59WzT9cqIGJ6fJ0nn99q7Crw7n%2B2o8%2Fsd7w2y%2FpMEGWkjIb69u7vri1f54W3PFRjPL8qY%2BLx%2FXLVKqPJozq%2BG%2B40FvoFf9WlgJFexhSXroQaGcYHM2Fa0GLSI%2FDN3Fj1kDTG3r5aCVMAPhbQPRuTlcXNeyavfNcTdUdUFc9JMUaXWEVbAHHdgPGuK6AEoOD1Uws9y0MBqkjBP0QiMF%2F0fsNF1XBD%2BZ2IB3SLf1mdmHbCwL1pmymCis%2BIftouQaRb0%2B5SZep4oeojp3XyTJYrMBhqMkhK74rTbudzab9i1tSGYp6tMu67zTqD2iOrf9eZ3tV1ZSiaYLEuzZ9a4c%2BbFG2WqQTvP6PmsgERU91kj3s5cq7JlFCxKjcS42zDXaW%2BERWHTzh%2BFE13WVnJ0qfWP5opA5uSd43jdQ9uwDgm7skd6Cu0HROt1eOZoXAkn2IbtzBLPvX9YfsHJL8pg1ZtiKau0TgrVBWFuvQMg1k%2BWsW8e0pGWFaT1Qqv54qDAWRaWxLLfUpNXXj4fmJSBceg2znoVTjNeMIjQ0EXIRDkul1%2FKDxn7zOcbkt7jRuQO7hgA4l0eX2gbXbgE3oMPfi3MQGOqUB1UI%2FHcChKjor90bgOYuiAGEeIzpb45jSSRklB85oA8nxcNQGBNGxtEslPZK%2BpNvdFWblWWDkqNBBYDxFrVVJTSShEgTHcPoy9VGZ%2BLTisx2xmtFje3t9%2By5ZjrCOu%2BPITViBRp87KG5guGBpRtDuxVe5q5p9nEakx%2BebZbTlvatyYqCv%2BDSw%2BCSHHRRYWVfjmmjm6YrX8hzxe0NFmoA3MT5wPDyv&X-Amz-Signature=a5780d4ce4196d433b33479495b9524103019dd1d17817bcee078ec90f41481b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
