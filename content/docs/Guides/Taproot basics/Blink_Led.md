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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WAWFUG%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkFKlX2bCAjxZ2r2DQOLvdnIHjjNtVglUwCG%2F7c3tMJwIgOPCkB6rxFWPHLYh9E7PmPkWV945hggZBceVWeYXO6xAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsaKobjxQGJhDB4mSrcA%2B7VemE5iT8jzV6H1UO2u57LA968OCX71tskmc6sGoeA64dyZ4kTevq6GzNjyFfMBBGy40C1ZRYUokE%2BaegY4S%2BxNdzKReu%2BSJQbQDaBLY%2BctiIJa5WALJHoRmymp%2FPfI12tn7f%2BhyrCKmWyWi6ne2iElItCNQO34Z%2FA4RdAEm%2FgtiTx6POKmAsnr3cIN1LQucGHL669%2FH49fs5qXJ0aD%2BOscU3%2FtuvuterG6kUs8s49skHSA7iilaN57RkaVGU0NO2%2BWEy5I2oWICZ%2FPwzlBbTFsIIv2yREu0bufyJkqBgF6jsZkoskVB3LAqYgjuShYFbot8HDQQJ8mnvcbWkwBY%2FCY4P5sNmxDNRWW0WD4W1Hz5oAA%2BC3WxqK7cgERl9FtWcD3xrbIyB6wZ5izTJs9aL2N0prWiiH3ct0dT9NuQPyvcSEPutlRPzjlpQ5d0suaRcocYV5NVnNhP1GFPsZnNzpxYsjtwPbznU6JujQQtc91fEZ2oD6drWtkiSuyas%2BUCzvXRP2P8S1zptgCmxzmqTnxM7TmMuVPiwxnqUqBu9Xw%2FcqesFnyHh9WTQRxKc3rC4TIdOC3ROIJQcgcR5V94D2mKQv4yZc26vp2Ykqu3hu6OzfxJ660OgH8QBOMKrour8GOqUBho%2BcIgukLOUIROopc8CFIJjS4RrqeLtWqiouxXZE6t6f8Ctdb22Hp7LvQI3ULBBfgSA7ozkfR5vqSFEHtTZ1yLpwu%2FRah%2BTuOd5Rr4cfTDT%2BcvsxHu3TmsDuk9XlhEUOeynlG1kv14NMzQdT9DnDwwouOUY5aoOrGUStUV6li4nUkIlQLWXoACLV0xkg7s%2Bzm%2BcG29L2WrD7uqsQbI2GFWpa32BG&X-Amz-Signature=ecd83650dd3235f6e33eed3d03ba6f59a40b1bc39a9e7be93f385afc6a3cffab&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHZQYVRS%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy5q9RGM6oaiQ2Tvb9dOmNWO6Z9aJwLJYxYzt5KZBZRQIhAMWkNw%2BHRA0E6%2FVEml%2B5RHN5fsgN0HTFs9vQuoRhTTJQKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGIz5pEOoTjW4RdjEq3AOm%2Bdlh0YZbs%2BwbDda63fXloM0Qz5K%2Brih4go%2FV29X7fbbUgWMIgKhh48kdJaFxbDFxtp4pMMH5wmKFY58OOg0o1WnMmQyRkvjfVQKMglqie58slhTkRDZH6MfDNyVhBgtliv1w11iWolZr6jkUFn4NM4L%2B%2ByrIBy%2BZb0Rb5nrNz5bHufq2YeLvyjrul8SW8kgxwdwG%2BY8iMF7YA%2BxF6MCDs8MRYu7Iar4Z8SNbvE%2F2%2FIKWqDGil%2B2ec4sj0tlspYjKiVyoLvAKhSmhlWpB6XiFdpNuXZ%2FgyuHnU%2F2g0R3LmNhuNtwL856FTUPb2Y7b2YSgWVb2Hkd1lToj0rpaCAwh%2BrROq82lSUFxIFCTlYwiJQoesP7Piq98sN4Xue7LGvCx%2BR1kHj0r2aF7%2Fnzduxl64hHK44w%2FuPndKnISdVaJ%2Fu5hpnpIW8iLVizSp1hbggC8nbU0hlEYwCn4cDYE0EN1r%2B6dZdkfVW7UMorKLYhKiKyLRXLgUu6W2dXFUCP2OYwj4JEEhJKuDdKp6LwbZaetIP9VbwgpJRDLb0tKwBndNg1B7EQEJ11GIF50angUF6LlXMBj7tagFfCgKuZrVZk1c0t4MwGlsFGATCOdLT6cOAz%2FUEzEw6atqKaF%2BDDA6Lq%2FBjqkAR95hl2mHjRmF%2Bw58oLMQa6ktebjQWYSQVzq4wp92ci12DGc4o45YVnROYohigBzF68xWGz7yDx%2FBIb7T7PiTlPVV1VH5v174VwQVF%2FL3PBrjeaouTpSeh%2F95ZurzFk7qez0vhoxYT6f8jZDASKMeDEs8LT7WvHOVG6Yv8cBKjFNCjsIYoRe7%2FOgIlvu8xEOPO1YNWLaqFR1sxrO36bHUKXriHOb&X-Amz-Signature=c30a011098bcbce46b28edaf23dffe133c36bdfb493b4faaca74b4486403240f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
