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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDT2IXV%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQC2Re5jXNWPbeEFA7ygvV9uZjCQQmhzZIClrKLYroVXVAIhAPLv7gP5nWbRNNjRYOsqbhBcGY6qS6CrmPBhbJxLc6IGKv8DCBkQABoMNjM3NDIzMTgzODA1IgwzkMRkTcWMrWsOkdoq3APmy4eJkogX6ICgQLHykD%2FW8uMtlhgUunybdc%2BKWkwX44zOloR14j%2Bxsfinr4AIeZBdR6%2FlpgQ2XBuUhOZxp%2Be84YZpxa8Rj5jOn3%2BuhrZ8%2FjX8beSWNp9gJ1E1SlhJrV3in7KpbpijSOSKMS31io4sC%2BfFm1GSAJqWcskqiOWNVbzgUiTqvdY8YYe8%2FxISKxAbr3gBCs1mWEYXkmSdPLsNaoeQGEZXGS0ysmXBGmtBQk%2FVWXG2xQgopRbsiK%2Fe%2BSYlcNGsk1v%2F7mIOm5gOBrD2l%2FD6DydJwBuWVDANrwVJqlvhUqqHXJOidfS%2BstyvHK2oPxp0iqGCGFw5mWLV3%2FLWiA8dY%2FAUmcIpEvyctVDmmTmdmfJdjEazI5MdIJWNPara7wEvYXznf1pMspDBVC5%2FO4XNFUI%2BFDPIgDjdfYqUGdwj6dp8W1cBvoPlkueip2zzRHjBAjYL7RUi03wqWaNOzCGVDyHd8T70dipT2uw8hqcson%2B2fSjBVOKiMl4LhfktBJzQ7ANaelcRVbUCLJVPX7aTjsP2aeERNx%2F4gTXtWJssvzVy5Z33wzvdO2KCdoqbDJ10SwQobcP5nXUlIVsO4Yabm5vgYppWpWCO4bDgBzYqGV%2Bct2suhwc1YDC%2FzIO9BjqkAeSz3BB6ippV%2FelgfYXnJSf0kZ8pJvyO1KyzrCV1R%2FE8tSesZ%2BIrHugfSQy4FHCr3D3BfGWKqdTPN5SX5aAch83NUJCm2vFIwqXpr93H%2BqTNgCx0MnE3j%2FUbNPolfeRcB6ruE3RhCNRckh75ldF0R4LrJqSS2SjciFX1T%2BYPdCL0uTdt2Oni4bX2TpKwPhFDOXZeVGUpaLkC5H%2FVAKdAzTDT8iQa&X-Amz-Signature=52cd06f30b5bdd5f09698f83d3c42688faba044e582162575f49413d57e7cee4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIZGUZYE%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T160838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCTSq0VSHTVx6AXlBXpxdEVAQbHJAJqA%2FCdkxBRFXla%2FAIgZeyemQ1wSsC1NR8O32M%2F9ZOrXH6wiq5%2F5kX06D4N9Ukq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDO75%2BqCwjy%2BjI5%2F29yrcA5wUqsv3Xcn2IFtnY4UBQFW7Vl3gWwu5ve56GobrL4rNpLLHYcwVYBZNqWnr1v5Da%2FzVBSP3nP1z6RF67vJZ1VMuls7fWwGJO%2ByJ8ITsVoHORCRoEG4htddebuts8CIaE7YuE1ncBP0kpk1Adhw%2F4jIITRnfwxGKPC3Xf5RE6ATorxKWUHDHvHEL52LupnnnpzzeJA8v7SEyTGRqaejfeQbfAsDDwE0KjnMukbau9bEkMwPHk3Y0OUaUI1gD9OAWSiAPDysMHKoXEH6VOndZmQ5ieefH4BIoPtVaqtmbB34VEMMVphXwnjTxloc70hdyoX0NrIQMb3TKiJO4eGvpKA7%2BiSZjWgKtN37c%2BVBxOOO6%2FUWBdqUaecat7KCimlSfYZvIHNRf1j7jDgGsofDVBgOoTgWAS5%2FBY4je4uIYmI2jvjuLVvEQRcJOgzdUbwy%2BBDUTM7Sdmq95esJAKdCAWDueOip%2F7nt06dTFqaH7lViW2%2FC7bQaHBaDcU08j22Fv7lvx%2Fn1BM2VEYJEjKazCYdGaXYV17nNYUnb7Cp4T%2FdIIExdaymV5N193FrUvBk9zznR9mANQ5ZC1R5uENMp3l0HJubnyD1yISUeFeOA2How76RWPB53NwNak24B%2BMK7Mg70GOqUBEJyug4Q1wcTOkPjrVEC0w9oA1X7h9kzOBSC1LiIkerN5XB455mHOvdTE%2FZc%2FFkZnjzz2bsgG5NMFzDQ%2BMKHTS%2Fd4ocfWzPblp2ddzaSb%2BmVlKA2rWiEjZ9%2FpfQ3xu8atNFMpyXHjUsuW5G%2Br5VFv0bpWvB5z9goxqYjjMp4t5qvkwwCA6E%2BHsHMqQgWTgaX1x2V7TDcW1R%2B56Fyj5FP7%2BPnGt2vd&X-Amz-Signature=54af216b4128fd2affd63f34d160d94030e981e58ebffa063f551da1b2d38300&X-Amz-SignedHeaders=host&x-id=GetObject)

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
