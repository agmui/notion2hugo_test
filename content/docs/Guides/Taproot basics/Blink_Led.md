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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UFCRIV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQCPuC4fT7NjIh49L1DsB28PHtUObaH6pNybCprDd%2B1F8wIhAKQ%2BKtLns8orQtT46bHM6klAyQkHW%2Fx6jr6hk7qMQnAjKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7GM3EHhQxHewyuRAq3ANe7OCEHU6TOALa84rIGAYRjFmDaAWLDjR89Cg6h2qvPXe5xkrR97Mqs98EoiFHiD39ajl3Bg3Ezcv60kRt7Mfjvd9fEc4A1qWouAfR16S%2FmgDOdn%2FdjbPX99ibJ2NbwvwG%2F9HX5ATs7Kq9Vvu4%2FEG%2BwnGhRhK%2BNXIlyhF%2Ba1KDVEpUVYyeCfMxhaoKuauI5IWrBPA7pFIU3IKtNUyaNlcv1yC%2B9fIj8ISV%2Bt%2FhFkwkMsDVk9NeV5OMbr%2Fvfw%2FXsqGS6oeFU98c%2BxgElvTvIbDNPvjCQVENTEU6xrRt0Oj3jay5HXXpTdBgfkK7GbqOxL999d3PGdrSsHymuiPh1UGsgNsnf38NVJv1th1MFYRSpsFMoE7nmjyZ4O%2BxiFm%2FWvPI3k5PdHGkfx74LwnIIC%2F1KFko6nE5PaW74RRwLlfVlY0%2F%2BFGpAv2ctvwgIpX%2BdX6OjyOJ9ZKaeg5iUlh646RmcEDAXUQRqXnrFFjqxDr1l9DdVl7JKkAIHA9SOnDlHo08vbZpRn66AcTSS1Bc%2FzWmA%2F2AItTrBi%2Fq%2F%2FGHTqw3DHpCMYKO%2F73M0ZBvtcqkt7cwDo2Vzl2JaBT5D66yi7A%2B8qutYpxWnRsLcO1ivU6891U9Pm5TKlbGMhiVyjCHhLLDBjqkAQW9HQOWynUnxDqysHYMjfR8gJTVWw5V0JZTrGFFzsJMnKAAF2cY7j1aV4zV6V8OOYGes426LA7%2B%2FR12uPqdDYUGP2llbRKQ68inejMd%2BThwwM65lqMIOdZb3Wku5gWC1NCDm3Hc2rrqQJ8cbqexqtQU9hGWYPLAew%2F2zYoL2xFIdeRkb4blxkb8X3sIV59RZKNKcF4hcwXiuZJ7Jilups2ZL6EF&X-Amz-Signature=f630eee5d89d039961fef836c2ca5b7cafe9c8a7a833e1036a2d6fd9d9901b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VNVHPS%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T041957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDa8KTMqcCra5heS0MeCBnGobpV27SMJWroCXjn15KU9AIgWbyyuca1OiHgmyzC8jAYyYwlj%2FLXtzub55sib5kEsmQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9P2YSECojnXel7syrcA8ehdE5ZT%2FXIMpNYVo6U%2FEOPGDm3UbwIMbWJiotAVMd%2FusYUvIkQr5E2qT%2FSZn4vYKbnzyE%2BSeknh4vNkdP30qSYhjXD6Vj%2Ff%2B9q1B2Xh99dRbAdsd8o4BjbvEm7TJOfxFtxsU%2FD1ouL1UuWNjqw97sRBwJCF%2FRRXGM4cbyQ1dR3UExhfQ5W1bpyV6Cy1aWTP538rkn9%2BTahSSsjM%2BNgtA9Z1IuagcVYsb7H%2ByU6KG%2BP1gH7dOCAFem1%2FX5q7wegUigucEDhrp7MHsMqcXrpeFk3FeQADNArBNNGlXojZ34cqubFPY63wIJlItDbzr5KylWhQos%2FpcW%2FtjMsr37Y3aQYL6F0gbI52cRB0ZyM3ZS9Yx9Gg6euwTagk3aZIog9znIBJ5UJd7zg60DRz9t90ODMlHMxHJgYK7MZvRugYQNeup7JzgzfnZT3UILELHAWYW388WpqZ5wX7Sw5KV2PRllEY%2FA%2FoqVGFPzVaFTAGWV0PtsG%2BoDXQYLUa5IP0D6SbYMrDNxKamklO8u%2BnVA41LobIhBPCESSxBKJYR9FcO82kuQA9hd%2B1bFIskJ%2BzxTaYRk2hj8l1MvT0%2FpLzHG7vYXnyAF18u9BrF4VcQgBmabgUkYBMFlvTNkIYpU7MN%2BEssMGOqUB3k5CtIMlIhTBfvF9PAbNNwxp3jP0RUFQpiJXcjugXqQaJF8Dy2d5JUaGWQWJDWwAR4lRGcF7Y7Ez9Wvn3UtfXOAancORCKbOjIrJMR%2BmCz3gnkk6b47rIN6L%2BzslK6dHOwDwn1AacxLtMMxAyJJ8asmWgAQGR%2Fp0xb%2BlMN2FxbPrj2SU13nhD%2BjDoFaUfLCs5WLnHWJ0875gcj2lDXVlyIvqYY0C&X-Amz-Signature=5ee2f999662e720381a8c4ca665c7e7b549d7ccc005a4271434a4ffec0abb38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
