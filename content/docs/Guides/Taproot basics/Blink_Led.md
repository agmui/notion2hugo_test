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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665U53PYRT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC1M79BNkkuJ2EI7PInlJ%2F1fbAYYjF4uXdcU0PlopI4swIga6dmlO8bSjHZbLVyDMF%2BBzl0zEH9%2BBhX7qohuQionqEqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjjMnxXk7qWcxI2BCrcA6D0eJqO0JmhUDAg0xW8Q0WmXLDOMP9Tjxz2AayRTI5AMTUyNi4OIxDaxo4iE%2F1wA02oWr5RXBD%2BqG3%2BcAggh0vRpij1dbeeixEwk32iS%2Fny3yD93NdsQ4KPbNlIYH6489R4tq%2FBrLpe2gCpNsSZqvyH5AMXZscdmcS9AtKqaSpYrA5mDfgS%2Fnv3nr%2BxsoCz5s0oPxdGQORMOaI%2FY7uiXU4C2gLxqMWUSERt8OdxQy%2BpQzZp5q0RW8VzNhzwMYIZ1IYOE7A8ir0GMJJ1zEaWZd8JevfTsV0IVVtIm8hkvBhWMi7EplWdsZBciQBOXB0IWwxaptvhvLBxcYUde8MUleJpLvQxZd6z52QcIoSlcROGvlutjzMRL0nqCTV9Y4qX3C874U4Hodbby8cqg0jRLH53QokAm8jbtgvG8y3WRGuQWjR8F%2F72DknoDgllIIUbls7x4MMk7WUcsftcBG14K0o5M%2FSLennh6mROTnV%2FKHj7azwuO6YL9cBU1TZbCVoxS3nFQW8ku3bflkzL0%2B5zI3fDT34R4TijXHmBoTj1kYN1b5pxqfxIrL3%2FJ1ryZD8VTEQXTzWUJ5VM9LfEP0hRKyhQE6FNnie7KIoGD0V9OmkzgrSopVGE9FyHRUGnMI3sh8EGOqUBrilZical4stt7QXhIuFZ4hEckplzLNQ%2FAep3bkJEMhvi%2FTAft7%2BtS4SAPOz%2BrDnUk9b8pDmUELO%2F2bQsd4kGDg6aah56gWzTVZcyBAu6c11WbhB3E1d75PB7J5KcIICyFA1PG8xG6K4bIXU8anBQjMwNYPiw76ivzduUeEfJ%2FVRK6rio43bMuGFsQAVf0ApqD2JgBkw4M9mRj6wZX202QFpWuVST&X-Amz-Signature=b8b1f906921843dbbb8b401b64f1f8916c77a831e45386b68b74f918af2d6e36&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX3WAEES%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC6ApjTUlCVb3kjNMRVb8EsUGD4gO2mRc3JNooZxPFCJQIgAnU8UQwDFVG9gxgIreOulxT7AlOQW4sbfzXb1cITshMqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFCGGwUOFoYPvpkvyrcA1yq9KriPRJ4OkYXLaQwHKFB6r3XWztdnLRbmeveSv5jjl3ktWdhAyTfy5pqqxecz182RVYrZwNsLhw4Xm%2FbyhVlBz1PnCEX2US%2BGk933LEB68URoaDgk%2B6qBO7laDBLiqAo6sHfvvu7YPIvAvVUjDPKWsSm0pVGwDqEoo8XENy4b6tEoGHOUg5T5UW1DOjMNY%2F748rPKpmDEDMbW1AC1AWome64Gh%2Bo7TkqPJuqZudMCHyT7l0G9xaTisdWV5w2E1VxZy%2FELphNYErXMkgx89Fqu2GGPcOXJUNEoM5L9S9NDwAKYmEZ2HqgfgljtfI%2BARvT05SFPz8JNH%2B4s7yIwwcY146KoEvIhwWYhJ6j%2Fni2zMEIU2ZmhGStXKttUUSx9QaOo9yfRLiEqfDSAmIRKN1Rc40G%2FaqrthlafdnF1%2BGs228TBORa%2FNH%2FoitCtH8UHosQo0B7q6ISYlRfwVgym83DS%2Fr8297tAZxA9YmtRc98SQTIqA4TInRtgjW3mkw3zScFGKkQ4rqZlaQzbudtRNXm2fflpDoBTS8AXqiDUr1XX%2BNqjtgkAq1y%2Fmd0jxHTDh6k8s5oga8ynmx04nGfQ6YRXHybVKNqHZ9IuXkH3M0T4xLd3WP66Dl8kkqiMLDsh8EGOqUBGGya%2Fc6POEDIOLNwtMWm%2F3bHoYLYTFU%2FScFOv9eiPS%2B%2FaniaNM5roufkrM1S3jebuwbpTr%2FK2R6CAsYQrnPO4q94Wmv%2FVwD%2F0ZsGrohWyAlhzj%2F7mRzHKKr1Zg62JqLEobRFlaf7vq2Ewfv5uwBEM7rym3amLHh01wzG%2BSU9OlBKbcXWfx%2F6X8NgXfuUNFpSHG3jskEVEBt8fUH27SBUB2XHnTeu&X-Amz-Signature=c9a2b3baadb19a10643e00decaa8ba5a8401d56005b287642e96ef5e1ffd96f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
