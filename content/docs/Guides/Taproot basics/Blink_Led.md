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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHPMBSGH%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJCNsgaeqHzijZJ4U8Rr2YsJylKhexN5pmvYQIE2GtdgIgBl5HmwkHHj6C9VFqDEcf3HqvzAnoVsnYkU8RCzZMiKgqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI4P%2FzoULftP%2B3TYpyrcA7zqYPS5mwO9xQ7gUuJuFBSWpbY2FrwC0x8ijzQp34Ba8WH353He2FNjmeXA3xf4kR1wElQDH1wZBj%2F0FA10VNheTpJSNIsBDogeuE5RD8vF9GK%2FRzzvaCmotUlPkL532NLL3Blre4Axnw%2FpjG1mn8dRE0UpT76CibEznfEk3EdS5QHT5SO6jRlUV489B4OYXe1kyKElj0GXGDCEkue8FzI%2FQKCNWMcjXMpRShFLp3ERbDwCnRQAeQQYkin%2BgnCb4jBCWATbleL1e0Q7y5QNJsLj9vGF%2BaMrEPVI7ZaiI0L%2FIs8Ohr2akxPpTTcTgwRDSPXk9Piez4V%2BbDcriSYNrBx8Sn5mIKswSyzxysjHDm89meM0toVt%2BrdiTlKHzpZRyUK5pOoCEa%2FNT3lhBRiR%2F9tFuIeme1QM0IVH5OKIcDrjL%2Bg6FfMZBBKNVv%2BZhLopPM4D7W0%2BBuggpmyMw32UOnk8b9VmLoNyfRgOoM7O0DMsGQ9FpVljrUE3%2FgiQIMBBvpDor6VyhCrZy1LwP4iupWrSz6FNhTrUF6s8DuTIrJGpss2tibV77IhkgZ7ko0wvc9H6oPVwObEz1BLf3jzmovAm9JfaZdD3%2Fzx%2Bu3l%2BzQ7QVYf1M596iZkMwM%2FRMJyBrL0GOqUBAHuV7sWWSv2r4W%2FLzAFhTVXnzHzdmGvophxVWWyYixd%2F%2BsPXuowd4%2FRDwoAAZ8%2BB65cWNqf3EnDSUXB4asYo8UM%2FeL0SRjC5TcQErsFA0jdDfgsgtecYu7W%2B3AWHT%2BloKxBaD6A07yxD0fK2CCycAySpTDr2jybibsp2jrcTKVPdSDFQMpCPku78kb1Q26ojNx%2Frc5kBgVVI6Hej2dCUyJHE3dub&X-Amz-Signature=911a7a76f389988e4d62c6e8907b17064f4fec0c4590ff7f0754feacc0adbc44&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHSPNF5%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGiTVkXLviywOZyB2hb88kHRGrI2giDuWNwrnWVpWxcaAiBlAv51z%2BdW1o8guS2PApLHmD99Y9PDBUBymCbMP06oUiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkMbBgCsHB%2FS8qtGBKtwDc6b5OagFPKUvRCXfqG%2BwjjK8p7aWnBq5ok6zoA%2Bfg6B%2BDQIAD5zj0YJ25wIXnXJhABhIHd0S92RAkie2Ca4RkKue5z%2BW5yg81A5dZU2kwdAFAsIk1LjOzIk%2FOidw76DI%2B3GxO8MucjC8LhMnZM6ZSpZmmdpUABMZqbw6Up1iTw4sgTLplTv5Vv4D3MayFLIj307p%2FMa3cQSQEAo9FDJOhtmsJkn8ZktMkBr%2BF1QWHLpjZSiN3dof8NlBoMKUjsHqaTdmFCpQtggEhJqn9AfsWQLlcV0y5PBNVxhgjrpPu0MwHNombsJZ3Il6vkb9eB82wf7Nf78O2HfCVGstlezAQgGfH5JqwarNxzs6pO1S0ynqogzrccueq1E%2Bu1OBnZ%2Fij5GEeVf2gYOsqt8lmlHhXMEJrowevhOoH3%2FqpA79mQ1Ondnz6qJsEpCLmrPXwXehUtnvDXQ%2Fz8Gj2FKa2c%2FNSeEOZWRy1plRbqNED%2FJ%2BFvIMcjxnSTCmfRkJM5B7QgRCoqHZhM520TVnO%2BWwkCRIIS4BWPjM404PpbK6lBiDB2I6f44pF%2BVhUeAJu4Ss%2BlvnbYxsY85wsdZjzBtda7kWAFxm1OApNM7Fzz7s3R7ZYg0r1JhkhMUK6enqNlMwwIGsvQY6pgHl1E%2BFmss1A9T4iMtmj3Wc6Plp4XGmYXuNz8qHAHvlL9Gos3DxCIwrJ%2FXZMmpjJpM6gFdFjP04czObXRyuE2iY3PatCpQ%2BjiyMa3LZG2S7RmUnvnpioQitpGqnRd2Snm6hi2%2BcmFnct3dcKh4OIMZlO0xGhHsa6T%2B78aR4UgO93KQkgOzoe4UjL%2BopShnuyVL4ytwHCrsOLnsgh5KFZVGc0q1mDR%2Fo&X-Amz-Signature=92072243d33dc8627c35fe8030a259a2c8e9a6bb8a354b57164eb00ac3a700ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
