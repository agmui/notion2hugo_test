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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T75O633P%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHJ2ndKzRBJhzlaUGDgttjJPg8qlkazWZZDJvCR%2FZzFAiBWtEORKLeppuUEwLup42tRbHH3F%2FZ9DetZO38KWS8G9SqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2RrvN8D1abG9SN7hKtwDVG%2B0BCYw52O8zavbVudO68SsBHG0MS9xauCvcsBLIoDdRirDXBWD1le7xeu9GeRqgGtEzBziPyH2HxY1XRY%2BYCIW23nD0%2FpdtlPTpe6DmXSEl7fJReIJfP3ebdjSB97N7EqpaFrw6hYiroJ2tO65VLExWozH7Fpi47w4Iu6W0YEFqlczBSOhApKBijnxlEaiP0SGDnNVh8xIiY%2BqgCCuXBX8j%2FkVY9jwgOxRCvIKNrcAN4NZv0%2FGlo%2FScjVkQH6vsLXf71Plb0sT8O9HAhyZGMZJbDTzQ%2F%2FCKYgA2%2F0bnMrc32qE1V4N87VlPT0yvh5U9Y6pHlxAtmfMaaIuSUgkBW2Zq9XFqZ7tCCCXP5mZ%2FeqrH%2FnfMM5ahestllU9sc%2BFGnLST2%2FCl8OdHoQFU2nJJoCpjdu1swiNBLsbuCAJnT7c3PNBP93dc2hm8Jv3LXx2fs0GEgnzsEWthss6YRi35YA%2FWC0smayBgAUSPFZ6qFmYAKoFyCh5x4ytkh%2BuX%2B8nFGgF1uIQWLe3kllZH2iMJBgBR65PoplE8QjzwlrosT5UKlCv%2F7TRy2WMRXSYk4YqBoebz4YvU4hpVPvDPHmllJ1O4dK3Gc1I0%2BMFEmwx5Wu29snwihE64fQvDu8wr7XywwY6pgEcrBlr4hCTCaRxH3Svk3q1oQ8th38fwMJiOcizIyml5WP%2F%2BPYMHvvIBXuU4LMpyHja1gTjDVHiL0Yg4UMGINnbdkkxSXW9L7gEhiAlrLwhXXWGIEE9b47K98s8pi3tEbHbEG%2F%2Ft8t%2FcW2bcIYAdoT%2FJm26EydIPEFmgRkMpMIMzPsJDl%2BiZgRGKkCrqNFvOnhoz7elBqwHZFNEdOo0GfVMmyw2hG0g&X-Amz-Signature=4ba7931e6d4889f0fe1af8c2499a82e6e827bed22eb77bc6e728b52c50fafcc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXXBBXL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWluHSWe6nz89YvNV6PMAudI3SJBr14C%2BM3Nr5PXP1vQIhAKUZoUhdJrJn%2FLuwmL6tJ7sSMOEOmWLkU8wABqJ484TPKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKzVXyfGncJesWjwoq3APCaTWdd7HekXrgaq1bmCAEdLMjcjVXgZX%2FtXzzldift12Ngb%2FgHeS2stnzOxVF3wc8dXJVwlv7fzUgSCVfHVmIONKeiGxKS%2FGO13vIUmAqnzEAIjXa8mmPg0V6Q2B3KUX2YiMIlcau1gUJXfOCRKMAsIG1YoENL8ZIUTdxR0kPqk1Gw1JqkknHgdcfbVgk3Fu8oXB8UVyjCK8vylzS2a5v%2FpYcb7vrN4jJWrBdLLbMsDEn%2B9BgRS9%2BDd%2F1aK2UiPrly9rkCLjkQVHBD4OO88NmV%2F3lKLK2ufzPoU3mmIqdNJS2kv6Yu2AzKLAEAqYrOBzx6FW8pTJ%2B147EFBQA2mWW4qCAiTGnUtL9V5DOgC5me6m%2B5ceD9irZ%2FnzBsIQ%2FSP9Zjtm8FmwS864z7aJOY2JvK57%2Bs7%2B31K0zZA4aBCEsve4xGWxS5%2F%2F8e2wAmiuN3EYXRi8zLL9oKY6OjEIz8LfNxP3ZDGLj3JDMI%2B1SdLpmmgaOCMKqdLaY%2BFcaXE32vITdPR7hsOecyp8ZqGwkVqFnP%2BqhjPF8%2FwJcHVCsRHYkOLjnkWbcWF1iE%2BzvIOHNh1A%2FeDlSbxLRGmbL0XDlgXCExZAKGdwId7T59RJPwa6rfzpdiDZofuLQZpebqzDov%2FLDBjqkAZ4OskprGMEfS42nIq4b%2FqIDuArWmiwXNHHri7btS68NHJiAhACoRGtQAf32Ww9F84m9PkrDjE5Ickq8KOdF5BU0jsURWB0OM%2FrYLhOFfvRolK6gHptPqKDK0mofGYS3%2ByjQLj4zf48JXKPPYm%2B2upYwfpaHL5ToneVpoeePPJrYl5CIOhlJTi%2BtqjfkmF7U0nSzcYCRWt3YkY6AoZuGfFMnE1um&X-Amz-Signature=fdc6b9035a2da0c6751ccff53c9695694f487e0a5996a3a3997d1bb684430b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
