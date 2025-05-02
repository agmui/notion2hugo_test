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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2BIJKLS%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD6Sg2DxZEfqDbTlpvFVLDLPeqdMOcBC9juxS7oikdGFAIgM9IkyUokxUv0yz1a8GeerCd0Ry%2FTPsUXHD0qK0vQxhoqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN8vOYv5sCCpIQhg5ircA%2BKet921skJFIE9BfDAIPCvh0EvoT7AKifrFbOZFTdgZLqwDEU28%2FxJFEnbP41nz5CWmuaOxx2qUrmCmxQFrWubriJIw2WpuoNXoEQrxCllJHlJ4g%2FC1lukhERayTrp8FbqPTlYlK9fFd25l5AlvHlDUk4RidDP2nr3OXqc9zpcfBcul26jnA5Y6Uv%2BuRD450wLEsZGhOr0S%2Be%2FsjvNjmTVwJw%2BmfjcRuuhCE2KxFAAep0eUxWe7CPIOD8PsSTrsE15v5NUVIw0I%2BiK8V2OlDFBcnk7cxMuH8uFXfsk6V%2BBsob70h%2FsS%2FteZYyUwWLPCCPPvwGJmAgiHxSbTVaHGFOsxAn0j9flUOCEQhQFZZ2jgE6FZXorwYUj84e66bzfa%2FKNC3tc4ReUIcuNSTVJeoFvzTQ%2BbakDVaF6FxHn0uytoBxvhgqME4KnFJg7oN%2BFf%2FU0U0LvpF%2BJnNK9Mhh41jsbzTvCc5i9bFtq31DI2hwwsmdVc%2F48LzDrNRcMRdRxznepq5ZMeldC4atHgzvvZekxFKXiiz%2BA90ZbafZ2qG%2BgJOkgGmHKxQqfjfS1EhXOYVwaAeYRJVgAGsmA5GWcdFvqIrvUDuLnZknQF%2F3Gqql%2F3%2BAxCTU%2F%2Fv5TVZOxtMKrk08AGOqUBQFVRLR5EHWLq7fLx1vyN3R4SPoEcY1pcMtFE5QX7iwE%2FOccf3P3PLBnvFEMCayH1X6ZtEfnDo844qVBGJYdcLg%2ByajlzOLin0Q4Ymh3vOJQgd0snUeh5ZoyJ%2FWewtppfTEwcuzz7P9JktZ%2BYjO1ogTkFq7BIUX8oGWF9SFHqdv1kloa2HORxGNh1xUE%2FrfdFXP8WynF81wZNUJXLZaNNE1y2psyJ&X-Amz-Signature=26e2e232985b41f296a208c5e5ff3a7dd785b29f563610c6b9a8c3279c26558b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SHLPWW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCID7nvnNQQ%2FQlCmaCIewluRr1566j0r4vxXgpQ4bKxkIKAiEAua7hdG%2FIjghybGDRRJvkORlKO0je1dMYnOds0x4eLR4qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLlpeHaVh8FtsI3e%2BCrcA416sDc7mD9mc5q4bYuh%2F605puFsOdogLcSwzMTHhPlbQtkB1IJin4L3xvjKR3yRPTBS5kq8%2FaKNzfBEwK2bBHH24vkUJKC7VqoCzH4q9%2BpHWy80NtgsshE3nay6OzB4i%2FOLRCB%2BJR2xloEqcBMNSlL3wdyF5s0VOJfODNoBSNEvNVOC7GQ%2FYNxw47L%2FAuVec%2B0BVox4yfS5NHDMkbBea1e%2B0wcemnCXlTxtxqoPgXxm81eEYMjUOIZiPu03i01d7BjPzzaMMmfCH0pZogzuCETJoxd2ea6GjwNkuiwyLCglAKfaM3Rqkdqc8PjqhCAWxb9061X%2Blc93vP4Pd79v6HYZJzENEkcZ%2Fh78cTlM1hOSlfA1h%2BanOyzZ8o2bW8M58TTBU5%2Fsw1RZT8KQUnXhXC4IwlUcd%2Fb%2B4jkEp3zrVP%2FZ4BYON%2FcFW3w0XcVvDiMev2zlglg69AySPHFtYeXFDSyd9KyFU%2ByZfWKdnIeNuIstLjsbQJSzSDkmQDFJj51ECh7RYeIvAqsj0kB7anPpxLXUe3VE%2B36cbXSQ5E7pnaU3rNp4chSWhRKcbFpOt2Fo0V1BMUCWq1dUKRA0q%2BBxvnHkxGX8NoxJLQ5lhDk3SbAEmdJrbbmv%2FR%2Fv8m7rMJPk08AGOqUBSqrikDT9hdPj2d6hZ8i6Ro7w6G%2B2Yz0%2B55OZQLC3v790R6n6txiMWE2boKfkzANZLyHhr5TpaaSErwE0eh%2BdMWbdBIVC17VZ77LRvmvww%2FWU5q%2B6Y%2Br2yghllWRLqrBQ%2BgLBEvtAGCr0xyzBkzhBgo%2BxKDqpdFnEzO0GBxdW25loCKcd9TGlmnEHjCbbkWDSt0lr6cgML%2B%2FxMdaf9A0T90CHiR7K&X-Amz-Signature=749e031b6eae186614cd811ef85038960973597546dcd69e53bb6e25e0372cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
