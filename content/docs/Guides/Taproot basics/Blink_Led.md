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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVB7PGWL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCPBRshy%2FomgFk63LHA7OmyiBFPB7F2rB6jcALiAi9USgIhALlxqm6jPL%2Fa0ZHD3%2BMQCU1PAxHr0pGbkFLWNZve7Ug8KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlo0Zc5p81UJLaIlkq3AOvirWKxGSsn9Idr6RQSHUhpjP%2FwPqqtL3uoR2k1w33I5%2BTQ0ckObqmiqIv63oy7FmRiMZMA6oju82BhoFKdi%2BKJPg%2BKcszspcVTFOJllA%2Bm53gvCvY9yrctoT5%2Bv7AdTRdjMjrPyvl8FoglGD8ynDO6Yx8%2BlAXgvbnkkPRab0MpMdDbxT6FAoSBEhS1CfOnkSZIalTdfkrxZxA%2BZ%2Bg9a3HoI2bSa80RadkEboBe0%2BCIP2QV%2BnTnPooi8iC1Jw81Rt5DE8kmKRkks7sGJ%2F9c0AvP6sHzjrNzl9h%2Bdkv0Brw67E6hL5rcgnOUBvAjC8G7Et5r6XnD07fmPdWPZNX6Q57sYtryw3jlrtBuwjinELcO6sQjHWSF91oeba41zwTlFjMpv7hy5SKN67dE7P0MjaawMiy225iYKgYW08uQ9OohWlRC9keRhQwzc3sqNNLEtaARechvYSTB1iYXOxTLc86Oz%2FgQdFNtDxW%2BQk3vNpl5kg0%2FgSF0Bn0RpmHW3hKQELoehB4hv5gzgjJi0BaZQAOPLKTCQ2xG7ChKMav8T2%2BAPUgPAIC9F%2Fzqy%2FZ5cHONkVvbSuikJ%2BNIh1FeTmukcZOMbn1sOc3chg12usaez1Fvkdx915vxryXmPP3bzDNw%2BK%2FBjqkAWjQSMdtCTFUjl3qiC%2FRZd45yCxkpmS9iCoIiNGcNSmerESdMaDJTU1OZfSKvlM6hsMQF9oK5yzVtjvTFgoMiT5tOENJ3wcDECBZCgQBuWz69tA1R%2FQVR8J5SbnDDTZeuZ2eqY1e1xk%2B9Uk5Xz%2FUt6bXSVUSAmWFA27YHjNmKTy2xpliFQKuohA1stgTzfK9fL%2FGGzXAOnAFI5agkOvudfAnpTNp&X-Amz-Signature=bd3aee081776152b548c8ad11c3da6f66a38a674d98be6032689bfb857b8da2d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTJMM6KL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQC%2BmNsLQ0lIG%2BrED3WqEDV3L4WS99vVcTAu8z6ZaEcrVgIgQuLtd5qNq8dZZ6T6ahiiYXbOFYh1AxJhX6AtipR2EJAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrAXYOAz%2FTRFaia3CrcA10K%2BjuVybtApPZt8WmpE%2BjmsPZ7GAuv0heyOO2xNPBg%2B4lyH6xEy9Tv7Fy5k3KdI8iFOiOQyONPtXZKh%2FW%2FL1Oo3vqX2vVOChkGR4aJf9jUtt0pIMH7Uf2XBGlp4Y46NGHBwxsRM7hsJ85fd5Ga%2BwsEF6wRK5ymRdI2vdqUAWg0dd2GBmDX9SiUJYAp1E73d3MMG5a3VJqREulPm4NT%2BzJEw2XodhZoZc7rm%2BWXHmR5Npvgydp4mm3lyaRvXvdNVUvsoVWPmrKTiVfNcmNfYVbYsL%2BglX7Y6AX4BgeQuVUoxai0VK%2FMpWHVMxG1t8LTyTAi0Ta89MEQKz07Nq8fhwxmUT2urXdPnI4BYBy9hGeTfHPpj%2BrXXeHsO07Zy488G5KvnucvyRODGK3hxE7O6ObzTaw8TziJM5sA%2F8XGnyBty0r%2FIJobzR51C1aH%2BghxozVB%2BBws6BR%2B70ZqExsoYFzUksskX5OpPYEG00eCg6zjT5%2FeH7dXBZBYEGfXNBY%2BC8HBD3z9%2FlvB2QTnGvrAj3owX4Q0BlYcrX8ndKAUMNWLjPL1U5I5cvFN1w3BTRiHO1jamwxLhqL7LNlUlQrcf4qe53DM1hEwRWr9E5ej5JBDhZ2Wk9hFE9%2FiV2lBMJDE4r8GOqUB5FKnGx0qhJUQHPcq2vK2clL6Bt7DKuZ%2FqYwG1zxzKKPL%2FHAIuXPxNoqWPZEcjET0pQJy8FnQY5O0dGVkG1fenWz3f2%2F1SyYlL4cr7qZ6qAg9xzOdiPbbj03LMYXEmMvLcGegObdjjl9wEEx1xj0y1jcsfLVIafi8ZHtqHU%2BkzAgLhlw%2BuKDNKuec2V3E26njgmhpTi5xiWmWhDbA0T1qJUG2HdQw&X-Amz-Signature=d0090c1f7942190a9d010b7aa21fee48e12cf799ea5433f01462daf07d29c8af&X-Amz-SignedHeaders=host&x-id=GetObject)

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
