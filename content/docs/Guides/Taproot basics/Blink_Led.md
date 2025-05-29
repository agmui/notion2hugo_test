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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466262M5L3V%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIqeybld3LvzunueZvp59RoV6t0493A2NYV9n9KmSWKQIgC9k9kZpku9qjGQKeWVA9EohuFlo2%2BxuNHW1YLl%2BNhlwqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFh8MJBh5E8UBMIVpyrcA40QiAynGXPfMtzvJ5V%2BXzSw6YuOsONIYrRB8bSQS6dYzd9brzDN%2BW5QMUsjp4oOGcZzwV5n8qs1UXEIAVf5Amepc%2BJZjdpSYzFjOXk%2FhWG1OfZq0Pq97545cSspUCUr0YCz2lF3YHLGMpZYLf660ybxzSF5kns6IWeVPfAYQPuyzwTOYZiQznYT0Y6I%2BJ4prH9kS6in3fi%2FpTu%2FNDH7oeyKdU7JcPy3QHG7CWefVMHpUvi0vcEe6e1BIJHPutp39km2JfRWyT8j6tQeBDAJeZAXs62cdgFHUicTDUvp6FiylbVwDmswoRRT%2FJK3%2FrFpNOCaXBeTwxpwB3%2BAUnYyl%2FQIfpk1AZcqjofxPGas3akt5jbYsJlNWexsQtoRLbXJd5AEQHoYEZzwyEHOp7hVBnyOtgnF%2BWizqzveJKHFuIJF6a1q36YlSrqp6G%2BRvr2PZ1NsIfFcsCd%2FyoMoUerYFG9F7Hu52laZsQMGfYxkNQcvLe8ezIn5EVlRsXhBFqgfZQ6lxmXjj8d3u5rI1ErvoPruk7ltQqtyhXwcboCa4twAP82HqlPSWaDJ2qpsFhTYe5q3kQKLVMG3f3U2nCWwAblaWdOGh9VOB5wGf3ETYTqZX7UVzJYucVehJI4eMIiI38EGOqUBD5z3lrg5Gxc06IcPt7YqKCuisYv3W0op5HNkkq15KjG80CgvV4oi9dsza0rV1buhFpGAP7EOobcHXcVsLdhPZS1rUzhD77ZTNNlTimPTqcEkFJSODqB80YTgj4OyjnOtP0XfMmsYF1qB%2FTB2%2BCaXRE6lBSPxgEp%2Bjz3vp3YaQ3VrZTco3hojaWp%2BrkBtHQynPki0lCrknyhslBlvTV3wx2DwtaCF&X-Amz-Signature=56364582d7a6d55d27368cf499e61e5743e71a8081cdbee3d3c60c0ec092283b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFQ2A6RS%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T033751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC10TMYkN5VcsT4iv3wYaJx%2FzfDY0p94Tc81L9azFi7KQIgXfS1BXxBK96HdCe%2BLrMGCZGef2LN3UERHJlk7cXMMHUqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF2eHUXxiiTS1MivSrcA81J4DqWKtiWf5lawf8pEQkjQywPMnJT4W2N1lR%2BXgp2I2fCCq88ayPX035TBmyZ5TE8T6cBlheBqIevWmXJzTZpqCwidUjjRxkcUvGAT0XA%2FbKvIm8NIETg1a8sodBEwNmCCYn%2FwHpzYLCfSk7oYOW9m%2BAwF47%2FAwtgY1suLDFMdWNr4laTmLOv4pmzuLFIaWQx4rzy01zFgNODVZaOu66D9vIFrHsFVOL6Ot28BJERrMpi9B2eozkL%2BcSbcl1dcx%2BQkbkcyOZ81qZmrCtymmR5qIg0BEoPAb0IHKCi41LQT26TVQpCFk1PJZomC8iBbFAAmZwFoTbCTmpsOa8PGuziJsBdptrksT1rZtfQXdRZER4OpQpTBJafxWS3NRh74iFP%2BDxr9yvxb5W%2BPr%2FXvbNPXZVzVJxGBLrqgPdivHSSplQG5HXTky0Y0oSpIct8T2PZYwB551BhlYOdApq43qa68fYwXKkhwLMroofByiOAo%2FJd3CrWlVc7jXislPMzgEWYFDqqTKslE64Upl5c%2Fw8kFVdCiUvVV0ZC8v9ma8U5KolIxhyXXsJ90j%2FdM0xAmy1Utq7eDi44%2FdTReHSO3v%2B3m67fr6WghVg%2BexRCjwvGL%2B6ADuA7M%2BPFFyj3MIeI38EGOqUBWS3BFLSbt7iDnrr%2Fvg9%2B2bPGVnaEVltoKrqJR%2B3dAaSr4yszMQnfXhxItx9ezazStKrQCAlYjOY2ZvyqwT3Pn5xAwQu0vLVc4i7D%2BZOTs7aw%2FT82JJeteEzEQGBEu84VqO%2F1jpbJ1yqU1Zt0L8x%2FLnNFwQkmvNYqeJ2H%2FoEhFU2awRZCqUlTLQFJ9OleknCuAKFC3zHpV4c2w8hgvc92oVwYZ2bb&X-Amz-Signature=ae57510e3b77bc595d4e7281b4af720ad0cdc86fcd934f9ed494dd76205c45d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
