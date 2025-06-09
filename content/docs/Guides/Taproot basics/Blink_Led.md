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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIUFLGJC%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNWwaFgomSrIGAi0lsjFIFj%2Bwm8LXGaWqp9ERXghaT%2FwIgXGs4fTjKrW1SdscqF2YE%2FeVy2%2F9tpoV4Kb5pYK9y4a4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxsTEebQ2fMcW1ZhSrcA30z4T3AYg0cN6izRkilepsUy%2FW%2BDJiqBWJHdLCDbct5ddaDnCOsWAehqaOKvnY2%2BAIyaP4yCfgtiy%2BaiS8%2FQ%2FuoEg7XZxFDOld9BEyNbj5DTbUdIq9ViosYUMfMdskngege7saj9L6QL26IFpoeleD9ibF%2FF%2FoU9xL27MMNSxfwv1X8YBlHOvU95BYyTpbeCjBH7uC1P6AkISTYmp1YAJPvJAEJ038DcOfB93tYIswl8KgtiOXgLvOOaGsxGrEYyy8Hvi9m4g93kwmmQRCFyL8bCPdUWGra6WGdz6uSsMjU2nYeKM7u2Uj0KLWyb5p%2BRU3heWOWyxWLGRa%2BcChqdA1%2Fj05f3pcdaR6tcOGRDaaqMQsdWlisfF9KRbfZ%2FdG3nr4wPauW8Y0FB1E%2FAnmoUr3bJSRhMxd3jfV61A5uWQyjDyWsICL%2FlqvuJsmHR%2BcEUV15DCd5hSOsiWe1M6ama1DBdveqJVlQk5rFrHSq7ziRDy1G6VYBHV2BwFSEONRNtC7voZc5nulf1UIVD7syhu34SUygivAyS3jdkTW6qaFM0ZItu5zqV%2BuOowi8Rf80%2B1er7FsnVSiHOJOgnuWYhBbu1f2BAGMZT4FVrEw4UWDaofFLvsywpwGh1eXDMNadmsIGOqUBhaa0LU3fZO2zxUWt9v72fD9shtuMhLTK1uz%2FMEtfK21IBCFnOeit2x5CbcyF%2FzuDuYLX4wUxenZO2GPO2I39like1xEitdmoXR0X4sUpG6kYebrUrJexEtIwMOQ5jOQ6Rw%2BHrLXHyiZsgkr9BE8Fp1nF7BA2mZfUltHWJDTzO72EGMbFDW41ofpMEv6AFPTWBznziyNmui7cDlkskOJbQs8969j7&X-Amz-Signature=8269c30fe152aa4c89caaed779b0765edcfe510b6b667e88f07ac13fcf2a8375&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU4WVK6T%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtJsu0wH99J5gzdTJ6nMCF6AU5au3O%2FF0yw5uvRGD03wIgd3eG5woCcnBhNRHXntazUJJwfd7T22KiOb9oHKg2gYEqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLSHh3irxzM%2BH9vyircA%2F4kmTwMa12bBV1sph3lq4ViwFaHoHl8jWFfzwRT51oIFhtXdbRoCvT%2FIK3SpZEl8u1NkHGtdzhG%2Fxth%2Br%2FwBskW0yU0YJiXA77kD2dl%2BV1oqf2xXs24lBvU7CObZW3hcVbqxdEYNWK90tUv2Kn1XzESiiVgNTJPhCnzmcWgl5WBjZMsWRzO7OzmtVC6JzACt90EPqofOKp68IZu8dTL%2Bepa7bxK3%2FMXMr5dS6%2Bw0%2BKpZb1UrPBpWTnVRb5eQnzf95l%2BUvwXYw9KvLWCuQis1yFM4qzEzVI%2Be%2FL1qE42gC9QMow4bRNMdtMq8ai%2FCjKIIgui315rIxSeJTTskVtzkZJ4kVRjxcK993Qzd77v014ykxdVcTc7PJFxQewWaANxOzddgA1wn9cWahi%2FUk2zEhrhBwSCAxWsXJqFefgeNMcD46zZ3BuUWvuNq9wcbV3ApzVmkO4LBvQdwUed%2Bnp1ETs1zsxEqZE6XiLtbUW14mqYp6%2FAZ37NxmNBgKeJIeNV%2BY4H5oT1AN8PWrHmFsc3SuX3cuYw%2FxZFYCtgL58XISBANFNBC%2ByZ4ktUGm3HwObH126EbY0QvihJJsc1%2FiTRhAN7oF2PI1ztH9e0qJaUDwFNHJbWJrScXdyv9t6OMNGdmsIGOqUBwFiunSAgbF1qGvV8fqZgtxXi2O71CcsA86JCk4DtBihh5x1YQzsCmXmAKPjYiq%2F8UEGsUuYyw2iUTZbp%2Baq5OXKlzK9LZ1d0q2IeAf%2BQ3Fx5tgpNfI0GZDTLM7PmF3875tbdjjSBQo4DLsozvDmU6Grr6Rfbtge2w7ewL9hByzdvCH1NH2YHrlCnfOT5HueScAX09rnZ4N6eSzCAdc6TqAQo99JM&X-Amz-Signature=1225be926168c7653d626bdea86feac443a7423f2e05b1877532245df344cf34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
