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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMFNJVU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErlohYB3Ki7dy77VcGc153f2r5RPQ4E9V7m0CHEmRlRAiAsua5jcVHwD%2F2tU17BD%2FOwGYcM2WWHXVF2rHk4tNYAYSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMyLrr8gdzPjrrYYNgKtwDCCNXOVFL0gcn6Ik1woe0%2FDPGVX48xVyicC5nn57KJoXSkE%2BEsUPC2G37%2B9wc7yUaXPMOERVTfh%2FLzYfxF9bolR6GmxWFt54HVwcM62CcVqpka7LVUzJdqHNvM2AWtEQxFd69Rj%2F9Brz4FQw1mfhjsjMD%2FK63Kh55wXMl0eFKsNyC8XYoYd0zCfiqqhyiI0L3vH6gPpLbGUGeJPodJYggiP9eglAaTihgVLPPS8nhXc12W4z%2BwTBafSRhcNzY8zCTP3AxOvmakKZMa4dwHT5F%2BlPDq3CnWh1BK6MevwlPk2hyj5HbjNgbge4W%2FbcbVQy%2BQL%2B0uvz1zHxu%2BmquhRAj5CAFX48FNBq7GET1P%2F9fnAcMDP0xSH5UG0973teXxCkJcTH85mzrijwQYGP0qmHvB18AKPjYF6JXBKZETlgVSyDBAK5Q52CN%2BIC%2FLyDMnZ1HQKm3YbuMuFV3qi7AUKG2ZJUsjzMD%2BZeqyr4EJyFFhHrEfEoDalDrEvyLiTwok%2F5%2BCA7o6zWQujyqmNc8s%2FrXS7Qu91conWXDQgJLXdzbfh9mQDPlnQjk2HBhdEfGOHsA8rQ0OlCe9SXmJ%2FfgeIMBUmjD%2BgtJYWpkcFootG47sZsIrPY9QQpRcGVxEd8w2c2nvgY6pgHfm8%2F1LKx4mXLuICO4cCh6Xr80WNOIm0MIW58KoOZx0lNnK9EW%2FylJw6Q658X9x4S3B5%2B1tPxgyh7If7cZItFBVziR5Q0anC%2Fk%2B3DyaYX%2Bm8v4oS6DvlU5YUYPxyXaXN5p624lP4Rnh9YbFLjPQU79VSW%2BiHsHsGPlfuRJCoF%2FT1M8Rx5us9OckVFL17VBTlJR1EnfLmSF4R2h4FX9A4AFgowCQhCD&X-Amz-Signature=8a38d97410604e328464adaf0ccc667c752fb1a79637dae1e35d99e425d00d7c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645WUY7KS%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T190151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG219K13yS%2FWjwt0G%2B9LI0lRmHEn6GzNnV9l20nAnXjAiEAom%2F%2FqwQk32QT4Juew8440vo67P8CGOIBVyCiVhkeX0oq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDPS9on%2Bf%2F0%2FSPvq8SCrcA0ca6SaDSBj%2FK27DyZH26m9ynRaVLdJYc8bqkwCs6PTZa3uSWYaGFAc6URcZnTIu98kvecKsZHrXXl6OBYk6Nfmy1swoMFiHq3RaIjL46XwOnOePZri38ycKEiGkX0kZ3jY03If2QdRDI5SYvzpWdQ%2BwVaERNvN1Qu4i3MYefP32w2qwZQhSCAKtP%2Bz%2FhiQWHV1qaOGd%2FoFH6LKEAHKCp%2FutQmNfgDR6T5aGTWLjN%2FvIYO%2B3CbuB%2Bh4fYEFm%2Fo4EkICl47CT%2BgR%2FlL0q9xh7SiS1vU%2BK%2F10R5G%2BfUwXhMmPozp00I322xNNVIpMNgf6cKA8pMla22QYejl3uIHkRHID4c8ijkvOmOXG6iWHqv8I8xr%2BIkqD96htYfe%2B7aJg11Nzl4C1ApFnYJz9SVfFt3xM%2FwHzVgBYj%2FxCarfyy5nTJ1ffCjnila38sfdIfbN8w36Yc2nY9kR0vDuj0bpNpAccMV7scVJtJCUuYOdO5cEQormFQbyoD8UDokPRNiYWssWLI04LfaUY8LCzhvGUogr9INZxyuCKLf13zj7YyW7rFiplg7nPCFg%2BlchhLtuEVxc88hU9mjpFzJdVfaZ5GMD1OtUCd16aR9tnZbCZH%2FQ%2BcGSx9glrW4ELLtJ5aMOzNp74GOqUB3niYunGhyhlgi4%2FDwSZT2Z%2FcSQBXcIUjHNC4tgD2NpYbUJhl68wxTZHZQQV8L5HCUcMxascj5KL7NlbO641m1qvNb0jlQ3KbMeJCgPTSTBKBqKtNkzNxsRzYnJBXUm4fM4z%2Bv2kUjFtC4MPvCf016NkkZaCjQSj4bIRZESfOjyWExTixoZ0xxawB8RjS1wMwMiptDAD%2BQC7IFyG1hPWCDtB%2FGBlv&X-Amz-Signature=da2c9c705887318cb5305f6cc2785f75bc6e4617e18a760d25e448b78f2924f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
