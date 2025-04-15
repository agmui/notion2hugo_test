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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU7A644%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FmHsVcAysAPDLe6Bn0QESmFaJ1fdkNby8V5u1s7vErAIhAMvhWwZCfNqUEQynd7cTpOwaGDCcY7AnBsZ25T16mFaSKv8DCCIQABoMNjM3NDIzMTgzODA1Igxf04uz5xEgXLP1JLYq3APEjv2EAZlNj2mNa%2Bsrxp8pq440iSv1qVAvOWvWCGAGypO9T6zuwVzc7fO5S3kqZ%2F1y3aSW3aSgaO%2BGv3GDX4Rp52ofY4cWIvg1fqmzmTZ7N8H3EFK%2BY4dChpV7b4vxKzMZmyN1REtasGN3ZcSrldQmWPX3hMgAvWud33XgevZ%2F9ZF9ZUkcKFNqpeinO9%2F%2BtM1m1oJEQKgQNK%2Bpi7RudEGfYRYGEJzRbwrWbOiAQxliTKj05xWEOMFyfcy2b%2FdIVFWW5QmaHG59ddLmuvIQmwQHdYqvPPGQ5QUAYKm5F1svgRm9Okb6fF7OzafsYBMmS3OiQLcrf8dB%2FlNOROVsFNcSugU1RIlSwuf8I9WaWmC3ZUXy5qx%2Fw9ugWDF1iKwyx7WQSNTFKfIOd5pu7FjH%2BdKvNYTd6zk2CsAUbr3nTRMS7cS8j40oP4%2Fq8xCvSioI%2FNT%2FQwbmg2YnMPKdbsC%2FfdWfrS%2B8Qcwhi9OzTVn5JmNWCvjnJjNtkQZv0Rg6jaUoRv1WxR7Vrva8hhbre06VrF%2BIUZBv%2F%2BqrjgdvQrxVVKfY1CSjJabMtc8t%2FTekmCaBfeTn%2BLF34PJ3qWB6TjfA8T2gPC5ySJfvnlDwTXHj00vIbqv0rTYgNRlB77989zD20fa%2FBjqkAdsyfk7kmUzr%2Fy0tg2HI6KEfa80yOErCT0lZAU93OspWfx8kkuOABFLFYSjqrzHUsnNCtUQ8TosH9FPs%2FGf7ItnmkqvLFy4huRwPy6foh7xK5YDKmYUJFqKCBJmgPhmknsG6Y3MNu3UddapQETDhVzAGy0ugJZZ%2FLD6d60oPpaBioplKOmHau7Lft2FriuAmRHno51LT6FtZa2A%2BmUZFLH%2FpUpus&X-Amz-Signature=e2ec15a52aea1fedf75aea8f06dd29b2b338b3bf4a6fa9654944f0725e4471f2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQU43MP%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T004026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM2c%2BWOjNChmLLrOAw033yM1PThFn%2Fsu5VB2lVLYLHeQIgAgJWeABaNDLq76iHh5u1IN9Aro8ZsWBwxsg6bEKyXnQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJFTK2lEh3nNfuOBFircA9objSuMj0e1J1ad7ZrcBkirrs8QqymL4%2FVqjSozSMSHLW2VI971RrqQsF1%2B9Sv2eX9Cs578lVAeJDxRO%2B%2FbAcitQ5F6zxY4KrMkD4Z3c6sKxw3srsEHD0t4z4Dv6xEjWID0Nn3ZggIXvIvfJQ%2BuT8arvpEs8sEBXtSSG6XfbPwY%2BuT8uwkplz%2FSCpvSN%2FRIILtOqFA4sC7%2B0lMxu3%2F6xpbFXtKVv8qaBs4HI%2FZAO7NxIPG4hxWhvcV6s%2B5cfChgwcJ5u3PP3%2BpF%2FSNUSuIUAGg%2BwkXDCEvgs%2BqlygfnkOja0mCGLCzYaSeDSJUpGBUF9yUZVsFgOppnoT7ZEtbmhzRUbB9jeIzLzzmr7SOqu9XzxHLBAfYlCXLjDeYEGHQzGA3iQIEBmpnJH9uPf9i87L4URBFQxaUrllI0CXRj1v%2BQxIYUHPp6%2FUd4%2B6Lszd9I9xwTDgwnRDV0uLYHuolE7ORAmgwQSMn0LTlg8cLrHJDPTNrfzTrOsg5XlsixCszflhWCCqv5ZpMwWY4hutlgStfkjKsgDLokgcYU7xe13mgdeC7sWqSoM9kvhJ6utXx41JjTdryNC0tMxexmGwRtaTyclTibNrxcHjp%2FknVsztdqTwDnKB4FLlkr7yXgMPjR9r8GOqUBHSDR%2FQvDbkxJ77u2JgwFos0dBThEHtbU6hihlyKoYdks2ROkHqp6pF5teP9wfLa6%2B%2BMYjj206POA648HQY9Eay7FTr39ifJVEh6CCYGWf57%2F2wlpgPNHbffubmBmVya9ioZYZMKvUnkQT4NQQWR82wIjVsg%2F98sSMlCHglaEton4xOk%2F86PL50mkkv9ruqXDtZ0lzmzw6k%2B0zu7koNV%2FxnCBns0Z&X-Amz-Signature=0912d35d03fc090554464d29ad0306f32c459e76ebb977b430fa278640dbb15d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
