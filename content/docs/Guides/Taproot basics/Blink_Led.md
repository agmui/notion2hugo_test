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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHNBBDD%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEfo7jDmvXiYgw9%2FL0e8uM9UTsU2vVYH2Y3wB6u4kJ2cAiB%2BYbmpa8hatRrUam%2FkabqY8qc8pdpzv3WxIqVop%2FMZHir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMnbcWuX9QnKP6XmbNKtwDibtGHMAZR%2BGP8JgINZr1RUtQSOl4nlBkIUTORQJxDCv8JN8%2B9J11m88Mr847LGmEo3S9Q8f0KdmgKhQrKNQf0KH4CZSklhiHKt0YBecYXOmkxQcVUcZxmBpLt%2BlrhfKfGQfQk%2FuglNEaeJpa1P2YdUw9%2FuQgxag8hAOu8kAB9BzdV49sNEAr4km78ibgiEMZ2GvO84Ho138V6RC1wp2z0go9m6lAdfaY6Rosi6KPgvg1TgW8skPmEd0JUvCNz5NauVtPq6GiY7qSsXr3MT6fnK11bwDs5uM9%2FKZyviNDfxisKQ87RkrmRaeHyjpaaejScY04k4O95WM3ma9pZds6dr1wWr3I91IN4tiNnOqhRSlCJIsPyH0sixyM4DWWIBDAaf%2BiLfsiuLmUlfgspGpE82YY59wBo0sE%2FypVMOsErARFLzXM%2BJ%2B8dKyc7EAGn4svyWj4Iw5tFKK20roq50QEAHhnW9cP4yYLcIEzTHDF06GlQZ0SBMZUu%2B%2BTnrU0k48FpbXPJNqfBVf7rEA%2BNzLjbUB7rvfZPMg6mXYwTVNeAFPYI1FB2S3sNWlCTaJItPftAt8IIBaBjlDdQh688U%2FxAcvj0zDTXGraMJ4hlx%2B0QwD7noKUOj0olklWLcUw%2B5%2F4wgY6pgG1vZps5liFZMNfIkiCoTNa9WzMvWKll67g%2BAdHJ3QhGldcKreALGAKy6r3XH%2BuP55qSZocCAvmXgqojE4SgGZ0BmwhW6c7iInhq7PMbLrYmh%2F3daaoLNWpubl7MfRIcSAlTI4ztCXGxMju328DRIMgMoC8DYf%2FBrdj9JYxd%2FedHx0luCMRydn%2BhfefLASgRG5bNZ7D9W6geggjJN5zek%2F%2Bw7kbYc9U&X-Amz-Signature=a165c11c7ea803813fb707bb084a69b196e5c6e5fe2c8e33ec353155c5758cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RU5DCWG%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDFR%2BRJgKmrAYA0oPqjjbh5%2BOcVk34k6y8C3PqC%2FXS05wIge%2FsBacGNzZ%2Fc7TpyxVqe1EhdBSO%2FLhLgOQBoCFEkwzMq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBcsedP77Ax3DqJMUyrcA4nCuNoVEs95B3BOLXZZAd9h75%2Be706wHAKfCJjKojnN%2F8cZ4Qie9JyM10DqW2Fuk8%2FgW%2B%2BF28ewgRNYChUNV6dUmhEtAff%2FWCLphCame1xOgLNFiCPK74tMpPmNtj6NqZFYlylQwcm5o4xBi6HmAKDNNv3%2FAj8VdSFd7d293AMOCc78cEFa0SwN2Q%2FDT%2BM7q1NNEaUcJY6Z9I3vubZMconkiHpuSAOAYB7vUaVDwM%2FlgpXVVGJ4bXxa3Zeci56BGK1zBULNPTpKzFguWm%2BW9FIiSw%2FWRepNvyTthixZdWwWnlJWlkXyxTixGCyHlJ6a4RzkP4ivJLTRI0ELhyEzMyh9G6JpOoBHjnuf0ftsILurUrgXIx6k8c%2BWT5Fv0EMRED8yRub7mpn4s%2F9aKhyRbNDu2%2BkbNROKgZvp%2BqBggpLcPzoUMaL0Q2%2B1T2jYoBT14DM0C6mopYjH1R59BYgVrsRe6U9gzchIR7kNBrY8M20d47i92oRGd0iMwL3AjDX4BEZF8pLbHBC19qX4eoE6Y5C95PEuLlKuDJTJ%2B5upA2KiUdQ6sYEtAEY0PFH5%2FXT2yOKG8ZpF1JTBxqfwKB3O8OkVi%2B%2FkgIFo6P8E7fY%2B7bnQlVXp5W150dBXdqXJMNKf%2BMIGOqUB88O5uypznVRR2OkX8KND9q7HF%2FmEUv1STTlMw6g5RriZcLtNBXqSpw33T0FaOrcBki6B5sCb4RNqqrXB9p8TXXXpJFZzUkJ9OB3bPV5Q1xMl%2FdEGmMcGr5GXzOODoPBJ4rxI%2F%2FZbRp9QoqYJJT7AOo2k%2BpBBprN3B4Zrf6GzCTsrouapoIIVd2jT3rxdajoHk237s1g48vGgzVySL9YTritL78B2&X-Amz-Signature=549d51478f410d4d9b82263db953079ae951801bbe84d812d8a5b0da48600575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
