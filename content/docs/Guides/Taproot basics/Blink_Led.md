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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3RP4JDV%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFRQm23qaDEo1MqRMcfjo0ZvJkMc48kcNkcTJ5OZZiUWAiAM3tTKSiFxJYVYBAQ4yfecwJwppqjp7cjE6QNMJnzEvSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMCfrStE%2BziiPqm6KaKtwDJnAVE2E29X45J7BBSZlJose5PbNgtFKBVsMK6y3ubVU6mG3k2JovhMhT3hEI9DkJ6M7f%2F0aUMn1uOx0avZv8hOP90a2RUrFxTpirI3WB5VbbQGo2hFuLAWRnnOhysjm41dlQqQCsqZMpUUrmQcKI2p5oRCKQOxIk7UVw7Y8vQDScp6jvRl%2FwNUIy48W4kXAx0HCdnjstfSIuvIkA8ky3SWzhmL%2Fl8dSt3kqCN%2BTZ%2FzFYrXMKsJ2A%2B2Ru%2FwElvbiQ5C7BjfSaqYNLKDJGA4wrlGXiwezegj8XctZnLw3i3LoEpmiyLC4daamAIy8o3F%2BZ3gqR2zb7%2FSUbyNhESvl7Y3rsrJD3yJvmvlaJ6BM3IiISgIlAQ3Nab3EPrUbLGx7uFEeaJtRgYik9r3tbzGwukO9iNT1Dqovb9Ridp3y5Sl%2BJshDGRcPE%2FWpv1jGHgmHimTZg7teQ5vQoxRe0vgYulelHRk%2F4oRIg37inAXDF07T7sx4dqQx3pPsOON%2FcblBoNyOoyclxNBId1Mby4dlHwMzJMQ%2B1ZW9A3hJT2sfU4PdbKPl0MJaAKhLDxZ%2Bwhi5cI0bE6WOw%2FqV5k2nzJOdcXF2%2FBooYxYcv%2FahfcLBWSyAUG1Av47ZdpVHPEhkwmOTyvwY6pgHATp%2BmKF3AgsNC3fjE2oF04rBlc9pBHIbxMb1agR6nkanvpjm0bs20z0VamcxzOCEp7A53zLxQeGx3fzEcY8XTKW8NfeYFeTAhs9%2FPiTOa7EyZddGD5Dhe%2FqWaXNoO6RgL9izEibuAeI%2Bap0Btnt%2FGTR4M3iYuf9W0V0pH5CEhGaJZBr1vk8El2jEFPuITBQV3KPgTfF5XCfzmZmolkMeyEFuY1uRJ&X-Amz-Signature=bb11ee1f30d4153d1c0037fb98e1806eaab7e8503c08c010794d6c70ae09b239&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJZSYK3%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcauciALkSRut2W13P%2BQerXsE%2F8vVBenueBjlmd74DUwIhANFLV249nXzeODtmrewJyIyfguxQB7PLMIVACh41kKF5Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw39RFb4H0GfbNoGygq3AM8dWDqA6Fg2iD%2B28x%2FqCg7eAQG5%2BWDFwHGC5M%2FX5iFKqL2mbKNofntwGwGKGVYdSjc0%2BCF0v1El69C4yQleEg62agIvRpmNq7ImtLGH0kVZgiqT9ojt4ao7bUj1gNbusin4SrXlV1SP6uj57hc88qjp%2Bv02bhtqElX3Ltd3GAFpyLLb%2B%2FgIJVu%2FdMaSD4ZRgxfpjNfgzzIIt9Lf5fpTypPHBB620b78fXJ2Jkrkkewin0ka0N1BNsYawzdANKEWzCsrGai%2B8bx7kPWxuySGCOuOIAelI4wppxhCfJsPAOWFlbo1St7uBe%2BTqQ5MCUhDOMG%2BSNt%2BmP9wDZkWJVj7SY8%2BFsnza346YuTxv6LeHyBt%2BimowF9QjaG5fLOU0pJfKmj%2BQL5tPwsdzjOZby73G%2BMV0n%2FbTKd1fvkVKbJEmUufS71VuQd8ZUWMHy%2B8KdNWohIUpNAPtMWvsAl8KRr55z7lCv2FTRx6yq6jkstUZRcc8FhATdh5XJKCp9cBBFnHzUxAQC%2B2TlPxmXHlEMictyr9nhF8t2LNWUAtJKPg91XQV6LcBrzBo8DqPz7XiVx1nF44C1iPpv%2BV55FiBuL5WQXB1JPPd%2BRsdUuagndZf%2BK65eBYf0Rq39Z3eiaGDD54%2FK%2FBjqkAQG0E4W40C%2Bbk9v4jQhHhnD6I92LuL9J8U3KKumUb2TeU6EhA6DGtgiLMPNEHpiYJPW7%2FzlEyiP%2FsDRXmZitQw8jJloC9fFYidyn1zX7pIJ0clQtgfoqN8teAEpwV8JiAaXDTlWPLz1raOxC6Plvpf8rQeERvL13hYlh6zYzxgkueutTi9T1xhrdNGgIICnVQ2xzS2CMeSrAH67Dn0LNZxEm83tV&X-Amz-Signature=1662cd411c6919de1138027be71ad3cddca9dcda949198a322d3eda215c0cd0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
