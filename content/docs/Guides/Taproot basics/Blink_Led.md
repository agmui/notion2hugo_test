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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKETM6SB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGjlzwbWdI97isShBft%2BLrxZzeB%2B6G40poUchiiHTJh7AiB%2BPqKjm%2BAY0NI5FPbcNq00G6F1BddPr6yJybucl4xSHir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMFidMTYpEd4tCX9ssKtwDl%2BeUEKci%2Fo386tC0E2%2B1sxWgqLVN%2F40j7n6aLV3ne%2B6BYqGWZyPKTCPC9eVa%2FtkZ%2BXZBdgQ9vI3h8NmuQhpKlONfl3BSfWCGO5EqomCIIXdwp6lz9q2%2Br8Hb4mdMOHfiQvsEZ9EY0J%2BeZBFMak9sIn%2FW2wNWvzl%2BOgOhZXyJ6MCpuKSCwesJ5lB4k2Q%2B1lfAzpXXY4pcHmBbqZZEiH6xBUq0MughahpBL6nVeTzeMX8nF91jPBhRtLBv8QhjqHD%2B7suYjP98W7OMHkl0lML6k70uZwgVM7K64GdTHPhtgSzaQ66D%2Fdb%2FDKFBhJ%2FTtRgKgL8hLN7KVYRmcfH1%2BJ06PzgsvUG3e9HTMFsbkxj2fQ6mGZl9q1ullSHHsdNXN974JLqTepwLnoC9rukGfLAer%2F7%2BeZnsicf0tzsay4vNhlAMWrKC1ndYyUgAqKiCpCtsVqzohUWSYwRiOA0NEh3VAphgi%2FhkU8Uu837P2Em9RwLr2S84IE67MeUwTxEmkfV%2FAi83pPGkeZpsobCaEKTHe%2BJvhasU6Zb1hSe45cnWdGP7pKIH4vX9pRI9Jtua6KsYTRG8WrRWIFnt%2BIjt6thowT6yji1NY4w4z13FHgU1knROLf10qRBNXOPvUmQwhdiHwgY6pgH57U9AKS%2B6MxfZVNYPbLPLZHkBnk6S5TwpKkP9KaE9rDABYV%2BLW%2F%2BdvaFrUlf4cRnn7KY5WxF7mf1yPKn4fZrpg%2B7caF4tHD5RzjyP%2BFqenSDrjLglKn2nBEJwHPHj83cjyV5mUvaiOspjNuCYFZal7Zs6U7pF4chIUBkRTBslibXss40YrF0ELZNTOtOguQEidCIv1l74rCcGLJluURnQoYdHz4x5&X-Amz-Signature=f992baf20ff9c73601dcb3e4d2f34d6f81c533952267e78ee1f1cc08c245034d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHIXYFZY%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCtbO%2F7Pz9kTmmLq1S36SNbbDp%2BLorT9Yv%2B0mzFGrV0hQIgc%2BO5S93WePdu4VCBY6gvPZ3TMhFk3RzkzBnoR2jxQCAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDCI2WrDw5KYxZq7LnCrcAyP%2BwWvFXo0jf3nmcS6Q2u5PYK%2FlPSVmsqHxRiUkhASxUhnwsOgUqBac%2BQm3RsifuSG6MpVomA%2BzdKsBw2zeYG0YSJKfZogkszh7TrEP89AgnMzwD3abJBfUisltHxN%2Bdw0qAs%2B8aGyx5id%2B1xeZWTAbZEvbi5JbItO%2BTPJjDNVSSK%2FTTnO0rotUBz8M4dHAWwfx38wievneWDdPFJxihpdYLFXNrK6NAuQbqM1PBMFxxPDVij9dRbrjMBotL0k5Elc3knb7z82tHimBBYhnbmROQo8s0FYAFn4y%2F%2F6dPK9WbKjW%2BOOaox503KuXVEihNPy4WrgPqhpWI18y6ob0mJyPf2CnNe5A62i05TFE3hpb2fun4DE3yu5J04Fa4zc%2BkFedvIWO631K5FokiLFF%2Fwj0AA2JgXS050tFdMmXGCIr2Ns4TO4JT7%2BNq%2FvZIvD%2FDDC3yna0WdvhDy8hUzQ8MM%2F4%2B40yKfawjk2H0wKrCoBzdbDRBEhkPMoSdX6WTzmGlUepL1j9LPNQRMspIPRC0x7lIIOqiEkx3eDSJe3fm6N6WOEFKxLP5qAz555NJO4Pp1vmfVo64C5xP%2FU8NlWsEbpn29tTIylLijTI9xJZZiMU93GTkdZYd4O0P1eAMILYh8IGOqUBzhN3rPOeqAPEIN8bR6p9yQoWuMyNfuTwLVfSuCjuN6GcY0FDCspB7NpwHzhwSmy8K6Y9fU6p7ZcT61OhajJkzcqjEsMKLSQST5LWR97%2FhevVcjIZm1RviHmpnlttgTlDiej5CaJgsVx4I8fx37zZC6fUYKYH5Q8QuNgrRuFWp9mRG4Fu3RXvV93Ga0%2BuVYZa70ZJQLvZdJN5cg0LrDNdzrHObRVd&X-Amz-Signature=558fbbdeae3303916aae0b5ff63519c2be4a1ec37b567b804ba20255c5edbe75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
