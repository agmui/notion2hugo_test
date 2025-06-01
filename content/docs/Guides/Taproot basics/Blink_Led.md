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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V6D6MG4%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQC4WDvfI86%2B6nUq8a7hbS8pOvZ%2BFIVjK8rUbae7FRU8iwIgFcFKX96MeTfh51boj74AOaJz%2B2pkijEADve9BB9hrT8qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmbhNsYAYBm%2F6L4vyrcA9vv5JN1oo8s3oBVohUIKLV0y%2Fzs05Ms5b0Q5GG8o7Ppfwq5tulCGF1ti7KK6cdtvSSxIe%2B3qs1iNov%2FyVaHgO2KMN%2BUFTaYvcv4BAbT7bxuFH5fwdVaFkT8K4JojwMa4SJUbkg5oEYj0m8tsDDJRx8urTICRgd2o%2FoaP4%2FxIHEpS1TuqzMI9OAOIKecrUau2KQfBLLZ3hy1%2FLtqfsX2wCK%2FVeM9v4%2BbA%2F1VcQ1aRIWKO1ZDFHoEi2YyPkfV7gfetnyXGShkDNl66mZFtU9eXiTO7gdO%2BRBYLpr6wVO7NnurxBOFgRRbfu88KSbL0kMasRetk12var6dDIEje%2FPVDUHchw7F%2FTJ94%2FluSSH8iajGLSMDyXEcKxB2GsDiI2toxnXtOQbjPguJ%2FYT3HF2S62Tdu7SZQpKBj7kfK2SxQeFCjptuMWdWo7jXoBQ5oFavP5ngEcBcW8FlZZdwSgTvwLnzow1P3SBeATR4njiV8IrN2c8Qi8VSJiYk8EWBGekk7v9fd3TkFHhA1drXnrXeMc8oN3WT8cGF2L0MjtllPv8FzL66%2Br8XbMS5cweVUV7xVGlyC1nVIJPDY8MLP9sMsO6NF6x4m38%2B%2B%2BGl%2FQ61Nha7Dw5QlLhoPxZq%2Bn%2BRMPrP78EGOqUBanONFZ9ZznWDAuaOy%2BRpQPg4uJTLH64FpyGP6rSXUZhFGKhaKNiA2VQp%2FU1%2BttwNiHTLV%2FkHzx%2FVVEE%2B9S8%2FtVyTZ%2FqgscPWllFKqwM6%2F%2FOWT6L0rJB1p2H9WWxY1dKM5j6%2Bf89%2FNFW0L8j3mvev11FhT%2FhLRWbs9qXwfDxQPjkTR0KEkT0SZ4msHOUw2Yx12j%2B2blfRIdF5ZDSfOU0Jn1UJRBho&X-Amz-Signature=ad1a1e1e32717f2a03da11a7eed6bc542c3ede15c94489a012540843cee4cbcc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV2GFVYR%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQDrZFkUAv9YGZj8S9ukzZIelsYlFdXPU4MVX7hQbEkwwgIhALSGMCbiNNgzVxh7nVn6h4oZ6o3V5QWibax7jYuVUTLCKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzT%2BxPYDQsPGwt5lUkq3AO8Mmz78gzbSqbyN94wLXMbEzKpNnT7H2YD2GzGjXDRp3j94YSXFZLir%2BH2mIRm4m80VEylMNcYCIFpp5PapX0wn5I1b%2Fift%2BEAWhe%2Fat%2FmuakiNJ%2B%2FIuw1HJvLeuCb30WnIY5kcVT6IuuI4%2F4O34IRTs6igwl%2BDg4C5RN6B19FccMN8uw1nqRC7fGVftSGvy%2F9%2FwKNTR9BtCbDJ3ltJO22bghwhG2CN02T0S8zQuYpYV4M3DqSjXGsn9jm5c5aSBlJWF9TKfd3KxjRu%2BChVWF%2FN0vQqYsvlcVvayKV18FD3yR6RQqCM6SFI8pCIlI1onPz9Idi4Se5iCdxiXM%2BdCr%2BCnufy4CkwjCFNiC%2FBiMCGT%2BkjTELSSPgVL3%2B4KYluOzsT5NN43TYE6ev9N4DlDrcSOF2N72Z78HpOia7fAhls1uQzqzsPlO7pY6sffI5eC6vd3DbkuJcjAyThJZyjk9g6KaUWo6kR7xUXskc2AT%2BRfrcAa%2BLLgssxtQ3afJIZRJcVxc68T0OV%2FoaH33ghLLZDNoN5q12unrPM9jHaqvmSlDH5FOl0l%2BE8pM36RFIVnC%2FFFFCbGYVjNxVtqVbyFQeDIeBxdVHylgY4SIA5snX46zh7JG2spAW7YTrEDCo2u%2FBBjqkAV1P6I3L%2Fo890qqJO986sqXiRPcpgbdaGQ9G2LqZnDSgBhxV6AxzlPq1qBYd0cJ2vzGYsGdYJEibAFMSU4225GSmpRI6DXf4eiry1WLot1xzzf6UPe%2BnVoSYJdLdXcucEhNK%2BRSbTmoXdo1BD4f4%2FZ%2Fj1eTAHzRIkNsy%2BwApBf26bMM8oTPc%2FG4YCOTy1kewC4FXpUWhu6fdX7zdoVVe3zYVoB5w&X-Amz-Signature=1855dc52119dcb872203f34b97bced6d042d5e963f2ae293f3540b4c00adca55&X-Amz-SignedHeaders=host&x-id=GetObject)

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
