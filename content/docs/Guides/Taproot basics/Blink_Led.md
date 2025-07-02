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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ7HU22O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKZwP1fIdmzIaF5fvlSWmGg05XSTLNR%2BBvlHEef0IgwAiEAmUjPc8GpDhjsWwV2IjeQFIvAaaP7scaK2%2B8G%2FRnAHFYqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLEVJch38RwCVrnQyrcA2GEpzwTI83veEZ%2FLw8Hqb6SMYN1PhDsjlmbLS8QsNuappX4dCTRykN0%2Bw0yJVuM69CXEC2a%2BfluFRv9rqV3UQaU%2BaHb4Tf6CoeRyvLkN2fxzA%2BinJFt3DkXjs5xtcOxUxcOqZiRPnrEnfxRpyGBqw92xUji5Ba8yTdQofDOOcAJa5p718lxFLvT8FJQo%2BaVFPsZsy09UK071PzmcH2HzO94hOZM5Q0dOIzaNhQMdaTXG0yJHSMrbROIE2T%2F6wMsc0iEYdNQaMatncxe1AN2Kb6NTfPYnTUG0rfe0GmXWlgmQBxlIyn5RaqQ1VPh6G3x33MA0k2Ql4sTR1RbXsPboln%2FzicoX%2F%2F%2BZhSck5bIh6YpT615htrmTXmACmKBfJxlErtWbFa2GAN%2F7sA3RRQyJjWGy0tGYzl2xczLrGZKqZsdZfthJJ1pShmhQ8iPRx5DWVn%2FLP6MTD0qKSc7Is5EfCRG%2FIgGJXPtQ8HoK6q11REV%2BO%2F00UywjzFvoAyoJFUC6t8vjeQm86rjSPzbc5LIS87QF6eahdx0VHgQYI%2FHg%2FAGfDggNXzru8Jb%2BNvL%2B87zcwTYFRGKI%2BrcC75PZyjssbs%2FWhI3WdyhfOKGprxZIYddXkvsVRlqdILp92RXMMLik8MGOqUBVEVMouFQGgEOmFjYJLcQHhDsLbUNfgZ0LWhBu41lJ4ttsbqjMD7IU3FFddKSAFhd4Nn2eYvxWb6Tmtgs8I8oIfGU8MqiaRfP%2F7BrEfdO5HROK1CH5HNgaFgrO7GSPqmpuw6J4f05eLKk4dystelv86Sv7sT4g9jieRTguQHs8lk8tio7kdikPdtH%2F%2FF6h7XFpJF8hvActWFR4CNiG2DDgjS3AKH4&X-Amz-Signature=0e18094379588eccf52ecde715d1d46994ad797d3ec06f9911091a95a96c9898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRDQAXJQ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACTxHMx4peke3JUtktDeMJ2WWgBrRxFWEwwAV0TWLTjAiEAukJBj9hBbzEJ%2BxoM3ZeFmKyzihyC7FdHSFL7FNmLE34qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFgtS0GLgJM1yuEaSrcA%2FF8xA1cs1f966NF1J0xjeWYn2o1PuZJDCBrWE2ts0rm1OJlbkbzQJ%2Fxbp6oV16RDGK72biLJHM7TAWta%2BHMv0iHiV0iz7%2Fk0yRDibe4ox5NrXTCN7IU1zzxJaAUZ1sxAPyGt8cJ0egRMFkJd39ea0yBOhsfxbVcycWE5wfJK4TUdwU1lARgJ9E3dQj57C32rrOnAsthPM3GuerRJZ%2BA9BFPS9MYhEU45Xv2OAG44y6dA4QYPzkQmifPaX4Ekb9uwvvkKsxCT4tl4JT%2Bq8bQY%2B%2BXxQl%2FgvtL78mYOpBwAjDhSLwL%2BZ%2F5rQ1ZYEQz9RfZuj7bpce7HK7VhsibpYRXGN1lTiDheyPWJ5EbKPrh3665n8pzha27t96eHvqiZavwob%2FH8czYukzmuieveAop5488si2GnviwPyH1hsvy%2FbUMDE0yt1Uod9kuZdc1uvPt9TaM%2F42hK0cIChGiVe18mdNqbDjtJK6WwOJQqdd5XH36D%2BfljmWTzi4dOypTlWloBFb6gqV3wYG%2BeS3fFy425%2BNY7VQefRXfyFjHxoomPX9sg4JDqUskmVStGX8Y9gjvqHYtYHfZ3fG27ulbhw5RYfRZqCETLFRSW15Sigv5CQhCdbU5docLjmARnLqpMLzik8MGOqUB72vkBwc2FZGqUqv4pva5sPRgOt%2BlG6rmu40JtPqmGBsA00szSjkeiUBE9Re7r%2B9gYY9FNV6Wj0d2InqQww1qBrY%2FSxHHGZhKb6%2BWg7HqFi2loUB6Z5hMNUhp%2Bz%2FOTMGqTBEJdgsRxWiny3bvlHHpR44Eaqez9KhY8A%2BtQrMb4nheS0cs6C00lysAk7yP53DX%2BgU%2B%2BtXSKJSs%2FMUyADLooWzIQ1pL&X-Amz-Signature=58902fe22cded0574ad2121d628e840c3dca0f82c4ea8af71d2f6c9bc45fd083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
