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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTAFJI5N%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID90xjov0Om%2Fn6Df06walpCI67GVvNchZ6%2FR%2FDbgrqM3AiEA0eMREsyeFw1JWM1roKftToWjuL6utFHyfRWwitH9kDQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFryLQ%2Bx4Uu0D4BTjircA%2FMTh%2FrgHlJP1%2B4g4mgATNuq21fujcs%2B%2FTt%2FsvhoXTgJQ%2BZQz9qTdw%2FSBPm3ByErIsCIJUGGvAQgbWaFJra%2B%2FISfV04Q9mkqAKwh1wQhoPxZfio98Y8N%2BsdapMddafo4XjV9EtJAqj0yqtqaDlqA0kNAd9tv9M9U4YqGWio%2BkRaFqHtapxAocqxQvcQytOf5TGGEeQ%2F0MdwGiYO4O9ARusNbDd46OiA4SfaSG6PHdO7vbcL47PXHeWFsIEP%2F%2BpbrX3Qa2AfpoVKlK%2FuSljiBSkfxa9DJIBRoI%2FQf%2FhXFLdzRMXiWvhio3dVfQi5Z0ExT8y2jW49sK%2FMacXiPboNXOmbzsA0ISofzx7VRBgvz%2Fyk39C9D2x6JurMqnvBpuqK3jMw967SVDIGLmaO1xJRR03OCG%2BGv7lAzaJRB8BjD2Kt627OBZvOcSAUxyFqONSzKtWOIFl7EtJ1sneVAbCBQZaYPQJdtyxEf2S6KMwI9epfKX0MjyQX44I1Og66oBsvckX1N392NmdpsCHa9Oxaax18DJtG1HU8cdpBfC5vYb%2B6L0%2Fp%2Fmd2XMgrpiElT87UYhrGX3lExFUC6jXQ8sR6OUTUXGdJFCpFAUIaBUx0TX8XWorn4YsZanDIpEQbpMNuYi8AGOqUB%2FhUi2FlQq4RJMi32tsU2z2IZU8tb9Kr%2FswunWUrl967ExEhDn5Y0XuNUgOWw1dIzB1%2BsJLQ3IjL7sCnSFjBl%2BG7hR4Esbn4txn0CaMywiciaQ0hKr5UAG2%2BOiK3zLu5sgrRUfzxB7lHNqOoNNxNOqBbB%2FpmxydLecCu6%2F%2F4tCWXDyx16P5DDcquyF6WKq%2BLIWpvTg7Kqu4MHzAIxDxAGj1Q6Sfko&X-Amz-Signature=792e9018f092ad11ae09627b7cde061e473b29f9566989dce55b50d816726a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBSUE64L%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T220748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpw7P4SxtztLF4Qa%2F%2F3VIE4F08E8%2FUghy6ZgZB64V1KwIhAIM31dmyFN90U090QVtcwjR5WxVgkRzIVHEkhx3DjT%2BfKv8DCH8QABoMNjM3NDIzMTgzODA1IgxyU0RioA4l07Gjl8Iq3AMlRB5ZP0uUWAkwOZLMkDk%2F9TQNVCMpyuq1SRlUtHqGHG92mRkNuZOrS8wvHc7yVcFAffBohUwLhtJkC1BX5vY4I7WPXWSbTbyfpimn%2BspZnlN%2BOosbKqeJx1dMUGvKbjL3EpMBrEj%2FHHlCQhco9sx2EdHe254JISz9pzgRvoVkw%2FNtaXJWhznjK1W76EDk2YR5sULc8UpwUtMyHKDNUWaAUA8mxDpKB3fvO579RLJS9vbEHgbr38l2ZiYuDV%2F%2Bb%2FU8D%2BbZCqJj02g85bUPo%2FZdjnJb0hiO2PVNwt7BXQy8k4S3ESJumxISTOTrlcuaNGkqu28IP%2BqKXhNrC%2FD0MRS5lKMrrn5Gi%2FWKz9vIemNgAan3rwzPRm%2B7GNBosniGAuwASFnMzq4UiofEuBPBv%2BiGw7pHNhYr7cVIhxSfsxAI8x5ebOz7HfxsRou1HS1quKyIAk57bxk%2F3FX%2BHFomRu2kn1IyJHrnS%2FP%2BA5ArxZ3zYSpLNKvnwNeOTo3n4emxFa2jUu1%2B6rHHjKuysfs8vQw71dXvqGPP4jKnZdppwLez7%2BNZbiWnJ6EPvKi0UKp7pdRfnwN7ixmoG8B3HTruF3H1hI8hrbxMCLdA5mfJi4buA4jTjlvIFV5EjKb2hjDFmIvABjqkAV6NaTdqDywjjDxXRKQYR5u5TM7VTjfWkAN6ORr7OMsleHiREFhFv5BSBBDUU9YSMZUSejhBlAA0MiaMjf%2BEXnvR5VCHkuEat0LfsWtGcR%2F0oesCAKmKVc0ou0LtsFN%2BQUcYxArmUlbcoyebK%2BRqj7N4s%2BROQuHiwvcxV%2Bra7mWMklD%2BYcEwbfof7s4eD5tc7f8yVjgqSSSfWbihKfOCMKTaYcuy&X-Amz-Signature=550ac88153f3615e339236317c8bd6b3c8d4f3773cce4280ca8517a4bcab9dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
