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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TH2GSYW6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTjeN3QUH8va4rCZcjaFFus3Bpb%2Bdi27MLktJhrQuGLAiARO0mpH6Z6Uoi8%2FfVhB9YAdT5xZuNxZq7EUW95yfMmdCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMjNOQe6aYUh7G16DiKtwD1k8Gft%2FgzjaoPZKc3uDJeJ6Y0r0YP8LoOF1q9r9ukwI9Lryycq5s8iqn4AkfgPaWbjA%2BsC99TppI3iig4WS8iSEwPs0PZS0dIJu7%2F3cP%2FwIaaxZB4pxu8tlkmvsphkEcB8BxdzYY5JTRtEkVUawCS9g4HXU80NFFl%2FqTaYFCnkPF6F3agDDtcuEaL5%2BRaA0KdmQt1UHgaLG8SS3rB53%2BG2azR924cAaF9A3tEfcMO3Lkdjs9jzwvr%2FytQwxrGYU3fqAX5XM2pn3lcribRdd1BL11QBvcrVTzX1LqTiVc0DO%2FPuKMcCCdJnwFCgV84wboxzDPrPMn2MQkRiM%2FDOfJb1gWd3lbF23nsAE2VmRcVYlB2C%2BGySQeu8hHEvDr%2BzTTKxxQXpZed8jdCTd%2FoCizu7FhQfegENjGZs%2BxmdDNrJkCayw4%2BeqLZQ9jiFJ%2BZ1M7rEIAsg83AM1F01%2FR%2F1eWnLnD1YDa71ubyVDQWKAz0lnwgmMQTXmCmtnLC2tJmvt3Tg5dwsjrNS1SqkCWriN0UV2I%2Bi9em49kobp1iSMlXSvD%2FkzUkxNSZDS8b9%2FmlWHoUgqjLNvPFfq8Iw%2FApSX49Ue%2BzSooCnNiqyQ5N%2F6c544DWEA52Abozl63XmEwqcmovgY6pgG2fDf7z0xDR31EEEKefmFQ%2BWgTp40bd93BsXjVXO3yiH%2B%2Bl%2BUPU1tGIabjKTztKKZfzUBpqSxWKXnMI7b2M69VoknP%2F6ItH2c9JABJOHKvk6V520cYIhUyDlvsbF522kr6MhhChATGDQNO5jv%2FOtsZLa%2Fz6l3YQoXOnzYNZ2T8fckJCKsiXC%2FVKTWIe%2FXRjreOqtYIZvv%2Frj8ZYajWqkvG0cia%2FcH7&X-Amz-Signature=528d8a33383ca3decd9c4df5a281386e68b6d9560fe6c312e10171144e36abe4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZ5JBH7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAKWXVSnaarXdSPz6T070tw670teH%2FBcB8m5e1hW4SWAiEA5NCJOMG7blouJpfcMNzGQxY0TQ1vOibTtRMQr4Xquowq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDAgtSibNW9n4bSZBpyrcA8Mq09w%2B9h%2FY235X1EJmvGiLWIVFc4a1c%2FbreRgtBGauZ7%2BO6Wb5U%2BmAgO2TfQxtAFnMxJtknmNGBYTN9SVUti6LKvfALi5EN6UbgNKkgTu%2FE0y9iUjRdP%2FcnjpNue8iBg4rJDIUb0gAjoPYX%2FV%2FiUGetL20xPueVJiOBJqHYUeNb2t0hut%2BFDQebapp5uQS6tHPl8F%2BhSH%2F4Xn9QhrokSJxf1M86%2FUox05504PvdaS98QtN9GADv9aERUP7OeWeRnR9AvelgmJKCLiwwJyBHtUdZJVQvo6zSr1hFeTDi%2BdeaQ%2BUOR8QITLP2vJv1jWd4mB%2FfQobb2FlWyw2AMSF993g3PevhGGclCwhgLBZJOljSxY8sKLzSARYnP4b1cMdCrWQ7V%2F%2B%2BqwFyzJG1%2BJVCeNgzpsHv1ygb%2BmNjbrVcdTmmcDUCLEd2tJv7Ee8VHSdI793mIr5Sxwa0kpDt83mB2T%2FWOPsyboYYEVrQUKWXp0hiNsaXW9CyOO%2BpZoLXpzuqJO9xcUO1%2B7TrhckJ5xXUAPQnzG1ACCd64e6soO5J%2BauLG04Do%2F7cQtIYjnC4UHic3%2BiUliVYG0CY7uOoc84wAR%2Bm3hD5PMYbBs8t0CBSzFE2Z9M8wu582bChgshMKnJqL4GOqUBeTNfaAWiTwQ06XvIIAHhSmwkVvzIRWnZiPcVxOBFGOq9rej6kIfVALjCv3QituSO%2BMzuAB1%2B%2FKY6CnOTI8hPtLsOIfqwB5ex55HSN2PcF%2BnVulPGvwshZuz3alYa%2F3n3cBs6TenTBatU79V%2Bt1grrkib6Y5W2cwZad6Rs8ywDuhGRTLp9QBRkquzNBgxSe0dYAQFaYRyD8wHIH5bPhCU%2F67V7rOK&X-Amz-Signature=102c07b442006f7dd5b1666d378dd9a7593a19ed8cab16a155606574368e8b76&X-Amz-SignedHeaders=host&x-id=GetObject)

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
