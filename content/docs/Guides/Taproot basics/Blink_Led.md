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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPHBYJ2J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDur3EDViLwQldACBotgUB0kIob21KeaJ7IivDPtqzHcAIgVrUW16u0dbUcLenTnvZGioEhf4K6wP64Prd6s6WVsYQq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDFDxNT12oXwlYthlHSrcAwot5%2F4CEQhdWt7BNAWCORxnXtfW88YeusjFopRh2KtwPnGAqhFvDTYmkjdPAgXZSKbX%2Ft3q2%2BhJOU1KxuttBGiVwVFkliMnWrxwMU9C%2F1%2FJk%2FHmMQHPZqG%2Fw7%2F9z85szB5TPoRXJgPh5Avysm9OZ8WCMpEG%2Bnk0ltniJdWoXzEjH3MB1HI3GAiV7SuC4lhLbEmIYzemGilRQTQOJWWp7ZNpXOBE5PDQRfQHIRwXQqPJSfXeQqHjYmt4pKEp5TsoS9TdF9qhbF%2FTsUPtdLw7U8%2ByRxoh3mMhLhDJGRt8KDtzRwLFZNyuik46sGp9e7RVLGSMZLVievlq4jpYWkrFoDDy4OIODoQLxBNecgY1GrrljRnDT%2FPjfiq56FnqyI2wxC7WhfgX6RvWQ%2BbO4LBaTcs%2F6zYTl%2B7JBuaycFkBefm2sEGywSWQaxni3oT7HKfEfMsDrjY9%2FlkBAsTKcMknGLtzgjKIidXGXuuItgjGE3B0iHjFEO7MsSnLjxN5Qc%2BzktkOcqZPp7gN7VoapUnTc5dlRjEuOm90UwNDREa3bKAgUCgv571ZsSxtlXEKdQXcTegMvwCjx5h2oHPhP3XdkUXPuraFOf4G%2Fbfgha%2FGyF0nUyesDCEc6QjhMPvQMNXPk8EGOqUBWCROflZ7PpqKx7wwNDkqBz53yHaXPQqj127R7IuMK%2Bd%2B8yFt9DrEhJak6mZcwxLRWDMjz2o8Wv9AWqfiM56sVX9OhdJEQrQpUDjVIIw0C8%2BpvVwpGfC5mQdZqzBkyy3VFerhaj38OEeuSUrbsgDs2aR5NLMvVuGOa9ZRT6hrxBujI23RWotZ7YlTQQ7zYYmFwb5B%2B89wZgf%2FHVPetV%2F0%2BNiY6i3T&X-Amz-Signature=a6eda9ef0c78138c4686797b4f2f84e168039b9b8c4d7e03dc66c4c9f484fbd5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWCR2L5J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T210108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCHOVcUnEn%2FSjz5b1MZbm5o155qd%2FNLj1BUr8mWqWyhXQIhAKrrPlA3dX7wLhQcfXaOscy%2FZomSbevhVtlzn%2Bkws3FUKv8DCBwQABoMNjM3NDIzMTgzODA1IgxSj8slKxWQ7aSLlqQq3AMQbrHvb7wCQeM9lbXk0%2F%2BDa4e8c9L4bVvb48vBONP3AY2RatC1JDGesqC8OiGjjYSyncBtfzs%2B6rIkDZ5DCmpZPUvaEPVMLR9CiHGRgYFKzS1pjgEBgFs6SjgWbFEVkmNLwpnamKtBeCRYMM%2FfUUJu7N1sxvURRGER3E3u1sbKzb5h8IWK0IXvqCIIKO9Yaxs0lBgM6U6yrrADSplzyGH8uC6uDrRJP%2Fe4pHNMO4qC4LTQNZ4Jy8x5IINnOmik9GRfsxdQFR3vHKLvtrhkBdIC%2F951mJarfGTqcdgrxL4HcBV6JBaVF5NEfZc%2F9Z1A%2FuoP5u0mEFRc%2FGs0Mop4h7EndkTujVU6eVDzwNGPB5kMGjE4qozr214onO26DzKzFPQgTUJLg%2F9K3g0u%2FfWW%2FlOjjzTbzO2%2FrJz5PpAVXwWETZIxJP%2FPR%2FeP5F9Kn0Aexr7huUOoARRh8g6sVpqkrYZdRtK2mfF4BwIUxBXNJGbi2kzKum54ezIvvfo8azhcOwX67c8niUp1UVG%2BXdnC4mtPmlbhOvokg6b%2FKBV8EOLiqnntScvQNoVpjLGgly72w0t9oosePuosHEfP8%2F62n%2BGUWyjKc3EmF4KsBRxc8hZqLadsu7VIWGmKbxugmTC6z5PBBjqkAYxkx7bQTrh1IodVpqGvQzTriMcEJtajUP%2BMGdUBdBERIDX9NyakoWPWW9DoWqpYSoAIlRwlJRUbrii9OoeTu%2BVrnoYIMaTbCwv2MKyNen4h6pxIYhDUgiQdu%2BILhJPU5ttCj6wjvOuO4bDimLN4toIXF9tAj6ik7lJ3L%2Bztv29jHfg%2BFUtSICYKcnp7fpyIhmAo%2F7tHGGqoerni8yGefJf41v4t&X-Amz-Signature=e8f0052293942da5a26b9058a8f6c0cad49f2def70bff322ec08fddd6923d8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

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
