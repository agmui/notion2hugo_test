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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KFGJFNP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4rNGgpCYF7%2Bn2ynQH405EUO7nuyFhV5gO9zDWSL%2B7GAiEAsd2oXGdftuJyIiFQP6BIINLlB427AZbMrFq8nhZl7MkqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAIGy50Od3TYWaj8ircA82xo9SZxoWPvl49RscWjNlaUY9RjQ9GPByzu7UfBBIqTqBn%2FkONzuZv3egwZCjvXLbtTYop95HRnbvcJMxwm2LU48FHuT4QhtaNmHifaFCkQ5634VtgYfzoMk%2BW06tcKuNUr3%2FzfHW8Dicpre5pMbWFZvZMJDQKxIXu4ocYcAUNmY8ZcXNBz7XLBS%2F0hvK%2BAd%2F%2BtKnyuMGm%2F9N9nfFQTn%2BPvUR%2BisvZmc73p7gHuLsN7gda4qZdtoaIzqXmrbENg4rxliySAoDwrlc8QfX1j3NVKJkWJ%2BGadTxREtSio8ZHdqQ64W9zummEZ6q%2Blu98HW7awGZ6bXT1nXHodB7cklc5HyXculnvUuQu%2FVpgqDUzd2CXn%2BHC0beMx9OmjxrXdQ5js6saJlSEWTq%2FnNDQjXDAh6ZU7laNqkUuh%2FwwI0uCYJ7VtYkX2sPT6Eewb%2FZBjaJUOHV5mlVduPIgK4JGuOcaWhnJe8zzBO9rfVMQctL0jeUnRQMvezw32fx6nnoXKaEihXpD1YiYE%2FcoGjUDrhBgzdjep%2Bjm9FM45RSOlwBO19ktrCBMW3a6NQ9vgA2YWkTR4SSXtX%2BgLm5CxyKVEbA75AyL%2B0ZAz42vyf5pXNLluRsQjVPOTvHy1q9%2BMNXPvMMGOqUB%2FwNSjEml0jGOS2%2BZwYvAuOtDsARzpSKEyNm08S8qAxUs6EOTYot9pZe%2BgZtqjU8nCURop%2B62d1QrW5mIVnswiuLWBR0EtDz1RQq60nVzd%2BsXtAYc3u7k422fM8YndDGHUikK%2BB2vt8jTPxqAOdzhcWFrBDW%2FEjh6mohpsUTrNi7YNnyBgP7kdG8hsxJBXiJdAQfuHvfUv1X8935o%2BjF56BjGyx6m&X-Amz-Signature=cbdb2e32cf803d18ff71edc7abf2b19771f160dd581c399ecf2f77b46af58eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKAM52O%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH%2FwrRlHJZhDkbMpeaImEadCbxzkjUWtMEAlo0renQUQIhAM93fL7%2Fu04Ait2kIhoFep%2B2yCXDGfLBj8f3muXr7g7YKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxAe4RJkkvZu%2BJypKEq3ANsjrg%2F6LyaBZssa9g978SY0LoO82XGIqi6c%2BUYwtYduvG2myXK32HZ6FAlSl6se3vvlvlZy1J%2B5tWUgqxrUoT6440Nrp0X03wvJ5qqAImXEhRKOoVqstETzrWqfffvREvGWjJq23ZKteOxtFAS5FOV7kBOXVQCIcwbZ1MbrlLJGH6YB5nN3ZKdvI2mTeqWtPOpA6nQwQg6iLSMnsT15mH5pktXTJ7ddDTGDQOt7wiXYUnLCp6Gq0R%2BQdYNY%2F0ED%2BGHcXAHI8pCfRv8ctswsjISW%2Fe6Yc6Yo9htnytuhOQ0bU1opWG4NOlbmri21FZMUFoURi5bf5kFsdqKSy08wjxUx8KK9fW3IQzNXWN9Zp5SZD8hVoIhxhBaUNWMDSZsRo1hAxPNHg4ZCUDW4F%2FYLlp32Bhllp7SuolksiW6V9YE0tckEiNixYZD0i5gvAD%2F5DCyoarr6wRtoYVWAY6ahQ5hD35FyfLrGWyZWR9AFFYAtVmK8YahEzmU5LreSVNOE2JX5V6c3CLQB7DjHTdg3BATzsh2V2b8c0nzZHq5f%2BRcGUR06QRBm70lVvvXUFudbNWX1USkw6pY%2ByqRj1Rg4MlMUyBeVMi9ahGnw5j9U0XoATmlGnHhEB8kOISxuDDeobzDBjqkAXjTBDEyerlJoaBIoYLVus90Sy5MjEu3QvrfYn26bnQC9rpcYoCGkeV%2F9e4NAJmzMC984UX9e575UQL8y0D%2FPdDspP58BO%2FRJ19OKisQYT0Hqc1nba3IDk7RXudK82amD8v8%2BujKY1A5PW3hYXa81yd0i1%2F6H5opWo0%2FGB0wgd%2F5Mm7%2BkwLas2Cuzbyw7bXRC1MdcC8KoOg8cs6ew%2FxnS6rmhC%2B5&X-Amz-Signature=e5574a7e4b427e8b6ef8ef466cca29e1bfed9d0282a263da78186ae1c4811a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
