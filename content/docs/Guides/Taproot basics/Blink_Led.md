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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVLG3RMV%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIGZwv%2FhTFclB50Ksl0Q0EOthdOftN4mxdQQLm2Z6a7CBAh83hj7f%2FNxLW8Hg8a%2BEbR%2BDZU7YDivRMYbO5YECnXODKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxt%2FAIUd2SKFBm7p28q3AOU7y1pgzRLTXuj0tnPp7bXhBav8mxFXhbX4DCyAOihhAZt9FEn9enyxpHnOeslI9WIf%2FSGx9mHDK5Ix7xpg%2BW56oefHEopSoGs54BGeyUTfCCNChQEyiTXFQyjV0s56e%2F4HfE5oxihez14fHRiOmbIXJu7PRQBt0MMGEH10LfmNgTJq2U%2Ff7bHipPmrsfPcRfxxrbvTNsl5%2FvRILx9gO0Yd1taEby9nLvQ%2BnvfIws1QmGdqt1Ra0CGTtaeKoBCNFuICE%2BaqeRaF78xGNHvlXg60xvAWlb%2BLd7jilEXeOOrmK1MZ8TZKSDZM5H28INQx%2Fob0FQbJ4tIrjmPujVFlFVydbUqX%2BQqNJ5tHZiWYg4T2ltrWniJ%2BvWzHYCO6LSHF8QPRzHtoR2oc2tnQEwyKENDiAOsoRC7b7PIojC0m2KovxlbTTQkjtjdYc%2B7mtTDUPL5LgVHEfW8MHPIzHvOU1awviCh5w3Ddo8bfC9QB4qK7kWNvKbxxhy%2BvCC9Y1VvFdhFkjqrpQ1NV4rP2T8ECERtjNNzfrU%2B60leGbToW3LRjBDtsKsFIzictTt1w%2B0Smtbro2IKk9roUwLTE1NUz6snX%2Bv%2FuroZd20m2Zj77fwuE2IYr0Fvuk32xlnXxzCLsYe%2FBjqnAR0XzkHqt21xAlfUjB1UIoLLZdMYoSEcRxiYMWLZAZTg7s5iDAGY4eTfYAlF6T5RWtAja8pNfEoHtOzYdjErBu3UG1w0R0oRyS%2Fg9hBItj8dLoZllqPJAlgQSHYw3YCAUvYz6H0LrZZxo2ZuS%2FvXR9zX7zI3rDZ3WRk37VwunNfjaflwXx3WXzFcE8f0TKMGAP9nO7%2FEjvXyFPX2My%2BScFNesjSJ7sDE&X-Amz-Signature=f9a9194e4b6d38aaac8bdeb238fb7961a59d680307e8b99ea871ed31268cc5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM4377OW%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbYTY3Lo5awgJypNzcgnNsditwAXzmGoF3SiuaObr5wgIgBcz7kK8anKo%2B%2FU%2BgNBw3WAX6tFufEbuqjSgqa26F4ZIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLsQP%2FKjPWHmM8Q6SrcA09va3%2FeHfjFIK5TBNazbgzuqF%2BDt4CUTsvimNtCtShk%2BXH6%2FxiHY1cDQFf%2FR99CZq3aKj8kZKFhFhMG0YOXDMGNu6fNoqNM9qX8Uvs%2BNR7AhqLaxr5f8lmAZ2MqLqeVKkcZVgFE7MSKWCQYsvm50K%2Bi0U4n1DWoaGv%2Bp12V2VQ76dpYN2XkHBYTPp7t4TFc0mitKx8Fkf9uH2KSMrNBP9U5GseqIok%2Fqybp1h%2Fgkf%2FkXs%2FXxrUI564ZHoEzjYpRUgfJRYjFpxY9kaR5nO%2By10D7SNoOUFQ0rn3KHNv2qLBCSck9n0WYjP0qtmUAF1wrfAlduubSL8k7n9P0Oz97ZxjJ97cc6bi7b5jcvRr30UH9xkOV9rd9qn63y5O2iMaYEsILBBIrskH90R31cC4dp6NgxNTm7OIwOIXHmJ0bRgQIOQaZSvZ%2FoIv4Wo6xdfBzKFPu%2BFoROPpqDvpwoXUnmeX%2FBGgef9DGdi7lVqgEl3YXgDpVQIYm4o%2FZgqXEnvQy87DZU8OP4%2BPZ2%2BaBo2Yci1erTcz%2FuG85x5t7%2FLLHJmknTJn6xTyGtEJgndNTA4CfDLBDoGrR80IPExuClFY7iBqeyroi0FcL7fSGaxy8uxlzFtcFVhi6kAl43jzkMLGxh78GOqUBMp%2FJM1U%2BnlOWAyfFmSCmLws%2FaifrtJblS2E5HupPuVaZNw5tr0T7CFdNP5k%2FRrmJoXFXWER4TYz7QZkFFxo%2BNeMGbQ%2B76aiMvHMETZAuuYsl9W9GMLht5HFZQ2bpUqlHCphGS9dwUT78i09Jk2nomfrCYj2kAofDEOS3zZLLSVW9dKlP1ItWS5o%2FWlYtqf4%2F61kJXHE7Iw%2BS0iCW6WL1hW%2FOxdIE&X-Amz-Signature=da08111279d079af441282951b476c601a555a52732ce92d797a642c92fb2f38&X-Amz-SignedHeaders=host&x-id=GetObject)

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
