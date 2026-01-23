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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H2473U3%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIHZU8Jm7y88leXLV%2BMRzEB7x5d44ke5dPjVTNMPi9XazAiEA4ysJsTvKDhTqW6mOovYFK4Wwih9STtVJS6dbPBvB8VwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLzhdMeluKWh4POynSrcA3EI8gay6vU1RfKpfosOFC8%2Blh9RJlOcDuzwMOUilzwBTLFiS6vuu9%2FfCLuMRFWdECVc%2FIzYMOl5e7kue2e7Ah2wNuhjcRVx%2FbCZmkTAvVR5v%2FxQobcbQKQSC%2FNyhPT3rCHIUYC8qqynRiXvBM%2Fna%2BsGO2ZXiRn1W%2BfRmrogVYsmOO8XxJGbqMahRvjopIgZo2skHuRz4kuPoL0K0axEMROGoccbaIPwSPyiZXP725vRfr5s63DK5mjVIZ%2BZDoybXvDl2lZSpIhRdKSSINnA6QIl1XwRWb2Q0uKcecxJvhqVaifMq4oheOovrNH4ghjvzqfH6l%2F4ErgDzrX4JXrcvJZtCk7t0JSfrTxE0NCnsKAS5j3qqcEpUmoBSJfhGuqtfBSAmtYL%2FtpoQ3ScES3Z8zcMf6h7H3TqNLqYB0ISX6%2FK%2FM1W0abqB0ODbiUJc3PTIga5jR3obbk7BjAv5ffVkzeX9cINjd8VZgsCnWeuiq2rbLG3oj08MKu218iMsXeCBEMyyVRjFvTjM3Fxu%2FeSsOg2zjyty%2FMfvw0vdlCqGK5LDGH2Y7xLW4srWtQY7LosIt%2FKuoWe4Ba8jLi0dpNOFSRdz%2BCdeTHpjvIKXUCITc9zyJNCpsXfVzfJ%2BSDSMMWKy8sGOqUBIftbx41FST7rXI%2FDDNLZpqV6dOAyg8vrFEpStGHOeWZT3eRVjO04lucF5f1fhTgzghDlQihM7hjzNw1M8C%2FBYvRzISP6k9ynj3tr%2Bxr9eZ7YQyVZY6UmzNrRWV7HirAbg9%2BM%2FDeBchEKLUPkew5rrHvRO5NbdGNzhER3JvURLCKrLZdDJodFHe%2FwPAY4L%2B%2FahRPXimik0LDfysqgOl67wz2MCpRZ&X-Amz-Signature=dc725c60e168135d7fb1b923daf7e3471cdeb2c56b09c1bca96e772cf3d0a637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666Z2LEAC%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDdJep9Yf1F2sv1b%2Fc5Gcpm3Rwd%2BY8t1tjYTTHFVnY0PQIgQ791FhnAAp%2BtXhqn7w29uy5aTCNxUnfKMBBe0Dg4w9IqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkq5TbeCCJTeJQ7HyrcA%2B6dLkwC9OE3JuFj3FoRppEMVr6rKGZIJWt31V78vqdRh0g1yP%2FzBxIQcl8MQxvbBiG1V0HeXZYJFyrAD3scWMzNiSMHeqI7i10%2Fo7%2Fw9afzbJZ%2FAgPNwNPYsunWRk3qeyetBoqhyEIPxsVjEPjSaYfisMvnNcynsVxbGgj13I7MlN816Y2giW6Nme8lPw%2BDYH2eM6QwUXFfFQcf3%2BFrlyHQCW7aoyx2wzRpou7wYg%2BfiynuJ0fGd9hIfoJqcQQ7CrC7NVGR925vSMAKUp5xlIdLc7joPMaCDBU2wqKH4pSFNNpSqvhHlFTue7MoUMvYqplmgGrHS3c%2BhmhYJ3K6pTvpw6eH%2BLHh5%2F7t3%2FzVkG5W12PDDRdnhhziHtP3IdXvG%2F44A8OaAkEHQ5U2E5M0uDh9GSdN3%2FvEhU%2F0B7chJZJvsr25lUyWLGSG8wVShpx%2F3CZw4gVC43IwhNP8jJ8kKnfpoz74GqQjQE6WGUSf%2Fuk%2FHLzWecmSYn6qtvFShwVlOoaM%2F0qGvzb0b66YwHXTPIstCSLus4rkgKkTxHqoQPuRc84hYvRVJSlXHUN2NCOXrsSJS6vzwMVU0qctqBKXgfZBwpY67SD%2BjTv5M0wcNx9xayOQ8NGwlfN7KRg%2FMLSKy8sGOqUBUE0oUX3sfJDVqsInsvmCdlf%2By9s3RfUgw0skd10gzRTgMpCPVbMFV2x%2FYtFudzehkhG9hvqHr9ljHtmM9lPnUfrPLeF1NA95MM158QJfM7z%2FqSAk29TCWzmv7Mpe8N25eyduBDEN70FuL8oFe2R%2Blrng2tFlcm%2FgkIcczYDmimPbb12LsllkXuu5jy01yi%2FPq%2BvaFyJe%2BvkTcjMg7tsecQ%2BWTUJo&X-Amz-Signature=9fe9e182604c1631f0176726a77d6ac1d717befc863b132fa90d435040f11781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
