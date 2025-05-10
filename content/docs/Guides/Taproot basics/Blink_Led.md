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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HAF2HPY%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtljqV0j4CBqFBfvntqRsdkzfPdh580PYXa7jJSmBQnwIgKcecsKam2493NVQFPtVQGOEHKx%2FfJK9JkCB2awL%2BGVgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOYJy8Cmin5iQSKVbircA35ywbZAVabUDxemScNoNPK0g8HyDhSG8sDE4IxgOVPhp8bnLzIkp0DkwoddGR%2F5HraJ7YlMLMoQcZfebWGPR1DihKquciNYvtOgxgfvhNKt5HPeBpS9jdS3PGkE6sZEenMnUzMx4XOJeITKh69WMWaLoxeulrxpmhFpj13vFZS7cuZtNBTqnhpshbPNqhluKn1fCAZDDRVtB1Ydd0FfYqaeonfdIcFVHadXJA%2BNr6%2BRCpPyS4EJmvGgfoQ%2BhzIKqmGnQUnwbyW3y%2B4TgkZDyPVqEVq99q4Tuwi4EFpK1pnUtI0WX3uUd%2BiRIy8q0Q4kznzKHiULTvnAbUZTMMMWoL8LaIM1XMOYjtnCLOOYcbgUQtC8KmZovQHCMsrW%2F2iAj4SHF1PtOqIlsHnmYnXXmKwSNu9UJIGnVpiACxucanlE5ocoo1gGR%2B20wInEJmgy9u2dAcT2NWb73e3FVv6B2K8FOgO%2BuUAzo3XHTM9%2BwsUYN8G8IXu%2FVAYW%2BKNX9jfCdlCKAeP8bVF63iU9mQ9%2BdWxt0jybqFO1tVjE0E2%2BrUhDULGVE5YcghzSUJZTZ3O6dMPnZyaCnMYvSUHT730b%2BzapnPNYCRpDdCUQkFO1ktdop%2BTIlgzwcfDPdd7uMNOP%2FMAGOqUB9%2F3WCUfJPg9ANAq5AWlFoKcOv9j0S%2Fg9cqVfJiMt5Motw6Ujq6d1xSaiGlguIIxyTE3WatYjgSUD4v0hwkiCfsBuDGPsFx3vcIwNhs8t2H0kQybihwlcmyD4kjEXeAe%2FUNRxq%2FjtYTQp8dNvpwBV9woUKsq1LWj%2BmbX02wgadNcx2lbmkov92OIcfdXj8FvdeXrBdiUywB1HYPgCWZ07Yfc%2FbU5J&X-Amz-Signature=35977c45c7143d3794586fc30379fa5e47dba3c2bb591821cf3cdf7344d6b4c2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IMCFKP5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuruc%2B3h4534upiiNZlR%2FyBf1ZKihD%2FInoxp1l4xv2sQIgJnq77GDNvy8t9T87h5ZZzrKs3rE3fs25GjY1MevzeUkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOg7Jl9J1K4Tr2IrRCrcAywW7t4hLLJtkaOI0z5wlRcS2o0mECRO35Tel6fU8VW4g8f10yKAksWOe0%2BNw%2BGa0tdK3otf7iYm9IMRZg7ScI53Y3p2LBczYGI9vFvDQKXqaoVLVgD6EIg1cynmqDXoi1DGBm4Jz83AH8v99%2Fv8M%2BTXQQDqCy%2Ff5p6HqnOneN3SnHaJoj%2BNbcEdqCCXCfOmcOzqAAJZzCQD28oCDBfMQ63E0BXWrzgdXFsxZu5olm73Ag62tyAGdWRduxHJ8aJVD9m%2FBVE9eIIarXG2EDcfLTzOdnQzQYWtaf6DfJ2bdw3C7arEYI%2FPhu%2Fx6jWBpksx4gMCMsh9%2B%2FBrRA5lV10GR9oWtyeFi%2BMbFmF8VEauqEiE9%2F0oFxXu9SGjcJMh8temKZ%2BKFAQiV3XDm3%2FHeGtXp4r7JksdmdV1nPCWmDbqw2dvQy2sLnA%2F6b2ksqbsdMMGhAcWXLaGpPW4WSrj%2B%2FTSR89HQ55%2FTtAn1zS2DtS3%2Flx2%2B0Ft6Zk5UAyEzJz1IoI5h8kJIf5AbYq%2FxfQq%2BXwxArm8BRXiRNVcE5Ju2OF3F5iLj9Q%2B%2B5SB9QR%2Fph0D6yw9vKqBYbtLSnGVUH7mvm3hb%2BKb7ULhJJOj5Q0udYwnxasjh6HnnxilAkXPNxd3MNuP%2FMAGOqUBphJimOcPlXtRg2G4Jx7i1iw%2BAdtw9t%2FzO16DqIPK3oXWIj%2Bg3L2C5xVMA%2FfEc0FWsttytZ%2B0EMAgtqpdDwCPzJXBU20okvCnH4DwD2TQb0V9USFEcn8S%2FM56Nx%2BTnLwsNNebJ5C6iB7J5KuH91ywkcwZwR9prQZwblPYInHLJOIB3bWxjocoTQBVZrQXTzZYH%2BZ34cNqhcHReZ8%2FA%2F54xsBTxPgm&X-Amz-Signature=a6405ddefa88066c716240bd35ce742f80ef02acdd4fa692bc0737c4dbb57df5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
