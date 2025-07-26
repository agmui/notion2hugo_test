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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S63HV7MO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIG0GuRvtUbMiqhEZ%2Fe1IxNg%2FT%2FQgJvCdvTxvbkP9vtFgAiAZvJ%2FEP49O8dXGBF6fjU4qUfYmZzGwFR9n6%2FPuEKCWUir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMTQkZ1r8vcNdc6rBGKtwDYF898QSt3DqN%2FQw5Vx%2Br6FQhgs4UrDlAhqh7Gk1TeDqLDqYN3wm3%2BaRMYip25BIgH5WMikotbhL1JryT2laIb15YS38%2FHLlHjPZds0nCtEUIlBF2velUtjg4npQDZDZEMp%2BHvFRRIkWXUKJoocneMl7z44TD1aBXcBYjYLJOh3eq2%2BtolF3Id2yEmiLmy8KFQrwEuk%2FAti9A3RsKyKy7YgX4RjHZADrSrNbqsgAIBgZ9w3wc%2FBoSCgWPGCFUu6nAF83HDed%2BboAHZLxFETxOV8EXI9lp7u3b0VwursppO2XV1HYgbK4FcyjP1vQPWncLCgee2biupCQqBwSboRH4tAoynHtJ6RqfRLjWYduWpbQMofhdL2ZrffloJ2WafNJqns3%2BkDyAR9ovrPQSCTPFyi%2FTqIm3RQEM5ZgDJCDzNR2lqWHeSZBfhu%2BaWD6PoPR%2Bjd7QBjIJegVqUDPLraIYLXq2r%2Fx1bB1jX2h1GTPpKFoJ6eooa2ZCdCc6mvB8NaX6E%2Fm75mElE5RLk7Iye7aRRI%2Bqosn1oQrBwAKSbEsHEHthHvCHBjJ3BCsH1VOgW37d2Qleo%2BU9bOrtmH0TybogN%2Bj%2FMJZEvpEqRYKCzx3Xq8PFcj8kmi96r%2FnFNHQw7PmSxAY6pgHMe3fodQJINdq45yCdsrlOwiph9Y9nf0Gp9e3l9lhjqCtKPzXYosSEKK43le8UWgY0sHU%2ByyO4nGRKUGVof3qUW%2BYaV5Qv7glhnPuS1R6dn3MVkYU5sCn1tG6fpOrd1vOBZIelzlFsWxc5JIgc7mmycbTjP2ZAqVrUIrgool2wsBokMmbnaPlWzs8jIPrVoRxRibHcTALeNHhW3RKHN8%2FV57pfhFOl&X-Amz-Signature=50cc4991b46606111a71a0cd1fa5c0fd399aa9b502826c0fc58a6a5cb1cfdbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEU6QXYM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIDFf53HVtshvoSZGz3eDPKgZscR6sQV00wOnezVZtKu0AiBqWxVxjvDMQKBFgyrLupguo9wLhHPz8kmRoKYzoBHfbyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMseeaa%2BcNkYVphAlPKtwDSKw3nawdLvmzg%2FKfuF42bbuFGHw6gwLHoqZPJ%2B8816jWQ0Hvt%2FF7TPSUPBMps0gHa6szXveGZ1XBwrYtRTJk1%2BC9iREyzT8gtmMalW0%2BB9pt7erG2ioh65Os5GQ%2Bnpkl7QW2iyhGWWu8RNoeTPGQ%2FYFGrEE99trv1CCFEq2d%2BJFhVObeaNBqaz9DejxWza1jVF6a0051J0S1UA3yGRND1UWoH5YOrAVzWZIr2wZ%2Bl6BR%2B1YjqJDza%2B9%2FLZWb6LSTQyQWhNfFg9zEAMPqRZNQV7GxOySpl5yTxbl6NvHL61u6psA8kfLZ86h9ELFacB%2BNcSywqSGLBbqFQ65OwxUMzVvSTJy6yBV6qoEtfVVTn7nfhlWXv%2Bhme8InXOBeiLlmjaNgRZWidFdV1nnWVZ5ITdoXAgF%2FbBwTO%2BTiqlFVcBxWZFf%2Fg%2FAWrJTuBi10fprtT9V5uBkiBk5RYeDapRL8laA9XSwG2d5Nw%2FTkg9cn7EXFXGrdgDjSAe9CdjmyVMFVP7x64e1lLhvMEdvso9ixqHZGYt2boQKyZuf%2FDQaTwwXopN67QyPoNSttI5Zw6bZnf2EdOVsorLAQFABV3e0aU4T1G6HsgLaGWRNvL9C4lW2pLRTvTlefBJmKjlkw5PmSxAY6pgGcxFaz7sLIJOGSbG1%2BGb2nq36w0nKmLB6JYz2hhJLsWHg3%2Fv%2FIIS4uEd%2FvjhKWyvy1L25hmVXay6FE4vn%2FmX31uMI%2FPYP7XIy8uHRKWV3YAmQP4Aum148pjYV%2FV1doRaCyb737dQElNPUj7C34WiHahDfciDeLDpOE%2BO0o9LOj8yHFhsZemQJnNyyMWfBP%2FRK7R8Umq6M%2F9%2FgzFgaW0cirlW%2FWHn8u&X-Amz-Signature=83218c5d87399d42c060f56ce6e67a01882f6bd2471c33a5144c126b6badbb7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
