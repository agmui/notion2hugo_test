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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VU5LFNT%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEaOV3k7BAxvyUm4nU%2F4y2EhMVVzoDEzRAaUQDESjAKgAiEAhyJSpnnvROu5Js%2Br4ybvzcXl8IgSLJv3OJs%2BtjzSj3oq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDObMkBfmar21wnE3PSrcA23LowQMKS%2Bp%2BnSvtbmZO6oO5ttLRnWoMZvK6pGBAEiarEu%2FqrlM0XGkcz0iFTaIueT%2BN2k70tzPJoh6TeFpXXh1XOiDSRXLGvV3Do1veoe%2FJ9%2FIqRUNDrDuG%2FWDyNs3CRetOwMFPNJMFL6hFmhg2AUsn8Rg25VOTxPY4YV4b5%2BEzzloSiDGoU9brhXhlHro9AtmXpuP2sP%2F3zNpVHTgf7X37PRVinHvkJK195vteCIXWWXNGsAG2H1CWPJV91XYt7gLUoeZHo8IPTHf5KegwbxFZmIyEVssCLA64ESbS2kEjUqs6zHIQz%2BgEl3S9FTF5qC%2FXL51Rxdo1Ri7E7kVFPHugpbPbfkKL3bG%2FoxlLegWjTXYpJRdlzqswgB9cP%2Blnqobxus2jIP0c36GH3NE%2BSQeH6EYNaAFjCOUBH8PQtL%2FPCsiW6LV2dq5aHssA88And%2FQMi8Ms5aPwhztEU9Jbv575RrOsPQO3Lp%2BsyTJzU%2FLwO9m5UtoQHTd3iOLXopmXQFwP0sAVPKdWAEZp7qypte2xUxSwxE4Ok0Io3mAj%2BA5OBKx9mQi0lRxWiR4sYVN0MUJeHxE7ES5ro2bvVDpkdQXK480TUH7fbgmRyytB66E2vIBw7V5401i6jpzMIGD9L0GOqUB%2FhmlG3LflaKnm9N5I4FVY5Fcx6a5CUUtDV60aw64VHJ4TUF9mCR6dvA5QY4UTHxzz8E3dbcCeukLJwv0Zy9RXuKL3QA8ZKi%2B4BFWEvd2ixO%2BkMn7aHuyK6lVTlPlzskjIfKsWeysW1mxVF1H9fq4%2BkTkIIMHnK8JjAGoeVcCjhGgjWF7E40qmWd%2F%2BtCd0CBameoo39eAdJOxTioCPdwmJ5Bm7CjL&X-Amz-Signature=5bf2466479c8c8ba5c9755406c1734bcc72dfa08f6da5743f6d3c61b231675c0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U33OAG32%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T021228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCICdHb9dhZE8WigCDV6GYaGQ3wU6OSZlaB%2BsmBfBNjsJBAiBOoeunHqpgwNlN1x%2Fd839I3RFe9nfnNcJCWEMIEUmnACr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMcTkFZW1pmIBT3%2FrxKtwDoO8oVMyfT2VR1YyDe8kacjhUcEEhNwQSQGNKOKFp%2BCXhPnL848MGYUflSbSO9b%2BnZXf7Z%2FzbnvXCkulbZjwPb73SHH5dRVQQ%2FqhuDGkwzuNkwNKqrTrFQyjwR8niuutW7vLnejvERqfzk4%2FNXeVFtI%2BdPV88XXnJ%2FlOc6zZrujaspL8f8ujV15aPNikMwDPSvN62owhAT4SXAdHyLNI6bNuBVlf9fJxeqosjDGbkpE1JY2JAMOKUpnJ7yK12yCHc%2B4SVeNXiHrYZEKRtyPH%2FL9fLA82BBczZT0HZQASh0Rr1qOhKAp3LodY4GamCC0YdRiWQ1g%2FrtOaEayDJjy96JPj8z%2BSrJslAo0YFVbFH2BKoPcsGRVDeK%2Fi0Lsc%2Fr8OG6kIyoccP5%2Fhai%2BnO5dpdWLoRW74CGt%2B%2FveibnmOKVg%2Fd6joZEjqvyuhTFfn9FoRB111QRNijBOneqF4gvnuFo%2F6jOIf5nCMO3IUyP8bwuvksbmJlTO3HCBACu9XKSsyqVf3W8cbp%2F%2FCE9U7Rm8a482U15raJt7CUME7YZgT5zTPAqKFviktw2bIOncoiux3AujaSujiJzeiAeueh9sr%2B6CiHG1Di67B8YODp6NNuj2la78xyh9k2kU9OqOQw6oL0vQY6pgHveybZ5R%2BMCyNgTIypv4xjUTmQFxUoCuAarM6q3Fi0962g4pG2wA7BqHyIrcGHvrvwthu6iNRB%2FEuMUoyNUmhYUcHVPER%2B5wvNkRRKjnuLwJ%2FKa4hdnWBbXLu1tMGB2J2xCcg%2BrdDkHcSG0W0%2FpZqofBRmuodl1Tt3gI9FnoSFDhfbe%2FPD2B1q71%2BjY2xakShjAKJM%2BXH8Iz%2BDyZudXx1vAsr2GL%2Fk&X-Amz-Signature=6ee57850af8d3fdcc7bd6144e3363bfbc007a7aed711b03f8002b1696761e724&X-Amz-SignedHeaders=host&x-id=GetObject)

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
