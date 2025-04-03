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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHTEXQUZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAogPBkPYz4fSZIkxMMG5vhgUrx%2BZJKtBN5EXrPc0xBgAiEA6BO3YDmjuL4uCXBAZDYVNB%2FfX1M5gHWdv9ifNig9uRwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMKnHVhoYGu%2BpIkLircAwEvTmqrA2LU6jXWIWh8jI7f5SrLBuRufSCNpzDVVoPG2uM3JaAGLqLzMVP29jow12wOKPQ2T2q7FTV2UaLJT5jRzdisvo6xVhTIsvRfidqFYFZPdRml3a8o5r6OzPA%2FPx4E8SbMqOQURGmkOjIgqsFJh%2F6wrfrXl6smXCOzOFl5jTBG%2BPKUE5vfjlTscUNqphq8f%2Bgz9aW8UicwszdGMLWgIDsbHUrlr6fnzuoWFCNjVFf1RPv2Svlv7u2YYxzVud5bLdURNAatMcEFD6xoBOqnQQuIrw5G2JKegSb9PL8mu3dp2I%2Bst2Bl%2BKoyDgqTYqNPF47nSA5bj6iFQwIHuapHG7tlqWXCMvIZf%2BcobBCTB%2B1DbPtVy4b1iYeuclrlX1NKwZ9azS7pV%2BWjdzoAa3k7rpSSCxYVWst2ojjeRIoAJjJt1yV%2FoFWoY74Xw%2B4BHJtDJA6XdeBBmdgQJ5kT%2FilYVcAp4tlUPDc2miXCntlxJ76VJuvpSMK5CEZWeegRPMLDlRSvE2CbMwuZYddSB7%2Foee%2BGZXMXY7zt3GswJze80bFiGOOtA6JON6732qJslciAo6Bd4W4s7Z%2BPnI3gm4X57NPshJOQKLigSk5mZPRJLb2fXdt2qgWkd1BGMPbiub8GOqUB4cL4Ug0iUUkYgk5tFXGn4SY4D42h19J29wWZZCMWqk8ZV4PC1V7QtmvjsL6ZX8QEBhqodjm1azDwXs9xSJcP0MwdvxOHbDAX0Y28cIb0ZOsHw%2BFPbIux7AV8S3RKCYRiDKGX5xRc6bIP1kp9R8o5SRRa9gWdZ0kK%2FXqHBWIAZ%2BluYUVxrkKjKnNqvcyIYKAArcpuVgRikrKE00BdnXAwRmmvpgOU&X-Amz-Signature=71bd8c945a189c9df29aa42d4dae08b6ba21632939e4036dbb60c4775ce49148&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWZO3BYY%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF6dIKCTbmGtx9M8sU8OyHgKZ4Wf2mRg%2BXb8mU07BoiNAiEAqQ%2B%2Fmbtc3hNMxGAkiyJ23kpCDbWGW4MvdTFMdS854BcqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxMRh%2FFwre9doHG6SrcAwFl1GdEmrUce2DYFJMS249HjuRW7PzhqfPGd77IKnTRvwkPcoTDY9usWUcD2A0G5HO9ebRJ1og%2FwxplFJEoUMyCIWRCLSWlWurdae0xHF6epVSZLXFpmVeKSMBTrNiJZdBQao9AjanvEYHRDlREtje2Gz6uNZkaNTj6BOJdR%2FW4EuXoB%2F12TwFi36g7Xg3kLEY%2Fs6BZDzg9CKOAWdq8Drf0JyRRUiUjZEQi9e4yX4rc3AQPfbvxgDao835HLypx39Jo28pzDR7k1opmfncGRFDoaHD6uTvFLt6sKlR%2FNbKO6De9K5eKLgewn0SSgcQR2ohqxySyQE0XvJXyZFF1zZ25%2FLpQxrudC2anvwArOXe38CPopoI79FJ4bwbNjKfRkC0%2F6PXPKibEa27%2Fs%2F1XyUOA2xqbO1q49WYJTH%2FAmTTRTgj9q7%2FT3G%2BxIoyqeoX%2BJCIxb0nqcX3t47qX1fTmKsoQSjD3t1Tl10rU658eRHgluPqolpHQF4BJe8zL6%2FGxoX%2FPhO8bYyWlHUlJU3o4ZCk5P4Yn3l%2B%2FUuqksCHcG1WHXFVtMSMifptBLTmsE6kG76SVHw2V8AX5ArN0BQShvy6%2Fvezar6bJ%2BWV%2Fw1XdZJqIhebCp8GgcrpqUSoOMIrkub8GOqUByatSlBToAPm0fjxxjekAauDhhWStzwFhuQWGg7slBXA4XWWmP1X40pDMx%2BMPEA36MTYjwSnum6aJd3IHQT23Jlu5MzNP3FUg3f9bME1oW5%2FyWCLQYJTjRbSuEMED6HnGrcQeabbY2z8vhzARQnVUrmEnpZ4Zq%2FaaZm5%2FJPedB4U0rrPKW%2B6k7TkwPFCXXiVgCQaMbQ9Z50JfU7FLLeINZh7oSUrT&X-Amz-Signature=c32a91c7d23dfaa179c7f1275defd452c6914a3346f26d79dc5763a3e3528883&X-Amz-SignedHeaders=host&x-id=GetObject)

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
