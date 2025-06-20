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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I4GOT45%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYPxvKEmVVBC6XfnU%2B1qS%2BtLhZJQL2Yv%2FhBV9ADeLJ0AIgFqm%2F8clPfs9Bz6iYGr1eNEzk0%2BGO%2FjYHd0UNECiwW2UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8Fw9SpHGHEEVVt3SrcA4P%2BW2i%2FUkbC6MtJ7KNz6YKQdCLHowHvpLlCoxQE7thwEEDFnR21o%2B%2FOEn6ATLAk6i4qSZXDruHUE83h2%2FkythgVqd%2FuOj8g1HVSSdLGLo6flP%2Ba0iBGH8qaW8DcfSnMlCXvYSu4LpkJLokD6B%2BcdQ0cLZR7oXTEUjFpibhSdHLr9pskjoV8jR4ZDOw49DrQhn4yfODjkzn0pvrg0vDSOHtC%2BRvvevW5%2FnSc7B%2FrpYoenIqPJXrcaQPw%2F%2FgzFFniDyTI%2F52AUci036lhQXv7jq8W4XDoKVxDrbL6u5TWtil7UMFlSBCdSNamdy%2FqFRM%2BPK9CMGCwueEimObq7evUMPEW2LxYFCSf6jq%2FzBpYNbkZYlUbjzm%2BFqqzwLFW2892kfNiEl1vsgtSpBwbKXEsTAjalpMi730F8haIBnogjCtAGLuytGDENsd2LD6iwcjUqHaMHGfIW7fysECDRjLylHL5KSH8vwKg5D4spoIzsc9RsbvWNJEn7ESBKYE2p5Rv5UKYAg4w45xw0gMmU8pjM9NEXioKCiBcxVmjxmQTe1UdwJ6oTVqL7Ga7ArZUyni2Cc%2FTAR1tJE9AraudC9%2BAWomahScFEEFV1%2FlAJl0h6lkIOsksDw5OgGnMC7iiMJ6908IGOqUBuTDe2T%2BR3gS9WBJOteZBvmrzsc%2FFQv5ADu%2Bzieyc30gxZ8EpMK0I6KQrHNFD5n9MkwhN%2BwFGMXn5Wvdw8O7N4hENvBUKLU1GfIAOV1A75FBrOlR%2BgX%2BBuPRxPDqJ3U7ctzi3NRvhQQE8f1bODG7JzEKqnsaG1Oe299yX6iwFmVGpTo%2Fdihpw6ck8%2BNfPJz8bmtB3RFoOC30iD7It%2B5X3LJIqmjX9&X-Amz-Signature=14e10149be572ec9a2ec5074411e1f1388bbb9dad90c691fd76b1ba79e14ea3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUTMLTWC%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBw2QkFUoSng96HKCk2FozxKQPQzNagQRYjGvtcojYAFAiASbuuL71K7x7CYD7RIue3f4US9%2Fqjcwh05tBT4J%2F3rliqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdeHFOgI6bcBHtVxjKtwDLC4WKSRe8jFFUnCZ753q%2FnSq5jllxg27hWTdM7tN3FO3C5tWZeKODOGqQ8m%2BZGOZvftwxRfLCEU24HnF%2Fqi%2BTa3q%2B2FtQ561CSbZPxHhe5oaU24w2a9T5Df%2FpcRcS%2BYuCmuW5XXtb1KXSwpIadZh4Xc83HRIEkox1yMH0ffj%2FL6Sn7lnjAHsErTPZw4BnRvrUg%2FlMtidQQ9b%2Fx6CLZH9b5DWjeRr3w57Gnv6LVHy0Hk1RQbbKPJzJyBiVbTF6AMPv%2BvCE3EReCJfB1HNtNmGaDKvvb9KY%2FdCQwlKlCJKLnS5fA4W0pIfjFFU%2F2l9dAGphhx9eahEMHQmn%2FCiQY9rMKk0Ik9Uxthg1rbxvrZzvfwPIZFnnfkuwBWDcDFTIJk0PDfygB%2Bba8zYyxApzdt%2BtXjrqOGoM7RpGQowbM2VAkwbW6%2Bf8mWZmPBJzqiaL4J%2FZ4ezLN5Q0G75UMBTHmHcbyidaD%2FqcaW%2FgJEyrhFOXXlrpCtjLfJhUQ%2FPIJafyI7RvQOqB4gtsWbGv%2BgUU9swbtQDr0FH7Jsy02Nhp5VgMN2JeN%2BLbrwHbQu72e0xNSJEwlHtcUW3Hr5%2B0FV791VIiwqkAYWAuUER%2BmX8yOmP0awPTC8JZULkpVrVI9cw173TwgY6pgE48kirJir%2FBtqKWHPvx3v8dD3lAvwiJjNoXYGe%2Fj%2BPX2kR%2FAFoAkqhO5UBO0giufY2hrKY5olhKkhApg8mhHjgEM233ipHwyl%2FrkDs%2BvC4QwKYBvWP2bx5g6bOyDlfGeYZRKFChvWIylFdS7GxbuNY1iyHe5s7%2BSomJUXTGFoj6arSA32wibsY6N4uNDEOFLZuzm6wB6Uzg7f%2FijjUR0soSUG8EDwW&X-Amz-Signature=1e1dbb6df71521d28fd6230ca5d3ea90b9ad31502e8fae80673fbbd1d24ab5fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
