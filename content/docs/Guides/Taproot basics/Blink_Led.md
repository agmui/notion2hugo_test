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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJS2MN3B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3BmGSQahwmq0vg4tf70NoY6u26%2Bj%2BhiJW1samFrTObAIgF5J1zAlyTx%2FX7o8Ec9Ww5qMdtAlh8ZTo2t%2FN80pk9KIqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRDGSNbD%2FfgdwvsBircA4E0TTEx6dJbTQRjmto3t8bJNp7A8pNgLaiP8Fk8AhxUgdstFWMuK%2FEgOXGdzhgfzWUAeuKycPfV2xIcMxGaZNacnshwxblL%2FU8XFNKlpO%2BDIIubEOD4z%2Ft1w5pXzMUt0izQb7QNjn%2FDtMZcOzxDUzehGl800t71kTnXC1%2F6KZPu%2BjKGUd3nB64BJaTw2p%2FUIFj7w5tjnePX%2Bh5AlIE9HBRNAcEluRJB6FdK73q44A%2BebD57LctNbbYvSOfch5LYlo1hUwfzXkA82xgAXPSONc2oPE8AKG8BMA1v%2B7AJX3wJ%2Fh5Ch06oQcKNfGT5RxkL3JD%2BXlljZf5So6%2F8fZAkbxc%2Fv9qiN2j4Kl44hZr9ij2aVImRfPBVfP0cUw3Wc6h3fo86mkpbumh8%2BidNwRkrDqD9bZM5nD9Wa0e1vyX6jz%2FVHbmBvC4yUZ%2B0xl7ywr1rnB1Pl3T84XXuJQI9dylxO7CKUXGamqBd2lbx9McanIVeelAHevFtV6xn1xd8zRt52gzcJj9doCVmNUlMNcIRkzkGtq4VejX1TJSXk4axwi7O9C44DHKFtwdvnso5CWpr9rQeDYRyRE12wEfr2BOeBz%2FKDwuRzP8Wmej1yaIxxO8cIdWlCdRaHK9JwoGFMNv14MQGOqUBD8eG73A4AkmLHjhVE25CWWqRNX9Q3XprKEEYdeEhW0s8jXyJtJttaeTOmvE%2F7yKzRQFNaihajynUkKkXOqZQY5cfwtzkCT1x7Ut4EB2LQVjxdehj8%2FnofTe9X2u3%2Fh2VefclUnpozaFvLJjo6NRt4sNcD5Cgb%2BJdSU0l7jHBs5kReHTpw2G6ABD2Evrn8O3bv2nTuWEmc%2FH27bg6RhQVdfJ1MtPS&X-Amz-Signature=98c828a13c46f437c80e34402f9aac6e492bd962ec52f2c5dab11276d8e39e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PIQQTR4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1zH7vQervVwbWmMPWysFMx%2B5BenrpyHfeJNl0Cq8h6QIgHBUwXboOcfragbZxROO7jNL7lPlo67tR%2FpwENVvnBQsqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbGVUmKnPEW%2Bgrl1ircAwLi7DDsXJx0P7YFK%2FMmHQ8%2FWgBQh1Sa3EKq6sV6zq8lfT0V0V9iW4crp6BzspN3K8hvdoYozUk25%2Bt8j%2BzsxTm8goN1xyjjRsTk07VJ3PDd9zkc8s2tzfpnyA11fEt%2FXr9JySIivwdCjsRuzX6yUFAKmRwc3FIqVy923eOghyCgt4FjTvl6njBjUu2pXTHyfa1TwM5vEk3Q9KDSbJnpT8Zwk1zlmSOpgOLemspJCz6wd0g0q%2FM0xOkgPxgosQ5%2Bb7RulDVSeBLDieTw4dooW4%2BabOzUYbi6m10yNSilC7RP2Z5OWlaDOV3evWvzjEeMxFGC5zCWksgDXVeHV4QC3jXVar95gEMK9XdhV7%2BZglim4Q%2FJUY5ytC1y8e2tSQ5L%2FxtGWhlZQXrh%2FLNE1HN21oQrR8pBUtvvIfCY6yEIAegHjCYGqFrrLEPFbFeE3HXj1jxFXiLdqZm9hOt8bT8xP7K1MkEdHOQmq6IhJ8MeKmDV9zqlxx7WgBx3es2RJ0l%2F0zITMNnR14QheitefUl6t2FGVscwa6p%2BawZFwfgdkqsdGJubDlbiuPgJlpQpBRe27JMlk%2BF289xbJqL8%2B16zx%2BkYlBOGpmp%2BesoYYt9k6hcbVBepcEVOIthse5l0MIT14MQGOqUBnkwO4ebCkBoUb1lsKFuUJWuKbWk3qstMuiTvNNighvK8WJeLZvWvMm3ASUM%2Fte0vnqPvnf2t%2Be0sZimR7tUpnlxy8J5F2ZQPg74BZCWKDRGYXl7LhogMYkE6IC1x8q5g0UqlxmPE5MkTXbRUA4mtdAeQSTRCwz9nGJWi%2B6TRXKR%2FsBcd2pBZwhleVm0fr2g9ZwMu4Nn2bjwfHrLIuThDF4FX7uT0&X-Amz-Signature=c5f8920681a8f28c0d66694269b7977603c6b64fbd65410d99d51d771f98e2b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
