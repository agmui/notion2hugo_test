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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XB6IQO3%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQDWudYK5Tjxx%2Fp6xrTedhStQmfy3Pki53blH3%2BIsMJDEwIhAKSJsEoX97GO5THwHwhkWDo4MEyybUPLg3nR1uqI8vGZKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUYvtwJ5c0XmVhFrAq3APmp10j%2BxB3V0Po%2BuSxJ5sb06SX45%2BAGCA1xESEyH%2B%2FDnjoSow2EkFCZPKKnyinyRz7JEiTyJjlg6wEpJ1DDH4DDNpAg60NOrJ1bmUhzNBWW9%2FJEzHJ7pn5LzcbafE%2FZE4SS41kOXWjvHE5491xeWVYuBMnYzrt3oLJg3kMTJGlHsLgaCEMQubW%2Fir2981LHLMp9A4iXA64ZHxwEvmx6XkpRZZ8E%2BsmQ9gpcoebTLTnBpxTnzEBr4zPwMAtjP86YiK8jz%2Bk4I7ZzbWnXHtAnLxnK0zFxbxXLiCoHdfOB9dKGZPRrt%2B9YFt21YR2vc6o78VkjGSmiQ5CnGA9pEnGQI4216eF1%2Bp9VEMc%2FeKhijtsSPxEr7WHVh%2BB5YNmTivlpaR4KhRIgGHgm9r40AnQkBocdNNP2fJcVAFYF%2Bf6rhDAnV7PqlD45cZADi8xYZaAGBLH76YDrYOyqENrMRlEZMHn0b%2BEwtbJCIsna7PTl5Nu2VqSBFH54ASk0pJ0UVaIVIzpvn%2BYqmhMr36YRiCdfoQ9%2FBdldEIvw1AAijQPmNMXcUFoRaT8Ngtz77VRu3VDqvXqzM543%2F5lOVaGU9hR4uUDhSgGUneV8RH8r2h5QfcOMdOOtrNBXlywimZaVDCL2MLBBjqkAZliB0hep6JEbj%2FoGu63gf4ydFna92o5rFU3L5owWcB4%2BBKxBPVImpoLqyGQQjcViYBB5ynRAckj6mNUVwcG90MmvR5N02Z4qRzqDY%2BcY7qfeTS0MTdXz0thCgSgrjQXR%2FoIbBatq%2FBUJSKTnntCVVadTfGcZx3sXZEOErH3Ci2HhZOKl4IQj%2B685BbHva9P6sQGwBXOohBPeN4jbmhH2acwf6ZN&X-Amz-Signature=ec6d96d1c67eee9a5fad1641feed28ff5c6f42ec4d5079a5afe1ffa69d5d92be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZQM6Y2Q%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T181054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIAh9hQzwes8Nguhn%2BExRCsVoQfti49Qynlktbkfp3CIiAiAXO%2B62587xY6pJniq%2FC2wJq91ZLE1H%2Brd1weEQGpqOaCqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAeEUZoUm1mrFyYWRKtwDdfDk4or2D5My7topf3%2FqHsqZYXjYS1oekWVgnDjcmFSwjmUFcSpU9N7cWZi5HHKoirVLcTCyrfWHW3QwNVuM6j0FNI%2Fhla4N1%2Fp0M1sFxFYkBt7YpseADwIqkYYmvOw41AEvpy2msUaWxM3q5RO8gFxEOgnfmcuYAkgmZz%2By5N%2BneJR6ize33ZhoQK1mXTm5FaPqdXivPloddGZV8ORuMArKvWV1cvT3BpWVY0Vg5N7JYme0L06ULf9aTpZt2P9kt0MQkNNHTgbJjUPwYZvzRR2CUs7x5unBF9%2FvsFfXljiwrDkqkcMIay6XJNFlpi4x%2BnNgc9ualWjcHcqQf2AQ3eQK4rGW8Z0JEsdfJFjtvCxIg1pge6fu%2F%2BVz8dj9twiyrk4pZvyP0gA0EomuTpLUjiwraNrokVHGRp5UZeVnRqAjDad%2FYn5%2FyPRpptYMuMYR0Mb8N17wrMKCLHV5tklDiH9Yj7b8Mq6usdYqTjY2t4tVrGOyFMLluBaXc3nUeKTzGkjwKuhJPfTlSoFDEmCcbLGQmjlcK9z0NBsvl9%2B9Uku8flYIbS0%2BM7e9942qKSltb3fOsMUxYT1EpnzVlFicZpYMFasch0bP3aC3yaBuoyRMhmwnkp9MIH%2BB%2FVcwwdfCwQY6pgH%2FSSa31yW0LU%2BkkqqUzuTKLfedrl%2Bq7PReXltTF6kRjBOPUlj7dSvUNGM%2BmS8kEl7o6Jj2a9jIf340yazj3XnJEnyzzJKxl367nM2oOvyNxxedd9IObvD55ZjwQ3gMx0J4MUQUb5YlcqjU6BH%2F73yce%2BtV4dwSVEGlZkQsbaXradwyid4ImqbZ7ap66bsStYjJfo%2Fk8iSElK2%2BjHOjNy%2BAkZeU6Til&X-Amz-Signature=e26751d409cc1520dfa9a545154a2f9806e3ee8195167d6274a2639440a5c9b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
