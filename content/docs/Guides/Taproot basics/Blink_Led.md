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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGWE3CHD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhIsyYH15Q0fj0OD9hf0Q1QEboGUEN3GIlOBwaIApghAiEAtnAa692EY%2BlYZ2fZDgianFleZQHMvb5g815XSw%2FLL8sqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKh9TPgQLpLnkyOndSrcA2hSLwsNKrlQaTaeYmFIWCS6j3LCu8xMIIPmXoyf%2BskvAZRjMbdByfYQZ%2Brgh%2FZkSEcQx3At3i3F1%2BAAR4mWyRzuNvzgdBxu3x3FWMRUd0Z7M58hLLBxmDTaF6HgZCrWs9og%2BmoZawoKgc%2Bb1dzkhZzmx05t65FfR07NmRvT1t1kPF2fpfmu43V5%2Bn%2FDGsxjm2MyrigvPu6QvdkF15enUoP3jg2btNRJ7DSlV5tFkWbJmjLjM%2FUyVh2v67n9%2FHHP1zOMC%2BW6HdXzHXN%2BINLyQRIX5EIg4uI%2F%2Fy6eCeHYzar%2BpuJqaMMfEzZ7d1K3YkNQDpoDfugtP6zisHrU%2Fw59k4ceWtueceX71xt3gLPKMhuwPKJsycqc2axpvG6oHINd%2BXSJfofdlE4vSASC26KQBknJswJvf6tjH7kqIvTVD4XYwtv%2BH2ej8namfSDMIVCqemXh9NZ53PUXRyrOU%2BPaovoq0z%2FEIhMmhfCSJmycx8RTAvGqervCybwUCHlOPXkaMTS8E3ExkRxPy4VtBqEShxfW7p6XxL%2BF2%2ByzwoFhIPNKJOGuzCA%2BIsB4ahdd35MuP638z0zX7TCcGVrV11SMSzbAk4h%2Be%2Bl2jA7GDMJYPF2Ez%2B2upSywR5Cc5Y5lMJi%2FwMAGOqUBi0vNwT8%2BQV6%2FcRyjJZnNC0zAxogo5rzdJ1koMBUdqLz%2F9uOs4%2BfJ6myxvKH6GGVO2i%2FKkrntkz1xgIDbAEvyTlwIXzxjYI8ciWMVgcQqDmIc2%2BSOPDuMEzSNXKPAzpwDdUj2E9BpOp02%2FEiB4V8eJ8hz26xFSazbK8MblKR3p2%2BFtytq5eo2zLBdyPbIJzXkYlZSgCAAN8NPOCNO5%2BM%2FX2Pwe%2FEl&X-Amz-Signature=f173247764ff99d387b2604911b3e99bf0cab73862c144bc96ce6948049ec7da&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEL77H35%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD72nOVFMVwQFHnbklaJNzUI%2Ff%2Fo%2BJ3Uwbh7QDQHjDvTwIhAPVzr4yYaFDy5xvTPgFoH%2BPgPgL29Y%2BmFE7yxBuDPHJmKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUdqWOvvwWfnfHmyYq3ANA%2BvePJRB5vgFyFXE%2BYAy8nRuE%2FDKKGlveEcLaQsiHmoe8W5E4E5K4cqUuQ7cUNM%2BRl7qoku4BXVx7i%2F8xbkxVJDWmGrqE8MnbFtNuu4uoLXcmmF8KCe6sCkfLi1Tr9jFuc64zK7RjVPfMszzCLI9IqqoDRVNzlWPDkbX2TqJmahOyzEC6pixuqeBABF0%2FJa4M82yvk7gsOJ%2FMxrd4%2FNMLn%2BU%2FEGziI2gM%2FG%2BHMbl1ClzEBomHAK5QvAoh7dWTQUtiqsPnkXnxgV62NTnGVUZD%2BebewtUfkMN2NhsUCioFKQaPJ5Ep6%2Bft9sbURQ1b2utic0Un%2FC%2FwUNRiWgbS88tZhXFhO5RaXasQLK2YdYQgktneTrVCCk52t3%2BxeIn76hpdl6nw12LnJc5z0P4NhoN46S0zGnqz%2BTrqhQYclUGl%2BF234U3%2FSNHRu2OyDRtsongYvfdT3Fqb633KYadhdE7ZB1Nnh3G8rNZZdiLz1sWAfyKYYDDqL73Ui6a%2FMOfHrTrE7dLdpzJ9PF0vWY5O4JD%2BxOkaAOFM9YV5gC4Nah2dqsltCRvqkhlXXi%2FHyEeKCC13QA2qCoJ4kQuZIxFAfbJTCL87luwLIAsBsVjCMOk8Fwhiv36kGiPne91XaDD4vsDABjqkAY3hjSSJUgUoCUMkkLLrqMwgy5rj9CSrRRgWCOL%2FZhJAUMie0BSTjrWN6tkkYd5N1XyXiUW1qKH4O2g3K2jNt4ISRE0HlnudaeITTP%2BEw8E2NZb2dv4MSEvX83rcKSaO1QVbyeNWhIca%2Bo6Scje4K7IcHgp1czmfmZdFJ6tUamfL3iiUja5yXrxVsaCJHea7PjOKOryq4sYYMf1wypEX%2FzA9%2BCNp&X-Amz-Signature=ffa35faf4f7f79755881a9638d32461fb869e0456e88a6fb34cde85a720f7a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
