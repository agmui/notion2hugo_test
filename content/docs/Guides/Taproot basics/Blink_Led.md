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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOHYPMGK%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs1PmPHEqKQQbPN99GhNTqs5Du2bmsQ0R2Q0YCwjwm8AIgP14sL5i8YfHEJel0FE4ylKJLqpXjmAPXfLALVAjUZNMqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFIX9JwNxmkau1%2FD6SrcA2idYYSv6j4BPLd1aiMMYvROqcVLntH1%2BcrNzPj2bzvy36p02c7udbYJIUBTv6jomuQ3yuwlvf%2BYI2X%2BaxOfUpg5%2FdKYFkpL5UVWbCl7jWid38AXZ1lnBlonhjQ77PU6j5XrT4nzG%2BqzH70s07zWrygiveSIHfBIDyBfzW5p5KtnSokgFirUY0MekeW%2Fx4eYyRHOvr3CBqepCumiioGt%2Fd2pMiZzNSKaab4K8eY6AwXjNPptiuUxNzEMkqmxxj%2BGA1G32qTGQqFuqIzseQ46IDX4j3z3uxoUbvxFGybUzH4t4yBYcEAOOAe%2BML8qZxVI4QgNXxX4hA%2B9mDaNwpq%2Bg%2ByCDaFK%2FTxKQJ7dJ51XSqqf7ujJHOZtj3XFe19oG3K6qvwzsOBDX3WFoPec1Dm%2FyXY4uDv1tZgEs3q0NFXlSDxMrTXJzy6ndF41UX%2FyMqN49GViJDxDQQ%2BnF4hwYSMZuB39Rgd9ppI9GO9qDHz3FW0L%2BI%2F1ZkahZXwpJS5jxMcfFSlKu9wl0tbSQXXFmXpegcBOCZSnc6kX26GmWK6eqOBSFfWZ%2F1N8LBpU%2B61djtnp5g%2FmvfkO9i3NVeJjsNFVizxjx0K7%2FMaqrvhknLMe%2Ff6me8jzdzcGj%2BfS2%2B2iMLrZzMMGOqUBtX8QH0ZBuqbdRvbdjS9QjKNEkweXfss4waO7ckIf%2BwEnmHj4hJbV6trFarRlsskVJbtrWnxVzfZsQ8jspZm6BNdmwFKu315yuD4%2FT4l7cTDQT769qzxuonKW%2BZaypXxsN0pzVCc7I9Bv5rU4pm%2B%2FJxiamO3PSGJ4IaapXjMjL7mEf0kTFPs%2BCiNeJ%2Fef%2Fl00YLl0mHkdBQIuHE5Beo4JLaHU9%2F5X&X-Amz-Signature=703acde9c60ff2330b18c2040e5076dbfa86adbe63dd80f628956befa3407d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HX4BKWB%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T051219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpHgwHd6q%2FXbpsNV4tjKIwljeX7M%2F1CXI3xck%2B0m8gsgIgdtNoWC2pcY3FgYbjguSJ7p5NvMYyK5Bu2ZPFqeh0C1EqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3PZ3k%2B6vueI%2FcRvCrcA%2BrE6ZRPIW13pCMNISjOlJX6%2B%2BdSO1M4PGPXPz7gbdpKUFNop%2FPveAf37s7giEnZPhAJyTUBli6NLZFsMyjynoXIUZ5fQLSuJw9K2EFLSwKkn4HukaxEAu7nwvr8Q54lRuJg8sD7YsjYNpbeC0cewMrYkZQnXFLGeSWLzfbAQemyI9KhnhvwC2lrnUIJ4%2FWK%2FJElulSlrzAxEFDZXIVscbweErCTQIS6xYHGZe35lsWsoQOPrQnKCF5YmPYo3QZuHZ3TluaW5Ys%2F08qXJSCSB757B1mt4en4WbTxMAxmPZxDiKJUbdaTnSGtuUtF4BwNCLNCCMucIRFE2h%2B%2BOo2HaoKLGANZ3ckoEAKjE2caH3JW7zuwPvEu%2Fq6vduBnqtoLmYFLx03qyKI07wax4ns39iF8gZi0RtWdwiixlDeSLCAwYSl5GjHH%2BfeA1kbc5tlvCHlGezydTmXVw72ZfbF4SILqqEhme54IOth7z1CjDos4APFGkhb%2FWBJdUUOWp%2Fd07uL00xLM7tbxkwuFHgvcd03sbpz5E2h7N91KHhRQG2lycNNUqszaRzjQIN1LibC4UAqdkCZ3OR4BTfZsaEI4HOmjz%2FiTNEjdCqH%2BwKGiihvoU4ksTczzUpPKJUcMMPvYzMMGOqUB9%2BeHOC0zmg4C2CtIbEGDOgMLaqGLQIJGKXf1m2MCBLuEbSlLkrUqv0qThp04p5W7fiMOD%2BHmrz5LVNV4pZjIdegwYZHFuE5XGEkfnRVxyKobG2%2B7Z3wykrMKAbRoUsu3FRdDsEpkvGuzejiXNrA%2BP%2FzAfjFWGlQH5yAWlRv%2B0oLygqfMZSp7zVhBFevNUZLgEy7lHMQHH%2F7FPbzky1jbpZdnG6i%2B&X-Amz-Signature=58affb9d5cf68ecf31a001e69b98eab316172903ec66d18a724993c5a22cd8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
