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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDPC5ZH%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCMZTqeBkGVFjcbFQ7WU9tQlVetwXZlUr0aV1iUnu%2Bx5AIhALwDFYMDIzZ1r%2F6OU6gyQOhpVvHTEjLbQwEzlRDY5qSbKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1wIJFjCYE%2BH6aK4Uq3AM8QO%2B8O8kRIJznkIsj7Ao5L0JhJWJbKUD1eYPm6cQs2wgEMJip%2Bu2A%2BSGM3BOA3GVTLa4qxu%2BdjAiAOZN7LWI0k0emhm%2BXkw9dZhaPvn7DGSvP592TkN%2BDfeOQiU4wCGWxNKb4TVVI%2FPqhysAV4US9y5WlX0rUtWgbVxD%2FNtuZ40h%2BS2OoAWIp9gKITgfVgMlpnKXuINerWXe8iL7TEVoHDmFXzj0jbU6lngOfARp8e7dewQ6gqrdCLQg7J7H1KwT0padsjM4Dxpjrt%2Fl3Xq2HkXNuC4zxIxDdabxqY%2BZcUBO0NmMYArc08aMJRfnh2nvYxo6IZ24a2xA5lEgMXTMp9uMkugznUqOmpvlD3xMIlyEBPBtIfRsOZq%2B5uMowf5TWAtcBawS%2BZNXQwW118HBTvLNDouzRL6hndkPTAvV%2BSyNSJfhXGnzH6aoFGIcxb6%2F5sTt8Ye2tqHKbTx6qdsOPCDbfsKbYFmpY7R6sIpxTW4SaNnz3LmtzxSqPCz9RhZxJFNHtInooB4h26zot4YBSO0oTlJXSojvjy7w9NqVaOyLu9V5CyScMP7TzejAMkEFQS5wK1570H1OlQ%2FUrCp2A8TrEszfcAQXUmpZMVrlY%2FMBnrHYR%2FFBqSIoXTDDghqrCBjqkAdpO5fFzQbLenFty6uVTpnCBY5YYGN7HX5Awu82tbMIKnawD%2FGGIOqBvKxX0%2F1NJh4TZ%2BPno%2B4y60qmafTaduiJ0l6zxUF8zxCoNVOh8Pe423f7NIF3fc3TJ3X2MW25OmF8YhP2DaIVobxM2eddKGy5sD3Wqph%2B13EbCaQweHjhdvqmEip4xnmw01dQcoq%2BMuDRmgIh%2F2NsYNgaYzPIhL1%2BijG7e&X-Amz-Signature=c19a4a8d7ffcc4634f74ad692f4fcde1b0d016b1e11ad03dd8c4fe340467c0ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ILECWF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDA9%2BT7Az0qAcEiZ4YkOq8jHht5mVN7XLzaSAmApxnqgQIgYIE23G3SeBfojTE%2B1GGcsfUBngT1YyNVmCCuZx2QD7sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXdgeJUKXuisMO%2FmircA1q%2Bi9kLAamMgeVC%2FUEW5HDGXCtzAFyWeVoOWFxcBml2g1CWxd3if83%2Frywvn6AxLadhB0kw4oS7JJ2Uf%2Bf3cBTqMflt1thhD8cscRUPoWXCZhUVdo3mxS3OIvnv%2FUUGi2JVabcEzSDiPMU2OEiQPSNLyglJhBZUVm2UwiCVN3Cglx5ngAobZ%2Fn1MthjpjJucLrFsQSNmP%2BWHJrt%2FQBmP%2FeAuhMTBnLOD3Of2mhLCvHR8EX%2FvkGG2u2tFtCLq4F2%2BqmQZmpgdtoWn%2BAPh5h%2BL67TpTHRhV9u7Rsxj8Yj5CGIqvfuTofaPAZoMy5cmTgQTFNd9BNtJjWhr5uusjLieNX3%2BfvBdTxDdUxxMZc%2FJSLvJdqtZkHCmN5s8iNo4hBPdHnohvyyQrmABF%2BA7nBv7WMn3WscFQL%2BT1ULW9OJC%2B971VhAhp8zdQlEAh2GYk4cEgjROXxcJiBUlYOWUONwiGlis4pz2u5kH0dQdoIzdYtOXkTMdfXgjKmosDkWeJNqm5ZdW6ExWLH3UG0wQPr8%2BA2FxCzKTVuTXXl7mtyCmixsmv5eaYBgkwnc1gqJoM0crt355RnoKSct2c17xTmALIUr998ljbqXl4r64SBA75jIcon%2Bm7yfVGao8DULMNXmqsIGOqUBILlxrNise2KwSX7518KxTP99VHjrUsUbAr%2FXEHH2BgD6L2c9MfYjP1fQ4cgfzJIol7ed1lwUEcFMQtVWQ09bxBKG6yFoRngO03CCTp76R1vwIZq545stZXFedm1ILf1vBxe0vElS5oz1b%2BJay8BQa8dvVRp3QIjzkpFMTQrd8WB%2B9D3SMNArz1ZztvnfOqWAKmwylkXkP5aECPG7rCrE%2FHOQy3J8&X-Amz-Signature=8a044cb32757752b924f5f4e51a2b4eb7a2ec9d724fe1a84e2e45a79eeebcc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
