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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF4S4NIH%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEW%2BZGi00YXN0Ethj2NGv0u17Ii3aFLnfBGBjetv8hk3AiB%2Fpwukrppuv5Ptgb9TUz5nJw9i6N1UrCge%2BTUq8trYhir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMQ66HP%2F%2FbRp14fCIqKtwDYmKU0eZk5vMMcRxXfixVxsqY2Q97XhwhLL%2BoE2Y1iarjJfk9uuGbDNsNOBwF9Xwajw%2BuMHe5U86tXg74tWovwmk5q%2F9Y3thbQeNQR59v5TNVgpQuDVXJc2DLesNUGprTulGX8uGsUtUal8Kqc32NDdjb0UlEh%2FiztnwNy%2BSbhEzN2hsWj%2BtCgHuuzRsvTH557ZxgmJcSbc8FvuRNfMQRMboHLMzNXRoYRZIXEfUH5pZf%2FeU889vqOaw2eQ4z1OIcqMGx2A0EN2n5tGHmDHUhfCXFSTVgFGWpseu%2FG2SN4oU1S2s1XGs6mrQ2xPFqHecz2vPvEViStSqqnQ6zWCn1iQdg1%2BOL48qIbXOad15MiLpTgUw59a769DSMCZdx67C13YWvm9%2FKyrwzWo5vOKK%2Bt5yEysETdC1EvVhzN6dzlwze9UHNEmH%2B%2B0L1OgimdrKZPxm2A0rJntGOrCuIrD%2FkilIrPRGc2eTxV%2F3ocweoN7c6%2B753szQappnvrpuhyF7HypbbBwin6BX5UHeRKI0YV9SWw4tlJZrvxmIWWAAznVDI8ZeOXrvdeDEkSCn8H6uHnmV5F0B41AXgb7DY58rHM%2Fr71Z1u%2BEsX3qJS8UgL6wOSrab03JqXNR%2FbtbAwz5zvwAY6pgGfpxZdsnNzoKoBilCeICzbOIz2Xb26AGHgYa%2FKlC1XM8CMBO%2FQfwOMCTAo3lEFPI0jAmjoqGNBwIm20M6PDpSak4EuJ2BDte5XjYxtE1EhnJWXLVLK71XTfJFnbP4zLOdUgqXktNDR3gY08odwYVKJBx1INfGbIv0rNmGAlGo4XYjShMibVAYoANLvGKA7ts6QGonTXVKrZn47ZFMSiDiVoKYfx8Xb&X-Amz-Signature=47b2b35b392946eb67142be32d76b83b9da3afc54684c4acbcaeb1b166e4bd62&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQMBAWR7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcYHuw4zJx0qMIRSEiFODYITZsD4x4upCeXHeAHSQyUQIgTwjH9EQavrgU9IuDY3%2F3xdRKBGQn3Fe3DdBK8qpZHj8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAxXJC3rnUeex66s%2FircA4ZnccGQQWd%2FxjZ3YrntKoSB5zkFfnsQXTsXWGArw97saGu1nHvLgIMxhCh45Ir7X9%2FKJmxNd1uY9bpceE%2FTHtlkWz6IIAaQ3DLVYQLsf4DAhBF9xOdQ6ZUhEfD8m7FT50S%2BLoiaAsJ%2BamogCrwQmLuhXhlBnNl0VcILvPcE5JO4veXy8D5Un21H2Q5Fjyl%2BhqQeqi0PaXCD6NSdeRnp4JN2W5TS%2FlGPcmmr43sk7fXsbLakwc6U0tZ6ubRF9VN%2B%2F3SREgbC42Ny14PGnprYVFlK6xvr%2BR5HGWoOqzTR%2Fi6mbL0%2F0q38gR2adqTe3pi%2BwGQtZKwNrJx7lEeN3KY3ALwVyQJufhFRqbXFzcdtTG2IvNOChqZjP6rP5%2FabUWuVf%2Bj5ujc3i7NlMcrHPHXLhicvge5rxSg%2Beib6UPPIRwgPU7JgPzlYaygIz94mrAgfOh6saPiIHMqWuuFvfDxyypw5kCDcqTrJW3vFME2hH55deKMaNuolu396UfuxFZPjl3L6vQAx0Dng9ugQhZB9pxoQORLGNwLxi8dLIu7gQxoiY%2ByK1JvxQgZ2DpKWkEWSxWRxqnG3F0HcmVCUhgWIzge%2FqtKpS9jN4lYWzg7rqVpJXHe218ab0oAkLYOqMLWc78AGOqUBmcqtj5Ha8heZgJ3Bl8rMRZLU7pi306Rl%2Bxo1YQ7fE1FIFJjJNldHdygl37K74JaDksqSUZjW%2FrVpW%2B2SMIPWlYt1McRvlOBpVj3pYECYsj0MO%2BGhibwVuq3z2HI8pN8N3twskwa%2Fo9Q%2FVNjXiCw9phvO7MhwVPNRPkD11ABkAr4iJxJ2wLMPHHbdA75u4ANA4KbPQG%2FV%2Bb%2FYqB93eEqsFfi%2F4dri&X-Amz-Signature=b0bb66f617e553097cd94ef464d4e1fc0b1b43ef335569ee801086cc7c0ef230&X-Amz-SignedHeaders=host&x-id=GetObject)

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
