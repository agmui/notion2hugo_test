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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULF6ICZK%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD3DTl94fWf8sD%2FigOCTOWTk3TSY5SPjamRnDdiyOuT4QIhALKin5oTQTdYYTWMza4QTSrlPVGSkoDRjRoSrr1BvPdSKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzD4y0K5%2B1wXDsP2n0q3AM4PS9lWNY7WuSug5EObMVX99a%2FoL19r4pWAmJ8%2F3axVvBB%2BZkxTKF%2FfAev%2FFBvsHq6P8zOiyZeJ1h6l1%2BCqcLljJ4%2FO%2F%2BDcfsPbGf4BR7z1PqORZgT2gG8ESnXZbLYTM7CcHecH5QnHbZz985wakpmtlJ9ooFUbEHIrwrj7bsp2yiD1xEZqx1W%2F5gjVX4lxFb3DK40WNFlUTV8hTUrPIVaU%2B8ZhVaHV%2BkNrN5k9jFw9nEh3TbVLV%2FRV7dE8g6UULAZRdNZlzHMvkNWooqkGe9NRi6ExNtv5GeJEqNQ0gjCxpEt%2Bor031NEHxIm2hndEVvj3WtgwWri2xE5rfLAb%2FbYjlXFIo3U45bCxoIs5OxwCeY9OAHRxhhJFD3HWVFn2tyvXmmua8LW8PSeObR4mnTapY62caIAGZEfYSFRteycKttK9BMA2ewH2Wo%2Fl5qkNTjUdRM7o8PyhNB%2BlpY4HWYa73lVuZWXvaiA0ooxO0wZdNvhTLfRm%2BPUIfpwcziX3IDpYyIwfNKOOsSUW7LeTJhkVUOwJ8xOQQ6BI5ZqQxPiEUEMRTSeLxSvoUlYBQuVbDL98PZKG1IthDjbNmJEbq4osr3RcTzlL43hkJKiaFEFTfuQUOLdzOiEAKna6jCqmdDABjqkAUsGhs8BmO1vyL4VoeJS3duNsz4QUCnK7HSyJ1NXjk5uuKkaTaqk3Xe6g95rGZUJ8oANMEnf9vHDYdZWB8XavewO63pojYUBZREG3jqtDE7xffT0zF2S4StpcKP7Ivh%2Bo6HOg8Af2sBboOrLw2RJmWuMqqNrCttwNvxlQSU9SLJV%2BqIQXnE37fQpfrWDcXrBPOP7b8TLg1WcEEg0vGFcPMqVID4B&X-Amz-Signature=b475088480763795f66893591095d4f6e2200fc36afa2b90fe8909aec9fec920&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVHZNE4G%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICfLtpvmYxQ53pHqeml9buPutwABgj49Nte%2BmKLjhjxVAiEA0jO9kZOXX7D4rhVb0eG8bbUBiYSfj9rKaUzB3F4OQ8IqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFa4mrsijh3sviaxircA430YKhBzD5U3BRgvNrQa37%2Bg8hkMEB9cIfMHK5w%2B2nPz3FXPZfu%2F6yLVHfwVLaee8Zx%2FMnXpApZDyCY4CPfmcsLGboHHJGwA1wnKBcvautnex88lft%2F141A21LbZiKFHxamMYC5AvoHQIFXOLa9LtzxLMo47iY%2F0VEmYXqG7YjLLnSV7gB48SAEhsDkP2%2FW%2FJFbdbJ5dO%2Bkm5jdMgai%2FbyTXxCV4eFuBKL2oZcMYgSKog%2FahD3LAK9gxDVDIjrji6LjMQdJndw6L%2FU2UvCINdg6%2FFQS0P8vWVBw%2B9T%2F3ofAlXNzNK9n%2BoN441xlT87xqLo7X%2BN0Q9TwUCMQjWl8jYNT8AkO2PBZnbqdRr3K4DzumpIUQNt%2FquQB27j3Ca7WEi6TAUiPfhumiWHuPSdUgkG1bMn5XPOnJp5m07gJOnBT4dzEkakaOkyPeNNa8xF%2FaYM%2FyicMlZIBr9K7Tvajd6tcubwgLYQie%2B%2FVUf187ugmetNTC6NUOoeZiCDetzsyX9XsyeAQyWER%2BOEpRMQmM4Fw9CmRvM2apE0rOOUKTkVnjMyjMIHPf4VRxETTvtboDRq0o%2FTI%2B%2FWtjPqk9%2BfQ7sILX9P%2FDDdVpPk4TGN0tX9nkXqKJOpnuckzQ8ayMN%2BZ0MAGOqUBP5IggReW7xTkqouMc9MsAY%2FedGSbRGG5I23kprMIZzcvuK24yPWSMVGBgGnCPBHmXldD0ijn0267AP7JzYdQeXJmy%2FES5sk0%2BGs783pndFY0eIQsUPy3DTIva7cXrfpFG58rg2tz4%2FBC%2FEajCzY6nbSi8M%2FSj%2BDvX0%2FgEjSQgWEkn3IizcIfj33IJCs0A6cjVTczlxWrUJ2icHh4Labzj7UowrXS&X-Amz-Signature=6568e4da14bcfeba3c285b7eda47e74c16385572e123d1e2d993bd857eb72322&X-Amz-SignedHeaders=host&x-id=GetObject)

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
