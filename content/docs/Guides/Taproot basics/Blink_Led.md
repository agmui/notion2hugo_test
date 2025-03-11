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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W57FRMUE%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCgtqqiSTBz0Q2wq%2FNeLQszaO5v%2BmUSEEcOVeaxJh8yBAIgNnG2y0TvI0kDhbwNIqgzbgAVveE%2B6M7j7LUC0B%2FxS1oqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORH0OkL3m5SzPvVLSrcA0oo2ojNUnMGCp7fD0nipAkp2PNun5g770I8icf1GA4Xtn47JlKAH2E%2F1a4ZO3wK7xFYqrrVICo%2FWLskPnum%2BpgrsbnnEjSFRdtZA0OoEYrXBzrB%2BPhV2gi3%2FfboWgpvUd4Slkruzw5W%2F8D1LZZi8zGG5B%2FvQx5DiS9nkxWAyIF2U2Ngx6YZ9Vh9%2Ff4tZIcO14EiG8%2B%2BtW0UCGZGz%2FwKRZfJSvQeRG6rdis5Iy4eT4cdFk8gqPFnLAoAlCjFJij%2B4qfQvK%2BNXXuHFzGNGNAbF03nSiYtGqBI3mSQSzu3miqgPufTcuqVnEaHv8fzzRWwfxHoRPXCeeSq879wBDvQP3gUjj0D%2BObYHZnHnJ7yoK4w1%2BVjrFRCeCz%2FQ8CUaBIYp6YzdOtQHi0%2FmsBsYVKnfRJKUOsWkpEzZukSc6uCqyfpiZ1iGsbXuMGvBjBfY25EDlzu8tX4o0UOFQhmHYZ0qFTGzlgsUVZaLZOxPiXoSGLuQL30yVZ2m5%2B9%2FdXmp1NOTimTV%2B1bbWrelnHRZg%2Boy52KwuZm5n3GZLM3kkvzcIUPo7DkAYOt9au964ewGAHffeoqgSk%2FU5MweS7eblD7PKT0zNvbzQH%2FnHWDmuwRwwnHPQuzjXnDOOHrKNRuMLzOwb4GOqUBkygKsuw7PVPXPDnOzVD1xKc%2Betobgr0kd4sE%2FT9gc5KuKz7KF3PVq7bWDZcdF1CkXTUE4xL3hbmVgJ0pilJbFa1%2BNRvejc880SgBdIZLMEcz7X5MAFqWj0z2t6k6g7rT%2FSw6n1Y6GsK9qcT2aXLQ86R2b%2Bd7LHdUmgnvnDU5ZGPnw6FzrNIs2gZa%2Brumx4Pyfth%2BNEbSJ%2BQc%2BZak7kXJVjiN81pV&X-Amz-Signature=4a3c2e05b83f54f884e75f7582a11ca3a7463bedbb6a8956d091055ff64ec5d5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J73YFPD%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDaH3LVHjGDNOpEMezW1Gb00cMc2CMSc4ESRsItic2DlAiAT97oDnUtwHmUIwBM7OABj7mY%2BEhl0RXrSxcLPiFx0QiqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMljZwnexkOTb0SVgTKtwDU0NKN9EW5w5%2BgZ9F7%2By3tAN5FL5s%2FxhNvkNAkNahHuzsPlaVwhBCSvdCUwQdRIjbkVU0ZTACiDxHUmp63nrklEQEkALbyQBGLjS4ODzL86wSGgRQmmmuHgXT5x4UfeIiCpBaIP%2B%2BbTnRsgdBCNs3EpWCx3Z%2FyR68aXcQjQhMcrLwA6HV%2FH7ZCSRtqh5NWcivLjCeA3Guy9mHAe7D8yQCZLtYNfDZepyBtNaCxFADePMyMS%2BGE6F9L1cLjPdScsniljeBNfUAVdgxETPHY5TBj6R%2FdGVS8A%2BOE23CJ5A0Sk0E2UIbu%2BihHL7EzCpsUZvqDGz4eWTxDOMKUCv3VqY24MCgDZunNCS5TSEYoSjdyQHQb9xIsBLJp2%2F1%2FxfY8aMGz%2FrlYJ1jKOlGu1ujt%2BKpeUAbsnNRYSbDCGIuVnVvWpFwdKD2O7KNM%2Fsvf9n4CGHftE93kbh%2BnLdop6vNjEoMIjVolgxErUlVSlfrhIw1XzhBRmAKDkdjTyMBtwEZLk63LGCW36lqffZ%2BuHIyjyBrqXEoBi89otSsTXh2%2B1pv2Znjk1GPiBklwklFlpCmOMJeOyuHAl0Edp0KTQeOk9xHde5sJOb%2FVZSQFZkCvPR122ocolf4I%2Bh%2FiLlIPjQw6s7BvgY6pgH3ai1ilt4mH3ZVPwUW6di1AiSdy1pNE%2BJh6KP%2B6uewEF8k5bTvFvaXj7MktiQlQAp4HR%2BKayln7AHQUBIJKPHm5FCQarTFP85LE1Qg5DDKUzdnmur0cDGj3ifIkdWDWaKBjkspiwh%2BSaEjjTn5FJrqn%2BbFMh0xu9yvkkHuKcg%2FTeHmQsOH%2BpMN9ZBSoOTrs31OHXzK6U%2FGhg%2B0nYfRRUhgA0pCLCpV&X-Amz-Signature=b356ef720dfff410108a8b6a09fe82067502aa42581279006ddaabb8a20a7421&X-Amz-SignedHeaders=host&x-id=GetObject)

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
