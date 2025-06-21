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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKWUVNJL%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKdOVTEQcxHmc1YkBEyrZBz7sF0H7xd0fRDDIj56j06QIgcG1Fnc9EcaQSOvApf6Ym42JPe73XQQ1ZbYKyBC2Ljh0qiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZ1PbYZ4oerlomCdCrcAzYn9swliX9DZ3LV2HM5eeuU0dM2KDKsDZs5%2F9gOeuHWPah9TWQXPzvrrQQN14jEfigYlq8aLyCAaZ0HrQY1nNhgYsetJCqim9k1hkVi1AhljtR61pxyXaFFAFJG3KWWMelOs14TvOH%2BrGMyJvm9Llhc0RjId0PAcHTopdZf0lrHWpownKLq7Loj9Hc68RNTz4dYrioU5qbiSQjorNLl29anNEKwKzSU%2FREoUL%2FHxK0e%2BFJ7RATIkvkehzxnhTzp8CpnUINVNlw%2FDwKWdZxb4xcHZrxYJy1ut1tuO6wYHxzTrhJatnt7Ptu3Q3qv6Na6cHJRbKu6JTn%2BBVc79c5xRVV06st9uY0aZzy%2F%2BctxEECyCzb4sNPoGmwbylQEGKAuJkVwv7HplBKS1it7R67jSqvmtzrioTGC8l%2FLgbOMKYuf2d1HEkBHLsr%2BPCUw9pdq5ifB7o%2BXVUW7TAbV9StuvmIor1xRRuUZSS4myJXnFAmv0PaTPXdk0ubiQwbML6DIygZd7ZZiEy6P2A7%2BwR7mn1HJjDIOql3BXpiPSzp53jLUWlqzTajbVCTfIOUmHoR%2FedBE7YHMiFvg8IPr2C4Pu64ZQ4jZvUBYy%2BJ0tCEEKR5d0rc2%2BiGCRof0HfTRMLuz3MIGOqUB1HzBdknZjKa0byt5U7A4n%2BnDkyQrSd54yrYJhLVkFfK%2BP%2F3j7NTw9aD2dnTVH5rx2NSHr1N3EyzEeB2XOZB1RGvYAcywoOuV4jNNBU9VdZl8L%2F4M%2BeyAaUgVrv63QwDA6%2FvPpaOc8G39AeCYo4xGnD4V0yLnPaTNYeqPxyy1F3ELOV1qHg5cRC1UFIoAOYj8vTD0NpiwjBTObTudtdWoIxS7jTIY&X-Amz-Signature=5fcc463231370d2d7eae57648ace7c97fdfdcb5b6e2a5000d08f9aa16590e5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NO3VDI%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxCGUA7WeE4NwEy7JsF3v4BXEnlDzXSzPfh02mJS7yUCIAxzwdzF8MzJk16Ma33j%2BeYJXbLBbIlju4tYJydXaj%2BnKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxyLS8YaRoukag81kq3ANssI9B6Ls2Yy%2B3J27PRe3i56EZBspo3T59BckVtHjfC35WRc6xCnDxyh%2BcILcvhAXG%2FDltvzp%2BGhvLRBFB9vvj6ryR9NkqI8qAMmWaMt%2Bqn5LrCLwJblfjGUfJV%2Fr93%2BrDdLp1sco2xCmXLD6nBRjk%2BUohKhNpEbvfdrlOzZUQNVuevcs8GBy9Es0avuwkic98BLMKmAKW%2FJ0ZpUCXDRkZYq8KmFFaIJOLTBuWsg0jx3hRLSL0SWnwV0OL3RYjaaPt4h0SpIJPU70O4E90wHz0F5dpLeFfMRwbJT73lVYm8NvTmfFz4dnHKlg%2Bd6Jtfk61NgdZ%2BUQWCnJ0vrnCt5FHh9SB%2FJdYKd8CaG2Dp7cBMzK%2B9pr%2FCuN2KJkEmJKQBX93jBShJC9SHdAAuP8kBdoEmaxZzCpfjxPnUB%2BJJISAdLTYYEyngj9gz68o7IqasdIT2I3sEFPac4t48hp0dqMBy88dtLafYJOLKhOU84qvHNbXRs%2BG0XrRaRaDdkXGBPcUEwYMqHt1itWQfUZU42RhQel%2FBW8vb7fNUaFLOXC9klKlwrSKIHuLiWyWnUwrGaZIOR9cT9zyf908y8tnq4VfVcdSn4mZJz3PfPGgBfH%2FJ3ITluYScZ21gs%2Bx%2BDCAsNzCBjqnAfyoE5co%2FZoFuGY8ZlKZyVOsSFN7nGJ%2B7fr7nKNFk021ILCCdvhnVFYFJaidyaYGb%2Fns3WXspA7QyNrWLUWIOyksiF7xhRwA%2BMwmliU2ZLEv9APLUpUBVX6acLLUWPT%2F96rj8LqJle93kZuLNQHbriOnYzdGUGJEUwzyao4GL57WoMIBu%2B91Lw5TT0d3BylHRjUU%2F%2BJMYTFoTv7L3R40mhYhufQFvC5B&X-Amz-Signature=e6972bbf5902d0d1c01059c5485a9a02027b9ac61d14e30d3aa8ddca53cfcbb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
