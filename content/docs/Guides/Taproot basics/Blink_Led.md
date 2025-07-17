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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T77IXTT6%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQDtMovwfmULrR%2BI4IENtYU%2FKN4BgB3yevq8PhASjzLMYgIgaIvV47PsOKKTHIq7LaOJj9%2Bx8kcA1O%2Bm9KX7lAYUvd8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLCTWpVR85LMkuzpoircA7xCFOQkS6qq7HkBJ5h9ddcXHtGuX%2BKBftOVeVvqKbXmSRrrOWBoNp%2F6XNda6hSlf5r1lnemfrFnsw2rjJsBxDbGLBo67JKtXS4TavPKpFN8qji2MEofRBJWeC%2F9uLX1Sl1lmn9F3WqN8bUa24AnZBuFuS331rAs0PHJHR3r49F%2ByllgK9qdcdwIU6OAn%2Fz09d%2BrVWv7gtmQ7icezaYOz5JPMMJUTBEG4XV0ZvzE3b7WfywBXy7L3GhMt50gRfpfT%2Bnj%2FkvIZi9yAVn2CyTkP8nR5evzzRH%2FMlg%2B2SrSpOvYMvm1GXQ1S895CkWQ5KXBKvK4YL74m57SDmJzar6qHdxqUxc4IT3kXoKw9ZWmD7M1FrErRSDhy2Xyrpt9PDAVwCLv5A%2BHf5J7eUuujoNw4ItPyLYtl6Znt%2BdXBeyskVtl4tWeCpX3XBNiKyWkKf28sRPw04oAuGG1a2JObsCEB5oiR5Y9%2FaEJ41qPGSSjFcbFLOUmGyE8RUpTb8J4ElIpQG6tLt65OMDrJ3xwR7CIp0ACZ5YZb2Xrt1IN68fMnq5qEK11RvkKQ5oQ9fgGVCNpcQyxUsFveyS1B%2F1LiwibnMIRGUESGrWO8sJC0EQenyup9QkGJiaZLdwy0uaoMKuW4sMGOqUBVOvZRhfCSN1vFznZ0YFRvbLE7uHkZsvsfQpti0rOglydTFyJzr35ZwOZMcKKQXCqsnUCKUcphU3nP2nY600XvStgzPRgcBvAhpG24YuxmZi9wGokHkrduNKZi9NvVPv7WJ1RW1kMVl%2BoG1IdwAJ1lp06Yznsx%2F6Z65mAUcjzTR0VFtgKCCvYZmXbrqnbLulxCXiKDCIqRwAySGp7IrN%2B5qyTF572&X-Amz-Signature=6d2f392f4259d5e40f5585d43ba80454174aa789c07f8a2babd1b0448849558e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5M4J42Y%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIFK6bIUfN1pQhtgX1%2FiET5TUeUymPiPuse6pgkVKFJkPAiEA6r8jtQurVLtFYhQpfvSDs2v%2BhiGLLl7zQpellL1ZWZIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDBSP%2FYuN%2BmyvZr9sGCrcA92qqEI1yQx5ev%2BbbDc63rsDn0KuLkfB%2FEOP1y6BZ7ZSG7YyyQlEn5gHq04iqgTZ6Z6yApnjBloN9RlnoLEBiZKEBkvUdSyZ%2FYZOs%2FMF0CRbFz1VZShfXMWJA4W3gaRK3CjbhEw%2FgnO4TGFYNv9G5lWPcuwpCxupSdnLD3UFNXpljVjWgPaA0LSlgI53AvLXu%2FNOmy8%2Bna0u3Su3Q%2B86EVGIp2ZltQLR%2BiYlv81EEXGNKGPOfWDYGl7oJ29ET7P7UABTCGfLqXmLAm5T%2B2eI2Za9DNTzNYeBtCLyPb90vb%2BY%2FRC4KSA3DuUm7FyfVSzXs83AyibPH8JjC9TD8ROkBwhy4jl1KN1XlspiH6SVD6Pdg7nPMTdD6wiE3mtfQ0SSE59FGT8jE60tgNbVYZhqUJwA20YDdr3%2FijD84Li003IDPRSd5wDFq6Bz75N8RkwSmuJ5AkUniUe2vryCEpE%2B0FAZZL%2FFMSfVDN96kHt6pCF6XgZGJGHNOJYVoypt1N6crkS7Rjp%2Fnhv0XRc2L8wuPVSPo3YcWC3y59lRnBlXBsgioGFEKPu9QD8h43Rs%2F8gYAhEZFisWi02fYlkiXhRY%2Fil8Cl%2FHOpio6%2B92Xqchi6BKbtzr82qidDaWVT2XMKmW4sMGOqUBi8LTgltWP2J9lhFLSVs7T9BbXIrjketCLhSZKQtqWzaUfgF%2F81Q9rxb1f8eF51%2FQRNcquukSp56sQijS1XBxvxxNEnsqhQ95E9hxSdp1muLoK%2FYN6v%2Bkw5K2IqFjSIi9KF8PEVMnSCBXulBcKYWrnJTSRzNUrRxN6lXOtHB1xSNNOS7%2B2lK7nsXeJWHtcV33iL1UXaoKcw%2F%2FKWFf5Q%2FiW06j%2BaIw&X-Amz-Signature=488d82006f02cdf6200886bf805864a985edd6ee707194a186d1741ace1c244c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
